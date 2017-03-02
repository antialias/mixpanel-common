import expect from 'expect.js';

import {
  pluralize,
  sorted,
  sum,
  truncateMiddle,
  unique,

  immutableSplice,
  removeByIndex,
  removeByValue,
  replaceByIndex,
  insertAtIndex,

  nestedObjectRolling,

  truncateToElement,
  binarySearch,
  truncateToWidth
} from '../../lib/util';

describe('pluralize()', function() {
  it('defaults to adding s', function() {
    expect(pluralize('day', 3)).to.equal('days');
  });

  it('does not pluralize singulars', function() {
    expect(pluralize('wombat', 1)).to.equal('wombat');
  });

  it('pluralizes 0 of something', function() {
    expect(pluralize('helicopter', 0)).to.equal('helicopters');
  });

  it('uses third argument to pluralize', function() {
    expect(pluralize('die', 4, 'dice')).to.equal('dice');
  });
});

describe('sorted()', function() {
  it('defaults to normal ascending sort() behavior', function() {
    expect(sorted([5, 2, 4, 1])).to.eql([1, 2, 4, 5]);
  });

  it('does not mutate its array argument', function() {
    const arr = [5, 2, 4, 1];
    expect(sorted(arr)).to.eql([1, 2, 4, 5]);
    expect(arr).to.eql([5, 2, 4, 1]);
  });

  it('sorts strings', function() {
    expect(sorted(['a', 'zzz', 'moo'])).to.eql(['a', 'moo', 'zzz']);
  });

  it('can sort descending', function() {
    expect(sorted(['a', 'zzz', 'moo'], {order: 'desc'})).to.eql(['zzz', 'moo', 'a']);
  });

  it('can sort based on a given transformation', function() {
    expect(JSON.stringify(sorted([{a: 5}, {a: 2}, {a: 3}], {
      transform: o => o.a,
    }))).to.eql(JSON.stringify([{a: 2}, {a: 3}, {a: 5}]));
  });

  it('can convert strings to lowercase before sorting', function() {
    expect(sorted(['zzz', 'a', 'MOO'], {lowercase: true}))
      .to.eql(['a', 'MOO', 'zzz']);
  });

  it('can properly sort numeric strings', function() {
    expect(sorted(['9.876', '11', '000', '-12,000'], {orderNumDateAlpha: true}))
      .to.eql(['-12,000', '000', '9.876', '11']);
  });

  it('can properly sort numbers', function() {
    expect(sorted([9.876, 11, 0, -12000], {orderNumDateAlpha: true}))
      .to.eql([-12000, 0, 9.876, 11]);
  });

  it('can properly sort date strings', function() {
    expect(sorted(['12/31/16', 'January 8th, 2000', '4-1-15'], {orderNumDateAlpha: true}))
      .to.eql(['January 8th, 2000', '4-1-15', '12/31/16']);
  });

  it('can properly sort iso date strings', function() {
    expect(sorted(['2016-12-31', '2000-08-01', '2015-04-01'], {
      orderNumDateAlpha: true,
      parseDateConfig: {iso: true},
    })).to.eql(['2000-08-01', '2015-04-01', '2016-12-31']);
  });
});

describe('sum()', function() {
  it('adds all array members together', function() {
    expect(sum([5, 10, 20])).to.equal(35);
  });

  it('returns 0 for empty arrays', function() {
    expect(sum([])).to.equal(0);
  });

  it('works for array-like non-array objects', function() {
    expect(sum({length: 2, 0: 15, 1: 3})).to.equal(18);
  });
});

describe('truncateMiddle()', function() {
  it('works when string.length is len+1', function() {
    expect(truncateMiddle('frogs', 4)).to.eql('f...');
  })

  it('only truncates if necessary', function() {
    expect(truncateMiddle('mixpanel', 8)).to.eql('mixpanel');
  });

  it('truncates intelligently if length is small', function() {
    expect(truncateMiddle('mixpanel', 2)).to.eql('mi');
  });

  it('returns empty string if length is 0', function() {
    expect(truncateMiddle('mixpanel', 0)).to.eql('');
  });

  it('truncates in middle of long text', function() {
    const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    expect(truncateMiddle(loremIpsum, 20)).to.eql('Lorem ips...laborum.');
    expect(truncateMiddle(loremIpsum, 12).length).to.eql(12);
  });

  it('handles newlines and whitespace well', function() {
    const whiteSpace = 'Lorem \n ipsum \t dolor \r sit \w amet,';
    expect(truncateMiddle(whiteSpace, 17).length).to.eql(17);
  });
});

