/**
 * Convert a full name to a maximum of 2 capitalized initials.
 * @param {string} name - full name to convert
 * @returns {string} 0-2 capitalized initials from name
 * @example
 * nameToInitials(`Darth Thelonius Vader`);
 * // `DV`
 */
export function nameToInitials(name) {
  if (!name) {
    return ``;
  }

  // return a maximum of 2 initials for a user
  const initials = name.split(` `).map(s => s[0]).join(``).toUpperCase();
  return initials.length > 2 ? initials[0] + initials.slice(-1) : initials;
}

/**
 * Split a string into match and non-match substrings based on finding
 * all whitespace-separated terms in a given filter string (for UI search
 * bars).
 * @param {string} str - string to search
 * @param {string} filterStr - string with filter/search terms
 * @returns {Array} list of alternating matching and non-matching substrings
 * in order of the original string; even = match, odd = no match
 * @example
 * stringFilterMatches('my example string', 'ex my');
 * // ['my', ' ', 'ex', 'ample string']
 */
export function stringFilterMatches(str, filterStr) {
  // ensure there's a non-empty filter
  filterStr = filterStr && filterStr.trim();
  if (!filterStr) {
    return [``, str];
  }

  // prepare string and filter for search conditions
  const matchStr = str.toLowerCase();
  const searchTerms = filterStr.toLowerCase().split(` `).filter(Boolean);

  // find all matching positions
  const matchPositions = Array(str.length).fill(false);
  for (let term of searchTerms) {
    let fromIndex = 0;
    let foundNewMatch = false;
    while (!foundNewMatch) {
      const matchIdx = matchStr.indexOf(term, fromIndex);
      if (matchIdx === -1) {
        return null; // short-circuit stop for non-match
      }
      for (let mi = matchIdx; mi < matchIdx + term.length; mi++) {
        if (!matchPositions[mi]) {
          foundNewMatch = true;
          matchPositions[mi] = true;
        }
      }

      fromIndex = matchIdx + term.length;
    }
  }

  // merge into match and non-match strings
  const matches = [];
  let i = 0;
  while (i < matchPositions.length) {
    let matchStr = ``;
    let nonMatchStr = ``;

    while (i < matchPositions.length && matchPositions[i]) {
      matchStr += str[i++];
    }
    while (i < matchPositions.length && !matchPositions[i]) {
      nonMatchStr += str[i++];
    }

    matches.push(matchStr);
    matches.push(nonMatchStr);
  }

  return matches;
}

export function toSentenceCase(string) {
  const str = (string || ``).toString();
  return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}
