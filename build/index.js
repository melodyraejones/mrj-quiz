/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/MultiLineInput.js":
/*!*******************************!*\
  !*** ./src/MultiLineInput.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const MultiLineInput = ({
  label,
  value,
  onChange,
  help
}) => {
  const [inputValue, setInputValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(value.join("\n"));
  const handleChange = event => {
    const newValue = event.target.value;
    setInputValue(newValue);
    const newValuesArray = newValue.split("\n").map(v => v.trim()).filter(v => v);
    onChange(newValuesArray);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: label,
    help: help
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    value: inputValue,
    onChange: handleChange,
    rows: 10,
    cols: 50,
    className: "components-textarea-control__input"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiLineInput);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MultiLineInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MultiLineInput */ "./src/MultiLineInput.js");






const personalityTypes = typeof mrjplugin_data !== "undefined" && Array.isArray(mrjplugin_data.personality_types) ? mrjplugin_data.personality_types.map(type => ({
  label: type,
  value: type
})) : [];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)("mrjplugin/quiz", {
  title: "What's Your Wisdom Profile?",
  icon: "smiley",
  category: "common",
  attributes: {
    questions: {
      type: "array",
      default: [{
        question: "",
        choices: [{
          text: "",
          personalityType: "",
          imageUrl: ""
        }],
        imageUrl: ""
      }]
    },
    personalityTypes: {
      type: "array",
      default: []
    }
  },
  edit: EditComponent,
  save: function () {
    return null;
  }
});
function EditComponent({
  attributes,
  setAttributes
}) {
  const {
    questions,
    personalityTypes
  } = attributes;
  function addQuestion() {
    const newQuestions = [...questions, {
      question: "",
      choices: [{
        text: "",
        personalityType: "",
        imageUrl: ""
      }],
      imageUrl: ""
    }];
    setAttributes({
      questions: newQuestions
    });
  }
  function addChoice(questionIndex) {
    const newQuestions = [...questions];
    newQuestions[questionIndex].choices.push({
      text: "",
      personalityType: "",
      imageUrl: ""
    });
    setAttributes({
      questions: newQuestions
    });
  }
  function removeChoice(questionIndex, choiceIndex) {
    const newQuestions = [...questions];
    newQuestions[questionIndex].choices = newQuestions[questionIndex].choices.filter((_, idx) => idx !== choiceIndex);
    setAttributes({
      questions: newQuestions
    });
  }
  function updateQuestionText(questionText, index) {
    const newQuestions = [...questions];
    newQuestions[index].question = questionText;
    setAttributes({
      questions: newQuestions
    });
  }
  function onSelectQuestionImage(media, questionIndex) {
    const newQuestions = [...questions];
    newQuestions[questionIndex].imageUrl = media.url;
    setAttributes({
      questions: newQuestions
    });
  }
  function updateChoiceText(questionIndex, choiceIndex, newText) {
    const newQuestions = [...questions];
    newQuestions[questionIndex].choices[choiceIndex].text = newText;
    setAttributes({
      questions: newQuestions
    });
  }
  function updatePersonalityType(questionIndex, choiceIndex, newType) {
    const newQuestions = [...questions];
    newQuestions[questionIndex].choices[choiceIndex].personalityType = newType;
    setAttributes({
      questions: newQuestions
    });
  }
  function onSelectChoiceImage(media, questionIndex, choiceIndex) {
    const newQuestions = [...questions];
    newQuestions[questionIndex].choices[choiceIndex].imageUrl = media.url;
    setAttributes({
      questions: newQuestions
    });
  }
  function updatePersonalityTypes(newTypes) {
    setAttributes({
      personalityTypes: newTypes
    });
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrj-quiz-edit-block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MultiLineInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Personality Types",
    help: "Enter personality types, one per line.",
    value: personalityTypes,
    onChange: updatePersonalityTypes
  }), questions.map((question, questionIndex) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: questionIndex
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    value: question.question,
    onChange: text => updateQuestionText(text, questionIndex),
    label: `Question ${questionIndex + 1}`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => onSelectQuestionImage(media, questionIndex),
    allowedTypes: ["image"],
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      isSecondary: true
    }, question.imageUrl ? "Change Image" : "Upload Image")
  })), question.imageUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: question.imageUrl,
    alt: `Uploaded for question ${questionIndex + 1}`
  }), question.choices.map((choice, choiceIndex) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    key: choiceIndex
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    value: choice.text,
    onChange: newText => updateChoiceText(questionIndex, choiceIndex, newText),
    label: "Choice Text"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "Personality Type",
    value: choice.personalityType,
    options: personalityTypes.map(type => ({
      label: type,
      value: type
    })),
    onChange: newType => updatePersonalityType(questionIndex, choiceIndex, newType)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => onSelectChoiceImage(media, questionIndex, choiceIndex),
    allowedTypes: ["image"],
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      isSecondary: true
    }, choice.imageUrl ? "Change Image" : "Upload Image")
  })), choice.imageUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: choice.imageUrl,
    alt: `Image for choice ${choiceIndex + 1} of question ${questionIndex + 1}`
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isSecondary: true,
    onClick: () => removeChoice(questionIndex, choiceIndex)
  }, "Delete")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: "choice-btn",
    onClick: () => addChoice(questionIndex),
    isSecondary: true
  }, "Add Another Choice"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
    className: "next-question-line"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: addQuestion,
    isPrimary: true
  }, "Add Question"));
}
/******/ })()
;
//# sourceMappingURL=index.js.map