describe('immutableSplice()', function() {
  it('removes items by positive index', function() {
    expect(immutableSplice(['a', 'b', 'c', 'd', 'e'], 1, 2)).to.eql(['a', 'd', 'e']);
  });

  it('removes items by negative index', function() {
    expect(immutableSplice(['a', 'b', 'c', 'd', 'e'], -3, 2)).to.eql(['a', 'b', 'e']);
  });

  it('inserts items by positive index', function() {
    expect(immutableSplice(['a', 'b', 'c', 'd', 'e'], 1, 1, '$', '*')).to.eql(['a', '$', '*', 'c', 'd', 'e']);
  });

  it('inserts items by negative index', function() {
    expect(immutableSplice(['a', 'b', 'c', 'd', 'e'], -3, 1, '$', '*')).to.eql(['a', 'b', '$', '*', 'd', 'e']);
  });

  it('behaves the same way as Array.prototype.splice when removing', function() {
    let expected, actual;

    for (let start = -3; start < 3; start++) {
      for (let deleteCount = -3; deleteCount < 3; deleteCount++) {
        expected = new Array(5).fill(5);
        actual = expected.slice(0);

        expected.splice(start, deleteCount);
        actual = immutableSplice(actual, start, deleteCount);

        expect(actual).to.eql(expected);
      }
    }
  });

  it('behaves the same way as Array.prototype.splice when inserting', function() {
    let expected, actual, items;

    for (let start = -3; start < 3; start++) {
      for (let deleteCount = -3; deleteCount < 3; deleteCount++) {
        for (let item = -3; item < 3; item++) {
          for (let itemCount = 1; itemCount < 3; itemCount++) {
            expected = new Array(5).fill(5);
            actual = expected.slice(0);
            items = new Array(itemCount).fill(item);

            Array.prototype.splice.apply(expected, [start, deleteCount, ...items]);
            actual = immutableSplice.apply(null, [actual, start, deleteCount, ...items]);

            expect(actual).to.eql(expected);
          }
        }
      }
    }
  });
});

describe('removeByIndex()', function() {
  it('removes items by positive index', function() {
    expect(removeByIndex(['a', 'b', 'c', 'd', 'e'], 2)).to.eql(['a','b','d','e']);
  });

  it('removes items by negative index', function() {
    expect(removeByIndex(['a', 'b', 'c', 'd', 'e'], -2)).to.eql(['a','b','c','e']);
  });

  it('throws an exception if index is out of range', function() {
    expect(() => removeByIndex(['a', 'b', 'c', 'd', 'e'], 10)).to.throwException(/IndexError/);
    expect(() => removeByIndex(['a', 'b', 'c', 'd', 'e'], -10)).to.throwException(/IndexError/);
  });
});

describe('removeByValue()', function() {
  it('removes items by value', function() {
    expect(removeByValue(['a', 'b', 'c', 'd', 'e'], 'c')).to.eql(['a', 'b', 'd', 'e']);
  });

  it('throws an exception if value is not present in array', function() {
    expect(() => removeByValue(['a', 'b', 'c', 'd', 'e'], '$')).to.throwException(/ValueError/);
  });
});

describe('replaceByIndex()', function() {
  it('replaces items by positive index', function() {
    expect(replaceByIndex(['a', 'b', 'c', 'd', 'e'], 2, '$')).to.eql(['a', 'b', '$', 'd', 'e']);
  });

  it('replaces items by negative index', function() {
    expect(replaceByIndex(['a', 'b', 'c', 'd', 'e'], -2, '$')).to.eql(['a', 'b', 'c', '$', 'e']);
  });

  it('throws an exception if index is out of range', function() {
    expect(() => replaceByIndex(['a', 'b', 'c', 'd', 'e'], 10, '$')).to.throwException(/IndexError/);
    expect(() => replaceByIndex(['a', 'b', 'c', 'd', 'e'], -10, '$')).to.throwException(/IndexError/);
  });
});

describe('insertAtIndex()', function() {
  it('inserts items by positive index', function() {
    expect(insertAtIndex(['a', 'b', 'c', 'd', 'e'], 2, '$')).to.eql(['a', 'b', '$', 'c', 'd', 'e']);
  });

  it('inserts items by negative index', function() {
    expect(insertAtIndex(['a', 'b', 'c', 'd', 'e'], -2, '$')).to.eql(['a', 'b', 'c', '$', 'd', 'e']);
  });

  it('throws an exception if index is out of range', function() {
    expect(() => insertAtIndex(['a', 'b', 'c', 'd', 'e'], 10, '$')).to.throwException(/IndexError/);
    expect(() => insertAtIndex(['a', 'b', 'c', 'd', 'e'], -10, '$')).to.throwException(/IndexError/);
  });

  it('appends item if given index === array.length', function() {
    const array = ['a', 'b', 'c', 'd', 'e'];
    expect(insertAtIndex(array, array.length, '$')).to.eql(['a', 'b', 'c', 'd', 'e', '$']);
  });
});

