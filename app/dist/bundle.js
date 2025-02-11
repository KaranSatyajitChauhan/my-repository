/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./gallery.js":
/*!********************!*\
  !*** ./gallery.js ***!
  \********************/
/***/ (() => {

eval("// Get the modal\nvar modal = document.getElementById('modal');\n\n// Get the image and insert it inside the modal\nvar modalImg = document.getElementById('modal-img');\nvar images = document.querySelectorAll('.gallery img');\nimages.forEach(function (img) {\n  img.addEventListener('click', function () {\n    modal.style.display = 'block';\n    modalImg.src = this.src;\n  });\n});\n\n// Get the <span> element that closes the modal\nvar span = document.getElementsByClassName('close')[0];\n\n// When the user clicks on <span> (x), close the modal\nspan.onclick = function () {\n  modal.style.display = 'none';\n};\n\n// When the user clicks anywhere outside of the modal, close it\nwindow.onclick = function (event) {\n  if (event.target == modal) {\n    modal.style.display = 'none';\n  }\n};\n\n//# sourceURL=webpack://my-repository/./gallery.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./gallery.js"]();
/******/ 	
/******/ })()
;