/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/minicheckmarked.svg */ "./src/img/minicheckmarked.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --greyBlue: rgb(156, 164, 199);\n    --happyBlue: rgb(192, 204, 241);\n    --postityellow: rgb(242, 243, 221);\n    --bg-color: var(--happyBlue, blue);\n\n    --sub-bg-color: rgba(211, 209, 209, 0.493);\n    --project-color: rgb(246, 247, 238);\n    \n    \n    --header-bg-color: rgb(238, 240, 233);\n    --header-border: var(--greyBlue);\n\n\n    --editing-task-color: var(--happyBlue);\n\n    --low-priority: rgba(162, 179, 233, 0.596);\n    --med-priority: rgba(248, 238, 142, 0.596);\n    --high-priority: rgba(233, 162, 162, 0.596);\n\n    --translate-amount: 50px;\n\n    padding: 0;\n    margin: 0;\n}\n\nbody{\n\n    background-color: var(--happyBlue);\n  \n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nh1,h2,h3,h4,h5,p, ul, li{\n    margin: 0;\n    padding: 0;\n    list-style: none;;\n}\n\n\n.test{\n    background-color: rgba(192, 144, 144, 0.918);\n    height: 200px;\n    width: 200px;\n    display: fixed;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    border-radius: 10px 10px 5px 5px;\n}\n\n.sub{\n    \n    height: 50%;\n    width: 50%;\n    background-color: rgba(8, 199, 24, 0.76);\n    border-radius: 50%;\n}\n\n.task{\n    border: 5px solid black;\n    height: 500px;\n    width: min(300px, 90%);\n\n    padding: 10px;\n\n    background-color: rgb(114, 135, 192);\n\n    display: grid;\n    position: fixed;\n    z-index: 10;\n    grid-template-rows: 1fr 2fr 1fr 1fr;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \n    \"title title\"\n    \"content content\"\n    \"objective deadline\"\n    \"buttons buttons\";\n}\n\n\n\n.task-title-bar{\n    display: flex;\n    justify-content: space-between;\n    grid-area: title;\n}\n\n.task-title{\n    font-size: clamp(1rem, 32px, 2rem);\n    text-align: center;\n    justify-self: center;\n}\n\n.task-desc{\n    grid-area: content;\n}\n\n#deadline-form-container{\n\n    position: fixed;\n    top: 20vh;\n    display: grid;\n    z-index: 10;\n    justify-content: flex-start;\n\n  \n}\n\n.task-deadline-container{\n    grid-area: deadline;\n   \n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n\n}\n\n.task-deadline-content{\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n}\n\n#deadline-form{\n\n    align-self: center;\n    justify-self: center;\n    border-radius: 5px;\n    box-shadow: 3px 3px 5px grey;\n\n    background-color: rgb(255, 255, 255);\n    position: relative;\n    z-index: 10;\n    height: 300px;\n    width: min(400px, 100%);\n    display: grid;\n    padding: 10% 10% 0% 10%;\n    grid-template-areas: \n    \"label\"\n    \"date\"\n    \"time\"\n    \"repeat\"\n    \"buttons\";\n    \n\n}\n.form-input{\n    margin-left: 10px;\n}\n\n.form-header{\n\n    grid-area: label;\n\n   \n}\n\n#date-label{\n\n    grid-area: date;\n}\n\n#time-label{\n    grid-area: time;\n}\n\n#form-date{\n\n    grid-area: input;\n}\n\n#task-deadline-fieldset{\n    grid-area: repeat;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n}  \n\n.form-buttons{\n\n    grid-area: buttons;\n    display: flex;\n    flex-direction: row-reverse;\n}\n\n\n\n.task-header{\n    grid-row: 1 / 2;\n}\n\n\n.task-goal{\n    grid-area: objective;\n}\n\n\n#content{\n    background-color: var(--happyBlue, white);\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n \n}\n.blockscreen{\n    pointer-events: none;\n    background-color: rgb(238, 237, 237);\n    opacity: .5;\n}\n\n.project{\n    height: min(500px, 90%);\n    width: min(600px, 95%);\n    min-width: 300px;\n    top: 20%;\n    font-family: inter;\n    display: flex;\n    position: fixed;\n    \n    flex-direction: column-reverse;\n    justify-content: center;\n    margin: 0;\n    padding: 10px;\n    z-index: 10;\n\n    border-radius: 5px;\n    background-color: rgb(255, 255, 255);\n    box-shadow: 3px 3px 20px 5px var(--greyBlue)\n    \n    \n    \n\n}\n\n\n.project-content{\n    \n    height: 90%;\n    width: 98%;\n    gap: 5px;\n    display: grid;\n\n    grid-template-columns: 3fr 2fr;\n    grid-template-rows: repeat(5, 1fr);\n\n    grid-template-areas: \n    \n    \"title summary\"\n    \"tasks tasks\"\n    \"tasks tasks\"\n    \"tasks tasks\"\n    \"objective deadline\";\n\n\n}\n\n.expand-content-btn{\n    \n}\n\n.title-container{\n\n    \n    display: flex;\n    justify-content: space-between;\n    width: 90%;\n   \n\n}\n\n\n.project-item{\n\n\n    \n}\n.project-title-bar{\n\n    grid-area: title;\n}\n\n\n.project-title{\n    width: 98%;\n    height: 100%;\n \n\n   \n    font-family: inter;\n    font-size: 32px;\n\n}\n\n.project-desc{\n    height: 100%;\n    width: 98%;\n\n    font-family: inter;\n    grid-area: summary;\n\n    overflow: auto;\n   \n\n}\n\n.project-goal{\n    width: 98%;\n   \n\n    grid-area: objective;\n}\n\n.edit-project-box, .edit-task-box{\n    resize: none;\n    \n    max-width: 90%;\n\n}\n\n#project-container{\n    position: fixed;\n    display: none;\n    background-color: rgba(238, 238, 238, 0.466);\n    width: 100%;\n    height: 100%;\n   \n}\n\n.edit-task-box{\n\n    background-color: var(--editing-task-color, grey);\n\n\n}\n\n#add-task-button{\n\n    margin-top: 5px;\n    width: 2rem;\n    height: 2rem;\n   \n}\n\n#add-task-button:hover{\n   \n    transform: scale(1.1);\n\n}\n\n#add-task-button:focus{\n   \n}\n\n.deadline-container{\n    display: grid;\n    grid-area: deadline;\n    \n}\n\n.deadline-content{\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n}\n\n\n.deadline-header{\n    grid-row: 1 / 2;\n}\n\n.tasks-container{\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    align-items: center;\n    grid-area: tasks;\n}\n\n.mini-task{\n    background-color: var(--med-priority);\n    display: flex;\n    border: 1px solid black;\n    width: 90%;\n}\n\n.mini-button{\n    flex: 1;\n    background-color: inherit;\n\n}\n\n#mini-sort{\n\n    height: auto;\n    width: 1.5rem;\n}\n\n.mini-title{\n    border: none;\n    \n  \n}\n\n\n.mini-finish, .mini-delete{\n    flex: 0;\n    width: 2rem;\n    text-align: center;\n   \n}\n\n\n.task-list{\n\n    display: flex;\n    flex-direction: column;\n    width: 90%;\n    align-items: center;\n\n}\n\n.project-card{\n    \n}\n\n\n#modal-container{\n    margin-top: 20vh;\n    align-self: center;\n    display: none;\n    justify-content: center;\n   \n    position: fixed;\n    z-index: 1;\n    width: min(100vw, 380px);\n    height: min(100vh, 500px);\n     background-color: rgba(184, 135, 11, 0.082);\n     \n }\n \n #add-modal{\n     display: flex;\n     \n     align-self: center;\n     justify-content: center;\n     align-items: center;\n     \n     width: min(100vw, 340px);\n     height: min(100vh, 480px);\n \n  \n \n     overflow: auto;\n     border: 2px dashed var(--alt-card-border-color);\n     border-radius: 5px;\n     box-shadow: 2px 2px 5px;\n     background-color: var(--card-border-color, #647431);\n \n }\n \n .add-content{\n \n     width: min(100vh, 300px);\n     height:  min(100vh, 450px);\n \n     display: flex;\n     flex-direction: column;\n     background-color: var(--card-bg-color)\n }\n\n .project-button, .task-button{\n    padding: 5px;\n    font-size: clamp(1rem, 24px, 2rem);\n    border-radius: 5px;\n    height: 2rem;\n    width: 2rem;\n    fill: red;   \n    opacity: .85;\n}\n\n.container-button:hover, .project-button:hover, .task-button:hover, .container-button:active, .project-button:active, .task-button:active {\n\n    opacity: 1;\n    transform: scale(1.1)\n\n}\n\n.button-bar{\n    display: flex;\n    justify-content: space-between;\n\n    grid-area: buttons;\n}\n\n#project-button-bar{\n    flex-direction: row-reverse;\n}\n\n\n.edit-button{\n\n    \n}\n\n\n\n\n.delete-task{\n    \n    \n \n\n}\n\n.completed > *{\n  \n   \n    font-style: italic;\n}\n\n.completed > .mini-finish{\n    background-image:  url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  \n\n}\n\n.hidden{\n    display: none;\n}\n\n.main-container{\n    margin-top: 10%;\n    width: 80%;\n    height: 90%;\n\n    display: flex;\n    justify-content: center;\n    padding: 20px;\n    border-radius: 10px;\n   box-shadow: inset 1px 1px 10px 3px var(--greyBlue, lightgrey);\n\n}\n\n.workspace{\n    justify-self: center;\n    width: 100%;\n  \n    background-color: rgb(195, 210, 245);\n    border-radius: 10px;\n    gap: 5px;\n    \n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n\n }\n\n .content-button{\n    height: auto;\n    width: 3rem;\n\n    justify-self: center;\n }\n\n\n \n .card-button{\n    height: auto;\n    width: 1.5rem;\n    opacity: .5;\n }\n\n .card-button:hover{\n    opacity: 1;\n    transform: scale(1.1);\n }\n\n \n .card{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 10px;\n    height: 200px;\n    width: 100%;\n\n    background-color: rgb(242, 243, 221);\n\n    border-radius: 5px;\n    box-shadow: 3px 3px 5px 5px var(--greyBlue);\n    outline: 1px solid var(--greyBlue);\n }\n\n .card-button-bar{\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n   \n }\n\n .card-percent-container{\n   \n }\n \n .card-percentage{\n    text-align: center;\n }\n\n .card-completed > *{\n    color: green;\n    font-style: italic;\n    font-weight: bold;\n }\n\n\n\n .card-button-bar > *{\n   \n }\n\n.card-deadline{\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 5px;\n    border-bottom: 1px dashed black;\n}\n\n.active-settings-button{\n\n\n\n}\n\n\n\n.blockproject, .blockproject > * > *{\n    pointer-events: none;\n    background-color: rgba(201, 201, 201, 0.836);\n    \n}\n\n\n\n.priority-button{\n    height: 1.5rem;\n    width: min-content;\n    border-radius: 5px;\n    font-weight: bold;\n}\n\n\n.container-button{\n    height: 1.5rem;\n    width: 1.5rem;\n}\n\n#tasks-button{\n    flex: 0;\n   \n\n}\n\n\n.lowpriority{\n    background-color: var(--low-priority, lightblue);\n}\n\n.medpriority{\n    background-color: var(--med-priority, lightyellow);\n\n}\n\n.highpriority{\n    background-color:var(--high-priority, lightsalmon);\n}\n\n.completed{\n    \n    background-color: rgba(104, 245, 104, 0.795);\n    \n}\n\n.menu-container{\n    position: fixed;\n    z-index: 10;\n    visibility: hidden;\n    display: none;\n    background-color: rgba(240, 236, 236, 0.863);\n    border: 2px outset black;\n    border-radius: 3px;\n    padding: 2px;\n    cursor: pointer;\n    width: 150px;\n    box-shadow: 1px 1px;\n\n    display: flex;\n}\n\n.menu-header{\n    opacity: 75%;\n    font-style: italic;\n    margin-left: auto;\n}\n\n#context-menu{\n    display:flex;\n    flex-direction: column;\n\n}\n\n.menu-item{\n\nmargin-bottom: 10px;\n\n}\n\n.menu-item:hover, .menu-item:focus{\n    font-weight: bold;\n}\n\n#header{\n    width: 100%;\n    height: 100px;\n    background-color: var(--header-bg-color, rgb(196, 181, 181));\n    margin-bottom: 5px;\n    border-bottom: 5px solid var(--header-bg-color, none);\n    box-shadow: 2px 2px 5px var(--greyBlue)\n    \n\n\n}\n\n.tab-container{\n    display: flex;\n    flex-direction: column;\n\n\n\n}\n\n.tab{\n\n    width: 100%;\n    display: flex;\n\n\n}\n\n.tooltip {\n\n\n  \n    border-bottom: 1px dotted black;\n}\n\n.tooltip .tooltiptext {\n\n    visibility: hidden;\n    width: 120px;\n    background-color: rgba(107, 106, 106, 0.753);\n    color: rgb(221, 221, 221);\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n\n    position: absolute;\n    z-index: 1;\n}\n\n.tooltip:hover .tooltiptext {\n    visibility: visible;\n   \n}\n\n.settings-cog:focus, .settings-cog:active{\n\n    transform: rotate(90%);\n\n\n\n}\n\n\n.settings-cog:hover{\n    transform: rotate(90%)\n}\n\n.shift-right{\n    transform:translateX(var(--translate-amount, 25px));\n}\n\n.shift-left{\n    transform:translateX(-10rem);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --greyBlue: rgb(156, 164, 199);\n    --happyBlue: rgb(192, 204, 241);\n    --postityellow: rgb(242, 243, 221);\n    --bg-color: var(--happyBlue, blue);\n\n    --sub-bg-color: rgba(211, 209, 209, 0.493);\n    --project-color: rgb(246, 247, 238);\n    \n    \n    --header-bg-color: rgb(238, 240, 233);\n    --header-border: var(--greyBlue);\n\n\n    --editing-task-color: var(--happyBlue);\n\n    --low-priority: rgba(162, 179, 233, 0.596);\n    --med-priority: rgba(248, 238, 142, 0.596);\n    --high-priority: rgba(233, 162, 162, 0.596);\n\n    --translate-amount: 50px;\n\n    padding: 0;\n    margin: 0;\n}\n\nbody{\n\n    background-color: var(--happyBlue);\n  \n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nh1,h2,h3,h4,h5,p, ul, li{\n    margin: 0;\n    padding: 0;\n    list-style: none;;\n}\n\n\n.test{\n    background-color: rgba(192, 144, 144, 0.918);\n    height: 200px;\n    width: 200px;\n    display: fixed;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    border-radius: 10px 10px 5px 5px;\n}\n\n.sub{\n    \n    height: 50%;\n    width: 50%;\n    background-color: rgba(8, 199, 24, 0.76);\n    border-radius: 50%;\n}\n\n.task{\n    border: 5px solid black;\n    height: 500px;\n    width: min(300px, 90%);\n\n    padding: 10px;\n\n    background-color: rgb(114, 135, 192);\n\n    display: grid;\n    position: fixed;\n    z-index: 10;\n    grid-template-rows: 1fr 2fr 1fr 1fr;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \n    \"title title\"\n    \"content content\"\n    \"objective deadline\"\n    \"buttons buttons\";\n}\n\n\n\n.task-title-bar{\n    display: flex;\n    justify-content: space-between;\n    grid-area: title;\n}\n\n.task-title{\n    font-size: clamp(1rem, 32px, 2rem);\n    text-align: center;\n    justify-self: center;\n}\n\n.task-desc{\n    grid-area: content;\n}\n\n#deadline-form-container{\n\n    position: fixed;\n    top: 20vh;\n    display: grid;\n    z-index: 10;\n    justify-content: flex-start;\n\n  \n}\n\n.task-deadline-container{\n    grid-area: deadline;\n   \n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n\n}\n\n.task-deadline-content{\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n}\n\n#deadline-form{\n\n    align-self: center;\n    justify-self: center;\n    border-radius: 5px;\n    box-shadow: 3px 3px 5px grey;\n\n    background-color: rgb(255, 255, 255);\n    position: relative;\n    z-index: 10;\n    height: 300px;\n    width: min(400px, 100%);\n    display: grid;\n    padding: 10% 10% 0% 10%;\n    grid-template-areas: \n    \"label\"\n    \"date\"\n    \"time\"\n    \"repeat\"\n    \"buttons\";\n    \n\n}\n.form-input{\n    margin-left: 10px;\n}\n\n.form-header{\n\n    grid-area: label;\n\n   \n}\n\n#date-label{\n\n    grid-area: date;\n}\n\n#time-label{\n    grid-area: time;\n}\n\n#form-date{\n\n    grid-area: input;\n}\n\n#task-deadline-fieldset{\n    grid-area: repeat;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n}  \n\n.form-buttons{\n\n    grid-area: buttons;\n    display: flex;\n    flex-direction: row-reverse;\n}\n\n\n\n.task-header{\n    grid-row: 1 / 2;\n}\n\n\n.task-goal{\n    grid-area: objective;\n}\n\n\n#content{\n    background-color: var(--happyBlue, white);\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n \n}\n.blockscreen{\n    pointer-events: none;\n    background-color: rgb(238, 237, 237);\n    opacity: .5;\n}\n\n.project{\n    height: min(500px, 90%);\n    width: min(600px, 95%);\n    min-width: 300px;\n    top: 20%;\n    font-family: inter;\n    display: flex;\n    position: fixed;\n    \n    flex-direction: column-reverse;\n    justify-content: center;\n    margin: 0;\n    padding: 10px;\n    z-index: 10;\n\n    border-radius: 5px;\n    background-color: rgb(255, 255, 255);\n    box-shadow: 3px 3px 20px 5px var(--greyBlue)\n    \n    \n    \n\n}\n\n\n.project-content{\n    \n    height: 90%;\n    width: 98%;\n    gap: 5px;\n    display: grid;\n\n    grid-template-columns: 3fr 2fr;\n    grid-template-rows: repeat(5, 1fr);\n\n    grid-template-areas: \n    \n    \"title summary\"\n    \"tasks tasks\"\n    \"tasks tasks\"\n    \"tasks tasks\"\n    \"objective deadline\";\n\n\n}\n\n.expand-content-btn{\n    \n}\n\n.title-container{\n\n    \n    display: flex;\n    justify-content: space-between;\n    width: 90%;\n   \n\n}\n\n\n.project-item{\n\n\n    \n}\n.project-title-bar{\n\n    grid-area: title;\n}\n\n\n.project-title{\n    width: 98%;\n    height: 100%;\n \n\n   \n    font-family: inter;\n    font-size: 32px;\n\n}\n\n.project-desc{\n    height: 100%;\n    width: 98%;\n\n    font-family: inter;\n    grid-area: summary;\n\n    overflow: auto;\n   \n\n}\n\n.project-goal{\n    width: 98%;\n   \n\n    grid-area: objective;\n}\n\n.edit-project-box, .edit-task-box{\n    resize: none;\n    \n    max-width: 90%;\n\n}\n\n#project-container{\n    position: fixed;\n    display: none;\n    background-color: rgba(238, 238, 238, 0.466);\n    width: 100%;\n    height: 100%;\n   \n}\n\n.edit-task-box{\n\n    background-color: var(--editing-task-color, grey);\n\n\n}\n\n#add-task-button{\n\n    margin-top: 5px;\n    width: 2rem;\n    height: 2rem;\n   \n}\n\n#add-task-button:hover{\n   \n    transform: scale(1.1);\n\n}\n\n#add-task-button:focus{\n   \n}\n\n.deadline-container{\n    display: grid;\n    grid-area: deadline;\n    \n}\n\n.deadline-content{\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n}\n\n\n.deadline-header{\n    grid-row: 1 / 2;\n}\n\n.tasks-container{\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    align-items: center;\n    grid-area: tasks;\n}\n\n.mini-task{\n    background-color: var(--med-priority);\n    display: flex;\n    border: 1px solid black;\n    width: 90%;\n}\n\n.mini-button{\n    flex: 1;\n    background-color: inherit;\n\n}\n\n#mini-sort{\n\n    height: auto;\n    width: 1.5rem;\n}\n\n.mini-title{\n    border: none;\n    \n  \n}\n\n\n.mini-finish, .mini-delete{\n    flex: 0;\n    width: 2rem;\n    text-align: center;\n   \n}\n\n\n.task-list{\n\n    display: flex;\n    flex-direction: column;\n    width: 90%;\n    align-items: center;\n\n}\n\n.project-card{\n    \n}\n\n\n#modal-container{\n    margin-top: 20vh;\n    align-self: center;\n    display: none;\n    justify-content: center;\n   \n    position: fixed;\n    z-index: 1;\n    width: min(100vw, 380px);\n    height: min(100vh, 500px);\n     background-color: rgba(184, 135, 11, 0.082);\n     \n }\n \n #add-modal{\n     display: flex;\n     \n     align-self: center;\n     justify-content: center;\n     align-items: center;\n     \n     width: min(100vw, 340px);\n     height: min(100vh, 480px);\n \n  \n \n     overflow: auto;\n     border: 2px dashed var(--alt-card-border-color);\n     border-radius: 5px;\n     box-shadow: 2px 2px 5px;\n     background-color: var(--card-border-color, #647431);\n \n }\n \n .add-content{\n \n     width: min(100vh, 300px);\n     height:  min(100vh, 450px);\n \n     display: flex;\n     flex-direction: column;\n     background-color: var(--card-bg-color)\n }\n\n .project-button, .task-button{\n    padding: 5px;\n    font-size: clamp(1rem, 24px, 2rem);\n    border-radius: 5px;\n    height: 2rem;\n    width: 2rem;\n    fill: red;   \n    opacity: .85;\n}\n\n.container-button:hover, .project-button:hover, .task-button:hover, .container-button:active, .project-button:active, .task-button:active {\n\n    opacity: 1;\n    transform: scale(1.1)\n\n}\n\n.button-bar{\n    display: flex;\n    justify-content: space-between;\n\n    grid-area: buttons;\n}\n\n#project-button-bar{\n    flex-direction: row-reverse;\n}\n\n\n.edit-button{\n\n    \n}\n\n\n\n\n.delete-task{\n    \n    \n \n\n}\n\n.completed > *{\n  \n   \n    font-style: italic;\n}\n\n.completed > .mini-finish{\n    background-image:  url(./img/minicheckmarked.svg);\n  \n\n}\n\n.hidden{\n    display: none;\n}\n\n.main-container{\n    margin-top: 10%;\n    width: 80%;\n    height: 90%;\n\n    display: flex;\n    justify-content: center;\n    padding: 20px;\n    border-radius: 10px;\n   box-shadow: inset 1px 1px 10px 3px var(--greyBlue, lightgrey);\n\n}\n\n.workspace{\n    justify-self: center;\n    width: 100%;\n  \n    background-color: rgb(195, 210, 245);\n    border-radius: 10px;\n    gap: 5px;\n    \n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n\n }\n\n .content-button{\n    height: auto;\n    width: 3rem;\n\n    justify-self: center;\n }\n\n\n \n .card-button{\n    height: auto;\n    width: 1.5rem;\n    opacity: .5;\n }\n\n .card-button:hover{\n    opacity: 1;\n    transform: scale(1.1);\n }\n\n \n .card{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 10px;\n    height: 200px;\n    width: 100%;\n\n    background-color: rgb(242, 243, 221);\n\n    border-radius: 5px;\n    box-shadow: 3px 3px 5px 5px var(--greyBlue);\n    outline: 1px solid var(--greyBlue);\n }\n\n .card-button-bar{\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n   \n }\n\n .card-percent-container{\n   \n }\n \n .card-percentage{\n    text-align: center;\n }\n\n .card-completed > *{\n    color: green;\n    font-style: italic;\n    font-weight: bold;\n }\n\n\n\n .card-button-bar > *{\n   \n }\n\n.card-deadline{\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 5px;\n    border-bottom: 1px dashed black;\n}\n\n.active-settings-button{\n\n\n\n}\n\n\n\n.blockproject, .blockproject > * > *{\n    pointer-events: none;\n    background-color: rgba(201, 201, 201, 0.836);\n    \n}\n\n\n\n.priority-button{\n    height: 1.5rem;\n    width: min-content;\n    border-radius: 5px;\n    font-weight: bold;\n}\n\n\n.container-button{\n    height: 1.5rem;\n    width: 1.5rem;\n}\n\n#tasks-button{\n    flex: 0;\n   \n\n}\n\n\n.lowpriority{\n    background-color: var(--low-priority, lightblue);\n}\n\n.medpriority{\n    background-color: var(--med-priority, lightyellow);\n\n}\n\n.highpriority{\n    background-color:var(--high-priority, lightsalmon);\n}\n\n.completed{\n    \n    background-color: rgba(104, 245, 104, 0.795);\n    \n}\n\n.menu-container{\n    position: fixed;\n    z-index: 10;\n    visibility: hidden;\n    display: none;\n    background-color: rgba(240, 236, 236, 0.863);\n    border: 2px outset black;\n    border-radius: 3px;\n    padding: 2px;\n    cursor: pointer;\n    width: 150px;\n    box-shadow: 1px 1px;\n\n    display: flex;\n}\n\n.menu-header{\n    opacity: 75%;\n    font-style: italic;\n    margin-left: auto;\n}\n\n#context-menu{\n    display:flex;\n    flex-direction: column;\n\n}\n\n.menu-item{\n\nmargin-bottom: 10px;\n\n}\n\n.menu-item:hover, .menu-item:focus{\n    font-weight: bold;\n}\n\n#header{\n    width: 100%;\n    height: 100px;\n    background-color: var(--header-bg-color, rgb(196, 181, 181));\n    margin-bottom: 5px;\n    border-bottom: 5px solid var(--header-bg-color, none);\n    box-shadow: 2px 2px 5px var(--greyBlue)\n    \n\n\n}\n\n.tab-container{\n    display: flex;\n    flex-direction: column;\n\n\n\n}\n\n.tab{\n\n    width: 100%;\n    display: flex;\n\n\n}\n\n.tooltip {\n\n\n  \n    border-bottom: 1px dotted black;\n}\n\n.tooltip .tooltiptext {\n\n    visibility: hidden;\n    width: 120px;\n    background-color: rgba(107, 106, 106, 0.753);\n    color: rgb(221, 221, 221);\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n\n    position: absolute;\n    z-index: 1;\n}\n\n.tooltip:hover .tooltiptext {\n    visibility: visible;\n   \n}\n\n.settings-cog:focus, .settings-cog:active{\n\n    transform: rotate(90%);\n\n\n\n}\n\n\n.settings-cog:hover{\n    transform: rotate(90%)\n}\n\n.shift-right{\n    transform:translateX(var(--translate-amount, 25px));\n}\n\n.shift-left{\n    transform:translateX(-10rem);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./node_modules/lru-cache/index.js":
/*!*****************************************!*\
  !*** ./node_modules/lru-cache/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// A linked list to keep track of recently-used-ness
const Yallist = __webpack_require__(/*! yallist */ "./node_modules/yallist/yallist.js")

const MAX = Symbol('max')
const LENGTH = Symbol('length')
const LENGTH_CALCULATOR = Symbol('lengthCalculator')
const ALLOW_STALE = Symbol('allowStale')
const MAX_AGE = Symbol('maxAge')
const DISPOSE = Symbol('dispose')
const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet')
const LRU_LIST = Symbol('lruList')
const CACHE = Symbol('cache')
const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet')

const naiveLength = () => 1

// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
class LRUCache {
  constructor (options) {
    if (typeof options === 'number')
      options = { max: options }

    if (!options)
      options = {}

    if (options.max && (typeof options.max !== 'number' || options.max < 0))
      throw new TypeError('max must be a non-negative number')
    // Kind of weird to have a default max of Infinity, but oh well.
    const max = this[MAX] = options.max || Infinity

    const lc = options.length || naiveLength
    this[LENGTH_CALCULATOR] = (typeof lc !== 'function') ? naiveLength : lc
    this[ALLOW_STALE] = options.stale || false
    if (options.maxAge && typeof options.maxAge !== 'number')
      throw new TypeError('maxAge must be a number')
    this[MAX_AGE] = options.maxAge || 0
    this[DISPOSE] = options.dispose
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false
    this.reset()
  }

  // resize the cache when the max changes.
  set max (mL) {
    if (typeof mL !== 'number' || mL < 0)
      throw new TypeError('max must be a non-negative number')

    this[MAX] = mL || Infinity
    trim(this)
  }
  get max () {
    return this[MAX]
  }

  set allowStale (allowStale) {
    this[ALLOW_STALE] = !!allowStale
  }
  get allowStale () {
    return this[ALLOW_STALE]
  }

  set maxAge (mA) {
    if (typeof mA !== 'number')
      throw new TypeError('maxAge must be a non-negative number')

    this[MAX_AGE] = mA
    trim(this)
  }
  get maxAge () {
    return this[MAX_AGE]
  }

  // resize the cache when the lengthCalculator changes.
  set lengthCalculator (lC) {
    if (typeof lC !== 'function')
      lC = naiveLength

    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC
      this[LENGTH] = 0
      this[LRU_LIST].forEach(hit => {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key)
        this[LENGTH] += hit.length
      })
    }
    trim(this)
  }
  get lengthCalculator () { return this[LENGTH_CALCULATOR] }

  get length () { return this[LENGTH] }
  get itemCount () { return this[LRU_LIST].length }

  rforEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].tail; walker !== null;) {
      const prev = walker.prev
      forEachStep(this, fn, walker, thisp)
      walker = prev
    }
  }

  forEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].head; walker !== null;) {
      const next = walker.next
      forEachStep(this, fn, walker, thisp)
      walker = next
    }
  }

  keys () {
    return this[LRU_LIST].toArray().map(k => k.key)
  }

  values () {
    return this[LRU_LIST].toArray().map(k => k.value)
  }

  reset () {
    if (this[DISPOSE] &&
        this[LRU_LIST] &&
        this[LRU_LIST].length) {
      this[LRU_LIST].forEach(hit => this[DISPOSE](hit.key, hit.value))
    }

    this[CACHE] = new Map() // hash of items by key
    this[LRU_LIST] = new Yallist() // list of items in order of use recency
    this[LENGTH] = 0 // length of items in the list
  }

  dump () {
    return this[LRU_LIST].map(hit =>
      isStale(this, hit) ? false : {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      }).toArray().filter(h => h)
  }

  dumpLru () {
    return this[LRU_LIST]
  }

  set (key, value, maxAge) {
    maxAge = maxAge || this[MAX_AGE]

    if (maxAge && typeof maxAge !== 'number')
      throw new TypeError('maxAge must be a number')

    const now = maxAge ? Date.now() : 0
    const len = this[LENGTH_CALCULATOR](value, key)

    if (this[CACHE].has(key)) {
      if (len > this[MAX]) {
        del(this, this[CACHE].get(key))
        return false
      }

      const node = this[CACHE].get(key)
      const item = node.value

      // dispose of the old one before overwriting
      // split out into 2 ifs for better coverage tracking
      if (this[DISPOSE]) {
        if (!this[NO_DISPOSE_ON_SET])
          this[DISPOSE](key, item.value)
      }

      item.now = now
      item.maxAge = maxAge
      item.value = value
      this[LENGTH] += len - item.length
      item.length = len
      this.get(key)
      trim(this)
      return true
    }

    const hit = new Entry(key, value, len, now, maxAge)

    // oversized objects fall out of cache automatically.
    if (hit.length > this[MAX]) {
      if (this[DISPOSE])
        this[DISPOSE](key, value)

      return false
    }

    this[LENGTH] += hit.length
    this[LRU_LIST].unshift(hit)
    this[CACHE].set(key, this[LRU_LIST].head)
    trim(this)
    return true
  }

  has (key) {
    if (!this[CACHE].has(key)) return false
    const hit = this[CACHE].get(key).value
    return !isStale(this, hit)
  }

  get (key) {
    return get(this, key, true)
  }

  peek (key) {
    return get(this, key, false)
  }

  pop () {
    const node = this[LRU_LIST].tail
    if (!node)
      return null

    del(this, node)
    return node.value
  }

  del (key) {
    del(this, this[CACHE].get(key))
  }

  load (arr) {
    // reset the cache
    this.reset()

    const now = Date.now()
    // A previous serialized cache has the most recent items first
    for (let l = arr.length - 1; l >= 0; l--) {
      const hit = arr[l]
      const expiresAt = hit.e || 0
      if (expiresAt === 0)
        // the item was created without expiration in a non aged cache
        this.set(hit.k, hit.v)
      else {
        const maxAge = expiresAt - now
        // dont add already expired items
        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge)
        }
      }
    }
  }

  prune () {
    this[CACHE].forEach((value, key) => get(this, key, false))
  }
}

const get = (self, key, doUse) => {
  const node = self[CACHE].get(key)
  if (node) {
    const hit = node.value
    if (isStale(self, hit)) {
      del(self, node)
      if (!self[ALLOW_STALE])
        return undefined
    } else {
      if (doUse) {
        if (self[UPDATE_AGE_ON_GET])
          node.value.now = Date.now()
        self[LRU_LIST].unshiftNode(node)
      }
    }
    return hit.value
  }
}

const isStale = (self, hit) => {
  if (!hit || (!hit.maxAge && !self[MAX_AGE]))
    return false

  const diff = Date.now() - hit.now
  return hit.maxAge ? diff > hit.maxAge
    : self[MAX_AGE] && (diff > self[MAX_AGE])
}

const trim = self => {
  if (self[LENGTH] > self[MAX]) {
    for (let walker = self[LRU_LIST].tail;
      self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      const prev = walker.prev
      del(self, walker)
      walker = prev
    }
  }
}

const del = (self, node) => {
  if (node) {
    const hit = node.value
    if (self[DISPOSE])
      self[DISPOSE](hit.key, hit.value)

    self[LENGTH] -= hit.length
    self[CACHE].delete(hit.key)
    self[LRU_LIST].removeNode(node)
  }
}

class Entry {
  constructor (key, value, length, now, maxAge) {
    this.key = key
    this.value = value
    this.length = length
    this.now = now
    this.maxAge = maxAge || 0
  }
}

const forEachStep = (self, fn, node, thisp) => {
  let hit = node.value
  if (isStale(self, hit)) {
    del(self, node)
    if (!self[ALLOW_STALE])
      hit = undefined
  }
  if (hit)
    fn.call(thisp, hit.value, hit.key, self)
}

module.exports = LRUCache


/***/ }),

/***/ "./node_modules/semver/classes/comparator.js":
/*!***************************************************!*\
  !*** ./node_modules/semver/classes/comparator.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ANY = Symbol('SemVer ANY')
// hoisted class for cyclic dependency
class Comparator {
  static get ANY () {
    return ANY
  }

  constructor (comp, options) {
    options = parseOptions(options)

    if (comp instanceof Comparator) {
      if (comp.loose === !!options.loose) {
        return comp
      } else {
        comp = comp.value
      }
    }

    debug('comparator', comp, options)
    this.options = options
    this.loose = !!options.loose
    this.parse(comp)

    if (this.semver === ANY) {
      this.value = ''
    } else {
      this.value = this.operator + this.semver.version
    }

    debug('comp', this)
  }

  parse (comp) {
    const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR]
    const m = comp.match(r)

    if (!m) {
      throw new TypeError(`Invalid comparator: ${comp}`)
    }

    this.operator = m[1] !== undefined ? m[1] : ''
    if (this.operator === '=') {
      this.operator = ''
    }

    // if it literally is just '>' or '' then allow anything.
    if (!m[2]) {
      this.semver = ANY
    } else {
      this.semver = new SemVer(m[2], this.options.loose)
    }
  }

  toString () {
    return this.value
  }

  test (version) {
    debug('Comparator.test', version, this.options.loose)

    if (this.semver === ANY || version === ANY) {
      return true
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    return cmp(version, this.operator, this.semver, this.options)
  }

  intersects (comp, options) {
    if (!(comp instanceof Comparator)) {
      throw new TypeError('a Comparator is required')
    }

    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false,
      }
    }

    if (this.operator === '') {
      if (this.value === '') {
        return true
      }
      return new Range(comp.value, options).test(this.value)
    } else if (comp.operator === '') {
      if (comp.value === '') {
        return true
      }
      return new Range(this.value, options).test(comp.semver)
    }

    const sameDirectionIncreasing =
      (this.operator === '>=' || this.operator === '>') &&
      (comp.operator === '>=' || comp.operator === '>')
    const sameDirectionDecreasing =
      (this.operator === '<=' || this.operator === '<') &&
      (comp.operator === '<=' || comp.operator === '<')
    const sameSemVer = this.semver.version === comp.semver.version
    const differentDirectionsInclusive =
      (this.operator === '>=' || this.operator === '<=') &&
      (comp.operator === '>=' || comp.operator === '<=')
    const oppositeDirectionsLessThan =
      cmp(this.semver, '<', comp.semver, options) &&
      (this.operator === '>=' || this.operator === '>') &&
        (comp.operator === '<=' || comp.operator === '<')
    const oppositeDirectionsGreaterThan =
      cmp(this.semver, '>', comp.semver, options) &&
      (this.operator === '<=' || this.operator === '<') &&
        (comp.operator === '>=' || comp.operator === '>')

    return (
      sameDirectionIncreasing ||
      sameDirectionDecreasing ||
      (sameSemVer && differentDirectionsInclusive) ||
      oppositeDirectionsLessThan ||
      oppositeDirectionsGreaterThan
    )
  }
}

module.exports = Comparator

const parseOptions = __webpack_require__(/*! ../internal/parse-options */ "./node_modules/semver/internal/parse-options.js")
const { re, t } = __webpack_require__(/*! ../internal/re */ "./node_modules/semver/internal/re.js")
const cmp = __webpack_require__(/*! ../functions/cmp */ "./node_modules/semver/functions/cmp.js")
const debug = __webpack_require__(/*! ../internal/debug */ "./node_modules/semver/internal/debug.js")
const SemVer = __webpack_require__(/*! ./semver */ "./node_modules/semver/classes/semver.js")
const Range = __webpack_require__(/*! ./range */ "./node_modules/semver/classes/range.js")


/***/ }),

/***/ "./node_modules/semver/classes/range.js":
/*!**********************************************!*\
  !*** ./node_modules/semver/classes/range.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// hoisted class for cyclic dependency
class Range {
  constructor (range, options) {
    options = parseOptions(options)

    if (range instanceof Range) {
      if (
        range.loose === !!options.loose &&
        range.includePrerelease === !!options.includePrerelease
      ) {
        return range
      } else {
        return new Range(range.raw, options)
      }
    }

    if (range instanceof Comparator) {
      // just put it in the set and return
      this.raw = range.value
      this.set = [[range]]
      this.format()
      return this
    }

    this.options = options
    this.loose = !!options.loose
    this.includePrerelease = !!options.includePrerelease

    // First, split based on boolean or ||
    this.raw = range
    this.set = range
      .split('||')
      // map the range to a 2d array of comparators
      .map(r => this.parseRange(r.trim()))
      // throw out any comparator lists that are empty
      // this generally means that it was not a valid range, which is allowed
      // in loose mode, but will still throw if the WHOLE range is invalid.
      .filter(c => c.length)

    if (!this.set.length) {
      throw new TypeError(`Invalid SemVer Range: ${range}`)
    }

    // if we have any that are not the null set, throw out null sets.
    if (this.set.length > 1) {
      // keep the first one, in case they're all null sets
      const first = this.set[0]
      this.set = this.set.filter(c => !isNullSet(c[0]))
      if (this.set.length === 0) {
        this.set = [first]
      } else if (this.set.length > 1) {
        // if we have any that are *, then the range is just *
        for (const c of this.set) {
          if (c.length === 1 && isAny(c[0])) {
            this.set = [c]
            break
          }
        }
      }
    }

    this.format()
  }

  format () {
    this.range = this.set
      .map((comps) => {
        return comps.join(' ').trim()
      })
      .join('||')
      .trim()
    return this.range
  }

  toString () {
    return this.range
  }

  parseRange (range) {
    range = range.trim()

    // memoize range parsing for performance.
    // this is a very hot path, and fully deterministic.
    const memoOpts = Object.keys(this.options).join(',')
    const memoKey = `parseRange:${memoOpts}:${range}`
    const cached = cache.get(memoKey)
    if (cached) {
      return cached
    }

    const loose = this.options.loose
    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
    const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE]
    range = range.replace(hr, hyphenReplace(this.options.includePrerelease))
    debug('hyphen replace', range)
    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
    range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace)
    debug('comparator trim', range)

    // `~ 1.2.3` => `~1.2.3`
    range = range.replace(re[t.TILDETRIM], tildeTrimReplace)

    // `^ 1.2.3` => `^1.2.3`
    range = range.replace(re[t.CARETTRIM], caretTrimReplace)

    // normalize spaces
    range = range.split(/\s+/).join(' ')

    // At this point, the range is completely trimmed and
    // ready to be split into comparators.

    let rangeList = range
      .split(' ')
      .map(comp => parseComparator(comp, this.options))
      .join(' ')
      .split(/\s+/)
      // >=0.0.0 is equivalent to *
      .map(comp => replaceGTE0(comp, this.options))

    if (loose) {
      // in loose mode, throw out any that are not valid comparators
      rangeList = rangeList.filter(comp => {
        debug('loose invalid filter', comp, this.options)
        return !!comp.match(re[t.COMPARATORLOOSE])
      })
    }
    debug('range list', rangeList)

    // if any comparators are the null set, then replace with JUST null set
    // if more than one comparator, remove any * comparators
    // also, don't include the same comparator more than once
    const rangeMap = new Map()
    const comparators = rangeList.map(comp => new Comparator(comp, this.options))
    for (const comp of comparators) {
      if (isNullSet(comp)) {
        return [comp]
      }
      rangeMap.set(comp.value, comp)
    }
    if (rangeMap.size > 1 && rangeMap.has('')) {
      rangeMap.delete('')
    }

    const result = [...rangeMap.values()]
    cache.set(memoKey, result)
    return result
  }

  intersects (range, options) {
    if (!(range instanceof Range)) {
      throw new TypeError('a Range is required')
    }

    return this.set.some((thisComparators) => {
      return (
        isSatisfiable(thisComparators, options) &&
        range.set.some((rangeComparators) => {
          return (
            isSatisfiable(rangeComparators, options) &&
            thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options)
              })
            })
          )
        })
      )
    })
  }

  // if ANY of the sets match ALL of its comparators, then pass
  test (version) {
    if (!version) {
      return false
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    for (let i = 0; i < this.set.length; i++) {
      if (testSet(this.set[i], version, this.options)) {
        return true
      }
    }
    return false
  }
}
module.exports = Range

const LRU = __webpack_require__(/*! lru-cache */ "./node_modules/lru-cache/index.js")
const cache = new LRU({ max: 1000 })

const parseOptions = __webpack_require__(/*! ../internal/parse-options */ "./node_modules/semver/internal/parse-options.js")
const Comparator = __webpack_require__(/*! ./comparator */ "./node_modules/semver/classes/comparator.js")
const debug = __webpack_require__(/*! ../internal/debug */ "./node_modules/semver/internal/debug.js")
const SemVer = __webpack_require__(/*! ./semver */ "./node_modules/semver/classes/semver.js")
const {
  re,
  t,
  comparatorTrimReplace,
  tildeTrimReplace,
  caretTrimReplace,
} = __webpack_require__(/*! ../internal/re */ "./node_modules/semver/internal/re.js")

const isNullSet = c => c.value === '<0.0.0-0'
const isAny = c => c.value === ''

// take a set of comparators and determine whether there
// exists a version which can satisfy it
const isSatisfiable = (comparators, options) => {
  let result = true
  const remainingComparators = comparators.slice()
  let testComparator = remainingComparators.pop()

  while (result && remainingComparators.length) {
    result = remainingComparators.every((otherComparator) => {
      return testComparator.intersects(otherComparator, options)
    })

    testComparator = remainingComparators.pop()
  }

  return result
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
const parseComparator = (comp, options) => {
  debug('comp', comp, options)
  comp = replaceCarets(comp, options)
  debug('caret', comp)
  comp = replaceTildes(comp, options)
  debug('tildes', comp)
  comp = replaceXRanges(comp, options)
  debug('xrange', comp)
  comp = replaceStars(comp, options)
  debug('stars', comp)
  return comp
}

const isX = id => !id || id.toLowerCase() === 'x' || id === '*'

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
const replaceTildes = (comp, options) =>
  comp.trim().split(/\s+/).map((c) => {
    return replaceTilde(c, options)
  }).join(' ')

const replaceTilde = (comp, options) => {
  const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE]
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('tilde', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0 <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0-0
      ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`
    } else if (pr) {
      debug('replaceTilde pr', pr)
      ret = `>=${M}.${m}.${p}-${pr
      } <${M}.${+m + 1}.0-0`
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0-0
      ret = `>=${M}.${m}.${p
      } <${M}.${+m + 1}.0-0`
    }

    debug('tilde return', ret)
    return ret
  })
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
const replaceCarets = (comp, options) =>
  comp.trim().split(/\s+/).map((c) => {
    return replaceCaret(c, options)
  }).join(' ')

const replaceCaret = (comp, options) => {
  debug('caret', comp, options)
  const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET]
  const z = options.includePrerelease ? '-0' : ''
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('caret', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      if (M === '0') {
        ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`
      } else {
        ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`
      }
    } else if (pr) {
      debug('replaceCaret pr', pr)
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p}-${pr
        } <${+M + 1}.0.0-0`
      }
    } else {
      debug('no pr')
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p
        } <${+M + 1}.0.0-0`
      }
    }

    debug('caret return', ret)
    return ret
  })
}

const replaceXRanges = (comp, options) => {
  debug('replaceXRanges', comp, options)
  return comp.split(/\s+/).map((c) => {
    return replaceXRange(c, options)
  }).join(' ')
}

const replaceXRange = (comp, options) => {
  comp = comp.trim()
  const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE]
  return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
    debug('xRange', comp, ret, gtlt, M, m, p, pr)
    const xM = isX(M)
    const xm = xM || isX(m)
    const xp = xm || isX(p)
    const anyX = xp

    if (gtlt === '=' && anyX) {
      gtlt = ''
    }

    // if we're including prereleases in the match, then we need
    // to fix this to -0, the lowest possible prerelease value
    pr = options.includePrerelease ? '-0' : ''

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0-0'
      } else {
        // nothing is forbidden
        ret = '*'
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0
      }
      p = 0

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        gtlt = '>='
        if (xm) {
          M = +M + 1
          m = 0
          p = 0
        } else {
          m = +m + 1
          p = 0
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<'
        if (xm) {
          M = +M + 1
        } else {
          m = +m + 1
        }
      }

      if (gtlt === '<') {
        pr = '-0'
      }

      ret = `${gtlt + M}.${m}.${p}${pr}`
    } else if (xm) {
      ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`
    } else if (xp) {
      ret = `>=${M}.${m}.0${pr
      } <${M}.${+m + 1}.0-0`
    }

    debug('xRange return', ret)

    return ret
  })
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
const replaceStars = (comp, options) => {
  debug('replaceStars', comp, options)
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[t.STAR], '')
}

const replaceGTE0 = (comp, options) => {
  debug('replaceGTE0', comp, options)
  return comp.trim()
    .replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '')
}

// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
const hyphenReplace = incPr => ($0,
  from, fM, fm, fp, fpr, fb,
  to, tM, tm, tp, tpr, tb) => {
  if (isX(fM)) {
    from = ''
  } else if (isX(fm)) {
    from = `>=${fM}.0.0${incPr ? '-0' : ''}`
  } else if (isX(fp)) {
    from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`
  } else if (fpr) {
    from = `>=${from}`
  } else {
    from = `>=${from}${incPr ? '-0' : ''}`
  }

  if (isX(tM)) {
    to = ''
  } else if (isX(tm)) {
    to = `<${+tM + 1}.0.0-0`
  } else if (isX(tp)) {
    to = `<${tM}.${+tm + 1}.0-0`
  } else if (tpr) {
    to = `<=${tM}.${tm}.${tp}-${tpr}`
  } else if (incPr) {
    to = `<${tM}.${tm}.${+tp + 1}-0`
  } else {
    to = `<=${to}`
  }

  return (`${from} ${to}`).trim()
}

const testSet = (set, version, options) => {
  for (let i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (let i = 0; i < set.length; i++) {
      debug(set[i].semver)
      if (set[i].semver === Comparator.ANY) {
        continue
      }

      if (set[i].semver.prerelease.length > 0) {
        const allowed = set[i].semver
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch) {
          return true
        }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false
  }

  return true
}


/***/ }),

/***/ "./node_modules/semver/classes/semver.js":
/*!***********************************************!*\
  !*** ./node_modules/semver/classes/semver.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const debug = __webpack_require__(/*! ../internal/debug */ "./node_modules/semver/internal/debug.js")
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __webpack_require__(/*! ../internal/constants */ "./node_modules/semver/internal/constants.js")
const { re, t } = __webpack_require__(/*! ../internal/re */ "./node_modules/semver/internal/re.js")

const parseOptions = __webpack_require__(/*! ../internal/parse-options */ "./node_modules/semver/internal/parse-options.js")
const { compareIdentifiers } = __webpack_require__(/*! ../internal/identifiers */ "./node_modules/semver/internal/identifiers.js")
class SemVer {
  constructor (version, options) {
    options = parseOptions(options)

    if (version instanceof SemVer) {
      if (version.loose === !!options.loose &&
          version.includePrerelease === !!options.includePrerelease) {
        return version
      } else {
        version = version.version
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      )
    }

    debug('SemVer', version, options)
    this.options = options
    this.loose = !!options.loose
    // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.
    this.includePrerelease = !!options.includePrerelease

    const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL])

    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    this.raw = version

    // these are actually numbers
    this.major = +m[1]
    this.minor = +m[2]
    this.patch = +m[3]

    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version')
    }

    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version')
    }

    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version')
    }

    // numberify any prerelease numeric ids
    if (!m[4]) {
      this.prerelease = []
    } else {
      this.prerelease = m[4].split('.').map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num
          }
        }
        return id
      })
    }

    this.build = m[5] ? m[5].split('.') : []
    this.format()
  }

  format () {
    this.version = `${this.major}.${this.minor}.${this.patch}`
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`
    }
    return this.version
  }

  toString () {
    return this.version
  }

  compare (other) {
    debug('SemVer.compare', this.version, this.options, other)
    if (!(other instanceof SemVer)) {
      if (typeof other === 'string' && other === this.version) {
        return 0
      }
      other = new SemVer(other, this.options)
    }

    if (other.version === this.version) {
      return 0
    }

    return this.compareMain(other) || this.comparePre(other)
  }

  compareMain (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    return (
      compareIdentifiers(this.major, other.major) ||
      compareIdentifiers(this.minor, other.minor) ||
      compareIdentifiers(this.patch, other.patch)
    )
  }

  comparePre (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    // NOT having a prerelease is > having one
    if (this.prerelease.length && !other.prerelease.length) {
      return -1
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0
    }

    let i = 0
    do {
      const a = this.prerelease[i]
      const b = other.prerelease[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  compareBuild (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    let i = 0
    do {
      const a = this.build[i]
      const b = other.build[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc (release, identifier) {
    switch (release) {
      case 'premajor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor = 0
        this.major++
        this.inc('pre', identifier)
        break
      case 'preminor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor++
        this.inc('pre', identifier)
        break
      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0
        this.inc('patch', identifier)
        this.inc('pre', identifier)
        break
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.
      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier)
        }
        this.inc('pre', identifier)
        break

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (
          this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0
        ) {
          this.major++
        }
        this.minor = 0
        this.patch = 0
        this.prerelease = []
        break
      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++
        }
        this.patch = 0
        this.prerelease = []
        break
      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) {
          this.patch++
        }
        this.prerelease = []
        break
      // This probably shouldn't be used publicly.
      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
      case 'pre':
        if (this.prerelease.length === 0) {
          this.prerelease = [0]
        } else {
          let i = this.prerelease.length
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++
              i = -2
            }
          }
          if (i === -1) {
            // didn't increment anything
            this.prerelease.push(0)
          }
        }
        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = [identifier, 0]
            }
          } else {
            this.prerelease = [identifier, 0]
          }
        }
        break

      default:
        throw new Error(`invalid increment argument: ${release}`)
    }
    this.format()
    this.raw = this.version
    return this
  }
}

module.exports = SemVer


/***/ }),

/***/ "./node_modules/semver/functions/clean.js":
/*!************************************************!*\
  !*** ./node_modules/semver/functions/clean.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const parse = __webpack_require__(/*! ./parse */ "./node_modules/semver/functions/parse.js")
const clean = (version, options) => {
  const s = parse(version.trim().replace(/^[=v]+/, ''), options)
  return s ? s.version : null
}
module.exports = clean


/***/ }),

/***/ "./node_modules/semver/functions/cmp.js":
/*!**********************************************!*\
  !*** ./node_modules/semver/functions/cmp.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const eq = __webpack_require__(/*! ./eq */ "./node_modules/semver/functions/eq.js")
const neq = __webpack_require__(/*! ./neq */ "./node_modules/semver/functions/neq.js")
const gt = __webpack_require__(/*! ./gt */ "./node_modules/semver/functions/gt.js")
const gte = __webpack_require__(/*! ./gte */ "./node_modules/semver/functions/gte.js")
const lt = __webpack_require__(/*! ./lt */ "./node_modules/semver/functions/lt.js")
const lte = __webpack_require__(/*! ./lte */ "./node_modules/semver/functions/lte.js")

const cmp = (a, op, b, loose) => {
  switch (op) {
    case '===':
      if (typeof a === 'object') {
        a = a.version
      }
      if (typeof b === 'object') {
        b = b.version
      }
      return a === b

    case '!==':
      if (typeof a === 'object') {
        a = a.version
      }
      if (typeof b === 'object') {
        b = b.version
      }
      return a !== b

    case '':
    case '=':
    case '==':
      return eq(a, b, loose)

    case '!=':
      return neq(a, b, loose)

    case '>':
      return gt(a, b, loose)

    case '>=':
      return gte(a, b, loose)

    case '<':
      return lt(a, b, loose)

    case '<=':
      return lte(a, b, loose)

    default:
      throw new TypeError(`Invalid operator: ${op}`)
  }
}
module.exports = cmp


/***/ }),

/***/ "./node_modules/semver/functions/coerce.js":
/*!*************************************************!*\
  !*** ./node_modules/semver/functions/coerce.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const parse = __webpack_require__(/*! ./parse */ "./node_modules/semver/functions/parse.js")
const { re, t } = __webpack_require__(/*! ../internal/re */ "./node_modules/semver/internal/re.js")

const coerce = (version, options) => {
  if (version instanceof SemVer) {
    return version
  }

  if (typeof version === 'number') {
    version = String(version)
  }

  if (typeof version !== 'string') {
    return null
  }

  options = options || {}

  let match = null
  if (!options.rtl) {
    match = version.match(re[t.COERCE])
  } else {
    // Find the right-most coercible string that does not share
    // a terminus with a more left-ward coercible string.
    // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
    //
    // Walk through the string checking with a /g regexp
    // Manually set the index so as to pick up overlapping matches.
    // Stop when we get a match that ends at the string end, since no
    // coercible string can be more right-ward without the same terminus.
    let next
    while ((next = re[t.COERCERTL].exec(version)) &&
        (!match || match.index + match[0].length !== version.length)
    ) {
      if (!match ||
            next.index + next[0].length !== match.index + match[0].length) {
        match = next
      }
      re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length
    }
    // leave it in a clean state
    re[t.COERCERTL].lastIndex = -1
  }

  if (match === null) {
    return null
  }

  return parse(`${match[2]}.${match[3] || '0'}.${match[4] || '0'}`, options)
}
module.exports = coerce


/***/ }),

/***/ "./node_modules/semver/functions/compare-build.js":
/*!********************************************************!*\
  !*** ./node_modules/semver/functions/compare-build.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const compareBuild = (a, b, loose) => {
  const versionA = new SemVer(a, loose)
  const versionB = new SemVer(b, loose)
  return versionA.compare(versionB) || versionA.compareBuild(versionB)
}
module.exports = compareBuild


/***/ }),

/***/ "./node_modules/semver/functions/compare-loose.js":
/*!********************************************************!*\
  !*** ./node_modules/semver/functions/compare-loose.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const compareLoose = (a, b) => compare(a, b, true)
module.exports = compareLoose


/***/ }),

/***/ "./node_modules/semver/functions/compare.js":
/*!**************************************************!*\
  !*** ./node_modules/semver/functions/compare.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const compare = (a, b, loose) =>
  new SemVer(a, loose).compare(new SemVer(b, loose))

module.exports = compare


/***/ }),

/***/ "./node_modules/semver/functions/diff.js":
/*!***********************************************!*\
  !*** ./node_modules/semver/functions/diff.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const parse = __webpack_require__(/*! ./parse */ "./node_modules/semver/functions/parse.js")
const eq = __webpack_require__(/*! ./eq */ "./node_modules/semver/functions/eq.js")

const diff = (version1, version2) => {
  if (eq(version1, version2)) {
    return null
  } else {
    const v1 = parse(version1)
    const v2 = parse(version2)
    const hasPre = v1.prerelease.length || v2.prerelease.length
    const prefix = hasPre ? 'pre' : ''
    const defaultResult = hasPre ? 'prerelease' : ''
    for (const key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return prefix + key
        }
      }
    }
    return defaultResult // may be undefined
  }
}
module.exports = diff


/***/ }),

/***/ "./node_modules/semver/functions/eq.js":
/*!*********************************************!*\
  !*** ./node_modules/semver/functions/eq.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const eq = (a, b, loose) => compare(a, b, loose) === 0
module.exports = eq


/***/ }),

/***/ "./node_modules/semver/functions/gt.js":
/*!*********************************************!*\
  !*** ./node_modules/semver/functions/gt.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const gt = (a, b, loose) => compare(a, b, loose) > 0
module.exports = gt


/***/ }),

/***/ "./node_modules/semver/functions/gte.js":
/*!**********************************************!*\
  !*** ./node_modules/semver/functions/gte.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const gte = (a, b, loose) => compare(a, b, loose) >= 0
module.exports = gte


/***/ }),

/***/ "./node_modules/semver/functions/inc.js":
/*!**********************************************!*\
  !*** ./node_modules/semver/functions/inc.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")

const inc = (version, release, options, identifier) => {
  if (typeof (options) === 'string') {
    identifier = options
    options = undefined
  }

  try {
    return new SemVer(
      version instanceof SemVer ? version.version : version,
      options
    ).inc(release, identifier).version
  } catch (er) {
    return null
  }
}
module.exports = inc


/***/ }),

/***/ "./node_modules/semver/functions/lt.js":
/*!*********************************************!*\
  !*** ./node_modules/semver/functions/lt.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const lt = (a, b, loose) => compare(a, b, loose) < 0
module.exports = lt


/***/ }),

/***/ "./node_modules/semver/functions/lte.js":
/*!**********************************************!*\
  !*** ./node_modules/semver/functions/lte.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const lte = (a, b, loose) => compare(a, b, loose) <= 0
module.exports = lte


/***/ }),

/***/ "./node_modules/semver/functions/major.js":
/*!************************************************!*\
  !*** ./node_modules/semver/functions/major.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const major = (a, loose) => new SemVer(a, loose).major
module.exports = major


/***/ }),

/***/ "./node_modules/semver/functions/minor.js":
/*!************************************************!*\
  !*** ./node_modules/semver/functions/minor.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const minor = (a, loose) => new SemVer(a, loose).minor
module.exports = minor


/***/ }),

/***/ "./node_modules/semver/functions/neq.js":
/*!**********************************************!*\
  !*** ./node_modules/semver/functions/neq.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const neq = (a, b, loose) => compare(a, b, loose) !== 0
module.exports = neq


/***/ }),

/***/ "./node_modules/semver/functions/parse.js":
/*!************************************************!*\
  !*** ./node_modules/semver/functions/parse.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { MAX_LENGTH } = __webpack_require__(/*! ../internal/constants */ "./node_modules/semver/internal/constants.js")
const { re, t } = __webpack_require__(/*! ../internal/re */ "./node_modules/semver/internal/re.js")
const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")

const parseOptions = __webpack_require__(/*! ../internal/parse-options */ "./node_modules/semver/internal/parse-options.js")
const parse = (version, options) => {
  options = parseOptions(options)

  if (version instanceof SemVer) {
    return version
  }

  if (typeof version !== 'string') {
    return null
  }

  if (version.length > MAX_LENGTH) {
    return null
  }

  const r = options.loose ? re[t.LOOSE] : re[t.FULL]
  if (!r.test(version)) {
    return null
  }

  try {
    return new SemVer(version, options)
  } catch (er) {
    return null
  }
}

module.exports = parse


/***/ }),

/***/ "./node_modules/semver/functions/patch.js":
/*!************************************************!*\
  !*** ./node_modules/semver/functions/patch.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const patch = (a, loose) => new SemVer(a, loose).patch
module.exports = patch


/***/ }),

/***/ "./node_modules/semver/functions/prerelease.js":
/*!*****************************************************!*\
  !*** ./node_modules/semver/functions/prerelease.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const parse = __webpack_require__(/*! ./parse */ "./node_modules/semver/functions/parse.js")
const prerelease = (version, options) => {
  const parsed = parse(version, options)
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
}
module.exports = prerelease


/***/ }),

/***/ "./node_modules/semver/functions/rcompare.js":
/*!***************************************************!*\
  !*** ./node_modules/semver/functions/rcompare.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const rcompare = (a, b, loose) => compare(b, a, loose)
module.exports = rcompare


/***/ }),

/***/ "./node_modules/semver/functions/rsort.js":
/*!************************************************!*\
  !*** ./node_modules/semver/functions/rsort.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compareBuild = __webpack_require__(/*! ./compare-build */ "./node_modules/semver/functions/compare-build.js")
const rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose))
module.exports = rsort


/***/ }),

/***/ "./node_modules/semver/functions/satisfies.js":
/*!****************************************************!*\
  !*** ./node_modules/semver/functions/satisfies.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Range = __webpack_require__(/*! ../classes/range */ "./node_modules/semver/classes/range.js")
const satisfies = (version, range, options) => {
  try {
    range = new Range(range, options)
  } catch (er) {
    return false
  }
  return range.test(version)
}
module.exports = satisfies


/***/ }),

/***/ "./node_modules/semver/functions/sort.js":
/*!***********************************************!*\
  !*** ./node_modules/semver/functions/sort.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compareBuild = __webpack_require__(/*! ./compare-build */ "./node_modules/semver/functions/compare-build.js")
const sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose))
module.exports = sort


/***/ }),

/***/ "./node_modules/semver/functions/valid.js":
/*!************************************************!*\
  !*** ./node_modules/semver/functions/valid.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const parse = __webpack_require__(/*! ./parse */ "./node_modules/semver/functions/parse.js")
const valid = (version, options) => {
  const v = parse(version, options)
  return v ? v.version : null
}
module.exports = valid


/***/ }),

/***/ "./node_modules/semver/index.js":
/*!**************************************!*\
  !*** ./node_modules/semver/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// just pre-load all the stuff that index.js lazily exports
const internalRe = __webpack_require__(/*! ./internal/re */ "./node_modules/semver/internal/re.js")
module.exports = {
  re: internalRe.re,
  src: internalRe.src,
  tokens: internalRe.t,
  SEMVER_SPEC_VERSION: (__webpack_require__(/*! ./internal/constants */ "./node_modules/semver/internal/constants.js").SEMVER_SPEC_VERSION),
  SemVer: __webpack_require__(/*! ./classes/semver */ "./node_modules/semver/classes/semver.js"),
  compareIdentifiers: (__webpack_require__(/*! ./internal/identifiers */ "./node_modules/semver/internal/identifiers.js").compareIdentifiers),
  rcompareIdentifiers: (__webpack_require__(/*! ./internal/identifiers */ "./node_modules/semver/internal/identifiers.js").rcompareIdentifiers),
  parse: __webpack_require__(/*! ./functions/parse */ "./node_modules/semver/functions/parse.js"),
  valid: __webpack_require__(/*! ./functions/valid */ "./node_modules/semver/functions/valid.js"),
  clean: __webpack_require__(/*! ./functions/clean */ "./node_modules/semver/functions/clean.js"),
  inc: __webpack_require__(/*! ./functions/inc */ "./node_modules/semver/functions/inc.js"),
  diff: __webpack_require__(/*! ./functions/diff */ "./node_modules/semver/functions/diff.js"),
  major: __webpack_require__(/*! ./functions/major */ "./node_modules/semver/functions/major.js"),
  minor: __webpack_require__(/*! ./functions/minor */ "./node_modules/semver/functions/minor.js"),
  patch: __webpack_require__(/*! ./functions/patch */ "./node_modules/semver/functions/patch.js"),
  prerelease: __webpack_require__(/*! ./functions/prerelease */ "./node_modules/semver/functions/prerelease.js"),
  compare: __webpack_require__(/*! ./functions/compare */ "./node_modules/semver/functions/compare.js"),
  rcompare: __webpack_require__(/*! ./functions/rcompare */ "./node_modules/semver/functions/rcompare.js"),
  compareLoose: __webpack_require__(/*! ./functions/compare-loose */ "./node_modules/semver/functions/compare-loose.js"),
  compareBuild: __webpack_require__(/*! ./functions/compare-build */ "./node_modules/semver/functions/compare-build.js"),
  sort: __webpack_require__(/*! ./functions/sort */ "./node_modules/semver/functions/sort.js"),
  rsort: __webpack_require__(/*! ./functions/rsort */ "./node_modules/semver/functions/rsort.js"),
  gt: __webpack_require__(/*! ./functions/gt */ "./node_modules/semver/functions/gt.js"),
  lt: __webpack_require__(/*! ./functions/lt */ "./node_modules/semver/functions/lt.js"),
  eq: __webpack_require__(/*! ./functions/eq */ "./node_modules/semver/functions/eq.js"),
  neq: __webpack_require__(/*! ./functions/neq */ "./node_modules/semver/functions/neq.js"),
  gte: __webpack_require__(/*! ./functions/gte */ "./node_modules/semver/functions/gte.js"),
  lte: __webpack_require__(/*! ./functions/lte */ "./node_modules/semver/functions/lte.js"),
  cmp: __webpack_require__(/*! ./functions/cmp */ "./node_modules/semver/functions/cmp.js"),
  coerce: __webpack_require__(/*! ./functions/coerce */ "./node_modules/semver/functions/coerce.js"),
  Comparator: __webpack_require__(/*! ./classes/comparator */ "./node_modules/semver/classes/comparator.js"),
  Range: __webpack_require__(/*! ./classes/range */ "./node_modules/semver/classes/range.js"),
  satisfies: __webpack_require__(/*! ./functions/satisfies */ "./node_modules/semver/functions/satisfies.js"),
  toComparators: __webpack_require__(/*! ./ranges/to-comparators */ "./node_modules/semver/ranges/to-comparators.js"),
  maxSatisfying: __webpack_require__(/*! ./ranges/max-satisfying */ "./node_modules/semver/ranges/max-satisfying.js"),
  minSatisfying: __webpack_require__(/*! ./ranges/min-satisfying */ "./node_modules/semver/ranges/min-satisfying.js"),
  minVersion: __webpack_require__(/*! ./ranges/min-version */ "./node_modules/semver/ranges/min-version.js"),
  validRange: __webpack_require__(/*! ./ranges/valid */ "./node_modules/semver/ranges/valid.js"),
  outside: __webpack_require__(/*! ./ranges/outside */ "./node_modules/semver/ranges/outside.js"),
  gtr: __webpack_require__(/*! ./ranges/gtr */ "./node_modules/semver/ranges/gtr.js"),
  ltr: __webpack_require__(/*! ./ranges/ltr */ "./node_modules/semver/ranges/ltr.js"),
  intersects: __webpack_require__(/*! ./ranges/intersects */ "./node_modules/semver/ranges/intersects.js"),
  simplifyRange: __webpack_require__(/*! ./ranges/simplify */ "./node_modules/semver/ranges/simplify.js"),
  subset: __webpack_require__(/*! ./ranges/subset */ "./node_modules/semver/ranges/subset.js"),
}


/***/ }),

/***/ "./node_modules/semver/internal/constants.js":
/*!***************************************************!*\
  !*** ./node_modules/semver/internal/constants.js ***!
  \***************************************************/
/***/ ((module) => {

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0'

const MAX_LENGTH = 256
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
/* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16

module.exports = {
  SEMVER_SPEC_VERSION,
  MAX_LENGTH,
  MAX_SAFE_INTEGER,
  MAX_SAFE_COMPONENT_LENGTH,
}


/***/ }),

/***/ "./node_modules/semver/internal/debug.js":
/*!***********************************************!*\
  !*** ./node_modules/semver/internal/debug.js ***!
  \***********************************************/
/***/ ((module) => {

const debug = (
  typeof process === 'object' &&
  process.env &&
  process.env.NODE_DEBUG &&
  /\bsemver\b/i.test(process.env.NODE_DEBUG)
) ? (...args) => console.error('SEMVER', ...args)
  : () => {}

module.exports = debug


/***/ }),

/***/ "./node_modules/semver/internal/identifiers.js":
/*!*****************************************************!*\
  !*** ./node_modules/semver/internal/identifiers.js ***!
  \*****************************************************/
/***/ ((module) => {

const numeric = /^[0-9]+$/
const compareIdentifiers = (a, b) => {
  const anum = numeric.test(a)
  const bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a)

module.exports = {
  compareIdentifiers,
  rcompareIdentifiers,
}


/***/ }),

/***/ "./node_modules/semver/internal/parse-options.js":
/*!*******************************************************!*\
  !*** ./node_modules/semver/internal/parse-options.js ***!
  \*******************************************************/
/***/ ((module) => {

// parse out just the options we care about so we always get a consistent
// obj with keys in a consistent order.
const opts = ['includePrerelease', 'loose', 'rtl']
const parseOptions = options =>
  !options ? {}
  : typeof options !== 'object' ? { loose: true }
  : opts.filter(k => options[k]).reduce((o, k) => {
    o[k] = true
    return o
  }, {})
module.exports = parseOptions


/***/ }),

/***/ "./node_modules/semver/internal/re.js":
/*!********************************************!*\
  !*** ./node_modules/semver/internal/re.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

const { MAX_SAFE_COMPONENT_LENGTH } = __webpack_require__(/*! ./constants */ "./node_modules/semver/internal/constants.js")
const debug = __webpack_require__(/*! ./debug */ "./node_modules/semver/internal/debug.js")
exports = module.exports = {}

// The actual regexps go on exports.re
const re = exports.re = []
const src = exports.src = []
const t = exports.t = {}
let R = 0

const createToken = (name, value, isGlobal) => {
  const index = R++
  debug(name, index, value)
  t[name] = index
  src[index] = value
  re[index] = new RegExp(value, isGlobal ? 'g' : undefined)
}

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*')
createToken('NUMERICIDENTIFIERLOOSE', '[0-9]+')

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

createToken('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*')

// ## Main Version
// Three dot-separated numeric identifiers.

createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})`)

createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})`)

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]
}|${src[t.NONNUMERICIDENTIFIER]})`)

createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]
}|${src[t.NONNUMERICIDENTIFIER]})`)

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]
}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`)

createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]
}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`)

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

createToken('BUILDIDENTIFIER', '[0-9A-Za-z-]+')

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]
}(?:\\.${src[t.BUILDIDENTIFIER]})*))`)

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

createToken('FULLPLAIN', `v?${src[t.MAINVERSION]
}${src[t.PRERELEASE]}?${
  src[t.BUILD]}?`)

createToken('FULL', `^${src[t.FULLPLAIN]}$`)

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]
}${src[t.PRERELEASELOOSE]}?${
  src[t.BUILD]}?`)

createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`)

createToken('GTLT', '((?:<|>)?=?)')

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`)
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`)

createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:${src[t.PRERELEASE]})?${
                     src[t.BUILD]}?` +
                   `)?)?`)

createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:${src[t.PRERELEASELOOSE]})?${
                          src[t.BUILD]}?` +
                        `)?)?`)

createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`)
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`)

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCE', `${'(^|[^\\d])' +
              '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:$|[^\\d])`)
createToken('COERCERTL', src[t.COERCE], true)

// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)')

createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true)
exports.tildeTrimReplace = '$1~'

createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`)
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`)

// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)')

createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true)
exports.caretTrimReplace = '$1^'

createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`)
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`)

// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`)
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`)

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]
}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true)
exports.comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` +
                   `\\s+-\\s+` +
                   `(${src[t.XRANGEPLAIN]})` +
                   `\\s*$`)

createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s+-\\s+` +
                        `(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s*$`)

// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*')
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$')
createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$')


/***/ }),

/***/ "./node_modules/semver/ranges/gtr.js":
/*!*******************************************!*\
  !*** ./node_modules/semver/ranges/gtr.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Determine if version is greater than all the versions possible in the range.
const outside = __webpack_require__(/*! ./outside */ "./node_modules/semver/ranges/outside.js")
const gtr = (version, range, options) => outside(version, range, '>', options)
module.exports = gtr


/***/ }),

/***/ "./node_modules/semver/ranges/intersects.js":
/*!**************************************************!*\
  !*** ./node_modules/semver/ranges/intersects.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Range = __webpack_require__(/*! ../classes/range */ "./node_modules/semver/classes/range.js")
const intersects = (r1, r2, options) => {
  r1 = new Range(r1, options)
  r2 = new Range(r2, options)
  return r1.intersects(r2)
}
module.exports = intersects


/***/ }),

/***/ "./node_modules/semver/ranges/ltr.js":
/*!*******************************************!*\
  !*** ./node_modules/semver/ranges/ltr.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const outside = __webpack_require__(/*! ./outside */ "./node_modules/semver/ranges/outside.js")
// Determine if version is less than all the versions possible in the range
const ltr = (version, range, options) => outside(version, range, '<', options)
module.exports = ltr


/***/ }),

/***/ "./node_modules/semver/ranges/max-satisfying.js":
/*!******************************************************!*\
  !*** ./node_modules/semver/ranges/max-satisfying.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const Range = __webpack_require__(/*! ../classes/range */ "./node_modules/semver/classes/range.js")

const maxSatisfying = (versions, range, options) => {
  let max = null
  let maxSV = null
  let rangeObj = null
  try {
    rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v
        maxSV = new SemVer(max, options)
      }
    }
  })
  return max
}
module.exports = maxSatisfying


/***/ }),

/***/ "./node_modules/semver/ranges/min-satisfying.js":
/*!******************************************************!*\
  !*** ./node_modules/semver/ranges/min-satisfying.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const Range = __webpack_require__(/*! ../classes/range */ "./node_modules/semver/classes/range.js")
const minSatisfying = (versions, range, options) => {
  let min = null
  let minSV = null
  let rangeObj = null
  try {
    rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v
        minSV = new SemVer(min, options)
      }
    }
  })
  return min
}
module.exports = minSatisfying


/***/ }),

/***/ "./node_modules/semver/ranges/min-version.js":
/*!***************************************************!*\
  !*** ./node_modules/semver/ranges/min-version.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const Range = __webpack_require__(/*! ../classes/range */ "./node_modules/semver/classes/range.js")
const gt = __webpack_require__(/*! ../functions/gt */ "./node_modules/semver/functions/gt.js")

const minVersion = (range, loose) => {
  range = new Range(range, loose)

  let minver = new SemVer('0.0.0')
  if (range.test(minver)) {
    return minver
  }

  minver = new SemVer('0.0.0-0')
  if (range.test(minver)) {
    return minver
  }

  minver = null
  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i]

    let setMin = null
    comparators.forEach((comparator) => {
      // Clone to avoid manipulating the comparator's semver object.
      const compver = new SemVer(comparator.semver.version)
      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++
          } else {
            compver.prerelease.push(0)
          }
          compver.raw = compver.format()
          /* fallthrough */
        case '':
        case '>=':
          if (!setMin || gt(compver, setMin)) {
            setMin = compver
          }
          break
        case '<':
        case '<=':
          /* Ignore maximum versions */
          break
        /* istanbul ignore next */
        default:
          throw new Error(`Unexpected operation: ${comparator.operator}`)
      }
    })
    if (setMin && (!minver || gt(minver, setMin))) {
      minver = setMin
    }
  }

  if (minver && range.test(minver)) {
    return minver
  }

  return null
}
module.exports = minVersion


/***/ }),

/***/ "./node_modules/semver/ranges/outside.js":
/*!***********************************************!*\
  !*** ./node_modules/semver/ranges/outside.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const Comparator = __webpack_require__(/*! ../classes/comparator */ "./node_modules/semver/classes/comparator.js")
const { ANY } = Comparator
const Range = __webpack_require__(/*! ../classes/range */ "./node_modules/semver/classes/range.js")
const satisfies = __webpack_require__(/*! ../functions/satisfies */ "./node_modules/semver/functions/satisfies.js")
const gt = __webpack_require__(/*! ../functions/gt */ "./node_modules/semver/functions/gt.js")
const lt = __webpack_require__(/*! ../functions/lt */ "./node_modules/semver/functions/lt.js")
const lte = __webpack_require__(/*! ../functions/lte */ "./node_modules/semver/functions/lte.js")
const gte = __webpack_require__(/*! ../functions/gte */ "./node_modules/semver/functions/gte.js")

const outside = (version, range, hilo, options) => {
  version = new SemVer(version, options)
  range = new Range(range, options)

  let gtfn, ltefn, ltfn, comp, ecomp
  switch (hilo) {
    case '>':
      gtfn = gt
      ltefn = lte
      ltfn = lt
      comp = '>'
      ecomp = '>='
      break
    case '<':
      gtfn = lt
      ltefn = gte
      ltfn = gt
      comp = '<'
      ecomp = '<='
      break
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"')
  }

  // If it satisfies the range it is not outside
  if (satisfies(version, range, options)) {
    return false
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i]

    let high = null
    let low = null

    comparators.forEach((comparator) => {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator
      low = low || comparator
      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator
      }
    })

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false
    }
  }
  return true
}

module.exports = outside


/***/ }),

/***/ "./node_modules/semver/ranges/simplify.js":
/*!************************************************!*\
  !*** ./node_modules/semver/ranges/simplify.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
const satisfies = __webpack_require__(/*! ../functions/satisfies.js */ "./node_modules/semver/functions/satisfies.js")
const compare = __webpack_require__(/*! ../functions/compare.js */ "./node_modules/semver/functions/compare.js")
module.exports = (versions, range, options) => {
  const set = []
  let first = null
  let prev = null
  const v = versions.sort((a, b) => compare(a, b, options))
  for (const version of v) {
    const included = satisfies(version, range, options)
    if (included) {
      prev = version
      if (!first) {
        first = version
      }
    } else {
      if (prev) {
        set.push([first, prev])
      }
      prev = null
      first = null
    }
  }
  if (first) {
    set.push([first, null])
  }

  const ranges = []
  for (const [min, max] of set) {
    if (min === max) {
      ranges.push(min)
    } else if (!max && min === v[0]) {
      ranges.push('*')
    } else if (!max) {
      ranges.push(`>=${min}`)
    } else if (min === v[0]) {
      ranges.push(`<=${max}`)
    } else {
      ranges.push(`${min} - ${max}`)
    }
  }
  const simplified = ranges.join(' || ')
  const original = typeof range.raw === 'string' ? range.raw : String(range)
  return simplified.length < original.length ? simplified : range
}


/***/ }),

/***/ "./node_modules/semver/ranges/subset.js":
/*!**********************************************!*\
  !*** ./node_modules/semver/ranges/subset.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Range = __webpack_require__(/*! ../classes/range.js */ "./node_modules/semver/classes/range.js")
const Comparator = __webpack_require__(/*! ../classes/comparator.js */ "./node_modules/semver/classes/comparator.js")
const { ANY } = Comparator
const satisfies = __webpack_require__(/*! ../functions/satisfies.js */ "./node_modules/semver/functions/satisfies.js")
const compare = __webpack_require__(/*! ../functions/compare.js */ "./node_modules/semver/functions/compare.js")

// Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true

const subset = (sub, dom, options = {}) => {
  if (sub === dom) {
    return true
  }

  sub = new Range(sub, options)
  dom = new Range(dom, options)
  let sawNonNull = false

  OUTER: for (const simpleSub of sub.set) {
    for (const simpleDom of dom.set) {
      const isSub = simpleSubset(simpleSub, simpleDom, options)
      sawNonNull = sawNonNull || isSub !== null
      if (isSub) {
        continue OUTER
      }
    }
    // the null set is a subset of everything, but null simple ranges in
    // a complex range should be ignored.  so if we saw a non-null range,
    // then we know this isn't a subset, but if EVERY simple range was null,
    // then it is a subset.
    if (sawNonNull) {
      return false
    }
  }
  return true
}

const simpleSubset = (sub, dom, options) => {
  if (sub === dom) {
    return true
  }

  if (sub.length === 1 && sub[0].semver === ANY) {
    if (dom.length === 1 && dom[0].semver === ANY) {
      return true
    } else if (options.includePrerelease) {
      sub = [new Comparator('>=0.0.0-0')]
    } else {
      sub = [new Comparator('>=0.0.0')]
    }
  }

  if (dom.length === 1 && dom[0].semver === ANY) {
    if (options.includePrerelease) {
      return true
    } else {
      dom = [new Comparator('>=0.0.0')]
    }
  }

  const eqSet = new Set()
  let gt, lt
  for (const c of sub) {
    if (c.operator === '>' || c.operator === '>=') {
      gt = higherGT(gt, c, options)
    } else if (c.operator === '<' || c.operator === '<=') {
      lt = lowerLT(lt, c, options)
    } else {
      eqSet.add(c.semver)
    }
  }

  if (eqSet.size > 1) {
    return null
  }

  let gtltComp
  if (gt && lt) {
    gtltComp = compare(gt.semver, lt.semver, options)
    if (gtltComp > 0) {
      return null
    } else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<=')) {
      return null
    }
  }

  // will iterate one or zero times
  for (const eq of eqSet) {
    if (gt && !satisfies(eq, String(gt), options)) {
      return null
    }

    if (lt && !satisfies(eq, String(lt), options)) {
      return null
    }

    for (const c of dom) {
      if (!satisfies(eq, String(c), options)) {
        return false
      }
    }

    return true
  }

  let higher, lower
  let hasDomLT, hasDomGT
  // if the subset has a prerelease, we need a comparator in the superset
  // with the same tuple and a prerelease, or it's not a subset
  let needDomLTPre = lt &&
    !options.includePrerelease &&
    lt.semver.prerelease.length ? lt.semver : false
  let needDomGTPre = gt &&
    !options.includePrerelease &&
    gt.semver.prerelease.length ? gt.semver : false
  // exception: <1.2.3-0 is the same as <1.2.3
  if (needDomLTPre && needDomLTPre.prerelease.length === 1 &&
      lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
    needDomLTPre = false
  }

  for (const c of dom) {
    hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>='
    hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<='
    if (gt) {
      if (needDomGTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length &&
            c.semver.major === needDomGTPre.major &&
            c.semver.minor === needDomGTPre.minor &&
            c.semver.patch === needDomGTPre.patch) {
          needDomGTPre = false
        }
      }
      if (c.operator === '>' || c.operator === '>=') {
        higher = higherGT(gt, c, options)
        if (higher === c && higher !== gt) {
          return false
        }
      } else if (gt.operator === '>=' && !satisfies(gt.semver, String(c), options)) {
        return false
      }
    }
    if (lt) {
      if (needDomLTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length &&
            c.semver.major === needDomLTPre.major &&
            c.semver.minor === needDomLTPre.minor &&
            c.semver.patch === needDomLTPre.patch) {
          needDomLTPre = false
        }
      }
      if (c.operator === '<' || c.operator === '<=') {
        lower = lowerLT(lt, c, options)
        if (lower === c && lower !== lt) {
          return false
        }
      } else if (lt.operator === '<=' && !satisfies(lt.semver, String(c), options)) {
        return false
      }
    }
    if (!c.operator && (lt || gt) && gtltComp !== 0) {
      return false
    }
  }

  // if there was a < or >, and nothing in the dom, then must be false
  // UNLESS it was limited by another range in the other direction.
  // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
  if (gt && hasDomLT && !lt && gtltComp !== 0) {
    return false
  }

  if (lt && hasDomGT && !gt && gtltComp !== 0) {
    return false
  }

  // we needed a prerelease range in a specific tuple, but didn't get one
  // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
  // because it includes prereleases in the 1.2.3 tuple
  if (needDomGTPre || needDomLTPre) {
    return false
  }

  return true
}

// >=1.2.3 is lower than >1.2.3
const higherGT = (a, b, options) => {
  if (!a) {
    return b
  }
  const comp = compare(a.semver, b.semver, options)
  return comp > 0 ? a
    : comp < 0 ? b
    : b.operator === '>' && a.operator === '>=' ? b
    : a
}

// <=1.2.3 is higher than <1.2.3
const lowerLT = (a, b, options) => {
  if (!a) {
    return b
  }
  const comp = compare(a.semver, b.semver, options)
  return comp < 0 ? a
    : comp > 0 ? b
    : b.operator === '<' && a.operator === '<=' ? b
    : a
}

module.exports = subset


/***/ }),

/***/ "./node_modules/semver/ranges/to-comparators.js":
/*!******************************************************!*\
  !*** ./node_modules/semver/ranges/to-comparators.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Range = __webpack_require__(/*! ../classes/range */ "./node_modules/semver/classes/range.js")

// Mostly just for testing and legacy API reasons
const toComparators = (range, options) =>
  new Range(range, options).set
    .map(comp => comp.map(c => c.value).join(' ').trim().split(' '))

module.exports = toComparators


/***/ }),

/***/ "./node_modules/semver/ranges/valid.js":
/*!*********************************************!*\
  !*** ./node_modules/semver/ranges/valid.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Range = __webpack_require__(/*! ../classes/range */ "./node_modules/semver/classes/range.js")
const validRange = (range, options) => {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, options).range || '*'
  } catch (er) {
    return null
  }
}
module.exports = validRange


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/yallist/iterator.js":
/*!******************************************!*\
  !*** ./node_modules/yallist/iterator.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";

module.exports = function (Yallist) {
  Yallist.prototype[Symbol.iterator] = function* () {
    for (let walker = this.head; walker; walker = walker.next) {
      yield walker.value
    }
  }
}


/***/ }),

/***/ "./node_modules/yallist/yallist.js":
/*!*****************************************!*\
  !*** ./node_modules/yallist/yallist.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = Yallist

Yallist.Node = Node
Yallist.create = Yallist

function Yallist (list) {
  var self = this
  if (!(self instanceof Yallist)) {
    self = new Yallist()
  }

  self.tail = null
  self.head = null
  self.length = 0

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item)
    })
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i])
    }
  }

  return self
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list')
  }

  var next = node.next
  var prev = node.prev

  if (next) {
    next.prev = prev
  }

  if (prev) {
    prev.next = next
  }

  if (node === this.head) {
    this.head = next
  }
  if (node === this.tail) {
    this.tail = prev
  }

  node.list.length--
  node.next = null
  node.prev = null
  node.list = null

  return next
}

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var head = this.head
  node.list = this
  node.next = head
  if (head) {
    head.prev = node
  }

  this.head = node
  if (!this.tail) {
    this.tail = node
  }
  this.length++
}

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var tail = this.tail
  node.list = this
  node.prev = tail
  if (tail) {
    tail.next = node
  }

  this.tail = node
  if (!this.head) {
    this.head = node
  }
  this.length++
}

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined
  }

  var res = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) {
    this.tail.next = null
  } else {
    this.head = null
  }
  this.length--
  return res
}

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined
  }

  var res = this.head.value
  this.head = this.head.next
  if (this.head) {
    this.head.prev = null
  } else {
    this.tail = null
  }
  this.length--
  return res
}

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.next
  }
}

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.prev
  }
}

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.next
  }
  return res
}

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.prev
  }
  return res
}

Yallist.prototype.reduce = function (fn, initial) {
  var acc
  var walker = this.head
  if (arguments.length > 1) {
    acc = initial
  } else if (this.head) {
    walker = this.head.next
    acc = this.head.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i)
    walker = walker.next
  }

  return acc
}

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc
  var walker = this.tail
  if (arguments.length > 1) {
    acc = initial
  } else if (this.tail) {
    walker = this.tail.prev
    acc = this.tail.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i)
    walker = walker.prev
  }

  return acc
}

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.next
  }
  return arr
}

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.prev
  }
  return arr
}

Yallist.prototype.slice = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.splice = function (start, deleteCount, ...nodes) {
  if (start > this.length) {
    start = this.length - 1
  }
  if (start < 0) {
    start = this.length + start;
  }

  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next
  }

  var ret = []
  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value)
    walker = this.removeNode(walker)
  }
  if (walker === null) {
    walker = this.tail
  }

  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev
  }

  for (var i = 0; i < nodes.length; i++) {
    walker = insert(this, walker, nodes[i])
  }
  return ret;
}

Yallist.prototype.reverse = function () {
  var head = this.head
  var tail = this.tail
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev
    walker.prev = walker.next
    walker.next = p
  }
  this.head = tail
  this.tail = head
  return this
}

function insert (self, node, value) {
  var inserted = node === self.head ?
    new Node(value, null, node, self) :
    new Node(value, node, node.next, self)

  if (inserted.next === null) {
    self.tail = inserted
  }
  if (inserted.prev === null) {
    self.head = inserted
  }

  self.length++

  return inserted
}

function push (self, item) {
  self.tail = new Node(item, self.tail, null, self)
  if (!self.head) {
    self.head = self.tail
  }
  self.length++
}

function unshift (self, item) {
  self.head = new Node(item, null, self.head, self)
  if (!self.tail) {
    self.tail = self.head
  }
  self.length++
}

function Node (value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list)
  }

  this.list = list
  this.value = value

  if (prev) {
    prev.next = this
    this.prev = prev
  } else {
    this.prev = null
  }

  if (next) {
    next.prev = this
    this.next = next
  } else {
    this.next = null
  }
}

try {
  // add if support for Symbol.iterator is present
  __webpack_require__(/*! ./iterator.js */ "./node_modules/yallist/iterator.js")(Yallist)
} catch (er) {}


/***/ }),

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectCard": () => (/* binding */ createProjectCard)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _projectUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectUI.js */ "./src/projectUI.js");
/* harmony import */ var _img_cog_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/cog.svg */ "./src/img/cog.svg");
/* harmony import */ var _img_expand_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/expand.svg */ "./src/img/expand.svg");
/* harmony import */ var _img_finish_task_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/finish-task.svg */ "./src/img/finish-task.svg");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semver */ "./node_modules/semver/index.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _taskUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taskUI */ "./src/taskUI.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content */ "./src/content.js");














// Create cards to display projects in workspace



// Create a card to represent the project in small detail, and return reference to the DOM object of that card.
// The card is divided vertically into different sections which are customizable here
const createProjectCard = (project) => {

    // Will be returned
    const card = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': 'card project-card'})
   

    const titleBar = () => {
        const titleBar = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': 'card-button-bar'});    
            const title = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('h3', {'class': 'card-title'});
                title.textContent = project.content.getTitle();
            const settings = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': 'button-container'})    
            const settingsButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_cog_svg__WEBPACK_IMPORTED_MODULE_2__, 'alt': 'settings', 'class': 'card-button settings-cog'})
                settings.addEventListener('click', (e) => openSettings(e.target, project))
            titleBar.appendChild(title);
            settings.appendChild(settingsButton);
            titleBar.appendChild(settings);

        return titleBar;
    }


    const content = () => {

        const goal = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('p', {'class': 'card-content card-goal'});
        goal.textContent = project.content.getGoal();

        return goal;
    }

    const deadlineContainer = () => {

        const container = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': 'card-deadline deadline-container'})
            const daysLeft = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': 'card-deadline-days'});
            const dueDate = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': 'card-due-date'})
                dueDate.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(project.content.getDeadline(), 'MM/dd/yy');
            daysLeft.textContent = `${getDaysRemaining(project)} days left`;
            
            container.appendChild(daysLeft);
            container.appendChild(dueDate);

        return container;
    }
   
    const buttonBar = () => {

        const buttonBar = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': 'card-button-bar'})

            const expandButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_expand_svg__WEBPACK_IMPORTED_MODULE_3__, 'alt': 'Expand project', 'class': 'card-button'})
                expandButton.addEventListener('click', () => (0,_projectUI_js__WEBPACK_IMPORTED_MODULE_1__.renderProject)(project));

            const percentageContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': 'card-info card-percent-container'})
            const percentageLeft = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('p', {'class': 'card-percentage'})
            const projectCount = project.tasks.getTaskList();


            if (projectCount.length > 0){
                const completedCount = project.tasks.getCompletedTasks();
                const completionPercentage = Math.round((completedCount.length /projectCount.length) * 100)

                percentageLeft.textContent = `complete: ${completedCount.length}/${projectCount.length} (${completionPercentage}%)`
                if (completionPercentage === 100){
                    console.log('complete')
                    percentageContainer.classList.add("card-completed")
                   
                }
                percentageContainer.appendChild(percentageLeft)
            }
            

        
            const finishButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_finish_task_svg__WEBPACK_IMPORTED_MODULE_4__, 'alt': 'Complete project', 'class': 'card-button'});
                finishButton.addEventListener('click', () => (0,_projectUI_js__WEBPACK_IMPORTED_MODULE_1__.finishProject)(project));
        
                
        
        buttonBar.appendChild(finishButton)
        buttonBar.appendChild(percentageContainer)
        buttonBar.appendChild(expandButton);
        return buttonBar;
    }

    card.appendChild(titleBar());
    card.appendChild(content());
    card.appendChild(deadlineContainer());
    card.appendChild(buttonBar());

    return card;
}

// Simply returns days between due date and current date
const getDaysRemaining = (project) => {

    const dueDate = project.content.getDeadline();
    const today = Date.now();
    
    
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((dueDate - today), 'dd') 


}

const openSettings = (parentButton, project) => {

    console.log('open settings menu')
    const parentCard = parentButton.parentNode;
    console.log(parentCard)
    // popup menu
    parentCard.classList.add('active-settings-button')

    settingsMenu(parentCard, project)

}

// Gear menu for quick access to various options
const settingsMenu = (card, project) => {
    console.log(card);
    console.log('settings menu')
    const container = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': 'menu-container shift-left'});
    container.style.visibility = 'visible';
    const menu = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': 'context-menu', 'id': 'cog-menu'});
    const menuItems = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('ul', {'class': 'menu-items menu-list'});

    const open = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('li', {'class': 'menu-open menu-item', });
    open.textContent = 'open';
        open.addEventListener('click', () => {
            (0,_projectUI_js__WEBPACK_IMPORTED_MODULE_1__.renderProject)(project);
            close();
        });

    const edit = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('li', {'class': 'menu-edit menu-item'});
    edit.textContent = 'edit';
        edit.addEventListener('click', () => {
            (0,_projectUI_js__WEBPACK_IMPORTED_MODULE_1__.renderProject)(project);
            (0,_projectUI_js__WEBPACK_IMPORTED_MODULE_1__.editProjectBox)(project);
            close();
        })
    const toggle = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('li', {'class': 'menu-toggle menu-item'});
    toggle.textContent = `change priority(${(0,_taskUI__WEBPACK_IMPORTED_MODULE_6__.priorityStyle)(project.content).priorityText.toLowerCase()})`
        toggle.addEventListener('click', () => {
            ;(0,_projectUI_js__WEBPACK_IMPORTED_MODULE_1__.cyclePriority)(project);
        });
    const finish = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('li', {'class': 'menu-finish menu-item'});
            finish.textContent = 'toggle completion';
            finish.addEventListener('click', () => {(0,_projectUI_js__WEBPACK_IMPORTED_MODULE_1__.finishProject)(project)})        
        
    const del = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('li', {'class': 'menu-delete menu-item'});
    del.textContent = 'delete project';
        del.addEventListener('click', () => {
            console.log('cli')
            ;(0,_projectUI_js__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(project);
        })

   


    menuItems.appendChild(open);
    menuItems.appendChild(edit);
    menuItems.appendChild(toggle);
    menuItems.appendChild(finish);
    menuItems.appendChild(del);

    menu.appendChild(menuItems);
    container.appendChild(menu);
    card.appendChild(container);

    const close = () => {

        container.remove();

    }


}











/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewProject": () => (/* binding */ addNewProject),
/* harmony export */   "content": () => (/* binding */ createWorkSpace),
/* harmony export */   "projectContainer": () => (/* binding */ projectContainer),
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "renderProjectList": () => (/* binding */ renderProjectList),
/* harmony export */   "switchDisplayStyle": () => (/* binding */ switchDisplayStyle)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _img_note_plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/note-plus.svg */ "./src/img/note-plus.svg");
/* harmony import */ var _projectUI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectUI.js */ "./src/projectUI.js");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards */ "./src/cards.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ "./src/project.js");








//  Content space that holds projects

// Create workspace

const createWorkSpace = () => {

    const main = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': 'main-container', 'id': 'workspace-container'});
    
    const workspace = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': 'workspace', 'id': 'workspace'});
    
    const addProjectButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_note_plus_svg__WEBPACK_IMPORTED_MODULE_1__, 'alt': "Create new project", 'class': 'content-button', 'id': 'add-new-project'});
        addProjectButton.addEventListener('click', () => {
            
            workspace.insertBefore(addNewProject(), addProjectButton);            
            
        });
    workspace.appendChild(addProjectButton);
    main.appendChild(workspace);

    return main;
}

const projectContainer = () => {

    const container = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'id': 'project-container'});


    return container;
}

const addNewProject = (proj) => {
    let project;
    (proj != null) ? project = proj : project = (0,_project__WEBPACK_IMPORTED_MODULE_4__.Project)();
    const card = (0,_cards__WEBPACK_IMPORTED_MODULE_3__.createProjectCard)(project);
    projectList.addProject(project)
 
    
    return card;

}

const projectList = ((project) => {

    let list = [];

    const addProject = (project) => {
        list.push(project)
        console.log(getProjects())

    }

    const removeProject = (project) => {

        list.splice(project, 1);
        renderProjectList();
    }


    const getProjects = () => list;

    return {addProject, getProjects, removeProject}

})();

const renderProjectList = () => {
    
    const workSpace = document.querySelector('#workspace')
    const workSpaceButton = document.querySelector('#add-new-project')

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {

        card.remove()
    })
    console.log(projectList.getProjects())
    for (let project of projectList.getProjects()){
        
        const card = (0,_cards__WEBPACK_IMPORTED_MODULE_3__.createProjectCard)(project)
        workSpace.insertBefore(card, workSpaceButton)

    }

}

const switchDisplayStyle = () => {

    const style = document.querySelector('.tab-container');
   
    const cards = document.querySelectorAll('.card');
    if (style != null){
        style.classList.remove('tab-container');

    
        cards.forEach(tab => tab.classList.remove('tab'));
    }
    else{
        const display = document.querySelector('.workspace');
        display.classList.add('tab-container');
        cards.forEach(card => card.classList.add('tab'));
    }

}

// refresh screen and display projects contained in list





// Button for adding new project


// Array of projects and their IDs (key/value pair)

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectButton": () => (/* binding */ addProjectPopUp),
/* harmony export */   "createListeners": () => (/* binding */ createListeners),
/* harmony export */   "renderProject": () => (/* binding */ renderProject),
/* harmony export */   "renderTask": () => (/* binding */ renderTask)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _default_project_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-project.json */ "./src/default-project.json");
/* harmony import */ var _default_task_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-task.json */ "./src/default-task.json");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content */ "./src/content.js");
/* harmony import */ var _img_close_task_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/close-task.svg */ "./src/img/close-task.svg");
/* harmony import */ var _img_pencil_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/pencil.svg */ "./src/img/pencil.svg");
/* harmony import */ var _img_save_task_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/save-task.svg */ "./src/img/save-task.svg");
/* harmony import */ var _img_finish_task_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/finish-task.svg */ "./src/img/finish-task.svg");
/* harmony import */ var _img_delete_task_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/delete-task.svg */ "./src/img/delete-task.svg");
/* harmony import */ var _img_close_project_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/close-project.svg */ "./src/img/close-project.svg");
/* harmony import */ var _img_edit_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/edit.svg */ "./src/img/edit.svg");
/* harmony import */ var _img_save_content_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/save-content.svg */ "./src/img/save-content.svg");
/* harmony import */ var _img_minicheckbox_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/minicheckbox.svg */ "./src/img/minicheckbox.svg");
/* harmony import */ var _img_minicheckmarked_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img/minicheckmarked.svg */ "./src/img/minicheckmarked.svg");
/* harmony import */ var _img_delete_alert_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./img/delete-alert.svg */ "./src/img/delete-alert.svg");








// images


















// Interface for adding tasks and projects.
const content = document.querySelector("#content")


// Render a full project
const renderProject = (projectObject) => {
   
    // Container to attach project to
    const parent = document.querySelector("#content");

    // Remove interaction with workspace
    const main = document.querySelector("#workspace-container");
    main.classList.add('blockscreen');

    let proj = projectObject.content;

    const render = () => {
    
    // Create dom skeleton 
    const projectTitle = proj.getTitle();
    const project = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': "project", "id": `${projectTitle }-id`})
    const content = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': 'project-content', 'id': `${projectTitle}-content`})
   
    // Loading of data into specified containers
    const renderData = () => {
        
        // create titgle bar
        const title = () => {


            const title = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('h2', {'class': "project-title project-item"});
            title.textContent = projectTitle;
           

           
            return title;
        }
        content.appendChild(title());
        
        const description = () => {
            const description = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': "project-desc project-item", 'id': `${projectTitle }-desc`});
            description.textContent = proj.getDescription();
            return description;
        }
        content.appendChild(description())

        // Deadline/Priority/Urgency Container (These will interact a lot)
        const deadline = () => {

            const deadlineContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeContainer)("Deadline");
            const deadlineContent = deadlineContainer.querySelector('.deadline-content');     
            const deadline = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': "project-deadline project-item", "id": `${proj.deadline}-deadline`});
            const priorityButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'button', 'class': "priority-button project-item", 'value': proj.getPriority()});
            deadline.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_17__["default"])(proj.getDeadline(), "MM.dd.yyyy");
            deadlineContent.appendChild(deadline);
            deadlineContainer.appendChild(deadlineContent);    
            deadlineContent.appendChild(priorityButton);
        
            return deadlineContainer;
        }
        content.appendChild(deadline())

        // Also known as objective
        const goal = () => {
            const goal = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': "project-goal project-item", "id": `${projectTitle }-goal`});
            goal.textContent = proj.getGoal();
            return goal;
        }
        content.appendChild(goal()); 
    }
    renderData();

    // Task Container
    const tasks = () => {
        const tasks = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeContainer)("Tasks");
        const addTask = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type':'button', 'id': 'add-task-button', 'value': '++'})
       
   
        tasks.appendChild(addTask)
        
        // Attaches a new task to both the DOM element and Project Objects
        addTask.addEventListener('click', (e, ) => {
            
            createTask(e.target.parentNode, projectObject);
            
  
        })
        return tasks;
    }
    content.appendChild(tasks());
   

    const projectButtons = () => {

        const buttonContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': 'button-bar', 'id': 'project-button-bar'});

        const closeProject = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_close_project_svg__WEBPACK_IMPORTED_MODULE_11__,'class': 'project-button', 'id': 'close-project', 'value': 'Close'});
        const editProject = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_edit_svg__WEBPACK_IMPORTED_MODULE_12__, 'class': 'project-button', 'id': 'edit-project', 'value': 'Edit'})
        editProject.addEventListener('click', () => {
            

        editProjectBox(projectObject);
            
            
            
        })
        
        buttonContainer.appendChild(closeProject)
        buttonContainer.appendChild(editProject)

        return buttonContainer;
    }
    
    project.appendChild(projectButtons());

    project.appendChild(content)

   

    
    return project;
  
    }

    const project = render();

    
    parent.appendChild(project);
    createListeners(projectObject);
    renderTaskList(projectObject);
  
    

}

// Proj is original project being edited;
const editProjectBox = (proj) => {

    // Create temporary project to save to, allow for future refactoring
    const tempProj = (0,_project__WEBPACK_IMPORTED_MODULE_4__.Project)();
    
    const content = tempProj.content;

    // Create save button and hide edit button
    const buttonBar = document.querySelector('.button-bar');
    const editButton = document.querySelector('#edit-project');
    editButton.classList.add('hidden');
    const saveButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_save_content_svg__WEBPACK_IMPORTED_MODULE_13__, 'class': 'project-button edit-button', 'id': 'save-project-button', 'value': 'Save'});
    
    // Copy content to temporary project object
    saveButton.addEventListener('click', () => {

        content.setTitle(newTitle.value);
        content.setDescription(newDescription.value);
        content.setGoal(newGoal.value);
        saveButton.remove();
        editButton.classList.remove('hidden');

        saveToProject();  

    })

    // Save temporary project content to original project and refresh
    // The extra step of creating a temporary project is for future editability/refactoring
    const saveToProject = () => {

        proj.content.setTitle(content.getTitle());
        proj.content.setDescription(content.getDescription());
        proj.content.setGoal(content.getGoal());
        
        closeProject(proj);
        renderProject(proj);
    }


    buttonBar.appendChild(saveButton);


    // Functions return DOM object, not its content explicitely
    const newTitle = editTitle('project');
    const newDescription = editDescription('project');
    const  newGoal = editGoal('project');
       
}

// Enable editing of title of project. Returns DOM Object. Target is string either 'project' or 'task'
const editTitle = (target) => {

    const title = document.querySelector(`.${target}-title`);
   
    const editTitleBox = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('textarea',  {'name': 'textarea', 'placeholder': title.innerText, "class": `edit-${target}-box ${target}-title ${target}-item`});
    editTitleBox.textContent = title.innerText;
    title.parentNode.insertBefore(editTitleBox, title);
    console.log(editTitleBox.textContent)
    title.remove();
    return editTitleBox;

}

// Enable editing of description/content of project. Returns DOM object.
const editDescription = (target) => {
    
    const desc = document.querySelector(`.${target}-desc`);
    
    
    const editDescriptionBox = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('textarea', {'name':'textarea', 'placeholder': desc.innerText, 'class': `edit-${target}-box ${target}-item ${target}-desc`});
    editDescriptionBox.textContent = desc.innerText;
    desc.parentNode.insertBefore(editDescriptionBox, desc);
    desc.remove();
    return editDescriptionBox;

}

// Enable editing of goal content.  Returns DOM object.
const editGoal = (target) => {

    const goal = document.querySelector(`.${target}-goal`);
    const goalText = goal.innerText;
    console.log(goalText);
    const editGoalBox = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('textarea', {'placeholder': goalText, 'class': `edit-${target}-box ${target}-goal ${target}-item`})
    editGoalBox.textContent = goalText;
    goal.parentNode.insertBefore(editGoalBox, goal);
    goal.remove();
    return editGoalBox;

}

// Show a full task on screen
const renderTask = (task) => {

    
    const oldTaskDOM = document.querySelector(".task");
    if (oldTaskDOM != undefined) oldTaskDOM.remove();
    
    // DOM element to attach self to
    const content = document.querySelector("#content");

    const projectDOM = document.querySelector('.project');
    projectDOM.classList.add('blockproject')

    // The actual render object 
    const taskPopup = () => {
        const newTask = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {class: "task", id: `${task.title}-${task.getID()}`, 'data-id': task.getID()})

        const title = () => {

            const titleBar = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': "task-title-bar"});
            
            const editButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_pencil_svg__WEBPACK_IMPORTED_MODULE_7__, 'class': 'task-button', 'id': 'task-edit-button', 'value': 'Edit'});
            editButton.addEventListener('click', () => editTask(task));
            titleBar.appendChild(editButton);


            const title = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('h2', {'class': "task-title"});
            title.textContent = task.getTitle();;
            titleBar.appendChild(title);            


            const completeButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_finish_task_svg__WEBPACK_IMPORTED_MODULE_9__, 'class': 'task-button', 'id': 'task-complete-button', 'value': 'CHK'});
            completeButton.addEventListener('click', () => {
                // set task as complete
            })
            titleBar.appendChild(completeButton)

            return titleBar;
        }

        const description = () => {


        const description = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': "task-desc", 'id': `${task.title}-desc`});
        description.textContent = task.getDescription();
                return description;
        }
      
            // Creating a DOM container to hold priority and deadline display
        const priority = () => {

            const priority = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeContainer)('task-deadline');
            const priorityHeader = priority.querySelector('.task-deadline-header');
            priorityHeader.textContent = "Deadline"
            const priorityButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'button', 'class': "priority-button task-item", 'value': task.getPriority()});
            priorityButton.addEventListener('click', (e) => changePriority(e));

            const deadlineContent = priority.querySelector('.task-deadline-content');     
            const deadline = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': "task-deadline task-item", "id": `${task.deadline}-deadline`});
            deadline.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_17__["default"])(task.getDeadline(), "MM.dd.yyyy");
            deadlineContent.appendChild(deadline);


            priority.appendChild(deadlineContent);    
            deadlineContent.appendChild(priorityButton);
            priority.value = task.priority;
        
            return priority;
        }

        // Creation of goal element
        const goal = () => {
            const goal = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': "task-goal-header", "id": `${task.title}-goal`});
            const goalHeader = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('h3', {'class': 'goal-title'})
            const goalContent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('p', {'class': 'task-goal'});
            goalContent.textContent = task.getGoal();
            goalHeader.textContent = "Goal"
            goal.appendChild(goalHeader)
            goal.appendChild(goalContent)
        
            return goal;
        }

        const buttonBar = () => {

            const buttons = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)("div", {'class': 'button-bar', 'id': 'task-buttons'});
            const deleteButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_delete_task_svg__WEBPACK_IMPORTED_MODULE_10__, 'alt': 'Delete task', 'class': 'task-button delete-task', 'id': 'delete-task', 'value': 'Delete'})
            deleteButton.addEventListener('click', (e) => {
                deleteTask(task);
                closeTask(e.target.parentNode.parentNode);
            });
            buttons.appendChild(deleteButton);
          
            const closeButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_close_project_svg__WEBPACK_IMPORTED_MODULE_11__,'alt': 'Close Task', 'class': 'task-button close-task'});
            closeButton.addEventListener('click', (e) => closeTask(e.target.parentNode.parentNode));
            buttons.appendChild(closeButton);                
        

            return buttons;

        }


        newTask.appendChild(title());
        newTask.appendChild(description());
        newTask.appendChild(priority());
        newTask.appendChild(goal());
        newTask.appendChild(buttonBar());


        return newTask;
        
    }
    
    content.appendChild(taskPopup());
}

//Handles display of 'Tasks list'
const renderTaskList = (project) => {

    const list = document.querySelector('.tasks-container')
   
    const miniList = document.querySelectorAll('.mini-task');
    miniList.forEach(mini => mini.remove())
    for (let task of project.tasks.getTaskList()){
        console.log(task);
        const minitask = createMiniTask(project, task);


        if (task.getStatus() === true){
            minitask.classList.add('completed');        
        }
        else minitask.classList.remove('completed');

        list.insertBefore(minitask, list.lastElementChild);

    }
    
}


const createTask = (container, project) => {

    const task = (0,_todo__WEBPACK_IMPORTED_MODULE_3__.Task)();
    task.setParent(project);
    
   
    const taskList = (container)
    taskList.insertBefore(createMiniTask(project, task), taskList.lastElementChild);
   
    // Add to object
    project.tasks.addTask(task);
    task.getID();
    renderTask(task);
    editTask(task);

}

// Would like to refactor this to share with edit project functions if possible
const editTask = (task) => {
    
    //const project = task.getParent();
    const tempTask = (0,_todo__WEBPACK_IMPORTED_MODULE_3__.Task)();

    const content = tempTask;

    const buttonBar = document.querySelector('.task-title-bar');
    const title = document.querySelector('.task-title');
    const editButton = document.querySelector('#task-edit-button');
    editButton.classList.add('hidden');
    const saveButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_save_task_svg__WEBPACK_IMPORTED_MODULE_8__, 'class': 'task-edit-button task-button', 'id': 'task-edit-button', 'value': 'Save'})

    saveButton.addEventListener('click', () => {

        content.setTitle(newTitle.value);
        content.setDescription(newDescription.value);
        content.setGoal(newGoal.value);
        saveButton.remove();
        editButton.classList.remove('hidden');

        saveToTask();
    })

    const saveToTask = () => {
        console.log(task)
        task.setTitle(content.getTitle());
        task.setDescription(content.getDescription());
        task.setGoal(content.getGoal());
   
        closeTask(buttonBar.parentNode);
        closeProject();
        renderProject(task.getParent());
        renderTask(task);

    }


    buttonBar.insertBefore(saveButton, title);

    const newTitle = editTitle('task');
    const newDescription = editDescription('task');
    const newGoal = editGoal('task');


}

// Deletes task from parent project
const deleteTask = (task) => {

    console.log(task);

     const project = task.getParent();
    project.tasks.removeTask(task);
    renderTaskList(project);
}

// Delete the DOM element associated with task
const closeTask = (DOM) => {

    const project = document.querySelector('.project');
    project.classList.remove('blockproject');

    if (DOM != null) DOM.remove();
}

const toggleTaskStatus = (task) => {

    if (task == null) return;

    if (task.getStatus() === false){
        task.setStatus(true);
        task.getParent().tasks.completeTask(task);
    }
    else{
        task.setStatus(false)
        task.getParent().tasks.removeComplete(task);
    }
  

    renderTaskList(task.getParent());

}

// Creates a mini-task DOM element out of task object
const createMiniTask = (project, task) => {
    
    const minitask = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class':'mini-task'})
   
    if (task.getStatus() === true){
        minitask.classList.add('completed');
       
        
    }

    //console.log(task);
    // Delete mini
    const removeMini = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_delete_alert_svg__WEBPACK_IMPORTED_MODULE_16__, 'class': 'mini-button mini-delete', 'value': '-'})
    // Pass on DOM of Minilist and Task to delete
    removeMini.addEventListener('click', (e) => deleteMini(task));
    // Mark mini as complete
    const finishMini = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_minicheckbox_svg__WEBPACK_IMPORTED_MODULE_14__, 'class': 'mini-button mini-finish', 'value': 'F'});
    finishMini.addEventListener('click', (e) => toggleTaskStatus(task));
    //Open Task in full view
    const miniButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'button', 'class': 'mini-button mini-title', 'value': `${task.getTitle()}`});
        
    
    
    miniButton.addEventListener('click', () => renderTask(task))
    minitask.appendChild(removeMini);
    minitask.appendChild(miniButton);
    minitask.appendChild(finishMini)
    let bgcolor = minitask.style.backgroundColor;
    const title = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('h4', {'class': 'mini-task-title'})
    
    
    switch (task.getPriority()){

        case 1: 
             bgcolor = "red";
            break;
        case 2:
            bgcolor = "yellow";
            break;
        case 3:
            bgcolor = "green";
            break;
            
            

    }

    
    minitask.appendChild(title);


    return minitask;
}

const deleteMini = (task) => {

    
    const project = task.getParent();

    console.log(project.tasks.getTaskList());
    project.tasks.removeTask(task);
    
    const taskCard = document.querySelector('.task');
    if (taskCard != null){
        if (taskCard.getAttribute('data-id') == task.getID()) closeTask(taskCard);
    }

    // Refresh task list
    renderTaskList(project);

}


// Buttons and Listeners
const createListeners = (project) => {

    // Create listeners for buttons
    const edit = document.querySelector('#edit-project');
    //console.log(project.content.getPriority())
    const close = document.querySelector('#close-project');
    close.addEventListener('click', () => closeProject());
    // Content button (expand content)
    const tasks = document.querySelector('#tasks-button');
    
    const deadline = document.querySelector('#deadline-button');
    const priority = document.querySelector('.priority-button.project-item');
    priority.addEventListener('click', (e) => {

        const currentPriority = project.content.getPriority();
      //  console.log(currentPriority);

       
        const updatedPriority = ((currentPriority) % 3) + 1;
        project.content.setPriority(updatedPriority);
        e.target.value = updatedPriority;
        

    })   

}


const closeProject = () => {

    const project = document.querySelector('.project')
    
    //Reenable interaction 
    const main = document.querySelector('#workspace-container');
    main.classList.remove('blockscreen')
    
   console.log(main)
    project.remove();

    (0,_content__WEBPACK_IMPORTED_MODULE_5__.renderProjectList)();



}


const addProjectPopUp = () => {
    
    const button = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)("button", {"id": "project-button", "value": "Pressit","textContent": "Press"})
    button.addEventListener("click", () => {
        
    })


    return button;

}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ "./src/content.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
// Menu for manipulating content 





const menu = () => {
const header = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.element)('div', {'id': 'header'});
const stats = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.element)('div', {'id': 'stats'});
const subHeader = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.element)('div', {'id': 'sub-header'});

const toggleStyle = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.element)('input', {'type': 'button', 'id': 'style-toggle', 'value': 'switch mode'});
    toggleStyle.addEventListener('click', () => {(0,_content__WEBPACK_IMPORTED_MODULE_0__.switchDisplayStyle)()})

header.appendChild(toggleStyle)
header.appendChild(stats);
header.appendChild(subHeader);


return header;
}



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _default_project_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-project.json */ "./src/default-project.json");




// Create an object containing todo objects


// Project object factory
// Project(title, date, deadline, priority, description, goal)
// Load defaults from default-project.json
const Project = (title = _default_project_json__WEBPACK_IMPORTED_MODULE_1__.title, deadline = _default_project_json__WEBPACK_IMPORTED_MODULE_1__.deadline, priority = _default_project_json__WEBPACK_IMPORTED_MODULE_1__.priority, description = _default_project_json__WEBPACK_IMPORTED_MODULE_1__.description, goal = _default_project_json__WEBPACK_IMPORTED_MODULE_1__.goal ) => {

    // Define own info with Task object
    //const info = Task(defaultProject.title, defaultProject.deadline, defaultProject.priority, defaultProject.description)
    
    deadline = new Date(deadline);
   
    const startDate = new Date(Date.now())
    const timeRemaining = deadline - Date.now();
    
    // Will assign task ID sequentially
    let taskID = 0;

    let _taskList = [];
    let _completedTasks = [];
    let _incompleteTasks = [];

   

    // All task related functions
    const tasks = (() => {

        const addTask = (task) => {
             setTaskID(task);
            _taskList.push(task)
        }
    
        const removeTask = (task) => {
            
            const taskElement = _taskList.indexOf(task);
            _taskList.splice(taskElement, 1); 
        }
    
        const completeTask = (task => {

            //if (_completedTasks.includes(task)) return;

            _completedTasks.push(_taskList.slice(task));
             //removeTask(task)
    
        })

        const removeComplete = (task) => {

            const taskElement = _completedTasks.indexOf(task);
            _completedTasks.splice(taskElement, 1); 
        }

        const setTaskID = (task) => {
            task.setID(taskID);
            taskID++;
        }

        const clearFinishedList = () => {
            _completedTasks = [];
        }



        const getTaskList = () => _taskList;
        const getCompletedTasks = () => _completedTasks;
        const getInCompleteTasks = () => _incompleteTasks;
        const taskCount = _taskList.length;

        return {clearFinishedList, removeComplete, taskCount, addTask, removeTask, completeTask, getTaskList, getCompletedTasks, getInCompleteTasks, _taskList}

    })();
  
    // Content related functions
    const content = (() => {
        
        const setTitle = (newTitle) => {
            title = newTitle;
        }
        const getTitle = () => title;

        const setDeadline = (newDeadline) => deadline = newDeadline;
        const getDeadline = () => deadline;

        const setDescription = (newDescription) => {
            description = newDescription
        }
        const getDescription = () => description;

        const setPriority = (newPriority) => {

            priority = newPriority;
        }
        const getPriority = () => priority;

        const setGoal = (newGoal) => goal = newGoal;
        const getGoal = () => goal;

        const getContent = () => {
            return {title, deadline, priority, description};
        }

        return {setTitle, getTitle, getDeadline, setDeadline, setDescription, getDescription, getContent, setPriority, getPriority, setGoal, getGoal, }
})();






  return { tasks, _taskList, content}
}




/***/ }),

/***/ "./src/projectUI.js":
/*!**************************!*\
  !*** ./src/projectUI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectButton": () => (/* binding */ addProjectPopUp),
/* harmony export */   "closeProject": () => (/* binding */ closeProject),
/* harmony export */   "createListeners": () => (/* binding */ createListeners),
/* harmony export */   "createMiniTask": () => (/* binding */ createMiniTask),
/* harmony export */   "cyclePriority": () => (/* binding */ cyclePriority),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "editDescription": () => (/* binding */ editDescription),
/* harmony export */   "editGoal": () => (/* binding */ editGoal),
/* harmony export */   "editProjectBox": () => (/* binding */ editProjectBox),
/* harmony export */   "editTitle": () => (/* binding */ editTitle),
/* harmony export */   "finishProject": () => (/* binding */ finishProject),
/* harmony export */   "renderProject": () => (/* binding */ renderProject),
/* harmony export */   "renderTask": () => (/* reexport safe */ _taskUI__WEBPACK_IMPORTED_MODULE_6__.renderTask),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _default_project_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-project.json */ "./src/default-project.json");
/* harmony import */ var _default_task_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-task.json */ "./src/default-task.json");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content */ "./src/content.js");
/* harmony import */ var _taskUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taskUI */ "./src/taskUI.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings */ "./src/settings.js");
/* harmony import */ var _img_close_project_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/close-project.svg */ "./src/img/close-project.svg");
/* harmony import */ var _img_edit_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/edit.svg */ "./src/img/edit.svg");
/* harmony import */ var _img_save_content_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/save-content.svg */ "./src/img/save-content.svg");
/* harmony import */ var _img_sort_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/sort.svg */ "./src/img/sort.svg");
/* harmony import */ var _img_minicheckbox_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/minicheckbox.svg */ "./src/img/minicheckbox.svg");
/* harmony import */ var _img_minicheckmarked_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/minicheckmarked.svg */ "./src/img/minicheckmarked.svg");
/* harmony import */ var _img_delete_alert_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/delete-alert.svg */ "./src/img/delete-alert.svg");
/* harmony import */ var _img_finish_task_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img/finish-task.svg */ "./src/img/finish-task.svg");
/* harmony import */ var _img_calendar_edit_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./img/calendar-edit.svg */ "./src/img/calendar-edit.svg");
/* harmony import */ var _img_plus_box_multiple_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./img/plus-box-multiple.svg */ "./src/img/plus-box-multiple.svg");











// images













// Interface for adding tasks and projects.
const content = document.querySelector("#content")
const TASKLISTMAX = 7;

// Render a full project
const renderProject = (projectObject) => {
   
    // Container to attach project to
    const parent = document.querySelector("#workspace");

    // Remove interaction with rest of workspace;
    const container = document.querySelector("#project-container");
    container.style.display = 'flex';
    //const cards = document.querySelectorAll('.card');
    //cards.forEach(card => card.classList.add('blockscreen'))


    let proj = projectObject.content;

    const render = () => {
    
    // Create dom skeleton 
    const projectTitle = proj.getTitle();
    const project = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': "project", "id": `${projectTitle }-id`})
    const content = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': 'project-content', 'id': `${projectTitle}-content`})
   
    // Loading of data into specified containers
    const renderData = () => {
        
        // create titgle bar
        const title = () => {


            const title = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('h2', {'class': "project-title project-item"});
            title.textContent = projectTitle;
           

           
            return title;
        }
        content.appendChild(title());
        
        const description = () => {
            const description = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': "project-desc project-item", 'id': `${projectTitle }-desc`});
            description.textContent = proj.getDescription();
            return description;
        }
        content.appendChild(description())

        // Deadline/Priority/Urgency Container (These will interact a lot)
        const deadline = () => {

            const deadlineContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeContainer)("Deadline", _img_calendar_edit_svg__WEBPACK_IMPORTED_MODULE_16__);
            const deadlineContent = deadlineContainer.querySelector('.deadline-content');     
            const deadline = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': "project-deadline project-item", "id": `${proj.deadline}-deadline`});
            const priorityButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'button', 'class': `priority-button project-item ${(0,_taskUI__WEBPACK_IMPORTED_MODULE_6__.priorityStyle)(proj).priorityValue}`, 'value': (0,_taskUI__WEBPACK_IMPORTED_MODULE_6__.priorityStyle)(proj).priorityText});
            deadline.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_18__["default"])(proj.getDeadline(), "MM.dd.yyyy");
            deadlineContent.appendChild(deadline);
            deadlineContainer.appendChild(deadlineContent);    
            deadlineContent.appendChild(priorityButton);
        
            return deadlineContainer;
        }
        content.appendChild(deadline())

        // Also known as objective
        const goal = () => {
            const goal = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': "project-goal project-item", "id": `${projectTitle }-goal`});
            goal.textContent = proj.getGoal();
            return goal;
        }
        content.appendChild(goal()); 
    }
    renderData();

    // Task Container
    const tasks = () => {

        // tooltips and menu
        const sortMenu = () => {
            const menu = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeMenu)('sort', 'sort tasks');
            
            const header = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('h5', {'class': 'menu-item menu-header', 'id': 'sort-test'})
            header.textContent = 'sort';
            menu.appendChild(header);


            const sort = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'id': 'sort'})


        
            const sortButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_sort_svg__WEBPACK_IMPORTED_MODULE_11__, 'class': 'container-button', 'id':'mini-sort', 'alt': 'Sort tasks', 'data-sort': ''});
          
            sort.appendChild(sortButton);
            
            sort.appendChild(menu);
          

            sortButton.addEventListener('click', (e) => {
                
                // testing
                _settings__WEBPACK_IMPORTED_MODULE_7__.UI.setSort('deadline');
                
            
                console.log('..')
    
            })
           
            return sort;
        }


        const tasks = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeContainer)("Tasks", _img_finish_task_svg__WEBPACK_IMPORTED_MODULE_15__);

        
   
      
        const addTask = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type':'image', 'src': _img_plus_box_multiple_svg__WEBPACK_IMPORTED_MODULE_17__, 'id': 'add-task-button', 'alt': 'add mini task'})
        const titleContainer = tasks.firstElementChild;
        titleContainer.insertBefore(sortMenu(), titleContainer.firstElementChild); 
        //const miniTitleContainer = document.querySelector("#tasks-title-container");
        // miniTitleContainer.appendChild(sort);
        console.log(projectObject.tasks.getTaskList().length)

        tasks.appendChild(addTask)

        // Attaches a new task to both the DOM element and Project Objects

        addTask.addEventListener('click', (e, ) => {
            
            //createTask(e.target.parentNode, projectObject);
            createTask(projectObject);
            renderTaskList(projectObject);
  
        })

        

        return tasks;
    }


    content.appendChild(tasks());
   

    const projectButtons = () => {

        const buttonContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': 'button-bar', 'id': 'project-button-bar'});

        const closeProject = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_close_project_svg__WEBPACK_IMPORTED_MODULE_8__,'class': 'project-button', 'id': 'close-project', 'value': 'Close'});
        const editProject = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_edit_svg__WEBPACK_IMPORTED_MODULE_9__, 'class': 'project-button', 'id': 'edit-project', 'value': 'Edit'})
        editProject.addEventListener('click', () => {
            

        editProjectBox(projectObject);
            
            
            
        })
        
        buttonContainer.appendChild(closeProject)
        buttonContainer.appendChild(editProject)

        return buttonContainer;
    }
    
    project.appendChild(projectButtons());

    project.appendChild(content)

   

    
    return project;
  
    }

    const project = render();

    
    parent.appendChild(project);
    createListeners(projectObject);
    renderTaskList(projectObject);
  
    

}

const createTask = (project) => {

    const task = (0,_todo__WEBPACK_IMPORTED_MODULE_3__.Task)();
    task.setParent(project);
    project.tasks.addTask(task);
}

// Proj is original project being edited;
const editProjectBox = (proj) => {

    // Create temporary project to save to, allow for future refactoring
    const tempProj = (0,_project__WEBPACK_IMPORTED_MODULE_4__.Project)();
    
    const content = tempProj.content;

    // Create save button and hide edit button
    const buttonBar = document.querySelector('.button-bar');
    const editButton = document.querySelector('#edit-project');
    editButton.classList.add('hidden');
    const saveButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_save_content_svg__WEBPACK_IMPORTED_MODULE_10__, 'class': 'project-button edit-button', 'id': 'save-project-button', 'value': 'Save'});
    
    // Copy content to temporary project object
    saveButton.addEventListener('click', () => {

        content.setTitle(newTitle.value);
        content.setDescription(newDescription.value);
        content.setGoal(newGoal.value);
        saveButton.remove();
        editButton.classList.remove('hidden');

        saveToProject();  

    })

    // Save temporary project content to original project and refresh
    // The extra step of creating a temporary project is for future editability/refactoring
    const saveToProject = () => {

        proj.content.setTitle(content.getTitle());
        proj.content.setDescription(content.getDescription());
        proj.content.setGoal(content.getGoal());
        
        closeProject(proj);
        renderProject(proj);
    }


    buttonBar.appendChild(saveButton);


    // Functions return DOM object, not its content explicitely
    const newTitle = editTitle('project');
    const newDescription = editDescription('project');
    const  newGoal = editGoal('project');
       
}

// Enable editing of title of project. Returns DOM Object. Target is string either 'project' or 'task'
const editTitle = (target) => {

    const title = document.querySelector(`.${target}-title`);
   
    const editTitleBox = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('textarea',  {'name': 'textarea', 'placeholder': title.innerText, "class": `edit-${target}-box ${target}-title ${target}-item`});
    editTitleBox.textContent = title.innerText;
    title.parentNode.insertBefore(editTitleBox, title);
    console.log(editTitleBox.textContent)
    title.remove();
    return editTitleBox;

}

// Enable editing of description/content of project. Returns DOM object.
const editDescription = (target) => {
    
    const desc = document.querySelector(`.${target}-desc`);
    
    
    const editDescriptionBox = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('textarea', {'name':'textarea', 'placeholder': desc.innerText, 'class': `edit-${target}-box ${target}-item ${target}-desc`});
    editDescriptionBox.textContent = desc.innerText;
    desc.parentNode.insertBefore(editDescriptionBox, desc);
    desc.remove();
    return editDescriptionBox;

}

// Enable editing of goal content.  Returns DOM object.
const editGoal = (target) => {

    const goal = document.querySelector(`.${target}-goal`);
    const goalText = goal.innerText;
    console.log(goalText);
    const editGoalBox = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('textarea', {'placeholder': goalText, 'class': `edit-${target}-box ${target}-goal ${target}-item`})
    editGoalBox.textContent = goalText;
    goal.parentNode.insertBefore(editGoalBox, goal);
    goal.remove();
    return editGoalBox;

}


// For sorting the list of tasks in a project.  method is an optional override
const sortList = (list, method) => {

    console.log("method is " + method)
    if (method == null){
        method = _settings__WEBPACK_IMPORTED_MODULE_7__.UI.getSort();
    }

    console.log("method is " + method)
    console.log(list);
    switch(method){

        case 'priority':
            return list.sort((a,b) => { 
                return a.getPriority() - b.getPriority() });
            
        case 'deadline':
            return list.sort((a,b) => { 
                return a.getDeadline() - b.getDeadline() });
  
        case 'urgency':
            return list.sort((a,b) => { 
                return a.getUrgency() - b.getUrgency() });
           
        case 'title':
            return list.sort((a, b) => a.getTitle().localeCompare(b.getTitle()));
    }


    return;


}

//Handles display of 'Tasks list'
const renderTaskList = (project) => {

    const parent = document.querySelector('.tasks-container')
    const list = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': 'task-list'});
    parent.insertBefore(list, parent.lastElementChild)
    const miniList = document.querySelectorAll('.mini-task');
    miniList.forEach(mini => mini.remove())

    // Sort list based on user option
    let taskList = project.tasks.getTaskList();
   /* console.log(taskList)
    taskList.sort((a, b) => {
        const sort = sortTasks();
        return a.sort - b.sort
    });*/

    sortList(taskList);

    console.log(taskList)
    for (let task of taskList){
        //console.log(task);
        const minitask = createMiniTask(project, task);


        if (task.getStatus() === true){
            minitask.classList.add('completed');        
        }
        else minitask.classList.remove('completed');

      
      
       list.appendChild(minitask);
    }


    
}



// Deletes task from parent project
const deleteTask = (task) => {

    console.log(task);

    const project = task.getParent();
    project.tasks.removeTask(task);
    renderTaskList(project);
}

// Delete the DOM element associated with task


const toggleTaskStatus = (task) => {

    if (task == null) return;

    if (task.getStatus() === false){
        task.setStatus(true);
        task.getParent().tasks.completeTask(task);
    }
    else{
        task.setStatus(false)
        task.getParent().tasks.removeComplete(task);
    }
  

    renderTaskList(task.getParent());

}

// Creates a mini-task DOM element out of task object
const createMiniTask = (project, task) => {
    
    const minitask = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class':'mini-task'})
    minitask.classList.add((0,_taskUI__WEBPACK_IMPORTED_MODULE_6__.priorityStyle)(task).priorityValue);
    if (task.getStatus() === true){
        minitask.classList.add('completed');
       
    }

    //console.log(task);
    // Delete mini
    const removeMini = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_delete_alert_svg__WEBPACK_IMPORTED_MODULE_14__, 'class': 'mini-button mini-delete', 'value': '-'})
    // Pass on DOM of Minilist and Task to delete
    removeMini.addEventListener('click', (e) => deleteMini(task));
    // Mark mini as complete
    const finishMini = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_minicheckbox_svg__WEBPACK_IMPORTED_MODULE_12__, 'class': 'mini-button mini-finish', 'value': 'F'});
    finishMini.addEventListener('click', (e) => toggleTaskStatus(task));
    //Open Task in full view
    const miniButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'button', 'class': 'mini-button mini-title', 'value': `${task.getTitle()}`});
        
    
    

    miniButton.addEventListener('click', () => (0,_taskUI__WEBPACK_IMPORTED_MODULE_6__.renderTask)(task))
    minitask.appendChild(removeMini);
    minitask.appendChild(miniButton);
    minitask.appendChild(finishMini)
    let bgcolor = minitask.style.backgroundColor;
    const title = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('h4', {'class': 'mini-task-title'})
    
    
    minitask.appendChild(title);


    return minitask;
}

const deleteMini = (task) => {

    
    const project = task.getParent();

    console.log(project.tasks.getTaskList());
    project.tasks.removeTask(task);
    
    const taskCard = document.querySelector('.task');
    if (taskCard != null){
        if (taskCard.getAttribute('data-id') == task.getID()) closeTask(taskCard);
    }

    // Refresh task list
    renderTaskList(project);


}




const getProjectFromUser = () => {


}


// Buttons and Listeners
const createListeners = (project) => {

    // Create listeners for buttons
    const edit = document.querySelector('#edit-project');
    //console.log(project.content.getPriority())
    const close = document.querySelector('#close-project');
    close.addEventListener('click', () => closeProject());
    // Content button (expand content)
    const tasks = document.querySelector('#tasks-button');
    tasks.addEventListener('click', () => {

        setAllTasks(project);

    })
    
    const deadline = document.querySelector('#deadline-button');
    const priority = document.querySelector('.priority-button.project-item');
    priority.addEventListener('click', (e) => {

        cyclePriority(project);

    })   

}

const cyclePriority = (project) => {

    const currentPriority = project.content.getPriority();
    //  console.log(currentPriority);

     
      const updatedPriority = (((currentPriority) +1 ) % 3) + 1;
      project.content.setPriority(updatedPriority);
      closeProject();

    const projectDOM = document.querySelector('.project');
    if (projectDOM != null) renderProject(project);
      
}



// Toggle completed status for all tasks in a project
const setAllTasks = (project) => {

    let status = false;

    const taskList = project.tasks.getTaskList();
    const finishedList = project.tasks.getCompletedTasks();

    if (project.tasks.getTaskList().length != project.tasks.getCompletedTasks().length){
        status = true;
    }
    else if(finishedList.length === 0){
        status = true;
    }

    project.tasks.clearFinishedList();
    
    for (let task of taskList){

        task.setStatus(status);
        console.log(taskList.length);
        console.log(finishedList.length);
        if (status === true){
            project.tasks.completeTask(task);
            
        }
        else{
            
        }

    }

    const projectDom = document.querySelector('.project');
    if (projectDom != null){    
        closeProject(project);
        renderProject(project);
    }


}


const closeProject = () => {

    const project = document.querySelector('.project')
    
    //Reenable interaction 
    const projectContainer = document.querySelector('#project-container');
    projectContainer.style.display = 'none';
    
    if (project != null) project.remove();

    (0,_content__WEBPACK_IMPORTED_MODULE_5__.renderProjectList)();



}

const finishProject = (project) => {

    const projectTasks = project.tasks.getTaskList();

    
    setAllTasks(project);

    (0,_content__WEBPACK_IMPORTED_MODULE_5__.renderProjectList)();

}

const deleteProject = (project) => {

    _content__WEBPACK_IMPORTED_MODULE_5__.projectList.removeProject();


}

const settings = () => {

    let sort = 'priority';


    const setSort = (newSort) => sort = newSort;
    const getSort = () => sort;


    return {sort, getSort, setSort}

}





const addProjectPopUp = () => {
    
    const button = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)("button", {"id": "project-button", "value": "Pressit","textContent": "Press"})
    button.addEventListener("click", () => {
        
    })


    return button;

}




/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });






const UI = (() => {



        let sortType = 'priority'
        let ascending = true

        const getSort = () =>  sortType;
        const setSort = (newSort) => sortType = newSort
    
      //  getAscending: () => ascending
      //  setAscending: (newAscending) => ascending = newAscending


        return {getSort, setSort}

})();



/***/ }),

/***/ "./src/taskUI.js":
/*!***********************!*\
  !*** ./src/taskUI.js ***!
  \***********************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (332:12)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n|                 }\n|            \n>             });\n|         const close = element('input', {'type': 'image', 'src': closeTaskIcon, 'alt': 'close without changes', 'class': 'form-button task-button', 'id': 'close-deadline-button'})\n|             close.addEventListener('click', (e) => {");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ createToDo),
/* harmony export */   "getUrgency": () => (/* binding */ getTaskUrgency)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _default_task_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-task.json */ "./src/default-task.json");
//  To do object, creation and modification

// Helper functions located in utils file



//import task from "./example-task.json";
// Constants

// Factory to create a ToDo object
const createToDo = (title = _default_task_json__WEBPACK_IMPORTED_MODULE_1__.title, deadline = _default_task_json__WEBPACK_IMPORTED_MODULE_1__.deadline, priority = _default_task_json__WEBPACK_IMPORTED_MODULE_1__.priority, description = _default_task_json__WEBPACK_IMPORTED_MODULE_1__.description, goal = _default_task_json__WEBPACK_IMPORTED_MODULE_1__.goal, taskID = _default_task_json__WEBPACK_IMPORTED_MODULE_1__.taskID, completed = _default_task_json__WEBPACK_IMPORTED_MODULE_1__.completed) => {

    deadline = new Date(deadline);
    
    // Project object that owns this task
    let parent = null;
  
    // Time/Date based attributes
    const startDate = new Date(Date.now())
    const timeRemaining = deadline - Date.now();


    const setTitle = (newTitle) => {
        title = newTitle;
    }

    const getTitle = () => title;

    const setDescription = (newDescription) => {
        description = newDescription
    }
    const getDescription = () => description;

    const setDeadline = (newDeadline) => deadline = newDeadline;
    const getDeadline = () => deadline;

    

    const setPriority = (newPriority) => {
        priority = newPriority;
    }
    const getPriority = () => priority;
 
    const setGoal = (newGoal) => goal = newGoal;
    const getGoal = () => goal;
 
    const setParent = (newParent) => parent = newParent;
    const getParent = () => parent;

    const setID = (newID) => taskID = newID;
    const getID = () => taskID;


    const setStatus = (newStatus) => completed = newStatus;
    const getStatus = () => completed;

    const getContent = () => {

        return {title, deadline, priority, description};
    }


    return ({setStatus, getStatus, getID, setID, setParent, getParent, setGoal, getGoal, setDeadline, getDeadline, getPriority, setPriority, title, deadline, priority, description, priority,  content, startDate, timeRemaining,setDescription, getDescription, setTitle, getTitle, getContent,});

}


// Lower urgency is considered more urgent. Closest to zero is most urgent.
const getTaskUrgency = (toDoObject) => {
        
    // Get days onl
    const urgency = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(toDoObject.timeRemaining, "dd");
    console.log(urgency * toDoObject.priority);

    return urgency;
}














/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendChildren": () => (/* binding */ appendChildren),
/* harmony export */   "createImageLink": () => (/* binding */ createImageLink),
/* harmony export */   "element": () => (/* binding */ createElement),
/* harmony export */   "getDate": () => (/* binding */ getDate),
/* harmony export */   "makeContainer": () => (/* binding */ makeContainer),
/* harmony export */   "makeMenu": () => (/* binding */ makeMenu),
/* harmony export */   "makeRadio": () => (/* binding */ makeRadio),
/* harmony export */   "setAttributes": () => (/* binding */ setAttributes)
/* harmony export */ });
/* harmony import */ var _img_close_task_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/close-task.svg */ "./src/img/close-task.svg");



// Helper functions

// create element of specific type, with attributes attached
const createElement = (type, attributes) => {
    
    const newElement = document.createElement(`${type}`);
    if (attributes == null) return newElement;
    setAttributes(newElement, attributes);
    
    return newElement;
}

// for appending multiple children in one call
const appendChildren = (parent, ...children) => {

    
    console.log(parent);
    console.log(children)

    const childCount = children.length;

    for (let child of children){
        parent.appendChild(child);

    }

    console.log(parent);
   // return childCount;
}



const getDate = () => {

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; // Index at zero
    const yyyy = today.getFullYear();

    if (dd < 10){
        dd = '0' + dd;
    }
    if (mm < 10){
        mm = '0' + mm;
    }

    today = `${yyyy}-${mm}-${dd}`;

    return today;
}

function setAttributes(element, attributes)
{
    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value)
    });
}

// turn into object
function createImageLink(url, image, alt){

    
    const ahref = createElement("a", {"class": "link", "href": url});
    const linkImage = createElement("img", {"class": "image-link", "src": image, "alt": alt});

    ahref.appendChild(linkImage);

    return ahref;
    

}

// Make a generic display element, with a container, title, and content section
// ID and class will be generated from name (string)
// [Container]-->  [TitleContainer-->Title+Button] + Content
const makeContainer = (name, inputImage) => {

 

    const container = createElement('div', {'class': `${name.toLowerCase()}-container`})
    // Title and Button
    const titleContainer = createElement('div', {'class': "title-container", 'id': `${name.toLowerCase()}-title-container`});
    const title = createElement('h4', {'class': `${name.toLowerCase()}-header`});
    const titleButton = createElement('input', {'type': 'image', 'src': inputImage,  'id': `${name.toLowerCase()}-button`, 'class': 'container-button expand-content-btn', }, );
    titleContainer.appendChild(title);
    titleContainer.appendChild(titleButton);


    const content = createElement('div', {'class':  `${name.toLowerCase()}-content`});

    title.textContent = name;
    container.appendChild(titleContainer);
    container.appendChild(content);

    return container;
}

const makeMenu = (menuName, tooltipText) => {

    const container = createElement('div', {'class': 'menu-container'});
   
    const tooltipContainer = createElement('div', {'class': 'tooltip'});
    const tooltip = createElement('p', {'class': 'tooltiptext', 'id': `${menuName}-text`});
    tooltip.textContent = tooltipText;
    
    tooltipContainer.appendChild(tooltip);

    const menu = createElement('div', {'class': 'context-menu', 'id': `${menuName}-menu`})
    const menuItems = createElement('ul', {'class': 'menu-items menu-list'});
    menu.appendChild(menuItems);
    
    container.appendChild(tooltipContainer);
    container.appendChild(menu);


    return container;

}

// return a radio object to be attached to a fieldset
const  makeRadio = (name, selection, labelText, checked) => {

   

    const container = createElement('div', {'class': 'radio-container form-element', 'id': `${name}-label-container`});         
    const label = createElement('label', {'for': `${name}`, "class": "form-label radio-label", "id": `${name}-label ${name}-${selection}`})    
    label.textContent = labelText;
    const radio = createElement('input', {'type': 'radio', 'name': `${name}`, 'class': `form-input radio-${name}`, 'id': `${name}-${selection}-radio` })
    if (checked) radio.setAttribute('checked', '');
    
    label.appendChild(radio);


   

    return container.appendChild(label);

}







/***/ }),

/***/ "./src/img/calendar-edit.svg":
/*!***********************************!*\
  !*** ./src/img/calendar-edit.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8f229469ca42ac5b2259.svg";

/***/ }),

/***/ "./src/img/close-project.svg":
/*!***********************************!*\
  !*** ./src/img/close-project.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "89c47cfe2fe630b66464.svg";

/***/ }),

/***/ "./src/img/close-task.svg":
/*!********************************!*\
  !*** ./src/img/close-task.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "281033ab943b1267855d.svg";

/***/ }),

/***/ "./src/img/cog.svg":
/*!*************************!*\
  !*** ./src/img/cog.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "21a2bc942cb9bc7cfffa.svg";

/***/ }),

/***/ "./src/img/delete-alert.svg":
/*!**********************************!*\
  !*** ./src/img/delete-alert.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d71d7da1f7c23ae23d4a.svg";

/***/ }),

/***/ "./src/img/delete-task.svg":
/*!*********************************!*\
  !*** ./src/img/delete-task.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c6089b53e88169d06858.svg";

/***/ }),

/***/ "./src/img/edit.svg":
/*!**************************!*\
  !*** ./src/img/edit.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "419ce92ba256ec17110b.svg";

/***/ }),

/***/ "./src/img/expand.svg":
/*!****************************!*\
  !*** ./src/img/expand.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "174bc2e3460d60c82d15.svg";

/***/ }),

/***/ "./src/img/finish-task.svg":
/*!*********************************!*\
  !*** ./src/img/finish-task.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "16df4d2bc00a589c7d49.svg";

/***/ }),

/***/ "./src/img/minicheckbox.svg":
/*!**********************************!*\
  !*** ./src/img/minicheckbox.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bcc9a49980346cbbe75f.svg";

/***/ }),

/***/ "./src/img/minicheckmarked.svg":
/*!*************************************!*\
  !*** ./src/img/minicheckmarked.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9176c6d3b82f0db4593a.svg";

/***/ }),

/***/ "./src/img/note-plus.svg":
/*!*******************************!*\
  !*** ./src/img/note-plus.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "163901b5272c64ad919e.svg";

/***/ }),

/***/ "./src/img/pencil.svg":
/*!****************************!*\
  !*** ./src/img/pencil.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8d317290131028fe10cf.svg";

/***/ }),

/***/ "./src/img/plus-box-multiple.svg":
/*!***************************************!*\
  !*** ./src/img/plus-box-multiple.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b753009c56f50d9fdc43.svg";

/***/ }),

/***/ "./src/img/save-content.svg":
/*!**********************************!*\
  !*** ./src/img/save-content.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "34ae92d62c17b6c7017d.svg";

/***/ }),

/***/ "./src/img/save-task.svg":
/*!*******************************!*\
  !*** ./src/img/save-task.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "489775b1a5313368a559.svg";

/***/ }),

/***/ "./src/img/sort.svg":
/*!**************************!*\
  !*** ./src/img/sort.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1f3f72a6e2531c3ee466.svg";

/***/ }),

/***/ "./src/default-project.json":
/*!**********************************!*\
  !*** ./src/default-project.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"title":"My Project","description":"Useful information about my project goes here.","priority":2,"toDoCount":0,"goal":"A measurement for success.","deadline":"8/12/2022","data-project-id":0}');

/***/ }),

/***/ "./src/default-task.json":
/*!*******************************!*\
  !*** ./src/default-task.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"title":"My Task","description":"Useful information about your task goes here.  What specifically are you looking to accomplish?  ","priority":2,"goal":"Your goal, how you decide whether a task is complete.","deadline":"8/12/2022","taskID":"0","completed":false}');

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface */ "./src/interface.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content */ "./src/content.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu */ "./src/menu.js");







const body = document.querySelector('body');
const main = document.querySelector('#content');


body.insertBefore((0,_menu__WEBPACK_IMPORTED_MODULE_5__.menu)(), main);
main.appendChild((0,_content__WEBPACK_IMPORTED_MODULE_4__.projectContainer)())
main.appendChild((0,_content__WEBPACK_IMPORTED_MODULE_4__.content)());


console.log(main.parentNode)


//const testProj = renderProject(testProject);






//const NEWPROJ = Project();




//enderProject(NEWPROJ);



//content.append(testProj)




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsY0FBYyxjQUFjLFdBQVcsVUFBVSxNQUFNLE1BQU0sYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFNBQVMsT0FBTyxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLGNBQWMsT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksVUFBVSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sTUFBTSxjQUFjLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxTQUFTLEtBQUssVUFBVSxRQUFRLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsY0FBYyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxXQUFXLFlBQVksYUFBYSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksY0FBYyxXQUFXLFNBQVMsT0FBTyxNQUFNLE1BQU0sT0FBTyxVQUFVLFlBQVksYUFBYSxPQUFPLFFBQVEsS0FBSyxNQUFNLFlBQVksUUFBUSxLQUFLLFVBQVUsYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLE9BQU8sS0FBSyxXQUFXLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0sY0FBYyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLGFBQWEsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsYUFBYSxRQUFRLE1BQU0sVUFBVSxZQUFZLFdBQVcsYUFBYSxPQUFPLE1BQU0sT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsZ0JBQWdCLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLE1BQU0sWUFBWSxjQUFjLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsT0FBTyxTQUFTLFNBQVMsTUFBTSxPQUFPLFlBQVksT0FBTyxLQUFLLGNBQWMsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxZQUFZLFlBQVksYUFBYSxZQUFZLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUIsa0JBQWtCO0FBQ2xCLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLGdCQUFnQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsUUFBUTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDN1VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELEtBQUs7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFD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O0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNuUEEsY0FBYyxtQkFBTyxDQUFDLGdFQUFrQjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDUEEsY0FBYyxtQkFBTyxDQUFDLGdFQUFrQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztB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Q0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDdUI7QUFDUjtBQUN1RDtBQUNyQztBQUN4Qjs7QUFFOUI7QUFDQTs7O0FBR0Esa0JBQWtCLDJDQUFJO0FBQ3RCLGlCQUFpQiwwREFBZ0I7QUFDakMsaUJBQWlCLGlEQUFPOzs7QUFHeEI7OztBQUdBOzs7Ozs7O0FBT0E7Ozs7O0FBS0E7Ozs7QUFJQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9scnUtY2FjaGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvY2xhc3Nlcy9jb21wYXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2NsYXNzZXMvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvY2xhc3Nlcy9zZW12ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2NsZWFuLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9jbXAuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2NvZXJjZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvY29tcGFyZS1idWlsZC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvY29tcGFyZS1sb29zZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvY29tcGFyZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvZGlmZi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvZXEuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2d0LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9ndGUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2luYy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvbHQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2x0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvbWFqb3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL21pbm9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9uZXEuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL3BhcnNlLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9wYXRjaC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvcHJlcmVsZWFzZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvcmNvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL3Jzb3J0LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9zYXRpc2ZpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL3NvcnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL3ZhbGlkLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2ludGVybmFsL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9pbnRlcm5hbC9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9pbnRlcm5hbC9pZGVudGlmaWVycy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9pbnRlcm5hbC9wYXJzZS1vcHRpb25zLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2ludGVybmFsL3JlLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy9ndHIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL2ludGVyc2VjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL2x0ci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9yYW5nZXMvbWF4LXNhdGlzZnlpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL21pbi1zYXRpc2Z5aW5nLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy9taW4tdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9yYW5nZXMvb3V0c2lkZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9yYW5nZXMvc2ltcGxpZnkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL3N1YnNldC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9yYW5nZXMvdG8tY29tcGFyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL3ZhbGlkLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3lhbGxpc3QvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy95YWxsaXN0L3lhbGxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jYXJkcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3RVSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3NldHRpbmdzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvbWluaWNoZWNrbWFya2VkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICAtLWdyZXlCbHVlOiByZ2IoMTU2LCAxNjQsIDE5OSk7XFxuICAgIC0taGFwcHlCbHVlOiByZ2IoMTkyLCAyMDQsIDI0MSk7XFxuICAgIC0tcG9zdGl0eWVsbG93OiByZ2IoMjQyLCAyNDMsIDIyMSk7XFxuICAgIC0tYmctY29sb3I6IHZhcigtLWhhcHB5Qmx1ZSwgYmx1ZSk7XFxuXFxuICAgIC0tc3ViLWJnLWNvbG9yOiByZ2JhKDIxMSwgMjA5LCAyMDksIDAuNDkzKTtcXG4gICAgLS1wcm9qZWN0LWNvbG9yOiByZ2IoMjQ2LCAyNDcsIDIzOCk7XFxuICAgIFxcbiAgICBcXG4gICAgLS1oZWFkZXItYmctY29sb3I6IHJnYigyMzgsIDI0MCwgMjMzKTtcXG4gICAgLS1oZWFkZXItYm9yZGVyOiB2YXIoLS1ncmV5Qmx1ZSk7XFxuXFxuXFxuICAgIC0tZWRpdGluZy10YXNrLWNvbG9yOiB2YXIoLS1oYXBweUJsdWUpO1xcblxcbiAgICAtLWxvdy1wcmlvcml0eTogcmdiYSgxNjIsIDE3OSwgMjMzLCAwLjU5Nik7XFxuICAgIC0tbWVkLXByaW9yaXR5OiByZ2JhKDI0OCwgMjM4LCAxNDIsIDAuNTk2KTtcXG4gICAgLS1oaWdoLXByaW9yaXR5OiByZ2JhKDIzMywgMTYyLCAxNjIsIDAuNTk2KTtcXG5cXG4gICAgLS10cmFuc2xhdGUtYW1vdW50OiA1MHB4O1xcblxcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHl7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhhcHB5Qmx1ZSk7XFxuICBcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxLGgyLGgzLGg0LGg1LHAsIHVsLCBsaXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lOztcXG59XFxuXFxuXFxuLnRlc3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkyLCAxNDQsIDE0NCwgMC45MTgpO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGRpc3BsYXk6IGZpeGVkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDVweCA1cHg7XFxufVxcblxcbi5zdWJ7XFxuICAgIFxcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCAxOTksIDI0LCAwLjc2KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udGFza3tcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIHdpZHRoOiBtaW4oMzAwcHgsIDkwJSk7XFxuXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTQsIDEzNSwgMTkyKTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJ0aXRsZSB0aXRsZVxcXCJcXG4gICAgXFxcImNvbnRlbnQgY29udGVudFxcXCJcXG4gICAgXFxcIm9iamVjdGl2ZSBkZWFkbGluZVxcXCJcXG4gICAgXFxcImJ1dHRvbnMgYnV0dG9uc1xcXCI7XFxufVxcblxcblxcblxcbi50YXNrLXRpdGxlLWJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbn1cXG5cXG4udGFzay10aXRsZXtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAzMnB4LCAycmVtKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZGVzY3tcXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xcbn1cXG5cXG4jZGVhZGxpbmUtZm9ybS1jb250YWluZXJ7XFxuXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAyMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcbiAgXFxufVxcblxcbi50YXNrLWRlYWRsaW5lLWNvbnRhaW5lcntcXG4gICAgZ3JpZC1hcmVhOiBkZWFkbGluZTtcXG4gICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFxufVxcblxcbi50YXNrLWRlYWRsaW5lLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jZGVhZGxpbmUtZm9ybXtcXG5cXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCBncmV5O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHdpZHRoOiBtaW4oNDAwcHgsIDEwMCUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiAxMCUgMTAlIDAlIDEwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJsYWJlbFxcXCJcXG4gICAgXFxcImRhdGVcXFwiXFxuICAgIFxcXCJ0aW1lXFxcIlxcbiAgICBcXFwicmVwZWF0XFxcIlxcbiAgICBcXFwiYnV0dG9uc1xcXCI7XFxuICAgIFxcblxcbn1cXG4uZm9ybS1pbnB1dHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5mb3JtLWhlYWRlcntcXG5cXG4gICAgZ3JpZC1hcmVhOiBsYWJlbDtcXG5cXG4gICBcXG59XFxuXFxuI2RhdGUtbGFiZWx7XFxuXFxuICAgIGdyaWQtYXJlYTogZGF0ZTtcXG59XFxuXFxuI3RpbWUtbGFiZWx7XFxuICAgIGdyaWQtYXJlYTogdGltZTtcXG59XFxuXFxuI2Zvcm0tZGF0ZXtcXG5cXG4gICAgZ3JpZC1hcmVhOiBpbnB1dDtcXG59XFxuXFxuI3Rhc2stZGVhZGxpbmUtZmllbGRzZXR7XFxuICAgIGdyaWQtYXJlYTogcmVwZWF0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufSAgXFxuXFxuLmZvcm0tYnV0dG9uc3tcXG5cXG4gICAgZ3JpZC1hcmVhOiBidXR0b25zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxufVxcblxcblxcblxcbi50YXNrLWhlYWRlcntcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG5cXG4udGFzay1nb2Fse1xcbiAgICBncmlkLWFyZWE6IG9iamVjdGl2ZTtcXG59XFxuXFxuXFxuI2NvbnRlbnR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhhcHB5Qmx1ZSwgd2hpdGUpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gXFxufVxcbi5ibG9ja3NjcmVlbntcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzNywgMjM3KTtcXG4gICAgb3BhY2l0eTogLjU7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgICBoZWlnaHQ6IG1pbig1MDBweCwgOTAlKTtcXG4gICAgd2lkdGg6IG1pbig2MDBweCwgOTUlKTtcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgdG9wOiAyMCU7XFxuICAgIGZvbnQtZmFtaWx5OiBpbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB6LWluZGV4OiAxMDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCA1cHggdmFyKC0tZ3JleUJsdWUpXFxuICAgIFxcbiAgICBcXG4gICAgXFxuXFxufVxcblxcblxcbi5wcm9qZWN0LWNvbnRlbnR7XFxuICAgIFxcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDk4JTtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcbiAgICBcXFwidGl0bGUgc3VtbWFyeVxcXCJcXG4gICAgXFxcInRhc2tzIHRhc2tzXFxcIlxcbiAgICBcXFwidGFza3MgdGFza3NcXFwiXFxuICAgIFxcXCJ0YXNrcyB0YXNrc1xcXCJcXG4gICAgXFxcIm9iamVjdGl2ZSBkZWFkbGluZVxcXCI7XFxuXFxuXFxufVxcblxcbi5leHBhbmQtY29udGVudC1idG57XFxuICAgIFxcbn1cXG5cXG4udGl0bGUtY29udGFpbmVye1xcblxcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgIFxcblxcbn1cXG5cXG5cXG4ucHJvamVjdC1pdGVte1xcblxcblxcbiAgICBcXG59XFxuLnByb2plY3QtdGl0bGUtYmFye1xcblxcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbn1cXG5cXG5cXG4ucHJvamVjdC10aXRsZXtcXG4gICAgd2lkdGg6IDk4JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiBcXG5cXG4gICBcXG4gICAgZm9udC1mYW1pbHk6IGludGVyO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuXFxufVxcblxcbi5wcm9qZWN0LWRlc2N7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDk4JTtcXG5cXG4gICAgZm9udC1mYW1pbHk6IGludGVyO1xcbiAgICBncmlkLWFyZWE6IHN1bW1hcnk7XFxuXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgIFxcblxcbn1cXG5cXG4ucHJvamVjdC1nb2Fse1xcbiAgICB3aWR0aDogOTglO1xcbiAgIFxcblxcbiAgICBncmlkLWFyZWE6IG9iamVjdGl2ZTtcXG59XFxuXFxuLmVkaXQtcHJvamVjdC1ib3gsIC5lZGl0LXRhc2stYm94e1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIFxcbiAgICBtYXgtd2lkdGg6IDkwJTtcXG5cXG59XFxuXFxuI3Byb2plY3QtY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAyMzgsIDIzOCwgMC40NjYpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgIFxcbn1cXG5cXG4uZWRpdC10YXNrLWJveHtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWRpdGluZy10YXNrLWNvbG9yLCBncmV5KTtcXG5cXG5cXG59XFxuXFxuI2FkZC10YXNrLWJ1dHRvbntcXG5cXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgIFxcbn1cXG5cXG4jYWRkLXRhc2stYnV0dG9uOmhvdmVye1xcbiAgIFxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuXFxufVxcblxcbiNhZGQtdGFzay1idXR0b246Zm9jdXN7XFxuICAgXFxufVxcblxcbi5kZWFkbGluZS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogZGVhZGxpbmU7XFxuICAgIFxcbn1cXG5cXG4uZGVhZGxpbmUtY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcblxcbi5kZWFkbGluZS1oZWFkZXJ7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnRhc2tzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtYXJlYTogdGFza3M7XFxufVxcblxcbi5taW5pLXRhc2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1wcmlvcml0eSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4ubWluaS1idXR0b257XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuXFxufVxcblxcbiNtaW5pLXNvcnR7XFxuXFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG59XFxuXFxuLm1pbmktdGl0bGV7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgXFxuICBcXG59XFxuXFxuXFxuLm1pbmktZmluaXNoLCAubWluaS1kZWxldGV7XFxuICAgIGZsZXg6IDA7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgXFxufVxcblxcblxcbi50YXNrLWxpc3R7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5wcm9qZWN0LWNhcmR7XFxuICAgIFxcbn1cXG5cXG5cXG4jbW9kYWwtY29udGFpbmVye1xcbiAgICBtYXJnaW4tdG9wOiAyMHZoO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIFxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHdpZHRoOiBtaW4oMTAwdncsIDM4MHB4KTtcXG4gICAgaGVpZ2h0OiBtaW4oMTAwdmgsIDUwMHB4KTtcXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg0LCAxMzUsIDExLCAwLjA4Mik7XFxuICAgICBcXG4gfVxcbiBcXG4gI2FkZC1tb2RhbHtcXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICBcXG4gICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgIFxcbiAgICAgd2lkdGg6IG1pbigxMDB2dywgMzQwcHgpO1xcbiAgICAgaGVpZ2h0OiBtaW4oMTAwdmgsIDQ4MHB4KTtcXG4gXFxuICBcXG4gXFxuICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgIGJvcmRlcjogMnB4IGRhc2hlZCB2YXIoLS1hbHQtY2FyZC1ib3JkZXItY29sb3IpO1xcbiAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHg7XFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJvcmRlci1jb2xvciwgIzY0NzQzMSk7XFxuIFxcbiB9XFxuIFxcbiAuYWRkLWNvbnRlbnR7XFxuIFxcbiAgICAgd2lkdGg6IG1pbigxMDB2aCwgMzAwcHgpO1xcbiAgICAgaGVpZ2h0OiAgbWluKDEwMHZoLCA0NTBweCk7XFxuIFxcbiAgICAgZGlzcGxheTogZmxleDtcXG4gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnLWNvbG9yKVxcbiB9XFxuXFxuIC5wcm9qZWN0LWJ1dHRvbiwgLnRhc2stYnV0dG9ue1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMjRweCwgMnJlbSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgZmlsbDogcmVkOyAgIFxcbiAgICBvcGFjaXR5OiAuODU7XFxufVxcblxcbi5jb250YWluZXItYnV0dG9uOmhvdmVyLCAucHJvamVjdC1idXR0b246aG92ZXIsIC50YXNrLWJ1dHRvbjpob3ZlciwgLmNvbnRhaW5lci1idXR0b246YWN0aXZlLCAucHJvamVjdC1idXR0b246YWN0aXZlLCAudGFzay1idXR0b246YWN0aXZlIHtcXG5cXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpXFxuXFxufVxcblxcbi5idXR0b24tYmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIGdyaWQtYXJlYTogYnV0dG9ucztcXG59XFxuXFxuI3Byb2plY3QtYnV0dG9uLWJhcntcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbn1cXG5cXG5cXG4uZWRpdC1idXR0b257XFxuXFxuICAgIFxcbn1cXG5cXG5cXG5cXG5cXG4uZGVsZXRlLXRhc2t7XFxuICAgIFxcbiAgICBcXG4gXFxuXFxufVxcblxcbi5jb21wbGV0ZWQgPiAqe1xcbiAgXFxuICAgXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmNvbXBsZXRlZCA+IC5taW5pLWZpbmlzaHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBcXG5cXG59XFxuXFxuLmhpZGRlbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1haW4tY29udGFpbmVye1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogOTAlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDEwcHggM3B4IHZhcigtLWdyZXlCbHVlLCBsaWdodGdyZXkpO1xcblxcbn1cXG5cXG4ud29ya3NwYWNle1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMjEwLCAyNDUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gfVxcblxcbiAuY29udGVudC1idXR0b257XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDNyZW07XFxuXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiB9XFxuXFxuXFxuIFxcbiAuY2FyZC1idXR0b257XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgb3BhY2l0eTogLjU7XFxuIH1cXG5cXG4gLmNhcmQtYnV0dG9uOmhvdmVye1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuIH1cXG5cXG4gXFxuIC5jYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDMsIDIyMSk7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggNXB4IHZhcigtLWdyZXlCbHVlKTtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWdyZXlCbHVlKTtcXG4gfVxcblxcbiAuY2FyZC1idXR0b24tYmFye1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgXFxuIH1cXG5cXG4gLmNhcmQtcGVyY2VudC1jb250YWluZXJ7XFxuICAgXFxuIH1cXG4gXFxuIC5jYXJkLXBlcmNlbnRhZ2V7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gfVxcblxcbiAuY2FyZC1jb21wbGV0ZWQgPiAqe1xcbiAgICBjb2xvcjogZ3JlZW47XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuIH1cXG5cXG5cXG5cXG4gLmNhcmQtYnV0dG9uLWJhciA+ICp7XFxuICAgXFxuIH1cXG5cXG4uY2FyZC1kZWFkbGluZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGJsYWNrO1xcbn1cXG5cXG4uYWN0aXZlLXNldHRpbmdzLWJ1dHRvbntcXG5cXG5cXG5cXG59XFxuXFxuXFxuXFxuLmJsb2NrcHJvamVjdCwgLmJsb2NrcHJvamVjdCA+ICogPiAqe1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjgzNik7XFxuICAgIFxcbn1cXG5cXG5cXG5cXG4ucHJpb3JpdHktYnV0dG9ue1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5cXG4uY29udGFpbmVyLWJ1dHRvbntcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxLjVyZW07XFxufVxcblxcbiN0YXNrcy1idXR0b257XFxuICAgIGZsZXg6IDA7XFxuICAgXFxuXFxufVxcblxcblxcbi5sb3dwcmlvcml0eXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5LCBsaWdodGJsdWUpO1xcbn1cXG5cXG4ubWVkcHJpb3JpdHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1wcmlvcml0eSwgbGlnaHR5ZWxsb3cpO1xcblxcbn1cXG5cXG4uaGlnaHByaW9yaXR5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWhpZ2gtcHJpb3JpdHksIGxpZ2h0c2FsbW9uKTtcXG59XFxuXFxuLmNvbXBsZXRlZHtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAyNDUsIDEwNCwgMC43OTUpO1xcbiAgICBcXG59XFxuXFxuLm1lbnUtY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyMzYsIDIzNiwgMC44NjMpO1xcbiAgICBib3JkZXI6IDJweCBvdXRzZXQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1lbnUtaGVhZGVye1xcbiAgICBvcGFjaXR5OiA3NSU7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbiNjb250ZXh0LW1lbnV7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxuLm1lbnUtaXRlbXtcXG5cXG5tYXJnaW4tYm90dG9tOiAxMHB4O1xcblxcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyLCAubWVudS1pdGVtOmZvY3Vze1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2hlYWRlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1jb2xvciwgcmdiKDE5NiwgMTgxLCAxODEpKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0taGVhZGVyLWJnLWNvbG9yLCBub25lKTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggdmFyKC0tZ3JleUJsdWUpXFxuICAgIFxcblxcblxcbn1cXG5cXG4udGFiLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG5cXG5cXG59XFxuXFxuLnRhYntcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuXFxufVxcblxcbi50b29sdGlwIHtcXG5cXG5cXG4gIFxcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xcbn1cXG5cXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xcblxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDcsIDEwNiwgMTA2LCAwLjc1Myk7XFxuICAgIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgIFxcbn1cXG5cXG4uc2V0dGluZ3MtY29nOmZvY3VzLCAuc2V0dGluZ3MtY29nOmFjdGl2ZXtcXG5cXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTAlKTtcXG5cXG5cXG5cXG59XFxuXFxuXFxuLnNldHRpbmdzLWNvZzpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTAlKVxcbn1cXG5cXG4uc2hpZnQtcmlnaHR7XFxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKHZhcigtLXRyYW5zbGF0ZS1hbW91bnQsIDI1cHgpKTtcXG59XFxuXFxuLnNoaWZ0LWxlZnR7XFxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMHJlbSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLGtDQUFrQztJQUNsQyxrQ0FBa0M7O0lBRWxDLDBDQUEwQztJQUMxQyxtQ0FBbUM7OztJQUduQyxxQ0FBcUM7SUFDckMsZ0NBQWdDOzs7SUFHaEMsc0NBQXNDOztJQUV0QywwQ0FBMEM7SUFDMUMsMENBQTBDO0lBQzFDLDJDQUEyQzs7SUFFM0Msd0JBQXdCOztJQUV4QixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBOztJQUVJLGtDQUFrQzs7SUFFbEMsYUFBYTtJQUNiLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksNENBQTRDO0lBQzVDLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGdDQUFnQztBQUNwQzs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHdDQUF3QztJQUN4QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIsYUFBYTs7SUFFYixvQ0FBb0M7O0lBRXBDLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLG1DQUFtQztJQUNuQyw4QkFBOEI7SUFDOUI7Ozs7cUJBSWlCO0FBQ3JCOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0FB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Q2xCLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7O0lBRW5CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7O0FBRTFCOztBQUVBOztBQUVBLG1CQUFtQjs7QUFFbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDREQUE0RDtJQUM1RCxrQkFBa0I7SUFDbEIscURBQXFEO0lBQ3JEOzs7O0FBSUo7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCOzs7O0FBSTFCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhOzs7QUFHakI7O0FBRUE7Ozs7SUFJSSwrQkFBK0I7QUFDbkM7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw0Q0FBNEM7SUFDNUMseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCOztJQUVsQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1COztBQUV2Qjs7QUFFQTs7SUFFSSxzQkFBc0I7Ozs7QUFJMUI7OztBQUdBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLG1EQUFtRDtBQUN2RDs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgLS1ncmV5Qmx1ZTogcmdiKDE1NiwgMTY0LCAxOTkpO1xcbiAgICAtLWhhcHB5Qmx1ZTogcmdiKDE5MiwgMjA0LCAyNDEpO1xcbiAgICAtLXBvc3RpdHllbGxvdzogcmdiKDI0MiwgMjQzLCAyMjEpO1xcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1oYXBweUJsdWUsIGJsdWUpO1xcblxcbiAgICAtLXN1Yi1iZy1jb2xvcjogcmdiYSgyMTEsIDIwOSwgMjA5LCAwLjQ5Myk7XFxuICAgIC0tcHJvamVjdC1jb2xvcjogcmdiKDI0NiwgMjQ3LCAyMzgpO1xcbiAgICBcXG4gICAgXFxuICAgIC0taGVhZGVyLWJnLWNvbG9yOiByZ2IoMjM4LCAyNDAsIDIzMyk7XFxuICAgIC0taGVhZGVyLWJvcmRlcjogdmFyKC0tZ3JleUJsdWUpO1xcblxcblxcbiAgICAtLWVkaXRpbmctdGFzay1jb2xvcjogdmFyKC0taGFwcHlCbHVlKTtcXG5cXG4gICAgLS1sb3ctcHJpb3JpdHk6IHJnYmEoMTYyLCAxNzksIDIzMywgMC41OTYpO1xcbiAgICAtLW1lZC1wcmlvcml0eTogcmdiYSgyNDgsIDIzOCwgMTQyLCAwLjU5Nik7XFxuICAgIC0taGlnaC1wcmlvcml0eTogcmdiYSgyMzMsIDE2MiwgMTYyLCAwLjU5Nik7XFxuXFxuICAgIC0tdHJhbnNsYXRlLWFtb3VudDogNTBweDtcXG5cXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5e1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oYXBweUJsdWUpO1xcbiAgXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSxoMixoMyxoNCxoNSxwLCB1bCwgbGl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTs7XFxufVxcblxcblxcbi50ZXN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MiwgMTQ0LCAxNDQsIDAuOTE4KTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBkaXNwbGF5OiBmaXhlZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA1cHggNXB4O1xcbn1cXG5cXG4uc3Vie1xcbiAgICBcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgMTk5LCAyNCwgMC43Nik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnRhc2t7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICB3aWR0aDogbWluKDMwMHB4LCA5MCUpO1xcblxcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE0LCAxMzUsIDE5Mik7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwidGl0bGUgdGl0bGVcXFwiXFxuICAgIFxcXCJjb250ZW50IGNvbnRlbnRcXFwiXFxuICAgIFxcXCJvYmplY3RpdmUgZGVhZGxpbmVcXFwiXFxuICAgIFxcXCJidXR0b25zIGJ1dHRvbnNcXFwiO1xcbn1cXG5cXG5cXG5cXG4udGFzay10aXRsZS1iYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG59XFxuXFxuLnRhc2stdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMzJweCwgMnJlbSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWRlc2N7XFxuICAgIGdyaWQtYXJlYTogY29udGVudDtcXG59XFxuXFxuI2RlYWRsaW5lLWZvcm0tY29udGFpbmVye1xcblxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMjB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXG4gIFxcbn1cXG5cXG4udGFzay1kZWFkbGluZS1jb250YWluZXJ7XFxuICAgIGdyaWQtYXJlYTogZGVhZGxpbmU7XFxuICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbn1cXG5cXG4udGFzay1kZWFkbGluZS1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2RlYWRsaW5lLWZvcm17XFxuXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggZ3JleTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogbWluKDQwMHB4LCAxMDAlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogMTAlIDEwJSAwJSAxMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwibGFiZWxcXFwiXFxuICAgIFxcXCJkYXRlXFxcIlxcbiAgICBcXFwidGltZVxcXCJcXG4gICAgXFxcInJlcGVhdFxcXCJcXG4gICAgXFxcImJ1dHRvbnNcXFwiO1xcbiAgICBcXG5cXG59XFxuLmZvcm0taW5wdXR7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1oZWFkZXJ7XFxuXFxuICAgIGdyaWQtYXJlYTogbGFiZWw7XFxuXFxuICAgXFxufVxcblxcbiNkYXRlLWxhYmVse1xcblxcbiAgICBncmlkLWFyZWE6IGRhdGU7XFxufVxcblxcbiN0aW1lLWxhYmVse1xcbiAgICBncmlkLWFyZWE6IHRpbWU7XFxufVxcblxcbiNmb3JtLWRhdGV7XFxuXFxuICAgIGdyaWQtYXJlYTogaW5wdXQ7XFxufVxcblxcbiN0YXNrLWRlYWRsaW5lLWZpZWxkc2V0e1xcbiAgICBncmlkLWFyZWE6IHJlcGVhdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn0gIFxcblxcbi5mb3JtLWJ1dHRvbnN7XFxuXFxuICAgIGdyaWQtYXJlYTogYnV0dG9ucztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbn1cXG5cXG5cXG5cXG4udGFzay1oZWFkZXJ7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuXFxuLnRhc2stZ29hbHtcXG4gICAgZ3JpZC1hcmVhOiBvYmplY3RpdmU7XFxufVxcblxcblxcbiNjb250ZW50e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oYXBweUJsdWUsIHdoaXRlKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuIFxcbn1cXG4uYmxvY2tzY3JlZW57XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzcsIDIzNyk7XFxuICAgIG9wYWNpdHk6IC41O1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gICAgaGVpZ2h0OiBtaW4oNTAwcHgsIDkwJSk7XFxuICAgIHdpZHRoOiBtaW4oNjAwcHgsIDk1JSk7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIHRvcDogMjAlO1xcbiAgICBmb250LWZhbWlseTogaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgei1pbmRleDogMTA7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDIwcHggNXB4IHZhcigtLWdyZXlCbHVlKVxcbiAgICBcXG4gICAgXFxuICAgIFxcblxcbn1cXG5cXG5cXG4ucHJvamVjdC1jb250ZW50e1xcbiAgICBcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiA5OCU7XFxuICAgIGdhcDogNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXG4gICAgXFxcInRpdGxlIHN1bW1hcnlcXFwiXFxuICAgIFxcXCJ0YXNrcyB0YXNrc1xcXCJcXG4gICAgXFxcInRhc2tzIHRhc2tzXFxcIlxcbiAgICBcXFwidGFza3MgdGFza3NcXFwiXFxuICAgIFxcXCJvYmplY3RpdmUgZGVhZGxpbmVcXFwiO1xcblxcblxcbn1cXG5cXG4uZXhwYW5kLWNvbnRlbnQtYnRue1xcbiAgICBcXG59XFxuXFxuLnRpdGxlLWNvbnRhaW5lcntcXG5cXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICBcXG5cXG59XFxuXFxuXFxuLnByb2plY3QtaXRlbXtcXG5cXG5cXG4gICAgXFxufVxcbi5wcm9qZWN0LXRpdGxlLWJhcntcXG5cXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG59XFxuXFxuXFxuLnByb2plY3QtdGl0bGV7XFxuICAgIHdpZHRoOiA5OCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gXFxuXFxuICAgXFxuICAgIGZvbnQtZmFtaWx5OiBpbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcblxcbn1cXG5cXG4ucHJvamVjdC1kZXNje1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA5OCU7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiBpbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiBzdW1tYXJ5O1xcblxcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICBcXG5cXG59XFxuXFxuLnByb2plY3QtZ29hbHtcXG4gICAgd2lkdGg6IDk4JTtcXG4gICBcXG5cXG4gICAgZ3JpZC1hcmVhOiBvYmplY3RpdmU7XFxufVxcblxcbi5lZGl0LXByb2plY3QtYm94LCAuZWRpdC10YXNrLWJveHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBcXG4gICAgbWF4LXdpZHRoOiA5MCU7XFxuXFxufVxcblxcbiNwcm9qZWN0LWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOCwgMjM4LCAyMzgsIDAuNDY2KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICBcXG59XFxuXFxuLmVkaXQtdGFzay1ib3h7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVkaXRpbmctdGFzay1jb2xvciwgZ3JleSk7XFxuXFxuXFxufVxcblxcbiNhZGQtdGFzay1idXR0b257XFxuXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICBcXG59XFxuXFxuI2FkZC10YXNrLWJ1dHRvbjpob3ZlcntcXG4gICBcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcblxcbn1cXG5cXG4jYWRkLXRhc2stYnV0dG9uOmZvY3Vze1xcbiAgIFxcbn1cXG5cXG4uZGVhZGxpbmUtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IGRlYWRsaW5lO1xcbiAgICBcXG59XFxuXFxuLmRlYWRsaW5lLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5cXG4uZGVhZGxpbmUtaGVhZGVye1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi50YXNrcy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWFyZWE6IHRhc2tzO1xcbn1cXG5cXG4ubWluaS10YXNre1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWQtcHJpb3JpdHkpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLm1pbmktYnV0dG9ue1xcbiAgICBmbGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcblxcbn1cXG5cXG4jbWluaS1zb3J0e1xcblxcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxLjVyZW07XFxufVxcblxcbi5taW5pLXRpdGxle1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIFxcbiAgXFxufVxcblxcblxcbi5taW5pLWZpbmlzaCwgLm1pbmktZGVsZXRle1xcbiAgICBmbGV4OiAwO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIFxcbn1cXG5cXG5cXG4udGFzay1saXN0e1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4ucHJvamVjdC1jYXJke1xcbiAgICBcXG59XFxuXFxuXFxuI21vZGFsLWNvbnRhaW5lcntcXG4gICAgbWFyZ2luLXRvcDogMjB2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB3aWR0aDogbWluKDEwMHZ3LCAzODBweCk7XFxuICAgIGhlaWdodDogbWluKDEwMHZoLCA1MDBweCk7XFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NCwgMTM1LCAxMSwgMC4wODIpO1xcbiAgICAgXFxuIH1cXG4gXFxuICNhZGQtbW9kYWx7XFxuICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgXFxuICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICBcXG4gICAgIHdpZHRoOiBtaW4oMTAwdncsIDM0MHB4KTtcXG4gICAgIGhlaWdodDogbWluKDEwMHZoLCA0ODBweCk7XFxuIFxcbiAgXFxuIFxcbiAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICBib3JkZXI6IDJweCBkYXNoZWQgdmFyKC0tYWx0LWNhcmQtYm9yZGVyLWNvbG9yKTtcXG4gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4O1xcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1ib3JkZXItY29sb3IsICM2NDc0MzEpO1xcbiBcXG4gfVxcbiBcXG4gLmFkZC1jb250ZW50e1xcbiBcXG4gICAgIHdpZHRoOiBtaW4oMTAwdmgsIDMwMHB4KTtcXG4gICAgIGhlaWdodDogIG1pbigxMDB2aCwgNDUwcHgpO1xcbiBcXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZy1jb2xvcilcXG4gfVxcblxcbiAucHJvamVjdC1idXR0b24sIC50YXNrLWJ1dHRvbntcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDI0cHgsIDJyZW0pO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGZpbGw6IHJlZDsgICBcXG4gICAgb3BhY2l0eTogLjg1O1xcbn1cXG5cXG4uY29udGFpbmVyLWJ1dHRvbjpob3ZlciwgLnByb2plY3QtYnV0dG9uOmhvdmVyLCAudGFzay1idXR0b246aG92ZXIsIC5jb250YWluZXItYnV0dG9uOmFjdGl2ZSwgLnByb2plY3QtYnV0dG9uOmFjdGl2ZSwgLnRhc2stYnV0dG9uOmFjdGl2ZSB7XFxuXFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKVxcblxcbn1cXG5cXG4uYnV0dG9uLWJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICBncmlkLWFyZWE6IGJ1dHRvbnM7XFxufVxcblxcbiNwcm9qZWN0LWJ1dHRvbi1iYXJ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG59XFxuXFxuXFxuLmVkaXQtYnV0dG9ue1xcblxcbiAgICBcXG59XFxuXFxuXFxuXFxuXFxuLmRlbGV0ZS10YXNre1xcbiAgICBcXG4gICAgXFxuIFxcblxcbn1cXG5cXG4uY29tcGxldGVkID4gKntcXG4gIFxcbiAgIFxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5jb21wbGV0ZWQgPiAubWluaS1maW5pc2h7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICB1cmwoLi9pbWcvbWluaWNoZWNrbWFya2VkLnN2Zyk7XFxuICBcXG5cXG59XFxuXFxuLmhpZGRlbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1haW4tY29udGFpbmVye1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogOTAlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDEwcHggM3B4IHZhcigtLWdyZXlCbHVlLCBsaWdodGdyZXkpO1xcblxcbn1cXG5cXG4ud29ya3NwYWNle1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMjEwLCAyNDUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gfVxcblxcbiAuY29udGVudC1idXR0b257XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDNyZW07XFxuXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiB9XFxuXFxuXFxuIFxcbiAuY2FyZC1idXR0b257XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgb3BhY2l0eTogLjU7XFxuIH1cXG5cXG4gLmNhcmQtYnV0dG9uOmhvdmVye1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuIH1cXG5cXG4gXFxuIC5jYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDMsIDIyMSk7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggNXB4IHZhcigtLWdyZXlCbHVlKTtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWdyZXlCbHVlKTtcXG4gfVxcblxcbiAuY2FyZC1idXR0b24tYmFye1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgXFxuIH1cXG5cXG4gLmNhcmQtcGVyY2VudC1jb250YWluZXJ7XFxuICAgXFxuIH1cXG4gXFxuIC5jYXJkLXBlcmNlbnRhZ2V7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gfVxcblxcbiAuY2FyZC1jb21wbGV0ZWQgPiAqe1xcbiAgICBjb2xvcjogZ3JlZW47XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuIH1cXG5cXG5cXG5cXG4gLmNhcmQtYnV0dG9uLWJhciA+ICp7XFxuICAgXFxuIH1cXG5cXG4uY2FyZC1kZWFkbGluZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGJsYWNrO1xcbn1cXG5cXG4uYWN0aXZlLXNldHRpbmdzLWJ1dHRvbntcXG5cXG5cXG5cXG59XFxuXFxuXFxuXFxuLmJsb2NrcHJvamVjdCwgLmJsb2NrcHJvamVjdCA+ICogPiAqe1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjgzNik7XFxuICAgIFxcbn1cXG5cXG5cXG5cXG4ucHJpb3JpdHktYnV0dG9ue1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5cXG4uY29udGFpbmVyLWJ1dHRvbntcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxLjVyZW07XFxufVxcblxcbiN0YXNrcy1idXR0b257XFxuICAgIGZsZXg6IDA7XFxuICAgXFxuXFxufVxcblxcblxcbi5sb3dwcmlvcml0eXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5LCBsaWdodGJsdWUpO1xcbn1cXG5cXG4ubWVkcHJpb3JpdHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1wcmlvcml0eSwgbGlnaHR5ZWxsb3cpO1xcblxcbn1cXG5cXG4uaGlnaHByaW9yaXR5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWhpZ2gtcHJpb3JpdHksIGxpZ2h0c2FsbW9uKTtcXG59XFxuXFxuLmNvbXBsZXRlZHtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAyNDUsIDEwNCwgMC43OTUpO1xcbiAgICBcXG59XFxuXFxuLm1lbnUtY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyMzYsIDIzNiwgMC44NjMpO1xcbiAgICBib3JkZXI6IDJweCBvdXRzZXQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1lbnUtaGVhZGVye1xcbiAgICBvcGFjaXR5OiA3NSU7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbiNjb250ZXh0LW1lbnV7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxuLm1lbnUtaXRlbXtcXG5cXG5tYXJnaW4tYm90dG9tOiAxMHB4O1xcblxcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyLCAubWVudS1pdGVtOmZvY3Vze1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2hlYWRlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1jb2xvciwgcmdiKDE5NiwgMTgxLCAxODEpKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0taGVhZGVyLWJnLWNvbG9yLCBub25lKTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggdmFyKC0tZ3JleUJsdWUpXFxuICAgIFxcblxcblxcbn1cXG5cXG4udGFiLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG5cXG5cXG59XFxuXFxuLnRhYntcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuXFxufVxcblxcbi50b29sdGlwIHtcXG5cXG5cXG4gIFxcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xcbn1cXG5cXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xcblxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDcsIDEwNiwgMTA2LCAwLjc1Myk7XFxuICAgIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgIFxcbn1cXG5cXG4uc2V0dGluZ3MtY29nOmZvY3VzLCAuc2V0dGluZ3MtY29nOmFjdGl2ZXtcXG5cXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTAlKTtcXG5cXG5cXG5cXG59XFxuXFxuXFxuLnNldHRpbmdzLWNvZzpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTAlKVxcbn1cXG5cXG4uc2hpZnQtcmlnaHR7XFxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKHZhcigtLXRyYW5zbGF0ZS1hbW91bnQsIDI1cHgpKTtcXG59XFxuXFxuLnNoaWZ0LWxlZnR7XFxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMHJlbSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcblxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG5cbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyOyAvLyBUd28gZGlnaXQgeWVhclxuXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfSAvLyBPcmRpbmFsIG51bWJlclxuXG5cbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpOyAvLyBQYWRkaW5nXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG5cbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcblxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcblxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG5cbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufVxuXG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIGRpcnR5T3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2VlaywgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIHNlY29uZCBhcmd1bWVudCBpcyBub3cgcmVxdWlyZWQgZm9yIHRoZSBzYWtlIG9mIGV4cGxpY2l0bmVzcy5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICogICBmb3JtYXQobmV3IERhdGUoMjAxNiwgMCwgMSkpXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSwgXCJ5eXl5LU1NLWRkJ1QnSEg6bW06c3MuU1NTeHh4XCIpXG4gKiAgIGBgYFxuICpcbiAqIC0gTmV3IGZvcm1hdCBzdHJpbmcgQVBJIGZvciBgZm9ybWF0YCBmdW5jdGlvblxuICogICB3aGljaCBpcyBiYXNlZCBvbiBbVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1XShodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlKS5cbiAqICAgU2VlIFt0aGlzIHBvc3RdKGh0dHBzOi8vYmxvZy5kYXRlLWZucy5vcmcvcG9zdC91bmljb2RlLXRva2Vucy1pbi1kYXRlLWZucy12Mi1zcmVhdHlraTkxamcpIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogLSBDaGFyYWN0ZXJzIGFyZSBub3cgZXNjYXBlZCB1c2luZyBzaW5nbGUgcXVvdGUgc3ltYm9scyAoYCdgKSBpbnN0ZWFkIG9mIHNxdWFyZSBicmFja2V0cy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCBkZWZhdWx0TG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cblxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlEYXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlEYXRlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKVsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gTm93IGBpc1ZhbGlkYCBkb2Vzbid0IHRocm93IGFuIGV4Y2VwdGlvblxuICogICBpZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgbm90IGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKiAgIEluc3RlYWQsIGFyZ3VtZW50IGlzIGNvbnZlcnRlZCBiZWZvcmVoYW5kIHVzaW5nIGB0b0RhdGVgLlxuICpcbiAqICAgRXhhbXBsZXM6XG4gKlxuICogICB8IGBpc1ZhbGlkYCBhcmd1bWVudCAgICAgICAgfCBCZWZvcmUgdjIuMC4wIHwgdjIuMC4wIG9ud2FyZCB8XG4gKiAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXxcbiAqICAgfCBgbmV3IERhdGUoKWAgICAgICAgICAgICAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnMjAxNi0wMS0wMScpYCAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcnKWAgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoMTQ4ODM3MDgzNTA4MSlgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZShOYU4pYCAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcyMDE2LTAxLTAxJ2AgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJydgICAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAxNDg4MzcwODM1MDgxYCAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYE5hTmAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqXG4gKiAgIFdlIGludHJvZHVjZSB0aGlzIGNoYW5nZSB0byBtYWtlICpkYXRlLWZucyogY29uc2lzdGVudCB3aXRoIEVDTUFTY3JpcHQgYmVoYXZpb3JcbiAqICAgdGhhdCB0cnkgdG8gY29lcmNlIGFyZ3VtZW50cyB0byB0aGUgZXhwZWN0ZWQgdHlwZVxuICogICAod2hpY2ggaXMgYWxzbyB0aGUgY2FzZSB3aXRoIG90aGVyICpkYXRlLWZucyogZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcblxuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiAodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuXG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uICh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIChkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIChxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIid1c2Ugc3RyaWN0J1xuXG4vLyBBIGxpbmtlZCBsaXN0IHRvIGtlZXAgdHJhY2sgb2YgcmVjZW50bHktdXNlZC1uZXNzXG5jb25zdCBZYWxsaXN0ID0gcmVxdWlyZSgneWFsbGlzdCcpXG5cbmNvbnN0IE1BWCA9IFN5bWJvbCgnbWF4JylcbmNvbnN0IExFTkdUSCA9IFN5bWJvbCgnbGVuZ3RoJylcbmNvbnN0IExFTkdUSF9DQUxDVUxBVE9SID0gU3ltYm9sKCdsZW5ndGhDYWxjdWxhdG9yJylcbmNvbnN0IEFMTE9XX1NUQUxFID0gU3ltYm9sKCdhbGxvd1N0YWxlJylcbmNvbnN0IE1BWF9BR0UgPSBTeW1ib2woJ21heEFnZScpXG5jb25zdCBESVNQT1NFID0gU3ltYm9sKCdkaXNwb3NlJylcbmNvbnN0IE5PX0RJU1BPU0VfT05fU0VUID0gU3ltYm9sKCdub0Rpc3Bvc2VPblNldCcpXG5jb25zdCBMUlVfTElTVCA9IFN5bWJvbCgnbHJ1TGlzdCcpXG5jb25zdCBDQUNIRSA9IFN5bWJvbCgnY2FjaGUnKVxuY29uc3QgVVBEQVRFX0FHRV9PTl9HRVQgPSBTeW1ib2woJ3VwZGF0ZUFnZU9uR2V0JylcblxuY29uc3QgbmFpdmVMZW5ndGggPSAoKSA9PiAxXG5cbi8vIGxydUxpc3QgaXMgYSB5YWxsaXN0IHdoZXJlIHRoZSBoZWFkIGlzIHRoZSB5b3VuZ2VzdFxuLy8gaXRlbSwgYW5kIHRoZSB0YWlsIGlzIHRoZSBvbGRlc3QuICB0aGUgbGlzdCBjb250YWlucyB0aGUgSGl0XG4vLyBvYmplY3RzIGFzIHRoZSBlbnRyaWVzLlxuLy8gRWFjaCBIaXQgb2JqZWN0IGhhcyBhIHJlZmVyZW5jZSB0byBpdHMgWWFsbGlzdC5Ob2RlLiAgVGhpc1xuLy8gbmV2ZXIgY2hhbmdlcy5cbi8vXG4vLyBjYWNoZSBpcyBhIE1hcCAob3IgUHNldWRvTWFwKSB0aGF0IG1hdGNoZXMgdGhlIGtleXMgdG9cbi8vIHRoZSBZYWxsaXN0Lk5vZGUgb2JqZWN0LlxuY2xhc3MgTFJVQ2FjaGUge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ251bWJlcicpXG4gICAgICBvcHRpb25zID0geyBtYXg6IG9wdGlvbnMgfVxuXG4gICAgaWYgKCFvcHRpb25zKVxuICAgICAgb3B0aW9ucyA9IHt9XG5cbiAgICBpZiAob3B0aW9ucy5tYXggJiYgKHR5cGVvZiBvcHRpb25zLm1heCAhPT0gJ251bWJlcicgfHwgb3B0aW9ucy5tYXggPCAwKSlcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ21heCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlcicpXG4gICAgLy8gS2luZCBvZiB3ZWlyZCB0byBoYXZlIGEgZGVmYXVsdCBtYXggb2YgSW5maW5pdHksIGJ1dCBvaCB3ZWxsLlxuICAgIGNvbnN0IG1heCA9IHRoaXNbTUFYXSA9IG9wdGlvbnMubWF4IHx8IEluZmluaXR5XG5cbiAgICBjb25zdCBsYyA9IG9wdGlvbnMubGVuZ3RoIHx8IG5haXZlTGVuZ3RoXG4gICAgdGhpc1tMRU5HVEhfQ0FMQ1VMQVRPUl0gPSAodHlwZW9mIGxjICE9PSAnZnVuY3Rpb24nKSA/IG5haXZlTGVuZ3RoIDogbGNcbiAgICB0aGlzW0FMTE9XX1NUQUxFXSA9IG9wdGlvbnMuc3RhbGUgfHwgZmFsc2VcbiAgICBpZiAob3B0aW9ucy5tYXhBZ2UgJiYgdHlwZW9mIG9wdGlvbnMubWF4QWdlICE9PSAnbnVtYmVyJylcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ21heEFnZSBtdXN0IGJlIGEgbnVtYmVyJylcbiAgICB0aGlzW01BWF9BR0VdID0gb3B0aW9ucy5tYXhBZ2UgfHwgMFxuICAgIHRoaXNbRElTUE9TRV0gPSBvcHRpb25zLmRpc3Bvc2VcbiAgICB0aGlzW05PX0RJU1BPU0VfT05fU0VUXSA9IG9wdGlvbnMubm9EaXNwb3NlT25TZXQgfHwgZmFsc2VcbiAgICB0aGlzW1VQREFURV9BR0VfT05fR0VUXSA9IG9wdGlvbnMudXBkYXRlQWdlT25HZXQgfHwgZmFsc2VcbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIC8vIHJlc2l6ZSB0aGUgY2FjaGUgd2hlbiB0aGUgbWF4IGNoYW5nZXMuXG4gIHNldCBtYXggKG1MKSB7XG4gICAgaWYgKHR5cGVvZiBtTCAhPT0gJ251bWJlcicgfHwgbUwgPCAwKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbWF4IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyJylcblxuICAgIHRoaXNbTUFYXSA9IG1MIHx8IEluZmluaXR5XG4gICAgdHJpbSh0aGlzKVxuICB9XG4gIGdldCBtYXggKCkge1xuICAgIHJldHVybiB0aGlzW01BWF1cbiAgfVxuXG4gIHNldCBhbGxvd1N0YWxlIChhbGxvd1N0YWxlKSB7XG4gICAgdGhpc1tBTExPV19TVEFMRV0gPSAhIWFsbG93U3RhbGVcbiAgfVxuICBnZXQgYWxsb3dTdGFsZSAoKSB7XG4gICAgcmV0dXJuIHRoaXNbQUxMT1dfU1RBTEVdXG4gIH1cblxuICBzZXQgbWF4QWdlIChtQSkge1xuICAgIGlmICh0eXBlb2YgbUEgIT09ICdudW1iZXInKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbWF4QWdlIG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyJylcblxuICAgIHRoaXNbTUFYX0FHRV0gPSBtQVxuICAgIHRyaW0odGhpcylcbiAgfVxuICBnZXQgbWF4QWdlICgpIHtcbiAgICByZXR1cm4gdGhpc1tNQVhfQUdFXVxuICB9XG5cbiAgLy8gcmVzaXplIHRoZSBjYWNoZSB3aGVuIHRoZSBsZW5ndGhDYWxjdWxhdG9yIGNoYW5nZXMuXG4gIHNldCBsZW5ndGhDYWxjdWxhdG9yIChsQykge1xuICAgIGlmICh0eXBlb2YgbEMgIT09ICdmdW5jdGlvbicpXG4gICAgICBsQyA9IG5haXZlTGVuZ3RoXG5cbiAgICBpZiAobEMgIT09IHRoaXNbTEVOR1RIX0NBTENVTEFUT1JdKSB7XG4gICAgICB0aGlzW0xFTkdUSF9DQUxDVUxBVE9SXSA9IGxDXG4gICAgICB0aGlzW0xFTkdUSF0gPSAwXG4gICAgICB0aGlzW0xSVV9MSVNUXS5mb3JFYWNoKGhpdCA9PiB7XG4gICAgICAgIGhpdC5sZW5ndGggPSB0aGlzW0xFTkdUSF9DQUxDVUxBVE9SXShoaXQudmFsdWUsIGhpdC5rZXkpXG4gICAgICAgIHRoaXNbTEVOR1RIXSArPSBoaXQubGVuZ3RoXG4gICAgICB9KVxuICAgIH1cbiAgICB0cmltKHRoaXMpXG4gIH1cbiAgZ2V0IGxlbmd0aENhbGN1bGF0b3IgKCkgeyByZXR1cm4gdGhpc1tMRU5HVEhfQ0FMQ1VMQVRPUl0gfVxuXG4gIGdldCBsZW5ndGggKCkgeyByZXR1cm4gdGhpc1tMRU5HVEhdIH1cbiAgZ2V0IGl0ZW1Db3VudCAoKSB7IHJldHVybiB0aGlzW0xSVV9MSVNUXS5sZW5ndGggfVxuXG4gIHJmb3JFYWNoIChmbiwgdGhpc3ApIHtcbiAgICB0aGlzcCA9IHRoaXNwIHx8IHRoaXNcbiAgICBmb3IgKGxldCB3YWxrZXIgPSB0aGlzW0xSVV9MSVNUXS50YWlsOyB3YWxrZXIgIT09IG51bGw7KSB7XG4gICAgICBjb25zdCBwcmV2ID0gd2Fsa2VyLnByZXZcbiAgICAgIGZvckVhY2hTdGVwKHRoaXMsIGZuLCB3YWxrZXIsIHRoaXNwKVxuICAgICAgd2Fsa2VyID0gcHJldlxuICAgIH1cbiAgfVxuXG4gIGZvckVhY2ggKGZuLCB0aGlzcCkge1xuICAgIHRoaXNwID0gdGhpc3AgfHwgdGhpc1xuICAgIGZvciAobGV0IHdhbGtlciA9IHRoaXNbTFJVX0xJU1RdLmhlYWQ7IHdhbGtlciAhPT0gbnVsbDspIHtcbiAgICAgIGNvbnN0IG5leHQgPSB3YWxrZXIubmV4dFxuICAgICAgZm9yRWFjaFN0ZXAodGhpcywgZm4sIHdhbGtlciwgdGhpc3ApXG4gICAgICB3YWxrZXIgPSBuZXh0XG4gICAgfVxuICB9XG5cbiAga2V5cyAoKSB7XG4gICAgcmV0dXJuIHRoaXNbTFJVX0xJU1RdLnRvQXJyYXkoKS5tYXAoayA9PiBrLmtleSlcbiAgfVxuXG4gIHZhbHVlcyAoKSB7XG4gICAgcmV0dXJuIHRoaXNbTFJVX0xJU1RdLnRvQXJyYXkoKS5tYXAoayA9PiBrLnZhbHVlKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIGlmICh0aGlzW0RJU1BPU0VdICYmXG4gICAgICAgIHRoaXNbTFJVX0xJU1RdICYmXG4gICAgICAgIHRoaXNbTFJVX0xJU1RdLmxlbmd0aCkge1xuICAgICAgdGhpc1tMUlVfTElTVF0uZm9yRWFjaChoaXQgPT4gdGhpc1tESVNQT1NFXShoaXQua2V5LCBoaXQudmFsdWUpKVxuICAgIH1cblxuICAgIHRoaXNbQ0FDSEVdID0gbmV3IE1hcCgpIC8vIGhhc2ggb2YgaXRlbXMgYnkga2V5XG4gICAgdGhpc1tMUlVfTElTVF0gPSBuZXcgWWFsbGlzdCgpIC8vIGxpc3Qgb2YgaXRlbXMgaW4gb3JkZXIgb2YgdXNlIHJlY2VuY3lcbiAgICB0aGlzW0xFTkdUSF0gPSAwIC8vIGxlbmd0aCBvZiBpdGVtcyBpbiB0aGUgbGlzdFxuICB9XG5cbiAgZHVtcCAoKSB7XG4gICAgcmV0dXJuIHRoaXNbTFJVX0xJU1RdLm1hcChoaXQgPT5cbiAgICAgIGlzU3RhbGUodGhpcywgaGl0KSA/IGZhbHNlIDoge1xuICAgICAgICBrOiBoaXQua2V5LFxuICAgICAgICB2OiBoaXQudmFsdWUsXG4gICAgICAgIGU6IGhpdC5ub3cgKyAoaGl0Lm1heEFnZSB8fCAwKVxuICAgICAgfSkudG9BcnJheSgpLmZpbHRlcihoID0+IGgpXG4gIH1cblxuICBkdW1wTHJ1ICgpIHtcbiAgICByZXR1cm4gdGhpc1tMUlVfTElTVF1cbiAgfVxuXG4gIHNldCAoa2V5LCB2YWx1ZSwgbWF4QWdlKSB7XG4gICAgbWF4QWdlID0gbWF4QWdlIHx8IHRoaXNbTUFYX0FHRV1cblxuICAgIGlmIChtYXhBZ2UgJiYgdHlwZW9mIG1heEFnZSAhPT0gJ251bWJlcicpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYXhBZ2UgbXVzdCBiZSBhIG51bWJlcicpXG5cbiAgICBjb25zdCBub3cgPSBtYXhBZ2UgPyBEYXRlLm5vdygpIDogMFxuICAgIGNvbnN0IGxlbiA9IHRoaXNbTEVOR1RIX0NBTENVTEFUT1JdKHZhbHVlLCBrZXkpXG5cbiAgICBpZiAodGhpc1tDQUNIRV0uaGFzKGtleSkpIHtcbiAgICAgIGlmIChsZW4gPiB0aGlzW01BWF0pIHtcbiAgICAgICAgZGVsKHRoaXMsIHRoaXNbQ0FDSEVdLmdldChrZXkpKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXNbQ0FDSEVdLmdldChrZXkpXG4gICAgICBjb25zdCBpdGVtID0gbm9kZS52YWx1ZVxuXG4gICAgICAvLyBkaXNwb3NlIG9mIHRoZSBvbGQgb25lIGJlZm9yZSBvdmVyd3JpdGluZ1xuICAgICAgLy8gc3BsaXQgb3V0IGludG8gMiBpZnMgZm9yIGJldHRlciBjb3ZlcmFnZSB0cmFja2luZ1xuICAgICAgaWYgKHRoaXNbRElTUE9TRV0pIHtcbiAgICAgICAgaWYgKCF0aGlzW05PX0RJU1BPU0VfT05fU0VUXSlcbiAgICAgICAgICB0aGlzW0RJU1BPU0VdKGtleSwgaXRlbS52YWx1ZSlcbiAgICAgIH1cblxuICAgICAgaXRlbS5ub3cgPSBub3dcbiAgICAgIGl0ZW0ubWF4QWdlID0gbWF4QWdlXG4gICAgICBpdGVtLnZhbHVlID0gdmFsdWVcbiAgICAgIHRoaXNbTEVOR1RIXSArPSBsZW4gLSBpdGVtLmxlbmd0aFxuICAgICAgaXRlbS5sZW5ndGggPSBsZW5cbiAgICAgIHRoaXMuZ2V0KGtleSlcbiAgICAgIHRyaW0odGhpcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgaGl0ID0gbmV3IEVudHJ5KGtleSwgdmFsdWUsIGxlbiwgbm93LCBtYXhBZ2UpXG5cbiAgICAvLyBvdmVyc2l6ZWQgb2JqZWN0cyBmYWxsIG91dCBvZiBjYWNoZSBhdXRvbWF0aWNhbGx5LlxuICAgIGlmIChoaXQubGVuZ3RoID4gdGhpc1tNQVhdKSB7XG4gICAgICBpZiAodGhpc1tESVNQT1NFXSlcbiAgICAgICAgdGhpc1tESVNQT1NFXShrZXksIHZhbHVlKVxuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzW0xFTkdUSF0gKz0gaGl0Lmxlbmd0aFxuICAgIHRoaXNbTFJVX0xJU1RdLnVuc2hpZnQoaGl0KVxuICAgIHRoaXNbQ0FDSEVdLnNldChrZXksIHRoaXNbTFJVX0xJU1RdLmhlYWQpXG4gICAgdHJpbSh0aGlzKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBoYXMgKGtleSkge1xuICAgIGlmICghdGhpc1tDQUNIRV0uaGFzKGtleSkpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IGhpdCA9IHRoaXNbQ0FDSEVdLmdldChrZXkpLnZhbHVlXG4gICAgcmV0dXJuICFpc1N0YWxlKHRoaXMsIGhpdClcbiAgfVxuXG4gIGdldCAoa2V5KSB7XG4gICAgcmV0dXJuIGdldCh0aGlzLCBrZXksIHRydWUpXG4gIH1cblxuICBwZWVrIChrZXkpIHtcbiAgICByZXR1cm4gZ2V0KHRoaXMsIGtleSwgZmFsc2UpXG4gIH1cblxuICBwb3AgKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzW0xSVV9MSVNUXS50YWlsXG4gICAgaWYgKCFub2RlKVxuICAgICAgcmV0dXJuIG51bGxcblxuICAgIGRlbCh0aGlzLCBub2RlKVxuICAgIHJldHVybiBub2RlLnZhbHVlXG4gIH1cblxuICBkZWwgKGtleSkge1xuICAgIGRlbCh0aGlzLCB0aGlzW0NBQ0hFXS5nZXQoa2V5KSlcbiAgfVxuXG4gIGxvYWQgKGFycikge1xuICAgIC8vIHJlc2V0IHRoZSBjYWNoZVxuICAgIHRoaXMucmVzZXQoKVxuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIC8vIEEgcHJldmlvdXMgc2VyaWFsaXplZCBjYWNoZSBoYXMgdGhlIG1vc3QgcmVjZW50IGl0ZW1zIGZpcnN0XG4gICAgZm9yIChsZXQgbCA9IGFyci5sZW5ndGggLSAxOyBsID49IDA7IGwtLSkge1xuICAgICAgY29uc3QgaGl0ID0gYXJyW2xdXG4gICAgICBjb25zdCBleHBpcmVzQXQgPSBoaXQuZSB8fCAwXG4gICAgICBpZiAoZXhwaXJlc0F0ID09PSAwKVxuICAgICAgICAvLyB0aGUgaXRlbSB3YXMgY3JlYXRlZCB3aXRob3V0IGV4cGlyYXRpb24gaW4gYSBub24gYWdlZCBjYWNoZVxuICAgICAgICB0aGlzLnNldChoaXQuaywgaGl0LnYpXG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgbWF4QWdlID0gZXhwaXJlc0F0IC0gbm93XG4gICAgICAgIC8vIGRvbnQgYWRkIGFscmVhZHkgZXhwaXJlZCBpdGVtc1xuICAgICAgICBpZiAobWF4QWdlID4gMCkge1xuICAgICAgICAgIHRoaXMuc2V0KGhpdC5rLCBoaXQudiwgbWF4QWdlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJ1bmUgKCkge1xuICAgIHRoaXNbQ0FDSEVdLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IGdldCh0aGlzLCBrZXksIGZhbHNlKSlcbiAgfVxufVxuXG5jb25zdCBnZXQgPSAoc2VsZiwga2V5LCBkb1VzZSkgPT4ge1xuICBjb25zdCBub2RlID0gc2VsZltDQUNIRV0uZ2V0KGtleSlcbiAgaWYgKG5vZGUpIHtcbiAgICBjb25zdCBoaXQgPSBub2RlLnZhbHVlXG4gICAgaWYgKGlzU3RhbGUoc2VsZiwgaGl0KSkge1xuICAgICAgZGVsKHNlbGYsIG5vZGUpXG4gICAgICBpZiAoIXNlbGZbQUxMT1dfU1RBTEVdKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkb1VzZSkge1xuICAgICAgICBpZiAoc2VsZltVUERBVEVfQUdFX09OX0dFVF0pXG4gICAgICAgICAgbm9kZS52YWx1ZS5ub3cgPSBEYXRlLm5vdygpXG4gICAgICAgIHNlbGZbTFJVX0xJU1RdLnVuc2hpZnROb2RlKG5vZGUpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBoaXQudmFsdWVcbiAgfVxufVxuXG5jb25zdCBpc1N0YWxlID0gKHNlbGYsIGhpdCkgPT4ge1xuICBpZiAoIWhpdCB8fCAoIWhpdC5tYXhBZ2UgJiYgIXNlbGZbTUFYX0FHRV0pKVxuICAgIHJldHVybiBmYWxzZVxuXG4gIGNvbnN0IGRpZmYgPSBEYXRlLm5vdygpIC0gaGl0Lm5vd1xuICByZXR1cm4gaGl0Lm1heEFnZSA/IGRpZmYgPiBoaXQubWF4QWdlXG4gICAgOiBzZWxmW01BWF9BR0VdICYmIChkaWZmID4gc2VsZltNQVhfQUdFXSlcbn1cblxuY29uc3QgdHJpbSA9IHNlbGYgPT4ge1xuICBpZiAoc2VsZltMRU5HVEhdID4gc2VsZltNQVhdKSB7XG4gICAgZm9yIChsZXQgd2Fsa2VyID0gc2VsZltMUlVfTElTVF0udGFpbDtcbiAgICAgIHNlbGZbTEVOR1RIXSA+IHNlbGZbTUFYXSAmJiB3YWxrZXIgIT09IG51bGw7KSB7XG4gICAgICAvLyBXZSBrbm93IHRoYXQgd2UncmUgYWJvdXQgdG8gZGVsZXRlIHRoaXMgb25lLCBhbmQgYWxzb1xuICAgICAgLy8gd2hhdCB0aGUgbmV4dCBsZWFzdCByZWNlbnRseSB1c2VkIGtleSB3aWxsIGJlLCBzbyBqdXN0XG4gICAgICAvLyBnbyBhaGVhZCBhbmQgc2V0IGl0IG5vdy5cbiAgICAgIGNvbnN0IHByZXYgPSB3YWxrZXIucHJldlxuICAgICAgZGVsKHNlbGYsIHdhbGtlcilcbiAgICAgIHdhbGtlciA9IHByZXZcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVsID0gKHNlbGYsIG5vZGUpID0+IHtcbiAgaWYgKG5vZGUpIHtcbiAgICBjb25zdCBoaXQgPSBub2RlLnZhbHVlXG4gICAgaWYgKHNlbGZbRElTUE9TRV0pXG4gICAgICBzZWxmW0RJU1BPU0VdKGhpdC5rZXksIGhpdC52YWx1ZSlcblxuICAgIHNlbGZbTEVOR1RIXSAtPSBoaXQubGVuZ3RoXG4gICAgc2VsZltDQUNIRV0uZGVsZXRlKGhpdC5rZXkpXG4gICAgc2VsZltMUlVfTElTVF0ucmVtb3ZlTm9kZShub2RlKVxuICB9XG59XG5cbmNsYXNzIEVudHJ5IHtcbiAgY29uc3RydWN0b3IgKGtleSwgdmFsdWUsIGxlbmd0aCwgbm93LCBtYXhBZ2UpIHtcbiAgICB0aGlzLmtleSA9IGtleVxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoXG4gICAgdGhpcy5ub3cgPSBub3dcbiAgICB0aGlzLm1heEFnZSA9IG1heEFnZSB8fCAwXG4gIH1cbn1cblxuY29uc3QgZm9yRWFjaFN0ZXAgPSAoc2VsZiwgZm4sIG5vZGUsIHRoaXNwKSA9PiB7XG4gIGxldCBoaXQgPSBub2RlLnZhbHVlXG4gIGlmIChpc1N0YWxlKHNlbGYsIGhpdCkpIHtcbiAgICBkZWwoc2VsZiwgbm9kZSlcbiAgICBpZiAoIXNlbGZbQUxMT1dfU1RBTEVdKVxuICAgICAgaGl0ID0gdW5kZWZpbmVkXG4gIH1cbiAgaWYgKGhpdClcbiAgICBmbi5jYWxsKHRoaXNwLCBoaXQudmFsdWUsIGhpdC5rZXksIHNlbGYpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gTFJVQ2FjaGVcbiIsImNvbnN0IEFOWSA9IFN5bWJvbCgnU2VtVmVyIEFOWScpXG4vLyBob2lzdGVkIGNsYXNzIGZvciBjeWNsaWMgZGVwZW5kZW5jeVxuY2xhc3MgQ29tcGFyYXRvciB7XG4gIHN0YXRpYyBnZXQgQU5ZICgpIHtcbiAgICByZXR1cm4gQU5ZXG4gIH1cblxuICBjb25zdHJ1Y3RvciAoY29tcCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBwYXJzZU9wdGlvbnMob3B0aW9ucylcblxuICAgIGlmIChjb21wIGluc3RhbmNlb2YgQ29tcGFyYXRvcikge1xuICAgICAgaWYgKGNvbXAubG9vc2UgPT09ICEhb3B0aW9ucy5sb29zZSkge1xuICAgICAgICByZXR1cm4gY29tcFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcCA9IGNvbXAudmFsdWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkZWJ1ZygnY29tcGFyYXRvcicsIGNvbXAsIG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMubG9vc2UgPSAhIW9wdGlvbnMubG9vc2VcbiAgICB0aGlzLnBhcnNlKGNvbXApXG5cbiAgICBpZiAodGhpcy5zZW12ZXIgPT09IEFOWSkge1xuICAgICAgdGhpcy52YWx1ZSA9ICcnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm9wZXJhdG9yICsgdGhpcy5zZW12ZXIudmVyc2lvblxuICAgIH1cblxuICAgIGRlYnVnKCdjb21wJywgdGhpcylcbiAgfVxuXG4gIHBhcnNlIChjb21wKSB7XG4gICAgY29uc3QgciA9IHRoaXMub3B0aW9ucy5sb29zZSA/IHJlW3QuQ09NUEFSQVRPUkxPT1NFXSA6IHJlW3QuQ09NUEFSQVRPUl1cbiAgICBjb25zdCBtID0gY29tcC5tYXRjaChyKVxuXG4gICAgaWYgKCFtKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIGNvbXBhcmF0b3I6ICR7Y29tcH1gKVxuICAgIH1cblxuICAgIHRoaXMub3BlcmF0b3IgPSBtWzFdICE9PSB1bmRlZmluZWQgPyBtWzFdIDogJydcbiAgICBpZiAodGhpcy5vcGVyYXRvciA9PT0gJz0nKSB7XG4gICAgICB0aGlzLm9wZXJhdG9yID0gJydcbiAgICB9XG5cbiAgICAvLyBpZiBpdCBsaXRlcmFsbHkgaXMganVzdCAnPicgb3IgJycgdGhlbiBhbGxvdyBhbnl0aGluZy5cbiAgICBpZiAoIW1bMl0pIHtcbiAgICAgIHRoaXMuc2VtdmVyID0gQU5ZXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VtdmVyID0gbmV3IFNlbVZlcihtWzJdLCB0aGlzLm9wdGlvbnMubG9vc2UpXG4gICAgfVxuICB9XG5cbiAgdG9TdHJpbmcgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICB0ZXN0ICh2ZXJzaW9uKSB7XG4gICAgZGVidWcoJ0NvbXBhcmF0b3IudGVzdCcsIHZlcnNpb24sIHRoaXMub3B0aW9ucy5sb29zZSlcblxuICAgIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZIHx8IHZlcnNpb24gPT09IEFOWSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLm9wdGlvbnMpXG4gICAgICB9IGNhdGNoIChlcikge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY21wKHZlcnNpb24sIHRoaXMub3BlcmF0b3IsIHRoaXMuc2VtdmVyLCB0aGlzLm9wdGlvbnMpXG4gIH1cblxuICBpbnRlcnNlY3RzIChjb21wLCBvcHRpb25zKSB7XG4gICAgaWYgKCEoY29tcCBpbnN0YW5jZW9mIENvbXBhcmF0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhIENvbXBhcmF0b3IgaXMgcmVxdWlyZWQnKVxuICAgIH1cblxuICAgIGlmICghb3B0aW9ucyB8fCB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIGxvb3NlOiAhIW9wdGlvbnMsXG4gICAgICAgIGluY2x1ZGVQcmVyZWxlYXNlOiBmYWxzZSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcGVyYXRvciA9PT0gJycpIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlID09PSAnJykge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBSYW5nZShjb21wLnZhbHVlLCBvcHRpb25zKS50ZXN0KHRoaXMudmFsdWUpXG4gICAgfSBlbHNlIGlmIChjb21wLm9wZXJhdG9yID09PSAnJykge1xuICAgICAgaWYgKGNvbXAudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJhbmdlKHRoaXMudmFsdWUsIG9wdGlvbnMpLnRlc3QoY29tcC5zZW12ZXIpXG4gICAgfVxuXG4gICAgY29uc3Qgc2FtZURpcmVjdGlvbkluY3JlYXNpbmcgPVxuICAgICAgKHRoaXMub3BlcmF0b3IgPT09ICc+PScgfHwgdGhpcy5vcGVyYXRvciA9PT0gJz4nKSAmJlxuICAgICAgKGNvbXAub3BlcmF0b3IgPT09ICc+PScgfHwgY29tcC5vcGVyYXRvciA9PT0gJz4nKVxuICAgIGNvbnN0IHNhbWVEaXJlY3Rpb25EZWNyZWFzaW5nID1cbiAgICAgICh0aGlzLm9wZXJhdG9yID09PSAnPD0nIHx8IHRoaXMub3BlcmF0b3IgPT09ICc8JykgJiZcbiAgICAgIChjb21wLm9wZXJhdG9yID09PSAnPD0nIHx8IGNvbXAub3BlcmF0b3IgPT09ICc8JylcbiAgICBjb25zdCBzYW1lU2VtVmVyID0gdGhpcy5zZW12ZXIudmVyc2lvbiA9PT0gY29tcC5zZW12ZXIudmVyc2lvblxuICAgIGNvbnN0IGRpZmZlcmVudERpcmVjdGlvbnNJbmNsdXNpdmUgPVxuICAgICAgKHRoaXMub3BlcmF0b3IgPT09ICc+PScgfHwgdGhpcy5vcGVyYXRvciA9PT0gJzw9JykgJiZcbiAgICAgIChjb21wLm9wZXJhdG9yID09PSAnPj0nIHx8IGNvbXAub3BlcmF0b3IgPT09ICc8PScpXG4gICAgY29uc3Qgb3Bwb3NpdGVEaXJlY3Rpb25zTGVzc1RoYW4gPVxuICAgICAgY21wKHRoaXMuc2VtdmVyLCAnPCcsIGNvbXAuc2VtdmVyLCBvcHRpb25zKSAmJlxuICAgICAgKHRoaXMub3BlcmF0b3IgPT09ICc+PScgfHwgdGhpcy5vcGVyYXRvciA9PT0gJz4nKSAmJlxuICAgICAgICAoY29tcC5vcGVyYXRvciA9PT0gJzw9JyB8fCBjb21wLm9wZXJhdG9yID09PSAnPCcpXG4gICAgY29uc3Qgb3Bwb3NpdGVEaXJlY3Rpb25zR3JlYXRlclRoYW4gPVxuICAgICAgY21wKHRoaXMuc2VtdmVyLCAnPicsIGNvbXAuc2VtdmVyLCBvcHRpb25zKSAmJlxuICAgICAgKHRoaXMub3BlcmF0b3IgPT09ICc8PScgfHwgdGhpcy5vcGVyYXRvciA9PT0gJzwnKSAmJlxuICAgICAgICAoY29tcC5vcGVyYXRvciA9PT0gJz49JyB8fCBjb21wLm9wZXJhdG9yID09PSAnPicpXG5cbiAgICByZXR1cm4gKFxuICAgICAgc2FtZURpcmVjdGlvbkluY3JlYXNpbmcgfHxcbiAgICAgIHNhbWVEaXJlY3Rpb25EZWNyZWFzaW5nIHx8XG4gICAgICAoc2FtZVNlbVZlciAmJiBkaWZmZXJlbnREaXJlY3Rpb25zSW5jbHVzaXZlKSB8fFxuICAgICAgb3Bwb3NpdGVEaXJlY3Rpb25zTGVzc1RoYW4gfHxcbiAgICAgIG9wcG9zaXRlRGlyZWN0aW9uc0dyZWF0ZXJUaGFuXG4gICAgKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcGFyYXRvclxuXG5jb25zdCBwYXJzZU9wdGlvbnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9wYXJzZS1vcHRpb25zJylcbmNvbnN0IHsgcmUsIHQgfSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3JlJylcbmNvbnN0IGNtcCA9IHJlcXVpcmUoJy4uL2Z1bmN0aW9ucy9jbXAnKVxuY29uc3QgZGVidWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9kZWJ1ZycpXG5jb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuL3NlbXZlcicpXG5jb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4vcmFuZ2UnKVxuIiwiLy8gaG9pc3RlZCBjbGFzcyBmb3IgY3ljbGljIGRlcGVuZGVuY3lcbmNsYXNzIFJhbmdlIHtcbiAgY29uc3RydWN0b3IgKHJhbmdlLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHBhcnNlT3B0aW9ucyhvcHRpb25zKVxuXG4gICAgaWYgKHJhbmdlIGluc3RhbmNlb2YgUmFuZ2UpIHtcbiAgICAgIGlmIChcbiAgICAgICAgcmFuZ2UubG9vc2UgPT09ICEhb3B0aW9ucy5sb29zZSAmJlxuICAgICAgICByYW5nZS5pbmNsdWRlUHJlcmVsZWFzZSA9PT0gISFvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHJhbmdlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLnJhdywgb3B0aW9ucylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmFuZ2UgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSB7XG4gICAgICAvLyBqdXN0IHB1dCBpdCBpbiB0aGUgc2V0IGFuZCByZXR1cm5cbiAgICAgIHRoaXMucmF3ID0gcmFuZ2UudmFsdWVcbiAgICAgIHRoaXMuc2V0ID0gW1tyYW5nZV1dXG4gICAgICB0aGlzLmZvcm1hdCgpXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmxvb3NlID0gISFvcHRpb25zLmxvb3NlXG4gICAgdGhpcy5pbmNsdWRlUHJlcmVsZWFzZSA9ICEhb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZVxuXG4gICAgLy8gRmlyc3QsIHNwbGl0IGJhc2VkIG9uIGJvb2xlYW4gb3IgfHxcbiAgICB0aGlzLnJhdyA9IHJhbmdlXG4gICAgdGhpcy5zZXQgPSByYW5nZVxuICAgICAgLnNwbGl0KCd8fCcpXG4gICAgICAvLyBtYXAgdGhlIHJhbmdlIHRvIGEgMmQgYXJyYXkgb2YgY29tcGFyYXRvcnNcbiAgICAgIC5tYXAociA9PiB0aGlzLnBhcnNlUmFuZ2Uoci50cmltKCkpKVxuICAgICAgLy8gdGhyb3cgb3V0IGFueSBjb21wYXJhdG9yIGxpc3RzIHRoYXQgYXJlIGVtcHR5XG4gICAgICAvLyB0aGlzIGdlbmVyYWxseSBtZWFucyB0aGF0IGl0IHdhcyBub3QgYSB2YWxpZCByYW5nZSwgd2hpY2ggaXMgYWxsb3dlZFxuICAgICAgLy8gaW4gbG9vc2UgbW9kZSwgYnV0IHdpbGwgc3RpbGwgdGhyb3cgaWYgdGhlIFdIT0xFIHJhbmdlIGlzIGludmFsaWQuXG4gICAgICAuZmlsdGVyKGMgPT4gYy5sZW5ndGgpXG5cbiAgICBpZiAoIXRoaXMuc2V0Lmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBTZW1WZXIgUmFuZ2U6ICR7cmFuZ2V9YClcbiAgICB9XG5cbiAgICAvLyBpZiB3ZSBoYXZlIGFueSB0aGF0IGFyZSBub3QgdGhlIG51bGwgc2V0LCB0aHJvdyBvdXQgbnVsbCBzZXRzLlxuICAgIGlmICh0aGlzLnNldC5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBrZWVwIHRoZSBmaXJzdCBvbmUsIGluIGNhc2UgdGhleSdyZSBhbGwgbnVsbCBzZXRzXG4gICAgICBjb25zdCBmaXJzdCA9IHRoaXMuc2V0WzBdXG4gICAgICB0aGlzLnNldCA9IHRoaXMuc2V0LmZpbHRlcihjID0+ICFpc051bGxTZXQoY1swXSkpXG4gICAgICBpZiAodGhpcy5zZXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuc2V0ID0gW2ZpcnN0XVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNldC5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIGlmIHdlIGhhdmUgYW55IHRoYXQgYXJlICosIHRoZW4gdGhlIHJhbmdlIGlzIGp1c3QgKlxuICAgICAgICBmb3IgKGNvbnN0IGMgb2YgdGhpcy5zZXQpIHtcbiAgICAgICAgICBpZiAoYy5sZW5ndGggPT09IDEgJiYgaXNBbnkoY1swXSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0ID0gW2NdXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZm9ybWF0KClcbiAgfVxuXG4gIGZvcm1hdCAoKSB7XG4gICAgdGhpcy5yYW5nZSA9IHRoaXMuc2V0XG4gICAgICAubWFwKChjb21wcykgPT4ge1xuICAgICAgICByZXR1cm4gY29tcHMuam9pbignICcpLnRyaW0oKVxuICAgICAgfSlcbiAgICAgIC5qb2luKCd8fCcpXG4gICAgICAudHJpbSgpXG4gICAgcmV0dXJuIHRoaXMucmFuZ2VcbiAgfVxuXG4gIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy5yYW5nZVxuICB9XG5cbiAgcGFyc2VSYW5nZSAocmFuZ2UpIHtcbiAgICByYW5nZSA9IHJhbmdlLnRyaW0oKVxuXG4gICAgLy8gbWVtb2l6ZSByYW5nZSBwYXJzaW5nIGZvciBwZXJmb3JtYW5jZS5cbiAgICAvLyB0aGlzIGlzIGEgdmVyeSBob3QgcGF0aCwgYW5kIGZ1bGx5IGRldGVybWluaXN0aWMuXG4gICAgY29uc3QgbWVtb09wdHMgPSBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMpLmpvaW4oJywnKVxuICAgIGNvbnN0IG1lbW9LZXkgPSBgcGFyc2VSYW5nZToke21lbW9PcHRzfToke3JhbmdlfWBcbiAgICBjb25zdCBjYWNoZWQgPSBjYWNoZS5nZXQobWVtb0tleSlcbiAgICBpZiAoY2FjaGVkKSB7XG4gICAgICByZXR1cm4gY2FjaGVkXG4gICAgfVxuXG4gICAgY29uc3QgbG9vc2UgPSB0aGlzLm9wdGlvbnMubG9vc2VcbiAgICAvLyBgMS4yLjMgLSAxLjIuNGAgPT4gYD49MS4yLjMgPD0xLjIuNGBcbiAgICBjb25zdCBociA9IGxvb3NlID8gcmVbdC5IWVBIRU5SQU5HRUxPT1NFXSA6IHJlW3QuSFlQSEVOUkFOR0VdXG4gICAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKGhyLCBoeXBoZW5SZXBsYWNlKHRoaXMub3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSkpXG4gICAgZGVidWcoJ2h5cGhlbiByZXBsYWNlJywgcmFuZ2UpXG4gICAgLy8gYD4gMS4yLjMgPCAxLjIuNWAgPT4gYD4xLjIuMyA8MS4yLjVgXG4gICAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW3QuQ09NUEFSQVRPUlRSSU1dLCBjb21wYXJhdG9yVHJpbVJlcGxhY2UpXG4gICAgZGVidWcoJ2NvbXBhcmF0b3IgdHJpbScsIHJhbmdlKVxuXG4gICAgLy8gYH4gMS4yLjNgID0+IGB+MS4yLjNgXG4gICAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW3QuVElMREVUUklNXSwgdGlsZGVUcmltUmVwbGFjZSlcblxuICAgIC8vIGBeIDEuMi4zYCA9PiBgXjEuMi4zYFxuICAgIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVt0LkNBUkVUVFJJTV0sIGNhcmV0VHJpbVJlcGxhY2UpXG5cbiAgICAvLyBub3JtYWxpemUgc3BhY2VzXG4gICAgcmFuZ2UgPSByYW5nZS5zcGxpdCgvXFxzKy8pLmpvaW4oJyAnKVxuXG4gICAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHJhbmdlIGlzIGNvbXBsZXRlbHkgdHJpbW1lZCBhbmRcbiAgICAvLyByZWFkeSB0byBiZSBzcGxpdCBpbnRvIGNvbXBhcmF0b3JzLlxuXG4gICAgbGV0IHJhbmdlTGlzdCA9IHJhbmdlXG4gICAgICAuc3BsaXQoJyAnKVxuICAgICAgLm1hcChjb21wID0+IHBhcnNlQ29tcGFyYXRvcihjb21wLCB0aGlzLm9wdGlvbnMpKVxuICAgICAgLmpvaW4oJyAnKVxuICAgICAgLnNwbGl0KC9cXHMrLylcbiAgICAgIC8vID49MC4wLjAgaXMgZXF1aXZhbGVudCB0byAqXG4gICAgICAubWFwKGNvbXAgPT4gcmVwbGFjZUdURTAoY29tcCwgdGhpcy5vcHRpb25zKSlcblxuICAgIGlmIChsb29zZSkge1xuICAgICAgLy8gaW4gbG9vc2UgbW9kZSwgdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgdmFsaWQgY29tcGFyYXRvcnNcbiAgICAgIHJhbmdlTGlzdCA9IHJhbmdlTGlzdC5maWx0ZXIoY29tcCA9PiB7XG4gICAgICAgIGRlYnVnKCdsb29zZSBpbnZhbGlkIGZpbHRlcicsIGNvbXAsIHRoaXMub3B0aW9ucylcbiAgICAgICAgcmV0dXJuICEhY29tcC5tYXRjaChyZVt0LkNPTVBBUkFUT1JMT09TRV0pXG4gICAgICB9KVxuICAgIH1cbiAgICBkZWJ1ZygncmFuZ2UgbGlzdCcsIHJhbmdlTGlzdClcblxuICAgIC8vIGlmIGFueSBjb21wYXJhdG9ycyBhcmUgdGhlIG51bGwgc2V0LCB0aGVuIHJlcGxhY2Ugd2l0aCBKVVNUIG51bGwgc2V0XG4gICAgLy8gaWYgbW9yZSB0aGFuIG9uZSBjb21wYXJhdG9yLCByZW1vdmUgYW55ICogY29tcGFyYXRvcnNcbiAgICAvLyBhbHNvLCBkb24ndCBpbmNsdWRlIHRoZSBzYW1lIGNvbXBhcmF0b3IgbW9yZSB0aGFuIG9uY2VcbiAgICBjb25zdCByYW5nZU1hcCA9IG5ldyBNYXAoKVxuICAgIGNvbnN0IGNvbXBhcmF0b3JzID0gcmFuZ2VMaXN0Lm1hcChjb21wID0+IG5ldyBDb21wYXJhdG9yKGNvbXAsIHRoaXMub3B0aW9ucykpXG4gICAgZm9yIChjb25zdCBjb21wIG9mIGNvbXBhcmF0b3JzKSB7XG4gICAgICBpZiAoaXNOdWxsU2V0KGNvbXApKSB7XG4gICAgICAgIHJldHVybiBbY29tcF1cbiAgICAgIH1cbiAgICAgIHJhbmdlTWFwLnNldChjb21wLnZhbHVlLCBjb21wKVxuICAgIH1cbiAgICBpZiAocmFuZ2VNYXAuc2l6ZSA+IDEgJiYgcmFuZ2VNYXAuaGFzKCcnKSkge1xuICAgICAgcmFuZ2VNYXAuZGVsZXRlKCcnKVxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IFsuLi5yYW5nZU1hcC52YWx1ZXMoKV1cbiAgICBjYWNoZS5zZXQobWVtb0tleSwgcmVzdWx0KVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGludGVyc2VjdHMgKHJhbmdlLCBvcHRpb25zKSB7XG4gICAgaWYgKCEocmFuZ2UgaW5zdGFuY2VvZiBSYW5nZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2EgUmFuZ2UgaXMgcmVxdWlyZWQnKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNldC5zb21lKCh0aGlzQ29tcGFyYXRvcnMpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGlzU2F0aXNmaWFibGUodGhpc0NvbXBhcmF0b3JzLCBvcHRpb25zKSAmJlxuICAgICAgICByYW5nZS5zZXQuc29tZSgocmFuZ2VDb21wYXJhdG9ycykgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBpc1NhdGlzZmlhYmxlKHJhbmdlQ29tcGFyYXRvcnMsIG9wdGlvbnMpICYmXG4gICAgICAgICAgICB0aGlzQ29tcGFyYXRvcnMuZXZlcnkoKHRoaXNDb21wYXJhdG9yKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiByYW5nZUNvbXBhcmF0b3JzLmV2ZXJ5KChyYW5nZUNvbXBhcmF0b3IpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc0NvbXBhcmF0b3IuaW50ZXJzZWN0cyhyYW5nZUNvbXBhcmF0b3IsIG9wdGlvbnMpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgLy8gaWYgQU5ZIG9mIHRoZSBzZXRzIG1hdGNoIEFMTCBvZiBpdHMgY29tcGFyYXRvcnMsIHRoZW4gcGFzc1xuICB0ZXN0ICh2ZXJzaW9uKSB7XG4gICAgaWYgKCF2ZXJzaW9uKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLm9wdGlvbnMpXG4gICAgICB9IGNhdGNoIChlcikge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGVzdFNldCh0aGlzLnNldFtpXSwgdmVyc2lvbiwgdGhpcy5vcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBSYW5nZVxuXG5jb25zdCBMUlUgPSByZXF1aXJlKCdscnUtY2FjaGUnKVxuY29uc3QgY2FjaGUgPSBuZXcgTFJVKHsgbWF4OiAxMDAwIH0pXG5cbmNvbnN0IHBhcnNlT3B0aW9ucyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3BhcnNlLW9wdGlvbnMnKVxuY29uc3QgQ29tcGFyYXRvciA9IHJlcXVpcmUoJy4vY29tcGFyYXRvcicpXG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2RlYnVnJylcbmNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4vc2VtdmVyJylcbmNvbnN0IHtcbiAgcmUsXG4gIHQsXG4gIGNvbXBhcmF0b3JUcmltUmVwbGFjZSxcbiAgdGlsZGVUcmltUmVwbGFjZSxcbiAgY2FyZXRUcmltUmVwbGFjZSxcbn0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9yZScpXG5cbmNvbnN0IGlzTnVsbFNldCA9IGMgPT4gYy52YWx1ZSA9PT0gJzwwLjAuMC0wJ1xuY29uc3QgaXNBbnkgPSBjID0+IGMudmFsdWUgPT09ICcnXG5cbi8vIHRha2UgYSBzZXQgb2YgY29tcGFyYXRvcnMgYW5kIGRldGVybWluZSB3aGV0aGVyIHRoZXJlXG4vLyBleGlzdHMgYSB2ZXJzaW9uIHdoaWNoIGNhbiBzYXRpc2Z5IGl0XG5jb25zdCBpc1NhdGlzZmlhYmxlID0gKGNvbXBhcmF0b3JzLCBvcHRpb25zKSA9PiB7XG4gIGxldCByZXN1bHQgPSB0cnVlXG4gIGNvbnN0IHJlbWFpbmluZ0NvbXBhcmF0b3JzID0gY29tcGFyYXRvcnMuc2xpY2UoKVxuICBsZXQgdGVzdENvbXBhcmF0b3IgPSByZW1haW5pbmdDb21wYXJhdG9ycy5wb3AoKVxuXG4gIHdoaWxlIChyZXN1bHQgJiYgcmVtYWluaW5nQ29tcGFyYXRvcnMubGVuZ3RoKSB7XG4gICAgcmVzdWx0ID0gcmVtYWluaW5nQ29tcGFyYXRvcnMuZXZlcnkoKG90aGVyQ29tcGFyYXRvcikgPT4ge1xuICAgICAgcmV0dXJuIHRlc3RDb21wYXJhdG9yLmludGVyc2VjdHMob3RoZXJDb21wYXJhdG9yLCBvcHRpb25zKVxuICAgIH0pXG5cbiAgICB0ZXN0Q29tcGFyYXRvciA9IHJlbWFpbmluZ0NvbXBhcmF0b3JzLnBvcCgpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8vIGNvbXByaXNlZCBvZiB4cmFuZ2VzLCB0aWxkZXMsIHN0YXJzLCBhbmQgZ3RsdCdzIGF0IHRoaXMgcG9pbnQuXG4vLyBhbHJlYWR5IHJlcGxhY2VkIHRoZSBoeXBoZW4gcmFuZ2VzXG4vLyB0dXJuIGludG8gYSBzZXQgb2YgSlVTVCBjb21wYXJhdG9ycy5cbmNvbnN0IHBhcnNlQ29tcGFyYXRvciA9IChjb21wLCBvcHRpb25zKSA9PiB7XG4gIGRlYnVnKCdjb21wJywgY29tcCwgb3B0aW9ucylcbiAgY29tcCA9IHJlcGxhY2VDYXJldHMoY29tcCwgb3B0aW9ucylcbiAgZGVidWcoJ2NhcmV0JywgY29tcClcbiAgY29tcCA9IHJlcGxhY2VUaWxkZXMoY29tcCwgb3B0aW9ucylcbiAgZGVidWcoJ3RpbGRlcycsIGNvbXApXG4gIGNvbXAgPSByZXBsYWNlWFJhbmdlcyhjb21wLCBvcHRpb25zKVxuICBkZWJ1ZygneHJhbmdlJywgY29tcClcbiAgY29tcCA9IHJlcGxhY2VTdGFycyhjb21wLCBvcHRpb25zKVxuICBkZWJ1Zygnc3RhcnMnLCBjb21wKVxuICByZXR1cm4gY29tcFxufVxuXG5jb25zdCBpc1ggPSBpZCA9PiAhaWQgfHwgaWQudG9Mb3dlckNhc2UoKSA9PT0gJ3gnIHx8IGlkID09PSAnKidcblxuLy8gfiwgfj4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyB+MiwgfjIueCwgfjIueC54LCB+PjIsIH4+Mi54IH4+Mi54LnggLS0+ID49Mi4wLjAgPDMuMC4wLTBcbi8vIH4yLjAsIH4yLjAueCwgfj4yLjAsIH4+Mi4wLnggLS0+ID49Mi4wLjAgPDIuMS4wLTBcbi8vIH4xLjIsIH4xLjIueCwgfj4xLjIsIH4+MS4yLnggLS0+ID49MS4yLjAgPDEuMy4wLTBcbi8vIH4xLjIuMywgfj4xLjIuMyAtLT4gPj0xLjIuMyA8MS4zLjAtMFxuLy8gfjEuMi4wLCB+PjEuMi4wIC0tPiA+PTEuMi4wIDwxLjMuMC0wXG5jb25zdCByZXBsYWNlVGlsZGVzID0gKGNvbXAsIG9wdGlvbnMpID0+XG4gIGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKChjKSA9PiB7XG4gICAgcmV0dXJuIHJlcGxhY2VUaWxkZShjLCBvcHRpb25zKVxuICB9KS5qb2luKCcgJylcblxuY29uc3QgcmVwbGFjZVRpbGRlID0gKGNvbXAsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgciA9IG9wdGlvbnMubG9vc2UgPyByZVt0LlRJTERFTE9PU0VdIDogcmVbdC5USUxERV1cbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCAoXywgTSwgbSwgcCwgcHIpID0+IHtcbiAgICBkZWJ1ZygndGlsZGUnLCBjb21wLCBfLCBNLCBtLCBwLCBwcilcbiAgICBsZXQgcmV0XG5cbiAgICBpZiAoaXNYKE0pKSB7XG4gICAgICByZXQgPSAnJ1xuICAgIH0gZWxzZSBpZiAoaXNYKG0pKSB7XG4gICAgICByZXQgPSBgPj0ke019LjAuMCA8JHsrTSArIDF9LjAuMC0wYFxuICAgIH0gZWxzZSBpZiAoaXNYKHApKSB7XG4gICAgICAvLyB+MS4yID09ID49MS4yLjAgPDEuMy4wLTBcbiAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4wIDwke019LiR7K20gKyAxfS4wLTBgXG4gICAgfSBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VUaWxkZSBwcicsIHByKVxuICAgICAgcmV0ID0gYD49JHtNfS4ke219LiR7cH0tJHtwclxuICAgICAgfSA8JHtNfS4keyttICsgMX0uMC0wYFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB+MS4yLjMgPT0gPj0xLjIuMyA8MS4zLjAtMFxuICAgICAgcmV0ID0gYD49JHtNfS4ke219LiR7cFxuICAgICAgfSA8JHtNfS4keyttICsgMX0uMC0wYFxuICAgIH1cblxuICAgIGRlYnVnKCd0aWxkZSByZXR1cm4nLCByZXQpXG4gICAgcmV0dXJuIHJldFxuICB9KVxufVxuXG4vLyBeIC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gXjIsIF4yLngsIF4yLngueCAtLT4gPj0yLjAuMCA8My4wLjAtMFxuLy8gXjIuMCwgXjIuMC54IC0tPiA+PTIuMC4wIDwzLjAuMC0wXG4vLyBeMS4yLCBeMS4yLnggLS0+ID49MS4yLjAgPDIuMC4wLTBcbi8vIF4xLjIuMyAtLT4gPj0xLjIuMyA8Mi4wLjAtMFxuLy8gXjEuMi4wIC0tPiA+PTEuMi4wIDwyLjAuMC0wXG5jb25zdCByZXBsYWNlQ2FyZXRzID0gKGNvbXAsIG9wdGlvbnMpID0+XG4gIGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKChjKSA9PiB7XG4gICAgcmV0dXJuIHJlcGxhY2VDYXJldChjLCBvcHRpb25zKVxuICB9KS5qb2luKCcgJylcblxuY29uc3QgcmVwbGFjZUNhcmV0ID0gKGNvbXAsIG9wdGlvbnMpID0+IHtcbiAgZGVidWcoJ2NhcmV0JywgY29tcCwgb3B0aW9ucylcbiAgY29uc3QgciA9IG9wdGlvbnMubG9vc2UgPyByZVt0LkNBUkVUTE9PU0VdIDogcmVbdC5DQVJFVF1cbiAgY29uc3QgeiA9IG9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UgPyAnLTAnIDogJydcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCAoXywgTSwgbSwgcCwgcHIpID0+IHtcbiAgICBkZWJ1ZygnY2FyZXQnLCBjb21wLCBfLCBNLCBtLCBwLCBwcilcbiAgICBsZXQgcmV0XG5cbiAgICBpZiAoaXNYKE0pKSB7XG4gICAgICByZXQgPSAnJ1xuICAgIH0gZWxzZSBpZiAoaXNYKG0pKSB7XG4gICAgICByZXQgPSBgPj0ke019LjAuMCR7en0gPCR7K00gKyAxfS4wLjAtMGBcbiAgICB9IGVsc2UgaWYgKGlzWChwKSkge1xuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICByZXQgPSBgPj0ke019LiR7bX0uMCR7en0gPCR7TX0uJHsrbSArIDF9LjAtMGBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4wJHt6fSA8JHsrTSArIDF9LjAuMC0wYFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocHIpIHtcbiAgICAgIGRlYnVnKCdyZXBsYWNlQ2FyZXQgcHInLCBwcilcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJykge1xuICAgICAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4ke3B9LSR7cHJcbiAgICAgICAgICB9IDwke019LiR7bX0uJHsrcCArIDF9LTBgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0ID0gYD49JHtNfS4ke219LiR7cH0tJHtwclxuICAgICAgICAgIH0gPCR7TX0uJHsrbSArIDF9LjAtMGBcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gYD49JHtNfS4ke219LiR7cH0tJHtwclxuICAgICAgICB9IDwkeytNICsgMX0uMC4wLTBgXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnKCdubyBwcicpXG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIGlmIChtID09PSAnMCcpIHtcbiAgICAgICAgICByZXQgPSBgPj0ke019LiR7bX0uJHtwXG4gICAgICAgICAgfSR7en0gPCR7TX0uJHttfS4keytwICsgMX0tMGBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXQgPSBgPj0ke019LiR7bX0uJHtwXG4gICAgICAgICAgfSR7en0gPCR7TX0uJHsrbSArIDF9LjAtMGBcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gYD49JHtNfS4ke219LiR7cFxuICAgICAgICB9IDwkeytNICsgMX0uMC4wLTBgXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGVidWcoJ2NhcmV0IHJldHVybicsIHJldClcbiAgICByZXR1cm4gcmV0XG4gIH0pXG59XG5cbmNvbnN0IHJlcGxhY2VYUmFuZ2VzID0gKGNvbXAsIG9wdGlvbnMpID0+IHtcbiAgZGVidWcoJ3JlcGxhY2VYUmFuZ2VzJywgY29tcCwgb3B0aW9ucylcbiAgcmV0dXJuIGNvbXAuc3BsaXQoL1xccysvKS5tYXAoKGMpID0+IHtcbiAgICByZXR1cm4gcmVwbGFjZVhSYW5nZShjLCBvcHRpb25zKVxuICB9KS5qb2luKCcgJylcbn1cblxuY29uc3QgcmVwbGFjZVhSYW5nZSA9IChjb21wLCBvcHRpb25zKSA9PiB7XG4gIGNvbXAgPSBjb21wLnRyaW0oKVxuICBjb25zdCByID0gb3B0aW9ucy5sb29zZSA/IHJlW3QuWFJBTkdFTE9PU0VdIDogcmVbdC5YUkFOR0VdXG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgKHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpID0+IHtcbiAgICBkZWJ1ZygneFJhbmdlJywgY29tcCwgcmV0LCBndGx0LCBNLCBtLCBwLCBwcilcbiAgICBjb25zdCB4TSA9IGlzWChNKVxuICAgIGNvbnN0IHhtID0geE0gfHwgaXNYKG0pXG4gICAgY29uc3QgeHAgPSB4bSB8fCBpc1gocClcbiAgICBjb25zdCBhbnlYID0geHBcblxuICAgIGlmIChndGx0ID09PSAnPScgJiYgYW55WCkge1xuICAgICAgZ3RsdCA9ICcnXG4gICAgfVxuXG4gICAgLy8gaWYgd2UncmUgaW5jbHVkaW5nIHByZXJlbGVhc2VzIGluIHRoZSBtYXRjaCwgdGhlbiB3ZSBuZWVkXG4gICAgLy8gdG8gZml4IHRoaXMgdG8gLTAsIHRoZSBsb3dlc3QgcG9zc2libGUgcHJlcmVsZWFzZSB2YWx1ZVxuICAgIHByID0gb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSA/ICctMCcgOiAnJ1xuXG4gICAgaWYgKHhNKSB7XG4gICAgICBpZiAoZ3RsdCA9PT0gJz4nIHx8IGd0bHQgPT09ICc8Jykge1xuICAgICAgICAvLyBub3RoaW5nIGlzIGFsbG93ZWRcbiAgICAgICAgcmV0ID0gJzwwLjAuMC0wJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBmb3JiaWRkZW5cbiAgICAgICAgcmV0ID0gJyonXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChndGx0ICYmIGFueVgpIHtcbiAgICAgIC8vIHdlIGtub3cgcGF0Y2ggaXMgYW4geCwgYmVjYXVzZSB3ZSBoYXZlIGFueSB4IGF0IGFsbC5cbiAgICAgIC8vIHJlcGxhY2UgWCB3aXRoIDBcbiAgICAgIGlmICh4bSkge1xuICAgICAgICBtID0gMFxuICAgICAgfVxuICAgICAgcCA9IDBcblxuICAgICAgaWYgKGd0bHQgPT09ICc+Jykge1xuICAgICAgICAvLyA+MSA9PiA+PTIuMC4wXG4gICAgICAgIC8vID4xLjIgPT4gPj0xLjMuMFxuICAgICAgICBndGx0ID0gJz49J1xuICAgICAgICBpZiAoeG0pIHtcbiAgICAgICAgICBNID0gK00gKyAxXG4gICAgICAgICAgbSA9IDBcbiAgICAgICAgICBwID0gMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG0gPSArbSArIDFcbiAgICAgICAgICBwID0gMFxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGd0bHQgPT09ICc8PScpIHtcbiAgICAgICAgLy8gPD0wLjcueCBpcyBhY3R1YWxseSA8MC44LjAsIHNpbmNlIGFueSAwLjcueCBzaG91bGRcbiAgICAgICAgLy8gcGFzcy4gIFNpbWlsYXJseSwgPD03LnggaXMgYWN0dWFsbHkgPDguMC4wLCBldGMuXG4gICAgICAgIGd0bHQgPSAnPCdcbiAgICAgICAgaWYgKHhtKSB7XG4gICAgICAgICAgTSA9ICtNICsgMVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG0gPSArbSArIDFcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZ3RsdCA9PT0gJzwnKSB7XG4gICAgICAgIHByID0gJy0wJ1xuICAgICAgfVxuXG4gICAgICByZXQgPSBgJHtndGx0ICsgTX0uJHttfS4ke3B9JHtwcn1gXG4gICAgfSBlbHNlIGlmICh4bSkge1xuICAgICAgcmV0ID0gYD49JHtNfS4wLjAke3ByfSA8JHsrTSArIDF9LjAuMC0wYFxuICAgIH0gZWxzZSBpZiAoeHApIHtcbiAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4wJHtwclxuICAgICAgfSA8JHtNfS4keyttICsgMX0uMC0wYFxuICAgIH1cblxuICAgIGRlYnVnKCd4UmFuZ2UgcmV0dXJuJywgcmV0KVxuXG4gICAgcmV0dXJuIHJldFxuICB9KVxufVxuXG4vLyBCZWNhdXNlICogaXMgQU5ELWVkIHdpdGggZXZlcnl0aGluZyBlbHNlIGluIHRoZSBjb21wYXJhdG9yLFxuLy8gYW5kICcnIG1lYW5zIFwiYW55IHZlcnNpb25cIiwganVzdCByZW1vdmUgdGhlICpzIGVudGlyZWx5LlxuY29uc3QgcmVwbGFjZVN0YXJzID0gKGNvbXAsIG9wdGlvbnMpID0+IHtcbiAgZGVidWcoJ3JlcGxhY2VTdGFycycsIGNvbXAsIG9wdGlvbnMpXG4gIC8vIExvb3NlbmVzcyBpcyBpZ25vcmVkIGhlcmUuICBzdGFyIGlzIGFsd2F5cyBhcyBsb29zZSBhcyBpdCBnZXRzIVxuICByZXR1cm4gY29tcC50cmltKCkucmVwbGFjZShyZVt0LlNUQVJdLCAnJylcbn1cblxuY29uc3QgcmVwbGFjZUdURTAgPSAoY29tcCwgb3B0aW9ucykgPT4ge1xuICBkZWJ1ZygncmVwbGFjZUdURTAnLCBjb21wLCBvcHRpb25zKVxuICByZXR1cm4gY29tcC50cmltKClcbiAgICAucmVwbGFjZShyZVtvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlID8gdC5HVEUwUFJFIDogdC5HVEUwXSwgJycpXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgcGFzc2VkIHRvIHN0cmluZy5yZXBsYWNlKHJlW3QuSFlQSEVOUkFOR0VdKVxuLy8gTSwgbSwgcGF0Y2gsIHByZXJlbGVhc2UsIGJ1aWxkXG4vLyAxLjIgLSAzLjQuNSA9PiA+PTEuMi4wIDw9My40LjVcbi8vIDEuMi4zIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wLTAgQW55IDMuNC54IHdpbGwgZG9cbi8vIDEuMiAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMC0wXG5jb25zdCBoeXBoZW5SZXBsYWNlID0gaW5jUHIgPT4gKCQwLFxuICBmcm9tLCBmTSwgZm0sIGZwLCBmcHIsIGZiLFxuICB0bywgdE0sIHRtLCB0cCwgdHByLCB0YikgPT4ge1xuICBpZiAoaXNYKGZNKSkge1xuICAgIGZyb20gPSAnJ1xuICB9IGVsc2UgaWYgKGlzWChmbSkpIHtcbiAgICBmcm9tID0gYD49JHtmTX0uMC4wJHtpbmNQciA/ICctMCcgOiAnJ31gXG4gIH0gZWxzZSBpZiAoaXNYKGZwKSkge1xuICAgIGZyb20gPSBgPj0ke2ZNfS4ke2ZtfS4wJHtpbmNQciA/ICctMCcgOiAnJ31gXG4gIH0gZWxzZSBpZiAoZnByKSB7XG4gICAgZnJvbSA9IGA+PSR7ZnJvbX1gXG4gIH0gZWxzZSB7XG4gICAgZnJvbSA9IGA+PSR7ZnJvbX0ke2luY1ByID8gJy0wJyA6ICcnfWBcbiAgfVxuXG4gIGlmIChpc1godE0pKSB7XG4gICAgdG8gPSAnJ1xuICB9IGVsc2UgaWYgKGlzWCh0bSkpIHtcbiAgICB0byA9IGA8JHsrdE0gKyAxfS4wLjAtMGBcbiAgfSBlbHNlIGlmIChpc1godHApKSB7XG4gICAgdG8gPSBgPCR7dE19LiR7K3RtICsgMX0uMC0wYFxuICB9IGVsc2UgaWYgKHRwcikge1xuICAgIHRvID0gYDw9JHt0TX0uJHt0bX0uJHt0cH0tJHt0cHJ9YFxuICB9IGVsc2UgaWYgKGluY1ByKSB7XG4gICAgdG8gPSBgPCR7dE19LiR7dG19LiR7K3RwICsgMX0tMGBcbiAgfSBlbHNlIHtcbiAgICB0byA9IGA8PSR7dG99YFxuICB9XG5cbiAgcmV0dXJuIChgJHtmcm9tfSAke3RvfWApLnRyaW0oKVxufVxuXG5jb25zdCB0ZXN0U2V0ID0gKHNldCwgdmVyc2lvbiwgb3B0aW9ucykgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgIGlmICghc2V0W2ldLnRlc3QodmVyc2lvbikpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGlmICh2ZXJzaW9uLnByZXJlbGVhc2UubGVuZ3RoICYmICFvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlKSB7XG4gICAgLy8gRmluZCB0aGUgc2V0IG9mIHZlcnNpb25zIHRoYXQgYXJlIGFsbG93ZWQgdG8gaGF2ZSBwcmVyZWxlYXNlc1xuICAgIC8vIEZvciBleGFtcGxlLCBeMS4yLjMtcHIuMSBkZXN1Z2FycyB0byA+PTEuMi4zLXByLjEgPDIuMC4wXG4gICAgLy8gVGhhdCBzaG91bGQgYWxsb3cgYDEuMi4zLXByLjJgIHRvIHBhc3MuXG4gICAgLy8gSG93ZXZlciwgYDEuMi40LWFscGhhLm5vdHJlYWR5YCBzaG91bGQgTk9UIGJlIGFsbG93ZWQsXG4gICAgLy8gZXZlbiB0aG91Z2ggaXQncyB3aXRoaW4gdGhlIHJhbmdlIHNldCBieSB0aGUgY29tcGFyYXRvcnMuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYnVnKHNldFtpXS5zZW12ZXIpXG4gICAgICBpZiAoc2V0W2ldLnNlbXZlciA9PT0gQ29tcGFyYXRvci5BTlkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKHNldFtpXS5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGFsbG93ZWQgPSBzZXRbaV0uc2VtdmVyXG4gICAgICAgIGlmIChhbGxvd2VkLm1ham9yID09PSB2ZXJzaW9uLm1ham9yICYmXG4gICAgICAgICAgICBhbGxvd2VkLm1pbm9yID09PSB2ZXJzaW9uLm1pbm9yICYmXG4gICAgICAgICAgICBhbGxvd2VkLnBhdGNoID09PSB2ZXJzaW9uLnBhdGNoKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFZlcnNpb24gaGFzIGEgLXByZSwgYnV0IGl0J3Mgbm90IG9uZSBvZiB0aGUgb25lcyB3ZSBsaWtlLlxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cbiIsImNvbnN0IGRlYnVnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvZGVidWcnKVxuY29uc3QgeyBNQVhfTEVOR1RILCBNQVhfU0FGRV9JTlRFR0VSIH0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jb25zdGFudHMnKVxuY29uc3QgeyByZSwgdCB9ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvcmUnKVxuXG5jb25zdCBwYXJzZU9wdGlvbnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9wYXJzZS1vcHRpb25zJylcbmNvbnN0IHsgY29tcGFyZUlkZW50aWZpZXJzIH0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pZGVudGlmaWVycycpXG5jbGFzcyBTZW1WZXIge1xuICBjb25zdHJ1Y3RvciAodmVyc2lvbiwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBwYXJzZU9wdGlvbnMob3B0aW9ucylcblxuICAgIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKSB7XG4gICAgICBpZiAodmVyc2lvbi5sb29zZSA9PT0gISFvcHRpb25zLmxvb3NlICYmXG4gICAgICAgICAgdmVyc2lvbi5pbmNsdWRlUHJlcmVsZWFzZSA9PT0gISFvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlKSB7XG4gICAgICAgIHJldHVybiB2ZXJzaW9uXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJzaW9uID0gdmVyc2lvbi52ZXJzaW9uXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgVmVyc2lvbjogJHt2ZXJzaW9ufWApXG4gICAgfVxuXG4gICAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgYHZlcnNpb24gaXMgbG9uZ2VyIHRoYW4gJHtNQVhfTEVOR1RIfSBjaGFyYWN0ZXJzYFxuICAgICAgKVxuICAgIH1cblxuICAgIGRlYnVnKCdTZW1WZXInLCB2ZXJzaW9uLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmxvb3NlID0gISFvcHRpb25zLmxvb3NlXG4gICAgLy8gdGhpcyBpc24ndCBhY3R1YWxseSByZWxldmFudCBmb3IgdmVyc2lvbnMsIGJ1dCBrZWVwIGl0IHNvIHRoYXQgd2VcbiAgICAvLyBkb24ndCBydW4gaW50byB0cm91YmxlIHBhc3NpbmcgdGhpcy5vcHRpb25zIGFyb3VuZC5cbiAgICB0aGlzLmluY2x1ZGVQcmVyZWxlYXNlID0gISFvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlXG5cbiAgICBjb25zdCBtID0gdmVyc2lvbi50cmltKCkubWF0Y2gob3B0aW9ucy5sb29zZSA/IHJlW3QuTE9PU0VdIDogcmVbdC5GVUxMXSlcblxuICAgIGlmICghbSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBWZXJzaW9uOiAke3ZlcnNpb259YClcbiAgICB9XG5cbiAgICB0aGlzLnJhdyA9IHZlcnNpb25cblxuICAgIC8vIHRoZXNlIGFyZSBhY3R1YWxseSBudW1iZXJzXG4gICAgdGhpcy5tYWpvciA9ICttWzFdXG4gICAgdGhpcy5taW5vciA9ICttWzJdXG4gICAgdGhpcy5wYXRjaCA9ICttWzNdXG5cbiAgICBpZiAodGhpcy5tYWpvciA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5tYWpvciA8IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWFqb3IgdmVyc2lvbicpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWlub3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWlub3IgPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1pbm9yIHZlcnNpb24nKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnBhdGNoID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLnBhdGNoIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBwYXRjaCB2ZXJzaW9uJylcbiAgICB9XG5cbiAgICAvLyBudW1iZXJpZnkgYW55IHByZXJlbGVhc2UgbnVtZXJpYyBpZHNcbiAgICBpZiAoIW1bNF0pIHtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IG1bNF0uc3BsaXQoJy4nKS5tYXAoKGlkKSA9PiB7XG4gICAgICAgIGlmICgvXlswLTldKyQvLnRlc3QoaWQpKSB7XG4gICAgICAgICAgY29uc3QgbnVtID0gK2lkXG4gICAgICAgICAgaWYgKG51bSA+PSAwICYmIG51bSA8IE1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuYnVpbGQgPSBtWzVdID8gbVs1XS5zcGxpdCgnLicpIDogW11cbiAgICB0aGlzLmZvcm1hdCgpXG4gIH1cblxuICBmb3JtYXQgKCkge1xuICAgIHRoaXMudmVyc2lvbiA9IGAke3RoaXMubWFqb3J9LiR7dGhpcy5taW5vcn0uJHt0aGlzLnBhdGNofWBcbiAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgdGhpcy52ZXJzaW9uICs9IGAtJHt0aGlzLnByZXJlbGVhc2Uuam9pbignLicpfWBcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmVyc2lvblxuICB9XG5cbiAgdG9TdHJpbmcgKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnNpb25cbiAgfVxuXG4gIGNvbXBhcmUgKG90aGVyKSB7XG4gICAgZGVidWcoJ1NlbVZlci5jb21wYXJlJywgdGhpcy52ZXJzaW9uLCB0aGlzLm9wdGlvbnMsIG90aGVyKVxuICAgIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSkge1xuICAgICAgaWYgKHR5cGVvZiBvdGhlciA9PT0gJ3N0cmluZycgJiYgb3RoZXIgPT09IHRoaXMudmVyc2lvbikge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfVxuICAgICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLm9wdGlvbnMpXG4gICAgfVxuXG4gICAgaWYgKG90aGVyLnZlcnNpb24gPT09IHRoaXMudmVyc2lvbikge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jb21wYXJlTWFpbihvdGhlcikgfHwgdGhpcy5jb21wYXJlUHJlKG90aGVyKVxuICB9XG5cbiAgY29tcGFyZU1haW4gKG90aGVyKSB7XG4gICAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKSB7XG4gICAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMub3B0aW9ucylcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgY29tcGFyZUlkZW50aWZpZXJzKHRoaXMubWFqb3IsIG90aGVyLm1ham9yKSB8fFxuICAgICAgY29tcGFyZUlkZW50aWZpZXJzKHRoaXMubWlub3IsIG90aGVyLm1pbm9yKSB8fFxuICAgICAgY29tcGFyZUlkZW50aWZpZXJzKHRoaXMucGF0Y2gsIG90aGVyLnBhdGNoKVxuICAgIClcbiAgfVxuXG4gIGNvbXBhcmVQcmUgKG90aGVyKSB7XG4gICAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKSB7XG4gICAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMub3B0aW9ucylcbiAgICB9XG5cbiAgICAvLyBOT1QgaGF2aW5nIGEgcHJlcmVsZWFzZSBpcyA+IGhhdmluZyBvbmVcbiAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiAhb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH0gZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAxXG4gICAgfSBlbHNlIGlmICghdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiAhb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgbGV0IGkgPSAwXG4gICAgZG8ge1xuICAgICAgY29uc3QgYSA9IHRoaXMucHJlcmVsZWFzZVtpXVxuICAgICAgY29uc3QgYiA9IG90aGVyLnByZXJlbGVhc2VbaV1cbiAgICAgIGRlYnVnKCdwcmVyZWxlYXNlIGNvbXBhcmUnLCBpLCBhLCBiKVxuICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCAmJiBiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH0gZWxzZSBpZiAoYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAxXG4gICAgICB9IGVsc2UgaWYgKGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH0gZWxzZSBpZiAoYSA9PT0gYikge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyhhLCBiKVxuICAgICAgfVxuICAgIH0gd2hpbGUgKCsraSlcbiAgfVxuXG4gIGNvbXBhcmVCdWlsZCAob3RoZXIpIHtcbiAgICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpIHtcbiAgICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5vcHRpb25zKVxuICAgIH1cblxuICAgIGxldCBpID0gMFxuICAgIGRvIHtcbiAgICAgIGNvbnN0IGEgPSB0aGlzLmJ1aWxkW2ldXG4gICAgICBjb25zdCBiID0gb3RoZXIuYnVpbGRbaV1cbiAgICAgIGRlYnVnKCdwcmVyZWxlYXNlIGNvbXBhcmUnLCBpLCBhLCBiKVxuICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCAmJiBiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH0gZWxzZSBpZiAoYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAxXG4gICAgICB9IGVsc2UgaWYgKGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH0gZWxzZSBpZiAoYSA9PT0gYikge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyhhLCBiKVxuICAgICAgfVxuICAgIH0gd2hpbGUgKCsraSlcbiAgfVxuXG4gIC8vIHByZW1pbm9yIHdpbGwgYnVtcCB0aGUgdmVyc2lvbiB1cCB0byB0aGUgbmV4dCBtaW5vciByZWxlYXNlLCBhbmQgaW1tZWRpYXRlbHlcbiAgLy8gZG93biB0byBwcmUtcmVsZWFzZS4gcHJlbWFqb3IgYW5kIHByZXBhdGNoIHdvcmsgdGhlIHNhbWUgd2F5LlxuICBpbmMgKHJlbGVhc2UsIGlkZW50aWZpZXIpIHtcbiAgICBzd2l0Y2ggKHJlbGVhc2UpIHtcbiAgICAgIGNhc2UgJ3ByZW1ham9yJzpcbiAgICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDBcbiAgICAgICAgdGhpcy5wYXRjaCA9IDBcbiAgICAgICAgdGhpcy5taW5vciA9IDBcbiAgICAgICAgdGhpcy5tYWpvcisrXG4gICAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncHJlbWlub3InOlxuICAgICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMFxuICAgICAgICB0aGlzLnBhdGNoID0gMFxuICAgICAgICB0aGlzLm1pbm9yKytcbiAgICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwcmVwYXRjaCc6XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYWxyZWFkeSBhIHByZXJlbGVhc2UsIGl0IHdpbGwgYnVtcCB0byB0aGUgbmV4dCB2ZXJzaW9uXG4gICAgICAgIC8vIGRyb3AgYW55IHByZXJlbGVhc2VzIHRoYXQgbWlnaHQgYWxyZWFkeSBleGlzdCwgc2luY2UgdGhleSBhcmUgbm90XG4gICAgICAgIC8vIHJlbGV2YW50IGF0IHRoaXMgcG9pbnQuXG4gICAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwXG4gICAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIpXG4gICAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKVxuICAgICAgICBicmVha1xuICAgICAgLy8gSWYgdGhlIGlucHV0IGlzIGEgbm9uLXByZXJlbGVhc2UgdmVyc2lvbiwgdGhpcyBhY3RzIHRoZSBzYW1lIGFzXG4gICAgICAvLyBwcmVwYXRjaC5cbiAgICAgIGNhc2UgJ3ByZXJlbGVhc2UnOlxuICAgICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ21ham9yJzpcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1tYWpvciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1ham9yIHZlcnNpb24uXG4gICAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWFqb3IuXG4gICAgICAgIC8vIDEuMC4wLTUgYnVtcHMgdG8gMS4wLjBcbiAgICAgICAgLy8gMS4xLjAgYnVtcHMgdG8gMi4wLjBcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMubWlub3IgIT09IDAgfHxcbiAgICAgICAgICB0aGlzLnBhdGNoICE9PSAwIHx8XG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLm1ham9yKytcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1pbm9yID0gMFxuICAgICAgICB0aGlzLnBhdGNoID0gMFxuICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbWlub3InOlxuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgcHJlLW1pbm9yIHZlcnNpb24sIGJ1bXAgdXAgdG8gdGhlIHNhbWUgbWlub3IgdmVyc2lvbi5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtaW5vci5cbiAgICAgICAgLy8gMS4yLjAtNSBidW1wcyB0byAxLjIuMFxuICAgICAgICAvLyAxLjIuMSBidW1wcyB0byAxLjMuMFxuICAgICAgICBpZiAodGhpcy5wYXRjaCAhPT0gMCB8fCB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5taW5vcisrXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYXRjaCA9IDBcbiAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW11cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3BhdGNoJzpcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBub3QgYSBwcmUtcmVsZWFzZSB2ZXJzaW9uLCBpdCB3aWxsIGluY3JlbWVudCB0aGUgcGF0Y2guXG4gICAgICAgIC8vIElmIGl0IGlzIGEgcHJlLXJlbGVhc2UgaXQgd2lsbCBidW1wIHVwIHRvIHRoZSBzYW1lIHBhdGNoIHZlcnNpb24uXG4gICAgICAgIC8vIDEuMi4wLTUgcGF0Y2hlcyB0byAxLjIuMFxuICAgICAgICAvLyAxLjIuMCBwYXRjaGVzIHRvIDEuMi4xXG4gICAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5wYXRjaCsrXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW11cbiAgICAgICAgYnJlYWtcbiAgICAgIC8vIFRoaXMgcHJvYmFibHkgc2hvdWxkbid0IGJlIHVzZWQgcHVibGljbHkuXG4gICAgICAvLyAxLjAuMCAncHJlJyB3b3VsZCBiZWNvbWUgMS4wLjAtMCB3aGljaCBpcyB0aGUgd3JvbmcgZGlyZWN0aW9uLlxuICAgICAgY2FzZSAncHJlJzpcbiAgICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbMF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgaSA9IHRoaXMucHJlcmVsZWFzZS5sZW5ndGhcbiAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcmVyZWxlYXNlW2ldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICB0aGlzLnByZXJlbGVhc2VbaV0rK1xuICAgICAgICAgICAgICBpID0gLTJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgICAgICAvLyBkaWRuJ3QgaW5jcmVtZW50IGFueXRoaW5nXG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2UucHVzaCgwKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaWRlbnRpZmllcikge1xuICAgICAgICAgIC8vIDEuMi4wLWJldGEuMSBidW1wcyB0byAxLjIuMC1iZXRhLjIsXG4gICAgICAgICAgLy8gMS4yLjAtYmV0YS5mb29ibHogb3IgMS4yLjAtYmV0YSBidW1wcyB0byAxLjIuMC1iZXRhLjBcbiAgICAgICAgICBpZiAoY29tcGFyZUlkZW50aWZpZXJzKHRoaXMucHJlcmVsZWFzZVswXSwgaWRlbnRpZmllcikgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChpc05hTih0aGlzLnByZXJlbGVhc2VbMV0pKSB7XG4gICAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtpZGVudGlmaWVyLCAwXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIGluY3JlbWVudCBhcmd1bWVudDogJHtyZWxlYXNlfWApXG4gICAgfVxuICAgIHRoaXMuZm9ybWF0KClcbiAgICB0aGlzLnJhdyA9IHRoaXMudmVyc2lvblxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZW1WZXJcbiIsImNvbnN0IHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5jb25zdCBjbGVhbiA9ICh2ZXJzaW9uLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHMgPSBwYXJzZSh2ZXJzaW9uLnRyaW0oKS5yZXBsYWNlKC9eWz12XSsvLCAnJyksIG9wdGlvbnMpXG4gIHJldHVybiBzID8gcy52ZXJzaW9uIDogbnVsbFxufVxubW9kdWxlLmV4cG9ydHMgPSBjbGVhblxuIiwiY29uc3QgZXEgPSByZXF1aXJlKCcuL2VxJylcbmNvbnN0IG5lcSA9IHJlcXVpcmUoJy4vbmVxJylcbmNvbnN0IGd0ID0gcmVxdWlyZSgnLi9ndCcpXG5jb25zdCBndGUgPSByZXF1aXJlKCcuL2d0ZScpXG5jb25zdCBsdCA9IHJlcXVpcmUoJy4vbHQnKVxuY29uc3QgbHRlID0gcmVxdWlyZSgnLi9sdGUnKVxuXG5jb25zdCBjbXAgPSAoYSwgb3AsIGIsIGxvb3NlKSA9PiB7XG4gIHN3aXRjaCAob3ApIHtcbiAgICBjYXNlICc9PT0nOlxuICAgICAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0Jykge1xuICAgICAgICBhID0gYS52ZXJzaW9uXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGIgPSBiLnZlcnNpb25cbiAgICAgIH1cbiAgICAgIHJldHVybiBhID09PSBiXG5cbiAgICBjYXNlICchPT0nOlxuICAgICAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0Jykge1xuICAgICAgICBhID0gYS52ZXJzaW9uXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGIgPSBiLnZlcnNpb25cbiAgICAgIH1cbiAgICAgIHJldHVybiBhICE9PSBiXG5cbiAgICBjYXNlICcnOlxuICAgIGNhc2UgJz0nOlxuICAgIGNhc2UgJz09JzpcbiAgICAgIHJldHVybiBlcShhLCBiLCBsb29zZSlcblxuICAgIGNhc2UgJyE9JzpcbiAgICAgIHJldHVybiBuZXEoYSwgYiwgbG9vc2UpXG5cbiAgICBjYXNlICc+JzpcbiAgICAgIHJldHVybiBndChhLCBiLCBsb29zZSlcblxuICAgIGNhc2UgJz49JzpcbiAgICAgIHJldHVybiBndGUoYSwgYiwgbG9vc2UpXG5cbiAgICBjYXNlICc8JzpcbiAgICAgIHJldHVybiBsdChhLCBiLCBsb29zZSlcblxuICAgIGNhc2UgJzw9JzpcbiAgICAgIHJldHVybiBsdGUoYSwgYiwgbG9vc2UpXG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBvcGVyYXRvcjogJHtvcH1gKVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGNtcFxuIiwiY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJylcbmNvbnN0IHsgcmUsIHQgfSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3JlJylcblxuY29uc3QgY29lcmNlID0gKHZlcnNpb24sIG9wdGlvbnMpID0+IHtcbiAgaWYgKHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIpIHtcbiAgICByZXR1cm4gdmVyc2lvblxuICB9XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnbnVtYmVyJykge1xuICAgIHZlcnNpb24gPSBTdHJpbmcodmVyc2lvbilcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICBsZXQgbWF0Y2ggPSBudWxsXG4gIGlmICghb3B0aW9ucy5ydGwpIHtcbiAgICBtYXRjaCA9IHZlcnNpb24ubWF0Y2gocmVbdC5DT0VSQ0VdKVxuICB9IGVsc2Uge1xuICAgIC8vIEZpbmQgdGhlIHJpZ2h0LW1vc3QgY29lcmNpYmxlIHN0cmluZyB0aGF0IGRvZXMgbm90IHNoYXJlXG4gICAgLy8gYSB0ZXJtaW51cyB3aXRoIGEgbW9yZSBsZWZ0LXdhcmQgY29lcmNpYmxlIHN0cmluZy5cbiAgICAvLyBFZywgJzEuMi4zLjQnIHdhbnRzIHRvIGNvZXJjZSAnMi4zLjQnLCBub3QgJzMuNCcgb3IgJzQnXG4gICAgLy9cbiAgICAvLyBXYWxrIHRocm91Z2ggdGhlIHN0cmluZyBjaGVja2luZyB3aXRoIGEgL2cgcmVnZXhwXG4gICAgLy8gTWFudWFsbHkgc2V0IHRoZSBpbmRleCBzbyBhcyB0byBwaWNrIHVwIG92ZXJsYXBwaW5nIG1hdGNoZXMuXG4gICAgLy8gU3RvcCB3aGVuIHdlIGdldCBhIG1hdGNoIHRoYXQgZW5kcyBhdCB0aGUgc3RyaW5nIGVuZCwgc2luY2Ugbm9cbiAgICAvLyBjb2VyY2libGUgc3RyaW5nIGNhbiBiZSBtb3JlIHJpZ2h0LXdhcmQgd2l0aG91dCB0aGUgc2FtZSB0ZXJtaW51cy5cbiAgICBsZXQgbmV4dFxuICAgIHdoaWxlICgobmV4dCA9IHJlW3QuQ09FUkNFUlRMXS5leGVjKHZlcnNpb24pKSAmJlxuICAgICAgICAoIW1hdGNoIHx8IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoICE9PSB2ZXJzaW9uLmxlbmd0aClcbiAgICApIHtcbiAgICAgIGlmICghbWF0Y2ggfHxcbiAgICAgICAgICAgIG5leHQuaW5kZXggKyBuZXh0WzBdLmxlbmd0aCAhPT0gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgpIHtcbiAgICAgICAgbWF0Y2ggPSBuZXh0XG4gICAgICB9XG4gICAgICByZVt0LkNPRVJDRVJUTF0ubGFzdEluZGV4ID0gbmV4dC5pbmRleCArIG5leHRbMV0ubGVuZ3RoICsgbmV4dFsyXS5sZW5ndGhcbiAgICB9XG4gICAgLy8gbGVhdmUgaXQgaW4gYSBjbGVhbiBzdGF0ZVxuICAgIHJlW3QuQ09FUkNFUlRMXS5sYXN0SW5kZXggPSAtMVxuICB9XG5cbiAgaWYgKG1hdGNoID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiBwYXJzZShgJHttYXRjaFsyXX0uJHttYXRjaFszXSB8fCAnMCd9LiR7bWF0Y2hbNF0gfHwgJzAnfWAsIG9wdGlvbnMpXG59XG5tb2R1bGUuZXhwb3J0cyA9IGNvZXJjZVxuIiwiY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgY29tcGFyZUJ1aWxkID0gKGEsIGIsIGxvb3NlKSA9PiB7XG4gIGNvbnN0IHZlcnNpb25BID0gbmV3IFNlbVZlcihhLCBsb29zZSlcbiAgY29uc3QgdmVyc2lvbkIgPSBuZXcgU2VtVmVyKGIsIGxvb3NlKVxuICByZXR1cm4gdmVyc2lvbkEuY29tcGFyZSh2ZXJzaW9uQikgfHwgdmVyc2lvbkEuY29tcGFyZUJ1aWxkKHZlcnNpb25CKVxufVxubW9kdWxlLmV4cG9ydHMgPSBjb21wYXJlQnVpbGRcbiIsImNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgY29tcGFyZUxvb3NlID0gKGEsIGIpID0+IGNvbXBhcmUoYSwgYiwgdHJ1ZSlcbm1vZHVsZS5leHBvcnRzID0gY29tcGFyZUxvb3NlXG4iLCJjb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBjb21wYXJlID0gKGEsIGIsIGxvb3NlKSA9PlxuICBuZXcgU2VtVmVyKGEsIGxvb3NlKS5jb21wYXJlKG5ldyBTZW1WZXIoYiwgbG9vc2UpKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXBhcmVcbiIsImNvbnN0IHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5jb25zdCBlcSA9IHJlcXVpcmUoJy4vZXEnKVxuXG5jb25zdCBkaWZmID0gKHZlcnNpb24xLCB2ZXJzaW9uMikgPT4ge1xuICBpZiAoZXEodmVyc2lvbjEsIHZlcnNpb24yKSkge1xuICAgIHJldHVybiBudWxsXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdjEgPSBwYXJzZSh2ZXJzaW9uMSlcbiAgICBjb25zdCB2MiA9IHBhcnNlKHZlcnNpb24yKVxuICAgIGNvbnN0IGhhc1ByZSA9IHYxLnByZXJlbGVhc2UubGVuZ3RoIHx8IHYyLnByZXJlbGVhc2UubGVuZ3RoXG4gICAgY29uc3QgcHJlZml4ID0gaGFzUHJlID8gJ3ByZScgOiAnJ1xuICAgIGNvbnN0IGRlZmF1bHRSZXN1bHQgPSBoYXNQcmUgPyAncHJlcmVsZWFzZScgOiAnJ1xuICAgIGZvciAoY29uc3Qga2V5IGluIHYxKSB7XG4gICAgICBpZiAoa2V5ID09PSAnbWFqb3InIHx8IGtleSA9PT0gJ21pbm9yJyB8fCBrZXkgPT09ICdwYXRjaCcpIHtcbiAgICAgICAgaWYgKHYxW2tleV0gIT09IHYyW2tleV0pIHtcbiAgICAgICAgICByZXR1cm4gcHJlZml4ICsga2V5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRSZXN1bHQgLy8gbWF5IGJlIHVuZGVmaW5lZFxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRpZmZcbiIsImNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgZXEgPSAoYSwgYiwgbG9vc2UpID0+IGNvbXBhcmUoYSwgYiwgbG9vc2UpID09PSAwXG5tb2R1bGUuZXhwb3J0cyA9IGVxXG4iLCJjb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9jb21wYXJlJylcbmNvbnN0IGd0ID0gKGEsIGIsIGxvb3NlKSA9PiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+IDBcbm1vZHVsZS5leHBvcnRzID0gZ3RcbiIsImNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgZ3RlID0gKGEsIGIsIGxvb3NlKSA9PiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+PSAwXG5tb2R1bGUuZXhwb3J0cyA9IGd0ZVxuIiwiY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuXG5jb25zdCBpbmMgPSAodmVyc2lvbiwgcmVsZWFzZSwgb3B0aW9ucywgaWRlbnRpZmllcikgPT4ge1xuICBpZiAodHlwZW9mIChvcHRpb25zKSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZGVudGlmaWVyID0gb3B0aW9uc1xuICAgIG9wdGlvbnMgPSB1bmRlZmluZWRcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIoXG4gICAgICB2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyID8gdmVyc2lvbi52ZXJzaW9uIDogdmVyc2lvbixcbiAgICAgIG9wdGlvbnNcbiAgICApLmluYyhyZWxlYXNlLCBpZGVudGlmaWVyKS52ZXJzaW9uXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBpbmNcbiIsImNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgbHQgPSAoYSwgYiwgbG9vc2UpID0+IGNvbXBhcmUoYSwgYiwgbG9vc2UpIDwgMFxubW9kdWxlLmV4cG9ydHMgPSBsdFxuIiwiY29uc3QgY29tcGFyZSA9IHJlcXVpcmUoJy4vY29tcGFyZScpXG5jb25zdCBsdGUgPSAoYSwgYiwgbG9vc2UpID0+IGNvbXBhcmUoYSwgYiwgbG9vc2UpIDw9IDBcbm1vZHVsZS5leHBvcnRzID0gbHRlXG4iLCJjb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBtYWpvciA9IChhLCBsb29zZSkgPT4gbmV3IFNlbVZlcihhLCBsb29zZSkubWFqb3Jcbm1vZHVsZS5leHBvcnRzID0gbWFqb3JcbiIsImNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IG1pbm9yID0gKGEsIGxvb3NlKSA9PiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5taW5vclxubW9kdWxlLmV4cG9ydHMgPSBtaW5vclxuIiwiY29uc3QgY29tcGFyZSA9IHJlcXVpcmUoJy4vY29tcGFyZScpXG5jb25zdCBuZXEgPSAoYSwgYiwgbG9vc2UpID0+IGNvbXBhcmUoYSwgYiwgbG9vc2UpICE9PSAwXG5tb2R1bGUuZXhwb3J0cyA9IG5lcVxuIiwiY29uc3QgeyBNQVhfTEVOR1RIIH0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jb25zdGFudHMnKVxuY29uc3QgeyByZSwgdCB9ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvcmUnKVxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuXG5jb25zdCBwYXJzZU9wdGlvbnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9wYXJzZS1vcHRpb25zJylcbmNvbnN0IHBhcnNlID0gKHZlcnNpb24sIG9wdGlvbnMpID0+IHtcbiAgb3B0aW9ucyA9IHBhcnNlT3B0aW9ucyhvcHRpb25zKVxuXG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKSB7XG4gICAgcmV0dXJuIHZlcnNpb25cbiAgfVxuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCByID0gb3B0aW9ucy5sb29zZSA/IHJlW3QuTE9PU0VdIDogcmVbdC5GVUxMXVxuICBpZiAoIXIudGVzdCh2ZXJzaW9uKSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlXG4iLCJjb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBwYXRjaCA9IChhLCBsb29zZSkgPT4gbmV3IFNlbVZlcihhLCBsb29zZSkucGF0Y2hcbm1vZHVsZS5leHBvcnRzID0gcGF0Y2hcbiIsImNvbnN0IHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5jb25zdCBwcmVyZWxlYXNlID0gKHZlcnNpb24sIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgcGFyc2VkID0gcGFyc2UodmVyc2lvbiwgb3B0aW9ucylcbiAgcmV0dXJuIChwYXJzZWQgJiYgcGFyc2VkLnByZXJlbGVhc2UubGVuZ3RoKSA/IHBhcnNlZC5wcmVyZWxlYXNlIDogbnVsbFxufVxubW9kdWxlLmV4cG9ydHMgPSBwcmVyZWxlYXNlXG4iLCJjb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9jb21wYXJlJylcbmNvbnN0IHJjb21wYXJlID0gKGEsIGIsIGxvb3NlKSA9PiBjb21wYXJlKGIsIGEsIGxvb3NlKVxubW9kdWxlLmV4cG9ydHMgPSByY29tcGFyZVxuIiwiY29uc3QgY29tcGFyZUJ1aWxkID0gcmVxdWlyZSgnLi9jb21wYXJlLWJ1aWxkJylcbmNvbnN0IHJzb3J0ID0gKGxpc3QsIGxvb3NlKSA9PiBsaXN0LnNvcnQoKGEsIGIpID0+IGNvbXBhcmVCdWlsZChiLCBhLCBsb29zZSkpXG5tb2R1bGUuZXhwb3J0cyA9IHJzb3J0XG4iLCJjb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvcmFuZ2UnKVxuY29uc3Qgc2F0aXNmaWVzID0gKHZlcnNpb24sIHJhbmdlLCBvcHRpb25zKSA9PiB7XG4gIHRyeSB7XG4gICAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHJhbmdlLnRlc3QodmVyc2lvbilcbn1cbm1vZHVsZS5leHBvcnRzID0gc2F0aXNmaWVzXG4iLCJjb25zdCBjb21wYXJlQnVpbGQgPSByZXF1aXJlKCcuL2NvbXBhcmUtYnVpbGQnKVxuY29uc3Qgc29ydCA9IChsaXN0LCBsb29zZSkgPT4gbGlzdC5zb3J0KChhLCBiKSA9PiBjb21wYXJlQnVpbGQoYSwgYiwgbG9vc2UpKVxubW9kdWxlLmV4cG9ydHMgPSBzb3J0XG4iLCJjb25zdCBwYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKVxuY29uc3QgdmFsaWQgPSAodmVyc2lvbiwgb3B0aW9ucykgPT4ge1xuICBjb25zdCB2ID0gcGFyc2UodmVyc2lvbiwgb3B0aW9ucylcbiAgcmV0dXJuIHYgPyB2LnZlcnNpb24gOiBudWxsXG59XG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkXG4iLCIvLyBqdXN0IHByZS1sb2FkIGFsbCB0aGUgc3R1ZmYgdGhhdCBpbmRleC5qcyBsYXppbHkgZXhwb3J0c1xuY29uc3QgaW50ZXJuYWxSZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvcmUnKVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJlOiBpbnRlcm5hbFJlLnJlLFxuICBzcmM6IGludGVybmFsUmUuc3JjLFxuICB0b2tlbnM6IGludGVybmFsUmUudCxcbiAgU0VNVkVSX1NQRUNfVkVSU0lPTjogcmVxdWlyZSgnLi9pbnRlcm5hbC9jb25zdGFudHMnKS5TRU1WRVJfU1BFQ19WRVJTSU9OLFxuICBTZW1WZXI6IHJlcXVpcmUoJy4vY2xhc3Nlcy9zZW12ZXInKSxcbiAgY29tcGFyZUlkZW50aWZpZXJzOiByZXF1aXJlKCcuL2ludGVybmFsL2lkZW50aWZpZXJzJykuY29tcGFyZUlkZW50aWZpZXJzLFxuICByY29tcGFyZUlkZW50aWZpZXJzOiByZXF1aXJlKCcuL2ludGVybmFsL2lkZW50aWZpZXJzJykucmNvbXBhcmVJZGVudGlmaWVycyxcbiAgcGFyc2U6IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3BhcnNlJyksXG4gIHZhbGlkOiByZXF1aXJlKCcuL2Z1bmN0aW9ucy92YWxpZCcpLFxuICBjbGVhbjogcmVxdWlyZSgnLi9mdW5jdGlvbnMvY2xlYW4nKSxcbiAgaW5jOiByZXF1aXJlKCcuL2Z1bmN0aW9ucy9pbmMnKSxcbiAgZGlmZjogcmVxdWlyZSgnLi9mdW5jdGlvbnMvZGlmZicpLFxuICBtYWpvcjogcmVxdWlyZSgnLi9mdW5jdGlvbnMvbWFqb3InKSxcbiAgbWlub3I6IHJlcXVpcmUoJy4vZnVuY3Rpb25zL21pbm9yJyksXG4gIHBhdGNoOiByZXF1aXJlKCcuL2Z1bmN0aW9ucy9wYXRjaCcpLFxuICBwcmVyZWxlYXNlOiByZXF1aXJlKCcuL2Z1bmN0aW9ucy9wcmVyZWxlYXNlJyksXG4gIGNvbXBhcmU6IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2NvbXBhcmUnKSxcbiAgcmNvbXBhcmU6IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3Jjb21wYXJlJyksXG4gIGNvbXBhcmVMb29zZTogcmVxdWlyZSgnLi9mdW5jdGlvbnMvY29tcGFyZS1sb29zZScpLFxuICBjb21wYXJlQnVpbGQ6IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2NvbXBhcmUtYnVpbGQnKSxcbiAgc29ydDogcmVxdWlyZSgnLi9mdW5jdGlvbnMvc29ydCcpLFxuICByc29ydDogcmVxdWlyZSgnLi9mdW5jdGlvbnMvcnNvcnQnKSxcbiAgZ3Q6IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2d0JyksXG4gIGx0OiByZXF1aXJlKCcuL2Z1bmN0aW9ucy9sdCcpLFxuICBlcTogcmVxdWlyZSgnLi9mdW5jdGlvbnMvZXEnKSxcbiAgbmVxOiByZXF1aXJlKCcuL2Z1bmN0aW9ucy9uZXEnKSxcbiAgZ3RlOiByZXF1aXJlKCcuL2Z1bmN0aW9ucy9ndGUnKSxcbiAgbHRlOiByZXF1aXJlKCcuL2Z1bmN0aW9ucy9sdGUnKSxcbiAgY21wOiByZXF1aXJlKCcuL2Z1bmN0aW9ucy9jbXAnKSxcbiAgY29lcmNlOiByZXF1aXJlKCcuL2Z1bmN0aW9ucy9jb2VyY2UnKSxcbiAgQ29tcGFyYXRvcjogcmVxdWlyZSgnLi9jbGFzc2VzL2NvbXBhcmF0b3InKSxcbiAgUmFuZ2U6IHJlcXVpcmUoJy4vY2xhc3Nlcy9yYW5nZScpLFxuICBzYXRpc2ZpZXM6IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3NhdGlzZmllcycpLFxuICB0b0NvbXBhcmF0b3JzOiByZXF1aXJlKCcuL3Jhbmdlcy90by1jb21wYXJhdG9ycycpLFxuICBtYXhTYXRpc2Z5aW5nOiByZXF1aXJlKCcuL3Jhbmdlcy9tYXgtc2F0aXNmeWluZycpLFxuICBtaW5TYXRpc2Z5aW5nOiByZXF1aXJlKCcuL3Jhbmdlcy9taW4tc2F0aXNmeWluZycpLFxuICBtaW5WZXJzaW9uOiByZXF1aXJlKCcuL3Jhbmdlcy9taW4tdmVyc2lvbicpLFxuICB2YWxpZFJhbmdlOiByZXF1aXJlKCcuL3Jhbmdlcy92YWxpZCcpLFxuICBvdXRzaWRlOiByZXF1aXJlKCcuL3Jhbmdlcy9vdXRzaWRlJyksXG4gIGd0cjogcmVxdWlyZSgnLi9yYW5nZXMvZ3RyJyksXG4gIGx0cjogcmVxdWlyZSgnLi9yYW5nZXMvbHRyJyksXG4gIGludGVyc2VjdHM6IHJlcXVpcmUoJy4vcmFuZ2VzL2ludGVyc2VjdHMnKSxcbiAgc2ltcGxpZnlSYW5nZTogcmVxdWlyZSgnLi9yYW5nZXMvc2ltcGxpZnknKSxcbiAgc3Vic2V0OiByZXF1aXJlKCcuL3Jhbmdlcy9zdWJzZXQnKSxcbn1cbiIsIi8vIE5vdGU6IHRoaXMgaXMgdGhlIHNlbXZlci5vcmcgdmVyc2lvbiBvZiB0aGUgc3BlYyB0aGF0IGl0IGltcGxlbWVudHNcbi8vIE5vdCBuZWNlc3NhcmlseSB0aGUgcGFja2FnZSB2ZXJzaW9uIG9mIHRoaXMgY29kZS5cbmNvbnN0IFNFTVZFUl9TUEVDX1ZFUlNJT04gPSAnMi4wLjAnXG5cbmNvbnN0IE1BWF9MRU5HVEggPSAyNTZcbmNvbnN0IE1BWF9TQUZFX0lOVEVHRVIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fFxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gOTAwNzE5OTI1NDc0MDk5MVxuXG4vLyBNYXggc2FmZSBzZWdtZW50IGxlbmd0aCBmb3IgY29lcmNpb24uXG5jb25zdCBNQVhfU0FGRV9DT01QT05FTlRfTEVOR1RIID0gMTZcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFNFTVZFUl9TUEVDX1ZFUlNJT04sXG4gIE1BWF9MRU5HVEgsXG4gIE1BWF9TQUZFX0lOVEVHRVIsXG4gIE1BWF9TQUZFX0NPTVBPTkVOVF9MRU5HVEgsXG59XG4iLCJjb25zdCBkZWJ1ZyA9IChcbiAgdHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmXG4gIHByb2Nlc3MuZW52ICYmXG4gIHByb2Nlc3MuZW52Lk5PREVfREVCVUcgJiZcbiAgL1xcYnNlbXZlclxcYi9pLnRlc3QocHJvY2Vzcy5lbnYuTk9ERV9ERUJVRylcbikgPyAoLi4uYXJncykgPT4gY29uc29sZS5lcnJvcignU0VNVkVSJywgLi4uYXJncylcbiAgOiAoKSA9PiB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYnVnXG4iLCJjb25zdCBudW1lcmljID0gL15bMC05XSskL1xuY29uc3QgY29tcGFyZUlkZW50aWZpZXJzID0gKGEsIGIpID0+IHtcbiAgY29uc3QgYW51bSA9IG51bWVyaWMudGVzdChhKVxuICBjb25zdCBibnVtID0gbnVtZXJpYy50ZXN0KGIpXG5cbiAgaWYgKGFudW0gJiYgYm51bSkge1xuICAgIGEgPSArYVxuICAgIGIgPSArYlxuICB9XG5cbiAgcmV0dXJuIGEgPT09IGIgPyAwXG4gICAgOiAoYW51bSAmJiAhYm51bSkgPyAtMVxuICAgIDogKGJudW0gJiYgIWFudW0pID8gMVxuICAgIDogYSA8IGIgPyAtMVxuICAgIDogMVxufVxuXG5jb25zdCByY29tcGFyZUlkZW50aWZpZXJzID0gKGEsIGIpID0+IGNvbXBhcmVJZGVudGlmaWVycyhiLCBhKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29tcGFyZUlkZW50aWZpZXJzLFxuICByY29tcGFyZUlkZW50aWZpZXJzLFxufVxuIiwiLy8gcGFyc2Ugb3V0IGp1c3QgdGhlIG9wdGlvbnMgd2UgY2FyZSBhYm91dCBzbyB3ZSBhbHdheXMgZ2V0IGEgY29uc2lzdGVudFxuLy8gb2JqIHdpdGgga2V5cyBpbiBhIGNvbnNpc3RlbnQgb3JkZXIuXG5jb25zdCBvcHRzID0gWydpbmNsdWRlUHJlcmVsZWFzZScsICdsb29zZScsICdydGwnXVxuY29uc3QgcGFyc2VPcHRpb25zID0gb3B0aW9ucyA9PlxuICAhb3B0aW9ucyA/IHt9XG4gIDogdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnID8geyBsb29zZTogdHJ1ZSB9XG4gIDogb3B0cy5maWx0ZXIoayA9PiBvcHRpb25zW2tdKS5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBvW2tdID0gdHJ1ZVxuICAgIHJldHVybiBvXG4gIH0sIHt9KVxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZU9wdGlvbnNcbiIsImNvbnN0IHsgTUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSCB9ID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKVxuY29uc3QgZGVidWcgPSByZXF1aXJlKCcuL2RlYnVnJylcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHt9XG5cbi8vIFRoZSBhY3R1YWwgcmVnZXhwcyBnbyBvbiBleHBvcnRzLnJlXG5jb25zdCByZSA9IGV4cG9ydHMucmUgPSBbXVxuY29uc3Qgc3JjID0gZXhwb3J0cy5zcmMgPSBbXVxuY29uc3QgdCA9IGV4cG9ydHMudCA9IHt9XG5sZXQgUiA9IDBcblxuY29uc3QgY3JlYXRlVG9rZW4gPSAobmFtZSwgdmFsdWUsIGlzR2xvYmFsKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gUisrXG4gIGRlYnVnKG5hbWUsIGluZGV4LCB2YWx1ZSlcbiAgdFtuYW1lXSA9IGluZGV4XG4gIHNyY1tpbmRleF0gPSB2YWx1ZVxuICByZVtpbmRleF0gPSBuZXcgUmVnRXhwKHZhbHVlLCBpc0dsb2JhbCA/ICdnJyA6IHVuZGVmaW5lZClcbn1cblxuLy8gVGhlIGZvbGxvd2luZyBSZWd1bGFyIEV4cHJlc3Npb25zIGNhbiBiZSB1c2VkIGZvciB0b2tlbml6aW5nLFxuLy8gdmFsaWRhdGluZywgYW5kIHBhcnNpbmcgU2VtVmVyIHZlcnNpb24gc3RyaW5ncy5cblxuLy8gIyMgTnVtZXJpYyBJZGVudGlmaWVyXG4vLyBBIHNpbmdsZSBgMGAsIG9yIGEgbm9uLXplcm8gZGlnaXQgZm9sbG93ZWQgYnkgemVybyBvciBtb3JlIGRpZ2l0cy5cblxuY3JlYXRlVG9rZW4oJ05VTUVSSUNJREVOVElGSUVSJywgJzB8WzEtOV1cXFxcZConKVxuY3JlYXRlVG9rZW4oJ05VTUVSSUNJREVOVElGSUVSTE9PU0UnLCAnWzAtOV0rJylcblxuLy8gIyMgTm9uLW51bWVyaWMgSWRlbnRpZmllclxuLy8gWmVybyBvciBtb3JlIGRpZ2l0cywgZm9sbG93ZWQgYnkgYSBsZXR0ZXIgb3IgaHlwaGVuLCBhbmQgdGhlbiB6ZXJvIG9yXG4vLyBtb3JlIGxldHRlcnMsIGRpZ2l0cywgb3IgaHlwaGVucy5cblxuY3JlYXRlVG9rZW4oJ05PTk5VTUVSSUNJREVOVElGSUVSJywgJ1xcXFxkKlthLXpBLVotXVthLXpBLVowLTktXSonKVxuXG4vLyAjIyBNYWluIFZlcnNpb25cbi8vIFRocmVlIGRvdC1zZXBhcmF0ZWQgbnVtZXJpYyBpZGVudGlmaWVycy5cblxuY3JlYXRlVG9rZW4oJ01BSU5WRVJTSU9OJywgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSXX0pXFxcXC5gICtcbiAgICAgICAgICAgICAgICAgICBgKCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJdfSlcXFxcLmAgK1xuICAgICAgICAgICAgICAgICAgIGAoJHtzcmNbdC5OVU1FUklDSURFTlRJRklFUl19KWApXG5cbmNyZWF0ZVRva2VuKCdNQUlOVkVSU0lPTkxPT1NFJywgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSTE9PU0VdfSlcXFxcLmAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSTE9PU0VdfSlcXFxcLmAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSTE9PU0VdfSlgKVxuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uIElkZW50aWZpZXJcbi8vIEEgbnVtZXJpYyBpZGVudGlmaWVyLCBvciBhIG5vbi1udW1lcmljIGlkZW50aWZpZXIuXG5cbmNyZWF0ZVRva2VuKCdQUkVSRUxFQVNFSURFTlRJRklFUicsIGAoPzoke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSXVxufXwke3NyY1t0Lk5PTk5VTUVSSUNJREVOVElGSUVSXX0pYClcblxuY3JlYXRlVG9rZW4oJ1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0UnLCBgKD86JHtzcmNbdC5OVU1FUklDSURFTlRJRklFUkxPT1NFXVxufXwke3NyY1t0Lk5PTk5VTUVSSUNJREVOVElGSUVSXX0pYClcblxuLy8gIyMgUHJlLXJlbGVhc2UgVmVyc2lvblxuLy8gSHlwaGVuLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBkb3Qtc2VwYXJhdGVkIHByZS1yZWxlYXNlIHZlcnNpb25cbi8vIGlkZW50aWZpZXJzLlxuXG5jcmVhdGVUb2tlbignUFJFUkVMRUFTRScsIGAoPzotKCR7c3JjW3QuUFJFUkVMRUFTRUlERU5USUZJRVJdXG59KD86XFxcXC4ke3NyY1t0LlBSRVJFTEVBU0VJREVOVElGSUVSXX0pKikpYClcblxuY3JlYXRlVG9rZW4oJ1BSRVJFTEVBU0VMT09TRScsIGAoPzotPygke3NyY1t0LlBSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdXG59KD86XFxcXC4ke3NyY1t0LlBSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdfSkqKSlgKVxuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YSBJZGVudGlmaWVyXG4vLyBBbnkgY29tYmluYXRpb24gb2YgZGlnaXRzLCBsZXR0ZXJzLCBvciBoeXBoZW5zLlxuXG5jcmVhdGVUb2tlbignQlVJTERJREVOVElGSUVSJywgJ1swLTlBLVphLXotXSsnKVxuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YVxuLy8gUGx1cyBzaWduLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBwZXJpb2Qtc2VwYXJhdGVkIGJ1aWxkIG1ldGFkYXRhXG4vLyBpZGVudGlmaWVycy5cblxuY3JlYXRlVG9rZW4oJ0JVSUxEJywgYCg/OlxcXFwrKCR7c3JjW3QuQlVJTERJREVOVElGSUVSXVxufSg/OlxcXFwuJHtzcmNbdC5CVUlMRElERU5USUZJRVJdfSkqKSlgKVxuXG4vLyAjIyBGdWxsIFZlcnNpb24gU3RyaW5nXG4vLyBBIG1haW4gdmVyc2lvbiwgZm9sbG93ZWQgb3B0aW9uYWxseSBieSBhIHByZS1yZWxlYXNlIHZlcnNpb24gYW5kXG4vLyBidWlsZCBtZXRhZGF0YS5cblxuLy8gTm90ZSB0aGF0IHRoZSBvbmx5IG1ham9yLCBtaW5vciwgcGF0Y2gsIGFuZCBwcmUtcmVsZWFzZSBzZWN0aW9ucyBvZlxuLy8gdGhlIHZlcnNpb24gc3RyaW5nIGFyZSBjYXB0dXJpbmcgZ3JvdXBzLiAgVGhlIGJ1aWxkIG1ldGFkYXRhIGlzIG5vdCBhXG4vLyBjYXB0dXJpbmcgZ3JvdXAsIGJlY2F1c2UgaXQgc2hvdWxkIG5vdCBldmVyIGJlIHVzZWQgaW4gdmVyc2lvblxuLy8gY29tcGFyaXNvbi5cblxuY3JlYXRlVG9rZW4oJ0ZVTExQTEFJTicsIGB2PyR7c3JjW3QuTUFJTlZFUlNJT05dXG59JHtzcmNbdC5QUkVSRUxFQVNFXX0/JHtcbiAgc3JjW3QuQlVJTERdfT9gKVxuXG5jcmVhdGVUb2tlbignRlVMTCcsIGBeJHtzcmNbdC5GVUxMUExBSU5dfSRgKVxuXG4vLyBsaWtlIGZ1bGwsIGJ1dCBhbGxvd3MgdjEuMi4zIGFuZCA9MS4yLjMsIHdoaWNoIHBlb3BsZSBkbyBzb21ldGltZXMuXG4vLyBhbHNvLCAxLjAuMGFscGhhMSAocHJlcmVsZWFzZSB3aXRob3V0IHRoZSBoeXBoZW4pIHdoaWNoIGlzIHByZXR0eVxuLy8gY29tbW9uIGluIHRoZSBucG0gcmVnaXN0cnkuXG5jcmVhdGVUb2tlbignTE9PU0VQTEFJTicsIGBbdj1cXFxcc10qJHtzcmNbdC5NQUlOVkVSU0lPTkxPT1NFXVxufSR7c3JjW3QuUFJFUkVMRUFTRUxPT1NFXX0/JHtcbiAgc3JjW3QuQlVJTERdfT9gKVxuXG5jcmVhdGVUb2tlbignTE9PU0UnLCBgXiR7c3JjW3QuTE9PU0VQTEFJTl19JGApXG5cbmNyZWF0ZVRva2VuKCdHVExUJywgJygoPzo8fD4pPz0/KScpXG5cbi8vIFNvbWV0aGluZyBsaWtlIFwiMi4qXCIgb3IgXCIxLjIueFwiLlxuLy8gTm90ZSB0aGF0IFwieC54XCIgaXMgYSB2YWxpZCB4UmFuZ2UgaWRlbnRpZmVyLCBtZWFuaW5nIFwiYW55IHZlcnNpb25cIlxuLy8gT25seSB0aGUgZmlyc3QgaXRlbSBpcyBzdHJpY3RseSByZXF1aXJlZC5cbmNyZWF0ZVRva2VuKCdYUkFOR0VJREVOVElGSUVSTE9PU0UnLCBgJHtzcmNbdC5OVU1FUklDSURFTlRJRklFUkxPT1NFXX18eHxYfFxcXFwqYClcbmNyZWF0ZVRva2VuKCdYUkFOR0VJREVOVElGSUVSJywgYCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJdfXx4fFh8XFxcXCpgKVxuXG5jcmVhdGVUb2tlbignWFJBTkdFUExBSU4nLCBgW3Y9XFxcXHNdKigke3NyY1t0LlhSQU5HRUlERU5USUZJRVJdfSlgICtcbiAgICAgICAgICAgICAgICAgICBgKD86XFxcXC4oJHtzcmNbdC5YUkFOR0VJREVOVElGSUVSXX0pYCArXG4gICAgICAgICAgICAgICAgICAgYCg/OlxcXFwuKCR7c3JjW3QuWFJBTkdFSURFTlRJRklFUl19KWAgK1xuICAgICAgICAgICAgICAgICAgIGAoPzoke3NyY1t0LlBSRVJFTEVBU0VdfSk/JHtcbiAgICAgICAgICAgICAgICAgICAgIHNyY1t0LkJVSUxEXX0/YCArXG4gICAgICAgICAgICAgICAgICAgYCk/KT9gKVxuXG5jcmVhdGVUb2tlbignWFJBTkdFUExBSU5MT09TRScsIGBbdj1cXFxcc10qKCR7c3JjW3QuWFJBTkdFSURFTlRJRklFUkxPT1NFXX0pYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgKD86XFxcXC4oJHtzcmNbdC5YUkFOR0VJREVOVElGSUVSTE9PU0VdfSlgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAoPzpcXFxcLigke3NyY1t0LlhSQU5HRUlERU5USUZJRVJMT09TRV19KWAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCg/OiR7c3JjW3QuUFJFUkVMRUFTRUxPT1NFXX0pPyR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1t0LkJVSUxEXX0/YCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgKT8pP2ApXG5cbmNyZWF0ZVRva2VuKCdYUkFOR0UnLCBgXiR7c3JjW3QuR1RMVF19XFxcXHMqJHtzcmNbdC5YUkFOR0VQTEFJTl19JGApXG5jcmVhdGVUb2tlbignWFJBTkdFTE9PU0UnLCBgXiR7c3JjW3QuR1RMVF19XFxcXHMqJHtzcmNbdC5YUkFOR0VQTEFJTkxPT1NFXX0kYClcblxuLy8gQ29lcmNpb24uXG4vLyBFeHRyYWN0IGFueXRoaW5nIHRoYXQgY291bGQgY29uY2VpdmFibHkgYmUgYSBwYXJ0IG9mIGEgdmFsaWQgc2VtdmVyXG5jcmVhdGVUb2tlbignQ09FUkNFJywgYCR7JyhefFteXFxcXGRdKScgK1xuICAgICAgICAgICAgICAnKFxcXFxkezEsJ30ke01BWF9TQUZFX0NPTVBPTkVOVF9MRU5HVEh9fSlgICtcbiAgICAgICAgICAgICAgYCg/OlxcXFwuKFxcXFxkezEsJHtNQVhfU0FGRV9DT01QT05FTlRfTEVOR1RIfX0pKT9gICtcbiAgICAgICAgICAgICAgYCg/OlxcXFwuKFxcXFxkezEsJHtNQVhfU0FGRV9DT01QT05FTlRfTEVOR1RIfX0pKT9gICtcbiAgICAgICAgICAgICAgYCg/OiR8W15cXFxcZF0pYClcbmNyZWF0ZVRva2VuKCdDT0VSQ0VSVEwnLCBzcmNbdC5DT0VSQ0VdLCB0cnVlKVxuXG4vLyBUaWxkZSByYW5nZXMuXG4vLyBNZWFuaW5nIGlzIFwicmVhc29uYWJseSBhdCBvciBncmVhdGVyIHRoYW5cIlxuY3JlYXRlVG9rZW4oJ0xPTkVUSUxERScsICcoPzp+Pj8pJylcblxuY3JlYXRlVG9rZW4oJ1RJTERFVFJJTScsIGAoXFxcXHMqKSR7c3JjW3QuTE9ORVRJTERFXX1cXFxccytgLCB0cnVlKVxuZXhwb3J0cy50aWxkZVRyaW1SZXBsYWNlID0gJyQxfidcblxuY3JlYXRlVG9rZW4oJ1RJTERFJywgYF4ke3NyY1t0LkxPTkVUSUxERV19JHtzcmNbdC5YUkFOR0VQTEFJTl19JGApXG5jcmVhdGVUb2tlbignVElMREVMT09TRScsIGBeJHtzcmNbdC5MT05FVElMREVdfSR7c3JjW3QuWFJBTkdFUExBSU5MT09TRV19JGApXG5cbi8vIENhcmV0IHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJhdCBsZWFzdCBhbmQgYmFja3dhcmRzIGNvbXBhdGlibGUgd2l0aFwiXG5jcmVhdGVUb2tlbignTE9ORUNBUkVUJywgJyg/OlxcXFxeKScpXG5cbmNyZWF0ZVRva2VuKCdDQVJFVFRSSU0nLCBgKFxcXFxzKikke3NyY1t0LkxPTkVDQVJFVF19XFxcXHMrYCwgdHJ1ZSlcbmV4cG9ydHMuY2FyZXRUcmltUmVwbGFjZSA9ICckMV4nXG5cbmNyZWF0ZVRva2VuKCdDQVJFVCcsIGBeJHtzcmNbdC5MT05FQ0FSRVRdfSR7c3JjW3QuWFJBTkdFUExBSU5dfSRgKVxuY3JlYXRlVG9rZW4oJ0NBUkVUTE9PU0UnLCBgXiR7c3JjW3QuTE9ORUNBUkVUXX0ke3NyY1t0LlhSQU5HRVBMQUlOTE9PU0VdfSRgKVxuXG4vLyBBIHNpbXBsZSBndC9sdC9lcSB0aGluZywgb3IganVzdCBcIlwiIHRvIGluZGljYXRlIFwiYW55IHZlcnNpb25cIlxuY3JlYXRlVG9rZW4oJ0NPTVBBUkFUT1JMT09TRScsIGBeJHtzcmNbdC5HVExUXX1cXFxccyooJHtzcmNbdC5MT09TRVBMQUlOXX0pJHxeJGApXG5jcmVhdGVUb2tlbignQ09NUEFSQVRPUicsIGBeJHtzcmNbdC5HVExUXX1cXFxccyooJHtzcmNbdC5GVUxMUExBSU5dfSkkfF4kYClcblxuLy8gQW4gZXhwcmVzc2lvbiB0byBzdHJpcCBhbnkgd2hpdGVzcGFjZSBiZXR3ZWVuIHRoZSBndGx0IGFuZCB0aGUgdGhpbmdcbi8vIGl0IG1vZGlmaWVzLCBzbyB0aGF0IGA+IDEuMi4zYCA9PT4gYD4xLjIuM2BcbmNyZWF0ZVRva2VuKCdDT01QQVJBVE9SVFJJTScsIGAoXFxcXHMqKSR7c3JjW3QuR1RMVF1cbn1cXFxccyooJHtzcmNbdC5MT09TRVBMQUlOXX18JHtzcmNbdC5YUkFOR0VQTEFJTl19KWAsIHRydWUpXG5leHBvcnRzLmNvbXBhcmF0b3JUcmltUmVwbGFjZSA9ICckMSQyJDMnXG5cbi8vIFNvbWV0aGluZyBsaWtlIGAxLjIuMyAtIDEuMi40YFxuLy8gTm90ZSB0aGF0IHRoZXNlIGFsbCB1c2UgdGhlIGxvb3NlIGZvcm0sIGJlY2F1c2UgdGhleSdsbCBiZVxuLy8gY2hlY2tlZCBhZ2FpbnN0IGVpdGhlciB0aGUgc3RyaWN0IG9yIGxvb3NlIGNvbXBhcmF0b3IgZm9ybVxuLy8gbGF0ZXIuXG5jcmVhdGVUb2tlbignSFlQSEVOUkFOR0UnLCBgXlxcXFxzKigke3NyY1t0LlhSQU5HRVBMQUlOXX0pYCArXG4gICAgICAgICAgICAgICAgICAgYFxcXFxzKy1cXFxccytgICtcbiAgICAgICAgICAgICAgICAgICBgKCR7c3JjW3QuWFJBTkdFUExBSU5dfSlgICtcbiAgICAgICAgICAgICAgICAgICBgXFxcXHMqJGApXG5cbmNyZWF0ZVRva2VuKCdIWVBIRU5SQU5HRUxPT1NFJywgYF5cXFxccyooJHtzcmNbdC5YUkFOR0VQTEFJTkxPT1NFXX0pYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgXFxcXHMrLVxcXFxzK2AgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCgke3NyY1t0LlhSQU5HRVBMQUlOTE9PU0VdfSlgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcXFxccyokYClcblxuLy8gU3RhciByYW5nZXMgYmFzaWNhbGx5IGp1c3QgYWxsb3cgYW55dGhpbmcgYXQgYWxsLlxuY3JlYXRlVG9rZW4oJ1NUQVInLCAnKDx8Pik/PT9cXFxccypcXFxcKicpXG4vLyA+PTAuMC4wIGlzIGxpa2UgYSBzdGFyXG5jcmVhdGVUb2tlbignR1RFMCcsICdeXFxcXHMqPj1cXFxccyowXFxcXC4wXFxcXC4wXFxcXHMqJCcpXG5jcmVhdGVUb2tlbignR1RFMFBSRScsICdeXFxcXHMqPj1cXFxccyowXFxcXC4wXFxcXC4wLTBcXFxccyokJylcbiIsIi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGdyZWF0ZXIgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZS5cbmNvbnN0IG91dHNpZGUgPSByZXF1aXJlKCcuL291dHNpZGUnKVxuY29uc3QgZ3RyID0gKHZlcnNpb24sIHJhbmdlLCBvcHRpb25zKSA9PiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPicsIG9wdGlvbnMpXG5tb2R1bGUuZXhwb3J0cyA9IGd0clxuIiwiY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3JhbmdlJylcbmNvbnN0IGludGVyc2VjdHMgPSAocjEsIHIyLCBvcHRpb25zKSA9PiB7XG4gIHIxID0gbmV3IFJhbmdlKHIxLCBvcHRpb25zKVxuICByMiA9IG5ldyBSYW5nZShyMiwgb3B0aW9ucylcbiAgcmV0dXJuIHIxLmludGVyc2VjdHMocjIpXG59XG5tb2R1bGUuZXhwb3J0cyA9IGludGVyc2VjdHNcbiIsImNvbnN0IG91dHNpZGUgPSByZXF1aXJlKCcuL291dHNpZGUnKVxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgbGVzcyB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlXG5jb25zdCBsdHIgPSAodmVyc2lvbiwgcmFuZ2UsIG9wdGlvbnMpID0+IG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc8Jywgb3B0aW9ucylcbm1vZHVsZS5leHBvcnRzID0gbHRyXG4iLCJjb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvcmFuZ2UnKVxuXG5jb25zdCBtYXhTYXRpc2Z5aW5nID0gKHZlcnNpb25zLCByYW5nZSwgb3B0aW9ucykgPT4ge1xuICBsZXQgbWF4ID0gbnVsbFxuICBsZXQgbWF4U1YgPSBudWxsXG4gIGxldCByYW5nZU9iaiA9IG51bGxcbiAgdHJ5IHtcbiAgICByYW5nZU9iaiA9IG5ldyBSYW5nZShyYW5nZSwgb3B0aW9ucylcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHZlcnNpb25zLmZvckVhY2goKHYpID0+IHtcbiAgICBpZiAocmFuZ2VPYmoudGVzdCh2KSkge1xuICAgICAgLy8gc2F0aXNmaWVzKHYsIHJhbmdlLCBvcHRpb25zKVxuICAgICAgaWYgKCFtYXggfHwgbWF4U1YuY29tcGFyZSh2KSA9PT0gLTEpIHtcbiAgICAgICAgLy8gY29tcGFyZShtYXgsIHYsIHRydWUpXG4gICAgICAgIG1heCA9IHZcbiAgICAgICAgbWF4U1YgPSBuZXcgU2VtVmVyKG1heCwgb3B0aW9ucylcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBtYXhcbn1cbm1vZHVsZS5leHBvcnRzID0gbWF4U2F0aXNmeWluZ1xuIiwiY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3JhbmdlJylcbmNvbnN0IG1pblNhdGlzZnlpbmcgPSAodmVyc2lvbnMsIHJhbmdlLCBvcHRpb25zKSA9PiB7XG4gIGxldCBtaW4gPSBudWxsXG4gIGxldCBtaW5TViA9IG51bGxcbiAgbGV0IHJhbmdlT2JqID0gbnVsbFxuICB0cnkge1xuICAgIHJhbmdlT2JqID0gbmV3IFJhbmdlKHJhbmdlLCBvcHRpb25zKVxuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgdmVyc2lvbnMuZm9yRWFjaCgodikgPT4ge1xuICAgIGlmIChyYW5nZU9iai50ZXN0KHYpKSB7XG4gICAgICAvLyBzYXRpc2ZpZXModiwgcmFuZ2UsIG9wdGlvbnMpXG4gICAgICBpZiAoIW1pbiB8fCBtaW5TVi5jb21wYXJlKHYpID09PSAxKSB7XG4gICAgICAgIC8vIGNvbXBhcmUobWluLCB2LCB0cnVlKVxuICAgICAgICBtaW4gPSB2XG4gICAgICAgIG1pblNWID0gbmV3IFNlbVZlcihtaW4sIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuICB9KVxuICByZXR1cm4gbWluXG59XG5tb2R1bGUuZXhwb3J0cyA9IG1pblNhdGlzZnlpbmdcbiIsImNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9yYW5nZScpXG5jb25zdCBndCA9IHJlcXVpcmUoJy4uL2Z1bmN0aW9ucy9ndCcpXG5cbmNvbnN0IG1pblZlcnNpb24gPSAocmFuZ2UsIGxvb3NlKSA9PiB7XG4gIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSlcblxuICBsZXQgbWludmVyID0gbmV3IFNlbVZlcignMC4wLjAnKVxuICBpZiAocmFuZ2UudGVzdChtaW52ZXIpKSB7XG4gICAgcmV0dXJuIG1pbnZlclxuICB9XG5cbiAgbWludmVyID0gbmV3IFNlbVZlcignMC4wLjAtMCcpXG4gIGlmIChyYW5nZS50ZXN0KG1pbnZlcikpIHtcbiAgICByZXR1cm4gbWludmVyXG4gIH1cblxuICBtaW52ZXIgPSBudWxsXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2Uuc2V0Lmxlbmd0aDsgKytpKSB7XG4gICAgY29uc3QgY29tcGFyYXRvcnMgPSByYW5nZS5zZXRbaV1cblxuICAgIGxldCBzZXRNaW4gPSBudWxsXG4gICAgY29tcGFyYXRvcnMuZm9yRWFjaCgoY29tcGFyYXRvcikgPT4ge1xuICAgICAgLy8gQ2xvbmUgdG8gYXZvaWQgbWFuaXB1bGF0aW5nIHRoZSBjb21wYXJhdG9yJ3Mgc2VtdmVyIG9iamVjdC5cbiAgICAgIGNvbnN0IGNvbXB2ZXIgPSBuZXcgU2VtVmVyKGNvbXBhcmF0b3Iuc2VtdmVyLnZlcnNpb24pXG4gICAgICBzd2l0Y2ggKGNvbXBhcmF0b3Iub3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgaWYgKGNvbXB2ZXIucHJlcmVsZWFzZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbXB2ZXIucGF0Y2grK1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21wdmVyLnByZXJlbGVhc2UucHVzaCgwKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb21wdmVyLnJhdyA9IGNvbXB2ZXIuZm9ybWF0KClcbiAgICAgICAgICAvKiBmYWxsdGhyb3VnaCAqL1xuICAgICAgICBjYXNlICcnOlxuICAgICAgICBjYXNlICc+PSc6XG4gICAgICAgICAgaWYgKCFzZXRNaW4gfHwgZ3QoY29tcHZlciwgc2V0TWluKSkge1xuICAgICAgICAgICAgc2V0TWluID0gY29tcHZlclxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgY2FzZSAnPD0nOlxuICAgICAgICAgIC8qIElnbm9yZSBtYXhpbXVtIHZlcnNpb25zICovXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgb3BlcmF0aW9uOiAke2NvbXBhcmF0b3Iub3BlcmF0b3J9YClcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmIChzZXRNaW4gJiYgKCFtaW52ZXIgfHwgZ3QobWludmVyLCBzZXRNaW4pKSkge1xuICAgICAgbWludmVyID0gc2V0TWluXG4gICAgfVxuICB9XG5cbiAgaWYgKG1pbnZlciAmJiByYW5nZS50ZXN0KG1pbnZlcikpIHtcbiAgICByZXR1cm4gbWludmVyXG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxubW9kdWxlLmV4cG9ydHMgPSBtaW5WZXJzaW9uXG4iLCJjb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBDb21wYXJhdG9yID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9jb21wYXJhdG9yJylcbmNvbnN0IHsgQU5ZIH0gPSBDb21wYXJhdG9yXG5jb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvcmFuZ2UnKVxuY29uc3Qgc2F0aXNmaWVzID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL3NhdGlzZmllcycpXG5jb25zdCBndCA9IHJlcXVpcmUoJy4uL2Z1bmN0aW9ucy9ndCcpXG5jb25zdCBsdCA9IHJlcXVpcmUoJy4uL2Z1bmN0aW9ucy9sdCcpXG5jb25zdCBsdGUgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvbHRlJylcbmNvbnN0IGd0ZSA9IHJlcXVpcmUoJy4uL2Z1bmN0aW9ucy9ndGUnKVxuXG5jb25zdCBvdXRzaWRlID0gKHZlcnNpb24sIHJhbmdlLCBoaWxvLCBvcHRpb25zKSA9PiB7XG4gIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIG9wdGlvbnMpXG4gIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBvcHRpb25zKVxuXG4gIGxldCBndGZuLCBsdGVmbiwgbHRmbiwgY29tcCwgZWNvbXBcbiAgc3dpdGNoIChoaWxvKSB7XG4gICAgY2FzZSAnPic6XG4gICAgICBndGZuID0gZ3RcbiAgICAgIGx0ZWZuID0gbHRlXG4gICAgICBsdGZuID0gbHRcbiAgICAgIGNvbXAgPSAnPidcbiAgICAgIGVjb21wID0gJz49J1xuICAgICAgYnJlYWtcbiAgICBjYXNlICc8JzpcbiAgICAgIGd0Zm4gPSBsdFxuICAgICAgbHRlZm4gPSBndGVcbiAgICAgIGx0Zm4gPSBndFxuICAgICAgY29tcCA9ICc8J1xuICAgICAgZWNvbXAgPSAnPD0nXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNdXN0IHByb3ZpZGUgYSBoaWxvIHZhbCBvZiBcIjxcIiBvciBcIj5cIicpXG4gIH1cblxuICAvLyBJZiBpdCBzYXRpc2ZpZXMgdGhlIHJhbmdlIGl0IGlzIG5vdCBvdXRzaWRlXG4gIGlmIChzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIG9wdGlvbnMpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBGcm9tIG5vdyBvbiwgdmFyaWFibGUgdGVybXMgYXJlIGFzIGlmIHdlJ3JlIGluIFwiZ3RyXCIgbW9kZS5cbiAgLy8gYnV0IG5vdGUgdGhhdCBldmVyeXRoaW5nIGlzIGZsaXBwZWQgZm9yIHRoZSBcImx0clwiIGZ1bmN0aW9uLlxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2Uuc2V0Lmxlbmd0aDsgKytpKSB7XG4gICAgY29uc3QgY29tcGFyYXRvcnMgPSByYW5nZS5zZXRbaV1cblxuICAgIGxldCBoaWdoID0gbnVsbFxuICAgIGxldCBsb3cgPSBudWxsXG5cbiAgICBjb21wYXJhdG9ycy5mb3JFYWNoKChjb21wYXJhdG9yKSA9PiB7XG4gICAgICBpZiAoY29tcGFyYXRvci5zZW12ZXIgPT09IEFOWSkge1xuICAgICAgICBjb21wYXJhdG9yID0gbmV3IENvbXBhcmF0b3IoJz49MC4wLjAnKVxuICAgICAgfVxuICAgICAgaGlnaCA9IGhpZ2ggfHwgY29tcGFyYXRvclxuICAgICAgbG93ID0gbG93IHx8IGNvbXBhcmF0b3JcbiAgICAgIGlmIChndGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBoaWdoLnNlbXZlciwgb3B0aW9ucykpIHtcbiAgICAgICAgaGlnaCA9IGNvbXBhcmF0b3JcbiAgICAgIH0gZWxzZSBpZiAobHRmbihjb21wYXJhdG9yLnNlbXZlciwgbG93LnNlbXZlciwgb3B0aW9ucykpIHtcbiAgICAgICAgbG93ID0gY29tcGFyYXRvclxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBJZiB0aGUgZWRnZSB2ZXJzaW9uIGNvbXBhcmF0b3IgaGFzIGEgb3BlcmF0b3IgdGhlbiBvdXIgdmVyc2lvblxuICAgIC8vIGlzbid0IG91dHNpZGUgaXRcbiAgICBpZiAoaGlnaC5vcGVyYXRvciA9PT0gY29tcCB8fCBoaWdoLm9wZXJhdG9yID09PSBlY29tcCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGxvd2VzdCB2ZXJzaW9uIGNvbXBhcmF0b3IgaGFzIGFuIG9wZXJhdG9yIGFuZCBvdXIgdmVyc2lvblxuICAgIC8vIGlzIGxlc3MgdGhhbiBpdCB0aGVuIGl0IGlzbid0IGhpZ2hlciB0aGFuIHRoZSByYW5nZVxuICAgIGlmICgoIWxvdy5vcGVyYXRvciB8fCBsb3cub3BlcmF0b3IgPT09IGNvbXApICYmXG4gICAgICAgIGx0ZWZuKHZlcnNpb24sIGxvdy5zZW12ZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2UgaWYgKGxvdy5vcGVyYXRvciA9PT0gZWNvbXAgJiYgbHRmbih2ZXJzaW9uLCBsb3cuc2VtdmVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3V0c2lkZVxuIiwiLy8gZ2l2ZW4gYSBzZXQgb2YgdmVyc2lvbnMgYW5kIGEgcmFuZ2UsIGNyZWF0ZSBhIFwic2ltcGxpZmllZFwiIHJhbmdlXG4vLyB0aGF0IGluY2x1ZGVzIHRoZSBzYW1lIHZlcnNpb25zIHRoYXQgdGhlIG9yaWdpbmFsIHJhbmdlIGRvZXNcbi8vIElmIHRoZSBvcmlnaW5hbCByYW5nZSBpcyBzaG9ydGVyIHRoYW4gdGhlIHNpbXBsaWZpZWQgb25lLCByZXR1cm4gdGhhdC5cbmNvbnN0IHNhdGlzZmllcyA9IHJlcXVpcmUoJy4uL2Z1bmN0aW9ucy9zYXRpc2ZpZXMuanMnKVxuY29uc3QgY29tcGFyZSA9IHJlcXVpcmUoJy4uL2Z1bmN0aW9ucy9jb21wYXJlLmpzJylcbm1vZHVsZS5leHBvcnRzID0gKHZlcnNpb25zLCByYW5nZSwgb3B0aW9ucykgPT4ge1xuICBjb25zdCBzZXQgPSBbXVxuICBsZXQgZmlyc3QgPSBudWxsXG4gIGxldCBwcmV2ID0gbnVsbFxuICBjb25zdCB2ID0gdmVyc2lvbnMuc29ydCgoYSwgYikgPT4gY29tcGFyZShhLCBiLCBvcHRpb25zKSlcbiAgZm9yIChjb25zdCB2ZXJzaW9uIG9mIHYpIHtcbiAgICBjb25zdCBpbmNsdWRlZCA9IHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgb3B0aW9ucylcbiAgICBpZiAoaW5jbHVkZWQpIHtcbiAgICAgIHByZXYgPSB2ZXJzaW9uXG4gICAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgIGZpcnN0ID0gdmVyc2lvblxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJldikge1xuICAgICAgICBzZXQucHVzaChbZmlyc3QsIHByZXZdKVxuICAgICAgfVxuICAgICAgcHJldiA9IG51bGxcbiAgICAgIGZpcnN0ID0gbnVsbFxuICAgIH1cbiAgfVxuICBpZiAoZmlyc3QpIHtcbiAgICBzZXQucHVzaChbZmlyc3QsIG51bGxdKVxuICB9XG5cbiAgY29uc3QgcmFuZ2VzID0gW11cbiAgZm9yIChjb25zdCBbbWluLCBtYXhdIG9mIHNldCkge1xuICAgIGlmIChtaW4gPT09IG1heCkge1xuICAgICAgcmFuZ2VzLnB1c2gobWluKVxuICAgIH0gZWxzZSBpZiAoIW1heCAmJiBtaW4gPT09IHZbMF0pIHtcbiAgICAgIHJhbmdlcy5wdXNoKCcqJylcbiAgICB9IGVsc2UgaWYgKCFtYXgpIHtcbiAgICAgIHJhbmdlcy5wdXNoKGA+PSR7bWlufWApXG4gICAgfSBlbHNlIGlmIChtaW4gPT09IHZbMF0pIHtcbiAgICAgIHJhbmdlcy5wdXNoKGA8PSR7bWF4fWApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJhbmdlcy5wdXNoKGAke21pbn0gLSAke21heH1gKVxuICAgIH1cbiAgfVxuICBjb25zdCBzaW1wbGlmaWVkID0gcmFuZ2VzLmpvaW4oJyB8fCAnKVxuICBjb25zdCBvcmlnaW5hbCA9IHR5cGVvZiByYW5nZS5yYXcgPT09ICdzdHJpbmcnID8gcmFuZ2UucmF3IDogU3RyaW5nKHJhbmdlKVxuICByZXR1cm4gc2ltcGxpZmllZC5sZW5ndGggPCBvcmlnaW5hbC5sZW5ndGggPyBzaW1wbGlmaWVkIDogcmFuZ2Vcbn1cbiIsImNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9yYW5nZS5qcycpXG5jb25zdCBDb21wYXJhdG9yID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9jb21wYXJhdG9yLmpzJylcbmNvbnN0IHsgQU5ZIH0gPSBDb21wYXJhdG9yXG5jb25zdCBzYXRpc2ZpZXMgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvc2F0aXNmaWVzLmpzJylcbmNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvY29tcGFyZS5qcycpXG5cbi8vIENvbXBsZXggcmFuZ2UgYHIxIHx8IHIyIHx8IC4uLmAgaXMgYSBzdWJzZXQgb2YgYFIxIHx8IFIyIHx8IC4uLmAgaWZmOlxuLy8gLSBFdmVyeSBzaW1wbGUgcmFuZ2UgYHIxLCByMiwgLi4uYCBpcyBhIG51bGwgc2V0LCBPUlxuLy8gLSBFdmVyeSBzaW1wbGUgcmFuZ2UgYHIxLCByMiwgLi4uYCB3aGljaCBpcyBub3QgYSBudWxsIHNldCBpcyBhIHN1YnNldCBvZlxuLy8gICBzb21lIGBSMSwgUjIsIC4uLmBcbi8vXG4vLyBTaW1wbGUgcmFuZ2UgYGMxIGMyIC4uLmAgaXMgYSBzdWJzZXQgb2Ygc2ltcGxlIHJhbmdlIGBDMSBDMiAuLi5gIGlmZjpcbi8vIC0gSWYgYyBpcyBvbmx5IHRoZSBBTlkgY29tcGFyYXRvclxuLy8gICAtIElmIEMgaXMgb25seSB0aGUgQU5ZIGNvbXBhcmF0b3IsIHJldHVybiB0cnVlXG4vLyAgIC0gRWxzZSBpZiBpbiBwcmVyZWxlYXNlIG1vZGUsIHJldHVybiBmYWxzZVxuLy8gICAtIGVsc2UgcmVwbGFjZSBjIHdpdGggYFs+PTAuMC4wXWBcbi8vIC0gSWYgQyBpcyBvbmx5IHRoZSBBTlkgY29tcGFyYXRvclxuLy8gICAtIGlmIGluIHByZXJlbGVhc2UgbW9kZSwgcmV0dXJuIHRydWVcbi8vICAgLSBlbHNlIHJlcGxhY2UgQyB3aXRoIGBbPj0wLjAuMF1gXG4vLyAtIExldCBFUSBiZSB0aGUgc2V0IG9mID0gY29tcGFyYXRvcnMgaW4gY1xuLy8gLSBJZiBFUSBpcyBtb3JlIHRoYW4gb25lLCByZXR1cm4gdHJ1ZSAobnVsbCBzZXQpXG4vLyAtIExldCBHVCBiZSB0aGUgaGlnaGVzdCA+IG9yID49IGNvbXBhcmF0b3IgaW4gY1xuLy8gLSBMZXQgTFQgYmUgdGhlIGxvd2VzdCA8IG9yIDw9IGNvbXBhcmF0b3IgaW4gY1xuLy8gLSBJZiBHVCBhbmQgTFQsIGFuZCBHVC5zZW12ZXIgPiBMVC5zZW12ZXIsIHJldHVybiB0cnVlIChudWxsIHNldClcbi8vIC0gSWYgYW55IEMgaXMgYSA9IHJhbmdlLCBhbmQgR1Qgb3IgTFQgYXJlIHNldCwgcmV0dXJuIGZhbHNlXG4vLyAtIElmIEVRXG4vLyAgIC0gSWYgR1QsIGFuZCBFUSBkb2VzIG5vdCBzYXRpc2Z5IEdULCByZXR1cm4gdHJ1ZSAobnVsbCBzZXQpXG4vLyAgIC0gSWYgTFQsIGFuZCBFUSBkb2VzIG5vdCBzYXRpc2Z5IExULCByZXR1cm4gdHJ1ZSAobnVsbCBzZXQpXG4vLyAgIC0gSWYgRVEgc2F0aXNmaWVzIGV2ZXJ5IEMsIHJldHVybiB0cnVlXG4vLyAgIC0gRWxzZSByZXR1cm4gZmFsc2Vcbi8vIC0gSWYgR1Rcbi8vICAgLSBJZiBHVC5zZW12ZXIgaXMgbG93ZXIgdGhhbiBhbnkgPiBvciA+PSBjb21wIGluIEMsIHJldHVybiBmYWxzZVxuLy8gICAtIElmIEdUIGlzID49LCBhbmQgR1Quc2VtdmVyIGRvZXMgbm90IHNhdGlzZnkgZXZlcnkgQywgcmV0dXJuIGZhbHNlXG4vLyAgIC0gSWYgR1Quc2VtdmVyIGhhcyBhIHByZXJlbGVhc2UsIGFuZCBub3QgaW4gcHJlcmVsZWFzZSBtb2RlXG4vLyAgICAgLSBJZiBubyBDIGhhcyBhIHByZXJlbGVhc2UgYW5kIHRoZSBHVC5zZW12ZXIgdHVwbGUsIHJldHVybiBmYWxzZVxuLy8gLSBJZiBMVFxuLy8gICAtIElmIExULnNlbXZlciBpcyBncmVhdGVyIHRoYW4gYW55IDwgb3IgPD0gY29tcCBpbiBDLCByZXR1cm4gZmFsc2Vcbi8vICAgLSBJZiBMVCBpcyA8PSwgYW5kIExULnNlbXZlciBkb2VzIG5vdCBzYXRpc2Z5IGV2ZXJ5IEMsIHJldHVybiBmYWxzZVxuLy8gICAtIElmIEdULnNlbXZlciBoYXMgYSBwcmVyZWxlYXNlLCBhbmQgbm90IGluIHByZXJlbGVhc2UgbW9kZVxuLy8gICAgIC0gSWYgbm8gQyBoYXMgYSBwcmVyZWxlYXNlIGFuZCB0aGUgTFQuc2VtdmVyIHR1cGxlLCByZXR1cm4gZmFsc2Vcbi8vIC0gRWxzZSByZXR1cm4gdHJ1ZVxuXG5jb25zdCBzdWJzZXQgPSAoc3ViLCBkb20sIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBpZiAoc3ViID09PSBkb20pIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc3ViID0gbmV3IFJhbmdlKHN1Yiwgb3B0aW9ucylcbiAgZG9tID0gbmV3IFJhbmdlKGRvbSwgb3B0aW9ucylcbiAgbGV0IHNhd05vbk51bGwgPSBmYWxzZVxuXG4gIE9VVEVSOiBmb3IgKGNvbnN0IHNpbXBsZVN1YiBvZiBzdWIuc2V0KSB7XG4gICAgZm9yIChjb25zdCBzaW1wbGVEb20gb2YgZG9tLnNldCkge1xuICAgICAgY29uc3QgaXNTdWIgPSBzaW1wbGVTdWJzZXQoc2ltcGxlU3ViLCBzaW1wbGVEb20sIG9wdGlvbnMpXG4gICAgICBzYXdOb25OdWxsID0gc2F3Tm9uTnVsbCB8fCBpc1N1YiAhPT0gbnVsbFxuICAgICAgaWYgKGlzU3ViKSB7XG4gICAgICAgIGNvbnRpbnVlIE9VVEVSXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHRoZSBudWxsIHNldCBpcyBhIHN1YnNldCBvZiBldmVyeXRoaW5nLCBidXQgbnVsbCBzaW1wbGUgcmFuZ2VzIGluXG4gICAgLy8gYSBjb21wbGV4IHJhbmdlIHNob3VsZCBiZSBpZ25vcmVkLiAgc28gaWYgd2Ugc2F3IGEgbm9uLW51bGwgcmFuZ2UsXG4gICAgLy8gdGhlbiB3ZSBrbm93IHRoaXMgaXNuJ3QgYSBzdWJzZXQsIGJ1dCBpZiBFVkVSWSBzaW1wbGUgcmFuZ2Ugd2FzIG51bGwsXG4gICAgLy8gdGhlbiBpdCBpcyBhIHN1YnNldC5cbiAgICBpZiAoc2F3Tm9uTnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbmNvbnN0IHNpbXBsZVN1YnNldCA9IChzdWIsIGRvbSwgb3B0aW9ucykgPT4ge1xuICBpZiAoc3ViID09PSBkb20pIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKHN1Yi5sZW5ndGggPT09IDEgJiYgc3ViWzBdLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgaWYgKGRvbS5sZW5ndGggPT09IDEgJiYgZG9tWzBdLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSkge1xuICAgICAgc3ViID0gW25ldyBDb21wYXJhdG9yKCc+PTAuMC4wLTAnKV1cbiAgICB9IGVsc2Uge1xuICAgICAgc3ViID0gW25ldyBDb21wYXJhdG9yKCc+PTAuMC4wJyldXG4gICAgfVxuICB9XG5cbiAgaWYgKGRvbS5sZW5ndGggPT09IDEgJiYgZG9tWzBdLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgaWYgKG9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbSA9IFtuZXcgQ29tcGFyYXRvcignPj0wLjAuMCcpXVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGVxU2V0ID0gbmV3IFNldCgpXG4gIGxldCBndCwgbHRcbiAgZm9yIChjb25zdCBjIG9mIHN1Yikge1xuICAgIGlmIChjLm9wZXJhdG9yID09PSAnPicgfHwgYy5vcGVyYXRvciA9PT0gJz49Jykge1xuICAgICAgZ3QgPSBoaWdoZXJHVChndCwgYywgb3B0aW9ucylcbiAgICB9IGVsc2UgaWYgKGMub3BlcmF0b3IgPT09ICc8JyB8fCBjLm9wZXJhdG9yID09PSAnPD0nKSB7XG4gICAgICBsdCA9IGxvd2VyTFQobHQsIGMsIG9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVxU2V0LmFkZChjLnNlbXZlcilcbiAgICB9XG4gIH1cblxuICBpZiAoZXFTZXQuc2l6ZSA+IDEpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgbGV0IGd0bHRDb21wXG4gIGlmIChndCAmJiBsdCkge1xuICAgIGd0bHRDb21wID0gY29tcGFyZShndC5zZW12ZXIsIGx0LnNlbXZlciwgb3B0aW9ucylcbiAgICBpZiAoZ3RsdENvbXAgPiAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0gZWxzZSBpZiAoZ3RsdENvbXAgPT09IDAgJiYgKGd0Lm9wZXJhdG9yICE9PSAnPj0nIHx8IGx0Lm9wZXJhdG9yICE9PSAnPD0nKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICAvLyB3aWxsIGl0ZXJhdGUgb25lIG9yIHplcm8gdGltZXNcbiAgZm9yIChjb25zdCBlcSBvZiBlcVNldCkge1xuICAgIGlmIChndCAmJiAhc2F0aXNmaWVzKGVxLCBTdHJpbmcoZ3QpLCBvcHRpb25zKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBpZiAobHQgJiYgIXNhdGlzZmllcyhlcSwgU3RyaW5nKGx0KSwgb3B0aW9ucykpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBjIG9mIGRvbSkge1xuICAgICAgaWYgKCFzYXRpc2ZpZXMoZXEsIFN0cmluZyhjKSwgb3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGxldCBoaWdoZXIsIGxvd2VyXG4gIGxldCBoYXNEb21MVCwgaGFzRG9tR1RcbiAgLy8gaWYgdGhlIHN1YnNldCBoYXMgYSBwcmVyZWxlYXNlLCB3ZSBuZWVkIGEgY29tcGFyYXRvciBpbiB0aGUgc3VwZXJzZXRcbiAgLy8gd2l0aCB0aGUgc2FtZSB0dXBsZSBhbmQgYSBwcmVyZWxlYXNlLCBvciBpdCdzIG5vdCBhIHN1YnNldFxuICBsZXQgbmVlZERvbUxUUHJlID0gbHQgJiZcbiAgICAhb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSAmJlxuICAgIGx0LnNlbXZlci5wcmVyZWxlYXNlLmxlbmd0aCA/IGx0LnNlbXZlciA6IGZhbHNlXG4gIGxldCBuZWVkRG9tR1RQcmUgPSBndCAmJlxuICAgICFvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlICYmXG4gICAgZ3Quc2VtdmVyLnByZXJlbGVhc2UubGVuZ3RoID8gZ3Quc2VtdmVyIDogZmFsc2VcbiAgLy8gZXhjZXB0aW9uOiA8MS4yLjMtMCBpcyB0aGUgc2FtZSBhcyA8MS4yLjNcbiAgaWYgKG5lZWREb21MVFByZSAmJiBuZWVkRG9tTFRQcmUucHJlcmVsZWFzZS5sZW5ndGggPT09IDEgJiZcbiAgICAgIGx0Lm9wZXJhdG9yID09PSAnPCcgJiYgbmVlZERvbUxUUHJlLnByZXJlbGVhc2VbMF0gPT09IDApIHtcbiAgICBuZWVkRG9tTFRQcmUgPSBmYWxzZVxuICB9XG5cbiAgZm9yIChjb25zdCBjIG9mIGRvbSkge1xuICAgIGhhc0RvbUdUID0gaGFzRG9tR1QgfHwgYy5vcGVyYXRvciA9PT0gJz4nIHx8IGMub3BlcmF0b3IgPT09ICc+PSdcbiAgICBoYXNEb21MVCA9IGhhc0RvbUxUIHx8IGMub3BlcmF0b3IgPT09ICc8JyB8fCBjLm9wZXJhdG9yID09PSAnPD0nXG4gICAgaWYgKGd0KSB7XG4gICAgICBpZiAobmVlZERvbUdUUHJlKSB7XG4gICAgICAgIGlmIChjLnNlbXZlci5wcmVyZWxlYXNlICYmIGMuc2VtdmVyLnByZXJlbGVhc2UubGVuZ3RoICYmXG4gICAgICAgICAgICBjLnNlbXZlci5tYWpvciA9PT0gbmVlZERvbUdUUHJlLm1ham9yICYmXG4gICAgICAgICAgICBjLnNlbXZlci5taW5vciA9PT0gbmVlZERvbUdUUHJlLm1pbm9yICYmXG4gICAgICAgICAgICBjLnNlbXZlci5wYXRjaCA9PT0gbmVlZERvbUdUUHJlLnBhdGNoKSB7XG4gICAgICAgICAgbmVlZERvbUdUUHJlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGMub3BlcmF0b3IgPT09ICc+JyB8fCBjLm9wZXJhdG9yID09PSAnPj0nKSB7XG4gICAgICAgIGhpZ2hlciA9IGhpZ2hlckdUKGd0LCBjLCBvcHRpb25zKVxuICAgICAgICBpZiAoaGlnaGVyID09PSBjICYmIGhpZ2hlciAhPT0gZ3QpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChndC5vcGVyYXRvciA9PT0gJz49JyAmJiAhc2F0aXNmaWVzKGd0LnNlbXZlciwgU3RyaW5nKGMpLCBvcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGx0KSB7XG4gICAgICBpZiAobmVlZERvbUxUUHJlKSB7XG4gICAgICAgIGlmIChjLnNlbXZlci5wcmVyZWxlYXNlICYmIGMuc2VtdmVyLnByZXJlbGVhc2UubGVuZ3RoICYmXG4gICAgICAgICAgICBjLnNlbXZlci5tYWpvciA9PT0gbmVlZERvbUxUUHJlLm1ham9yICYmXG4gICAgICAgICAgICBjLnNlbXZlci5taW5vciA9PT0gbmVlZERvbUxUUHJlLm1pbm9yICYmXG4gICAgICAgICAgICBjLnNlbXZlci5wYXRjaCA9PT0gbmVlZERvbUxUUHJlLnBhdGNoKSB7XG4gICAgICAgICAgbmVlZERvbUxUUHJlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGMub3BlcmF0b3IgPT09ICc8JyB8fCBjLm9wZXJhdG9yID09PSAnPD0nKSB7XG4gICAgICAgIGxvd2VyID0gbG93ZXJMVChsdCwgYywgb3B0aW9ucylcbiAgICAgICAgaWYgKGxvd2VyID09PSBjICYmIGxvd2VyICE9PSBsdCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGx0Lm9wZXJhdG9yID09PSAnPD0nICYmICFzYXRpc2ZpZXMobHQuc2VtdmVyLCBTdHJpbmcoYyksIG9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWMub3BlcmF0b3IgJiYgKGx0IHx8IGd0KSAmJiBndGx0Q29tcCAhPT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlcmUgd2FzIGEgPCBvciA+LCBhbmQgbm90aGluZyBpbiB0aGUgZG9tLCB0aGVuIG11c3QgYmUgZmFsc2VcbiAgLy8gVU5MRVNTIGl0IHdhcyBsaW1pdGVkIGJ5IGFub3RoZXIgcmFuZ2UgaW4gdGhlIG90aGVyIGRpcmVjdGlvbi5cbiAgLy8gRWcsID4xLjAuMCA8MS4wLjEgaXMgc3RpbGwgYSBzdWJzZXQgb2YgPDIuMC4wXG4gIGlmIChndCAmJiBoYXNEb21MVCAmJiAhbHQgJiYgZ3RsdENvbXAgIT09IDApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmIChsdCAmJiBoYXNEb21HVCAmJiAhZ3QgJiYgZ3RsdENvbXAgIT09IDApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIHdlIG5lZWRlZCBhIHByZXJlbGVhc2UgcmFuZ2UgaW4gYSBzcGVjaWZpYyB0dXBsZSwgYnV0IGRpZG4ndCBnZXQgb25lXG4gIC8vIHRoZW4gdGhpcyBpc24ndCBhIHN1YnNldC4gIGVnID49MS4yLjMtcHJlIGlzIG5vdCBhIHN1YnNldCBvZiA+PTEuMC4wLFxuICAvLyBiZWNhdXNlIGl0IGluY2x1ZGVzIHByZXJlbGVhc2VzIGluIHRoZSAxLjIuMyB0dXBsZVxuICBpZiAobmVlZERvbUdUUHJlIHx8IG5lZWREb21MVFByZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuLy8gPj0xLjIuMyBpcyBsb3dlciB0aGFuID4xLjIuM1xuY29uc3QgaGlnaGVyR1QgPSAoYSwgYiwgb3B0aW9ucykgPT4ge1xuICBpZiAoIWEpIHtcbiAgICByZXR1cm4gYlxuICB9XG4gIGNvbnN0IGNvbXAgPSBjb21wYXJlKGEuc2VtdmVyLCBiLnNlbXZlciwgb3B0aW9ucylcbiAgcmV0dXJuIGNvbXAgPiAwID8gYVxuICAgIDogY29tcCA8IDAgPyBiXG4gICAgOiBiLm9wZXJhdG9yID09PSAnPicgJiYgYS5vcGVyYXRvciA9PT0gJz49JyA/IGJcbiAgICA6IGFcbn1cblxuLy8gPD0xLjIuMyBpcyBoaWdoZXIgdGhhbiA8MS4yLjNcbmNvbnN0IGxvd2VyTFQgPSAoYSwgYiwgb3B0aW9ucykgPT4ge1xuICBpZiAoIWEpIHtcbiAgICByZXR1cm4gYlxuICB9XG4gIGNvbnN0IGNvbXAgPSBjb21wYXJlKGEuc2VtdmVyLCBiLnNlbXZlciwgb3B0aW9ucylcbiAgcmV0dXJuIGNvbXAgPCAwID8gYVxuICAgIDogY29tcCA+IDAgPyBiXG4gICAgOiBiLm9wZXJhdG9yID09PSAnPCcgJiYgYS5vcGVyYXRvciA9PT0gJzw9JyA/IGJcbiAgICA6IGFcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdWJzZXRcbiIsImNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9yYW5nZScpXG5cbi8vIE1vc3RseSBqdXN0IGZvciB0ZXN0aW5nIGFuZCBsZWdhY3kgQVBJIHJlYXNvbnNcbmNvbnN0IHRvQ29tcGFyYXRvcnMgPSAocmFuZ2UsIG9wdGlvbnMpID0+XG4gIG5ldyBSYW5nZShyYW5nZSwgb3B0aW9ucykuc2V0XG4gICAgLm1hcChjb21wID0+IGNvbXAubWFwKGMgPT4gYy52YWx1ZSkuam9pbignICcpLnRyaW0oKS5zcGxpdCgnICcpKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvQ29tcGFyYXRvcnNcbiIsImNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9yYW5nZScpXG5jb25zdCB2YWxpZFJhbmdlID0gKHJhbmdlLCBvcHRpb25zKSA9PiB7XG4gIHRyeSB7XG4gICAgLy8gUmV0dXJuICcqJyBpbnN0ZWFkIG9mICcnIHNvIHRoYXQgdHJ1dGhpbmVzcyB3b3Jrcy5cbiAgICAvLyBUaGlzIHdpbGwgdGhyb3cgaWYgaXQncyBpbnZhbGlkIGFueXdheVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIG9wdGlvbnMpLnJhbmdlIHx8ICcqJ1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRSYW5nZVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIid1c2Ugc3RyaWN0J1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoWWFsbGlzdCkge1xuICBZYWxsaXN0LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24qICgpIHtcbiAgICBmb3IgKGxldCB3YWxrZXIgPSB0aGlzLmhlYWQ7IHdhbGtlcjsgd2Fsa2VyID0gd2Fsa2VyLm5leHQpIHtcbiAgICAgIHlpZWxkIHdhbGtlci52YWx1ZVxuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5tb2R1bGUuZXhwb3J0cyA9IFlhbGxpc3RcblxuWWFsbGlzdC5Ob2RlID0gTm9kZVxuWWFsbGlzdC5jcmVhdGUgPSBZYWxsaXN0XG5cbmZ1bmN0aW9uIFlhbGxpc3QgKGxpc3QpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGlmICghKHNlbGYgaW5zdGFuY2VvZiBZYWxsaXN0KSkge1xuICAgIHNlbGYgPSBuZXcgWWFsbGlzdCgpXG4gIH1cblxuICBzZWxmLnRhaWwgPSBudWxsXG4gIHNlbGYuaGVhZCA9IG51bGxcbiAgc2VsZi5sZW5ndGggPSAwXG5cbiAgaWYgKGxpc3QgJiYgdHlwZW9mIGxpc3QuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgc2VsZi5wdXNoKGl0ZW0pXG4gICAgfSlcbiAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgc2VsZi5wdXNoKGFyZ3VtZW50c1tpXSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2VsZlxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5yZW1vdmVOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgaWYgKG5vZGUubGlzdCAhPT0gdGhpcykge1xuICAgIHRocm93IG5ldyBFcnJvcigncmVtb3Zpbmcgbm9kZSB3aGljaCBkb2VzIG5vdCBiZWxvbmcgdG8gdGhpcyBsaXN0JylcbiAgfVxuXG4gIHZhciBuZXh0ID0gbm9kZS5uZXh0XG4gIHZhciBwcmV2ID0gbm9kZS5wcmV2XG5cbiAgaWYgKG5leHQpIHtcbiAgICBuZXh0LnByZXYgPSBwcmV2XG4gIH1cblxuICBpZiAocHJldikge1xuICAgIHByZXYubmV4dCA9IG5leHRcbiAgfVxuXG4gIGlmIChub2RlID09PSB0aGlzLmhlYWQpIHtcbiAgICB0aGlzLmhlYWQgPSBuZXh0XG4gIH1cbiAgaWYgKG5vZGUgPT09IHRoaXMudGFpbCkge1xuICAgIHRoaXMudGFpbCA9IHByZXZcbiAgfVxuXG4gIG5vZGUubGlzdC5sZW5ndGgtLVxuICBub2RlLm5leHQgPSBudWxsXG4gIG5vZGUucHJldiA9IG51bGxcbiAgbm9kZS5saXN0ID0gbnVsbFxuXG4gIHJldHVybiBuZXh0XG59XG5cbllhbGxpc3QucHJvdG90eXBlLnVuc2hpZnROb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IHRoaXMuaGVhZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKG5vZGUubGlzdCkge1xuICAgIG5vZGUubGlzdC5yZW1vdmVOb2RlKG5vZGUpXG4gIH1cblxuICB2YXIgaGVhZCA9IHRoaXMuaGVhZFxuICBub2RlLmxpc3QgPSB0aGlzXG4gIG5vZGUubmV4dCA9IGhlYWRcbiAgaWYgKGhlYWQpIHtcbiAgICBoZWFkLnByZXYgPSBub2RlXG4gIH1cblxuICB0aGlzLmhlYWQgPSBub2RlXG4gIGlmICghdGhpcy50YWlsKSB7XG4gICAgdGhpcy50YWlsID0gbm9kZVxuICB9XG4gIHRoaXMubGVuZ3RoKytcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUucHVzaE5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICBpZiAobm9kZSA9PT0gdGhpcy50YWlsKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAobm9kZS5saXN0KSB7XG4gICAgbm9kZS5saXN0LnJlbW92ZU5vZGUobm9kZSlcbiAgfVxuXG4gIHZhciB0YWlsID0gdGhpcy50YWlsXG4gIG5vZGUubGlzdCA9IHRoaXNcbiAgbm9kZS5wcmV2ID0gdGFpbFxuICBpZiAodGFpbCkge1xuICAgIHRhaWwubmV4dCA9IG5vZGVcbiAgfVxuXG4gIHRoaXMudGFpbCA9IG5vZGVcbiAgaWYgKCF0aGlzLmhlYWQpIHtcbiAgICB0aGlzLmhlYWQgPSBub2RlXG4gIH1cbiAgdGhpcy5sZW5ndGgrK1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBwdXNoKHRoaXMsIGFyZ3VtZW50c1tpXSlcbiAgfVxuICByZXR1cm4gdGhpcy5sZW5ndGhcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdW5zaGlmdCh0aGlzLCBhcmd1bWVudHNbaV0pXG4gIH1cbiAgcmV0dXJuIHRoaXMubGVuZ3RoXG59XG5cbllhbGxpc3QucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLnRhaWwpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB2YXIgcmVzID0gdGhpcy50YWlsLnZhbHVlXG4gIHRoaXMudGFpbCA9IHRoaXMudGFpbC5wcmV2XG4gIGlmICh0aGlzLnRhaWwpIHtcbiAgICB0aGlzLnRhaWwubmV4dCA9IG51bGxcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmhlYWQgPSBudWxsXG4gIH1cbiAgdGhpcy5sZW5ndGgtLVxuICByZXR1cm4gcmVzXG59XG5cbllhbGxpc3QucHJvdG90eXBlLnNoaWZ0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuaGVhZCkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHZhciByZXMgPSB0aGlzLmhlYWQudmFsdWVcbiAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHRcbiAgaWYgKHRoaXMuaGVhZCkge1xuICAgIHRoaXMuaGVhZC5wcmV2ID0gbnVsbFxuICB9IGVsc2Uge1xuICAgIHRoaXMudGFpbCA9IG51bGxcbiAgfVxuICB0aGlzLmxlbmd0aC0tXG4gIHJldHVybiByZXNcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChmbiwgdGhpc3ApIHtcbiAgdGhpc3AgPSB0aGlzcCB8fCB0aGlzXG4gIGZvciAodmFyIHdhbGtlciA9IHRoaXMuaGVhZCwgaSA9IDA7IHdhbGtlciAhPT0gbnVsbDsgaSsrKSB7XG4gICAgZm4uY2FsbCh0aGlzcCwgd2Fsa2VyLnZhbHVlLCBpLCB0aGlzKVxuICAgIHdhbGtlciA9IHdhbGtlci5uZXh0XG4gIH1cbn1cblxuWWFsbGlzdC5wcm90b3R5cGUuZm9yRWFjaFJldmVyc2UgPSBmdW5jdGlvbiAoZm4sIHRoaXNwKSB7XG4gIHRoaXNwID0gdGhpc3AgfHwgdGhpc1xuICBmb3IgKHZhciB3YWxrZXIgPSB0aGlzLnRhaWwsIGkgPSB0aGlzLmxlbmd0aCAtIDE7IHdhbGtlciAhPT0gbnVsbDsgaS0tKSB7XG4gICAgZm4uY2FsbCh0aGlzcCwgd2Fsa2VyLnZhbHVlLCBpLCB0aGlzKVxuICAgIHdhbGtlciA9IHdhbGtlci5wcmV2XG4gIH1cbn1cblxuWWFsbGlzdC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG4pIHtcbiAgZm9yICh2YXIgaSA9IDAsIHdhbGtlciA9IHRoaXMuaGVhZDsgd2Fsa2VyICE9PSBudWxsICYmIGkgPCBuOyBpKyspIHtcbiAgICAvLyBhYm9ydCBvdXQgb2YgdGhlIGxpc3QgZWFybHkgaWYgd2UgaGl0IGEgY3ljbGVcbiAgICB3YWxrZXIgPSB3YWxrZXIubmV4dFxuICB9XG4gIGlmIChpID09PSBuICYmIHdhbGtlciAhPT0gbnVsbCkge1xuICAgIHJldHVybiB3YWxrZXIudmFsdWVcbiAgfVxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5nZXRSZXZlcnNlID0gZnVuY3Rpb24gKG4pIHtcbiAgZm9yICh2YXIgaSA9IDAsIHdhbGtlciA9IHRoaXMudGFpbDsgd2Fsa2VyICE9PSBudWxsICYmIGkgPCBuOyBpKyspIHtcbiAgICAvLyBhYm9ydCBvdXQgb2YgdGhlIGxpc3QgZWFybHkgaWYgd2UgaGl0IGEgY3ljbGVcbiAgICB3YWxrZXIgPSB3YWxrZXIucHJldlxuICB9XG4gIGlmIChpID09PSBuICYmIHdhbGtlciAhPT0gbnVsbCkge1xuICAgIHJldHVybiB3YWxrZXIudmFsdWVcbiAgfVxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoZm4sIHRoaXNwKSB7XG4gIHRoaXNwID0gdGhpc3AgfHwgdGhpc1xuICB2YXIgcmVzID0gbmV3IFlhbGxpc3QoKVxuICBmb3IgKHZhciB3YWxrZXIgPSB0aGlzLmhlYWQ7IHdhbGtlciAhPT0gbnVsbDspIHtcbiAgICByZXMucHVzaChmbi5jYWxsKHRoaXNwLCB3YWxrZXIudmFsdWUsIHRoaXMpKVxuICAgIHdhbGtlciA9IHdhbGtlci5uZXh0XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5tYXBSZXZlcnNlID0gZnVuY3Rpb24gKGZuLCB0aGlzcCkge1xuICB0aGlzcCA9IHRoaXNwIHx8IHRoaXNcbiAgdmFyIHJlcyA9IG5ldyBZYWxsaXN0KClcbiAgZm9yICh2YXIgd2Fsa2VyID0gdGhpcy50YWlsOyB3YWxrZXIgIT09IG51bGw7KSB7XG4gICAgcmVzLnB1c2goZm4uY2FsbCh0aGlzcCwgd2Fsa2VyLnZhbHVlLCB0aGlzKSlcbiAgICB3YWxrZXIgPSB3YWxrZXIucHJldlxuICB9XG4gIHJldHVybiByZXNcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUucmVkdWNlID0gZnVuY3Rpb24gKGZuLCBpbml0aWFsKSB7XG4gIHZhciBhY2NcbiAgdmFyIHdhbGtlciA9IHRoaXMuaGVhZFxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBhY2MgPSBpbml0aWFsXG4gIH0gZWxzZSBpZiAodGhpcy5oZWFkKSB7XG4gICAgd2Fsa2VyID0gdGhpcy5oZWFkLm5leHRcbiAgICBhY2MgPSB0aGlzLmhlYWQudmFsdWVcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWR1Y2Ugb2YgZW1wdHkgbGlzdCB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IHdhbGtlciAhPT0gbnVsbDsgaSsrKSB7XG4gICAgYWNjID0gZm4oYWNjLCB3YWxrZXIudmFsdWUsIGkpXG4gICAgd2Fsa2VyID0gd2Fsa2VyLm5leHRcbiAgfVxuXG4gIHJldHVybiBhY2Ncbn1cblxuWWFsbGlzdC5wcm90b3R5cGUucmVkdWNlUmV2ZXJzZSA9IGZ1bmN0aW9uIChmbiwgaW5pdGlhbCkge1xuICB2YXIgYWNjXG4gIHZhciB3YWxrZXIgPSB0aGlzLnRhaWxcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgYWNjID0gaW5pdGlhbFxuICB9IGVsc2UgaWYgKHRoaXMudGFpbCkge1xuICAgIHdhbGtlciA9IHRoaXMudGFpbC5wcmV2XG4gICAgYWNjID0gdGhpcy50YWlsLnZhbHVlXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGxpc3Qgd2l0aCBubyBpbml0aWFsIHZhbHVlJylcbiAgfVxuXG4gIGZvciAodmFyIGkgPSB0aGlzLmxlbmd0aCAtIDE7IHdhbGtlciAhPT0gbnVsbDsgaS0tKSB7XG4gICAgYWNjID0gZm4oYWNjLCB3YWxrZXIudmFsdWUsIGkpXG4gICAgd2Fsa2VyID0gd2Fsa2VyLnByZXZcbiAgfVxuXG4gIHJldHVybiBhY2Ncbn1cblxuWWFsbGlzdC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFyciA9IG5ldyBBcnJheSh0aGlzLmxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDAsIHdhbGtlciA9IHRoaXMuaGVhZDsgd2Fsa2VyICE9PSBudWxsOyBpKyspIHtcbiAgICBhcnJbaV0gPSB3YWxrZXIudmFsdWVcbiAgICB3YWxrZXIgPSB3YWxrZXIubmV4dFxuICB9XG4gIHJldHVybiBhcnJcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUudG9BcnJheVJldmVyc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnIgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpXG4gIGZvciAodmFyIGkgPSAwLCB3YWxrZXIgPSB0aGlzLnRhaWw7IHdhbGtlciAhPT0gbnVsbDsgaSsrKSB7XG4gICAgYXJyW2ldID0gd2Fsa2VyLnZhbHVlXG4gICAgd2Fsa2VyID0gd2Fsa2VyLnByZXZcbiAgfVxuICByZXR1cm4gYXJyXG59XG5cbllhbGxpc3QucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gIHRvID0gdG8gfHwgdGhpcy5sZW5ndGhcbiAgaWYgKHRvIDwgMCkge1xuICAgIHRvICs9IHRoaXMubGVuZ3RoXG4gIH1cbiAgZnJvbSA9IGZyb20gfHwgMFxuICBpZiAoZnJvbSA8IDApIHtcbiAgICBmcm9tICs9IHRoaXMubGVuZ3RoXG4gIH1cbiAgdmFyIHJldCA9IG5ldyBZYWxsaXN0KClcbiAgaWYgKHRvIDwgZnJvbSB8fCB0byA8IDApIHtcbiAgICByZXR1cm4gcmV0XG4gIH1cbiAgaWYgKGZyb20gPCAwKSB7XG4gICAgZnJvbSA9IDBcbiAgfVxuICBpZiAodG8gPiB0aGlzLmxlbmd0aCkge1xuICAgIHRvID0gdGhpcy5sZW5ndGhcbiAgfVxuICBmb3IgKHZhciBpID0gMCwgd2Fsa2VyID0gdGhpcy5oZWFkOyB3YWxrZXIgIT09IG51bGwgJiYgaSA8IGZyb207IGkrKykge1xuICAgIHdhbGtlciA9IHdhbGtlci5uZXh0XG4gIH1cbiAgZm9yICg7IHdhbGtlciAhPT0gbnVsbCAmJiBpIDwgdG87IGkrKywgd2Fsa2VyID0gd2Fsa2VyLm5leHQpIHtcbiAgICByZXQucHVzaCh3YWxrZXIudmFsdWUpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5zbGljZVJldmVyc2UgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgdG8gPSB0byB8fCB0aGlzLmxlbmd0aFxuICBpZiAodG8gPCAwKSB7XG4gICAgdG8gKz0gdGhpcy5sZW5ndGhcbiAgfVxuICBmcm9tID0gZnJvbSB8fCAwXG4gIGlmIChmcm9tIDwgMCkge1xuICAgIGZyb20gKz0gdGhpcy5sZW5ndGhcbiAgfVxuICB2YXIgcmV0ID0gbmV3IFlhbGxpc3QoKVxuICBpZiAodG8gPCBmcm9tIHx8IHRvIDwgMCkge1xuICAgIHJldHVybiByZXRcbiAgfVxuICBpZiAoZnJvbSA8IDApIHtcbiAgICBmcm9tID0gMFxuICB9XG4gIGlmICh0byA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdG8gPSB0aGlzLmxlbmd0aFxuICB9XG4gIGZvciAodmFyIGkgPSB0aGlzLmxlbmd0aCwgd2Fsa2VyID0gdGhpcy50YWlsOyB3YWxrZXIgIT09IG51bGwgJiYgaSA+IHRvOyBpLS0pIHtcbiAgICB3YWxrZXIgPSB3YWxrZXIucHJldlxuICB9XG4gIGZvciAoOyB3YWxrZXIgIT09IG51bGwgJiYgaSA+IGZyb207IGktLSwgd2Fsa2VyID0gd2Fsa2VyLnByZXYpIHtcbiAgICByZXQucHVzaCh3YWxrZXIudmFsdWUpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5zcGxpY2UgPSBmdW5jdGlvbiAoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5ub2Rlcykge1xuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHN0YXJ0ID0gdGhpcy5sZW5ndGggLSAxXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gdGhpcy5sZW5ndGggKyBzdGFydDtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCB3YWxrZXIgPSB0aGlzLmhlYWQ7IHdhbGtlciAhPT0gbnVsbCAmJiBpIDwgc3RhcnQ7IGkrKykge1xuICAgIHdhbGtlciA9IHdhbGtlci5uZXh0XG4gIH1cblxuICB2YXIgcmV0ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IHdhbGtlciAmJiBpIDwgZGVsZXRlQ291bnQ7IGkrKykge1xuICAgIHJldC5wdXNoKHdhbGtlci52YWx1ZSlcbiAgICB3YWxrZXIgPSB0aGlzLnJlbW92ZU5vZGUod2Fsa2VyKVxuICB9XG4gIGlmICh3YWxrZXIgPT09IG51bGwpIHtcbiAgICB3YWxrZXIgPSB0aGlzLnRhaWxcbiAgfVxuXG4gIGlmICh3YWxrZXIgIT09IHRoaXMuaGVhZCAmJiB3YWxrZXIgIT09IHRoaXMudGFpbCkge1xuICAgIHdhbGtlciA9IHdhbGtlci5wcmV2XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgd2Fsa2VyID0gaW5zZXJ0KHRoaXMsIHdhbGtlciwgbm9kZXNbaV0pXG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQgPSB0aGlzLmhlYWRcbiAgdmFyIHRhaWwgPSB0aGlzLnRhaWxcbiAgZm9yICh2YXIgd2Fsa2VyID0gaGVhZDsgd2Fsa2VyICE9PSBudWxsOyB3YWxrZXIgPSB3YWxrZXIucHJldikge1xuICAgIHZhciBwID0gd2Fsa2VyLnByZXZcbiAgICB3YWxrZXIucHJldiA9IHdhbGtlci5uZXh0XG4gICAgd2Fsa2VyLm5leHQgPSBwXG4gIH1cbiAgdGhpcy5oZWFkID0gdGFpbFxuICB0aGlzLnRhaWwgPSBoZWFkXG4gIHJldHVybiB0aGlzXG59XG5cbmZ1bmN0aW9uIGluc2VydCAoc2VsZiwgbm9kZSwgdmFsdWUpIHtcbiAgdmFyIGluc2VydGVkID0gbm9kZSA9PT0gc2VsZi5oZWFkID9cbiAgICBuZXcgTm9kZSh2YWx1ZSwgbnVsbCwgbm9kZSwgc2VsZikgOlxuICAgIG5ldyBOb2RlKHZhbHVlLCBub2RlLCBub2RlLm5leHQsIHNlbGYpXG5cbiAgaWYgKGluc2VydGVkLm5leHQgPT09IG51bGwpIHtcbiAgICBzZWxmLnRhaWwgPSBpbnNlcnRlZFxuICB9XG4gIGlmIChpbnNlcnRlZC5wcmV2ID09PSBudWxsKSB7XG4gICAgc2VsZi5oZWFkID0gaW5zZXJ0ZWRcbiAgfVxuXG4gIHNlbGYubGVuZ3RoKytcblxuICByZXR1cm4gaW5zZXJ0ZWRcbn1cblxuZnVuY3Rpb24gcHVzaCAoc2VsZiwgaXRlbSkge1xuICBzZWxmLnRhaWwgPSBuZXcgTm9kZShpdGVtLCBzZWxmLnRhaWwsIG51bGwsIHNlbGYpXG4gIGlmICghc2VsZi5oZWFkKSB7XG4gICAgc2VsZi5oZWFkID0gc2VsZi50YWlsXG4gIH1cbiAgc2VsZi5sZW5ndGgrK1xufVxuXG5mdW5jdGlvbiB1bnNoaWZ0IChzZWxmLCBpdGVtKSB7XG4gIHNlbGYuaGVhZCA9IG5ldyBOb2RlKGl0ZW0sIG51bGwsIHNlbGYuaGVhZCwgc2VsZilcbiAgaWYgKCFzZWxmLnRhaWwpIHtcbiAgICBzZWxmLnRhaWwgPSBzZWxmLmhlYWRcbiAgfVxuICBzZWxmLmxlbmd0aCsrXG59XG5cbmZ1bmN0aW9uIE5vZGUgKHZhbHVlLCBwcmV2LCBuZXh0LCBsaXN0KSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBOb2RlKSkge1xuICAgIHJldHVybiBuZXcgTm9kZSh2YWx1ZSwgcHJldiwgbmV4dCwgbGlzdClcbiAgfVxuXG4gIHRoaXMubGlzdCA9IGxpc3RcbiAgdGhpcy52YWx1ZSA9IHZhbHVlXG5cbiAgaWYgKHByZXYpIHtcbiAgICBwcmV2Lm5leHQgPSB0aGlzXG4gICAgdGhpcy5wcmV2ID0gcHJldlxuICB9IGVsc2Uge1xuICAgIHRoaXMucHJldiA9IG51bGxcbiAgfVxuXG4gIGlmIChuZXh0KSB7XG4gICAgbmV4dC5wcmV2ID0gdGhpc1xuICAgIHRoaXMubmV4dCA9IG5leHRcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm5leHQgPSBudWxsXG4gIH1cbn1cblxudHJ5IHtcbiAgLy8gYWRkIGlmIHN1cHBvcnQgZm9yIFN5bWJvbC5pdGVyYXRvciBpcyBwcmVzZW50XG4gIHJlcXVpcmUoJy4vaXRlcmF0b3IuanMnKShZYWxsaXN0KVxufSBjYXRjaCAoZXIpIHt9XG4iLCJpbXBvcnQgeyBlbGVtZW50IH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IGFkZCwgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBjeWNsZVByaW9yaXR5LCBkZWxldGVQcm9qZWN0LCBlZGl0UHJvamVjdEJveCBhcyBlZGl0UHJvamVjdCwgZmluaXNoUHJvamVjdCwgcmVuZGVyUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RVSS5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyVGFzayB9IGZyb20gXCIuL3Byb2plY3RVSS5qc1wiO1xuXG5cbmltcG9ydCBzZXR0aW5nc0ljb24gZnJvbSBcIi4vaW1nL2NvZy5zdmdcIjtcbmltcG9ydCBleHBhbmRJY29uIGZyb20gXCIuL2ltZy9leHBhbmQuc3ZnXCI7XG5pbXBvcnQgZmluaXNoSWNvbiBmcm9tIFwiLi9pbWcvZmluaXNoLXRhc2suc3ZnXCI7XG5cblxuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCJzZW12ZXJcIjtcbmltcG9ydCB7IHByaW9yaXR5U3R5bGUgfSBmcm9tIFwiLi90YXNrVUlcIjtcbmltcG9ydCB7IGFkZE5ld1Byb2plY3QgfSBmcm9tIFwiLi9jb250ZW50XCI7XG4vLyBDcmVhdGUgY2FyZHMgdG8gZGlzcGxheSBwcm9qZWN0cyBpbiB3b3Jrc3BhY2VcblxuXG5cbi8vIENyZWF0ZSBhIGNhcmQgdG8gcmVwcmVzZW50IHRoZSBwcm9qZWN0IGluIHNtYWxsIGRldGFpbCwgYW5kIHJldHVybiByZWZlcmVuY2UgdG8gdGhlIERPTSBvYmplY3Qgb2YgdGhhdCBjYXJkLlxuLy8gVGhlIGNhcmQgaXMgZGl2aWRlZCB2ZXJ0aWNhbGx5IGludG8gZGlmZmVyZW50IHNlY3Rpb25zIHdoaWNoIGFyZSBjdXN0b21pemFibGUgaGVyZVxuY29uc3QgY3JlYXRlUHJvamVjdENhcmQgPSAocHJvamVjdCkgPT4ge1xuXG4gICAgLy8gV2lsbCBiZSByZXR1cm5lZFxuICAgIGNvbnN0IGNhcmQgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ2NhcmQgcHJvamVjdC1jYXJkJ30pXG4gICBcblxuICAgIGNvbnN0IHRpdGxlQmFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZUJhciA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnY2FyZC1idXR0b24tYmFyJ30pOyAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZWxlbWVudCgnaDMnLCB7J2NsYXNzJzogJ2NhcmQtdGl0bGUnfSk7XG4gICAgICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmNvbnRlbnQuZ2V0VGl0bGUoKTtcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gZWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdidXR0b24tY29udGFpbmVyJ30pICAgIFxuICAgICAgICAgICAgY29uc3Qgc2V0dGluZ3NCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBzZXR0aW5nc0ljb24sICdhbHQnOiAnc2V0dGluZ3MnLCAnY2xhc3MnOiAnY2FyZC1idXR0b24gc2V0dGluZ3MtY29nJ30pXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gb3BlblNldHRpbmdzKGUudGFyZ2V0LCBwcm9qZWN0KSlcbiAgICAgICAgICAgIHRpdGxlQmFyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICAgIHNldHRpbmdzLmFwcGVuZENoaWxkKHNldHRpbmdzQnV0dG9uKTtcbiAgICAgICAgICAgIHRpdGxlQmFyLmFwcGVuZENoaWxkKHNldHRpbmdzKTtcblxuICAgICAgICByZXR1cm4gdGl0bGVCYXI7XG4gICAgfVxuXG5cbiAgICBjb25zdCBjb250ZW50ID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGdvYWwgPSBlbGVtZW50KCdwJywgeydjbGFzcyc6ICdjYXJkLWNvbnRlbnQgY2FyZC1nb2FsJ30pO1xuICAgICAgICBnb2FsLnRleHRDb250ZW50ID0gcHJvamVjdC5jb250ZW50LmdldEdvYWwoKTtcblxuICAgICAgICByZXR1cm4gZ29hbDtcbiAgICB9XG5cbiAgICBjb25zdCBkZWFkbGluZUNvbnRhaW5lciA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ2NhcmQtZGVhZGxpbmUgZGVhZGxpbmUtY29udGFpbmVyJ30pXG4gICAgICAgICAgICBjb25zdCBkYXlzTGVmdCA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnY2FyZC1kZWFkbGluZS1kYXlzJ30pO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnY2FyZC1kdWUtZGF0ZSd9KVxuICAgICAgICAgICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBmb3JtYXQocHJvamVjdC5jb250ZW50LmdldERlYWRsaW5lKCksICdNTS9kZC95eScpO1xuICAgICAgICAgICAgZGF5c0xlZnQudGV4dENvbnRlbnQgPSBgJHtnZXREYXlzUmVtYWluaW5nKHByb2plY3QpfSBkYXlzIGxlZnRgO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5c0xlZnQpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuICAgXG4gICAgY29uc3QgYnV0dG9uQmFyID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkJhciA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnY2FyZC1idXR0b24tYmFyJ30pXG5cbiAgICAgICAgICAgIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2ltYWdlJywgJ3NyYyc6IGV4cGFuZEljb24sICdhbHQnOiAnRXhwYW5kIHByb2plY3QnLCAnY2xhc3MnOiAnY2FyZC1idXR0b24nfSlcbiAgICAgICAgICAgICAgICBleHBhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJQcm9qZWN0KHByb2plY3QpKTtcblxuICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZUNvbnRhaW5lciA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnY2FyZC1pbmZvIGNhcmQtcGVyY2VudC1jb250YWluZXInfSlcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2VMZWZ0ID0gZWxlbWVudCgncCcsIHsnY2xhc3MnOiAnY2FyZC1wZXJjZW50YWdlJ30pXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q291bnQgPSBwcm9qZWN0LnRhc2tzLmdldFRhc2tMaXN0KCk7XG5cblxuICAgICAgICAgICAgaWYgKHByb2plY3RDb3VudC5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV0ZWRDb3VudCA9IHByb2plY3QudGFza3MuZ2V0Q29tcGxldGVkVGFza3MoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV0aW9uUGVyY2VudGFnZSA9IE1hdGgucm91bmQoKGNvbXBsZXRlZENvdW50Lmxlbmd0aCAvcHJvamVjdENvdW50Lmxlbmd0aCkgKiAxMDApXG5cbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlTGVmdC50ZXh0Q29udGVudCA9IGBjb21wbGV0ZTogJHtjb21wbGV0ZWRDb3VudC5sZW5ndGh9LyR7cHJvamVjdENvdW50Lmxlbmd0aH0gKCR7Y29tcGxldGlvblBlcmNlbnRhZ2V9JSlgXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRpb25QZXJjZW50YWdlID09PSAxMDApe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29tcGxldGUnKVxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWNvbXBsZXRlZFwiKVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBlcmNlbnRhZ2VMZWZ0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBmaW5pc2hCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBmaW5pc2hJY29uLCAnYWx0JzogJ0NvbXBsZXRlIHByb2plY3QnLCAnY2xhc3MnOiAnY2FyZC1idXR0b24nfSk7XG4gICAgICAgICAgICAgICAgZmluaXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZmluaXNoUHJvamVjdChwcm9qZWN0KSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgYnV0dG9uQmFyLmFwcGVuZENoaWxkKGZpbmlzaEJ1dHRvbilcbiAgICAgICAgYnV0dG9uQmFyLmFwcGVuZENoaWxkKHBlcmNlbnRhZ2VDb250YWluZXIpXG4gICAgICAgIGJ1dHRvbkJhci5hcHBlbmRDaGlsZChleHBhbmRCdXR0b24pO1xuICAgICAgICByZXR1cm4gYnV0dG9uQmFyO1xuICAgIH1cblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGVCYXIoKSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjb250ZW50KCkpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVhZGxpbmVDb250YWluZXIoKSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChidXR0b25CYXIoKSk7XG5cbiAgICByZXR1cm4gY2FyZDtcbn1cblxuLy8gU2ltcGx5IHJldHVybnMgZGF5cyBiZXR3ZWVuIGR1ZSBkYXRlIGFuZCBjdXJyZW50IGRhdGVcbmNvbnN0IGdldERheXNSZW1haW5pbmcgPSAocHJvamVjdCkgPT4ge1xuXG4gICAgY29uc3QgZHVlRGF0ZSA9IHByb2plY3QuY29udGVudC5nZXREZWFkbGluZSgpO1xuICAgIGNvbnN0IHRvZGF5ID0gRGF0ZS5ub3coKTtcbiAgICBcbiAgICBcbiAgICByZXR1cm4gZm9ybWF0KChkdWVEYXRlIC0gdG9kYXkpLCAnZGQnKSBcblxuXG59XG5cbmNvbnN0IG9wZW5TZXR0aW5ncyA9IChwYXJlbnRCdXR0b24sIHByb2plY3QpID0+IHtcblxuICAgIGNvbnNvbGUubG9nKCdvcGVuIHNldHRpbmdzIG1lbnUnKVxuICAgIGNvbnN0IHBhcmVudENhcmQgPSBwYXJlbnRCdXR0b24ucGFyZW50Tm9kZTtcbiAgICBjb25zb2xlLmxvZyhwYXJlbnRDYXJkKVxuICAgIC8vIHBvcHVwIG1lbnVcbiAgICBwYXJlbnRDYXJkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1zZXR0aW5ncy1idXR0b24nKVxuXG4gICAgc2V0dGluZ3NNZW51KHBhcmVudENhcmQsIHByb2plY3QpXG5cbn1cblxuLy8gR2VhciBtZW51IGZvciBxdWljayBhY2Nlc3MgdG8gdmFyaW91cyBvcHRpb25zXG5jb25zdCBzZXR0aW5nc01lbnUgPSAoY2FyZCwgcHJvamVjdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNhcmQpO1xuICAgIGNvbnNvbGUubG9nKCdzZXR0aW5ncyBtZW51JylcbiAgICBjb25zdCBjb250YWluZXIgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ21lbnUtY29udGFpbmVyIHNoaWZ0LWxlZnQnfSk7XG4gICAgY29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgY29uc3QgbWVudSA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnY29udGV4dC1tZW51JywgJ2lkJzogJ2NvZy1tZW51J30pO1xuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGVsZW1lbnQoJ3VsJywgeydjbGFzcyc6ICdtZW51LWl0ZW1zIG1lbnUtbGlzdCd9KTtcblxuICAgIGNvbnN0IG9wZW4gPSBlbGVtZW50KCdsaScsIHsnY2xhc3MnOiAnbWVudS1vcGVuIG1lbnUtaXRlbScsIH0pO1xuICAgIG9wZW4udGV4dENvbnRlbnQgPSAnb3Blbic7XG4gICAgICAgIG9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICBjb25zdCBlZGl0ID0gZWxlbWVudCgnbGknLCB7J2NsYXNzJzogJ21lbnUtZWRpdCBtZW51LWl0ZW0nfSk7XG4gICAgZWRpdC50ZXh0Q29udGVudCA9ICdlZGl0JztcbiAgICAgICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbmRlclByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICBlZGl0UHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgIH0pXG4gICAgY29uc3QgdG9nZ2xlID0gZWxlbWVudCgnbGknLCB7J2NsYXNzJzogJ21lbnUtdG9nZ2xlIG1lbnUtaXRlbSd9KTtcbiAgICB0b2dnbGUudGV4dENvbnRlbnQgPSBgY2hhbmdlIHByaW9yaXR5KCR7cHJpb3JpdHlTdHlsZShwcm9qZWN0LmNvbnRlbnQpLnByaW9yaXR5VGV4dC50b0xvd2VyQ2FzZSgpfSlgXG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGN5Y2xlUHJpb3JpdHkocHJvamVjdCk7XG4gICAgICAgIH0pO1xuICAgIGNvbnN0IGZpbmlzaCA9IGVsZW1lbnQoJ2xpJywgeydjbGFzcyc6ICdtZW51LWZpbmlzaCBtZW51LWl0ZW0nfSk7XG4gICAgICAgICAgICBmaW5pc2gudGV4dENvbnRlbnQgPSAndG9nZ2xlIGNvbXBsZXRpb24nO1xuICAgICAgICAgICAgZmluaXNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2ZpbmlzaFByb2plY3QocHJvamVjdCl9KSAgICAgICAgXG4gICAgICAgIFxuICAgIGNvbnN0IGRlbCA9IGVsZW1lbnQoJ2xpJywgeydjbGFzcyc6ICdtZW51LWRlbGV0ZSBtZW51LWl0ZW0nfSk7XG4gICAgZGVsLnRleHRDb250ZW50ID0gJ2RlbGV0ZSBwcm9qZWN0JztcbiAgICAgICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaScpXG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICB9KVxuXG4gICBcblxuXG4gICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKG9wZW4pO1xuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChlZGl0KTtcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQodG9nZ2xlKTtcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQoZmluaXNoKTtcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQoZGVsKTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW1zKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG5cbiAgICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xuXG4gICAgfVxuXG5cbn1cblxuXG5cblxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0Q2FyZH1cblxuXG5cbiIsImltcG9ydCB7IGVsZW1lbnQgfSBmcm9tIFwiLi91dGlsc1wiXG5pbXBvcnQgbmV3UHJvakljb24gZnJvbSBcIi4vaW1nL25vdGUtcGx1cy5zdmdcIlxuaW1wb3J0IHsgYWRkUHJvamVjdEJ1dHRvbiwgcmVuZGVyUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RVSS5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdENhcmQgYXMgcmVuZGVyUHJvamVjdENhcmR9IGZyb20gXCIuL2NhcmRzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cblxuLy8gIENvbnRlbnQgc3BhY2UgdGhhdCBob2xkcyBwcm9qZWN0c1xuXG4vLyBDcmVhdGUgd29ya3NwYWNlXG5cbmNvbnN0IGNyZWF0ZVdvcmtTcGFjZSA9ICgpID0+IHtcblxuICAgIGNvbnN0IG1haW4gPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ21haW4tY29udGFpbmVyJywgJ2lkJzogJ3dvcmtzcGFjZS1jb250YWluZXInfSk7XG4gICAgXG4gICAgY29uc3Qgd29ya3NwYWNlID0gZWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICd3b3Jrc3BhY2UnLCAnaWQnOiAnd29ya3NwYWNlJ30pO1xuICAgIFxuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBuZXdQcm9qSWNvbiwgJ2FsdCc6IFwiQ3JlYXRlIG5ldyBwcm9qZWN0XCIsICdjbGFzcyc6ICdjb250ZW50LWJ1dHRvbicsICdpZCc6ICdhZGQtbmV3LXByb2plY3QnfSk7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdvcmtzcGFjZS5pbnNlcnRCZWZvcmUoYWRkTmV3UHJvamVjdCgpLCBhZGRQcm9qZWN0QnV0dG9uKTsgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB3b3Jrc3BhY2UuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh3b3Jrc3BhY2UpO1xuXG4gICAgcmV0dXJuIG1haW47XG59XG5cbmNvbnN0IHByb2plY3RDb250YWluZXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBlbGVtZW50KCdkaXYnLCB7J2lkJzogJ3Byb2plY3QtY29udGFpbmVyJ30pO1xuXG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBhZGROZXdQcm9qZWN0ID0gKHByb2opID0+IHtcbiAgICBsZXQgcHJvamVjdDtcbiAgICAocHJvaiAhPSBudWxsKSA/IHByb2plY3QgPSBwcm9qIDogcHJvamVjdCA9IFByb2plY3QoKTtcbiAgICBjb25zdCBjYXJkID0gcmVuZGVyUHJvamVjdENhcmQocHJvamVjdCk7XG4gICAgcHJvamVjdExpc3QuYWRkUHJvamVjdChwcm9qZWN0KVxuIFxuICAgIFxuICAgIHJldHVybiBjYXJkO1xuXG59XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gKChwcm9qZWN0KSA9PiB7XG5cbiAgICBsZXQgbGlzdCA9IFtdO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGxpc3QucHVzaChwcm9qZWN0KVxuICAgICAgICBjb25zb2xlLmxvZyhnZXRQcm9qZWN0cygpKVxuXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG5cbiAgICAgICAgbGlzdC5zcGxpY2UocHJvamVjdCwgMSk7XG4gICAgICAgIHJlbmRlclByb2plY3RMaXN0KCk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IGxpc3Q7XG5cbiAgICByZXR1cm4ge2FkZFByb2plY3QsIGdldFByb2plY3RzLCByZW1vdmVQcm9qZWN0fVxuXG59KSgpO1xuXG5jb25zdCByZW5kZXJQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCB3b3JrU3BhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd29ya3NwYWNlJylcbiAgICBjb25zdCB3b3JrU3BhY2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLW5ldy1wcm9qZWN0JylcblxuICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcbiAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuXG4gICAgICAgIGNhcmQucmVtb3ZlKClcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0LmdldFByb2plY3RzKCkpXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0cygpKXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNhcmQgPSByZW5kZXJQcm9qZWN0Q2FyZChwcm9qZWN0KVxuICAgICAgICB3b3JrU3BhY2UuaW5zZXJ0QmVmb3JlKGNhcmQsIHdvcmtTcGFjZUJ1dHRvbilcblxuICAgIH1cblxufVxuXG5jb25zdCBzd2l0Y2hEaXNwbGF5U3R5bGUgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWItY29udGFpbmVyJyk7XG4gICBcbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyk7XG4gICAgaWYgKHN0eWxlICE9IG51bGwpe1xuICAgICAgICBzdHlsZS5jbGFzc0xpc3QucmVtb3ZlKCd0YWItY29udGFpbmVyJyk7XG5cbiAgICBcbiAgICAgICAgY2FyZHMuZm9yRWFjaCh0YWIgPT4gdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYicpKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3Jrc3BhY2UnKTtcbiAgICAgICAgZGlzcGxheS5jbGFzc0xpc3QuYWRkKCd0YWItY29udGFpbmVyJyk7XG4gICAgICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiBjYXJkLmNsYXNzTGlzdC5hZGQoJ3RhYicpKTtcbiAgICB9XG5cbn1cblxuLy8gcmVmcmVzaCBzY3JlZW4gYW5kIGRpc3BsYXkgcHJvamVjdHMgY29udGFpbmVkIGluIGxpc3RcblxuXG5cbmV4cG9ydCB7Y3JlYXRlV29ya1NwYWNlIGFzIGNvbnRlbnQsIHByb2plY3RMaXN0LCByZW5kZXJQcm9qZWN0TGlzdCwgYWRkTmV3UHJvamVjdCwgc3dpdGNoRGlzcGxheVN0eWxlLCBwcm9qZWN0Q29udGFpbmVyfVxuXG4vLyBCdXR0b24gZm9yIGFkZGluZyBuZXcgcHJvamVjdFxuXG5cbi8vIEFycmF5IG9mIHByb2plY3RzIGFuZCB0aGVpciBJRHMgKGtleS92YWx1ZSBwYWlyKSIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgZWxlbWVudCwgbWFrZUNvbnRhaW5lciwgc2V0QXR0cmlidXRlcyB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgZGVmYXVsdFByb2plY3QgZnJvbSBcIi4vZGVmYXVsdC1wcm9qZWN0Lmpzb25cIlxuaW1wb3J0IGRlZmF1bHRUYXNrIGZyb20gXCIuL2RlZmF1bHQtdGFzay5qc29uXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RMaXN0IH0gZnJvbSBcIi4vY29udGVudFwiO1xuXG4vLyBpbWFnZXNcbmltcG9ydCBjbG9zZVRhc2tJY29uIGZyb20gXCIuL2ltZy9jbG9zZS10YXNrLnN2Z1wiO1xuaW1wb3J0IGVkaXRUYXNrSWNvbiBmcm9tIFwiLi9pbWcvcGVuY2lsLnN2Z1wiO1xuaW1wb3J0IHNhdmVUYXNrSWNvbiBmcm9tIFwiLi9pbWcvc2F2ZS10YXNrLnN2Z1wiO1xuaW1wb3J0IGZpbmlzaFRhc2tJY29uIGZyb20gXCIuL2ltZy9maW5pc2gtdGFzay5zdmdcIlxuaW1wb3J0IGRlbGV0ZVRhc2tJY29uIGZyb20gXCIuL2ltZy9kZWxldGUtdGFzay5zdmdcIlxuXG5pbXBvcnQgY2xvc2VQcm9qZWN0SWNvbiBmcm9tIFwiLi9pbWcvY2xvc2UtcHJvamVjdC5zdmdcIjtcbmltcG9ydCBlZGl0UHJvamVjdEljb24gZnJvbSBcIi4vaW1nL2VkaXQuc3ZnXCI7XG5pbXBvcnQgc2F2ZVByb2plY3RJY29uIGZyb20gXCIuL2ltZy9zYXZlLWNvbnRlbnQuc3ZnXCI7XG5cbmltcG9ydCBtaW5pQ2hlY2tib3ggZnJvbSAnLi9pbWcvbWluaWNoZWNrYm94LnN2Zyc7XG5pbXBvcnQgbWluaUNoZWNrYm94Q29tcGxldGUgZnJvbSAnLi9pbWcvbWluaWNoZWNrbWFya2VkLnN2Zyc7XG5pbXBvcnQgbWluaURlbGV0ZUljb24gZnJvbSAnLi9pbWcvZGVsZXRlLWFsZXJ0LnN2Zyc7XG5cblxuXG5cblxuLy8gSW50ZXJmYWNlIGZvciBhZGRpbmcgdGFza3MgYW5kIHByb2plY3RzLlxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKVxuXG5cbi8vIFJlbmRlciBhIGZ1bGwgcHJvamVjdFxuY29uc3QgcmVuZGVyUHJvamVjdCA9IChwcm9qZWN0T2JqZWN0KSA9PiB7XG4gICBcbiAgICAvLyBDb250YWluZXIgdG8gYXR0YWNoIHByb2plY3QgdG9cbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICAvLyBSZW1vdmUgaW50ZXJhY3Rpb24gd2l0aCB3b3Jrc3BhY2VcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3b3Jrc3BhY2UtY29udGFpbmVyXCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnYmxvY2tzY3JlZW4nKTtcblxuICAgIGxldCBwcm9qID0gcHJvamVjdE9iamVjdC5jb250ZW50O1xuXG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIFxuICAgIC8vIENyZWF0ZSBkb20gc2tlbGV0b24gXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvai5nZXRUaXRsZSgpO1xuICAgIGNvbnN0IHByb2plY3QgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJwcm9qZWN0XCIsIFwiaWRcIjogYCR7cHJvamVjdFRpdGxlIH0taWRgfSlcbiAgICBjb25zdCBjb250ZW50ID0gZWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdwcm9qZWN0LWNvbnRlbnQnLCAnaWQnOiBgJHtwcm9qZWN0VGl0bGV9LWNvbnRlbnRgfSlcbiAgIFxuICAgIC8vIExvYWRpbmcgb2YgZGF0YSBpbnRvIHNwZWNpZmllZCBjb250YWluZXJzXG4gICAgY29uc3QgcmVuZGVyRGF0YSA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIC8vIGNyZWF0ZSB0aXRnbGUgYmFyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gKCkgPT4ge1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZWxlbWVudCgnaDInLCB7J2NsYXNzJzogXCJwcm9qZWN0LXRpdGxlIHByb2plY3QtaXRlbVwifSk7XG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcbiAgICAgICAgICAgXG5cbiAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSgpKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJwcm9qZWN0LWRlc2MgcHJvamVjdC1pdGVtXCIsICdpZCc6IGAke3Byb2plY3RUaXRsZSB9LWRlc2NgfSk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2ouZ2V0RGVzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKCkpXG5cbiAgICAgICAgLy8gRGVhZGxpbmUvUHJpb3JpdHkvVXJnZW5jeSBDb250YWluZXIgKFRoZXNlIHdpbGwgaW50ZXJhY3QgYSBsb3QpXG4gICAgICAgIGNvbnN0IGRlYWRsaW5lID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBkZWFkbGluZUNvbnRhaW5lciA9IG1ha2VDb250YWluZXIoXCJEZWFkbGluZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGRlYWRsaW5lQ29udGVudCA9IGRlYWRsaW5lQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5kZWFkbGluZS1jb250ZW50Jyk7ICAgICBcbiAgICAgICAgICAgIGNvbnN0IGRlYWRsaW5lID0gZWxlbWVudCgnZGl2JywgeydjbGFzcyc6IFwicHJvamVjdC1kZWFkbGluZSBwcm9qZWN0LWl0ZW1cIiwgXCJpZFwiOiBgJHtwcm9qLmRlYWRsaW5lfS1kZWFkbGluZWB9KTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5QnV0dG9uID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnYnV0dG9uJywgJ2NsYXNzJzogXCJwcmlvcml0eS1idXR0b24gcHJvamVjdC1pdGVtXCIsICd2YWx1ZSc6IHByb2ouZ2V0UHJpb3JpdHkoKX0pO1xuICAgICAgICAgICAgZGVhZGxpbmUudGV4dENvbnRlbnQgPSBmb3JtYXQocHJvai5nZXREZWFkbGluZSgpLCBcIk1NLmRkLnl5eXlcIik7XG4gICAgICAgICAgICBkZWFkbGluZUNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVhZGxpbmUpO1xuICAgICAgICAgICAgZGVhZGxpbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVhZGxpbmVDb250ZW50KTsgICAgXG4gICAgICAgICAgICBkZWFkbGluZUNvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlCdXR0b24pO1xuICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBkZWFkbGluZUNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRlYWRsaW5lKCkpXG5cbiAgICAgICAgLy8gQWxzbyBrbm93biBhcyBvYmplY3RpdmVcbiAgICAgICAgY29uc3QgZ29hbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdvYWwgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJwcm9qZWN0LWdvYWwgcHJvamVjdC1pdGVtXCIsIFwiaWRcIjogYCR7cHJvamVjdFRpdGxlIH0tZ29hbGB9KTtcbiAgICAgICAgICAgIGdvYWwudGV4dENvbnRlbnQgPSBwcm9qLmdldEdvYWwoKTtcbiAgICAgICAgICAgIHJldHVybiBnb2FsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ29hbCgpKTsgXG4gICAgfVxuICAgIHJlbmRlckRhdGEoKTtcblxuICAgIC8vIFRhc2sgQ29udGFpbmVyXG4gICAgY29uc3QgdGFza3MgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gbWFrZUNvbnRhaW5lcihcIlRhc2tzXCIpO1xuICAgICAgICBjb25zdCBhZGRUYXNrID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOididXR0b24nLCAnaWQnOiAnYWRkLXRhc2stYnV0dG9uJywgJ3ZhbHVlJzogJysrJ30pXG4gICAgICAgXG4gICBcbiAgICAgICAgdGFza3MuYXBwZW5kQ2hpbGQoYWRkVGFzaylcbiAgICAgICAgXG4gICAgICAgIC8vIEF0dGFjaGVzIGEgbmV3IHRhc2sgdG8gYm90aCB0aGUgRE9NIGVsZW1lbnQgYW5kIFByb2plY3QgT2JqZWN0c1xuICAgICAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUsICkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjcmVhdGVUYXNrKGUudGFyZ2V0LnBhcmVudE5vZGUsIHByb2plY3RPYmplY3QpO1xuICAgICAgICAgICAgXG4gIFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGFza3M7XG4gICAgfVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza3MoKSk7XG4gICBcblxuICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnYnV0dG9uLWJhcicsICdpZCc6ICdwcm9qZWN0LWJ1dHRvbi1iYXInfSk7XG5cbiAgICAgICAgY29uc3QgY2xvc2VQcm9qZWN0ID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogY2xvc2VQcm9qZWN0SWNvbiwnY2xhc3MnOiAncHJvamVjdC1idXR0b24nLCAnaWQnOiAnY2xvc2UtcHJvamVjdCcsICd2YWx1ZSc6ICdDbG9zZSd9KTtcbiAgICAgICAgY29uc3QgZWRpdFByb2plY3QgPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBlZGl0UHJvamVjdEljb24sICdjbGFzcyc6ICdwcm9qZWN0LWJ1dHRvbicsICdpZCc6ICdlZGl0LXByb2plY3QnLCAndmFsdWUnOiAnRWRpdCd9KVxuICAgICAgICBlZGl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIFxuXG4gICAgICAgIGVkaXRQcm9qZWN0Qm94KHByb2plY3RPYmplY3QpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlUHJvamVjdClcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0KVxuXG4gICAgICAgIHJldHVybiBidXR0b25Db250YWluZXI7XG4gICAgfVxuICAgIFxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbnMoKSk7XG5cbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGNvbnRlbnQpXG5cbiAgIFxuXG4gICAgXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIFxuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3QgPSByZW5kZXIoKTtcblxuICAgIFxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICBjcmVhdGVMaXN0ZW5lcnMocHJvamVjdE9iamVjdCk7XG4gICAgcmVuZGVyVGFza0xpc3QocHJvamVjdE9iamVjdCk7XG4gIFxuICAgIFxuXG59XG5cbi8vIFByb2ogaXMgb3JpZ2luYWwgcHJvamVjdCBiZWluZyBlZGl0ZWQ7XG5jb25zdCBlZGl0UHJvamVjdEJveCA9IChwcm9qKSA9PiB7XG5cbiAgICAvLyBDcmVhdGUgdGVtcG9yYXJ5IHByb2plY3QgdG8gc2F2ZSB0bywgYWxsb3cgZm9yIGZ1dHVyZSByZWZhY3RvcmluZ1xuICAgIGNvbnN0IHRlbXBQcm9qID0gUHJvamVjdCgpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wUHJvai5jb250ZW50O1xuXG4gICAgLy8gQ3JlYXRlIHNhdmUgYnV0dG9uIGFuZCBoaWRlIGVkaXQgYnV0dG9uXG4gICAgY29uc3QgYnV0dG9uQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1iYXInKTtcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdCcpO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2ltYWdlJywgJ3NyYyc6IHNhdmVQcm9qZWN0SWNvbiwgJ2NsYXNzJzogJ3Byb2plY3QtYnV0dG9uIGVkaXQtYnV0dG9uJywgJ2lkJzogJ3NhdmUtcHJvamVjdC1idXR0b24nLCAndmFsdWUnOiAnU2F2ZSd9KTtcbiAgICBcbiAgICAvLyBDb3B5IGNvbnRlbnQgdG8gdGVtcG9yYXJ5IHByb2plY3Qgb2JqZWN0XG4gICAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICBjb250ZW50LnNldFRpdGxlKG5ld1RpdGxlLnZhbHVlKTtcbiAgICAgICAgY29udGVudC5zZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbi52YWx1ZSk7XG4gICAgICAgIGNvbnRlbnQuc2V0R29hbChuZXdHb2FsLnZhbHVlKTtcbiAgICAgICAgc2F2ZUJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICAgICAgICBzYXZlVG9Qcm9qZWN0KCk7ICBcblxuICAgIH0pXG5cbiAgICAvLyBTYXZlIHRlbXBvcmFyeSBwcm9qZWN0IGNvbnRlbnQgdG8gb3JpZ2luYWwgcHJvamVjdCBhbmQgcmVmcmVzaFxuICAgIC8vIFRoZSBleHRyYSBzdGVwIG9mIGNyZWF0aW5nIGEgdGVtcG9yYXJ5IHByb2plY3QgaXMgZm9yIGZ1dHVyZSBlZGl0YWJpbGl0eS9yZWZhY3RvcmluZ1xuICAgIGNvbnN0IHNhdmVUb1Byb2plY3QgPSAoKSA9PiB7XG5cbiAgICAgICAgcHJvai5jb250ZW50LnNldFRpdGxlKGNvbnRlbnQuZ2V0VGl0bGUoKSk7XG4gICAgICAgIHByb2ouY29udGVudC5zZXREZXNjcmlwdGlvbihjb250ZW50LmdldERlc2NyaXB0aW9uKCkpO1xuICAgICAgICBwcm9qLmNvbnRlbnQuc2V0R29hbChjb250ZW50LmdldEdvYWwoKSk7XG4gICAgICAgIFxuICAgICAgICBjbG9zZVByb2plY3QocHJvaik7XG4gICAgICAgIHJlbmRlclByb2plY3QocHJvaik7XG4gICAgfVxuXG5cbiAgICBidXR0b25CYXIuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG5cblxuICAgIC8vIEZ1bmN0aW9ucyByZXR1cm4gRE9NIG9iamVjdCwgbm90IGl0cyBjb250ZW50IGV4cGxpY2l0ZWx5XG4gICAgY29uc3QgbmV3VGl0bGUgPSBlZGl0VGl0bGUoJ3Byb2plY3QnKTtcbiAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IGVkaXREZXNjcmlwdGlvbigncHJvamVjdCcpO1xuICAgIGNvbnN0ICBuZXdHb2FsID0gZWRpdEdvYWwoJ3Byb2plY3QnKTtcbiAgICAgICBcbn1cblxuLy8gRW5hYmxlIGVkaXRpbmcgb2YgdGl0bGUgb2YgcHJvamVjdC4gUmV0dXJucyBET00gT2JqZWN0LiBUYXJnZXQgaXMgc3RyaW5nIGVpdGhlciAncHJvamVjdCcgb3IgJ3Rhc2snXG5jb25zdCBlZGl0VGl0bGUgPSAodGFyZ2V0KSA9PiB7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldH0tdGl0bGVgKTtcbiAgIFxuICAgIGNvbnN0IGVkaXRUaXRsZUJveCA9IGVsZW1lbnQoJ3RleHRhcmVhJywgIHsnbmFtZSc6ICd0ZXh0YXJlYScsICdwbGFjZWhvbGRlcic6IHRpdGxlLmlubmVyVGV4dCwgXCJjbGFzc1wiOiBgZWRpdC0ke3RhcmdldH0tYm94ICR7dGFyZ2V0fS10aXRsZSAke3RhcmdldH0taXRlbWB9KTtcbiAgICBlZGl0VGl0bGVCb3gudGV4dENvbnRlbnQgPSB0aXRsZS5pbm5lclRleHQ7XG4gICAgdGl0bGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWRpdFRpdGxlQm94LCB0aXRsZSk7XG4gICAgY29uc29sZS5sb2coZWRpdFRpdGxlQm94LnRleHRDb250ZW50KVxuICAgIHRpdGxlLnJlbW92ZSgpO1xuICAgIHJldHVybiBlZGl0VGl0bGVCb3g7XG5cbn1cblxuLy8gRW5hYmxlIGVkaXRpbmcgb2YgZGVzY3JpcHRpb24vY29udGVudCBvZiBwcm9qZWN0LiBSZXR1cm5zIERPTSBvYmplY3QuXG5jb25zdCBlZGl0RGVzY3JpcHRpb24gPSAodGFyZ2V0KSA9PiB7XG4gICAgXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldH0tZGVzY2ApO1xuICAgIFxuICAgIFxuICAgIGNvbnN0IGVkaXREZXNjcmlwdGlvbkJveCA9IGVsZW1lbnQoJ3RleHRhcmVhJywgeyduYW1lJzondGV4dGFyZWEnLCAncGxhY2Vob2xkZXInOiBkZXNjLmlubmVyVGV4dCwgJ2NsYXNzJzogYGVkaXQtJHt0YXJnZXR9LWJveCAke3RhcmdldH0taXRlbSAke3RhcmdldH0tZGVzY2B9KTtcbiAgICBlZGl0RGVzY3JpcHRpb25Cb3gudGV4dENvbnRlbnQgPSBkZXNjLmlubmVyVGV4dDtcbiAgICBkZXNjLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVkaXREZXNjcmlwdGlvbkJveCwgZGVzYyk7XG4gICAgZGVzYy5yZW1vdmUoKTtcbiAgICByZXR1cm4gZWRpdERlc2NyaXB0aW9uQm94O1xuXG59XG5cbi8vIEVuYWJsZSBlZGl0aW5nIG9mIGdvYWwgY29udGVudC4gIFJldHVybnMgRE9NIG9iamVjdC5cbmNvbnN0IGVkaXRHb2FsID0gKHRhcmdldCkgPT4ge1xuXG4gICAgY29uc3QgZ29hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldH0tZ29hbGApO1xuICAgIGNvbnN0IGdvYWxUZXh0ID0gZ29hbC5pbm5lclRleHQ7XG4gICAgY29uc29sZS5sb2coZ29hbFRleHQpO1xuICAgIGNvbnN0IGVkaXRHb2FsQm94ID0gZWxlbWVudCgndGV4dGFyZWEnLCB7J3BsYWNlaG9sZGVyJzogZ29hbFRleHQsICdjbGFzcyc6IGBlZGl0LSR7dGFyZ2V0fS1ib3ggJHt0YXJnZXR9LWdvYWwgJHt0YXJnZXR9LWl0ZW1gfSlcbiAgICBlZGl0R29hbEJveC50ZXh0Q29udGVudCA9IGdvYWxUZXh0O1xuICAgIGdvYWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWRpdEdvYWxCb3gsIGdvYWwpO1xuICAgIGdvYWwucmVtb3ZlKCk7XG4gICAgcmV0dXJuIGVkaXRHb2FsQm94O1xuXG59XG5cbi8vIFNob3cgYSBmdWxsIHRhc2sgb24gc2NyZWVuXG5jb25zdCByZW5kZXJUYXNrID0gKHRhc2spID0+IHtcblxuICAgIFxuICAgIGNvbnN0IG9sZFRhc2tET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tcIik7XG4gICAgaWYgKG9sZFRhc2tET00gIT0gdW5kZWZpbmVkKSBvbGRUYXNrRE9NLnJlbW92ZSgpO1xuICAgIFxuICAgIC8vIERPTSBlbGVtZW50IHRvIGF0dGFjaCBzZWxmIHRvXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIGNvbnN0IHByb2plY3RET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpO1xuICAgIHByb2plY3RET00uY2xhc3NMaXN0LmFkZCgnYmxvY2twcm9qZWN0JylcblxuICAgIC8vIFRoZSBhY3R1YWwgcmVuZGVyIG9iamVjdCBcbiAgICBjb25zdCB0YXNrUG9wdXAgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBlbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwidGFza1wiLCBpZDogYCR7dGFzay50aXRsZX0tJHt0YXNrLmdldElEKCl9YCwgJ2RhdGEtaWQnOiB0YXNrLmdldElEKCl9KVxuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0aXRsZUJhciA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiBcInRhc2stdGl0bGUtYmFyXCJ9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2ltYWdlJywgJ3NyYyc6IGVkaXRUYXNrSWNvbiwgJ2NsYXNzJzogJ3Rhc2stYnV0dG9uJywgJ2lkJzogJ3Rhc2stZWRpdC1idXR0b24nLCAndmFsdWUnOiAnRWRpdCd9KTtcbiAgICAgICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlZGl0VGFzayh0YXNrKSk7XG4gICAgICAgICAgICB0aXRsZUJhci5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVsZW1lbnQoJ2gyJywgeydjbGFzcyc6IFwidGFzay10aXRsZVwifSk7XG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0VGl0bGUoKTs7XG4gICAgICAgICAgICB0aXRsZUJhci5hcHBlbmRDaGlsZCh0aXRsZSk7ICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgY29uc3QgY29tcGxldGVCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBmaW5pc2hUYXNrSWNvbiwgJ2NsYXNzJzogJ3Rhc2stYnV0dG9uJywgJ2lkJzogJ3Rhc2stY29tcGxldGUtYnV0dG9uJywgJ3ZhbHVlJzogJ0NISyd9KTtcbiAgICAgICAgICAgIGNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHNldCB0YXNrIGFzIGNvbXBsZXRlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGl0bGVCYXIuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pXG5cbiAgICAgICAgICAgIHJldHVybiB0aXRsZUJhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKCkgPT4ge1xuXG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJ0YXNrLWRlc2NcIiwgJ2lkJzogYCR7dGFzay50aXRsZX0tZGVzY2B9KTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmdldERlc2NyaXB0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgIC8vIENyZWF0aW5nIGEgRE9NIGNvbnRhaW5lciB0byBob2xkIHByaW9yaXR5IGFuZCBkZWFkbGluZSBkaXNwbGF5XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IG1ha2VDb250YWluZXIoJ3Rhc2stZGVhZGxpbmUnKTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5SGVhZGVyID0gcHJpb3JpdHkucXVlcnlTZWxlY3RvcignLnRhc2stZGVhZGxpbmUtaGVhZGVyJyk7XG4gICAgICAgICAgICBwcmlvcml0eUhlYWRlci50ZXh0Q29udGVudCA9IFwiRGVhZGxpbmVcIlxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdidXR0b24nLCAnY2xhc3MnOiBcInByaW9yaXR5LWJ1dHRvbiB0YXNrLWl0ZW1cIiwgJ3ZhbHVlJzogdGFzay5nZXRQcmlvcml0eSgpfSk7XG4gICAgICAgICAgICBwcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjaGFuZ2VQcmlvcml0eShlKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlYWRsaW5lQ29udGVudCA9IHByaW9yaXR5LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlYWRsaW5lLWNvbnRlbnQnKTsgICAgIFxuICAgICAgICAgICAgY29uc3QgZGVhZGxpbmUgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJ0YXNrLWRlYWRsaW5lIHRhc2staXRlbVwiLCBcImlkXCI6IGAke3Rhc2suZGVhZGxpbmV9LWRlYWRsaW5lYH0pO1xuICAgICAgICAgICAgZGVhZGxpbmUudGV4dENvbnRlbnQgPSBmb3JtYXQodGFzay5nZXREZWFkbGluZSgpLCBcIk1NLmRkLnl5eXlcIik7XG4gICAgICAgICAgICBkZWFkbGluZUNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVhZGxpbmUpO1xuXG5cbiAgICAgICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKGRlYWRsaW5lQ29udGVudCk7ICAgIFxuICAgICAgICAgICAgZGVhZGxpbmVDb250ZW50LmFwcGVuZENoaWxkKHByaW9yaXR5QnV0dG9uKTtcbiAgICAgICAgICAgIHByaW9yaXR5LnZhbHVlID0gdGFzay5wcmlvcml0eTtcbiAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGlvbiBvZiBnb2FsIGVsZW1lbnRcbiAgICAgICAgY29uc3QgZ29hbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdvYWwgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJ0YXNrLWdvYWwtaGVhZGVyXCIsIFwiaWRcIjogYCR7dGFzay50aXRsZX0tZ29hbGB9KTtcbiAgICAgICAgICAgIGNvbnN0IGdvYWxIZWFkZXIgPSBlbGVtZW50KCdoMycsIHsnY2xhc3MnOiAnZ29hbC10aXRsZSd9KVxuICAgICAgICAgICAgY29uc3QgZ29hbENvbnRlbnQgPSBlbGVtZW50KCdwJywgeydjbGFzcyc6ICd0YXNrLWdvYWwnfSk7XG4gICAgICAgICAgICBnb2FsQ29udGVudC50ZXh0Q29udGVudCA9IHRhc2suZ2V0R29hbCgpO1xuICAgICAgICAgICAgZ29hbEhlYWRlci50ZXh0Q29udGVudCA9IFwiR29hbFwiXG4gICAgICAgICAgICBnb2FsLmFwcGVuZENoaWxkKGdvYWxIZWFkZXIpXG4gICAgICAgICAgICBnb2FsLmFwcGVuZENoaWxkKGdvYWxDb250ZW50KVxuICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBnb2FsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQmFyID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBidXR0b25zID0gZWxlbWVudChcImRpdlwiLCB7J2NsYXNzJzogJ2J1dHRvbi1iYXInLCAnaWQnOiAndGFzay1idXR0b25zJ30pO1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogZGVsZXRlVGFza0ljb24sICdhbHQnOiAnRGVsZXRlIHRhc2snLCAnY2xhc3MnOiAndGFzay1idXR0b24gZGVsZXRlLXRhc2snLCAnaWQnOiAnZGVsZXRlLXRhc2snLCAndmFsdWUnOiAnRGVsZXRlJ30pXG4gICAgICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2sodGFzayk7XG4gICAgICAgICAgICAgICAgY2xvc2VUYXNrKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogY2xvc2VQcm9qZWN0SWNvbiwnYWx0JzogJ0Nsb3NlIFRhc2snLCAnY2xhc3MnOiAndGFzay1idXR0b24gY2xvc2UtdGFzayd9KTtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNsb3NlVGFzayhlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUpKTtcbiAgICAgICAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pOyAgICAgICAgICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xuXG4gICAgICAgIH1cblxuXG4gICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGl0bGUoKSk7XG4gICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24oKSk7XG4gICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQocHJpb3JpdHkoKSk7XG4gICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoZ29hbCgpKTtcbiAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZChidXR0b25CYXIoKSk7XG5cblxuICAgICAgICByZXR1cm4gbmV3VGFzaztcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza1BvcHVwKCkpO1xufVxuXG4vL0hhbmRsZXMgZGlzcGxheSBvZiAnVGFza3MgbGlzdCdcbmNvbnN0IHJlbmRlclRhc2tMaXN0ID0gKHByb2plY3QpID0+IHtcblxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtY29udGFpbmVyJylcbiAgIFxuICAgIGNvbnN0IG1pbmlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1pbmktdGFzaycpO1xuICAgIG1pbmlMaXN0LmZvckVhY2gobWluaSA9PiBtaW5pLnJlbW92ZSgpKVxuICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrcy5nZXRUYXNrTGlzdCgpKXtcbiAgICAgICAgY29uc29sZS5sb2codGFzayk7XG4gICAgICAgIGNvbnN0IG1pbml0YXNrID0gY3JlYXRlTWluaVRhc2socHJvamVjdCwgdGFzayk7XG5cblxuICAgICAgICBpZiAodGFzay5nZXRTdGF0dXMoKSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBtaW5pdGFzay5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTsgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgbWluaXRhc2suY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7XG5cbiAgICAgICAgbGlzdC5pbnNlcnRCZWZvcmUobWluaXRhc2ssIGxpc3QubGFzdEVsZW1lbnRDaGlsZCk7XG5cbiAgICB9XG4gICAgXG59XG5cblxuY29uc3QgY3JlYXRlVGFzayA9IChjb250YWluZXIsIHByb2plY3QpID0+IHtcblxuICAgIGNvbnN0IHRhc2sgPSBUYXNrKCk7XG4gICAgdGFzay5zZXRQYXJlbnQocHJvamVjdCk7XG4gICAgXG4gICBcbiAgICBjb25zdCB0YXNrTGlzdCA9IChjb250YWluZXIpXG4gICAgdGFza0xpc3QuaW5zZXJ0QmVmb3JlKGNyZWF0ZU1pbmlUYXNrKHByb2plY3QsIHRhc2spLCB0YXNrTGlzdC5sYXN0RWxlbWVudENoaWxkKTtcbiAgIFxuICAgIC8vIEFkZCB0byBvYmplY3RcbiAgICBwcm9qZWN0LnRhc2tzLmFkZFRhc2sodGFzayk7XG4gICAgdGFzay5nZXRJRCgpO1xuICAgIHJlbmRlclRhc2sodGFzayk7XG4gICAgZWRpdFRhc2sodGFzayk7XG5cbn1cblxuLy8gV291bGQgbGlrZSB0byByZWZhY3RvciB0aGlzIHRvIHNoYXJlIHdpdGggZWRpdCBwcm9qZWN0IGZ1bmN0aW9ucyBpZiBwb3NzaWJsZVxuY29uc3QgZWRpdFRhc2sgPSAodGFzaykgPT4ge1xuICAgIFxuICAgIC8vY29uc3QgcHJvamVjdCA9IHRhc2suZ2V0UGFyZW50KCk7XG4gICAgY29uc3QgdGVtcFRhc2sgPSBUYXNrKCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGVtcFRhc2s7XG5cbiAgICBjb25zdCBidXR0b25CYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZS1iYXInKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJyk7XG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWVkaXQtYnV0dG9uJyk7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogc2F2ZVRhc2tJY29uLCAnY2xhc3MnOiAndGFzay1lZGl0LWJ1dHRvbiB0YXNrLWJ1dHRvbicsICdpZCc6ICd0YXNrLWVkaXQtYnV0dG9uJywgJ3ZhbHVlJzogJ1NhdmUnfSlcblxuICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgY29udGVudC5zZXRUaXRsZShuZXdUaXRsZS52YWx1ZSk7XG4gICAgICAgIGNvbnRlbnQuc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24udmFsdWUpO1xuICAgICAgICBjb250ZW50LnNldEdvYWwobmV3R29hbC52YWx1ZSk7XG4gICAgICAgIHNhdmVCdXR0b24ucmVtb3ZlKCk7XG4gICAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgICAgICAgc2F2ZVRvVGFzaygpO1xuICAgIH0pXG5cbiAgICBjb25zdCBzYXZlVG9UYXNrID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrKVxuICAgICAgICB0YXNrLnNldFRpdGxlKGNvbnRlbnQuZ2V0VGl0bGUoKSk7XG4gICAgICAgIHRhc2suc2V0RGVzY3JpcHRpb24oY29udGVudC5nZXREZXNjcmlwdGlvbigpKTtcbiAgICAgICAgdGFzay5zZXRHb2FsKGNvbnRlbnQuZ2V0R29hbCgpKTtcbiAgIFxuICAgICAgICBjbG9zZVRhc2soYnV0dG9uQmFyLnBhcmVudE5vZGUpO1xuICAgICAgICBjbG9zZVByb2plY3QoKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdCh0YXNrLmdldFBhcmVudCgpKTtcbiAgICAgICAgcmVuZGVyVGFzayh0YXNrKTtcblxuICAgIH1cblxuXG4gICAgYnV0dG9uQmFyLmluc2VydEJlZm9yZShzYXZlQnV0dG9uLCB0aXRsZSk7XG5cbiAgICBjb25zdCBuZXdUaXRsZSA9IGVkaXRUaXRsZSgndGFzaycpO1xuICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gZWRpdERlc2NyaXB0aW9uKCd0YXNrJyk7XG4gICAgY29uc3QgbmV3R29hbCA9IGVkaXRHb2FsKCd0YXNrJyk7XG5cblxufVxuXG4vLyBEZWxldGVzIHRhc2sgZnJvbSBwYXJlbnQgcHJvamVjdFxuY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrKSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZyh0YXNrKTtcblxuICAgICBjb25zdCBwcm9qZWN0ID0gdGFzay5nZXRQYXJlbnQoKTtcbiAgICBwcm9qZWN0LnRhc2tzLnJlbW92ZVRhc2sodGFzayk7XG4gICAgcmVuZGVyVGFza0xpc3QocHJvamVjdCk7XG59XG5cbi8vIERlbGV0ZSB0aGUgRE9NIGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRhc2tcbmNvbnN0IGNsb3NlVGFzayA9IChET00pID0+IHtcblxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYmxvY2twcm9qZWN0Jyk7XG5cbiAgICBpZiAoRE9NICE9IG51bGwpIERPTS5yZW1vdmUoKTtcbn1cblxuY29uc3QgdG9nZ2xlVGFza1N0YXR1cyA9ICh0YXNrKSA9PiB7XG5cbiAgICBpZiAodGFzayA9PSBudWxsKSByZXR1cm47XG5cbiAgICBpZiAodGFzay5nZXRTdGF0dXMoKSA9PT0gZmFsc2Upe1xuICAgICAgICB0YXNrLnNldFN0YXR1cyh0cnVlKTtcbiAgICAgICAgdGFzay5nZXRQYXJlbnQoKS50YXNrcy5jb21wbGV0ZVRhc2sodGFzayk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHRhc2suc2V0U3RhdHVzKGZhbHNlKVxuICAgICAgICB0YXNrLmdldFBhcmVudCgpLnRhc2tzLnJlbW92ZUNvbXBsZXRlKHRhc2spO1xuICAgIH1cbiAgXG5cbiAgICByZW5kZXJUYXNrTGlzdCh0YXNrLmdldFBhcmVudCgpKTtcblxufVxuXG4vLyBDcmVhdGVzIGEgbWluaS10YXNrIERPTSBlbGVtZW50IG91dCBvZiB0YXNrIG9iamVjdFxuY29uc3QgY3JlYXRlTWluaVRhc2sgPSAocHJvamVjdCwgdGFzaykgPT4ge1xuICAgIFxuICAgIGNvbnN0IG1pbml0YXNrID0gZWxlbWVudCgnZGl2JywgeydjbGFzcyc6J21pbmktdGFzayd9KVxuICAgXG4gICAgaWYgKHRhc2suZ2V0U3RhdHVzKCkgPT09IHRydWUpe1xuICAgICAgICBtaW5pdGFzay5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy9jb25zb2xlLmxvZyh0YXNrKTtcbiAgICAvLyBEZWxldGUgbWluaVxuICAgIGNvbnN0IHJlbW92ZU1pbmkgPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBtaW5pRGVsZXRlSWNvbiwgJ2NsYXNzJzogJ21pbmktYnV0dG9uIG1pbmktZGVsZXRlJywgJ3ZhbHVlJzogJy0nfSlcbiAgICAvLyBQYXNzIG9uIERPTSBvZiBNaW5pbGlzdCBhbmQgVGFzayB0byBkZWxldGVcbiAgICByZW1vdmVNaW5pLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGRlbGV0ZU1pbmkodGFzaykpO1xuICAgIC8vIE1hcmsgbWluaSBhcyBjb21wbGV0ZVxuICAgIGNvbnN0IGZpbmlzaE1pbmkgPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBtaW5pQ2hlY2tib3gsICdjbGFzcyc6ICdtaW5pLWJ1dHRvbiBtaW5pLWZpbmlzaCcsICd2YWx1ZSc6ICdGJ30pO1xuICAgIGZpbmlzaE1pbmkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdG9nZ2xlVGFza1N0YXR1cyh0YXNrKSk7XG4gICAgLy9PcGVuIFRhc2sgaW4gZnVsbCB2aWV3XG4gICAgY29uc3QgbWluaUJ1dHRvbiA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2J1dHRvbicsICdjbGFzcyc6ICdtaW5pLWJ1dHRvbiBtaW5pLXRpdGxlJywgJ3ZhbHVlJzogYCR7dGFzay5nZXRUaXRsZSgpfWB9KTtcbiAgICAgICAgXG4gICAgXG4gICAgXG4gICAgbWluaUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlclRhc2sodGFzaykpXG4gICAgbWluaXRhc2suYXBwZW5kQ2hpbGQocmVtb3ZlTWluaSk7XG4gICAgbWluaXRhc2suYXBwZW5kQ2hpbGQobWluaUJ1dHRvbik7XG4gICAgbWluaXRhc2suYXBwZW5kQ2hpbGQoZmluaXNoTWluaSlcbiAgICBsZXQgYmdjb2xvciA9IG1pbml0YXNrLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICBjb25zdCB0aXRsZSA9IGVsZW1lbnQoJ2g0JywgeydjbGFzcyc6ICdtaW5pLXRhc2stdGl0bGUnfSlcbiAgICBcbiAgICBcbiAgICBzd2l0Y2ggKHRhc2suZ2V0UHJpb3JpdHkoKSl7XG5cbiAgICAgICAgY2FzZSAxOiBcbiAgICAgICAgICAgICBiZ2NvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBiZ2NvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBiZ2NvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuXG4gICAgfVxuXG4gICAgXG4gICAgbWluaXRhc2suYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG5cbiAgICByZXR1cm4gbWluaXRhc2s7XG59XG5cbmNvbnN0IGRlbGV0ZU1pbmkgPSAodGFzaykgPT4ge1xuXG4gICAgXG4gICAgY29uc3QgcHJvamVjdCA9IHRhc2suZ2V0UGFyZW50KCk7XG5cbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRhc2tzLmdldFRhc2tMaXN0KCkpO1xuICAgIHByb2plY3QudGFza3MucmVtb3ZlVGFzayh0YXNrKTtcbiAgICBcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrJyk7XG4gICAgaWYgKHRhc2tDYXJkICE9IG51bGwpe1xuICAgICAgICBpZiAodGFza0NhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgPT0gdGFzay5nZXRJRCgpKSBjbG9zZVRhc2sodGFza0NhcmQpO1xuICAgIH1cblxuICAgIC8vIFJlZnJlc2ggdGFzayBsaXN0XG4gICAgcmVuZGVyVGFza0xpc3QocHJvamVjdCk7XG5cbn1cblxuXG4vLyBCdXR0b25zIGFuZCBMaXN0ZW5lcnNcbmNvbnN0IGNyZWF0ZUxpc3RlbmVycyA9IChwcm9qZWN0KSA9PiB7XG5cbiAgICAvLyBDcmVhdGUgbGlzdGVuZXJzIGZvciBidXR0b25zXG4gICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3QnKTtcbiAgICAvL2NvbnNvbGUubG9nKHByb2plY3QuY29udGVudC5nZXRQcmlvcml0eSgpKVxuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXByb2plY3QnKTtcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlUHJvamVjdCgpKTtcbiAgICAvLyBDb250ZW50IGJ1dHRvbiAoZXhwYW5kIGNvbnRlbnQpXG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtYnV0dG9uJyk7XG4gICAgXG4gICAgY29uc3QgZGVhZGxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVhZGxpbmUtYnV0dG9uJyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYnV0dG9uLnByb2plY3QtaXRlbScpO1xuICAgIHByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgICAgICBjb25zdCBjdXJyZW50UHJpb3JpdHkgPSBwcm9qZWN0LmNvbnRlbnQuZ2V0UHJpb3JpdHkoKTtcbiAgICAgIC8vICBjb25zb2xlLmxvZyhjdXJyZW50UHJpb3JpdHkpO1xuXG4gICAgICAgXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRQcmlvcml0eSA9ICgoY3VycmVudFByaW9yaXR5KSAlIDMpICsgMTtcbiAgICAgICAgcHJvamVjdC5jb250ZW50LnNldFByaW9yaXR5KHVwZGF0ZWRQcmlvcml0eSk7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID0gdXBkYXRlZFByaW9yaXR5O1xuICAgICAgICBcblxuICAgIH0pICAgXG5cbn1cblxuXG5jb25zdCBjbG9zZVByb2plY3QgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKVxuICAgIFxuICAgIC8vUmVlbmFibGUgaW50ZXJhY3Rpb24gXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3b3Jrc3BhY2UtY29udGFpbmVyJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdibG9ja3NjcmVlbicpXG4gICAgXG4gICBjb25zb2xlLmxvZyhtYWluKVxuICAgIHByb2plY3QucmVtb3ZlKCk7XG5cbiAgICByZW5kZXJQcm9qZWN0TGlzdCgpO1xuXG5cblxufVxuXG5cbmNvbnN0IGFkZFByb2plY3RQb3BVcCA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBidXR0b24gPSBlbGVtZW50KFwiYnV0dG9uXCIsIHtcImlkXCI6IFwicHJvamVjdC1idXR0b25cIiwgXCJ2YWx1ZVwiOiBcIlByZXNzaXRcIixcInRleHRDb250ZW50XCI6IFwiUHJlc3NcIn0pXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIFxuICAgIH0pXG5cblxuICAgIHJldHVybiBidXR0b247XG5cbn1cblxuXG5leHBvcnQge3JlbmRlclByb2plY3QsIHJlbmRlclRhc2ssIGFkZFByb2plY3RQb3BVcCBhcyBhZGRQcm9qZWN0QnV0dG9uLCBjcmVhdGVMaXN0ZW5lcnN9IiwiLy8gTWVudSBmb3IgbWFuaXB1bGF0aW5nIGNvbnRlbnQgXG5cbmltcG9ydCB7IHN3aXRjaERpc3BsYXlTdHlsZSB9IGZyb20gXCIuL2NvbnRlbnRcIjtcbmltcG9ydCB7IGVsZW1lbnQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5cbmNvbnN0IG1lbnUgPSAoKSA9PiB7XG5jb25zdCBoZWFkZXIgPSBlbGVtZW50KCdkaXYnLCB7J2lkJzogJ2hlYWRlcid9KTtcbmNvbnN0IHN0YXRzID0gZWxlbWVudCgnZGl2JywgeydpZCc6ICdzdGF0cyd9KTtcbmNvbnN0IHN1YkhlYWRlciA9IGVsZW1lbnQoJ2RpdicsIHsnaWQnOiAnc3ViLWhlYWRlcid9KTtcblxuY29uc3QgdG9nZ2xlU3R5bGUgPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdidXR0b24nLCAnaWQnOiAnc3R5bGUtdG9nZ2xlJywgJ3ZhbHVlJzogJ3N3aXRjaCBtb2RlJ30pO1xuICAgIHRvZ2dsZVN0eWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge3N3aXRjaERpc3BsYXlTdHlsZSgpfSlcblxuaGVhZGVyLmFwcGVuZENoaWxkKHRvZ2dsZVN0eWxlKVxuaGVhZGVyLmFwcGVuZENoaWxkKHN0YXRzKTtcbmhlYWRlci5hcHBlbmRDaGlsZChzdWJIZWFkZXIpO1xuXG5cbnJldHVybiBoZWFkZXI7XG59XG5leHBvcnQgeyBtZW51fVxuIiwiaW1wb3J0IHsgVGFzaywgZ2V0VXJnZW5jeSB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCBkZWZhdWx0UHJvamVjdCBmcm9tIFwiLi9kZWZhdWx0LXByb2plY3QuanNvblwiXG5pbXBvcnQgeyBwYXJzZUlTTywgdG9EYXRlIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbi8vIENyZWF0ZSBhbiBvYmplY3QgY29udGFpbmluZyB0b2RvIG9iamVjdHNcblxuXG4vLyBQcm9qZWN0IG9iamVjdCBmYWN0b3J5XG4vLyBQcm9qZWN0KHRpdGxlLCBkYXRlLCBkZWFkbGluZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBnb2FsKVxuLy8gTG9hZCBkZWZhdWx0cyBmcm9tIGRlZmF1bHQtcHJvamVjdC5qc29uXG5jb25zdCBQcm9qZWN0ID0gKHRpdGxlID0gZGVmYXVsdFByb2plY3QudGl0bGUsIGRlYWRsaW5lID0gZGVmYXVsdFByb2plY3QuZGVhZGxpbmUsIHByaW9yaXR5ID0gZGVmYXVsdFByb2plY3QucHJpb3JpdHksIGRlc2NyaXB0aW9uID0gZGVmYXVsdFByb2plY3QuZGVzY3JpcHRpb24sIGdvYWwgPSBkZWZhdWx0UHJvamVjdC5nb2FsICkgPT4ge1xuXG4gICAgLy8gRGVmaW5lIG93biBpbmZvIHdpdGggVGFzayBvYmplY3RcbiAgICAvL2NvbnN0IGluZm8gPSBUYXNrKGRlZmF1bHRQcm9qZWN0LnRpdGxlLCBkZWZhdWx0UHJvamVjdC5kZWFkbGluZSwgZGVmYXVsdFByb2plY3QucHJpb3JpdHksIGRlZmF1bHRQcm9qZWN0LmRlc2NyaXB0aW9uKVxuICAgIFxuICAgIGRlYWRsaW5lID0gbmV3IERhdGUoZGVhZGxpbmUpO1xuICAgXG4gICAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoRGF0ZS5ub3coKSlcbiAgICBjb25zdCB0aW1lUmVtYWluaW5nID0gZGVhZGxpbmUgLSBEYXRlLm5vdygpO1xuICAgIFxuICAgIC8vIFdpbGwgYXNzaWduIHRhc2sgSUQgc2VxdWVudGlhbGx5XG4gICAgbGV0IHRhc2tJRCA9IDA7XG5cbiAgICBsZXQgX3Rhc2tMaXN0ID0gW107XG4gICAgbGV0IF9jb21wbGV0ZWRUYXNrcyA9IFtdO1xuICAgIGxldCBfaW5jb21wbGV0ZVRhc2tzID0gW107XG5cbiAgIFxuXG4gICAgLy8gQWxsIHRhc2sgcmVsYXRlZCBmdW5jdGlvbnNcbiAgICBjb25zdCB0YXNrcyA9ICgoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgc2V0VGFza0lEKHRhc2spO1xuICAgICAgICAgICAgX3Rhc2tMaXN0LnB1c2godGFzaylcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCByZW1vdmVUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBfdGFza0xpc3QuaW5kZXhPZih0YXNrKTtcbiAgICAgICAgICAgIF90YXNrTGlzdC5zcGxpY2UodGFza0VsZW1lbnQsIDEpOyBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBjb21wbGV0ZVRhc2sgPSAodGFzayA9PiB7XG5cbiAgICAgICAgICAgIC8vaWYgKF9jb21wbGV0ZWRUYXNrcy5pbmNsdWRlcyh0YXNrKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICBfY29tcGxldGVkVGFza3MucHVzaChfdGFza0xpc3Quc2xpY2UodGFzaykpO1xuICAgICAgICAgICAgIC8vcmVtb3ZlVGFzayh0YXNrKVxuICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZUNvbXBsZXRlID0gKHRhc2spID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBfY29tcGxldGVkVGFza3MuaW5kZXhPZih0YXNrKTtcbiAgICAgICAgICAgIF9jb21wbGV0ZWRUYXNrcy5zcGxpY2UodGFza0VsZW1lbnQsIDEpOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNldFRhc2tJRCA9ICh0YXNrKSA9PiB7XG4gICAgICAgICAgICB0YXNrLnNldElEKHRhc2tJRCk7XG4gICAgICAgICAgICB0YXNrSUQrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNsZWFyRmluaXNoZWRMaXN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgX2NvbXBsZXRlZFRhc2tzID0gW107XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgY29uc3QgZ2V0VGFza0xpc3QgPSAoKSA9PiBfdGFza0xpc3Q7XG4gICAgICAgIGNvbnN0IGdldENvbXBsZXRlZFRhc2tzID0gKCkgPT4gX2NvbXBsZXRlZFRhc2tzO1xuICAgICAgICBjb25zdCBnZXRJbkNvbXBsZXRlVGFza3MgPSAoKSA9PiBfaW5jb21wbGV0ZVRhc2tzO1xuICAgICAgICBjb25zdCB0YXNrQ291bnQgPSBfdGFza0xpc3QubGVuZ3RoO1xuXG4gICAgICAgIHJldHVybiB7Y2xlYXJGaW5pc2hlZExpc3QsIHJlbW92ZUNvbXBsZXRlLCB0YXNrQ291bnQsIGFkZFRhc2ssIHJlbW92ZVRhc2ssIGNvbXBsZXRlVGFzaywgZ2V0VGFza0xpc3QsIGdldENvbXBsZXRlZFRhc2tzLCBnZXRJbkNvbXBsZXRlVGFza3MsIF90YXNrTGlzdH1cblxuICAgIH0pKCk7XG4gIFxuICAgIC8vIENvbnRlbnQgcmVsYXRlZCBmdW5jdGlvbnNcbiAgICBjb25zdCBjb250ZW50ID0gKCgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgICAgICAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG5cbiAgICAgICAgY29uc3Qgc2V0RGVhZGxpbmUgPSAobmV3RGVhZGxpbmUpID0+IGRlYWRsaW5lID0gbmV3RGVhZGxpbmU7XG4gICAgICAgIGNvbnN0IGdldERlYWRsaW5lID0gKCkgPT4gZGVhZGxpbmU7XG5cbiAgICAgICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb25cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiB7XG5cbiAgICAgICAgICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcblxuICAgICAgICBjb25zdCBzZXRHb2FsID0gKG5ld0dvYWwpID0+IGdvYWwgPSBuZXdHb2FsO1xuICAgICAgICBjb25zdCBnZXRHb2FsID0gKCkgPT4gZ29hbDtcblxuICAgICAgICBjb25zdCBnZXRDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHt0aXRsZSwgZGVhZGxpbmUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbn07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge3NldFRpdGxlLCBnZXRUaXRsZSwgZ2V0RGVhZGxpbmUsIHNldERlYWRsaW5lLCBzZXREZXNjcmlwdGlvbiwgZ2V0RGVzY3JpcHRpb24sIGdldENvbnRlbnQsIHNldFByaW9yaXR5LCBnZXRQcmlvcml0eSwgc2V0R29hbCwgZ2V0R29hbCwgfVxufSkoKTtcblxuXG5cblxuXG5cbiAgcmV0dXJuIHsgdGFza3MsIF90YXNrTGlzdCwgY29udGVudH1cbn1cblxuXG5leHBvcnQgeyBQcm9qZWN0fSIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgZWxlbWVudCwgbWFrZUNvbnRhaW5lciwgbWFrZU1lbnUsIHNldEF0dHJpYnV0ZXMgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IGRlZmF1bHRQcm9qZWN0IGZyb20gXCIuL2RlZmF1bHQtcHJvamVjdC5qc29uXCJcbmltcG9ydCBkZWZhdWx0VGFzayBmcm9tIFwiLi9kZWZhdWx0LXRhc2suanNvblwiO1xuaW1wb3J0IHsgZ2V0VXJnZW5jeSwgVGFzayB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0TGlzdCwgcmVuZGVyUHJvamVjdExpc3QgfSBmcm9tIFwiLi9jb250ZW50XCI7XG5pbXBvcnQgeyByZW5kZXJUYXNrLCBwcmlvcml0eVN0eWxlfSBmcm9tIFwiLi90YXNrVUlcIjtcbmltcG9ydCB7IFVJIH0gZnJvbSBcIi4vc2V0dGluZ3NcIjtcblxuXG4vLyBpbWFnZXNcblxuaW1wb3J0IGNsb3NlUHJvamVjdEljb24gZnJvbSBcIi4vaW1nL2Nsb3NlLXByb2plY3Quc3ZnXCI7XG5pbXBvcnQgZWRpdFByb2plY3RJY29uIGZyb20gXCIuL2ltZy9lZGl0LnN2Z1wiO1xuaW1wb3J0IHNhdmVQcm9qZWN0SWNvbiBmcm9tIFwiLi9pbWcvc2F2ZS1jb250ZW50LnN2Z1wiO1xuaW1wb3J0IG1pbmlTb3J0SWNvbiBmcm9tIFwiLi9pbWcvc29ydC5zdmdcIjtcbmltcG9ydCBtaW5pQ2hlY2tib3ggZnJvbSAnLi9pbWcvbWluaWNoZWNrYm94LnN2Zyc7XG5pbXBvcnQgbWluaUNoZWNrYm94Q29tcGxldGUgZnJvbSAnLi9pbWcvbWluaWNoZWNrbWFya2VkLnN2Zyc7XG5pbXBvcnQgbWluaURlbGV0ZUljb24gZnJvbSAnLi9pbWcvZGVsZXRlLWFsZXJ0LnN2Zyc7XG5pbXBvcnQgZmluaXNoVGFza3NJY29uIGZyb20gJy4vaW1nL2ZpbmlzaC10YXNrLnN2Zyc7XG5pbXBvcnQgY2FsZW5kYXJJY29uIGZyb20gJy4vaW1nL2NhbGVuZGFyLWVkaXQuc3ZnJztcbmltcG9ydCBhZGRNaW5pVGFza0ljb24gZnJvbSAnLi9pbWcvcGx1cy1ib3gtbXVsdGlwbGUuc3ZnJztcblxuXG4vLyBJbnRlcmZhY2UgZm9yIGFkZGluZyB0YXNrcyBhbmQgcHJvamVjdHMuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG5jb25zdCBUQVNLTElTVE1BWCA9IDc7XG5cbi8vIFJlbmRlciBhIGZ1bGwgcHJvamVjdFxuY29uc3QgcmVuZGVyUHJvamVjdCA9IChwcm9qZWN0T2JqZWN0KSA9PiB7XG4gICBcbiAgICAvLyBDb250YWluZXIgdG8gYXR0YWNoIHByb2plY3QgdG9cbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dvcmtzcGFjZVwiKTtcblxuICAgIC8vIFJlbW92ZSBpbnRlcmFjdGlvbiB3aXRoIHJlc3Qgb2Ygd29ya3NwYWNlO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1jb250YWluZXJcIik7XG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgLy9jb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyk7XG4gICAgLy9jYXJkcy5mb3JFYWNoKGNhcmQgPT4gY2FyZC5jbGFzc0xpc3QuYWRkKCdibG9ja3NjcmVlbicpKVxuXG5cbiAgICBsZXQgcHJvaiA9IHByb2plY3RPYmplY3QuY29udGVudDtcblxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICBcbiAgICAvLyBDcmVhdGUgZG9tIHNrZWxldG9uIFxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2ouZ2V0VGl0bGUoKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZWxlbWVudCgnZGl2JywgeydjbGFzcyc6IFwicHJvamVjdFwiLCBcImlkXCI6IGAke3Byb2plY3RUaXRsZSB9LWlkYH0pXG4gICAgY29uc3QgY29udGVudCA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAncHJvamVjdC1jb250ZW50JywgJ2lkJzogYCR7cHJvamVjdFRpdGxlfS1jb250ZW50YH0pXG4gICBcbiAgICAvLyBMb2FkaW5nIG9mIGRhdGEgaW50byBzcGVjaWZpZWQgY29udGFpbmVyc1xuICAgIGNvbnN0IHJlbmRlckRhdGEgPSAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICAvLyBjcmVhdGUgdGl0Z2xlIGJhclxuICAgICAgICBjb25zdCB0aXRsZSA9ICgpID0+IHtcblxuXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVsZW1lbnQoJ2gyJywgeydjbGFzcyc6IFwicHJvamVjdC10aXRsZSBwcm9qZWN0LWl0ZW1cIn0pO1xuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGU7XG4gICAgICAgICAgIFxuXG4gICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUoKSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZWxlbWVudCgnZGl2JywgeydjbGFzcyc6IFwicHJvamVjdC1kZXNjIHByb2plY3QtaXRlbVwiLCAnaWQnOiBgJHtwcm9qZWN0VGl0bGUgfS1kZXNjYH0pO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qLmdldERlc2NyaXB0aW9uKCk7XG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbigpKVxuXG4gICAgICAgIC8vIERlYWRsaW5lL1ByaW9yaXR5L1VyZ2VuY3kgQ29udGFpbmVyIChUaGVzZSB3aWxsIGludGVyYWN0IGEgbG90KVxuICAgICAgICBjb25zdCBkZWFkbGluZSA9ICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgZGVhZGxpbmVDb250YWluZXIgPSBtYWtlQ29udGFpbmVyKFwiRGVhZGxpbmVcIiwgY2FsZW5kYXJJY29uKTtcbiAgICAgICAgICAgIGNvbnN0IGRlYWRsaW5lQ29udGVudCA9IGRlYWRsaW5lQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5kZWFkbGluZS1jb250ZW50Jyk7ICAgICBcbiAgICAgICAgICAgIGNvbnN0IGRlYWRsaW5lID0gZWxlbWVudCgnZGl2JywgeydjbGFzcyc6IFwicHJvamVjdC1kZWFkbGluZSBwcm9qZWN0LWl0ZW1cIiwgXCJpZFwiOiBgJHtwcm9qLmRlYWRsaW5lfS1kZWFkbGluZWB9KTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5QnV0dG9uID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnYnV0dG9uJywgJ2NsYXNzJzogYHByaW9yaXR5LWJ1dHRvbiBwcm9qZWN0LWl0ZW0gJHtwcmlvcml0eVN0eWxlKHByb2opLnByaW9yaXR5VmFsdWV9YCwgJ3ZhbHVlJzogcHJpb3JpdHlTdHlsZShwcm9qKS5wcmlvcml0eVRleHR9KTtcbiAgICAgICAgICAgIGRlYWRsaW5lLnRleHRDb250ZW50ID0gZm9ybWF0KHByb2ouZ2V0RGVhZGxpbmUoKSwgXCJNTS5kZC55eXl5XCIpO1xuICAgICAgICAgICAgZGVhZGxpbmVDb250ZW50LmFwcGVuZENoaWxkKGRlYWRsaW5lKTtcbiAgICAgICAgICAgIGRlYWRsaW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlYWRsaW5lQ29udGVudCk7ICAgIFxuICAgICAgICAgICAgZGVhZGxpbmVDb250ZW50LmFwcGVuZENoaWxkKHByaW9yaXR5QnV0dG9uKTtcbiAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZGVhZGxpbmVDb250YWluZXI7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkZWFkbGluZSgpKVxuXG4gICAgICAgIC8vIEFsc28ga25vd24gYXMgb2JqZWN0aXZlXG4gICAgICAgIGNvbnN0IGdvYWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnb2FsID0gZWxlbWVudCgnZGl2JywgeydjbGFzcyc6IFwicHJvamVjdC1nb2FsIHByb2plY3QtaXRlbVwiLCBcImlkXCI6IGAke3Byb2plY3RUaXRsZSB9LWdvYWxgfSk7XG4gICAgICAgICAgICBnb2FsLnRleHRDb250ZW50ID0gcHJvai5nZXRHb2FsKCk7XG4gICAgICAgICAgICByZXR1cm4gZ29hbDtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGdvYWwoKSk7IFxuICAgIH1cbiAgICByZW5kZXJEYXRhKCk7XG5cbiAgICAvLyBUYXNrIENvbnRhaW5lclxuICAgIGNvbnN0IHRhc2tzID0gKCkgPT4ge1xuXG4gICAgICAgIC8vIHRvb2x0aXBzIGFuZCBtZW51XG4gICAgICAgIGNvbnN0IHNvcnRNZW51ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVudSA9IG1ha2VNZW51KCdzb3J0JywgJ3NvcnQgdGFza3MnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gZWxlbWVudCgnaDUnLCB7J2NsYXNzJzogJ21lbnUtaXRlbSBtZW51LWhlYWRlcicsICdpZCc6ICdzb3J0LXRlc3QnfSlcbiAgICAgICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdzb3J0JztcbiAgICAgICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuXG4gICAgICAgICAgICBjb25zdCBzb3J0ID0gZWxlbWVudCgnZGl2JywgeydpZCc6ICdzb3J0J30pXG5cblxuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHNvcnRCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBtaW5pU29ydEljb24sICdjbGFzcyc6ICdjb250YWluZXItYnV0dG9uJywgJ2lkJzonbWluaS1zb3J0JywgJ2FsdCc6ICdTb3J0IHRhc2tzJywgJ2RhdGEtc29ydCc6ICcnfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgICBzb3J0LmFwcGVuZENoaWxkKHNvcnRCdXR0b24pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzb3J0LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgICAgICAgIFxuXG4gICAgICAgICAgICBzb3J0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyB0ZXN0aW5nXG4gICAgICAgICAgICAgICAgVUkuc2V0U29ydCgnZGVhZGxpbmUnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcuLicpXG4gICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBzb3J0O1xuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCB0YXNrcyA9IG1ha2VDb250YWluZXIoXCJUYXNrc1wiLCBmaW5pc2hUYXNrc0ljb24pO1xuXG4gICAgICAgIFxuICAgXG4gICAgICBcbiAgICAgICAgY29uc3QgYWRkVGFzayA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzonaW1hZ2UnLCAnc3JjJzogYWRkTWluaVRhc2tJY29uLCAnaWQnOiAnYWRkLXRhc2stYnV0dG9uJywgJ2FsdCc6ICdhZGQgbWluaSB0YXNrJ30pXG4gICAgICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gdGFza3MuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIHRpdGxlQ29udGFpbmVyLmluc2VydEJlZm9yZShzb3J0TWVudSgpLCB0aXRsZUNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCk7IFxuICAgICAgICAvL2NvbnN0IG1pbmlUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3MtdGl0bGUtY29udGFpbmVyXCIpO1xuICAgICAgICAvLyBtaW5pVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc29ydCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RPYmplY3QudGFza3MuZ2V0VGFza0xpc3QoKS5sZW5ndGgpXG5cbiAgICAgICAgdGFza3MuYXBwZW5kQ2hpbGQoYWRkVGFzaylcblxuICAgICAgICAvLyBBdHRhY2hlcyBhIG5ldyB0YXNrIHRvIGJvdGggdGhlIERPTSBlbGVtZW50IGFuZCBQcm9qZWN0IE9iamVjdHNcblxuICAgICAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUsICkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL2NyZWF0ZVRhc2soZS50YXJnZXQucGFyZW50Tm9kZSwgcHJvamVjdE9iamVjdCk7XG4gICAgICAgICAgICBjcmVhdGVUYXNrKHByb2plY3RPYmplY3QpO1xuICAgICAgICAgICAgcmVuZGVyVGFza0xpc3QocHJvamVjdE9iamVjdCk7XG4gIFxuICAgICAgICB9KVxuXG4gICAgICAgIFxuXG4gICAgICAgIHJldHVybiB0YXNrcztcbiAgICB9XG5cblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza3MoKSk7XG4gICBcblxuICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnYnV0dG9uLWJhcicsICdpZCc6ICdwcm9qZWN0LWJ1dHRvbi1iYXInfSk7XG5cbiAgICAgICAgY29uc3QgY2xvc2VQcm9qZWN0ID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogY2xvc2VQcm9qZWN0SWNvbiwnY2xhc3MnOiAncHJvamVjdC1idXR0b24nLCAnaWQnOiAnY2xvc2UtcHJvamVjdCcsICd2YWx1ZSc6ICdDbG9zZSd9KTtcbiAgICAgICAgY29uc3QgZWRpdFByb2plY3QgPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBlZGl0UHJvamVjdEljb24sICdjbGFzcyc6ICdwcm9qZWN0LWJ1dHRvbicsICdpZCc6ICdlZGl0LXByb2plY3QnLCAndmFsdWUnOiAnRWRpdCd9KVxuICAgICAgICBlZGl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIFxuXG4gICAgICAgIGVkaXRQcm9qZWN0Qm94KHByb2plY3RPYmplY3QpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlUHJvamVjdClcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0KVxuXG4gICAgICAgIHJldHVybiBidXR0b25Db250YWluZXI7XG4gICAgfVxuICAgIFxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbnMoKSk7XG5cbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGNvbnRlbnQpXG5cbiAgIFxuXG4gICAgXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIFxuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3QgPSByZW5kZXIoKTtcblxuICAgIFxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICBjcmVhdGVMaXN0ZW5lcnMocHJvamVjdE9iamVjdCk7XG4gICAgcmVuZGVyVGFza0xpc3QocHJvamVjdE9iamVjdCk7XG4gIFxuICAgIFxuXG59XG5cbmNvbnN0IGNyZWF0ZVRhc2sgPSAocHJvamVjdCkgPT4ge1xuXG4gICAgY29uc3QgdGFzayA9IFRhc2soKTtcbiAgICB0YXNrLnNldFBhcmVudChwcm9qZWN0KTtcbiAgICBwcm9qZWN0LnRhc2tzLmFkZFRhc2sodGFzayk7XG59XG5cbi8vIFByb2ogaXMgb3JpZ2luYWwgcHJvamVjdCBiZWluZyBlZGl0ZWQ7XG5jb25zdCBlZGl0UHJvamVjdEJveCA9IChwcm9qKSA9PiB7XG5cbiAgICAvLyBDcmVhdGUgdGVtcG9yYXJ5IHByb2plY3QgdG8gc2F2ZSB0bywgYWxsb3cgZm9yIGZ1dHVyZSByZWZhY3RvcmluZ1xuICAgIGNvbnN0IHRlbXBQcm9qID0gUHJvamVjdCgpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wUHJvai5jb250ZW50O1xuXG4gICAgLy8gQ3JlYXRlIHNhdmUgYnV0dG9uIGFuZCBoaWRlIGVkaXQgYnV0dG9uXG4gICAgY29uc3QgYnV0dG9uQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1iYXInKTtcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdCcpO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2ltYWdlJywgJ3NyYyc6IHNhdmVQcm9qZWN0SWNvbiwgJ2NsYXNzJzogJ3Byb2plY3QtYnV0dG9uIGVkaXQtYnV0dG9uJywgJ2lkJzogJ3NhdmUtcHJvamVjdC1idXR0b24nLCAndmFsdWUnOiAnU2F2ZSd9KTtcbiAgICBcbiAgICAvLyBDb3B5IGNvbnRlbnQgdG8gdGVtcG9yYXJ5IHByb2plY3Qgb2JqZWN0XG4gICAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICBjb250ZW50LnNldFRpdGxlKG5ld1RpdGxlLnZhbHVlKTtcbiAgICAgICAgY29udGVudC5zZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbi52YWx1ZSk7XG4gICAgICAgIGNvbnRlbnQuc2V0R29hbChuZXdHb2FsLnZhbHVlKTtcbiAgICAgICAgc2F2ZUJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICAgICAgICBzYXZlVG9Qcm9qZWN0KCk7ICBcblxuICAgIH0pXG5cbiAgICAvLyBTYXZlIHRlbXBvcmFyeSBwcm9qZWN0IGNvbnRlbnQgdG8gb3JpZ2luYWwgcHJvamVjdCBhbmQgcmVmcmVzaFxuICAgIC8vIFRoZSBleHRyYSBzdGVwIG9mIGNyZWF0aW5nIGEgdGVtcG9yYXJ5IHByb2plY3QgaXMgZm9yIGZ1dHVyZSBlZGl0YWJpbGl0eS9yZWZhY3RvcmluZ1xuICAgIGNvbnN0IHNhdmVUb1Byb2plY3QgPSAoKSA9PiB7XG5cbiAgICAgICAgcHJvai5jb250ZW50LnNldFRpdGxlKGNvbnRlbnQuZ2V0VGl0bGUoKSk7XG4gICAgICAgIHByb2ouY29udGVudC5zZXREZXNjcmlwdGlvbihjb250ZW50LmdldERlc2NyaXB0aW9uKCkpO1xuICAgICAgICBwcm9qLmNvbnRlbnQuc2V0R29hbChjb250ZW50LmdldEdvYWwoKSk7XG4gICAgICAgIFxuICAgICAgICBjbG9zZVByb2plY3QocHJvaik7XG4gICAgICAgIHJlbmRlclByb2plY3QocHJvaik7XG4gICAgfVxuXG5cbiAgICBidXR0b25CYXIuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG5cblxuICAgIC8vIEZ1bmN0aW9ucyByZXR1cm4gRE9NIG9iamVjdCwgbm90IGl0cyBjb250ZW50IGV4cGxpY2l0ZWx5XG4gICAgY29uc3QgbmV3VGl0bGUgPSBlZGl0VGl0bGUoJ3Byb2plY3QnKTtcbiAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IGVkaXREZXNjcmlwdGlvbigncHJvamVjdCcpO1xuICAgIGNvbnN0ICBuZXdHb2FsID0gZWRpdEdvYWwoJ3Byb2plY3QnKTtcbiAgICAgICBcbn1cblxuLy8gRW5hYmxlIGVkaXRpbmcgb2YgdGl0bGUgb2YgcHJvamVjdC4gUmV0dXJucyBET00gT2JqZWN0LiBUYXJnZXQgaXMgc3RyaW5nIGVpdGhlciAncHJvamVjdCcgb3IgJ3Rhc2snXG5jb25zdCBlZGl0VGl0bGUgPSAodGFyZ2V0KSA9PiB7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldH0tdGl0bGVgKTtcbiAgIFxuICAgIGNvbnN0IGVkaXRUaXRsZUJveCA9IGVsZW1lbnQoJ3RleHRhcmVhJywgIHsnbmFtZSc6ICd0ZXh0YXJlYScsICdwbGFjZWhvbGRlcic6IHRpdGxlLmlubmVyVGV4dCwgXCJjbGFzc1wiOiBgZWRpdC0ke3RhcmdldH0tYm94ICR7dGFyZ2V0fS10aXRsZSAke3RhcmdldH0taXRlbWB9KTtcbiAgICBlZGl0VGl0bGVCb3gudGV4dENvbnRlbnQgPSB0aXRsZS5pbm5lclRleHQ7XG4gICAgdGl0bGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWRpdFRpdGxlQm94LCB0aXRsZSk7XG4gICAgY29uc29sZS5sb2coZWRpdFRpdGxlQm94LnRleHRDb250ZW50KVxuICAgIHRpdGxlLnJlbW92ZSgpO1xuICAgIHJldHVybiBlZGl0VGl0bGVCb3g7XG5cbn1cblxuLy8gRW5hYmxlIGVkaXRpbmcgb2YgZGVzY3JpcHRpb24vY29udGVudCBvZiBwcm9qZWN0LiBSZXR1cm5zIERPTSBvYmplY3QuXG5jb25zdCBlZGl0RGVzY3JpcHRpb24gPSAodGFyZ2V0KSA9PiB7XG4gICAgXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldH0tZGVzY2ApO1xuICAgIFxuICAgIFxuICAgIGNvbnN0IGVkaXREZXNjcmlwdGlvbkJveCA9IGVsZW1lbnQoJ3RleHRhcmVhJywgeyduYW1lJzondGV4dGFyZWEnLCAncGxhY2Vob2xkZXInOiBkZXNjLmlubmVyVGV4dCwgJ2NsYXNzJzogYGVkaXQtJHt0YXJnZXR9LWJveCAke3RhcmdldH0taXRlbSAke3RhcmdldH0tZGVzY2B9KTtcbiAgICBlZGl0RGVzY3JpcHRpb25Cb3gudGV4dENvbnRlbnQgPSBkZXNjLmlubmVyVGV4dDtcbiAgICBkZXNjLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVkaXREZXNjcmlwdGlvbkJveCwgZGVzYyk7XG4gICAgZGVzYy5yZW1vdmUoKTtcbiAgICByZXR1cm4gZWRpdERlc2NyaXB0aW9uQm94O1xuXG59XG5cbi8vIEVuYWJsZSBlZGl0aW5nIG9mIGdvYWwgY29udGVudC4gIFJldHVybnMgRE9NIG9iamVjdC5cbmNvbnN0IGVkaXRHb2FsID0gKHRhcmdldCkgPT4ge1xuXG4gICAgY29uc3QgZ29hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldH0tZ29hbGApO1xuICAgIGNvbnN0IGdvYWxUZXh0ID0gZ29hbC5pbm5lclRleHQ7XG4gICAgY29uc29sZS5sb2coZ29hbFRleHQpO1xuICAgIGNvbnN0IGVkaXRHb2FsQm94ID0gZWxlbWVudCgndGV4dGFyZWEnLCB7J3BsYWNlaG9sZGVyJzogZ29hbFRleHQsICdjbGFzcyc6IGBlZGl0LSR7dGFyZ2V0fS1ib3ggJHt0YXJnZXR9LWdvYWwgJHt0YXJnZXR9LWl0ZW1gfSlcbiAgICBlZGl0R29hbEJveC50ZXh0Q29udGVudCA9IGdvYWxUZXh0O1xuICAgIGdvYWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWRpdEdvYWxCb3gsIGdvYWwpO1xuICAgIGdvYWwucmVtb3ZlKCk7XG4gICAgcmV0dXJuIGVkaXRHb2FsQm94O1xuXG59XG5cblxuLy8gRm9yIHNvcnRpbmcgdGhlIGxpc3Qgb2YgdGFza3MgaW4gYSBwcm9qZWN0LiAgbWV0aG9kIGlzIGFuIG9wdGlvbmFsIG92ZXJyaWRlXG5jb25zdCBzb3J0TGlzdCA9IChsaXN0LCBtZXRob2QpID0+IHtcblxuICAgIGNvbnNvbGUubG9nKFwibWV0aG9kIGlzIFwiICsgbWV0aG9kKVxuICAgIGlmIChtZXRob2QgPT0gbnVsbCl7XG4gICAgICAgIG1ldGhvZCA9IFVJLmdldFNvcnQoKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIm1ldGhvZCBpcyBcIiArIG1ldGhvZClcbiAgICBjb25zb2xlLmxvZyhsaXN0KTtcbiAgICBzd2l0Y2gobWV0aG9kKXtcblxuICAgICAgICBjYXNlICdwcmlvcml0eSc6XG4gICAgICAgICAgICByZXR1cm4gbGlzdC5zb3J0KChhLGIpID0+IHsgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuZ2V0UHJpb3JpdHkoKSAtIGIuZ2V0UHJpb3JpdHkoKSB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICBjYXNlICdkZWFkbGluZSc6XG4gICAgICAgICAgICByZXR1cm4gbGlzdC5zb3J0KChhLGIpID0+IHsgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuZ2V0RGVhZGxpbmUoKSAtIGIuZ2V0RGVhZGxpbmUoKSB9KTtcbiAgXG4gICAgICAgIGNhc2UgJ3VyZ2VuY3knOlxuICAgICAgICAgICAgcmV0dXJuIGxpc3Quc29ydCgoYSxiKSA9PiB7IFxuICAgICAgICAgICAgICAgIHJldHVybiBhLmdldFVyZ2VuY3koKSAtIGIuZ2V0VXJnZW5jeSgpIH0pO1xuICAgICAgICAgICBcbiAgICAgICAgY2FzZSAndGl0bGUnOlxuICAgICAgICAgICAgcmV0dXJuIGxpc3Quc29ydCgoYSwgYikgPT4gYS5nZXRUaXRsZSgpLmxvY2FsZUNvbXBhcmUoYi5nZXRUaXRsZSgpKSk7XG4gICAgfVxuXG5cbiAgICByZXR1cm47XG5cblxufVxuXG4vL0hhbmRsZXMgZGlzcGxheSBvZiAnVGFza3MgbGlzdCdcbmNvbnN0IHJlbmRlclRhc2tMaXN0ID0gKHByb2plY3QpID0+IHtcblxuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250YWluZXInKVxuICAgIGNvbnN0IGxpc3QgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ3Rhc2stbGlzdCd9KTtcbiAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGxpc3QsIHBhcmVudC5sYXN0RWxlbWVudENoaWxkKVxuICAgIGNvbnN0IG1pbmlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1pbmktdGFzaycpO1xuICAgIG1pbmlMaXN0LmZvckVhY2gobWluaSA9PiBtaW5pLnJlbW92ZSgpKVxuXG4gICAgLy8gU29ydCBsaXN0IGJhc2VkIG9uIHVzZXIgb3B0aW9uXG4gICAgbGV0IHRhc2tMaXN0ID0gcHJvamVjdC50YXNrcy5nZXRUYXNrTGlzdCgpO1xuICAgLyogY29uc29sZS5sb2codGFza0xpc3QpXG4gICAgdGFza0xpc3Quc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBzb3J0ID0gc29ydFRhc2tzKCk7XG4gICAgICAgIHJldHVybiBhLnNvcnQgLSBiLnNvcnRcbiAgICB9KTsqL1xuXG4gICAgc29ydExpc3QodGFza0xpc3QpO1xuXG4gICAgY29uc29sZS5sb2codGFza0xpc3QpXG4gICAgZm9yIChsZXQgdGFzayBvZiB0YXNrTGlzdCl7XG4gICAgICAgIC8vY29uc29sZS5sb2codGFzayk7XG4gICAgICAgIGNvbnN0IG1pbml0YXNrID0gY3JlYXRlTWluaVRhc2socHJvamVjdCwgdGFzayk7XG5cblxuICAgICAgICBpZiAodGFzay5nZXRTdGF0dXMoKSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBtaW5pdGFzay5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTsgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgbWluaXRhc2suY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7XG5cbiAgICAgIFxuICAgICAgXG4gICAgICAgbGlzdC5hcHBlbmRDaGlsZChtaW5pdGFzayk7XG4gICAgfVxuXG5cbiAgICBcbn1cblxuXG5cbi8vIERlbGV0ZXMgdGFzayBmcm9tIHBhcmVudCBwcm9qZWN0XG5jb25zdCBkZWxldGVUYXNrID0gKHRhc2spID0+IHtcblxuICAgIGNvbnNvbGUubG9nKHRhc2spO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IHRhc2suZ2V0UGFyZW50KCk7XG4gICAgcHJvamVjdC50YXNrcy5yZW1vdmVUYXNrKHRhc2spO1xuICAgIHJlbmRlclRhc2tMaXN0KHByb2plY3QpO1xufVxuXG4vLyBEZWxldGUgdGhlIERPTSBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0YXNrXG5cblxuY29uc3QgdG9nZ2xlVGFza1N0YXR1cyA9ICh0YXNrKSA9PiB7XG5cbiAgICBpZiAodGFzayA9PSBudWxsKSByZXR1cm47XG5cbiAgICBpZiAodGFzay5nZXRTdGF0dXMoKSA9PT0gZmFsc2Upe1xuICAgICAgICB0YXNrLnNldFN0YXR1cyh0cnVlKTtcbiAgICAgICAgdGFzay5nZXRQYXJlbnQoKS50YXNrcy5jb21wbGV0ZVRhc2sodGFzayk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHRhc2suc2V0U3RhdHVzKGZhbHNlKVxuICAgICAgICB0YXNrLmdldFBhcmVudCgpLnRhc2tzLnJlbW92ZUNvbXBsZXRlKHRhc2spO1xuICAgIH1cbiAgXG5cbiAgICByZW5kZXJUYXNrTGlzdCh0YXNrLmdldFBhcmVudCgpKTtcblxufVxuXG4vLyBDcmVhdGVzIGEgbWluaS10YXNrIERPTSBlbGVtZW50IG91dCBvZiB0YXNrIG9iamVjdFxuY29uc3QgY3JlYXRlTWluaVRhc2sgPSAocHJvamVjdCwgdGFzaykgPT4ge1xuICAgIFxuICAgIGNvbnN0IG1pbml0YXNrID0gZWxlbWVudCgnZGl2JywgeydjbGFzcyc6J21pbmktdGFzayd9KVxuICAgIG1pbml0YXNrLmNsYXNzTGlzdC5hZGQocHJpb3JpdHlTdHlsZSh0YXNrKS5wcmlvcml0eVZhbHVlKTtcbiAgICBpZiAodGFzay5nZXRTdGF0dXMoKSA9PT0gdHJ1ZSl7XG4gICAgICAgIG1pbml0YXNrLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICAgICAgIFxuICAgIH1cblxuICAgIC8vY29uc29sZS5sb2codGFzayk7XG4gICAgLy8gRGVsZXRlIG1pbmlcbiAgICBjb25zdCByZW1vdmVNaW5pID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogbWluaURlbGV0ZUljb24sICdjbGFzcyc6ICdtaW5pLWJ1dHRvbiBtaW5pLWRlbGV0ZScsICd2YWx1ZSc6ICctJ30pXG4gICAgLy8gUGFzcyBvbiBET00gb2YgTWluaWxpc3QgYW5kIFRhc2sgdG8gZGVsZXRlXG4gICAgcmVtb3ZlTWluaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBkZWxldGVNaW5pKHRhc2spKTtcbiAgICAvLyBNYXJrIG1pbmkgYXMgY29tcGxldGVcbiAgICBjb25zdCBmaW5pc2hNaW5pID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogbWluaUNoZWNrYm94LCAnY2xhc3MnOiAnbWluaS1idXR0b24gbWluaS1maW5pc2gnLCAndmFsdWUnOiAnRid9KTtcbiAgICBmaW5pc2hNaW5pLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRvZ2dsZVRhc2tTdGF0dXModGFzaykpO1xuICAgIC8vT3BlbiBUYXNrIGluIGZ1bGwgdmlld1xuICAgIGNvbnN0IG1pbmlCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdidXR0b24nLCAnY2xhc3MnOiAnbWluaS1idXR0b24gbWluaS10aXRsZScsICd2YWx1ZSc6IGAke3Rhc2suZ2V0VGl0bGUoKX1gfSk7XG4gICAgICAgIFxuICAgIFxuICAgIFxuXG4gICAgbWluaUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlclRhc2sodGFzaykpXG4gICAgbWluaXRhc2suYXBwZW5kQ2hpbGQocmVtb3ZlTWluaSk7XG4gICAgbWluaXRhc2suYXBwZW5kQ2hpbGQobWluaUJ1dHRvbik7XG4gICAgbWluaXRhc2suYXBwZW5kQ2hpbGQoZmluaXNoTWluaSlcbiAgICBsZXQgYmdjb2xvciA9IG1pbml0YXNrLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICBjb25zdCB0aXRsZSA9IGVsZW1lbnQoJ2g0JywgeydjbGFzcyc6ICdtaW5pLXRhc2stdGl0bGUnfSlcbiAgICBcbiAgICBcbiAgICBtaW5pdGFzay5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cblxuICAgIHJldHVybiBtaW5pdGFzaztcbn1cblxuY29uc3QgZGVsZXRlTWluaSA9ICh0YXNrKSA9PiB7XG5cbiAgICBcbiAgICBjb25zdCBwcm9qZWN0ID0gdGFzay5nZXRQYXJlbnQoKTtcblxuICAgIGNvbnNvbGUubG9nKHByb2plY3QudGFza3MuZ2V0VGFza0xpc3QoKSk7XG4gICAgcHJvamVjdC50YXNrcy5yZW1vdmVUYXNrKHRhc2spO1xuICAgIFxuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2snKTtcbiAgICBpZiAodGFza0NhcmQgIT0gbnVsbCl7XG4gICAgICAgIGlmICh0YXNrQ2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSA9PSB0YXNrLmdldElEKCkpIGNsb3NlVGFzayh0YXNrQ2FyZCk7XG4gICAgfVxuXG4gICAgLy8gUmVmcmVzaCB0YXNrIGxpc3RcbiAgICByZW5kZXJUYXNrTGlzdChwcm9qZWN0KTtcblxuXG59XG5cblxuXG5cbmNvbnN0IGdldFByb2plY3RGcm9tVXNlciA9ICgpID0+IHtcblxuXG59XG5cblxuLy8gQnV0dG9ucyBhbmQgTGlzdGVuZXJzXG5jb25zdCBjcmVhdGVMaXN0ZW5lcnMgPSAocHJvamVjdCkgPT4ge1xuXG4gICAgLy8gQ3JlYXRlIGxpc3RlbmVycyBmb3IgYnV0dG9uc1xuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0Jyk7XG4gICAgLy9jb25zb2xlLmxvZyhwcm9qZWN0LmNvbnRlbnQuZ2V0UHJpb3JpdHkoKSlcbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1wcm9qZWN0Jyk7XG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZVByb2plY3QoKSk7XG4gICAgLy8gQ29udGVudCBidXR0b24gKGV4cGFuZCBjb250ZW50KVxuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzLWJ1dHRvbicpO1xuICAgIHRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgIHNldEFsbFRhc2tzKHByb2plY3QpO1xuXG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBkZWFkbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWFkbGluZS1idXR0b24nKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1idXR0b24ucHJvamVjdC1pdGVtJyk7XG4gICAgcHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gICAgICAgIGN5Y2xlUHJpb3JpdHkocHJvamVjdCk7XG5cbiAgICB9KSAgIFxuXG59XG5cbmNvbnN0IGN5Y2xlUHJpb3JpdHkgPSAocHJvamVjdCkgPT4ge1xuXG4gICAgY29uc3QgY3VycmVudFByaW9yaXR5ID0gcHJvamVjdC5jb250ZW50LmdldFByaW9yaXR5KCk7XG4gICAgLy8gIGNvbnNvbGUubG9nKGN1cnJlbnRQcmlvcml0eSk7XG5cbiAgICAgXG4gICAgICBjb25zdCB1cGRhdGVkUHJpb3JpdHkgPSAoKChjdXJyZW50UHJpb3JpdHkpICsxICkgJSAzKSArIDE7XG4gICAgICBwcm9qZWN0LmNvbnRlbnQuc2V0UHJpb3JpdHkodXBkYXRlZFByaW9yaXR5KTtcbiAgICAgIGNsb3NlUHJvamVjdCgpO1xuXG4gICAgY29uc3QgcHJvamVjdERPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Jyk7XG4gICAgaWYgKHByb2plY3RET00gIT0gbnVsbCkgcmVuZGVyUHJvamVjdChwcm9qZWN0KTtcbiAgICAgIFxufVxuXG5cblxuLy8gVG9nZ2xlIGNvbXBsZXRlZCBzdGF0dXMgZm9yIGFsbCB0YXNrcyBpbiBhIHByb2plY3RcbmNvbnN0IHNldEFsbFRhc2tzID0gKHByb2plY3QpID0+IHtcblxuICAgIGxldCBzdGF0dXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRhc2tMaXN0ID0gcHJvamVjdC50YXNrcy5nZXRUYXNrTGlzdCgpO1xuICAgIGNvbnN0IGZpbmlzaGVkTGlzdCA9IHByb2plY3QudGFza3MuZ2V0Q29tcGxldGVkVGFza3MoKTtcblxuICAgIGlmIChwcm9qZWN0LnRhc2tzLmdldFRhc2tMaXN0KCkubGVuZ3RoICE9IHByb2plY3QudGFza3MuZ2V0Q29tcGxldGVkVGFza3MoKS5sZW5ndGgpe1xuICAgICAgICBzdGF0dXMgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmKGZpbmlzaGVkTGlzdC5sZW5ndGggPT09IDApe1xuICAgICAgICBzdGF0dXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHByb2plY3QudGFza3MuY2xlYXJGaW5pc2hlZExpc3QoKTtcbiAgICBcbiAgICBmb3IgKGxldCB0YXNrIG9mIHRhc2tMaXN0KXtcblxuICAgICAgICB0YXNrLnNldFN0YXR1cyhzdGF0dXMpO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdC5sZW5ndGgpO1xuICAgICAgICBjb25zb2xlLmxvZyhmaW5pc2hlZExpc3QubGVuZ3RoKTtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tzLmNvbXBsZXRlVGFzayh0YXNrKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdERvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Jyk7XG4gICAgaWYgKHByb2plY3REb20gIT0gbnVsbCl7ICAgIFxuICAgICAgICBjbG9zZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgIHJlbmRlclByb2plY3QocHJvamVjdCk7XG4gICAgfVxuXG5cbn1cblxuXG5jb25zdCBjbG9zZVByb2plY3QgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKVxuICAgIFxuICAgIC8vUmVlbmFibGUgaW50ZXJhY3Rpb24gXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIHByb2plY3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBcbiAgICBpZiAocHJvamVjdCAhPSBudWxsKSBwcm9qZWN0LnJlbW92ZSgpO1xuXG4gICAgcmVuZGVyUHJvamVjdExpc3QoKTtcblxuXG5cbn1cblxuY29uc3QgZmluaXNoUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG5cbiAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBwcm9qZWN0LnRhc2tzLmdldFRhc2tMaXN0KCk7XG5cbiAgICBcbiAgICBzZXRBbGxUYXNrcyhwcm9qZWN0KTtcblxuICAgIHJlbmRlclByb2plY3RMaXN0KCk7XG5cbn1cblxuY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG5cbiAgICBwcm9qZWN0TGlzdC5yZW1vdmVQcm9qZWN0KCk7XG5cblxufVxuXG5jb25zdCBzZXR0aW5ncyA9ICgpID0+IHtcblxuICAgIGxldCBzb3J0ID0gJ3ByaW9yaXR5JztcblxuXG4gICAgY29uc3Qgc2V0U29ydCA9IChuZXdTb3J0KSA9PiBzb3J0ID0gbmV3U29ydDtcbiAgICBjb25zdCBnZXRTb3J0ID0gKCkgPT4gc29ydDtcblxuXG4gICAgcmV0dXJuIHtzb3J0LCBnZXRTb3J0LCBzZXRTb3J0fVxuXG59XG5cblxuXG5cblxuY29uc3QgYWRkUHJvamVjdFBvcFVwID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGJ1dHRvbiA9IGVsZW1lbnQoXCJidXR0b25cIiwge1wiaWRcIjogXCJwcm9qZWN0LWJ1dHRvblwiLCBcInZhbHVlXCI6IFwiUHJlc3NpdFwiLFwidGV4dENvbnRlbnRcIjogXCJQcmVzc1wifSlcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgXG4gICAgfSlcblxuXG4gICAgcmV0dXJuIGJ1dHRvbjtcblxufVxuXG5cbmV4cG9ydCB7c2V0dGluZ3MsIGRlbGV0ZVByb2plY3QsIGN5Y2xlUHJpb3JpdHksIGVkaXRQcm9qZWN0Qm94LCBkZWxldGVUYXNrLCBmaW5pc2hQcm9qZWN0LCBjbG9zZVByb2plY3QsIHJlbmRlclByb2plY3QsIHJlbmRlclRhc2ssIGFkZFByb2plY3RQb3BVcCBhcyBhZGRQcm9qZWN0QnV0dG9uLCBjcmVhdGVMaXN0ZW5lcnMsIGVkaXRUaXRsZSwgZWRpdERlc2NyaXB0aW9uLCBlZGl0R29hbCwgY3JlYXRlTWluaVRhc2t9IiwiXG5cblxuXG5cblxuY29uc3QgVUkgPSAoKCkgPT4ge1xuXG5cblxuICAgICAgICBsZXQgc29ydFR5cGUgPSAncHJpb3JpdHknXG4gICAgICAgIGxldCBhc2NlbmRpbmcgPSB0cnVlXG5cbiAgICAgICAgY29uc3QgZ2V0U29ydCA9ICgpID0+ICBzb3J0VHlwZTtcbiAgICAgICAgY29uc3Qgc2V0U29ydCA9IChuZXdTb3J0KSA9PiBzb3J0VHlwZSA9IG5ld1NvcnRcbiAgICBcbiAgICAgIC8vICBnZXRBc2NlbmRpbmc6ICgpID0+IGFzY2VuZGluZ1xuICAgICAgLy8gIHNldEFzY2VuZGluZzogKG5ld0FzY2VuZGluZykgPT4gYXNjZW5kaW5nID0gbmV3QXNjZW5kaW5nXG5cblxuICAgICAgICByZXR1cm4ge2dldFNvcnQsIHNldFNvcnR9XG5cbn0pKCk7XG5cbmV4cG9ydCB7IFVJfSIsIi8vICBUbyBkbyBvYmplY3QsIGNyZWF0aW9uIGFuZCBtb2RpZmljYXRpb25cblxuLy8gSGVscGVyIGZ1bmN0aW9ucyBsb2NhdGVkIGluIHV0aWxzIGZpbGVcbmltcG9ydCB7IGlzVGhpc1NlY29uZCwgaXNFcXVhbCwgZm9ybWF0RGlzdGFuY2UsIGZvcm1hdElTTywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgc2V0QXR0cmlidXRlcywgY3JlYXRlRWxlbWVudCBhcyBlbGVtZW50IH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgdGFzayBmcm9tIFwiLi9kZWZhdWx0LXRhc2suanNvblwiO1xuLy9pbXBvcnQgdGFzayBmcm9tIFwiLi9leGFtcGxlLXRhc2suanNvblwiO1xuLy8gQ29uc3RhbnRzXG5cbi8vIEZhY3RvcnkgdG8gY3JlYXRlIGEgVG9EbyBvYmplY3RcbmNvbnN0IGNyZWF0ZVRvRG8gPSAodGl0bGUgPSB0YXNrLnRpdGxlLCBkZWFkbGluZSA9IHRhc2suZGVhZGxpbmUsIHByaW9yaXR5ID0gdGFzay5wcmlvcml0eSwgZGVzY3JpcHRpb24gPSB0YXNrLmRlc2NyaXB0aW9uLCBnb2FsID0gdGFzay5nb2FsLCB0YXNrSUQgPSB0YXNrLnRhc2tJRCwgY29tcGxldGVkID0gdGFzay5jb21wbGV0ZWQpID0+IHtcblxuICAgIGRlYWRsaW5lID0gbmV3IERhdGUoZGVhZGxpbmUpO1xuICAgIFxuICAgIC8vIFByb2plY3Qgb2JqZWN0IHRoYXQgb3ducyB0aGlzIHRhc2tcbiAgICBsZXQgcGFyZW50ID0gbnVsbDtcbiAgXG4gICAgLy8gVGltZS9EYXRlIGJhc2VkIGF0dHJpYnV0ZXNcbiAgICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZShEYXRlLm5vdygpKVxuICAgIGNvbnN0IHRpbWVSZW1haW5pbmcgPSBkZWFkbGluZSAtIERhdGUubm93KCk7XG5cblxuICAgIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgICAgIHRpdGxlID0gbmV3VGl0bGU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcblxuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb25cbiAgICB9XG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IHNldERlYWRsaW5lID0gKG5ld0RlYWRsaW5lKSA9PiBkZWFkbGluZSA9IG5ld0RlYWRsaW5lO1xuICAgIGNvbnN0IGdldERlYWRsaW5lID0gKCkgPT4gZGVhZGxpbmU7XG5cbiAgICBcblxuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgfVxuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG4gXG4gICAgY29uc3Qgc2V0R29hbCA9IChuZXdHb2FsKSA9PiBnb2FsID0gbmV3R29hbDtcbiAgICBjb25zdCBnZXRHb2FsID0gKCkgPT4gZ29hbDtcbiBcbiAgICBjb25zdCBzZXRQYXJlbnQgPSAobmV3UGFyZW50KSA9PiBwYXJlbnQgPSBuZXdQYXJlbnQ7XG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKCkgPT4gcGFyZW50O1xuXG4gICAgY29uc3Qgc2V0SUQgPSAobmV3SUQpID0+IHRhc2tJRCA9IG5ld0lEO1xuICAgIGNvbnN0IGdldElEID0gKCkgPT4gdGFza0lEO1xuXG5cbiAgICBjb25zdCBzZXRTdGF0dXMgPSAobmV3U3RhdHVzKSA9PiBjb21wbGV0ZWQgPSBuZXdTdGF0dXM7XG4gICAgY29uc3QgZ2V0U3RhdHVzID0gKCkgPT4gY29tcGxldGVkO1xuXG4gICAgY29uc3QgZ2V0Q29udGVudCA9ICgpID0+IHtcblxuICAgICAgICByZXR1cm4ge3RpdGxlLCBkZWFkbGluZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9ufTtcbiAgICB9XG5cblxuICAgIHJldHVybiAoe3NldFN0YXR1cywgZ2V0U3RhdHVzLCBnZXRJRCwgc2V0SUQsIHNldFBhcmVudCwgZ2V0UGFyZW50LCBzZXRHb2FsLCBnZXRHb2FsLCBzZXREZWFkbGluZSwgZ2V0RGVhZGxpbmUsIGdldFByaW9yaXR5LCBzZXRQcmlvcml0eSwgdGl0bGUsIGRlYWRsaW5lLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCAgY29udGVudCwgc3RhcnREYXRlLCB0aW1lUmVtYWluaW5nLHNldERlc2NyaXB0aW9uLCBnZXREZXNjcmlwdGlvbiwgc2V0VGl0bGUsIGdldFRpdGxlLCBnZXRDb250ZW50LH0pO1xuXG59XG5cblxuLy8gTG93ZXIgdXJnZW5jeSBpcyBjb25zaWRlcmVkIG1vcmUgdXJnZW50LiBDbG9zZXN0IHRvIHplcm8gaXMgbW9zdCB1cmdlbnQuXG5jb25zdCBnZXRUYXNrVXJnZW5jeSA9ICh0b0RvT2JqZWN0KSA9PiB7XG4gICAgICAgIFxuICAgIC8vIEdldCBkYXlzIG9ubFxuICAgIGNvbnN0IHVyZ2VuY3kgPSBmb3JtYXQodG9Eb09iamVjdC50aW1lUmVtYWluaW5nLCBcImRkXCIpO1xuICAgIGNvbnNvbGUubG9nKHVyZ2VuY3kgKiB0b0RvT2JqZWN0LnByaW9yaXR5KTtcblxuICAgIHJldHVybiB1cmdlbmN5O1xufVxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCB7Y3JlYXRlVG9EbyBhcyBUYXNrLCBnZXRUYXNrVXJnZW5jeSBhcyBnZXRVcmdlbmN5fTtcblxuXG5cbiIsIlxuaW1wb3J0IGRlZmF1bHRJY29uIGZyb20gJy4vaW1nL2Nsb3NlLXRhc2suc3ZnJztcblxuLy8gSGVscGVyIGZ1bmN0aW9uc1xuXG4vLyBjcmVhdGUgZWxlbWVudCBvZiBzcGVjaWZpYyB0eXBlLCB3aXRoIGF0dHJpYnV0ZXMgYXR0YWNoZWRcbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodHlwZSwgYXR0cmlidXRlcykgPT4ge1xuICAgIFxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YCk7XG4gICAgaWYgKGF0dHJpYnV0ZXMgPT0gbnVsbCkgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gICAgc2V0QXR0cmlidXRlcyhuZXdFbGVtZW50LCBhdHRyaWJ1dGVzKTtcbiAgICBcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuLy8gZm9yIGFwcGVuZGluZyBtdWx0aXBsZSBjaGlsZHJlbiBpbiBvbmUgY2FsbFxuY29uc3QgYXBwZW5kQ2hpbGRyZW4gPSAocGFyZW50LCAuLi5jaGlsZHJlbikgPT4ge1xuXG4gICAgXG4gICAgY29uc29sZS5sb2cocGFyZW50KTtcbiAgICBjb25zb2xlLmxvZyhjaGlsZHJlbilcblxuICAgIGNvbnN0IGNoaWxkQ291bnQgPSBjaGlsZHJlbi5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbil7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG5cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhwYXJlbnQpO1xuICAgLy8gcmV0dXJuIGNoaWxkQ291bnQ7XG59XG5cblxuXG5jb25zdCBnZXREYXRlID0gKCkgPT4ge1xuXG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgZGQgPSB0b2RheS5nZXREYXRlKCk7XG4gICAgbGV0IG1tID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7IC8vIEluZGV4IGF0IHplcm9cbiAgICBjb25zdCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcblxuICAgIGlmIChkZCA8IDEwKXtcbiAgICAgICAgZGQgPSAnMCcgKyBkZDtcbiAgICB9XG4gICAgaWYgKG1tIDwgMTApe1xuICAgICAgICBtbSA9ICcwJyArIG1tO1xuICAgIH1cblxuICAgIHRvZGF5ID0gYCR7eXl5eX0tJHttbX0tJHtkZH1gO1xuXG4gICAgcmV0dXJuIHRvZGF5O1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpXG57XG4gICAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpXG4gICAgfSk7XG59XG5cbi8vIHR1cm4gaW50byBvYmplY3RcbmZ1bmN0aW9uIGNyZWF0ZUltYWdlTGluayh1cmwsIGltYWdlLCBhbHQpe1xuXG4gICAgXG4gICAgY29uc3QgYWhyZWYgPSBjcmVhdGVFbGVtZW50KFwiYVwiLCB7XCJjbGFzc1wiOiBcImxpbmtcIiwgXCJocmVmXCI6IHVybH0pO1xuICAgIGNvbnN0IGxpbmtJbWFnZSA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1wiY2xhc3NcIjogXCJpbWFnZS1saW5rXCIsIFwic3JjXCI6IGltYWdlLCBcImFsdFwiOiBhbHR9KTtcblxuICAgIGFocmVmLmFwcGVuZENoaWxkKGxpbmtJbWFnZSk7XG5cbiAgICByZXR1cm4gYWhyZWY7XG4gICAgXG5cbn1cblxuLy8gTWFrZSBhIGdlbmVyaWMgZGlzcGxheSBlbGVtZW50LCB3aXRoIGEgY29udGFpbmVyLCB0aXRsZSwgYW5kIGNvbnRlbnQgc2VjdGlvblxuLy8gSUQgYW5kIGNsYXNzIHdpbGwgYmUgZ2VuZXJhdGVkIGZyb20gbmFtZSAoc3RyaW5nKVxuLy8gW0NvbnRhaW5lcl0tLT4gIFtUaXRsZUNvbnRhaW5lci0tPlRpdGxlK0J1dHRvbl0gKyBDb250ZW50XG5jb25zdCBtYWtlQ29udGFpbmVyID0gKG5hbWUsIGlucHV0SW1hZ2UpID0+IHtcblxuIFxuXG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6IGAke25hbWUudG9Mb3dlckNhc2UoKX0tY29udGFpbmVyYH0pXG4gICAgLy8gVGl0bGUgYW5kIEJ1dHRvblxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6IFwidGl0bGUtY29udGFpbmVyXCIsICdpZCc6IGAke25hbWUudG9Mb3dlckNhc2UoKX0tdGl0bGUtY29udGFpbmVyYH0pO1xuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDQnLCB7J2NsYXNzJzogYCR7bmFtZS50b0xvd2VyQ2FzZSgpfS1oZWFkZXJgfSk7XG4gICAgY29uc3QgdGl0bGVCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBpbnB1dEltYWdlLCAgJ2lkJzogYCR7bmFtZS50b0xvd2VyQ2FzZSgpfS1idXR0b25gLCAnY2xhc3MnOiAnY29udGFpbmVyLWJ1dHRvbiBleHBhbmQtY29udGVudC1idG4nLCB9LCApO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUJ1dHRvbik7XG5cblxuICAgIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogIGAke25hbWUudG9Mb3dlckNhc2UoKX0tY29udGVudGB9KTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmNvbnN0IG1ha2VNZW51ID0gKG1lbnVOYW1lLCB0b29sdGlwVGV4dCkgPT4ge1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdtZW51LWNvbnRhaW5lcid9KTtcbiAgIFxuICAgIGNvbnN0IHRvb2x0aXBDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ3Rvb2x0aXAnfSk7XG4gICAgY29uc3QgdG9vbHRpcCA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCB7J2NsYXNzJzogJ3Rvb2x0aXB0ZXh0JywgJ2lkJzogYCR7bWVudU5hbWV9LXRleHRgfSk7XG4gICAgdG9vbHRpcC50ZXh0Q29udGVudCA9IHRvb2x0aXBUZXh0O1xuICAgIFxuICAgIHRvb2x0aXBDb250YWluZXIuYXBwZW5kQ2hpbGQodG9vbHRpcCk7XG5cbiAgICBjb25zdCBtZW51ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdjb250ZXh0LW1lbnUnLCAnaWQnOiBgJHttZW51TmFtZX0tbWVudWB9KVxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywgeydjbGFzcyc6ICdtZW51LWl0ZW1zIG1lbnUtbGlzdCd9KTtcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtcyk7XG4gICAgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvb2x0aXBDb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51KTtcblxuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcblxufVxuXG4vLyByZXR1cm4gYSByYWRpbyBvYmplY3QgdG8gYmUgYXR0YWNoZWQgdG8gYSBmaWVsZHNldFxuY29uc3QgIG1ha2VSYWRpbyA9IChuYW1lLCBzZWxlY3Rpb24sIGxhYmVsVGV4dCwgY2hlY2tlZCkgPT4ge1xuXG4gICBcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAncmFkaW8tY29udGFpbmVyIGZvcm0tZWxlbWVudCcsICdpZCc6IGAke25hbWV9LWxhYmVsLWNvbnRhaW5lcmB9KTsgICAgICAgICBcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgeydmb3InOiBgJHtuYW1lfWAsIFwiY2xhc3NcIjogXCJmb3JtLWxhYmVsIHJhZGlvLWxhYmVsXCIsIFwiaWRcIjogYCR7bmFtZX0tbGFiZWwgJHtuYW1lfS0ke3NlbGVjdGlvbn1gfSkgICAgXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG4gICAgY29uc3QgcmFkaW8gPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdyYWRpbycsICduYW1lJzogYCR7bmFtZX1gLCAnY2xhc3MnOiBgZm9ybS1pbnB1dCByYWRpby0ke25hbWV9YCwgJ2lkJzogYCR7bmFtZX0tJHtzZWxlY3Rpb259LXJhZGlvYCB9KVxuICAgIGlmIChjaGVja2VkKSByYWRpby5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQocmFkaW8pO1xuXG5cbiAgIFxuXG4gICAgcmV0dXJuIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbn1cblxuXG5cblxuXG5leHBvcnQge21ha2VSYWRpbywgZ2V0RGF0ZSwgc2V0QXR0cmlidXRlcywgY3JlYXRlRWxlbWVudCBhcyBlbGVtZW50LCBjcmVhdGVJbWFnZUxpbmssIG1ha2VDb250YWluZXIsIG1ha2VNZW51LCBhcHBlbmRDaGlsZHJlbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZ2V0VXJnZW5jeSwgVGFza30gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHsgYWRkUHJvamVjdEJ1dHRvbiwgY3JlYXRlTGlzdGVuZXJzLCByZW5kZXJQcm9qZWN0LCByZW5kZXJUYXNrIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgY29udGVudCwgcHJvamVjdENvbnRhaW5lciB9IGZyb20gJy4vY29udGVudCc7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSAnLi9tZW51JztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5cbmJvZHkuaW5zZXJ0QmVmb3JlKG1lbnUoKSwgbWFpbik7XG5tYWluLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIoKSlcbm1haW4uYXBwZW5kQ2hpbGQoY29udGVudCgpKTtcblxuXG5jb25zb2xlLmxvZyhtYWluLnBhcmVudE5vZGUpXG5cblxuLy9jb25zdCB0ZXN0UHJvaiA9IHJlbmRlclByb2plY3QodGVzdFByb2plY3QpO1xuXG5cblxuXG5cblxuLy9jb25zdCBORVdQUk9KID0gUHJvamVjdCgpO1xuXG5cblxuXG4vL2VuZGVyUHJvamVjdChORVdQUk9KKTtcblxuXG5cbi8vY29udGVudC5hcHBlbmQodGVzdFByb2opXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=