describe('unique()', function() {
  it('removes duplicate items from an array', function() {
    expect(unique([1, 2, 2, 3, 4, 4, 4, 5])).to.eql([1, 2, 3, 4, 5]);
  });

  it('does not modify the original array', function() {
    let array = [1, 2, 2, 3, 4, 4, 4, 5];
    unique(array);
    expect(array).to.eql([1, 2, 2, 3, 4, 4, 4, 5]);
  });

  it('works with an empty array', function() {
    expect(unique([])).to.eql([]);
  });

  it('removes duplicates of non-array/object types', function() {
    expect(unique([
      0, 0, -1, -1, 'abc', 'abc', null, null, undefined, undefined,
    ])).to.eql([0, -1, 'abc', null, undefined]);
  });

  it('throws an exception for non-array inputs', function() {
    [1, 'abc', {}, null, undefined].forEach(input =>
      expect(() => unique(input)).to.throwException()
    );
  });

  context('when no hash function is provided', function() {
    it('does not remove duplicate arrays or objects', function() {
      expect(unique([
        [], [], {}, {}, [1, 2, 3], [1, 2, 3], {a: 1}, {a: 1},
      ])).to.eql([
        [], [], {}, {}, [1, 2, 3], [1, 2, 3], {a: 1}, {a: 1},
      ]);
    });
  });

  context('when a hash function is provided', function() {
    const getHashFunc = keys =>
      obj => keys.map(key => obj[key]).join(':');

    it('removes duplicate objects from an array', function() {
      const hash = getHashFunc(['a', 'b']);
      expect(unique([
        {a: 1, b: 2}, {a: 1, b: 4}, {a: 1, b: 2},
      ], {hash})).to.eql([
        {a: 1, b: 2}, {a: 1, b: 4},
      ]);
    });

    it('removes duplicate arrays from an array', function() {
      const hash = getHashFunc([1, 3]);
      expect(unique([
        [1, 2, 3, 4, 5], [1, 3, 4, 2, 5], [2, 2, 4, 4 ,5],
      ], {hash})).to.eql([
        [1, 2, 3, 4, 5], [1, 3, 4, 2, 5],
      ]);
    });

    it('removes duplicates of objects containing all types', function() {
      const hash = getHashFunc(['a', 'b']);
      expect(unique([
        {a: 1, b: 'abc'}, {a: 1, b: 'abc'}, {a: null, b: undefined}, {a: null, b: undefined}, {a: [], b: {}}, {a: [], b: {}},
      ], {hash})).to.eql([
        {a: 1, b: 'abc'}, {a: null, b: undefined}, {a: [], b: {}},
      ]);
    });
  });
});

const timeseriesResultObj = {
  US: {
    '2016-06-01': 8,
    '2016-06-02': 2,
    '2016-06-03': 2,
    '2016-06-04': 8,
    '2016-06-05': 14,
  },
  Canada: {
    '2016-06-01': 6,
    '2016-06-02': 3,
    '2016-06-03': 3,
    '2016-06-04': 12,
    '2016-06-05': 6,
  },
};

describe('nestedObjectRolling', function() {
  it('supports rolling average on the leaf nodes without enought data for a window', function() {
    const arr = nestedObjectRolling(timeseriesResultObj, 7);
    expect(arr).to.eql({
      US: {
        '2016-06-01': 8,
        '2016-06-02': 5,
        '2016-06-03': 4,
        '2016-06-04': 5,
        '2016-06-05': 6.8,
      },
      Canada: {
        '2016-06-01': 6,
        '2016-06-02': 4.5,
        '2016-06-03': 4,
        '2016-06-04': 6,
        '2016-06-05': 6,
      },
    });
  });

  it('supports rolling average on the leaf nodes with more data than a window', function() {
    const arr = nestedObjectRolling(timeseriesResultObj, 3);
    expect(arr).to.eql({
      US: {
        '2016-06-01': 8,
        '2016-06-02': 5,
        '2016-06-03': 4,
        '2016-06-04': 4,
        '2016-06-05': 8,
      },
      Canada: {
        '2016-06-01': 6,
        '2016-06-02': 4.5,
        '2016-06-03': 4,
        '2016-06-04': 6,
        '2016-06-05': 7,
      },
    });
  });
});

describe('binarySearch', function() {
  it('finds the first positive value in a range', function() {
    expect(binarySearch(0, 50, n => n - 10)).to.eql(10);
  });
});

describe('truncateToWidth', function() {
  it('finds the largest truncation which fits in the given space and font', function() {
    expect(truncateToWidth('abcdefghijklmnopqrstuvwxyz', '12px Arial', 35)).to.eql('ab...z')
    expect(truncateToWidth('abcdefghijklmnopqrstuvwxyz', '12px Arial', 25)).to.eql('a...z')
    expect(truncateToWidth('abcdefghijklmnopqrstuvwxyz', '22px Arial', 35)).to.eql('ab')
  });
});

describe('truncateToElement', function() {
  it('finds the largest truncation which fits in the given element, taking account of font / padding', function() {
    var elem = document.createElement('div');
    document.body.appendChild(elem);
    elem.style.width = '35px';
    elem.style.font = '12px Arial';
    elem.style.padding = '0px';
    expect(truncateToElement('abcdefghijklmnopqrstuvwxyz', elem)).to.eql('ab...z')
    elem.style.padding = '10px';
    expect(truncateToElement('abcdefghijklmnopqrstuvwxyz', elem)).to.eql('ab...z')
    document.body.removeChild(elem);
  });
});
