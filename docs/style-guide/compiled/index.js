/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(298);

	__webpack_require__(343);

	var _css = document.createElement('style');

	_css.innerHTML = '@font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132129/37994fca-b67e-41db-94b3-44077c62810a.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132129/37994fca-b67e-41db-94b3-44077c62810a.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132129/0583e751-caca-4cd8-af81-71b2aa5ddbbb.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132129/da176885-bee9-49f7-88f0-d7ad9229ddd7.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132129/1861a7b7-09a5-4efd-b681-5214784ded39.ttf") format("truetype");   font-weight: 100;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132132/eba46937-62d2-4fa0-b06b-3b195ec3b81e.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132132/eba46937-62d2-4fa0-b06b-3b195ec3b81e.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132132/7179129f-41a3-4e40-9065-ab5ca5a4e436.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132132/953888b2-ac05-4781-acd8-eefab4804344.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132132/cd88eeb4-8553-4cba-a792-65670225b71a.ttf") format("truetype");   font-weight: 100;   font-style: italic; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132144/93cc6d34-798e-42c8-87d2-fd6391801b63.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132144/93cc6d34-798e-42c8-87d2-fd6391801b63.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132144/d9fe41ee-4904-4a11-ba11-b61cd3be767f.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132144/2fa30669-9bbd-4ced-912f-db94a367ed6c.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132144/c12b3ebb-3771-483f-a84a-ac63d615c28e.ttf") format("truetype");   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132159/7e90123f-e4a7-4689-b41f-6bcfe331c00a.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132159/7e90123f-e4a7-4689-b41f-6bcfe331c00a.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132159/64017d81-9430-4cba-8219-8f5cc28b923e.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132159/e56ecb6d-da41-4bd9-982d-2d295bec9ab0.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132159/2aff4f81-3e97-4a83-9e6c-45e33c024796.ttf") format("truetype");   font-weight: 400;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132162/bc15a635-a09b-40d1-a5c4-70310166177d.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132162/bc15a635-a09b-40d1-a5c4-70310166177d.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132162/129d49d6-5492-4ed1-96f7-0528c6d53abc.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132162/9c69c878-2255-4027-8632-ed3635cddf45.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132162/b7eb3871-e910-4522-9982-effb425a2714.ttf") format("truetype");   font-weight: 400;   font-style: italic; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529351/b918fc25-caba-4cf5-8606-d77742e476f4.eot");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529351/b918fc25-caba-4cf5-8606-d77742e476f4.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529351/e898042a-5eb9-4810-b578-c3993ab58f0f.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529351/cb9d4f02-d326-46b0-a857-930cce057f80.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529351/75cafc03-22e4-41b0-8bc2-1b9081506ecc.ttf") format("truetype");   font-weight: 500;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529359/8c7dafc9-d10f-41d0-a036-be19229ef40e.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529359/8c7dafc9-d10f-41d0-a036-be19229ef40e.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529359/ce88a131-85cb-4a39-8dd1-3a4f5817b70c.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529359/3ffc4ea2-8461-4897-a809-dbf92500372c.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529359/da3b3dc5-47e4-44a6-8bff-4eee158a59c4.ttf") format("truetype");   font-weight: 500;   font-style: italic; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132171/87e4b4fc-cdf1-450a-8bed-dd818cba908d.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132171/87e4b4fc-cdf1-450a-8bed-dd818cba908d.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132171/ae47a7f5-89da-4879-b934-29722c3dd451.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132171/70ae52ec-d89b-4c6a-9402-854ebe423c54.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132171/6a35571c-ea14-4dac-9ae1-0e7af0abeec8.ttf") format("truetype");   font-weight: 600;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132174/06ebb3e2-5f11-4e26-8736-0f7acb3c7743.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132174/06ebb3e2-5f11-4e26-8736-0f7acb3c7743.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132174/df119bf8-cb81-4373-9682-6054d9dd0770.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132174/d2a02f92-9826-4117-ae36-8fcfd72ad46e.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132174/d786d7d1-696a-47f9-9d03-7608fcb29cc4.ttf") format("truetype");   font-weight: 600;   font-style: italic; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132183/fbc6b03a-b3a1-427c-a884-053deca3a53c.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132183/fbc6b03a-b3a1-427c-a884-053deca3a53c.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132183/0d416408-95c6-4ad7-b08d-e60573d3b37d.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132183/d999c07b-a049-4eb5-b8a6-4f36ae25e67e.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132183/4d4a75f5-d32a-4a09-8665-133afd39cc37.ttf") format("truetype");   font-weight: 700;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132186/cb0c3396-af1a-4c16-95aa-8085e21044c7.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132186/cb0c3396-af1a-4c16-95aa-8085e21044c7.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132186/a6315c03-b55d-42b0-8ed6-79060867137d.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132186/46d5674a-f287-4240-b87a-f207aeb83064.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132186/9bd640b2-9a56-4391-b213-767ae9c30ef4.ttf") format("truetype");   font-weight: 700;   font-style: italic; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132195/9fbce143-f5db-4c0b-9159-b1e666079f67.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132195/9fbce143-f5db-4c0b-9159-b1e666079f67.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132195/eb39afe0-709e-46d6-92ad-db5c3bfd24a9.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132195/19dd5cf2-ac2d-48d5-901a-c432fd291ee2.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132195/22cfbfa4-f607-4751-92eb-6fa194353e57.ttf") format("truetype");   font-weight: 800;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132207/9b05cd3b-19d8-496a-816b-8de46cf24af1.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132207/9b05cd3b-19d8-496a-816b-8de46cf24af1.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132207/a086d1e1-d71a-4248-bc5b-6a91bbda0756.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132207/43106d4c-07a9-48c0-bdeb-d82f359c85f5.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132207/7783372a-b74a-4eb3-902f-ab18b106eb46.ttf") format("truetype");   font-weight: 900;   font-style: normal; } a, a:visited {   color: #3b99f0;   text-decoration: none; } a:hover {   color: #4ba8ff; } .mp-font-title {   font-family: \'Proxima Nova\', \'proxima-nova\', sans-serif;   font-size: 18px;   font-weight: 700;   line-height: 1.4;   color: #4c6072; } .mp-font-subtitle {   font-family: \'Proxima Nova\', \'proxima-nova\', sans-serif;   font-size: 15px;   font-weight: 600;   line-height: 18px;   color: #4c6072; } .mp-font-list-item {   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 13px;   line-height: 1.7;   color: #6e859d; } .mp-font-paragraph {   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 14px;   font-weight: normal;   line-height: 18px;   color: #6e859d; } * {   -webkit-font-smoothing: antialiased; } input[type=text], textarea {   border: 1px solid #d8e0e7;   border-radius: 4px;   color: #6e859d;   display: inline-block;   font-size: 13px;   font-weight: 500;   -webkit-transition: border-color 150ms ease-out;   transition: border-color 150ms ease-out; } input[type=text]::-webkit-input-placeholder, textarea::-webkit-input-placeholder {   color: #9cacbb !important;   weight: 400 !important; } input[type=text]::-moz-placeholder, textarea::-moz-placeholder {   color: #9cacbb !important;   weight: 400 !important; } input[type=text]:-ms-input-placeholder, textarea:-ms-input-placeholder {   color: #9cacbb !important;   weight: 400 !important; } input[type=text]:focus, textarea:focus {   border-color: #3391e9;   -webkit-transition: border-color 250ms ease-in;   transition: border-color 250ms ease-in; } *:focus {   outline: 0; } *::-ms-clear {   height: 0;   width: 0; } .section {   margin-bottom: 10px;   padding-bottom: 10px;   border-bottom: 1px solid #eef2f6; } .color-block {   display: inline-block;   margin: 5px; } .color-block .square {   display: inline-block;   vertical-align: middle;   margin-right: 4px;   width: 20px;   height: 20px; } .color-block .label {   display: inline-block;   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 13px;   line-height: 1.7;   color: #6e859d;   vertical-align: middle; } '
	document.head.appendChild(_css)


	document.addEventListener("DOMContentLoaded", function () {

	  var colorPalette = document.querySelector('.color-palette');
	  fetch('colors.json').then(function (response) {
	    return response.json();
	  }).then(function (colors) {
	    colorPalette.innerHTML = '';
	    for (var color in colors) {
	      var hex = colors[color];
	      var colorRow = document.createElement('div');
	      colorRow.className = 'color-block';
	      colorRow.innerHTML = '\n                  <div class=\'square\' style=\'background-color: ' + hex + '\'></div>\n                  <div class=\'label\'>' + color + '</div>\n                  <mp-tooltip>' + hex + '</mp-tooltip>\n              ';
	      colorPalette.appendChild(colorRow);
	    }
	  });

	  window.modal = document.getElementById('modal');
	  window.popup = document.getElementById('popup');
	  window.alertModal = document.getElementById('alert-modal');
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	__webpack_require__(2);

	__webpack_require__(293);

	__webpack_require__(295);

	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;

	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}

	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);

	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(57);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(85);
	__webpack_require__(87);
	__webpack_require__(89);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(113);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(131);
	__webpack_require__(132);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(169);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(175);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(187);
	__webpack_require__(189);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(193);
	__webpack_require__(195);
	__webpack_require__(197);
	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(201);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(211);
	__webpack_require__(214);
	__webpack_require__(215);
	__webpack_require__(217);
	__webpack_require__(218);
	__webpack_require__(221);
	__webpack_require__(222);
	__webpack_require__(224);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(291);
	__webpack_require__(292);
	module.exports = __webpack_require__(9);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(4)
	  , has            = __webpack_require__(5)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(18)
	  , META           = __webpack_require__(22).KEY
	  , $fails         = __webpack_require__(7)
	  , shared         = __webpack_require__(23)
	  , setToStringTag = __webpack_require__(24)
	  , uid            = __webpack_require__(19)
	  , wks            = __webpack_require__(25)
	  , wksExt         = __webpack_require__(26)
	  , wksDefine      = __webpack_require__(27)
	  , keyOf          = __webpack_require__(29)
	  , enumKeys       = __webpack_require__(42)
	  , isArray        = __webpack_require__(45)
	  , anObject       = __webpack_require__(12)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , createDesc     = __webpack_require__(17)
	  , _create        = __webpack_require__(46)
	  , gOPNExt        = __webpack_require__(49)
	  , $GOPD          = __webpack_require__(51)
	  , $DP            = __webpack_require__(11)
	  , $keys          = __webpack_require__(30)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(44).f  = $propertyIsEnumerable;
	  __webpack_require__(43).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(28)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 4 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(7)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , core      = __webpack_require__(9)
	  , hide      = __webpack_require__(10)
	  , redefine  = __webpack_require__(18)
	  , ctx       = __webpack_require__(20)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11)
	  , createDesc = __webpack_require__(17);
	module.exports = __webpack_require__(6) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(12)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , toPrimitive    = __webpack_require__(16)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(6) && !__webpack_require__(7)(function(){
	  return Object.defineProperty(__webpack_require__(15)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , document = __webpack_require__(4).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , hide      = __webpack_require__(10)
	  , has       = __webpack_require__(5)
	  , SRC       = __webpack_require__(19)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(9).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(21);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(19)('meta')
	  , isObject = __webpack_require__(13)
	  , has      = __webpack_require__(5)
	  , setDesc  = __webpack_require__(11).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(7)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f
	  , has = __webpack_require__(5)
	  , TAG = __webpack_require__(25)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(23)('wks')
	  , uid        = __webpack_require__(19)
	  , Symbol     = __webpack_require__(4).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(25);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(4)
	  , core           = __webpack_require__(9)
	  , LIBRARY        = __webpack_require__(28)
	  , wksExt         = __webpack_require__(26)
	  , defineProperty = __webpack_require__(11).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(31)
	  , enumBugKeys = __webpack_require__(41);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(5)
	  , toIObject    = __webpack_require__(32)
	  , arrayIndexOf = __webpack_require__(36)(false)
	  , IE_PROTO     = __webpack_require__(40)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(33)
	  , defined = __webpack_require__(35);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(34);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(37)
	  , toIndex   = __webpack_require__(39);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(38)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(23)('keys')
	  , uid    = __webpack_require__(19);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(30)
	  , gOPS    = __webpack_require__(43)
	  , pIE     = __webpack_require__(44);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 44 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(34);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(12)
	  , dPs         = __webpack_require__(47)
	  , enumBugKeys = __webpack_require__(41)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(15)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(48).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(11)
	  , anObject = __webpack_require__(12)
	  , getKeys  = __webpack_require__(30);

	module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4).document && document.documentElement;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(32)
	  , gOPN      = __webpack_require__(50).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(31)
	  , hiddenKeys = __webpack_require__(41).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(44)
	  , createDesc     = __webpack_require__(17)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , has            = __webpack_require__(5)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(46)});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperty: __webpack_require__(11).f});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperties: __webpack_require__(47)});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(32)
	  , $getOwnPropertyDescriptor = __webpack_require__(51).f;

	__webpack_require__(56)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8)
	  , core    = __webpack_require__(9)
	  , fails   = __webpack_require__(7);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(58)
	  , $getPrototypeOf = __webpack_require__(59);

	__webpack_require__(56)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(35);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(5)
	  , toObject    = __webpack_require__(58)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(58)
	  , $keys    = __webpack_require__(30);

	__webpack_require__(56)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(56)('getOwnPropertyNames', function(){
	  return __webpack_require__(49).f;
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(56)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(56)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(56)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(56)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(56)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(56)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(8);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(69)});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(30)
	  , gOPS     = __webpack_require__(43)
	  , pIE      = __webpack_require__(44)
	  , toObject = __webpack_require__(58)
	  , IObject  = __webpack_require__(33)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(7)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {is: __webpack_require__(71)});

/***/ },
/* 71 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(73).set});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(13)
	  , anObject = __webpack_require__(12);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(20)(Function.call, __webpack_require__(51).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(75)
	  , test    = {};
	test[__webpack_require__(25)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(18)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(34)
	  , TAG = __webpack_require__(25)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(8);

	$export($export.P, 'Function', {bind: __webpack_require__(77)});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(21)
	  , isObject   = __webpack_require__(13)
	  , invoke     = __webpack_require__(78)
	  , arraySlice = [].slice
	  , factories  = {};

	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11).f
	  , createDesc = __webpack_require__(17)
	  , has        = __webpack_require__(5)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';

	var isExtensible = Object.isExtensible || function(){
	  return true;
	};

	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(13)
	  , getPrototypeOf = __webpack_require__(59)
	  , HAS_INSTANCE   = __webpack_require__(25)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(11).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(4).parseInt
	  , $trim     = __webpack_require__(83).trim
	  , ws        = __webpack_require__(84)
	  , hex       = /^[\-+]?0[xX]/;

	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , defined = __webpack_require__(35)
	  , fails   = __webpack_require__(7)
	  , spaces  = __webpack_require__(84)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');

	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(4).parseFloat
	  , $trim       = __webpack_require__(83).trim;

	module.exports = 1 / $parseFloat(__webpack_require__(84) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , has               = __webpack_require__(5)
	  , cof               = __webpack_require__(34)
	  , inheritIfRequired = __webpack_require__(88)
	  , toPrimitive       = __webpack_require__(16)
	  , fails             = __webpack_require__(7)
	  , gOPN              = __webpack_require__(50).f
	  , gOPD              = __webpack_require__(51).f
	  , dP                = __webpack_require__(11).f
	  , $trim             = __webpack_require__(83).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(46)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(6) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(18)(global, NUMBER, $Number);
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(13)
	  , setPrototypeOf = __webpack_require__(73).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , toInteger    = __webpack_require__(38)
	  , aNumberValue = __webpack_require__(90)
	  , repeat       = __webpack_require__(91)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';

	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};

	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(7)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(34);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(35);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $fails       = __webpack_require__(7)
	  , aNumberValue = __webpack_require__(90)
	  , $toPrecision = 1..toPrecision;

	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(8)
	  , _isFinite = __webpack_require__(4).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {isInteger: __webpack_require__(96)});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(8)
	  , isInteger = __webpack_require__(96)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(8)
	  , log1p   = __webpack_require__(104)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;

	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 104 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(8)
	  , $asinh  = Math.asinh;

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(8)
	  , $atanh  = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(8)
	  , sign    = __webpack_require__(108);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(8)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(8)
	  , $expm1  = __webpack_require__(112);

	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 112 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(8)
	  , sign      = __webpack_require__(108)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);

	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};


	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(8)
	  , abs     = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(8)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {log1p: __webpack_require__(104)});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {sign: __webpack_require__(108)});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(112)
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(112)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(8)
	  , toIndex        = __webpack_require__(39)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(37);

	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(83)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(127)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(128)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(35);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(28)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(18)
	  , hide           = __webpack_require__(10)
	  , has            = __webpack_require__(5)
	  , Iterators      = __webpack_require__(129)
	  , $iterCreate    = __webpack_require__(130)
	  , setToStringTag = __webpack_require__(24)
	  , getPrototypeOf = __webpack_require__(59)
	  , ITERATOR       = __webpack_require__(25)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(46)
	  , descriptor     = __webpack_require__(17)
	  , setToStringTag = __webpack_require__(24)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(25)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(127)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(8)
	  , toLength  = __webpack_require__(37)
	  , context   = __webpack_require__(133)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(135)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(134)
	  , defined  = __webpack_require__(35);

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(13)
	  , cof      = __webpack_require__(34)
	  , MATCH    = __webpack_require__(25)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(25)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(8)
	  , context  = __webpack_require__(133)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(135)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(91)
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(8)
	  , toLength    = __webpack_require__(37)
	  , context     = __webpack_require__(133)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(135)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(140)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , defined = __webpack_require__(35)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(140)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(140)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(140)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(140)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(140)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(140)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(140)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(140)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(140)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(140)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(140)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(140)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(8);

	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(8)
	  , toObject    = __webpack_require__(58)
	  , toPrimitive = __webpack_require__(16);

	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , getTime = Date.prototype.getTime;

	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};

	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(18)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(25)('toPrimitive')
	  , proto        = Date.prototype;

	if(!(TO_PRIMITIVE in proto))__webpack_require__(10)(proto, TO_PRIMITIVE, __webpack_require__(158));

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16)
	  , NUMBER      = 'number';

	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(8);

	$export($export.S, 'Array', {isArray: __webpack_require__(45)});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(20)
	  , $export        = __webpack_require__(8)
	  , toObject       = __webpack_require__(58)
	  , call           = __webpack_require__(161)
	  , isArrayIter    = __webpack_require__(162)
	  , toLength       = __webpack_require__(37)
	  , createProperty = __webpack_require__(163)
	  , getIterFn      = __webpack_require__(164);

	$export($export.S + $export.F * !__webpack_require__(165)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(12);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(129)
	  , ITERATOR   = __webpack_require__(25)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(11)
	  , createDesc      = __webpack_require__(17);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(75)
	  , ITERATOR  = __webpack_require__(25)('iterator')
	  , Iterators = __webpack_require__(129);
	module.exports = __webpack_require__(9).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(25)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(8)
	  , createProperty = __webpack_require__(163);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , arrayJoin = [].join;

	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(33) != Object || !__webpack_require__(168)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(7);

	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(8)
	  , html       = __webpack_require__(48)
	  , cof        = __webpack_require__(34)
	  , toIndex    = __webpack_require__(39)
	  , toLength   = __webpack_require__(37)
	  , arraySlice = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , fails     = __webpack_require__(7)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];

	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(168)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(8)
	  , $forEach = __webpack_require__(172)(0)
	  , STRICT   = __webpack_require__(168)([].forEach, true);

	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(20)
	  , IObject  = __webpack_require__(33)
	  , toObject = __webpack_require__(58)
	  , toLength = __webpack_require__(37)
	  , asc      = __webpack_require__(173);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(174);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , isArray  = __webpack_require__(45)
	  , SPECIES  = __webpack_require__(25)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $map    = __webpack_require__(172)(1);

	$export($export.P + $export.F * !__webpack_require__(168)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $filter = __webpack_require__(172)(2);

	$export($export.P + $export.F * !__webpack_require__(168)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $some   = __webpack_require__(172)(3);

	$export($export.P + $export.F * !__webpack_require__(168)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $every  = __webpack_require__(172)(4);

	$export($export.P + $export.F * !__webpack_require__(168)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(180);

	$export($export.P + $export.F * !__webpack_require__(168)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , IObject   = __webpack_require__(33)
	  , toLength  = __webpack_require__(37);

	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(180);

	$export($export.P + $export.F * !__webpack_require__(168)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , $indexOf      = __webpack_require__(36)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , toIObject     = __webpack_require__(32)
	  , toInteger     = __webpack_require__(38)
	  , toLength      = __webpack_require__(37)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(8);

	$export($export.P, 'Array', {copyWithin: __webpack_require__(185)});

	__webpack_require__(186)('copyWithin');

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);

	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(25)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(8);

	$export($export.P, 'Array', {fill: __webpack_require__(188)});

	__webpack_require__(186)('fill');

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(172)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(172)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(192)('Array');

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(4)
	  , dP          = __webpack_require__(11)
	  , DESCRIPTORS = __webpack_require__(6)
	  , SPECIES     = __webpack_require__(25)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(186)
	  , step             = __webpack_require__(194)
	  , Iterators        = __webpack_require__(129)
	  , toIObject        = __webpack_require__(32);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(128)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(4)
	  , inheritIfRequired = __webpack_require__(88)
	  , dP                = __webpack_require__(11).f
	  , gOPN              = __webpack_require__(50).f
	  , isRegExp          = __webpack_require__(134)
	  , $flags            = __webpack_require__(196)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;

	if(__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(7)(function(){
	  re2[__webpack_require__(25)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(18)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(192)('RegExp');

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(12);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(198);
	var anObject    = __webpack_require__(12)
	  , $flags      = __webpack_require__(196)
	  , DESCRIPTORS = __webpack_require__(6)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];

	var define = function(fn){
	  __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(7)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(6) && /./g.flags != 'g')__webpack_require__(11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(196)
	});

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(200)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(10)
	  , redefine = __webpack_require__(18)
	  , fails    = __webpack_require__(7)
	  , defined  = __webpack_require__(35)
	  , wks      = __webpack_require__(25);

	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(200)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(200)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(200)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(134)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(28)
	  , global             = __webpack_require__(4)
	  , ctx                = __webpack_require__(20)
	  , classof            = __webpack_require__(75)
	  , $export            = __webpack_require__(8)
	  , isObject           = __webpack_require__(13)
	  , aFunction          = __webpack_require__(21)
	  , anInstance         = __webpack_require__(205)
	  , forOf              = __webpack_require__(206)
	  , speciesConstructor = __webpack_require__(207)
	  , task               = __webpack_require__(208).set
	  , microtask          = __webpack_require__(209)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(25)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(210)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(24)($Promise, PROMISE);
	__webpack_require__(192)(PROMISE);
	Wrapper = __webpack_require__(9)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(165)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(20)
	  , call        = __webpack_require__(161)
	  , isArrayIter = __webpack_require__(162)
	  , anObject    = __webpack_require__(12)
	  , toLength    = __webpack_require__(37)
	  , getIterFn   = __webpack_require__(164)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(12)
	  , aFunction = __webpack_require__(21)
	  , SPECIES   = __webpack_require__(25)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(20)
	  , invoke             = __webpack_require__(78)
	  , html               = __webpack_require__(48)
	  , cel                = __webpack_require__(15)
	  , global             = __webpack_require__(4)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(34)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , macrotask = __webpack_require__(208).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(34)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(18);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);

	// 23.1 Map Objects
	module.exports = __webpack_require__(213)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(11).f
	  , create      = __webpack_require__(46)
	  , redefineAll = __webpack_require__(210)
	  , ctx         = __webpack_require__(20)
	  , anInstance  = __webpack_require__(205)
	  , defined     = __webpack_require__(35)
	  , forOf       = __webpack_require__(206)
	  , $iterDefine = __webpack_require__(128)
	  , step        = __webpack_require__(194)
	  , setSpecies  = __webpack_require__(192)
	  , DESCRIPTORS = __webpack_require__(6)
	  , fastKey     = __webpack_require__(22).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , $export           = __webpack_require__(8)
	  , redefine          = __webpack_require__(18)
	  , redefineAll       = __webpack_require__(210)
	  , meta              = __webpack_require__(22)
	  , forOf             = __webpack_require__(206)
	  , anInstance        = __webpack_require__(205)
	  , isObject          = __webpack_require__(13)
	  , fails             = __webpack_require__(7)
	  , $iterDetect       = __webpack_require__(165)
	  , setToStringTag    = __webpack_require__(24)
	  , inheritIfRequired = __webpack_require__(88);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);

	// 23.2 Set Objects
	module.exports = __webpack_require__(213)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(172)(0)
	  , redefine     = __webpack_require__(18)
	  , meta         = __webpack_require__(22)
	  , assign       = __webpack_require__(69)
	  , weak         = __webpack_require__(216)
	  , isObject     = __webpack_require__(13)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;

	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(213)('WeakMap', wrapper, methods, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(210)
	  , getWeak           = __webpack_require__(22).getWeak
	  , anObject          = __webpack_require__(12)
	  , isObject          = __webpack_require__(13)
	  , anInstance        = __webpack_require__(205)
	  , forOf             = __webpack_require__(206)
	  , createArrayMethod = __webpack_require__(172)
	  , $has              = __webpack_require__(5)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(216);

	// 23.4 WeakSet Objects
	__webpack_require__(213)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $typed       = __webpack_require__(219)
	  , buffer       = __webpack_require__(220)
	  , anObject     = __webpack_require__(12)
	  , toIndex      = __webpack_require__(39)
	  , toLength     = __webpack_require__(37)
	  , isObject     = __webpack_require__(13)
	  , ArrayBuffer  = __webpack_require__(4).ArrayBuffer
	  , speciesConstructor = __webpack_require__(207)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';

	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});

	$export($export.P + $export.U + $export.F * __webpack_require__(7)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});

	__webpack_require__(192)(ARRAY_BUFFER);

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , hide   = __webpack_require__(10)
	  , uid    = __webpack_require__(19)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;

	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');

	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}

	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(4)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , LIBRARY        = __webpack_require__(28)
	  , $typed         = __webpack_require__(219)
	  , hide           = __webpack_require__(10)
	  , redefineAll    = __webpack_require__(210)
	  , fails          = __webpack_require__(7)
	  , anInstance     = __webpack_require__(205)
	  , toInteger      = __webpack_require__(38)
	  , toLength       = __webpack_require__(37)
	  , gOPN           = __webpack_require__(50).f
	  , dP             = __webpack_require__(11).f
	  , arrayFill      = __webpack_require__(188)
	  , setToStringTag = __webpack_require__(24)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};

	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};

	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};

	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};

	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};

	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };

	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };

	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }

	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	$export($export.G + $export.W + $export.F * !__webpack_require__(219).ABV, {
	  DataView: __webpack_require__(220).DataView
	});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(6)){
	  var LIBRARY             = __webpack_require__(28)
	    , global              = __webpack_require__(4)
	    , fails               = __webpack_require__(7)
	    , $export             = __webpack_require__(8)
	    , $typed              = __webpack_require__(219)
	    , $buffer             = __webpack_require__(220)
	    , ctx                 = __webpack_require__(20)
	    , anInstance          = __webpack_require__(205)
	    , propertyDesc        = __webpack_require__(17)
	    , hide                = __webpack_require__(10)
	    , redefineAll         = __webpack_require__(210)
	    , toInteger           = __webpack_require__(38)
	    , toLength            = __webpack_require__(37)
	    , toIndex             = __webpack_require__(39)
	    , toPrimitive         = __webpack_require__(16)
	    , has                 = __webpack_require__(5)
	    , same                = __webpack_require__(71)
	    , classof             = __webpack_require__(75)
	    , isObject            = __webpack_require__(13)
	    , toObject            = __webpack_require__(58)
	    , isArrayIter         = __webpack_require__(162)
	    , create              = __webpack_require__(46)
	    , getPrototypeOf      = __webpack_require__(59)
	    , gOPN                = __webpack_require__(50).f
	    , getIterFn           = __webpack_require__(164)
	    , uid                 = __webpack_require__(19)
	    , wks                 = __webpack_require__(25)
	    , createArrayMethod   = __webpack_require__(172)
	    , createArrayIncludes = __webpack_require__(36)
	    , speciesConstructor  = __webpack_require__(207)
	    , ArrayIterators      = __webpack_require__(193)
	    , Iterators           = __webpack_require__(129)
	    , $iterDetect         = __webpack_require__(165)
	    , setSpecies          = __webpack_require__(192)
	    , arrayFill           = __webpack_require__(188)
	    , arrayCopyWithin     = __webpack_require__(185)
	    , $DP                 = __webpack_require__(11)
	    , $GOPD               = __webpack_require__(51)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';

	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });

	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });

	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });

	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };

	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };

	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };

	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };

	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };

	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };

	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };

	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };

	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };

	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };

	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };

	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };

	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };

	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };

	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };

	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }

	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });

	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }

	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });

	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }

	    O[NAME] = TypedArray;

	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });

	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	    $export($export.P, NAME, proto);

	    setSpecies(NAME);

	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});

	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});

	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , anObject  = __webpack_require__(12)
	  , rApply    = (__webpack_require__(4).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(7)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(8)
	  , create     = __webpack_require__(46)
	  , aFunction  = __webpack_require__(21)
	  , anObject   = __webpack_require__(12)
	  , isObject   = __webpack_require__(13)
	  , fails      = __webpack_require__(7)
	  , bind       = __webpack_require__(77)
	  , rConstruct = (__webpack_require__(4).Reflect || {}).construct;

	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});

	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(11)
	  , $export     = __webpack_require__(8)
	  , anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(8)
	  , gOPD     = __webpack_require__(51).f
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(130)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});

	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , isObject       = __webpack_require__(13)
	  , anObject       = __webpack_require__(12);

	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}

	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(51)
	  , $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(8)
	  , getProto = __webpack_require__(59)
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(8);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(8)
	  , anObject      = __webpack_require__(12)
	  , $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(8);

	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(243)});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(50)
	  , gOPS     = __webpack_require__(43)
	  , anObject = __webpack_require__(12)
	  , Reflect  = __webpack_require__(4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(8)
	  , anObject           = __webpack_require__(12)
	  , $preventExtensions = Object.preventExtensions;

	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(11)
	  , gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , createDesc     = __webpack_require__(17)
	  , anObject       = __webpack_require__(12)
	  , isObject       = __webpack_require__(13);

	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(8)
	  , setProto = __webpack_require__(73);

	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(8)
	  , $includes = __webpack_require__(36)(true);

	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	__webpack_require__(186)('includes');

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(127)(true);

	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(250);

	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(37)
	  , repeat   = __webpack_require__(91)
	  , defined  = __webpack_require__(35);

	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(250);

	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(8)
	  , defined     = __webpack_require__(35)
	  , toLength    = __webpack_require__(37)
	  , isRegExp    = __webpack_require__(134)
	  , getFlags    = __webpack_require__(196)
	  , RegExpProto = RegExp.prototype;

	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};

	__webpack_require__(130)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});

	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('asyncIterator');

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('observable');

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(8)
	  , ownKeys        = __webpack_require__(243)
	  , toIObject      = __webpack_require__(32)
	  , gOPD           = __webpack_require__(51)
	  , createProperty = __webpack_require__(163);

	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8)
	  , $values = __webpack_require__(259)(false);

	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32)
	  , isEnum    = __webpack_require__(44).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(8)
	  , $entries = __webpack_require__(259)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);

	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(28)|| !__webpack_require__(7)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(4)[K];
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);

	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;

	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;

	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);

	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(267)('Map')});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(75)
	  , from    = __webpack_require__(268);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(206);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);

	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(267)('Set')});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(8);

	$export($export.S, 'System', {global: __webpack_require__(4)});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(8)
	  , cof     = __webpack_require__(34);

	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(277)
	  , anObject                  = __webpack_require__(12)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(211)
	  , $export = __webpack_require__(8)
	  , shared  = __webpack_require__(23)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(215)));

	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};

	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;

	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};

	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(214)
	  , from                    = __webpack_require__(268)
	  , metadata                = __webpack_require__(277)
	  , anObject                = __webpack_require__(12)
	  , getPrototypeOf          = __webpack_require__(59)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};

	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(277)
	  , anObject                = __webpack_require__(12)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};

	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(277)
	  , anObject                  = __webpack_require__(12)
	  , aFunction                 = __webpack_require__(21)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(8)
	  , microtask = __webpack_require__(209)()
	  , process   = __webpack_require__(4).process
	  , isNode    = __webpack_require__(34)(process) == 'process';

	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(8)
	  , global      = __webpack_require__(4)
	  , core        = __webpack_require__(9)
	  , microtask   = __webpack_require__(209)()
	  , OBSERVABLE  = __webpack_require__(25)('observable')
	  , aFunction   = __webpack_require__(21)
	  , anObject    = __webpack_require__(12)
	  , anInstance  = __webpack_require__(205)
	  , redefineAll = __webpack_require__(210)
	  , hide        = __webpack_require__(10)
	  , forOf       = __webpack_require__(206)
	  , RETURN      = forOf.RETURN;

	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};

	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};

	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};

	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};

	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};

	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});

	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};

	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});

	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};

	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});

	redefineAll($Observable, {
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});

	hide($Observable.prototype, OBSERVABLE, function(){ return this; });

	$export($export.G, {Observable: $Observable});

	__webpack_require__(192)('Observable');

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(4)
	  , $export    = __webpack_require__(8)
	  , invoke     = __webpack_require__(78)
	  , partial    = __webpack_require__(289)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(290)
	  , invoke    = __webpack_require__(78)
	  , aFunction = __webpack_require__(21);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , $task   = __webpack_require__(208);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(193)
	  , redefine      = __webpack_require__(18)
	  , global        = __webpack_require__(4)
	  , hide          = __webpack_require__(10)
	  , Iterators     = __webpack_require__(129)
	  , wks           = __webpack_require__(25)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!(function(global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;

	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }

	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp[toStringTagSymbol] = "Generator";

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(294)))

/***/ },
/* 294 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(296);
	module.exports = __webpack_require__(9).RegExp.escape;

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(8)
	  , $re     = __webpack_require__(297)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 297 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 298 */
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	 */
	// @version 0.7.22
	(function() {
	  window.WebComponents = window.WebComponents || {
	    flags: {}
	  };
	  var file = "webcomponents.js";
	  var script = document.querySelector('script[src*="' + file + '"]');
	  var flags = {};
	  if (!flags.noOpts) {
	    location.search.slice(1).split("&").forEach(function(option) {
	      var parts = option.split("=");
	      var match;
	      if (parts[0] && (match = parts[0].match(/wc-(.+)/))) {
	        flags[match[1]] = parts[1] || true;
	      }
	    });
	    if (script) {
	      for (var i = 0, a; a = script.attributes[i]; i++) {
	        if (a.name !== "src") {
	          flags[a.name] = a.value || true;
	        }
	      }
	    }
	    if (flags.log && flags.log.split) {
	      var parts = flags.log.split(",");
	      flags.log = {};
	      parts.forEach(function(f) {
	        flags.log[f] = true;
	      });
	    } else {
	      flags.log = {};
	    }
	  }
	  flags.shadow = flags.shadow || flags.shadowdom || flags.polyfill;
	  if (flags.shadow === "native") {
	    flags.shadow = false;
	  } else {
	    flags.shadow = flags.shadow || !HTMLElement.prototype.createShadowRoot;
	  }
	  if (flags.register) {
	    window.CustomElements = window.CustomElements || {
	      flags: {}
	    };
	    window.CustomElements.flags.register = flags.register;
	  }
	  WebComponents.flags = flags;
	})();

	if (WebComponents.flags.shadow) {
	  if (typeof WeakMap === "undefined") {
	    (function() {
	      var defineProperty = Object.defineProperty;
	      var counter = Date.now() % 1e9;
	      var WeakMap = function() {
	        this.name = "__st" + (Math.random() * 1e9 >>> 0) + (counter++ + "__");
	      };
	      WeakMap.prototype = {
	        set: function(key, value) {
	          var entry = key[this.name];
	          if (entry && entry[0] === key) entry[1] = value; else defineProperty(key, this.name, {
	            value: [ key, value ],
	            writable: true
	          });
	          return this;
	        },
	        get: function(key) {
	          var entry;
	          return (entry = key[this.name]) && entry[0] === key ? entry[1] : undefined;
	        },
	        "delete": function(key) {
	          var entry = key[this.name];
	          if (!entry || entry[0] !== key) return false;
	          entry[0] = entry[1] = undefined;
	          return true;
	        },
	        has: function(key) {
	          var entry = key[this.name];
	          if (!entry) return false;
	          return entry[0] === key;
	        }
	      };
	      window.WeakMap = WeakMap;
	    })();
	  }
	  window.ShadowDOMPolyfill = {};
	  (function(scope) {
	    "use strict";
	    var constructorTable = new WeakMap();
	    var nativePrototypeTable = new WeakMap();
	    var wrappers = Object.create(null);
	    function detectEval() {
	      if (typeof chrome !== "undefined" && chrome.app && chrome.app.runtime) {
	        return false;
	      }
	      if (navigator.getDeviceStorage) {
	        return false;
	      }
	      try {
	        var f = new Function("return true;");
	        return f();
	      } catch (ex) {
	        return false;
	      }
	    }
	    var hasEval = detectEval();
	    function assert(b) {
	      if (!b) throw new Error("Assertion failed");
	    }
	    var defineProperty = Object.defineProperty;
	    var getOwnPropertyNames = Object.getOwnPropertyNames;
	    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	    function mixin(to, from) {
	      var names = getOwnPropertyNames(from);
	      for (var i = 0; i < names.length; i++) {
	        var name = names[i];
	        defineProperty(to, name, getOwnPropertyDescriptor(from, name));
	      }
	      return to;
	    }
	    function mixinStatics(to, from) {
	      var names = getOwnPropertyNames(from);
	      for (var i = 0; i < names.length; i++) {
	        var name = names[i];
	        switch (name) {
	         case "arguments":
	         case "caller":
	         case "length":
	         case "name":
	         case "prototype":
	         case "toString":
	          continue;
	        }
	        defineProperty(to, name, getOwnPropertyDescriptor(from, name));
	      }
	      return to;
	    }
	    function oneOf(object, propertyNames) {
	      for (var i = 0; i < propertyNames.length; i++) {
	        if (propertyNames[i] in object) return propertyNames[i];
	      }
	    }
	    var nonEnumerableDataDescriptor = {
	      value: undefined,
	      configurable: true,
	      enumerable: false,
	      writable: true
	    };
	    function defineNonEnumerableDataProperty(object, name, value) {
	      nonEnumerableDataDescriptor.value = value;
	      defineProperty(object, name, nonEnumerableDataDescriptor);
	    }
	    getOwnPropertyNames(window);
	    function getWrapperConstructor(node, opt_instance) {
	      var nativePrototype = node.__proto__ || Object.getPrototypeOf(node);
	      if (isFirefox) {
	        try {
	          getOwnPropertyNames(nativePrototype);
	        } catch (error) {
	          nativePrototype = nativePrototype.__proto__;
	        }
	      }
	      var wrapperConstructor = constructorTable.get(nativePrototype);
	      if (wrapperConstructor) return wrapperConstructor;
	      var parentWrapperConstructor = getWrapperConstructor(nativePrototype);
	      var GeneratedWrapper = createWrapperConstructor(parentWrapperConstructor);
	      registerInternal(nativePrototype, GeneratedWrapper, opt_instance);
	      return GeneratedWrapper;
	    }
	    function addForwardingProperties(nativePrototype, wrapperPrototype) {
	      installProperty(nativePrototype, wrapperPrototype, true);
	    }
	    function registerInstanceProperties(wrapperPrototype, instanceObject) {
	      installProperty(instanceObject, wrapperPrototype, false);
	    }
	    var isFirefox = /Firefox/.test(navigator.userAgent);
	    var dummyDescriptor = {
	      get: function() {},
	      set: function(v) {},
	      configurable: true,
	      enumerable: true
	    };
	    function isEventHandlerName(name) {
	      return /^on[a-z]+$/.test(name);
	    }
	    function isIdentifierName(name) {
	      return /^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(name);
	    }
	    function getGetter(name) {
	      return hasEval && isIdentifierName(name) ? new Function("return this.__impl4cf1e782hg__." + name) : function() {
	        return this.__impl4cf1e782hg__[name];
	      };
	    }
	    function getSetter(name) {
	      return hasEval && isIdentifierName(name) ? new Function("v", "this.__impl4cf1e782hg__." + name + " = v") : function(v) {
	        this.__impl4cf1e782hg__[name] = v;
	      };
	    }
	    function getMethod(name) {
	      return hasEval && isIdentifierName(name) ? new Function("return this.__impl4cf1e782hg__." + name + ".apply(this.__impl4cf1e782hg__, arguments)") : function() {
	        return this.__impl4cf1e782hg__[name].apply(this.__impl4cf1e782hg__, arguments);
	      };
	    }
	    function getDescriptor(source, name) {
	      try {
	        return Object.getOwnPropertyDescriptor(source, name);
	      } catch (ex) {
	        return dummyDescriptor;
	      }
	    }
	    var isBrokenSafari = function() {
	      var descr = Object.getOwnPropertyDescriptor(Node.prototype, "nodeType");
	      return descr && !descr.get && !descr.set;
	    }();
	    function installProperty(source, target, allowMethod, opt_blacklist) {
	      var names = getOwnPropertyNames(source);
	      for (var i = 0; i < names.length; i++) {
	        var name = names[i];
	        if (name === "polymerBlackList_") continue;
	        if (name in target) continue;
	        if (source.polymerBlackList_ && source.polymerBlackList_[name]) continue;
	        if (isFirefox) {
	          source.__lookupGetter__(name);
	        }
	        var descriptor = getDescriptor(source, name);
	        var getter, setter;
	        if (typeof descriptor.value === "function") {
	          if (allowMethod) {
	            target[name] = getMethod(name);
	          }
	          continue;
	        }
	        var isEvent = isEventHandlerName(name);
	        if (isEvent) getter = scope.getEventHandlerGetter(name); else getter = getGetter(name);
	        if (descriptor.writable || descriptor.set || isBrokenSafari) {
	          if (isEvent) setter = scope.getEventHandlerSetter(name); else setter = getSetter(name);
	        }
	        var configurable = isBrokenSafari || descriptor.configurable;
	        defineProperty(target, name, {
	          get: getter,
	          set: setter,
	          configurable: configurable,
	          enumerable: descriptor.enumerable
	        });
	      }
	    }
	    function register(nativeConstructor, wrapperConstructor, opt_instance) {
	      if (nativeConstructor == null) {
	        return;
	      }
	      var nativePrototype = nativeConstructor.prototype;
	      registerInternal(nativePrototype, wrapperConstructor, opt_instance);
	      mixinStatics(wrapperConstructor, nativeConstructor);
	    }
	    function registerInternal(nativePrototype, wrapperConstructor, opt_instance) {
	      var wrapperPrototype = wrapperConstructor.prototype;
	      assert(constructorTable.get(nativePrototype) === undefined);
	      constructorTable.set(nativePrototype, wrapperConstructor);
	      nativePrototypeTable.set(wrapperPrototype, nativePrototype);
	      addForwardingProperties(nativePrototype, wrapperPrototype);
	      if (opt_instance) registerInstanceProperties(wrapperPrototype, opt_instance);
	      defineNonEnumerableDataProperty(wrapperPrototype, "constructor", wrapperConstructor);
	      wrapperConstructor.prototype = wrapperPrototype;
	    }
	    function isWrapperFor(wrapperConstructor, nativeConstructor) {
	      return constructorTable.get(nativeConstructor.prototype) === wrapperConstructor;
	    }
	    function registerObject(object) {
	      var nativePrototype = Object.getPrototypeOf(object);
	      var superWrapperConstructor = getWrapperConstructor(nativePrototype);
	      var GeneratedWrapper = createWrapperConstructor(superWrapperConstructor);
	      registerInternal(nativePrototype, GeneratedWrapper, object);
	      return GeneratedWrapper;
	    }
	    function createWrapperConstructor(superWrapperConstructor) {
	      function GeneratedWrapper(node) {
	        superWrapperConstructor.call(this, node);
	      }
	      var p = Object.create(superWrapperConstructor.prototype);
	      p.constructor = GeneratedWrapper;
	      GeneratedWrapper.prototype = p;
	      return GeneratedWrapper;
	    }
	    function isWrapper(object) {
	      return object && object.__impl4cf1e782hg__;
	    }
	    function isNative(object) {
	      return !isWrapper(object);
	    }
	    function wrap(impl) {
	      if (impl === null) return null;
	      assert(isNative(impl));
	      var wrapper = impl.__wrapper8e3dd93a60__;
	      if (wrapper != null) {
	        return wrapper;
	      }
	      return impl.__wrapper8e3dd93a60__ = new (getWrapperConstructor(impl, impl))(impl);
	    }
	    function unwrap(wrapper) {
	      if (wrapper === null) return null;
	      assert(isWrapper(wrapper));
	      return wrapper.__impl4cf1e782hg__;
	    }
	    function unsafeUnwrap(wrapper) {
	      return wrapper.__impl4cf1e782hg__;
	    }
	    function setWrapper(impl, wrapper) {
	      wrapper.__impl4cf1e782hg__ = impl;
	      impl.__wrapper8e3dd93a60__ = wrapper;
	    }
	    function unwrapIfNeeded(object) {
	      return object && isWrapper(object) ? unwrap(object) : object;
	    }
	    function wrapIfNeeded(object) {
	      return object && !isWrapper(object) ? wrap(object) : object;
	    }
	    function rewrap(node, wrapper) {
	      if (wrapper === null) return;
	      assert(isNative(node));
	      assert(wrapper === undefined || isWrapper(wrapper));
	      node.__wrapper8e3dd93a60__ = wrapper;
	    }
	    var getterDescriptor = {
	      get: undefined,
	      configurable: true,
	      enumerable: true
	    };
	    function defineGetter(constructor, name, getter) {
	      getterDescriptor.get = getter;
	      defineProperty(constructor.prototype, name, getterDescriptor);
	    }
	    function defineWrapGetter(constructor, name) {
	      defineGetter(constructor, name, function() {
	        return wrap(this.__impl4cf1e782hg__[name]);
	      });
	    }
	    function forwardMethodsToWrapper(constructors, names) {
	      constructors.forEach(function(constructor) {
	        names.forEach(function(name) {
	          constructor.prototype[name] = function() {
	            var w = wrapIfNeeded(this);
	            return w[name].apply(w, arguments);
	          };
	        });
	      });
	    }
	    scope.addForwardingProperties = addForwardingProperties;
	    scope.assert = assert;
	    scope.constructorTable = constructorTable;
	    scope.defineGetter = defineGetter;
	    scope.defineWrapGetter = defineWrapGetter;
	    scope.forwardMethodsToWrapper = forwardMethodsToWrapper;
	    scope.isIdentifierName = isIdentifierName;
	    scope.isWrapper = isWrapper;
	    scope.isWrapperFor = isWrapperFor;
	    scope.mixin = mixin;
	    scope.nativePrototypeTable = nativePrototypeTable;
	    scope.oneOf = oneOf;
	    scope.registerObject = registerObject;
	    scope.registerWrapper = register;
	    scope.rewrap = rewrap;
	    scope.setWrapper = setWrapper;
	    scope.unsafeUnwrap = unsafeUnwrap;
	    scope.unwrap = unwrap;
	    scope.unwrapIfNeeded = unwrapIfNeeded;
	    scope.wrap = wrap;
	    scope.wrapIfNeeded = wrapIfNeeded;
	    scope.wrappers = wrappers;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    function newSplice(index, removed, addedCount) {
	      return {
	        index: index,
	        removed: removed,
	        addedCount: addedCount
	      };
	    }
	    var EDIT_LEAVE = 0;
	    var EDIT_UPDATE = 1;
	    var EDIT_ADD = 2;
	    var EDIT_DELETE = 3;
	    function ArraySplice() {}
	    ArraySplice.prototype = {
	      calcEditDistances: function(current, currentStart, currentEnd, old, oldStart, oldEnd) {
	        var rowCount = oldEnd - oldStart + 1;
	        var columnCount = currentEnd - currentStart + 1;
	        var distances = new Array(rowCount);
	        for (var i = 0; i < rowCount; i++) {
	          distances[i] = new Array(columnCount);
	          distances[i][0] = i;
	        }
	        for (var j = 0; j < columnCount; j++) distances[0][j] = j;
	        for (var i = 1; i < rowCount; i++) {
	          for (var j = 1; j < columnCount; j++) {
	            if (this.equals(current[currentStart + j - 1], old[oldStart + i - 1])) distances[i][j] = distances[i - 1][j - 1]; else {
	              var north = distances[i - 1][j] + 1;
	              var west = distances[i][j - 1] + 1;
	              distances[i][j] = north < west ? north : west;
	            }
	          }
	        }
	        return distances;
	      },
	      spliceOperationsFromEditDistances: function(distances) {
	        var i = distances.length - 1;
	        var j = distances[0].length - 1;
	        var current = distances[i][j];
	        var edits = [];
	        while (i > 0 || j > 0) {
	          if (i == 0) {
	            edits.push(EDIT_ADD);
	            j--;
	            continue;
	          }
	          if (j == 0) {
	            edits.push(EDIT_DELETE);
	            i--;
	            continue;
	          }
	          var northWest = distances[i - 1][j - 1];
	          var west = distances[i - 1][j];
	          var north = distances[i][j - 1];
	          var min;
	          if (west < north) min = west < northWest ? west : northWest; else min = north < northWest ? north : northWest;
	          if (min == northWest) {
	            if (northWest == current) {
	              edits.push(EDIT_LEAVE);
	            } else {
	              edits.push(EDIT_UPDATE);
	              current = northWest;
	            }
	            i--;
	            j--;
	          } else if (min == west) {
	            edits.push(EDIT_DELETE);
	            i--;
	            current = west;
	          } else {
	            edits.push(EDIT_ADD);
	            j--;
	            current = north;
	          }
	        }
	        edits.reverse();
	        return edits;
	      },
	      calcSplices: function(current, currentStart, currentEnd, old, oldStart, oldEnd) {
	        var prefixCount = 0;
	        var suffixCount = 0;
	        var minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
	        if (currentStart == 0 && oldStart == 0) prefixCount = this.sharedPrefix(current, old, minLength);
	        if (currentEnd == current.length && oldEnd == old.length) suffixCount = this.sharedSuffix(current, old, minLength - prefixCount);
	        currentStart += prefixCount;
	        oldStart += prefixCount;
	        currentEnd -= suffixCount;
	        oldEnd -= suffixCount;
	        if (currentEnd - currentStart == 0 && oldEnd - oldStart == 0) return [];
	        if (currentStart == currentEnd) {
	          var splice = newSplice(currentStart, [], 0);
	          while (oldStart < oldEnd) splice.removed.push(old[oldStart++]);
	          return [ splice ];
	        } else if (oldStart == oldEnd) return [ newSplice(currentStart, [], currentEnd - currentStart) ];
	        var ops = this.spliceOperationsFromEditDistances(this.calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));
	        var splice = undefined;
	        var splices = [];
	        var index = currentStart;
	        var oldIndex = oldStart;
	        for (var i = 0; i < ops.length; i++) {
	          switch (ops[i]) {
	           case EDIT_LEAVE:
	            if (splice) {
	              splices.push(splice);
	              splice = undefined;
	            }
	            index++;
	            oldIndex++;
	            break;

	           case EDIT_UPDATE:
	            if (!splice) splice = newSplice(index, [], 0);
	            splice.addedCount++;
	            index++;
	            splice.removed.push(old[oldIndex]);
	            oldIndex++;
	            break;

	           case EDIT_ADD:
	            if (!splice) splice = newSplice(index, [], 0);
	            splice.addedCount++;
	            index++;
	            break;

	           case EDIT_DELETE:
	            if (!splice) splice = newSplice(index, [], 0);
	            splice.removed.push(old[oldIndex]);
	            oldIndex++;
	            break;
	          }
	        }
	        if (splice) {
	          splices.push(splice);
	        }
	        return splices;
	      },
	      sharedPrefix: function(current, old, searchLength) {
	        for (var i = 0; i < searchLength; i++) if (!this.equals(current[i], old[i])) return i;
	        return searchLength;
	      },
	      sharedSuffix: function(current, old, searchLength) {
	        var index1 = current.length;
	        var index2 = old.length;
	        var count = 0;
	        while (count < searchLength && this.equals(current[--index1], old[--index2])) count++;
	        return count;
	      },
	      calculateSplices: function(current, previous) {
	        return this.calcSplices(current, 0, current.length, previous, 0, previous.length);
	      },
	      equals: function(currentValue, previousValue) {
	        return currentValue === previousValue;
	      }
	    };
	    scope.ArraySplice = ArraySplice;
	  })(window.ShadowDOMPolyfill);
	  (function(context) {
	    "use strict";
	    var OriginalMutationObserver = window.MutationObserver;
	    var callbacks = [];
	    var pending = false;
	    var timerFunc;
	    function handle() {
	      pending = false;
	      var copies = callbacks.slice(0);
	      callbacks = [];
	      for (var i = 0; i < copies.length; i++) {
	        (0, copies[i])();
	      }
	    }
	    if (OriginalMutationObserver) {
	      var counter = 1;
	      var observer = new OriginalMutationObserver(handle);
	      var textNode = document.createTextNode(counter);
	      observer.observe(textNode, {
	        characterData: true
	      });
	      timerFunc = function() {
	        counter = (counter + 1) % 2;
	        textNode.data = counter;
	      };
	    } else {
	      timerFunc = window.setTimeout;
	    }
	    function setEndOfMicrotask(func) {
	      callbacks.push(func);
	      if (pending) return;
	      pending = true;
	      timerFunc(handle, 0);
	    }
	    context.setEndOfMicrotask = setEndOfMicrotask;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var setEndOfMicrotask = scope.setEndOfMicrotask;
	    var wrapIfNeeded = scope.wrapIfNeeded;
	    var wrappers = scope.wrappers;
	    var registrationsTable = new WeakMap();
	    var globalMutationObservers = [];
	    var isScheduled = false;
	    function scheduleCallback(observer) {
	      if (observer.scheduled_) return;
	      observer.scheduled_ = true;
	      globalMutationObservers.push(observer);
	      if (isScheduled) return;
	      setEndOfMicrotask(notifyObservers);
	      isScheduled = true;
	    }
	    function notifyObservers() {
	      isScheduled = false;
	      while (globalMutationObservers.length) {
	        var notifyList = globalMutationObservers;
	        globalMutationObservers = [];
	        notifyList.sort(function(x, y) {
	          return x.uid_ - y.uid_;
	        });
	        for (var i = 0; i < notifyList.length; i++) {
	          var mo = notifyList[i];
	          mo.scheduled_ = false;
	          var queue = mo.takeRecords();
	          removeTransientObserversFor(mo);
	          if (queue.length) {
	            mo.callback_(queue, mo);
	          }
	        }
	      }
	    }
	    function MutationRecord(type, target) {
	      this.type = type;
	      this.target = target;
	      this.addedNodes = new wrappers.NodeList();
	      this.removedNodes = new wrappers.NodeList();
	      this.previousSibling = null;
	      this.nextSibling = null;
	      this.attributeName = null;
	      this.attributeNamespace = null;
	      this.oldValue = null;
	    }
	    function registerTransientObservers(ancestor, node) {
	      for (;ancestor; ancestor = ancestor.parentNode) {
	        var registrations = registrationsTable.get(ancestor);
	        if (!registrations) continue;
	        for (var i = 0; i < registrations.length; i++) {
	          var registration = registrations[i];
	          if (registration.options.subtree) registration.addTransientObserver(node);
	        }
	      }
	    }
	    function removeTransientObserversFor(observer) {
	      for (var i = 0; i < observer.nodes_.length; i++) {
	        var node = observer.nodes_[i];
	        var registrations = registrationsTable.get(node);
	        if (!registrations) return;
	        for (var j = 0; j < registrations.length; j++) {
	          var registration = registrations[j];
	          if (registration.observer === observer) registration.removeTransientObservers();
	        }
	      }
	    }
	    function enqueueMutation(target, type, data) {
	      var interestedObservers = Object.create(null);
	      var associatedStrings = Object.create(null);
	      for (var node = target; node; node = node.parentNode) {
	        var registrations = registrationsTable.get(node);
	        if (!registrations) continue;
	        for (var j = 0; j < registrations.length; j++) {
	          var registration = registrations[j];
	          var options = registration.options;
	          if (node !== target && !options.subtree) continue;
	          if (type === "attributes" && !options.attributes) continue;
	          if (type === "attributes" && options.attributeFilter && (data.namespace !== null || options.attributeFilter.indexOf(data.name) === -1)) {
	            continue;
	          }
	          if (type === "characterData" && !options.characterData) continue;
	          if (type === "childList" && !options.childList) continue;
	          var observer = registration.observer;
	          interestedObservers[observer.uid_] = observer;
	          if (type === "attributes" && options.attributeOldValue || type === "characterData" && options.characterDataOldValue) {
	            associatedStrings[observer.uid_] = data.oldValue;
	          }
	        }
	      }
	      for (var uid in interestedObservers) {
	        var observer = interestedObservers[uid];
	        var record = new MutationRecord(type, target);
	        if ("name" in data && "namespace" in data) {
	          record.attributeName = data.name;
	          record.attributeNamespace = data.namespace;
	        }
	        if (data.addedNodes) record.addedNodes = data.addedNodes;
	        if (data.removedNodes) record.removedNodes = data.removedNodes;
	        if (data.previousSibling) record.previousSibling = data.previousSibling;
	        if (data.nextSibling) record.nextSibling = data.nextSibling;
	        if (associatedStrings[uid] !== undefined) record.oldValue = associatedStrings[uid];
	        scheduleCallback(observer);
	        observer.records_.push(record);
	      }
	    }
	    var slice = Array.prototype.slice;
	    function MutationObserverOptions(options) {
	      this.childList = !!options.childList;
	      this.subtree = !!options.subtree;
	      if (!("attributes" in options) && ("attributeOldValue" in options || "attributeFilter" in options)) {
	        this.attributes = true;
	      } else {
	        this.attributes = !!options.attributes;
	      }
	      if ("characterDataOldValue" in options && !("characterData" in options)) this.characterData = true; else this.characterData = !!options.characterData;
	      if (!this.attributes && (options.attributeOldValue || "attributeFilter" in options) || !this.characterData && options.characterDataOldValue) {
	        throw new TypeError();
	      }
	      this.characterData = !!options.characterData;
	      this.attributeOldValue = !!options.attributeOldValue;
	      this.characterDataOldValue = !!options.characterDataOldValue;
	      if ("attributeFilter" in options) {
	        if (options.attributeFilter == null || typeof options.attributeFilter !== "object") {
	          throw new TypeError();
	        }
	        this.attributeFilter = slice.call(options.attributeFilter);
	      } else {
	        this.attributeFilter = null;
	      }
	    }
	    var uidCounter = 0;
	    function MutationObserver(callback) {
	      this.callback_ = callback;
	      this.nodes_ = [];
	      this.records_ = [];
	      this.uid_ = ++uidCounter;
	      this.scheduled_ = false;
	    }
	    MutationObserver.prototype = {
	      constructor: MutationObserver,
	      observe: function(target, options) {
	        target = wrapIfNeeded(target);
	        var newOptions = new MutationObserverOptions(options);
	        var registration;
	        var registrations = registrationsTable.get(target);
	        if (!registrations) registrationsTable.set(target, registrations = []);
	        for (var i = 0; i < registrations.length; i++) {
	          if (registrations[i].observer === this) {
	            registration = registrations[i];
	            registration.removeTransientObservers();
	            registration.options = newOptions;
	          }
	        }
	        if (!registration) {
	          registration = new Registration(this, target, newOptions);
	          registrations.push(registration);
	          this.nodes_.push(target);
	        }
	      },
	      disconnect: function() {
	        this.nodes_.forEach(function(node) {
	          var registrations = registrationsTable.get(node);
	          for (var i = 0; i < registrations.length; i++) {
	            var registration = registrations[i];
	            if (registration.observer === this) {
	              registrations.splice(i, 1);
	              break;
	            }
	          }
	        }, this);
	        this.records_ = [];
	      },
	      takeRecords: function() {
	        var copyOfRecords = this.records_;
	        this.records_ = [];
	        return copyOfRecords;
	      }
	    };
	    function Registration(observer, target, options) {
	      this.observer = observer;
	      this.target = target;
	      this.options = options;
	      this.transientObservedNodes = [];
	    }
	    Registration.prototype = {
	      addTransientObserver: function(node) {
	        if (node === this.target) return;
	        scheduleCallback(this.observer);
	        this.transientObservedNodes.push(node);
	        var registrations = registrationsTable.get(node);
	        if (!registrations) registrationsTable.set(node, registrations = []);
	        registrations.push(this);
	      },
	      removeTransientObservers: function() {
	        var transientObservedNodes = this.transientObservedNodes;
	        this.transientObservedNodes = [];
	        for (var i = 0; i < transientObservedNodes.length; i++) {
	          var node = transientObservedNodes[i];
	          var registrations = registrationsTable.get(node);
	          for (var j = 0; j < registrations.length; j++) {
	            if (registrations[j] === this) {
	              registrations.splice(j, 1);
	              break;
	            }
	          }
	        }
	      }
	    };
	    scope.enqueueMutation = enqueueMutation;
	    scope.registerTransientObservers = registerTransientObservers;
	    scope.wrappers.MutationObserver = MutationObserver;
	    scope.wrappers.MutationRecord = MutationRecord;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    function TreeScope(root, parent) {
	      this.root = root;
	      this.parent = parent;
	    }
	    TreeScope.prototype = {
	      get renderer() {
	        if (this.root instanceof scope.wrappers.ShadowRoot) {
	          return scope.getRendererForHost(this.root.host);
	        }
	        return null;
	      },
	      contains: function(treeScope) {
	        for (;treeScope; treeScope = treeScope.parent) {
	          if (treeScope === this) return true;
	        }
	        return false;
	      }
	    };
	    function setTreeScope(node, treeScope) {
	      if (node.treeScope_ !== treeScope) {
	        node.treeScope_ = treeScope;
	        for (var sr = node.shadowRoot; sr; sr = sr.olderShadowRoot) {
	          sr.treeScope_.parent = treeScope;
	        }
	        for (var child = node.firstChild; child; child = child.nextSibling) {
	          setTreeScope(child, treeScope);
	        }
	      }
	    }
	    function getTreeScope(node) {
	      if (node instanceof scope.wrappers.Window) {
	        debugger;
	      }
	      if (node.treeScope_) return node.treeScope_;
	      var parent = node.parentNode;
	      var treeScope;
	      if (parent) treeScope = getTreeScope(parent); else treeScope = new TreeScope(node, null);
	      return node.treeScope_ = treeScope;
	    }
	    scope.TreeScope = TreeScope;
	    scope.getTreeScope = getTreeScope;
	    scope.setTreeScope = setTreeScope;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var forwardMethodsToWrapper = scope.forwardMethodsToWrapper;
	    var getTreeScope = scope.getTreeScope;
	    var mixin = scope.mixin;
	    var registerWrapper = scope.registerWrapper;
	    var setWrapper = scope.setWrapper;
	    var unsafeUnwrap = scope.unsafeUnwrap;
	    var unwrap = scope.unwrap;
	    var wrap = scope.wrap;
	    var wrappers = scope.wrappers;
	    var wrappedFuns = new WeakMap();
	    var listenersTable = new WeakMap();
	    var handledEventsTable = new WeakMap();
	    var currentlyDispatchingEvents = new WeakMap();
	    var targetTable = new WeakMap();
	    var currentTargetTable = new WeakMap();
	    var relatedTargetTable = new WeakMap();
	    var eventPhaseTable = new WeakMap();
	    var stopPropagationTable = new WeakMap();
	    var stopImmediatePropagationTable = new WeakMap();
	    var eventHandlersTable = new WeakMap();
	    var eventPathTable = new WeakMap();
	    function isShadowRoot(node) {
	      return node instanceof wrappers.ShadowRoot;
	    }
	    function rootOfNode(node) {
	      return getTreeScope(node).root;
	    }
	    function getEventPath(node, event) {
	      var path = [];
	      var current = node;
	      path.push(current);
	      while (current) {
	        var destinationInsertionPoints = getDestinationInsertionPoints(current);
	        if (destinationInsertionPoints && destinationInsertionPoints.length > 0) {
	          for (var i = 0; i < destinationInsertionPoints.length; i++) {
	            var insertionPoint = destinationInsertionPoints[i];
	            if (isShadowInsertionPoint(insertionPoint)) {
	              var shadowRoot = rootOfNode(insertionPoint);
	              var olderShadowRoot = shadowRoot.olderShadowRoot;
	              if (olderShadowRoot) path.push(olderShadowRoot);
	            }
	            path.push(insertionPoint);
	          }
	          current = destinationInsertionPoints[destinationInsertionPoints.length - 1];
	        } else {
	          if (isShadowRoot(current)) {
	            if (inSameTree(node, current) && eventMustBeStopped(event)) {
	              break;
	            }
	            current = current.host;
	            path.push(current);
	          } else {
	            current = current.parentNode;
	            if (current) path.push(current);
	          }
	        }
	      }
	      return path;
	    }
	    function eventMustBeStopped(event) {
	      if (!event) return false;
	      switch (event.type) {
	       case "abort":
	       case "error":
	       case "select":
	       case "change":
	       case "load":
	       case "reset":
	       case "resize":
	       case "scroll":
	       case "selectstart":
	        return true;
	      }
	      return false;
	    }
	    function isShadowInsertionPoint(node) {
	      return node instanceof HTMLShadowElement;
	    }
	    function getDestinationInsertionPoints(node) {
	      return scope.getDestinationInsertionPoints(node);
	    }
	    function eventRetargetting(path, currentTarget) {
	      if (path.length === 0) return currentTarget;
	      if (currentTarget instanceof wrappers.Window) currentTarget = currentTarget.document;
	      var currentTargetTree = getTreeScope(currentTarget);
	      var originalTarget = path[0];
	      var originalTargetTree = getTreeScope(originalTarget);
	      var relativeTargetTree = lowestCommonInclusiveAncestor(currentTargetTree, originalTargetTree);
	      for (var i = 0; i < path.length; i++) {
	        var node = path[i];
	        if (getTreeScope(node) === relativeTargetTree) return node;
	      }
	      return path[path.length - 1];
	    }
	    function getTreeScopeAncestors(treeScope) {
	      var ancestors = [];
	      for (;treeScope; treeScope = treeScope.parent) {
	        ancestors.push(treeScope);
	      }
	      return ancestors;
	    }
	    function lowestCommonInclusiveAncestor(tsA, tsB) {
	      var ancestorsA = getTreeScopeAncestors(tsA);
	      var ancestorsB = getTreeScopeAncestors(tsB);
	      var result = null;
	      while (ancestorsA.length > 0 && ancestorsB.length > 0) {
	        var a = ancestorsA.pop();
	        var b = ancestorsB.pop();
	        if (a === b) result = a; else break;
	      }
	      return result;
	    }
	    function getTreeScopeRoot(ts) {
	      if (!ts.parent) return ts;
	      return getTreeScopeRoot(ts.parent);
	    }
	    function relatedTargetResolution(event, currentTarget, relatedTarget) {
	      if (currentTarget instanceof wrappers.Window) currentTarget = currentTarget.document;
	      var currentTargetTree = getTreeScope(currentTarget);
	      var relatedTargetTree = getTreeScope(relatedTarget);
	      var relatedTargetEventPath = getEventPath(relatedTarget, event);
	      var lowestCommonAncestorTree;
	      var lowestCommonAncestorTree = lowestCommonInclusiveAncestor(currentTargetTree, relatedTargetTree);
	      if (!lowestCommonAncestorTree) lowestCommonAncestorTree = relatedTargetTree.root;
	      for (var commonAncestorTree = lowestCommonAncestorTree; commonAncestorTree; commonAncestorTree = commonAncestorTree.parent) {
	        var adjustedRelatedTarget;
	        for (var i = 0; i < relatedTargetEventPath.length; i++) {
	          var node = relatedTargetEventPath[i];
	          if (getTreeScope(node) === commonAncestorTree) return node;
	        }
	      }
	      return null;
	    }
	    function inSameTree(a, b) {
	      return getTreeScope(a) === getTreeScope(b);
	    }
	    var NONE = 0;
	    var CAPTURING_PHASE = 1;
	    var AT_TARGET = 2;
	    var BUBBLING_PHASE = 3;
	    var pendingError;
	    function dispatchOriginalEvent(originalEvent) {
	      if (handledEventsTable.get(originalEvent)) return;
	      handledEventsTable.set(originalEvent, true);
	      dispatchEvent(wrap(originalEvent), wrap(originalEvent.target));
	      if (pendingError) {
	        var err = pendingError;
	        pendingError = null;
	        throw err;
	      }
	    }
	    function isLoadLikeEvent(event) {
	      switch (event.type) {
	       case "load":
	       case "beforeunload":
	       case "unload":
	        return true;
	      }
	      return false;
	    }
	    function dispatchEvent(event, originalWrapperTarget) {
	      if (currentlyDispatchingEvents.get(event)) throw new Error("InvalidStateError");
	      currentlyDispatchingEvents.set(event, true);
	      scope.renderAllPending();
	      var eventPath;
	      var overrideTarget;
	      var win;
	      if (isLoadLikeEvent(event) && !event.bubbles) {
	        var doc = originalWrapperTarget;
	        if (doc instanceof wrappers.Document && (win = doc.defaultView)) {
	          overrideTarget = doc;
	          eventPath = [];
	        }
	      }
	      if (!eventPath) {
	        if (originalWrapperTarget instanceof wrappers.Window) {
	          win = originalWrapperTarget;
	          eventPath = [];
	        } else {
	          eventPath = getEventPath(originalWrapperTarget, event);
	          if (!isLoadLikeEvent(event)) {
	            var doc = eventPath[eventPath.length - 1];
	            if (doc instanceof wrappers.Document) win = doc.defaultView;
	          }
	        }
	      }
	      eventPathTable.set(event, eventPath);
	      if (dispatchCapturing(event, eventPath, win, overrideTarget)) {
	        if (dispatchAtTarget(event, eventPath, win, overrideTarget)) {
	          dispatchBubbling(event, eventPath, win, overrideTarget);
	        }
	      }
	      eventPhaseTable.set(event, NONE);
	      currentTargetTable.delete(event, null);
	      currentlyDispatchingEvents.delete(event);
	      return event.defaultPrevented;
	    }
	    function dispatchCapturing(event, eventPath, win, overrideTarget) {
	      var phase = CAPTURING_PHASE;
	      if (win) {
	        if (!invoke(win, event, phase, eventPath, overrideTarget)) return false;
	      }
	      for (var i = eventPath.length - 1; i > 0; i--) {
	        if (!invoke(eventPath[i], event, phase, eventPath, overrideTarget)) return false;
	      }
	      return true;
	    }
	    function dispatchAtTarget(event, eventPath, win, overrideTarget) {
	      var phase = AT_TARGET;
	      var currentTarget = eventPath[0] || win;
	      return invoke(currentTarget, event, phase, eventPath, overrideTarget);
	    }
	    function dispatchBubbling(event, eventPath, win, overrideTarget) {
	      var phase = BUBBLING_PHASE;
	      for (var i = 1; i < eventPath.length; i++) {
	        if (!invoke(eventPath[i], event, phase, eventPath, overrideTarget)) return;
	      }
	      if (win && eventPath.length > 0) {
	        invoke(win, event, phase, eventPath, overrideTarget);
	      }
	    }
	    function invoke(currentTarget, event, phase, eventPath, overrideTarget) {
	      var listeners = listenersTable.get(currentTarget);
	      if (!listeners) return true;
	      var target = overrideTarget || eventRetargetting(eventPath, currentTarget);
	      if (target === currentTarget) {
	        if (phase === CAPTURING_PHASE) return true;
	        if (phase === BUBBLING_PHASE) phase = AT_TARGET;
	      } else if (phase === BUBBLING_PHASE && !event.bubbles) {
	        return true;
	      }
	      if ("relatedTarget" in event) {
	        var originalEvent = unwrap(event);
	        var unwrappedRelatedTarget = originalEvent.relatedTarget;
	        if (unwrappedRelatedTarget) {
	          if (unwrappedRelatedTarget instanceof Object && unwrappedRelatedTarget.addEventListener) {
	            var relatedTarget = wrap(unwrappedRelatedTarget);
	            var adjusted = relatedTargetResolution(event, currentTarget, relatedTarget);
	            if (adjusted === target) return true;
	          } else {
	            adjusted = null;
	          }
	          relatedTargetTable.set(event, adjusted);
	        }
	      }
	      eventPhaseTable.set(event, phase);
	      var type = event.type;
	      var anyRemoved = false;
	      targetTable.set(event, target);
	      currentTargetTable.set(event, currentTarget);
	      listeners.depth++;
	      for (var i = 0, len = listeners.length; i < len; i++) {
	        var listener = listeners[i];
	        if (listener.removed) {
	          anyRemoved = true;
	          continue;
	        }
	        if (listener.type !== type || !listener.capture && phase === CAPTURING_PHASE || listener.capture && phase === BUBBLING_PHASE) {
	          continue;
	        }
	        try {
	          if (typeof listener.handler === "function") listener.handler.call(currentTarget, event); else listener.handler.handleEvent(event);
	          if (stopImmediatePropagationTable.get(event)) return false;
	        } catch (ex) {
	          if (!pendingError) pendingError = ex;
	        }
	      }
	      listeners.depth--;
	      if (anyRemoved && listeners.depth === 0) {
	        var copy = listeners.slice();
	        listeners.length = 0;
	        for (var i = 0; i < copy.length; i++) {
	          if (!copy[i].removed) listeners.push(copy[i]);
	        }
	      }
	      return !stopPropagationTable.get(event);
	    }
	    function Listener(type, handler, capture) {
	      this.type = type;
	      this.handler = handler;
	      this.capture = Boolean(capture);
	    }
	    Listener.prototype = {
	      equals: function(that) {
	        return this.handler === that.handler && this.type === that.type && this.capture === that.capture;
	      },
	      get removed() {
	        return this.handler === null;
	      },
	      remove: function() {
	        this.handler = null;
	      }
	    };
	    var OriginalEvent = window.Event;
	    OriginalEvent.prototype.polymerBlackList_ = {
	      returnValue: true,
	      keyLocation: true
	    };
	    function Event(type, options) {
	      if (type instanceof OriginalEvent) {
	        var impl = type;
	        if (!OriginalBeforeUnloadEvent && impl.type === "beforeunload" && !(this instanceof BeforeUnloadEvent)) {
	          return new BeforeUnloadEvent(impl);
	        }
	        setWrapper(impl, this);
	      } else {
	        return wrap(constructEvent(OriginalEvent, "Event", type, options));
	      }
	    }
	    Event.prototype = {
	      get target() {
	        return targetTable.get(this);
	      },
	      get currentTarget() {
	        return currentTargetTable.get(this);
	      },
	      get eventPhase() {
	        return eventPhaseTable.get(this);
	      },
	      get path() {
	        var eventPath = eventPathTable.get(this);
	        if (!eventPath) return [];
	        return eventPath.slice();
	      },
	      stopPropagation: function() {
	        stopPropagationTable.set(this, true);
	      },
	      stopImmediatePropagation: function() {
	        stopPropagationTable.set(this, true);
	        stopImmediatePropagationTable.set(this, true);
	      }
	    };
	    var supportsDefaultPrevented = function() {
	      var e = document.createEvent("Event");
	      e.initEvent("test", true, true);
	      e.preventDefault();
	      return e.defaultPrevented;
	    }();
	    if (!supportsDefaultPrevented) {
	      Event.prototype.preventDefault = function() {
	        if (!this.cancelable) return;
	        unsafeUnwrap(this).preventDefault();
	        Object.defineProperty(this, "defaultPrevented", {
	          get: function() {
	            return true;
	          },
	          configurable: true
	        });
	      };
	    }
	    registerWrapper(OriginalEvent, Event, document.createEvent("Event"));
	    function unwrapOptions(options) {
	      if (!options || !options.relatedTarget) return options;
	      return Object.create(options, {
	        relatedTarget: {
	          value: unwrap(options.relatedTarget)
	        }
	      });
	    }
	    function registerGenericEvent(name, SuperEvent, prototype) {
	      var OriginalEvent = window[name];
	      var GenericEvent = function(type, options) {
	        if (type instanceof OriginalEvent) setWrapper(type, this); else return wrap(constructEvent(OriginalEvent, name, type, options));
	      };
	      GenericEvent.prototype = Object.create(SuperEvent.prototype);
	      if (prototype) mixin(GenericEvent.prototype, prototype);
	      if (OriginalEvent) {
	        try {
	          registerWrapper(OriginalEvent, GenericEvent, new OriginalEvent("temp"));
	        } catch (ex) {
	          registerWrapper(OriginalEvent, GenericEvent, document.createEvent(name));
	        }
	      }
	      return GenericEvent;
	    }
	    var UIEvent = registerGenericEvent("UIEvent", Event);
	    var CustomEvent = registerGenericEvent("CustomEvent", Event);
	    var relatedTargetProto = {
	      get relatedTarget() {
	        var relatedTarget = relatedTargetTable.get(this);
	        if (relatedTarget !== undefined) return relatedTarget;
	        return wrap(unwrap(this).relatedTarget);
	      }
	    };
	    function getInitFunction(name, relatedTargetIndex) {
	      return function() {
	        arguments[relatedTargetIndex] = unwrap(arguments[relatedTargetIndex]);
	        var impl = unwrap(this);
	        impl[name].apply(impl, arguments);
	      };
	    }
	    var mouseEventProto = mixin({
	      initMouseEvent: getInitFunction("initMouseEvent", 14)
	    }, relatedTargetProto);
	    var focusEventProto = mixin({
	      initFocusEvent: getInitFunction("initFocusEvent", 5)
	    }, relatedTargetProto);
	    var MouseEvent = registerGenericEvent("MouseEvent", UIEvent, mouseEventProto);
	    var FocusEvent = registerGenericEvent("FocusEvent", UIEvent, focusEventProto);
	    var defaultInitDicts = Object.create(null);
	    var supportsEventConstructors = function() {
	      try {
	        new window.FocusEvent("focus");
	      } catch (ex) {
	        return false;
	      }
	      return true;
	    }();
	    function constructEvent(OriginalEvent, name, type, options) {
	      if (supportsEventConstructors) return new OriginalEvent(type, unwrapOptions(options));
	      var event = unwrap(document.createEvent(name));
	      var defaultDict = defaultInitDicts[name];
	      var args = [ type ];
	      Object.keys(defaultDict).forEach(function(key) {
	        var v = options != null && key in options ? options[key] : defaultDict[key];
	        if (key === "relatedTarget") v = unwrap(v);
	        args.push(v);
	      });
	      event["init" + name].apply(event, args);
	      return event;
	    }
	    if (!supportsEventConstructors) {
	      var configureEventConstructor = function(name, initDict, superName) {
	        if (superName) {
	          var superDict = defaultInitDicts[superName];
	          initDict = mixin(mixin({}, superDict), initDict);
	        }
	        defaultInitDicts[name] = initDict;
	      };
	      configureEventConstructor("Event", {
	        bubbles: false,
	        cancelable: false
	      });
	      configureEventConstructor("CustomEvent", {
	        detail: null
	      }, "Event");
	      configureEventConstructor("UIEvent", {
	        view: null,
	        detail: 0
	      }, "Event");
	      configureEventConstructor("MouseEvent", {
	        screenX: 0,
	        screenY: 0,
	        clientX: 0,
	        clientY: 0,
	        ctrlKey: false,
	        altKey: false,
	        shiftKey: false,
	        metaKey: false,
	        button: 0,
	        relatedTarget: null
	      }, "UIEvent");
	      configureEventConstructor("FocusEvent", {
	        relatedTarget: null
	      }, "UIEvent");
	    }
	    var OriginalBeforeUnloadEvent = window.BeforeUnloadEvent;
	    function BeforeUnloadEvent(impl) {
	      Event.call(this, impl);
	    }
	    BeforeUnloadEvent.prototype = Object.create(Event.prototype);
	    mixin(BeforeUnloadEvent.prototype, {
	      get returnValue() {
	        return unsafeUnwrap(this).returnValue;
	      },
	      set returnValue(v) {
	        unsafeUnwrap(this).returnValue = v;
	      }
	    });
	    if (OriginalBeforeUnloadEvent) registerWrapper(OriginalBeforeUnloadEvent, BeforeUnloadEvent);
	    function isValidListener(fun) {
	      if (typeof fun === "function") return true;
	      return fun && fun.handleEvent;
	    }
	    function isMutationEvent(type) {
	      switch (type) {
	       case "DOMAttrModified":
	       case "DOMAttributeNameChanged":
	       case "DOMCharacterDataModified":
	       case "DOMElementNameChanged":
	       case "DOMNodeInserted":
	       case "DOMNodeInsertedIntoDocument":
	       case "DOMNodeRemoved":
	       case "DOMNodeRemovedFromDocument":
	       case "DOMSubtreeModified":
	        return true;
	      }
	      return false;
	    }
	    var OriginalEventTarget = window.EventTarget;
	    function EventTarget(impl) {
	      setWrapper(impl, this);
	    }
	    var methodNames = [ "addEventListener", "removeEventListener", "dispatchEvent" ];
	    [ Node, Window ].forEach(function(constructor) {
	      var p = constructor.prototype;
	      methodNames.forEach(function(name) {
	        Object.defineProperty(p, name + "_", {
	          value: p[name]
	        });
	      });
	    });
	    function getTargetToListenAt(wrapper) {
	      if (wrapper instanceof wrappers.ShadowRoot) wrapper = wrapper.host;
	      return unwrap(wrapper);
	    }
	    EventTarget.prototype = {
	      addEventListener: function(type, fun, capture) {
	        if (!isValidListener(fun) || isMutationEvent(type)) return;
	        var listener = new Listener(type, fun, capture);
	        var listeners = listenersTable.get(this);
	        if (!listeners) {
	          listeners = [];
	          listeners.depth = 0;
	          listenersTable.set(this, listeners);
	        } else {
	          for (var i = 0; i < listeners.length; i++) {
	            if (listener.equals(listeners[i])) return;
	          }
	        }
	        listeners.push(listener);
	        var target = getTargetToListenAt(this);
	        target.addEventListener_(type, dispatchOriginalEvent, true);
	      },
	      removeEventListener: function(type, fun, capture) {
	        capture = Boolean(capture);
	        var listeners = listenersTable.get(this);
	        if (!listeners) return;
	        var count = 0, found = false;
	        for (var i = 0; i < listeners.length; i++) {
	          if (listeners[i].type === type && listeners[i].capture === capture) {
	            count++;
	            if (listeners[i].handler === fun) {
	              found = true;
	              listeners[i].remove();
	            }
	          }
	        }
	        if (found && count === 1) {
	          var target = getTargetToListenAt(this);
	          target.removeEventListener_(type, dispatchOriginalEvent, true);
	        }
	      },
	      dispatchEvent: function(event) {
	        var nativeEvent = unwrap(event);
	        var eventType = nativeEvent.type;
	        handledEventsTable.set(nativeEvent, false);
	        scope.renderAllPending();
	        var tempListener;
	        if (!hasListenerInAncestors(this, eventType)) {
	          tempListener = function() {};
	          this.addEventListener(eventType, tempListener, true);
	        }
	        try {
	          return unwrap(this).dispatchEvent_(nativeEvent);
	        } finally {
	          if (tempListener) this.removeEventListener(eventType, tempListener, true);
	        }
	      }
	    };
	    function hasListener(node, type) {
	      var listeners = listenersTable.get(node);
	      if (listeners) {
	        for (var i = 0; i < listeners.length; i++) {
	          if (!listeners[i].removed && listeners[i].type === type) return true;
	        }
	      }
	      return false;
	    }
	    function hasListenerInAncestors(target, type) {
	      for (var node = unwrap(target); node; node = node.parentNode) {
	        if (hasListener(wrap(node), type)) return true;
	      }
	      return false;
	    }
	    if (OriginalEventTarget) registerWrapper(OriginalEventTarget, EventTarget);
	    function wrapEventTargetMethods(constructors) {
	      forwardMethodsToWrapper(constructors, methodNames);
	    }
	    var originalElementFromPoint = document.elementFromPoint;
	    function elementFromPoint(self, document, x, y) {
	      scope.renderAllPending();
	      var element = wrap(originalElementFromPoint.call(unsafeUnwrap(document), x, y));
	      if (!element) return null;
	      var path = getEventPath(element, null);
	      var idx = path.lastIndexOf(self);
	      if (idx == -1) return null; else path = path.slice(0, idx);
	      return eventRetargetting(path, self);
	    }
	    function getEventHandlerGetter(name) {
	      return function() {
	        var inlineEventHandlers = eventHandlersTable.get(this);
	        return inlineEventHandlers && inlineEventHandlers[name] && inlineEventHandlers[name].value || null;
	      };
	    }
	    function getEventHandlerSetter(name) {
	      var eventType = name.slice(2);
	      return function(value) {
	        var inlineEventHandlers = eventHandlersTable.get(this);
	        if (!inlineEventHandlers) {
	          inlineEventHandlers = Object.create(null);
	          eventHandlersTable.set(this, inlineEventHandlers);
	        }
	        var old = inlineEventHandlers[name];
	        if (old) this.removeEventListener(eventType, old.wrapped, false);
	        if (typeof value === "function") {
	          var wrapped = function(e) {
	            var rv = value.call(this, e);
	            if (rv === false) e.preventDefault(); else if (name === "onbeforeunload" && typeof rv === "string") e.returnValue = rv;
	          };
	          this.addEventListener(eventType, wrapped, false);
	          inlineEventHandlers[name] = {
	            value: value,
	            wrapped: wrapped
	          };
	        }
	      };
	    }
	    scope.elementFromPoint = elementFromPoint;
	    scope.getEventHandlerGetter = getEventHandlerGetter;
	    scope.getEventHandlerSetter = getEventHandlerSetter;
	    scope.wrapEventTargetMethods = wrapEventTargetMethods;
	    scope.wrappers.BeforeUnloadEvent = BeforeUnloadEvent;
	    scope.wrappers.CustomEvent = CustomEvent;
	    scope.wrappers.Event = Event;
	    scope.wrappers.EventTarget = EventTarget;
	    scope.wrappers.FocusEvent = FocusEvent;
	    scope.wrappers.MouseEvent = MouseEvent;
	    scope.wrappers.UIEvent = UIEvent;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var UIEvent = scope.wrappers.UIEvent;
	    var mixin = scope.mixin;
	    var registerWrapper = scope.registerWrapper;
	    var setWrapper = scope.setWrapper;
	    var unsafeUnwrap = scope.unsafeUnwrap;
	    var wrap = scope.wrap;
	    var OriginalTouchEvent = window.TouchEvent;
	    if (!OriginalTouchEvent) return;
	    var nativeEvent;
	    try {
	      nativeEvent = document.createEvent("TouchEvent");
	    } catch (ex) {
	      return;
	    }
	    var nonEnumDescriptor = {
	      enumerable: false
	    };
	    function nonEnum(obj, prop) {
	      Object.defineProperty(obj, prop, nonEnumDescriptor);
	    }
	    function Touch(impl) {
	      setWrapper(impl, this);
	    }
	    Touch.prototype = {
	      get target() {
	        return wrap(unsafeUnwrap(this).target);
	      }
	    };
	    var descr = {
	      configurable: true,
	      enumerable: true,
	      get: null
	    };
	    [ "clientX", "clientY", "screenX", "screenY", "pageX", "pageY", "identifier", "webkitRadiusX", "webkitRadiusY", "webkitRotationAngle", "webkitForce" ].forEach(function(name) {
	      descr.get = function() {
	        return unsafeUnwrap(this)[name];
	      };
	      Object.defineProperty(Touch.prototype, name, descr);
	    });
	    function TouchList() {
	      this.length = 0;
	      nonEnum(this, "length");
	    }
	    TouchList.prototype = {
	      item: function(index) {
	        return this[index];
	      }
	    };
	    function wrapTouchList(nativeTouchList) {
	      var list = new TouchList();
	      for (var i = 0; i < nativeTouchList.length; i++) {
	        list[i] = new Touch(nativeTouchList[i]);
	      }
	      list.length = i;
	      return list;
	    }
	    function TouchEvent(impl) {
	      UIEvent.call(this, impl);
	    }
	    TouchEvent.prototype = Object.create(UIEvent.prototype);
	    mixin(TouchEvent.prototype, {
	      get touches() {
	        return wrapTouchList(unsafeUnwrap(this).touches);
	      },
	      get targetTouches() {
	        return wrapTouchList(unsafeUnwrap(this).targetTouches);
	      },
	      get changedTouches() {
	        return wrapTouchList(unsafeUnwrap(this).changedTouches);
	      },
	      initTouchEvent: function() {
	        throw new Error("Not implemented");
	      }
	    });
	    registerWrapper(OriginalTouchEvent, TouchEvent, nativeEvent);
	    scope.wrappers.Touch = Touch;
	    scope.wrappers.TouchEvent = TouchEvent;
	    scope.wrappers.TouchList = TouchList;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var unsafeUnwrap = scope.unsafeUnwrap;
	    var wrap = scope.wrap;
	    var nonEnumDescriptor = {
	      enumerable: false
	    };
	    function nonEnum(obj, prop) {
	      Object.defineProperty(obj, prop, nonEnumDescriptor);
	    }
	    function NodeList() {
	      this.length = 0;
	      nonEnum(this, "length");
	    }
	    NodeList.prototype = {
	      item: function(index) {
	        return this[index];
	      }
	    };
	    nonEnum(NodeList.prototype, "item");
	    function wrapNodeList(list) {
	      if (list == null) return list;
	      var wrapperList = new NodeList();
	      for (var i = 0, length = list.length; i < length; i++) {
	        wrapperList[i] = wrap(list[i]);
	      }
	      wrapperList.length = length;
	      return wrapperList;
	    }
	    function addWrapNodeListMethod(wrapperConstructor, name) {
	      wrapperConstructor.prototype[name] = function() {
	        return wrapNodeList(unsafeUnwrap(this)[name].apply(unsafeUnwrap(this), arguments));
	      };
	    }
	    scope.wrappers.NodeList = NodeList;
	    scope.addWrapNodeListMethod = addWrapNodeListMethod;
	    scope.wrapNodeList = wrapNodeList;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    scope.wrapHTMLCollection = scope.wrapNodeList;
	    scope.wrappers.HTMLCollection = scope.wrappers.NodeList;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var EventTarget = scope.wrappers.EventTarget;
	    var NodeList = scope.wrappers.NodeList;
	    var TreeScope = scope.TreeScope;
	    var assert = scope.assert;
	    var defineWrapGetter = scope.defineWrapGetter;
	    var enqueueMutation = scope.enqueueMutation;
	    var getTreeScope = scope.getTreeScope;
	    var isWrapper = scope.isWrapper;
	    var mixin = scope.mixin;
	    var registerTransientObservers = scope.registerTransientObservers;
	    var registerWrapper = scope.registerWrapper;
	    var setTreeScope = scope.setTreeScope;
	    var unsafeUnwrap = scope.unsafeUnwrap;
	    var unwrap = scope.unwrap;
	    var unwrapIfNeeded = scope.unwrapIfNeeded;
	    var wrap = scope.wrap;
	    var wrapIfNeeded = scope.wrapIfNeeded;
	    var wrappers = scope.wrappers;
	    function assertIsNodeWrapper(node) {
	      assert(node instanceof Node);
	    }
	    function createOneElementNodeList(node) {
	      var nodes = new NodeList();
	      nodes[0] = node;
	      nodes.length = 1;
	      return nodes;
	    }
	    var surpressMutations = false;
	    function enqueueRemovalForInsertedNodes(node, parent, nodes) {
	      enqueueMutation(parent, "childList", {
	        removedNodes: nodes,
	        previousSibling: node.previousSibling,
	        nextSibling: node.nextSibling
	      });
	    }
	    function enqueueRemovalForInsertedDocumentFragment(df, nodes) {
	      enqueueMutation(df, "childList", {
	        removedNodes: nodes
	      });
	    }
	    function collectNodes(node, parentNode, previousNode, nextNode) {
	      if (node instanceof DocumentFragment) {
	        var nodes = collectNodesForDocumentFragment(node);
	        surpressMutations = true;
	        for (var i = nodes.length - 1; i >= 0; i--) {
	          node.removeChild(nodes[i]);
	          nodes[i].parentNode_ = parentNode;
	        }
	        surpressMutations = false;
	        for (var i = 0; i < nodes.length; i++) {
	          nodes[i].previousSibling_ = nodes[i - 1] || previousNode;
	          nodes[i].nextSibling_ = nodes[i + 1] || nextNode;
	        }
	        if (previousNode) previousNode.nextSibling_ = nodes[0];
	        if (nextNode) nextNode.previousSibling_ = nodes[nodes.length - 1];
	        return nodes;
	      }
	      var nodes = createOneElementNodeList(node);
	      var oldParent = node.parentNode;
	      if (oldParent) {
	        oldParent.removeChild(node);
	      }
	      node.parentNode_ = parentNode;
	      node.previousSibling_ = previousNode;
	      node.nextSibling_ = nextNode;
	      if (previousNode) previousNode.nextSibling_ = node;
	      if (nextNode) nextNode.previousSibling_ = node;
	      return nodes;
	    }
	    function collectNodesNative(node) {
	      if (node instanceof DocumentFragment) return collectNodesForDocumentFragment(node);
	      var nodes = createOneElementNodeList(node);
	      var oldParent = node.parentNode;
	      if (oldParent) enqueueRemovalForInsertedNodes(node, oldParent, nodes);
	      return nodes;
	    }
	    function collectNodesForDocumentFragment(node) {
	      var nodes = new NodeList();
	      var i = 0;
	      for (var child = node.firstChild; child; child = child.nextSibling) {
	        nodes[i++] = child;
	      }
	      nodes.length = i;
	      enqueueRemovalForInsertedDocumentFragment(node, nodes);
	      return nodes;
	    }
	    function snapshotNodeList(nodeList) {
	      return nodeList;
	    }
	    function nodeWasAdded(node, treeScope) {
	      setTreeScope(node, treeScope);
	      node.nodeIsInserted_();
	    }
	    function nodesWereAdded(nodes, parent) {
	      var treeScope = getTreeScope(parent);
	      for (var i = 0; i < nodes.length; i++) {
	        nodeWasAdded(nodes[i], treeScope);
	      }
	    }
	    function nodeWasRemoved(node) {
	      setTreeScope(node, new TreeScope(node, null));
	    }
	    function nodesWereRemoved(nodes) {
	      for (var i = 0; i < nodes.length; i++) {
	        nodeWasRemoved(nodes[i]);
	      }
	    }
	    function ensureSameOwnerDocument(parent, child) {
	      var ownerDoc = parent.nodeType === Node.DOCUMENT_NODE ? parent : parent.ownerDocument;
	      if (ownerDoc !== child.ownerDocument) ownerDoc.adoptNode(child);
	    }
	    function adoptNodesIfNeeded(owner, nodes) {
	      if (!nodes.length) return;
	      var ownerDoc = owner.ownerDocument;
	      if (ownerDoc === nodes[0].ownerDocument) return;
	      for (var i = 0; i < nodes.length; i++) {
	        scope.adoptNodeNoRemove(nodes[i], ownerDoc);
	      }
	    }
	    function unwrapNodesForInsertion(owner, nodes) {
	      adoptNodesIfNeeded(owner, nodes);
	      var length = nodes.length;
	      if (length === 1) return unwrap(nodes[0]);
	      var df = unwrap(owner.ownerDocument.createDocumentFragment());
	      for (var i = 0; i < length; i++) {
	        df.appendChild(unwrap(nodes[i]));
	      }
	      return df;
	    }
	    function clearChildNodes(wrapper) {
	      if (wrapper.firstChild_ !== undefined) {
	        var child = wrapper.firstChild_;
	        while (child) {
	          var tmp = child;
	          child = child.nextSibling_;
	          tmp.parentNode_ = tmp.previousSibling_ = tmp.nextSibling_ = undefined;
	        }
	      }
	      wrapper.firstChild_ = wrapper.lastChild_ = undefined;
	    }
	    function removeAllChildNodes(wrapper) {
	      if (wrapper.invalidateShadowRenderer()) {
	        var childWrapper = wrapper.firstChild;
	        while (childWrapper) {
	          assert(childWrapper.parentNode === wrapper);
	          var nextSibling = childWrapper.nextSibling;
	          var childNode = unwrap(childWrapper);
	          var parentNode = childNode.parentNode;
	          if (parentNode) originalRemoveChild.call(parentNode, childNode);
	          childWrapper.previousSibling_ = childWrapper.nextSibling_ = childWrapper.parentNode_ = null;
	          childWrapper = nextSibling;
	        }
	        wrapper.firstChild_ = wrapper.lastChild_ = null;
	      } else {
	        var node = unwrap(wrapper);
	        var child = node.firstChild;
	        var nextSibling;
	        while (child) {
	          nextSibling = child.nextSibling;
	          originalRemoveChild.call(node, child);
	          child = nextSibling;
	        }
	      }
	    }
	    function invalidateParent(node) {
	      var p = node.parentNode;
	      return p && p.invalidateShadowRenderer();
	    }
	    function cleanupNodes(nodes) {
	      for (var i = 0, n; i < nodes.length; i++) {
	        n = nodes[i];
	        n.parentNode.removeChild(n);
	      }
	    }
	    var originalImportNode = document.importNode;
	    var originalCloneNode = window.Node.prototype.cloneNode;
	    function cloneNode(node, deep, opt_doc) {
	      var clone;
	      if (opt_doc) clone = wrap(originalImportNode.call(opt_doc, unsafeUnwrap(node), false)); else clone = wrap(originalCloneNode.call(unsafeUnwrap(node), false));
	      if (deep) {
	        for (var child = node.firstChild; child; child = child.nextSibling) {
	          clone.appendChild(cloneNode(child, true, opt_doc));
	        }
	        if (node instanceof wrappers.HTMLTemplateElement) {
	          var cloneContent = clone.content;
	          for (var child = node.content.firstChild; child; child = child.nextSibling) {
	            cloneContent.appendChild(cloneNode(child, true, opt_doc));
	          }
	        }
	      }
	      return clone;
	    }
	    function contains(self, child) {
	      if (!child || getTreeScope(self) !== getTreeScope(child)) return false;
	      for (var node = child; node; node = node.parentNode) {
	        if (node === self) return true;
	      }
	      return false;
	    }
	    var OriginalNode = window.Node;
	    function Node(original) {
	      assert(original instanceof OriginalNode);
	      EventTarget.call(this, original);
	      this.parentNode_ = undefined;
	      this.firstChild_ = undefined;
	      this.lastChild_ = undefined;
	      this.nextSibling_ = undefined;
	      this.previousSibling_ = undefined;
	      this.treeScope_ = undefined;
	    }
	    var OriginalDocumentFragment = window.DocumentFragment;
	    var originalAppendChild = OriginalNode.prototype.appendChild;
	    var originalCompareDocumentPosition = OriginalNode.prototype.compareDocumentPosition;
	    var originalIsEqualNode = OriginalNode.prototype.isEqualNode;
	    var originalInsertBefore = OriginalNode.prototype.insertBefore;
	    var originalRemoveChild = OriginalNode.prototype.removeChild;
	    var originalReplaceChild = OriginalNode.prototype.replaceChild;
	    var isIEOrEdge = /Trident|Edge/.test(navigator.userAgent);
	    var removeChildOriginalHelper = isIEOrEdge ? function(parent, child) {
	      try {
	        originalRemoveChild.call(parent, child);
	      } catch (ex) {
	        if (!(parent instanceof OriginalDocumentFragment)) throw ex;
	      }
	    } : function(parent, child) {
	      originalRemoveChild.call(parent, child);
	    };
	    Node.prototype = Object.create(EventTarget.prototype);
	    mixin(Node.prototype, {
	      appendChild: function(childWrapper) {
	        return this.insertBefore(childWrapper, null);
	      },
	      insertBefore: function(childWrapper, refWrapper) {
	        assertIsNodeWrapper(childWrapper);
	        var refNode;
	        if (refWrapper) {
	          if (isWrapper(refWrapper)) {
	            refNode = unwrap(refWrapper);
	          } else {
	            refNode = refWrapper;
	            refWrapper = wrap(refNode);
	          }
	        } else {
	          refWrapper = null;
	          refNode = null;
	        }
	        refWrapper && assert(refWrapper.parentNode === this);
	        var nodes;
	        var previousNode = refWrapper ? refWrapper.previousSibling : this.lastChild;
	        var useNative = !this.invalidateShadowRenderer() && !invalidateParent(childWrapper);
	        if (useNative) nodes = collectNodesNative(childWrapper); else nodes = collectNodes(childWrapper, this, previousNode, refWrapper);
	        if (useNative) {
	          ensureSameOwnerDocument(this, childWrapper);
	          clearChildNodes(this);
	          originalInsertBefore.call(unsafeUnwrap(this), unwrap(childWrapper), refNode);
	        } else {
	          if (!previousNode) this.firstChild_ = nodes[0];
	          if (!refWrapper) {
	            this.lastChild_ = nodes[nodes.length - 1];
	            if (this.firstChild_ === undefined) this.firstChild_ = this.firstChild;
	          }
	          var parentNode = refNode ? refNode.parentNode : unsafeUnwrap(this);
	          if (parentNode) {
	            originalInsertBefore.call(parentNode, unwrapNodesForInsertion(this, nodes), refNode);
	          } else {
	            adoptNodesIfNeeded(this, nodes);
	          }
	        }
	        enqueueMutation(this, "childList", {
	          addedNodes: nodes,
	          nextSibling: refWrapper,
	          previousSibling: previousNode
	        });
	        nodesWereAdded(nodes, this);
	        return childWrapper;
	      },
	      removeChild: function(childWrapper) {
	        assertIsNodeWrapper(childWrapper);
	        if (childWrapper.parentNode !== this) {
	          var found = false;
	          var childNodes = this.childNodes;
	          for (var ieChild = this.firstChild; ieChild; ieChild = ieChild.nextSibling) {
	            if (ieChild === childWrapper) {
	              found = true;
	              break;
	            }
	          }
	          if (!found) {
	            throw new Error("NotFoundError");
	          }
	        }
	        var childNode = unwrap(childWrapper);
	        var childWrapperNextSibling = childWrapper.nextSibling;
	        var childWrapperPreviousSibling = childWrapper.previousSibling;
	        if (this.invalidateShadowRenderer()) {
	          var thisFirstChild = this.firstChild;
	          var thisLastChild = this.lastChild;
	          var parentNode = childNode.parentNode;
	          if (parentNode) removeChildOriginalHelper(parentNode, childNode);
	          if (thisFirstChild === childWrapper) this.firstChild_ = childWrapperNextSibling;
	          if (thisLastChild === childWrapper) this.lastChild_ = childWrapperPreviousSibling;
	          if (childWrapperPreviousSibling) childWrapperPreviousSibling.nextSibling_ = childWrapperNextSibling;
	          if (childWrapperNextSibling) {
	            childWrapperNextSibling.previousSibling_ = childWrapperPreviousSibling;
	          }
	          childWrapper.previousSibling_ = childWrapper.nextSibling_ = childWrapper.parentNode_ = undefined;
	        } else {
	          clearChildNodes(this);
	          removeChildOriginalHelper(unsafeUnwrap(this), childNode);
	        }
	        if (!surpressMutations) {
	          enqueueMutation(this, "childList", {
	            removedNodes: createOneElementNodeList(childWrapper),
	            nextSibling: childWrapperNextSibling,
	            previousSibling: childWrapperPreviousSibling
	          });
	        }
	        registerTransientObservers(this, childWrapper);
	        return childWrapper;
	      },
	      replaceChild: function(newChildWrapper, oldChildWrapper) {
	        assertIsNodeWrapper(newChildWrapper);
	        var oldChildNode;
	        if (isWrapper(oldChildWrapper)) {
	          oldChildNode = unwrap(oldChildWrapper);
	        } else {
	          oldChildNode = oldChildWrapper;
	          oldChildWrapper = wrap(oldChildNode);
	        }
	        if (oldChildWrapper.parentNode !== this) {
	          throw new Error("NotFoundError");
	        }
	        var nextNode = oldChildWrapper.nextSibling;
	        var previousNode = oldChildWrapper.previousSibling;
	        var nodes;
	        var useNative = !this.invalidateShadowRenderer() && !invalidateParent(newChildWrapper);
	        if (useNative) {
	          nodes = collectNodesNative(newChildWrapper);
	        } else {
	          if (nextNode === newChildWrapper) nextNode = newChildWrapper.nextSibling;
	          nodes = collectNodes(newChildWrapper, this, previousNode, nextNode);
	        }
	        if (!useNative) {
	          if (this.firstChild === oldChildWrapper) this.firstChild_ = nodes[0];
	          if (this.lastChild === oldChildWrapper) this.lastChild_ = nodes[nodes.length - 1];
	          oldChildWrapper.previousSibling_ = oldChildWrapper.nextSibling_ = oldChildWrapper.parentNode_ = undefined;
	          if (oldChildNode.parentNode) {
	            originalReplaceChild.call(oldChildNode.parentNode, unwrapNodesForInsertion(this, nodes), oldChildNode);
	          }
	        } else {
	          ensureSameOwnerDocument(this, newChildWrapper);
	          clearChildNodes(this);
	          originalReplaceChild.call(unsafeUnwrap(this), unwrap(newChildWrapper), oldChildNode);
	        }
	        enqueueMutation(this, "childList", {
	          addedNodes: nodes,
	          removedNodes: createOneElementNodeList(oldChildWrapper),
	          nextSibling: nextNode,
	          previousSibling: previousNode
	        });
	        nodeWasRemoved(oldChildWrapper);
	        nodesWereAdded(nodes, this);
	        return oldChildWrapper;
	      },
	      nodeIsInserted_: function() {
	        for (var child = this.firstChild; child; child = child.nextSibling) {
	          child.nodeIsInserted_();
	        }
	      },
	      hasChildNodes: function() {
	        return this.firstChild !== null;
	      },
	      get parentNode() {
	        return this.parentNode_ !== undefined ? this.parentNode_ : wrap(unsafeUnwrap(this).parentNode);
	      },
	      get firstChild() {
	        return this.firstChild_ !== undefined ? this.firstChild_ : wrap(unsafeUnwrap(this).firstChild);
	      },
	      get lastChild() {
	        return this.lastChild_ !== undefined ? this.lastChild_ : wrap(unsafeUnwrap(this).lastChild);
	      },
	      get nextSibling() {
	        return this.nextSibling_ !== undefined ? this.nextSibling_ : wrap(unsafeUnwrap(this).nextSibling);
	      },
	      get previousSibling() {
	        return this.previousSibling_ !== undefined ? this.previousSibling_ : wrap(unsafeUnwrap(this).previousSibling);
	      },
	      get parentElement() {
	        var p = this.parentNode;
	        while (p && p.nodeType !== Node.ELEMENT_NODE) {
	          p = p.parentNode;
	        }
	        return p;
	      },
	      get textContent() {
	        var s = "";
	        for (var child = this.firstChild; child; child = child.nextSibling) {
	          if (child.nodeType != Node.COMMENT_NODE) {
	            s += child.textContent;
	          }
	        }
	        return s;
	      },
	      set textContent(textContent) {
	        if (textContent == null) textContent = "";
	        var removedNodes = snapshotNodeList(this.childNodes);
	        if (this.invalidateShadowRenderer()) {
	          removeAllChildNodes(this);
	          if (textContent !== "") {
	            var textNode = unsafeUnwrap(this).ownerDocument.createTextNode(textContent);
	            this.appendChild(textNode);
	          }
	        } else {
	          clearChildNodes(this);
	          unsafeUnwrap(this).textContent = textContent;
	        }
	        var addedNodes = snapshotNodeList(this.childNodes);
	        enqueueMutation(this, "childList", {
	          addedNodes: addedNodes,
	          removedNodes: removedNodes
	        });
	        nodesWereRemoved(removedNodes);
	        nodesWereAdded(addedNodes, this);
	      },
	      get childNodes() {
	        var wrapperList = new NodeList();
	        var i = 0;
	        for (var child = this.firstChild; child; child = child.nextSibling) {
	          wrapperList[i++] = child;
	        }
	        wrapperList.length = i;
	        return wrapperList;
	      },
	      cloneNode: function(deep) {
	        return cloneNode(this, deep);
	      },
	      contains: function(child) {
	        return contains(this, wrapIfNeeded(child));
	      },
	      compareDocumentPosition: function(otherNode) {
	        return originalCompareDocumentPosition.call(unsafeUnwrap(this), unwrapIfNeeded(otherNode));
	      },
	      isEqualNode: function(otherNode) {
	        return originalIsEqualNode.call(unsafeUnwrap(this), unwrapIfNeeded(otherNode));
	      },
	      normalize: function() {
	        var nodes = snapshotNodeList(this.childNodes);
	        var remNodes = [];
	        var s = "";
	        var modNode;
	        for (var i = 0, n; i < nodes.length; i++) {
	          n = nodes[i];
	          if (n.nodeType === Node.TEXT_NODE) {
	            if (!modNode && !n.data.length) this.removeChild(n); else if (!modNode) modNode = n; else {
	              s += n.data;
	              remNodes.push(n);
	            }
	          } else {
	            if (modNode && remNodes.length) {
	              modNode.data += s;
	              cleanupNodes(remNodes);
	            }
	            remNodes = [];
	            s = "";
	            modNode = null;
	            if (n.childNodes.length) n.normalize();
	          }
	        }
	        if (modNode && remNodes.length) {
	          modNode.data += s;
	          cleanupNodes(remNodes);
	        }
	      }
	    });
	    defineWrapGetter(Node, "ownerDocument");
	    registerWrapper(OriginalNode, Node, document.createDocumentFragment());
	    delete Node.prototype.querySelector;
	    delete Node.prototype.querySelectorAll;
	    Node.prototype = mixin(Object.create(EventTarget.prototype), Node.prototype);
	    scope.cloneNode = cloneNode;
	    scope.nodeWasAdded = nodeWasAdded;
	    scope.nodeWasRemoved = nodeWasRemoved;
	    scope.nodesWereAdded = nodesWereAdded;
	    scope.nodesWereRemoved = nodesWereRemoved;
	    scope.originalInsertBefore = originalInsertBefore;
	    scope.originalRemoveChild = originalRemoveChild;
	    scope.snapshotNodeList = snapshotNodeList;
	    scope.wrappers.Node = Node;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var HTMLCollection = scope.wrappers.HTMLCollection;
	    var NodeList = scope.wrappers.NodeList;
	    var getTreeScope = scope.getTreeScope;
	    var unsafeUnwrap = scope.unsafeUnwrap;
	    var wrap = scope.wrap;
	    var originalDocumentQuerySelector = document.querySelector;
	    var originalElementQuerySelector = document.documentElement.querySelector;
	    var originalDocumentQuerySelectorAll = document.querySelectorAll;
	    var originalElementQuerySelectorAll = document.documentElement.querySelectorAll;
	    var originalDocumentGetElementsByTagName = document.getElementsByTagName;
	    var originalElementGetElementsByTagName = document.documentElement.getElementsByTagName;
	    var originalDocumentGetElementsByTagNameNS = document.getElementsByTagNameNS;
	    var originalElementGetElementsByTagNameNS = document.documentElement.getElementsByTagNameNS;
	    var OriginalElement = window.Element;
	    var OriginalDocument = window.HTMLDocument || window.Document;
	    function filterNodeList(list, index, result, deep) {
	      var wrappedItem = null;
	      var root = null;
	      for (var i = 0, length = list.length; i < length; i++) {
	        wrappedItem = wrap(list[i]);
	        if (!deep && (root = getTreeScope(wrappedItem).root)) {
	          if (root instanceof scope.wrappers.ShadowRoot) {
	            continue;
	          }
	        }
	        result[index++] = wrappedItem;
	      }
	      return index;
	    }
	    function shimSelector(selector) {
	      return String(selector).replace(/\/deep\/|::shadow|>>>/g, " ");
	    }
	    function shimMatchesSelector(selector) {
	      return String(selector).replace(/:host\(([^\s]+)\)/g, "$1").replace(/([^\s]):host/g, "$1").replace(":host", "*").replace(/\^|\/shadow\/|\/shadow-deep\/|::shadow|\/deep\/|::content|>>>/g, " ");
	    }
	    function findOne(node, selector) {
	      var m, el = node.firstElementChild;
	      while (el) {
	        if (el.matches(selector)) return el;
	        m = findOne(el, selector);
	        if (m) return m;
	        el = el.nextElementSibling;
	      }
	      return null;
	    }
	    function matchesSelector(el, selector) {
	      return el.matches(selector);
	    }
	    var XHTML_NS = "http://www.w3.org/1999/xhtml";
	    function matchesTagName(el, localName, localNameLowerCase) {
	      var ln = el.localName;
	      return ln === localName || ln === localNameLowerCase && el.namespaceURI === XHTML_NS;
	    }
	    function matchesEveryThing() {
	      return true;
	    }
	    function matchesLocalNameOnly(el, ns, localName) {
	      return el.localName === localName;
	    }
	    function matchesNameSpace(el, ns) {
	      return el.namespaceURI === ns;
	    }
	    function matchesLocalNameNS(el, ns, localName) {
	      return el.namespaceURI === ns && el.localName === localName;
	    }
	    function findElements(node, index, result, p, arg0, arg1) {
	      var el = node.firstElementChild;
	      while (el) {
	        if (p(el, arg0, arg1)) result[index++] = el;
	        index = findElements(el, index, result, p, arg0, arg1);
	        el = el.nextElementSibling;
	      }
	      return index;
	    }
	    function querySelectorAllFiltered(p, index, result, selector, deep) {
	      var target = unsafeUnwrap(this);
	      var list;
	      var root = getTreeScope(this).root;
	      if (root instanceof scope.wrappers.ShadowRoot) {
	        return findElements(this, index, result, p, selector, null);
	      } else if (target instanceof OriginalElement) {
	        list = originalElementQuerySelectorAll.call(target, selector);
	      } else if (target instanceof OriginalDocument) {
	        list = originalDocumentQuerySelectorAll.call(target, selector);
	      } else {
	        return findElements(this, index, result, p, selector, null);
	      }
	      return filterNodeList(list, index, result, deep);
	    }
	    var SelectorsInterface = {
	      querySelector: function(selector) {
	        var shimmed = shimSelector(selector);
	        var deep = shimmed !== selector;
	        selector = shimmed;
	        var target = unsafeUnwrap(this);
	        var wrappedItem;
	        var root = getTreeScope(this).root;
	        if (root instanceof scope.wrappers.ShadowRoot) {
	          return findOne(this, selector);
	        } else if (target instanceof OriginalElement) {
	          wrappedItem = wrap(originalElementQuerySelector.call(target, selector));
	        } else if (target instanceof OriginalDocument) {
	          wrappedItem = wrap(originalDocumentQuerySelector.call(target, selector));
	        } else {
	          return findOne(this, selector);
	        }
	        if (!wrappedItem) {
	          return wrappedItem;
	        } else if (!deep && (root = getTreeScope(wrappedItem).root)) {
	          if (root instanceof scope.wrappers.ShadowRoot) {
	            return findOne(this, selector);
	          }
	        }
	        return wrappedItem;
	      },
	      querySelectorAll: function(selector) {
	        var shimmed = shimSelector(selector);
	        var deep = shimmed !== selector;
	        selector = shimmed;
	        var result = new NodeList();
	        result.length = querySelectorAllFiltered.call(this, matchesSelector, 0, result, selector, deep);
	        return result;
	      }
	    };
	    var MatchesInterface = {
	      matches: function(selector) {
	        selector = shimMatchesSelector(selector);
	        return scope.originalMatches.call(unsafeUnwrap(this), selector);
	      }
	    };
	    function getElementsByTagNameFiltered(p, index, result, localName, lowercase) {
	      var target = unsafeUnwrap(this);
	      var list;
	      var root = getTreeScope(this).root;
	      if (root instanceof scope.wrappers.ShadowRoot) {
	        return findElements(this, index, result, p, localName, lowercase);
	      } else if (target instanceof OriginalElement) {
	        list = originalElementGetElementsByTagName.call(target, localName, lowercase);
	      } else if (target instanceof OriginalDocument) {
	        list = originalDocumentGetElementsByTagName.call(target, localName, lowercase);
	      } else {
	        return findElements(this, index, result, p, localName, lowercase);
	      }
	      return filterNodeList(list, index, result, false);
	    }
	    function getElementsByTagNameNSFiltered(p, index, result, ns, localName) {
	      var target = unsafeUnwrap(this);
	      var list;
	      var root = getTreeScope(this).root;
	      if (root instanceof scope.wrappers.ShadowRoot) {
	        return findElements(this, index, result, p, ns, localName);
	      } else if (target instanceof OriginalElement) {
	        list = originalElementGetElementsByTagNameNS.call(target, ns, localName);
	      } else if (target instanceof OriginalDocument) {
	        list = originalDocumentGetElementsByTagNameNS.call(target, ns, localName);
	      } else {
	        return findElements(this, index, result, p, ns, localName);
	      }
	      return filterNodeList(list, index, result, false);
	    }
	    var GetElementsByInterface = {
	      getElementsByTagName: function(localName) {
	        var result = new HTMLCollection();
	        var match = localName === "*" ? matchesEveryThing : matchesTagName;
	        result.length = getElementsByTagNameFiltered.call(this, match, 0, result, localName, localName.toLowerCase());
	        return result;
	      },
	      getElementsByClassName: function(className) {
	        return this.querySelectorAll("." + className);
	      },
	      getElementsByTagNameNS: function(ns, localName) {
	        var result = new HTMLCollection();
	        var match = null;
	        if (ns === "*") {
	          match = localName === "*" ? matchesEveryThing : matchesLocalNameOnly;
	        } else {
	          match = localName === "*" ? matchesNameSpace : matchesLocalNameNS;
	        }
	        result.length = getElementsByTagNameNSFiltered.call(this, match, 0, result, ns || null, localName);
	        return result;
	      }
	    };
	    scope.GetElementsByInterface = GetElementsByInterface;
	    scope.SelectorsInterface = SelectorsInterface;
	    scope.MatchesInterface = MatchesInterface;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var NodeList = scope.wrappers.NodeList;
	    function forwardElement(node) {
	      while (node && node.nodeType !== Node.ELEMENT_NODE) {
	        node = node.nextSibling;
	      }
	      return node;
	    }
	    function backwardsElement(node) {
	      while (node && node.nodeType !== Node.ELEMENT_NODE) {
	        node = node.previousSibling;
	      }
	      return node;
	    }
	    var ParentNodeInterface = {
	      get firstElementChild() {
	        return forwardElement(this.firstChild);
	      },
	      get lastElementChild() {
	        return backwardsElement(this.lastChild);
	      },
	      get childElementCount() {
	        var count = 0;
	        for (var child = this.firstElementChild; child; child = child.nextElementSibling) {
	          count++;
	        }
	        return count;
	      },
	      get children() {
	        var wrapperList = new NodeList();
	        var i = 0;
	        for (var child = this.firstElementChild; child; child = child.nextElementSibling) {
	          wrapperList[i++] = child;
	        }
	        wrapperList.length = i;
	        return wrapperList;
	      },
	      remove: function() {
	        var p = this.parentNode;
	        if (p) p.removeChild(this);
	      }
	    };
	    var ChildNodeInterface = {
	      get nextElementSibling() {
	        return forwardElement(this.nextSibling);
	      },
	      get previousElementSibling() {
	        return backwardsElement(this.previousSibling);
	      }
	    };
	    var NonElementParentNodeInterface = {
	      getElementById: function(id) {
	        if (/[ \t\n\r\f]/.test(id)) return null;
	        return this.querySelector('[id="' + id + '"]');
	      }
	    };
	    scope.ChildNodeInterface = ChildNodeInterface;
	    scope.NonElementParentNodeInterface = NonElementParentNodeInterface;
	    scope.ParentNodeInterface = ParentNodeInterface;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var ChildNodeInterface = scope.ChildNodeInterface;
	    var Node = scope.wrappers.Node;
	    var enqueueMutation = scope.enqueueMutation;
	    var mixin = scope.mixin;
	    var registerWrapper = scope.registerWrapper;
	    var unsafeUnwrap = scope.unsafeUnwrap;
	    var OriginalCharacterData = window.CharacterData;
	    function CharacterData(node) {
	      Node.call(this, node);
	    }
	    CharacterData.prototype = Object.create(Node.prototype);
	    mixin(CharacterData.prototype, {
	      get nodeValue() {
	        return this.data;
	      },
	      set nodeValue(data) {
	        this.data = data;
	      },
	      get textContent() {
	        return this.data;
	      },
	      set textContent(value) {
	        this.data = value;
	      },
	      get data() {
	        return unsafeUnwrap(this).data;
	      },
	      set data(value) {
	        var oldValue = unsafeUnwrap(this).data;
	        enqueueMutation(this, "characterData", {
	          oldValue: oldValue
	        });
	        unsafeUnwrap(this).data = value;
	      }
	    });
	    mixin(CharacterData.prototype, ChildNodeInterface);
	    registerWrapper(OriginalCharacterData, CharacterData, document.createTextNode(""));
	    scope.wrappers.CharacterData = CharacterData;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var CharacterData = scope.wrappers.CharacterData;
	    var enqueueMutation = scope.enqueueMutation;
	    var mixin = scope.mixin;
	    var registerWrapper = scope.registerWrapper;
	    function toUInt32(x) {
	      return x >>> 0;
	    }
	    var OriginalText = window.Text;
	    function Text(node) {
	      CharacterData.call(this, node);
	    }
	    Text.prototype = Object.create(CharacterData.prototype);
	    mixin(Text.prototype, {
	      splitText: function(offset) {
	        offset = toUInt32(offset);
	        var s = this.data;
	        if (offset > s.length) throw new Error("IndexSizeError");
	        var head = s.slice(0, offset);
	        var tail = s.slice(offset);
	        this.data = head;
	        var newTextNode = this.ownerDocument.createTextNode(tail);
	        if (this.parentNode) this.parentNode.insertBefore(newTextNode, this.nextSibling);
	        return newTextNode;
	      }
	    });
	    registerWrapper(OriginalText, Text, document.createTextNode(""));
	    scope.wrappers.Text = Text;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    if (!window.DOMTokenList) {
	      console.warn("Missing DOMTokenList prototype, please include a " + "compatible classList polyfill such as http://goo.gl/uTcepH.");
	      return;
	    }
	    var unsafeUnwrap = scope.unsafeUnwrap;
	    var enqueueMutation = scope.enqueueMutation;
	    function getClass(el) {
	      return unsafeUnwrap(el).getAttribute("class");
	    }
	    function enqueueClassAttributeChange(el, oldValue) {
	      enqueueMutation(el, "attributes", {
	        name: "class",
	        namespace: null,
	        oldValue: oldValue
	      });
	    }
	    function invalidateClass(el) {
	      scope.invalidateRendererBasedOnAttribute(el, "class");
	    }
	    function changeClass(tokenList, method, args) {
	      var ownerElement = tokenList.ownerElement_;
	      if (ownerElement == null) {
	        return method.apply(tokenList, args);
	      }
	      var oldValue = getClass(ownerElement);
	      var retv = method.apply(tokenList, args);
	      if (getClass(ownerElement) !== oldValue) {
	        enqueueClassAttributeChange(ownerElement, oldValue);
	        invalidateClass(ownerElement);
	      }
	      return retv;
	    }
	    var oldAdd = DOMTokenList.prototype.add;
	    DOMTokenList.prototype.add = function() {
	      changeClass(this, oldAdd, arguments);
	    };
	    var oldRemove = DOMTokenList.prototype.remove;
	    DOMTokenList.prototype.remove = function() {
	      changeClass(this, oldRemove, arguments);
	    };
	    var oldToggle = DOMTokenList.prototype.toggle;
	    DOMTokenList.prototype.toggle = function() {
	      return changeClass(this, oldToggle, arguments);
	    };
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var ChildNodeInterface = scope.ChildNodeInterface;
	    var GetElementsByInterface = scope.GetElementsByInterface;
	    var Node = scope.wrappers.Node;
	    var ParentNodeInterface = scope.ParentNodeInterface;
	    var SelectorsInterface = scope.SelectorsInterface;
	    var MatchesInterface = scope.MatchesInterface;
	    var addWrapNodeListMethod = scope.addWrapNodeListMethod;
	    var enqueueMutation = scope.enqueueMutation;
	    var mixin = scope.mixin;
	    var oneOf = scope.oneOf;
	    var registerWrapper = scope.registerWrapper;
	    var unsafeUnwrap = scope.unsafeUnwrap;
	    var wrappers = scope.wrappers;
	    var OriginalElement = window.Element;
	    var matchesNames = [ "matches", "mozMatchesSelector", "msMatchesSelector", "webkitMatchesSelector" ].filter(function(name) {
	      return OriginalElement.prototype[name];
	    });
	    var matchesName = matchesNames[0];
	    var originalMatches = OriginalElement.prototype[matchesName];
	    function invalidateRendererBasedOnAttribute(element, name) {
	      var p = element.parentNode;
	      if (!p || !p.shadowRoot) return;
	      var renderer = scope.getRendererForHost(p);
	      if (renderer.dependsOnAttribute(name)) renderer.invalidate();
	    }
	    function enqueAttributeChange(element, name, oldValue) {
	      enqueueMutation(element, "attributes", {
	        name: name,
	        namespace: null,
	        oldValue: oldValue
	      });
	    }
	    var classListTable = new WeakMap();
	    function Element(node) {
	      Node.call(this, node);
	    }
	    Element.prototype = Object.create(Node.prototype);
	    mixin(Element.prototype, {
	      createShadowRoot: function() {
	        var newShadowRoot = new wrappers.ShadowRoot(this);
	        unsafeUnwrap(this).polymerShadowRoot_ = newShadowRoot;
	        var renderer = scope.getRendererForHost(this);
	        renderer.invalidate();
	        return newShadowRoot;
	      },
	      get shadowRoot() {
	        return unsafeUnwrap(this).polymerShadowRoot_ || null;
	      },
	      setAttribute: function(name, value) {
	        var oldValue = unsafeUnwrap(this).getAttribute(name);
	        unsafeUnwrap(this).setAttribute(name, value);
	        enqueAttributeChange(this, name, oldValue);
	        invalidateRendererBasedOnAttribute(this, name);
	      },
	      removeAttribute: function(name) {
	        var oldValue = unsafeUnwrap(this).getAttribute(name);
	        unsafeUnwrap(this).removeAttribute(name);
	        enqueAttributeChange(this, name, oldValue);
	        invalidateRendererBasedOnAttribute(this, name);
	      },
	      get classList() {
	        var list = classListTable.get(this);
	        if (!list) {
	          list = unsafeUnwrap(this).classList;
	          if (!list) return;
	          list.ownerElement_ = this;
	          classListTable.set(this, list);
	        }
	        return list;
	      },
	      get className() {
	        return unsafeUnwrap(this).className;
	      },
	      set className(v) {
	        this.setAttribute("class", v);
	      },
	      get id() {
	        return unsafeUnwrap(this).id;
	      },
	      set id(v) {
	        this.setAttribute("id", v);
	      }
	    });
	    matchesNames.forEach(function(name) {
	      if (name !== "matches") {
	        Element.prototype[name] = function(selector) {
	          return this.matches(selector);
	        };
	      }
	    });
	    if (OriginalElement.prototype.webkitCreateShadowRoot) {
	      Element.prototype.webkitCreateShadowRoot = Element.prototype.createShadowRoot;
	    }
	    mixin(Element.prototype, ChildNodeInterface);
	    mixin(Element.prototype, GetElementsByInterface);
	    mixin(Element.prototype, ParentNodeInterface);
	    mixin(Element.prototype, SelectorsInterface);
	    mixin(Element.prototype, MatchesInterface);
	    registerWrapper(OriginalElement, Element, document.createElementNS(null, "x"));
	    scope.invalidateRendererBasedOnAttribute = invalidateRendererBasedOnAttribute;
	    scope.matchesNames = matchesNames;
	    scope.originalMatches = originalMatches;
	    scope.wrappers.Element = Element;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var Element = scope.wrappers.Element;
	    var defineGetter = scope.defineGetter;
	    var enqueueMutation = scope.enqueueMutation;
	    var mixin = scope.mixin;
	    var nodesWereAdded = scope.nodesWereAdded;
	    var nodesWereRemoved = scope.nodesWereRemoved;
	    var registerWrapper = scope.registerWrapper;
	    var snapshotNodeList = scope.snapshotNodeList;
	    var unsafeUnwrap = scope.unsafeUnwrap;
	    var unwrap = scope.unwrap;
	    var wrap = scope.wrap;
	    var wrappers = scope.wrappers;
	    var escapeAttrRegExp = /[&\u00A0"]/g;
	    var escapeDataRegExp = /[&\u00A0<>]/g;
	    function escapeReplace(c) {
	      switch (c) {
	       case "&":
	        return "&amp;";

	       case "<":
	        return "&lt;";

	       case ">":
	        return "&gt;";

	       case '"':
	        return "&quot;";

	       case " ":
	        return "&nbsp;";
	      }
	    }
	    function escapeAttr(s) {
	      return s.replace(escapeAttrRegExp, escapeReplace);
	    }
	    function escapeData(s) {
	      return s.replace(escapeDataRegExp, escapeReplace);
	    }
	    function makeSet(arr) {
	      var set = {};
	      for (var i = 0; i < arr.length; i++) {
	        set[arr[i]] = true;
	      }
	      return set;
	    }
	    var voidElements = makeSet([ "area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr" ]);
	    var plaintextParents = makeSet([ "style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript" ]);
	    var XHTML_NS = "http://www.w3.org/1999/xhtml";
	    function needsSelfClosingSlash(node) {
	      if (node.namespaceURI !== XHTML_NS) return true;
	      var doctype = node.ownerDocument.doctype;
	      return doctype && doctype.publicId && doctype.systemId;
	    }
	    function getOuterHTML(node, parentNode) {
	      switch (node.nodeType) {
	       case Node.ELEMENT_NODE:
	        var tagName = node.tagName.toLowerCase();
	        var s = "<" + tagName;
	        var attrs = node.attributes;
	        for (var i = 0, attr; attr = attrs[i]; i++) {
	          s += " " + attr.name + '="' + escapeAttr(attr.value) + '"';
	        }
	        if (voidElements[tagName]) {
	          if (needsSelfClosingSlash(node)) s += "/";
	          return s + ">";
	        }
	        return s + ">" + getInnerHTML(node) + "</" + tagName + ">";

	       case Node.TEXT_NODE:
	        var data = node.data;
	        if (parentNode && plaintextParents[parentNode.localName]) return data;
	        return escapeData(data);

	       case Node.COMMENT_NODE:
	        return "<!--" + node.data + "-->";

	       default:
	        console.error(node);
	        throw new Error("not implemented");
	      }
	    }
	    function getInnerHTML(node) {
	      if (node instanceof wrappers.HTMLTemplateElement) node = node.content;
	      var s = "";
	      for (var child = node.firstChild; child; child = child.nextSibling) {
	        s += getOuterHTML(child, node);
	      }
	      return s;
	    }
	    function setInnerHTML(node, value, opt_tagName) {
	      var tagName = opt_tagName || "div";
	      node.textContent = "";
	      var tempElement = unwrap(node.ownerDocument.createElement(tagName));
	      tempElement.innerHTML = value;
	      var firstChild;
	      while (firstChild = tempElement.firstChild) {
	        node.appendChild(wrap(firstChild));
	      }
	    }
	    var oldIe = /MSIE/.test(navigator.userAgent);
	    var OriginalHTMLElement = window.HTMLElement;
	    var OriginalHTMLTemplateElement = window.HTMLTemplateElement;
	    function HTMLElement(node) {
	      Element.call(this, node);
	    }
	    HTMLElement.prototype = Object.create(Element.prototype);
	    mixin(HTMLElement.prototype, {
	      get innerHTML() {
	        return getInnerHTML(this);
	      },
	      set innerHTML(value) {
	        if (oldIe && plaintextParents[this.localName]) {
	          this.textContent = value;
	          return;
	        }
	        var removedNodes = snapshotNodeList(this.childNodes);
	        if (this.invalidateShadowRenderer()) {
	          if (this instanceof wrappers.HTMLTemplateElement) setInnerHTML(this.content, value); else setInnerHTML(this, value, this.tagName);
	        } else if (!OriginalHTMLTemplateElement && this instanceof wrappers.HTMLTemplateElement) {
	          setInnerHTML(this.content, value);
	        } else {
	          unsafeUnwrap(this).innerHTML = value;
	        }
	        var addedNodes = snapshotNodeList(this.childNodes);
	        enqueueMutation(this, "childList", {
	          addedNodes: addedNodes,
	          removedNodes: removedNodes
	        });
	        nodesWereRemoved(removedNodes);
	        nodesWereAdded(addedNodes, this);
	      },
	      get outerHTML() {
	        return getOuterHTML(this, this.parentNode);
	      },
	      set outerHTML(value) {
	        var p = this.parentNode;
	        if (p) {
	          p.invalidateShadowRenderer();
	          var df = frag(p, value);
	          p.replaceChild(df, this);
	        }
	      },
	      insertAdjacentHTML: function(position, text) {
	        var contextElement, refNode;
	        switch (String(position).toLowerCase()) {
	         case "beforebegin":
	          contextElement = this.parentNode;
	          refNode = this;
	          break;

	         case "afterend":
	          contextElement = this.parentNode;
	          refNode = this.nextSibling;
	          break;

	         case "afterbegin":
	          contextElement = this;
	          refNode = this.firstChild;
	          break;

	         case "beforeend":
	          contextElement = this;
	          refNode = null;
	          break;

	         default:
	          return;
	        }
	        var df = frag(contextElement, text);
	        contextElement.insertBefore(df, refNode);
	      },
	      get hidden() {
	        return this.hasAttribute("hidden");
	      },
	      set hidden(v) {
	        if (v) {
	          this.setAttribute("hidden", "");
	        } else {
	          this.removeAttribute("hidden");
	        }
	      }
	    });
	    function frag(contextElement, html) {
	      var p = unwrap(contextElement.cloneNode(false));
	      p.innerHTML = html;
	      var df = unwrap(document.createDocumentFragment());
	      var c;
	      while (c = p.firstChild) {
	        df.appendChild(c);
	      }
	      return wrap(df);
	    }
	    function getter(name) {
	      return function() {
	        scope.renderAllPending();
	        return unsafeUnwrap(this)[name];
	      };
	    }
	    function getterRequiresRendering(name) {
	      defineGetter(HTMLElement, name, getter(name));
	    }
	    [ "clientHeight", "clientLeft", "clientTop", "clientWidth", "offsetHeight", "offsetLeft", "offsetTop", "offsetWidth", "scrollHeight", "scrollWidth" ].forEach(getterRequiresRendering);
	    function getterAndSetterRequiresRendering(name) {
	      Object.defineProperty(HTMLElement.prototype, name, {
	        get: getter(name),
	        set: function(v) {
	          scope.renderAllPending();
	          unsafeUnwrap(this)[name] = v;
	        },
	        configurable: true,
	        enumerable: true
	      });
	    }
	    [ "scrollLeft", "scrollTop" ].forEach(getterAndSetterRequiresRendering);
	    function methodRequiresRendering(name) {
	      Object.defineProperty(HTMLElement.prototype, name, {
	        value: function() {
	          scope.renderAllPending();
	          return unsafeUnwrap(this)[name].apply(unsafeUnwrap(this), arguments);
	        },
	        configurable: true,
	        enumerable: true
	      });
	    }
	    [ "focus", "getBoundingClientRect", "getClientRects", "scrollIntoView" ].forEach(methodRequiresRendering);
	    registerWrapper(OriginalHTMLElement, HTMLElement, document.createElement("b"));
	    scope.wrappers.HTMLElement = HTMLElement;
	    scope.getInnerHTML = getInnerHTML;
	    scope.setInnerHTML = setInnerHTML;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var HTMLElement = scope.wrappers.HTMLElement;
	    var mixin = scope.mixin;
	    var registerWrapper = scope.registerWrapper;
	    var unsafeUnwrap = scope.unsafeUnwrap;
	    var wrap = scope.wrap;
	    var OriginalHTMLCanvasElement = window.HTMLCanvasElement;
	    function HTMLCanvasElement(node) {
	      HTMLElement.call(this, node);
	    }
	    HTMLCanvasElement.prototype = Object.create(HTMLElement.prototype);
	    mixin(HTMLCanvasElement.prototype, {
	      getContext: function() {
	        var context = unsafeUnwrap(this).getContext.apply(unsafeUnwrap(this), arguments);
	        return context && wrap(context);
	      }
	    });
	    registerWrapper(OriginalHTMLCanvasElement, HTMLCanvasElement, document.createElement("canvas"));
	    scope.wrappers.HTMLCanvasElement = HTMLCanvasElement;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var HTMLElement = scope.wrappers.HTMLElement;
	    var mixin = scope.mixin;
	    var registerWrapper = scope.registerWrapper;
	    var OriginalHTMLContentElement = window.HTMLContentElement;
	    function HTMLContentElement(node) {
	      HTMLElement.call(this, node);
	    }
	    HTMLContentElement.prototype = Object.create(HTMLElement.prototype);
	    mixin(HTMLContentElement.prototype, {
	      constructor: HTMLContentElement,
	      get select() {
	        return this.getAttribute("select");
	      },
	      set select(value) {
	        this.setAttribute("select", value);
	      },
	      setAttribute: function(n, v) {
	        HTMLElement.prototype.setAttribute.call(this, n, v);
	        if (String(n).toLowerCase() === "select") this.invalidateShadowRenderer(true);
	      }
	    });
	    if (OriginalHTMLContentElement) registerWrapper(OriginalHTMLContentElement, HTMLContentElement);
	    scope.wrappers.HTMLContentElement = HTMLContentElement;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var HTMLElement = scope.wrappers.HTMLElement;
	    var mixin = scope.mixin;
	    var registerWrapper = scope.registerWrapper;
	    var wrapHTMLCollection = scope.wrapHTMLCollection;
	    var unwrap = scope.unwrap;
	    var OriginalHTMLFormElement = window.HTMLFormElement;
	    function HTMLFormElement(node) {
	      HTMLElement.call(this, node);
	    }
	    HTMLFormElement.prototype = Object.create(HTMLElement.prototype);
	    mixin(HTMLFormElement.prototype, {
	      get elements() {
	        return wrapHTMLCollection(unwrap(this).elements);
	      }
	    });
	    registerWrapper(OriginalHTMLFormElement, HTMLFormElement, document.createElement("form"));
	    scope.wrappers.HTMLFormElement = HTMLFormElement;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var HTMLElement = scope.wrappers.HTMLElement;
	    var registerWrapper = scope.registerWrapper;
	    var unwrap = scope.unwrap;
	    var rewrap = scope.rewrap;
	    var OriginalHTMLImageElement = window.HTMLImageElement;
	    function HTMLImageElement(node) {
	      HTMLElement.call(this, node);
	    }
	    HTMLImageElement.prototype = Object.create(HTMLElement.prototype);
	    registerWrapper(OriginalHTMLImageElement, HTMLImageElement, document.createElement("img"));
	    function Image(width, height) {
	      if (!(this instanceof Image)) {
	        throw new TypeError("DOM object constructor cannot be called as a function.");
	      }
	      var node = unwrap(document.createElement("img"));
	      HTMLElement.call(this, node);
	      rewrap(node, this);
	      if (width !== undefined) node.width = width;
	      if (height !== undefined) node.height = height;
	    }
	    Image.prototype = HTMLImageElement.prototype;
	    scope.wrappers.HTMLImageElement = HTMLImageElement;
	    scope.wrappers.Image = Image;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var HTMLElement = scope.wrappers.HTMLElement;
	    var mixin = scope.mixin;
	    var NodeList = scope.wrappers.NodeList;
	    var registerWrapper = scope.registerWrapper;
	    var OriginalHTMLShadowElement = window.HTMLShadowElement;
	    function HTMLShadowElement(node) {
	      HTMLElement.call(this, node);
	    }
	    HTMLShadowElement.prototype = Object.create(HTMLElement.prototype);
	    HTMLShadowElement.prototype.constructor = HTMLShadowElement;
	    if (OriginalHTMLShadowElement) registerWrapper(OriginalHTMLShadowElement, HTMLShadowElement);
	    scope.wrappers.HTMLShadowElement = HTMLShadowElement;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var HTMLElement = scope.wrappers.HTMLElement;
	    var mixin = scope.mixin;
	    var registerWrapper = scope.registerWrapper;
	    var unsafeUnwrap = scope.unsafeUnwrap;
	    var unwrap = scope.unwrap;
	    var wrap = scope.wrap;
	    var contentTable = new WeakMap();
	    var templateContentsOwnerTable = new WeakMap();
	    function getTemplateContentsOwner(doc) {
	      if (!doc.defaultView) return doc;
	      var d = templateContentsOwnerTable.get(doc);
	      if (!d) {
	        d = doc.implementation.createHTMLDocument("");
	        while (d.lastChild) {
	          d.removeChild(d.lastChild);
	        }
	        templateContentsOwnerTable.set(doc, d);
	      }
	      return d;
	    }
	    function extractContent(templateElement) {
	      var doc = getTemplateContentsOwner(templateElement.ownerDocument);
	      var df = unwrap(doc.createDocumentFragment());
	      var child;
	      while (child = templateElement.firstChild) {
	        df.appendChild(child);
	      }
	      return df;
	    }
	    var OriginalHTMLTemplateElement = window.HTMLTemplateElement;
	    function HTMLTemplateElement(node) {
	      HTMLElement.call(this, node);
	      if (!OriginalHTMLTemplateElement) {
	        var content = extractContent(node);
	        contentTable.set(this, wrap(content));
	      }
	    }
	    HTMLTemplateElement.prototype = Object.create(HTMLElement.prototype);
	    mixin(HTMLTemplateElement.prototype, {
	      constructor: HTMLTemplateElement,
	      get content() {
	        if (OriginalHTMLTemplateElement) return wrap(unsafeUnwrap(this).content);
	        return contentTable.get(this);
	      }
	    });
	    if (OriginalHTMLTemplateElement) registerWrapper(OriginalHTMLTemplateElement, HTMLTemplateElement);
	    scope.wrappers.HTMLTemplateElement = HTMLTemplateElement;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var HTMLElement = scope.wrappers.HTMLElement;
	    var registerWrapper = scope.registerWrapper;
	    var OriginalHTMLMediaElement = window.HTMLMediaElement;
	    if (!OriginalHTMLMediaElement) return;
	    function HTMLMediaElement(node) {
	      HTMLElement.call(this, node);
	    }
	    HTMLMediaElement.prototype = Object.create(HTMLElement.prototype);
	    registerWrapper(OriginalHTMLMediaElement, HTMLMediaElement, document.createElement("audio"));
	    scope.wrappers.HTMLMediaElement = HTMLMediaElement;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var HTMLMediaElement = scope.wrappers.HTMLMediaElement;
	    var registerWrapper = scope.registerWrapper;
	    var unwrap = scope.unwrap;
	    var rewrap = scope.rewrap;
	    var OriginalHTMLAudioElement = window.HTMLAudioElement;
	    if (!OriginalHTMLAudioElement) return;
	    function HTMLAudioElement(node) {
	      HTMLMediaElement.call(this, node);
	    }
	    HTMLAudioElement.prototype = Object.create(HTMLMediaElement.prototype);
	    registerWrapper(OriginalHTMLAudioElement, HTMLAudioElement, document.createElement("audio"));
	    function Audio(src) {
	      if (!(this instanceof Audio)) {
	        throw new TypeError("DOM object constructor cannot be called as a function.");
	      }
	      var node = unwrap(document.createElement("audio"));
	      HTMLMediaElement.call(this, node);
	      rewrap(node, this);
	      node.setAttribute("preload", "auto");
	      if (src !== undefined) node.setAttribute("src", src);
	    }
	    Audio.prototype = HTMLAudioElement.prototype;
	    scope.wrappers.HTMLAudioElement = HTMLAudioElement;
	    scope.wrappers.Audio = Audio;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var HTMLElement = scope.wrappers.HTMLElement;
	    var mixin = scope.mixin;
	    var registerWrapper = scope.registerWrapper;
	    var rewrap = scope.rewrap;
	    var unwrap = scope.unwrap;
	    var wrap = scope.wrap;
	    var OriginalHTMLOptionElement = window.HTMLOptionElement;
	    function trimText(s) {
	      return s.replace(/\s+/g, " ").trim();
	    }
	    function HTMLOptionElement(node) {
	      HTMLElement.call(this, node);
	    }
	    HTMLOptionElement.prototype = Object.create(HTMLElement.prototype);
	    mixin(HTMLOptionElement.prototype, {
	      get text() {
	        return trimText(this.textContent);
	      },
	      set text(value) {
	        this.textContent = trimText(String(value));
	      },
	      get form() {
	        return wrap(unwrap(this).form);
	      }
	    });
	    registerWrapper(OriginalHTMLOptionElement, HTMLOptionElement, document.createElement("option"));
	    function Option(text, value, defaultSelected, selected) {
	      if (!(this instanceof Option)) {
	        throw new TypeError("DOM object constructor cannot be called as a function.");
	      }
	      var node = unwrap(document.createElement("option"));
	      HTMLElement.call(this, node);
	      rewrap(node, this);
	      if (text !== undefined) node.text = text;
	      if (value !== undefined) node.setAttribute("value", value);
	      if (defaultSelected === true) node.setAttribute("selected", "");
	      node.selected = selected === true;
	    }
	    Option.prototype = HTMLOptionElement.prototype;
	    scope.wrappers.HTMLOptionElement = HTMLOptionElement;
	    scope.wrappers.Option = Option;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var HTMLElement = scope.wrappers.HTMLElement;
	    var mixin = scope.mixin;
	    var registerWrapper = scope.registerWrapper;
	    var unwrap = scope.unwrap;
	    var wrap = scope.wrap;
	    var OriginalHTMLSelectElement = window.HTMLSelectElement;
	    function HTMLSelectElement(node) {
	      HTMLElement.call(this, node);
	    }
	    HTMLSelectElement.prototype = Object.create(HTMLElement.prototype);
	    mixin(HTMLSelectElement.prototype, {
	      add: function(element, before) {
	        if (typeof before === "object") before = unwrap(before);
	        unwrap(this).add(unwrap(element), before);
	      },
	      remove: function(indexOrNode) {
	        if (indexOrNode === undefined) {
	          HTMLElement.prototype.remove.call(this);
	          return;
	        }
	        if (typeof indexOrNode === "object") indexOrNode = unwrap(indexOrNode);
	        unwrap(this).remove(indexOrNode);
	      },
	      get form() {
	        return wrap(unwrap(this).form);
	      }
	    });
	    registerWrapper(OriginalHTMLSelectElement, HTMLSelectElement, document.createElement("select"));
	    scope.wrappers.HTMLSelectElement = HTMLSelectElement;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var HTMLElement = scope.wrappers.HTMLElement;
	    var mixin = scope.mixin;
	    var registerWrapper = scope.registerWrapper;
	    var unwrap = scope.unwrap;
	    var wrap = scope.wrap;
	    var wrapHTMLCollection = scope.wrapHTMLCollection;
	    var OriginalHTMLTableElement = window.HTMLTableElement;
	    function HTMLTableElement(node) {
	      HTMLElement.call(this, node);
	    }
	    HTMLTableElement.prototype = Object.create(HTMLElement.prototype);
	    mixin(HTMLTableElement.prototype, {
	      get caption() {
	        return wrap(unwrap(this).caption);
	      },
	      createCaption: function() {
	        return wrap(unwrap(this).createCaption());
	      },
	      get tHead() {
	        return wrap(unwrap(this).tHead);
	      },
	      createTHead: function() {
	        return wrap(unwrap(this).createTHead());
	      },
	      createTFoot: function() {
	        return wrap(unwrap(this).createTFoot());
	      },
	      get tFoot() {
	        return wrap(unwrap(this).tFoot);
	      },
	      get tBodies() {
	        return wrapHTMLCollection(unwrap(this).tBodies);
	      },
	      createTBody: function() {
	        return wrap(unwrap(this).createTBody());
	      },
	      get rows() {
	        return wrapHTMLCollection(unwrap(this).rows);
	      },
	      insertRow: function(index) {
	        return wrap(unwrap(this).insertRow(index));
	      }
	    });
	    registerWrapper(OriginalHTMLTableElement, HTMLTableElement, document.createElement("table"));
	    scope.wrappers.HTMLTableElement = HTMLTableElement;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var HTMLElement = scope.wrappers.HTMLElement;
	    var mixin = scope.mixin;
	    var registerWrapper = scope.registerWrapper;
	    var wrapHTMLCollection = scope.wrapHTMLCollection;
	    var unwrap = scope.unwrap;
	    var wrap = scope.wrap;
	    var OriginalHTMLTableSectionElement = window.HTMLTableSectionElement;
	    function HTMLTableSectionElement(node) {
	      HTMLElement.call(this, node);
	    }
	    HTMLTableSectionElement.prototype = Object.create(HTMLElement.prototype);
	    mixin(HTMLTableSectionElement.prototype, {
	      constructor: HTMLTableSectionElement,
	      get rows() {
	        return wrapHTMLCollection(unwrap(this).rows);
	      },
	      insertRow: function(index) {
	        return wrap(unwrap(this).insertRow(index));
	      }
	    });
	    registerWrapper(OriginalHTMLTableSectionElement, HTMLTableSectionElement, document.createElement("thead"));
	    scope.wrappers.HTMLTableSectionElement = HTMLTableSectionElement;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var HTMLElement = scope.wrappers.HTMLElement;
	    var mixin = scope.mixin;
	    var registerWrapper = scope.registerWrapper;
	    var wrapHTMLCollection = scope.wrapHTMLCollection;
	    var unwrap = scope.unwrap;
	    var wrap = scope.wrap;
	    var OriginalHTMLTableRowElement = window.HTMLTableRowElement;
	    function HTMLTableRowElement(node) {
	      HTMLElement.call(this, node);
	    }
	    HTMLTableRowElement.prototype = Object.create(HTMLElement.prototype);
	    mixin(HTMLTableRowElement.prototype, {
	      get cells() {
	        return wrapHTMLCollection(unwrap(this).cells);
	      },
	      insertCell: function(index) {
	        return wrap(unwrap(this).insertCell(index));
	      }
	    });
	    registerWrapper(OriginalHTMLTableRowElement, HTMLTableRowElement, document.createElement("tr"));
	    scope.wrappers.HTMLTableRowElement = HTMLTableRowElement;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var HTMLContentElement = scope.wrappers.HTMLContentElement;
	    var HTMLElement = scope.wrappers.HTMLElement;
	    var HTMLShadowElement = scope.wrappers.HTMLShadowElement;
	    var HTMLTemplateElement = scope.wrappers.HTMLTemplateElement;
	    var mixin = scope.mixin;
	    var registerWrapper = scope.registerWrapper;
	    var OriginalHTMLUnknownElement = window.HTMLUnknownElement;
	    function HTMLUnknownElement(node) {
	      switch (node.localName) {
	       case "content":
	        return new HTMLContentElement(node);

	       case "shadow":
	        return new HTMLShadowElement(node);

	       case "template":
	        return new HTMLTemplateElement(node);
	      }
	      HTMLElement.call(this, node);
	    }
	    HTMLUnknownElement.prototype = Object.create(HTMLElement.prototype);
	    registerWrapper(OriginalHTMLUnknownElement, HTMLUnknownElement);
	    scope.wrappers.HTMLUnknownElement = HTMLUnknownElement;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var Element = scope.wrappers.Element;
	    var HTMLElement = scope.wrappers.HTMLElement;
	    var registerWrapper = scope.registerWrapper;
	    var defineWrapGetter = scope.defineWrapGetter;
	    var unsafeUnwrap = scope.unsafeUnwrap;
	    var wrap = scope.wrap;
	    var mixin = scope.mixin;
	    var SVG_NS = "http://www.w3.org/2000/svg";
	    var OriginalSVGElement = window.SVGElement;
	    var svgTitleElement = document.createElementNS(SVG_NS, "title");
	    if (!("classList" in svgTitleElement)) {
	      var descr = Object.getOwnPropertyDescriptor(Element.prototype, "classList");
	      Object.defineProperty(HTMLElement.prototype, "classList", descr);
	      delete Element.prototype.classList;
	    }
	    function SVGElement(node) {
	      Element.call(this, node);
	    }
	    SVGElement.prototype = Object.create(Element.prototype);
	    mixin(SVGElement.prototype, {
	      get ownerSVGElement() {
	        return wrap(unsafeUnwrap(this).ownerSVGElement);
	      }
	    });
	    registerWrapper(OriginalSVGElement, SVGElement, document.createElementNS(SVG_NS, "title"));
	    scope.wrappers.SVGElement = SVGElement;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var mixin = scope.mixin;
	    var registerWrapper = scope.registerWrapper;
	    var unwrap = scope.unwrap;
	    var wrap = scope.wrap;
	    var OriginalSVGUseElement = window.SVGUseElement;
	    var SVG_NS = "http://www.w3.org/2000/svg";
	    var gWrapper = wrap(document.createElementNS(SVG_NS, "g"));
	    var useElement = document.createElementNS(SVG_NS, "use");
	    var SVGGElement = gWrapper.constructor;
	    var parentInterfacePrototype = Object.getPrototypeOf(SVGGElement.prototype);
	    var parentInterface = parentInterfacePrototype.constructor;
	    function SVGUseElement(impl) {
	      parentInterface.call(this, impl);
	    }
	    SVGUseElement.prototype = Object.create(parentInterfacePrototype);
	    if ("instanceRoot" in useElement) {
	      mixin(SVGUseElement.prototype, {
	        get instanceRoot() {
	          return wrap(unwrap(this).instanceRoot);
	        },
	        get animatedInstanceRoot() {
	          return wrap(unwrap(this).animatedInstanceRoot);
	        }
	      });
	    }
	    registerWrapper(OriginalSVGUseElement, SVGUseElement, useElement);
	    scope.wrappers.SVGUseElement = SVGUseElement;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var EventTarget = scope.wrappers.EventTarget;
	    var mixin = scope.mixin;
	    var registerWrapper = scope.registerWrapper;
	    var unsafeUnwrap = scope.unsafeUnwrap;
	    var wrap = scope.wrap;
	    var OriginalSVGElementInstance = window.SVGElementInstance;
	    if (!OriginalSVGElementInstance) return;
	    function SVGElementInstance(impl) {
	      EventTarget.call(this, impl);
	    }
	    SVGElementInstance.prototype = Object.create(EventTarget.prototype);
	    mixin(SVGElementInstance.prototype, {
	      get correspondingElement() {
	        return wrap(unsafeUnwrap(this).correspondingElement);
	      },
	      get correspondingUseElement() {
	        return wrap(unsafeUnwrap(this).correspondingUseElement);
	      },
	      get parentNode() {
	        return wrap(unsafeUnwrap(this).parentNode);
	      },
	      get childNodes() {
	        throw new Error("Not implemented");
	      },
	      get firstChild() {
	        return wrap(unsafeUnwrap(this).firstChild);
	      },
	      get lastChild() {
	        return wrap(unsafeUnwrap(this).lastChild);
	      },
	      get previousSibling() {
	        return wrap(unsafeUnwrap(this).previousSibling);
	      },
	      get nextSibling() {
	        return wrap(unsafeUnwrap(this).nextSibling);
	      }
	    });
	    registerWrapper(OriginalSVGElementInstance, SVGElementInstance);
	    scope.wrappers.SVGElementInstance = SVGElementInstance;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var mixin = scope.mixin;
	    var registerWrapper = scope.registerWrapper;
	    var setWrapper = scope.setWrapper;
	    var unsafeUnwrap = scope.unsafeUnwrap;
	    var unwrap = scope.unwrap;
	    var unwrapIfNeeded = scope.unwrapIfNeeded;
	    var wrap = scope.wrap;
	    var OriginalCanvasRenderingContext2D = window.CanvasRenderingContext2D;
	    function CanvasRenderingContext2D(impl) {
	      setWrapper(impl, this);
	    }
	    mixin(CanvasRenderingContext2D.prototype, {
	      get canvas() {
	        return wrap(unsafeUnwrap(this).canvas);
	      },
	      drawImage: function() {
	        arguments[0] = unwrapIfNeeded(arguments[0]);
	        unsafeUnwrap(this).drawImage.apply(unsafeUnwrap(this), arguments);
	      },
	      createPattern: function() {
	        arguments[0] = unwrap(arguments[0]);
	        return unsafeUnwrap(this).createPattern.apply(unsafeUnwrap(this), arguments);
	      }
	    });
	    registerWrapper(OriginalCanvasRenderingContext2D, CanvasRenderingContext2D, document.createElement("canvas").getContext("2d"));
	    scope.wrappers.CanvasRenderingContext2D = CanvasRenderingContext2D;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var addForwardingProperties = scope.addForwardingProperties;
	    var mixin = scope.mixin;
	    var registerWrapper = scope.registerWrapper;
	    var setWrapper = scope.setWrapper;
	    var unsafeUnwrap = scope.unsafeUnwrap;
	    var unwrapIfNeeded = scope.unwrapIfNeeded;
	    var wrap = scope.wrap;
	    var OriginalWebGLRenderingContext = window.WebGLRenderingContext;
	    if (!OriginalWebGLRenderingContext) return;
	    function WebGLRenderingContext(impl) {
	      setWrapper(impl, this);
	    }
	    mixin(WebGLRenderingContext.prototype, {
	      get canvas() {
	        return wrap(unsafeUnwrap(this).canvas);
	      },
	      texImage2D: function() {
	        arguments[5] = unwrapIfNeeded(arguments[5]);
	        unsafeUnwrap(this).texImage2D.apply(unsafeUnwrap(this), arguments);
	      },
	      texSubImage2D: function() {
	        arguments[6] = unwrapIfNeeded(arguments[6]);
	        unsafeUnwrap(this).texSubImage2D.apply(unsafeUnwrap(this), arguments);
	      }
	    });
	    var OriginalWebGLRenderingContextBase = Object.getPrototypeOf(OriginalWebGLRenderingContext.prototype);
	    if (OriginalWebGLRenderingContextBase !== Object.prototype) {
	      addForwardingProperties(OriginalWebGLRenderingContextBase, WebGLRenderingContext.prototype);
	    }
	    var instanceProperties = /WebKit/.test(navigator.userAgent) ? {
	      drawingBufferHeight: null,
	      drawingBufferWidth: null
	    } : {};
	    registerWrapper(OriginalWebGLRenderingContext, WebGLRenderingContext, instanceProperties);
	    scope.wrappers.WebGLRenderingContext = WebGLRenderingContext;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var Node = scope.wrappers.Node;
	    var GetElementsByInterface = scope.GetElementsByInterface;
	    var NonElementParentNodeInterface = scope.NonElementParentNodeInterface;
	    var ParentNodeInterface = scope.ParentNodeInterface;
	    var SelectorsInterface = scope.SelectorsInterface;
	    var mixin = scope.mixin;
	    var registerObject = scope.registerObject;
	    var registerWrapper = scope.registerWrapper;
	    var OriginalDocumentFragment = window.DocumentFragment;
	    function DocumentFragment(node) {
	      Node.call(this, node);
	    }
	    DocumentFragment.prototype = Object.create(Node.prototype);
	    mixin(DocumentFragment.prototype, ParentNodeInterface);
	    mixin(DocumentFragment.prototype, SelectorsInterface);
	    mixin(DocumentFragment.prototype, GetElementsByInterface);
	    mixin(DocumentFragment.prototype, NonElementParentNodeInterface);
	    registerWrapper(OriginalDocumentFragment, DocumentFragment, document.createDocumentFragment());
	    scope.wrappers.DocumentFragment = DocumentFragment;
	    var Comment = registerObject(document.createComment(""));
	    scope.wrappers.Comment = Comment;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var DocumentFragment = scope.wrappers.DocumentFragment;
	    var TreeScope = scope.TreeScope;
	    var elementFromPoint = scope.elementFromPoint;
	    var getInnerHTML = scope.getInnerHTML;
	    var getTreeScope = scope.getTreeScope;
	    var mixin = scope.mixin;
	    var rewrap = scope.rewrap;
	    var setInnerHTML = scope.setInnerHTML;
	    var unsafeUnwrap = scope.unsafeUnwrap;
	    var unwrap = scope.unwrap;
	    var wrap = scope.wrap;
	    var shadowHostTable = new WeakMap();
	    var nextOlderShadowTreeTable = new WeakMap();
	    function ShadowRoot(hostWrapper) {
	      var node = unwrap(unsafeUnwrap(hostWrapper).ownerDocument.createDocumentFragment());
	      DocumentFragment.call(this, node);
	      rewrap(node, this);
	      var oldShadowRoot = hostWrapper.shadowRoot;
	      nextOlderShadowTreeTable.set(this, oldShadowRoot);
	      this.treeScope_ = new TreeScope(this, getTreeScope(oldShadowRoot || hostWrapper));
	      shadowHostTable.set(this, hostWrapper);
	    }
	    ShadowRoot.prototype = Object.create(DocumentFragment.prototype);
	    mixin(ShadowRoot.prototype, {
	      constructor: ShadowRoot,
	      get innerHTML() {
	        return getInnerHTML(this);
	      },
	      set innerHTML(value) {
	        setInnerHTML(this, value);
	        this.invalidateShadowRenderer();
	      },
	      get olderShadowRoot() {
	        return nextOlderShadowTreeTable.get(this) || null;
	      },
	      get host() {
	        return shadowHostTable.get(this) || null;
	      },
	      invalidateShadowRenderer: function() {
	        return shadowHostTable.get(this).invalidateShadowRenderer();
	      },
	      elementFromPoint: function(x, y) {
	        return elementFromPoint(this, this.ownerDocument, x, y);
	      },
	      getSelection: function() {
	        return document.getSelection();
	      },
	      get activeElement() {
	        var unwrappedActiveElement = unwrap(this).ownerDocument.activeElement;
	        if (!unwrappedActiveElement || !unwrappedActiveElement.nodeType) return null;
	        var activeElement = wrap(unwrappedActiveElement);
	        while (!this.contains(activeElement)) {
	          while (activeElement.parentNode) {
	            activeElement = activeElement.parentNode;
	          }
	          if (activeElement.host) {
	            activeElement = activeElement.host;
	          } else {
	            return null;
	          }
	        }
	        return activeElement;
	      }
	    });
	    scope.wrappers.ShadowRoot = ShadowRoot;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var registerWrapper = scope.registerWrapper;
	    var setWrapper = scope.setWrapper;
	    var unsafeUnwrap = scope.unsafeUnwrap;
	    var unwrap = scope.unwrap;
	    var unwrapIfNeeded = scope.unwrapIfNeeded;
	    var wrap = scope.wrap;
	    var getTreeScope = scope.getTreeScope;
	    var OriginalRange = window.Range;
	    var ShadowRoot = scope.wrappers.ShadowRoot;
	    function getHost(node) {
	      var root = getTreeScope(node).root;
	      if (root instanceof ShadowRoot) {
	        return root.host;
	      }
	      return null;
	    }
	    function hostNodeToShadowNode(refNode, offset) {
	      if (refNode.shadowRoot) {
	        offset = Math.min(refNode.childNodes.length - 1, offset);
	        var child = refNode.childNodes[offset];
	        if (child) {
	          var insertionPoint = scope.getDestinationInsertionPoints(child);
	          if (insertionPoint.length > 0) {
	            var parentNode = insertionPoint[0].parentNode;
	            if (parentNode.nodeType == Node.ELEMENT_NODE) {
	              refNode = parentNode;
	            }
	          }
	        }
	      }
	      return refNode;
	    }
	    function shadowNodeToHostNode(node) {
	      node = wrap(node);
	      return getHost(node) || node;
	    }
	    function Range(impl) {
	      setWrapper(impl, this);
	    }
	    Range.prototype = {
	      get startContainer() {
	        return shadowNodeToHostNode(unsafeUnwrap(this).startContainer);
	      },
	      get endContainer() {
	        return shadowNodeToHostNode(unsafeUnwrap(this).endContainer);
	      },
	      get commonAncestorContainer() {
	        return shadowNodeToHostNode(unsafeUnwrap(this).commonAncestorContainer);
	      },
	      setStart: function(refNode, offset) {
	        refNode = hostNodeToShadowNode(refNode, offset);
	        unsafeUnwrap(this).setStart(unwrapIfNeeded(refNode), offset);
	      },
	      setEnd: function(refNode, offset) {
	        refNode = hostNodeToShadowNode(refNode, offset);
	        unsafeUnwrap(this).setEnd(unwrapIfNeeded(refNode), offset);
	      },
	      setStartBefore: function(refNode) {
	        unsafeUnwrap(this).setStartBefore(unwrapIfNeeded(refNode));
	      },
	      setStartAfter: function(refNode) {
	        unsafeUnwrap(this).setStartAfter(unwrapIfNeeded(refNode));
	      },
	      setEndBefore: function(refNode) {
	        unsafeUnwrap(this).setEndBefore(unwrapIfNeeded(refNode));
	      },
	      setEndAfter: function(refNode) {
	        unsafeUnwrap(this).setEndAfter(unwrapIfNeeded(refNode));
	      },
	      selectNode: function(refNode) {
	        unsafeUnwrap(this).selectNode(unwrapIfNeeded(refNode));
	      },
	      selectNodeContents: function(refNode) {
	        unsafeUnwrap(this).selectNodeContents(unwrapIfNeeded(refNode));
	      },
	      compareBoundaryPoints: function(how, sourceRange) {
	        return unsafeUnwrap(this).compareBoundaryPoints(how, unwrap(sourceRange));
	      },
	      extractContents: function() {
	        return wrap(unsafeUnwrap(this).extractContents());
	      },
	      cloneContents: function() {
	        return wrap(unsafeUnwrap(this).cloneContents());
	      },
	      insertNode: function(node) {
	        unsafeUnwrap(this).insertNode(unwrapIfNeeded(node));
	      },
	      surroundContents: function(newParent) {
	        unsafeUnwrap(this).surroundContents(unwrapIfNeeded(newParent));
	      },
	      cloneRange: function() {
	        return wrap(unsafeUnwrap(this).cloneRange());
	      },
	      isPointInRange: function(node, offset) {
	        return unsafeUnwrap(this).isPointInRange(unwrapIfNeeded(node), offset);
	      },
	      comparePoint: function(node, offset) {
	        return unsafeUnwrap(this).comparePoint(unwrapIfNeeded(node), offset);
	      },
	      intersectsNode: function(node) {
	        return unsafeUnwrap(this).intersectsNode(unwrapIfNeeded(node));
	      },
	      toString: function() {
	        return unsafeUnwrap(this).toString();
	      }
	    };
	    if (OriginalRange.prototype.createContextualFragment) {
	      Range.prototype.createContextualFragment = function(html) {
	        return wrap(unsafeUnwrap(this).createContextualFragment(html));
	      };
	    }
	    registerWrapper(window.Range, Range, document.createRange());
	    scope.wrappers.Range = Range;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var Element = scope.wrappers.Element;
	    var HTMLContentElement = scope.wrappers.HTMLContentElement;
	    var HTMLShadowElement = scope.wrappers.HTMLShadowElement;
	    var Node = scope.wrappers.Node;
	    var ShadowRoot = scope.wrappers.ShadowRoot;
	    var assert = scope.assert;
	    var getTreeScope = scope.getTreeScope;
	    var mixin = scope.mixin;
	    var oneOf = scope.oneOf;
	    var unsafeUnwrap = scope.unsafeUnwrap;
	    var unwrap = scope.unwrap;
	    var wrap = scope.wrap;
	    var ArraySplice = scope.ArraySplice;
	    function updateWrapperUpAndSideways(wrapper) {
	      wrapper.previousSibling_ = wrapper.previousSibling;
	      wrapper.nextSibling_ = wrapper.nextSibling;
	      wrapper.parentNode_ = wrapper.parentNode;
	    }
	    function updateWrapperDown(wrapper) {
	      wrapper.firstChild_ = wrapper.firstChild;
	      wrapper.lastChild_ = wrapper.lastChild;
	    }
	    function updateAllChildNodes(parentNodeWrapper) {
	      assert(parentNodeWrapper instanceof Node);
	      for (var childWrapper = parentNodeWrapper.firstChild; childWrapper; childWrapper = childWrapper.nextSibling) {
	        updateWrapperUpAndSideways(childWrapper);
	      }
	      updateWrapperDown(parentNodeWrapper);
	    }
	    function insertBefore(parentNodeWrapper, newChildWrapper, refChildWrapper) {
	      var parentNode = unwrap(parentNodeWrapper);
	      var newChild = unwrap(newChildWrapper);
	      var refChild = refChildWrapper ? unwrap(refChildWrapper) : null;
	      remove(newChildWrapper);
	      updateWrapperUpAndSideways(newChildWrapper);
	      if (!refChildWrapper) {
	        parentNodeWrapper.lastChild_ = parentNodeWrapper.lastChild;
	        if (parentNodeWrapper.lastChild === parentNodeWrapper.firstChild) parentNodeWrapper.firstChild_ = parentNodeWrapper.firstChild;
	        var lastChildWrapper = wrap(parentNode.lastChild);
	        if (lastChildWrapper) lastChildWrapper.nextSibling_ = lastChildWrapper.nextSibling;
	      } else {
	        if (parentNodeWrapper.firstChild === refChildWrapper) parentNodeWrapper.firstChild_ = refChildWrapper;
	        refChildWrapper.previousSibling_ = refChildWrapper.previousSibling;
	      }
	      scope.originalInsertBefore.call(parentNode, newChild, refChild);
	    }
	    function remove(nodeWrapper) {
	      var node = unwrap(nodeWrapper);
	      var parentNode = node.parentNode;
	      if (!parentNode) return;
	      var parentNodeWrapper = wrap(parentNode);
	      updateWrapperUpAndSideways(nodeWrapper);
	      if (nodeWrapper.previousSibling) nodeWrapper.previousSibling.nextSibling_ = nodeWrapper;
	      if (nodeWrapper.nextSibling) nodeWrapper.nextSibling.previousSibling_ = nodeWrapper;
	      if (parentNodeWrapper.lastChild === nodeWrapper) parentNodeWrapper.lastChild_ = nodeWrapper;
	      if (parentNodeWrapper.firstChild === nodeWrapper) parentNodeWrapper.firstChild_ = nodeWrapper;
	      scope.originalRemoveChild.call(parentNode, node);
	    }
	    var distributedNodesTable = new WeakMap();
	    var destinationInsertionPointsTable = new WeakMap();
	    var rendererForHostTable = new WeakMap();
	    function resetDistributedNodes(insertionPoint) {
	      distributedNodesTable.set(insertionPoint, []);
	    }
	    function getDistributedNodes(insertionPoint) {
	      var rv = distributedNodesTable.get(insertionPoint);
	      if (!rv) distributedNodesTable.set(insertionPoint, rv = []);
	      return rv;
	    }
	    function getChildNodesSnapshot(node) {
	      var result = [], i = 0;
	      for (var child = node.firstChild; child; child = child.nextSibling) {
	        result[i++] = child;
	      }
	      return result;
	    }
	    var request = oneOf(window, [ "requestAnimationFrame", "mozRequestAnimationFrame", "webkitRequestAnimationFrame", "setTimeout" ]);
	    var pendingDirtyRenderers = [];
	    var renderTimer;
	    function renderAllPending() {
	      for (var i = 0; i < pendingDirtyRenderers.length; i++) {
	        var renderer = pendingDirtyRenderers[i];
	        var parentRenderer = renderer.parentRenderer;
	        if (parentRenderer && parentRenderer.dirty) continue;
	        renderer.render();
	      }
	      pendingDirtyRenderers = [];
	    }
	    function handleRequestAnimationFrame() {
	      renderTimer = null;
	      renderAllPending();
	    }
	    function getRendererForHost(host) {
	      var renderer = rendererForHostTable.get(host);
	      if (!renderer) {
	        renderer = new ShadowRenderer(host);
	        rendererForHostTable.set(host, renderer);
	      }
	      return renderer;
	    }
	    function getShadowRootAncestor(node) {
	      var root = getTreeScope(node).root;
	      if (root instanceof ShadowRoot) return root;
	      return null;
	    }
	    function getRendererForShadowRoot(shadowRoot) {
	      return getRendererForHost(shadowRoot.host);
	    }
	    var spliceDiff = new ArraySplice();
	    spliceDiff.equals = function(renderNode, rawNode) {
	      return unwrap(renderNode.node) === rawNode;
	    };
	    function RenderNode(node) {
	      this.skip = false;
	      this.node = node;
	      this.childNodes = [];
	    }
	    RenderNode.prototype = {
	      append: function(node) {
	        var rv = new RenderNode(node);
	        this.childNodes.push(rv);
	        return rv;
	      },
	      sync: function(opt_added) {
	        if (this.skip) return;
	        var nodeWrapper = this.node;
	        var newChildren = this.childNodes;
	        var oldChildren = getChildNodesSnapshot(unwrap(nodeWrapper));
	        var added = opt_added || new WeakMap();
	        var splices = spliceDiff.calculateSplices(newChildren, oldChildren);
	        var newIndex = 0, oldIndex = 0;
	        var lastIndex = 0;
	        for (var i = 0; i < splices.length; i++) {
	          var splice = splices[i];
	          for (;lastIndex < splice.index; lastIndex++) {
	            oldIndex++;
	            newChildren[newIndex++].sync(added);
	          }
	          var removedCount = splice.removed.length;
	          for (var j = 0; j < removedCount; j++) {
	            var wrapper = wrap(oldChildren[oldIndex++]);
	            if (!added.get(wrapper)) remove(wrapper);
	          }
	          var addedCount = splice.addedCount;
	          var refNode = oldChildren[oldIndex] && wrap(oldChildren[oldIndex]);
	          for (var j = 0; j < addedCount; j++) {
	            var newChildRenderNode = newChildren[newIndex++];
	            var newChildWrapper = newChildRenderNode.node;
	            insertBefore(nodeWrapper, newChildWrapper, refNode);
	            added.set(newChildWrapper, true);
	            newChildRenderNode.sync(added);
	          }
	          lastIndex += addedCount;
	        }
	        for (var i = lastIndex; i < newChildren.length; i++) {
	          newChildren[i].sync(added);
	        }
	      }
	    };
	    function ShadowRenderer(host) {
	      this.host = host;
	      this.dirty = false;
	      this.invalidateAttributes();
	      this.associateNode(host);
	    }
	    ShadowRenderer.prototype = {
	      render: function(opt_renderNode) {
	        if (!this.dirty) return;
	        this.invalidateAttributes();
	        var host = this.host;
	        this.distribution(host);
	        var renderNode = opt_renderNode || new RenderNode(host);
	        this.buildRenderTree(renderNode, host);
	        var topMostRenderer = !opt_renderNode;
	        if (topMostRenderer) renderNode.sync();
	        this.dirty = false;
	      },
	      get parentRenderer() {
	        return getTreeScope(this.host).renderer;
	      },
	      invalidate: function() {
	        if (!this.dirty) {
	          this.dirty = true;
	          var parentRenderer = this.parentRenderer;
	          if (parentRenderer) parentRenderer.invalidate();
	          pendingDirtyRenderers.push(this);
	          if (renderTimer) return;
	          renderTimer = window[request](handleRequestAnimationFrame, 0);
	        }
	      },
	      distribution: function(root) {
	        this.resetAllSubtrees(root);
	        this.distributionResolution(root);
	      },
	      resetAll: function(node) {
	        if (isInsertionPoint(node)) resetDistributedNodes(node); else resetDestinationInsertionPoints(node);
	        this.resetAllSubtrees(node);
	      },
	      resetAllSubtrees: function(node) {
	        for (var child = node.firstChild; child; child = child.nextSibling) {
	          this.resetAll(child);
	        }
	        if (node.shadowRoot) this.resetAll(node.shadowRoot);
	        if (node.olderShadowRoot) this.resetAll(node.olderShadowRoot);
	      },
	      distributionResolution: function(node) {
	        if (isShadowHost(node)) {
	          var shadowHost = node;
	          var pool = poolPopulation(shadowHost);
	          var shadowTrees = getShadowTrees(shadowHost);
	          for (var i = 0; i < shadowTrees.length; i++) {
	            this.poolDistribution(shadowTrees[i], pool);
	          }
	          for (var i = shadowTrees.length - 1; i >= 0; i--) {
	            var shadowTree = shadowTrees[i];
	            var shadow = getShadowInsertionPoint(shadowTree);
	            if (shadow) {
	              var olderShadowRoot = shadowTree.olderShadowRoot;
	              if (olderShadowRoot) {
	                pool = poolPopulation(olderShadowRoot);
	              }
	              for (var j = 0; j < pool.length; j++) {
	                destributeNodeInto(pool[j], shadow);
	              }
	            }
	            this.distributionResolution(shadowTree);
	          }
	        }
	        for (var child = node.firstChild; child; child = child.nextSibling) {
	          this.distributionResolution(child);
	        }
	      },
	      poolDistribution: function(node, pool) {
	        if (node instanceof HTMLShadowElement) return;
	        if (node instanceof HTMLContentElement) {
	          var content = node;
	          this.updateDependentAttributes(content.getAttribute("select"));
	          var anyDistributed = false;
	          for (var i = 0; i < pool.length; i++) {
	            var node = pool[i];
	            if (!node) continue;
	            if (matches(node, content)) {
	              destributeNodeInto(node, content);
	              pool[i] = undefined;
	              anyDistributed = true;
	            }
	          }
	          if (!anyDistributed) {
	            for (var child = content.firstChild; child; child = child.nextSibling) {
	              destributeNodeInto(child, content);
	            }
	          }
	          return;
	        }
	        for (var child = node.firstChild; child; child = child.nextSibling) {
	          this.poolDistribution(child, pool);
	        }
	      },
	      buildRenderTree: function(renderNode, node) {
	        var children = this.compose(node);
	        for (var i = 0; i < children.length; i++) {
	          var child = children[i];
	          var childRenderNode = renderNode.append(child);
	          this.buildRenderTree(childRenderNode, child);
	        }
	        if (isShadowHost(node)) {
	          var renderer = getRendererForHost(node);
	          renderer.dirty = false;
	        }
	      },
	      compose: function(node) {
	        var children = [];
	        var p = node.shadowRoot || node;
	        for (var child = p.firstChild; child; child = child.nextSibling) {
	          if (isInsertionPoint(child)) {
	            this.associateNode(p);
	            var distributedNodes = getDistributedNodes(child);
	            for (var j = 0; j < distributedNodes.length; j++) {
	              var distributedNode = distributedNodes[j];
	              if (isFinalDestination(child, distributedNode)) children.push(distributedNode);
	            }
	          } else {
	            children.push(child);
	          }
	        }
	        return children;
	      },
	      invalidateAttributes: function() {
	        this.attributes = Object.create(null);
	      },
	      updateDependentAttributes: function(selector) {
	        if (!selector) return;
	        var attributes = this.attributes;
	        if (/\.\w+/.test(selector)) attributes["class"] = true;
	        if (/#\w+/.test(selector)) attributes["id"] = true;
	        selector.replace(/\[\s*([^\s=\|~\]]+)/g, function(_, name) {
	          attributes[name] = true;
	        });
	      },
	      dependsOnAttribute: function(name) {
	        return this.attributes[name];
	      },
	      associateNode: function(node) {
	        unsafeUnwrap(node).polymerShadowRenderer_ = this;
	      }
	    };
	    function poolPopulation(node) {
	      var pool = [];
	      for (var child = node.firstChild; child; child = child.nextSibling) {
	        if (isInsertionPoint(child)) {
	          pool.push.apply(pool, getDistributedNodes(child));
	        } else {
	          pool.push(child);
	        }
	      }
	      return pool;
	    }
	    function getShadowInsertionPoint(node) {
	      if (node instanceof HTMLShadowElement) return node;
	      if (node instanceof HTMLContentElement) return null;
	      for (var child = node.firstChild; child; child = child.nextSibling) {
	        var res = getShadowInsertionPoint(child);
	        if (res) return res;
	      }
	      return null;
	    }
	    function destributeNodeInto(child, insertionPoint) {
	      getDistributedNodes(insertionPoint).push(child);
	      var points = destinationInsertionPointsTable.get(child);
	      if (!points) destinationInsertionPointsTable.set(child, [ insertionPoint ]); else points.push(insertionPoint);
	    }
	    function getDestinationInsertionPoints(node) {
	      return destinationInsertionPointsTable.get(node);
	    }
	    function resetDestinationInsertionPoints(node) {
	      destinationInsertionPointsTable.set(node, undefined);
	    }
	    var selectorStartCharRe = /^(:not\()?[*.#[a-zA-Z_|]/;
	    function matches(node, contentElement) {
	      var select = contentElement.getAttribute("select");
	      if (!select) return true;
	      select = select.trim();
	      if (!select) return true;
	      if (!(node instanceof Element)) return false;
	      if (!selectorStartCharRe.test(select)) return false;
	      try {
	        return node.matches(select);
	      } catch (ex) {
	        return false;
	      }
	    }
	    function isFinalDestination(insertionPoint, node) {
	      var points = getDestinationInsertionPoints(node);
	      return points && points[points.length - 1] === insertionPoint;
	    }
	    function isInsertionPoint(node) {
	      return node instanceof HTMLContentElement || node instanceof HTMLShadowElement;
	    }
	    function isShadowHost(shadowHost) {
	      return shadowHost.shadowRoot;
	    }
	    function getShadowTrees(host) {
	      var trees = [];
	      for (var tree = host.shadowRoot; tree; tree = tree.olderShadowRoot) {
	        trees.push(tree);
	      }
	      return trees;
	    }
	    function render(host) {
	      new ShadowRenderer(host).render();
	    }
	    Node.prototype.invalidateShadowRenderer = function(force) {
	      var renderer = unsafeUnwrap(this).polymerShadowRenderer_;
	      if (renderer) {
	        renderer.invalidate();
	        return true;
	      }
	      return false;
	    };
	    HTMLContentElement.prototype.getDistributedNodes = HTMLShadowElement.prototype.getDistributedNodes = function() {
	      renderAllPending();
	      return getDistributedNodes(this);
	    };
	    Element.prototype.getDestinationInsertionPoints = function() {
	      renderAllPending();
	      return getDestinationInsertionPoints(this) || [];
	    };
	    HTMLContentElement.prototype.nodeIsInserted_ = HTMLShadowElement.prototype.nodeIsInserted_ = function() {
	      this.invalidateShadowRenderer();
	      var shadowRoot = getShadowRootAncestor(this);
	      var renderer;
	      if (shadowRoot) renderer = getRendererForShadowRoot(shadowRoot);
	      unsafeUnwrap(this).polymerShadowRenderer_ = renderer;
	      if (renderer) renderer.invalidate();
	    };
	    scope.getRendererForHost = getRendererForHost;
	    scope.getShadowTrees = getShadowTrees;
	    scope.renderAllPending = renderAllPending;
	    scope.getDestinationInsertionPoints = getDestinationInsertionPoints;
	    scope.visual = {
	      insertBefore: insertBefore,
	      remove: remove
	    };
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var HTMLElement = scope.wrappers.HTMLElement;
	    var assert = scope.assert;
	    var mixin = scope.mixin;
	    var registerWrapper = scope.registerWrapper;
	    var unwrap = scope.unwrap;
	    var wrap = scope.wrap;
	    var elementsWithFormProperty = [ "HTMLButtonElement", "HTMLFieldSetElement", "HTMLInputElement", "HTMLKeygenElement", "HTMLLabelElement", "HTMLLegendElement", "HTMLObjectElement", "HTMLOutputElement", "HTMLTextAreaElement" ];
	    function createWrapperConstructor(name) {
	      if (!window[name]) return;
	      assert(!scope.wrappers[name]);
	      var GeneratedWrapper = function(node) {
	        HTMLElement.call(this, node);
	      };
	      GeneratedWrapper.prototype = Object.create(HTMLElement.prototype);
	      mixin(GeneratedWrapper.prototype, {
	        get form() {
	          return wrap(unwrap(this).form);
	        }
	      });
	      registerWrapper(window[name], GeneratedWrapper, document.createElement(name.slice(4, -7)));
	      scope.wrappers[name] = GeneratedWrapper;
	    }
	    elementsWithFormProperty.forEach(createWrapperConstructor);
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var registerWrapper = scope.registerWrapper;
	    var setWrapper = scope.setWrapper;
	    var unsafeUnwrap = scope.unsafeUnwrap;
	    var unwrap = scope.unwrap;
	    var unwrapIfNeeded = scope.unwrapIfNeeded;
	    var wrap = scope.wrap;
	    var OriginalSelection = window.Selection;
	    function Selection(impl) {
	      setWrapper(impl, this);
	    }
	    Selection.prototype = {
	      get anchorNode() {
	        return wrap(unsafeUnwrap(this).anchorNode);
	      },
	      get focusNode() {
	        return wrap(unsafeUnwrap(this).focusNode);
	      },
	      addRange: function(range) {
	        unsafeUnwrap(this).addRange(unwrapIfNeeded(range));
	      },
	      collapse: function(node, index) {
	        unsafeUnwrap(this).collapse(unwrapIfNeeded(node), index);
	      },
	      containsNode: function(node, allowPartial) {
	        return unsafeUnwrap(this).containsNode(unwrapIfNeeded(node), allowPartial);
	      },
	      getRangeAt: function(index) {
	        return wrap(unsafeUnwrap(this).getRangeAt(index));
	      },
	      removeRange: function(range) {
	        unsafeUnwrap(this).removeRange(unwrap(range));
	      },
	      selectAllChildren: function(node) {
	        unsafeUnwrap(this).selectAllChildren(node instanceof ShadowRoot ? unsafeUnwrap(node.host) : unwrapIfNeeded(node));
	      },
	      toString: function() {
	        return unsafeUnwrap(this).toString();
	      }
	    };
	    if (OriginalSelection.prototype.extend) {
	      Selection.prototype.extend = function(node, offset) {
	        unsafeUnwrap(this).extend(unwrapIfNeeded(node), offset);
	      };
	    }
	    registerWrapper(window.Selection, Selection, window.getSelection());
	    scope.wrappers.Selection = Selection;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var registerWrapper = scope.registerWrapper;
	    var setWrapper = scope.setWrapper;
	    var unsafeUnwrap = scope.unsafeUnwrap;
	    var unwrapIfNeeded = scope.unwrapIfNeeded;
	    var wrap = scope.wrap;
	    var OriginalTreeWalker = window.TreeWalker;
	    function TreeWalker(impl) {
	      setWrapper(impl, this);
	    }
	    TreeWalker.prototype = {
	      get root() {
	        return wrap(unsafeUnwrap(this).root);
	      },
	      get currentNode() {
	        return wrap(unsafeUnwrap(this).currentNode);
	      },
	      set currentNode(node) {
	        unsafeUnwrap(this).currentNode = unwrapIfNeeded(node);
	      },
	      get filter() {
	        return unsafeUnwrap(this).filter;
	      },
	      parentNode: function() {
	        return wrap(unsafeUnwrap(this).parentNode());
	      },
	      firstChild: function() {
	        return wrap(unsafeUnwrap(this).firstChild());
	      },
	      lastChild: function() {
	        return wrap(unsafeUnwrap(this).lastChild());
	      },
	      previousSibling: function() {
	        return wrap(unsafeUnwrap(this).previousSibling());
	      },
	      previousNode: function() {
	        return wrap(unsafeUnwrap(this).previousNode());
	      },
	      nextNode: function() {
	        return wrap(unsafeUnwrap(this).nextNode());
	      }
	    };
	    registerWrapper(OriginalTreeWalker, TreeWalker);
	    scope.wrappers.TreeWalker = TreeWalker;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var GetElementsByInterface = scope.GetElementsByInterface;
	    var Node = scope.wrappers.Node;
	    var ParentNodeInterface = scope.ParentNodeInterface;
	    var NonElementParentNodeInterface = scope.NonElementParentNodeInterface;
	    var Selection = scope.wrappers.Selection;
	    var SelectorsInterface = scope.SelectorsInterface;
	    var ShadowRoot = scope.wrappers.ShadowRoot;
	    var TreeScope = scope.TreeScope;
	    var cloneNode = scope.cloneNode;
	    var defineGetter = scope.defineGetter;
	    var defineWrapGetter = scope.defineWrapGetter;
	    var elementFromPoint = scope.elementFromPoint;
	    var forwardMethodsToWrapper = scope.forwardMethodsToWrapper;
	    var matchesNames = scope.matchesNames;
	    var mixin = scope.mixin;
	    var registerWrapper = scope.registerWrapper;
	    var renderAllPending = scope.renderAllPending;
	    var rewrap = scope.rewrap;
	    var setWrapper = scope.setWrapper;
	    var unsafeUnwrap = scope.unsafeUnwrap;
	    var unwrap = scope.unwrap;
	    var wrap = scope.wrap;
	    var wrapEventTargetMethods = scope.wrapEventTargetMethods;
	    var wrapNodeList = scope.wrapNodeList;
	    var implementationTable = new WeakMap();
	    function Document(node) {
	      Node.call(this, node);
	      this.treeScope_ = new TreeScope(this, null);
	    }
	    Document.prototype = Object.create(Node.prototype);
	    defineWrapGetter(Document, "documentElement");
	    defineWrapGetter(Document, "body");
	    defineWrapGetter(Document, "head");
	    defineGetter(Document, "activeElement", function() {
	      var unwrappedActiveElement = unwrap(this).activeElement;
	      if (!unwrappedActiveElement || !unwrappedActiveElement.nodeType) return null;
	      var activeElement = wrap(unwrappedActiveElement);
	      while (!this.contains(activeElement)) {
	        while (activeElement.parentNode) {
	          activeElement = activeElement.parentNode;
	        }
	        if (activeElement.host) {
	          activeElement = activeElement.host;
	        } else {
	          return null;
	        }
	      }
	      return activeElement;
	    });
	    function wrapMethod(name) {
	      var original = document[name];
	      Document.prototype[name] = function() {
	        return wrap(original.apply(unsafeUnwrap(this), arguments));
	      };
	    }
	    [ "createComment", "createDocumentFragment", "createElement", "createElementNS", "createEvent", "createEventNS", "createRange", "createTextNode" ].forEach(wrapMethod);
	    var originalAdoptNode = document.adoptNode;
	    function adoptNodeNoRemove(node, doc) {
	      originalAdoptNode.call(unsafeUnwrap(doc), unwrap(node));
	      adoptSubtree(node, doc);
	    }
	    function adoptSubtree(node, doc) {
	      if (node.shadowRoot) doc.adoptNode(node.shadowRoot);
	      if (node instanceof ShadowRoot) adoptOlderShadowRoots(node, doc);
	      for (var child = node.firstChild; child; child = child.nextSibling) {
	        adoptSubtree(child, doc);
	      }
	    }
	    function adoptOlderShadowRoots(shadowRoot, doc) {
	      var oldShadowRoot = shadowRoot.olderShadowRoot;
	      if (oldShadowRoot) doc.adoptNode(oldShadowRoot);
	    }
	    var originalGetSelection = document.getSelection;
	    mixin(Document.prototype, {
	      adoptNode: function(node) {
	        if (node.parentNode) node.parentNode.removeChild(node);
	        adoptNodeNoRemove(node, this);
	        return node;
	      },
	      elementFromPoint: function(x, y) {
	        return elementFromPoint(this, this, x, y);
	      },
	      importNode: function(node, deep) {
	        return cloneNode(node, deep, unsafeUnwrap(this));
	      },
	      getSelection: function() {
	        renderAllPending();
	        return new Selection(originalGetSelection.call(unwrap(this)));
	      },
	      getElementsByName: function(name) {
	        return SelectorsInterface.querySelectorAll.call(this, "[name=" + JSON.stringify(String(name)) + "]");
	      }
	    });
	    var originalCreateTreeWalker = document.createTreeWalker;
	    var TreeWalkerWrapper = scope.wrappers.TreeWalker;
	    Document.prototype.createTreeWalker = function(root, whatToShow, filter, expandEntityReferences) {
	      var newFilter = null;
	      if (filter) {
	        if (filter.acceptNode && typeof filter.acceptNode === "function") {
	          newFilter = {
	            acceptNode: function(node) {
	              return filter.acceptNode(wrap(node));
	            }
	          };
	        } else if (typeof filter === "function") {
	          newFilter = function(node) {
	            return filter(wrap(node));
	          };
	        }
	      }
	      return new TreeWalkerWrapper(originalCreateTreeWalker.call(unwrap(this), unwrap(root), whatToShow, newFilter, expandEntityReferences));
	    };
	    if (document.registerElement) {
	      var originalRegisterElement = document.registerElement;
	      Document.prototype.registerElement = function(tagName, object) {
	        var prototype, extendsOption;
	        if (object !== undefined) {
	          prototype = object.prototype;
	          extendsOption = object.extends;
	        }
	        if (!prototype) prototype = Object.create(HTMLElement.prototype);
	        if (scope.nativePrototypeTable.get(prototype)) {
	          throw new Error("NotSupportedError");
	        }
	        var proto = Object.getPrototypeOf(prototype);
	        var nativePrototype;
	        var prototypes = [];
	        while (proto) {
	          nativePrototype = scope.nativePrototypeTable.get(proto);
	          if (nativePrototype) break;
	          prototypes.push(proto);
	          proto = Object.getPrototypeOf(proto);
	        }
	        if (!nativePrototype) {
	          throw new Error("NotSupportedError");
	        }
	        var newPrototype = Object.create(nativePrototype);
	        for (var i = prototypes.length - 1; i >= 0; i--) {
	          newPrototype = Object.create(newPrototype);
	        }
	        [ "createdCallback", "attachedCallback", "detachedCallback", "attributeChangedCallback" ].forEach(function(name) {
	          var f = prototype[name];
	          if (!f) return;
	          newPrototype[name] = function() {
	            if (!(wrap(this) instanceof CustomElementConstructor)) {
	              rewrap(this);
	            }
	            f.apply(wrap(this), arguments);
	          };
	        });
	        var p = {
	          prototype: newPrototype
	        };
	        if (extendsOption) p.extends = extendsOption;
	        function CustomElementConstructor(node) {
	          if (!node) {
	            if (extendsOption) {
	              return document.createElement(extendsOption, tagName);
	            } else {
	              return document.createElement(tagName);
	            }
	          }
	          setWrapper(node, this);
	        }
	        CustomElementConstructor.prototype = prototype;
	        CustomElementConstructor.prototype.constructor = CustomElementConstructor;
	        scope.constructorTable.set(newPrototype, CustomElementConstructor);
	        scope.nativePrototypeTable.set(prototype, newPrototype);
	        var nativeConstructor = originalRegisterElement.call(unwrap(this), tagName, p);
	        return CustomElementConstructor;
	      };
	      forwardMethodsToWrapper([ window.HTMLDocument || window.Document ], [ "registerElement" ]);
	    }
	    forwardMethodsToWrapper([ window.HTMLBodyElement, window.HTMLDocument || window.Document, window.HTMLHeadElement, window.HTMLHtmlElement ], [ "appendChild", "compareDocumentPosition", "contains", "getElementsByClassName", "getElementsByTagName", "getElementsByTagNameNS", "insertBefore", "querySelector", "querySelectorAll", "removeChild", "replaceChild" ]);
	    forwardMethodsToWrapper([ window.HTMLBodyElement, window.HTMLHeadElement, window.HTMLHtmlElement ], matchesNames);
	    forwardMethodsToWrapper([ window.HTMLDocument || window.Document ], [ "adoptNode", "importNode", "contains", "createComment", "createDocumentFragment", "createElement", "createElementNS", "createEvent", "createEventNS", "createRange", "createTextNode", "createTreeWalker", "elementFromPoint", "getElementById", "getElementsByName", "getSelection" ]);
	    mixin(Document.prototype, GetElementsByInterface);
	    mixin(Document.prototype, ParentNodeInterface);
	    mixin(Document.prototype, SelectorsInterface);
	    mixin(Document.prototype, NonElementParentNodeInterface);
	    mixin(Document.prototype, {
	      get implementation() {
	        var implementation = implementationTable.get(this);
	        if (implementation) return implementation;
	        implementation = new DOMImplementation(unwrap(this).implementation);
	        implementationTable.set(this, implementation);
	        return implementation;
	      },
	      get defaultView() {
	        return wrap(unwrap(this).defaultView);
	      }
	    });
	    registerWrapper(window.Document, Document, document.implementation.createHTMLDocument(""));
	    if (window.HTMLDocument) registerWrapper(window.HTMLDocument, Document);
	    wrapEventTargetMethods([ window.HTMLBodyElement, window.HTMLDocument || window.Document, window.HTMLHeadElement ]);
	    function DOMImplementation(impl) {
	      setWrapper(impl, this);
	    }
	    var originalCreateDocument = document.implementation.createDocument;
	    DOMImplementation.prototype.createDocument = function() {
	      arguments[2] = unwrap(arguments[2]);
	      return wrap(originalCreateDocument.apply(unsafeUnwrap(this), arguments));
	    };
	    function wrapImplMethod(constructor, name) {
	      var original = document.implementation[name];
	      constructor.prototype[name] = function() {
	        return wrap(original.apply(unsafeUnwrap(this), arguments));
	      };
	    }
	    function forwardImplMethod(constructor, name) {
	      var original = document.implementation[name];
	      constructor.prototype[name] = function() {
	        return original.apply(unsafeUnwrap(this), arguments);
	      };
	    }
	    wrapImplMethod(DOMImplementation, "createDocumentType");
	    wrapImplMethod(DOMImplementation, "createHTMLDocument");
	    forwardImplMethod(DOMImplementation, "hasFeature");
	    registerWrapper(window.DOMImplementation, DOMImplementation);
	    forwardMethodsToWrapper([ window.DOMImplementation ], [ "createDocument", "createDocumentType", "createHTMLDocument", "hasFeature" ]);
	    scope.adoptNodeNoRemove = adoptNodeNoRemove;
	    scope.wrappers.DOMImplementation = DOMImplementation;
	    scope.wrappers.Document = Document;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var EventTarget = scope.wrappers.EventTarget;
	    var Selection = scope.wrappers.Selection;
	    var mixin = scope.mixin;
	    var registerWrapper = scope.registerWrapper;
	    var renderAllPending = scope.renderAllPending;
	    var unwrap = scope.unwrap;
	    var unwrapIfNeeded = scope.unwrapIfNeeded;
	    var wrap = scope.wrap;
	    var OriginalWindow = window.Window;
	    var originalGetComputedStyle = window.getComputedStyle;
	    var originalGetDefaultComputedStyle = window.getDefaultComputedStyle;
	    var originalGetSelection = window.getSelection;
	    function Window(impl) {
	      EventTarget.call(this, impl);
	    }
	    Window.prototype = Object.create(EventTarget.prototype);
	    OriginalWindow.prototype.getComputedStyle = function(el, pseudo) {
	      return wrap(this || window).getComputedStyle(unwrapIfNeeded(el), pseudo);
	    };
	    if (originalGetDefaultComputedStyle) {
	      OriginalWindow.prototype.getDefaultComputedStyle = function(el, pseudo) {
	        return wrap(this || window).getDefaultComputedStyle(unwrapIfNeeded(el), pseudo);
	      };
	    }
	    OriginalWindow.prototype.getSelection = function() {
	      return wrap(this || window).getSelection();
	    };
	    delete window.getComputedStyle;
	    delete window.getDefaultComputedStyle;
	    delete window.getSelection;
	    [ "addEventListener", "removeEventListener", "dispatchEvent" ].forEach(function(name) {
	      OriginalWindow.prototype[name] = function() {
	        var w = wrap(this || window);
	        return w[name].apply(w, arguments);
	      };
	      delete window[name];
	    });
	    mixin(Window.prototype, {
	      getComputedStyle: function(el, pseudo) {
	        renderAllPending();
	        return originalGetComputedStyle.call(unwrap(this), unwrapIfNeeded(el), pseudo);
	      },
	      getSelection: function() {
	        renderAllPending();
	        return new Selection(originalGetSelection.call(unwrap(this)));
	      },
	      get document() {
	        return wrap(unwrap(this).document);
	      }
	    });
	    if (originalGetDefaultComputedStyle) {
	      Window.prototype.getDefaultComputedStyle = function(el, pseudo) {
	        renderAllPending();
	        return originalGetDefaultComputedStyle.call(unwrap(this), unwrapIfNeeded(el), pseudo);
	      };
	    }
	    registerWrapper(OriginalWindow, Window, window);
	    scope.wrappers.Window = Window;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var unwrap = scope.unwrap;
	    var OriginalDataTransfer = window.DataTransfer || window.Clipboard;
	    var OriginalDataTransferSetDragImage = OriginalDataTransfer.prototype.setDragImage;
	    if (OriginalDataTransferSetDragImage) {
	      OriginalDataTransfer.prototype.setDragImage = function(image, x, y) {
	        OriginalDataTransferSetDragImage.call(this, unwrap(image), x, y);
	      };
	    }
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var registerWrapper = scope.registerWrapper;
	    var setWrapper = scope.setWrapper;
	    var unwrap = scope.unwrap;
	    var OriginalFormData = window.FormData;
	    if (!OriginalFormData) return;
	    function FormData(formElement) {
	      var impl;
	      if (formElement instanceof OriginalFormData) {
	        impl = formElement;
	      } else {
	        impl = new OriginalFormData(formElement && unwrap(formElement));
	      }
	      setWrapper(impl, this);
	    }
	    registerWrapper(OriginalFormData, FormData, new OriginalFormData());
	    scope.wrappers.FormData = FormData;
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var unwrapIfNeeded = scope.unwrapIfNeeded;
	    var originalSend = XMLHttpRequest.prototype.send;
	    XMLHttpRequest.prototype.send = function(obj) {
	      return originalSend.call(this, unwrapIfNeeded(obj));
	    };
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    "use strict";
	    var isWrapperFor = scope.isWrapperFor;
	    var elements = {
	      a: "HTMLAnchorElement",
	      area: "HTMLAreaElement",
	      audio: "HTMLAudioElement",
	      base: "HTMLBaseElement",
	      body: "HTMLBodyElement",
	      br: "HTMLBRElement",
	      button: "HTMLButtonElement",
	      canvas: "HTMLCanvasElement",
	      caption: "HTMLTableCaptionElement",
	      col: "HTMLTableColElement",
	      content: "HTMLContentElement",
	      data: "HTMLDataElement",
	      datalist: "HTMLDataListElement",
	      del: "HTMLModElement",
	      dir: "HTMLDirectoryElement",
	      div: "HTMLDivElement",
	      dl: "HTMLDListElement",
	      embed: "HTMLEmbedElement",
	      fieldset: "HTMLFieldSetElement",
	      font: "HTMLFontElement",
	      form: "HTMLFormElement",
	      frame: "HTMLFrameElement",
	      frameset: "HTMLFrameSetElement",
	      h1: "HTMLHeadingElement",
	      head: "HTMLHeadElement",
	      hr: "HTMLHRElement",
	      html: "HTMLHtmlElement",
	      iframe: "HTMLIFrameElement",
	      img: "HTMLImageElement",
	      input: "HTMLInputElement",
	      keygen: "HTMLKeygenElement",
	      label: "HTMLLabelElement",
	      legend: "HTMLLegendElement",
	      li: "HTMLLIElement",
	      link: "HTMLLinkElement",
	      map: "HTMLMapElement",
	      marquee: "HTMLMarqueeElement",
	      menu: "HTMLMenuElement",
	      menuitem: "HTMLMenuItemElement",
	      meta: "HTMLMetaElement",
	      meter: "HTMLMeterElement",
	      object: "HTMLObjectElement",
	      ol: "HTMLOListElement",
	      optgroup: "HTMLOptGroupElement",
	      option: "HTMLOptionElement",
	      output: "HTMLOutputElement",
	      p: "HTMLParagraphElement",
	      param: "HTMLParamElement",
	      pre: "HTMLPreElement",
	      progress: "HTMLProgressElement",
	      q: "HTMLQuoteElement",
	      script: "HTMLScriptElement",
	      select: "HTMLSelectElement",
	      shadow: "HTMLShadowElement",
	      source: "HTMLSourceElement",
	      span: "HTMLSpanElement",
	      style: "HTMLStyleElement",
	      table: "HTMLTableElement",
	      tbody: "HTMLTableSectionElement",
	      template: "HTMLTemplateElement",
	      textarea: "HTMLTextAreaElement",
	      thead: "HTMLTableSectionElement",
	      time: "HTMLTimeElement",
	      title: "HTMLTitleElement",
	      tr: "HTMLTableRowElement",
	      track: "HTMLTrackElement",
	      ul: "HTMLUListElement",
	      video: "HTMLVideoElement"
	    };
	    function overrideConstructor(tagName) {
	      var nativeConstructorName = elements[tagName];
	      var nativeConstructor = window[nativeConstructorName];
	      if (!nativeConstructor) return;
	      var element = document.createElement(tagName);
	      var wrapperConstructor = element.constructor;
	      window[nativeConstructorName] = wrapperConstructor;
	    }
	    Object.keys(elements).forEach(overrideConstructor);
	    Object.getOwnPropertyNames(scope.wrappers).forEach(function(name) {
	      window[name] = scope.wrappers[name];
	    });
	  })(window.ShadowDOMPolyfill);
	  (function(scope) {
	    var ShadowCSS = {
	      strictStyling: false,
	      registry: {},
	      shimStyling: function(root, name, extendsName) {
	        var scopeStyles = this.prepareRoot(root, name, extendsName);
	        var typeExtension = this.isTypeExtension(extendsName);
	        var scopeSelector = this.makeScopeSelector(name, typeExtension);
	        var cssText = stylesToCssText(scopeStyles, true);
	        cssText = this.scopeCssText(cssText, scopeSelector);
	        if (root) {
	          root.shimmedStyle = cssText;
	        }
	        this.addCssToDocument(cssText, name);
	      },
	      shimStyle: function(style, selector) {
	        return this.shimCssText(style.textContent, selector);
	      },
	      shimCssText: function(cssText, selector) {
	        cssText = this.insertDirectives(cssText);
	        return this.scopeCssText(cssText, selector);
	      },
	      makeScopeSelector: function(name, typeExtension) {
	        if (name) {
	          return typeExtension ? "[is=" + name + "]" : name;
	        }
	        return "";
	      },
	      isTypeExtension: function(extendsName) {
	        return extendsName && extendsName.indexOf("-") < 0;
	      },
	      prepareRoot: function(root, name, extendsName) {
	        var def = this.registerRoot(root, name, extendsName);
	        this.replaceTextInStyles(def.rootStyles, this.insertDirectives);
	        this.removeStyles(root, def.rootStyles);
	        if (this.strictStyling) {
	          this.applyScopeToContent(root, name);
	        }
	        return def.scopeStyles;
	      },
	      removeStyles: function(root, styles) {
	        for (var i = 0, l = styles.length, s; i < l && (s = styles[i]); i++) {
	          s.parentNode.removeChild(s);
	        }
	      },
	      registerRoot: function(root, name, extendsName) {
	        var def = this.registry[name] = {
	          root: root,
	          name: name,
	          extendsName: extendsName
	        };
	        var styles = this.findStyles(root);
	        def.rootStyles = styles;
	        def.scopeStyles = def.rootStyles;
	        var extendee = this.registry[def.extendsName];
	        if (extendee) {
	          def.scopeStyles = extendee.scopeStyles.concat(def.scopeStyles);
	        }
	        return def;
	      },
	      findStyles: function(root) {
	        if (!root) {
	          return [];
	        }
	        var styles = root.querySelectorAll("style");
	        return Array.prototype.filter.call(styles, function(s) {
	          return !s.hasAttribute(NO_SHIM_ATTRIBUTE);
	        });
	      },
	      applyScopeToContent: function(root, name) {
	        if (root) {
	          Array.prototype.forEach.call(root.querySelectorAll("*"), function(node) {
	            node.setAttribute(name, "");
	          });
	          Array.prototype.forEach.call(root.querySelectorAll("template"), function(template) {
	            this.applyScopeToContent(template.content, name);
	          }, this);
	        }
	      },
	      insertDirectives: function(cssText) {
	        cssText = this.insertPolyfillDirectivesInCssText(cssText);
	        return this.insertPolyfillRulesInCssText(cssText);
	      },
	      insertPolyfillDirectivesInCssText: function(cssText) {
	        cssText = cssText.replace(cssCommentNextSelectorRe, function(match, p1) {
	          return p1.slice(0, -2) + "{";
	        });
	        return cssText.replace(cssContentNextSelectorRe, function(match, p1) {
	          return p1 + " {";
	        });
	      },
	      insertPolyfillRulesInCssText: function(cssText) {
	        cssText = cssText.replace(cssCommentRuleRe, function(match, p1) {
	          return p1.slice(0, -1);
	        });
	        return cssText.replace(cssContentRuleRe, function(match, p1, p2, p3) {
	          var rule = match.replace(p1, "").replace(p2, "");
	          return p3 + rule;
	        });
	      },
	      scopeCssText: function(cssText, scopeSelector) {
	        var unscoped = this.extractUnscopedRulesFromCssText(cssText);
	        cssText = this.insertPolyfillHostInCssText(cssText);
	        cssText = this.convertColonHost(cssText);
	        cssText = this.convertColonHostContext(cssText);
	        cssText = this.convertShadowDOMSelectors(cssText);
	        if (scopeSelector) {
	          var self = this, cssText;
	          withCssRules(cssText, function(rules) {
	            cssText = self.scopeRules(rules, scopeSelector);
	          });
	        }
	        cssText = cssText + "\n" + unscoped;
	        return cssText.trim();
	      },
	      extractUnscopedRulesFromCssText: function(cssText) {
	        var r = "", m;
	        while (m = cssCommentUnscopedRuleRe.exec(cssText)) {
	          r += m[1].slice(0, -1) + "\n\n";
	        }
	        while (m = cssContentUnscopedRuleRe.exec(cssText)) {
	          r += m[0].replace(m[2], "").replace(m[1], m[3]) + "\n\n";
	        }
	        return r;
	      },
	      convertColonHost: function(cssText) {
	        return this.convertColonRule(cssText, cssColonHostRe, this.colonHostPartReplacer);
	      },
	      convertColonHostContext: function(cssText) {
	        return this.convertColonRule(cssText, cssColonHostContextRe, this.colonHostContextPartReplacer);
	      },
	      convertColonRule: function(cssText, regExp, partReplacer) {
	        return cssText.replace(regExp, function(m, p1, p2, p3) {
	          p1 = polyfillHostNoCombinator;
	          if (p2) {
	            var parts = p2.split(","), r = [];
	            for (var i = 0, l = parts.length, p; i < l && (p = parts[i]); i++) {
	              p = p.trim();
	              r.push(partReplacer(p1, p, p3));
	            }
	            return r.join(",");
	          } else {
	            return p1 + p3;
	          }
	        });
	      },
	      colonHostContextPartReplacer: function(host, part, suffix) {
	        if (part.match(polyfillHost)) {
	          return this.colonHostPartReplacer(host, part, suffix);
	        } else {
	          return host + part + suffix + ", " + part + " " + host + suffix;
	        }
	      },
	      colonHostPartReplacer: function(host, part, suffix) {
	        return host + part.replace(polyfillHost, "") + suffix;
	      },
	      convertShadowDOMSelectors: function(cssText) {
	        for (var i = 0; i < shadowDOMSelectorsRe.length; i++) {
	          cssText = cssText.replace(shadowDOMSelectorsRe[i], " ");
	        }
	        return cssText;
	      },
	      scopeRules: function(cssRules, scopeSelector) {
	        var cssText = "";
	        if (cssRules) {
	          Array.prototype.forEach.call(cssRules, function(rule) {
	            if (rule.selectorText && (rule.style && rule.style.cssText !== undefined)) {
	              cssText += this.scopeSelector(rule.selectorText, scopeSelector, this.strictStyling) + " {\n	";
	              cssText += this.propertiesFromRule(rule) + "\n}\n\n";
	            } else if (rule.type === CSSRule.MEDIA_RULE) {
	              cssText += "@media " + rule.media.mediaText + " {\n";
	              cssText += this.scopeRules(rule.cssRules, scopeSelector);
	              cssText += "\n}\n\n";
	            } else {
	              try {
	                if (rule.cssText) {
	                  cssText += rule.cssText + "\n\n";
	                }
	              } catch (x) {
	                if (rule.type === CSSRule.KEYFRAMES_RULE && rule.cssRules) {
	                  cssText += this.ieSafeCssTextFromKeyFrameRule(rule);
	                }
	              }
	            }
	          }, this);
	        }
	        return cssText;
	      },
	      ieSafeCssTextFromKeyFrameRule: function(rule) {
	        var cssText = "@keyframes " + rule.name + " {";
	        Array.prototype.forEach.call(rule.cssRules, function(rule) {
	          cssText += " " + rule.keyText + " {" + rule.style.cssText + "}";
	        });
	        cssText += " }";
	        return cssText;
	      },
	      scopeSelector: function(selector, scopeSelector, strict) {
	        var r = [], parts = selector.split(",");
	        parts.forEach(function(p) {
	          p = p.trim();
	          if (this.selectorNeedsScoping(p, scopeSelector)) {
	            p = strict && !p.match(polyfillHostNoCombinator) ? this.applyStrictSelectorScope(p, scopeSelector) : this.applySelectorScope(p, scopeSelector);
	          }
	          r.push(p);
	        }, this);
	        return r.join(", ");
	      },
	      selectorNeedsScoping: function(selector, scopeSelector) {
	        if (Array.isArray(scopeSelector)) {
	          return true;
	        }
	        var re = this.makeScopeMatcher(scopeSelector);
	        return !selector.match(re);
	      },
	      makeScopeMatcher: function(scopeSelector) {
	        scopeSelector = scopeSelector.replace(/\[/g, "\\[").replace(/\]/g, "\\]");
	        return new RegExp("^(" + scopeSelector + ")" + selectorReSuffix, "m");
	      },
	      applySelectorScope: function(selector, selectorScope) {
	        return Array.isArray(selectorScope) ? this.applySelectorScopeList(selector, selectorScope) : this.applySimpleSelectorScope(selector, selectorScope);
	      },
	      applySelectorScopeList: function(selector, scopeSelectorList) {
	        var r = [];
	        for (var i = 0, s; s = scopeSelectorList[i]; i++) {
	          r.push(this.applySimpleSelectorScope(selector, s));
	        }
	        return r.join(", ");
	      },
	      applySimpleSelectorScope: function(selector, scopeSelector) {
	        if (selector.match(polyfillHostRe)) {
	          selector = selector.replace(polyfillHostNoCombinator, scopeSelector);
	          return selector.replace(polyfillHostRe, scopeSelector + " ");
	        } else {
	          return scopeSelector + " " + selector;
	        }
	      },
	      applyStrictSelectorScope: function(selector, scopeSelector) {
	        scopeSelector = scopeSelector.replace(/\[is=([^\]]*)\]/g, "$1");
	        var splits = [ " ", ">", "+", "~" ], scoped = selector, attrName = "[" + scopeSelector + "]";
	        splits.forEach(function(sep) {
	          var parts = scoped.split(sep);
	          scoped = parts.map(function(p) {
	            var t = p.trim().replace(polyfillHostRe, "");
	            if (t && splits.indexOf(t) < 0 && t.indexOf(attrName) < 0) {
	              p = t.replace(/([^:]*)(:*)(.*)/, "$1" + attrName + "$2$3");
	            }
	            return p;
	          }).join(sep);
	        });
	        return scoped;
	      },
	      insertPolyfillHostInCssText: function(selector) {
	        return selector.replace(colonHostContextRe, polyfillHostContext).replace(colonHostRe, polyfillHost);
	      },
	      propertiesFromRule: function(rule) {
	        var cssText = rule.style.cssText;
	        if (rule.style.content && !rule.style.content.match(/['"]+|attr/)) {
	          cssText = cssText.replace(/content:[^;]*;/g, "content: '" + rule.style.content + "';");
	        }
	        var style = rule.style;
	        for (var i in style) {
	          if (style[i] === "initial") {
	            cssText += i + ": initial; ";
	          }
	        }
	        return cssText;
	      },
	      replaceTextInStyles: function(styles, action) {
	        if (styles && action) {
	          if (!(styles instanceof Array)) {
	            styles = [ styles ];
	          }
	          Array.prototype.forEach.call(styles, function(s) {
	            s.textContent = action.call(this, s.textContent);
	          }, this);
	        }
	      },
	      addCssToDocument: function(cssText, name) {
	        if (cssText.match("@import")) {
	          addOwnSheet(cssText, name);
	        } else {
	          addCssToDocument(cssText);
	        }
	      }
	    };
	    var selectorRe = /([^{]*)({[\s\S]*?})/gim, cssCommentRe = /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim, cssCommentNextSelectorRe = /\/\*\s*@polyfill ([^*]*\*+([^\/*][^*]*\*+)*\/)([^{]*?){/gim, cssContentNextSelectorRe = /polyfill-next-selector[^}]*content\:[\s]*?['"](.*?)['"][;\s]*}([^{]*?){/gim, cssCommentRuleRe = /\/\*\s@polyfill-rule([^*]*\*+([^\/*][^*]*\*+)*)\//gim, cssContentRuleRe = /(polyfill-rule)[^}]*(content\:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim, cssCommentUnscopedRuleRe = /\/\*\s@polyfill-unscoped-rule([^*]*\*+([^\/*][^*]*\*+)*)\//gim, cssContentUnscopedRuleRe = /(polyfill-unscoped-rule)[^}]*(content\:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim, cssPseudoRe = /::(x-[^\s{,(]*)/gim, cssPartRe = /::part\(([^)]*)\)/gim, polyfillHost = "-shadowcsshost", polyfillHostContext = "-shadowcsscontext", parenSuffix = ")(?:\\((" + "(?:\\([^)(]*\\)|[^)(]*)+?" + ")\\))?([^,{]*)";
	    var cssColonHostRe = new RegExp("(" + polyfillHost + parenSuffix, "gim"), cssColonHostContextRe = new RegExp("(" + polyfillHostContext + parenSuffix, "gim"), selectorReSuffix = "([>\\s~+[.,{:][\\s\\S]*)?$", colonHostRe = /\:host/gim, colonHostContextRe = /\:host-context/gim, polyfillHostNoCombinator = polyfillHost + "-no-combinator", polyfillHostRe = new RegExp(polyfillHost, "gim"), polyfillHostContextRe = new RegExp(polyfillHostContext, "gim"), shadowDOMSelectorsRe = [ />>>/g, /::shadow/g, /::content/g, /\/deep\//g, /\/shadow\//g, /\/shadow-deep\//g, /\^\^/g, /\^/g ];
	    function stylesToCssText(styles, preserveComments) {
	      var cssText = "";
	      Array.prototype.forEach.call(styles, function(s) {
	        cssText += s.textContent + "\n\n";
	      });
	      if (!preserveComments) {
	        cssText = cssText.replace(cssCommentRe, "");
	      }
	      return cssText;
	    }
	    function cssTextToStyle(cssText) {
	      var style = document.createElement("style");
	      style.textContent = cssText;
	      return style;
	    }
	    function cssToRules(cssText) {
	      var style = cssTextToStyle(cssText);
	      document.head.appendChild(style);
	      var rules = [];
	      if (style.sheet) {
	        try {
	          rules = style.sheet.cssRules;
	        } catch (e) {}
	      } else {
	        console.warn("sheet not found", style);
	      }
	      style.parentNode.removeChild(style);
	      return rules;
	    }
	    var frame = document.createElement("iframe");
	    frame.style.display = "none";
	    function initFrame() {
	      frame.initialized = true;
	      document.body.appendChild(frame);
	      var doc = frame.contentDocument;
	      var base = doc.createElement("base");
	      base.href = document.baseURI;
	      doc.head.appendChild(base);
	    }
	    function inFrame(fn) {
	      if (!frame.initialized) {
	        initFrame();
	      }
	      document.body.appendChild(frame);
	      fn(frame.contentDocument);
	      document.body.removeChild(frame);
	    }
	    var isChrome = navigator.userAgent.match("Chrome");
	    function withCssRules(cssText, callback) {
	      if (!callback) {
	        return;
	      }
	      var rules;
	      if (cssText.match("@import") && isChrome) {
	        var style = cssTextToStyle(cssText);
	        inFrame(function(doc) {
	          doc.head.appendChild(style.impl);
	          rules = Array.prototype.slice.call(style.sheet.cssRules, 0);
	          callback(rules);
	        });
	      } else {
	        rules = cssToRules(cssText);
	        callback(rules);
	      }
	    }
	    function rulesToCss(cssRules) {
	      for (var i = 0, css = []; i < cssRules.length; i++) {
	        css.push(cssRules[i].cssText);
	      }
	      return css.join("\n\n");
	    }
	    function addCssToDocument(cssText) {
	      if (cssText) {
	        getSheet().appendChild(document.createTextNode(cssText));
	      }
	    }
	    function addOwnSheet(cssText, name) {
	      var style = cssTextToStyle(cssText);
	      style.setAttribute(name, "");
	      style.setAttribute(SHIMMED_ATTRIBUTE, "");
	      document.head.appendChild(style);
	    }
	    var SHIM_ATTRIBUTE = "shim-shadowdom";
	    var SHIMMED_ATTRIBUTE = "shim-shadowdom-css";
	    var NO_SHIM_ATTRIBUTE = "no-shim";
	    var sheet;
	    function getSheet() {
	      if (!sheet) {
	        sheet = document.createElement("style");
	        sheet.setAttribute(SHIMMED_ATTRIBUTE, "");
	        sheet[SHIMMED_ATTRIBUTE] = true;
	      }
	      return sheet;
	    }
	    if (window.ShadowDOMPolyfill) {
	      addCssToDocument("style { display: none !important; }\n");
	      var doc = ShadowDOMPolyfill.wrap(document);
	      var head = doc.querySelector("head");
	      head.insertBefore(getSheet(), head.childNodes[0]);
	      document.addEventListener("DOMContentLoaded", function() {
	        var urlResolver = scope.urlResolver;
	        if (window.HTMLImports && !HTMLImports.useNative) {
	          var SHIM_SHEET_SELECTOR = "link[rel=stylesheet]" + "[" + SHIM_ATTRIBUTE + "]";
	          var SHIM_STYLE_SELECTOR = "style[" + SHIM_ATTRIBUTE + "]";
	          HTMLImports.importer.documentPreloadSelectors += "," + SHIM_SHEET_SELECTOR;
	          HTMLImports.importer.importsPreloadSelectors += "," + SHIM_SHEET_SELECTOR;
	          HTMLImports.parser.documentSelectors = [ HTMLImports.parser.documentSelectors, SHIM_SHEET_SELECTOR, SHIM_STYLE_SELECTOR ].join(",");
	          var originalParseGeneric = HTMLImports.parser.parseGeneric;
	          HTMLImports.parser.parseGeneric = function(elt) {
	            if (elt[SHIMMED_ATTRIBUTE]) {
	              return;
	            }
	            var style = elt.__importElement || elt;
	            if (!style.hasAttribute(SHIM_ATTRIBUTE)) {
	              originalParseGeneric.call(this, elt);
	              return;
	            }
	            if (elt.__resource) {
	              style = elt.ownerDocument.createElement("style");
	              style.textContent = elt.__resource;
	            }
	            HTMLImports.path.resolveUrlsInStyle(style, elt.href);
	            style.textContent = ShadowCSS.shimStyle(style);
	            style.removeAttribute(SHIM_ATTRIBUTE, "");
	            style.setAttribute(SHIMMED_ATTRIBUTE, "");
	            style[SHIMMED_ATTRIBUTE] = true;
	            if (style.parentNode !== head) {
	              if (elt.parentNode === head) {
	                head.replaceChild(style, elt);
	              } else {
	                this.addElementToDocument(style);
	              }
	            }
	            style.__importParsed = true;
	            this.markParsingComplete(elt);
	            this.parseNext();
	          };
	          var hasResource = HTMLImports.parser.hasResource;
	          HTMLImports.parser.hasResource = function(node) {
	            if (node.localName === "link" && node.rel === "stylesheet" && node.hasAttribute(SHIM_ATTRIBUTE)) {
	              return node.__resource;
	            } else {
	              return hasResource.call(this, node);
	            }
	          };
	        }
	      });
	    }
	    scope.ShadowCSS = ShadowCSS;
	  })(window.WebComponents);
	}

	(function(scope) {
	  if (window.ShadowDOMPolyfill) {
	    window.wrap = ShadowDOMPolyfill.wrapIfNeeded;
	    window.unwrap = ShadowDOMPolyfill.unwrapIfNeeded;
	  } else {
	    window.wrap = window.unwrap = function(n) {
	      return n;
	    };
	  }
	})(window.WebComponents);

	(function(scope) {
	  "use strict";
	  var hasWorkingUrl = false;
	  if (!scope.forceJURL) {
	    try {
	      var u = new URL("b", "http://a");
	      u.pathname = "c%20d";
	      hasWorkingUrl = u.href === "http://a/c%20d";
	    } catch (e) {}
	  }
	  if (hasWorkingUrl) return;
	  var relative = Object.create(null);
	  relative["ftp"] = 21;
	  relative["file"] = 0;
	  relative["gopher"] = 70;
	  relative["http"] = 80;
	  relative["https"] = 443;
	  relative["ws"] = 80;
	  relative["wss"] = 443;
	  var relativePathDotMapping = Object.create(null);
	  relativePathDotMapping["%2e"] = ".";
	  relativePathDotMapping[".%2e"] = "..";
	  relativePathDotMapping["%2e."] = "..";
	  relativePathDotMapping["%2e%2e"] = "..";
	  function isRelativeScheme(scheme) {
	    return relative[scheme] !== undefined;
	  }
	  function invalid() {
	    clear.call(this);
	    this._isInvalid = true;
	  }
	  function IDNAToASCII(h) {
	    if ("" == h) {
	      invalid.call(this);
	    }
	    return h.toLowerCase();
	  }
	  function percentEscape(c) {
	    var unicode = c.charCodeAt(0);
	    if (unicode > 32 && unicode < 127 && [ 34, 35, 60, 62, 63, 96 ].indexOf(unicode) == -1) {
	      return c;
	    }
	    return encodeURIComponent(c);
	  }
	  function percentEscapeQuery(c) {
	    var unicode = c.charCodeAt(0);
	    if (unicode > 32 && unicode < 127 && [ 34, 35, 60, 62, 96 ].indexOf(unicode) == -1) {
	      return c;
	    }
	    return encodeURIComponent(c);
	  }
	  var EOF = undefined, ALPHA = /[a-zA-Z]/, ALPHANUMERIC = /[a-zA-Z0-9\+\-\.]/;
	  function parse(input, stateOverride, base) {
	    function err(message) {
	      errors.push(message);
	    }
	    var state = stateOverride || "scheme start", cursor = 0, buffer = "", seenAt = false, seenBracket = false, errors = [];
	    loop: while ((input[cursor - 1] != EOF || cursor == 0) && !this._isInvalid) {
	      var c = input[cursor];
	      switch (state) {
	       case "scheme start":
	        if (c && ALPHA.test(c)) {
	          buffer += c.toLowerCase();
	          state = "scheme";
	        } else if (!stateOverride) {
	          buffer = "";
	          state = "no scheme";
	          continue;
	        } else {
	          err("Invalid scheme.");
	          break loop;
	        }
	        break;

	       case "scheme":
	        if (c && ALPHANUMERIC.test(c)) {
	          buffer += c.toLowerCase();
	        } else if (":" == c) {
	          this._scheme = buffer;
	          buffer = "";
	          if (stateOverride) {
	            break loop;
	          }
	          if (isRelativeScheme(this._scheme)) {
	            this._isRelative = true;
	          }
	          if ("file" == this._scheme) {
	            state = "relative";
	          } else if (this._isRelative && base && base._scheme == this._scheme) {
	            state = "relative or authority";
	          } else if (this._isRelative) {
	            state = "authority first slash";
	          } else {
	            state = "scheme data";
	          }
	        } else if (!stateOverride) {
	          buffer = "";
	          cursor = 0;
	          state = "no scheme";
	          continue;
	        } else if (EOF == c) {
	          break loop;
	        } else {
	          err("Code point not allowed in scheme: " + c);
	          break loop;
	        }
	        break;

	       case "scheme data":
	        if ("?" == c) {
	          this._query = "?";
	          state = "query";
	        } else if ("#" == c) {
	          this._fragment = "#";
	          state = "fragment";
	        } else {
	          if (EOF != c && "	" != c && "\n" != c && "\r" != c) {
	            this._schemeData += percentEscape(c);
	          }
	        }
	        break;

	       case "no scheme":
	        if (!base || !isRelativeScheme(base._scheme)) {
	          err("Missing scheme.");
	          invalid.call(this);
	        } else {
	          state = "relative";
	          continue;
	        }
	        break;

	       case "relative or authority":
	        if ("/" == c && "/" == input[cursor + 1]) {
	          state = "authority ignore slashes";
	        } else {
	          err("Expected /, got: " + c);
	          state = "relative";
	          continue;
	        }
	        break;

	       case "relative":
	        this._isRelative = true;
	        if ("file" != this._scheme) this._scheme = base._scheme;
	        if (EOF == c) {
	          this._host = base._host;
	          this._port = base._port;
	          this._path = base._path.slice();
	          this._query = base._query;
	          this._username = base._username;
	          this._password = base._password;
	          break loop;
	        } else if ("/" == c || "\\" == c) {
	          if ("\\" == c) err("\\ is an invalid code point.");
	          state = "relative slash";
	        } else if ("?" == c) {
	          this._host = base._host;
	          this._port = base._port;
	          this._path = base._path.slice();
	          this._query = "?";
	          this._username = base._username;
	          this._password = base._password;
	          state = "query";
	        } else if ("#" == c) {
	          this._host = base._host;
	          this._port = base._port;
	          this._path = base._path.slice();
	          this._query = base._query;
	          this._fragment = "#";
	          this._username = base._username;
	          this._password = base._password;
	          state = "fragment";
	        } else {
	          var nextC = input[cursor + 1];
	          var nextNextC = input[cursor + 2];
	          if ("file" != this._scheme || !ALPHA.test(c) || nextC != ":" && nextC != "|" || EOF != nextNextC && "/" != nextNextC && "\\" != nextNextC && "?" != nextNextC && "#" != nextNextC) {
	            this._host = base._host;
	            this._port = base._port;
	            this._username = base._username;
	            this._password = base._password;
	            this._path = base._path.slice();
	            this._path.pop();
	          }
	          state = "relative path";
	          continue;
	        }
	        break;

	       case "relative slash":
	        if ("/" == c || "\\" == c) {
	          if ("\\" == c) {
	            err("\\ is an invalid code point.");
	          }
	          if ("file" == this._scheme) {
	            state = "file host";
	          } else {
	            state = "authority ignore slashes";
	          }
	        } else {
	          if ("file" != this._scheme) {
	            this._host = base._host;
	            this._port = base._port;
	            this._username = base._username;
	            this._password = base._password;
	          }
	          state = "relative path";
	          continue;
	        }
	        break;

	       case "authority first slash":
	        if ("/" == c) {
	          state = "authority second slash";
	        } else {
	          err("Expected '/', got: " + c);
	          state = "authority ignore slashes";
	          continue;
	        }
	        break;

	       case "authority second slash":
	        state = "authority ignore slashes";
	        if ("/" != c) {
	          err("Expected '/', got: " + c);
	          continue;
	        }
	        break;

	       case "authority ignore slashes":
	        if ("/" != c && "\\" != c) {
	          state = "authority";
	          continue;
	        } else {
	          err("Expected authority, got: " + c);
	        }
	        break;

	       case "authority":
	        if ("@" == c) {
	          if (seenAt) {
	            err("@ already seen.");
	            buffer += "%40";
	          }
	          seenAt = true;
	          for (var i = 0; i < buffer.length; i++) {
	            var cp = buffer[i];
	            if ("	" == cp || "\n" == cp || "\r" == cp) {
	              err("Invalid whitespace in authority.");
	              continue;
	            }
	            if (":" == cp && null === this._password) {
	              this._password = "";
	              continue;
	            }
	            var tempC = percentEscape(cp);
	            null !== this._password ? this._password += tempC : this._username += tempC;
	          }
	          buffer = "";
	        } else if (EOF == c || "/" == c || "\\" == c || "?" == c || "#" == c) {
	          cursor -= buffer.length;
	          buffer = "";
	          state = "host";
	          continue;
	        } else {
	          buffer += c;
	        }
	        break;

	       case "file host":
	        if (EOF == c || "/" == c || "\\" == c || "?" == c || "#" == c) {
	          if (buffer.length == 2 && ALPHA.test(buffer[0]) && (buffer[1] == ":" || buffer[1] == "|")) {
	            state = "relative path";
	          } else if (buffer.length == 0) {
	            state = "relative path start";
	          } else {
	            this._host = IDNAToASCII.call(this, buffer);
	            buffer = "";
	            state = "relative path start";
	          }
	          continue;
	        } else if ("	" == c || "\n" == c || "\r" == c) {
	          err("Invalid whitespace in file host.");
	        } else {
	          buffer += c;
	        }
	        break;

	       case "host":
	       case "hostname":
	        if (":" == c && !seenBracket) {
	          this._host = IDNAToASCII.call(this, buffer);
	          buffer = "";
	          state = "port";
	          if ("hostname" == stateOverride) {
	            break loop;
	          }
	        } else if (EOF == c || "/" == c || "\\" == c || "?" == c || "#" == c) {
	          this._host = IDNAToASCII.call(this, buffer);
	          buffer = "";
	          state = "relative path start";
	          if (stateOverride) {
	            break loop;
	          }
	          continue;
	        } else if ("	" != c && "\n" != c && "\r" != c) {
	          if ("[" == c) {
	            seenBracket = true;
	          } else if ("]" == c) {
	            seenBracket = false;
	          }
	          buffer += c;
	        } else {
	          err("Invalid code point in host/hostname: " + c);
	        }
	        break;

	       case "port":
	        if (/[0-9]/.test(c)) {
	          buffer += c;
	        } else if (EOF == c || "/" == c || "\\" == c || "?" == c || "#" == c || stateOverride) {
	          if ("" != buffer) {
	            var temp = parseInt(buffer, 10);
	            if (temp != relative[this._scheme]) {
	              this._port = temp + "";
	            }
	            buffer = "";
	          }
	          if (stateOverride) {
	            break loop;
	          }
	          state = "relative path start";
	          continue;
	        } else if ("	" == c || "\n" == c || "\r" == c) {
	          err("Invalid code point in port: " + c);
	        } else {
	          invalid.call(this);
	        }
	        break;

	       case "relative path start":
	        if ("\\" == c) err("'\\' not allowed in path.");
	        state = "relative path";
	        if ("/" != c && "\\" != c) {
	          continue;
	        }
	        break;

	       case "relative path":
	        if (EOF == c || "/" == c || "\\" == c || !stateOverride && ("?" == c || "#" == c)) {
	          if ("\\" == c) {
	            err("\\ not allowed in relative path.");
	          }
	          var tmp;
	          if (tmp = relativePathDotMapping[buffer.toLowerCase()]) {
	            buffer = tmp;
	          }
	          if (".." == buffer) {
	            this._path.pop();
	            if ("/" != c && "\\" != c) {
	              this._path.push("");
	            }
	          } else if ("." == buffer && "/" != c && "\\" != c) {
	            this._path.push("");
	          } else if ("." != buffer) {
	            if ("file" == this._scheme && this._path.length == 0 && buffer.length == 2 && ALPHA.test(buffer[0]) && buffer[1] == "|") {
	              buffer = buffer[0] + ":";
	            }
	            this._path.push(buffer);
	          }
	          buffer = "";
	          if ("?" == c) {
	            this._query = "?";
	            state = "query";
	          } else if ("#" == c) {
	            this._fragment = "#";
	            state = "fragment";
	          }
	        } else if ("	" != c && "\n" != c && "\r" != c) {
	          buffer += percentEscape(c);
	        }
	        break;

	       case "query":
	        if (!stateOverride && "#" == c) {
	          this._fragment = "#";
	          state = "fragment";
	        } else if (EOF != c && "	" != c && "\n" != c && "\r" != c) {
	          this._query += percentEscapeQuery(c);
	        }
	        break;

	       case "fragment":
	        if (EOF != c && "	" != c && "\n" != c && "\r" != c) {
	          this._fragment += c;
	        }
	        break;
	      }
	      cursor++;
	    }
	  }
	  function clear() {
	    this._scheme = "";
	    this._schemeData = "";
	    this._username = "";
	    this._password = null;
	    this._host = "";
	    this._port = "";
	    this._path = [];
	    this._query = "";
	    this._fragment = "";
	    this._isInvalid = false;
	    this._isRelative = false;
	  }
	  function jURL(url, base) {
	    if (base !== undefined && !(base instanceof jURL)) base = new jURL(String(base));
	    this._url = url;
	    clear.call(this);
	    var input = url.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");
	    parse.call(this, input, null, base);
	  }
	  jURL.prototype = {
	    toString: function() {
	      return this.href;
	    },
	    get href() {
	      if (this._isInvalid) return this._url;
	      var authority = "";
	      if ("" != this._username || null != this._password) {
	        authority = this._username + (null != this._password ? ":" + this._password : "") + "@";
	      }
	      return this.protocol + (this._isRelative ? "//" + authority + this.host : "") + this.pathname + this._query + this._fragment;
	    },
	    set href(href) {
	      clear.call(this);
	      parse.call(this, href);
	    },
	    get protocol() {
	      return this._scheme + ":";
	    },
	    set protocol(protocol) {
	      if (this._isInvalid) return;
	      parse.call(this, protocol + ":", "scheme start");
	    },
	    get host() {
	      return this._isInvalid ? "" : this._port ? this._host + ":" + this._port : this._host;
	    },
	    set host(host) {
	      if (this._isInvalid || !this._isRelative) return;
	      parse.call(this, host, "host");
	    },
	    get hostname() {
	      return this._host;
	    },
	    set hostname(hostname) {
	      if (this._isInvalid || !this._isRelative) return;
	      parse.call(this, hostname, "hostname");
	    },
	    get port() {
	      return this._port;
	    },
	    set port(port) {
	      if (this._isInvalid || !this._isRelative) return;
	      parse.call(this, port, "port");
	    },
	    get pathname() {
	      return this._isInvalid ? "" : this._isRelative ? "/" + this._path.join("/") : this._schemeData;
	    },
	    set pathname(pathname) {
	      if (this._isInvalid || !this._isRelative) return;
	      this._path = [];
	      parse.call(this, pathname, "relative path start");
	    },
	    get search() {
	      return this._isInvalid || !this._query || "?" == this._query ? "" : this._query;
	    },
	    set search(search) {
	      if (this._isInvalid || !this._isRelative) return;
	      this._query = "?";
	      if ("?" == search[0]) search = search.slice(1);
	      parse.call(this, search, "query");
	    },
	    get hash() {
	      return this._isInvalid || !this._fragment || "#" == this._fragment ? "" : this._fragment;
	    },
	    set hash(hash) {
	      if (this._isInvalid) return;
	      this._fragment = "#";
	      if ("#" == hash[0]) hash = hash.slice(1);
	      parse.call(this, hash, "fragment");
	    },
	    get origin() {
	      var host;
	      if (this._isInvalid || !this._scheme) {
	        return "";
	      }
	      switch (this._scheme) {
	       case "data":
	       case "file":
	       case "javascript":
	       case "mailto":
	        return "null";
	      }
	      host = this.host;
	      if (!host) {
	        return "";
	      }
	      return this._scheme + "://" + host;
	    }
	  };
	  var OriginalURL = scope.URL;
	  if (OriginalURL) {
	    jURL.createObjectURL = function(blob) {
	      return OriginalURL.createObjectURL.apply(OriginalURL, arguments);
	    };
	    jURL.revokeObjectURL = function(url) {
	      OriginalURL.revokeObjectURL(url);
	    };
	  }
	  scope.URL = jURL;
	})(self);

	(function(global) {
	  if (global.JsMutationObserver) {
	    return;
	  }
	  var registrationsTable = new WeakMap();
	  var setImmediate;
	  if (/Trident|Edge/.test(navigator.userAgent)) {
	    setImmediate = setTimeout;
	  } else if (window.setImmediate) {
	    setImmediate = window.setImmediate;
	  } else {
	    var setImmediateQueue = [];
	    var sentinel = String(Math.random());
	    window.addEventListener("message", function(e) {
	      if (e.data === sentinel) {
	        var queue = setImmediateQueue;
	        setImmediateQueue = [];
	        queue.forEach(function(func) {
	          func();
	        });
	      }
	    });
	    setImmediate = function(func) {
	      setImmediateQueue.push(func);
	      window.postMessage(sentinel, "*");
	    };
	  }
	  var isScheduled = false;
	  var scheduledObservers = [];
	  function scheduleCallback(observer) {
	    scheduledObservers.push(observer);
	    if (!isScheduled) {
	      isScheduled = true;
	      setImmediate(dispatchCallbacks);
	    }
	  }
	  function wrapIfNeeded(node) {
	    return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(node) || node;
	  }
	  function dispatchCallbacks() {
	    isScheduled = false;
	    var observers = scheduledObservers;
	    scheduledObservers = [];
	    observers.sort(function(o1, o2) {
	      return o1.uid_ - o2.uid_;
	    });
	    var anyNonEmpty = false;
	    observers.forEach(function(observer) {
	      var queue = observer.takeRecords();
	      removeTransientObserversFor(observer);
	      if (queue.length) {
	        observer.callback_(queue, observer);
	        anyNonEmpty = true;
	      }
	    });
	    if (anyNonEmpty) dispatchCallbacks();
	  }
	  function removeTransientObserversFor(observer) {
	    observer.nodes_.forEach(function(node) {
	      var registrations = registrationsTable.get(node);
	      if (!registrations) return;
	      registrations.forEach(function(registration) {
	        if (registration.observer === observer) registration.removeTransientObservers();
	      });
	    });
	  }
	  function forEachAncestorAndObserverEnqueueRecord(target, callback) {
	    for (var node = target; node; node = node.parentNode) {
	      var registrations = registrationsTable.get(node);
	      if (registrations) {
	        for (var j = 0; j < registrations.length; j++) {
	          var registration = registrations[j];
	          var options = registration.options;
	          if (node !== target && !options.subtree) continue;
	          var record = callback(options);
	          if (record) registration.enqueue(record);
	        }
	      }
	    }
	  }
	  var uidCounter = 0;
	  function JsMutationObserver(callback) {
	    this.callback_ = callback;
	    this.nodes_ = [];
	    this.records_ = [];
	    this.uid_ = ++uidCounter;
	  }
	  JsMutationObserver.prototype = {
	    observe: function(target, options) {
	      target = wrapIfNeeded(target);
	      if (!options.childList && !options.attributes && !options.characterData || options.attributeOldValue && !options.attributes || options.attributeFilter && options.attributeFilter.length && !options.attributes || options.characterDataOldValue && !options.characterData) {
	        throw new SyntaxError();
	      }
	      var registrations = registrationsTable.get(target);
	      if (!registrations) registrationsTable.set(target, registrations = []);
	      var registration;
	      for (var i = 0; i < registrations.length; i++) {
	        if (registrations[i].observer === this) {
	          registration = registrations[i];
	          registration.removeListeners();
	          registration.options = options;
	          break;
	        }
	      }
	      if (!registration) {
	        registration = new Registration(this, target, options);
	        registrations.push(registration);
	        this.nodes_.push(target);
	      }
	      registration.addListeners();
	    },
	    disconnect: function() {
	      this.nodes_.forEach(function(node) {
	        var registrations = registrationsTable.get(node);
	        for (var i = 0; i < registrations.length; i++) {
	          var registration = registrations[i];
	          if (registration.observer === this) {
	            registration.removeListeners();
	            registrations.splice(i, 1);
	            break;
	          }
	        }
	      }, this);
	      this.records_ = [];
	    },
	    takeRecords: function() {
	      var copyOfRecords = this.records_;
	      this.records_ = [];
	      return copyOfRecords;
	    }
	  };
	  function MutationRecord(type, target) {
	    this.type = type;
	    this.target = target;
	    this.addedNodes = [];
	    this.removedNodes = [];
	    this.previousSibling = null;
	    this.nextSibling = null;
	    this.attributeName = null;
	    this.attributeNamespace = null;
	    this.oldValue = null;
	  }
	  function copyMutationRecord(original) {
	    var record = new MutationRecord(original.type, original.target);
	    record.addedNodes = original.addedNodes.slice();
	    record.removedNodes = original.removedNodes.slice();
	    record.previousSibling = original.previousSibling;
	    record.nextSibling = original.nextSibling;
	    record.attributeName = original.attributeName;
	    record.attributeNamespace = original.attributeNamespace;
	    record.oldValue = original.oldValue;
	    return record;
	  }
	  var currentRecord, recordWithOldValue;
	  function getRecord(type, target) {
	    return currentRecord = new MutationRecord(type, target);
	  }
	  function getRecordWithOldValue(oldValue) {
	    if (recordWithOldValue) return recordWithOldValue;
	    recordWithOldValue = copyMutationRecord(currentRecord);
	    recordWithOldValue.oldValue = oldValue;
	    return recordWithOldValue;
	  }
	  function clearRecords() {
	    currentRecord = recordWithOldValue = undefined;
	  }
	  function recordRepresentsCurrentMutation(record) {
	    return record === recordWithOldValue || record === currentRecord;
	  }
	  function selectRecord(lastRecord, newRecord) {
	    if (lastRecord === newRecord) return lastRecord;
	    if (recordWithOldValue && recordRepresentsCurrentMutation(lastRecord)) return recordWithOldValue;
	    return null;
	  }
	  function Registration(observer, target, options) {
	    this.observer = observer;
	    this.target = target;
	    this.options = options;
	    this.transientObservedNodes = [];
	  }
	  Registration.prototype = {
	    enqueue: function(record) {
	      var records = this.observer.records_;
	      var length = records.length;
	      if (records.length > 0) {
	        var lastRecord = records[length - 1];
	        var recordToReplaceLast = selectRecord(lastRecord, record);
	        if (recordToReplaceLast) {
	          records[length - 1] = recordToReplaceLast;
	          return;
	        }
	      } else {
	        scheduleCallback(this.observer);
	      }
	      records[length] = record;
	    },
	    addListeners: function() {
	      this.addListeners_(this.target);
	    },
	    addListeners_: function(node) {
	      var options = this.options;
	      if (options.attributes) node.addEventListener("DOMAttrModified", this, true);
	      if (options.characterData) node.addEventListener("DOMCharacterDataModified", this, true);
	      if (options.childList) node.addEventListener("DOMNodeInserted", this, true);
	      if (options.childList || options.subtree) node.addEventListener("DOMNodeRemoved", this, true);
	    },
	    removeListeners: function() {
	      this.removeListeners_(this.target);
	    },
	    removeListeners_: function(node) {
	      var options = this.options;
	      if (options.attributes) node.removeEventListener("DOMAttrModified", this, true);
	      if (options.characterData) node.removeEventListener("DOMCharacterDataModified", this, true);
	      if (options.childList) node.removeEventListener("DOMNodeInserted", this, true);
	      if (options.childList || options.subtree) node.removeEventListener("DOMNodeRemoved", this, true);
	    },
	    addTransientObserver: function(node) {
	      if (node === this.target) return;
	      this.addListeners_(node);
	      this.transientObservedNodes.push(node);
	      var registrations = registrationsTable.get(node);
	      if (!registrations) registrationsTable.set(node, registrations = []);
	      registrations.push(this);
	    },
	    removeTransientObservers: function() {
	      var transientObservedNodes = this.transientObservedNodes;
	      this.transientObservedNodes = [];
	      transientObservedNodes.forEach(function(node) {
	        this.removeListeners_(node);
	        var registrations = registrationsTable.get(node);
	        for (var i = 0; i < registrations.length; i++) {
	          if (registrations[i] === this) {
	            registrations.splice(i, 1);
	            break;
	          }
	        }
	      }, this);
	    },
	    handleEvent: function(e) {
	      e.stopImmediatePropagation();
	      switch (e.type) {
	       case "DOMAttrModified":
	        var name = e.attrName;
	        var namespace = e.relatedNode.namespaceURI;
	        var target = e.target;
	        var record = new getRecord("attributes", target);
	        record.attributeName = name;
	        record.attributeNamespace = namespace;
	        var oldValue = e.attrChange === MutationEvent.ADDITION ? null : e.prevValue;
	        forEachAncestorAndObserverEnqueueRecord(target, function(options) {
	          if (!options.attributes) return;
	          if (options.attributeFilter && options.attributeFilter.length && options.attributeFilter.indexOf(name) === -1 && options.attributeFilter.indexOf(namespace) === -1) {
	            return;
	          }
	          if (options.attributeOldValue) return getRecordWithOldValue(oldValue);
	          return record;
	        });
	        break;

	       case "DOMCharacterDataModified":
	        var target = e.target;
	        var record = getRecord("characterData", target);
	        var oldValue = e.prevValue;
	        forEachAncestorAndObserverEnqueueRecord(target, function(options) {
	          if (!options.characterData) return;
	          if (options.characterDataOldValue) return getRecordWithOldValue(oldValue);
	          return record;
	        });
	        break;

	       case "DOMNodeRemoved":
	        this.addTransientObserver(e.target);

	       case "DOMNodeInserted":
	        var changedNode = e.target;
	        var addedNodes, removedNodes;
	        if (e.type === "DOMNodeInserted") {
	          addedNodes = [ changedNode ];
	          removedNodes = [];
	        } else {
	          addedNodes = [];
	          removedNodes = [ changedNode ];
	        }
	        var previousSibling = changedNode.previousSibling;
	        var nextSibling = changedNode.nextSibling;
	        var record = getRecord("childList", e.target.parentNode);
	        record.addedNodes = addedNodes;
	        record.removedNodes = removedNodes;
	        record.previousSibling = previousSibling;
	        record.nextSibling = nextSibling;
	        forEachAncestorAndObserverEnqueueRecord(e.relatedNode, function(options) {
	          if (!options.childList) return;
	          return record;
	        });
	      }
	      clearRecords();
	    }
	  };
	  global.JsMutationObserver = JsMutationObserver;
	  if (!global.MutationObserver) {
	    global.MutationObserver = JsMutationObserver;
	    JsMutationObserver._isPolyfilled = true;
	  }
	})(self);

	(function(scope) {
	  "use strict";
	  if (!window.performance) {
	    var start = Date.now();
	    window.performance = {
	      now: function() {
	        return Date.now() - start;
	      }
	    };
	  }
	  if (!window.requestAnimationFrame) {
	    window.requestAnimationFrame = function() {
	      var nativeRaf = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
	      return nativeRaf ? function(callback) {
	        return nativeRaf(function() {
	          callback(performance.now());
	        });
	      } : function(callback) {
	        return window.setTimeout(callback, 1e3 / 60);
	      };
	    }();
	  }
	  if (!window.cancelAnimationFrame) {
	    window.cancelAnimationFrame = function() {
	      return window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function(id) {
	        clearTimeout(id);
	      };
	    }();
	  }
	  var workingDefaultPrevented = function() {
	    var e = document.createEvent("Event");
	    e.initEvent("foo", true, true);
	    e.preventDefault();
	    return e.defaultPrevented;
	  }();
	  if (!workingDefaultPrevented) {
	    var origPreventDefault = Event.prototype.preventDefault;
	    Event.prototype.preventDefault = function() {
	      if (!this.cancelable) {
	        return;
	      }
	      origPreventDefault.call(this);
	      Object.defineProperty(this, "defaultPrevented", {
	        get: function() {
	          return true;
	        },
	        configurable: true
	      });
	    };
	  }
	  var isIE = /Trident/.test(navigator.userAgent);
	  if (!window.CustomEvent || isIE && typeof window.CustomEvent !== "function") {
	    window.CustomEvent = function(inType, params) {
	      params = params || {};
	      var e = document.createEvent("CustomEvent");
	      e.initCustomEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable), params.detail);
	      return e;
	    };
	    window.CustomEvent.prototype = window.Event.prototype;
	  }
	  if (!window.Event || isIE && typeof window.Event !== "function") {
	    var origEvent = window.Event;
	    window.Event = function(inType, params) {
	      params = params || {};
	      var e = document.createEvent("Event");
	      e.initEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable));
	      return e;
	    };
	    window.Event.prototype = origEvent.prototype;
	  }
	})(window.WebComponents);

	window.HTMLImports = window.HTMLImports || {
	  flags: {}
	};

	(function(scope) {
	  var IMPORT_LINK_TYPE = "import";
	  var useNative = Boolean(IMPORT_LINK_TYPE in document.createElement("link"));
	  var hasShadowDOMPolyfill = Boolean(window.ShadowDOMPolyfill);
	  var wrap = function(node) {
	    return hasShadowDOMPolyfill ? window.ShadowDOMPolyfill.wrapIfNeeded(node) : node;
	  };
	  var rootDocument = wrap(document);
	  var currentScriptDescriptor = {
	    get: function() {
	      var script = window.HTMLImports.currentScript || document.currentScript || (document.readyState !== "complete" ? document.scripts[document.scripts.length - 1] : null);
	      return wrap(script);
	    },
	    configurable: true
	  };
	  Object.defineProperty(document, "_currentScript", currentScriptDescriptor);
	  Object.defineProperty(rootDocument, "_currentScript", currentScriptDescriptor);
	  var isIE = /Trident/.test(navigator.userAgent);
	  function whenReady(callback, doc) {
	    doc = doc || rootDocument;
	    whenDocumentReady(function() {
	      watchImportsLoad(callback, doc);
	    }, doc);
	  }
	  var requiredReadyState = isIE ? "complete" : "interactive";
	  var READY_EVENT = "readystatechange";
	  function isDocumentReady(doc) {
	    return doc.readyState === "complete" || doc.readyState === requiredReadyState;
	  }
	  function whenDocumentReady(callback, doc) {
	    if (!isDocumentReady(doc)) {
	      var checkReady = function() {
	        if (doc.readyState === "complete" || doc.readyState === requiredReadyState) {
	          doc.removeEventListener(READY_EVENT, checkReady);
	          whenDocumentReady(callback, doc);
	        }
	      };
	      doc.addEventListener(READY_EVENT, checkReady);
	    } else if (callback) {
	      callback();
	    }
	  }
	  function markTargetLoaded(event) {
	    event.target.__loaded = true;
	  }
	  function watchImportsLoad(callback, doc) {
	    var imports = doc.querySelectorAll("link[rel=import]");
	    var parsedCount = 0, importCount = imports.length, newImports = [], errorImports = [];
	    function checkDone() {
	      if (parsedCount == importCount && callback) {
	        callback({
	          allImports: imports,
	          loadedImports: newImports,
	          errorImports: errorImports
	        });
	      }
	    }
	    function loadedImport(e) {
	      markTargetLoaded(e);
	      newImports.push(this);
	      parsedCount++;
	      checkDone();
	    }
	    function errorLoadingImport(e) {
	      errorImports.push(this);
	      parsedCount++;
	      checkDone();
	    }
	    if (importCount) {
	      for (var i = 0, imp; i < importCount && (imp = imports[i]); i++) {
	        if (isImportLoaded(imp)) {
	          newImports.push(this);
	          parsedCount++;
	          checkDone();
	        } else {
	          imp.addEventListener("load", loadedImport);
	          imp.addEventListener("error", errorLoadingImport);
	        }
	      }
	    } else {
	      checkDone();
	    }
	  }
	  function isImportLoaded(link) {
	    return useNative ? link.__loaded || link.import && link.import.readyState !== "loading" : link.__importParsed;
	  }
	  if (useNative) {
	    new MutationObserver(function(mxns) {
	      for (var i = 0, l = mxns.length, m; i < l && (m = mxns[i]); i++) {
	        if (m.addedNodes) {
	          handleImports(m.addedNodes);
	        }
	      }
	    }).observe(document.head, {
	      childList: true
	    });
	    function handleImports(nodes) {
	      for (var i = 0, l = nodes.length, n; i < l && (n = nodes[i]); i++) {
	        if (isImport(n)) {
	          handleImport(n);
	        }
	      }
	    }
	    function isImport(element) {
	      return element.localName === "link" && element.rel === "import";
	    }
	    function handleImport(element) {
	      var loaded = element.import;
	      if (loaded) {
	        markTargetLoaded({
	          target: element
	        });
	      } else {
	        element.addEventListener("load", markTargetLoaded);
	        element.addEventListener("error", markTargetLoaded);
	      }
	    }
	    (function() {
	      if (document.readyState === "loading") {
	        var imports = document.querySelectorAll("link[rel=import]");
	        for (var i = 0, l = imports.length, imp; i < l && (imp = imports[i]); i++) {
	          handleImport(imp);
	        }
	      }
	    })();
	  }
	  whenReady(function(detail) {
	    window.HTMLImports.ready = true;
	    window.HTMLImports.readyTime = new Date().getTime();
	    var evt = rootDocument.createEvent("CustomEvent");
	    evt.initCustomEvent("HTMLImportsLoaded", true, true, detail);
	    rootDocument.dispatchEvent(evt);
	  });
	  scope.IMPORT_LINK_TYPE = IMPORT_LINK_TYPE;
	  scope.useNative = useNative;
	  scope.rootDocument = rootDocument;
	  scope.whenReady = whenReady;
	  scope.isIE = isIE;
	})(window.HTMLImports);

	(function(scope) {
	  var modules = [];
	  var addModule = function(module) {
	    modules.push(module);
	  };
	  var initializeModules = function() {
	    modules.forEach(function(module) {
	      module(scope);
	    });
	  };
	  scope.addModule = addModule;
	  scope.initializeModules = initializeModules;
	})(window.HTMLImports);

	window.HTMLImports.addModule(function(scope) {
	  var CSS_URL_REGEXP = /(url\()([^)]*)(\))/g;
	  var CSS_IMPORT_REGEXP = /(@import[\s]+(?!url\())([^;]*)(;)/g;
	  var path = {
	    resolveUrlsInStyle: function(style, linkUrl) {
	      var doc = style.ownerDocument;
	      var resolver = doc.createElement("a");
	      style.textContent = this.resolveUrlsInCssText(style.textContent, linkUrl, resolver);
	      return style;
	    },
	    resolveUrlsInCssText: function(cssText, linkUrl, urlObj) {
	      var r = this.replaceUrls(cssText, urlObj, linkUrl, CSS_URL_REGEXP);
	      r = this.replaceUrls(r, urlObj, linkUrl, CSS_IMPORT_REGEXP);
	      return r;
	    },
	    replaceUrls: function(text, urlObj, linkUrl, regexp) {
	      return text.replace(regexp, function(m, pre, url, post) {
	        var urlPath = url.replace(/["']/g, "");
	        if (linkUrl) {
	          urlPath = new URL(urlPath, linkUrl).href;
	        }
	        urlObj.href = urlPath;
	        urlPath = urlObj.href;
	        return pre + "'" + urlPath + "'" + post;
	      });
	    }
	  };
	  scope.path = path;
	});

	window.HTMLImports.addModule(function(scope) {
	  var xhr = {
	    async: true,
	    ok: function(request) {
	      return request.status >= 200 && request.status < 300 || request.status === 304 || request.status === 0;
	    },
	    load: function(url, next, nextContext) {
	      var request = new XMLHttpRequest();
	      if (scope.flags.debug || scope.flags.bust) {
	        url += "?" + Math.random();
	      }
	      request.open("GET", url, xhr.async);
	      request.addEventListener("readystatechange", function(e) {
	        if (request.readyState === 4) {
	          var redirectedUrl = null;
	          try {
	            var locationHeader = request.getResponseHeader("Location");
	            if (locationHeader) {
	              redirectedUrl = locationHeader.substr(0, 1) === "/" ? location.origin + locationHeader : locationHeader;
	            }
	          } catch (e) {
	            console.error(e.message);
	          }
	          next.call(nextContext, !xhr.ok(request) && request, request.response || request.responseText, redirectedUrl);
	        }
	      });
	      request.send();
	      return request;
	    },
	    loadDocument: function(url, next, nextContext) {
	      this.load(url, next, nextContext).responseType = "document";
	    }
	  };
	  scope.xhr = xhr;
	});

	window.HTMLImports.addModule(function(scope) {
	  var xhr = scope.xhr;
	  var flags = scope.flags;
	  var Loader = function(onLoad, onComplete) {
	    this.cache = {};
	    this.onload = onLoad;
	    this.oncomplete = onComplete;
	    this.inflight = 0;
	    this.pending = {};
	  };
	  Loader.prototype = {
	    addNodes: function(nodes) {
	      this.inflight += nodes.length;
	      for (var i = 0, l = nodes.length, n; i < l && (n = nodes[i]); i++) {
	        this.require(n);
	      }
	      this.checkDone();
	    },
	    addNode: function(node) {
	      this.inflight++;
	      this.require(node);
	      this.checkDone();
	    },
	    require: function(elt) {
	      var url = elt.src || elt.href;
	      elt.__nodeUrl = url;
	      if (!this.dedupe(url, elt)) {
	        this.fetch(url, elt);
	      }
	    },
	    dedupe: function(url, elt) {
	      if (this.pending[url]) {
	        this.pending[url].push(elt);
	        return true;
	      }
	      var resource;
	      if (this.cache[url]) {
	        this.onload(url, elt, this.cache[url]);
	        this.tail();
	        return true;
	      }
	      this.pending[url] = [ elt ];
	      return false;
	    },
	    fetch: function(url, elt) {
	      flags.load && console.log("fetch", url, elt);
	      if (!url) {
	        setTimeout(function() {
	          this.receive(url, elt, {
	            error: "href must be specified"
	          }, null);
	        }.bind(this), 0);
	      } else if (url.match(/^data:/)) {
	        var pieces = url.split(",");
	        var header = pieces[0];
	        var body = pieces[1];
	        if (header.indexOf(";base64") > -1) {
	          body = atob(body);
	        } else {
	          body = decodeURIComponent(body);
	        }
	        setTimeout(function() {
	          this.receive(url, elt, null, body);
	        }.bind(this), 0);
	      } else {
	        var receiveXhr = function(err, resource, redirectedUrl) {
	          this.receive(url, elt, err, resource, redirectedUrl);
	        }.bind(this);
	        xhr.load(url, receiveXhr);
	      }
	    },
	    receive: function(url, elt, err, resource, redirectedUrl) {
	      this.cache[url] = resource;
	      var $p = this.pending[url];
	      for (var i = 0, l = $p.length, p; i < l && (p = $p[i]); i++) {
	        this.onload(url, p, resource, err, redirectedUrl);
	        this.tail();
	      }
	      this.pending[url] = null;
	    },
	    tail: function() {
	      --this.inflight;
	      this.checkDone();
	    },
	    checkDone: function() {
	      if (!this.inflight) {
	        this.oncomplete();
	      }
	    }
	  };
	  scope.Loader = Loader;
	});

	window.HTMLImports.addModule(function(scope) {
	  var Observer = function(addCallback) {
	    this.addCallback = addCallback;
	    this.mo = new MutationObserver(this.handler.bind(this));
	  };
	  Observer.prototype = {
	    handler: function(mutations) {
	      for (var i = 0, l = mutations.length, m; i < l && (m = mutations[i]); i++) {
	        if (m.type === "childList" && m.addedNodes.length) {
	          this.addedNodes(m.addedNodes);
	        }
	      }
	    },
	    addedNodes: function(nodes) {
	      if (this.addCallback) {
	        this.addCallback(nodes);
	      }
	      for (var i = 0, l = nodes.length, n, loading; i < l && (n = nodes[i]); i++) {
	        if (n.children && n.children.length) {
	          this.addedNodes(n.children);
	        }
	      }
	    },
	    observe: function(root) {
	      this.mo.observe(root, {
	        childList: true,
	        subtree: true
	      });
	    }
	  };
	  scope.Observer = Observer;
	});

	window.HTMLImports.addModule(function(scope) {
	  var path = scope.path;
	  var rootDocument = scope.rootDocument;
	  var flags = scope.flags;
	  var isIE = scope.isIE;
	  var IMPORT_LINK_TYPE = scope.IMPORT_LINK_TYPE;
	  var IMPORT_SELECTOR = "link[rel=" + IMPORT_LINK_TYPE + "]";
	  var importParser = {
	    documentSelectors: IMPORT_SELECTOR,
	    importsSelectors: [ IMPORT_SELECTOR, "link[rel=stylesheet]:not([type])", "style:not([type])", "script:not([type])", 'script[type="application/javascript"]', 'script[type="text/javascript"]' ].join(","),
	    map: {
	      link: "parseLink",
	      script: "parseScript",
	      style: "parseStyle"
	    },
	    dynamicElements: [],
	    parseNext: function() {
	      var next = this.nextToParse();
	      if (next) {
	        this.parse(next);
	      }
	    },
	    parse: function(elt) {
	      if (this.isParsed(elt)) {
	        flags.parse && console.log("[%s] is already parsed", elt.localName);
	        return;
	      }
	      var fn = this[this.map[elt.localName]];
	      if (fn) {
	        this.markParsing(elt);
	        fn.call(this, elt);
	      }
	    },
	    parseDynamic: function(elt, quiet) {
	      this.dynamicElements.push(elt);
	      if (!quiet) {
	        this.parseNext();
	      }
	    },
	    markParsing: function(elt) {
	      flags.parse && console.log("parsing", elt);
	      this.parsingElement = elt;
	    },
	    markParsingComplete: function(elt) {
	      elt.__importParsed = true;
	      this.markDynamicParsingComplete(elt);
	      if (elt.__importElement) {
	        elt.__importElement.__importParsed = true;
	        this.markDynamicParsingComplete(elt.__importElement);
	      }
	      this.parsingElement = null;
	      flags.parse && console.log("completed", elt);
	    },
	    markDynamicParsingComplete: function(elt) {
	      var i = this.dynamicElements.indexOf(elt);
	      if (i >= 0) {
	        this.dynamicElements.splice(i, 1);
	      }
	    },
	    parseImport: function(elt) {
	      elt.import = elt.__doc;
	      if (window.HTMLImports.__importsParsingHook) {
	        window.HTMLImports.__importsParsingHook(elt);
	      }
	      if (elt.import) {
	        elt.import.__importParsed = true;
	      }
	      this.markParsingComplete(elt);
	      if (elt.__resource && !elt.__error) {
	        elt.dispatchEvent(new CustomEvent("load", {
	          bubbles: false
	        }));
	      } else {
	        elt.dispatchEvent(new CustomEvent("error", {
	          bubbles: false
	        }));
	      }
	      if (elt.__pending) {
	        var fn;
	        while (elt.__pending.length) {
	          fn = elt.__pending.shift();
	          if (fn) {
	            fn({
	              target: elt
	            });
	          }
	        }
	      }
	      this.parseNext();
	    },
	    parseLink: function(linkElt) {
	      if (nodeIsImport(linkElt)) {
	        this.parseImport(linkElt);
	      } else {
	        linkElt.href = linkElt.href;
	        this.parseGeneric(linkElt);
	      }
	    },
	    parseStyle: function(elt) {
	      var src = elt;
	      elt = cloneStyle(elt);
	      src.__appliedElement = elt;
	      elt.__importElement = src;
	      this.parseGeneric(elt);
	    },
	    parseGeneric: function(elt) {
	      this.trackElement(elt);
	      this.addElementToDocument(elt);
	    },
	    rootImportForElement: function(elt) {
	      var n = elt;
	      while (n.ownerDocument.__importLink) {
	        n = n.ownerDocument.__importLink;
	      }
	      return n;
	    },
	    addElementToDocument: function(elt) {
	      var port = this.rootImportForElement(elt.__importElement || elt);
	      port.parentNode.insertBefore(elt, port);
	    },
	    trackElement: function(elt, callback) {
	      var self = this;
	      var done = function(e) {
	        elt.removeEventListener("load", done);
	        elt.removeEventListener("error", done);
	        if (callback) {
	          callback(e);
	        }
	        self.markParsingComplete(elt);
	        self.parseNext();
	      };
	      elt.addEventListener("load", done);
	      elt.addEventListener("error", done);
	      if (isIE && elt.localName === "style") {
	        var fakeLoad = false;
	        if (elt.textContent.indexOf("@import") == -1) {
	          fakeLoad = true;
	        } else if (elt.sheet) {
	          fakeLoad = true;
	          var csr = elt.sheet.cssRules;
	          var len = csr ? csr.length : 0;
	          for (var i = 0, r; i < len && (r = csr[i]); i++) {
	            if (r.type === CSSRule.IMPORT_RULE) {
	              fakeLoad = fakeLoad && Boolean(r.styleSheet);
	            }
	          }
	        }
	        if (fakeLoad) {
	          setTimeout(function() {
	            elt.dispatchEvent(new CustomEvent("load", {
	              bubbles: false
	            }));
	          });
	        }
	      }
	    },
	    parseScript: function(scriptElt) {
	      var script = document.createElement("script");
	      script.__importElement = scriptElt;
	      script.src = scriptElt.src ? scriptElt.src : generateScriptDataUrl(scriptElt);
	      scope.currentScript = scriptElt;
	      this.trackElement(script, function(e) {
	        if (script.parentNode) {
	          script.parentNode.removeChild(script);
	        }
	        scope.currentScript = null;
	      });
	      this.addElementToDocument(script);
	    },
	    nextToParse: function() {
	      this._mayParse = [];
	      return !this.parsingElement && (this.nextToParseInDoc(rootDocument) || this.nextToParseDynamic());
	    },
	    nextToParseInDoc: function(doc, link) {
	      if (doc && this._mayParse.indexOf(doc) < 0) {
	        this._mayParse.push(doc);
	        var nodes = doc.querySelectorAll(this.parseSelectorsForNode(doc));
	        for (var i = 0, l = nodes.length, n; i < l && (n = nodes[i]); i++) {
	          if (!this.isParsed(n)) {
	            if (this.hasResource(n)) {
	              return nodeIsImport(n) ? this.nextToParseInDoc(n.__doc, n) : n;
	            } else {
	              return;
	            }
	          }
	        }
	      }
	      return link;
	    },
	    nextToParseDynamic: function() {
	      return this.dynamicElements[0];
	    },
	    parseSelectorsForNode: function(node) {
	      var doc = node.ownerDocument || node;
	      return doc === rootDocument ? this.documentSelectors : this.importsSelectors;
	    },
	    isParsed: function(node) {
	      return node.__importParsed;
	    },
	    needsDynamicParsing: function(elt) {
	      return this.dynamicElements.indexOf(elt) >= 0;
	    },
	    hasResource: function(node) {
	      if (nodeIsImport(node) && node.__doc === undefined) {
	        return false;
	      }
	      return true;
	    }
	  };
	  function nodeIsImport(elt) {
	    return elt.localName === "link" && elt.rel === IMPORT_LINK_TYPE;
	  }
	  function generateScriptDataUrl(script) {
	    var scriptContent = generateScriptContent(script);
	    return "data:text/javascript;charset=utf-8," + encodeURIComponent(scriptContent);
	  }
	  function generateScriptContent(script) {
	    return script.textContent + generateSourceMapHint(script);
	  }
	  function generateSourceMapHint(script) {
	    var owner = script.ownerDocument;
	    owner.__importedScripts = owner.__importedScripts || 0;
	    var moniker = script.ownerDocument.baseURI;
	    var num = owner.__importedScripts ? "-" + owner.__importedScripts : "";
	    owner.__importedScripts++;
	    return "\n//# sourceURL=" + moniker + num + ".js\n";
	  }
	  function cloneStyle(style) {
	    var clone = style.ownerDocument.createElement("style");
	    clone.textContent = style.textContent;
	    path.resolveUrlsInStyle(clone);
	    return clone;
	  }
	  scope.parser = importParser;
	  scope.IMPORT_SELECTOR = IMPORT_SELECTOR;
	});

	window.HTMLImports.addModule(function(scope) {
	  var flags = scope.flags;
	  var IMPORT_LINK_TYPE = scope.IMPORT_LINK_TYPE;
	  var IMPORT_SELECTOR = scope.IMPORT_SELECTOR;
	  var rootDocument = scope.rootDocument;
	  var Loader = scope.Loader;
	  var Observer = scope.Observer;
	  var parser = scope.parser;
	  var importer = {
	    documents: {},
	    documentPreloadSelectors: IMPORT_SELECTOR,
	    importsPreloadSelectors: [ IMPORT_SELECTOR ].join(","),
	    loadNode: function(node) {
	      importLoader.addNode(node);
	    },
	    loadSubtree: function(parent) {
	      var nodes = this.marshalNodes(parent);
	      importLoader.addNodes(nodes);
	    },
	    marshalNodes: function(parent) {
	      return parent.querySelectorAll(this.loadSelectorsForNode(parent));
	    },
	    loadSelectorsForNode: function(node) {
	      var doc = node.ownerDocument || node;
	      return doc === rootDocument ? this.documentPreloadSelectors : this.importsPreloadSelectors;
	    },
	    loaded: function(url, elt, resource, err, redirectedUrl) {
	      flags.load && console.log("loaded", url, elt);
	      elt.__resource = resource;
	      elt.__error = err;
	      if (isImportLink(elt)) {
	        var doc = this.documents[url];
	        if (doc === undefined) {
	          doc = err ? null : makeDocument(resource, redirectedUrl || url);
	          if (doc) {
	            doc.__importLink = elt;
	            this.bootDocument(doc);
	          }
	          this.documents[url] = doc;
	        }
	        elt.__doc = doc;
	      }
	      parser.parseNext();
	    },
	    bootDocument: function(doc) {
	      this.loadSubtree(doc);
	      this.observer.observe(doc);
	      parser.parseNext();
	    },
	    loadedAll: function() {
	      parser.parseNext();
	    }
	  };
	  var importLoader = new Loader(importer.loaded.bind(importer), importer.loadedAll.bind(importer));
	  importer.observer = new Observer();
	  function isImportLink(elt) {
	    return isLinkRel(elt, IMPORT_LINK_TYPE);
	  }
	  function isLinkRel(elt, rel) {
	    return elt.localName === "link" && elt.getAttribute("rel") === rel;
	  }
	  function hasBaseURIAccessor(doc) {
	    return !!Object.getOwnPropertyDescriptor(doc, "baseURI");
	  }
	  function makeDocument(resource, url) {
	    var doc = document.implementation.createHTMLDocument(IMPORT_LINK_TYPE);
	    doc._URL = url;
	    var base = doc.createElement("base");
	    base.setAttribute("href", url);
	    if (!doc.baseURI && !hasBaseURIAccessor(doc)) {
	      Object.defineProperty(doc, "baseURI", {
	        value: url
	      });
	    }
	    var meta = doc.createElement("meta");
	    meta.setAttribute("charset", "utf-8");
	    doc.head.appendChild(meta);
	    doc.head.appendChild(base);
	    doc.body.innerHTML = resource;
	    if (window.HTMLTemplateElement && HTMLTemplateElement.bootstrap) {
	      HTMLTemplateElement.bootstrap(doc);
	    }
	    return doc;
	  }
	  if (!document.baseURI) {
	    var baseURIDescriptor = {
	      get: function() {
	        var base = document.querySelector("base");
	        return base ? base.href : window.location.href;
	      },
	      configurable: true
	    };
	    Object.defineProperty(document, "baseURI", baseURIDescriptor);
	    Object.defineProperty(rootDocument, "baseURI", baseURIDescriptor);
	  }
	  scope.importer = importer;
	  scope.importLoader = importLoader;
	});

	window.HTMLImports.addModule(function(scope) {
	  var parser = scope.parser;
	  var importer = scope.importer;
	  var dynamic = {
	    added: function(nodes) {
	      var owner, parsed, loading;
	      for (var i = 0, l = nodes.length, n; i < l && (n = nodes[i]); i++) {
	        if (!owner) {
	          owner = n.ownerDocument;
	          parsed = parser.isParsed(owner);
	        }
	        loading = this.shouldLoadNode(n);
	        if (loading) {
	          importer.loadNode(n);
	        }
	        if (this.shouldParseNode(n) && parsed) {
	          parser.parseDynamic(n, loading);
	        }
	      }
	    },
	    shouldLoadNode: function(node) {
	      return node.nodeType === 1 && matches.call(node, importer.loadSelectorsForNode(node));
	    },
	    shouldParseNode: function(node) {
	      return node.nodeType === 1 && matches.call(node, parser.parseSelectorsForNode(node));
	    }
	  };
	  importer.observer.addCallback = dynamic.added.bind(dynamic);
	  var matches = HTMLElement.prototype.matches || HTMLElement.prototype.matchesSelector || HTMLElement.prototype.webkitMatchesSelector || HTMLElement.prototype.mozMatchesSelector || HTMLElement.prototype.msMatchesSelector;
	});

	(function(scope) {
	  var initializeModules = scope.initializeModules;
	  var isIE = scope.isIE;
	  if (scope.useNative) {
	    return;
	  }
	  initializeModules();
	  var rootDocument = scope.rootDocument;
	  function bootstrap() {
	    window.HTMLImports.importer.bootDocument(rootDocument);
	  }
	  if (document.readyState === "complete" || document.readyState === "interactive" && !window.attachEvent) {
	    bootstrap();
	  } else {
	    document.addEventListener("DOMContentLoaded", bootstrap);
	  }
	})(window.HTMLImports);

	window.CustomElements = window.CustomElements || {
	  flags: {}
	};

	(function(scope) {
	  var flags = scope.flags;
	  var modules = [];
	  var addModule = function(module) {
	    modules.push(module);
	  };
	  var initializeModules = function() {
	    modules.forEach(function(module) {
	      module(scope);
	    });
	  };
	  scope.addModule = addModule;
	  scope.initializeModules = initializeModules;
	  scope.hasNative = Boolean(document.registerElement);
	  scope.isIE = /Trident/.test(navigator.userAgent);
	  scope.useNative = !flags.register && scope.hasNative && !window.ShadowDOMPolyfill && (!window.HTMLImports || window.HTMLImports.useNative);
	})(window.CustomElements);

	window.CustomElements.addModule(function(scope) {
	  var IMPORT_LINK_TYPE = window.HTMLImports ? window.HTMLImports.IMPORT_LINK_TYPE : "none";
	  function forSubtree(node, cb) {
	    findAllElements(node, function(e) {
	      if (cb(e)) {
	        return true;
	      }
	      forRoots(e, cb);
	    });
	    forRoots(node, cb);
	  }
	  function findAllElements(node, find, data) {
	    var e = node.firstElementChild;
	    if (!e) {
	      e = node.firstChild;
	      while (e && e.nodeType !== Node.ELEMENT_NODE) {
	        e = e.nextSibling;
	      }
	    }
	    while (e) {
	      if (find(e, data) !== true) {
	        findAllElements(e, find, data);
	      }
	      e = e.nextElementSibling;
	    }
	    return null;
	  }
	  function forRoots(node, cb) {
	    var root = node.shadowRoot;
	    while (root) {
	      forSubtree(root, cb);
	      root = root.olderShadowRoot;
	    }
	  }
	  function forDocumentTree(doc, cb) {
	    _forDocumentTree(doc, cb, []);
	  }
	  function _forDocumentTree(doc, cb, processingDocuments) {
	    doc = window.wrap(doc);
	    if (processingDocuments.indexOf(doc) >= 0) {
	      return;
	    }
	    processingDocuments.push(doc);
	    var imports = doc.querySelectorAll("link[rel=" + IMPORT_LINK_TYPE + "]");
	    for (var i = 0, l = imports.length, n; i < l && (n = imports[i]); i++) {
	      if (n.import) {
	        _forDocumentTree(n.import, cb, processingDocuments);
	      }
	    }
	    cb(doc);
	  }
	  scope.forDocumentTree = forDocumentTree;
	  scope.forSubtree = forSubtree;
	});

	window.CustomElements.addModule(function(scope) {
	  var flags = scope.flags;
	  var forSubtree = scope.forSubtree;
	  var forDocumentTree = scope.forDocumentTree;
	  function addedNode(node, isAttached) {
	    return added(node, isAttached) || addedSubtree(node, isAttached);
	  }
	  function added(node, isAttached) {
	    if (scope.upgrade(node, isAttached)) {
	      return true;
	    }
	    if (isAttached) {
	      attached(node);
	    }
	  }
	  function addedSubtree(node, isAttached) {
	    forSubtree(node, function(e) {
	      if (added(e, isAttached)) {
	        return true;
	      }
	    });
	  }
	  var hasThrottledAttached = window.MutationObserver._isPolyfilled && flags["throttle-attached"];
	  scope.hasPolyfillMutations = hasThrottledAttached;
	  scope.hasThrottledAttached = hasThrottledAttached;
	  var isPendingMutations = false;
	  var pendingMutations = [];
	  function deferMutation(fn) {
	    pendingMutations.push(fn);
	    if (!isPendingMutations) {
	      isPendingMutations = true;
	      setTimeout(takeMutations);
	    }
	  }
	  function takeMutations() {
	    isPendingMutations = false;
	    var $p = pendingMutations;
	    for (var i = 0, l = $p.length, p; i < l && (p = $p[i]); i++) {
	      p();
	    }
	    pendingMutations = [];
	  }
	  function attached(element) {
	    if (hasThrottledAttached) {
	      deferMutation(function() {
	        _attached(element);
	      });
	    } else {
	      _attached(element);
	    }
	  }
	  function _attached(element) {
	    if (element.__upgraded__ && !element.__attached) {
	      element.__attached = true;
	      if (element.attachedCallback) {
	        element.attachedCallback();
	      }
	    }
	  }
	  function detachedNode(node) {
	    detached(node);
	    forSubtree(node, function(e) {
	      detached(e);
	    });
	  }
	  function detached(element) {
	    if (hasThrottledAttached) {
	      deferMutation(function() {
	        _detached(element);
	      });
	    } else {
	      _detached(element);
	    }
	  }
	  function _detached(element) {
	    if (element.__upgraded__ && element.__attached) {
	      element.__attached = false;
	      if (element.detachedCallback) {
	        element.detachedCallback();
	      }
	    }
	  }
	  function inDocument(element) {
	    var p = element;
	    var doc = window.wrap(document);
	    while (p) {
	      if (p == doc) {
	        return true;
	      }
	      p = p.parentNode || p.nodeType === Node.DOCUMENT_FRAGMENT_NODE && p.host;
	    }
	  }
	  function watchShadow(node) {
	    if (node.shadowRoot && !node.shadowRoot.__watched) {
	      flags.dom && console.log("watching shadow-root for: ", node.localName);
	      var root = node.shadowRoot;
	      while (root) {
	        observe(root);
	        root = root.olderShadowRoot;
	      }
	    }
	  }
	  function handler(root, mutations) {
	    if (flags.dom) {
	      var mx = mutations[0];
	      if (mx && mx.type === "childList" && mx.addedNodes) {
	        if (mx.addedNodes) {
	          var d = mx.addedNodes[0];
	          while (d && d !== document && !d.host) {
	            d = d.parentNode;
	          }
	          var u = d && (d.URL || d._URL || d.host && d.host.localName) || "";
	          u = u.split("/?").shift().split("/").pop();
	        }
	      }
	      console.group("mutations (%d) [%s]", mutations.length, u || "");
	    }
	    var isAttached = inDocument(root);
	    mutations.forEach(function(mx) {
	      if (mx.type === "childList") {
	        forEach(mx.addedNodes, function(n) {
	          if (!n.localName) {
	            return;
	          }
	          addedNode(n, isAttached);
	        });
	        forEach(mx.removedNodes, function(n) {
	          if (!n.localName) {
	            return;
	          }
	          detachedNode(n);
	        });
	      }
	    });
	    flags.dom && console.groupEnd();
	  }
	  function takeRecords(node) {
	    node = window.wrap(node);
	    if (!node) {
	      node = window.wrap(document);
	    }
	    while (node.parentNode) {
	      node = node.parentNode;
	    }
	    var observer = node.__observer;
	    if (observer) {
	      handler(node, observer.takeRecords());
	      takeMutations();
	    }
	  }
	  var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);
	  function observe(inRoot) {
	    if (inRoot.__observer) {
	      return;
	    }
	    var observer = new MutationObserver(handler.bind(this, inRoot));
	    observer.observe(inRoot, {
	      childList: true,
	      subtree: true
	    });
	    inRoot.__observer = observer;
	  }
	  function upgradeDocument(doc) {
	    doc = window.wrap(doc);
	    flags.dom && console.group("upgradeDocument: ", doc.baseURI.split("/").pop());
	    var isMainDocument = doc === window.wrap(document);
	    addedNode(doc, isMainDocument);
	    observe(doc);
	    flags.dom && console.groupEnd();
	  }
	  function upgradeDocumentTree(doc) {
	    forDocumentTree(doc, upgradeDocument);
	  }
	  var originalCreateShadowRoot = Element.prototype.createShadowRoot;
	  if (originalCreateShadowRoot) {
	    Element.prototype.createShadowRoot = function() {
	      var root = originalCreateShadowRoot.call(this);
	      window.CustomElements.watchShadow(this);
	      return root;
	    };
	  }
	  scope.watchShadow = watchShadow;
	  scope.upgradeDocumentTree = upgradeDocumentTree;
	  scope.upgradeDocument = upgradeDocument;
	  scope.upgradeSubtree = addedSubtree;
	  scope.upgradeAll = addedNode;
	  scope.attached = attached;
	  scope.takeRecords = takeRecords;
	});

	window.CustomElements.addModule(function(scope) {
	  var flags = scope.flags;
	  function upgrade(node, isAttached) {
	    if (node.localName === "template") {
	      if (window.HTMLTemplateElement && HTMLTemplateElement.decorate) {
	        HTMLTemplateElement.decorate(node);
	      }
	    }
	    if (!node.__upgraded__ && node.nodeType === Node.ELEMENT_NODE) {
	      var is = node.getAttribute("is");
	      var definition = scope.getRegisteredDefinition(node.localName) || scope.getRegisteredDefinition(is);
	      if (definition) {
	        if (is && definition.tag == node.localName || !is && !definition.extends) {
	          return upgradeWithDefinition(node, definition, isAttached);
	        }
	      }
	    }
	  }
	  function upgradeWithDefinition(element, definition, isAttached) {
	    flags.upgrade && console.group("upgrade:", element.localName);
	    if (definition.is) {
	      element.setAttribute("is", definition.is);
	    }
	    implementPrototype(element, definition);
	    element.__upgraded__ = true;
	    created(element);
	    if (isAttached) {
	      scope.attached(element);
	    }
	    scope.upgradeSubtree(element, isAttached);
	    flags.upgrade && console.groupEnd();
	    return element;
	  }
	  function implementPrototype(element, definition) {
	    if (Object.__proto__) {
	      element.__proto__ = definition.prototype;
	    } else {
	      customMixin(element, definition.prototype, definition.native);
	      element.__proto__ = definition.prototype;
	    }
	  }
	  function customMixin(inTarget, inSrc, inNative) {
	    var used = {};
	    var p = inSrc;
	    while (p !== inNative && p !== HTMLElement.prototype) {
	      var keys = Object.getOwnPropertyNames(p);
	      for (var i = 0, k; k = keys[i]; i++) {
	        if (!used[k]) {
	          Object.defineProperty(inTarget, k, Object.getOwnPropertyDescriptor(p, k));
	          used[k] = 1;
	        }
	      }
	      p = Object.getPrototypeOf(p);
	    }
	  }
	  function created(element) {
	    if (element.createdCallback) {
	      element.createdCallback();
	    }
	  }
	  scope.upgrade = upgrade;
	  scope.upgradeWithDefinition = upgradeWithDefinition;
	  scope.implementPrototype = implementPrototype;
	});

	window.CustomElements.addModule(function(scope) {
	  var isIE = scope.isIE;
	  var upgradeDocumentTree = scope.upgradeDocumentTree;
	  var upgradeAll = scope.upgradeAll;
	  var upgradeWithDefinition = scope.upgradeWithDefinition;
	  var implementPrototype = scope.implementPrototype;
	  var useNative = scope.useNative;
	  function register(name, options) {
	    var definition = options || {};
	    if (!name) {
	      throw new Error("document.registerElement: first argument `name` must not be empty");
	    }
	    if (name.indexOf("-") < 0) {
	      throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '" + String(name) + "'.");
	    }
	    if (isReservedTag(name)) {
	      throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '" + String(name) + "'. The type name is invalid.");
	    }
	    if (getRegisteredDefinition(name)) {
	      throw new Error("DuplicateDefinitionError: a type with name '" + String(name) + "' is already registered");
	    }
	    if (!definition.prototype) {
	      definition.prototype = Object.create(HTMLElement.prototype);
	    }
	    definition.__name = name.toLowerCase();
	    if (definition.extends) {
	      definition.extends = definition.extends.toLowerCase();
	    }
	    definition.lifecycle = definition.lifecycle || {};
	    definition.ancestry = ancestry(definition.extends);
	    resolveTagName(definition);
	    resolvePrototypeChain(definition);
	    overrideAttributeApi(definition.prototype);
	    registerDefinition(definition.__name, definition);
	    definition.ctor = generateConstructor(definition);
	    definition.ctor.prototype = definition.prototype;
	    definition.prototype.constructor = definition.ctor;
	    if (scope.ready) {
	      upgradeDocumentTree(document);
	    }
	    return definition.ctor;
	  }
	  function overrideAttributeApi(prototype) {
	    if (prototype.setAttribute._polyfilled) {
	      return;
	    }
	    var setAttribute = prototype.setAttribute;
	    prototype.setAttribute = function(name, value) {
	      changeAttribute.call(this, name, value, setAttribute);
	    };
	    var removeAttribute = prototype.removeAttribute;
	    prototype.removeAttribute = function(name) {
	      changeAttribute.call(this, name, null, removeAttribute);
	    };
	    prototype.setAttribute._polyfilled = true;
	  }
	  function changeAttribute(name, value, operation) {
	    name = name.toLowerCase();
	    var oldValue = this.getAttribute(name);
	    operation.apply(this, arguments);
	    var newValue = this.getAttribute(name);
	    if (this.attributeChangedCallback && newValue !== oldValue) {
	      this.attributeChangedCallback(name, oldValue, newValue);
	    }
	  }
	  function isReservedTag(name) {
	    for (var i = 0; i < reservedTagList.length; i++) {
	      if (name === reservedTagList[i]) {
	        return true;
	      }
	    }
	  }
	  var reservedTagList = [ "annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph" ];
	  function ancestry(extnds) {
	    var extendee = getRegisteredDefinition(extnds);
	    if (extendee) {
	      return ancestry(extendee.extends).concat([ extendee ]);
	    }
	    return [];
	  }
	  function resolveTagName(definition) {
	    var baseTag = definition.extends;
	    for (var i = 0, a; a = definition.ancestry[i]; i++) {
	      baseTag = a.is && a.tag;
	    }
	    definition.tag = baseTag || definition.__name;
	    if (baseTag) {
	      definition.is = definition.__name;
	    }
	  }
	  function resolvePrototypeChain(definition) {
	    if (!Object.__proto__) {
	      var nativePrototype = HTMLElement.prototype;
	      if (definition.is) {
	        var inst = document.createElement(definition.tag);
	        nativePrototype = Object.getPrototypeOf(inst);
	      }
	      var proto = definition.prototype, ancestor;
	      var foundPrototype = false;
	      while (proto) {
	        if (proto == nativePrototype) {
	          foundPrototype = true;
	        }
	        ancestor = Object.getPrototypeOf(proto);
	        if (ancestor) {
	          proto.__proto__ = ancestor;
	        }
	        proto = ancestor;
	      }
	      if (!foundPrototype) {
	        console.warn(definition.tag + " prototype not found in prototype chain for " + definition.is);
	      }
	      definition.native = nativePrototype;
	    }
	  }
	  function instantiate(definition) {
	    return upgradeWithDefinition(domCreateElement(definition.tag), definition);
	  }
	  var registry = {};
	  function getRegisteredDefinition(name) {
	    if (name) {
	      return registry[name.toLowerCase()];
	    }
	  }
	  function registerDefinition(name, definition) {
	    registry[name] = definition;
	  }
	  function generateConstructor(definition) {
	    return function() {
	      return instantiate(definition);
	    };
	  }
	  var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
	  function createElementNS(namespace, tag, typeExtension) {
	    if (namespace === HTML_NAMESPACE) {
	      return createElement(tag, typeExtension);
	    } else {
	      return domCreateElementNS(namespace, tag);
	    }
	  }
	  function createElement(tag, typeExtension) {
	    if (tag) {
	      tag = tag.toLowerCase();
	    }
	    if (typeExtension) {
	      typeExtension = typeExtension.toLowerCase();
	    }
	    var definition = getRegisteredDefinition(typeExtension || tag);
	    if (definition) {
	      if (tag == definition.tag && typeExtension == definition.is) {
	        return new definition.ctor();
	      }
	      if (!typeExtension && !definition.is) {
	        return new definition.ctor();
	      }
	    }
	    var element;
	    if (typeExtension) {
	      element = createElement(tag);
	      element.setAttribute("is", typeExtension);
	      return element;
	    }
	    element = domCreateElement(tag);
	    if (tag.indexOf("-") >= 0) {
	      implementPrototype(element, HTMLElement);
	    }
	    return element;
	  }
	  var domCreateElement = document.createElement.bind(document);
	  var domCreateElementNS = document.createElementNS.bind(document);
	  var isInstance;
	  if (!Object.__proto__ && !useNative) {
	    isInstance = function(obj, ctor) {
	      if (obj instanceof ctor) {
	        return true;
	      }
	      var p = obj;
	      while (p) {
	        if (p === ctor.prototype) {
	          return true;
	        }
	        p = p.__proto__;
	      }
	      return false;
	    };
	  } else {
	    isInstance = function(obj, base) {
	      return obj instanceof base;
	    };
	  }
	  function wrapDomMethodToForceUpgrade(obj, methodName) {
	    var orig = obj[methodName];
	    obj[methodName] = function() {
	      var n = orig.apply(this, arguments);
	      upgradeAll(n);
	      return n;
	    };
	  }
	  wrapDomMethodToForceUpgrade(Node.prototype, "cloneNode");
	  wrapDomMethodToForceUpgrade(document, "importNode");
	  document.registerElement = register;
	  document.createElement = createElement;
	  document.createElementNS = createElementNS;
	  scope.registry = registry;
	  scope.instanceof = isInstance;
	  scope.reservedTagList = reservedTagList;
	  scope.getRegisteredDefinition = getRegisteredDefinition;
	  document.register = document.registerElement;
	});

	(function(scope) {
	  var useNative = scope.useNative;
	  var initializeModules = scope.initializeModules;
	  var isIE = scope.isIE;
	  if (useNative) {
	    var nop = function() {};
	    scope.watchShadow = nop;
	    scope.upgrade = nop;
	    scope.upgradeAll = nop;
	    scope.upgradeDocumentTree = nop;
	    scope.upgradeSubtree = nop;
	    scope.takeRecords = nop;
	    scope.instanceof = function(obj, base) {
	      return obj instanceof base;
	    };
	  } else {
	    initializeModules();
	  }
	  var upgradeDocumentTree = scope.upgradeDocumentTree;
	  var upgradeDocument = scope.upgradeDocument;
	  if (!window.wrap) {
	    if (window.ShadowDOMPolyfill) {
	      window.wrap = window.ShadowDOMPolyfill.wrapIfNeeded;
	      window.unwrap = window.ShadowDOMPolyfill.unwrapIfNeeded;
	    } else {
	      window.wrap = window.unwrap = function(node) {
	        return node;
	      };
	    }
	  }
	  if (window.HTMLImports) {
	    window.HTMLImports.__importsParsingHook = function(elt) {
	      if (elt.import) {
	        upgradeDocument(wrap(elt.import));
	      }
	    };
	  }
	  function bootstrap() {
	    upgradeDocumentTree(window.wrap(document));
	    window.CustomElements.ready = true;
	    var requestAnimationFrame = window.requestAnimationFrame || function(f) {
	      setTimeout(f, 16);
	    };
	    requestAnimationFrame(function() {
	      setTimeout(function() {
	        window.CustomElements.readyTime = Date.now();
	        if (window.HTMLImports) {
	          window.CustomElements.elapsed = window.CustomElements.readyTime - window.HTMLImports.readyTime;
	        }
	        document.dispatchEvent(new CustomEvent("WebComponentsReady", {
	          bubbles: true
	        }));
	      });
	    });
	  }
	  if (document.readyState === "complete" || scope.flags.eager) {
	    bootstrap();
	  } else if (document.readyState === "interactive" && !window.attachEvent && (!window.HTMLImports || window.HTMLImports.ready)) {
	    bootstrap();
	  } else {
	    var loadEvent = window.HTMLImports && !window.HTMLImports.ready ? "HTMLImportsLoaded" : "DOMContentLoaded";
	    window.addEventListener(loadEvent, bootstrap);
	  }
	})(window.CustomElements);

	(function(scope) {
	  if (!Function.prototype.bind) {
	    Function.prototype.bind = function(scope) {
	      var self = this;
	      var args = Array.prototype.slice.call(arguments, 1);
	      return function() {
	        var args2 = args.slice();
	        args2.push.apply(args2, arguments);
	        return self.apply(scope, args2);
	      };
	    };
	  }
	})(window.WebComponents);

	(function(scope) {
	  var style = document.createElement("style");
	  style.textContent = "" + "body {" + "transition: opacity ease-in 0.2s;" + " } \n" + "body[unresolved] {" + "opacity: 0; display: block; overflow: hidden; position: relative;" + " } \n";
	  var head = document.querySelector("head");
	  head.insertBefore(style, head.firstChild);
	})(window.WebComponents);

	(function(scope) {
	  window.Platform = scope;
	})(window.WebComponents);

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.h = exports.Component = undefined;

	var _component = __webpack_require__(300);

	var _component2 = _interopRequireDefault(_component);

	var _virtualHyperscript = __webpack_require__(331);

	var _virtualHyperscript2 = _interopRequireDefault(_virtualHyperscript);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Entry point for Panel apps and components
	 * @module panel
	 * @example
	 * import { Component } from 'panel';
	 * document.registerElement('my-widget', class extends Component {
	 *   // app definition
	 * });
	 */

	exports.Component = _component2.default;
	exports.h = _virtualHyperscript2.default;

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mainLoop = __webpack_require__(301);

	var _mainLoop2 = _interopRequireDefault(_mainLoop);

	var _createElement = __webpack_require__(308);

	var _createElement2 = _interopRequireDefault(_createElement);

	var _diff = __webpack_require__(321);

	var _diff2 = _interopRequireDefault(_diff);

	var _patch = __webpack_require__(326);

	var _patch2 = _interopRequireDefault(_patch);

	var _virtualHyperscript = __webpack_require__(331);

	var _virtualHyperscript2 = _interopRequireDefault(_virtualHyperscript);

	var _webcomponent = __webpack_require__(341);

	var _webcomponent2 = _interopRequireDefault(_webcomponent);

	var _router = __webpack_require__(342);

	var _router2 = _interopRequireDefault(_router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var panelID = 1;
	var DOCUMENT_FRAGMENT_NODE = 11;
	var EMPTY_DIV = (0, _virtualHyperscript2.default)('div');

	/**
	 * Definition of a Panel component/app, implemented as an HTML custom element.
	 * App logic and configuration is defined by extending this class. Instantiating
	 * a component is typically not done by calling the constructor directly, but
	 * either by including the tag in HTML markup, or by using the DOM API method
	 * [document.createElement]{@link https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement}.
	 *
	 * @example <caption>Defining a Panel component</caption>
	 * class MyWidget extends Component {
	 *   get config() {
	 *     return {
	 *       // options go here
	 *     };
	 *   }
	 *
	 *   myMethod() {
	 *     // etc
	 *   }
	 * }
	 *
	 * @example <caption>Registering the custom element definition for the DOM</caption>
	 * document.registerElement('my-widget', MyWidget);
	 *
	 * @example <caption>Adding an instance of the element to the DOM</caption>
	 * <my-widget some-attr></my-widget>
	 *
	 * @extends WebComponent
	 */

	var Component = function (_WebComponent) {
	  _inherits(Component, _WebComponent);

	  function Component() {
	    _classCallCheck(this, Component);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Component).apply(this, arguments));
	  }

	  _createClass(Component, [{
	    key: 'child',


	    /**
	     * For use inside view templates, to create a child Panel component nested under this
	     * component, which will share its state object and update cycle.
	     * @param {string} tagName - the HTML element tag name of the custom element
	     * to be created
	     * @param {object} [attrs={}] - HTML attributes to assign to the child
	     * @returns {object} virtual-dom node
	     * @example
	     * {template: state => h('.header', this.child('my-child-widget'))}
	     */
	    value: function child(tagName) {
	      var attrs = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      attrs = Object.assign({}, attrs);
	      attrs.attributes = Object.assign({}, attrs.attributes, { 'panel-parent': this.panelID });
	      return (0, _virtualHyperscript2.default)(tagName, attrs);
	    }

	    /**
	     * Searches the component's Panel ancestors for the first component of the
	     * given type (HTML tag name).
	     * @param {string} tagName - tag name of the parent to search for
	     * @returns {object} Panel component
	     * @throws Throws an error if no parent component with the given tag name is found.
	     * @example
	     * myWidget.findPanelParentByTagName('my-app');
	     */

	  }, {
	    key: 'findPanelParentByTagName',
	    value: function findPanelParentByTagName(tagName) {
	      tagName = tagName.toLowerCase();
	      for (var node = this.$panelParent; !!node; node = node.$panelParent) {
	        if (node.tagName.toLowerCase() === tagName) {
	          return node;
	        }
	      }
	      throw Error(tagName + ' not found');
	    }

	    /**
	     * Fetches a value from the component's configuration map (a combination of
	     * values supplied in the config() getter and defaults applied automatically).
	     * @param {string} key - key of config item to fetch
	     * @returns value associated with key
	     * @example
	     * myWidget.getConfig('css');
	     */

	  }, {
	    key: 'getConfig',
	    value: function getConfig(key) {
	      return this._config[key];
	    }

	    /**
	     * Executes the route handler matching the given URL fragment, and updates
	     * the URL, as though the user had navigated explicitly to that address.
	     * @param {string} fragment - URL fragment to navigate to
	     * @param {object} [stateUpdate={}] - update to apply to state object when
	     * routing
	     * @example
	     * myApp.navigate('wombat/54', {color: 'blue'});
	     */

	  }, {
	    key: 'navigate',
	    value: function navigate() {
	      var _$panelRoot$router;

	      (_$panelRoot$router = this.$panelRoot.router).navigate.apply(_$panelRoot$router, arguments);
	    }

	    /**
	     * Sets a value in the component's configuration map after element
	     * initialization.
	     * @param {string} key - key of config item to set
	     * @param val - value to associate with key
	     * @example
	     * myWidget.setConfig('template', () => h('.new-template', 'Hi'));
	     */

	  }, {
	    key: 'setConfig',
	    value: function setConfig(key, val) {
	      this._config[key] = val;
	    }

	    /**
	     * To be overridden by subclasses, defining conditional logic for whether
	     * a component should rerender its template given the state to be applied.
	     * In most cases this method can be left untouched, but can provide improved
	     * performance when dealing with very many DOM elements.
	     * @param {object} state - state object to be used when rendering
	     * @returns {boolean} whether or not to render/update this component
	     * @example
	     * shouldUpdate(state) {
	     *   // don't need to rerender if result set ID hasn't changed
	     *   return state.largeResultSetID !== this._cachedResultID;
	     * }
	     */

	  }, {
	    key: 'shouldUpdate',
	    value: function shouldUpdate(state) {
	      return true;
	    }

	    /**
	     * Applies a state update, triggering a re-render check of the component as
	     * well as any other components sharing the same state. This is the primary
	     * means of updating the DOM in a Panel application.
	     * @param {object} [stateUpdate={}] - keys and values of entries to update in
	     * the component's state object
	     * @example
	     * myWidget.update({name: 'Bob'});
	     */

	  }, {
	    key: 'update',
	    value: function update() {
	      var stateUpdate = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      if (!this.initialized) {
	        Object.assign(this.state, stateUpdate);
	      } else if (this.isPanelRoot) {
	        var updateHash = '$fragment' in stateUpdate && stateUpdate.$fragment !== this.state.$fragment;

	        Object.assign(this.state, stateUpdate);
	        this.updateSelfAndChildren(this.state);

	        if (updateHash) {
	          this.router.replaceHash(this.state.$fragment);
	        }
	      } else {
	        this.$panelRoot.update(stateUpdate);
	      }
	    }
	  }, {
	    key: 'createdCallback',
	    value: function createdCallback() {
	      this.panelID = panelID++;
	      this._config = Object.assign({}, {
	        css: '',
	        helpers: {},
	        routes: {},
	        template: function template() {
	          throw Error('No template provided by Component subclass');
	        },
	        useShadowDom: false
	      }, this.config);
	      this.state = {};
	      if (this.getConfig('useShadowDom')) {
	        this.el = this.createShadowRoot();
	        this.styleTag = document.createElement('style');
	        this.styleTag.innerHTML = this.getConfig('css');
	        this.el.appendChild(this.styleTag);
	      } else if (this.getConfig('css')) {
	        throw Error('"useShadowDom" config option must be set in order to use "css" config.');
	      } else {
	        this.el = this;
	      }
	    }
	  }, {
	    key: 'attachedCallback',
	    value: function attachedCallback() {
	      this.$panelChildren = new Set();

	      var parentID = Number(this.getAttribute('panel-parent'));
	      if (parentID) {
	        this.isPanelChild = true;
	        // find $panelParent
	        for (var node = this.parentNode; node && !this.$panelParent; node = node.parentNode) {
	          if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
	            // handle shadow-root
	            node = node.host;
	          }
	          if (node.panelID === parentID) {
	            this.$panelParent = node;
	            this.$panelRoot = node.$panelRoot;
	          }
	        }
	        if (!this.$panelParent) {
	          throw Error('panel-parent ' + parentID + ' not found');
	        }
	        this.$panelParent.$panelChildren.add(this);
	        this.state = this.$panelRoot.state;
	      } else {
	        this.isPanelRoot = true;
	        this.$panelRoot = this;
	        this.$panelParent = null;
	      }
	      this.app = this.$panelRoot;

	      var newState = Object.assign({}, this.getConfig('defaultState'), this.state, this.getJSONAttribute('data-state'), this._stateFromAttributes());
	      Object.assign(this.state, newState);

	      this.loop = (0, _mainLoop2.default)(this.state, this._render.bind(this), { create: _createElement2.default, diff: _diff2.default, patch: _patch2.default });
	      this.el.appendChild(this.loop.target);
	      this.initialized = true;

	      if (Object.keys(this.getConfig('routes')).length) {
	        this.router = new _router2.default(this, { historyMethod: this.historyMethod });
	        this.navigate(window.location.hash);
	      }
	    }
	  }, {
	    key: 'detachedCallback',
	    value: function detachedCallback() {
	      this.$panelParent && this.$panelParent.$panelChildren.delete(this);
	    }
	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attr, oldVal, newVal) {
	      if (attr === 'style-override') {
	        this._applyStyles(newVal);
	      }
	      if (this.isPanelRoot && this.initialized) {
	        this.update();
	      }
	    }
	  }, {
	    key: '_applyStyles',
	    value: function _applyStyles(styleOverride) {
	      if (this.getConfig('useShadowDom')) {
	        this.styleTag.innerHTML = this.getConfig('css') + (styleOverride || '');
	      }
	    }
	  }, {
	    key: 'logError',
	    value: function logError() {
	      var _console;

	      (_console = console).error.apply(_console, arguments);
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      try {
	        return this.tagName + '#' + this.panelID;
	      } catch (e) {
	        return 'UNKNOWN COMPONENT';
	      }
	    }
	  }, {
	    key: 'updateSelfAndChildren',
	    value: function updateSelfAndChildren(state) {
	      if (this.initialized && this.shouldUpdate(state)) {
	        this.loop.update(state);
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = this.$panelChildren[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var child = _step.value;

	            child.updateSelfAndChildren(state);
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	      }
	    }
	  }, {
	    key: '_render',
	    value: function _render(state) {
	      if (this.shouldUpdate(state)) {
	        try {
	          this._rendered = this.getConfig('template')(Object.assign({}, state, {
	            $component: this,
	            $helpers: this.getConfig('helpers')
	          }));
	        } catch (e) {
	          this.logError('Error while rendering ' + this.toString(), this, e);
	        }
	      }
	      return this._rendered || EMPTY_DIV;
	    }
	  }, {
	    key: '_stateFromAttributes',
	    value: function _stateFromAttributes() {
	      var state = {};

	      // this.attributes is a NamedNodeMap, without normal iterators
	      for (var ai = 0; ai < this.attributes.length; ai++) {
	        var attr = this.attributes[ai];
	        var attrMatch = attr.name.match(/^state-(.+)/);
	        if (attrMatch) {
	          var num = Number(attr.value);
	          state[attrMatch[1]] = isNaN(num) ? attr.value : num;
	        }
	      }

	      return state;
	    }
	  }, {
	    key: 'config',


	    /**
	     * Defines standard component configuration.
	     * @type {object}
	     * @property {function} template - function transforming state object to virtual-dom tree
	     * @property {object} [helpers={}] - properties and functions injected automatically into template state object
	     * @property {object} [routes={}] - object mapping string route expressions to handler functions
	     * @property {boolean} [useShadowDom=false] - whether to use Shadow DOM
	     * @property {string} [css=''] - component-specific Shadow DOM stylesheet
	     * @example
	     * get config() {
	     *   return {
	     *     template: state => h('.name', `My name is ${name}`),
	     *     routes: {
	     *       'wombat/:wombatId': (stateUpdate={}, wombatId) => {
	     *         // route handler implementation
	     *       },
	     *     },
	     *   };
	     * }
	     */
	    get: function get() {
	      return {};
	    }
	  }]);

	  return Component;
	}(_webcomponent2.default);

	exports.default = Component;

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	var raf = __webpack_require__(302)
	var TypedError = __webpack_require__(304)

	var InvalidUpdateInRender = TypedError({
	    type: "main-loop.invalid.update.in-render",
	    message: "main-loop: Unexpected update occurred in loop.\n" +
	        "We are currently rendering a view, " +
	            "you can't change state right now.\n" +
	        "The diff is: {stringDiff}.\n" +
	        "SUGGESTED FIX: find the state mutation in your view " +
	            "or rendering function and remove it.\n" +
	        "The view should not have any side effects.\n",
	    diff: null,
	    stringDiff: null
	})

	module.exports = main

	function main(initialState, view, opts) {
	    opts = opts || {}

	    var currentState = initialState
	    var create = opts.create
	    var diff = opts.diff
	    var patch = opts.patch
	    var redrawScheduled = false

	    var tree = opts.initialTree || view(currentState)
	    var target = opts.target || create(tree, opts)
	    var inRenderingTransaction = false

	    currentState = null

	    var loop = {
	        state: initialState,
	        target: target,
	        update: update
	    }
	    return loop

	    function update(state) {
	        if (inRenderingTransaction) {
	            throw InvalidUpdateInRender({
	                diff: state._diff,
	                stringDiff: JSON.stringify(state._diff)
	            })
	        }

	        if (currentState === null && !redrawScheduled) {
	            redrawScheduled = true
	            raf(redraw)
	        }

	        currentState = state
	        loop.state = state
	    }

	    function redraw() {
	        redrawScheduled = false
	        if (currentState === null) {
	            return
	        }

	        inRenderingTransaction = true
	        var newTree = view(currentState)

	        if (opts.createOnly) {
	            inRenderingTransaction = false
	            create(newTree, opts)
	        } else {
	            var patches = diff(tree, newTree, opts)
	            inRenderingTransaction = false
	            target = patch(target, patches, opts)
	        }

	        tree = newTree
	        currentState = null
	    }
	}


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	var now = __webpack_require__(303)
	  , global = typeof window === 'undefined' ? {} : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = global['request' + suffix]
	  , caf = global['cancel' + suffix] || global['cancelRequest' + suffix]
	  , isNative = true

	for(var i = 0; i < vendors.length && !raf; i++) {
	  raf = global[vendors[i] + 'Request' + suffix]
	  caf = global[vendors[i] + 'Cancel' + suffix]
	      || global[vendors[i] + 'CancelRequest' + suffix]
	}

	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  isNative = false

	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60

	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }

	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}

	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  if(!isNative) {
	    return raf.call(global, fn)
	  }
	  return raf.call(global, function() {
	    try{
	      fn.apply(this, arguments)
	    } catch(e) {
	      setTimeout(function() { throw e }, 0)
	    }
	  })
	}
	module.exports.cancel = function() {
	  caf.apply(global, arguments)
	}


/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.6.3
	(function() {
	  var getNanoSeconds, hrtime, loadTime;

	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }

	}).call(this);

	/*
	//@ sourceMappingURL=performance-now.map
	*/

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	var camelize = __webpack_require__(305)
	var template = __webpack_require__(306)
	var extend = __webpack_require__(307)

	module.exports = TypedError

	function TypedError(args) {
	    if (!args) {
	        throw new Error("args is required");
	    }
	    if (!args.type) {
	        throw new Error("args.type is required");
	    }
	    if (!args.message) {
	        throw new Error("args.message is required");
	    }

	    var message = args.message

	    if (args.type && !args.name) {
	        var errorName = camelize(args.type) + "Error"
	        args.name = errorName[0].toUpperCase() + errorName.substr(1)
	    }

	    extend(createError, args);
	    createError._name = args.name;

	    return createError;

	    function createError(opts) {
	        var result = new Error()

	        Object.defineProperty(result, "type", {
	            value: result.type,
	            enumerable: true,
	            writable: true,
	            configurable: true
	        })

	        var options = extend({}, args, opts)

	        extend(result, options)
	        result.message = template(message, options)

	        return result
	    }
	}



/***/ },
/* 305 */
/***/ function(module, exports) {

	module.exports = function(obj) {
	    if (typeof obj === 'string') return camelCase(obj);
	    return walk(obj);
	};

	function walk (obj) {
	    if (!obj || typeof obj !== 'object') return obj;
	    if (isDate(obj) || isRegex(obj)) return obj;
	    if (isArray(obj)) return map(obj, walk);
	    return reduce(objectKeys(obj), function (acc, key) {
	        var camel = camelCase(key);
	        acc[camel] = walk(obj[key]);
	        return acc;
	    }, {});
	}

	function camelCase(str) {
	    return str.replace(/[_.-](\w|$)/g, function (_,x) {
	        return x.toUpperCase();
	    });
	}

	var isArray = Array.isArray || function (obj) {
	    return Object.prototype.toString.call(obj) === '[object Array]';
	};

	var isDate = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object Date]';
	};

	var isRegex = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};

	var has = Object.prototype.hasOwnProperty;
	var objectKeys = Object.keys || function (obj) {
	    var keys = [];
	    for (var key in obj) {
	        if (has.call(obj, key)) keys.push(key);
	    }
	    return keys;
	};

	function map (xs, f) {
	    if (xs.map) return xs.map(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        res.push(f(xs[i], i));
	    }
	    return res;
	}

	function reduce (xs, f, acc) {
	    if (xs.reduce) return xs.reduce(f, acc);
	    for (var i = 0; i < xs.length; i++) {
	        acc = f(acc, xs[i], i);
	    }
	    return acc;
	}


/***/ },
/* 306 */
/***/ function(module, exports) {

	var nargs = /\{([0-9a-zA-Z]+)\}/g
	var slice = Array.prototype.slice

	module.exports = template

	function template(string) {
	    var args

	    if (arguments.length === 2 && typeof arguments[1] === "object") {
	        args = arguments[1]
	    } else {
	        args = slice.call(arguments, 1)
	    }

	    if (!args || !args.hasOwnProperty) {
	        args = {}
	    }

	    return string.replace(nargs, function replaceArg(match, i, index) {
	        var result

	        if (string[index - 1] === "{" &&
	            string[index + match.length] === "}") {
	            return i
	        } else {
	            result = args.hasOwnProperty(i) ? args[i] : null
	            if (result === null || result === undefined) {
	                return ""
	            }

	            return result
	        }
	    })
	}


/***/ },
/* 307 */
/***/ function(module, exports) {

	module.exports = extend

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	function extend(target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i]

	        for (var key in source) {
	            if (hasOwnProperty.call(source, key)) {
	                target[key] = source[key]
	            }
	        }
	    }

	    return target
	}


/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	var createElement = __webpack_require__(309)

	module.exports = createElement


/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	var document = __webpack_require__(310)

	var applyProperties = __webpack_require__(312)

	var isVNode = __webpack_require__(315)
	var isVText = __webpack_require__(317)
	var isWidget = __webpack_require__(318)
	var handleThunk = __webpack_require__(319)

	module.exports = createElement

	function createElement(vnode, opts) {
	    var doc = opts ? opts.document || document : document
	    var warn = opts ? opts.warn : null

	    vnode = handleThunk(vnode).a

	    if (isWidget(vnode)) {
	        return vnode.init()
	    } else if (isVText(vnode)) {
	        return doc.createTextNode(vnode.text)
	    } else if (!isVNode(vnode)) {
	        if (warn) {
	            warn("Item is not a valid virtual dom node", vnode)
	        }
	        return null
	    }

	    var node = (vnode.namespace === null) ?
	        doc.createElement(vnode.tagName) :
	        doc.createElementNS(vnode.namespace, vnode.tagName)

	    var props = vnode.properties
	    applyProperties(node, props)

	    var children = vnode.children

	    for (var i = 0; i < children.length; i++) {
	        var childNode = createElement(children[i], opts)
	        if (childNode) {
	            node.appendChild(childNode)
	        }
	    }

	    return node
	}


/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var topLevel = typeof global !== 'undefined' ? global :
	    typeof window !== 'undefined' ? window : {}
	var minDoc = __webpack_require__(311);

	if (typeof document !== 'undefined') {
	    module.exports = document;
	} else {
	    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

	    if (!doccy) {
	        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
	    }

	    module.exports = doccy;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 311 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(313)
	var isHook = __webpack_require__(314)

	module.exports = applyProperties

	function applyProperties(node, props, previous) {
	    for (var propName in props) {
	        var propValue = props[propName]

	        if (propValue === undefined) {
	            removeProperty(node, propName, propValue, previous);
	        } else if (isHook(propValue)) {
	            removeProperty(node, propName, propValue, previous)
	            if (propValue.hook) {
	                propValue.hook(node,
	                    propName,
	                    previous ? previous[propName] : undefined)
	            }
	        } else {
	            if (isObject(propValue)) {
	                patchObject(node, props, previous, propName, propValue);
	            } else {
	                node[propName] = propValue
	            }
	        }
	    }
	}

	function removeProperty(node, propName, propValue, previous) {
	    if (previous) {
	        var previousValue = previous[propName]

	        if (!isHook(previousValue)) {
	            if (propName === "attributes") {
	                for (var attrName in previousValue) {
	                    node.removeAttribute(attrName)
	                }
	            } else if (propName === "style") {
	                for (var i in previousValue) {
	                    node.style[i] = ""
	                }
	            } else if (typeof previousValue === "string") {
	                node[propName] = ""
	            } else {
	                node[propName] = null
	            }
	        } else if (previousValue.unhook) {
	            previousValue.unhook(node, propName, propValue)
	        }
	    }
	}

	function patchObject(node, props, previous, propName, propValue) {
	    var previousValue = previous ? previous[propName] : undefined

	    // Set attributes
	    if (propName === "attributes") {
	        for (var attrName in propValue) {
	            var attrValue = propValue[attrName]

	            if (attrValue === undefined) {
	                node.removeAttribute(attrName)
	            } else {
	                node.setAttribute(attrName, attrValue)
	            }
	        }

	        return
	    }

	    if(previousValue && isObject(previousValue) &&
	        getPrototype(previousValue) !== getPrototype(propValue)) {
	        node[propName] = propValue
	        return
	    }

	    if (!isObject(node[propName])) {
	        node[propName] = {}
	    }

	    var replacer = propName === "style" ? "" : undefined

	    for (var k in propValue) {
	        var value = propValue[k]
	        node[propName][k] = (value === undefined) ? replacer : value
	    }
	}

	function getPrototype(value) {
	    if (Object.getPrototypeOf) {
	        return Object.getPrototypeOf(value)
	    } else if (value.__proto__) {
	        return value.__proto__
	    } else if (value.constructor) {
	        return value.constructor.prototype
	    }
	}


/***/ },
/* 313 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function isObject(x) {
		return typeof x === "object" && x !== null;
	};


/***/ },
/* 314 */
/***/ function(module, exports) {

	module.exports = isHook

	function isHook(hook) {
	    return hook &&
	      (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") ||
	       typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"))
	}


/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(316)

	module.exports = isVirtualNode

	function isVirtualNode(x) {
	    return x && x.type === "VirtualNode" && x.version === version
	}


/***/ },
/* 316 */
/***/ function(module, exports) {

	module.exports = "2"


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(316)

	module.exports = isVirtualText

	function isVirtualText(x) {
	    return x && x.type === "VirtualText" && x.version === version
	}


/***/ },
/* 318 */
/***/ function(module, exports) {

	module.exports = isWidget

	function isWidget(w) {
	    return w && w.type === "Widget"
	}


/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	var isVNode = __webpack_require__(315)
	var isVText = __webpack_require__(317)
	var isWidget = __webpack_require__(318)
	var isThunk = __webpack_require__(320)

	module.exports = handleThunk

	function handleThunk(a, b) {
	    var renderedA = a
	    var renderedB = b

	    if (isThunk(b)) {
	        renderedB = renderThunk(b, a)
	    }

	    if (isThunk(a)) {
	        renderedA = renderThunk(a, null)
	    }

	    return {
	        a: renderedA,
	        b: renderedB
	    }
	}

	function renderThunk(thunk, previous) {
	    var renderedThunk = thunk.vnode

	    if (!renderedThunk) {
	        renderedThunk = thunk.vnode = thunk.render(previous)
	    }

	    if (!(isVNode(renderedThunk) ||
	            isVText(renderedThunk) ||
	            isWidget(renderedThunk))) {
	        throw new Error("thunk did not return a valid node");
	    }

	    return renderedThunk
	}


/***/ },
/* 320 */
/***/ function(module, exports) {

	module.exports = isThunk

	function isThunk(t) {
	    return t && t.type === "Thunk"
	}


/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	var diff = __webpack_require__(322)

	module.exports = diff


/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(323)

	var VPatch = __webpack_require__(324)
	var isVNode = __webpack_require__(315)
	var isVText = __webpack_require__(317)
	var isWidget = __webpack_require__(318)
	var isThunk = __webpack_require__(320)
	var handleThunk = __webpack_require__(319)

	var diffProps = __webpack_require__(325)

	module.exports = diff

	function diff(a, b) {
	    var patch = { a: a }
	    walk(a, b, patch, 0)
	    return patch
	}

	function walk(a, b, patch, index) {
	    if (a === b) {
	        return
	    }

	    var apply = patch[index]
	    var applyClear = false

	    if (isThunk(a) || isThunk(b)) {
	        thunks(a, b, patch, index)
	    } else if (b == null) {

	        // If a is a widget we will add a remove patch for it
	        // Otherwise any child widgets/hooks must be destroyed.
	        // This prevents adding two remove patches for a widget.
	        if (!isWidget(a)) {
	            clearState(a, patch, index)
	            apply = patch[index]
	        }

	        apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b))
	    } else if (isVNode(b)) {
	        if (isVNode(a)) {
	            if (a.tagName === b.tagName &&
	                a.namespace === b.namespace &&
	                a.key === b.key) {
	                var propsPatch = diffProps(a.properties, b.properties)
	                if (propsPatch) {
	                    apply = appendPatch(apply,
	                        new VPatch(VPatch.PROPS, a, propsPatch))
	                }
	                apply = diffChildren(a, b, patch, apply, index)
	            } else {
	                apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
	                applyClear = true
	            }
	        } else {
	            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
	            applyClear = true
	        }
	    } else if (isVText(b)) {
	        if (!isVText(a)) {
	            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
	            applyClear = true
	        } else if (a.text !== b.text) {
	            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
	        }
	    } else if (isWidget(b)) {
	        if (!isWidget(a)) {
	            applyClear = true
	        }

	        apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b))
	    }

	    if (apply) {
	        patch[index] = apply
	    }

	    if (applyClear) {
	        clearState(a, patch, index)
	    }
	}

	function diffChildren(a, b, patch, apply, index) {
	    var aChildren = a.children
	    var orderedSet = reorder(aChildren, b.children)
	    var bChildren = orderedSet.children

	    var aLen = aChildren.length
	    var bLen = bChildren.length
	    var len = aLen > bLen ? aLen : bLen

	    for (var i = 0; i < len; i++) {
	        var leftNode = aChildren[i]
	        var rightNode = bChildren[i]
	        index += 1

	        if (!leftNode) {
	            if (rightNode) {
	                // Excess nodes in b need to be added
	                apply = appendPatch(apply,
	                    new VPatch(VPatch.INSERT, null, rightNode))
	            }
	        } else {
	            walk(leftNode, rightNode, patch, index)
	        }

	        if (isVNode(leftNode) && leftNode.count) {
	            index += leftNode.count
	        }
	    }

	    if (orderedSet.moves) {
	        // Reorder nodes last
	        apply = appendPatch(apply, new VPatch(
	            VPatch.ORDER,
	            a,
	            orderedSet.moves
	        ))
	    }

	    return apply
	}

	function clearState(vNode, patch, index) {
	    // TODO: Make this a single walk, not two
	    unhook(vNode, patch, index)
	    destroyWidgets(vNode, patch, index)
	}

	// Patch records for all destroyed widgets must be added because we need
	// a DOM node reference for the destroy function
	function destroyWidgets(vNode, patch, index) {
	    if (isWidget(vNode)) {
	        if (typeof vNode.destroy === "function") {
	            patch[index] = appendPatch(
	                patch[index],
	                new VPatch(VPatch.REMOVE, vNode, null)
	            )
	        }
	    } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
	        var children = vNode.children
	        var len = children.length
	        for (var i = 0; i < len; i++) {
	            var child = children[i]
	            index += 1

	            destroyWidgets(child, patch, index)

	            if (isVNode(child) && child.count) {
	                index += child.count
	            }
	        }
	    } else if (isThunk(vNode)) {
	        thunks(vNode, null, patch, index)
	    }
	}

	// Create a sub-patch for thunks
	function thunks(a, b, patch, index) {
	    var nodes = handleThunk(a, b)
	    var thunkPatch = diff(nodes.a, nodes.b)
	    if (hasPatches(thunkPatch)) {
	        patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch)
	    }
	}

	function hasPatches(patch) {
	    for (var index in patch) {
	        if (index !== "a") {
	            return true
	        }
	    }

	    return false
	}

	// Execute hooks when two nodes are identical
	function unhook(vNode, patch, index) {
	    if (isVNode(vNode)) {
	        if (vNode.hooks) {
	            patch[index] = appendPatch(
	                patch[index],
	                new VPatch(
	                    VPatch.PROPS,
	                    vNode,
	                    undefinedKeys(vNode.hooks)
	                )
	            )
	        }

	        if (vNode.descendantHooks || vNode.hasThunks) {
	            var children = vNode.children
	            var len = children.length
	            for (var i = 0; i < len; i++) {
	                var child = children[i]
	                index += 1

	                unhook(child, patch, index)

	                if (isVNode(child) && child.count) {
	                    index += child.count
	                }
	            }
	        }
	    } else if (isThunk(vNode)) {
	        thunks(vNode, null, patch, index)
	    }
	}

	function undefinedKeys(obj) {
	    var result = {}

	    for (var key in obj) {
	        result[key] = undefined
	    }

	    return result
	}

	// List diff, naive left to right reordering
	function reorder(aChildren, bChildren) {
	    // O(M) time, O(M) memory
	    var bChildIndex = keyIndex(bChildren)
	    var bKeys = bChildIndex.keys
	    var bFree = bChildIndex.free

	    if (bFree.length === bChildren.length) {
	        return {
	            children: bChildren,
	            moves: null
	        }
	    }

	    // O(N) time, O(N) memory
	    var aChildIndex = keyIndex(aChildren)
	    var aKeys = aChildIndex.keys
	    var aFree = aChildIndex.free

	    if (aFree.length === aChildren.length) {
	        return {
	            children: bChildren,
	            moves: null
	        }
	    }

	    // O(MAX(N, M)) memory
	    var newChildren = []

	    var freeIndex = 0
	    var freeCount = bFree.length
	    var deletedItems = 0

	    // Iterate through a and match a node in b
	    // O(N) time,
	    for (var i = 0 ; i < aChildren.length; i++) {
	        var aItem = aChildren[i]
	        var itemIndex

	        if (aItem.key) {
	            if (bKeys.hasOwnProperty(aItem.key)) {
	                // Match up the old keys
	                itemIndex = bKeys[aItem.key]
	                newChildren.push(bChildren[itemIndex])

	            } else {
	                // Remove old keyed items
	                itemIndex = i - deletedItems++
	                newChildren.push(null)
	            }
	        } else {
	            // Match the item in a with the next free item in b
	            if (freeIndex < freeCount) {
	                itemIndex = bFree[freeIndex++]
	                newChildren.push(bChildren[itemIndex])
	            } else {
	                // There are no free items in b to match with
	                // the free items in a, so the extra free nodes
	                // are deleted.
	                itemIndex = i - deletedItems++
	                newChildren.push(null)
	            }
	        }
	    }

	    var lastFreeIndex = freeIndex >= bFree.length ?
	        bChildren.length :
	        bFree[freeIndex]

	    // Iterate through b and append any new keys
	    // O(M) time
	    for (var j = 0; j < bChildren.length; j++) {
	        var newItem = bChildren[j]

	        if (newItem.key) {
	            if (!aKeys.hasOwnProperty(newItem.key)) {
	                // Add any new keyed items
	                // We are adding new items to the end and then sorting them
	                // in place. In future we should insert new items in place.
	                newChildren.push(newItem)
	            }
	        } else if (j >= lastFreeIndex) {
	            // Add any leftover non-keyed items
	            newChildren.push(newItem)
	        }
	    }

	    var simulate = newChildren.slice()
	    var simulateIndex = 0
	    var removes = []
	    var inserts = []
	    var simulateItem

	    for (var k = 0; k < bChildren.length;) {
	        var wantedItem = bChildren[k]
	        simulateItem = simulate[simulateIndex]

	        // remove items
	        while (simulateItem === null && simulate.length) {
	            removes.push(remove(simulate, simulateIndex, null))
	            simulateItem = simulate[simulateIndex]
	        }

	        if (!simulateItem || simulateItem.key !== wantedItem.key) {
	            // if we need a key in this position...
	            if (wantedItem.key) {
	                if (simulateItem && simulateItem.key) {
	                    // if an insert doesn't put this key in place, it needs to move
	                    if (bKeys[simulateItem.key] !== k + 1) {
	                        removes.push(remove(simulate, simulateIndex, simulateItem.key))
	                        simulateItem = simulate[simulateIndex]
	                        // if the remove didn't put the wanted item in place, we need to insert it
	                        if (!simulateItem || simulateItem.key !== wantedItem.key) {
	                            inserts.push({key: wantedItem.key, to: k})
	                        }
	                        // items are matching, so skip ahead
	                        else {
	                            simulateIndex++
	                        }
	                    }
	                    else {
	                        inserts.push({key: wantedItem.key, to: k})
	                    }
	                }
	                else {
	                    inserts.push({key: wantedItem.key, to: k})
	                }
	                k++
	            }
	            // a key in simulate has no matching wanted key, remove it
	            else if (simulateItem && simulateItem.key) {
	                removes.push(remove(simulate, simulateIndex, simulateItem.key))
	            }
	        }
	        else {
	            simulateIndex++
	            k++
	        }
	    }

	    // remove all the remaining nodes from simulate
	    while(simulateIndex < simulate.length) {
	        simulateItem = simulate[simulateIndex]
	        removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key))
	    }

	    // If the only moves we have are deletes then we can just
	    // let the delete patch remove these items.
	    if (removes.length === deletedItems && !inserts.length) {
	        return {
	            children: newChildren,
	            moves: null
	        }
	    }

	    return {
	        children: newChildren,
	        moves: {
	            removes: removes,
	            inserts: inserts
	        }
	    }
	}

	function remove(arr, index, key) {
	    arr.splice(index, 1)

	    return {
	        from: index,
	        key: key
	    }
	}

	function keyIndex(children) {
	    var keys = {}
	    var free = []
	    var length = children.length

	    for (var i = 0; i < length; i++) {
	        var child = children[i]

	        if (child.key) {
	            keys[child.key] = i
	        } else {
	            free.push(i)
	        }
	    }

	    return {
	        keys: keys,     // A hash of key name to index
	        free: free      // An array of unkeyed item indices
	    }
	}

	function appendPatch(apply, patch) {
	    if (apply) {
	        if (isArray(apply)) {
	            apply.push(patch)
	        } else {
	            apply = [apply, patch]
	        }

	        return apply
	    } else {
	        return patch
	    }
	}


/***/ },
/* 323 */
/***/ function(module, exports) {

	var nativeIsArray = Array.isArray
	var toString = Object.prototype.toString

	module.exports = nativeIsArray || isArray

	function isArray(obj) {
	    return toString.call(obj) === "[object Array]"
	}


/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(316)

	VirtualPatch.NONE = 0
	VirtualPatch.VTEXT = 1
	VirtualPatch.VNODE = 2
	VirtualPatch.WIDGET = 3
	VirtualPatch.PROPS = 4
	VirtualPatch.ORDER = 5
	VirtualPatch.INSERT = 6
	VirtualPatch.REMOVE = 7
	VirtualPatch.THUNK = 8

	module.exports = VirtualPatch

	function VirtualPatch(type, vNode, patch) {
	    this.type = Number(type)
	    this.vNode = vNode
	    this.patch = patch
	}

	VirtualPatch.prototype.version = version
	VirtualPatch.prototype.type = "VirtualPatch"


/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(313)
	var isHook = __webpack_require__(314)

	module.exports = diffProps

	function diffProps(a, b) {
	    var diff

	    for (var aKey in a) {
	        if (!(aKey in b)) {
	            diff = diff || {}
	            diff[aKey] = undefined
	        }

	        var aValue = a[aKey]
	        var bValue = b[aKey]

	        if (aValue === bValue) {
	            continue
	        } else if (isObject(aValue) && isObject(bValue)) {
	            if (getPrototype(bValue) !== getPrototype(aValue)) {
	                diff = diff || {}
	                diff[aKey] = bValue
	            } else if (isHook(bValue)) {
	                 diff = diff || {}
	                 diff[aKey] = bValue
	            } else {
	                var objectDiff = diffProps(aValue, bValue)
	                if (objectDiff) {
	                    diff = diff || {}
	                    diff[aKey] = objectDiff
	                }
	            }
	        } else {
	            diff = diff || {}
	            diff[aKey] = bValue
	        }
	    }

	    for (var bKey in b) {
	        if (!(bKey in a)) {
	            diff = diff || {}
	            diff[bKey] = b[bKey]
	        }
	    }

	    return diff
	}

	function getPrototype(value) {
	  if (Object.getPrototypeOf) {
	    return Object.getPrototypeOf(value)
	  } else if (value.__proto__) {
	    return value.__proto__
	  } else if (value.constructor) {
	    return value.constructor.prototype
	  }
	}


/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	var patch = __webpack_require__(327)

	module.exports = patch


/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	var document = __webpack_require__(310)
	var isArray = __webpack_require__(323)

	var render = __webpack_require__(309)
	var domIndex = __webpack_require__(328)
	var patchOp = __webpack_require__(329)
	module.exports = patch

	function patch(rootNode, patches, renderOptions) {
	    renderOptions = renderOptions || {}
	    renderOptions.patch = renderOptions.patch && renderOptions.patch !== patch
	        ? renderOptions.patch
	        : patchRecursive
	    renderOptions.render = renderOptions.render || render

	    return renderOptions.patch(rootNode, patches, renderOptions)
	}

	function patchRecursive(rootNode, patches, renderOptions) {
	    var indices = patchIndices(patches)

	    if (indices.length === 0) {
	        return rootNode
	    }

	    var index = domIndex(rootNode, patches.a, indices)
	    var ownerDocument = rootNode.ownerDocument

	    if (!renderOptions.document && ownerDocument !== document) {
	        renderOptions.document = ownerDocument
	    }

	    for (var i = 0; i < indices.length; i++) {
	        var nodeIndex = indices[i]
	        rootNode = applyPatch(rootNode,
	            index[nodeIndex],
	            patches[nodeIndex],
	            renderOptions)
	    }

	    return rootNode
	}

	function applyPatch(rootNode, domNode, patchList, renderOptions) {
	    if (!domNode) {
	        return rootNode
	    }

	    var newNode

	    if (isArray(patchList)) {
	        for (var i = 0; i < patchList.length; i++) {
	            newNode = patchOp(patchList[i], domNode, renderOptions)

	            if (domNode === rootNode) {
	                rootNode = newNode
	            }
	        }
	    } else {
	        newNode = patchOp(patchList, domNode, renderOptions)

	        if (domNode === rootNode) {
	            rootNode = newNode
	        }
	    }

	    return rootNode
	}

	function patchIndices(patches) {
	    var indices = []

	    for (var key in patches) {
	        if (key !== "a") {
	            indices.push(Number(key))
	        }
	    }

	    return indices
	}


/***/ },
/* 328 */
/***/ function(module, exports) {

	// Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
	// We don't want to read all of the DOM nodes in the tree so we use
	// the in-order tree indexing to eliminate recursion down certain branches.
	// We only recurse into a DOM node if we know that it contains a child of
	// interest.

	var noChild = {}

	module.exports = domIndex

	function domIndex(rootNode, tree, indices, nodes) {
	    if (!indices || indices.length === 0) {
	        return {}
	    } else {
	        indices.sort(ascending)
	        return recurse(rootNode, tree, indices, nodes, 0)
	    }
	}

	function recurse(rootNode, tree, indices, nodes, rootIndex) {
	    nodes = nodes || {}


	    if (rootNode) {
	        if (indexInRange(indices, rootIndex, rootIndex)) {
	            nodes[rootIndex] = rootNode
	        }

	        var vChildren = tree.children

	        if (vChildren) {

	            var childNodes = rootNode.childNodes

	            for (var i = 0; i < tree.children.length; i++) {
	                rootIndex += 1

	                var vChild = vChildren[i] || noChild
	                var nextIndex = rootIndex + (vChild.count || 0)

	                // skip recursion down the tree if there are no nodes down here
	                if (indexInRange(indices, rootIndex, nextIndex)) {
	                    recurse(childNodes[i], vChild, indices, nodes, rootIndex)
	                }

	                rootIndex = nextIndex
	            }
	        }
	    }

	    return nodes
	}

	// Binary search for an index in the interval [left, right]
	function indexInRange(indices, left, right) {
	    if (indices.length === 0) {
	        return false
	    }

	    var minIndex = 0
	    var maxIndex = indices.length - 1
	    var currentIndex
	    var currentItem

	    while (minIndex <= maxIndex) {
	        currentIndex = ((maxIndex + minIndex) / 2) >> 0
	        currentItem = indices[currentIndex]

	        if (minIndex === maxIndex) {
	            return currentItem >= left && currentItem <= right
	        } else if (currentItem < left) {
	            minIndex = currentIndex + 1
	        } else  if (currentItem > right) {
	            maxIndex = currentIndex - 1
	        } else {
	            return true
	        }
	    }

	    return false;
	}

	function ascending(a, b) {
	    return a > b ? 1 : -1
	}


/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	var applyProperties = __webpack_require__(312)

	var isWidget = __webpack_require__(318)
	var VPatch = __webpack_require__(324)

	var updateWidget = __webpack_require__(330)

	module.exports = applyPatch

	function applyPatch(vpatch, domNode, renderOptions) {
	    var type = vpatch.type
	    var vNode = vpatch.vNode
	    var patch = vpatch.patch

	    switch (type) {
	        case VPatch.REMOVE:
	            return removeNode(domNode, vNode)
	        case VPatch.INSERT:
	            return insertNode(domNode, patch, renderOptions)
	        case VPatch.VTEXT:
	            return stringPatch(domNode, vNode, patch, renderOptions)
	        case VPatch.WIDGET:
	            return widgetPatch(domNode, vNode, patch, renderOptions)
	        case VPatch.VNODE:
	            return vNodePatch(domNode, vNode, patch, renderOptions)
	        case VPatch.ORDER:
	            reorderChildren(domNode, patch)
	            return domNode
	        case VPatch.PROPS:
	            applyProperties(domNode, patch, vNode.properties)
	            return domNode
	        case VPatch.THUNK:
	            return replaceRoot(domNode,
	                renderOptions.patch(domNode, patch, renderOptions))
	        default:
	            return domNode
	    }
	}

	function removeNode(domNode, vNode) {
	    var parentNode = domNode.parentNode

	    if (parentNode) {
	        parentNode.removeChild(domNode)
	    }

	    destroyWidget(domNode, vNode);

	    return null
	}

	function insertNode(parentNode, vNode, renderOptions) {
	    var newNode = renderOptions.render(vNode, renderOptions)

	    if (parentNode) {
	        parentNode.appendChild(newNode)
	    }

	    return parentNode
	}

	function stringPatch(domNode, leftVNode, vText, renderOptions) {
	    var newNode

	    if (domNode.nodeType === 3) {
	        domNode.replaceData(0, domNode.length, vText.text)
	        newNode = domNode
	    } else {
	        var parentNode = domNode.parentNode
	        newNode = renderOptions.render(vText, renderOptions)

	        if (parentNode && newNode !== domNode) {
	            parentNode.replaceChild(newNode, domNode)
	        }
	    }

	    return newNode
	}

	function widgetPatch(domNode, leftVNode, widget, renderOptions) {
	    var updating = updateWidget(leftVNode, widget)
	    var newNode

	    if (updating) {
	        newNode = widget.update(leftVNode, domNode) || domNode
	    } else {
	        newNode = renderOptions.render(widget, renderOptions)
	    }

	    var parentNode = domNode.parentNode

	    if (parentNode && newNode !== domNode) {
	        parentNode.replaceChild(newNode, domNode)
	    }

	    if (!updating) {
	        destroyWidget(domNode, leftVNode)
	    }

	    return newNode
	}

	function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
	    var parentNode = domNode.parentNode
	    var newNode = renderOptions.render(vNode, renderOptions)

	    if (parentNode && newNode !== domNode) {
	        parentNode.replaceChild(newNode, domNode)
	    }

	    return newNode
	}

	function destroyWidget(domNode, w) {
	    if (typeof w.destroy === "function" && isWidget(w)) {
	        w.destroy(domNode)
	    }
	}

	function reorderChildren(domNode, moves) {
	    var childNodes = domNode.childNodes
	    var keyMap = {}
	    var node
	    var remove
	    var insert

	    for (var i = 0; i < moves.removes.length; i++) {
	        remove = moves.removes[i]
	        node = childNodes[remove.from]
	        if (remove.key) {
	            keyMap[remove.key] = node
	        }
	        domNode.removeChild(node)
	    }

	    var length = childNodes.length
	    for (var j = 0; j < moves.inserts.length; j++) {
	        insert = moves.inserts[j]
	        node = keyMap[insert.key]
	        // this is the weirdest bug i've ever seen in webkit
	        domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to])
	    }
	}

	function replaceRoot(oldRoot, newRoot) {
	    if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
	        oldRoot.parentNode.replaceChild(newRoot, oldRoot)
	    }

	    return newRoot;
	}


/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	var isWidget = __webpack_require__(318)

	module.exports = updateWidget

	function updateWidget(a, b) {
	    if (isWidget(a) && isWidget(b)) {
	        if ("name" in a && "name" in b) {
	            return a.id === b.id
	        } else {
	            return a.init === b.init
	        }
	    }

	    return false
	}


/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isArray = __webpack_require__(323);

	var VNode = __webpack_require__(332);
	var VText = __webpack_require__(333);
	var isVNode = __webpack_require__(315);
	var isVText = __webpack_require__(317);
	var isWidget = __webpack_require__(318);
	var isHook = __webpack_require__(314);
	var isVThunk = __webpack_require__(320);

	var parseTag = __webpack_require__(334);
	var softSetHook = __webpack_require__(336);
	var evHook = __webpack_require__(337);

	module.exports = h;

	function h(tagName, properties, children) {
	    var childNodes = [];
	    var tag, props, key, namespace;

	    if (!children && isChildren(properties)) {
	        children = properties;
	        props = {};
	    }

	    props = props || properties || {};
	    tag = parseTag(tagName, props);

	    // support keys
	    if (props.hasOwnProperty('key')) {
	        key = props.key;
	        props.key = undefined;
	    }

	    // support namespace
	    if (props.hasOwnProperty('namespace')) {
	        namespace = props.namespace;
	        props.namespace = undefined;
	    }

	    // fix cursor bug
	    if (tag === 'INPUT' &&
	        !namespace &&
	        props.hasOwnProperty('value') &&
	        props.value !== undefined &&
	        !isHook(props.value)
	    ) {
	        props.value = softSetHook(props.value);
	    }

	    transformProperties(props);

	    if (children !== undefined && children !== null) {
	        addChild(children, childNodes, tag, props);
	    }


	    return new VNode(tag, props, childNodes, key, namespace);
	}

	function addChild(c, childNodes, tag, props) {
	    if (typeof c === 'string') {
	        childNodes.push(new VText(c));
	    } else if (typeof c === 'number') {
	        childNodes.push(new VText(String(c)));
	    } else if (isChild(c)) {
	        childNodes.push(c);
	    } else if (isArray(c)) {
	        for (var i = 0; i < c.length; i++) {
	            addChild(c[i], childNodes, tag, props);
	        }
	    } else if (c === null || c === undefined) {
	        return;
	    } else {
	        throw UnexpectedVirtualElement({
	            foreignObject: c,
	            parentVnode: {
	                tagName: tag,
	                properties: props
	            }
	        });
	    }
	}

	function transformProperties(props) {
	    for (var propName in props) {
	        if (props.hasOwnProperty(propName)) {
	            var value = props[propName];

	            if (isHook(value)) {
	                continue;
	            }

	            if (propName.substr(0, 3) === 'ev-') {
	                // add ev-foo support
	                props[propName] = evHook(value);
	            }
	        }
	    }
	}

	function isChild(x) {
	    return isVNode(x) || isVText(x) || isWidget(x) || isVThunk(x);
	}

	function isChildren(x) {
	    return typeof x === 'string' || isArray(x) || isChild(x);
	}

	function UnexpectedVirtualElement(data) {
	    var err = new Error();

	    err.type = 'virtual-hyperscript.unexpected.virtual-element';
	    err.message = 'Unexpected virtual child passed to h().\n' +
	        'Expected a VNode / Vthunk / VWidget / string but:\n' +
	        'got:\n' +
	        errorString(data.foreignObject) +
	        '.\n' +
	        'The parent vnode is:\n' +
	        errorString(data.parentVnode)
	        '\n' +
	        'Suggested fix: change your `h(..., [ ... ])` callsite.';
	    err.foreignObject = data.foreignObject;
	    err.parentVnode = data.parentVnode;

	    return err;
	}

	function errorString(obj) {
	    try {
	        return JSON.stringify(obj, null, '    ');
	    } catch (e) {
	        return String(obj);
	    }
	}


/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(316)
	var isVNode = __webpack_require__(315)
	var isWidget = __webpack_require__(318)
	var isThunk = __webpack_require__(320)
	var isVHook = __webpack_require__(314)

	module.exports = VirtualNode

	var noProperties = {}
	var noChildren = []

	function VirtualNode(tagName, properties, children, key, namespace) {
	    this.tagName = tagName
	    this.properties = properties || noProperties
	    this.children = children || noChildren
	    this.key = key != null ? String(key) : undefined
	    this.namespace = (typeof namespace === "string") ? namespace : null

	    var count = (children && children.length) || 0
	    var descendants = 0
	    var hasWidgets = false
	    var hasThunks = false
	    var descendantHooks = false
	    var hooks

	    for (var propName in properties) {
	        if (properties.hasOwnProperty(propName)) {
	            var property = properties[propName]
	            if (isVHook(property) && property.unhook) {
	                if (!hooks) {
	                    hooks = {}
	                }

	                hooks[propName] = property
	            }
	        }
	    }

	    for (var i = 0; i < count; i++) {
	        var child = children[i]
	        if (isVNode(child)) {
	            descendants += child.count || 0

	            if (!hasWidgets && child.hasWidgets) {
	                hasWidgets = true
	            }

	            if (!hasThunks && child.hasThunks) {
	                hasThunks = true
	            }

	            if (!descendantHooks && (child.hooks || child.descendantHooks)) {
	                descendantHooks = true
	            }
	        } else if (!hasWidgets && isWidget(child)) {
	            if (typeof child.destroy === "function") {
	                hasWidgets = true
	            }
	        } else if (!hasThunks && isThunk(child)) {
	            hasThunks = true;
	        }
	    }

	    this.count = count + descendants
	    this.hasWidgets = hasWidgets
	    this.hasThunks = hasThunks
	    this.hooks = hooks
	    this.descendantHooks = descendantHooks
	}

	VirtualNode.prototype.version = version
	VirtualNode.prototype.type = "VirtualNode"


/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(316)

	module.exports = VirtualText

	function VirtualText(text) {
	    this.text = String(text)
	}

	VirtualText.prototype.version = version
	VirtualText.prototype.type = "VirtualText"


/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var split = __webpack_require__(335);

	var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
	var notClassId = /^\.|#/;

	module.exports = parseTag;

	function parseTag(tag, props) {
	    if (!tag) {
	        return 'DIV';
	    }

	    var noId = !(props.hasOwnProperty('id'));

	    var tagParts = split(tag, classIdSplit);
	    var tagName = null;

	    if (notClassId.test(tagParts[1])) {
	        tagName = 'DIV';
	    }

	    var classes, part, type, i;

	    for (i = 0; i < tagParts.length; i++) {
	        part = tagParts[i];

	        if (!part) {
	            continue;
	        }

	        type = part.charAt(0);

	        if (!tagName) {
	            tagName = part;
	        } else if (type === '.') {
	            classes = classes || [];
	            classes.push(part.substring(1, part.length));
	        } else if (type === '#' && noId) {
	            props.id = part.substring(1, part.length);
	        }
	    }

	    if (classes) {
	        if (props.className) {
	            classes.push(props.className);
	        }

	        props.className = classes.join(' ');
	    }

	    return props.namespace ? tagName : tagName.toUpperCase();
	}


/***/ },
/* 335 */
/***/ function(module, exports) {

	/*!
	 * Cross-Browser Split 1.1.1
	 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
	 * Available under the MIT License
	 * ECMAScript compliant, uniform cross-browser split method
	 */

	/**
	 * Splits a string into an array of strings using a regex or string separator. Matches of the
	 * separator are not included in the result array. However, if `separator` is a regex that contains
	 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
	 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
	 * cross-browser.
	 * @param {String} str String to split.
	 * @param {RegExp|String} separator Regex or string to use for separating the string.
	 * @param {Number} [limit] Maximum number of items to include in the result array.
	 * @returns {Array} Array of substrings.
	 * @example
	 *
	 * // Basic use
	 * split('a b c d', ' ');
	 * // -> ['a', 'b', 'c', 'd']
	 *
	 * // With limit
	 * split('a b c d', ' ', 2);
	 * // -> ['a', 'b']
	 *
	 * // Backreferences in result array
	 * split('..word1 word2..', /([a-z]+)(\d+)/i);
	 * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
	 */
	module.exports = (function split(undef) {

	  var nativeSplit = String.prototype.split,
	    compliantExecNpcg = /()??/.exec("")[1] === undef,
	    // NPCG: nonparticipating capturing group
	    self;

	  self = function(str, separator, limit) {
	    // If `separator` is not a regex, use `nativeSplit`
	    if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
	      return nativeSplit.call(str, separator, limit);
	    }
	    var output = [],
	      flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + // Proposed for ES6
	      (separator.sticky ? "y" : ""),
	      // Firefox 3+
	      lastLastIndex = 0,
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      separator = new RegExp(separator.source, flags + "g"),
	      separator2, match, lastIndex, lastLength;
	    str += ""; // Type-convert
	    if (!compliantExecNpcg) {
	      // Doesn't need flags gy, but they don't hurt
	      separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
	    }
	    /* Values for `limit`, per the spec:
	     * If undefined: 4294967295 // Math.pow(2, 32) - 1
	     * If 0, Infinity, or NaN: 0
	     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
	     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
	     * If other: Type-convert, then use the above rules
	     */
	    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
	    limit >>> 0; // ToUint32(limit)
	    while (match = separator.exec(str)) {
	      // `separator.lastIndex` is not reliable cross-browser
	      lastIndex = match.index + match[0].length;
	      if (lastIndex > lastLastIndex) {
	        output.push(str.slice(lastLastIndex, match.index));
	        // Fix browsers whose `exec` methods don't consistently return `undefined` for
	        // nonparticipating capturing groups
	        if (!compliantExecNpcg && match.length > 1) {
	          match[0].replace(separator2, function() {
	            for (var i = 1; i < arguments.length - 2; i++) {
	              if (arguments[i] === undef) {
	                match[i] = undef;
	              }
	            }
	          });
	        }
	        if (match.length > 1 && match.index < str.length) {
	          Array.prototype.push.apply(output, match.slice(1));
	        }
	        lastLength = match[0].length;
	        lastLastIndex = lastIndex;
	        if (output.length >= limit) {
	          break;
	        }
	      }
	      if (separator.lastIndex === match.index) {
	        separator.lastIndex++; // Avoid an infinite loop
	      }
	    }
	    if (lastLastIndex === str.length) {
	      if (lastLength || !separator.test("")) {
	        output.push("");
	      }
	    } else {
	      output.push(str.slice(lastLastIndex));
	    }
	    return output.length > limit ? output.slice(0, limit) : output;
	  };

	  return self;
	})();


/***/ },
/* 336 */
/***/ function(module, exports) {

	'use strict';

	module.exports = SoftSetHook;

	function SoftSetHook(value) {
	    if (!(this instanceof SoftSetHook)) {
	        return new SoftSetHook(value);
	    }

	    this.value = value;
	}

	SoftSetHook.prototype.hook = function (node, propertyName) {
	    if (node[propertyName] !== this.value) {
	        node[propertyName] = this.value;
	    }
	};


/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var EvStore = __webpack_require__(338);

	module.exports = EvHook;

	function EvHook(value) {
	    if (!(this instanceof EvHook)) {
	        return new EvHook(value);
	    }

	    this.value = value;
	}

	EvHook.prototype.hook = function (node, propertyName) {
	    var es = EvStore(node);
	    var propName = propertyName.substr(3);

	    es[propName] = this.value;
	};

	EvHook.prototype.unhook = function(node, propertyName) {
	    var es = EvStore(node);
	    var propName = propertyName.substr(3);

	    es[propName] = undefined;
	};


/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var OneVersionConstraint = __webpack_require__(339);

	var MY_VERSION = '7';
	OneVersionConstraint('ev-store', MY_VERSION);

	var hashKey = '__EV_STORE_KEY@' + MY_VERSION;

	module.exports = EvStore;

	function EvStore(elem) {
	    var hash = elem[hashKey];

	    if (!hash) {
	        hash = elem[hashKey] = {};
	    }

	    return hash;
	}


/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Individual = __webpack_require__(340);

	module.exports = OneVersion;

	function OneVersion(moduleName, version, defaultValue) {
	    var key = '__INDIVIDUAL_ONE_VERSION_' + moduleName;
	    var enforceKey = key + '_ENFORCE_SINGLETON';

	    var versionValue = Individual(enforceKey, version);

	    if (versionValue !== version) {
	        throw new Error('Can only have one copy of ' +
	            moduleName + '.\n' +
	            'You already have version ' + versionValue +
	            ' installed.\n' +
	            'This means you cannot install version ' + version);
	    }

	    return Individual(key, defaultValue);
	}


/***/ },
/* 340 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	/*global window, global*/

	var root = typeof window !== 'undefined' ?
	    window : typeof global !== 'undefined' ?
	    global : {};

	module.exports = Individual;

	function Individual(key, value) {
	    if (key in root) {
	        return root[key];
	    }

	    root[key] = value;

	    return value;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 341 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// shim HTMLElement if necessary
	// Safari breaks when attempting to inherit from HTMLElement
	// Babel marked as wontfix because, well, it's not really
	// a language issue: https://phabricator.babeljs.io/T1548
	if (typeof HTMLElement !== 'function') {
	  var _HTMLElement = function _HTMLElement() {};
	  _HTMLElement.prototype = HTMLElement.prototype;
	  HTMLElement = _HTMLElement;
	}

	// thin wrapper around HTMLElement with convenience methods

	var WebComponent = function (_HTMLElement2) {
	  _inherits(WebComponent, _HTMLElement2);

	  function WebComponent() {
	    _classCallCheck(this, WebComponent);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(WebComponent).apply(this, arguments));
	  }

	  _createClass(WebComponent, [{
	    key: 'getJSONAttribute',


	    // parse an attribute which has been serialized as JSON
	    // pass an optional errorHandler in case JSON.parse() fails
	    value: function getJSONAttribute(attrName) {
	      var errorHandler = arguments.length <= 1 || arguments[1] === undefined ? function () {
	        return null;
	      } : arguments[1];

	      try {
	        return JSON.parse(this.getAttribute(attrName));
	      } catch (e) {
	        return errorHandler(attrName, e);
	      }
	    }

	    // check whether a boolean attribute is 'enabled' in an element instance
	    // taking into account usages such as:
	    // <my-element myattr="true">    -> enabled
	    // <my-element myattr>           -> enabled
	    // <my-element myattr="myattr">  -> enabled
	    // <my-element myattr="false">   -> disabled
	    // <my-element>                  -> disabled

	  }, {
	    key: 'isAttributeEnabled',
	    value: function isAttributeEnabled(attrName) {
	      var attrVal = this.getAttribute(attrName);
	      return typeof attrVal === 'string' && ['', 'true', attrName.toLowerCase()].indexOf(attrVal.toLowerCase()) !== -1;
	    }
	  }]);

	  return WebComponent;
	}(HTMLElement);

	exports.default = WebComponent;

/***/ },
/* 342 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// just the necessary bits of Backbone router+history

	var Router = function () {
	  function Router(app) {
	    var _this = this;

	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, Router);

	    // allow injecting window dep
	    var routerWindow = this.window = options.window || window;

	    this.app = app;
	    var routeDefs = this.app.getConfig('routes');

	    // https://github.com/jashkenas/backbone/blob/d682061a/backbone.js#L1476-L1479
	    // Cached regular expressions for matching named param parts and splatted
	    // parts of route strings.
	    var optionalParam = /\((.*?)\)/g;
	    var namedParam = /(\(\?)?:\w+/g;
	    var splatParam = /\*\w+/g;
	    var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
	    this.compiledRoutes = Object.keys(routeDefs).map(function (routeExpr) {
	      // https://github.com/jashkenas/backbone/blob/d682061a/backbone.js#L1537-L1547
	      var expr = routeExpr.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function (match, optional) {
	        return optional ? match : '([^/?]+)';
	      }).replace(splatParam, '([^?]*?)');
	      expr = new RegExp('^' + expr + '(?:\\?([\\s\\S]*))?$');

	      // hook up route handler function
	      var handler = routeDefs[routeExpr];
	      if (typeof handler === 'string') {
	        // reference to another handler rather than its own function
	        handler = routeDefs[handler];
	      }

	      return { expr: expr, handler: handler };
	    });

	    var navigateToHash = function navigateToHash() {
	      return _this.navigate(routerWindow.location.hash);
	    };
	    routerWindow.addEventListener('popstate', function () {
	      return navigateToHash();
	    });

	    this.historyMethod = options.historyMethod || 'pushState';
	    var origChangeState = routerWindow.history[this.historyMethod];
	    routerWindow.history[this.historyMethod] = function () {
	      origChangeState.apply(routerWindow.history, arguments);
	      navigateToHash();
	    };
	  }

	  _createClass(Router, [{
	    key: 'navigate',
	    value: function navigate(fragment) {
	      var _this2 = this;

	      var stateUpdate = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      fragment = stripHash(fragment);
	      if (fragment === this.app.state.$fragment && !Object.keys(stateUpdate).length) {
	        return;
	      }

	      stateUpdate.$fragment = fragment;
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = this.compiledRoutes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var route = _step.value;

	          var matches = route.expr.exec(fragment);
	          if (matches) {
	            var _ret = function () {
	              // extract params
	              // https://github.com/jashkenas/backbone/blob/d682061a/backbone.js#L1553-L1558
	              var params = matches.slice(1);
	              params = params.map(function (param, i) {
	                // Don't decode the search params.
	                if (i === params.length - 1) {
	                  return param || null;
	                }
	                return param ? decodeURIComponent(param) : null;
	              });

	              var routeHandler = route.handler;
	              if (!routeHandler) {
	                throw 'No route handler defined for #' + fragment;
	              }
	              var routeStateUpdate = routeHandler.call.apply(routeHandler, [_this2.app, stateUpdate].concat(_toConsumableArray(params)));
	              if (routeStateUpdate) {
	                // don't update if route handler returned a falsey result
	                _this2.app.update(Object.assign({}, stateUpdate, routeStateUpdate));
	              }
	              return {
	                v: void 0
	              };
	            }();

	            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	          }
	        }

	        // no route matched
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      console.error('No route found matching #' + fragment);
	    }
	  }, {
	    key: 'replaceHash',
	    value: function replaceHash(fragment) {
	      fragment = stripHash(fragment);
	      if (fragment !== stripHash(this.window.location.hash)) {
	        this.window.history[this.historyMethod](null, null, '#' + fragment);
	      }
	    }
	  }]);

	  return Router;
	}();

	exports.default = Router;


	function stripHash(fragment) {
	  return fragment.replace(/^#*/, '');
	}

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(344);

	__webpack_require__(351);

	__webpack_require__(359);

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(345);

	__webpack_require__(348);

	__webpack_require__(350);

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _panel = __webpack_require__(299);

	__webpack_require__(346);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	'use strict';

	var template = function render(locals) {
	  locals = locals || {};;;var result_of_with = function ($component, $helpers, Boolean, document) {
	    var h = __webpack_require__(347);function generateLiteralWidget(id, contents) {
	      function LiteralWidget(id, contents) {
	        this.name = 'LiteralWidget';this.id = id;this.contents = contents;
	      }LiteralWidget.prototype.type = 'Widget';LiteralWidget.prototype.init = function () {
	        var wrapper = document.createElement('div');wrapper.innerHTML = this.contents;var root;if (wrapper.childNodes.length === 1) {
	          root = wrapper.firstChild;
	        } else {
	          root = wrapper;
	        }return root;
	      };LiteralWidget.prototype.update = function (previous, domNode) {
	        return domNode;
	      }; // 'render' is called by the vdom-to-html module which is used in the unit tests
	      LiteralWidget.prototype.render = function () {
	        var h = __webpack_require__(347);var host = document.createElement('div');host.appendChild(this.init());return h('text', host.innerHTML);
	      };return new LiteralWidget(id, contents);
	    };return { value: h("div", { "attributes": $helpers.getButtonAttrs(), "className": [].concat('mp-button-container ' + $component.className + '').filter(Boolean).join(' ') }, [h("div", { "className": [].concat('mp-button-text').filter(Boolean).join(' ') }, [function () {
	        var __jade_nodes = [];__jade_nodes.push(h("content"));__jade_nodes.push($component.isAttributeEnabled('arrow-next') ? h("div", { "className": [].concat('mp-button-arrow-next').filter(Boolean).join(' ') }, [generateLiteralWidget(0, '<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 19.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 14 10.5" style="enable-background:new 0 0 14 10.5;" xml:space="preserve"><style type="text/css">	.st0{fill:#D8E0E7;}</style><path class="st0" d="M13,6.2H1c-0.5,0-1-0.4-1-1v0c0-0.5,0.4-1,1-1h12c0.5,0,1,0.4,1,1v0C14,5.8,13.6,6.2,13,6.2z"/><path class="st0" d="M12.3,5.9L8.1,1.7c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0l4.2,4.2c0.4,0.4,0.4,1,0,1.4l0,0	C13.3,6.3,12.7,6.3,12.3,5.9z"/><path class="st0" d="M12.3,4.5L8.1,8.8c-0.4,0.4-0.4,1,0,1.4l0,0c0.4,0.4,1,0.4,1.4,0l4.2-4.2c0.4-0.4,0.4-1,0-1.4l0,0	C13.3,4.1,12.7,4.1,12.3,4.5z"/></svg>')]) : undefined);;return __jade_nodes;
	      }.call(this)])]) };
	  }.call(this, "$component" in locals ? locals.$component : typeof $component !== "undefined" ? $component : undefined, "$helpers" in locals ? locals.$helpers : typeof $helpers !== "undefined" ? $helpers : undefined, "Boolean" in locals ? locals.Boolean : typeof Boolean !== "undefined" ? Boolean : undefined, "document" in locals ? locals.document : typeof document !== "undefined" ? document : undefined);if (result_of_with) return result_of_with.value;
	};var css = '@font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132129/37994fca-b67e-41db-94b3-44077c62810a.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132129/37994fca-b67e-41db-94b3-44077c62810a.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132129/0583e751-caca-4cd8-af81-71b2aa5ddbbb.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132129/da176885-bee9-49f7-88f0-d7ad9229ddd7.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132129/1861a7b7-09a5-4efd-b681-5214784ded39.ttf") format("truetype");   font-weight: 100;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132132/eba46937-62d2-4fa0-b06b-3b195ec3b81e.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132132/eba46937-62d2-4fa0-b06b-3b195ec3b81e.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132132/7179129f-41a3-4e40-9065-ab5ca5a4e436.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132132/953888b2-ac05-4781-acd8-eefab4804344.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132132/cd88eeb4-8553-4cba-a792-65670225b71a.ttf") format("truetype");   font-weight: 100;   font-style: italic; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132144/93cc6d34-798e-42c8-87d2-fd6391801b63.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132144/93cc6d34-798e-42c8-87d2-fd6391801b63.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132144/d9fe41ee-4904-4a11-ba11-b61cd3be767f.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132144/2fa30669-9bbd-4ced-912f-db94a367ed6c.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132144/c12b3ebb-3771-483f-a84a-ac63d615c28e.ttf") format("truetype");   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132159/7e90123f-e4a7-4689-b41f-6bcfe331c00a.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132159/7e90123f-e4a7-4689-b41f-6bcfe331c00a.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132159/64017d81-9430-4cba-8219-8f5cc28b923e.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132159/e56ecb6d-da41-4bd9-982d-2d295bec9ab0.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132159/2aff4f81-3e97-4a83-9e6c-45e33c024796.ttf") format("truetype");   font-weight: 400;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132162/bc15a635-a09b-40d1-a5c4-70310166177d.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132162/bc15a635-a09b-40d1-a5c4-70310166177d.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132162/129d49d6-5492-4ed1-96f7-0528c6d53abc.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132162/9c69c878-2255-4027-8632-ed3635cddf45.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132162/b7eb3871-e910-4522-9982-effb425a2714.ttf") format("truetype");   font-weight: 400;   font-style: italic; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529351/b918fc25-caba-4cf5-8606-d77742e476f4.eot");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529351/b918fc25-caba-4cf5-8606-d77742e476f4.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529351/e898042a-5eb9-4810-b578-c3993ab58f0f.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529351/cb9d4f02-d326-46b0-a857-930cce057f80.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529351/75cafc03-22e4-41b0-8bc2-1b9081506ecc.ttf") format("truetype");   font-weight: 500;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529359/8c7dafc9-d10f-41d0-a036-be19229ef40e.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529359/8c7dafc9-d10f-41d0-a036-be19229ef40e.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529359/ce88a131-85cb-4a39-8dd1-3a4f5817b70c.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529359/3ffc4ea2-8461-4897-a809-dbf92500372c.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529359/da3b3dc5-47e4-44a6-8bff-4eee158a59c4.ttf") format("truetype");   font-weight: 500;   font-style: italic; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132171/87e4b4fc-cdf1-450a-8bed-dd818cba908d.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132171/87e4b4fc-cdf1-450a-8bed-dd818cba908d.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132171/ae47a7f5-89da-4879-b934-29722c3dd451.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132171/70ae52ec-d89b-4c6a-9402-854ebe423c54.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132171/6a35571c-ea14-4dac-9ae1-0e7af0abeec8.ttf") format("truetype");   font-weight: 600;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132174/06ebb3e2-5f11-4e26-8736-0f7acb3c7743.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132174/06ebb3e2-5f11-4e26-8736-0f7acb3c7743.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132174/df119bf8-cb81-4373-9682-6054d9dd0770.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132174/d2a02f92-9826-4117-ae36-8fcfd72ad46e.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132174/d786d7d1-696a-47f9-9d03-7608fcb29cc4.ttf") format("truetype");   font-weight: 600;   font-style: italic; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132183/fbc6b03a-b3a1-427c-a884-053deca3a53c.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132183/fbc6b03a-b3a1-427c-a884-053deca3a53c.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132183/0d416408-95c6-4ad7-b08d-e60573d3b37d.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132183/d999c07b-a049-4eb5-b8a6-4f36ae25e67e.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132183/4d4a75f5-d32a-4a09-8665-133afd39cc37.ttf") format("truetype");   font-weight: 700;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132186/cb0c3396-af1a-4c16-95aa-8085e21044c7.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132186/cb0c3396-af1a-4c16-95aa-8085e21044c7.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132186/a6315c03-b55d-42b0-8ed6-79060867137d.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132186/46d5674a-f287-4240-b87a-f207aeb83064.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132186/9bd640b2-9a56-4391-b213-767ae9c30ef4.ttf") format("truetype");   font-weight: 700;   font-style: italic; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132195/9fbce143-f5db-4c0b-9159-b1e666079f67.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132195/9fbce143-f5db-4c0b-9159-b1e666079f67.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132195/eb39afe0-709e-46d6-92ad-db5c3bfd24a9.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132195/19dd5cf2-ac2d-48d5-901a-c432fd291ee2.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132195/22cfbfa4-f607-4751-92eb-6fa194353e57.ttf") format("truetype");   font-weight: 800;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132207/9b05cd3b-19d8-496a-816b-8de46cf24af1.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132207/9b05cd3b-19d8-496a-816b-8de46cf24af1.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132207/a086d1e1-d71a-4248-bc5b-6a91bbda0756.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132207/43106d4c-07a9-48c0-bdeb-d82f359c85f5.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132207/7783372a-b74a-4eb3-902f-ab18b106eb46.ttf") format("truetype");   font-weight: 900;   font-style: normal; } a, a:visited {   color: #3b99f0;   text-decoration: none; } a:hover {   color: #4ba8ff; } .mp-font-title {   font-family: \'Proxima Nova\', \'proxima-nova\', sans-serif;   font-size: 18px;   font-weight: 700;   line-height: 1.4;   color: #4c6072; } .mp-font-subtitle {   font-family: \'Proxima Nova\', \'proxima-nova\', sans-serif;   font-size: 15px;   font-weight: 600;   line-height: 18px;   color: #4c6072; } .mp-font-list-item {   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 13px;   line-height: 1.7;   color: #6e859d; } .mp-font-paragraph {   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 14px;   font-weight: normal;   line-height: 18px;   color: #6e859d; } * {   -webkit-font-smoothing: antialiased; } .mp-button-container {   -webkit-box-align: center;       -ms-flex-align: center;           align-items: center;   border-radius: 4px;   box-sizing: border-box;   cursor: pointer;   display: -webkit-inline-box;   display: -ms-inline-flexbox;   display: inline-flex;   -webkit-box-flex: 1;       -ms-flex: 1;           flex: 1;   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 13px;   font-weight: 700;   -webkit-box-pack: center;       -ms-flex-pack: center;           justify-content: center;   line-height: 15px;   padding: 12px 25px;   text-align: center;   text-transform: uppercase; /* BEGIN COLOR THEMES */ /* END COLOR THEMES */ /* BEGIN SPECIAL STYLES FOR MODAL BUTTONS */ /* END SPECIAL STYLES FOR MODAL BUTTONS */ } .mp-button-container .mp-button-text {   display: -webkit-inline-box;   display: -ms-inline-flexbox;   display: inline-flex;   -webkit-box-align: center;       -ms-flex-align: center;           align-items: center;   -webkit-box-pack: center;       -ms-flex-pack: center;           justify-content: center; } .mp-button-container .mp-button-text .mp-button-arrow-next {   margin-left: 10px;   width: 15px; } .mp-button-container .mp-button-text .mp-button-arrow-next svg path {   fill: #fff; } .mp-button-container:disabled, .mp-button-container[disabled] {   cursor: default; } .mp-button-container:disabled .mp-button-text, .mp-button-container[disabled] .mp-button-text {   opacity: 0.6; } .mp-button-container.mp-button-primary, .mp-button-container.mp-button-blue {   background: #4ba8ff -webkit-linear-gradient(top, #50aeff, #46a2ff);   background: #4ba8ff linear-gradient(to bottom, #50aeff, #46a2ff);   border: 1px solid #3391e9;   box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.2);   color: #fff; } .mp-button-container.mp-button-primary:hover:not([disabled]):not(:disabled), .mp-button-container.mp-button-blue:hover:not([disabled]):not(:disabled) {   background-image: -webkit-linear-gradient(bottom, #2f95fd, #4aabfe), -webkit-linear-gradient(#6e859d, #6e859d);   background-image: linear-gradient(to top, #2f95fd, #4aabfe), linear-gradient(#6e859d, #6e859d);   box-shadow: 0 1px 1px 0 rgba(0,0,0,0.13); } .mp-button-container.mp-button-primary:active:not([disabled]):not(:disabled), .mp-button-container.mp-button-blue:active:not([disabled]):not(:disabled) {   background-image: -webkit-linear-gradient(bottom, #2f95fd, #4aabfe), -webkit-linear-gradient(#50aaff, #50aaff);   background-image: linear-gradient(to top, #2f95fd, #4aabfe), linear-gradient(#50aaff, #50aaff);   box-shadow: inset 0 1px 1px 0 rgba(0,0,0,0.31);   color: rgba(255,255,255,0.6); } .mp-button-container.mp-button-primary.mp-button-on-blue, .mp-button-container.mp-button-blue.mp-button-on-blue {   background: #4ba8ff -webkit-linear-gradient(top, #7fc1ff, #6fb9ff);   background: #4ba8ff linear-gradient(to bottom, #7fc1ff, #6fb9ff);   box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.06); } .mp-button-container.mp-button-primary.mp-button-on-blue:hover:not([disabled]):not(:disabled), .mp-button-container.mp-button-blue.mp-button-on-blue:hover:not([disabled]):not(:disabled) {   background-image: -webkit-linear-gradient(top, #89c5ff, #68b5ff), -webkit-linear-gradient(#80c1ff, #80c1ff);   background-image: linear-gradient(to bottom, #89c5ff, #68b5ff), linear-gradient(#80c1ff, #80c1ff);   border: solid 1px #1d85e7; } .mp-button-container.mp-button-primary.mp-button-on-blue:active:not([disabled]):not(:disabled), .mp-button-container.mp-button-blue.mp-button-on-blue:active:not([disabled]):not(:disabled) {   background-image: -webkit-linear-gradient(top, #89c5ff, #68b5ff), -webkit-linear-gradient(#8bc7ff, #8bc7ff);   background-image: linear-gradient(to bottom, #89c5ff, #68b5ff), linear-gradient(#8bc7ff, #8bc7ff);   border: solid 1px #1d85e7;   box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2); } .mp-button-container.mp-button-secondary, .mp-button-container.mp-button-grey {   background-color: #fff;   border: 1px solid #d8e0e7;   box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05), inset 0px 0px 0px 2px rgba(255,255,255,0.17);   color: #6e859d; } .mp-button-container.mp-button-secondary:hover, .mp-button-container.mp-button-grey:hover {   border: 1px solid #c1ccd6;   box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1), inset 0px 0px 0px 2px rgba(255,255,255,0.17); } .mp-button-container.mp-button-secondary:active, .mp-button-container.mp-button-grey:active {   border-color: #c1ccd6;   box-shadow: 0 1px 0 0 #e3eaf0, inset 0 2px 3px 0 #dfe5eb; } .mp-button-container.mp-button-secondary.mp-button-on-blue, .mp-button-container.mp-button-grey.mp-button-on-blue {   background-color: #4ba8ff;   border-color: #3391e9;   box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.06);   color: #fff; } .mp-button-container.mp-button-secondary.mp-button-on-blue:hover, .mp-button-container.mp-button-grey.mp-button-on-blue:hover {   border-color: #2788e3; } .mp-button-container.mp-button-secondary.mp-button-on-blue:active, .mp-button-container.mp-button-grey.mp-button-on-blue:active {   border-color: #2583dd;   box-shadow: 0 1px 1px 0 rgba(0,0,0,0.06), inset 0 1px 2px 0 rgba(0,0,0,0.2); } .mp-button-container.mp-button-red {   background: #e4567b -webkit-linear-gradient(#ea8499, #e4687d);   background: #e4567b linear-gradient(#ea8499, #e4687d);   border: 1px solid #ff5400;   border-image-source: linear-gradient(to top, #d15269, #e46d83);   border-image-slice: 1;   color: #fff; } .mp-button-container.mp-button-red:hover:not([disabled]):not(:disabled) {   background: #e4567b -webkit-linear-gradient(top, #ed92a4, #ea8499);   background: #e4567b linear-gradient(to bottom, #ed92a4, #ea8499); } .mp-button-container.mp-button-purple {   background: #9271e2;   border: 1px solid #7858b8;   color: #fff; } .mp-button-container.mp-button-purple:hover:not([disabled]):not(:disabled) {   background: #a081ea;   border: 1px solid #9270e2; } .mp-button-container.mp-button-modal {   background-image: none;   border-radius: 0 0 6px 6px;   border: none;   color: #fff;   font-size: 15px;   font-weight: bold;   height: 60px;   letter-spacing: 0.7px;   padding: 0;   display: -webkit-box;   display: -ms-flexbox;   display: flex;   text-transform: none;   -webkit-transition: background 200ms;   transition: background 200ms; } .mp-button-container.mp-button-modal:hover:not([disabled]):not(:disabled) {   border: none; } .mp-button-container.mp-button-modal.mp-button-primary, .mp-button-container.mp-button-modal.mp-button-blue {   background: #4ba8ff;   box-shadow: inset 0 1px 0 0 #3b99f0; } .mp-button-container.mp-button-modal.mp-button-primary:hover:not([disabled]):not(:disabled), .mp-button-container.mp-button-modal.mp-button-blue:hover:not([disabled]):not(:disabled) {   background: #6cb8ff; } .mp-button-container.mp-button-modal.mp-button-purple {   box-shadow: inset 0 1px 0 0 #7858b8; } ';

	var MPButton = function (_Component) {
	  _inherits(MPButton, _Component);

	  function MPButton() {
	    _classCallCheck(this, MPButton);

	    return _possibleConstructorReturn(this, (MPButton.__proto__ || Object.getPrototypeOf(MPButton)).apply(this, arguments));
	  }

	  _createClass(MPButton, [{
	    key: 'attachedCallback',
	    value: function attachedCallback() {
	      var _this2 = this;

	      _get(MPButton.prototype.__proto__ || Object.getPrototypeOf(MPButton.prototype), 'attachedCallback', this).apply(this, arguments);
	      this._clickHandler = function (e) {
	        if (_this2.isAttributeEnabled('disabled')) {
	          e.stopImmediatePropagation();
	        }
	      };
	      this.el.addEventListener('click', this._clickHandler);
	    }
	  }, {
	    key: 'detachedCallback',
	    value: function detachedCallback() {
	      _get(MPButton.prototype.__proto__ || Object.getPrototypeOf(MPButton.prototype), 'detachedCallback', this).apply(this, arguments);
	      this.el.removeEventListener('click', this._clickHandler);
	      this._clickHandler = null;
	    }
	  }, {
	    key: 'config',
	    get: function get() {
	      var _this3 = this;

	      return {
	        css: css,
	        helpers: {
	          getButtonAttrs: function getButtonAttrs() {
	            var attrs = {};
	            if (_this3.isAttributeEnabled('disabled')) {
	              attrs.disabled = true;
	            }
	            return attrs;
	          }
	        },
	        template: template,
	        useShadowDom: true
	      };
	    }
	  }]);

	  return MPButton;
	}(_panel.Component);

	if (window['mp-common-registered-components']['mp-button'] !== true) {
	  document.registerElement('mp-button', MPButton);
	  window['mp-common-registered-components']['mp-button'] = true;
	}

/***/ },
/* 346 */
/***/ function(module, exports) {

	'use strict';

	if (!window.hasOwnProperty('mp-common-registered-components')) {
	  window['mp-common-registered-components'] = {};
	}

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	var h = __webpack_require__(331)

	module.exports = h


/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _panel = __webpack_require__(299);

	__webpack_require__(346);

	var _utils = __webpack_require__(349);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	'use strict';

	var template = function render(locals) {
	  locals = locals || {};;;var result_of_with = function ($component, $helpers, Boolean, Object, alertIcon, document, visibility) {
	    var h = __webpack_require__(347);function generateLiteralWidget(id, contents) {
	      function LiteralWidget(id, contents) {
	        this.name = 'LiteralWidget';this.id = id;this.contents = contents;
	      }LiteralWidget.prototype.type = 'Widget';LiteralWidget.prototype.init = function () {
	        var wrapper = document.createElement('div');wrapper.innerHTML = this.contents;var root;if (wrapper.childNodes.length === 1) {
	          root = wrapper.firstChild;
	        } else {
	          root = wrapper;
	        }return root;
	      };LiteralWidget.prototype.update = function (previous, domNode) {
	        return domNode;
	      }; // 'render' is called by the vdom-to-html module which is used in the unit tests
	      LiteralWidget.prototype.render = function () {
	        var h = __webpack_require__(347);var host = document.createElement('div');host.appendChild(this.init());return h('text', host.innerHTML);
	      };return new LiteralWidget(id, contents);
	    };var __objToAttrs = function __objToAttrs(o) {
	      return Object.keys(o).map(function (k) {
	        return o[k] ? k : false;
	      });
	    };return { value: h("div", { "className": [].concat('mp-modal-stage').concat(__objToAttrs({ 'mp-modal-alert': $component.isAttributeEnabled('alert'), 'mp-modal-absolute': $component.isAttributeEnabled('not-fullscreen'), 'mp-modal-closed': visibility === 'closed' })).filter(Boolean).join(' ') }, [function () {
	        var __jade_nodes = [];__jade_nodes.push($helpers.getType() === 'modal' ? h("div", { "onclick": $helpers.backdropClicked, "className": [].concat('mp-modal-backdrop').concat('mp-modal-' + visibility + '').filter(Boolean).join(' ')
	        }) : undefined);__jade_nodes.push(h("div", { "className": [].concat('mp-modal-wrapper').filter(Boolean).join(' ') }, [h("div", { "style": $helpers.getModalStyles(), "className": [].concat('mp-modal-main').concat('mp-modal-' + visibility + '').filter(Boolean).join(' ') }, [function () {
	          var __jade_nodes = [];__jade_nodes.push($component.isAttributeEnabled('closeable') ? h("div", { "onclick": $helpers.closeClicked, "className": [].concat('mp-modal-close-btn').filter(Boolean).join(' ') }, [h("div", { "className": [].concat('mp-modal-close-icon').filter(Boolean).join(' ') }, [generateLiteralWidget(1, '<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 19.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 10.6 10.5" style="enable-background:new 0 0 10.6 10.5;" xml:space="preserve"><style type="text/css">	.x{fill-rule:evenodd;clip-rule:evenodd;fill:#D8E0E7;}</style><path class="x" d="M8.6,0L5.3,3.3L2,0L0,2l3.3,3.3L0,8.5l2,2l3.2-3.2l3.2,3.2l2-2L7.3,5.3L10.6,2L8.6,0z"/></svg>')])]) : undefined);__jade_nodes.push(h("div", { "className": [].concat('mp-modal-top-container').concat(__objToAttrs({ 'mp-modal-alert': $component.isAttributeEnabled('alert') })).filter(Boolean).join(' ') }, [function () {
	            var __jade_nodes = [];__jade_nodes.push($component.isAttributeEnabled('alert') ? h("div", { "className": [].concat('mp-modal-content-row').filter(Boolean).join(' ') }, [h("div", { "className": [].concat('mp-modal-alert-icon').filter(Boolean).join(' ') }, [generateLiteralWidget(2, '<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 19.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 33 30" style="enable-background:new 0 0 33 30;" xml:space="preserve"><style type="text/css">	.mp-modal-alert-icon-fill{fill:#D8E0E7;}</style><path class="mp-modal-alert-icon-fill" d="M32.2,24L20,2.5c-1.9-3.3-5-3.3-6.9,0L0.8,23.6C-1.1,26.9,0.5,30,4.2,30h24.5C32.5,30,34.1,27.3,32.2,24z	 M16.6,26c-1.2,0-2.1-0.9-2.1-2.1c0-1.2,0.9-2.1,2.1-2.1c1.2,0,2.1,0.9,2.1,2.1C18.7,25.1,17.8,26,16.6,26z M18.1,20.4h-3l-1-12.3h5	L18.1,20.4z"/></svg>')]), h("content", { "select": '[slot-body]' })]) : h("content", { "select": '[slot-body]' }));;return __jade_nodes;
	          }.call(this)]));__jade_nodes.push(!alertIcon ? h("div", { "className": [].concat('mp-modal-button-container').filter(Boolean).join(' ') }, [h("content", { "select": '[slot-button]' })]) : undefined);;return __jade_nodes;
	        }.call(this)])]));;return __jade_nodes;
	      }.call(this)]) };
	  }.call(this, "$component" in locals ? locals.$component : typeof $component !== "undefined" ? $component : undefined, "$helpers" in locals ? locals.$helpers : typeof $helpers !== "undefined" ? $helpers : undefined, "Boolean" in locals ? locals.Boolean : typeof Boolean !== "undefined" ? Boolean : undefined, "Object" in locals ? locals.Object : typeof Object !== "undefined" ? Object : undefined, "alertIcon" in locals ? locals.alertIcon : typeof alertIcon !== "undefined" ? alertIcon : undefined, "document" in locals ? locals.document : typeof document !== "undefined" ? document : undefined, "visibility" in locals ? locals.visibility : typeof visibility !== "undefined" ? visibility : undefined);if (result_of_with) return result_of_with.value;
	};var css = '@font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132129/37994fca-b67e-41db-94b3-44077c62810a.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132129/37994fca-b67e-41db-94b3-44077c62810a.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132129/0583e751-caca-4cd8-af81-71b2aa5ddbbb.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132129/da176885-bee9-49f7-88f0-d7ad9229ddd7.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132129/1861a7b7-09a5-4efd-b681-5214784ded39.ttf") format("truetype");   font-weight: 100;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132132/eba46937-62d2-4fa0-b06b-3b195ec3b81e.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132132/eba46937-62d2-4fa0-b06b-3b195ec3b81e.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132132/7179129f-41a3-4e40-9065-ab5ca5a4e436.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132132/953888b2-ac05-4781-acd8-eefab4804344.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132132/cd88eeb4-8553-4cba-a792-65670225b71a.ttf") format("truetype");   font-weight: 100;   font-style: italic; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132144/93cc6d34-798e-42c8-87d2-fd6391801b63.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132144/93cc6d34-798e-42c8-87d2-fd6391801b63.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132144/d9fe41ee-4904-4a11-ba11-b61cd3be767f.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132144/2fa30669-9bbd-4ced-912f-db94a367ed6c.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132144/c12b3ebb-3771-483f-a84a-ac63d615c28e.ttf") format("truetype");   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132159/7e90123f-e4a7-4689-b41f-6bcfe331c00a.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132159/7e90123f-e4a7-4689-b41f-6bcfe331c00a.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132159/64017d81-9430-4cba-8219-8f5cc28b923e.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132159/e56ecb6d-da41-4bd9-982d-2d295bec9ab0.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132159/2aff4f81-3e97-4a83-9e6c-45e33c024796.ttf") format("truetype");   font-weight: 400;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132162/bc15a635-a09b-40d1-a5c4-70310166177d.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132162/bc15a635-a09b-40d1-a5c4-70310166177d.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132162/129d49d6-5492-4ed1-96f7-0528c6d53abc.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132162/9c69c878-2255-4027-8632-ed3635cddf45.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132162/b7eb3871-e910-4522-9982-effb425a2714.ttf") format("truetype");   font-weight: 400;   font-style: italic; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529351/b918fc25-caba-4cf5-8606-d77742e476f4.eot");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529351/b918fc25-caba-4cf5-8606-d77742e476f4.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529351/e898042a-5eb9-4810-b578-c3993ab58f0f.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529351/cb9d4f02-d326-46b0-a857-930cce057f80.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529351/75cafc03-22e4-41b0-8bc2-1b9081506ecc.ttf") format("truetype");   font-weight: 500;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529359/8c7dafc9-d10f-41d0-a036-be19229ef40e.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529359/8c7dafc9-d10f-41d0-a036-be19229ef40e.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529359/ce88a131-85cb-4a39-8dd1-3a4f5817b70c.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529359/3ffc4ea2-8461-4897-a809-dbf92500372c.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529359/da3b3dc5-47e4-44a6-8bff-4eee158a59c4.ttf") format("truetype");   font-weight: 500;   font-style: italic; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132171/87e4b4fc-cdf1-450a-8bed-dd818cba908d.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132171/87e4b4fc-cdf1-450a-8bed-dd818cba908d.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132171/ae47a7f5-89da-4879-b934-29722c3dd451.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132171/70ae52ec-d89b-4c6a-9402-854ebe423c54.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132171/6a35571c-ea14-4dac-9ae1-0e7af0abeec8.ttf") format("truetype");   font-weight: 600;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132174/06ebb3e2-5f11-4e26-8736-0f7acb3c7743.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132174/06ebb3e2-5f11-4e26-8736-0f7acb3c7743.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132174/df119bf8-cb81-4373-9682-6054d9dd0770.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132174/d2a02f92-9826-4117-ae36-8fcfd72ad46e.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132174/d786d7d1-696a-47f9-9d03-7608fcb29cc4.ttf") format("truetype");   font-weight: 600;   font-style: italic; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132183/fbc6b03a-b3a1-427c-a884-053deca3a53c.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132183/fbc6b03a-b3a1-427c-a884-053deca3a53c.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132183/0d416408-95c6-4ad7-b08d-e60573d3b37d.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132183/d999c07b-a049-4eb5-b8a6-4f36ae25e67e.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132183/4d4a75f5-d32a-4a09-8665-133afd39cc37.ttf") format("truetype");   font-weight: 700;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132186/cb0c3396-af1a-4c16-95aa-8085e21044c7.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132186/cb0c3396-af1a-4c16-95aa-8085e21044c7.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132186/a6315c03-b55d-42b0-8ed6-79060867137d.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132186/46d5674a-f287-4240-b87a-f207aeb83064.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132186/9bd640b2-9a56-4391-b213-767ae9c30ef4.ttf") format("truetype");   font-weight: 700;   font-style: italic; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132195/9fbce143-f5db-4c0b-9159-b1e666079f67.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132195/9fbce143-f5db-4c0b-9159-b1e666079f67.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132195/eb39afe0-709e-46d6-92ad-db5c3bfd24a9.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132195/19dd5cf2-ac2d-48d5-901a-c432fd291ee2.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132195/22cfbfa4-f607-4751-92eb-6fa194353e57.ttf") format("truetype");   font-weight: 800;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132207/9b05cd3b-19d8-496a-816b-8de46cf24af1.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132207/9b05cd3b-19d8-496a-816b-8de46cf24af1.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132207/a086d1e1-d71a-4248-bc5b-6a91bbda0756.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132207/43106d4c-07a9-48c0-bdeb-d82f359c85f5.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132207/7783372a-b74a-4eb3-902f-ab18b106eb46.ttf") format("truetype");   font-weight: 900;   font-style: normal; } a, a:visited {   color: #3b99f0;   text-decoration: none; } a:hover {   color: #4ba8ff; } .mp-font-title {   font-family: \'Proxima Nova\', \'proxima-nova\', sans-serif;   font-size: 18px;   font-weight: 700;   line-height: 1.4;   color: #4c6072; } .mp-font-subtitle {   font-family: \'Proxima Nova\', \'proxima-nova\', sans-serif;   font-size: 15px;   font-weight: 600;   line-height: 18px;   color: #4c6072; } .mp-font-list-item {   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 13px;   line-height: 1.7;   color: #6e859d; } .mp-font-paragraph {   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 14px;   font-weight: normal;   line-height: 18px;   color: #6e859d; } * {   -webkit-font-smoothing: antialiased; } .mp-modal-stage {   bottom: 0;   box-sizing: border-box;   left: 0;   pointer-events: none;   position: fixed;   right: 0;   top: 0;   z-index: 10; } .mp-modal-stage.mp-modal-closed {   display: none; } .mp-modal-stage.mp-modal-absolute, .mp-modal-stage.mp-modal-absolute .mp-modal-backdrop, .mp-modal-stage.mp-modal-absolute .mp-modal-wrapper {   position: absolute; } .mp-modal-stage .mp-modal-backdrop {   background: #45566d;   height: 100%;   position: fixed;   pointer-events: auto;   width: 100%;   z-index: 1; } .mp-modal-stage .mp-modal-backdrop.mp-modal-opening {   -webkit-animation: fadeOverlayIn 300ms forwards;           animation: fadeOverlayIn 300ms forwards;   opacity: 0; } .mp-modal-stage .mp-modal-backdrop.mp-modal-open {   opacity: 0.9; } .mp-modal-stage .mp-modal-backdrop.mp-modal-closing {   -webkit-animation: fadeOverlayOut 300ms forwards;           animation: fadeOverlayOut 300ms forwards; } .mp-modal-stage .mp-modal-backdrop.mp-modal-closed {   opacity: 0; } .mp-modal-stage .mp-modal-wrapper {   display: -webkit-box;   display: -ms-flexbox;   display: flex;   height: 100%;   -webkit-box-pack: center;       -ms-flex-pack: center;           justify-content: center;   -webkit-box-align: center;       -ms-flex-align: center;           align-items: center;   pointer-events: none;   position: fixed;   width: 100%;   z-index: 2; } .mp-modal-stage .mp-modal-wrapper .mp-modal-main {   border-radius: 6px;   box-shadow: 0 1px 3px 0 rgba(1,1,1,0.28);   max-width: 530px;   pointer-events: auto;   position: relative;   z-index: 2; } .mp-modal-stage .mp-modal-wrapper .mp-modal-main.mp-modal-opening {   -webkit-animation: fadeModalIn 300ms forwards 100ms;           animation: fadeModalIn 300ms forwards 100ms;   opacity: 0; } .mp-modal-stage .mp-modal-wrapper .mp-modal-main.mp-modal-open {   opacity: 1; } .mp-modal-stage .mp-modal-wrapper .mp-modal-main.mp-modal-closing {   -webkit-animation: fadeModalOut 200ms forwards;           animation: fadeModalOut 200ms forwards; } .mp-modal-stage .mp-modal-wrapper .mp-modal-main.mp-modal-closed {   opacity: 0; } .mp-modal-stage .mp-modal-wrapper .mp-modal-main .mp-modal-close-btn {   cursor: pointer;   float: right;   height: 10px;   position: absolute;   right: 15px;   top: 15px; } .mp-modal-stage .mp-modal-wrapper .mp-modal-main .mp-modal-close-btn .mp-modal-close-icon svg {   width: 10px; } .mp-modal-stage .mp-modal-wrapper .mp-modal-main .mp-modal-close-btn .mp-modal-close-icon svg path {   fill: #d8e0e7; } .mp-modal-stage .mp-modal-wrapper .mp-modal-main .mp-modal-close-btn:hover .mp-modal-close-icon svg path {   fill: #c1ccd6; } .mp-modal-stage .mp-modal-top-container {   background: #fff;   border-radius: 6px 6px 0 0;   padding: 30px 60px;   text-align: center; } .mp-modal-stage .mp-modal-top-container.mp-modal-alert {   border-radius: 6px;   padding: 20px 40px 30px; } .mp-modal-stage .mp-modal-title {   font-family: \'Proxima Nova\', \'proxima-nova\', sans-serif;   font-size: 18px;   font-weight: 700;   line-height: 1.4;   color: #4c6072;   font-weight: 600; } .mp-modal-stage .mp-modal-subtitle {   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 14px;   font-weight: normal;   line-height: 18px;   color: #6e859d;   color: #6e859d;   margin: 12px 0; } .mp-modal-stage .mp-modal-alert-title {   font-family: \'Proxima Nova\', \'proxima-nova\', sans-serif;   font-size: 18px;   font-weight: 700;   line-height: 1.4;   color: #4c6072;   text-align: left; } .mp-modal-stage .mp-modal-alert-subtitle {   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 14px;   font-weight: normal;   line-height: 18px;   color: #6e859d;   font-weight: normal;   text-align: left;   white-space: pre-wrap; } .mp-modal-stage content::content .mp-modal-title {   font-family: \'Proxima Nova\', \'proxima-nova\', sans-serif;   font-size: 18px;   font-weight: 700;   line-height: 1.4;   color: #4c6072;   font-weight: 600; } .mp-modal-stage content::content .mp-modal-subtitle {   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 14px;   font-weight: normal;   line-height: 18px;   color: #6e859d;   color: #6e859d;   margin: 12px 0; } .mp-modal-stage content::content .mp-modal-alert-title {   font-family: \'Proxima Nova\', \'proxima-nova\', sans-serif;   font-size: 18px;   font-weight: 700;   line-height: 1.4;   color: #4c6072;   text-align: left; } .mp-modal-stage content::content .mp-modal-alert-subtitle {   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 14px;   font-weight: normal;   line-height: 18px;   color: #6e859d;   font-weight: normal;   text-align: left;   white-space: pre-wrap; } .mp-modal-stage .mp-modal-content-row {   -webkit-box-align: start;       -ms-flex-align: start;           align-items: flex-start;   display: -webkit-box;   display: -ms-flexbox;   display: flex;   white-space: nowrap;   width: 340px; } .mp-modal-stage .mp-modal-content-row .mp-modal-alert-icon {   height: 30px;   margin-top: 10px;   margin-right: 15px;   white-space: normal;   width: 33px; } .mp-modal-stage .mp-modal-content-row .mp-modal-alert-icon svg {   height: 29px; } .mp-modal-stage .mp-modal-content-row .mp-modal-alert-icon svg .mp-modal-alert-icon-fill {   fill: #e4567b; } @-webkit-keyframes fadeOverlayIn {   from {     opacity: 0;   }   to {     opacity: 0.9;   } } @keyframes fadeOverlayIn {   from {     opacity: 0;   }   to {     opacity: 0.9;   } } @-webkit-keyframes fadeOverlayOut {   from {     opacity: 0.9;   }   to {     opacity: 0;   } } @keyframes fadeOverlayOut {   from {     opacity: 0.9;   }   to {     opacity: 0;   } } @-webkit-keyframes fadeModalIn {   from {     -webkit-transform: scale(1.1, 1.1);             transform: scale(1.1, 1.1);     opacity: 0;   }   to {     -webkit-transform: scale(1, 1);             transform: scale(1, 1);     opacity: 1;   } } @keyframes fadeModalIn {   from {     -webkit-transform: scale(1.1, 1.1);             transform: scale(1.1, 1.1);     opacity: 0;   }   to {     -webkit-transform: scale(1, 1);             transform: scale(1, 1);     opacity: 1;   } } @-webkit-keyframes fadeModalOut {   from {     -webkit-transform: scale(1, 1);             transform: scale(1, 1);     opacity: 1;   }   to {     -webkit-transform: scale(1.1, 1.1);             transform: scale(1.1, 1.1);     opacity: 0;   } } @keyframes fadeModalOut {   from {     -webkit-transform: scale(1, 1);             transform: scale(1, 1);     opacity: 1;   }   to {     -webkit-transform: scale(1.1, 1.1);             transform: scale(1.1, 1.1);     opacity: 0;   } } ';


	var VISIBILITY_OPEN = 'open';
	var VISIBILITY_OPENING = 'opening';
	var VISIBILITY_CLOSED = 'closed';
	var VISIBILITY_CLOSING = 'closing';

	var MPModal = function (_Component) {
	  _inherits(MPModal, _Component);

	  function MPModal() {
	    _classCallCheck(this, MPModal);

	    return _possibleConstructorReturn(this, (MPModal.__proto__ || Object.getPrototypeOf(MPModal)).apply(this, arguments));
	  }

	  _createClass(MPModal, [{
	    key: 'close',
	    value: function close() {
	      switch (this.state.visibility) {
	        case VISIBILITY_CLOSED:
	        case VISIBILITY_CLOSING:
	          break;
	        case VISIBILITY_OPENING:
	          this.update({ visibility: VISIBILITY_CLOSED });
	          break;
	        case VISIBILITY_OPEN:
	          this._pendingAnimations = ['fadeModalOut'];
	          if (this.config.helpers.getType() === 'modal') {
	            this._pendingAnimations.push('fadeOverlayOut');
	          }
	          this.update({ visibility: VISIBILITY_CLOSING });
	          break;
	      }
	    }
	  }, {
	    key: 'open',
	    value: function open() {
	      switch (this.state.visibility) {
	        case VISIBILITY_OPEN:
	        case VISIBILITY_OPENING:
	          break;
	        case VISIBILITY_CLOSING:
	          this.update({ visibility: VISIBILITY_OPEN });
	          break;
	        case VISIBILITY_CLOSED:
	          this._pendingAnimations = ['fadeModalIn'];
	          if (this.config.helpers.getType() === 'modal') {
	            this._pendingAnimations.push('fadeOverlayIn');
	          }
	          this.update({ visibility: VISIBILITY_OPENING });
	          break;
	      }
	    }
	  }, {
	    key: 'attachedCallback',
	    value: function attachedCallback() {
	      var _this2 = this;

	      _get(MPModal.prototype.__proto__ || Object.getPrototypeOf(MPModal.prototype), 'attachedCallback', this).apply(this, arguments);

	      // listen for escape keypress
	      this.maybeCloseOnEscape = function (e) {
	        if (_this2.isAttributeEnabled('closeable') && e.keyCode === 27) {
	          _this2.close();
	        }
	      };
	      document.body.addEventListener('keydown', this.maybeCloseOnEscape);

	      // transition between states after animations complete
	      this._onAnimationEnd = function (e) {
	        if (_this2._pendingAnimations.length === 0) {
	          return;
	        }
	        _this2._pendingAnimations = _this2._pendingAnimations.filter(function (anim) {
	          return anim !== e.animationName;
	        });
	        if (_this2._pendingAnimations.length > 0) {
	          return;
	        }
	        switch (_this2.state.visibility) {
	          case VISIBILITY_OPENING:
	            _this2.update({ visibility: VISIBILITY_OPEN });
	            _this2.dispatchEvent(new CustomEvent('change', { detail: { state: VISIBILITY_OPEN } }));
	            break;
	          case VISIBILITY_CLOSING:
	            _this2.update({ visibility: VISIBILITY_CLOSED });
	            _this2.dispatchEvent(new CustomEvent('change', { detail: { state: VISIBILITY_CLOSED } }));
	            break;
	        }
	      };
	      (0, _utils.onAnimationEnd)(this.el, this._onAnimationEnd);

	      // open the modal if "closed" is explicitly set to false
	      if (this.getAttribute('closed') === 'false') {
	        this.open();
	      }
	    }
	  }, {
	    key: 'detachedCallback',
	    value: function detachedCallback() {
	      _get(MPModal.prototype.__proto__ || Object.getPrototypeOf(MPModal.prototype), 'detachedCallback', this).apply(this, arguments);
	      document.body.removeEventListener('keydown', this.maybeCloseOnEscape);
	      (0, _utils.offAnimationEnd)(this.el, this._onAnimationEnd);
	    }
	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(name) {
	      _get(MPModal.prototype.__proto__ || Object.getPrototypeOf(MPModal.prototype), 'attributeChangedCallback', this).apply(this, arguments);
	      if (this.initialized && name === 'closed') {
	        if (this.isAttributeEnabled('closed')) {
	          this.close();
	        } else {
	          this.open();
	        }
	      }
	    }
	  }, {
	    key: 'config',
	    get: function get() {
	      var _this3 = this;

	      return {
	        css: css, template: template,
	        useShadowDom: true,
	        defaultState: {
	          visibility: VISIBILITY_CLOSED
	        },
	        helpers: {
	          backdropClicked: function backdropClicked() {
	            if (_this3.isAttributeEnabled('closeable')) {
	              _this3.close();
	            }
	          },
	          closeClicked: function closeClicked() {
	            _this3.close();
	          },
	          getModalStyles: function getModalStyles() {
	            var style = {};
	            if (_this3.getAttribute('width')) {
	              style.width = _this3.getAttribute('width');
	            }
	            return style;
	          },
	          getType: function getType() {
	            return _this3.getAttribute('modal-type') || 'modal';
	          }
	        }
	      };
	    }
	  }]);

	  return MPModal;
	}(_panel.Component);

	if (window['mp-common-registered-components']['mp-modal'] !== true) {
	  document.registerElement('mp-modal', MPModal);
	  window['mp-common-registered-components']['mp-modal'] = true;
	}

/***/ },
/* 349 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ANIMATION_END_EVENTS = exports.ANIMATION_END_EVENTS = ['webkitAnimationEnd', 'animationend', 'oAnimationEnd', 'MSAnimationEnd'];

	var onAnimationEnd = exports.onAnimationEnd = function onAnimationEnd(el, callback) {
	  ANIMATION_END_EVENTS.forEach(function (e) {
	    return el.addEventListener(e, callback);
	  });
	};

	var offAnimationEnd = exports.offAnimationEnd = function offAnimationEnd(el, callback) {
	  ANIMATION_END_EVENTS.forEach(function (e) {
	    return el.removeEventListener(e, callback);
	  });
	};

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _panel = __webpack_require__(299);

	__webpack_require__(346);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	'use strict';

	var template = function render(locals) {
	  locals = locals || {};;;var result_of_with = function (Boolean) {
	    var h = __webpack_require__(347);return { value: h("div", { "className": [].concat('mp-tooltip-wrapper').concat('mp-tooltip-hidden').filter(Boolean).join(' ') }, [h("div", { "className": [].concat('mp-tooltip-main').filter(Boolean).join(' ') }, [h("content")])]) };
	  }.call(this, "Boolean" in locals ? locals.Boolean : typeof Boolean !== "undefined" ? Boolean : undefined);if (result_of_with) return result_of_with.value;
	};var css = '@font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132129/37994fca-b67e-41db-94b3-44077c62810a.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132129/37994fca-b67e-41db-94b3-44077c62810a.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132129/0583e751-caca-4cd8-af81-71b2aa5ddbbb.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132129/da176885-bee9-49f7-88f0-d7ad9229ddd7.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132129/1861a7b7-09a5-4efd-b681-5214784ded39.ttf") format("truetype");   font-weight: 100;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132132/eba46937-62d2-4fa0-b06b-3b195ec3b81e.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132132/eba46937-62d2-4fa0-b06b-3b195ec3b81e.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132132/7179129f-41a3-4e40-9065-ab5ca5a4e436.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132132/953888b2-ac05-4781-acd8-eefab4804344.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132132/cd88eeb4-8553-4cba-a792-65670225b71a.ttf") format("truetype");   font-weight: 100;   font-style: italic; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132144/93cc6d34-798e-42c8-87d2-fd6391801b63.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132144/93cc6d34-798e-42c8-87d2-fd6391801b63.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132144/d9fe41ee-4904-4a11-ba11-b61cd3be767f.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132144/2fa30669-9bbd-4ced-912f-db94a367ed6c.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132144/c12b3ebb-3771-483f-a84a-ac63d615c28e.ttf") format("truetype");   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132159/7e90123f-e4a7-4689-b41f-6bcfe331c00a.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132159/7e90123f-e4a7-4689-b41f-6bcfe331c00a.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132159/64017d81-9430-4cba-8219-8f5cc28b923e.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132159/e56ecb6d-da41-4bd9-982d-2d295bec9ab0.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132159/2aff4f81-3e97-4a83-9e6c-45e33c024796.ttf") format("truetype");   font-weight: 400;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132162/bc15a635-a09b-40d1-a5c4-70310166177d.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132162/bc15a635-a09b-40d1-a5c4-70310166177d.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132162/129d49d6-5492-4ed1-96f7-0528c6d53abc.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132162/9c69c878-2255-4027-8632-ed3635cddf45.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132162/b7eb3871-e910-4522-9982-effb425a2714.ttf") format("truetype");   font-weight: 400;   font-style: italic; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529351/b918fc25-caba-4cf5-8606-d77742e476f4.eot");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529351/b918fc25-caba-4cf5-8606-d77742e476f4.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529351/e898042a-5eb9-4810-b578-c3993ab58f0f.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529351/cb9d4f02-d326-46b0-a857-930cce057f80.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529351/75cafc03-22e4-41b0-8bc2-1b9081506ecc.ttf") format("truetype");   font-weight: 500;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529359/8c7dafc9-d10f-41d0-a036-be19229ef40e.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529359/8c7dafc9-d10f-41d0-a036-be19229ef40e.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529359/ce88a131-85cb-4a39-8dd1-3a4f5817b70c.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529359/3ffc4ea2-8461-4897-a809-dbf92500372c.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1529359/da3b3dc5-47e4-44a6-8bff-4eee158a59c4.ttf") format("truetype");   font-weight: 500;   font-style: italic; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132171/87e4b4fc-cdf1-450a-8bed-dd818cba908d.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132171/87e4b4fc-cdf1-450a-8bed-dd818cba908d.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132171/ae47a7f5-89da-4879-b934-29722c3dd451.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132171/70ae52ec-d89b-4c6a-9402-854ebe423c54.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132171/6a35571c-ea14-4dac-9ae1-0e7af0abeec8.ttf") format("truetype");   font-weight: 600;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132174/06ebb3e2-5f11-4e26-8736-0f7acb3c7743.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132174/06ebb3e2-5f11-4e26-8736-0f7acb3c7743.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132174/df119bf8-cb81-4373-9682-6054d9dd0770.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132174/d2a02f92-9826-4117-ae36-8fcfd72ad46e.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132174/d786d7d1-696a-47f9-9d03-7608fcb29cc4.ttf") format("truetype");   font-weight: 600;   font-style: italic; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132183/fbc6b03a-b3a1-427c-a884-053deca3a53c.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132183/fbc6b03a-b3a1-427c-a884-053deca3a53c.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132183/0d416408-95c6-4ad7-b08d-e60573d3b37d.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132183/d999c07b-a049-4eb5-b8a6-4f36ae25e67e.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132183/4d4a75f5-d32a-4a09-8665-133afd39cc37.ttf") format("truetype");   font-weight: 700;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132186/cb0c3396-af1a-4c16-95aa-8085e21044c7.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132186/cb0c3396-af1a-4c16-95aa-8085e21044c7.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132186/a6315c03-b55d-42b0-8ed6-79060867137d.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132186/46d5674a-f287-4240-b87a-f207aeb83064.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132186/9bd640b2-9a56-4391-b213-767ae9c30ef4.ttf") format("truetype");   font-weight: 700;   font-style: italic; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132195/9fbce143-f5db-4c0b-9159-b1e666079f67.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132195/9fbce143-f5db-4c0b-9159-b1e666079f67.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132195/eb39afe0-709e-46d6-92ad-db5c3bfd24a9.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132195/19dd5cf2-ac2d-48d5-901a-c432fd291ee2.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132195/22cfbfa4-f607-4751-92eb-6fa194353e57.ttf") format("truetype");   font-weight: 800;   font-style: normal; } @font-face {   font-family: "Proxima Nova";   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132207/9b05cd3b-19d8-496a-816b-8de46cf24af1.eot?#iefix");   src: url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132207/9b05cd3b-19d8-496a-816b-8de46cf24af1.eot?#iefix") format("eot"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132207/a086d1e1-d71a-4248-bc5b-6a91bbda0756.woff2") format("woff2"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132207/43106d4c-07a9-48c0-bdeb-d82f359c85f5.woff") format("woff"), url("//cdn.mxpnl.com/site_media/fonts/proxima-nova/Fonts/1132207/7783372a-b74a-4eb3-902f-ab18b106eb46.ttf") format("truetype");   font-weight: 900;   font-style: normal; } a, a:visited {   color: #3b99f0;   text-decoration: none; } a:hover {   color: #4ba8ff; } .mp-font-title {   font-family: \'Proxima Nova\', \'proxima-nova\', sans-serif;   font-size: 18px;   font-weight: 700;   line-height: 1.4;   color: #4c6072; } .mp-font-subtitle {   font-family: \'Proxima Nova\', \'proxima-nova\', sans-serif;   font-size: 15px;   font-weight: 600;   line-height: 18px;   color: #4c6072; } .mp-font-list-item {   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 13px;   line-height: 1.7;   color: #6e859d; } .mp-font-paragraph {   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 14px;   font-weight: normal;   line-height: 18px;   color: #6e859d; } * {   -webkit-font-smoothing: antialiased; } .mp-tooltip-wrapper.mp-tooltip-hidden {   pointer-events: none; } .mp-tooltip-wrapper.mp-tooltip-hidden .mp-tooltip-main {   display: none; } .mp-tooltip-wrapper .mp-tooltip-main {   -webkit-box-align: center;       -ms-flex-align: center;           align-items: center;   background-color: #4c6072;   border-radius: 3px;   color: #fff;   cursor: default;   display: -webkit-box;   display: -ms-flexbox;   display: flex;   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 12px;   font-weight: bold;   line-height: 9px;   -webkit-box-pack: center;       -ms-flex-pack: center;           justify-content: center;   padding: 8px;   pointer-events: auto;   position: absolute;   text-transform: initial; } .mp-tooltip-wrapper .mp-tooltip-main::after {   border: 5px solid transparent;   border-top-color: #4c6072;   content: "";   height: 0;   left: 50%;   margin-left: -5px;   position: absolute;   top: 100%;   width: 0; } ';

	var MPTooltip = function (_Component) {
	  _inherits(MPTooltip, _Component);

	  function MPTooltip() {
	    _classCallCheck(this, MPTooltip);

	    return _possibleConstructorReturn(this, (MPTooltip.__proto__ || Object.getPrototypeOf(MPTooltip)).apply(this, arguments));
	  }

	  _createClass(MPTooltip, [{
	    key: 'attachedCallback',
	    value: function attachedCallback() {
	      var _this2 = this;

	      _get(MPTooltip.prototype.__proto__ || Object.getPrototypeOf(MPTooltip.prototype), 'attachedCallback', this).apply(this, arguments);
	      var wrapper = this.el.querySelector('.mp-tooltip-wrapper');
	      var tooltip = this.el.querySelector('.mp-tooltip-main');
	      this.show = function () {
	        wrapper.classList.remove('mp-tooltip-hidden');
	        var leftPos = _this2.parentNode.offsetLeft + _this2.parentNode.offsetWidth / 2 - tooltip.offsetWidth / 2 + 'px';
	        var topPos = _this2.parentNode.offsetTop - tooltip.offsetHeight - 8 + 'px';
	        tooltip.style.left = leftPos;
	        tooltip.style.top = topPos;
	      };
	      this.hide = function () {
	        wrapper.classList.add('mp-tooltip-hidden');
	      };
	      this.stopPropagation = function (e) {
	        e.stopPropagation();
	      };
	      this.parentNode.addEventListener('mouseover', this.show);
	      this.parentNode.addEventListener('mouseleave', this.hide);
	      this.el.addEventListener('click', this.stopPropagation);
	      this.el.addEventListener('mousedown', this.stopPropagation);
	    }
	  }, {
	    key: 'detachedCallback',
	    value: function detachedCallback() {
	      _get(MPTooltip.prototype.__proto__ || Object.getPrototypeOf(MPTooltip.prototype), 'detachedCallback', this).apply(this, arguments);
	      this.parentNode.removeEventListener('mouseover', this.show);
	      this.parentNode.removeEventListener('mouseover', this.hide);
	      this.el.removeEventListener('click', this.stopPropagation);
	      this.el.removeEventListener('mousedown', this.stopPropagation);
	    }
	  }, {
	    key: 'config',
	    get: function get() {
	      return {
	        css: css,
	        template: template,
	        useShadowDom: true
	      };
	    }
	  }]);

	  return MPTooltip;
	}(_panel.Component);

	if (window['mp-common-registered-components']['mp-tooltip'] !== true) {
	  document.registerElement('mp-tooltip', MPTooltip);
	  window['mp-common-registered-components']['mp-tooltip'] = true;
	}

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Persistence = exports.MPApp = undefined;

	var _parentFrame = __webpack_require__(352);

	Object.keys(_parentFrame).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _parentFrame[key];
	    }
	  });
	});

	var _trackingSetup = __webpack_require__(353);

	Object.keys(_trackingSetup).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _trackingSetup[key];
	    }
	  });
	});

	var _mpApp = __webpack_require__(356);

	var _mpApp2 = _interopRequireDefault(_mpApp);

	var _persistence = __webpack_require__(357);

	var _persistence2 = _interopRequireDefault(_persistence);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.MPApp = _mpApp2.default;
	exports.Persistence = _persistence2.default;

/***/ },
/* 352 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mirrorLocationHash = mirrorLocationHash;
	function mirrorLocationHash(parentFrame) {
	  // use replaceState in child frame so it doesn't touch browser
	  // history except through communication with parent frame
	  var origReplaceState = window.history.replaceState;
	  window.history.replaceState = function () {
	    origReplaceState.apply(this, arguments);
	    parentFrame.send('hashChange', window.location.hash);
	  };

	  parentFrame.addHandler('hashChange', function (hash) {
	    if (hash !== window.location.hash) {
	      window.history.replaceState(null, null, hash.replace(/^#*/, '#'));
	    }
	  });

	  window.addEventListener('popstate', function () {
	    return parentFrame.send('hashChange', window.location.hash);
	  });
	}

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initMixpanel = initMixpanel;
	exports.initRollbar = initRollbar;

	var _mixpanelBrowser = __webpack_require__(354);

	var _mixpanelBrowser2 = _interopRequireDefault(_mixpanelBrowser);

	var _rollbarBrowser = __webpack_require__(355);

	var _rollbarBrowser2 = _interopRequireDefault(_rollbarBrowser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* global APP_ENV */

	/*
	 * Env-aware tracking initialization utils
	 *
	 * Inject APP_ENV via global var or build tools (Webpack DefinePlugin)
	 *
	 * Recommended usage: create a separate module that initializes
	 * the libs and exports the instances:
	 *
	 * export const mixpanel = initMixpanel('MY MIXPANEL PUBLISHABLE TOKEN');
	 * export const rollbar = initRollbar('MY ROLLBAR PUBLISHABLE TOKEN');
	 *
	 */

	var appEnv = typeof APP_ENV !== 'undefined' ? APP_ENV : 'development';

	function initMixpanel(token, instanceName) {
	  if (appEnv === 'production') {
	    _mixpanelBrowser2.default.init(token, { persistence: 'localStorage' }, instanceName);
	  } else {
	    // Project 132990 Mixpanel Dev
	    _mixpanelBrowser2.default.init('9c4e9a6caf9f429a7e3821141fc769b7', {
	      debug: true,
	      persistence: 'localStorage'
	    }, instanceName);
	  }
	  return _mixpanelBrowser2.default;
	}

	function initRollbar(token) {
	  return _rollbarBrowser2.default.init({
	    accessToken: token,
	    captureUncaught: true,
	    payload: {
	      environment: appEnv
	    }
	  });
	}

/***/ },
/* 354 */
/***/ function(module, exports) {

	'use strict';

	var Config = {
	    DEBUG: false,
	    LIB_VERSION: '2.9.15'
	};

	// since es6 imports are static and we run unit tests from the console, window won't be defined when importing this file
	var win;
	if (typeof(window) === 'undefined') {
	    win = {
	        navigator: {}
	    };
	} else {
	    win = window;
	}



	/*
	 * Saved references to long variable names, so that closure compiler can
	 * minimize file size.
	 */

	var ArrayProto = Array.prototype;
	var FuncProto = Function.prototype;
	var ObjProto = Object.prototype;
	var slice = ArrayProto.slice;
	var toString = ObjProto.toString;
	var hasOwnProperty = ObjProto.hasOwnProperty;
	var windowConsole = win.console;
	var navigator$1 = win.navigator;
	var document$1 = win.document;
	var userAgent = navigator$1.userAgent;
	var nativeBind = FuncProto.bind;
	var nativeForEach = ArrayProto.forEach;
	var nativeIndexOf = ArrayProto.indexOf;
	var nativeIsArray = Array.isArray;
	var breaker = {};
	var _ = {
	    trim: function(str) {
	        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
	        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	    }
	};

	// Console override
	var console$1 = {
	    /** @type {function(...[*])} */
	    log: function() {
	        if (Config.DEBUG && !_.isUndefined(windowConsole) && windowConsole) {
	            try {
	                windowConsole.log.apply(windowConsole, arguments);
	            } catch (err) {
	                _.each(arguments, function(arg) {
	                    windowConsole.log(arg);
	                });
	            }
	        }
	    },
	    /** @type {function(...[*])} */
	    error: function() {
	        if (Config.DEBUG && !_.isUndefined(windowConsole) && windowConsole) {
	            var args = ['Mixpanel error:'].concat(_.toArray(arguments));
	            try {
	                windowConsole.error.apply(windowConsole, args);
	            } catch (err) {
	                _.each(args, function(arg) {
	                    windowConsole.error(arg);
	                });
	            }
	        }
	    },
	    /** @type {function(...[*])} */
	    critical: function() {
	        if (!_.isUndefined(windowConsole) && windowConsole) {
	            var args = ['Mixpanel error:'].concat(_.toArray(arguments));
	            try {
	                windowConsole.error.apply(windowConsole, args);
	            } catch (err) {
	                _.each(args, function(arg) {
	                    windowConsole.error(arg);
	                });
	            }
	        }
	    }
	};


	// UNDERSCORE
	// Embed part of the Underscore Library
	_.bind = function(func, context) {
	    var args, bound;
	    if (nativeBind && func.bind === nativeBind) {
	        return nativeBind.apply(func, slice.call(arguments, 1));
	    }
	    if (!_.isFunction(func)) {
	        throw new TypeError();
	    }
	    args = slice.call(arguments, 2);
	    bound = function() {
	        if (!(this instanceof bound)) {
	            return func.apply(context, args.concat(slice.call(arguments)));
	        }
	        var ctor = {};
	        ctor.prototype = func.prototype;
	        var self = new ctor();
	        ctor.prototype = null;
	        var result = func.apply(self, args.concat(slice.call(arguments)));
	        if (Object(result) === result) {
	            return result;
	        }
	        return self;
	    };
	    return bound;
	};

	_.bind_instance_methods = function(obj) {
	    for (var func in obj) {
	        if (typeof(obj[func]) === 'function') {
	            obj[func] = _.bind(obj[func], obj);
	        }
	    }
	};

	/**
	 * @param {*=} obj
	 * @param {function(...[*])=} iterator
	 * @param {Object=} context
	 */
	_.each = function(obj, iterator, context) {
	    if (obj === null || obj === undefined) {
	        return;
	    }
	    if (nativeForEach && obj.forEach === nativeForEach) {
	        obj.forEach(iterator, context);
	    } else if (obj.length === +obj.length) {
	        for (var i = 0, l = obj.length; i < l; i++) {
	            if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) {
	                return;
	            }
	        }
	    } else {
	        for (var key in obj) {
	            if (hasOwnProperty.call(obj, key)) {
	                if (iterator.call(context, obj[key], key, obj) === breaker) {
	                    return;
	                }
	            }
	        }
	    }
	};

	_.escapeHTML = function(s) {
	    var escaped = s;
	    if (escaped && _.isString(escaped)) {
	        escaped = escaped
	            .replace(/&/g, '&amp;')
	            .replace(/</g, '&lt;')
	            .replace(/>/g, '&gt;')
	            .replace(/"/g, '&quot;')
	            .replace(/'/g, '&#039;');
	    }
	    return escaped;
	};

	_.extend = function(obj) {
	    _.each(slice.call(arguments, 1), function(source) {
	        for (var prop in source) {
	            if (source[prop] !== void 0) {
	                obj[prop] = source[prop];
	            }
	        }
	    });
	    return obj;
	};

	_.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	};

	// from a comment on http://dbj.org/dbj/?p=286
	// fails on only one very rare and deliberate custom object:
	// var bomb = { toString : undefined, valueOf: function(o) { return "function BOMBA!"; }};
	_.isFunction = function(f) {
	    try {
	        return /^\s*\bfunction\b/.test(f);
	    } catch (x) {
	        return false;
	    }
	};

	_.isArguments = function(obj) {
	    return !!(obj && hasOwnProperty.call(obj, 'callee'));
	};

	_.toArray = function(iterable) {
	    if (!iterable) {
	        return [];
	    }
	    if (iterable.toArray) {
	        return iterable.toArray();
	    }
	    if (_.isArray(iterable)) {
	        return slice.call(iterable);
	    }
	    if (_.isArguments(iterable)) {
	        return slice.call(iterable);
	    }
	    return _.values(iterable);
	};

	_.values = function(obj) {
	    var results = [];
	    if (obj === null) {
	        return results;
	    }
	    _.each(obj, function(value) {
	        results[results.length] = value;
	    });
	    return results;
	};

	_.identity = function(value) {
	    return value;
	};

	_.include = function(obj, target) {
	    var found = false;
	    if (obj === null) {
	        return found;
	    }
	    if (nativeIndexOf && obj.indexOf === nativeIndexOf) {
	        return obj.indexOf(target) != -1;
	    }
	    _.each(obj, function(value) {
	        if (found || (found = (value === target))) {
	            return breaker;
	        }
	    });
	    return found;
	};

	_.includes = function(str, needle) {
	    return str.indexOf(needle) !== -1;
	};

	// Underscore Addons
	_.inherit = function(subclass, superclass) {
	    subclass.prototype = new superclass();
	    subclass.prototype.constructor = subclass;
	    subclass.superclass = superclass.prototype;
	    return subclass;
	};

	_.isObject = function(obj) {
	    return (obj === Object(obj) && !_.isArray(obj));
	};

	_.isEmptyObject = function(obj) {
	    if (_.isObject(obj)) {
	        for (var key in obj) {
	            if (hasOwnProperty.call(obj, key)) {
	                return false;
	            }
	        }
	        return true;
	    }
	    return false;
	};

	_.isUndefined = function(obj) {
	    return obj === void 0;
	};

	_.isString = function(obj) {
	    return toString.call(obj) == '[object String]';
	};

	_.isDate = function(obj) {
	    return toString.call(obj) == '[object Date]';
	};

	_.isNumber = function(obj) {
	    return toString.call(obj) == '[object Number]';
	};

	_.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	};

	_.encodeDates = function(obj) {
	    _.each(obj, function(v, k) {
	        if (_.isDate(v)) {
	            obj[k] = _.formatDate(v);
	        } else if (_.isObject(v)) {
	            obj[k] = _.encodeDates(v); // recurse
	        }
	    });
	    return obj;
	};

	_.timestamp = function() {
	    Date.now = Date.now || function() {
	        return +new Date;
	    };
	    return Date.now();
	};

	_.formatDate = function(d) {
	    // YYYY-MM-DDTHH:MM:SS in UTC
	    function pad(n) {
	        return n < 10 ? '0' + n : n;
	    }
	    return d.getUTCFullYear() + '-' +
	        pad(d.getUTCMonth() + 1) + '-' +
	        pad(d.getUTCDate()) + 'T' +
	        pad(d.getUTCHours()) + ':' +
	        pad(d.getUTCMinutes()) + ':' +
	        pad(d.getUTCSeconds());
	};

	_.safewrap = function(f) {
	    return function() {
	        try {
	            return f.apply(this, arguments);
	        } catch (e) {
	            console$1.critical('Implementation error. Please contact support@mixpanel.com.');
	        }
	    };
	};

	_.safewrap_class = function(klass, functions) {
	    for (var i = 0; i < functions.length; i++) {
	        klass.prototype[functions[i]] = _.safewrap(klass.prototype[functions[i]]);
	    }
	};

	_.safewrap_instance_methods = function(obj) {
	    for (var func in obj) {
	        if (typeof(obj[func]) === 'function') {
	            obj[func] = _.safewrap(obj[func]);
	        }
	    }
	};

	_.strip_empty_properties = function(p) {
	    var ret = {};
	    _.each(p, function(v, k) {
	        if (_.isString(v) && v.length > 0) {
	            ret[k] = v;
	        }
	    });
	    return ret;
	};

	/*
	 * this function returns a copy of object after truncating it.  If
	 * passed an Array or Object it will iterate through obj and
	 * truncate all the values recursively.
	 */
	_.truncate = function(obj, length) {
	    var ret;

	    if (typeof(obj) === 'string') {
	        ret = obj.slice(0, length);
	    } else if (_.isArray(obj)) {
	        ret = [];
	        _.each(obj, function(val) {
	            ret.push(_.truncate(val, length));
	        });
	    } else if (_.isObject(obj)) {
	        ret = {};
	        _.each(obj, function(val, key) {
	            ret[key] = _.truncate(val, length);
	        });
	    } else {
	        ret = obj;
	    }

	    return ret;
	};

	_.JSONEncode = (function() {
	    return function(mixed_val) {
	        var value = mixed_val;
	        var quote = function(string) {
	            var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
	            var meta = { // table of character substitutions
	                '\b': '\\b',
	                '\t': '\\t',
	                '\n': '\\n',
	                '\f': '\\f',
	                '\r': '\\r',
	                '"': '\\"',
	                '\\': '\\\\'
	            };

	            escapable.lastIndex = 0;
	            return escapable.test(string) ?
	                '"' + string.replace(escapable, function(a) {
	                    var c = meta[a];
	                    return typeof c === 'string' ? c :
	                        '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
	                }) + '"' :
	                '"' + string + '"';
	        };

	        var str = function(key, holder) {
	            var gap = '';
	            var indent = '    ';
	            var i = 0; // The loop counter.
	            var k = ''; // The member key.
	            var v = ''; // The member value.
	            var length = 0;
	            var mind = gap;
	            var partial = [];
	            var value = holder[key];

	            // If the value has a toJSON method, call it to obtain a replacement value.
	            if (value && typeof value === 'object' &&
	                typeof value.toJSON === 'function') {
	                value = value.toJSON(key);
	            }

	            // What happens next depends on the value's type.
	            switch (typeof value) {
	                case 'string':
	                    return quote(value);

	                case 'number':
	                    // JSON numbers must be finite. Encode non-finite numbers as null.
	                    return isFinite(value) ? String(value) : 'null';

	                case 'boolean':
	                case 'null':
	                    // If the value is a boolean or null, convert it to a string. Note:
	                    // typeof null does not produce 'null'. The case is included here in
	                    // the remote chance that this gets fixed someday.

	                    return String(value);

	                case 'object':
	                    // If the type is 'object', we might be dealing with an object or an array or
	                    // null.
	                    // Due to a specification blunder in ECMAScript, typeof null is 'object',
	                    // so watch out for that case.
	                    if (!value) {
	                        return 'null';
	                    }

	                    // Make an array to hold the partial results of stringifying this object value.
	                    gap += indent;
	                    partial = [];

	                    // Is the value an array?
	                    if (toString.apply(value) === '[object Array]') {
	                        // The value is an array. Stringify every element. Use null as a placeholder
	                        // for non-JSON values.

	                        length = value.length;
	                        for (i = 0; i < length; i += 1) {
	                            partial[i] = str(i, value) || 'null';
	                        }

	                        // Join all of the elements together, separated with commas, and wrap them in
	                        // brackets.
	                        v = partial.length === 0 ? '[]' :
	                            gap ? '[\n' + gap +
	                            partial.join(',\n' + gap) + '\n' +
	                            mind + ']' :
	                            '[' + partial.join(',') + ']';
	                        gap = mind;
	                        return v;
	                    }

	                    // Iterate through all of the keys in the object.
	                    for (k in value) {
	                        if (hasOwnProperty.call(value, k)) {
	                            v = str(k, value);
	                            if (v) {
	                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
	                            }
	                        }
	                    }

	                    // Join all of the member texts together, separated with commas,
	                    // and wrap them in braces.
	                    v = partial.length === 0 ? '{}' :
	                        gap ? '{' + partial.join(',') + '' +
	                        mind + '}' : '{' + partial.join(',') + '}';
	                    gap = mind;
	                    return v;
	            }
	        };

	        // Make a fake root object containing our value under the key of ''.
	        // Return the result of stringifying the value.
	        return str('', {
	            '': value
	        });
	    };
	})();

	_.JSONDecode = (function() { // https://github.com/douglascrockford/JSON-js/blob/master/json_parse.js
	    var at, // The index of the current character
	        ch, // The current character
	        escapee = {
	            '"': '"',
	            '\\': '\\',
	            '/': '/',
	            'b': '\b',
	            'f': '\f',
	            'n': '\n',
	            'r': '\r',
	            't': '\t'
	        },
	        text,
	        error = function(m) {
	            throw {
	                name: 'SyntaxError',
	                message: m,
	                at: at,
	                text: text
	            };
	        },
	        next = function(c) {
	            // If a c parameter is provided, verify that it matches the current character.
	            if (c && c !== ch) {
	                error('Expected \'' + c + '\' instead of \'' + ch + '\'');
	            }
	            // Get the next character. When there are no more characters,
	            // return the empty string.
	            ch = text.charAt(at);
	            at += 1;
	            return ch;
	        },
	        number = function() {
	            // Parse a number value.
	            var number,
	                string = '';

	            if (ch === '-') {
	                string = '-';
	                next('-');
	            }
	            while (ch >= '0' && ch <= '9') {
	                string += ch;
	                next();
	            }
	            if (ch === '.') {
	                string += '.';
	                while (next() && ch >= '0' && ch <= '9') {
	                    string += ch;
	                }
	            }
	            if (ch === 'e' || ch === 'E') {
	                string += ch;
	                next();
	                if (ch === '-' || ch === '+') {
	                    string += ch;
	                    next();
	                }
	                while (ch >= '0' && ch <= '9') {
	                    string += ch;
	                    next();
	                }
	            }
	            number = +string;
	            if (!isFinite(number)) {
	                error('Bad number');
	            } else {
	                return number;
	            }
	        },

	        string = function() {
	            // Parse a string value.
	            var hex,
	                i,
	                string = '',
	                uffff;
	            // When parsing for string values, we must look for " and \ characters.
	            if (ch === '"') {
	                while (next()) {
	                    if (ch === '"') {
	                        next();
	                        return string;
	                    }
	                    if (ch === '\\') {
	                        next();
	                        if (ch === 'u') {
	                            uffff = 0;
	                            for (i = 0; i < 4; i += 1) {
	                                hex = parseInt(next(), 16);
	                                if (!isFinite(hex)) {
	                                    break;
	                                }
	                                uffff = uffff * 16 + hex;
	                            }
	                            string += String.fromCharCode(uffff);
	                        } else if (typeof escapee[ch] === 'string') {
	                            string += escapee[ch];
	                        } else {
	                            break;
	                        }
	                    } else {
	                        string += ch;
	                    }
	                }
	            }
	            error('Bad string');
	        },
	        white = function() {
	            // Skip whitespace.
	            while (ch && ch <= ' ') {
	                next();
	            }
	        },
	        word = function() {
	            // true, false, or null.
	            switch (ch) {
	                case 't':
	                    next('t');
	                    next('r');
	                    next('u');
	                    next('e');
	                    return true;
	                case 'f':
	                    next('f');
	                    next('a');
	                    next('l');
	                    next('s');
	                    next('e');
	                    return false;
	                case 'n':
	                    next('n');
	                    next('u');
	                    next('l');
	                    next('l');
	                    return null;
	            }
	            error('Unexpected "' + ch + '"');
	        },
	        value, // Placeholder for the value function.
	        array = function() {
	            // Parse an array value.
	            var array = [];

	            if (ch === '[') {
	                next('[');
	                white();
	                if (ch === ']') {
	                    next(']');
	                    return array; // empty array
	                }
	                while (ch) {
	                    array.push(value());
	                    white();
	                    if (ch === ']') {
	                        next(']');
	                        return array;
	                    }
	                    next(',');
	                    white();
	                }
	            }
	            error('Bad array');
	        },
	        object = function() {
	            // Parse an object value.
	            var key,
	                object = {};

	            if (ch === '{') {
	                next('{');
	                white();
	                if (ch === '}') {
	                    next('}');
	                    return object; // empty object
	                }
	                while (ch) {
	                    key = string();
	                    white();
	                    next(':');
	                    if (Object.hasOwnProperty.call(object, key)) {
	                        error('Duplicate key "' + key + '"');
	                    }
	                    object[key] = value();
	                    white();
	                    if (ch === '}') {
	                        next('}');
	                        return object;
	                    }
	                    next(',');
	                    white();
	                }
	            }
	            error('Bad object');
	        };

	    value = function() {
	        // Parse a JSON value. It could be an object, an array, a string,
	        // a number, or a word.
	        white();
	        switch (ch) {
	            case '{':
	                return object();
	            case '[':
	                return array();
	            case '"':
	                return string();
	            case '-':
	                return number();
	            default:
	                return ch >= '0' && ch <= '9' ? number() : word();
	        }
	    };

	    // Return the json_parse function. It will have access to all of the
	    // above functions and variables.
	    return function(source) {
	        var result;

	        text = source;
	        at = 0;
	        ch = ' ';
	        result = value();
	        white();
	        if (ch) {
	            error('Syntax error');
	        }

	        return result;
	    };
	})();

	_.base64Encode = function(data) {
	    var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
	        ac = 0,
	        enc = '',
	        tmp_arr = [];

	    if (!data) {
	        return data;
	    }

	    data = _.utf8Encode(data);

	    do { // pack three octets into four hexets
	        o1 = data.charCodeAt(i++);
	        o2 = data.charCodeAt(i++);
	        o3 = data.charCodeAt(i++);

	        bits = o1 << 16 | o2 << 8 | o3;

	        h1 = bits >> 18 & 0x3f;
	        h2 = bits >> 12 & 0x3f;
	        h3 = bits >> 6 & 0x3f;
	        h4 = bits & 0x3f;

	        // use hexets to index into b64, and append result to encoded string
	        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
	    } while (i < data.length);

	    enc = tmp_arr.join('');

	    switch (data.length % 3) {
	        case 1:
	            enc = enc.slice(0, -2) + '==';
	            break;
	        case 2:
	            enc = enc.slice(0, -1) + '=';
	            break;
	    }

	    return enc;
	};

	_.utf8Encode = function(string) {
	    string = (string + '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');

	    var utftext = '',
	        start,
	        end;
	    var stringl = 0,
	        n;

	    start = end = 0;
	    stringl = string.length;

	    for (n = 0; n < stringl; n++) {
	        var c1 = string.charCodeAt(n);
	        var enc = null;

	        if (c1 < 128) {
	            end++;
	        } else if ((c1 > 127) && (c1 < 2048)) {
	            enc = String.fromCharCode((c1 >> 6) | 192, (c1 & 63) | 128);
	        } else {
	            enc = String.fromCharCode((c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128);
	        }
	        if (enc !== null) {
	            if (end > start) {
	                utftext += string.substring(start, end);
	            }
	            utftext += enc;
	            start = end = n + 1;
	        }
	    }

	    if (end > start) {
	        utftext += string.substring(start, string.length);
	    }

	    return utftext;
	};

	_.UUID = (function() {

	    // Time/ticks information
	    // 1*new Date() is a cross browser version of Date.now()
	    var T = function() {
	        var d = 1 * new Date(),
	            i = 0;

	        // this while loop figures how many browser ticks go by
	        // before 1*new Date() returns a new number, ie the amount
	        // of ticks that go by per millisecond
	        while (d == 1 * new Date()) {
	            i++;
	        }

	        return d.toString(16) + i.toString(16);
	    };

	    // Math.Random entropy
	    var R = function() {
	        return Math.random().toString(16).replace('.', '');
	    };

	    // User agent entropy
	    // This function takes the user agent string, and then xors
	    // together each sequence of 8 bytes.  This produces a final
	    // sequence of 8 bytes which it returns as hex.
	    var UA = function() {
	        var ua = userAgent,
	            i, ch, buffer = [],
	            ret = 0;

	        function xor(result, byte_array) {
	            var j, tmp = 0;
	            for (j = 0; j < byte_array.length; j++) {
	                tmp |= (buffer[j] << j * 8);
	            }
	            return result ^ tmp;
	        }

	        for (i = 0; i < ua.length; i++) {
	            ch = ua.charCodeAt(i);
	            buffer.unshift(ch & 0xFF);
	            if (buffer.length >= 4) {
	                ret = xor(ret, buffer);
	                buffer = [];
	            }
	        }

	        if (buffer.length > 0) {
	            ret = xor(ret, buffer);
	        }

	        return ret.toString(16);
	    };

	    return function() {
	        var se = (screen.height * screen.width).toString(16);
	        return (T() + '-' + R() + '-' + UA() + '-' + se + '-' + T());
	    };
	})();

	// _.isBlockedUA()
	// This is to block various web spiders from executing our JS and
	// sending false tracking data
	_.isBlockedUA = function(ua) {
	    if (/(google web preview|baiduspider|yandexbot|bingbot|googlebot|yahoo! slurp)/i.test(ua)) {
	        return true;
	    }
	    return false;
	};

	/**
	 * @param {Object=} formdata
	 * @param {string=} arg_separator
	 */
	_.HTTPBuildQuery = function(formdata, arg_separator) {
	    var use_val, use_key, tmp_arr = [];

	    if (_.isUndefined(arg_separator)) {
	        arg_separator = '&';
	    }

	    _.each(formdata, function(val, key) {
	        use_val = encodeURIComponent(val.toString());
	        use_key = encodeURIComponent(key);
	        tmp_arr[tmp_arr.length] = use_key + '=' + use_val;
	    });

	    return tmp_arr.join(arg_separator);
	};

	_.getQueryParam = function(url, param) {
	    // Expects a raw URL

	    param = param.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
	    var regexS = '[\\?&]' + param + '=([^&#]*)',
	        regex = new RegExp(regexS),
	        results = regex.exec(url);
	    if (results === null || (results && typeof(results[1]) !== 'string' && results[1].length)) {
	        return '';
	    } else {
	        return decodeURIComponent(results[1]).replace(/\+/g, ' ');
	    }
	};

	_.getHashParam = function(hash, param) {
	    var matches = hash.match(new RegExp(param + '=([^&]*)'));
	    return matches ? matches[1] : null;
	};

	// _.cookie
	// Methods partially borrowed from quirksmode.org/js/cookies.html
	_.cookie = {
	    get: function(name) {
	        var nameEQ = name + '=';
	        var ca = document$1.cookie.split(';');
	        for (var i = 0; i < ca.length; i++) {
	            var c = ca[i];
	            while (c.charAt(0) == ' ') {
	                c = c.substring(1, c.length);
	            }
	            if (c.indexOf(nameEQ) === 0) {
	                return decodeURIComponent(c.substring(nameEQ.length, c.length));
	            }
	        }
	        return null;
	    },

	    parse: function(name) {
	        var cookie;
	        try {
	            cookie = _.JSONDecode(_.cookie.get(name)) || {};
	        } catch (err) {
	            // noop
	        }
	        return cookie;
	    },

	    set_seconds: function(name, value, seconds, cross_subdomain, is_secure) {
	        var cdomain = '',
	            expires = '',
	            secure = '';

	        if (cross_subdomain) {
	            var matches = document$1.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i),
	                domain = matches ? matches[0] : '';

	            cdomain = ((domain) ? '; domain=.' + domain : '');
	        }

	        if (seconds) {
	            var date = new Date();
	            date.setTime(date.getTime() + (seconds * 1000));
	            expires = '; expires=' + date.toGMTString();
	        }

	        if (is_secure) {
	            secure = '; secure';
	        }

	        document$1.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/' + cdomain + secure;
	    },

	    set: function(name, value, days, cross_subdomain, is_secure) {
	        var cdomain = '', expires = '', secure = '';

	        if (cross_subdomain) {
	            var matches = document$1.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i),
	                domain = matches ? matches[0] : '';

	            cdomain   = ((domain) ? '; domain=.' + domain : '');
	        }

	        if (days) {
	            var date = new Date();
	            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	            expires = '; expires=' + date.toGMTString();
	        }

	        if (is_secure) {
	            secure = '; secure';
	        }

	        var new_cookie_val = name + '=' + encodeURIComponent(value) + expires + '; path=/' + cdomain + secure;
	        document$1.cookie = new_cookie_val;
	        return new_cookie_val;
	    },

	    remove: function(name, cross_subdomain) {
	        _.cookie.set(name, '', -1, cross_subdomain);
	    }
	};

	// _.localStorage
	_.localStorage = {
	    error: function(msg) {
	        console$1.error('localStorage error: ' + msg);
	    },

	    get: function(name) {
	        try {
	            return window.localStorage.getItem(name);
	        } catch (err) {
	            _.localStorage.error(err);
	        }
	        return null;
	    },

	    parse: function(name) {
	        try {
	            return _.JSONDecode(_.localStorage.get(name)) || {};
	        } catch (err) {
	            // noop
	        }
	        return null;
	    },

	    set: function(name, value) {
	        try {
	            window.localStorage.setItem(name, value);
	        } catch (err) {
	            _.localStorage.error(err);
	        }
	    },

	    remove: function(name) {
	        try {
	            window.localStorage.removeItem(name);
	        } catch (err) {
	            _.localStorage.error(err);
	        }
	    }
	};

	_.register_event = (function() {
	    // written by Dean Edwards, 2005
	    // with input from Tino Zijdel - crisp@xs4all.nl
	    // with input from Carl Sverre - mail@carlsverre.com
	    // with input from Mixpanel
	    // http://dean.edwards.name/weblog/2005/10/add-event/
	    // https://gist.github.com/1930440

	    /**
	     * @param {Object} element
	     * @param {string} type
	     * @param {function(...[*])} handler
	     * @param {boolean=} oldSchool
	     * @param {boolean=} useCapture
	     */
	    var register_event = function(element, type, handler, oldSchool, useCapture) {
	        if (!element) {
	            console$1.error('No valid element provided to register_event');
	            return;
	        }

	        if (element.addEventListener && !oldSchool) {
	            element.addEventListener(type, handler, !!useCapture);
	        } else {
	            var ontype = 'on' + type;
	            var old_handler = element[ontype]; // can be undefined
	            element[ontype] = makeHandler(element, handler, old_handler);
	        }
	    };

	    function makeHandler(element, new_handler, old_handlers) {
	        var handler = function(event) {
	            event = event || fixEvent(window.event);

	            // this basically happens in firefox whenever another script
	            // overwrites the onload callback and doesn't pass the event
	            // object to previously defined callbacks.  All the browsers
	            // that don't define window.event implement addEventListener
	            // so the dom_loaded handler will still be fired as usual.
	            if (!event) {
	                return undefined;
	            }

	            var ret = true;
	            var old_result, new_result;

	            if (_.isFunction(old_handlers)) {
	                old_result = old_handlers(event);
	            }
	            new_result = new_handler.call(element, event);

	            if ((false === old_result) || (false === new_result)) {
	                ret = false;
	            }

	            return ret;
	        };

	        return handler;
	    }

	    function fixEvent(event) {
	        if (event) {
	            event.preventDefault = fixEvent.preventDefault;
	            event.stopPropagation = fixEvent.stopPropagation;
	        }
	        return event;
	    }
	    fixEvent.preventDefault = function() {
	        this.returnValue = false;
	    };
	    fixEvent.stopPropagation = function() {
	        this.cancelBubble = true;
	    };

	    return register_event;
	})();

	_.dom_query = (function() {
	    /* document.getElementsBySelector(selector)
	    - returns an array of element objects from the current document
	    matching the CSS selector. Selectors can contain element names,
	    class names and ids and can be nested. For example:

	    elements = document.getElementsBySelector('div#main p a.external')

	    Will return an array of all 'a' elements with 'external' in their
	    class attribute that are contained inside 'p' elements that are
	    contained inside the 'div' element which has id="main"

	    New in version 0.4: Support for CSS2 and CSS3 attribute selectors:
	    See http://www.w3.org/TR/css3-selectors/#attribute-selectors

	    Version 0.4 - Simon Willison, March 25th 2003
	    -- Works in Phoenix 0.5, Mozilla 1.3, Opera 7, Internet Explorer 6, Internet Explorer 5 on Windows
	    -- Opera 7 fails

	    Version 0.5 - Carl Sverre, Jan 7th 2013
	    -- Now uses jQuery-esque `hasClass` for testing class name
	    equality.  This fixes a bug related to '-' characters being
	    considered not part of a 'word' in regex.
	    */

	    function getAllChildren(e) {
	        // Returns all children of element. Workaround required for IE5/Windows. Ugh.
	        return e.all ? e.all : e.getElementsByTagName('*');
	    }

	    var bad_whitespace = /[\t\r\n]/g;

	    function hasClass(elem, selector) {
	        var className = ' ' + selector + ' ';
	        return ((' ' + elem.className + ' ').replace(bad_whitespace, ' ').indexOf(className) >= 0);
	    }

	    function getElementsBySelector(selector) {
	        // Attempt to fail gracefully in lesser browsers
	        if (!document$1.getElementsByTagName) {
	            return [];
	        }
	        // Split selector in to tokens
	        var tokens = selector.split(' ');
	        var token, bits, tagName, found, foundCount, i, j, k, elements, currentContextIndex;
	        var currentContext = [document$1];
	        for (i = 0; i < tokens.length; i++) {
	            token = tokens[i].replace(/^\s+/, '').replace(/\s+$/, '');
	            if (token.indexOf('#') > -1) {
	                // Token is an ID selector
	                bits = token.split('#');
	                tagName = bits[0];
	                var id = bits[1];
	                var element = document$1.getElementById(id);
	                if (!element || (tagName && element.nodeName.toLowerCase() != tagName)) {
	                    // element not found or tag with that ID not found, return false
	                    return [];
	                }
	                // Set currentContext to contain just this element
	                currentContext = [element];
	                continue; // Skip to next token
	            }
	            if (token.indexOf('.') > -1) {
	                // Token contains a class selector
	                bits = token.split('.');
	                tagName = bits[0];
	                var className = bits[1];
	                if (!tagName) {
	                    tagName = '*';
	                }
	                // Get elements matching tag, filter them for class selector
	                found = [];
	                foundCount = 0;
	                for (j = 0; j < currentContext.length; j++) {
	                    if (tagName == '*') {
	                        elements = getAllChildren(currentContext[j]);
	                    } else {
	                        elements = currentContext[j].getElementsByTagName(tagName);
	                    }
	                    for (k = 0; k < elements.length; k++) {
	                        found[foundCount++] = elements[k];
	                    }
	                }
	                currentContext = [];
	                currentContextIndex = 0;
	                for (j = 0; j < found.length; j++) {
	                    if (found[j].className &&
	                        _.isString(found[j].className) && // some SVG elements have classNames which are not strings
	                        hasClass(found[j], className)
	                    ) {
	                        currentContext[currentContextIndex++] = found[j];
	                    }
	                }
	                continue; // Skip to next token
	            }
	            // Code to deal with attribute selectors
	            var token_match = token.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/);
	            if (token_match) {
	                tagName = token_match[1];
	                var attrName = token_match[2];
	                var attrOperator = token_match[3];
	                var attrValue = token_match[4];
	                if (!tagName) {
	                    tagName = '*';
	                }
	                // Grab all of the tagName elements within current context
	                found = [];
	                foundCount = 0;
	                for (j = 0; j < currentContext.length; j++) {
	                    if (tagName == '*') {
	                        elements = getAllChildren(currentContext[j]);
	                    } else {
	                        elements = currentContext[j].getElementsByTagName(tagName);
	                    }
	                    for (k = 0; k < elements.length; k++) {
	                        found[foundCount++] = elements[k];
	                    }
	                }
	                currentContext = [];
	                currentContextIndex = 0;
	                var checkFunction; // This function will be used to filter the elements
	                switch (attrOperator) {
	                    case '=': // Equality
	                        checkFunction = function(e) {
	                            return (e.getAttribute(attrName) == attrValue);
	                        };
	                        break;
	                    case '~': // Match one of space seperated words
	                        checkFunction = function(e) {
	                            return (e.getAttribute(attrName).match(new RegExp('\\b' + attrValue + '\\b')));
	                        };
	                        break;
	                    case '|': // Match start with value followed by optional hyphen
	                        checkFunction = function(e) {
	                            return (e.getAttribute(attrName).match(new RegExp('^' + attrValue + '-?')));
	                        };
	                        break;
	                    case '^': // Match starts with value
	                        checkFunction = function(e) {
	                            return (e.getAttribute(attrName).indexOf(attrValue) === 0);
	                        };
	                        break;
	                    case '$': // Match ends with value - fails with "Warning" in Opera 7
	                        checkFunction = function(e) {
	                            return (e.getAttribute(attrName).lastIndexOf(attrValue) == e.getAttribute(attrName).length - attrValue.length);
	                        };
	                        break;
	                    case '*': // Match ends with value
	                        checkFunction = function(e) {
	                            return (e.getAttribute(attrName).indexOf(attrValue) > -1);
	                        };
	                        break;
	                    default:
	                        // Just test for existence of attribute
	                        checkFunction = function(e) {
	                            return e.getAttribute(attrName);
	                        };
	                }
	                currentContext = [];
	                currentContextIndex = 0;
	                for (j = 0; j < found.length; j++) {
	                    if (checkFunction(found[j])) {
	                        currentContext[currentContextIndex++] = found[j];
	                    }
	                }
	                // alert('Attribute Selector: '+tagName+' '+attrName+' '+attrOperator+' '+attrValue);
	                continue; // Skip to next token
	            }
	            // If we get here, token is JUST an element (not a class or ID selector)
	            tagName = token;
	            found = [];
	            foundCount = 0;
	            for (j = 0; j < currentContext.length; j++) {
	                elements = currentContext[j].getElementsByTagName(tagName);
	                for (k = 0; k < elements.length; k++) {
	                    found[foundCount++] = elements[k];
	                }
	            }
	            currentContext = found;
	        }
	        return currentContext;
	    }

	    return function(query) {
	        if (_.isElement(query)) {
	            return [query];
	        } else if (_.isObject(query) && !_.isUndefined(query.length)) {
	            return query;
	        } else {
	            return getElementsBySelector.call(this, query);
	        }
	    };
	})();

	_.info = {
	    campaignParams: function() {
	        var campaign_keywords = 'utm_source utm_medium utm_campaign utm_content utm_term'.split(' '),
	            kw = '',
	            params = {};
	        _.each(campaign_keywords, function(kwkey) {
	            kw = _.getQueryParam(document$1.URL, kwkey);
	            if (kw.length) {
	                params[kwkey] = kw;
	            }
	        });

	        return params;
	    },

	    searchEngine: function(referrer) {
	        if (referrer.search('https?://(.*)google.([^/?]*)') === 0) {
	            return 'google';
	        } else if (referrer.search('https?://(.*)bing.com') === 0) {
	            return 'bing';
	        } else if (referrer.search('https?://(.*)yahoo.com') === 0) {
	            return 'yahoo';
	        } else if (referrer.search('https?://(.*)duckduckgo.com') === 0) {
	            return 'duckduckgo';
	        } else {
	            return null;
	        }
	    },

	    searchInfo: function(referrer) {
	        var search = _.info.searchEngine(referrer),
	            param = (search != 'yahoo') ? 'q' : 'p',
	            ret = {};

	        if (search !== null) {
	            ret['$search_engine'] = search;

	            var keyword = _.getQueryParam(referrer, param);
	            if (keyword.length) {
	                ret['mp_keyword'] = keyword;
	            }
	        }

	        return ret;
	    },

	    /**
	     * This function detects which browser is running this script.
	     * The order of the checks are important since many user agents
	     * include key words used in later checks.
	     */
	    browser: function(user_agent, vendor, opera) {
	        vendor = vendor || ''; // vendor is undefined for at least IE9
	        if (opera || _.includes(user_agent, ' OPR/')) {
	            if (_.includes(user_agent, 'Mini')) {
	                return 'Opera Mini';
	            }
	            return 'Opera';
	        } else if (/(BlackBerry|PlayBook|BB10)/i.test(user_agent)) {
	            return 'BlackBerry';
	        } else if (_.includes(user_agent, 'IEMobile') || _.includes(user_agent, 'WPDesktop')) {
	            return 'Internet Explorer Mobile';
	        } else if (_.includes(user_agent, 'Edge')) {
	            return 'Microsoft Edge';
	        } else if (_.includes(user_agent, 'FBIOS')) {
	            return 'Facebook Mobile';
	        } else if (_.includes(user_agent, 'Chrome')) {
	            return 'Chrome';
	        } else if (_.includes(user_agent, 'CriOS')) {
	            return 'Chrome iOS';
	        } else if (_.includes(user_agent, 'FxiOS')) {
	            return 'Firefox iOS';
	        } else if (_.includes(vendor, 'Apple')) {
	            if (_.includes(user_agent, 'Mobile')) {
	                return 'Mobile Safari';
	            }
	            return 'Safari';
	        } else if (_.includes(user_agent, 'Android')) {
	            return 'Android Mobile';
	        } else if (_.includes(user_agent, 'Konqueror')) {
	            return 'Konqueror';
	        } else if (_.includes(user_agent, 'Firefox')) {
	            return 'Firefox';
	        } else if (_.includes(user_agent, 'MSIE') || _.includes(user_agent, 'Trident/')) {
	            return 'Internet Explorer';
	        } else if (_.includes(user_agent, 'Gecko')) {
	            return 'Mozilla';
	        } else {
	            return '';
	        }
	    },

	    /**
	     * This function detects which browser version is running this script,
	     * parsing major and minor version (e.g., 42.1). User agent strings from:
	     * http://www.useragentstring.com/pages/useragentstring.php
	     */
	    browserVersion: function(userAgent, vendor, opera) {
	        var browser = _.info.browser(userAgent, vendor, opera);
	        var versionRegexs = {
	            'Internet Explorer Mobile': /rv:(\d+(\.\d+)?)/,
	            'Microsoft Edge': /Edge\/(\d+(\.\d+)?)/,
	            'Chrome': /Chrome\/(\d+(\.\d+)?)/,
	            'Chrome iOS': /CriOS\/(\d+(\.\d+)?)/,
	            'Safari': /Version\/(\d+(\.\d+)?)/,
	            'Mobile Safari': /Version\/(\d+(\.\d+)?)/,
	            'Opera': /(Opera|OPR)\/(\d+(\.\d+)?)/,
	            'Firefox': /Firefox\/(\d+(\.\d+)?)/,
	            'Firefox iOS': /FxiOS\/(\d+(\.\d+)?)/,
	            'Konqueror': /Konqueror:(\d+(\.\d+)?)/,
	            'BlackBerry': /BlackBerry (\d+(\.\d+)?)/,
	            'Android Mobile': /android\s(\d+(\.\d+)?)/,
	            'Internet Explorer': /(rv:|MSIE )(\d+(\.\d+)?)/,
	            'Mozilla': /rv:(\d+(\.\d+)?)/
	        };
	        var regex = versionRegexs[browser];
	        if (regex === undefined) {
	            return null;
	        }
	        var matches = userAgent.match(regex);
	        if (!matches) {
	            return null;
	        }
	        return parseFloat(matches[matches.length - 2]);
	    },

	    os: function() {
	        var a = userAgent;
	        if (/Windows/i.test(a)) {
	            if (/Phone/.test(a) || /WPDesktop/.test(a)) {
	                return 'Windows Phone';
	            }
	            return 'Windows';
	        } else if (/(iPhone|iPad|iPod)/.test(a)) {
	            return 'iOS';
	        } else if (/Android/.test(a)) {
	            return 'Android';
	        } else if (/(BlackBerry|PlayBook|BB10)/i.test(a)) {
	            return 'BlackBerry';
	        } else if (/Mac/i.test(a)) {
	            return 'Mac OS X';
	        } else if (/Linux/.test(a)) {
	            return 'Linux';
	        } else {
	            return '';
	        }
	    },

	    device: function(user_agent) {
	        if (/Windows Phone/i.test(user_agent) || /WPDesktop/.test(user_agent)) {
	            return 'Windows Phone';
	        } else if (/iPad/.test(user_agent)) {
	            return 'iPad';
	        } else if (/iPod/.test(user_agent)) {
	            return 'iPod Touch';
	        } else if (/iPhone/.test(user_agent)) {
	            return 'iPhone';
	        } else if (/(BlackBerry|PlayBook|BB10)/i.test(user_agent)) {
	            return 'BlackBerry';
	        } else if (/Android/.test(user_agent)) {
	            return 'Android';
	        } else {
	            return '';
	        }
	    },

	    referringDomain: function(referrer) {
	        var split = referrer.split('/');
	        if (split.length >= 3) {
	            return split[2];
	        }
	        return '';
	    },

	    properties: function() {
	        return _.extend(_.strip_empty_properties({
	            '$os': _.info.os(),
	            '$browser': _.info.browser(userAgent, navigator$1.vendor, window.opera),
	            '$referrer': document$1.referrer,
	            '$referring_domain': _.info.referringDomain(document$1.referrer),
	            '$device': _.info.device(userAgent)
	        }), {
	            '$current_url': window.location.href,
	            '$browser_version': _.info.browserVersion(userAgent, navigator$1.vendor, window.opera),
	            '$screen_height': screen.height,
	            '$screen_width': screen.width,
	            'mp_lib': 'web',
	            '$lib_version': Config.LIB_VERSION
	        });
	    },

	    people_properties: function() {
	        return _.extend(_.strip_empty_properties({
	            '$os': _.info.os(),
	            '$browser': _.info.browser(userAgent, navigator$1.vendor, window.opera)
	        }), {
	            '$browser_version': _.info.browserVersion(userAgent, navigator$1.vendor, window.opera)
	        });
	    },

	    pageviewInfo: function(page) {
	        return _.strip_empty_properties({
	            'mp_page': page,
	            'mp_referrer': document$1.referrer,
	            'mp_browser': _.info.browser(userAgent, navigator$1.vendor, window.opera),
	            'mp_platform': _.info.os()
	        });
	    }
	};

	// EXPORTS (for closure compiler)
	_['toArray']            = _.toArray;
	_['isObject']           = _.isObject;
	_['JSONEncode']         = _.JSONEncode;
	_['JSONDecode']         = _.JSONDecode;
	_['isBlockedUA']        = _.isBlockedUA;
	_['isEmptyObject']      = _.isEmptyObject;
	_['info']               = _.info;
	_['info']['device']     = _.info.device;
	_['info']['browser']    = _.info.browser;
	_['info']['properties'] = _.info.properties;

	var DISABLE_COOKIE = '__mpced';

	// specifying these locally here since some websites override the global Node var
	// ex: https://www.codingame.com/
	var ELEMENT_NODE = 1;
	var TEXT_NODE = 3;

	var ce = {
	    _initializedTokens: [],

	    _previousElementSibling: function(el) {
	        if (el.previousElementSibling) {
	            return el.previousElementSibling;
	        } else {
	            do {
	                el = el.previousSibling;
	            } while (el && el.nodeType !== ELEMENT_NODE);
	            return el;
	        }
	    },

	    _loadScript: function(scriptUrlToLoad, callback) {
	        var scriptTag = document.createElement('script');
	        scriptTag.type = 'text/javascript';
	        scriptTag.src = scriptUrlToLoad;
	        scriptTag.onload = callback;

	        var scripts = document.getElementsByTagName('script');
	        if (scripts.length > 0) {
	            scripts[0].parentNode.insertBefore(scriptTag, scripts[0]);
	        } else {
	            document.body.appendChild(scriptTag);
	        }
	    },

	    _getClassName: function(elem) {
	        switch(typeof elem.className) {
	            case 'string':
	                return elem.className;
	            case 'object': // handle cases where className might be SVGAnimatedString or some other type
	                return elem.className.baseVal || elem.getAttribute('class') || '';
	            default: // future proof
	                return '';
	        }
	    },

	    _getPropertiesFromElement: function(elem) {
	        var props = {
	            'classes': this._getClassName(elem).split(' '),
	            'tag_name': elem.tagName.toLowerCase()
	        };

	        if (_.includes(['input', 'select', 'textarea'], elem.tagName.toLowerCase())) {
	            var formFieldValue = this._getFormFieldValue(elem);
	            if (this._includeProperty(elem, formFieldValue)) {
	                props['value'] = formFieldValue;
	            }
	        }

	        _.each(elem.attributes, function(attr) {
	            props['attr__' + attr.name] = attr.value;
	        });

	        var nthChild = 1;
	        var nthOfType = 1;
	        var currentElem = elem;
	        while (currentElem = this._previousElementSibling(currentElem)) { // eslint-disable-line no-cond-assign
	            nthChild++;
	            if (currentElem.tagName === elem.tagName) {
	                nthOfType++;
	            }
	        }
	        props['nth_child'] = nthChild;
	        props['nth_of_type'] = nthOfType;

	        return props;
	    },

	    _shouldTrackDomEvent: function(element, event) {
	        if (!element || element === document || element === document.body.parentNode || element.nodeType !== ELEMENT_NODE) {
	            return false;
	        }
	        var tag = element.tagName.toLowerCase();
	        switch (tag) {
	            case 'html':
	                return false;
	            case 'form':
	                return event.type === 'submit';
	            case 'input':
	                if (['button', 'submit'].indexOf(element.getAttribute('type')) === -1) {
	                    return event.type === 'change';
	                } else {
	                    return event.type === 'click';
	                }
	            case 'select':
	            case 'textarea':
	                return event.type === 'change';
	            default:
	                return event.type === 'click';
	        }
	    },

	    _getDefaultProperties: function(eventType) {
	        return {
	            '$event_type': eventType,
	            '$ce_version': 1,
	            '$host': window.location.host,
	            '$pathname': window.location.pathname
	        };
	    },

	    _getInputValue: function(input) {
	        var value = null;
	        var type = input.type.toLowerCase();
	        switch(type) {
	            case 'checkbox':
	                if (input.checked) {
	                    value = [input.value];
	                }
	                break;
	            case 'radio':
	                if (input.checked) {
	                    value = input.value;
	                }
	                break;
	            default:
	                value = input.value;
	                break;
	        }
	        return value;
	    },

	    _getSelectValue: function(select) {
	        var value;
	        if (select.multiple) {
	            var values = [];
	            _.each(select.querySelectorAll('[selected]'), function(option) {
	                values.push(option.value);
	            });
	            value = values;
	        } else {
	            value = select.value;
	        }
	        return value;
	    },

	    _includeProperty: function(input, value) {
	        for (var curEl = input; curEl.parentNode && curEl !== document.body; curEl = curEl.parentNode) {
	            var classes = this._getClassName(curEl).split(' ');
	            if (_.includes(classes, 'mp-sensitive') || _.includes(classes, 'mp-no-track')) {
	                return false;
	            }
	        }

	        if (_.includes(this._getClassName(input).split(' '), 'mp-include')) {
	            return true;
	        }

	        if (value === null) {
	            return false;
	        }

	        // don't include hidden or password fields
	        var type = input.type || '';
	        switch(type.toLowerCase()) {
	            case 'hidden':
	                return false;
	            case 'password':
	                return false;
	        }

	        // filter out data from fields that look like sensitive fields
	        var name = input.name || input.id || '';
	        var sensitiveNameRegex = /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|seccode|securitycode|securitynum|socialsec|socsec|ssn/i;
	        if (sensitiveNameRegex.test(name.replace(/[^a-zA-Z0-9]/g, ''))) {
	            return false;
	        }

	        if (typeof value === 'string') {
	            // check to see if input value looks like a credit card number
	            // see: https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9781449327453/ch04s20.html
	            var ccRegex = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
	            if (ccRegex.test((value || '').replace(/[\- ]/g, ''))) {
	                return false;
	            }

	            // check to see if input value looks like a social security number
	            var ssnRegex = /(^\d{3}-?\d{2}-?\d{4}$)/;
	            if (ssnRegex.test(value)) {
	                return false;
	            }
	        }

	        return true;
	    },

	    _getFormFieldValue: function(field) {
	        var val;
	        switch(field.tagName.toLowerCase()) {
	            case 'input':
	                val = this._getInputValue(field);
	                break;
	            case 'select':
	                val = this._getSelectValue(field);
	                break;
	            default:
	                val = field.value || field.textContent;
	                break;
	        }
	        return this._includeProperty(field, val) ? val : null;
	    },

	    _getFormFieldProperties: function(form) {
	        var formFieldProps = {};
	        _.each(form.elements, function(field) {
	            var name = field.getAttribute('name') || field.getAttribute('id');
	            if (name !== null) {
	                name = '$form_field__' + name;
	                var val = this._getFormFieldValue(field);
	                if (this._includeProperty(field, val)) {
	                    var prevFieldVal = formFieldProps[name];
	                    if (prevFieldVal !== undefined) { // combine values for inputs of same name
	                        formFieldProps[name] = [].concat(prevFieldVal, val);
	                    } else {
	                        formFieldProps[name] = val;
	                    }
	                }
	            }
	        }, this);
	        return formFieldProps;
	    },

	    _extractCustomPropertyValue: function(customProperty) {
	        var propValues = [];
	        _.each(document.querySelectorAll(customProperty['css_selector']), function(matchedElem) {
	            if (['input', 'select'].indexOf(matchedElem.tagName.toLowerCase()) > -1) {
	                propValues.push(matchedElem['value']);
	            } else if (matchedElem['textContent']) {
	                propValues.push(matchedElem['textContent']);
	            }
	        });
	        return propValues.join(', ');
	    },

	    _getCustomProperties: function(targetElementList) {
	        var props = {};
	        _.each(this._customProperties, function(customProperty) {
	            _.each(customProperty['event_selectors'], function(eventSelector) {
	                var eventElements = document.querySelectorAll(eventSelector);
	                _.each(eventElements, function(eventElement) {
	                    if (_.includes(targetElementList, eventElement)) {
	                        props[customProperty['name']] = this._extractCustomPropertyValue(customProperty);
	                    }
	                }, this);
	            }, this);
	        }, this);
	        return props;
	    },

	    checkForBackoff: function(resp) {
	        // temporarily stop CE for X seconds if the 'X-MP-CE-Backoff' header says to
	        var secondsToDisable = parseInt(resp.getResponseHeader('X-MP-CE-Backoff'));
	        if (!isNaN(secondsToDisable) && secondsToDisable > 0) {
	            var disableUntil = _.timestamp() + (secondsToDisable * 1000);
	            console.log('disabling CE for ' + secondsToDisable + ' seconds (from ' + _.timestamp() + ' until ' + disableUntil + ')');
	            _.cookie.set_seconds(DISABLE_COOKIE, true, secondsToDisable, true);
	        }
	    },

	    _getEventTarget: function(e) {
	        // https://developer.mozilla.org/en-US/docs/Web/API/Event/target#Compatibility_notes
	        if (typeof e.target === 'undefined') {
	            return e.srcElement;
	        } else {
	            return e.target;
	        }
	    },

	    _trackEvent: function(e, instance) {
	        /*** Don't mess with this code without running IE8 tests on it ***/
	        var target = this._getEventTarget(e);
	        if (target.nodeType === TEXT_NODE) { // defeat Safari bug (see: http://www.quirksmode.org/js/events_properties.html)
	            target = target.parentNode;
	        }

	        if (this._shouldTrackDomEvent(target, e)) {
	            var targetElementList = [target];
	            var curEl = target;
	            while (curEl.parentNode && curEl !== document.body) {
	                targetElementList.push(curEl.parentNode);
	                curEl = curEl.parentNode;
	            }

	            var elementsJson = [];
	            var href, elementText, form, explicitNoTrack = false;
	            _.each(targetElementList, function(el, idx) {
	                // if the element or a parent element is an anchor tag
	                // include the href as a property
	                if (el.tagName.toLowerCase() === 'a') {
	                    href = el.getAttribute('href');
	                } else if (el.tagName.toLowerCase() === 'form') {
	                    form = el;
	                }
	                // crawl up to max of 5 nodes to populate text content
	                if (!elementText && idx < 5 && el.textContent) {
	                    var textContent = _.trim(el.textContent);
	                    if (textContent) {
	                        elementText = textContent.replace(/[\r\n]/g, ' ').replace(/[ ]+/g, ' ').substring(0, 255);
	                    }
	                }

	                // allow users to programatically prevent tracking of elements by adding class 'mp-no-track'
	                var classes = this._getClassName(el).split(' ');
	                if (_.includes(classes, 'mp-no-track')) {
	                    explicitNoTrack = true;
	                }

	                elementsJson.push(this._getPropertiesFromElement(el));
	            }, this);

	            if (explicitNoTrack) {
	                return false;
	            }

	            var props = _.extend(
	                this._getDefaultProperties(e.type),
	                {
	                    '$elements':  elementsJson,
	                    '$el_attr__href': href,
	                    '$el_text': elementText
	                },
	                this._getCustomProperties(targetElementList)
	            );

	            if (form && (e.type === 'submit' || e.type === 'click')) {
	                _.extend(props, this._getFormFieldProperties(form));
	            }
	            instance.track('$web_event', props);
	            return true;
	        }
	    },

	    // only reason is to stub for unit tests
	    // since you can't override window.location props
	    _navigate: function(href) {
	        window.location.href = href;
	    },

	    _addDomEventHandlers: function(instance) {
	        var handler = _.bind(function(e) {
	            if (_.cookie.parse(DISABLE_COOKIE) !== true) {
	                e = e || window.event;
	                this._trackEvent(e, instance);
	            }
	        }, this);
	        _.register_event(document, 'submit', handler, false, true);
	        _.register_event(document, 'change', handler, false, true);
	        _.register_event(document, 'click', handler, false, true);
	    },

	    _customProperties: {},
	    init: function(instance) {
	        if (!(document && document.body)) {
	            console.log('document not ready yet, trying again in 500 milliseconds...');
	            var that = this;
	            setTimeout(function() { that.init(instance); }, 500);
	            return;
	        }

	        var token = instance.get_config('token');
	        if (this._initializedTokens.indexOf(token) > -1) {
	            console.log('autotrack already initialized for token "' + token + '"');
	            return;
	        }
	        this._initializedTokens.push(token);

	        if (!this._maybeLoadEditor(instance)) { // don't autotrack actions when the editor is enabled
	            var parseDecideResponse = _.bind(function(response) {
	                if (response && response['config'] && response['config']['enable_collect_everything'] === true) {

	                    if (response['custom_properties']) {
	                        this._customProperties = response['custom_properties'];
	                    }

	                    instance.track('$web_event', _.extend({
	                        '$title': document.title
	                    }, this._getDefaultProperties('pageview')));

	                    this._addDomEventHandlers(instance);

	                } else {
	                    instance['__autotrack_enabled'] = false;
	                }
	            }, this);

	            instance._send_request(
	                instance.get_config('decide_host') + '/decide/', {
	                    'verbose': true,
	                    'version': '1',
	                    'lib': 'web',
	                    'token': token
	                },
	                instance._prepare_callback(parseDecideResponse)
	            );
	        }
	    },

	    _editorParamsFromHash: function(instance, hash) {
	        var editorParams;
	        try {
	            var state = _.getHashParam(hash, 'state');
	            state = JSON.parse(decodeURIComponent(state));
	            var expiresInSeconds = _.getHashParam(hash, 'expires_in');
	            editorParams = {
	                'accessToken': _.getHashParam(hash, 'access_token'),
	                'accessTokenExpiresAt': (new Date()).getTime() + (Number(expiresInSeconds) * 1000),
	                'bookmarkletMode': !!state['bookmarkletMode'],
	                'projectId': state['projectId'],
	                'projectOwnerId': state['projectOwnerId'],
	                'projectToken': state['token'],
	                'readOnly': state['readOnly'],
	                'userFlags': state['userFlags'],
	                'userId': state['userId']
	            };
	            window.sessionStorage.setItem('editorParams', JSON.stringify(editorParams));

	            if (state['desiredHash']) {
	                window.location.hash = state['desiredHash'];
	            } else if (window.history) {
	                history.replaceState('', document.title, window.location.pathname + window.location.search); // completely remove hash
	            } else {
	                window.location.hash = ''; // clear hash (but leaves # unfortunately)
	            }
	        } catch (e) {
	            console.error('Unable to parse data from hash', e);
	        }
	        return editorParams;
	    },

	    /**
	     * To load the visual editor, we need an access token and other state. That state comes from one of three places:
	     * 1. In the URL hash params if the customer is using an old snippet
	     * 2. From session storage under the key `_mpcehash` if the snippet already parsed the hash
	     * 3. From session storage under the key `editorParams` if the editor was initialized on a previous page
	     */
	    _maybeLoadEditor: function(instance) {
	        var parseFromUrl = false;
	        if (_.getHashParam(window.location.hash, 'state')) {
	            var state = _.getHashParam(window.location.hash, 'state');
	            state = JSON.parse(decodeURIComponent(state));
	            parseFromUrl = state['action'] === 'mpeditor';
	        }
	        var parseFromStorage = !!window.sessionStorage.getItem('_mpcehash');
	        var editorParams;

	        if (parseFromUrl) { // happens if they are initializing the editor using an old snippet
	            editorParams = this._editorParamsFromHash(instance, window.location.hash);
	        } else if (parseFromStorage) { // happens if they are initialized the editor and using the new snippet
	            editorParams = this._editorParamsFromHash(instance, window.sessionStorage.getItem('_mpcehash'));
	            window.sessionStorage.removeItem('_mpcehash');
	        } else { // get credentials from sessionStorage from a previous initialzation
	            editorParams = JSON.parse(window.sessionStorage.getItem('editorParams') || '{}');
	        }

	        if (editorParams['projectToken'] && instance.get_config('token') === editorParams['projectToken']) {
	            this._loadEditor(instance, editorParams);
	            return true;
	        } else {
	            return false;
	        }
	    },

	    // only load the codeless event editor once, even if there are multiple instances of MixpanelLib
	    _editorLoaded: false,
	    _loadEditor: function(instance, editorParams) {
	        if (!this._editorLoaded) {
	            this._editorLoaded = true;
	            var editorUrl;
	            var cacheBuster = '?_ts=' + (new Date()).getTime();
	            var siteMedia = instance.get_config('app_host') + '/site_media';
	            if (Config.DEBUG) {
	                editorUrl = siteMedia + '/compiled/reports/collect-everything/editor.js' + cacheBuster;
	            } else {
	                editorUrl = siteMedia + '/bundle-webpack/reports/collect-everything/editor.min.js' + cacheBuster;
	            }
	            this._loadScript(editorUrl, function() {
	                window['mp_load_editor'](editorParams);
	            });
	            return true;
	        }
	        return false;
	    },

	    // this is a mechanism to ramp up CE with no server-side interaction.
	    // when CE is active, every page load results in a decide request. we
	    // need to gently ramp this up so we don't overload decide. this decides
	    // deterministically if CE is enabled for this project by modding the char
	    // value of the project token.
	    enabledForProject: function(token, numBuckets, numEnabledBuckets) {
	        numBuckets = !_.isUndefined(numBuckets) ? numBuckets : 10;
	        numEnabledBuckets = !_.isUndefined(numEnabledBuckets) ? numEnabledBuckets : 10;
	        var charCodeSum = 0;
	        for (var i = 0; i < token.length; i++) {
	            charCodeSum += token.charCodeAt(i);
	        }
	        return (charCodeSum % numBuckets) < numEnabledBuckets;
	    },

	    isBrowserSupported: function() {
	        return _.isFunction(document.querySelectorAll);
	    }
	};

	_.bind_instance_methods(ce);
	_.safewrap_instance_methods(ce);

	/*
	 * Mixpanel JS Library
	 *
	 * Copyright 2012, Mixpanel, Inc. All Rights Reserved
	 * http://mixpanel.com/
	 *
	 * Includes portions of Underscore.js
	 * http://documentcloud.github.com/underscore/
	 * (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
	 * Released under the MIT License.
	 */

	// ==ClosureCompiler==
	// @compilation_level ADVANCED_OPTIMIZATIONS
	// @output_file_name mixpanel-2.8.min.js
	// ==/ClosureCompiler==

	/*
	SIMPLE STYLE GUIDE:

	this.x === public function
	this._x === internal - only use within this file
	this.__x === private - only use within the class

	Globals should be all caps
	*/

	var init_type;       // MODULE or SNIPPET loader
	var mixpanel_master; // main mixpanel instance / object
	var INIT_MODULE  = 0;
	var INIT_SNIPPET = 1;

	/*
	 * Constants
	 */
	/** @const */   var PRIMARY_INSTANCE_NAME     = 'mixpanel';
	/** @const */   var SET_QUEUE_KEY             = '__mps';
	/** @const */   var SET_ONCE_QUEUE_KEY        = '__mpso';
	/** @const */   var ADD_QUEUE_KEY             = '__mpa';
	/** @const */   var APPEND_QUEUE_KEY          = '__mpap';
	/** @const */   var UNION_QUEUE_KEY           = '__mpu';
	/** @const */   var SET_ACTION                = '$set';
	/** @const */   var SET_ONCE_ACTION           = '$set_once';
	/** @const */   var ADD_ACTION                = '$add';
	/** @const */   var APPEND_ACTION             = '$append';
	/** @const */   var UNION_ACTION              = '$union';
	// This key is deprecated, but we want to check for it to see whether aliasing is allowed.
	/** @const */   var PEOPLE_DISTINCT_ID_KEY    = '$people_distinct_id';
	/** @const */   var ALIAS_ID_KEY              = '__alias';
	/** @const */   var CAMPAIGN_IDS_KEY          = '__cmpns';
	/** @const */   var EVENT_TIMERS_KEY          = '__timers';
	/** @const */   var RESERVED_PROPERTIES       = [
	    SET_QUEUE_KEY,
	    SET_ONCE_QUEUE_KEY,
	    ADD_QUEUE_KEY,
	    APPEND_QUEUE_KEY,
	    UNION_QUEUE_KEY,
	    PEOPLE_DISTINCT_ID_KEY,
	    ALIAS_ID_KEY,
	    CAMPAIGN_IDS_KEY,
	    EVENT_TIMERS_KEY
	];

	/*
	 * Dynamic... constants? Is that an oxymoron?
	 */
	var HTTP_PROTOCOL = (('https:' === document.location.protocol) ? 'https://' : 'http://');

	    // http://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/
	    // https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#withCredentials
	var USE_XHR = (window.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest());

	    // IE<10 does not support cross-origin XHR's but script tags
	    // with defer won't block window.onload; ENQUEUE_REQUESTS
	    // should only be true for Opera<12
	var ENQUEUE_REQUESTS = !USE_XHR && (userAgent.indexOf('MSIE') === -1) && (userAgent.indexOf('Mozilla') === -1);

	/*
	 * Module-level globals
	 */
	var DEFAULT_CONFIG = {
	    'api_host':               HTTP_PROTOCOL + 'api.mixpanel.com',
	    'app_host':               HTTP_PROTOCOL + 'mixpanel.com',
	    'autotrack':              true,
	    'cdn':                    HTTP_PROTOCOL + 'cdn.mxpnl.com',
	    'cross_subdomain_cookie': true,
	    'persistence':            'cookie',
	    'persistence_name':       '',
	    'cookie_name':            '',
	    'loaded':                 function() {},
	    'store_google':           true,
	    'save_referrer':          true,
	    'test':                   false,
	    'verbose':                false,
	    'img':                    false,
	    'track_pageview':         true,
	    'debug':                  false,
	    'track_links_timeout':    300,
	    'cookie_expiration':      365,
	    'upgrade':                false,
	    'disable_persistence':    false,
	    'disable_cookie':         false,
	    'secure_cookie':          false,
	    'ip':                     true,
	    'property_blacklist':     []
	};
	DEFAULT_CONFIG['decide_host'] = DEFAULT_CONFIG['api_host'];

	var DOM_LOADED = false;

	/**
	 * DomTracker Object
	 * @constructor
	 */
	var DomTracker = function() {};

	// interface
	DomTracker.prototype.create_properties = function() {};
	DomTracker.prototype.event_handler = function() {};
	DomTracker.prototype.after_track_handler = function() {};

	DomTracker.prototype.init = function(mixpanel_instance) {
	    this.mp = mixpanel_instance;
	    return this;
	};

	/**
	 * @param {Object|string} query
	 * @param {string} event_name
	 * @param {Object=} properties
	 * @param {function(...[*])=} user_callback
	 */
	DomTracker.prototype.track = function(query, event_name, properties, user_callback) {
	    var that = this;
	    var elements = _.dom_query(query);

	    if (elements.length === 0) {
	        console$1.error('The DOM query (' + query + ') returned 0 elements');
	        return;
	    }

	    _.each(elements, function(element) {
	        _.register_event(element, this.override_event, function(e) {
	            var options = {};
	            var props = that.create_properties(properties, this);
	            var timeout = that.mp.get_config('track_links_timeout');

	            that.event_handler(e, this, options);

	            // in case the mixpanel servers don't get back to us in time
	            window.setTimeout(that.track_callback(user_callback, props, options, true), timeout);

	            // fire the tracking event
	            that.mp.track(event_name, props, that.track_callback(user_callback, props, options));
	        });
	    }, this);

	    return true;
	};

	/**
	 * @param {function(...[*])} user_callback
	 * @param {Object} props
	 * @param {boolean=} timeout_occured
	 */
	DomTracker.prototype.track_callback = function(user_callback, props, options, timeout_occured) {
	    timeout_occured = timeout_occured || false;
	    var that = this;

	    return function() {
	        // options is referenced from both callbacks, so we can have
	        // a 'lock' of sorts to ensure only one fires
	        if (options.callback_fired) { return; }
	        options.callback_fired = true;

	        if (user_callback && user_callback(timeout_occured, props) === false) {
	            // user can prevent the default functionality by
	            // returning false from their callback
	            return;
	        }

	        that.after_track_handler(props, options, timeout_occured);
	    };
	};

	DomTracker.prototype.create_properties = function(properties, element) {
	    var props;

	    if (typeof(properties) === 'function') {
	        props = properties(element);
	    } else {
	        props = _.extend({}, properties);
	    }

	    return props;
	};

	/**
	 * LinkTracker Object
	 * @constructor
	 * @extends DomTracker
	 */
	var LinkTracker = function() {
	    this.override_event = 'click';
	};
	_.inherit(LinkTracker, DomTracker);

	LinkTracker.prototype.create_properties = function(properties, element) {
	    var props = LinkTracker.superclass.create_properties.apply(this, arguments);

	    if (element.href) { props['url'] = element.href; }

	    return props;
	};

	LinkTracker.prototype.event_handler = function(evt, element, options) {
	    options.new_tab = (
	        evt.which === 2 ||
	        evt.metaKey ||
	        evt.ctrlKey ||
	        element.target === '_blank'
	    );
	    options.href = element.href;

	    if (!options.new_tab) {
	        evt.preventDefault();
	    }
	};

	LinkTracker.prototype.after_track_handler = function(props, options) {
	    if (options.new_tab) { return; }

	    setTimeout(function() {
	        window.location = options.href;
	    }, 0);
	};

	/**
	 * FormTracker Object
	 * @constructor
	 * @extends DomTracker
	 */
	var FormTracker = function() {
	    this.override_event = 'submit';
	};
	_.inherit(FormTracker, DomTracker);

	FormTracker.prototype.event_handler = function(evt, element, options) {
	    options.element = element;
	    evt.preventDefault();
	};

	FormTracker.prototype.after_track_handler = function(props, options) {
	    setTimeout(function() {
	        options.element.submit();
	    }, 0);
	};

	/**
	 * Mixpanel Persistence Object
	 * @constructor
	 */
	var MixpanelPersistence = function(config) {
	    this['props'] = {};
	    this.campaign_params_saved = false;

	    if (config['persistence_name']) {
	        this.name = 'mp_' + config['persistence_name'];
	    } else {
	        this.name = 'mp_' + config['token'] + '_mixpanel';
	    }

	    var storage_type = config['persistence'];
	    if (storage_type !== 'cookie' && storage_type !== 'localStorage') {
	        console$1.critical('Unknown persistence type ' + storage_type + '; falling back to cookie');
	        storage_type = config['persistence'] = 'cookie';
	    }

	    var localStorage_supported = function() {
	        var supported = true;
	        try {
	            var key = '__mplssupport__',
	                val = 'xyz';
	            _.localStorage.set(key, val);
	            if (_.localStorage.get(key) !== val) {
	                supported = false;
	            }
	            _.localStorage.remove(key);
	        } catch (err) {
	            supported = false;
	        }
	        if (!supported) {
	            console$1.error('localStorage unsupported; falling back to cookie store');
	        }
	        return supported;
	    };
	    if (storage_type === 'localStorage' && localStorage_supported()) {
	        this.storage = _.localStorage;
	    } else {
	        this.storage = _.cookie;
	    }

	    this.load();
	    this.update_config(config);
	    this.upgrade(config);
	    this.save();
	};

	MixpanelPersistence.prototype.properties = function() {
	    var p = {};
	    // Filter out reserved properties
	    _.each(this['props'], function(v, k) {
	        if (!_.include(RESERVED_PROPERTIES, k)) {
	            p[k] = v;
	        }
	    });
	    return p;
	};

	MixpanelPersistence.prototype.load = function() {
	    if (this.disabled) { return; }

	    var entry = this.storage.parse(this.name);

	    if (entry) {
	        this['props'] = _.extend({}, entry);
	    }
	};

	MixpanelPersistence.prototype.upgrade = function(config) {
	    var upgrade_from_old_lib = config['upgrade'],
	        old_cookie_name,
	        old_cookie;

	    if (upgrade_from_old_lib) {
	        old_cookie_name = 'mp_super_properties';
	        // Case where they had a custom cookie name before.
	        if (typeof(upgrade_from_old_lib) === 'string') {
	            old_cookie_name = upgrade_from_old_lib;
	        }

	        old_cookie = this.storage.parse(old_cookie_name);

	        // remove the cookie
	        this.storage.remove(old_cookie_name);
	        this.storage.remove(old_cookie_name, true);

	        if (old_cookie) {
	            this['props'] = _.extend(
	                this['props'],
	                old_cookie['all'],
	                old_cookie['events']
	            );
	        }
	    }

	    if (!config['cookie_name'] && config['name'] !== 'mixpanel') {
	        // special case to handle people with cookies of the form
	        // mp_TOKEN_INSTANCENAME from the first release of this library
	        old_cookie_name = 'mp_' + config['token'] + '_' + config['name'];
	        old_cookie = this.storage.parse(old_cookie_name);

	        if (old_cookie) {
	            this.storage.remove(old_cookie_name);
	            this.storage.remove(old_cookie_name, true);

	            // Save the prop values that were in the cookie from before -
	            // this should only happen once as we delete the old one.
	            this.register_once(old_cookie);
	        }
	    }

	    if (this.storage === _.localStorage) {
	        old_cookie = _.cookie.parse(this.name);

	        _.cookie.remove(this.name);
	        _.cookie.remove(this.name, true);

	        if (old_cookie) {
	            this.register_once(old_cookie);
	        }
	    }
	};

	MixpanelPersistence.prototype.save = function() {
	    if (this.disabled) { return; }
	    this._expire_notification_campaigns();
	    this.storage.set(
	        this.name,
	        _.JSONEncode(this['props']),
	        this.expire_days,
	        this.cross_subdomain,
	        this.secure
	    );
	};

	MixpanelPersistence.prototype.remove = function() {
	    // remove both domain and subdomain cookies
	    this.storage.remove(this.name, false);
	    this.storage.remove(this.name, true);
	};

	// removes the storage entry and deletes all loaded data
	// forced name for tests
	MixpanelPersistence.prototype.clear = function() {
	    this.remove();
	    this['props'] = {};
	};

	/**
	 * @param {Object} props
	 * @param {*=} default_value
	 * @param {number=} days
	 */
	MixpanelPersistence.prototype.register_once = function(props, default_value, days) {
	    if (_.isObject(props)) {
	        if (typeof(default_value) === 'undefined') { default_value = 'None'; }
	        this.expire_days = (typeof(days) === 'undefined') ? this.default_expiry : days;

	        _.each(props, function(val, prop) {
	            if (!this['props'][prop] || this['props'][prop] === default_value) {
	                this['props'][prop] = val;
	            }
	        }, this);

	        this.save();

	        return true;
	    }
	    return false;
	};

	/**
	 * @param {Object} props
	 * @param {number=} days
	 */
	MixpanelPersistence.prototype.register = function(props, days) {
	    if (_.isObject(props)) {
	        this.expire_days = (typeof(days) === 'undefined') ? this.default_expiry : days;

	        _.extend(this['props'], props);

	        this.save();

	        return true;
	    }
	    return false;
	};

	MixpanelPersistence.prototype.unregister = function(prop) {
	    if (prop in this['props']) {
	        delete this['props'][prop];
	        this.save();
	    }
	};

	MixpanelPersistence.prototype._expire_notification_campaigns = _.safewrap(function() {
	    var campaigns_shown = this['props'][CAMPAIGN_IDS_KEY],
	        EXPIRY_TIME = Config.DEBUG ? 60 * 1000 : 60 * 60 * 1000; // 1 minute (Config.DEBUG) / 1 hour (PDXN)
	    if (!campaigns_shown) {
	        return;
	    }
	    for (var campaign_id in campaigns_shown) {
	        if (1 * new Date() - campaigns_shown[campaign_id] > EXPIRY_TIME) {
	            delete campaigns_shown[campaign_id];
	        }
	    }
	    if (_.isEmptyObject(campaigns_shown)) {
	        delete this['props'][CAMPAIGN_IDS_KEY];
	    }
	});

	MixpanelPersistence.prototype.update_campaign_params = function() {
	    if (!this.campaign_params_saved) {
	        this.register_once(_.info.campaignParams());
	        this.campaign_params_saved = true;
	    }
	};

	MixpanelPersistence.prototype.update_search_keyword = function(referrer) {
	    this.register(_.info.searchInfo(referrer));
	};

	// EXPORTED METHOD, we test this directly.
	MixpanelPersistence.prototype.update_referrer_info = function(referrer) {
	    // If referrer doesn't exist, we want to note the fact that it was type-in traffic.
	    this.register_once({
	        '$initial_referrer': referrer || '$direct',
	        '$initial_referring_domain': _.info.referringDomain(referrer) || '$direct'
	    }, '');
	};

	MixpanelPersistence.prototype.get_referrer_info = function() {
	    return _.strip_empty_properties({
	        '$initial_referrer': this['props']['$initial_referrer'],
	        '$initial_referring_domain': this['props']['$initial_referring_domain']
	    });
	};

	// safely fills the passed in object with stored properties,
	// does not override any properties defined in both
	// returns the passed in object
	MixpanelPersistence.prototype.safe_merge = function(props) {
	    _.each(this['props'], function(val, prop) {
	        if (!(prop in props)) {
	            props[prop] = val;
	        }
	    });

	    return props;
	};

	MixpanelPersistence.prototype.update_config = function(config) {
	    this.default_expiry = this.expire_days = config['cookie_expiration'];
	    this.set_disabled(config['disable_persistence']);
	    this.set_cross_subdomain(config['cross_subdomain_cookie']);
	    this.set_secure(config['secure_cookie']);
	};

	MixpanelPersistence.prototype.set_disabled = function(disabled) {
	    this.disabled = disabled;
	    if (this.disabled) {
	        this.remove();
	    }
	};

	MixpanelPersistence.prototype.set_cross_subdomain = function(cross_subdomain) {
	    if (cross_subdomain !== this.cross_subdomain) {
	        this.cross_subdomain = cross_subdomain;
	        this.remove();
	        this.save();
	    }
	};

	MixpanelPersistence.prototype.get_cross_subdomain = function() {
	    return this.cross_subdomain;
	};

	MixpanelPersistence.prototype.set_secure = function(secure) {
	    if (secure !== this.secure) {
	        this.secure = secure ? true : false;
	        this.remove();
	        this.save();
	    }
	};

	MixpanelPersistence.prototype._add_to_people_queue = function(queue, data) {
	    var q_key = this._get_queue_key(queue),
	        q_data = data[queue],
	        set_q = this._get_or_create_queue(SET_ACTION),
	        set_once_q = this._get_or_create_queue(SET_ONCE_ACTION),
	        add_q = this._get_or_create_queue(ADD_ACTION),
	        union_q = this._get_or_create_queue(UNION_ACTION),
	        append_q = this._get_or_create_queue(APPEND_ACTION, []);

	    if (q_key === SET_QUEUE_KEY) {
	        // Update the set queue - we can override any existing values
	        _.extend(set_q, q_data);
	        // if there was a pending increment, override it
	        // with the set.
	        this._pop_from_people_queue(ADD_ACTION, q_data);
	        // if there was a pending union, override it
	        // with the set.
	        this._pop_from_people_queue(UNION_ACTION, q_data);
	    } else if (q_key === SET_ONCE_QUEUE_KEY) {
	        // only queue the data if there is not already a set_once call for it.
	        _.each(q_data, function(v, k) {
	            if (!(k in set_once_q)) {
	                set_once_q[k] = v;
	            }
	        });
	    } else if (q_key === ADD_QUEUE_KEY) {
	        _.each(q_data, function(v, k) {
	            // If it exists in the set queue, increment
	            // the value
	            if (k in set_q) {
	                set_q[k] += v;
	            } else {
	                // If it doesn't exist, update the add
	                // queue
	                if (!(k in add_q)) {
	                    add_q[k] = 0;
	                }
	                add_q[k] += v;
	            }
	        }, this);
	    } else if (q_key === UNION_QUEUE_KEY) {
	        _.each(q_data, function(v, k) {
	            if (_.isArray(v)) {
	                if (!(k in union_q)) {
	                    union_q[k] = [];
	                }
	                // We may send duplicates, the server will dedup them.
	                union_q[k] = union_q[k].concat(v);
	            }
	        });
	    } else if (q_key === APPEND_QUEUE_KEY) {
	        append_q.push(q_data);
	    }

	    console$1.log('MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):');
	    console$1.log(data);

	    this.save();
	};

	MixpanelPersistence.prototype._pop_from_people_queue = function(queue, data) {
	    var q = this._get_queue(queue);
	    if (!_.isUndefined(q)) {
	        _.each(data, function(v, k) {
	            delete q[k];
	        }, this);

	        this.save();
	    }
	};

	MixpanelPersistence.prototype._get_queue_key = function(queue) {
	    if (queue === SET_ACTION) {
	        return SET_QUEUE_KEY;
	    } else if (queue === SET_ONCE_ACTION) {
	        return SET_ONCE_QUEUE_KEY;
	    } else if (queue === ADD_ACTION) {
	        return ADD_QUEUE_KEY;
	    } else if (queue === APPEND_ACTION) {
	        return APPEND_QUEUE_KEY;
	    } else if (queue === UNION_ACTION) {
	        return UNION_QUEUE_KEY;
	    } else {
	        console$1.error('Invalid queue:', queue);
	    }
	};

	MixpanelPersistence.prototype._get_queue = function(queue) {
	    return this['props'][this._get_queue_key(queue)];
	};
	MixpanelPersistence.prototype._get_or_create_queue = function(queue, default_val) {
	    var key = this._get_queue_key(queue);
	    default_val = _.isUndefined(default_val) ? {} : default_val;

	    return this['props'][key] || (this['props'][key] = default_val);
	};

	MixpanelPersistence.prototype.set_event_timer = function(event_name, timestamp) {
	    var timers = this['props'][EVENT_TIMERS_KEY] || {};
	    timers[event_name] = timestamp;
	    this['props'][EVENT_TIMERS_KEY] = timers;
	    this.save();
	};

	MixpanelPersistence.prototype.remove_event_timer = function(event_name) {
	    var timers = this['props'][EVENT_TIMERS_KEY] || {};
	    var timestamp = timers[event_name];
	    if (!_.isUndefined(timestamp)) {
	        delete this['props'][EVENT_TIMERS_KEY][event_name];
	        this.save();
	    }
	    return timestamp;
	};

	/**
	 * Mixpanel Library Object
	 * @constructor
	 */
	var MixpanelLib = function() {};

	/**
	 * Mixpanel People Object
	 * @constructor
	 */
	var MixpanelPeople = function() {};

	var MPNotif;

	/**
	 * create_mplib(token:string, config:object, name:string)
	 *
	 * This function is used by the init method of MixpanelLib objects
	 * as well as the main initializer at the end of the JSLib (that
	 * initializes document.mixpanel as well as any additional instances
	 * declared before this file has loaded).
	 */
	var create_mplib = function(token, config, name) {
	    var instance,
	        target = (name === PRIMARY_INSTANCE_NAME) ? mixpanel_master : mixpanel_master[name];

	    if (target && init_type === INIT_MODULE) {
	        instance = target;
	    } else {
	        if (target && !_.isArray(target)) {
	            console$1.error('You have already initialized ' + name);
	            return;
	        }
	        instance = new MixpanelLib();
	    }

	    instance._init(token, config, name);

	    instance['people'] = new MixpanelPeople();
	    instance['people']._init(instance);

	    // if any instance on the page has debug = true, we set the
	    // global debug to be true
	    Config.DEBUG = Config.DEBUG || instance.get_config('debug');

	    instance['__autotrack_enabled'] = instance.get_config('autotrack');
	    if (instance.get_config('autotrack')) {
	        var num_buckets = 100;
	        var num_enabled_buckets = 100;
	        if (!ce.enabledForProject(instance.get_config('token'), num_buckets, num_enabled_buckets)) {
	            instance['__autotrack_enabled'] = false;
	            console$1.log('Not in active bucket: disabling Automatic Event Collection.');
	        } else if (!ce.isBrowserSupported()) {
	            instance['__autotrack_enabled'] = false;
	            console$1.log('Disabling Automatic Event Collection because this browser is not supported');
	        } else {
	            ce.init(instance);
	        }

	        try {
	            add_dom_event_counting_handlers(instance);
	        } catch (e) {
	            console$1.error(e);
	        }
	    }

	    // if target is not defined, we called init after the lib already
	    // loaded, so there won't be an array of things to execute
	    if (!_.isUndefined(target) && _.isArray(target)) {
	        // Crunch through the people queue first - we queue this data up &
	        // flush on identify, so it's better to do all these operations first
	        instance._execute_array.call(instance['people'], target['people']);
	        instance._execute_array(target);
	    }

	    return instance;
	};

	// Initialization methods

	/**
	 * This function initializes a new instance of the Mixpanel tracking object.
	 * All new instances are added to the main mixpanel object as sub properties (such as
	 * mixpanel.library_name) and also returned by this function. To define a
	 * second instance on the page, you would call:
	 *
	 *     mixpanel.init('new token', { your: 'config' }, 'library_name');
	 *
	 * and use it like so:
	 *
	 *     mixpanel.library_name.track(...);
	 *
	 * @param {String} token   Your Mixpanel API token
	 * @param {Object} [config]  A dictionary of config options to override
	 * @param {String} [name]    The name for the new mixpanel instance that you want created
	 */
	MixpanelLib.prototype.init = function (token, config, name) {
	    if (_.isUndefined(name)) {
	        console$1.error('You must name your new library: init(token, config, name)');
	        return;
	    }
	    if (name === PRIMARY_INSTANCE_NAME) {
	        console$1.error('You must initialize the main mixpanel object right after you include the Mixpanel js snippet');
	        return;
	    }

	    var instance = create_mplib(token, config, name);
	    mixpanel_master[name] = instance;
	    instance._loaded();

	    return instance;
	};

	// mixpanel._init(token:string, config:object, name:string)
	//
	// This function sets up the current instance of the mixpanel
	// library.  The difference between this method and the init(...)
	// method is this one initializes the actual instance, whereas the
	// init(...) method sets up a new library and calls _init on it.
	//
	MixpanelLib.prototype._init = function(token, config, name) {
	    this['__loaded'] = true;
	    this['config'] = {};

	    this.set_config(_.extend({}, DEFAULT_CONFIG, config, {
	        'name': name,
	        'token': token,
	        'callback_fn': ((name === PRIMARY_INSTANCE_NAME) ? name : PRIMARY_INSTANCE_NAME + '.' + name) + '._jsc'
	    }));

	    this['_jsc'] = function() {};

	    this.__dom_loaded_queue = [];
	    this.__request_queue = [];
	    this.__disabled_events = [];
	    this._flags = {
	        'disable_all_events': false,
	        'identify_called': false
	    };

	    this['persistence'] = this['cookie'] = new MixpanelPersistence(this['config']);
	    this.register_once({'distinct_id': _.UUID()}, '');
	};

	// Private methods

	MixpanelLib.prototype._loaded = function() {
	    this.get_config('loaded')(this);

	    // this happens after so a user can call identify/name_tag in
	    // the loaded callback
	    if (this.get_config('track_pageview')) {
	        this.track_pageview();
	    }
	};

	MixpanelLib.prototype._dom_loaded = function() {
	    _.each(this.__dom_loaded_queue, function(item) {
	        this._track_dom.apply(this, item);
	    }, this);
	    _.each(this.__request_queue, function(item) {
	        this._send_request.apply(this, item);
	    }, this);
	    delete this.__dom_loaded_queue;
	    delete this.__request_queue;
	};

	MixpanelLib.prototype._track_dom = function(DomClass, args) {
	    if (this.get_config('img')) {
	        console$1.error('You can\'t use DOM tracking functions with img = true.');
	        return false;
	    }

	    if (!DOM_LOADED) {
	        this.__dom_loaded_queue.push([DomClass, args]);
	        return false;
	    }

	    var dt = new DomClass().init(this);
	    return dt.track.apply(dt, args);
	};

	/**
	 * _prepare_callback() should be called by callers of _send_request for use
	 * as the callback argument.
	 *
	 * If there is no callback, this returns null.
	 * If we are going to make XHR/XDR requests, this returns a function.
	 * If we are going to use script tags, this returns a string to use as the
	 * callback GET param.
	 */
	MixpanelLib.prototype._prepare_callback = function(callback, data) {
	    if (_.isUndefined(callback)) {
	        return null;
	    }

	    if (USE_XHR) {
	        var callback_function = function(response) {
	            callback(response, data);
	        };
	        return callback_function;
	    } else {
	        // if the user gives us a callback, we store as a random
	        // property on this instances jsc function and update our
	        // callback string to reflect that.
	        var jsc = this['_jsc'];
	        var randomized_cb = '' + Math.floor(Math.random() * 100000000);
	        var callback_string = this.get_config('callback_fn') + '[' + randomized_cb + ']';
	        jsc[randomized_cb] = function(response) {
	            delete jsc[randomized_cb];
	            callback(response, data);
	        };
	        return callback_string;
	    }
	};

	MixpanelLib.prototype._send_request = function(url, data, callback) {
	    if (ENQUEUE_REQUESTS) {
	        this.__request_queue.push(arguments);
	        return;
	    }

	    // needed to correctly format responses
	    var verbose_mode = this.get_config('verbose');
	    if (data['verbose']) { verbose_mode = true; }

	    if (this.get_config('test')) { data['test'] = 1; }
	    if (verbose_mode) { data['verbose'] = 1; }
	    if (this.get_config('img')) { data['img'] = 1; }
	    if (!USE_XHR) {
	        if (callback) {
	            data['callback'] = callback;
	        } else if (verbose_mode || this.get_config('test')) {
	            // Verbose output (from verbose mode, or an error in test mode) is a json blob,
	            // which by itself is not valid javascript. Without a callback, this verbose output will
	            // cause an error when returned via jsonp, so we force a no-op callback param.
	            // See the ECMA script spec: http://www.ecma-international.org/ecma-262/5.1/#sec-12.4
	            data['callback'] = '(function(){})';
	        }
	    }

	    data['ip'] = this.get_config('ip')?1:0;
	    data['_'] = new Date().getTime().toString();
	    url += '?' + _.HTTPBuildQuery(data);

	    if ('img' in data) {
	        var img = document.createElement('img');
	        img.src = url;
	        document.body.appendChild(img);
	    } else if (USE_XHR) {
	        try {
	            var req = new XMLHttpRequest();
	            req.open('GET', url, true);
	            // send the mp_optout cookie
	            // withCredentials cannot be modified until after calling .open on Android and Mobile Safari
	            req.withCredentials = true;
	            req.onreadystatechange = function () {
	                if (req.readyState === 4) { // XMLHttpRequest.DONE == 4, except in safari 4
	                    if (url.indexOf('api.mixpanel.com/track') !== -1) {
	                        ce.checkForBackoff(req);
	                    }
	                    if (req.status === 200) {
	                        if (callback) {
	                            if (verbose_mode) {
	                                callback(_.JSONDecode(req.responseText));
	                            } else {
	                                callback(Number(req.responseText));
	                            }
	                        }
	                    } else {
	                        var error = 'Bad HTTP status: ' + req.status + ' ' + req.statusText;
	                        console$1.error(error);
	                        if (callback) {
	                            if (verbose_mode) {
	                                callback({status: 0, error: error});
	                            } else {
	                                callback(0);
	                            }
	                        }
	                    }
	                }
	            };
	            req.send(null);
	        } catch (e) {
	            console$1.error(e);
	        }
	    } else {
	        var script = document.createElement('script');
	        script.type = 'text/javascript';
	        script.async = true;
	        script.defer = true;
	        script.src = url;
	        var s = document.getElementsByTagName('script')[0];
	        s.parentNode.insertBefore(script, s);
	    }
	};

	/**
	 * _execute_array() deals with processing any mixpanel function
	 * calls that were called before the Mixpanel library were loaded
	 * (and are thus stored in an array so they can be called later)
	 *
	 * Note: we fire off all the mixpanel function calls && user defined
	 * functions BEFORE we fire off mixpanel tracking calls. This is so
	 * identify/register/set_config calls can properly modify early
	 * tracking calls.
	 *
	 * @param {Array} array
	 */
	MixpanelLib.prototype._execute_array = function(array) {
	    var fn_name, alias_calls = [], other_calls = [], tracking_calls = [];
	    _.each(array, function(item) {
	        if (item) {
	            fn_name = item[0];
	            if (typeof(item) === 'function') {
	                item.call(this);
	            } else if (_.isArray(item) && fn_name === 'alias') {
	                alias_calls.push(item);
	            } else if (_.isArray(item) && fn_name.indexOf('track') !== -1 && typeof(this[fn_name]) === 'function') {
	                tracking_calls.push(item);
	            } else {
	                other_calls.push(item);
	            }
	        }
	    }, this);

	    var execute = function(calls, context) {
	        _.each(calls, function(item) {
	            this[item[0]].apply(this, item.slice(1));
	        }, context);
	    };

	    execute(alias_calls, this);
	    execute(other_calls, this);
	    execute(tracking_calls, this);
	};

	/**
	 * push() keeps the standard async-array-push
	 * behavior around after the lib is loaded.
	 * This is only useful for external integrations that
	 * do not wish to rely on our convenience methods
	 * (created in the snippet).
	 *
	 * ### Usage:
	 *     mixpanel.push(['register', { a: 'b' }]);
	 *
	 * @param {Array} item A [function_name, args...] array to be executed
	 */
	MixpanelLib.prototype.push = function(item) {
	    this._execute_array([item]);
	};

	/**
	 * Disable events on the Mixpanel object. If passed no arguments,
	 * this function disables tracking of any event. If passed an
	 * array of event names, those events will be disabled, but other
	 * events will continue to be tracked.
	 *
	 * Note: this function does not stop other mixpanel functions from
	 * firing, such as register() or people.set().
	 *
	 * @param {Array} [events] An array of event names to disable
	 */
	MixpanelLib.prototype.disable = function(events) {
	    if (typeof(events) === 'undefined') {
	        this._flags.disable_all_events = true;
	    } else {
	        this.__disabled_events = this.__disabled_events.concat(events);
	    }
	};

	/**
	 * Track an event. This is the most important and
	 * frequently used Mixpanel function.
	 *
	 * ### Usage:
	 *
	 *     // track an event named 'Registered'
	 *     mixpanel.track('Registered', {'Gender': 'Male', 'Age': 21});
	 *
	 * To track link clicks or form submissions, see track_links() or track_forms().
	 *
	 * @param {String} event_name The name of the event. This can be anything the user does - 'Button Click', 'Sign Up', 'Item Purchased', etc.
	 * @param {Object} [properties] A set of properties to include with the event you're sending. These describe the user who did the event or details about the event itself.
	 * @param {Function} [callback] If provided, the callback function will be called after tracking the event.
	 */
	MixpanelLib.prototype.track = function(event_name, properties, callback) {
	    if (typeof(callback) !== 'function') {
	        callback = function() {};
	    }

	    if (_.isUndefined(event_name)) {
	        console$1.error('No event name provided to mixpanel.track');
	        return;
	    }

	    if (this._event_is_disabled(event_name)) {
	        callback(0);
	        return;
	    }

	    // set defaults
	    properties = properties || {};
	    properties['token'] = this.get_config('token');

	    // set $duration if time_event was previously called for this event
	    var start_timestamp = this['persistence'].remove_event_timer(event_name);
	    if (!_.isUndefined(start_timestamp)) {
	        var duration_in_ms = new Date().getTime() - start_timestamp;
	        properties['$duration'] = parseFloat((duration_in_ms / 1000).toFixed(3));
	    }

	    // update persistence
	    this['persistence'].update_search_keyword(document.referrer);

	    if (this.get_config('store_google')) { this['persistence'].update_campaign_params(); }
	    if (this.get_config('save_referrer')) { this['persistence'].update_referrer_info(document.referrer); }

	    // note: extend writes to the first object, so lets make sure we
	    // don't write to the persistence properties object and info
	    // properties object by passing in a new object

	    // update properties with pageview info and super-properties
	    properties = _.extend(
	        {},
	        _.info.properties(),
	        this['persistence'].properties(),
	        properties
	    );

	    try {
	        if (this.get_config('autotrack') && event_name !== 'mp_page_view' && event_name !== '$create_alias') {
	            // The point of $__c is to count how many clicks occur per tracked event. Since we're
	            // tracking an event in this function, we need to reset the $__c value.
	            properties = _.extend({}, properties, this.mp_counts);
	            this.mp_counts = {'$__c': 0};
	            _.cookie.set('mp_' + this.get_config('name') + '__c', 0, 1, true);
	        }
	    } catch (e) {
	        console$1.error(e);
	    }

	    var property_blacklist = this.get_config('property_blacklist');
	    if (_.isArray(property_blacklist)) {
	        _.each(property_blacklist, function(blacklisted_prop) {
	            delete properties[blacklisted_prop];
	        });
	    } else {
	        console$1.error('Invalid value for property_blacklist config: ' + property_blacklist);
	    }

	    var data = {
	        'event': event_name,
	        'properties': properties
	    };

	    var truncated_data = _.truncate(data, 255);
	    var json_data      = _.JSONEncode(truncated_data);
	    var encoded_data   = _.base64Encode(json_data);

	    console$1.log('MIXPANEL REQUEST:');
	    console$1.log(truncated_data);

	    this._send_request(
	        this.get_config('api_host') + '/track/',
	        { 'data': encoded_data },
	        this._prepare_callback(callback, truncated_data)
	    );

	    return truncated_data;
	};

	/**
	 * Track a page view event, which is currently ignored by the server.
	 * This function is called by default on page load unless the
	 * track_pageview configuration variable is false.
	 *
	 * @param {String} [page] The url of the page to record. If you don't include this, it defaults to the current url.
	 * @api private
	 */
	MixpanelLib.prototype.track_pageview = function(page) {
	    if (_.isUndefined(page)) {
	        page = document.location.href;
	    }
	    this.track('mp_page_view', _.info.pageviewInfo(page));
	};

	/**
	 * Track clicks on a set of document elements. Selector must be a
	 * valid query. Elements must exist on the page at the time track_links is called.
	 *
	 * ### Usage:
	 *
	 *     // track click for link id #nav
	 *     mixpanel.track_links('#nav', 'Clicked Nav Link');
	 *
	 * ### Notes:
	 *
	 * This function will wait up to 300 ms for the Mixpanel
	 * servers to respond. If they have not responded by that time
	 * it will head to the link without ensuring that your event
	 * has been tracked.  To configure this timeout please see the
	 * set_config() documentation below.
	 *
	 * If you pass a function in as the properties argument, the
	 * function will receive the DOMElement that triggered the
	 * event as an argument.  You are expected to return an object
	 * from the function; any properties defined on this object
	 * will be sent to mixpanel as event properties.
	 *
	 * @type {Function}
	 * @param {Object|String} query A valid DOM query, element or jQuery-esque list
	 * @param {String} event_name The name of the event to track
	 * @param {Object|Function} [properties] A properties object or function that returns a dictionary of properties when passed a DOMElement
	 */
	MixpanelLib.prototype.track_links = function() {
	    return this._track_dom.call(this, LinkTracker, arguments);
	};

	/**
	 * Track form submissions. Selector must be a valid query.
	 *
	 * ### Usage:
	 *
	 *     // track submission for form id 'register'
	 *     mixpanel.track_forms('#register', 'Created Account');
	 *
	 * ### Notes:
	 *
	 * This function will wait up to 300 ms for the mixpanel
	 * servers to respond, if they have not responded by that time
	 * it will head to the link without ensuring that your event
	 * has been tracked.  To configure this timeout please see the
	 * set_config() documentation below.
	 *
	 * If you pass a function in as the properties argument, the
	 * function will receive the DOMElement that triggered the
	 * event as an argument.  You are expected to return an object
	 * from the function; any properties defined on this object
	 * will be sent to mixpanel as event properties.
	 *
	 * @type {Function}
	 * @param {Object|String} query A valid DOM query, element or jQuery-esque list
	 * @param {String} event_name The name of the event to track
	 * @param {Object|Function} [properties] This can be a set of properties, or a function that returns a set of properties after being passed a DOMElement
	 */
	MixpanelLib.prototype.track_forms = function() {
	    return this._track_dom.call(this, FormTracker, arguments);
	};

	/**
	 * Time an event by including the time between this call and a
	 * later 'track' call for the same event in the properties sent
	 * with the event.
	 *
	 * ### Usage:
	 *
	 *     // time an event named 'Registered'
	 *     mixpanel.time_event('Registered');
	 *     mixpanel.track('Registered', {'Gender': 'Male', 'Age': 21});
	 *
	 * When called for a particular event name, the next track call for that event
	 * name will include the elapsed time between the 'time_event' and 'track'
	 * calls. This value is stored as seconds in the '$duration' property.
	 *
	 * @param {String} event_name The name of the event.
	 */
	MixpanelLib.prototype.time_event = function(event_name) {
	    if (_.isUndefined(event_name)) {
	        console$1.error('No event name provided to mixpanel.time_event');
	        return;
	    }

	    if (this._event_is_disabled(event_name)) {
	        return;
	    }

	    this['persistence'].set_event_timer(event_name,  new Date().getTime());
	};

	/**
	 * Register a set of super properties, which are included with all
	 * events. This will overwrite previous super property values.
	 *
	 * ### Usage:
	 *
	 *     // register 'Gender' as a super property
	 *     mixpanel.register({'Gender': 'Female'});
	 *
	 *     // register several super properties when a user signs up
	 *     mixpanel.register({
	 *         'Email': 'jdoe@example.com',
	 *         'Account Type': 'Free'
	 *     });
	 *
	 * @param {Object} properties An associative array of properties to store about the user
	 * @param {Number} [days] How many days since the user's last visit to store the super properties
	 */
	MixpanelLib.prototype.register = function(props, days) {
	    this['persistence'].register(props, days);
	};

	/**
	 * Register a set of super properties only once. This will not
	 * overwrite previous super property values, unlike register().
	 *
	 * ### Usage:
	 *
	 *     // register a super property for the first time only
	 *     mixpanel.register_once({
	 *         'First Login Date': new Date().toISOString()
	 *     });
	 *
	 * ### Notes:
	 *
	 * If default_value is specified, current super properties
	 * with that value will be overwritten.
	 *
	 * @param {Object} properties An associative array of properties to store about the user
	 * @param {*} [default_value] Value to override if already set in super properties (ex: 'False') Default: 'None'
	 * @param {Number} [days] How many days since the users last visit to store the super properties
	 */
	MixpanelLib.prototype.register_once = function(props, default_value, days) {
	    this['persistence'].register_once(props, default_value, days);
	};

	/**
	 * Delete a super property stored with the current user.
	 *
	 * @param {String} property The name of the super property to remove
	 */
	MixpanelLib.prototype.unregister = function(property) {
	    this['persistence'].unregister(property);
	};

	MixpanelLib.prototype._register_single = function(prop, value) {
	    var props = {};
	    props[prop] = value;
	    this.register(props);
	};

	/**
	 * Identify a user with a unique ID. All subsequent
	 * actions caused by this user will be tied to this unique ID. This
	 * property is used to track unique visitors. If the method is
	 * never called, then unique visitors will be identified by a UUID
	 * generated the first time they visit the site.
	 *
	 * ### Notes:
	 *
	 * You can call this function to overwrite a previously set
	 * unique ID for the current user. Mixpanel cannot translate
	 * between IDs at this time, so when you change a user's ID
	 * they will appear to be a new user.
	 *
	 * identify() should not be called to link anonymous activity to
	 * subsequent activity when a unique ID is first assigned.
	 * Use alias() when a unique ID is first assigned (registration), and
	 * use identify() to identify the user with that unique ID on an ongoing
	 * basis (e.g., each time a user logs in after registering).
	 * Do not call identify() at the same time as alias().
	 *
	 * @param {String} [unique_id] A string that uniquely identifies a user. If not provided, the distinct_id currently in the persistent store (cookie or localStorage) will be used.
	 */
	MixpanelLib.prototype.identify = function(unique_id, _set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback) {
	    // Optional Parameters
	    //  _set_callback:function  A callback to be run if and when the People set queue is flushed
	    //  _add_callback:function  A callback to be run if and when the People add queue is flushed
	    //  _append_callback:function  A callback to be run if and when the People append queue is flushed
	    //  _set_once_callback:function  A callback to be run if and when the People set_once queue is flushed
	    //  _union_callback:function  A callback to be run if and when the People union queue is flushed

	    // identify only changes the distinct id if it doesn't match either the existing or the alias;
	    // if it's new, blow away the alias as well.
	    if (unique_id !== this.get_distinct_id() && unique_id !== this.get_property(ALIAS_ID_KEY)) {
	        this.unregister(ALIAS_ID_KEY);
	        this._register_single('distinct_id', unique_id);
	    }
	    this._check_and_handle_notifications(this.get_distinct_id());
	    this._flags.identify_called = true;
	    // Flush any queued up people requests
	    this['people']._flush(_set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback);
	};

	/**
	 * Clears super properties and generates a new random distinct_id for this instance.
	 * Useful for clearing data when a user logs out.
	 */
	MixpanelLib.prototype.reset = function() {
	    this['persistence'].clear();
	    this._flags.identify_called = false;
	    this.register_once({'distinct_id': _.UUID()}, '');
	};

	/**
	 * Returns the current distinct id of the user. This is either the id automatically
	 * generated by the library or the id that has been passed by a call to identify().
	 *
	 * ### Notes:
	 *
	 * get_distinct_id() can only be called after the Mixpanel library has finished loading.
	 * init() has a loaded function available to handle this automatically. For example:
	 *
	 *     // set distinct_id after the mixpanel library has loaded
	 *     mixpanel.init('YOUR PROJECT TOKEN', {
	 *         loaded: function(mixpanel) {
	 *             distinct_id = mixpanel.get_distinct_id();
	 *         }
	 *     });
	 */
	MixpanelLib.prototype.get_distinct_id = function() {
	    return this.get_property('distinct_id');
	};

	/**
	 * Create an alias, which Mixpanel will use to link two distinct_ids going forward (not retroactively).
	 * Multiple aliases can map to the same original ID, but not vice-versa. Aliases can also be chained - the
	 * following is a valid scenario:
	 *
	 *     mixpanel.alias('new_id', 'existing_id');
	 *     ...
	 *     mixpanel.alias('newer_id', 'new_id');
	 *
	 * If the original ID is not passed in, we will use the current distinct_id - probably the auto-generated GUID.
	 *
	 * ### Notes:
	 *
	 * The best practice is to call alias() when a unique ID is first created for a user
	 * (e.g., when a user first registers for an account and provides an email address).
	 * alias() should never be called more than once for a given user, except to
	 * chain a newer ID to a previously new ID, as described above.
	 *
	 * @param {String} alias A unique identifier that you want to use for this user in the future.
	 * @param {String} [original] The current identifier being used for this user.
	 */
	MixpanelLib.prototype.alias = function(alias, original) {
	    // If the $people_distinct_id key exists in persistence, there has been a previous
	    // mixpanel.people.identify() call made for this user. It is VERY BAD to make an alias with
	    // this ID, as it will duplicate users.
	    if (alias === this.get_property(PEOPLE_DISTINCT_ID_KEY)) {
	        console$1.critical('Attempting to create alias for existing People user - aborting.');
	        return -2;
	    }

	    var _this = this;
	    if (_.isUndefined(original)) {
	        original = this.get_distinct_id();
	    }
	    if (alias !== original) {
	        this._register_single(ALIAS_ID_KEY, alias);
	        return this.track('$create_alias', { 'alias': alias, 'distinct_id': original }, function() {
	            // Flush the people queue
	            _this.identify(alias);
	        });
	    } else {
	        console$1.error('alias matches current distinct_id - skipping api call.');
	        this.identify(alias);
	        return -1;
	    }
	};

	/**
	 * Provide a string to recognize the user by. The string passed to
	 * this method will appear in the Mixpanel Streams product rather
	 * than an automatically generated name. Name tags do not have to
	 * be unique.
	 *
	 * This value will only be included in Streams data.
	 *
	 * @param {String} name_tag A human readable name for the user
	 * @api private
	 */
	MixpanelLib.prototype.name_tag = function(name_tag) {
	    this._register_single('mp_name_tag', name_tag);
	};

	/**
	 * Update the configuration of a mixpanel library instance.
	 *
	 * The default config is:
	 *
	 *     {
	 *       // super properties cookie expiration (in days)
	 *       cookie_expiration:          365
	 *
	 *       // super properties span subdomains
	 *       cross_subdomain_cookie:     true
	 *
	 *       // if this is true, the mixpanel cookie or localStorage entry
	 *       // will be deleted, and no user persistence will take place
	 *       disable_persistence:        false
	 *
	 *       // type of persistent store for super properties (cookie/
	 *       // localStorage) if set to 'localStorage', any existing
	 *       // mixpanel cookie value with the same persistence_name
	 *       // will be transferred to localStorage and deleted
	 *       persistence:                'cookie'
	 *
	 *       // name for super properties persistent store
	 *       persistence_name:           ''
	 *
	 *       // names of properties/superproperties which should never
	 *       // be sent with track() calls
	 *       property_blacklist:         []
	 *
	 *       // if this is true, mixpanel cookies will be marked as
	 *       // secure, meaning they will only be transmitted over https
	 *       secure_cookie:              false
	 *
	 *       // the amount of time track_links will
	 *       // wait for Mixpanel's servers to respond
	 *       track_links_timeout:        300
	 *
	 *       // should we track a page view on page load
	 *       track_pageview:             true
	 *
	 *       // if you set upgrade to be true, the library will check for
	 *       // a cookie from our old js library and import super
	 *       // properties from it, then the old cookie is deleted
	 *       // The upgrade config option only works in the initialization,
	 *       // so make sure you set it when you create the library.
	 *       upgrade:                    false
	 *     }
	 *
	 *
	 * @param {Object} config A dictionary of new configuration values to update
	 */
	MixpanelLib.prototype.set_config = function(config) {
	    if (_.isObject(config)) {
	        _.extend(this['config'], config);

	        if (!this.get_config('persistence_name')) {
	            this['config']['persistence_name'] = this['config']['cookie_name'];
	        }
	        if (!this.get_config('disable_persistence')) {
	            this['config']['disable_persistence'] = this['config']['disable_cookie'];
	        }

	        if (this['persistence']) {
	            this['persistence'].update_config(this['config']);
	        }
	        Config.DEBUG = Config.DEBUG || this.get_config('debug');
	    }
	};

	/**
	 * returns the current config object for the library.
	 */
	MixpanelLib.prototype.get_config = function(prop_name) {
	    return this['config'][prop_name];
	};

	/**
	 * Returns the value of the super property named property_name. If no such
	 * property is set, get_property() will return the undefined value.
	 *
	 * ### Notes:
	 *
	 * get_property() can only be called after the Mixpanel library has finished loading.
	 * init() has a loaded function available to handle this automatically. For example:
	 *
	 *     // grab value for 'user_id' after the mixpanel library has loaded
	 *     mixpanel.init('YOUR PROJECT TOKEN', {
	 *         loaded: function(mixpanel) {
	 *             user_id = mixpanel.get_property('user_id');
	 *         }
	 *     });
	 *
	 * @param {String} property_name The name of the super property you want to retrieve
	 */
	MixpanelLib.prototype.get_property = function(property_name) {
	    return this['persistence']['props'][property_name];
	};

	MixpanelLib.prototype.toString = function() {
	    var name = this.get_config('name');
	    if (name !== PRIMARY_INSTANCE_NAME) {
	        name = PRIMARY_INSTANCE_NAME + '.' + name;
	    }
	    return name;
	};

	MixpanelLib.prototype._event_is_disabled = function(event_name) {
	    return _.isBlockedUA(userAgent) ||
	        this._flags.disable_all_events ||
	        _.include(this.__disabled_events, event_name);
	};

	MixpanelLib.prototype._check_and_handle_notifications = function(distinct_id) {
	    if (!distinct_id || this._flags.identify_called || this.get_config('disable_notifications')) {
	        return;
	    }

	    console$1.log('MIXPANEL NOTIFICATION CHECK');

	    var data = {
	        'verbose':     true,
	        'version':     '1',
	        'lib':         'web',
	        'token':       this.get_config('token'),
	        'distinct_id': distinct_id
	    };
	    var self = this;
	    this._send_request(
	        this.get_config('decide_host') + '/decide/',
	        data,
	        this._prepare_callback(function(r) {
	            if (r['notifications'] && r['notifications'].length > 0) {
	                self._show_notification.call(self, r['notifications'][0]);
	            }
	        })
	    );
	};

	MixpanelLib.prototype._show_notification = function(notification_data) {
	    var notification = new MPNotif(notification_data, this);
	    notification.show();
	};

	MixpanelPeople.prototype._init = function(mixpanel_instance) {
	    this._mixpanel = mixpanel_instance;
	};

	/*
	 * Set properties on a user record.
	 *
	 * ### Usage:
	 *
	 *     mixpanel.people.set('gender', 'm');
	 *
	 *     // or set multiple properties at once
	 *     mixpanel.people.set({
	 *         'Company': 'Acme',
	 *         'Plan': 'Premium',
	 *         'Upgrade date': new Date()
	 *     });
	 *     // properties can be strings, integers, dates, or lists
	 *
	 * @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
	 * @param {*} [to] A value to set on the given property name
	 * @param {Function} [callback] If provided, the callback will be called after the tracking event
	 */
	MixpanelPeople.prototype.set = function(prop, to, callback) {
	    var data = {};
	    var $set = {};
	    if (_.isObject(prop)) {
	        _.each(prop, function(v, k) {
	            if (!this._is_reserved_property(k)) {
	                $set[k] = v;
	            }
	        }, this);
	        callback = to;
	    } else {
	        $set[prop] = to;
	    }

	    // make sure that the referrer info has been updated and saved
	    if (this._get_config('save_referrer')) {
	        this._mixpanel['persistence'].update_referrer_info(document.referrer);
	    }

	    // update $set object with default people properties
	    $set = _.extend(
	        {},
	        _.info.people_properties(),
	        this._mixpanel['persistence'].get_referrer_info(),
	        $set
	    );

	    data[SET_ACTION] = $set;

	    return this._send_request(data, callback);
	};

	/*
	 * Set properties on a user record, only if they do not yet exist.
	 * This will not overwrite previous people property values, unlike
	 * people.set().
	 *
	 * ### Usage:
	 *
	 *     mixpanel.people.set_once('First Login Date', new Date());
	 *
	 *     // or set multiple properties at once
	 *     mixpanel.people.set_once({
	 *         'First Login Date': new Date(),
	 *         'Starting Plan': 'Premium'
	 *     });
	 *
	 *     // properties can be strings, integers or dates
	 *
	 * @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
	 * @param {*} [to] A value to set on the given property name
	 * @param {Function} [callback] If provided, the callback will be called after the tracking event
	 */
	MixpanelPeople.prototype.set_once = function(prop, to, callback) {
	    var data = {};
	    var $set_once = {};
	    if (_.isObject(prop)) {
	        _.each(prop, function(v, k) {
	            if (!this._is_reserved_property(k)) {
	                $set_once[k] = v;
	            }
	        }, this);
	        callback = to;
	    } else {
	        $set_once[prop] = to;
	    }
	    data[SET_ONCE_ACTION] = $set_once;
	    return this._send_request(data, callback);
	};

	/*
	 * Increment/decrement numeric people analytics properties.
	 *
	 * ### Usage:
	 *
	 *     mixpanel.people.increment('page_views', 1);
	 *
	 *     // or, for convenience, if you're just incrementing a counter by
	 *     // 1, you can simply do
	 *     mixpanel.people.increment('page_views');
	 *
	 *     // to decrement a counter, pass a negative number
	 *     mixpanel.people.increment('credits_left', -1);
	 *
	 *     // like mixpanel.people.set(), you can increment multiple
	 *     // properties at once:
	 *     mixpanel.people.increment({
	 *         counter1: 1,
	 *         counter2: 6
	 *     });
	 *
	 * @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and numeric values.
	 * @param {Number} [by] An amount to increment the given property
	 * @param {Function} [callback] If provided, the callback will be called after the tracking event
	 */
	MixpanelPeople.prototype.increment = function(prop, by, callback) {
	    var data = {};
	    var $add = {};
	    if (_.isObject(prop)) {
	        _.each(prop, function(v, k) {
	            if (!this._is_reserved_property(k)) {
	                if (isNaN(parseFloat(v))) {
	                    console$1.error('Invalid increment value passed to mixpanel.people.increment - must be a number');
	                    return;
	                } else {
	                    $add[k] = v;
	                }
	            }
	        }, this);
	        callback = by;
	    } else {
	        // convenience: mixpanel.people.increment('property'); will
	        // increment 'property' by 1
	        if (_.isUndefined(by)) {
	            by = 1;
	        }
	        $add[prop] = by;
	    }
	    data[ADD_ACTION] = $add;

	    return this._send_request(data, callback);
	};

	/*
	 * Append a value to a list-valued people analytics property.
	 *
	 * ### Usage:
	 *
	 *     // append a value to a list, creating it if needed
	 *     mixpanel.people.append('pages_visited', 'homepage');
	 *
	 *     // like mixpanel.people.set(), you can append multiple
	 *     // properties at once:
	 *     mixpanel.people.append({
	 *         list1: 'bob',
	 *         list2: 123
	 *     });
	 *
	 * @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
	 * @param {*} [value] An item to append to the list
	 * @param {Function} [callback] If provided, the callback will be called after the tracking event
	 */
	MixpanelPeople.prototype.append = function(list_name, value, callback) {
	    var data = {};
	    var $append = {};
	    if (_.isObject(list_name)) {
	        _.each(list_name, function(v, k) {
	            if (!this._is_reserved_property(k)) {
	                $append[k] = v;
	            }
	        }, this);
	        callback = value;
	    } else {
	        $append[list_name] = value;
	    }
	    data[APPEND_ACTION] = $append;

	    return this._send_request(data, callback);
	};

	/*
	 * Merge a given list with a list-valued people analytics property,
	 * excluding duplicate values.
	 *
	 * ### Usage:
	 *
	 *     // merge a value to a list, creating it if needed
	 *     mixpanel.people.union('pages_visited', 'homepage');
	 *
	 *     // like mixpanel.people.set(), you can append multiple
	 *     // properties at once:
	 *     mixpanel.people.union({
	 *         list1: 'bob',
	 *         list2: 123
	 *     });
	 *
	 *     // like mixpanel.people.append(), you can append multiple
	 *     // values to the same list:
	 *     mixpanel.people.union({
	 *         list1: ['bob', 'billy']
	 *     });
	 *
	 * @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
	 * @param {*} [value] Value / values to merge with the given property
	 * @param {Function} [callback] If provided, the callback will be called after the tracking event
	 */
	MixpanelPeople.prototype.union = function(list_name, values, callback) {
	    var data = {};
	    var $union = {};
	    if (_.isObject(list_name)) {
	        _.each(list_name, function(v, k) {
	            if (!this._is_reserved_property(k)) {
	                $union[k] = _.isArray(v) ? v : [v];
	            }
	        }, this);
	        callback = values;
	    } else {
	        $union[list_name] = _.isArray(values) ? values : [values];
	    }
	    data[UNION_ACTION] = $union;

	    return this._send_request(data, callback);
	};

	/*
	 * Record that you have charged the current user a certain amount
	 * of money. Charges recorded with track_charge() will appear in the
	 * Mixpanel revenue report.
	 *
	 * ### Usage:
	 *
	 *     // charge a user $50
	 *     mixpanel.people.track_charge(50);
	 *
	 *     // charge a user $30.50 on the 2nd of january
	 *     mixpanel.people.track_charge(30.50, {
	 *         '$time': new Date('jan 1 2012')
	 *     });
	 *
	 * @param {Number} amount The amount of money charged to the current user
	 * @param {Object} [properties] An associative array of properties associated with the charge
	 * @param {Function} [callback] If provided, the callback will be called when the server responds
	 */
	MixpanelPeople.prototype.track_charge = function(amount, properties, callback) {
	    if (!_.isNumber(amount)) {
	        amount = parseFloat(amount);
	        if (isNaN(amount)) {
	            console$1.error('Invalid value passed to mixpanel.people.track_charge - must be a number');
	            return;
	        }
	    }

	    return this.append('$transactions', _.extend({
	        '$amount': amount
	    }, properties), callback);
	};

	/*
	 * Permanently clear all revenue report transactions from the
	 * current user's people analytics profile.
	 *
	 * ### Usage:
	 *
	 *     mixpanel.people.clear_charges();
	 *
	 * @param {Function} [callback] If provided, the callback will be called after the tracking event
	 */
	MixpanelPeople.prototype.clear_charges = function(callback) {
	    return this.set('$transactions', [], callback);
	};

	/*
	 * Permanently deletes the current people analytics profile from
	 * Mixpanel (using the current distinct_id).
	 *
	 * ### Usage:
	 *
	 *     // remove the all data you have stored about the current user
	 *     mixpanel.people.delete_user();
	 *
	 */
	MixpanelPeople.prototype.delete_user = function() {
	    if (!this._identify_called()) {
	        console$1.error('mixpanel.people.delete_user() requires you to call identify() first');
	        return;
	    }
	    var data = {'$delete': this._mixpanel.get_distinct_id()};
	    return this._send_request(data);
	};

	MixpanelPeople.prototype.toString = function() {
	    return this._mixpanel.toString() + '.people';
	};

	MixpanelPeople.prototype._send_request = function(data, callback) {
	    data['$token'] = this._get_config('token');
	    data['$distinct_id'] = this._mixpanel.get_distinct_id();

	    var date_encoded_data = _.encodeDates(data);
	    var truncated_data    = _.truncate(date_encoded_data, 255);
	    var json_data         = _.JSONEncode(date_encoded_data);
	    var encoded_data      = _.base64Encode(json_data);

	    if (!this._identify_called()) {
	        this._enqueue(data);
	        if (!_.isUndefined(callback)) {
	            if (this._get_config('verbose')) {
	                callback({status: -1, error: null});
	            } else {
	                callback(-1);
	            }
	        }
	        return truncated_data;
	    }

	    console$1.log('MIXPANEL PEOPLE REQUEST:');
	    console$1.log(truncated_data);

	    this._mixpanel._send_request(
	        this._get_config('api_host') + '/engage/',
	        {'data': encoded_data},
	        this._mixpanel._prepare_callback(callback, truncated_data)
	    );

	    return truncated_data;
	};

	MixpanelPeople.prototype._get_config = function(conf_var) {
	    return this._mixpanel.get_config(conf_var);
	};

	MixpanelPeople.prototype._identify_called = function() {
	    return this._mixpanel._flags.identify_called === true;
	};

	// Queue up engage operations if identify hasn't been called yet.
	MixpanelPeople.prototype._enqueue = function(data) {
	    if (SET_ACTION in data) {
	        this._mixpanel['persistence']._add_to_people_queue(SET_ACTION, data);
	    } else if (SET_ONCE_ACTION in data) {
	        this._mixpanel['persistence']._add_to_people_queue(SET_ONCE_ACTION, data);
	    } else if (ADD_ACTION in data) {
	        this._mixpanel['persistence']._add_to_people_queue(ADD_ACTION, data);
	    } else if (APPEND_ACTION in data) {
	        this._mixpanel['persistence']._add_to_people_queue(APPEND_ACTION, data);
	    } else if (UNION_ACTION in data) {
	        this._mixpanel['persistence']._add_to_people_queue(UNION_ACTION, data);
	    } else {
	        console$1.error('Invalid call to _enqueue():', data);
	    }
	};

	// Flush queued engage operations - order does not matter,
	// and there are network level race conditions anyway
	MixpanelPeople.prototype._flush = function(_set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback) {
	    var _this = this;
	    var $set_queue = _.extend({}, this._mixpanel['persistence']._get_queue(SET_ACTION));
	    var $set_once_queue = _.extend({}, this._mixpanel['persistence']._get_queue(SET_ONCE_ACTION));
	    var $add_queue = _.extend({}, this._mixpanel['persistence']._get_queue(ADD_ACTION));
	    var $append_queue = this._mixpanel['persistence']._get_queue(APPEND_ACTION);
	    var $union_queue = _.extend({}, this._mixpanel['persistence']._get_queue(UNION_ACTION));

	    if (!_.isUndefined($set_queue) && _.isObject($set_queue) && !_.isEmptyObject($set_queue)) {
	        _this._mixpanel['persistence']._pop_from_people_queue(SET_ACTION, $set_queue);
	        this.set($set_queue, function(response, data) {
	            // on bad response, we want to add it back to the queue
	            if (response === 0) {
	                _this._mixpanel['persistence']._add_to_people_queue(SET_ACTION, $set_queue);
	            }
	            if (!_.isUndefined(_set_callback)) {
	                _set_callback(response, data);
	            }
	        });
	    }

	    if (!_.isUndefined($set_once_queue) && _.isObject($set_once_queue) && !_.isEmptyObject($set_once_queue)) {
	        _this._mixpanel['persistence']._pop_from_people_queue(SET_ONCE_ACTION, $set_once_queue);
	        this.set_once($set_once_queue, function(response, data) {
	            // on bad response, we want to add it back to the queue
	            if (response === 0) {
	                _this._mixpanel['persistence']._add_to_people_queue(SET_ONCE_ACTION, $set_once_queue);
	            }
	            if (!_.isUndefined(_set_once_callback)) {
	                _set_once_callback(response, data);
	            }
	        });
	    }

	    if (!_.isUndefined($add_queue) && _.isObject($add_queue) && !_.isEmptyObject($add_queue)) {
	        _this._mixpanel['persistence']._pop_from_people_queue(ADD_ACTION, $add_queue);
	        this.increment($add_queue, function(response, data) {
	            // on bad response, we want to add it back to the queue
	            if (response === 0) {
	                _this._mixpanel['persistence']._add_to_people_queue(ADD_ACTION, $add_queue);
	            }
	            if (!_.isUndefined(_add_callback)) {
	                _add_callback(response, data);
	            }
	        });
	    }

	    if (!_.isUndefined($union_queue) && _.isObject($union_queue) && !_.isEmptyObject($union_queue)) {
	        _this._mixpanel['persistence']._pop_from_people_queue(UNION_ACTION, $union_queue);
	        this.union($union_queue, function(response, data) {
	            // on bad response, we want to add it back to the queue
	            if (response === 0) {
	                _this._mixpanel['persistence']._add_to_people_queue(UNION_ACTION, $union_queue);
	            }
	            if (!_.isUndefined(_union_callback)) {
	                _union_callback(response, data);
	            }
	        });
	    }

	    // we have to fire off each $append individually since there is
	    // no concat method server side
	    if (!_.isUndefined($append_queue) && _.isArray($append_queue) && $append_queue.length) {
	        var $append_item;
	        var callback = function(response, data) {
	            if (response === 0) {
	                _this._mixpanel['persistence']._add_to_people_queue(APPEND_ACTION, $append_item);
	            }
	            if (!_.isUndefined(_append_callback)) {
	                _append_callback(response, data);
	            }
	        };
	        for (var i = $append_queue.length - 1; i >= 0; i--) {
	            $append_item = $append_queue.pop();
	            _this.append($append_item, callback);
	        }
	        // Save the shortened append queue
	        _this._mixpanel['persistence'].save();
	    }
	};

	MixpanelPeople.prototype._is_reserved_property = function(prop) {
	    return prop === '$distinct_id' || prop === '$token';
	};


	// Internal class for notification display
	MixpanelLib._Notification = function(notif_data, mixpanel_instance) {
	    _.bind_instance_methods(this);

	    this.mixpanel    = mixpanel_instance;
	    this.persistence = this.mixpanel['persistence'];

	    this.campaign_id = _.escapeHTML(notif_data['id']);
	    this.message_id  = _.escapeHTML(notif_data['message_id']);

	    this.body            = (_.escapeHTML(notif_data['body']) || '').replace(/\n/g, '<br/>');
	    this.cta             = _.escapeHTML(notif_data['cta']) || 'Close';
	    this.dest_url        = _.escapeHTML(notif_data['cta_url']) || null;
	    this.image_url       = _.escapeHTML(notif_data['image_url']) || null;
	    this.notif_type      = _.escapeHTML(notif_data['type']) || 'takeover';
	    this.style           = _.escapeHTML(notif_data['style']) || 'light';
	    this.thumb_image_url = _.escapeHTML(notif_data['thumb_image_url']) || null;
	    this.title           = _.escapeHTML(notif_data['title']) || '';
	    this.video_url       = _.escapeHTML(notif_data['video_url']) || null;
	    this.video_width     = MPNotif.VIDEO_WIDTH;
	    this.video_height    = MPNotif.VIDEO_HEIGHT;

	    this.clickthrough = true;
	    if (!this.dest_url) {
	        this.dest_url = '#dismiss';
	        this.clickthrough = false;
	    }

	    this.mini = this.notif_type === 'mini';
	    if (!this.mini) {
	        this.notif_type = 'takeover';
	    }
	    this.notif_width = !this.mini ? MPNotif.NOTIF_WIDTH : MPNotif.NOTIF_WIDTH_MINI;

	    this._set_client_config();
	    this.imgs_to_preload = this._init_image_html();
	    this._init_video();
	};

	MPNotif = MixpanelLib._Notification;

	MPNotif.ANIM_TIME         = 200;
	MPNotif.MARKUP_PREFIX     = 'mixpanel-notification';
	MPNotif.BG_OPACITY        = 0.6;
	MPNotif.NOTIF_TOP         = 25;
	MPNotif.NOTIF_START_TOP   = 200;
	MPNotif.NOTIF_WIDTH       = 388;
	MPNotif.NOTIF_WIDTH_MINI  = 420;
	MPNotif.NOTIF_HEIGHT_MINI = 85;
	MPNotif.THUMB_BORDER_SIZE = 5;
	MPNotif.THUMB_IMG_SIZE    = 60;
	MPNotif.THUMB_OFFSET      = Math.round(MPNotif.THUMB_IMG_SIZE / 2);
	MPNotif.VIDEO_WIDTH       = 595;
	MPNotif.VIDEO_HEIGHT      = 334;

	MPNotif.prototype.show = function() {
	    var self = this;
	    this._set_client_config();

	    // don't display until HTML body exists
	    if (!this.body_el) {
	        setTimeout(function() { self.show(); }, 300);
	        return;
	    }

	    this._init_styles();
	    this._init_notification_el();

	    // wait for any images to load before showing notification
	    this._preload_images(this._attach_and_animate);
	};

	MPNotif.prototype.dismiss = _.safewrap(function() {
	    if (!this.marked_as_shown) {
	        // unexpected condition: user interacted with notif even though we didn't consider it
	        // visible (see _mark_as_shown()); send tracking signals to mark delivery
	        this._mark_delivery({'invisible': true});
	    }

	    var exiting_el = this.showing_video ? this._get_el('video') : this._get_notification_display_el();
	    if (this.use_transitions) {
	        this._remove_class('bg', 'visible');
	        this._add_class(exiting_el, 'exiting');
	        setTimeout(this._remove_notification_el, MPNotif.ANIM_TIME);
	    } else {
	        var notif_attr, notif_start, notif_goal;
	        if (this.mini) {
	            notif_attr  = 'right';
	            notif_start = 20;
	            notif_goal  = -100;
	        } else {
	            notif_attr  = 'top';
	            notif_start = MPNotif.NOTIF_TOP;
	            notif_goal  = MPNotif.NOTIF_START_TOP + MPNotif.NOTIF_TOP;
	        }
	        this._animate_els([
	            {
	                el:    this._get_el('bg'),
	                attr:  'opacity',
	                start: MPNotif.BG_OPACITY,
	                goal:  0.0
	            },
	            {
	                el:    exiting_el,
	                attr:  'opacity',
	                start: 1.0,
	                goal:  0.0
	            },
	            {
	                el:    exiting_el,
	                attr:  notif_attr,
	                start: notif_start,
	                goal:  notif_goal
	            }
	        ], MPNotif.ANIM_TIME, this._remove_notification_el);
	    }
	});

	MPNotif.prototype._add_class = _.safewrap(function(el, class_name) {
	    class_name = MPNotif.MARKUP_PREFIX + '-' + class_name;
	    if (typeof el === 'string') {
	        el = this._get_el(el);
	    }
	    if (!el.className) {
	        el.className = class_name;
	    } else if (!~(' ' + el.className + ' ').indexOf(' ' + class_name + ' ')) {
	        el.className += ' ' + class_name;
	    }
	});
	MPNotif.prototype._remove_class = _.safewrap(function(el, class_name) {
	    class_name = MPNotif.MARKUP_PREFIX + '-' + class_name;
	    if (typeof el === 'string') {
	        el = this._get_el(el);
	    }
	    if (el.className) {
	        el.className = (' ' + el.className + ' ')
	                .replace(' ' + class_name + ' ', '')
	                .replace(/^[\s\xA0]+/, '')
	                .replace(/[\s\xA0]+$/, '');
	    }
	});

	MPNotif.prototype._animate_els = _.safewrap(function(anims, mss, done_cb, start_time) {
	    var self = this,
	        in_progress = false,
	        ai, anim,
	        cur_time = 1 * new Date(), time_diff;

	    start_time = start_time || cur_time;
	    time_diff = cur_time - start_time;

	    for (ai = 0; ai < anims.length; ai++) {
	        anim = anims[ai];
	        if (typeof anim.val === 'undefined') {
	            anim.val = anim.start;
	        }
	        if (anim.val !== anim.goal) {
	            in_progress = true;
	            var anim_diff = anim.goal - anim.start,
	                anim_dir = anim.goal >= anim.start ? 1 : -1;
	            anim.val = anim.start + anim_diff * time_diff / mss;
	            if (anim.attr !== 'opacity') {
	                anim.val = Math.round(anim.val);
	            }
	            if ((anim_dir > 0 && anim.val >= anim.goal) || (anim_dir < 0 && anim.val <= anim.goal)) {
	                anim.val = anim.goal;
	            }
	        }
	    }
	    if (!in_progress) {
	        if (done_cb) {
	            done_cb();
	        }
	        return;
	    }

	    for (ai = 0; ai < anims.length; ai++) {
	        anim = anims[ai];
	        if (anim.el) {
	            var suffix = anim.attr === 'opacity' ? '' : 'px';
	            anim.el.style[anim.attr] = String(anim.val) + suffix;
	        }
	    }
	    setTimeout(function() { self._animate_els(anims, mss, done_cb, start_time); }, 10);
	});

	MPNotif.prototype._attach_and_animate = _.safewrap(function() {
	    var self = this;

	    // no possibility to double-display
	    if (this.shown || this._get_shown_campaigns()[this.campaign_id]) {
	        return;
	    }
	    this.shown = true;

	    this.body_el.appendChild(this.notification_el);
	    setTimeout(function() {
	        var notif_el = self._get_notification_display_el();
	        if (self.use_transitions) {
	            if (!self.mini) {
	                self._add_class('bg', 'visible');
	            }
	            self._add_class(notif_el, 'visible');
	            self._mark_as_shown();
	        } else {
	            var notif_attr, notif_start, notif_goal;
	            if (self.mini) {
	                notif_attr  = 'right';
	                notif_start = -100;
	                notif_goal  = 20;
	            } else {
	                notif_attr  = 'top';
	                notif_start = MPNotif.NOTIF_START_TOP + MPNotif.NOTIF_TOP;
	                notif_goal  = MPNotif.NOTIF_TOP;
	            }
	            self._animate_els([
	                {
	                    el:    self._get_el('bg'),
	                    attr:  'opacity',
	                    start: 0.0,
	                    goal:  MPNotif.BG_OPACITY
	                },
	                {
	                    el:    notif_el,
	                    attr:  'opacity',
	                    start: 0.0,
	                    goal:  1.0
	                },
	                {
	                    el:    notif_el,
	                    attr:  notif_attr,
	                    start: notif_start,
	                    goal:  notif_goal
	                }
	            ], MPNotif.ANIM_TIME, self._mark_as_shown);
	        }
	    }, 100);
	    _.register_event(self._get_el('cancel'), 'click', function(e) {
	        e.preventDefault();
	        self.dismiss();
	    });
	    var click_el = self._get_el('button') ||
	                       self._get_el('mini-content');
	    _.register_event(click_el, 'click', function(e) {
	        e.preventDefault();
	        if (self.show_video) {
	            self._track_event('$campaign_open', {'$resource_type': 'video'});
	            self._switch_to_video();
	        } else {
	            self.dismiss();
	            if (self.clickthrough) {
	                self._track_event('$campaign_open', {'$resource_type': 'link'}, function() {
	                    window.location.href = self.dest_url;
	                });
	            }
	        }
	    });
	});

	MPNotif.prototype._get_el = function(id) {
	    return document.getElementById(MPNotif.MARKUP_PREFIX + '-' + id);
	};

	MPNotif.prototype._get_notification_display_el = function() {
	    return this._get_el(this.notif_type);
	};

	MPNotif.prototype._get_shown_campaigns = function() {
	    return this.persistence['props'][CAMPAIGN_IDS_KEY] || (this.persistence['props'][CAMPAIGN_IDS_KEY] = {});
	};

	MPNotif.prototype._browser_lte = function(browser, version) {
	    return this.browser_versions[browser] && this.browser_versions[browser] <= version;
	};

	MPNotif.prototype._init_image_html = function() {
	    var imgs_to_preload = [];

	    if (!this.mini) {
	        if (this.image_url) {
	            imgs_to_preload.push(this.image_url);
	            this.img_html = '<img id="img" src="' + this.image_url + '"/>';
	        } else {
	            this.img_html = '';
	        }
	        if (this.thumb_image_url) {
	            imgs_to_preload.push(this.thumb_image_url);
	            this.thumb_img_html =
	                    '<div id="thumbborder-wrapper"><div id="thumbborder"></div></div>' +
	                    '<img id="thumbnail"' +
	                        ' src="' + this.thumb_image_url + '"' +
	                        ' width="' + MPNotif.THUMB_IMG_SIZE + '"' +
	                        ' height="' + MPNotif.THUMB_IMG_SIZE + '"' +
	                    '/>' +
	                    '<div id="thumbspacer"></div>';
	        } else {
	            this.thumb_img_html = '';
	        }
	    } else {
	        this.thumb_image_url = this.thumb_image_url || '//cdn.mxpnl.com/site_media/images/icons/notifications/mini-news-dark.png';
	        imgs_to_preload.push(this.thumb_image_url);
	    }

	    return imgs_to_preload;
	};

	MPNotif.prototype._init_notification_el = function() {
	    var notification_html = '';
	    var video_src         = '';
	    var video_html        = '';
	    var cancel_html       = '<div id="cancel">' +
	                                    '<div id="cancel-icon"></div>' +
	                                '</div>';

	    this.notification_el = document.createElement('div');
	    this.notification_el.id = MPNotif.MARKUP_PREFIX + '-wrapper';
	    if (!this.mini) {
	        // TAKEOVER notification
	        var close_html  = (this.clickthrough || this.show_video) ? '' : '<div id="button-close"></div>',
	            play_html   = this.show_video ? '<div id="button-play"></div>' : '';
	        if (this._browser_lte('ie', 7)) {
	            close_html = '';
	            play_html = '';
	        }
	        notification_html =
	                '<div id="takeover">' +
	                    this.thumb_img_html +
	                    '<div id="mainbox">' +
	                        cancel_html +
	                        '<div id="content">' +
	                            this.img_html +
	                            '<div id="title">' + this.title + '</div>' +
	                            '<div id="body">' + this.body + '</div>' +
	                            '<div id="tagline">' +
	                                '<a href="http://mixpanel.com?from=inapp" target="_blank">POWERED BY MIXPANEL</a>' +
	                            '</div>' +
	                        '</div>' +
	                        '<div id="button">' +
	                            close_html +
	                            '<a id="button-link" href="' + this.dest_url + '">' + this.cta + '</a>' +
	                            play_html +
	                        '</div>' +
	                    '</div>' +
	                '</div>';
	    } else {
	        // MINI notification
	        notification_html =
	                '<div id="mini">' +
	                    '<div id="mainbox">' +
	                        cancel_html +
	                        '<div id="mini-content">' +
	                            '<div id="mini-icon">' +
	                                '<div id="mini-icon-img"></div>' +
	                            '</div>' +
	                            '<div id="body">' +
	                                '<div id="body-text"><div>' + this.body + '</div></div>' +
	                            '</div>' +
	                        '</div>' +
	                    '</div>' +
	                    '<div id="mini-border"></div>' +
	                '</div>';
	    }
	    if (this.youtube_video) {
	        video_src = '//www.youtube.com/embed/' + this.youtube_video +
	                '?wmode=transparent&showinfo=0&modestbranding=0&rel=0&autoplay=1&loop=0&vq=hd1080';
	        if (this.yt_custom) {
	            video_src += '&enablejsapi=1&html5=1&controls=0';
	            video_html =
	                    '<div id="video-controls">' +
	                        '<div id="video-progress" class="video-progress-el">' +
	                            '<div id="video-progress-total" class="video-progress-el"></div>' +
	                            '<div id="video-elapsed" class="video-progress-el"></div>' +
	                        '</div>' +
	                        '<div id="video-time" class="video-progress-el"></div>' +
	                    '</div>';
	        }
	    } else if (this.vimeo_video) {
	        video_src = '//player.vimeo.com/video/' + this.vimeo_video + '?autoplay=1&title=0&byline=0&portrait=0';
	    }
	    if (this.show_video) {
	        this.video_iframe =
	                '<iframe id="' + MPNotif.MARKUP_PREFIX + '-video-frame" ' +
	                    'width="' + this.video_width + '" height="' + this.video_height + '" ' +
	                    ' src="' + video_src + '"' +
	                    ' frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen="1" scrolling="no"' +
	                '></iframe>';
	        video_html =
	                '<div id="video-' + (this.flip_animate ? '' : 'no') + 'flip">' +
	                    '<div id="video">' +
	                        '<div id="video-holder"></div>' +
	                        video_html +
	                    '</div>' +
	                '</div>';
	    }
	    var main_html = video_html + notification_html;
	    if (this.flip_animate) {
	        main_html =
	                (this.mini ? notification_html : '') +
	                '<div id="flipcontainer"><div id="flipper">' +
	                    (this.mini ? video_html : main_html) +
	                '</div></div>';
	    }

	    this.notification_el.innerHTML =
	            ('<div id="overlay" class="' + this.notif_type + '">' +
	                '<div id="campaignid-' + this.campaign_id + '">' +
	                    '<div id="bgwrapper">' +
	                        '<div id="bg"></div>' +
	                        main_html +
	                    '</div>' +
	                '</div>' +
	            '</div>')
	            .replace(/class=\"/g, 'class="' + MPNotif.MARKUP_PREFIX + '-')
	            .replace(/id=\"/g, 'id="' + MPNotif.MARKUP_PREFIX + '-');
	};

	MPNotif.prototype._init_styles = function() {
	    if (this.style === 'dark') {
	        this.style_vals = {
	            bg:             '#1d1f25',
	            bg_actions:     '#282b32',
	            bg_hover:       '#3a4147',
	            bg_light:       '#4a5157',
	            border_gray:    '#32353c',
	            cancel_opacity: '0.4',
	            mini_hover:     '#2a3137',
	            text_title:     '#fff',
	            text_main:      '#9498a3',
	            text_tagline:   '#464851',
	            text_hover:     '#ddd'
	        };
	    } else {
	        this.style_vals = {
	            bg:             '#fff',
	            bg_actions:     '#e7eaee',
	            bg_hover:       '#eceff3',
	            bg_light:       '#f5f5f5',
	            border_gray:    '#e4ecf2',
	            cancel_opacity: '1.0',
	            mini_hover:     '#fafafa',
	            text_title:     '#5c6578',
	            text_main:      '#8b949b',
	            text_tagline:   '#ced9e6',
	            text_hover:     '#7c8598'
	        };
	    }
	    var shadow = '0px 0px 35px 0px rgba(45, 49, 56, 0.7)',
	        video_shadow = shadow,
	        mini_shadow = shadow,
	        thumb_total_size = MPNotif.THUMB_IMG_SIZE + MPNotif.THUMB_BORDER_SIZE * 2,
	        anim_seconds = (MPNotif.ANIM_TIME / 1000) + 's';
	    if (this.mini) {
	        shadow = 'none';
	    }

	    // don't display on small viewports
	    var notif_media_queries = {},
	        min_width = MPNotif.NOTIF_WIDTH_MINI + 20;
	    notif_media_queries['@media only screen and (max-width: ' + (min_width - 1) + 'px)'] = {
	        '#overlay': {
	            'display': 'none'
	        }
	    };
	    var notif_styles = {
	        '.flipped': {
	            'transform': 'rotateY(180deg)'
	        },
	        '#overlay': {
	            'position': 'fixed',
	            'top': '0',
	            'left': '0',
	            'width': '100%',
	            'height': '100%',
	            'overflow': 'auto',
	            'text-align': 'center',
	            'z-index': '10000',
	            'font-family': '"Helvetica", "Arial", sans-serif',
	            '-webkit-font-smoothing': 'antialiased',
	            '-moz-osx-font-smoothing': 'grayscale'
	        },
	        '#overlay.mini': {
	            'height': '0',
	            'overflow': 'visible'
	        },
	        '#overlay a': {
	            'width': 'initial',
	            'padding': '0',
	            'text-decoration': 'none',
	            'text-transform': 'none',
	            'color': 'inherit'
	        },
	        '#bgwrapper': {
	            'position': 'relative',
	            'width': '100%',
	            'height': '100%'
	        },
	        '#bg': {
	            'position': 'fixed',
	            'top': '0',
	            'left': '0',
	            'width': '100%',
	            'height': '100%',
	            'min-width': this.doc_width * 4 + 'px',
	            'min-height': this.doc_height * 4 + 'px',
	            'background-color': 'black',
	            'opacity': '0.0',
	            '-ms-filter': 'progid:DXImageTransform.Microsoft.Alpha(Opacity=60)', // IE8
	            'filter': 'alpha(opacity=60)', // IE5-7
	            'transition': 'opacity ' + anim_seconds
	        },
	        '#bg.visible': {
	            'opacity': MPNotif.BG_OPACITY
	        },
	        '.mini #bg': {
	            'width': '0',
	            'height': '0',
	            'min-width': '0'
	        },
	        '#flipcontainer': {
	            'perspective': '1000px',
	            'position': 'absolute',
	            'width': '100%'
	        },
	        '#flipper': {
	            'position': 'relative',
	            'transform-style': 'preserve-3d',
	            'transition': '0.3s'
	        },
	        '#takeover': {
	            'position': 'absolute',
	            'left': '50%',
	            'width': MPNotif.NOTIF_WIDTH + 'px',
	            'margin-left': Math.round(-MPNotif.NOTIF_WIDTH / 2) + 'px',
	            'backface-visibility': 'hidden',
	            'transform': 'rotateY(0deg)',
	            'opacity': '0.0',
	            'top': MPNotif.NOTIF_START_TOP + 'px',
	            'transition': 'opacity ' + anim_seconds + ', top ' + anim_seconds
	        },
	        '#takeover.visible': {
	            'opacity': '1.0',
	            'top': MPNotif.NOTIF_TOP + 'px'
	        },
	        '#takeover.exiting': {
	            'opacity': '0.0',
	            'top': MPNotif.NOTIF_START_TOP + 'px'
	        },
	        '#thumbspacer': {
	            'height': MPNotif.THUMB_OFFSET + 'px'
	        },
	        '#thumbborder-wrapper': {
	            'position': 'absolute',
	            'top': (-MPNotif.THUMB_BORDER_SIZE) + 'px',
	            'left': (MPNotif.NOTIF_WIDTH / 2 - MPNotif.THUMB_OFFSET - MPNotif.THUMB_BORDER_SIZE) + 'px',
	            'width': thumb_total_size + 'px',
	            'height': (thumb_total_size / 2) + 'px',
	            'overflow': 'hidden'
	        },
	        '#thumbborder': {
	            'position': 'absolute',
	            'width': thumb_total_size + 'px',
	            'height': thumb_total_size + 'px',
	            'border-radius': thumb_total_size + 'px',
	            'background-color': this.style_vals.bg_actions,
	            'opacity': '0.5'
	        },
	        '#thumbnail': {
	            'position': 'absolute',
	            'top': '0px',
	            'left': (MPNotif.NOTIF_WIDTH / 2 - MPNotif.THUMB_OFFSET) + 'px',
	            'width': MPNotif.THUMB_IMG_SIZE + 'px',
	            'height': MPNotif.THUMB_IMG_SIZE + 'px',
	            'overflow': 'hidden',
	            'z-index': '100',
	            'border-radius': MPNotif.THUMB_IMG_SIZE + 'px'
	        },
	        '#mini': {
	            'position': 'absolute',
	            'right': '20px',
	            'top': MPNotif.NOTIF_TOP + 'px',
	            'width': this.notif_width + 'px',
	            'height': MPNotif.NOTIF_HEIGHT_MINI * 2 + 'px',
	            'margin-top': 20 - MPNotif.NOTIF_HEIGHT_MINI + 'px',
	            'backface-visibility': 'hidden',
	            'opacity': '0.0',
	            'transform': 'rotateX(90deg)',
	            'transition': 'opacity 0.3s, transform 0.3s, right 0.3s'
	        },
	        '#mini.visible': {
	            'opacity': '1.0',
	            'transform': 'rotateX(0deg)'
	        },
	        '#mini.exiting': {
	            'opacity': '0.0',
	            'right': '-150px'
	        },
	        '#mainbox': {
	            'border-radius': '4px',
	            'box-shadow': shadow,
	            'text-align': 'center',
	            'background-color': this.style_vals.bg,
	            'font-size': '14px',
	            'color': this.style_vals.text_main
	        },
	        '#mini #mainbox': {
	            'height': MPNotif.NOTIF_HEIGHT_MINI + 'px',
	            'margin-top': MPNotif.NOTIF_HEIGHT_MINI + 'px',
	            'border-radius': '3px',
	            'transition': 'background-color ' + anim_seconds
	        },
	        '#mini-border': {
	            'height': (MPNotif.NOTIF_HEIGHT_MINI + 6) + 'px',
	            'width': (MPNotif.NOTIF_WIDTH_MINI + 6) + 'px',
	            'position': 'absolute',
	            'top': '-3px',
	            'left': '-3px',
	            'margin-top': MPNotif.NOTIF_HEIGHT_MINI + 'px',
	            'border-radius': '6px',
	            'opacity': '0.25',
	            'background-color': '#fff',
	            'z-index': '-1',
	            'box-shadow': mini_shadow
	        },
	        '#mini-icon': {
	            'position': 'relative',
	            'display': 'inline-block',
	            'width': '75px',
	            'height': MPNotif.NOTIF_HEIGHT_MINI + 'px',
	            'border-radius': '3px 0 0 3px',
	            'background-color': this.style_vals.bg_actions,
	            'background': 'linear-gradient(135deg, ' + this.style_vals.bg_light + ' 0%, ' + this.style_vals.bg_actions + ' 100%)',
	            'transition': 'background-color ' + anim_seconds
	        },
	        '#mini:hover #mini-icon': {
	            'background-color': this.style_vals.mini_hover
	        },
	        '#mini:hover #mainbox': {
	            'background-color': this.style_vals.mini_hover
	        },
	        '#mini-icon-img': {
	            'position': 'absolute',
	            'background-image': 'url(' + this.thumb_image_url + ')',
	            'width': '48px',
	            'height': '48px',
	            'top': '20px',
	            'left': '12px'
	        },
	        '#content': {
	            'padding': '30px 20px 0px 20px'
	        },
	        '#mini-content': {
	            'text-align': 'left',
	            'height': MPNotif.NOTIF_HEIGHT_MINI + 'px',
	            'cursor': 'pointer'
	        },
	        '#img': {
	            'width': '328px',
	            'margin-top': '30px',
	            'border-radius': '5px'
	        },
	        '#title': {
	            'max-height': '600px',
	            'overflow': 'hidden',
	            'word-wrap': 'break-word',
	            'padding': '25px 0px 20px 0px',
	            'font-size': '19px',
	            'font-weight': 'bold',
	            'color': this.style_vals.text_title
	        },
	        '#body': {
	            'max-height': '600px',
	            'margin-bottom': '25px',
	            'overflow': 'hidden',
	            'word-wrap': 'break-word',
	            'line-height': '21px',
	            'font-size': '15px',
	            'font-weight': 'normal',
	            'text-align': 'left'
	        },
	        '#mini #body': {
	            'display': 'inline-block',
	            'max-width': '250px',
	            'margin': '0 0 0 30px',
	            'height': MPNotif.NOTIF_HEIGHT_MINI + 'px',
	            'font-size': '16px',
	            'letter-spacing': '0.8px',
	            'color': this.style_vals.text_title
	        },
	        '#mini #body-text': {
	            'display': 'table',
	            'height': MPNotif.NOTIF_HEIGHT_MINI + 'px'
	        },
	        '#mini #body-text div': {
	            'display': 'table-cell',
	            'vertical-align': 'middle'
	        },
	        '#tagline': {
	            'margin-bottom': '15px',
	            'font-size': '10px',
	            'font-weight': '600',
	            'letter-spacing': '0.8px',
	            'color': '#ccd7e0',
	            'text-align': 'left'
	        },
	        '#tagline a': {
	            'color': this.style_vals.text_tagline,
	            'transition': 'color ' + anim_seconds
	        },
	        '#tagline a:hover': {
	            'color': this.style_vals.text_hover
	        },
	        '#cancel': {
	            'position': 'absolute',
	            'right': '0',
	            'width': '8px',
	            'height': '8px',
	            'padding': '10px',
	            'border-radius': '20px',
	            'margin': '12px 12px 0 0',
	            'box-sizing': 'content-box',
	            'cursor': 'pointer',
	            'transition': 'background-color ' + anim_seconds
	        },
	        '#mini #cancel': {
	            'margin': '7px 7px 0 0'
	        },
	        '#cancel-icon': {
	            'width': '8px',
	            'height': '8px',
	            'overflow': 'hidden',
	            'background-image': 'url(//cdn.mxpnl.com/site_media/images/icons/notifications/cancel-x.png)',
	            'opacity': this.style_vals.cancel_opacity
	        },
	        '#cancel:hover': {
	            'background-color': this.style_vals.bg_hover
	        },
	        '#button': {
	            'display': 'block',
	            'height': '60px',
	            'line-height': '60px',
	            'text-align': 'center',
	            'background-color': this.style_vals.bg_actions,
	            'border-radius': '0 0 4px 4px',
	            'overflow': 'hidden',
	            'cursor': 'pointer',
	            'transition': 'background-color ' + anim_seconds
	        },
	        '#button-close': {
	            'display': 'inline-block',
	            'width': '9px',
	            'height': '60px',
	            'margin-right': '8px',
	            'vertical-align': 'top',
	            'background-image': 'url(//cdn.mxpnl.com/site_media/images/icons/notifications/close-x-' + this.style + '.png)',
	            'background-repeat': 'no-repeat',
	            'background-position': '0px 25px'
	        },
	        '#button-play': {
	            'display': 'inline-block',
	            'width': '30px',
	            'height': '60px',
	            'margin-left': '15px',
	            'background-image': 'url(//cdn.mxpnl.com/site_media/images/icons/notifications/play-' + this.style + '-small.png)',
	            'background-repeat': 'no-repeat',
	            'background-position': '0px 15px'
	        },
	        'a#button-link': {
	            'display': 'inline-block',
	            'vertical-align': 'top',
	            'text-align': 'center',
	            'font-size': '17px',
	            'font-weight': 'bold',
	            'overflow': 'hidden',
	            'word-wrap': 'break-word',
	            'color': this.style_vals.text_title,
	            'transition': 'color ' + anim_seconds
	        },
	        '#button:hover': {
	            'background-color': this.style_vals.bg_hover,
	            'color': this.style_vals.text_hover
	        },
	        '#button:hover a': {
	            'color': this.style_vals.text_hover
	        },

	        '#video-noflip': {
	            'position': 'relative',
	            'top': (-this.video_height * 2) + 'px'
	        },
	        '#video-flip': {
	            'backface-visibility': 'hidden',
	            'transform': 'rotateY(180deg)'
	        },
	        '#video': {
	            'position': 'absolute',
	            'width': (this.video_width - 1) + 'px',
	            'height': this.video_height + 'px',
	            'top': MPNotif.NOTIF_TOP + 'px',
	            'margin-top': '100px',
	            'left': '50%',
	            'margin-left': Math.round(-this.video_width / 2) + 'px',
	            'overflow': 'hidden',
	            'border-radius': '5px',
	            'box-shadow': video_shadow,
	            'transform': 'translateZ(1px)', // webkit rendering bug http://stackoverflow.com/questions/18167981/clickable-link-area-unexpectedly-smaller-after-css-transform
	            'transition': 'opacity ' + anim_seconds + ', top ' + anim_seconds
	        },
	        '#video.exiting': {
	            'opacity': '0.0',
	            'top': this.video_height + 'px'
	        },
	        '#video-holder': {
	            'position': 'absolute',
	            'width': (this.video_width - 1) + 'px',
	            'height': this.video_height + 'px',
	            'overflow': 'hidden',
	            'border-radius': '5px'
	        },
	        '#video-frame': {
	            'margin-left': '-1px',
	            'width': this.video_width + 'px'
	        },
	        '#video-controls': {
	            'opacity': '0',
	            'transition': 'opacity 0.5s'
	        },
	        '#video:hover #video-controls': {
	            'opacity': '1.0'
	        },
	        '#video .video-progress-el': {
	            'position': 'absolute',
	            'bottom': '0',
	            'height': '25px',
	            'border-radius': '0 0 0 5px'
	        },
	        '#video-progress': {
	            'width': '90%'
	        },
	        '#video-progress-total': {
	            'width': '100%',
	            'background-color': this.style_vals.bg,
	            'opacity': '0.7'
	        },
	        '#video-elapsed': {
	            'width': '0',
	            'background-color': '#6cb6f5',
	            'opacity': '0.9'
	        },
	        '#video #video-time': {
	            'width': '10%',
	            'right': '0',
	            'font-size': '11px',
	            'line-height': '25px',
	            'color': this.style_vals.text_main,
	            'background-color': '#666',
	            'border-radius': '0 0 5px 0'
	        }
	    };

	    // IE hacks
	    if (this._browser_lte('ie', 8)) {
	        _.extend(notif_styles, {
	            '* html #overlay': {
	                'position': 'absolute'
	            },
	            '* html #bg': {
	                'position': 'absolute'
	            },
	            'html, body': {
	                'height': '100%'
	            }
	        });
	    }
	    if (this._browser_lte('ie', 7)) {
	        _.extend(notif_styles, {
	            '#mini #body': {
	                'display': 'inline',
	                'zoom': '1',
	                'border': '1px solid ' + this.style_vals.bg_hover
	            },
	            '#mini #body-text': {
	                'padding': '20px'
	            },
	            '#mini #mini-icon': {
	                'display': 'none'
	            }
	        });
	    }

	    // add vendor-prefixed style rules
	    var VENDOR_STYLES   = ['backface-visibility', 'border-radius', 'box-shadow', 'opacity',
	                               'perspective', 'transform', 'transform-style', 'transition'],
	        VENDOR_PREFIXES = ['khtml', 'moz', 'ms', 'o', 'webkit'];
	    for (var selector in notif_styles) {
	        for (var si = 0; si < VENDOR_STYLES.length; si++) {
	            var prop = VENDOR_STYLES[si];
	            if (prop in notif_styles[selector]) {
	                var val = notif_styles[selector][prop];
	                for (var pi = 0; pi < VENDOR_PREFIXES.length; pi++) {
	                    notif_styles[selector]['-' + VENDOR_PREFIXES[pi] + '-' + prop] = val;
	                }
	            }
	        }
	    }

	    var inject_styles = function(styles, media_queries) {
	        var create_style_text = function(style_defs) {
	            var st = '';
	            for (var selector in style_defs) {
	                var mp_selector = selector
	                        .replace(/#/g, '#' + MPNotif.MARKUP_PREFIX + '-')
	                        .replace(/\./g, '.' + MPNotif.MARKUP_PREFIX + '-');
	                st += '\n' + mp_selector + ' {';
	                var props = style_defs[selector];
	                for (var k in props) {
	                    st += k + ':' + props[k] + ';';
	                }
	                st += '}';
	            }
	            return st;
	        };
	        var create_media_query_text = function(mq_defs) {
	            var mqt = '';
	            for (var mq in mq_defs) {
	                mqt += '\n' + mq + ' {' + create_style_text(mq_defs[mq]) + '\n}';
	            }
	            return mqt;
	        };

	        var style_text = create_style_text(styles) + create_media_query_text(media_queries),
	            head_el = document.head || document.getElementsByTagName('head')[0] || document.documentElement,
	            style_el = document.createElement('style');
	        head_el.appendChild(style_el);
	        style_el.setAttribute('type', 'text/css');
	        if (style_el.styleSheet) { // IE
	            style_el.styleSheet.cssText = style_text;
	        } else {
	            style_el.textContent = style_text;
	        }
	    };
	    inject_styles(notif_styles, notif_media_queries);
	};

	MPNotif.prototype._init_video = _.safewrap(function() {
	    if (!this.video_url) {
	        return;
	    }
	    var self = this;

	    // Youtube iframe API compatibility
	    self.yt_custom = 'postMessage' in window;

	    self.dest_url = self.video_url;
	    var youtube_match = self.video_url.match(
	                // http://stackoverflow.com/questions/2936467/parse-youtube-video-id-using-preg-match
	                /(?:youtube(?:-nocookie)?\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i
	            ),
	        vimeo_match = self.video_url.match(
	                /vimeo\.com\/.*?(\d+)/i
	            );
	    if (youtube_match) {
	        self.show_video = true;
	        self.youtube_video = youtube_match[1];

	        if (self.yt_custom) {
	            window['onYouTubeIframeAPIReady'] = function() {
	                if (self._get_el('video-frame')) {
	                    self._yt_video_ready();
	                }
	            };

	            // load Youtube iframe API; see https://developers.google.com/youtube/iframe_api_reference
	            var tag = document.createElement('script');
	            tag.src = '//www.youtube.com/iframe_api';
	            var firstScriptTag = document.getElementsByTagName('script')[0];
	            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	        }
	    } else if (vimeo_match) {
	        self.show_video = true;
	        self.vimeo_video = vimeo_match[1];
	    }

	    // IE <= 7, FF <= 3: fall through to video link rather than embedded player
	    if (self._browser_lte('ie', 7) || self._browser_lte('firefox', 3)) {
	        self.show_video = false;
	        self.clickthrough = true;
	    }
	});

	MPNotif.prototype._mark_as_shown = _.safewrap(function() {
	    // click on background to dismiss
	    var self = this;
	    _.register_event(self._get_el('bg'), 'click', function() {
	        self.dismiss();
	    });

	    var get_style = function(el, style_name) {
	        var styles = {};
	        if (document.defaultView && document.defaultView.getComputedStyle) {
	            styles = document.defaultView.getComputedStyle(el, null); // FF3 requires both args
	        } else if (el.currentStyle) { // IE
	            styles = el.currentStyle;
	        }
	        return styles[style_name];
	    };

	    if (this.campaign_id) {
	        var notif_el = this._get_el('overlay');
	        if (notif_el && get_style(notif_el, 'visibility') !== 'hidden' && get_style(notif_el, 'display') !== 'none') {
	            this._mark_delivery();
	        }
	    }
	});

	MPNotif.prototype._mark_delivery = _.safewrap(function(extra_props) {
	    if (!this.marked_as_shown) {
	        this.marked_as_shown = true;

	        if (this.campaign_id) {
	            // mark notification shown (local cache)
	            this._get_shown_campaigns()[this.campaign_id] = 1 * new Date();
	            this.persistence.save();
	        }

	        // track delivery
	        this._track_event('$campaign_delivery', extra_props);

	        // mark notification shown (mixpanel property)
	        this.mixpanel['people']['append']({
	            '$campaigns': this.campaign_id,
	            '$notifications': {
	                'campaign_id': this.campaign_id,
	                'message_id':  this.message_id,
	                'type':        'web',
	                'time':        new Date()
	            }
	        });
	    }
	});

	MPNotif.prototype._preload_images = function(all_loaded_cb) {
	    var self = this;
	    if (this.imgs_to_preload.length === 0) {
	        all_loaded_cb();
	        return;
	    }

	    var preloaded_imgs = 0;
	    var img_objs = [];
	    var onload = function() {
	        preloaded_imgs++;
	        if (preloaded_imgs === self.imgs_to_preload.length && all_loaded_cb) {
	            all_loaded_cb();
	            all_loaded_cb = null;
	        }
	    };
	    for (var i = 0; i < this.imgs_to_preload.length; i++) {
	        var img = new Image();
	        img.onload = onload;
	        img.src = this.imgs_to_preload[i];
	        if (img.complete) {
	            onload();
	        }
	        img_objs.push(img);
	    }

	    // IE6/7 doesn't fire onload reliably
	    if (this._browser_lte('ie', 7)) {
	        setTimeout(function() {
	            var imgs_loaded = true;
	            for (i = 0; i < img_objs.length; i++) {
	                if (!img_objs[i].complete) {
	                    imgs_loaded = false;
	                }
	            }
	            if (imgs_loaded && all_loaded_cb) {
	                all_loaded_cb();
	                all_loaded_cb = null;
	            }
	        }, 500);
	    }
	};

	MPNotif.prototype._remove_notification_el = _.safewrap(function() {
	    window.clearInterval(this._video_progress_checker);
	    this.notification_el.style.visibility = 'hidden';
	    this.body_el.removeChild(this.notification_el);
	});

	MPNotif.prototype._set_client_config = function() {
	    var get_browser_version = function(browser_ex) {
	        var match = navigator.userAgent.match(browser_ex);
	        return match && match[1];
	    };
	    this.browser_versions = {};
	    this.browser_versions['chrome']  = get_browser_version(/Chrome\/(\d+)/);
	    this.browser_versions['firefox'] = get_browser_version(/Firefox\/(\d+)/);
	    this.browser_versions['ie']      = get_browser_version(/MSIE (\d+).+/);
	    if (!this.browser_versions['ie'] && !(window.ActiveXObject) && 'ActiveXObject' in window) {
	        this.browser_versions['ie'] = 11;
	    }

	    this.body_el = document.body || document.getElementsByTagName('body')[0];
	    if (this.body_el) {
	        this.doc_width = Math.max(
	                this.body_el.scrollWidth, document.documentElement.scrollWidth,
	                this.body_el.offsetWidth, document.documentElement.offsetWidth,
	                this.body_el.clientWidth, document.documentElement.clientWidth
	            );
	        this.doc_height = Math.max(
	                this.body_el.scrollHeight, document.documentElement.scrollHeight,
	                this.body_el.offsetHeight, document.documentElement.offsetHeight,
	                this.body_el.clientHeight, document.documentElement.clientHeight
	            );
	    }

	    // detect CSS compatibility
	    var ie_ver = this.browser_versions['ie'];
	    var sample_styles = document.createElement('div').style,
	        is_css_compatible = function(rule) {
	            if (rule in sample_styles) {
	                return true;
	            }
	            if (!ie_ver) {
	                rule = rule[0].toUpperCase() + rule.slice(1);
	                var props = ['O' + rule, 'Webkit' + rule, 'Moz' + rule];
	                for (var i = 0; i < props.length; i++) {
	                    if (props[i] in sample_styles) {
	                        return true;
	                    }
	                }
	            }
	            return false;
	        };
	    this.use_transitions = this.body_el &&
	        is_css_compatible('transition') &&
	        is_css_compatible('transform');
	    this.flip_animate = (this.browser_versions['chrome'] >= 33 || this.browser_versions['firefox'] >= 15) &&
	        this.body_el &&
	        is_css_compatible('backfaceVisibility') &&
	        is_css_compatible('perspective') &&
	        is_css_compatible('transform');
	};

	MPNotif.prototype._switch_to_video = _.safewrap(function() {
	    var self = this,
	        anims = [
	            {
	                el:    self._get_notification_display_el(),
	                attr:  'opacity',
	                start: 1.0,
	                goal:  0.0
	            },
	            {
	                el:    self._get_notification_display_el(),
	                attr:  'top',
	                start: MPNotif.NOTIF_TOP,
	                goal:  -500
	            },
	            {
	                el:    self._get_el('video-noflip'),
	                attr:  'opacity',
	                start: 0.0,
	                goal:  1.0
	            },
	            {
	                el:    self._get_el('video-noflip'),
	                attr:  'top',
	                start: -self.video_height * 2,
	                goal:  0
	            }
	        ];

	    if (self.mini) {
	        var bg = self._get_el('bg'),
	            overlay = self._get_el('overlay');
	        bg.style.width = '100%';
	        bg.style.height = '100%';
	        overlay.style.width = '100%';

	        self._add_class(self._get_notification_display_el(), 'exiting');
	        self._add_class(bg, 'visible');

	        anims.push({
	            el:    self._get_el('bg'),
	            attr:  'opacity',
	            start: 0.0,
	            goal:  MPNotif.BG_OPACITY
	        });
	    }

	    var video_el = self._get_el('video-holder');
	    video_el.innerHTML = self.video_iframe;

	    var video_ready = function() {
	        if (window['YT'] && window['YT']['loaded']) {
	            self._yt_video_ready();
	        }
	        self.showing_video = true;
	        self._get_notification_display_el().style.visibility = 'hidden';
	    };
	    if (self.flip_animate) {
	        self._add_class('flipper', 'flipped');
	        setTimeout(video_ready, MPNotif.ANIM_TIME);
	    } else {
	        self._animate_els(anims, MPNotif.ANIM_TIME, video_ready);
	    }
	});

	MPNotif.prototype._track_event = function(event_name, properties, cb) {
	    if (this.campaign_id) {
	        properties = properties || {};
	        properties = _.extend(properties, {
	            'campaign_id':     this.campaign_id,
	            'message_id':      this.message_id,
	            'message_type':    'web_inapp',
	            'message_subtype': this.notif_type
	        });
	        this.mixpanel['track'](event_name, properties, cb);
	    } else if (cb) {
	        cb.call();
	    }
	};

	MPNotif.prototype._yt_video_ready = _.safewrap(function() {
	    var self = this;
	    if (self.video_inited) {
	        return;
	    }
	    self.video_inited = true;

	    var progress_bar  = self._get_el('video-elapsed'),
	        progress_time = self._get_el('video-time'),
	        progress_el   = self._get_el('video-progress');

	    new window['YT']['Player'](MPNotif.MARKUP_PREFIX + '-video-frame', {
	        'events': {
	            'onReady': function(event) {
	                var ytplayer = event['target'],
	                    video_duration = ytplayer['getDuration'](),
	                    pad = function(i) {
	                        return ('00' + i).slice(-2);
	                    },
	                    update_video_time = function(current_time) {
	                        var secs = Math.round(video_duration - current_time),
	                            mins = Math.floor(secs / 60),
	                            hours = Math.floor(mins / 60);
	                        secs -= mins * 60;
	                        mins -= hours * 60;
	                        progress_time.innerHTML = '-' + (hours ? hours + ':' : '') + pad(mins) + ':' + pad(secs);
	                    };
	                update_video_time(0);
	                self._video_progress_checker = window.setInterval(function() {
	                    var current_time = ytplayer['getCurrentTime']();
	                    progress_bar.style.width = (current_time / video_duration * 100) + '%';
	                    update_video_time(current_time);
	                }, 250);
	                _.register_event(progress_el, 'click', function(e) {
	                    var clickx = Math.max(0, e.pageX - progress_el.getBoundingClientRect().left);
	                    ytplayer['seekTo'](video_duration * clickx / progress_el.clientWidth, true);
	                });
	            }
	        }
	    });
	});

	// EXPORTS (for closure compiler)

	// MixpanelLib Exports
	MixpanelLib.prototype['init']                            = MixpanelLib.prototype.init;
	MixpanelLib.prototype['reset']                           = MixpanelLib.prototype.reset;
	MixpanelLib.prototype['disable']                         = MixpanelLib.prototype.disable;
	MixpanelLib.prototype['time_event']                      = MixpanelLib.prototype.time_event;
	MixpanelLib.prototype['track']                           = MixpanelLib.prototype.track;
	MixpanelLib.prototype['track_links']                     = MixpanelLib.prototype.track_links;
	MixpanelLib.prototype['track_forms']                     = MixpanelLib.prototype.track_forms;
	MixpanelLib.prototype['track_pageview']                  = MixpanelLib.prototype.track_pageview;
	MixpanelLib.prototype['register']                        = MixpanelLib.prototype.register;
	MixpanelLib.prototype['register_once']                   = MixpanelLib.prototype.register_once;
	MixpanelLib.prototype['unregister']                      = MixpanelLib.prototype.unregister;
	MixpanelLib.prototype['identify']                        = MixpanelLib.prototype.identify;
	MixpanelLib.prototype['alias']                           = MixpanelLib.prototype.alias;
	MixpanelLib.prototype['name_tag']                        = MixpanelLib.prototype.name_tag;
	MixpanelLib.prototype['set_config']                      = MixpanelLib.prototype.set_config;
	MixpanelLib.prototype['get_config']                      = MixpanelLib.prototype.get_config;
	MixpanelLib.prototype['get_property']                    = MixpanelLib.prototype.get_property;
	MixpanelLib.prototype['get_distinct_id']                 = MixpanelLib.prototype.get_distinct_id;
	MixpanelLib.prototype['toString']                        = MixpanelLib.prototype.toString;
	MixpanelLib.prototype['_check_and_handle_notifications'] = MixpanelLib.prototype._check_and_handle_notifications;
	MixpanelLib.prototype['_show_notification']              = MixpanelLib.prototype._show_notification;

	// MixpanelPersistence Exports
	MixpanelPersistence.prototype['properties']            = MixpanelPersistence.prototype.properties;
	MixpanelPersistence.prototype['update_search_keyword'] = MixpanelPersistence.prototype.update_search_keyword;
	MixpanelPersistence.prototype['update_referrer_info']  = MixpanelPersistence.prototype.update_referrer_info;
	MixpanelPersistence.prototype['get_cross_subdomain']   = MixpanelPersistence.prototype.get_cross_subdomain;
	MixpanelPersistence.prototype['clear']                 = MixpanelPersistence.prototype.clear;

	// MixpanelPeople Exports
	MixpanelPeople.prototype['set']           = MixpanelPeople.prototype.set;
	MixpanelPeople.prototype['set_once']      = MixpanelPeople.prototype.set_once;
	MixpanelPeople.prototype['increment']     = MixpanelPeople.prototype.increment;
	MixpanelPeople.prototype['append']        = MixpanelPeople.prototype.append;
	MixpanelPeople.prototype['union']         = MixpanelPeople.prototype.union;
	MixpanelPeople.prototype['track_charge']  = MixpanelPeople.prototype.track_charge;
	MixpanelPeople.prototype['clear_charges'] = MixpanelPeople.prototype.clear_charges;
	MixpanelPeople.prototype['delete_user']   = MixpanelPeople.prototype.delete_user;
	MixpanelPeople.prototype['toString']      = MixpanelPeople.prototype.toString;

	_.safewrap_class(MixpanelLib, ['identify', '_check_and_handle_notifications', '_show_notification']);

	var instances = {};
	var extend_mp = function() {
	    // add all the sub mixpanel instances
	    _.each(instances, function(instance, name) {
	        if (name !== PRIMARY_INSTANCE_NAME) { mixpanel_master[name] = instance; }
	    });

	    // add private functions as _
	    mixpanel_master['_'] = _;
	};

	var override_mp_init_func = function() {
	    // we override the snippets init function to handle the case where a
	    // user initializes the mixpanel library after the script loads & runs
	    mixpanel_master['init'] = function(token, config, name) {
	        if (name) {
	            // initialize a sub library
	            if (!mixpanel_master[name]) {
	                mixpanel_master[name] = instances[name] = create_mplib(token, config, name);
	                mixpanel_master[name]._loaded();
	            }
	            return mixpanel_master[name];
	        } else {
	            var instance = mixpanel_master;

	            if (instances[PRIMARY_INSTANCE_NAME]) {
	                // main mixpanel lib already initialized
	                instance = instances[PRIMARY_INSTANCE_NAME];
	            } else if (token) {
	                // intialize the main mixpanel lib
	                instance = create_mplib(token, config, PRIMARY_INSTANCE_NAME);
	                instance._loaded();
	                instances[PRIMARY_INSTANCE_NAME] = instance;
	            }

	            mixpanel_master = instance;
	            if (init_type === INIT_SNIPPET) {
	                window[PRIMARY_INSTANCE_NAME] = mixpanel_master;
	            }
	            extend_mp();
	        }
	    };
	};

	var add_dom_loaded_handler = function() {
	    // Cross browser DOM Loaded support
	    function dom_loaded_handler() {
	        // function flag since we only want to execute this once
	        if (dom_loaded_handler.done) { return; }
	        dom_loaded_handler.done = true;

	        DOM_LOADED = true;
	        ENQUEUE_REQUESTS = false;

	        _.each(instances, function(inst) {
	            inst._dom_loaded();
	        });
	    }

	    function do_scroll_check() {
	        try {
	            document.documentElement.doScroll('left');
	        } catch(e) {
	            setTimeout(do_scroll_check, 1);
	            return;
	        }

	        dom_loaded_handler();
	    }

	    if (document.addEventListener) {
	        if (document.readyState === 'complete') {
	            // safari 4 can fire the DOMContentLoaded event before loading all
	            // external JS (including this file). you will see some copypasta
	            // on the internet that checks for 'complete' and 'loaded', but
	            // 'loaded' is an IE thing
	            dom_loaded_handler();
	        } else {
	            document.addEventListener('DOMContentLoaded', dom_loaded_handler, false);
	        }
	    } else if (document.attachEvent) {
	        // IE
	        document.attachEvent('onreadystatechange', dom_loaded_handler);

	        // check to make sure we arn't in a frame
	        var toplevel = false;
	        try {
	            toplevel = window.frameElement === null;
	        } catch(e) {
	            // noop
	        }

	        if (document.documentElement.doScroll && toplevel) {
	            do_scroll_check();
	        }
	    }

	    // fallback handler, always will work
	    _.register_event(window, 'load', dom_loaded_handler, true);
	};

	var add_dom_event_counting_handlers = function(instance) {
	    var name = instance.get_config('name');

	    instance.mp_counts = instance.mp_counts || {};
	    instance.mp_counts['$__c'] = parseInt(_.cookie.get('mp_' + name + '__c')) || 0;

	    var increment_count = function() {
	        instance.mp_counts['$__c'] = (instance.mp_counts['$__c'] || 0) + 1;
	        _.cookie.set('mp_' + name + '__c', instance.mp_counts['$__c'], 1, true);
	    };

	    var evtCallback = function() {
	        try {
	            instance.mp_counts = instance.mp_counts || {};
	            increment_count();
	        } catch (e) {
	            console$1.error(e);
	        }
	    };
	    _.register_event(document, 'submit', evtCallback);
	    _.register_event(document, 'change', evtCallback);
	    var mousedownTarget = null;
	    _.register_event(document, 'mousedown', function(e) {
	        mousedownTarget = e.target;
	    });
	    _.register_event(document, 'mouseup', function(e) {
	        if (e.target === mousedownTarget) {
	            evtCallback(e);
	        }
	    });
	};

	function init_as_module() {
	    init_type = INIT_MODULE;
	    mixpanel_master = new MixpanelLib();

	    override_mp_init_func();
	    mixpanel_master['init']();
	    add_dom_loaded_handler();

	    return mixpanel_master;
	}

	var mixpanel = init_as_module();

	module.exports = mixpanel;

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,r){if(true)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var t=r();for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){e.exports=t(1)},function(e,r,t){"use strict";function n(){var e="undefined"==typeof JSON?{}:JSON;o.setupJSON(e)}var o=t(2),i=t(3);n();var a=window._rollbarConfig,s=a&&a.globalAlias||"Rollbar",u=window[s]&&"undefined"!=typeof window[s].shimId;!u&&a?o.wrapper.init(a):(window.Rollbar=o.wrapper,window.RollbarNotifier=i.Notifier),e.exports=o.wrapper},function(e,r,t){"use strict";function n(e,r,t){!t[4]&&window._rollbarWrappedError&&(t[4]=window._rollbarWrappedError,window._rollbarWrappedError=null),e.uncaughtError.apply(e,t),r&&r.apply(window,t)}function o(e,r){if(r.hasOwnProperty&&r.hasOwnProperty("addEventListener")){var t=r.addEventListener;r.addEventListener=function(r,n,o){t.call(this,r,e.wrap(n),o)};var n=r.removeEventListener;r.removeEventListener=function(e,r,t){n.call(this,e,r&&r._wrapped||r,t)}}}var i=t(3),a=t(8),s=i.Notifier;window._rollbarWrappedError=null;var u={};u.init=function(e,r){var t=new s(r);if(t.configure(e),e.captureUncaught){var i;r&&a.isType(r._rollbarOldOnError,"function")?i=r._rollbarOldOnError:window.onerror&&!window.onerror.belongsToShim&&(i=window.onerror),window.onerror=function(){var e=Array.prototype.slice.call(arguments,0);n(t,i,e)};var u,c,l=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"];for(u=0;u<l.length;++u)c=l[u],window[c]&&window[c].prototype&&o(t,window[c].prototype)}return e.captureUnhandledRejections&&(r&&a.isType(r._unhandledRejectionHandler,"function")&&window.removeEventListener("unhandledrejection",r._unhandledRejectionHandler),t._unhandledRejectionHandler=function(e){var r=e.reason,n=e.promise,o=e.detail;!r&&o&&(r=o.reason,n=o.promise),t.unhandledRejection(r,n)},window.addEventListener("unhandledrejection",t._unhandledRejectionHandler)),window.Rollbar=t,s.processPayloads(),t},e.exports={wrapper:u,setupJSON:i.setupJSON}},function(e,r,t){"use strict";function n(e){E=e,w.setupJSON(e)}function o(e,r){return function(){var t=r||this;try{return e.apply(t,arguments)}catch(n){console.error("[Rollbar]:",n)}}}function i(){h||(h=setTimeout(f,1e3))}function a(){return _}function s(e){_=_||this;var r="https://"+s.DEFAULT_ENDPOINT;this.options={enabled:!0,endpoint:r,environment:"production",scrubFields:g([],s.DEFAULT_SCRUB_FIELDS),checkIgnore:null,logLevel:s.DEFAULT_LOG_LEVEL,reportLevel:s.DEFAULT_REPORT_LEVEL,uncaughtErrorLevel:s.DEFAULT_UNCAUGHT_ERROR_LEVEL,payload:{}},this.lastError=null,this.plugins={},this.parentNotifier=e,e&&(e.hasOwnProperty("shimId")?e.notifier=this:this.configure(e.options))}function u(e){window._rollbarPayloadQueue.push(e),i()}function c(e){return o(function(){var r=this._getLogArgs(arguments);return this._log(e||r.level||this.options.logLevel||s.DEFAULT_LOG_LEVEL,r.message,r.err,r.custom,r.callback)})}function l(e,r){e||(e=r?E.stringify(r):"");var t={body:e};return r&&(t.extra=g(!0,{},r)),{message:t}}function p(e,r,t){var n=m.guessErrorClass(r.message),o=r.name||n[0],i=n[1],a={exception:{"class":o,message:i}};if(e&&(a.exception.description=e||"uncaught exception"),r.stack){var s,u,c,p,f,d,h,w;for(a.frames=[],h=0;h<r.stack.length;++h)s=r.stack[h],u={filename:s.url?v.sanitizeUrl(s.url):"(unknown)",lineno:s.line||null,method:s.func&&"?"!==s.func?s.func:"[anonymous]",colno:s.column},c=p=f=null,d=s.context?s.context.length:0,d&&(w=Math.floor(d/2),p=s.context.slice(0,w),c=s.context[w],f=s.context.slice(w)),c&&(u.code=c),(p||f)&&(u.context={},p&&p.length&&(u.context.pre=p),f&&f.length&&(u.context.post=f)),s.args&&(u.args=s.args),a.frames.push(u);return a.frames.reverse(),t&&(a.extra=g(!0,{},t)),{trace:a}}return l(o+": "+i,t)}function f(){var e;try{for(;e=window._rollbarPayloadQueue.shift();)d(e)}finally{h=void 0}}function d(e){var r=e.endpointUrl,t=e.accessToken,n=e.payload,o=e.callback||function(){},i=(new Date).getTime();i-L>=6e4&&(L=i,R=0);var a=window._globalRollbarOptions.maxItems,c=window._globalRollbarOptions.itemsPerMinute,l=function(){return!n.ignoreRateLimit&&a>=1&&T>=a},p=function(){return!n.ignoreRateLimit&&c>=1&&R>=c};return l()?void o(new Error(a+" max items reached")):p()?void o(new Error(c+" items per minute reached")):(T++,R++,l()&&_._log(_.options.uncaughtErrorLevel,"maxItems has been hit. Ignoring errors for the remainder of the current page load.",null,{maxItems:a},null,!1,!0),n.ignoreRateLimit&&delete n.ignoreRateLimit,void y.post(r,t,n,function(r,t){return r?(r instanceof b&&(e.callback=function(){},setTimeout(function(){u(e)},s.RETRY_DELAY)),o(r)):o(null,t)}))}var h,g=t(4),m=t(5),v=t(8),w=t(10),y=w.XHR,b=w.ConnectionError,E=null;s.NOTIFIER_VERSION="1.9.2",s.DEFAULT_ENDPOINT="api.rollbar.com/api/1/",s.DEFAULT_SCRUB_FIELDS=["pw","pass","passwd","password","secret","confirm_password","confirmPassword","password_confirmation","passwordConfirmation","access_token","accessToken","secret_key","secretKey","secretToken"],s.DEFAULT_LOG_LEVEL="debug",s.DEFAULT_REPORT_LEVEL="debug",s.DEFAULT_UNCAUGHT_ERROR_LEVEL="error",s.DEFAULT_ITEMS_PER_MIN=60,s.DEFAULT_MAX_ITEMS=0,s.LEVELS={debug:0,info:1,warning:2,error:3,critical:4},s.RETRY_DELAY=1e4,window._rollbarPayloadQueue=window._rollbarPayloadQueue||[],window._globalRollbarOptions={startTime:(new Date).getTime(),maxItems:s.DEFAULT_MAX_ITEMS,itemsPerMinute:s.DEFAULT_ITEMS_PER_MIN};var _,x=s.prototype;x._getLogArgs=function(e){for(var r,t,n,i,a,u,c=this.options.logLevel||s.DEFAULT_LOG_LEVEL,l=[],p=0;p<e.length;++p)u=e[p],a=v.typeName(u),"string"===a?r?l.push(u):r=u:"function"===a?i=o(u,this):"date"===a?l.push(u):"error"===a||u instanceof Error||"undefined"!=typeof DOMException&&u instanceof DOMException?t?l.push(u):t=u:"object"!==a&&"array"!==a||(n?l.push(u):n=u);return l.length&&(n=n||{},n.extraArgs=l),{level:c,message:r,err:t,custom:n,callback:i}},x._route=function(e){var r=this.options.endpoint,t=/\/$/.test(r),n=/^\//.test(e);return t&&n?e=e.substring(1):t||n||(e="/"+e),r+e},x._processShimQueue=function(e){for(var r,t,n,o,i,a,u,c={};t=e.shift();)r=t.shim,n=t.method,o=t.args,i=r.parentShim,u=c[r.shimId],u||(i?(a=c[i.shimId],u=new s(a)):u=this,c[r.shimId]=u),u[n]&&v.isType(u[n],"function")&&u[n].apply(u,o)},x._buildPayload=function(e,r,t,n,o){var i=this.options.accessToken,a=this.options.environment,u=g(!0,{},this.options.payload),c=v.uuid4();if(void 0===s.LEVELS[r])throw new Error("Invalid level");if(!t&&!n&&!o)throw new Error("No message, stack info or custom data");var l={environment:a,endpoint:this.options.endpoint,uuid:c,level:r,platform:"browser",framework:"browser-js",language:"javascript",body:this._buildBody(t,n,o),request:{url:window.location.href,query_string:window.location.search,user_ip:"$remote_ip"},client:{runtime_ms:e.getTime()-window._globalRollbarOptions.startTime,timestamp:Math.round(e.getTime()/1e3),javascript:{browser:window.navigator.userAgent,language:window.navigator.language,cookie_enabled:window.navigator.cookieEnabled,screen:{width:window.screen.width,height:window.screen.height},plugins:this._getBrowserPlugins()}},server:{},notifier:{name:"rollbar-browser-js",version:s.NOTIFIER_VERSION}};u.body&&delete u.body;var p={access_token:i,data:g(!0,l,u)};return this._scrub(p.data),p},x._buildBody=function(e,r,t){var n;return n=r?p(e,r,t):l(e,t)},x._getBrowserPlugins=function(){if(!this._browserPlugins){var e,r,t=window.navigator.plugins||[],n=t.length,o=[];for(r=0;r<n;++r)e=t[r],o.push({name:e.name,description:e.description});this._browserPlugins=o}return this._browserPlugins},x._scrub=function(e){function r(e,r,t,n,o,i){return r+v.redact(i)}function t(e){var t;if(v.isType(e,"string"))for(t=0;t<s.length;++t)e=e.replace(s[t],r);return e}function n(e,r){var t;for(t=0;t<a.length;++t)if(a[t].test(e)){r=v.redact(r);break}return r}function o(e,r){var o=n(e,r);return o===r?t(o):o}var i=this.options.scrubFields,a=this._getScrubFieldRegexs(i),s=this._getScrubQueryParamRegexs(i);return v.traverse(e,o),e},x._getScrubFieldRegexs=function(e){for(var r,t=[],n=0;n<e.length;++n)r="\\[?(%5[bB])?"+e[n]+"\\[?(%5[bB])?\\]?(%5[dD])?",t.push(new RegExp(r,"i"));return t},x._getScrubQueryParamRegexs=function(e){for(var r,t=[],n=0;n<e.length;++n)r="\\[?(%5[bB])?"+e[n]+"\\[?(%5[bB])?\\]?(%5[dD])?",t.push(new RegExp("("+r+"=)([^&\\n]+)","igm"));return t},x._urlIsWhitelisted=function(e){var r,t,n,o,i,a,s,u,c,l;try{if(r=this.options.hostWhiteList,t=e&&e.data&&e.data.body&&e.data.body.trace,!r||0===r.length)return!0;if(!t)return!0;for(s=r.length,i=t.frames.length,c=0;c<i;c++){if(n=t.frames[c],o=n.filename,!v.isType(o,"string"))return!0;for(l=0;l<s;l++)if(a=r[l],u=new RegExp(a),u.test(o))return!0}}catch(p){return this.configure({hostWhiteList:null}),console.error("[Rollbar]: Error while reading your configuration's hostWhiteList option. Removing custom hostWhiteList.",p),!0}return!1},x._messageIsIgnored=function(e){var r,t,n,o,i,a,s,u,c;try{if(i=!1,n=this.options.ignoredMessages,!n||0===n.length)return!1;if(s=e&&e.data&&e.data.body,u=s&&s.trace&&s.trace.exception&&s.trace.exception.message,c=s&&s.message&&s.message.body,r=u||c,!r)return!1;for(o=n.length,t=0;t<o&&(a=new RegExp(n[t],"gi"),!(i=a.test(r)));t++);}catch(l){this.configure({ignoredMessages:null}),console.error("[Rollbar]: Error while reading your configuration's ignoredMessages option. Removing custom ignoredMessages.")}return i},x._enqueuePayload=function(e,r,t,n){var o={callback:n,accessToken:this.options.accessToken,endpointUrl:this._route("item/"),payload:e},i=function(){if(n){var e="This item was not sent to Rollbar because it was ignored. This can happen if a custom checkIgnore() function was used or if the item's level was less than the notifier' reportLevel. See https://rollbar.com/docs/notifier/rollbar.js/configuration for more details.";n(null,{err:0,result:{id:null,uuid:null,message:e}})}};if(this._internalCheckIgnore(r,t,e))return void i();try{if(v.isType(this.options.checkIgnore,"function")&&this.options.checkIgnore(r,t,e))return void i()}catch(a){this.configure({checkIgnore:null}),console.error("[Rollbar]: Error while calling custom checkIgnore() function. Removing custom checkIgnore().",a)}if(this._urlIsWhitelisted(e)&&!this._messageIsIgnored(e)){if(this.options.verbose){if(e.data&&e.data.body&&e.data.body.trace){var s=e.data.body.trace,c=s.exception.message;console.error("[Rollbar]: ",c)}console.info("[Rollbar]: ",o)}v.isType(this.options.logFunction,"function")&&this.options.logFunction(o);try{v.isType(this.options.transform,"function")&&this.options.transform(e)}catch(a){this.configure({transform:null}),console.error("[Rollbar]: Error while calling custom transform() function. Removing custom transform().",a)}this.options.enabled&&u(o)}},x._internalCheckIgnore=function(e,r,t){var n=r[0],o=s.LEVELS[n]||0,i=s.LEVELS[this.options.reportLevel]||0;if(o<i)return!0;var a=this.options?this.options.plugins:{};if(a&&a.jquery&&a.jquery.ignoreAjaxErrors)try{return!!t.data.body.message.extra.isAjax}catch(u){return!1}return!1},x._log=function(e,r,t,n,o,i,a){var s=null;if(t)try{if(s=t._savedStackTrace?t._savedStackTrace:m.parse(t),t===this.lastError)return;this.lastError=t}catch(u){console.error("[Rollbar]: Error while parsing the error object.",u),r=t.message||t.description||r||String(t),t=null}var c=this._buildPayload(new Date,e,r,s,n);a&&(c.ignoreRateLimit=!0),this._enqueuePayload(c,!!i,[e,r,t,n],o)},x.log=c(),x.debug=c("debug"),x.info=c("info"),x.warn=c("warning"),x.warning=c("warning"),x.error=c("error"),x.critical=c("critical"),x.uncaughtError=o(function(e,r,t,n,o,i){if(i=i||null,o&&v.isType(o,"error"))return void this._log(this.options.uncaughtErrorLevel,e,o,i,null,!0);if(r&&v.isType(r,"error"))return void this._log(this.options.uncaughtErrorLevel,e,r,i,null,!0);var a={url:r||"",line:t};a.func=m.guessFunctionName(a.url,a.line),a.context=m.gatherContext(a.url,a.line);var s={mode:"onerror",message:o?String(o):e||"uncaught exception",url:document.location.href,stack:[a],useragent:navigator.userAgent},u=this._buildPayload(new Date,this.options.uncaughtErrorLevel,e,s,i);this._enqueuePayload(u,!0,[this.options.uncaughtErrorLevel,e,r,t,n,o])}),x.unhandledRejection=o(function(e,r){if(null==e)return void _._log(_.options.uncaughtErrorLevel,"unhandled rejection was null or undefined!",null,{},null,!1,!1);var t=e.message||(e?String(e):"unhandled rejection"),n=e._rollbarContext||r._rollbarContext||null;if(e&&v.isType(e,"error"))return void this._log(this.options.uncaughtErrorLevel,t,e,n,null,!0);var o={url:"",line:0};o.func=m.guessFunctionName(o.url,o.line),o.context=m.gatherContext(o.url,o.line);var i={mode:"unhandledrejection",message:t,url:document.location.href,stack:[o],useragent:navigator.userAgent},a=this._buildPayload(new Date,this.options.uncaughtErrorLevel,t,i,n);this._enqueuePayload(a,!0,[this.options.uncaughtErrorLevel,t,o.url,o.line,0,e,r])}),x.global=o(function(e){e=e||{};var r={startTime:e.startTime,maxItems:e.maxItems,itemsPerMinute:e.itemsPerMinute};g(!0,window._globalRollbarOptions,r),void 0!==e.maxItems&&(T=0),void 0!==e.itemsPerMinute&&(R=0)}),x.configure=o(function(e,r){var t=g(!0,{},e);g(!r,this.options,t),this.global(t)}),x.scope=o(function(e){var r=new s(this);return g(!0,r.options.payload,e),r}),x.wrap=function(e,r){try{var t;if(t=v.isType(r,"function")?r:function(){return r||{}},!v.isType(e,"function"))return e;if(e._isWrap)return e;if(!e._wrapped){e._wrapped=function(){try{return e.apply(this,arguments)}catch(r){throw"string"==typeof r&&(r=new String(r)),r.stack||(r._savedStackTrace=m.parse(r)),r._rollbarContext=t()||{},r._rollbarContext._wrappedSource=e.toString(),window._rollbarWrappedError=r,r}},e._wrapped._isWrap=!0;for(var n in e)e.hasOwnProperty(n)&&(e._wrapped[n]=e[n])}return e._wrapped}catch(o){return e}},x.loadFull=function(){console.error("[Rollbar]: Unexpected Rollbar.loadFull() called on a Notifier instance")},s.processPayloads=function(e){return e?void f():void i()};var L=(new Date).getTime(),T=0,R=0;e.exports={Notifier:s,setupJSON:n,topLevelNotifier:a}},function(e,r){"use strict";var t=Object.prototype.hasOwnProperty,n=Object.prototype.toString,o=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===n.call(e)},i=function(e){if(!e||"[object Object]"!==n.call(e))return!1;var r=t.call(e,"constructor"),o=e.constructor&&e.constructor.prototype&&t.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!r&&!o)return!1;var i;for(i in e);return"undefined"==typeof i||t.call(e,i)};e.exports=function a(){var e,r,t,n,s,u,c=arguments[0],l=1,p=arguments.length,f=!1;for("boolean"==typeof c?(f=c,c=arguments[1]||{},l=2):("object"!=typeof c&&"function"!=typeof c||null==c)&&(c={});l<p;++l)if(e=arguments[l],null!=e)for(r in e)t=c[r],n=e[r],c!==n&&(f&&n&&(i(n)||(s=o(n)))?(s?(s=!1,u=t&&o(t)?t:[]):u=t&&i(t)?t:{},c[r]=a(f,u,n)):"undefined"!=typeof n&&(c[r]=n));return c}},function(e,r,t){"use strict";function n(){return l}function o(){return null}function i(e){var r={};return r._stackFrame=e,r.url=e.fileName,r.line=e.lineNumber,r.func=e.functionName,r.column=e.columnNumber,r.args=e.args,r.context=o(r.url,r.line),r}function a(e){function r(){var r=[];try{r=c.parse(e)}catch(t){r=[]}for(var n=[],o=0;o<r.length;o++)n.push(new i(r[o]));return n}return{stack:r(),message:e.message,name:e.name}}function s(e){return new a(e)}function u(e){if(!e)return["Unknown error. There was no error message to display.",""];var r=e.match(p),t="(unknown)";return r&&(t=r[r.length-1],e=e.replace((r[r.length-2]||"")+t+":",""),e=e.replace(/(^[\s]+|[\s]+$)/g,"")),[t,e]}var c=t(6),l="?",p=new RegExp("^(([a-zA-Z0-9-_$ ]*): *)?(Uncaught )?([a-zA-Z0-9-_$ ]*): ");e.exports={guessFunctionName:n,guessErrorClass:u,gatherContext:o,parse:s,Stack:a,Frame:i}},function(e,r,t){var n,o,i;!function(a,s){"use strict";o=[t(7)],n=s,i="function"==typeof n?n.apply(r,o):n,!(void 0!==i&&(e.exports=i))}(this,function(e){"use strict";function r(e,r,t){if("function"==typeof Array.prototype.map)return e.map(r,t);for(var n=new Array(e.length),o=0;o<e.length;o++)n[o]=r.call(t,e[o]);return n}function t(e,r,t){if("function"==typeof Array.prototype.filter)return e.filter(r,t);for(var n=[],o=0;o<e.length;o++)r.call(t,e[o])&&n.push(e[o]);return n}var n=/(^|@)\S+\:\d+/,o=/^\s*at .*(\S+\:\d+|\(native\))/m,i=/^(eval@)?(\[native code\])?$/;return{parse:function(e){if("undefined"!=typeof e.stacktrace||"undefined"!=typeof e["opera#sourceloc"])return this.parseOpera(e);if(e.stack&&e.stack.match(o))return this.parseV8OrIE(e);if(e.stack)return this.parseFFOrSafari(e);throw new Error("Cannot parse given Error object")},extractLocation:function(e){if(e.indexOf(":")===-1)return[e];var r=e.replace(/[\(\)\s]/g,"").split(":"),t=r.pop(),n=r[r.length-1];if(!isNaN(parseFloat(n))&&isFinite(n)){var o=r.pop();return[r.join(":"),o,t]}return[r.join(":"),t,void 0]},parseV8OrIE:function(n){var i=t(n.stack.split("\n"),function(e){return!!e.match(o)},this);return r(i,function(r){r.indexOf("(eval ")>-1&&(r=r.replace(/eval code/g,"eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g,""));var t=r.replace(/^\s+/,"").replace(/\(eval code/g,"(").split(/\s+/).slice(1),n=this.extractLocation(t.pop()),o=t.join(" ")||void 0,i="eval"===n[0]?void 0:n[0];return new e(o,(void 0),i,n[1],n[2],r)},this)},parseFFOrSafari:function(n){var o=t(n.stack.split("\n"),function(e){return!e.match(i)},this);return r(o,function(r){if(r.indexOf(" > eval")>-1&&(r=r.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g,":$1")),r.indexOf("@")===-1&&r.indexOf(":")===-1)return new e(r);var t=r.split("@"),n=this.extractLocation(t.pop()),o=t.shift()||void 0;return new e(o,(void 0),n[0],n[1],n[2],r)},this)},parseOpera:function(e){return!e.stacktrace||e.message.indexOf("\n")>-1&&e.message.split("\n").length>e.stacktrace.split("\n").length?this.parseOpera9(e):e.stack?this.parseOpera11(e):this.parseOpera10(e)},parseOpera9:function(r){for(var t=/Line (\d+).*script (?:in )?(\S+)/i,n=r.message.split("\n"),o=[],i=2,a=n.length;i<a;i+=2){var s=t.exec(n[i]);s&&o.push(new e((void 0),(void 0),s[2],s[1],(void 0),n[i]))}return o},parseOpera10:function(r){for(var t=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,n=r.stacktrace.split("\n"),o=[],i=0,a=n.length;i<a;i+=2){var s=t.exec(n[i]);s&&o.push(new e(s[3]||void 0,(void 0),s[2],s[1],(void 0),n[i]))}return o},parseOpera11:function(o){var i=t(o.stack.split("\n"),function(e){return!!e.match(n)&&!e.match(/^Error created at/)},this);return r(i,function(r){var t,n=r.split("@"),o=this.extractLocation(n.pop()),i=n.shift()||"",a=i.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^\)]*\)/g,"")||void 0;i.match(/\(([^\)]*)\)/)&&(t=i.replace(/^[^\(]+\(([^\)]*)\)$/,"$1"));var s=void 0===t||"[arguments not available]"===t?void 0:t.split(",");return new e(a,s,o[0],o[1],o[2],r)},this)}}})},function(e,r,t){var n,o,i;!function(t,a){"use strict";o=[],n=a,i="function"==typeof n?n.apply(r,o):n,!(void 0!==i&&(e.exports=i))}(this,function(){"use strict";function e(e){return!isNaN(parseFloat(e))&&isFinite(e)}function r(e,r,t,n,o,i){void 0!==e&&this.setFunctionName(e),void 0!==r&&this.setArgs(r),void 0!==t&&this.setFileName(t),void 0!==n&&this.setLineNumber(n),void 0!==o&&this.setColumnNumber(o),void 0!==i&&this.setSource(i)}return r.prototype={getFunctionName:function(){return this.functionName},setFunctionName:function(e){this.functionName=String(e)},getArgs:function(){return this.args},setArgs:function(e){if("[object Array]"!==Object.prototype.toString.call(e))throw new TypeError("Args must be an Array");this.args=e},getFileName:function(){return this.fileName},setFileName:function(e){this.fileName=String(e)},getLineNumber:function(){return this.lineNumber},setLineNumber:function(r){if(!e(r))throw new TypeError("Line Number must be a Number");this.lineNumber=Number(r)},getColumnNumber:function(){return this.columnNumber},setColumnNumber:function(r){if(!e(r))throw new TypeError("Column Number must be a Number");this.columnNumber=Number(r)},getSource:function(){return this.source},setSource:function(e){this.source=String(e)},toString:function(){var r=this.getFunctionName()||"{anonymous}",t="("+(this.getArgs()||[]).join(",")+")",n=this.getFileName()?"@"+this.getFileName():"",o=e(this.getLineNumber())?":"+this.getLineNumber():"",i=e(this.getColumnNumber())?":"+this.getColumnNumber():"";return r+t+n+o+i}},r})},function(e,r,t){"use strict";function n(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function o(e,r){return n(e)===r}function i(e){if(!o(e,"string"))throw new Error("received invalid input");for(var r=l,t=r.parser[r.strictMode?"strict":"loose"].exec(e),n={},i=14;i--;)n[r.key[i]]=t[i]||"";return n[r.q.name]={},n[r.key[12]].replace(r.q.parser,function(e,t,o){t&&(n[r.q.name][t]=o)}),n}function a(e){var r=i(e);return""===r.anchor&&(r.source=r.source.replace("#","")),e=r.source.replace("?"+r.query,"")}function s(e,r){var t,n,i,a=o(e,"object"),u=o(e,"array"),c=[];if(a)for(t in e)e.hasOwnProperty(t)&&c.push(t);else if(u)for(i=0;i<e.length;++i)c.push(i);for(i=0;i<c.length;++i)t=c[i],n=e[t],a=o(n,"object"),u=o(n,"array"),a||u?e[t]=s(n,r):e[t]=r(t,n);return e}function u(e){return e=String(e),new Array(e.length+1).join("*")}function c(){var e=(new Date).getTime(),r="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){var t=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===r?t:7&t|8).toString(16)});return r}t(9);var l={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},p={isType:o,parseUri:i,parseUriOptions:l,redact:u,sanitizeUrl:a,traverse:s,typeName:n,uuid4:c};e.exports=p},function(e,r){!function(e){"use strict";e.console=e.console||{};for(var r,t,n=e.console,o={},i=function(){},a="memory".split(","),s="assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(",");r=a.pop();)n[r]||(n[r]=o);for(;t=s.pop();)n[t]||(n[t]=i)}("undefined"==typeof window?this:window)},function(e,r,t){"use strict";function n(e){a=e}function o(e){this.name="Connection Error",this.message=e,this.stack=(new Error).stack}var i=t(8),a=null;o.prototype=Object.create(Error.prototype),o.prototype.constructor=o;var s={XMLHttpFactories:[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}],createXMLHTTPObject:function(){var e,r=!1,t=s.XMLHttpFactories,n=t.length;for(e=0;e<n;e++)try{r=t[e]();break}catch(o){}return r},post:function(e,r,t,n){if(!i.isType(t,"object"))throw new Error("Expected an object to POST");t=a.stringify(t),n=n||function(){};var u=s.createXMLHTTPObject();if(u)try{try{var c=function(){try{if(c&&4===u.readyState){c=void 0;var e=a.parse(u.responseText);200===u.status?n(null,e):i.isType(u.status,"number")&&u.status>=400&&u.status<600?(403==u.status&&console.error("[Rollbar]:"+e.message),n(new Error(String(u.status)))):n(new o("XHR response had no status code (likely connection failure)"))}}catch(r){var t;t=r&&r.stack?r:new Error(r),n(t)}};u.open("POST",e,!0),u.setRequestHeader&&(u.setRequestHeader("Content-Type","application/json"),u.setRequestHeader("X-Rollbar-Access-Token",r)),u.onreadystatechange=c,u.send(t)}catch(l){if("undefined"!=typeof XDomainRequest){"http:"===window.location.href.substring(0,5)&&"https"===e.substring(0,5)&&(e="http"+e.substring(5));var p=function(){n(new o("Request timed out"))},f=function(){n(new Error("Error during request"))},d=function(){n(null,a.parse(u.responseText))};u=new XDomainRequest,u.onprogress=function(){},u.ontimeout=p,u.onerror=f,u.onload=d,u.open("POST",e,!0),u.send(t)}}}catch(h){n(h)}}};e.exports={XHR:s,setupJSON:n,ConnectionError:o}}])});

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _panel = __webpack_require__(299);

	var _parentFrame = __webpack_require__(352);

	var _persistence = __webpack_require__(357);

	var _persistence2 = _interopRequireDefault(_persistence);

	var _util = __webpack_require__(358);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MPApp = function (_Component) {
	  _inherits(MPApp, _Component);

	  function MPApp() {
	    _classCallCheck(this, MPApp);

	    return _possibleConstructorReturn(this, (MPApp.__proto__ || Object.getPrototypeOf(MPApp)).apply(this, arguments));
	  }

	  _createClass(MPApp, [{
	    key: 'attachedCallback',
	    value: function attachedCallback() {
	      Object.assign(this.state, this.deserialize(this.persistence.get('state')));

	      // initialize frame communication
	      if (this.parentFrame) {
	        (0, _parentFrame.mirrorLocationHash)(this.parentFrame);
	        window.history.replaceState(null, null, this.initialURLHash());
	      }

	      _get(MPApp.prototype.__proto__ || Object.getPrototypeOf(MPApp.prototype), 'attachedCallback', this).apply(this, arguments);

	      this.initClickOutside();
	    }
	  }, {
	    key: 'setParentFrame',
	    value: function setParentFrame(parentFrame, parentData) {
	      this.parentFrame = parentFrame;
	      this.parentData = parentData;
	      this.historyMethod = 'replaceState';
	    }
	  }, {
	    key: 'initialURLHash',
	    value: function initialURLHash() {
	      return this.parentData.hash.replace(/^#*/, '#');
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      var stateUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      _util.debug.info('applying update ->', stateUpdate);
	      _get(MPApp.prototype.__proto__ || Object.getPrototypeOf(MPApp.prototype), 'update', this).apply(this, arguments);
	      _util.debug.info('      new state ->', this.state);
	      this.persistence.set('state', this.serialize());
	    }

	    // serialization helpers

	  }, {
	    key: 'serialize',
	    value: function serialize() {
	      return JSON.stringify(this.toSerializationAttrs());
	    }
	  }, {
	    key: 'deserialize',
	    value: function deserialize(JSONstr) {
	      var persisted = null;
	      try {
	        persisted = this.fromSerializationAttrs(JSON.parse(JSONstr));
	      } catch (err) {
	        if (JSONstr) {
	          _util.debug.warn('Invalid persistence entry: ' + JSONstr);
	        }
	      }
	      return persisted || {};
	    }
	  }, {
	    key: 'toSerializationAttrs',
	    value: function toSerializationAttrs() {
	      return {};
	    }
	  }, {
	    key: 'fromSerializationAttrs',
	    value: function fromSerializationAttrs(attrs) {
	      return attrs;
	    }

	    // DOM helpers

	  }, {
	    key: 'initClickOutside',
	    value: function initClickOutside() {
	      var _this2 = this;

	      document.addEventListener('click', function (ev) {
	        return _this2.clickOutsideHandler(ev);
	      });

	      if (this.parentFrame) {
	        this.parentFrame.addHandler('click', function (ev) {
	          return _this2.clickOutsideHandler(ev);
	        });
	      }
	    }
	  }, {
	    key: 'onClickOutside',
	    value: function onClickOutside(tagName, appMethodName) {
	      this.clickOutsideHandlers = this.clickOutsideHandlers || {};
	      this.clickOutsideHandlers[appMethodName] = this.clickOutsideHandlers[appMethodName] || [];

	      if (this.clickOutsideHandlers[appMethodName].indexOf(tagName) === -1) {
	        this.clickOutsideHandlers[appMethodName].push(tagName);
	      }
	    }
	  }, {
	    key: 'clickOutsideHandler',
	    value: function clickOutsideHandler(ev) {
	      var _this3 = this;

	      this.clickOutsideHandlers = this.clickOutsideHandlers || {};
	      Object.keys(this.clickOutsideHandlers).forEach(function (appMethodName) {
	        var tagNames = _this3.clickOutsideHandlers[appMethodName];

	        for (var el = ev.target; el; el = el.parentElement) {
	          if (tagNames.includes(el.tagName)) {
	            return;
	          }
	        }

	        _this3[appMethodName](ev);
	      });
	    }
	  }, {
	    key: 'persistence',
	    get: function get() {
	      if (!this._persistence) {
	        var namespaceVars = [this.persistenceKey];
	        if (this.parentData) {
	          var _parentData = this.parentData;
	          var project_id = _parentData.project_id;
	          var user_id = _parentData.user_id;

	          namespaceVars = namespaceVars.concat([project_id, user_id]);
	        }
	        this._persistence = new _persistence2.default(namespaceVars.join(':'));
	      }
	      return this._persistence;
	    }

	    // override for app-specific storage entries and versioning

	  }, {
	    key: 'persistenceKey',
	    get: function get() {
	      return 'mpapp';
	    }
	  }]);

	  return MPApp;
	}(_panel.Component);

	exports.default = MPApp;

/***/ },
/* 357 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// safe namespaced in-browser persistence (currently localStorage only)

	var Persistence = function () {
	  function Persistence(namespace) {
	    _classCallCheck(this, Persistence);

	    this.namespace = namespace;
	  }

	  _createClass(Persistence, [{
	    key: "get",
	    value: function get(key) {
	      try {
	        return window.localStorage.getItem(this.keyFor(key));
	      } catch (err) {
	        return null;
	      }
	    }
	  }, {
	    key: "keyFor",
	    value: function keyFor(key) {
	      return this.namespace + ":" + key;
	    }
	  }, {
	    key: "set",
	    value: function set(key, val) {
	      try {
	        window.localStorage.setItem(this.keyFor(key), val);
	      } catch (err) {
	        return;
	      }
	    }
	  }]);

	  return Persistence;
	}();

	exports.default = Persistence;

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.debug = undefined;
	exports.downloadData = downloadData;
	exports.renameEvent = renameEvent;
	exports.renameProperty = renameProperty;
	exports.renamePropertyType = renamePropertyType;
	exports.renamePropertyValue = renamePropertyValue;

	var _util = __webpack_require__(359);

	var _constants = __webpack_require__(361);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* global DEBUG_LOG */

	// mixpanel-specific report utils

	/*
	 * downloadData()
	 *
	 * Initiates a direct download to the browser for any HTTP method,
	 * using a terrible hack of submitting a hidden form to a hidden
	 * iframe target.
	 *
	 */
	var downloadIdCounter = 1;
	function downloadData(endpoint, params) {
	  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'POST';

	  // prepare target iframe
	  var exportFrameID = 'download-frame-' + downloadIdCounter++;
	  var exportFrame = document.createElement('iframe');
	  exportFrame.id = exportFrameID;
	  exportFrame.name = exportFrameID;
	  exportFrame.src = '';
	  exportFrame.style.display = 'none';
	  document.body.appendChild(exportFrame);

	  // prepare source form
	  var postForm = document.createElement('form');
	  postForm.action = endpoint;
	  postForm.method = method;
	  postForm.style.display = 'none';
	  postForm.target = exportFrameID;
	  postForm.innerHTML = Object.keys(params).map(function (p) {
	    return '<input type="hidden" name="' + p + '" value="' + (0, _util.htmlEncodeString)(params[p]) + '"/>';
	  }).join('');

	  // submit request
	  document.body.appendChild(postForm);
	  postForm.submit();
	}

	// TODO epurcer - replace this with a more general-purpose tool like https://www.npmjs.com/package/debug
	function getLogger(level) {
	  if (typeof DEBUG_LOG !== 'undefined' && DEBUG_LOG) {
	    /* eslint-disable no-console */
	    return function () {
	      var _console;

	      (_console = console)[level].apply(_console, arguments);
	    };
	    /* eslint-enable no-console */
	  } else {
	    return function () {};
	  }
	}
	var debug = exports.debug = ['log', 'info', 'warn', 'error', 'critical'].reduce(function (ret, level) {
	  return (0, _util.extend)(ret, _defineProperty({}, level, getLogger(level)));
	}, {});

	function renameEvent(event) {
	  if (_constants.EVENTS.hasOwnProperty(event)) {
	    return _constants.EVENTS[event];
	  }

	  return event;
	}

	function renameProperty(property) {
	  var remappedProperty = _constants.PROPERTIES[property];
	  if (remappedProperty) {
	    return remappedProperty;
	  }

	  // default conversion for all properties starting with '$'
	  if (property && property.length > 1 && property[0] === '$') {
	    return property.slice(1).split('_').map(_util.capitalize).join(' ');
	  }

	  return property;
	}

	function renamePropertyType(type) {
	  return {
	    number: 'Integer',
	    datetime: 'Date',
	    boolean: 'True/False'
	  }[type] || (0, _util.capitalize)(type);
	}

	function renamePropertyValue(value) {
	  var country = _constants.COUNTRIES[String(value).toUpperCase()];
	  if (country) {
	    return country;
	  }
	  return value;
	}

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _array = __webpack_require__(360);

	Object.keys(_array).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _array[key];
	    }
	  });
	});
	exports.abbreviateNumber = abbreviateNumber;
	exports.capitalize = capitalize;
	exports.commaizeNumber = commaizeNumber;
	exports.extend = extend;
	exports.htmlEncodeString = htmlEncodeString;
	exports.mapValues = mapValues;
	exports.nestedObjectDepth = nestedObjectDepth;
	exports.nestedObjectKeys = nestedObjectKeys;
	exports.objectFromPairs = objectFromPairs;
	exports.objToQueryString = objToQueryString;
	exports.parseUrl = parseUrl;
	exports.pick = pick;
	exports.pluralize = pluralize;
	exports.sum = sum;
	exports.truncateMiddle = truncateMiddle;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	// generic data-manipulation utils

	function abbreviateNumber(number, precision) {
	  number = parseFloat(number);
	  precision = precision === undefined ? 1 : precision;

	  var large_numbers = [[Math.pow(10, 15), 'Q'], [Math.pow(10, 12), 'T'], [Math.pow(10, 9), 'B'], [Math.pow(10, 6), 'M'], [Math.pow(10, 3), 'K']];
	  var suffix = '';

	  for (var i = 0; i < large_numbers.length; i++) {
	    var bignum = large_numbers[i][0];
	    var letter = large_numbers[i][1];

	    if (Math.abs(number) >= bignum) {
	      number /= bignum;
	      suffix = letter;
	      break;
	    }
	  }

	  var is_negative = number < 0;
	  var fixed = number.toFixed(precision).split('.');
	  var formatted = commaizeNumber(Math.abs(parseInt(fixed[0], 10)));

	  if (fixed[1] && parseInt(fixed[1], 10) !== 0) {
	    formatted += '.' + fixed[1];
	  }

	  return (is_negative ? '-' : '') + formatted + suffix;
	}

	function capitalize(string) {
	  return string && string.charAt(0).toUpperCase() + string.slice(1);
	}

	function commaizeNumber(number, no_conversion) {
	  switch (typeof number === 'undefined' ? 'undefined' : _typeof(number)) {
	    case 'number':
	      if (isNaN(number)) {
	        return number;
	      }
	      number = number.toString();
	      break;
	    case 'string':
	      // noop
	      break;
	    default:
	      return number;
	  }

	  var neg = false;
	  if (number[0] === '-') {
	    neg = true;
	    number = number.slice(1);
	  }

	  // Parse main number
	  var split = number.split('.');
	  var commaized = no_conversion ? split[0] : parseInt(split[0] || 0, 10).toString();

	  if (commaized.length) {
	    commaized = commaized.split('').reverse().join('');
	    commaized = commaized.match(/.{1,3}/g).join(',');
	    commaized = commaized.split('').reverse().join('');
	  }

	  if (split[1]) {
	    // Add decimals, if applicable
	    commaized += '.' + split[1];
	  }

	  if (neg) {
	    commaized = '-' + commaized;
	  }

	  return commaized;
	}

	function extend() {
	  return Object.assign.apply(Object, [{}].concat(_toConsumableArray(Array.prototype.slice.call(arguments))));
	}

	function htmlEncodeString(val) {
	  return String(val).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/\r/g, '&#013;').replace(/\n/g, '&#010;');
	}

	// return object with same keys and new values
	function mapValues(obj, func) {
	  return Object.keys(obj).reduce(function (ret, k) {
	    return Object.assign(ret, _defineProperty({}, k, func(obj[k], k)));
	  }, {});
	}

	function nestedObjectDepth(obj) {
	  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' ? nestedObjectDepth(obj[Object.keys(obj)[0]]) + 1 : 0;
	}

	function nestedObjectKeys(obj) {
	  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	  var keys = new Set();
	  getKeys(obj, depth, keys);
	  return Array.from(keys);
	}

	function getKeys(obj, depth, keySet) {
	  if (nestedObjectDepth(obj) > depth) {
	    Object.values(obj).forEach(function (value) {
	      return getKeys(value, depth, keySet);
	    });
	  } else {
	    Object.keys(obj).forEach(function (key) {
	      return keySet.add(key);
	    });
	  }
	}

	function objectFromPairs(pairs) {
	  var object = {};
	  pairs.forEach(function (pair) {
	    object[pair[0]] = pair[1];
	  });
	  return object;
	}

	function objToQueryString(params) {
	  return Object.keys(params).map(function (k) {
	    return [k, encodeURIComponent(params[k])].join('=');
	  }).join('&');
	}

	function parseUrl(url) {
	  var parser = document.createElement('a');
	  parser.href = url;
	  return {
	    host: parser.host,
	    pathname: parser.pathname,
	    url: parser.url
	  };
	}

	// filter object to include only given keys
	function pick(obj, keys) {
	  return keys.reduce(function (ret, k) {
	    return Object.assign(ret, _defineProperty({}, k, obj[k]));
	  }, {});
	}

	function pluralize(singular, number, plural) {
	  plural = plural || singular + 's';
	  return number === 0 || number > 1 ? plural : singular;
	}

	function sum(arr) {
	  var _sum = 0;
	  for (var i = 0; i < arr.length; i++) {
	    _sum += arr[i];
	  }
	  return _sum;
	}

	function truncateMiddle(string, len) {
	  if (string) {
	    if (len <= 3) {
	      return string.substr(0, len);
	    } else if (string.length <= len) {
	      return string;
	    } else {
	      var start = Math.ceil((len - 3) / 2);
	      var end = -1 * Math.floor((len - 3) / 2);
	      return string.substr(0, start) + '...' + (end ? string.substr(end) : '');
	    }
	  }
	  return string;
	}

/***/ },
/* 360 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.immutableSplice = immutableSplice;
	exports.removeByIndex = removeByIndex;
	exports.removeByValue = removeByValue;
	exports.replaceByIndex = replaceByIndex;
	exports.insertAtIndex = insertAtIndex;
	exports.sorted = sorted;
	exports.unique = unique;
	function immutableSplice(array) {
	  var copy = array.slice(0);

	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  copy.splice.apply(copy, args);
	  return copy;
	}

	function removeByIndex(array, index) {
	  if (index >= array.length || index < -array.length) {
	    throw 'IndexError: array index out of range';
	  }
	  return immutableSplice(array, index, 1);
	}

	function removeByValue(array, value) {
	  var index = array.indexOf(value);
	  if (index === -1) {
	    throw 'ValueError: ' + value + ' is not in array';
	  }
	  return removeByIndex(array, index);
	}

	function replaceByIndex(array, index, value) {
	  if (index >= array.length || index < -array.length) {
	    throw 'IndexError: array index out of range';
	  }
	  return immutableSplice(array, index, 1, value);
	}

	function insertAtIndex(array, index, value) {
	  if (index > array.length || index < -array.length) {
	    throw 'IndexError: array index out of range';
	  }
	  return immutableSplice(array, index, 0, value);
	}

	/**
	 * Sort array without mutating original
	 * @param {Array} arr - array to sort
	 * @param {Object} options - sorting configuration
	 * @param {string} [options.order='asc'] - sort order ('asc' or 'desc')
	 * @param {function} [options.transform] - transforms each element for comparison
	 * when sorting
	 * @example
	 * sorted(['XX', 'A', 'g'], {transform: s => s.toLowerCase()});
	 * // ['A', 'g', 'XX']
	 */
	function sorted(arr) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  options.order = options.order || 'asc';
	  return arr.slice().sort(function (a, b) {
	    if (options.transform) {
	      a = options.transform(a);
	      b = options.transform(b);
	    }
	    var cmp = a > b ? 1 : a < b ? -1 : 0;
	    if (options.order === 'desc') {
	      cmp *= -1;
	    }
	    return cmp;
	  });
	}

	function unique(array) {
	  var uniqueArray = [];
	  array.forEach(function (val) {
	    return !uniqueArray.includes(val) && uniqueArray.push(val);
	  });
	  return uniqueArray;
	}

/***/ },
/* 361 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var COUNTRIES = exports.COUNTRIES = {
	  AD: 'Andorra',
	  AE: 'United Arab Emirates',
	  AF: 'Afghanistan',
	  AG: 'Antigua and Barbuda',
	  AI: 'Anguilla',
	  AL: 'Albania',
	  AM: 'Armenia',
	  AO: 'Angola',
	  AQ: 'Antarctica',
	  AR: 'Argentina',
	  AS: 'American Samoa',
	  AT: 'Austria',
	  AU: 'Australia',
	  AW: 'Aruba',
	  AX: '\xC5land Islands',
	  AZ: 'Azerbaijan',
	  BA: 'Bosnia and Herzegovina',
	  BB: 'Barbados',
	  BD: 'Bangladesh',
	  BE: 'Belgium',
	  BF: 'Burkina Faso',
	  BG: 'Bulgaria',
	  BH: 'Bahrain',
	  BI: 'Burundi',
	  BJ: 'Benin',
	  BL: 'Saint Barth\xE9lemy',
	  BM: 'Bermuda',
	  BN: 'Brunei Darussalam',
	  BO: 'Bolivia, Plurinational State of',
	  BQ: 'Bonaire, Sint Eustatius and Saba',
	  BR: 'Brazil',
	  BS: 'Bahamas',
	  BT: 'Bhutan',
	  BV: 'Bouvet Island',
	  BW: 'Botswana',
	  BY: 'Belarus',
	  BZ: 'Belize',
	  CA: 'Canada',
	  CC: 'Cocos (Keeling) Islands',
	  CD: 'Congo, the Democratic Republic of the',
	  CF: 'Central African Republic',
	  CG: 'Congo',
	  CH: 'Switzerland',
	  CI: 'C\xF4te d\'Ivoire',
	  CK: 'Cook Islands',
	  CL: 'Chile',
	  CM: 'Cameroon',
	  CN: 'China',
	  CO: 'Colombia',
	  CR: 'Costa Rica',
	  CU: 'Cuba',
	  CV: 'Cape Verde',
	  CW: 'Cura\xE7ao',
	  CX: 'Christmas Island',
	  CY: 'Cyprus',
	  CZ: 'Czech Republic',
	  DE: 'Germany',
	  DJ: 'Djibouti',
	  DK: 'Denmark',
	  DM: 'Dominica',
	  DO: 'Dominican Republic',
	  DZ: 'Algeria',
	  EC: 'Ecuador',
	  EE: 'Estonia',
	  EG: 'Egypt',
	  EH: 'Western Sahara',
	  ER: 'Eritrea',
	  ES: 'Spain',
	  ET: 'Ethiopia',
	  FI: 'Finland',
	  FJ: 'Fiji',
	  FK: 'Falkland Islands (Malvinas)',
	  FM: 'Micronesia, Federated States of',
	  FO: 'Faroe Islands',
	  FR: 'France',
	  GA: 'Gabon',
	  GB: 'United Kingdom',
	  GD: 'Grenada',
	  GE: 'Georgia',
	  GF: 'French Guiana',
	  GG: 'Guernsey',
	  GH: 'Ghana',
	  GI: 'Gibraltar',
	  GL: 'Greenland',
	  GM: 'Gambia',
	  GN: 'Guinea',
	  GP: 'Guadeloupe',
	  GQ: 'Equatorial Guinea',
	  GR: 'Greece',
	  GS: 'South Georgia and the South Sandwich Islands',
	  GT: 'Guatemala',
	  GU: 'Guam',
	  GW: 'Guinea-Bissau',
	  GY: 'Guyana',
	  HK: 'Hong Kong',
	  HM: 'Heard Island and McDonald Islands',
	  HN: 'Honduras',
	  HR: 'Croatia',
	  HT: 'Haiti',
	  HU: 'Hungary',
	  ID: 'Indonesia',
	  IE: 'Ireland',
	  IL: 'Israel',
	  IM: 'Isle of Man',
	  IN: 'India',
	  IO: 'British Indian Ocean Territory',
	  IQ: 'Iraq',
	  IR: 'Iran, Islamic Republic of',
	  IS: 'Iceland',
	  IT: 'Italy',
	  JE: 'Jersey',
	  JM: 'Jamaica',
	  JO: 'Jordan',
	  JP: 'Japan',
	  KE: 'Kenya',
	  KG: 'Kyrgyzstan',
	  KH: 'Cambodia',
	  KI: 'Kiribati',
	  KM: 'Comoros',
	  KN: 'Saint Kitts and Nevis',
	  KP: 'Korea, Democratic People\'s Republic of',
	  KR: 'Korea, Republic of',
	  KW: 'Kuwait',
	  KY: 'Cayman Islands',
	  KZ: 'Kazakhstan',
	  LA: 'Lao People\'s Democratic Republic',
	  LB: 'Lebanon',
	  LC: 'Saint Lucia',
	  LI: 'Liechtenstein',
	  LK: 'Sri Lanka',
	  LR: 'Liberia',
	  LS: 'Lesotho',
	  LT: 'Lithuania',
	  LU: 'Luxembourg',
	  LV: 'Latvia',
	  LY: 'Libya',
	  MA: 'Morocco',
	  MC: 'Monaco',
	  MD: 'Moldova, Republic of',
	  ME: 'Montenegro',
	  MF: 'Saint Martin (French part)',
	  MG: 'Madagascar',
	  MH: 'Marshall Islands',
	  MK: 'Macedonia, the Former Yugoslav Republic of',
	  ML: 'Mali',
	  MM: 'Myanmar',
	  MN: 'Mongolia',
	  MO: 'Macao',
	  MP: 'Northern Mariana Islands',
	  MQ: 'Martinique',
	  MR: 'Mauritania',
	  MS: 'Montserrat',
	  MT: 'Malta',
	  MU: 'Mauritius',
	  MV: 'Maldives',
	  MW: 'Malawi',
	  MX: 'Mexico',
	  MY: 'Malaysia',
	  MZ: 'Mozambique',
	  NA: 'Namibia',
	  NC: 'New Caledonia',
	  NE: 'Niger',
	  NF: 'Norfolk Island',
	  NG: 'Nigeria',
	  NI: 'Nicaragua',
	  NL: 'Netherlands',
	  NO: 'Norway',
	  NP: 'Nepal',
	  NR: 'Nauru',
	  NU: 'Niue',
	  NZ: 'New Zealand',
	  OM: 'Oman',
	  PA: 'Panama',
	  PE: 'Peru',
	  PF: 'French Polynesia',
	  PG: 'Papua New Guinea',
	  PH: 'Philippines',
	  PK: 'Pakistan',
	  PL: 'Poland',
	  PM: 'Saint Pierre and Miquelon',
	  PN: 'Pitcairn',
	  PR: 'Puerto Rico',
	  PS: 'Palestine, State of',
	  PT: 'Portugal',
	  PW: 'Palau',
	  PY: 'Paraguay',
	  QA: 'Qatar',
	  RE: 'R\xE9union',
	  RO: 'Romania',
	  RS: 'Serbia',
	  RU: 'Russian Federation',
	  RW: 'Rwanda',
	  SA: 'Saudi Arabia',
	  SB: 'Solomon Islands',
	  SC: 'Seychelles',
	  SD: 'Sudan',
	  SE: 'Sweden',
	  SG: 'Singapore',
	  SH: 'Saint Helena, Ascension and Tristan da Cunha',
	  SI: 'Slovenia',
	  SJ: 'Svalbard and Jan Mayen',
	  SK: 'Slovakia',
	  SL: 'Sierra Leone',
	  SM: 'San Marino',
	  SN: 'Senegal',
	  SO: 'Somalia',
	  SR: 'Suriname',
	  SS: 'South Sudan',
	  ST: 'Sao Tome and Principe',
	  SV: 'El Salvador',
	  SX: 'Sint Maarten (Dutch part)',
	  SY: 'Syrian Arab Republic',
	  SZ: 'Swaziland',
	  TC: 'Turks and Caicos Islands',
	  TD: 'Chad',
	  TF: 'French Southern Territories',
	  TG: 'Togo',
	  TH: 'Thailand',
	  TJ: 'Tajikistan',
	  TK: 'Tokelau',
	  TL: 'Timor-Leste',
	  TM: 'Turkmenistan',
	  TN: 'Tunisia',
	  TO: 'Tonga',
	  TR: 'Turkey',
	  TT: 'Trinidad and Tobago',
	  TV: 'Tuvalu',
	  TW: 'Taiwan, Province of China',
	  TZ: 'Tanzania, United Republic of',
	  UA: 'Ukraine',
	  UG: 'Uganda',
	  UM: 'United States Minor Outlying Islands',
	  US: 'United States',
	  UY: 'Uruguay',
	  UZ: 'Uzbekistan',
	  VA: 'Holy See (Vatican City State)',
	  VC: 'Saint Vincent and the Grenadines',
	  VE: 'Venezuela, Bolivarian Republic of',
	  VG: 'Virgin Islands, British',
	  VI: 'Virgin Islands, U.S.',
	  VN: 'Viet Nam',
	  VU: 'Vanuatu',
	  WF: 'Wallis and Futuna',
	  WS: 'Samoa',
	  YE: 'Yemen',
	  YT: 'Mayotte',
	  ZA: 'South Africa',
	  ZM: 'Zambia',
	  ZW: 'Zimbabwe'
	};

	var EVENTS = exports.EVENTS = {
	  $all_events: 'All Events',
	  $campaign_delivery: 'Notification Sent',
	  $campaign_open: 'Notification Opened',
	  $campaign_bounced: 'Notification Bounced',
	  $campaign_marked_spam: 'Notification Marked Spam',
	  $experiment_started: 'Experiment Started',
	  $show_survey: 'Show Survey',
	  $top_events: 'Your Top Events',
	  $signup: 'Signup'
	};

	var PROPERTIES = exports.PROPERTIES = {
	  $answer_count: 'Answer Count',
	  $app_build_number: '$app_build_number',
	  $app_release: 'App Release',
	  $app_version: 'App Version',
	  $app_version_string: '$app_version_string',
	  $bluetooth_enabled: 'Bluetooth Enabled',
	  $bluetooth_version: 'Bluetooth Version',
	  $brand: 'Brand',
	  $browser: 'Browser',
	  $browser_version: 'Browser Version',
	  $carrier: 'Carrier',
	  $city: 'City',
	  $current_url: 'Current URL',
	  $experiments: 'Experiments',
	  $device: 'Device',
	  $duration: 'Duration',
	  $from_binding: 'From Binding',
	  $google_play_services: 'Google Play Services',
	  $has_nfc: 'Has NFC',
	  $has_telephone: 'Has Telephone',
	  $import: 'Import',
	  $initial_referrer: 'Initial Referrer',
	  $initial_referring_domain: 'Initial Referring Domain',
	  $ios_ifa: 'iOS IFA',
	  $lib_version: 'Library Version',
	  $manufacturer: 'Manufacturer',
	  $model: 'Model',
	  $os: 'Operating System',
	  $os_version: 'OS Version',
	  $radio: 'Radio',
	  $referrer: 'Referrer',
	  $referring_domain: 'Referring Domain',
	  $region: 'Region',
	  $screen_dpi: 'Screen DPI',
	  $screen_height: 'Screen Height',
	  $screen_width: 'Screen Width',
	  $search_engine: 'Search Engine',
	  $survey_shown: 'Survey Shown',
	  $watch_model: 'Watch Model',
	  $wifi: 'Wifi',
	  campaign_id: 'Campaign',
	  collection_id: 'Collection ID',
	  message_id: 'Message ID',
	  message_subtype: 'Message Subtype',
	  message_type: 'Message Type',
	  mp_country_code: 'Country',
	  mp_device_model: 'Device Model',
	  mp_keyword: 'Search Keyword',
	  mp_lib: 'Mixpanel Library',
	  survey_id: 'Survey ID',
	  utm_campaign: 'UTM Campaign',
	  utm_content: 'UTM Content',
	  utm_medium: 'UTM Medium',
	  utm_source: 'UTM Source',
	  utm_term: 'UTM Term',

	  // the following are no longer used but
	  // should be included for historical reasons
	  mp_browser: 'Browser',
	  mp_page: 'Page View',
	  mp_platform: 'Platform',
	  mp_referrer: 'Referrer'
	};

/***/ }
/******/ ]);