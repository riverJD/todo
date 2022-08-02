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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --greyBlue: rgb(156, 164, 199);\n    --happyBlue: rgb(192, 204, 241);\n    --postityellow: rgb(242, 243, 221);\n    --bg-color: var(--happyBlue, blue);\n\n    --sub-bg-color: rgba(211, 209, 209, 0.493);\n    --project-color: rgb(246, 247, 238);\n    \n    \n    --header-bg-color: rgb(238, 240, 233);\n    --header-border: var(--greyBlue);\n\n\n    --editing-task-color: var(--happyBlue);\n\n    --low-priority: rgba(162, 179, 233, 0.596);\n    --med-priority: rgba(248, 238, 142, 0.596);\n    --high-priority: rgba(233, 162, 162, 0.596);\n\n    padding: 0;\n    margin: 0;\n}\n\nbody{\n\n    background-color: var(--happyBlue);\n  \n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nh1,h2,h3,h4,h5,p, ul, li{\n    margin: 0;\n    padding: 0;\n    list-style: none;;\n}\n\n\n.test{\n    background-color: rgba(192, 144, 144, 0.918);\n    height: 200px;\n    width: 200px;\n    display: fixed;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    border-radius: 10px 10px 5px 5px;\n}\n\n.sub{\n    \n    height: 50%;\n    width: 50%;\n    background-color: rgba(8, 199, 24, 0.76);\n    border-radius: 50%;\n}\n\n.task{\n    border: 5px solid black;\n    height: 500px;\n    width: min(300px, 90%);\n\n    padding: 10px;\n\n    background-color: rgb(114, 135, 192);\n\n    display: grid;\n    position: fixed;\n    z-index: 10;\n    grid-template-rows: 1fr 2fr 1fr 1fr;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \n    \"title title\"\n    \"content content\"\n    \"objective deadline\"\n    \"buttons buttons\";\n}\n\n\n\n.task-title-bar{\n    display: flex;\n    justify-content: space-between;\n    grid-area: title;\n}\n\n.task-title{\n    font-size: clamp(1rem, 32px, 2rem);\n    text-align: center;\n}\n\n.task-desc{\n    grid-area: content;\n}\n\n.task-deadline{\n    font-size: 20px;\n}\n\n.task-deadline-container{\n    grid-area: deadline;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n\n}\n\n.task-deadline-content{\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n}\n\n\n.task-header{\n    grid-row: 1 / 2;\n}\n\n\n.task-goal{\n    grid-area: objective;\n}\n\n\n#content{\n    background-color: var(--happyBlue, white);\n    height: 100%;\n    width: 100%;\n    flex-direction: column;\n\n    justify-content: center;\n \n}\n\n.project{\n    height: 500px;\n    width: min(600px, 95%);\n    min-width: 300px;\n    \n    font-family: inter;\n    display: flex;\n    position: fixed;\n    \n    flex-direction: column-reverse;\n    justify-content: center;\n    margin: 0;\n    padding: 10px;\n    z-index: 10;\n\n    border-radius: 5px;\n    background-color: rgb(255, 255, 255);\n    box-shadow: 3px 3px 20px 5px var(--greyBlue)\n    \n    \n    \n\n}\n\n.project-content{\n    \n    height: 90%;\n    width: 98%;\n    gap: 5px;\n    display: grid;\n\n    grid-template-columns: 3fr 2fr;\n    grid-template-rows: repeat(5, 1fr);\n\n    grid-template-areas: \n    \n    \"title summary\"\n    \"tasks tasks\"\n    \"tasks tasks\"\n    \"tasks tasks\"\n    \"objective deadline\";\n\n\n}\n\n.title-container{\n\n    display: flex;\n    justify-content: space-between;\n   \n\n}\n\n\n.project-item{\n\n\n    \n}\n.project-title-bar{\n\n    grid-area: title;\n}\n\n\n.project-title{\n    width: 98%;\n    height: 100%;\n \n\n    background-color: var(--project-color);\n    font-family: inter;\n    font-size: 32px;\n\n}\n\n.project-desc{\n    height: 100%;\n    width: 98%;\n\n    font-family: inter;\n    grid-area: summary;\n\n    overflow: auto;\n   \n\n}\n\n.project-goal{\n    width: 98%;\n   \n\n    grid-area: objective;\n}\n\n.edit-project-box, .edit-task-box{\n    resize: none;\n    \n    max-width: 90%;\n\n}\n\n\n.edit-task-box{\n\n    background-color: var(--editing-task-color, grey);\n\n}\n\n.deadline-container{\n    display: grid;\n    grid-area: deadline;\n    \n}\n\n.deadline-content{\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n}\n\n\n.deadline-header{\n    grid-row: 1 / 2;\n}\n\n.tasks-container{\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n\n    grid-area: tasks;\n}\n\n.mini-task{\n    background-color: var(--med-priority);\n    display: flex;\n    border: 1px solid black;\n}\n\n.mini-button{\n    flex: 1;\n    background-color: inherit;\n\n}\n\n.mini-title{\n    border: none;\n    \n  \n}\n\n\n.mini-finish, .mini-delete{\n    flex: 0;\n    width: 2rem;\n    text-align: center;\n}\n\n\n.task-card{\n\n}\n\n.project-card{\n    \n}\n\n\n#modal-container{\n    margin-top: 20vh;\n    align-self: center;\n    display: none;\n    justify-content: center;\n   \n    position: fixed;\n    z-index: 1;\n    width: min(100vw, 380px);\n    height: min(100vh, 500px);\n     background-color: rgba(184, 135, 11, 0.082);\n     \n }\n \n #add-modal{\n     display: flex;\n     \n     align-self: center;\n     justify-content: center;\n     align-items: center;\n     \n     width: min(100vw, 340px);\n     height: min(100vh, 480px);\n \n  \n \n     overflow: auto;\n     border: 2px dashed var(--alt-card-border-color);\n     border-radius: 5px;\n     box-shadow: 2px 2px 5px;\n     background-color: var(--card-border-color, #647431);\n \n }\n \n .add-content{\n \n     width: min(100vh, 300px);\n     height:  min(100vh, 450px);\n \n     display: flex;\n     flex-direction: column;\n     background-color: var(--card-bg-color)\n }\n\n .project-button, .task-button{\n    padding: 5px;\n    font-size: clamp(1rem, 24px, 2rem);\n    border-radius: 5px;\n    height: 2rem;\n    width: 2rem;\n    fill: red;   \n    opacity: .85;\n}\n\n.project-button:hover, .task-button:hover{\n\n    opacity: 1;\n    outline: 5px solid rgb(204, 39, 39);\n    border-radius: 50%;\n}\n\n.button-bar{\n    display: flex;\n    justify-content: space-between;\n\n    grid-area: buttons;\n}\n\n#project-button-bar{\n    flex-direction: row-reverse;\n}\n\n\n.edit-button{\n\n    \n}\n\n\n\n\n.delete-task{\n    \n    \n \n\n}\n\n.completed > *{\n  \n   \n    font-style: italic;\n}\n\n.completed > .mini-finish{\n    background-image:  url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  \n\n}\n\n.hidden{\n    display: none;\n}\n\n.main-container{\n    margin-top: 10%;\n    width: 100%;\n    height: 90%;\n    outline: 1px dotted black;\n    display: flex;\n    justify-content: center;\n\n}\n\n .workspace{\n    width: min(700px, 90%);\n    height: 100%;\n  \n    gap: 5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n\n }\n\n .content-button{\n    height: auto;\n    width: 3rem;\n\n    justify-self: center;\n }\n\n \n .card-button{\n    height: auto;\n    width: 1.5rem;\n    opacity: .5;\n }\n\n .card-button:hover{\n    opacity: 1;\n }\n\n \n .card{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 10px;\n    height: 200px;\n    width: 100%;\n\n    background-color: rgb(242, 243, 221);\n   \n    border-radius: 5px;\n    box-shadow: 2px 2px 5px var(--greyBlue);\n    outline: 1px solid var(--greyBlue);\n }\n\n .card-button-bar{\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n   \n }\n\n .card-percent-container{\n   \n }\n \n .card-percentage{\n    text-align: center;\n }\n\n .card-completed > *{\n    color: green;\n    font-style: italic;\n    font-weight: bold;\n }\n\n\n\n .card-button-bar > *{\n   \n }\n\n.card-deadline{\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 5px;\n    border-bottom: 1px dashed black;\n}\n\n.active-settings-button{\n\n transform: rotate(90deg);\n\n}\n\n.blockscreen{\n    pointer-events: none;\n    \n    opacity: .5;\n}\n\n.blockproject, .blockproject > * > *{\n    pointer-events: none;\n    background-color: rgba(201, 201, 201, 0.836);\n    \n}\n\n\n\n.priority-button{\n    height: 1.5rem;\n    width: min-content;\n    border-radius: 5px;\n    font-weight: bold;\n}\n\n\n.container-button{\n    height: 1.5rem;\n    width: 1.5rem;\n}\n\n#tasks-button{\n    flex: 0;\n   \n\n}\n\n\n.lowpriority{\n    background-color: var(--low-priority, lightblue);\n}\n\n.medpriority{\n    background-color: var(--med-priority, lightyellow);\n\n}\n\n.highpriority{\n    background-color:var(--high-priority, lightsalmon);\n}\n\n.completed{\n    \n    background-color: rgba(104, 245, 104, 0.795);\n    \n}\n\n#context-menu-container{\n    position: absolute;\n    right: 55px;\n    z-index: 10;\n    \n    background-color: rgba(219, 219, 219, 0.952);\n    border: 2px outset black;\n    border-radius: 3px;\n    padding: 5px;\n    cursor: pointer;\n    width: 150px;\n    box-shadow: 1px 1px;\n\n    \n}\n\n#context-menu{\n    display:flex;\n    flex-direction: column;\n\n}\n\n.menu-item{\n\nmargin-bottom: 10px;\n\n}\n\n.menu-item:hover, .menu-item:focus{\n    font-weight: bold;\n}\n\n#header{\n    width: 100%;\n    height: 100px;\n    background-color: var(--header-bg-color, rgb(196, 181, 181));\n    margin-bottom: 5px;\n    border-bottom: 5px solid var(--header-bg-color, none);\n    box-shadow: 2px 2px 5px var(--greyBlue)\n    \n\n\n}\n\n.tab-container{\n    display: flex;\n    flex-direction: column;\n\n\n\n}\n\n.tab{\n\n    width: 100%;\n    display: flex;\n\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --greyBlue: rgb(156, 164, 199);\n    --happyBlue: rgb(192, 204, 241);\n    --postityellow: rgb(242, 243, 221);\n    --bg-color: var(--happyBlue, blue);\n\n    --sub-bg-color: rgba(211, 209, 209, 0.493);\n    --project-color: rgb(246, 247, 238);\n    \n    \n    --header-bg-color: rgb(238, 240, 233);\n    --header-border: var(--greyBlue);\n\n\n    --editing-task-color: var(--happyBlue);\n\n    --low-priority: rgba(162, 179, 233, 0.596);\n    --med-priority: rgba(248, 238, 142, 0.596);\n    --high-priority: rgba(233, 162, 162, 0.596);\n\n    padding: 0;\n    margin: 0;\n}\n\nbody{\n\n    background-color: var(--happyBlue);\n  \n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nh1,h2,h3,h4,h5,p, ul, li{\n    margin: 0;\n    padding: 0;\n    list-style: none;;\n}\n\n\n.test{\n    background-color: rgba(192, 144, 144, 0.918);\n    height: 200px;\n    width: 200px;\n    display: fixed;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    border-radius: 10px 10px 5px 5px;\n}\n\n.sub{\n    \n    height: 50%;\n    width: 50%;\n    background-color: rgba(8, 199, 24, 0.76);\n    border-radius: 50%;\n}\n\n.task{\n    border: 5px solid black;\n    height: 500px;\n    width: min(300px, 90%);\n\n    padding: 10px;\n\n    background-color: rgb(114, 135, 192);\n\n    display: grid;\n    position: fixed;\n    z-index: 10;\n    grid-template-rows: 1fr 2fr 1fr 1fr;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \n    \"title title\"\n    \"content content\"\n    \"objective deadline\"\n    \"buttons buttons\";\n}\n\n\n\n.task-title-bar{\n    display: flex;\n    justify-content: space-between;\n    grid-area: title;\n}\n\n.task-title{\n    font-size: clamp(1rem, 32px, 2rem);\n    text-align: center;\n}\n\n.task-desc{\n    grid-area: content;\n}\n\n.task-deadline{\n    font-size: 20px;\n}\n\n.task-deadline-container{\n    grid-area: deadline;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n\n}\n\n.task-deadline-content{\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n}\n\n\n.task-header{\n    grid-row: 1 / 2;\n}\n\n\n.task-goal{\n    grid-area: objective;\n}\n\n\n#content{\n    background-color: var(--happyBlue, white);\n    height: 100%;\n    width: 100%;\n    flex-direction: column;\n\n    justify-content: center;\n \n}\n\n.project{\n    height: 500px;\n    width: min(600px, 95%);\n    min-width: 300px;\n    \n    font-family: inter;\n    display: flex;\n    position: fixed;\n    \n    flex-direction: column-reverse;\n    justify-content: center;\n    margin: 0;\n    padding: 10px;\n    z-index: 10;\n\n    border-radius: 5px;\n    background-color: rgb(255, 255, 255);\n    box-shadow: 3px 3px 20px 5px var(--greyBlue)\n    \n    \n    \n\n}\n\n.project-content{\n    \n    height: 90%;\n    width: 98%;\n    gap: 5px;\n    display: grid;\n\n    grid-template-columns: 3fr 2fr;\n    grid-template-rows: repeat(5, 1fr);\n\n    grid-template-areas: \n    \n    \"title summary\"\n    \"tasks tasks\"\n    \"tasks tasks\"\n    \"tasks tasks\"\n    \"objective deadline\";\n\n\n}\n\n.title-container{\n\n    display: flex;\n    justify-content: space-between;\n   \n\n}\n\n\n.project-item{\n\n\n    \n}\n.project-title-bar{\n\n    grid-area: title;\n}\n\n\n.project-title{\n    width: 98%;\n    height: 100%;\n \n\n    background-color: var(--project-color);\n    font-family: inter;\n    font-size: 32px;\n\n}\n\n.project-desc{\n    height: 100%;\n    width: 98%;\n\n    font-family: inter;\n    grid-area: summary;\n\n    overflow: auto;\n   \n\n}\n\n.project-goal{\n    width: 98%;\n   \n\n    grid-area: objective;\n}\n\n.edit-project-box, .edit-task-box{\n    resize: none;\n    \n    max-width: 90%;\n\n}\n\n\n.edit-task-box{\n\n    background-color: var(--editing-task-color, grey);\n\n}\n\n.deadline-container{\n    display: grid;\n    grid-area: deadline;\n    \n}\n\n.deadline-content{\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n}\n\n\n.deadline-header{\n    grid-row: 1 / 2;\n}\n\n.tasks-container{\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n\n    grid-area: tasks;\n}\n\n.mini-task{\n    background-color: var(--med-priority);\n    display: flex;\n    border: 1px solid black;\n}\n\n.mini-button{\n    flex: 1;\n    background-color: inherit;\n\n}\n\n.mini-title{\n    border: none;\n    \n  \n}\n\n\n.mini-finish, .mini-delete{\n    flex: 0;\n    width: 2rem;\n    text-align: center;\n}\n\n\n.task-card{\n\n}\n\n.project-card{\n    \n}\n\n\n#modal-container{\n    margin-top: 20vh;\n    align-self: center;\n    display: none;\n    justify-content: center;\n   \n    position: fixed;\n    z-index: 1;\n    width: min(100vw, 380px);\n    height: min(100vh, 500px);\n     background-color: rgba(184, 135, 11, 0.082);\n     \n }\n \n #add-modal{\n     display: flex;\n     \n     align-self: center;\n     justify-content: center;\n     align-items: center;\n     \n     width: min(100vw, 340px);\n     height: min(100vh, 480px);\n \n  \n \n     overflow: auto;\n     border: 2px dashed var(--alt-card-border-color);\n     border-radius: 5px;\n     box-shadow: 2px 2px 5px;\n     background-color: var(--card-border-color, #647431);\n \n }\n \n .add-content{\n \n     width: min(100vh, 300px);\n     height:  min(100vh, 450px);\n \n     display: flex;\n     flex-direction: column;\n     background-color: var(--card-bg-color)\n }\n\n .project-button, .task-button{\n    padding: 5px;\n    font-size: clamp(1rem, 24px, 2rem);\n    border-radius: 5px;\n    height: 2rem;\n    width: 2rem;\n    fill: red;   \n    opacity: .85;\n}\n\n.project-button:hover, .task-button:hover{\n\n    opacity: 1;\n    outline: 5px solid rgb(204, 39, 39);\n    border-radius: 50%;\n}\n\n.button-bar{\n    display: flex;\n    justify-content: space-between;\n\n    grid-area: buttons;\n}\n\n#project-button-bar{\n    flex-direction: row-reverse;\n}\n\n\n.edit-button{\n\n    \n}\n\n\n\n\n.delete-task{\n    \n    \n \n\n}\n\n.completed > *{\n  \n   \n    font-style: italic;\n}\n\n.completed > .mini-finish{\n    background-image:  url(./img/minicheckmarked.svg);\n  \n\n}\n\n.hidden{\n    display: none;\n}\n\n.main-container{\n    margin-top: 10%;\n    width: 100%;\n    height: 90%;\n    outline: 1px dotted black;\n    display: flex;\n    justify-content: center;\n\n}\n\n .workspace{\n    width: min(700px, 90%);\n    height: 100%;\n  \n    gap: 5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n\n }\n\n .content-button{\n    height: auto;\n    width: 3rem;\n\n    justify-self: center;\n }\n\n \n .card-button{\n    height: auto;\n    width: 1.5rem;\n    opacity: .5;\n }\n\n .card-button:hover{\n    opacity: 1;\n }\n\n \n .card{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 10px;\n    height: 200px;\n    width: 100%;\n\n    background-color: rgb(242, 243, 221);\n   \n    border-radius: 5px;\n    box-shadow: 2px 2px 5px var(--greyBlue);\n    outline: 1px solid var(--greyBlue);\n }\n\n .card-button-bar{\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n   \n }\n\n .card-percent-container{\n   \n }\n \n .card-percentage{\n    text-align: center;\n }\n\n .card-completed > *{\n    color: green;\n    font-style: italic;\n    font-weight: bold;\n }\n\n\n\n .card-button-bar > *{\n   \n }\n\n.card-deadline{\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 5px;\n    border-bottom: 1px dashed black;\n}\n\n.active-settings-button{\n\n transform: rotate(90deg);\n\n}\n\n.blockscreen{\n    pointer-events: none;\n    \n    opacity: .5;\n}\n\n.blockproject, .blockproject > * > *{\n    pointer-events: none;\n    background-color: rgba(201, 201, 201, 0.836);\n    \n}\n\n\n\n.priority-button{\n    height: 1.5rem;\n    width: min-content;\n    border-radius: 5px;\n    font-weight: bold;\n}\n\n\n.container-button{\n    height: 1.5rem;\n    width: 1.5rem;\n}\n\n#tasks-button{\n    flex: 0;\n   \n\n}\n\n\n.lowpriority{\n    background-color: var(--low-priority, lightblue);\n}\n\n.medpriority{\n    background-color: var(--med-priority, lightyellow);\n\n}\n\n.highpriority{\n    background-color:var(--high-priority, lightsalmon);\n}\n\n.completed{\n    \n    background-color: rgba(104, 245, 104, 0.795);\n    \n}\n\n#context-menu-container{\n    position: absolute;\n    right: 55px;\n    z-index: 10;\n    \n    background-color: rgba(219, 219, 219, 0.952);\n    border: 2px outset black;\n    border-radius: 3px;\n    padding: 5px;\n    cursor: pointer;\n    width: 150px;\n    box-shadow: 1px 1px;\n\n    \n}\n\n#context-menu{\n    display:flex;\n    flex-direction: column;\n\n}\n\n.menu-item{\n\nmargin-bottom: 10px;\n\n}\n\n.menu-item:hover, .menu-item:focus{\n    font-weight: bold;\n}\n\n#header{\n    width: 100%;\n    height: 100px;\n    background-color: var(--header-bg-color, rgb(196, 181, 181));\n    margin-bottom: 5px;\n    border-bottom: 5px solid var(--header-bg-color, none);\n    box-shadow: 2px 2px 5px var(--greyBlue)\n    \n\n\n}\n\n.tab-container{\n    display: flex;\n    flex-direction: column;\n\n\n\n}\n\n.tab{\n\n    width: 100%;\n    display: flex;\n\n\n}"],"sourceRoot":""}]);
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
            const settings = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_cog_svg__WEBPACK_IMPORTED_MODULE_2__, 'alt': 'settings', 'class': 'card-button'})
                settings.addEventListener('click', (e) => openSettings(e.target, project))
            titleBar.appendChild(title);
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
    const parentCard = parentButton.parentNode.parentNode;
    console.log(parentCard)
    // popup menu
    parentButton.classList.add('active-settings-button')

    settingsMenu(parentCard, project)

}

// Gear menu for quick access to various options
const settingsMenu = (card, project) => {
    console.log(card);
    console.log('settings menu')
    const container = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'id': 'context-menu-container'});
    const menu = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'id': 'context-menu'});
    const menuItems = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('ul', {'id': 'menu-items menu-list'});

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
/* harmony export */   "renderTask": () => (/* reexport safe */ _taskUI__WEBPACK_IMPORTED_MODULE_6__.renderTask)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _default_project_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-project.json */ "./src/default-project.json");
/* harmony import */ var _default_task_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-task.json */ "./src/default-task.json");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content */ "./src/content.js");
/* harmony import */ var _taskUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taskUI */ "./src/taskUI.js");
/* harmony import */ var _img_close_project_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/close-project.svg */ "./src/img/close-project.svg");
/* harmony import */ var _img_edit_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/edit.svg */ "./src/img/edit.svg");
/* harmony import */ var _img_save_content_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/save-content.svg */ "./src/img/save-content.svg");
/* harmony import */ var _img_minicheckbox_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/minicheckbox.svg */ "./src/img/minicheckbox.svg");
/* harmony import */ var _img_minicheckmarked_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/minicheckmarked.svg */ "./src/img/minicheckmarked.svg");
/* harmony import */ var _img_delete_alert_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/delete-alert.svg */ "./src/img/delete-alert.svg");
/* harmony import */ var _img_finish_task_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/finish-task.svg */ "./src/img/finish-task.svg");
/* harmony import */ var _img_calendar_edit_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/calendar-edit.svg */ "./src/img/calendar-edit.svg");









// images













// Interface for adding tasks and projects.
const content = document.querySelector("#content")
const TASKLISTMAX = 7;

// Render a full project
const renderProject = (projectObject) => {
   
    // Container to attach project to
    const parent = document.querySelector("#workspace");

    // Remove interaction with workspace
    const main = document.querySelector("#workspace-container");
    
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.add('blockscreen'))


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

            const deadlineContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeContainer)("Deadline", _img_calendar_edit_svg__WEBPACK_IMPORTED_MODULE_14__);
            const deadlineContent = deadlineContainer.querySelector('.deadline-content');     
            const deadline = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': "project-deadline project-item", "id": `${proj.deadline}-deadline`});
            const priorityButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'button', 'class': `priority-button project-item ${(0,_taskUI__WEBPACK_IMPORTED_MODULE_6__.priorityStyle)(proj).priorityValue}`, 'value': (0,_taskUI__WEBPACK_IMPORTED_MODULE_6__.priorityStyle)(proj).priorityText});
            deadline.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(proj.getDeadline(), "MM.dd.yyyy");
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
        const tasks = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeContainer)("Tasks", _img_finish_task_svg__WEBPACK_IMPORTED_MODULE_13__);
        const addTask = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type':'button', 'id': 'add-task-button', 'value': '++'})
       console.log(projectObject.tasks.getTaskList().length)
   
        tasks.appendChild(addTask)
        
        // Attaches a new task to both the DOM element and Project Objects

        addTask.addEventListener('click', (e, ) => {
            
            ;(0,_taskUI__WEBPACK_IMPORTED_MODULE_6__.createTask)(e.target.parentNode, projectObject);
            
  
        })

        

        return tasks;
    }


    content.appendChild(tasks());
   

    const projectButtons = () => {

        const buttonContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('div', {'class': 'button-bar', 'id': 'project-button-bar'});

        const closeProject = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_close_project_svg__WEBPACK_IMPORTED_MODULE_7__,'class': 'project-button', 'id': 'close-project', 'value': 'Close'});
        const editProject = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_edit_svg__WEBPACK_IMPORTED_MODULE_8__, 'class': 'project-button', 'id': 'edit-project', 'value': 'Edit'})
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
    const saveButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_save_content_svg__WEBPACK_IMPORTED_MODULE_9__, 'class': 'project-button edit-button', 'id': 'save-project-button', 'value': 'Save'});
    
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
    const removeMini = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_delete_alert_svg__WEBPACK_IMPORTED_MODULE_12__, 'class': 'mini-button mini-delete', 'value': '-'})
    // Pass on DOM of Minilist and Task to delete
    removeMini.addEventListener('click', (e) => deleteMini(task));
    // Mark mini as complete
    const finishMini = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)('input', {'type': 'image', 'src': _img_minicheckbox_svg__WEBPACK_IMPORTED_MODULE_10__, 'class': 'mini-button mini-finish', 'value': 'F'});
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
    const main = document.querySelector('#workspace-container');
    main.classList.remove('blockscreen')
    
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






const addProjectPopUp = () => {
    
    const button = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.element)("button", {"id": "project-button", "value": "Pressit","textContent": "Press"})
    button.addEventListener("click", () => {
        
    })


    return button;

}




/***/ }),

/***/ "./src/taskUI.js":
/*!***********************!*\
  !*** ./src/taskUI.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeTask": () => (/* binding */ closeTask),
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "priorityStyle": () => (/* binding */ priorityStyle),
/* harmony export */   "renderTask": () => (/* binding */ renderTask)
/* harmony export */ });
/* harmony import */ var _img_close_project_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/close-project.svg */ "./src/img/close-project.svg");
/* harmony import */ var _img_pencil_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/pencil.svg */ "./src/img/pencil.svg");
/* harmony import */ var _img_save_task_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/save-task.svg */ "./src/img/save-task.svg");
/* harmony import */ var _img_finish_task_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/finish-task.svg */ "./src/img/finish-task.svg");
/* harmony import */ var _img_delete_task_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/delete-task.svg */ "./src/img/delete-task.svg");
/* harmony import */ var _projectUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectUI */ "./src/projectUI.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");











// Show a full task on screen
const renderTask = (task) => {

    
    const oldTaskDOM = document.querySelector(".task");
    if (oldTaskDOM != undefined) oldTaskDOM.remove();
    
    // DOM element to attach self to
    const content = document.querySelector("#workspace");

    const projectDOM = document.querySelector('.project');
    projectDOM.classList.add('blockproject')

    // The actual render object 
    const taskPopup = () => {
        const newTask = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.element)('div', {class: "task", id: `${task.title}-${task.getID()}`, 'data-id': task.getID()})

        const title = () => {

            const titleBar = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.element)('div', {'class': "task-title-bar"});
            
            const editButton = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.element)('input', {'type': 'image', 'src': _img_pencil_svg__WEBPACK_IMPORTED_MODULE_1__, 'class': 'task-button', 'id': 'task-edit-button', 'value': 'Edit'});
            editButton.addEventListener('click', () => editTask(task));
            titleBar.appendChild(editButton);


            const title = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.element)('h2', {'class': "task-title"});
            title.textContent = task.getTitle();;
            titleBar.appendChild(title);            


            const completeButton = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.element)('input', {'type': 'image', 'src': _img_finish_task_svg__WEBPACK_IMPORTED_MODULE_3__, 'class': 'task-button', 'id': 'task-complete-button', 'value': 'CHK'});
            completeButton.addEventListener('click', () => {
                // set task as complete
            })
            titleBar.appendChild(completeButton)

            return titleBar;
        }

        const description = () => {


        const description = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.element)('div', {'class': "task-desc", 'id': `${task.title}-desc`});
        description.textContent = task.getDescription();
                return description;
        }
      
        // Creating a DOM container to hold priority and deadline display
        const priority = () => {

            const priority = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.makeContainer)('task-deadline');
            const priorityHeader = priority.querySelector('.task-deadline-header');
     
                priorityHeader.textContent = "Deadline"
            const priorityButton = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.element)('input', {'type': 'button', 'class': `priority-button task-item ${priorityStyle(task).priorityValue}`, 'value': priorityStyle(task).priorityText});
            priorityButton.addEventListener('click', () => cyclePriority(task));

            const deadlineContent = priority.querySelector('.task-deadline-content');     
            const deadline = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.element)('div', {'class': "task-deadline task-item", "id": `${task.deadline}-deadline`});
            deadline.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(task.getDeadline(), "MM.dd.yyyy");
            deadlineContent.appendChild(deadline);


            priority.appendChild(deadlineContent);    
            deadlineContent.appendChild(priorityButton);
            priority.value = task.priority;
        
            return priority;
        }

        // Creation of goal element
        const goal = () => {
            const goal = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.element)('div', {'class': "task-goal-header", "id": `${task.title}-goal`});
            const goalHeader = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.element)('h3', {'class': 'goal-title'})
            const goalContent = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.element)('p', {'class': 'task-goal'});
            goalContent.textContent = task.getGoal();
            goalHeader.textContent = "Goal"
            goal.appendChild(goalHeader)
            goal.appendChild(goalContent)
        
            return goal;
        }

        // Creation of button bar
        const buttonBar = () => {

            const buttons = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.element)("div", {'class': 'button-bar', 'id': 'task-buttons'});
            const deleteButton = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.element)('input', {'type': 'image', 'src': _img_delete_task_svg__WEBPACK_IMPORTED_MODULE_4__, 'alt': 'Delete task', 'class': 'task-button delete-task', 'id': 'delete-task', 'value': 'Delete'})
            deleteButton.addEventListener('click', (e) => {
                ;(0,_projectUI__WEBPACK_IMPORTED_MODULE_5__.deleteTask)(task);
                closeTask(e.target.parentNode.parentNode);
            });
            buttons.appendChild(deleteButton);
          
            const closeButton = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.element)('input', {'type': 'image', 'src': _img_close_project_svg__WEBPACK_IMPORTED_MODULE_0__,'alt': 'Close Task', 'class': 'task-button close-task'});
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

const cyclePriority = (task) => {

    const curPriority = task.getPriority();

    // Priority is 1-3, cycle to next priority level
    const newPriority = changePriority(task, (((curPriority) % 3) + 1));


}

// Task Object, Priority Integer
const changePriority = (task, priority) => {

    task.setPriority(priority);
    
    (0,_projectUI__WEBPACK_IMPORTED_MODULE_5__.closeProject)();
    (0,_projectUI__WEBPACK_IMPORTED_MODULE_5__.renderProject)(task.getParent());
    renderTask(task);

}



const closeTask = (DOM) => {

    const project = document.querySelector('.project');
    project.classList.remove('blockproject');

    if (DOM != null) DOM.remove();
}


const createTask = (container, project) => {

    const task = (0,_todo__WEBPACK_IMPORTED_MODULE_6__.Task)();
    task.setParent(project);
    
   
    const taskList = (container)
    taskList.insertBefore((0,_projectUI__WEBPACK_IMPORTED_MODULE_5__.createMiniTask)(project, task), taskList.lastElementChild);
   
    // Add to object
    project.tasks.addTask(task);
    task.getID();

}

// Would like to refactor this to share with edit project functions if possible
const editTask = (task) => {
    
    //const project = task.getParent();
    const tempTask = (0,_todo__WEBPACK_IMPORTED_MODULE_6__.Task)();

    const content = tempTask;

    const buttonBar = document.querySelector('.task-title-bar');
    const title = document.querySelector('.task-title');
    const editButton = document.querySelector('#task-edit-button');
    editButton.classList.add('hidden');
    const saveButton = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.element)('input', {'type': 'image', 'src': _img_save_task_svg__WEBPACK_IMPORTED_MODULE_2__, 'class': 'task-edit-button task-button', 'id': 'task-edit-button', 'value': 'Save'})

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
        (0,_projectUI__WEBPACK_IMPORTED_MODULE_5__.closeProject)();
        (0,_projectUI__WEBPACK_IMPORTED_MODULE_5__.renderProject)(task.getParent());
        renderTask(task);

    }


    buttonBar.insertBefore(saveButton, title);

    const newTitle = (0,_projectUI__WEBPACK_IMPORTED_MODULE_5__.editTitle)('task');
    const newDescription = (0,_projectUI__WEBPACK_IMPORTED_MODULE_5__.editDescription)('task');
    const newGoal = (0,_projectUI__WEBPACK_IMPORTED_MODULE_5__.editGoal)('task');


}

const priorityStyle = (task) => {

    let priorityValue;
    let priorityText;
        
    switch (task.getPriority()){

        case 3:
            priorityValue = 'lowpriority';
            priorityText = 'Low';
            break;
        case 2:
            priorityValue = 'medpriority';
            priorityText = 'Med';
            break;
        case 1:
            priorityValue = 'highpriority';
            priorityText = 'High';
            break;
        default: 
            console.warn(`That priority level is not implemented: ${task.getPriority()}`);
            break;    
    }

    


    return {priorityValue, priorityText}
};


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
/* harmony export */   "createImageLink": () => (/* binding */ createImageLink),
/* harmony export */   "element": () => (/* binding */ createElement),
/* harmony export */   "getDate": () => (/* binding */ getDate),
/* harmony export */   "makeContainer": () => (/* binding */ makeContainer),
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

main.appendChild((0,_content__WEBPACK_IMPORTED_MODULE_4__.content)());


console.log(main.parentNode)


//const testProj = renderProject(testProject);






//const NEWPROJ = Project();




//enderProject(NEWPROJ);



//content.append(testProj)




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtIQUE0QztBQUN4Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxnREFBZ0QscUNBQXFDLHNDQUFzQyx5Q0FBeUMseUNBQXlDLG1EQUFtRCwwQ0FBMEMsd0RBQXdELHVDQUF1QyxpREFBaUQsbURBQW1ELGlEQUFpRCxrREFBa0QsbUJBQW1CLGdCQUFnQixHQUFHLFNBQVMsMkNBQTJDLHdCQUF3QixtQkFBbUIsZ0JBQWdCLGlCQUFpQixvQkFBb0IsNkJBQTZCLDBCQUEwQixHQUFHLDZCQUE2QixnQkFBZ0IsaUJBQWlCLHdCQUF3QixHQUFHLFlBQVksbURBQW1ELG9CQUFvQixtQkFBbUIscUJBQXFCLDhCQUE4QiwwQkFBMEIsb0JBQW9CLHVDQUF1QyxHQUFHLFNBQVMsd0JBQXdCLGlCQUFpQiwrQ0FBK0MseUJBQXlCLEdBQUcsVUFBVSw4QkFBOEIsb0JBQW9CLDZCQUE2QixzQkFBc0IsNkNBQTZDLHNCQUFzQixzQkFBc0Isa0JBQWtCLDBDQUEwQyxxQ0FBcUMsK0hBQStILEdBQUcsd0JBQXdCLG9CQUFvQixxQ0FBcUMsdUJBQXVCLEdBQUcsZ0JBQWdCLHlDQUF5Qyx5QkFBeUIsR0FBRyxlQUFlLHlCQUF5QixHQUFHLG1CQUFtQixzQkFBc0IsR0FBRyw2QkFBNkIsMEJBQTBCLG9CQUFvQiw2QkFBNkIsb0NBQW9DLEtBQUssMkJBQTJCLG9CQUFvQixrQ0FBa0MscUNBQXFDLEdBQUcsbUJBQW1CLHNCQUFzQixHQUFHLGlCQUFpQiwyQkFBMkIsR0FBRyxlQUFlLGdEQUFnRCxtQkFBbUIsa0JBQWtCLDZCQUE2QixnQ0FBZ0MsTUFBTSxhQUFhLG9CQUFvQiw2QkFBNkIsdUJBQXVCLCtCQUErQixvQkFBb0Isc0JBQXNCLDJDQUEyQyw4QkFBOEIsZ0JBQWdCLG9CQUFvQixrQkFBa0IsMkJBQTJCLDJDQUEyQyx5RUFBeUUscUJBQXFCLHdCQUF3QixpQkFBaUIsZUFBZSxvQkFBb0IsdUNBQXVDLHlDQUF5QyxzSkFBc0osT0FBTyxxQkFBcUIsc0JBQXNCLHFDQUFxQyxVQUFVLG9CQUFvQixhQUFhLHFCQUFxQix5QkFBeUIsR0FBRyxxQkFBcUIsaUJBQWlCLG1CQUFtQixrREFBa0QseUJBQXlCLHNCQUFzQixLQUFLLGtCQUFrQixtQkFBbUIsaUJBQWlCLDJCQUEyQix5QkFBeUIsdUJBQXVCLFVBQVUsa0JBQWtCLGlCQUFpQixrQ0FBa0MsR0FBRyxzQ0FBc0MsbUJBQW1CLDJCQUEyQixLQUFLLHFCQUFxQiwwREFBMEQsS0FBSyx3QkFBd0Isb0JBQW9CLDBCQUEwQixTQUFTLHNCQUFzQixvQkFBb0Isa0NBQWtDLHFDQUFxQyxHQUFHLHVCQUF1QixzQkFBc0IsR0FBRyxxQkFBcUIsb0JBQW9CLDZCQUE2QixxQkFBcUIseUJBQXlCLEdBQUcsZUFBZSw0Q0FBNEMsb0JBQW9CLDhCQUE4QixHQUFHLGlCQUFpQixjQUFjLGdDQUFnQyxLQUFLLGdCQUFnQixtQkFBbUIsYUFBYSxpQ0FBaUMsY0FBYyxrQkFBa0IseUJBQXlCLEdBQUcsaUJBQWlCLEtBQUssa0JBQWtCLFNBQVMsdUJBQXVCLHVCQUF1Qix5QkFBeUIsb0JBQW9CLDhCQUE4QiwyQkFBMkIsaUJBQWlCLCtCQUErQixnQ0FBZ0MsbURBQW1ELFdBQVcsaUJBQWlCLHFCQUFxQixpQ0FBaUMsK0JBQStCLDJCQUEyQix1Q0FBdUMsaUNBQWlDLGdDQUFnQyx1REFBdUQsMEJBQTBCLCtCQUErQiwyREFBMkQsT0FBTyxtQkFBbUIsbUNBQW1DLGtDQUFrQyx3QkFBd0IsOEJBQThCLGlEQUFpRCxtQ0FBbUMsbUJBQW1CLHlDQUF5Qyx5QkFBeUIsbUJBQW1CLGtCQUFrQixtQkFBbUIsbUJBQW1CLEdBQUcsOENBQThDLG1CQUFtQiwwQ0FBMEMseUJBQXlCLEdBQUcsZ0JBQWdCLG9CQUFvQixxQ0FBcUMsMkJBQTJCLEdBQUcsd0JBQXdCLGtDQUFrQyxHQUFHLG1CQUFtQixXQUFXLHVCQUF1QixvQkFBb0IsbUJBQW1CLGtDQUFrQyxHQUFHLDhCQUE4Qix5RUFBeUUsU0FBUyxZQUFZLG9CQUFvQixHQUFHLG9CQUFvQixzQkFBc0Isa0JBQWtCLGtCQUFrQixnQ0FBZ0Msb0JBQW9CLDhCQUE4QixLQUFLLGdCQUFnQiw2QkFBNkIsbUJBQW1CLG1CQUFtQixvQkFBb0IsNkJBQTZCLGtDQUFrQywwQkFBMEIsTUFBTSxxQkFBcUIsbUJBQW1CLGtCQUFrQiw2QkFBNkIsSUFBSSxxQkFBcUIsbUJBQW1CLG9CQUFvQixrQkFBa0IsSUFBSSx3QkFBd0IsaUJBQWlCLElBQUksY0FBYyxvQkFBb0IsNkJBQTZCLHFDQUFxQyxvQkFBb0Isb0JBQW9CLGtCQUFrQiw2Q0FBNkMsOEJBQThCLDhDQUE4Qyx5Q0FBeUMsSUFBSSxzQkFBc0Isc0JBQXNCLHFDQUFxQywwQkFBMEIsV0FBVyw2QkFBNkIsU0FBUyx1QkFBdUIseUJBQXlCLElBQUkseUJBQXlCLG1CQUFtQix5QkFBeUIsd0JBQXdCLElBQUksOEJBQThCLFNBQVMsbUJBQW1CLG9CQUFvQixxQ0FBcUMsMEJBQTBCLHNDQUFzQyxHQUFHLDRCQUE0Qiw4QkFBOEIsS0FBSyxpQkFBaUIsMkJBQTJCLHdCQUF3QixHQUFHLHlDQUF5QywyQkFBMkIsbURBQW1ELFNBQVMseUJBQXlCLHFCQUFxQix5QkFBeUIseUJBQXlCLHdCQUF3QixHQUFHLHdCQUF3QixxQkFBcUIsb0JBQW9CLEdBQUcsa0JBQWtCLGNBQWMsVUFBVSxtQkFBbUIsdURBQXVELEdBQUcsaUJBQWlCLHlEQUF5RCxLQUFLLGtCQUFrQix5REFBeUQsR0FBRyxlQUFlLHlEQUF5RCxTQUFTLDRCQUE0Qix5QkFBeUIsa0JBQWtCLGtCQUFrQix5REFBeUQsK0JBQStCLHlCQUF5QixtQkFBbUIsc0JBQXNCLG1CQUFtQiwwQkFBMEIsV0FBVyxrQkFBa0IsbUJBQW1CLDZCQUE2QixLQUFLLGVBQWUsd0JBQXdCLEtBQUssdUNBQXVDLHdCQUF3QixHQUFHLFlBQVksa0JBQWtCLG9CQUFvQixtRUFBbUUseUJBQXlCLDREQUE0RCwwREFBMEQsbUJBQW1CLG9CQUFvQiw2QkFBNkIsU0FBUyxTQUFTLG9CQUFvQixvQkFBb0IsT0FBTyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsZUFBZSxhQUFhLGVBQWUsY0FBYyxhQUFhLGFBQWEsY0FBYyxXQUFXLFVBQVUsTUFBTSxNQUFNLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLGFBQWEsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxTQUFTLE9BQU8sU0FBUyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFFBQVEsS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsV0FBVyxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsV0FBVyxZQUFZLGFBQWEsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLGNBQWMsV0FBVyxTQUFTLE9BQU8sTUFBTSxVQUFVLGNBQWMsUUFBUSxRQUFRLEtBQUssTUFBTSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksWUFBWSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLE9BQU8sS0FBSyxXQUFXLFdBQVcsUUFBUSxNQUFNLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLFFBQVEsTUFBTSxNQUFNLE1BQU0sT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsZ0JBQWdCLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLE1BQU0sWUFBWSxjQUFjLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxPQUFPLFNBQVMsU0FBUyxNQUFNLE9BQU8sWUFBWSxPQUFPLEtBQUssY0FBYyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFdBQVcsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGVBQWUsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxTQUFTLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLGFBQWEsT0FBTyxLQUFLLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxjQUFjLFNBQVMsS0FBSyxV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O0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEUsd0JBQXdCLDRDQUE0QztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUSxpRUFBaUU7QUFDcEYsV0FBVyxlQUFlO0FBQzFCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhLFFBQVE7QUFDckIsWUFBWSxXQUFXO0FBQ3ZCLFlBQVksWUFBWTtBQUN4QixZQUFZLFlBQVk7QUFDeEIsWUFBWSxZQUFZO0FBQ3hCLFlBQVksWUFBWTtBQUN4QixZQUFZLFlBQVk7QUFDeEIsWUFBWSxZQUFZLHlHQUF5RztBQUNqSSxZQUFZLFlBQVkscUdBQXFHO0FBQzdILFlBQVksWUFBWSwrR0FBK0c7QUFDdkksWUFBWSxZQUFZLGlIQUFpSDtBQUN6SSxZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkO0FBQ0E7QUFDQSxpQ0FBaUMsOERBQWE7QUFDOUM7QUFDQSwrRUFBK0UsbUVBQVM7QUFDeEYscUdBQXFHLG1FQUFTLGlDQUFpQzs7QUFFL0k7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkRBQTZELG1FQUFTO0FBQ3RFLDBFQUEwRSxtRUFBUyx3QkFBd0I7O0FBRTNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQiw0REFBTTs7QUFFM0IsT0FBTyw2REFBTztBQUNkO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7OztBQUdBLHVCQUF1Qix5RkFBK0I7QUFDdEQsZ0JBQWdCLHFFQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsMkVBQWM7QUFDeEM7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHVFQUFVOztBQUU5QjtBQUNBLGtEQUFrRCx1RkFBd0I7QUFDMUUsUUFBUSxrRkFBbUI7QUFDM0I7O0FBRUEsbURBQW1ELHdGQUF5QjtBQUM1RSxRQUFRLGtGQUFtQjtBQUMzQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hieUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q3dDO0FBQ0E7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7O0FBRWQsT0FBTyw0REFBTTtBQUNiO0FBQ0E7O0FBRUEsYUFBYSw0REFBTTtBQUNuQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0RWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNSZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsd0ZBQXdGOztBQUV4RjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKLHlDQUF5QyxPQUFPO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkY0QztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTyxPQUFPLE1BQU07QUFDL0IsV0FBVyxPQUFPLE9BQU8sTUFBTTtBQUMvQixhQUFhLE1BQU0sSUFBSSxNQUFNO0FBQzdCLFlBQVksTUFBTSxJQUFJLE1BQU07QUFDNUI7QUFDQTtBQUNBLFFBQVEsMkVBQWlCO0FBQ3pCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsUUFBUSwyRUFBaUI7QUFDekI7QUFDQTtBQUNBLEdBQUc7QUFDSCxZQUFZLDJFQUFpQjtBQUM3QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7O0FDakN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7O0FDYndDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8seUVBQWU7QUFDdEI7QUFDQTtBQUNBLEdBQUc7QUFDSCxXQUFXLHlFQUFlO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsU0FBUyx5RUFBZTtBQUN4QjtBQUNBO0FBQ0EsR0FBRztBQUNILE9BQU8seUVBQWU7QUFDdEI7QUFDQTtBQUNBLEdBQUc7QUFDSCxhQUFhLHlFQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSndDO0FBQ2M7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZFQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE9BQU8sc0VBQVk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsV0FBVyxzRUFBWTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxTQUFTLHNFQUFZO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE9BQU8sc0VBQVk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsYUFBYSxzRUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakd3QztBQUNSO0FBQ1E7QUFDWjtBQUNOOztBQUUxQztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9FQUFjO0FBQ2hDLGNBQWMsZ0VBQVU7QUFDeEIsa0JBQWtCLG9FQUFjO0FBQ2hDLFlBQVksOERBQVE7QUFDcEIsU0FBUywyREFBSztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0I4QjtBQUNPO0FBQ0Q7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxlQUFlLG1FQUFTO0FBQ3hCLFNBQVMscUVBQWU7QUFDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QnlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCx5REFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0Esd0tBQXdLOztBQUV4SztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRFk7O0FBRVo7QUFDQSxnQkFBZ0IsbUJBQU8sQ0FBQyxrREFBUzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QixrQkFBa0I7QUFDbEIscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0EsMkNBQTJDLGdCQUFnQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMsZ0JBQWdCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUM3VUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQsS0FBSztBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixXQUFXLEdBQUcsV0FBVyxHQUFHLFdBQVc7QUFDN0Q7QUFDQSwwQkFBMEIsMEJBQTBCO0FBQ3BEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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QUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDdUI7QUFDUjtBQUN1RDtBQUN2RDtBQUNOOztBQUU5QjtBQUNBO0FBQ0Esa0JBQWtCLDJDQUFJOztBQUV0QixpQkFBaUIsaURBQU87OztBQUd4Qjs7O0FBR0E7Ozs7Ozs7QUFPQTs7Ozs7QUFLQTs7OztBQUlBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2xydS1jYWNoZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9jbGFzc2VzL2NvbXBhcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvY2xhc3Nlcy9yYW5nZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9jbGFzc2VzL3NlbXZlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvY2xlYW4uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2NtcC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvY29lcmNlLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9jb21wYXJlLWJ1aWxkLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9jb21wYXJlLWxvb3NlLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9jb21wYXJlLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9kaWZmLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9lcS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvZ3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2d0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvaW5jLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9sdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvbHRlLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9tYWpvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvbWlub3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL25lcS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL3BhdGNoLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9wcmVyZWxlYXNlLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9yY29tcGFyZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvcnNvcnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL3NhdGlzZmllcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvc29ydC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvdmFsaWQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvaW50ZXJuYWwvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2ludGVybmFsL2RlYnVnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2ludGVybmFsL2lkZW50aWZpZXJzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2ludGVybmFsL3BhcnNlLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvaW50ZXJuYWwvcmUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL2d0ci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9yYW5nZXMvaW50ZXJzZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9yYW5nZXMvbHRyLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy9tYXgtc2F0aXNmeWluZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9yYW5nZXMvbWluLXNhdGlzZnlpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL21pbi12ZXJzaW9uLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy9vdXRzaWRlLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy9zaW1wbGlmeS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9yYW5nZXMvc3Vic2V0LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy90by1jb21wYXJhdG9ycy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9yYW5nZXMvdmFsaWQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMveWFsbGlzdC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3lhbGxpc3QveWFsbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NhcmRzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdFVJLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFza1VJLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvbWluaWNoZWNrbWFya2VkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICAtLWdyZXlCbHVlOiByZ2IoMTU2LCAxNjQsIDE5OSk7XFxuICAgIC0taGFwcHlCbHVlOiByZ2IoMTkyLCAyMDQsIDI0MSk7XFxuICAgIC0tcG9zdGl0eWVsbG93OiByZ2IoMjQyLCAyNDMsIDIyMSk7XFxuICAgIC0tYmctY29sb3I6IHZhcigtLWhhcHB5Qmx1ZSwgYmx1ZSk7XFxuXFxuICAgIC0tc3ViLWJnLWNvbG9yOiByZ2JhKDIxMSwgMjA5LCAyMDksIDAuNDkzKTtcXG4gICAgLS1wcm9qZWN0LWNvbG9yOiByZ2IoMjQ2LCAyNDcsIDIzOCk7XFxuICAgIFxcbiAgICBcXG4gICAgLS1oZWFkZXItYmctY29sb3I6IHJnYigyMzgsIDI0MCwgMjMzKTtcXG4gICAgLS1oZWFkZXItYm9yZGVyOiB2YXIoLS1ncmV5Qmx1ZSk7XFxuXFxuXFxuICAgIC0tZWRpdGluZy10YXNrLWNvbG9yOiB2YXIoLS1oYXBweUJsdWUpO1xcblxcbiAgICAtLWxvdy1wcmlvcml0eTogcmdiYSgxNjIsIDE3OSwgMjMzLCAwLjU5Nik7XFxuICAgIC0tbWVkLXByaW9yaXR5OiByZ2JhKDI0OCwgMjM4LCAxNDIsIDAuNTk2KTtcXG4gICAgLS1oaWdoLXByaW9yaXR5OiByZ2JhKDIzMywgMTYyLCAxNjIsIDAuNTk2KTtcXG5cXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5e1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oYXBweUJsdWUpO1xcbiAgXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSxoMixoMyxoNCxoNSxwLCB1bCwgbGl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTs7XFxufVxcblxcblxcbi50ZXN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MiwgMTQ0LCAxNDQsIDAuOTE4KTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBkaXNwbGF5OiBmaXhlZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA1cHggNXB4O1xcbn1cXG5cXG4uc3Vie1xcbiAgICBcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgMTk5LCAyNCwgMC43Nik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnRhc2t7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICB3aWR0aDogbWluKDMwMHB4LCA5MCUpO1xcblxcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE0LCAxMzUsIDE5Mik7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwidGl0bGUgdGl0bGVcXFwiXFxuICAgIFxcXCJjb250ZW50IGNvbnRlbnRcXFwiXFxuICAgIFxcXCJvYmplY3RpdmUgZGVhZGxpbmVcXFwiXFxuICAgIFxcXCJidXR0b25zIGJ1dHRvbnNcXFwiO1xcbn1cXG5cXG5cXG5cXG4udGFzay10aXRsZS1iYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG59XFxuXFxuLnRhc2stdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMzJweCwgMnJlbSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZGVzY3tcXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xcbn1cXG5cXG4udGFzay1kZWFkbGluZXtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udGFzay1kZWFkbGluZS1jb250YWluZXJ7XFxuICAgIGdyaWQtYXJlYTogZGVhZGxpbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbn1cXG5cXG4udGFzay1kZWFkbGluZS1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuXFxuLnRhc2staGVhZGVye1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcblxcbi50YXNrLWdvYWx7XFxuICAgIGdyaWQtYXJlYTogb2JqZWN0aXZlO1xcbn1cXG5cXG5cXG4jY29udGVudHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGFwcHlCbHVlLCB3aGl0ZSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiBcXG59XFxuXFxuLnByb2plY3R7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIHdpZHRoOiBtaW4oNjAwcHgsIDk1JSk7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIFxcbiAgICBmb250LWZhbWlseTogaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgei1pbmRleDogMTA7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDIwcHggNXB4IHZhcigtLWdyZXlCbHVlKVxcbiAgICBcXG4gICAgXFxuICAgIFxcblxcbn1cXG5cXG4ucHJvamVjdC1jb250ZW50e1xcbiAgICBcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiA5OCU7XFxuICAgIGdhcDogNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXG4gICAgXFxcInRpdGxlIHN1bW1hcnlcXFwiXFxuICAgIFxcXCJ0YXNrcyB0YXNrc1xcXCJcXG4gICAgXFxcInRhc2tzIHRhc2tzXFxcIlxcbiAgICBcXFwidGFza3MgdGFza3NcXFwiXFxuICAgIFxcXCJvYmplY3RpdmUgZGVhZGxpbmVcXFwiO1xcblxcblxcbn1cXG5cXG4udGl0bGUtY29udGFpbmVye1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgXFxuXFxufVxcblxcblxcbi5wcm9qZWN0LWl0ZW17XFxuXFxuXFxuICAgIFxcbn1cXG4ucHJvamVjdC10aXRsZS1iYXJ7XFxuXFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxufVxcblxcblxcbi5wcm9qZWN0LXRpdGxle1xcbiAgICB3aWR0aDogOTglO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuIFxcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6IGludGVyO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuXFxufVxcblxcbi5wcm9qZWN0LWRlc2N7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDk4JTtcXG5cXG4gICAgZm9udC1mYW1pbHk6IGludGVyO1xcbiAgICBncmlkLWFyZWE6IHN1bW1hcnk7XFxuXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgIFxcblxcbn1cXG5cXG4ucHJvamVjdC1nb2Fse1xcbiAgICB3aWR0aDogOTglO1xcbiAgIFxcblxcbiAgICBncmlkLWFyZWE6IG9iamVjdGl2ZTtcXG59XFxuXFxuLmVkaXQtcHJvamVjdC1ib3gsIC5lZGl0LXRhc2stYm94e1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIFxcbiAgICBtYXgtd2lkdGg6IDkwJTtcXG5cXG59XFxuXFxuXFxuLmVkaXQtdGFzay1ib3h7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVkaXRpbmctdGFzay1jb2xvciwgZ3JleSk7XFxuXFxufVxcblxcbi5kZWFkbGluZS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogZGVhZGxpbmU7XFxuICAgIFxcbn1cXG5cXG4uZGVhZGxpbmUtY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcblxcbi5kZWFkbGluZS1oZWFkZXJ7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnRhc2tzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxuICAgIGdyaWQtYXJlYTogdGFza3M7XFxufVxcblxcbi5taW5pLXRhc2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1wcmlvcml0eSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubWluaS1idXR0b257XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuXFxufVxcblxcbi5taW5pLXRpdGxle1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIFxcbiAgXFxufVxcblxcblxcbi5taW5pLWZpbmlzaCwgLm1pbmktZGVsZXRle1xcbiAgICBmbGV4OiAwO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4udGFzay1jYXJke1xcblxcbn1cXG5cXG4ucHJvamVjdC1jYXJke1xcbiAgICBcXG59XFxuXFxuXFxuI21vZGFsLWNvbnRhaW5lcntcXG4gICAgbWFyZ2luLXRvcDogMjB2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB3aWR0aDogbWluKDEwMHZ3LCAzODBweCk7XFxuICAgIGhlaWdodDogbWluKDEwMHZoLCA1MDBweCk7XFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NCwgMTM1LCAxMSwgMC4wODIpO1xcbiAgICAgXFxuIH1cXG4gXFxuICNhZGQtbW9kYWx7XFxuICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgXFxuICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICBcXG4gICAgIHdpZHRoOiBtaW4oMTAwdncsIDM0MHB4KTtcXG4gICAgIGhlaWdodDogbWluKDEwMHZoLCA0ODBweCk7XFxuIFxcbiAgXFxuIFxcbiAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICBib3JkZXI6IDJweCBkYXNoZWQgdmFyKC0tYWx0LWNhcmQtYm9yZGVyLWNvbG9yKTtcXG4gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4O1xcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1ib3JkZXItY29sb3IsICM2NDc0MzEpO1xcbiBcXG4gfVxcbiBcXG4gLmFkZC1jb250ZW50e1xcbiBcXG4gICAgIHdpZHRoOiBtaW4oMTAwdmgsIDMwMHB4KTtcXG4gICAgIGhlaWdodDogIG1pbigxMDB2aCwgNDUwcHgpO1xcbiBcXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZy1jb2xvcilcXG4gfVxcblxcbiAucHJvamVjdC1idXR0b24sIC50YXNrLWJ1dHRvbntcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDI0cHgsIDJyZW0pO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGZpbGw6IHJlZDsgICBcXG4gICAgb3BhY2l0eTogLjg1O1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b246aG92ZXIsIC50YXNrLWJ1dHRvbjpob3ZlcntcXG5cXG4gICAgb3BhY2l0eTogMTtcXG4gICAgb3V0bGluZTogNXB4IHNvbGlkIHJnYigyMDQsIDM5LCAzOSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmJ1dHRvbi1iYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgZ3JpZC1hcmVhOiBidXR0b25zO1xcbn1cXG5cXG4jcHJvamVjdC1idXR0b24tYmFye1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxufVxcblxcblxcbi5lZGl0LWJ1dHRvbntcXG5cXG4gICAgXFxufVxcblxcblxcblxcblxcbi5kZWxldGUtdGFza3tcXG4gICAgXFxuICAgIFxcbiBcXG5cXG59XFxuXFxuLmNvbXBsZXRlZCA+ICp7XFxuICBcXG4gICBcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uY29tcGxldGVkID4gLm1pbmktZmluaXNoe1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIFxcblxcbn1cXG5cXG4uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXJ7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuIC53b3Jrc3BhY2V7XFxuICAgIHdpZHRoOiBtaW4oNzAwcHgsIDkwJSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIFxcbiAgICBnYXA6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiB9XFxuXFxuIC5jb250ZW50LWJ1dHRvbntcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogM3JlbTtcXG5cXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuIH1cXG5cXG4gXFxuIC5jYXJkLWJ1dHRvbntcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gfVxcblxcbiAuY2FyZC1idXR0b246aG92ZXJ7XFxuICAgIG9wYWNpdHk6IDE7XFxuIH1cXG5cXG4gXFxuIC5jYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDMsIDIyMSk7XFxuICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggdmFyKC0tZ3JleUJsdWUpO1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tZ3JleUJsdWUpO1xcbiB9XFxuXFxuIC5jYXJkLWJ1dHRvbi1iYXJ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICBcXG4gfVxcblxcbiAuY2FyZC1wZXJjZW50LWNvbnRhaW5lcntcXG4gICBcXG4gfVxcbiBcXG4gLmNhcmQtcGVyY2VudGFnZXtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiB9XFxuXFxuIC5jYXJkLWNvbXBsZXRlZCA+ICp7XFxuICAgIGNvbG9yOiBncmVlbjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gfVxcblxcblxcblxcbiAuY2FyZC1idXR0b24tYmFyID4gKntcXG4gICBcXG4gfVxcblxcbi5jYXJkLWRlYWRsaW5le1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgYmxhY2s7XFxufVxcblxcbi5hY3RpdmUtc2V0dGluZ3MtYnV0dG9ue1xcblxcbiB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuXFxufVxcblxcbi5ibG9ja3NjcmVlbntcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIFxcbiAgICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuLmJsb2NrcHJvamVjdCwgLmJsb2NrcHJvamVjdCA+ICogPiAqe1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjgzNik7XFxuICAgIFxcbn1cXG5cXG5cXG5cXG4ucHJpb3JpdHktYnV0dG9ue1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5cXG4uY29udGFpbmVyLWJ1dHRvbntcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxLjVyZW07XFxufVxcblxcbiN0YXNrcy1idXR0b257XFxuICAgIGZsZXg6IDA7XFxuICAgXFxuXFxufVxcblxcblxcbi5sb3dwcmlvcml0eXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5LCBsaWdodGJsdWUpO1xcbn1cXG5cXG4ubWVkcHJpb3JpdHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1wcmlvcml0eSwgbGlnaHR5ZWxsb3cpO1xcblxcbn1cXG5cXG4uaGlnaHByaW9yaXR5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWhpZ2gtcHJpb3JpdHksIGxpZ2h0c2FsbW9uKTtcXG59XFxuXFxuLmNvbXBsZXRlZHtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAyNDUsIDEwNCwgMC43OTUpO1xcbiAgICBcXG59XFxuXFxuI2NvbnRleHQtbWVudS1jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDU1cHg7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTksIDIxOSwgMjE5LCAwLjk1Mik7XFxuICAgIGJvcmRlcjogMnB4IG91dHNldCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4O1xcblxcbiAgICBcXG59XFxuXFxuI2NvbnRleHQtbWVudXtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbn1cXG5cXG4ubWVudS1pdGVte1xcblxcbm1hcmdpbi1ib3R0b206IDEwcHg7XFxuXFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIsIC5tZW51LWl0ZW06Zm9jdXN7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jaGVhZGVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnLWNvbG9yLCByZ2IoMTk2LCAxODEsIDE4MSkpO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1oZWFkZXItYmctY29sb3IsIG5vbmUpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCB2YXIoLS1ncmV5Qmx1ZSlcXG4gICAgXFxuXFxuXFxufVxcblxcbi50YWItY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcblxcblxcbn1cXG5cXG4udGFie1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG5cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0Isa0NB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O0lBQ1osbUJBQW1COzs7QUFHdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCOztBQUUxQjs7QUFFQTs7QUFFQSxtQkFBbUI7O0FBRW5COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQsa0JBQWtCO0lBQ2xCLHFEQUFxRDtJQUNyRDs7OztBQUlKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7OztBQUkxQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsYUFBYTs7O0FBR2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLWdyZXlCbHVlOiByZ2IoMTU2LCAxNjQsIDE5OSk7XFxuICAgIC0taGFwcHlCbHVlOiByZ2IoMTkyLCAyMDQsIDI0MSk7XFxuICAgIC0tcG9zdGl0eWVsbG93OiByZ2IoMjQyLCAyNDMsIDIyMSk7XFxuICAgIC0tYmctY29sb3I6IHZhcigtLWhhcHB5Qmx1ZSwgYmx1ZSk7XFxuXFxuICAgIC0tc3ViLWJnLWNvbG9yOiByZ2JhKDIxMSwgMjA5LCAyMDksIDAuNDkzKTtcXG4gICAgLS1wcm9qZWN0LWNvbG9yOiByZ2IoMjQ2LCAyNDcsIDIzOCk7XFxuICAgIFxcbiAgICBcXG4gICAgLS1oZWFkZXItYmctY29sb3I6IHJnYigyMzgsIDI0MCwgMjMzKTtcXG4gICAgLS1oZWFkZXItYm9yZGVyOiB2YXIoLS1ncmV5Qmx1ZSk7XFxuXFxuXFxuICAgIC0tZWRpdGluZy10YXNrLWNvbG9yOiB2YXIoLS1oYXBweUJsdWUpO1xcblxcbiAgICAtLWxvdy1wcmlvcml0eTogcmdiYSgxNjIsIDE3OSwgMjMzLCAwLjU5Nik7XFxuICAgIC0tbWVkLXByaW9yaXR5OiByZ2JhKDI0OCwgMjM4LCAxNDIsIDAuNTk2KTtcXG4gICAgLS1oaWdoLXByaW9yaXR5OiByZ2JhKDIzMywgMTYyLCAxNjIsIDAuNTk2KTtcXG5cXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5e1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oYXBweUJsdWUpO1xcbiAgXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSxoMixoMyxoNCxoNSxwLCB1bCwgbGl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTs7XFxufVxcblxcblxcbi50ZXN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MiwgMTQ0LCAxNDQsIDAuOTE4KTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBkaXNwbGF5OiBmaXhlZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA1cHggNXB4O1xcbn1cXG5cXG4uc3Vie1xcbiAgICBcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgMTk5LCAyNCwgMC43Nik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnRhc2t7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICB3aWR0aDogbWluKDMwMHB4LCA5MCUpO1xcblxcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE0LCAxMzUsIDE5Mik7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwidGl0bGUgdGl0bGVcXFwiXFxuICAgIFxcXCJjb250ZW50IGNvbnRlbnRcXFwiXFxuICAgIFxcXCJvYmplY3RpdmUgZGVhZGxpbmVcXFwiXFxuICAgIFxcXCJidXR0b25zIGJ1dHRvbnNcXFwiO1xcbn1cXG5cXG5cXG5cXG4udGFzay10aXRsZS1iYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG59XFxuXFxuLnRhc2stdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMzJweCwgMnJlbSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZGVzY3tcXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xcbn1cXG5cXG4udGFzay1kZWFkbGluZXtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udGFzay1kZWFkbGluZS1jb250YWluZXJ7XFxuICAgIGdyaWQtYXJlYTogZGVhZGxpbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbn1cXG5cXG4udGFzay1kZWFkbGluZS1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuXFxuLnRhc2staGVhZGVye1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcblxcbi50YXNrLWdvYWx7XFxuICAgIGdyaWQtYXJlYTogb2JqZWN0aXZlO1xcbn1cXG5cXG5cXG4jY29udGVudHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGFwcHlCbHVlLCB3aGl0ZSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiBcXG59XFxuXFxuLnByb2plY3R7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIHdpZHRoOiBtaW4oNjAwcHgsIDk1JSk7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIFxcbiAgICBmb250LWZhbWlseTogaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgei1pbmRleDogMTA7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDIwcHggNXB4IHZhcigtLWdyZXlCbHVlKVxcbiAgICBcXG4gICAgXFxuICAgIFxcblxcbn1cXG5cXG4ucHJvamVjdC1jb250ZW50e1xcbiAgICBcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiA5OCU7XFxuICAgIGdhcDogNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXG4gICAgXFxcInRpdGxlIHN1bW1hcnlcXFwiXFxuICAgIFxcXCJ0YXNrcyB0YXNrc1xcXCJcXG4gICAgXFxcInRhc2tzIHRhc2tzXFxcIlxcbiAgICBcXFwidGFza3MgdGFza3NcXFwiXFxuICAgIFxcXCJvYmplY3RpdmUgZGVhZGxpbmVcXFwiO1xcblxcblxcbn1cXG5cXG4udGl0bGUtY29udGFpbmVye1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgXFxuXFxufVxcblxcblxcbi5wcm9qZWN0LWl0ZW17XFxuXFxuXFxuICAgIFxcbn1cXG4ucHJvamVjdC10aXRsZS1iYXJ7XFxuXFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxufVxcblxcblxcbi5wcm9qZWN0LXRpdGxle1xcbiAgICB3aWR0aDogOTglO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuIFxcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6IGludGVyO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuXFxufVxcblxcbi5wcm9qZWN0LWRlc2N7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDk4JTtcXG5cXG4gICAgZm9udC1mYW1pbHk6IGludGVyO1xcbiAgICBncmlkLWFyZWE6IHN1bW1hcnk7XFxuXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgIFxcblxcbn1cXG5cXG4ucHJvamVjdC1nb2Fse1xcbiAgICB3aWR0aDogOTglO1xcbiAgIFxcblxcbiAgICBncmlkLWFyZWE6IG9iamVjdGl2ZTtcXG59XFxuXFxuLmVkaXQtcHJvamVjdC1ib3gsIC5lZGl0LXRhc2stYm94e1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIFxcbiAgICBtYXgtd2lkdGg6IDkwJTtcXG5cXG59XFxuXFxuXFxuLmVkaXQtdGFzay1ib3h7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVkaXRpbmctdGFzay1jb2xvciwgZ3JleSk7XFxuXFxufVxcblxcbi5kZWFkbGluZS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogZGVhZGxpbmU7XFxuICAgIFxcbn1cXG5cXG4uZGVhZGxpbmUtY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcblxcbi5kZWFkbGluZS1oZWFkZXJ7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnRhc2tzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxuICAgIGdyaWQtYXJlYTogdGFza3M7XFxufVxcblxcbi5taW5pLXRhc2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1wcmlvcml0eSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubWluaS1idXR0b257XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuXFxufVxcblxcbi5taW5pLXRpdGxle1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIFxcbiAgXFxufVxcblxcblxcbi5taW5pLWZpbmlzaCwgLm1pbmktZGVsZXRle1xcbiAgICBmbGV4OiAwO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4udGFzay1jYXJke1xcblxcbn1cXG5cXG4ucHJvamVjdC1jYXJke1xcbiAgICBcXG59XFxuXFxuXFxuI21vZGFsLWNvbnRhaW5lcntcXG4gICAgbWFyZ2luLXRvcDogMjB2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB3aWR0aDogbWluKDEwMHZ3LCAzODBweCk7XFxuICAgIGhlaWdodDogbWluKDEwMHZoLCA1MDBweCk7XFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NCwgMTM1LCAxMSwgMC4wODIpO1xcbiAgICAgXFxuIH1cXG4gXFxuICNhZGQtbW9kYWx7XFxuICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgXFxuICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICBcXG4gICAgIHdpZHRoOiBtaW4oMTAwdncsIDM0MHB4KTtcXG4gICAgIGhlaWdodDogbWluKDEwMHZoLCA0ODBweCk7XFxuIFxcbiAgXFxuIFxcbiAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICBib3JkZXI6IDJweCBkYXNoZWQgdmFyKC0tYWx0LWNhcmQtYm9yZGVyLWNvbG9yKTtcXG4gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4O1xcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1ib3JkZXItY29sb3IsICM2NDc0MzEpO1xcbiBcXG4gfVxcbiBcXG4gLmFkZC1jb250ZW50e1xcbiBcXG4gICAgIHdpZHRoOiBtaW4oMTAwdmgsIDMwMHB4KTtcXG4gICAgIGhlaWdodDogIG1pbigxMDB2aCwgNDUwcHgpO1xcbiBcXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZy1jb2xvcilcXG4gfVxcblxcbiAucHJvamVjdC1idXR0b24sIC50YXNrLWJ1dHRvbntcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDI0cHgsIDJyZW0pO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGZpbGw6IHJlZDsgICBcXG4gICAgb3BhY2l0eTogLjg1O1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b246aG92ZXIsIC50YXNrLWJ1dHRvbjpob3ZlcntcXG5cXG4gICAgb3BhY2l0eTogMTtcXG4gICAgb3V0bGluZTogNXB4IHNvbGlkIHJnYigyMDQsIDM5LCAzOSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmJ1dHRvbi1iYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgZ3JpZC1hcmVhOiBidXR0b25zO1xcbn1cXG5cXG4jcHJvamVjdC1idXR0b24tYmFye1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxufVxcblxcblxcbi5lZGl0LWJ1dHRvbntcXG5cXG4gICAgXFxufVxcblxcblxcblxcblxcbi5kZWxldGUtdGFza3tcXG4gICAgXFxuICAgIFxcbiBcXG5cXG59XFxuXFxuLmNvbXBsZXRlZCA+ICp7XFxuICBcXG4gICBcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uY29tcGxldGVkID4gLm1pbmktZmluaXNoe1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgdXJsKC4vaW1nL21pbmljaGVja21hcmtlZC5zdmcpO1xcbiAgXFxuXFxufVxcblxcbi5oaWRkZW57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lcntcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbn1cXG5cXG4gLndvcmtzcGFjZXtcXG4gICAgd2lkdGg6IG1pbig3MDBweCwgOTAlKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgXFxuICAgIGdhcDogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuIH1cXG5cXG4gLmNvbnRlbnQtYnV0dG9ue1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAzcmVtO1xcblxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gfVxcblxcbiBcXG4gLmNhcmQtYnV0dG9ue1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIG9wYWNpdHk6IC41O1xcbiB9XFxuXFxuIC5jYXJkLWJ1dHRvbjpob3ZlcntcXG4gICAgb3BhY2l0eTogMTtcXG4gfVxcblxcbiBcXG4gLmNhcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0MywgMjIxKTtcXG4gICBcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCB2YXIoLS1ncmV5Qmx1ZSk7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1ncmV5Qmx1ZSk7XFxuIH1cXG5cXG4gLmNhcmQtYnV0dG9uLWJhcntcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgIFxcbiB9XFxuXFxuIC5jYXJkLXBlcmNlbnQtY29udGFpbmVye1xcbiAgIFxcbiB9XFxuIFxcbiAuY2FyZC1wZXJjZW50YWdle1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuIH1cXG5cXG4gLmNhcmQtY29tcGxldGVkID4gKntcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiB9XFxuXFxuXFxuXFxuIC5jYXJkLWJ1dHRvbi1iYXIgPiAqe1xcbiAgIFxcbiB9XFxuXFxuLmNhcmQtZGVhZGxpbmV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBibGFjaztcXG59XFxuXFxuLmFjdGl2ZS1zZXR0aW5ncy1idXR0b257XFxuXFxuIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG5cXG59XFxuXFxuLmJsb2Nrc2NyZWVue1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgXFxuICAgIG9wYWNpdHk6IC41O1xcbn1cXG5cXG4uYmxvY2twcm9qZWN0LCAuYmxvY2twcm9qZWN0ID4gKiA+ICp7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMSwgMjAxLCAyMDEsIDAuODM2KTtcXG4gICAgXFxufVxcblxcblxcblxcbi5wcmlvcml0eS1idXR0b257XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcblxcbi5jb250YWluZXItYnV0dG9ue1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG59XFxuXFxuI3Rhc2tzLWJ1dHRvbntcXG4gICAgZmxleDogMDtcXG4gICBcXG5cXG59XFxuXFxuXFxuLmxvd3ByaW9yaXR5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctcHJpb3JpdHksIGxpZ2h0Ymx1ZSk7XFxufVxcblxcbi5tZWRwcmlvcml0eXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkLXByaW9yaXR5LCBsaWdodHllbGxvdyk7XFxuXFxufVxcblxcbi5oaWdocHJpb3JpdHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0taGlnaC1wcmlvcml0eSwgbGlnaHRzYWxtb24pO1xcbn1cXG5cXG4uY29tcGxldGVke1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDQsIDI0NSwgMTA0LCAwLjc5NSk7XFxuICAgIFxcbn1cXG5cXG4jY29udGV4dC1tZW51LWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNTVweDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxOSwgMjE5LCAyMTksIDAuOTUyKTtcXG4gICAgYm9yZGVyOiAycHggb3V0c2V0IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHg7XFxuXFxuICAgIFxcbn1cXG5cXG4jY29udGV4dC1tZW51e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxufVxcblxcbi5tZW51LWl0ZW17XFxuXFxubWFyZ2luLWJvdHRvbTogMTBweDtcXG5cXG59XFxuXFxuLm1lbnUtaXRlbTpob3ZlciwgLm1lbnUtaXRlbTpmb2N1c3tcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNoZWFkZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmctY29sb3IsIHJnYigxOTYsIDE4MSwgMTgxKSk7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLWhlYWRlci1iZy1jb2xvciwgbm9uZSk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHZhcigtLWdyZXlCbHVlKVxcbiAgICBcXG5cXG5cXG59XFxuXFxuLnRhYi1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuXFxuXFxufVxcblxcbi50YWJ7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG5cbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cblxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbn07XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcblxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjsgLy8gVHdvIGRpZ2l0IHllYXJcblxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH0gLy8gT3JkaW5hbCBudW1iZXJcblxuXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH0gLy8gUGFkZGluZ1xuXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTsgLy8gUGFkZGluZ1xuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcblxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG5cbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcblxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcblxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG5cbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcblxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuXG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIHZhciBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn1cblxudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBzZWNvbmQgYXJndW1lbnQgaXMgbm93IHJlcXVpcmVkIGZvciB0aGUgc2FrZSBvZiBleHBsaWNpdG5lc3MuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpKVxuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICogICBmb3JtYXQobmV3IERhdGUoMjAxNiwgMCwgMSksIFwieXl5eS1NTS1kZCdUJ0hIOm1tOnNzLlNTU3h4eFwiKVxuICogICBgYGBcbiAqXG4gKiAtIE5ldyBmb3JtYXQgc3RyaW5nIEFQSSBmb3IgYGZvcm1hdGAgZnVuY3Rpb25cbiAqICAgd2hpY2ggaXMgYmFzZWQgb24gW1VuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNV0oaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZSkuXG4gKiAgIFNlZSBbdGhpcyBwb3N0XShodHRwczovL2Jsb2cuZGF0ZS1mbnMub3JnL3Bvc3QvdW5pY29kZS10b2tlbnMtaW4tZGF0ZS1mbnMtdjItc3JlYXR5a2k5MWpnKSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIC0gQ2hhcmFjdGVycyBhcmUgbm93IGVzY2FwZWQgdXNpbmcgc2luZ2xlIHF1b3RlIHN5bWJvbHMgKGAnYCkgaW5zdGVhZCBvZiBzcXVhcmUgYnJhY2tldHMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgZGVmYXVsdExvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH0gLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5cbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuXG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCFvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICByZXR1cm4gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cClbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIE5vdyBgaXNWYWxpZGAgZG9lc24ndCB0aHJvdyBhbiBleGNlcHRpb25cbiAqICAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICogICBJbnN0ZWFkLCBhcmd1bWVudCBpcyBjb252ZXJ0ZWQgYmVmb3JlaGFuZCB1c2luZyBgdG9EYXRlYC5cbiAqXG4gKiAgIEV4YW1wbGVzOlxuICpcbiAqICAgfCBgaXNWYWxpZGAgYXJndW1lbnQgICAgICAgIHwgQmVmb3JlIHYyLjAuMCB8IHYyLjAuMCBvbndhcmQgfFxuICogICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18XG4gKiAgIHwgYG5ldyBEYXRlKClgICAgICAgICAgICAgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJzIwMTYtMDEtMDEnKWAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnJylgICAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKDE0ODgzNzA4MzUwODEpYCB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoTmFOKWAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnMjAxNi0wMS0wMSdgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcnYCAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgMTQ4ODM3MDgzNTA4MWAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBOYU5gICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKlxuICogICBXZSBpbnRyb2R1Y2UgdGhpcyBjaGFuZ2UgdG8gbWFrZSAqZGF0ZS1mbnMqIGNvbnNpc3RlbnQgd2l0aCBFQ01BU2NyaXB0IGJlaGF2aW9yXG4gKiAgIHRoYXQgdHJ5IHRvIGNvZXJjZSBhcmd1bWVudHMgdG8gdGhlIGV4cGVjdGVkIHR5cGVcbiAqICAgKHdoaWNoIGlzIGFsc28gdGhlIGNhc2Ugd2l0aCBvdGhlciAqZGF0ZS1mbnMqIGZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG5cbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiAocXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCIndXNlIHN0cmljdCdcblxuLy8gQSBsaW5rZWQgbGlzdCB0byBrZWVwIHRyYWNrIG9mIHJlY2VudGx5LXVzZWQtbmVzc1xuY29uc3QgWWFsbGlzdCA9IHJlcXVpcmUoJ3lhbGxpc3QnKVxuXG5jb25zdCBNQVggPSBTeW1ib2woJ21heCcpXG5jb25zdCBMRU5HVEggPSBTeW1ib2woJ2xlbmd0aCcpXG5jb25zdCBMRU5HVEhfQ0FMQ1VMQVRPUiA9IFN5bWJvbCgnbGVuZ3RoQ2FsY3VsYXRvcicpXG5jb25zdCBBTExPV19TVEFMRSA9IFN5bWJvbCgnYWxsb3dTdGFsZScpXG5jb25zdCBNQVhfQUdFID0gU3ltYm9sKCdtYXhBZ2UnKVxuY29uc3QgRElTUE9TRSA9IFN5bWJvbCgnZGlzcG9zZScpXG5jb25zdCBOT19ESVNQT1NFX09OX1NFVCA9IFN5bWJvbCgnbm9EaXNwb3NlT25TZXQnKVxuY29uc3QgTFJVX0xJU1QgPSBTeW1ib2woJ2xydUxpc3QnKVxuY29uc3QgQ0FDSEUgPSBTeW1ib2woJ2NhY2hlJylcbmNvbnN0IFVQREFURV9BR0VfT05fR0VUID0gU3ltYm9sKCd1cGRhdGVBZ2VPbkdldCcpXG5cbmNvbnN0IG5haXZlTGVuZ3RoID0gKCkgPT4gMVxuXG4vLyBscnVMaXN0IGlzIGEgeWFsbGlzdCB3aGVyZSB0aGUgaGVhZCBpcyB0aGUgeW91bmdlc3Rcbi8vIGl0ZW0sIGFuZCB0aGUgdGFpbCBpcyB0aGUgb2xkZXN0LiAgdGhlIGxpc3QgY29udGFpbnMgdGhlIEhpdFxuLy8gb2JqZWN0cyBhcyB0aGUgZW50cmllcy5cbi8vIEVhY2ggSGl0IG9iamVjdCBoYXMgYSByZWZlcmVuY2UgdG8gaXRzIFlhbGxpc3QuTm9kZS4gIFRoaXNcbi8vIG5ldmVyIGNoYW5nZXMuXG4vL1xuLy8gY2FjaGUgaXMgYSBNYXAgKG9yIFBzZXVkb01hcCkgdGhhdCBtYXRjaGVzIHRoZSBrZXlzIHRvXG4vLyB0aGUgWWFsbGlzdC5Ob2RlIG9iamVjdC5cbmNsYXNzIExSVUNhY2hlIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdudW1iZXInKVxuICAgICAgb3B0aW9ucyA9IHsgbWF4OiBvcHRpb25zIH1cblxuICAgIGlmICghb3B0aW9ucylcbiAgICAgIG9wdGlvbnMgPSB7fVxuXG4gICAgaWYgKG9wdGlvbnMubWF4ICYmICh0eXBlb2Ygb3B0aW9ucy5tYXggIT09ICdudW1iZXInIHx8IG9wdGlvbnMubWF4IDwgMCkpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYXggbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXInKVxuICAgIC8vIEtpbmQgb2Ygd2VpcmQgdG8gaGF2ZSBhIGRlZmF1bHQgbWF4IG9mIEluZmluaXR5LCBidXQgb2ggd2VsbC5cbiAgICBjb25zdCBtYXggPSB0aGlzW01BWF0gPSBvcHRpb25zLm1heCB8fCBJbmZpbml0eVxuXG4gICAgY29uc3QgbGMgPSBvcHRpb25zLmxlbmd0aCB8fCBuYWl2ZUxlbmd0aFxuICAgIHRoaXNbTEVOR1RIX0NBTENVTEFUT1JdID0gKHR5cGVvZiBsYyAhPT0gJ2Z1bmN0aW9uJykgPyBuYWl2ZUxlbmd0aCA6IGxjXG4gICAgdGhpc1tBTExPV19TVEFMRV0gPSBvcHRpb25zLnN0YWxlIHx8IGZhbHNlXG4gICAgaWYgKG9wdGlvbnMubWF4QWdlICYmIHR5cGVvZiBvcHRpb25zLm1heEFnZSAhPT0gJ251bWJlcicpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYXhBZ2UgbXVzdCBiZSBhIG51bWJlcicpXG4gICAgdGhpc1tNQVhfQUdFXSA9IG9wdGlvbnMubWF4QWdlIHx8IDBcbiAgICB0aGlzW0RJU1BPU0VdID0gb3B0aW9ucy5kaXNwb3NlXG4gICAgdGhpc1tOT19ESVNQT1NFX09OX1NFVF0gPSBvcHRpb25zLm5vRGlzcG9zZU9uU2V0IHx8IGZhbHNlXG4gICAgdGhpc1tVUERBVEVfQUdFX09OX0dFVF0gPSBvcHRpb25zLnVwZGF0ZUFnZU9uR2V0IHx8IGZhbHNlXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICAvLyByZXNpemUgdGhlIGNhY2hlIHdoZW4gdGhlIG1heCBjaGFuZ2VzLlxuICBzZXQgbWF4IChtTCkge1xuICAgIGlmICh0eXBlb2YgbUwgIT09ICdudW1iZXInIHx8IG1MIDwgMClcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ21heCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlcicpXG5cbiAgICB0aGlzW01BWF0gPSBtTCB8fCBJbmZpbml0eVxuICAgIHRyaW0odGhpcylcbiAgfVxuICBnZXQgbWF4ICgpIHtcbiAgICByZXR1cm4gdGhpc1tNQVhdXG4gIH1cblxuICBzZXQgYWxsb3dTdGFsZSAoYWxsb3dTdGFsZSkge1xuICAgIHRoaXNbQUxMT1dfU1RBTEVdID0gISFhbGxvd1N0YWxlXG4gIH1cbiAgZ2V0IGFsbG93U3RhbGUgKCkge1xuICAgIHJldHVybiB0aGlzW0FMTE9XX1NUQUxFXVxuICB9XG5cbiAgc2V0IG1heEFnZSAobUEpIHtcbiAgICBpZiAodHlwZW9mIG1BICE9PSAnbnVtYmVyJylcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ21heEFnZSBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlcicpXG5cbiAgICB0aGlzW01BWF9BR0VdID0gbUFcbiAgICB0cmltKHRoaXMpXG4gIH1cbiAgZ2V0IG1heEFnZSAoKSB7XG4gICAgcmV0dXJuIHRoaXNbTUFYX0FHRV1cbiAgfVxuXG4gIC8vIHJlc2l6ZSB0aGUgY2FjaGUgd2hlbiB0aGUgbGVuZ3RoQ2FsY3VsYXRvciBjaGFuZ2VzLlxuICBzZXQgbGVuZ3RoQ2FsY3VsYXRvciAobEMpIHtcbiAgICBpZiAodHlwZW9mIGxDICE9PSAnZnVuY3Rpb24nKVxuICAgICAgbEMgPSBuYWl2ZUxlbmd0aFxuXG4gICAgaWYgKGxDICE9PSB0aGlzW0xFTkdUSF9DQUxDVUxBVE9SXSkge1xuICAgICAgdGhpc1tMRU5HVEhfQ0FMQ1VMQVRPUl0gPSBsQ1xuICAgICAgdGhpc1tMRU5HVEhdID0gMFxuICAgICAgdGhpc1tMUlVfTElTVF0uZm9yRWFjaChoaXQgPT4ge1xuICAgICAgICBoaXQubGVuZ3RoID0gdGhpc1tMRU5HVEhfQ0FMQ1VMQVRPUl0oaGl0LnZhbHVlLCBoaXQua2V5KVxuICAgICAgICB0aGlzW0xFTkdUSF0gKz0gaGl0Lmxlbmd0aFxuICAgICAgfSlcbiAgICB9XG4gICAgdHJpbSh0aGlzKVxuICB9XG4gIGdldCBsZW5ndGhDYWxjdWxhdG9yICgpIHsgcmV0dXJuIHRoaXNbTEVOR1RIX0NBTENVTEFUT1JdIH1cblxuICBnZXQgbGVuZ3RoICgpIHsgcmV0dXJuIHRoaXNbTEVOR1RIXSB9XG4gIGdldCBpdGVtQ291bnQgKCkgeyByZXR1cm4gdGhpc1tMUlVfTElTVF0ubGVuZ3RoIH1cblxuICByZm9yRWFjaCAoZm4sIHRoaXNwKSB7XG4gICAgdGhpc3AgPSB0aGlzcCB8fCB0aGlzXG4gICAgZm9yIChsZXQgd2Fsa2VyID0gdGhpc1tMUlVfTElTVF0udGFpbDsgd2Fsa2VyICE9PSBudWxsOykge1xuICAgICAgY29uc3QgcHJldiA9IHdhbGtlci5wcmV2XG4gICAgICBmb3JFYWNoU3RlcCh0aGlzLCBmbiwgd2Fsa2VyLCB0aGlzcClcbiAgICAgIHdhbGtlciA9IHByZXZcbiAgICB9XG4gIH1cblxuICBmb3JFYWNoIChmbiwgdGhpc3ApIHtcbiAgICB0aGlzcCA9IHRoaXNwIHx8IHRoaXNcbiAgICBmb3IgKGxldCB3YWxrZXIgPSB0aGlzW0xSVV9MSVNUXS5oZWFkOyB3YWxrZXIgIT09IG51bGw7KSB7XG4gICAgICBjb25zdCBuZXh0ID0gd2Fsa2VyLm5leHRcbiAgICAgIGZvckVhY2hTdGVwKHRoaXMsIGZuLCB3YWxrZXIsIHRoaXNwKVxuICAgICAgd2Fsa2VyID0gbmV4dFxuICAgIH1cbiAgfVxuXG4gIGtleXMgKCkge1xuICAgIHJldHVybiB0aGlzW0xSVV9MSVNUXS50b0FycmF5KCkubWFwKGsgPT4gay5rZXkpXG4gIH1cblxuICB2YWx1ZXMgKCkge1xuICAgIHJldHVybiB0aGlzW0xSVV9MSVNUXS50b0FycmF5KCkubWFwKGsgPT4gay52YWx1ZSlcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICBpZiAodGhpc1tESVNQT1NFXSAmJlxuICAgICAgICB0aGlzW0xSVV9MSVNUXSAmJlxuICAgICAgICB0aGlzW0xSVV9MSVNUXS5sZW5ndGgpIHtcbiAgICAgIHRoaXNbTFJVX0xJU1RdLmZvckVhY2goaGl0ID0+IHRoaXNbRElTUE9TRV0oaGl0LmtleSwgaGl0LnZhbHVlKSlcbiAgICB9XG5cbiAgICB0aGlzW0NBQ0hFXSA9IG5ldyBNYXAoKSAvLyBoYXNoIG9mIGl0ZW1zIGJ5IGtleVxuICAgIHRoaXNbTFJVX0xJU1RdID0gbmV3IFlhbGxpc3QoKSAvLyBsaXN0IG9mIGl0ZW1zIGluIG9yZGVyIG9mIHVzZSByZWNlbmN5XG4gICAgdGhpc1tMRU5HVEhdID0gMCAvLyBsZW5ndGggb2YgaXRlbXMgaW4gdGhlIGxpc3RcbiAgfVxuXG4gIGR1bXAgKCkge1xuICAgIHJldHVybiB0aGlzW0xSVV9MSVNUXS5tYXAoaGl0ID0+XG4gICAgICBpc1N0YWxlKHRoaXMsIGhpdCkgPyBmYWxzZSA6IHtcbiAgICAgICAgazogaGl0LmtleSxcbiAgICAgICAgdjogaGl0LnZhbHVlLFxuICAgICAgICBlOiBoaXQubm93ICsgKGhpdC5tYXhBZ2UgfHwgMClcbiAgICAgIH0pLnRvQXJyYXkoKS5maWx0ZXIoaCA9PiBoKVxuICB9XG5cbiAgZHVtcExydSAoKSB7XG4gICAgcmV0dXJuIHRoaXNbTFJVX0xJU1RdXG4gIH1cblxuICBzZXQgKGtleSwgdmFsdWUsIG1heEFnZSkge1xuICAgIG1heEFnZSA9IG1heEFnZSB8fCB0aGlzW01BWF9BR0VdXG5cbiAgICBpZiAobWF4QWdlICYmIHR5cGVvZiBtYXhBZ2UgIT09ICdudW1iZXInKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbWF4QWdlIG11c3QgYmUgYSBudW1iZXInKVxuXG4gICAgY29uc3Qgbm93ID0gbWF4QWdlID8gRGF0ZS5ub3coKSA6IDBcbiAgICBjb25zdCBsZW4gPSB0aGlzW0xFTkdUSF9DQUxDVUxBVE9SXSh2YWx1ZSwga2V5KVxuXG4gICAgaWYgKHRoaXNbQ0FDSEVdLmhhcyhrZXkpKSB7XG4gICAgICBpZiAobGVuID4gdGhpc1tNQVhdKSB7XG4gICAgICAgIGRlbCh0aGlzLCB0aGlzW0NBQ0hFXS5nZXQoa2V5KSlcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzW0NBQ0hFXS5nZXQoa2V5KVxuICAgICAgY29uc3QgaXRlbSA9IG5vZGUudmFsdWVcblxuICAgICAgLy8gZGlzcG9zZSBvZiB0aGUgb2xkIG9uZSBiZWZvcmUgb3ZlcndyaXRpbmdcbiAgICAgIC8vIHNwbGl0IG91dCBpbnRvIDIgaWZzIGZvciBiZXR0ZXIgY292ZXJhZ2UgdHJhY2tpbmdcbiAgICAgIGlmICh0aGlzW0RJU1BPU0VdKSB7XG4gICAgICAgIGlmICghdGhpc1tOT19ESVNQT1NFX09OX1NFVF0pXG4gICAgICAgICAgdGhpc1tESVNQT1NFXShrZXksIGl0ZW0udmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGl0ZW0ubm93ID0gbm93XG4gICAgICBpdGVtLm1heEFnZSA9IG1heEFnZVxuICAgICAgaXRlbS52YWx1ZSA9IHZhbHVlXG4gICAgICB0aGlzW0xFTkdUSF0gKz0gbGVuIC0gaXRlbS5sZW5ndGhcbiAgICAgIGl0ZW0ubGVuZ3RoID0gbGVuXG4gICAgICB0aGlzLmdldChrZXkpXG4gICAgICB0cmltKHRoaXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IGhpdCA9IG5ldyBFbnRyeShrZXksIHZhbHVlLCBsZW4sIG5vdywgbWF4QWdlKVxuXG4gICAgLy8gb3ZlcnNpemVkIG9iamVjdHMgZmFsbCBvdXQgb2YgY2FjaGUgYXV0b21hdGljYWxseS5cbiAgICBpZiAoaGl0Lmxlbmd0aCA+IHRoaXNbTUFYXSkge1xuICAgICAgaWYgKHRoaXNbRElTUE9TRV0pXG4gICAgICAgIHRoaXNbRElTUE9TRV0oa2V5LCB2YWx1ZSlcblxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdGhpc1tMRU5HVEhdICs9IGhpdC5sZW5ndGhcbiAgICB0aGlzW0xSVV9MSVNUXS51bnNoaWZ0KGhpdClcbiAgICB0aGlzW0NBQ0hFXS5zZXQoa2V5LCB0aGlzW0xSVV9MSVNUXS5oZWFkKVxuICAgIHRyaW0odGhpcylcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaGFzIChrZXkpIHtcbiAgICBpZiAoIXRoaXNbQ0FDSEVdLmhhcyhrZXkpKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBoaXQgPSB0aGlzW0NBQ0hFXS5nZXQoa2V5KS52YWx1ZVxuICAgIHJldHVybiAhaXNTdGFsZSh0aGlzLCBoaXQpXG4gIH1cblxuICBnZXQgKGtleSkge1xuICAgIHJldHVybiBnZXQodGhpcywga2V5LCB0cnVlKVxuICB9XG5cbiAgcGVlayAoa2V5KSB7XG4gICAgcmV0dXJuIGdldCh0aGlzLCBrZXksIGZhbHNlKVxuICB9XG5cbiAgcG9wICgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpc1tMUlVfTElTVF0udGFpbFxuICAgIGlmICghbm9kZSlcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICBkZWwodGhpcywgbm9kZSlcbiAgICByZXR1cm4gbm9kZS52YWx1ZVxuICB9XG5cbiAgZGVsIChrZXkpIHtcbiAgICBkZWwodGhpcywgdGhpc1tDQUNIRV0uZ2V0KGtleSkpXG4gIH1cblxuICBsb2FkIChhcnIpIHtcbiAgICAvLyByZXNldCB0aGUgY2FjaGVcbiAgICB0aGlzLnJlc2V0KClcblxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICAvLyBBIHByZXZpb3VzIHNlcmlhbGl6ZWQgY2FjaGUgaGFzIHRoZSBtb3N0IHJlY2VudCBpdGVtcyBmaXJzdFxuICAgIGZvciAobGV0IGwgPSBhcnIubGVuZ3RoIC0gMTsgbCA+PSAwOyBsLS0pIHtcbiAgICAgIGNvbnN0IGhpdCA9IGFycltsXVxuICAgICAgY29uc3QgZXhwaXJlc0F0ID0gaGl0LmUgfHwgMFxuICAgICAgaWYgKGV4cGlyZXNBdCA9PT0gMClcbiAgICAgICAgLy8gdGhlIGl0ZW0gd2FzIGNyZWF0ZWQgd2l0aG91dCBleHBpcmF0aW9uIGluIGEgbm9uIGFnZWQgY2FjaGVcbiAgICAgICAgdGhpcy5zZXQoaGl0LmssIGhpdC52KVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IG1heEFnZSA9IGV4cGlyZXNBdCAtIG5vd1xuICAgICAgICAvLyBkb250IGFkZCBhbHJlYWR5IGV4cGlyZWQgaXRlbXNcbiAgICAgICAgaWYgKG1heEFnZSA+IDApIHtcbiAgICAgICAgICB0aGlzLnNldChoaXQuaywgaGl0LnYsIG1heEFnZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBydW5lICgpIHtcbiAgICB0aGlzW0NBQ0hFXS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiBnZXQodGhpcywga2V5LCBmYWxzZSkpXG4gIH1cbn1cblxuY29uc3QgZ2V0ID0gKHNlbGYsIGtleSwgZG9Vc2UpID0+IHtcbiAgY29uc3Qgbm9kZSA9IHNlbGZbQ0FDSEVdLmdldChrZXkpXG4gIGlmIChub2RlKSB7XG4gICAgY29uc3QgaGl0ID0gbm9kZS52YWx1ZVxuICAgIGlmIChpc1N0YWxlKHNlbGYsIGhpdCkpIHtcbiAgICAgIGRlbChzZWxmLCBub2RlKVxuICAgICAgaWYgKCFzZWxmW0FMTE9XX1NUQUxFXSlcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZG9Vc2UpIHtcbiAgICAgICAgaWYgKHNlbGZbVVBEQVRFX0FHRV9PTl9HRVRdKVxuICAgICAgICAgIG5vZGUudmFsdWUubm93ID0gRGF0ZS5ub3coKVxuICAgICAgICBzZWxmW0xSVV9MSVNUXS51bnNoaWZ0Tm9kZShub2RlKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaGl0LnZhbHVlXG4gIH1cbn1cblxuY29uc3QgaXNTdGFsZSA9IChzZWxmLCBoaXQpID0+IHtcbiAgaWYgKCFoaXQgfHwgKCFoaXQubWF4QWdlICYmICFzZWxmW01BWF9BR0VdKSlcbiAgICByZXR1cm4gZmFsc2VcblxuICBjb25zdCBkaWZmID0gRGF0ZS5ub3coKSAtIGhpdC5ub3dcbiAgcmV0dXJuIGhpdC5tYXhBZ2UgPyBkaWZmID4gaGl0Lm1heEFnZVxuICAgIDogc2VsZltNQVhfQUdFXSAmJiAoZGlmZiA+IHNlbGZbTUFYX0FHRV0pXG59XG5cbmNvbnN0IHRyaW0gPSBzZWxmID0+IHtcbiAgaWYgKHNlbGZbTEVOR1RIXSA+IHNlbGZbTUFYXSkge1xuICAgIGZvciAobGV0IHdhbGtlciA9IHNlbGZbTFJVX0xJU1RdLnRhaWw7XG4gICAgICBzZWxmW0xFTkdUSF0gPiBzZWxmW01BWF0gJiYgd2Fsa2VyICE9PSBudWxsOykge1xuICAgICAgLy8gV2Uga25vdyB0aGF0IHdlJ3JlIGFib3V0IHRvIGRlbGV0ZSB0aGlzIG9uZSwgYW5kIGFsc29cbiAgICAgIC8vIHdoYXQgdGhlIG5leHQgbGVhc3QgcmVjZW50bHkgdXNlZCBrZXkgd2lsbCBiZSwgc28ganVzdFxuICAgICAgLy8gZ28gYWhlYWQgYW5kIHNldCBpdCBub3cuXG4gICAgICBjb25zdCBwcmV2ID0gd2Fsa2VyLnByZXZcbiAgICAgIGRlbChzZWxmLCB3YWxrZXIpXG4gICAgICB3YWxrZXIgPSBwcmV2XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlbCA9IChzZWxmLCBub2RlKSA9PiB7XG4gIGlmIChub2RlKSB7XG4gICAgY29uc3QgaGl0ID0gbm9kZS52YWx1ZVxuICAgIGlmIChzZWxmW0RJU1BPU0VdKVxuICAgICAgc2VsZltESVNQT1NFXShoaXQua2V5LCBoaXQudmFsdWUpXG5cbiAgICBzZWxmW0xFTkdUSF0gLT0gaGl0Lmxlbmd0aFxuICAgIHNlbGZbQ0FDSEVdLmRlbGV0ZShoaXQua2V5KVxuICAgIHNlbGZbTFJVX0xJU1RdLnJlbW92ZU5vZGUobm9kZSlcbiAgfVxufVxuXG5jbGFzcyBFbnRyeSB7XG4gIGNvbnN0cnVjdG9yIChrZXksIHZhbHVlLCBsZW5ndGgsIG5vdywgbWF4QWdlKSB7XG4gICAgdGhpcy5rZXkgPSBrZXlcbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aFxuICAgIHRoaXMubm93ID0gbm93XG4gICAgdGhpcy5tYXhBZ2UgPSBtYXhBZ2UgfHwgMFxuICB9XG59XG5cbmNvbnN0IGZvckVhY2hTdGVwID0gKHNlbGYsIGZuLCBub2RlLCB0aGlzcCkgPT4ge1xuICBsZXQgaGl0ID0gbm9kZS52YWx1ZVxuICBpZiAoaXNTdGFsZShzZWxmLCBoaXQpKSB7XG4gICAgZGVsKHNlbGYsIG5vZGUpXG4gICAgaWYgKCFzZWxmW0FMTE9XX1NUQUxFXSlcbiAgICAgIGhpdCA9IHVuZGVmaW5lZFxuICB9XG4gIGlmIChoaXQpXG4gICAgZm4uY2FsbCh0aGlzcCwgaGl0LnZhbHVlLCBoaXQua2V5LCBzZWxmKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExSVUNhY2hlXG4iLCJjb25zdCBBTlkgPSBTeW1ib2woJ1NlbVZlciBBTlknKVxuLy8gaG9pc3RlZCBjbGFzcyBmb3IgY3ljbGljIGRlcGVuZGVuY3lcbmNsYXNzIENvbXBhcmF0b3Ige1xuICBzdGF0aWMgZ2V0IEFOWSAoKSB7XG4gICAgcmV0dXJuIEFOWVxuICB9XG5cbiAgY29uc3RydWN0b3IgKGNvbXAsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gcGFyc2VPcHRpb25zKG9wdGlvbnMpXG5cbiAgICBpZiAoY29tcCBpbnN0YW5jZW9mIENvbXBhcmF0b3IpIHtcbiAgICAgIGlmIChjb21wLmxvb3NlID09PSAhIW9wdGlvbnMubG9vc2UpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXAgPSBjb21wLnZhbHVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGVidWcoJ2NvbXBhcmF0b3InLCBjb21wLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmxvb3NlID0gISFvcHRpb25zLmxvb3NlXG4gICAgdGhpcy5wYXJzZShjb21wKVxuXG4gICAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5vcGVyYXRvciArIHRoaXMuc2VtdmVyLnZlcnNpb25cbiAgICB9XG5cbiAgICBkZWJ1ZygnY29tcCcsIHRoaXMpXG4gIH1cblxuICBwYXJzZSAoY29tcCkge1xuICAgIGNvbnN0IHIgPSB0aGlzLm9wdGlvbnMubG9vc2UgPyByZVt0LkNPTVBBUkFUT1JMT09TRV0gOiByZVt0LkNPTVBBUkFUT1JdXG4gICAgY29uc3QgbSA9IGNvbXAubWF0Y2gocilcblxuICAgIGlmICghbSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBjb21wYXJhdG9yOiAke2NvbXB9YClcbiAgICB9XG5cbiAgICB0aGlzLm9wZXJhdG9yID0gbVsxXSAhPT0gdW5kZWZpbmVkID8gbVsxXSA6ICcnXG4gICAgaWYgKHRoaXMub3BlcmF0b3IgPT09ICc9Jykge1xuICAgICAgdGhpcy5vcGVyYXRvciA9ICcnXG4gICAgfVxuXG4gICAgLy8gaWYgaXQgbGl0ZXJhbGx5IGlzIGp1c3QgJz4nIG9yICcnIHRoZW4gYWxsb3cgYW55dGhpbmcuXG4gICAgaWYgKCFtWzJdKSB7XG4gICAgICB0aGlzLnNlbXZlciA9IEFOWVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbXZlciA9IG5ldyBTZW1WZXIobVsyXSwgdGhpcy5vcHRpb25zLmxvb3NlKVxuICAgIH1cbiAgfVxuXG4gIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgdGVzdCAodmVyc2lvbikge1xuICAgIGRlYnVnKCdDb21wYXJhdG9yLnRlc3QnLCB2ZXJzaW9uLCB0aGlzLm9wdGlvbnMubG9vc2UpXG5cbiAgICBpZiAodGhpcy5zZW12ZXIgPT09IEFOWSB8fCB2ZXJzaW9uID09PSBBTlkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgdGhpcy5vcHRpb25zKVxuICAgICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNtcCh2ZXJzaW9uLCB0aGlzLm9wZXJhdG9yLCB0aGlzLnNlbXZlciwgdGhpcy5vcHRpb25zKVxuICB9XG5cbiAgaW50ZXJzZWN0cyAoY29tcCwgb3B0aW9ucykge1xuICAgIGlmICghKGNvbXAgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYSBDb21wYXJhdG9yIGlzIHJlcXVpcmVkJylcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMgfHwgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgICBvcHRpb25zID0ge1xuICAgICAgICBsb29zZTogISFvcHRpb25zLFxuICAgICAgICBpbmNsdWRlUHJlcmVsZWFzZTogZmFsc2UsXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3BlcmF0b3IgPT09ICcnKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUmFuZ2UoY29tcC52YWx1ZSwgb3B0aW9ucykudGVzdCh0aGlzLnZhbHVlKVxuICAgIH0gZWxzZSBpZiAoY29tcC5vcGVyYXRvciA9PT0gJycpIHtcbiAgICAgIGlmIChjb21wLnZhbHVlID09PSAnJykge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBSYW5nZSh0aGlzLnZhbHVlLCBvcHRpb25zKS50ZXN0KGNvbXAuc2VtdmVyKVxuICAgIH1cblxuICAgIGNvbnN0IHNhbWVEaXJlY3Rpb25JbmNyZWFzaW5nID1cbiAgICAgICh0aGlzLm9wZXJhdG9yID09PSAnPj0nIHx8IHRoaXMub3BlcmF0b3IgPT09ICc+JykgJiZcbiAgICAgIChjb21wLm9wZXJhdG9yID09PSAnPj0nIHx8IGNvbXAub3BlcmF0b3IgPT09ICc+JylcbiAgICBjb25zdCBzYW1lRGlyZWN0aW9uRGVjcmVhc2luZyA9XG4gICAgICAodGhpcy5vcGVyYXRvciA9PT0gJzw9JyB8fCB0aGlzLm9wZXJhdG9yID09PSAnPCcpICYmXG4gICAgICAoY29tcC5vcGVyYXRvciA9PT0gJzw9JyB8fCBjb21wLm9wZXJhdG9yID09PSAnPCcpXG4gICAgY29uc3Qgc2FtZVNlbVZlciA9IHRoaXMuc2VtdmVyLnZlcnNpb24gPT09IGNvbXAuc2VtdmVyLnZlcnNpb25cbiAgICBjb25zdCBkaWZmZXJlbnREaXJlY3Rpb25zSW5jbHVzaXZlID1cbiAgICAgICh0aGlzLm9wZXJhdG9yID09PSAnPj0nIHx8IHRoaXMub3BlcmF0b3IgPT09ICc8PScpICYmXG4gICAgICAoY29tcC5vcGVyYXRvciA9PT0gJz49JyB8fCBjb21wLm9wZXJhdG9yID09PSAnPD0nKVxuICAgIGNvbnN0IG9wcG9zaXRlRGlyZWN0aW9uc0xlc3NUaGFuID1cbiAgICAgIGNtcCh0aGlzLnNlbXZlciwgJzwnLCBjb21wLnNlbXZlciwgb3B0aW9ucykgJiZcbiAgICAgICh0aGlzLm9wZXJhdG9yID09PSAnPj0nIHx8IHRoaXMub3BlcmF0b3IgPT09ICc+JykgJiZcbiAgICAgICAgKGNvbXAub3BlcmF0b3IgPT09ICc8PScgfHwgY29tcC5vcGVyYXRvciA9PT0gJzwnKVxuICAgIGNvbnN0IG9wcG9zaXRlRGlyZWN0aW9uc0dyZWF0ZXJUaGFuID1cbiAgICAgIGNtcCh0aGlzLnNlbXZlciwgJz4nLCBjb21wLnNlbXZlciwgb3B0aW9ucykgJiZcbiAgICAgICh0aGlzLm9wZXJhdG9yID09PSAnPD0nIHx8IHRoaXMub3BlcmF0b3IgPT09ICc8JykgJiZcbiAgICAgICAgKGNvbXAub3BlcmF0b3IgPT09ICc+PScgfHwgY29tcC5vcGVyYXRvciA9PT0gJz4nKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIHNhbWVEaXJlY3Rpb25JbmNyZWFzaW5nIHx8XG4gICAgICBzYW1lRGlyZWN0aW9uRGVjcmVhc2luZyB8fFxuICAgICAgKHNhbWVTZW1WZXIgJiYgZGlmZmVyZW50RGlyZWN0aW9uc0luY2x1c2l2ZSkgfHxcbiAgICAgIG9wcG9zaXRlRGlyZWN0aW9uc0xlc3NUaGFuIHx8XG4gICAgICBvcHBvc2l0ZURpcmVjdGlvbnNHcmVhdGVyVGhhblxuICAgIClcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBhcmF0b3JcblxuY29uc3QgcGFyc2VPcHRpb25zID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvcGFyc2Utb3B0aW9ucycpXG5jb25zdCB7IHJlLCB0IH0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9yZScpXG5jb25zdCBjbXAgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvY21wJylcbmNvbnN0IGRlYnVnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvZGVidWcnKVxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi9zZW12ZXInKVxuY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuL3JhbmdlJylcbiIsIi8vIGhvaXN0ZWQgY2xhc3MgZm9yIGN5Y2xpYyBkZXBlbmRlbmN5XG5jbGFzcyBSYW5nZSB7XG4gIGNvbnN0cnVjdG9yIChyYW5nZSwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBwYXJzZU9wdGlvbnMob3B0aW9ucylcblxuICAgIGlmIChyYW5nZSBpbnN0YW5jZW9mIFJhbmdlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHJhbmdlLmxvb3NlID09PSAhIW9wdGlvbnMubG9vc2UgJiZcbiAgICAgICAgcmFuZ2UuaW5jbHVkZVByZXJlbGVhc2UgPT09ICEhb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiByYW5nZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZS5yYXcsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJhbmdlIGluc3RhbmNlb2YgQ29tcGFyYXRvcikge1xuICAgICAgLy8ganVzdCBwdXQgaXQgaW4gdGhlIHNldCBhbmQgcmV0dXJuXG4gICAgICB0aGlzLnJhdyA9IHJhbmdlLnZhbHVlXG4gICAgICB0aGlzLnNldCA9IFtbcmFuZ2VdXVxuICAgICAgdGhpcy5mb3JtYXQoKVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5sb29zZSA9ICEhb3B0aW9ucy5sb29zZVxuICAgIHRoaXMuaW5jbHVkZVByZXJlbGVhc2UgPSAhIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2VcblxuICAgIC8vIEZpcnN0LCBzcGxpdCBiYXNlZCBvbiBib29sZWFuIG9yIHx8XG4gICAgdGhpcy5yYXcgPSByYW5nZVxuICAgIHRoaXMuc2V0ID0gcmFuZ2VcbiAgICAgIC5zcGxpdCgnfHwnKVxuICAgICAgLy8gbWFwIHRoZSByYW5nZSB0byBhIDJkIGFycmF5IG9mIGNvbXBhcmF0b3JzXG4gICAgICAubWFwKHIgPT4gdGhpcy5wYXJzZVJhbmdlKHIudHJpbSgpKSlcbiAgICAgIC8vIHRocm93IG91dCBhbnkgY29tcGFyYXRvciBsaXN0cyB0aGF0IGFyZSBlbXB0eVxuICAgICAgLy8gdGhpcyBnZW5lcmFsbHkgbWVhbnMgdGhhdCBpdCB3YXMgbm90IGEgdmFsaWQgcmFuZ2UsIHdoaWNoIGlzIGFsbG93ZWRcbiAgICAgIC8vIGluIGxvb3NlIG1vZGUsIGJ1dCB3aWxsIHN0aWxsIHRocm93IGlmIHRoZSBXSE9MRSByYW5nZSBpcyBpbnZhbGlkLlxuICAgICAgLmZpbHRlcihjID0+IGMubGVuZ3RoKVxuXG4gICAgaWYgKCF0aGlzLnNldC5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgU2VtVmVyIFJhbmdlOiAke3JhbmdlfWApXG4gICAgfVxuXG4gICAgLy8gaWYgd2UgaGF2ZSBhbnkgdGhhdCBhcmUgbm90IHRoZSBudWxsIHNldCwgdGhyb3cgb3V0IG51bGwgc2V0cy5cbiAgICBpZiAodGhpcy5zZXQubGVuZ3RoID4gMSkge1xuICAgICAgLy8ga2VlcCB0aGUgZmlyc3Qgb25lLCBpbiBjYXNlIHRoZXkncmUgYWxsIG51bGwgc2V0c1xuICAgICAgY29uc3QgZmlyc3QgPSB0aGlzLnNldFswXVxuICAgICAgdGhpcy5zZXQgPSB0aGlzLnNldC5maWx0ZXIoYyA9PiAhaXNOdWxsU2V0KGNbMF0pKVxuICAgICAgaWYgKHRoaXMuc2V0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnNldCA9IFtmaXJzdF1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zZXQubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBpZiB3ZSBoYXZlIGFueSB0aGF0IGFyZSAqLCB0aGVuIHRoZSByYW5nZSBpcyBqdXN0ICpcbiAgICAgICAgZm9yIChjb25zdCBjIG9mIHRoaXMuc2V0KSB7XG4gICAgICAgICAgaWYgKGMubGVuZ3RoID09PSAxICYmIGlzQW55KGNbMF0pKSB7XG4gICAgICAgICAgICB0aGlzLnNldCA9IFtjXVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZvcm1hdCgpXG4gIH1cblxuICBmb3JtYXQgKCkge1xuICAgIHRoaXMucmFuZ2UgPSB0aGlzLnNldFxuICAgICAgLm1hcCgoY29tcHMpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbXBzLmpvaW4oJyAnKS50cmltKClcbiAgICAgIH0pXG4gICAgICAuam9pbignfHwnKVxuICAgICAgLnRyaW0oKVxuICAgIHJldHVybiB0aGlzLnJhbmdlXG4gIH1cblxuICB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmFuZ2VcbiAgfVxuXG4gIHBhcnNlUmFuZ2UgKHJhbmdlKSB7XG4gICAgcmFuZ2UgPSByYW5nZS50cmltKClcblxuICAgIC8vIG1lbW9pemUgcmFuZ2UgcGFyc2luZyBmb3IgcGVyZm9ybWFuY2UuXG4gICAgLy8gdGhpcyBpcyBhIHZlcnkgaG90IHBhdGgsIGFuZCBmdWxseSBkZXRlcm1pbmlzdGljLlxuICAgIGNvbnN0IG1lbW9PcHRzID0gT2JqZWN0LmtleXModGhpcy5vcHRpb25zKS5qb2luKCcsJylcbiAgICBjb25zdCBtZW1vS2V5ID0gYHBhcnNlUmFuZ2U6JHttZW1vT3B0c306JHtyYW5nZX1gXG4gICAgY29uc3QgY2FjaGVkID0gY2FjaGUuZ2V0KG1lbW9LZXkpXG4gICAgaWYgKGNhY2hlZCkge1xuICAgICAgcmV0dXJuIGNhY2hlZFxuICAgIH1cblxuICAgIGNvbnN0IGxvb3NlID0gdGhpcy5vcHRpb25zLmxvb3NlXG4gICAgLy8gYDEuMi4zIC0gMS4yLjRgID0+IGA+PTEuMi4zIDw9MS4yLjRgXG4gICAgY29uc3QgaHIgPSBsb29zZSA/IHJlW3QuSFlQSEVOUkFOR0VMT09TRV0gOiByZVt0LkhZUEhFTlJBTkdFXVxuICAgIHJhbmdlID0gcmFuZ2UucmVwbGFjZShociwgaHlwaGVuUmVwbGFjZSh0aGlzLm9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UpKVxuICAgIGRlYnVnKCdoeXBoZW4gcmVwbGFjZScsIHJhbmdlKVxuICAgIC8vIGA+IDEuMi4zIDwgMS4yLjVgID0+IGA+MS4yLjMgPDEuMi41YFxuICAgIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVt0LkNPTVBBUkFUT1JUUklNXSwgY29tcGFyYXRvclRyaW1SZXBsYWNlKVxuICAgIGRlYnVnKCdjb21wYXJhdG9yIHRyaW0nLCByYW5nZSlcblxuICAgIC8vIGB+IDEuMi4zYCA9PiBgfjEuMi4zYFxuICAgIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVt0LlRJTERFVFJJTV0sIHRpbGRlVHJpbVJlcGxhY2UpXG5cbiAgICAvLyBgXiAxLjIuM2AgPT4gYF4xLjIuM2BcbiAgICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbdC5DQVJFVFRSSU1dLCBjYXJldFRyaW1SZXBsYWNlKVxuXG4gICAgLy8gbm9ybWFsaXplIHNwYWNlc1xuICAgIHJhbmdlID0gcmFuZ2Uuc3BsaXQoL1xccysvKS5qb2luKCcgJylcblxuICAgIC8vIEF0IHRoaXMgcG9pbnQsIHRoZSByYW5nZSBpcyBjb21wbGV0ZWx5IHRyaW1tZWQgYW5kXG4gICAgLy8gcmVhZHkgdG8gYmUgc3BsaXQgaW50byBjb21wYXJhdG9ycy5cblxuICAgIGxldCByYW5nZUxpc3QgPSByYW5nZVxuICAgICAgLnNwbGl0KCcgJylcbiAgICAgIC5tYXAoY29tcCA9PiBwYXJzZUNvbXBhcmF0b3IoY29tcCwgdGhpcy5vcHRpb25zKSlcbiAgICAgIC5qb2luKCcgJylcbiAgICAgIC5zcGxpdCgvXFxzKy8pXG4gICAgICAvLyA+PTAuMC4wIGlzIGVxdWl2YWxlbnQgdG8gKlxuICAgICAgLm1hcChjb21wID0+IHJlcGxhY2VHVEUwKGNvbXAsIHRoaXMub3B0aW9ucykpXG5cbiAgICBpZiAobG9vc2UpIHtcbiAgICAgIC8vIGluIGxvb3NlIG1vZGUsIHRocm93IG91dCBhbnkgdGhhdCBhcmUgbm90IHZhbGlkIGNvbXBhcmF0b3JzXG4gICAgICByYW5nZUxpc3QgPSByYW5nZUxpc3QuZmlsdGVyKGNvbXAgPT4ge1xuICAgICAgICBkZWJ1ZygnbG9vc2UgaW52YWxpZCBmaWx0ZXInLCBjb21wLCB0aGlzLm9wdGlvbnMpXG4gICAgICAgIHJldHVybiAhIWNvbXAubWF0Y2gocmVbdC5DT01QQVJBVE9STE9PU0VdKVxuICAgICAgfSlcbiAgICB9XG4gICAgZGVidWcoJ3JhbmdlIGxpc3QnLCByYW5nZUxpc3QpXG5cbiAgICAvLyBpZiBhbnkgY29tcGFyYXRvcnMgYXJlIHRoZSBudWxsIHNldCwgdGhlbiByZXBsYWNlIHdpdGggSlVTVCBudWxsIHNldFxuICAgIC8vIGlmIG1vcmUgdGhhbiBvbmUgY29tcGFyYXRvciwgcmVtb3ZlIGFueSAqIGNvbXBhcmF0b3JzXG4gICAgLy8gYWxzbywgZG9uJ3QgaW5jbHVkZSB0aGUgc2FtZSBjb21wYXJhdG9yIG1vcmUgdGhhbiBvbmNlXG4gICAgY29uc3QgcmFuZ2VNYXAgPSBuZXcgTWFwKClcbiAgICBjb25zdCBjb21wYXJhdG9ycyA9IHJhbmdlTGlzdC5tYXAoY29tcCA9PiBuZXcgQ29tcGFyYXRvcihjb21wLCB0aGlzLm9wdGlvbnMpKVxuICAgIGZvciAoY29uc3QgY29tcCBvZiBjb21wYXJhdG9ycykge1xuICAgICAgaWYgKGlzTnVsbFNldChjb21wKSkge1xuICAgICAgICByZXR1cm4gW2NvbXBdXG4gICAgICB9XG4gICAgICByYW5nZU1hcC5zZXQoY29tcC52YWx1ZSwgY29tcClcbiAgICB9XG4gICAgaWYgKHJhbmdlTWFwLnNpemUgPiAxICYmIHJhbmdlTWFwLmhhcygnJykpIHtcbiAgICAgIHJhbmdlTWFwLmRlbGV0ZSgnJylcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBbLi4ucmFuZ2VNYXAudmFsdWVzKCldXG4gICAgY2FjaGUuc2V0KG1lbW9LZXksIHJlc3VsdClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBpbnRlcnNlY3RzIChyYW5nZSwgb3B0aW9ucykge1xuICAgIGlmICghKHJhbmdlIGluc3RhbmNlb2YgUmFuZ2UpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhIFJhbmdlIGlzIHJlcXVpcmVkJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zZXQuc29tZSgodGhpc0NvbXBhcmF0b3JzKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBpc1NhdGlzZmlhYmxlKHRoaXNDb21wYXJhdG9ycywgb3B0aW9ucykgJiZcbiAgICAgICAgcmFuZ2Uuc2V0LnNvbWUoKHJhbmdlQ29tcGFyYXRvcnMpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgaXNTYXRpc2ZpYWJsZShyYW5nZUNvbXBhcmF0b3JzLCBvcHRpb25zKSAmJlxuICAgICAgICAgICAgdGhpc0NvbXBhcmF0b3JzLmV2ZXJ5KCh0aGlzQ29tcGFyYXRvcikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gcmFuZ2VDb21wYXJhdG9ycy5ldmVyeSgocmFuZ2VDb21wYXJhdG9yKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNDb21wYXJhdG9yLmludGVyc2VjdHMocmFuZ2VDb21wYXJhdG9yLCBvcHRpb25zKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIC8vIGlmIEFOWSBvZiB0aGUgc2V0cyBtYXRjaCBBTEwgb2YgaXRzIGNvbXBhcmF0b3JzLCB0aGVuIHBhc3NcbiAgdGVzdCAodmVyc2lvbikge1xuICAgIGlmICghdmVyc2lvbikge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgdGhpcy5vcHRpb25zKVxuICAgICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNldC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRlc3RTZXQodGhpcy5zZXRbaV0sIHZlcnNpb24sIHRoaXMub3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gUmFuZ2VcblxuY29uc3QgTFJVID0gcmVxdWlyZSgnbHJ1LWNhY2hlJylcbmNvbnN0IGNhY2hlID0gbmV3IExSVSh7IG1heDogMTAwMCB9KVxuXG5jb25zdCBwYXJzZU9wdGlvbnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9wYXJzZS1vcHRpb25zJylcbmNvbnN0IENvbXBhcmF0b3IgPSByZXF1aXJlKCcuL2NvbXBhcmF0b3InKVxuY29uc3QgZGVidWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9kZWJ1ZycpXG5jb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuL3NlbXZlcicpXG5jb25zdCB7XG4gIHJlLFxuICB0LFxuICBjb21wYXJhdG9yVHJpbVJlcGxhY2UsXG4gIHRpbGRlVHJpbVJlcGxhY2UsXG4gIGNhcmV0VHJpbVJlcGxhY2UsXG59ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvcmUnKVxuXG5jb25zdCBpc051bGxTZXQgPSBjID0+IGMudmFsdWUgPT09ICc8MC4wLjAtMCdcbmNvbnN0IGlzQW55ID0gYyA9PiBjLnZhbHVlID09PSAnJ1xuXG4vLyB0YWtlIGEgc2V0IG9mIGNvbXBhcmF0b3JzIGFuZCBkZXRlcm1pbmUgd2hldGhlciB0aGVyZVxuLy8gZXhpc3RzIGEgdmVyc2lvbiB3aGljaCBjYW4gc2F0aXNmeSBpdFxuY29uc3QgaXNTYXRpc2ZpYWJsZSA9IChjb21wYXJhdG9ycywgb3B0aW9ucykgPT4ge1xuICBsZXQgcmVzdWx0ID0gdHJ1ZVxuICBjb25zdCByZW1haW5pbmdDb21wYXJhdG9ycyA9IGNvbXBhcmF0b3JzLnNsaWNlKClcbiAgbGV0IHRlc3RDb21wYXJhdG9yID0gcmVtYWluaW5nQ29tcGFyYXRvcnMucG9wKClcblxuICB3aGlsZSAocmVzdWx0ICYmIHJlbWFpbmluZ0NvbXBhcmF0b3JzLmxlbmd0aCkge1xuICAgIHJlc3VsdCA9IHJlbWFpbmluZ0NvbXBhcmF0b3JzLmV2ZXJ5KChvdGhlckNvbXBhcmF0b3IpID0+IHtcbiAgICAgIHJldHVybiB0ZXN0Q29tcGFyYXRvci5pbnRlcnNlY3RzKG90aGVyQ29tcGFyYXRvciwgb3B0aW9ucylcbiAgICB9KVxuXG4gICAgdGVzdENvbXBhcmF0b3IgPSByZW1haW5pbmdDb21wYXJhdG9ycy5wb3AoKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vLyBjb21wcmlzZWQgb2YgeHJhbmdlcywgdGlsZGVzLCBzdGFycywgYW5kIGd0bHQncyBhdCB0aGlzIHBvaW50LlxuLy8gYWxyZWFkeSByZXBsYWNlZCB0aGUgaHlwaGVuIHJhbmdlc1xuLy8gdHVybiBpbnRvIGEgc2V0IG9mIEpVU1QgY29tcGFyYXRvcnMuXG5jb25zdCBwYXJzZUNvbXBhcmF0b3IgPSAoY29tcCwgb3B0aW9ucykgPT4ge1xuICBkZWJ1ZygnY29tcCcsIGNvbXAsIG9wdGlvbnMpXG4gIGNvbXAgPSByZXBsYWNlQ2FyZXRzKGNvbXAsIG9wdGlvbnMpXG4gIGRlYnVnKCdjYXJldCcsIGNvbXApXG4gIGNvbXAgPSByZXBsYWNlVGlsZGVzKGNvbXAsIG9wdGlvbnMpXG4gIGRlYnVnKCd0aWxkZXMnLCBjb21wKVxuICBjb21wID0gcmVwbGFjZVhSYW5nZXMoY29tcCwgb3B0aW9ucylcbiAgZGVidWcoJ3hyYW5nZScsIGNvbXApXG4gIGNvbXAgPSByZXBsYWNlU3RhcnMoY29tcCwgb3B0aW9ucylcbiAgZGVidWcoJ3N0YXJzJywgY29tcClcbiAgcmV0dXJuIGNvbXBcbn1cblxuY29uc3QgaXNYID0gaWQgPT4gIWlkIHx8IGlkLnRvTG93ZXJDYXNlKCkgPT09ICd4JyB8fCBpZCA9PT0gJyonXG5cbi8vIH4sIH4+IC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gfjIsIH4yLngsIH4yLngueCwgfj4yLCB+PjIueCB+PjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMC0wXG4vLyB+Mi4wLCB+Mi4wLngsIH4+Mi4wLCB+PjIuMC54IC0tPiA+PTIuMC4wIDwyLjEuMC0wXG4vLyB+MS4yLCB+MS4yLngsIH4+MS4yLCB+PjEuMi54IC0tPiA+PTEuMi4wIDwxLjMuMC0wXG4vLyB+MS4yLjMsIH4+MS4yLjMgLS0+ID49MS4yLjMgPDEuMy4wLTBcbi8vIH4xLjIuMCwgfj4xLjIuMCAtLT4gPj0xLjIuMCA8MS4zLjAtMFxuY29uc3QgcmVwbGFjZVRpbGRlcyA9IChjb21wLCBvcHRpb25zKSA9PlxuICBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcCgoYykgPT4ge1xuICAgIHJldHVybiByZXBsYWNlVGlsZGUoYywgb3B0aW9ucylcbiAgfSkuam9pbignICcpXG5cbmNvbnN0IHJlcGxhY2VUaWxkZSA9IChjb21wLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHIgPSBvcHRpb25zLmxvb3NlID8gcmVbdC5USUxERUxPT1NFXSA6IHJlW3QuVElMREVdXG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgKF8sIE0sIG0sIHAsIHByKSA9PiB7XG4gICAgZGVidWcoJ3RpbGRlJywgY29tcCwgXywgTSwgbSwgcCwgcHIpXG4gICAgbGV0IHJldFxuXG4gICAgaWYgKGlzWChNKSkge1xuICAgICAgcmV0ID0gJydcbiAgICB9IGVsc2UgaWYgKGlzWChtKSkge1xuICAgICAgcmV0ID0gYD49JHtNfS4wLjAgPCR7K00gKyAxfS4wLjAtMGBcbiAgICB9IGVsc2UgaWYgKGlzWChwKSkge1xuICAgICAgLy8gfjEuMiA9PSA+PTEuMi4wIDwxLjMuMC0wXG4gICAgICByZXQgPSBgPj0ke019LiR7bX0uMCA8JHtNfS4keyttICsgMX0uMC0wYFxuICAgIH0gZWxzZSBpZiAocHIpIHtcbiAgICAgIGRlYnVnKCdyZXBsYWNlVGlsZGUgcHInLCBwcilcbiAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4ke3B9LSR7cHJcbiAgICAgIH0gPCR7TX0uJHsrbSArIDF9LjAtMGBcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gfjEuMi4zID09ID49MS4yLjMgPDEuMy4wLTBcbiAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4ke3BcbiAgICAgIH0gPCR7TX0uJHsrbSArIDF9LjAtMGBcbiAgICB9XG5cbiAgICBkZWJ1ZygndGlsZGUgcmV0dXJuJywgcmV0KVxuICAgIHJldHVybiByZXRcbiAgfSlcbn1cblxuLy8gXiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIF4yLCBeMi54LCBeMi54LnggLS0+ID49Mi4wLjAgPDMuMC4wLTBcbi8vIF4yLjAsIF4yLjAueCAtLT4gPj0yLjAuMCA8My4wLjAtMFxuLy8gXjEuMiwgXjEuMi54IC0tPiA+PTEuMi4wIDwyLjAuMC0wXG4vLyBeMS4yLjMgLS0+ID49MS4yLjMgPDIuMC4wLTBcbi8vIF4xLjIuMCAtLT4gPj0xLjIuMCA8Mi4wLjAtMFxuY29uc3QgcmVwbGFjZUNhcmV0cyA9IChjb21wLCBvcHRpb25zKSA9PlxuICBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcCgoYykgPT4ge1xuICAgIHJldHVybiByZXBsYWNlQ2FyZXQoYywgb3B0aW9ucylcbiAgfSkuam9pbignICcpXG5cbmNvbnN0IHJlcGxhY2VDYXJldCA9IChjb21wLCBvcHRpb25zKSA9PiB7XG4gIGRlYnVnKCdjYXJldCcsIGNvbXAsIG9wdGlvbnMpXG4gIGNvbnN0IHIgPSBvcHRpb25zLmxvb3NlID8gcmVbdC5DQVJFVExPT1NFXSA6IHJlW3QuQ0FSRVRdXG4gIGNvbnN0IHogPSBvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlID8gJy0wJyA6ICcnXG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgKF8sIE0sIG0sIHAsIHByKSA9PiB7XG4gICAgZGVidWcoJ2NhcmV0JywgY29tcCwgXywgTSwgbSwgcCwgcHIpXG4gICAgbGV0IHJldFxuXG4gICAgaWYgKGlzWChNKSkge1xuICAgICAgcmV0ID0gJydcbiAgICB9IGVsc2UgaWYgKGlzWChtKSkge1xuICAgICAgcmV0ID0gYD49JHtNfS4wLjAke3p9IDwkeytNICsgMX0uMC4wLTBgXG4gICAgfSBlbHNlIGlmIChpc1gocCkpIHtcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgcmV0ID0gYD49JHtNfS4ke219LjAke3p9IDwke019LiR7K20gKyAxfS4wLTBgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSBgPj0ke019LiR7bX0uMCR7en0gPCR7K00gKyAxfS4wLjAtMGBcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZUNhcmV0IHByJywgcHIpXG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIGlmIChtID09PSAnMCcpIHtcbiAgICAgICAgICByZXQgPSBgPj0ke019LiR7bX0uJHtwfS0ke3ByXG4gICAgICAgICAgfSA8JHtNfS4ke219LiR7K3AgKyAxfS0wYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4ke3B9LSR7cHJcbiAgICAgICAgICB9IDwke019LiR7K20gKyAxfS4wLTBgXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4ke3B9LSR7cHJcbiAgICAgICAgfSA8JHsrTSArIDF9LjAuMC0wYFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Zygnbm8gcHInKVxuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKSB7XG4gICAgICAgICAgcmV0ID0gYD49JHtNfS4ke219LiR7cFxuICAgICAgICAgIH0ke3p9IDwke019LiR7bX0uJHsrcCArIDF9LTBgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0ID0gYD49JHtNfS4ke219LiR7cFxuICAgICAgICAgIH0ke3p9IDwke019LiR7K20gKyAxfS4wLTBgXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4ke3BcbiAgICAgICAgfSA8JHsrTSArIDF9LjAuMC0wYFxuICAgICAgfVxuICAgIH1cblxuICAgIGRlYnVnKCdjYXJldCByZXR1cm4nLCByZXQpXG4gICAgcmV0dXJuIHJldFxuICB9KVxufVxuXG5jb25zdCByZXBsYWNlWFJhbmdlcyA9IChjb21wLCBvcHRpb25zKSA9PiB7XG4gIGRlYnVnKCdyZXBsYWNlWFJhbmdlcycsIGNvbXAsIG9wdGlvbnMpXG4gIHJldHVybiBjb21wLnNwbGl0KC9cXHMrLykubWFwKChjKSA9PiB7XG4gICAgcmV0dXJuIHJlcGxhY2VYUmFuZ2UoYywgb3B0aW9ucylcbiAgfSkuam9pbignICcpXG59XG5cbmNvbnN0IHJlcGxhY2VYUmFuZ2UgPSAoY29tcCwgb3B0aW9ucykgPT4ge1xuICBjb21wID0gY29tcC50cmltKClcbiAgY29uc3QgciA9IG9wdGlvbnMubG9vc2UgPyByZVt0LlhSQU5HRUxPT1NFXSA6IHJlW3QuWFJBTkdFXVxuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIChyZXQsIGd0bHQsIE0sIG0sIHAsIHByKSA9PiB7XG4gICAgZGVidWcoJ3hSYW5nZScsIGNvbXAsIHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpXG4gICAgY29uc3QgeE0gPSBpc1goTSlcbiAgICBjb25zdCB4bSA9IHhNIHx8IGlzWChtKVxuICAgIGNvbnN0IHhwID0geG0gfHwgaXNYKHApXG4gICAgY29uc3QgYW55WCA9IHhwXG5cbiAgICBpZiAoZ3RsdCA9PT0gJz0nICYmIGFueVgpIHtcbiAgICAgIGd0bHQgPSAnJ1xuICAgIH1cblxuICAgIC8vIGlmIHdlJ3JlIGluY2x1ZGluZyBwcmVyZWxlYXNlcyBpbiB0aGUgbWF0Y2gsIHRoZW4gd2UgbmVlZFxuICAgIC8vIHRvIGZpeCB0aGlzIHRvIC0wLCB0aGUgbG93ZXN0IHBvc3NpYmxlIHByZXJlbGVhc2UgdmFsdWVcbiAgICBwciA9IG9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UgPyAnLTAnIDogJydcblxuICAgIGlmICh4TSkge1xuICAgICAgaWYgKGd0bHQgPT09ICc+JyB8fCBndGx0ID09PSAnPCcpIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBhbGxvd2VkXG4gICAgICAgIHJldCA9ICc8MC4wLjAtMCdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgZm9yYmlkZGVuXG4gICAgICAgIHJldCA9ICcqJ1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ3RsdCAmJiBhbnlYKSB7XG4gICAgICAvLyB3ZSBrbm93IHBhdGNoIGlzIGFuIHgsIGJlY2F1c2Ugd2UgaGF2ZSBhbnkgeCBhdCBhbGwuXG4gICAgICAvLyByZXBsYWNlIFggd2l0aCAwXG4gICAgICBpZiAoeG0pIHtcbiAgICAgICAgbSA9IDBcbiAgICAgIH1cbiAgICAgIHAgPSAwXG5cbiAgICAgIGlmIChndGx0ID09PSAnPicpIHtcbiAgICAgICAgLy8gPjEgPT4gPj0yLjAuMFxuICAgICAgICAvLyA+MS4yID0+ID49MS4zLjBcbiAgICAgICAgZ3RsdCA9ICc+PSdcbiAgICAgICAgaWYgKHhtKSB7XG4gICAgICAgICAgTSA9ICtNICsgMVxuICAgICAgICAgIG0gPSAwXG4gICAgICAgICAgcCA9IDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtID0gK20gKyAxXG4gICAgICAgICAgcCA9IDBcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChndGx0ID09PSAnPD0nKSB7XG4gICAgICAgIC8vIDw9MC43LnggaXMgYWN0dWFsbHkgPDAuOC4wLCBzaW5jZSBhbnkgMC43Lnggc2hvdWxkXG4gICAgICAgIC8vIHBhc3MuICBTaW1pbGFybHksIDw9Ny54IGlzIGFjdHVhbGx5IDw4LjAuMCwgZXRjLlxuICAgICAgICBndGx0ID0gJzwnXG4gICAgICAgIGlmICh4bSkge1xuICAgICAgICAgIE0gPSArTSArIDFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtID0gK20gKyAxXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGd0bHQgPT09ICc8Jykge1xuICAgICAgICBwciA9ICctMCdcbiAgICAgIH1cblxuICAgICAgcmV0ID0gYCR7Z3RsdCArIE19LiR7bX0uJHtwfSR7cHJ9YFxuICAgIH0gZWxzZSBpZiAoeG0pIHtcbiAgICAgIHJldCA9IGA+PSR7TX0uMC4wJHtwcn0gPCR7K00gKyAxfS4wLjAtMGBcbiAgICB9IGVsc2UgaWYgKHhwKSB7XG4gICAgICByZXQgPSBgPj0ke019LiR7bX0uMCR7cHJcbiAgICAgIH0gPCR7TX0uJHsrbSArIDF9LjAtMGBcbiAgICB9XG5cbiAgICBkZWJ1ZygneFJhbmdlIHJldHVybicsIHJldClcblxuICAgIHJldHVybiByZXRcbiAgfSlcbn1cblxuLy8gQmVjYXVzZSAqIGlzIEFORC1lZCB3aXRoIGV2ZXJ5dGhpbmcgZWxzZSBpbiB0aGUgY29tcGFyYXRvcixcbi8vIGFuZCAnJyBtZWFucyBcImFueSB2ZXJzaW9uXCIsIGp1c3QgcmVtb3ZlIHRoZSAqcyBlbnRpcmVseS5cbmNvbnN0IHJlcGxhY2VTdGFycyA9IChjb21wLCBvcHRpb25zKSA9PiB7XG4gIGRlYnVnKCdyZXBsYWNlU3RhcnMnLCBjb21wLCBvcHRpb25zKVxuICAvLyBMb29zZW5lc3MgaXMgaWdub3JlZCBoZXJlLiAgc3RhciBpcyBhbHdheXMgYXMgbG9vc2UgYXMgaXQgZ2V0cyFcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnJlcGxhY2UocmVbdC5TVEFSXSwgJycpXG59XG5cbmNvbnN0IHJlcGxhY2VHVEUwID0gKGNvbXAsIG9wdGlvbnMpID0+IHtcbiAgZGVidWcoJ3JlcGxhY2VHVEUwJywgY29tcCwgb3B0aW9ucylcbiAgcmV0dXJuIGNvbXAudHJpbSgpXG4gICAgLnJlcGxhY2UocmVbb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSA/IHQuR1RFMFBSRSA6IHQuR1RFMF0sICcnKVxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHBhc3NlZCB0byBzdHJpbmcucmVwbGFjZShyZVt0LkhZUEhFTlJBTkdFXSlcbi8vIE0sIG0sIHBhdGNoLCBwcmVyZWxlYXNlLCBidWlsZFxuLy8gMS4yIC0gMy40LjUgPT4gPj0xLjIuMCA8PTMuNC41XG4vLyAxLjIuMyAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMC0wIEFueSAzLjQueCB3aWxsIGRvXG4vLyAxLjIgLSAzLjQgPT4gPj0xLjIuMCA8My41LjAtMFxuY29uc3QgaHlwaGVuUmVwbGFjZSA9IGluY1ByID0+ICgkMCxcbiAgZnJvbSwgZk0sIGZtLCBmcCwgZnByLCBmYixcbiAgdG8sIHRNLCB0bSwgdHAsIHRwciwgdGIpID0+IHtcbiAgaWYgKGlzWChmTSkpIHtcbiAgICBmcm9tID0gJydcbiAgfSBlbHNlIGlmIChpc1goZm0pKSB7XG4gICAgZnJvbSA9IGA+PSR7Zk19LjAuMCR7aW5jUHIgPyAnLTAnIDogJyd9YFxuICB9IGVsc2UgaWYgKGlzWChmcCkpIHtcbiAgICBmcm9tID0gYD49JHtmTX0uJHtmbX0uMCR7aW5jUHIgPyAnLTAnIDogJyd9YFxuICB9IGVsc2UgaWYgKGZwcikge1xuICAgIGZyb20gPSBgPj0ke2Zyb219YFxuICB9IGVsc2Uge1xuICAgIGZyb20gPSBgPj0ke2Zyb219JHtpbmNQciA/ICctMCcgOiAnJ31gXG4gIH1cblxuICBpZiAoaXNYKHRNKSkge1xuICAgIHRvID0gJydcbiAgfSBlbHNlIGlmIChpc1godG0pKSB7XG4gICAgdG8gPSBgPCR7K3RNICsgMX0uMC4wLTBgXG4gIH0gZWxzZSBpZiAoaXNYKHRwKSkge1xuICAgIHRvID0gYDwke3RNfS4keyt0bSArIDF9LjAtMGBcbiAgfSBlbHNlIGlmICh0cHIpIHtcbiAgICB0byA9IGA8PSR7dE19LiR7dG19LiR7dHB9LSR7dHByfWBcbiAgfSBlbHNlIGlmIChpbmNQcikge1xuICAgIHRvID0gYDwke3RNfS4ke3RtfS4keyt0cCArIDF9LTBgXG4gIH0gZWxzZSB7XG4gICAgdG8gPSBgPD0ke3RvfWBcbiAgfVxuXG4gIHJldHVybiAoYCR7ZnJvbX0gJHt0b31gKS50cmltKClcbn1cblxuY29uc3QgdGVzdFNldCA9IChzZXQsIHZlcnNpb24sIG9wdGlvbnMpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIXNldFtpXS50ZXN0KHZlcnNpb24pKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICBpZiAodmVyc2lvbi5wcmVyZWxlYXNlLmxlbmd0aCAmJiAhb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSkge1xuICAgIC8vIEZpbmQgdGhlIHNldCBvZiB2ZXJzaW9ucyB0aGF0IGFyZSBhbGxvd2VkIHRvIGhhdmUgcHJlcmVsZWFzZXNcbiAgICAvLyBGb3IgZXhhbXBsZSwgXjEuMi4zLXByLjEgZGVzdWdhcnMgdG8gPj0xLjIuMy1wci4xIDwyLjAuMFxuICAgIC8vIFRoYXQgc2hvdWxkIGFsbG93IGAxLjIuMy1wci4yYCB0byBwYXNzLlxuICAgIC8vIEhvd2V2ZXIsIGAxLjIuNC1hbHBoYS5ub3RyZWFkeWAgc2hvdWxkIE5PVCBiZSBhbGxvd2VkLFxuICAgIC8vIGV2ZW4gdGhvdWdoIGl0J3Mgd2l0aGluIHRoZSByYW5nZSBzZXQgYnkgdGhlIGNvbXBhcmF0b3JzLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZWJ1ZyhzZXRbaV0uc2VtdmVyKVxuICAgICAgaWYgKHNldFtpXS5zZW12ZXIgPT09IENvbXBhcmF0b3IuQU5ZKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyLnByZXJlbGVhc2UubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBhbGxvd2VkID0gc2V0W2ldLnNlbXZlclxuICAgICAgICBpZiAoYWxsb3dlZC5tYWpvciA9PT0gdmVyc2lvbi5tYWpvciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5taW5vciA9PT0gdmVyc2lvbi5taW5vciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5wYXRjaCA9PT0gdmVyc2lvbi5wYXRjaCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBWZXJzaW9uIGhhcyBhIC1wcmUsIGJ1dCBpdCdzIG5vdCBvbmUgb2YgdGhlIG9uZXMgd2UgbGlrZS5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG4iLCJjb25zdCBkZWJ1ZyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2RlYnVnJylcbmNvbnN0IHsgTUFYX0xFTkdUSCwgTUFYX1NBRkVfSU5URUdFUiB9ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvY29uc3RhbnRzJylcbmNvbnN0IHsgcmUsIHQgfSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3JlJylcblxuY29uc3QgcGFyc2VPcHRpb25zID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvcGFyc2Utb3B0aW9ucycpXG5jb25zdCB7IGNvbXBhcmVJZGVudGlmaWVycyB9ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaWRlbnRpZmllcnMnKVxuY2xhc3MgU2VtVmVyIHtcbiAgY29uc3RydWN0b3IgKHZlcnNpb24sIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gcGFyc2VPcHRpb25zKG9wdGlvbnMpXG5cbiAgICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcikge1xuICAgICAgaWYgKHZlcnNpb24ubG9vc2UgPT09ICEhb3B0aW9ucy5sb29zZSAmJlxuICAgICAgICAgIHZlcnNpb24uaW5jbHVkZVByZXJlbGVhc2UgPT09ICEhb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSkge1xuICAgICAgICByZXR1cm4gdmVyc2lvblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyc2lvbiA9IHZlcnNpb24udmVyc2lvblxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIFZlcnNpb246ICR7dmVyc2lvbn1gKVxuICAgIH1cblxuICAgIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgIGB2ZXJzaW9uIGlzIGxvbmdlciB0aGFuICR7TUFYX0xFTkdUSH0gY2hhcmFjdGVyc2BcbiAgICAgIClcbiAgICB9XG5cbiAgICBkZWJ1ZygnU2VtVmVyJywgdmVyc2lvbiwgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5sb29zZSA9ICEhb3B0aW9ucy5sb29zZVxuICAgIC8vIHRoaXMgaXNuJ3QgYWN0dWFsbHkgcmVsZXZhbnQgZm9yIHZlcnNpb25zLCBidXQga2VlcCBpdCBzbyB0aGF0IHdlXG4gICAgLy8gZG9uJ3QgcnVuIGludG8gdHJvdWJsZSBwYXNzaW5nIHRoaXMub3B0aW9ucyBhcm91bmQuXG4gICAgdGhpcy5pbmNsdWRlUHJlcmVsZWFzZSA9ICEhb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZVxuXG4gICAgY29uc3QgbSA9IHZlcnNpb24udHJpbSgpLm1hdGNoKG9wdGlvbnMubG9vc2UgPyByZVt0LkxPT1NFXSA6IHJlW3QuRlVMTF0pXG5cbiAgICBpZiAoIW0pIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgVmVyc2lvbjogJHt2ZXJzaW9ufWApXG4gICAgfVxuXG4gICAgdGhpcy5yYXcgPSB2ZXJzaW9uXG5cbiAgICAvLyB0aGVzZSBhcmUgYWN0dWFsbHkgbnVtYmVyc1xuICAgIHRoaXMubWFqb3IgPSArbVsxXVxuICAgIHRoaXMubWlub3IgPSArbVsyXVxuICAgIHRoaXMucGF0Y2ggPSArbVszXVxuXG4gICAgaWYgKHRoaXMubWFqb3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWFqb3IgPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1ham9yIHZlcnNpb24nKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm1pbm9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1pbm9yIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBtaW5vciB2ZXJzaW9uJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYXRjaCA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5wYXRjaCA8IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgcGF0Y2ggdmVyc2lvbicpXG4gICAgfVxuXG4gICAgLy8gbnVtYmVyaWZ5IGFueSBwcmVyZWxlYXNlIG51bWVyaWMgaWRzXG4gICAgaWYgKCFtWzRdKSB7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBtWzRdLnNwbGl0KCcuJykubWFwKChpZCkgPT4ge1xuICAgICAgICBpZiAoL15bMC05XSskLy50ZXN0KGlkKSkge1xuICAgICAgICAgIGNvbnN0IG51bSA9ICtpZFxuICAgICAgICAgIGlmIChudW0gPj0gMCAmJiBudW0gPCBNQVhfU0FGRV9JTlRFR0VSKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZFxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLmJ1aWxkID0gbVs1XSA/IG1bNV0uc3BsaXQoJy4nKSA6IFtdXG4gICAgdGhpcy5mb3JtYXQoKVxuICB9XG5cbiAgZm9ybWF0ICgpIHtcbiAgICB0aGlzLnZlcnNpb24gPSBgJHt0aGlzLm1ham9yfS4ke3RoaXMubWlub3J9LiR7dGhpcy5wYXRjaH1gXG4gICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMudmVyc2lvbiArPSBgLSR7dGhpcy5wcmVyZWxlYXNlLmpvaW4oJy4nKX1gXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZlcnNpb25cbiAgfVxuXG4gIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJzaW9uXG4gIH1cblxuICBjb21wYXJlIChvdGhlcikge1xuICAgIGRlYnVnKCdTZW1WZXIuY29tcGFyZScsIHRoaXMudmVyc2lvbiwgdGhpcy5vcHRpb25zLCBvdGhlcilcbiAgICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpIHtcbiAgICAgIGlmICh0eXBlb2Ygb3RoZXIgPT09ICdzdHJpbmcnICYmIG90aGVyID09PSB0aGlzLnZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5vcHRpb25zKVxuICAgIH1cblxuICAgIGlmIChvdGhlci52ZXJzaW9uID09PSB0aGlzLnZlcnNpb24pIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZU1haW4ob3RoZXIpIHx8IHRoaXMuY29tcGFyZVByZShvdGhlcilcbiAgfVxuXG4gIGNvbXBhcmVNYWluIChvdGhlcikge1xuICAgIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSkge1xuICAgICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLm9wdGlvbnMpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1ham9yLCBvdGhlci5tYWpvcikgfHxcbiAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1pbm9yLCBvdGhlci5taW5vcikgfHxcbiAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLnBhdGNoLCBvdGhlci5wYXRjaClcbiAgICApXG4gIH1cblxuICBjb21wYXJlUHJlIChvdGhlcikge1xuICAgIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSkge1xuICAgICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLm9wdGlvbnMpXG4gICAgfVxuXG4gICAgLy8gTk9UIGhhdmluZyBhIHByZXJlbGVhc2UgaXMgPiBoYXZpbmcgb25lXG4gICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmIG90aGVyLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIGxldCBpID0gMFxuICAgIGRvIHtcbiAgICAgIGNvbnN0IGEgPSB0aGlzLnByZXJlbGVhc2VbaV1cbiAgICAgIGNvbnN0IGIgPSBvdGhlci5wcmVyZWxlYXNlW2ldXG4gICAgICBkZWJ1ZygncHJlcmVsZWFzZSBjb21wYXJlJywgaSwgYSwgYilcbiAgICAgIGlmIChhID09PSB1bmRlZmluZWQgJiYgYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9IGVsc2UgaWYgKGIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gMVxuICAgICAgfSBlbHNlIGlmIChhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9IGVsc2UgaWYgKGEgPT09IGIpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYilcbiAgICAgIH1cbiAgICB9IHdoaWxlICgrK2kpXG4gIH1cblxuICBjb21wYXJlQnVpbGQgKG90aGVyKSB7XG4gICAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKSB7XG4gICAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMub3B0aW9ucylcbiAgICB9XG5cbiAgICBsZXQgaSA9IDBcbiAgICBkbyB7XG4gICAgICBjb25zdCBhID0gdGhpcy5idWlsZFtpXVxuICAgICAgY29uc3QgYiA9IG90aGVyLmJ1aWxkW2ldXG4gICAgICBkZWJ1ZygncHJlcmVsZWFzZSBjb21wYXJlJywgaSwgYSwgYilcbiAgICAgIGlmIChhID09PSB1bmRlZmluZWQgJiYgYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9IGVsc2UgaWYgKGIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gMVxuICAgICAgfSBlbHNlIGlmIChhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9IGVsc2UgaWYgKGEgPT09IGIpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYilcbiAgICAgIH1cbiAgICB9IHdoaWxlICgrK2kpXG4gIH1cblxuICAvLyBwcmVtaW5vciB3aWxsIGJ1bXAgdGhlIHZlcnNpb24gdXAgdG8gdGhlIG5leHQgbWlub3IgcmVsZWFzZSwgYW5kIGltbWVkaWF0ZWx5XG4gIC8vIGRvd24gdG8gcHJlLXJlbGVhc2UuIHByZW1ham9yIGFuZCBwcmVwYXRjaCB3b3JrIHRoZSBzYW1lIHdheS5cbiAgaW5jIChyZWxlYXNlLCBpZGVudGlmaWVyKSB7XG4gICAgc3dpdGNoIChyZWxlYXNlKSB7XG4gICAgICBjYXNlICdwcmVtYWpvcic6XG4gICAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwXG4gICAgICAgIHRoaXMucGF0Y2ggPSAwXG4gICAgICAgIHRoaXMubWlub3IgPSAwXG4gICAgICAgIHRoaXMubWFqb3IrK1xuICAgICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcilcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3ByZW1pbm9yJzpcbiAgICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDBcbiAgICAgICAgdGhpcy5wYXRjaCA9IDBcbiAgICAgICAgdGhpcy5taW5vcisrXG4gICAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncHJlcGF0Y2gnOlxuICAgICAgICAvLyBJZiB0aGlzIGlzIGFscmVhZHkgYSBwcmVyZWxlYXNlLCBpdCB3aWxsIGJ1bXAgdG8gdGhlIG5leHQgdmVyc2lvblxuICAgICAgICAvLyBkcm9wIGFueSBwcmVyZWxlYXNlcyB0aGF0IG1pZ2h0IGFscmVhZHkgZXhpc3QsIHNpbmNlIHRoZXkgYXJlIG5vdFxuICAgICAgICAvLyByZWxldmFudCBhdCB0aGlzIHBvaW50LlxuICAgICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMFxuICAgICAgICB0aGlzLmluYygncGF0Y2gnLCBpZGVudGlmaWVyKVxuICAgICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcilcbiAgICAgICAgYnJlYWtcbiAgICAgIC8vIElmIHRoZSBpbnB1dCBpcyBhIG5vbi1wcmVyZWxlYXNlIHZlcnNpb24sIHRoaXMgYWN0cyB0aGUgc2FtZSBhc1xuICAgICAgLy8gcHJlcGF0Y2guXG4gICAgICBjYXNlICdwcmVyZWxlYXNlJzpcbiAgICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmluYygncGF0Y2gnLCBpZGVudGlmaWVyKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdtYWpvcic6XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWFqb3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtYWpvciB2ZXJzaW9uLlxuICAgICAgICAvLyBPdGhlcndpc2UgaW5jcmVtZW50IG1ham9yLlxuICAgICAgICAvLyAxLjAuMC01IGJ1bXBzIHRvIDEuMC4wXG4gICAgICAgIC8vIDEuMS4wIGJ1bXBzIHRvIDIuMC4wXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLm1pbm9yICE9PSAwIHx8XG4gICAgICAgICAgdGhpcy5wYXRjaCAhPT0gMCB8fFxuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5tYWpvcisrXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5taW5vciA9IDBcbiAgICAgICAgdGhpcy5wYXRjaCA9IDBcbiAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW11cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21pbm9yJzpcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1taW5vciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1pbm9yIHZlcnNpb24uXG4gICAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWlub3IuXG4gICAgICAgIC8vIDEuMi4wLTUgYnVtcHMgdG8gMS4yLjBcbiAgICAgICAgLy8gMS4yLjEgYnVtcHMgdG8gMS4zLjBcbiAgICAgICAgaWYgKHRoaXMucGF0Y2ggIT09IDAgfHwgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMubWlub3IrK1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGF0Y2ggPSAwXG4gICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwYXRjaCc6XG4gICAgICAgIC8vIElmIHRoaXMgaXMgbm90IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiwgaXQgd2lsbCBpbmNyZW1lbnQgdGhlIHBhdGNoLlxuICAgICAgICAvLyBJZiBpdCBpcyBhIHByZS1yZWxlYXNlIGl0IHdpbGwgYnVtcCB1cCB0byB0aGUgc2FtZSBwYXRjaCB2ZXJzaW9uLlxuICAgICAgICAvLyAxLjIuMC01IHBhdGNoZXMgdG8gMS4yLjBcbiAgICAgICAgLy8gMS4yLjAgcGF0Y2hlcyB0byAxLjIuMVxuICAgICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMucGF0Y2grK1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdXG4gICAgICAgIGJyZWFrXG4gICAgICAvLyBUaGlzIHByb2JhYmx5IHNob3VsZG4ndCBiZSB1c2VkIHB1YmxpY2x5LlxuICAgICAgLy8gMS4wLjAgJ3ByZScgd291bGQgYmVjb21lIDEuMC4wLTAgd2hpY2ggaXMgdGhlIHdyb25nIGRpcmVjdGlvbi5cbiAgICAgIGNhc2UgJ3ByZSc6XG4gICAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gWzBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGkgPSB0aGlzLnByZXJlbGVhc2UubGVuZ3RoXG4gICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJlcmVsZWFzZVtpXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlW2ldKytcbiAgICAgICAgICAgICAgaSA9IC0yXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICAgICAgLy8gZGlkbid0IGluY3JlbWVudCBhbnl0aGluZ1xuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlLnB1c2goMClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkZW50aWZpZXIpIHtcbiAgICAgICAgICAvLyAxLjIuMC1iZXRhLjEgYnVtcHMgdG8gMS4yLjAtYmV0YS4yLFxuICAgICAgICAgIC8vIDEuMi4wLWJldGEuZm9vYmx6IG9yIDEuMi4wLWJldGEgYnVtcHMgdG8gMS4yLjAtYmV0YS4wXG4gICAgICAgICAgaWYgKGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLnByZXJlbGVhc2VbMF0sIGlkZW50aWZpZXIpID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoaXNOYU4odGhpcy5wcmVyZWxlYXNlWzFdKSkge1xuICAgICAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCBpbmNyZW1lbnQgYXJndW1lbnQ6ICR7cmVsZWFzZX1gKVxuICAgIH1cbiAgICB0aGlzLmZvcm1hdCgpXG4gICAgdGhpcy5yYXcgPSB0aGlzLnZlcnNpb25cbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VtVmVyXG4iLCJjb25zdCBwYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKVxuY29uc3QgY2xlYW4gPSAodmVyc2lvbiwgb3B0aW9ucykgPT4ge1xuICBjb25zdCBzID0gcGFyc2UodmVyc2lvbi50cmltKCkucmVwbGFjZSgvXls9dl0rLywgJycpLCBvcHRpb25zKVxuICByZXR1cm4gcyA/IHMudmVyc2lvbiA6IG51bGxcbn1cbm1vZHVsZS5leHBvcnRzID0gY2xlYW5cbiIsImNvbnN0IGVxID0gcmVxdWlyZSgnLi9lcScpXG5jb25zdCBuZXEgPSByZXF1aXJlKCcuL25lcScpXG5jb25zdCBndCA9IHJlcXVpcmUoJy4vZ3QnKVxuY29uc3QgZ3RlID0gcmVxdWlyZSgnLi9ndGUnKVxuY29uc3QgbHQgPSByZXF1aXJlKCcuL2x0JylcbmNvbnN0IGx0ZSA9IHJlcXVpcmUoJy4vbHRlJylcblxuY29uc3QgY21wID0gKGEsIG9wLCBiLCBsb29zZSkgPT4ge1xuICBzd2l0Y2ggKG9wKSB7XG4gICAgY2FzZSAnPT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYSA9IGEudmVyc2lvblxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0Jykge1xuICAgICAgICBiID0gYi52ZXJzaW9uXG4gICAgICB9XG4gICAgICByZXR1cm4gYSA9PT0gYlxuXG4gICAgY2FzZSAnIT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYSA9IGEudmVyc2lvblxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0Jykge1xuICAgICAgICBiID0gYi52ZXJzaW9uXG4gICAgICB9XG4gICAgICByZXR1cm4gYSAhPT0gYlxuXG4gICAgY2FzZSAnJzpcbiAgICBjYXNlICc9JzpcbiAgICBjYXNlICc9PSc6XG4gICAgICByZXR1cm4gZXEoYSwgYiwgbG9vc2UpXG5cbiAgICBjYXNlICchPSc6XG4gICAgICByZXR1cm4gbmVxKGEsIGIsIGxvb3NlKVxuXG4gICAgY2FzZSAnPic6XG4gICAgICByZXR1cm4gZ3QoYSwgYiwgbG9vc2UpXG5cbiAgICBjYXNlICc+PSc6XG4gICAgICByZXR1cm4gZ3RlKGEsIGIsIGxvb3NlKVxuXG4gICAgY2FzZSAnPCc6XG4gICAgICByZXR1cm4gbHQoYSwgYiwgbG9vc2UpXG5cbiAgICBjYXNlICc8PSc6XG4gICAgICByZXR1cm4gbHRlKGEsIGIsIGxvb3NlKVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgb3BlcmF0b3I6ICR7b3B9YClcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBjbXBcbiIsImNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5jb25zdCB7IHJlLCB0IH0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9yZScpXG5cbmNvbnN0IGNvZXJjZSA9ICh2ZXJzaW9uLCBvcHRpb25zKSA9PiB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKSB7XG4gICAgcmV0dXJuIHZlcnNpb25cbiAgfVxuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ251bWJlcicpIHtcbiAgICB2ZXJzaW9uID0gU3RyaW5nKHZlcnNpb24pXG4gIH1cblxuICBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgbGV0IG1hdGNoID0gbnVsbFxuICBpZiAoIW9wdGlvbnMucnRsKSB7XG4gICAgbWF0Y2ggPSB2ZXJzaW9uLm1hdGNoKHJlW3QuQ09FUkNFXSlcbiAgfSBlbHNlIHtcbiAgICAvLyBGaW5kIHRoZSByaWdodC1tb3N0IGNvZXJjaWJsZSBzdHJpbmcgdGhhdCBkb2VzIG5vdCBzaGFyZVxuICAgIC8vIGEgdGVybWludXMgd2l0aCBhIG1vcmUgbGVmdC13YXJkIGNvZXJjaWJsZSBzdHJpbmcuXG4gICAgLy8gRWcsICcxLjIuMy40JyB3YW50cyB0byBjb2VyY2UgJzIuMy40Jywgbm90ICczLjQnIG9yICc0J1xuICAgIC8vXG4gICAgLy8gV2FsayB0aHJvdWdoIHRoZSBzdHJpbmcgY2hlY2tpbmcgd2l0aCBhIC9nIHJlZ2V4cFxuICAgIC8vIE1hbnVhbGx5IHNldCB0aGUgaW5kZXggc28gYXMgdG8gcGljayB1cCBvdmVybGFwcGluZyBtYXRjaGVzLlxuICAgIC8vIFN0b3Agd2hlbiB3ZSBnZXQgYSBtYXRjaCB0aGF0IGVuZHMgYXQgdGhlIHN0cmluZyBlbmQsIHNpbmNlIG5vXG4gICAgLy8gY29lcmNpYmxlIHN0cmluZyBjYW4gYmUgbW9yZSByaWdodC13YXJkIHdpdGhvdXQgdGhlIHNhbWUgdGVybWludXMuXG4gICAgbGV0IG5leHRcbiAgICB3aGlsZSAoKG5leHQgPSByZVt0LkNPRVJDRVJUTF0uZXhlYyh2ZXJzaW9uKSkgJiZcbiAgICAgICAgKCFtYXRjaCB8fCBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCAhPT0gdmVyc2lvbi5sZW5ndGgpXG4gICAgKSB7XG4gICAgICBpZiAoIW1hdGNoIHx8XG4gICAgICAgICAgICBuZXh0LmluZGV4ICsgbmV4dFswXS5sZW5ndGggIT09IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoKSB7XG4gICAgICAgIG1hdGNoID0gbmV4dFxuICAgICAgfVxuICAgICAgcmVbdC5DT0VSQ0VSVExdLmxhc3RJbmRleCA9IG5leHQuaW5kZXggKyBuZXh0WzFdLmxlbmd0aCArIG5leHRbMl0ubGVuZ3RoXG4gICAgfVxuICAgIC8vIGxlYXZlIGl0IGluIGEgY2xlYW4gc3RhdGVcbiAgICByZVt0LkNPRVJDRVJUTF0ubGFzdEluZGV4ID0gLTFcbiAgfVxuXG4gIGlmIChtYXRjaCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gcGFyc2UoYCR7bWF0Y2hbMl19LiR7bWF0Y2hbM10gfHwgJzAnfS4ke21hdGNoWzRdIHx8ICcwJ31gLCBvcHRpb25zKVxufVxubW9kdWxlLmV4cG9ydHMgPSBjb2VyY2VcbiIsImNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IGNvbXBhcmVCdWlsZCA9IChhLCBiLCBsb29zZSkgPT4ge1xuICBjb25zdCB2ZXJzaW9uQSA9IG5ldyBTZW1WZXIoYSwgbG9vc2UpXG4gIGNvbnN0IHZlcnNpb25CID0gbmV3IFNlbVZlcihiLCBsb29zZSlcbiAgcmV0dXJuIHZlcnNpb25BLmNvbXBhcmUodmVyc2lvbkIpIHx8IHZlcnNpb25BLmNvbXBhcmVCdWlsZCh2ZXJzaW9uQilcbn1cbm1vZHVsZS5leHBvcnRzID0gY29tcGFyZUJ1aWxkXG4iLCJjb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9jb21wYXJlJylcbmNvbnN0IGNvbXBhcmVMb29zZSA9IChhLCBiKSA9PiBjb21wYXJlKGEsIGIsIHRydWUpXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXBhcmVMb29zZVxuIiwiY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgY29tcGFyZSA9IChhLCBiLCBsb29zZSkgPT5cbiAgbmV3IFNlbVZlcihhLCBsb29zZSkuY29tcGFyZShuZXcgU2VtVmVyKGIsIGxvb3NlKSlcblxubW9kdWxlLmV4cG9ydHMgPSBjb21wYXJlXG4iLCJjb25zdCBwYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKVxuY29uc3QgZXEgPSByZXF1aXJlKCcuL2VxJylcblxuY29uc3QgZGlmZiA9ICh2ZXJzaW9uMSwgdmVyc2lvbjIpID0+IHtcbiAgaWYgKGVxKHZlcnNpb24xLCB2ZXJzaW9uMikpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHYxID0gcGFyc2UodmVyc2lvbjEpXG4gICAgY29uc3QgdjIgPSBwYXJzZSh2ZXJzaW9uMilcbiAgICBjb25zdCBoYXNQcmUgPSB2MS5wcmVyZWxlYXNlLmxlbmd0aCB8fCB2Mi5wcmVyZWxlYXNlLmxlbmd0aFxuICAgIGNvbnN0IHByZWZpeCA9IGhhc1ByZSA/ICdwcmUnIDogJydcbiAgICBjb25zdCBkZWZhdWx0UmVzdWx0ID0gaGFzUHJlID8gJ3ByZXJlbGVhc2UnIDogJydcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB2MSkge1xuICAgICAgaWYgKGtleSA9PT0gJ21ham9yJyB8fCBrZXkgPT09ICdtaW5vcicgfHwga2V5ID09PSAncGF0Y2gnKSB7XG4gICAgICAgIGlmICh2MVtrZXldICE9PSB2MltrZXldKSB7XG4gICAgICAgICAgcmV0dXJuIHByZWZpeCArIGtleVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0UmVzdWx0IC8vIG1heSBiZSB1bmRlZmluZWRcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBkaWZmXG4iLCJjb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9jb21wYXJlJylcbmNvbnN0IGVxID0gKGEsIGIsIGxvb3NlKSA9PiBjb21wYXJlKGEsIGIsIGxvb3NlKSA9PT0gMFxubW9kdWxlLmV4cG9ydHMgPSBlcVxuIiwiY29uc3QgY29tcGFyZSA9IHJlcXVpcmUoJy4vY29tcGFyZScpXG5jb25zdCBndCA9IChhLCBiLCBsb29zZSkgPT4gY29tcGFyZShhLCBiLCBsb29zZSkgPiAwXG5tb2R1bGUuZXhwb3J0cyA9IGd0XG4iLCJjb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9jb21wYXJlJylcbmNvbnN0IGd0ZSA9IChhLCBiLCBsb29zZSkgPT4gY29tcGFyZShhLCBiLCBsb29zZSkgPj0gMFxubW9kdWxlLmV4cG9ydHMgPSBndGVcbiIsImNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcblxuY29uc3QgaW5jID0gKHZlcnNpb24sIHJlbGVhc2UsIG9wdGlvbnMsIGlkZW50aWZpZXIpID0+IHtcbiAgaWYgKHR5cGVvZiAob3B0aW9ucykgPT09ICdzdHJpbmcnKSB7XG4gICAgaWRlbnRpZmllciA9IG9wdGlvbnNcbiAgICBvcHRpb25zID0gdW5kZWZpbmVkXG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKFxuICAgICAgdmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlciA/IHZlcnNpb24udmVyc2lvbiA6IHZlcnNpb24sXG4gICAgICBvcHRpb25zXG4gICAgKS5pbmMocmVsZWFzZSwgaWRlbnRpZmllcikudmVyc2lvblxuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gaW5jXG4iLCJjb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9jb21wYXJlJylcbmNvbnN0IGx0ID0gKGEsIGIsIGxvb3NlKSA9PiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8IDBcbm1vZHVsZS5leHBvcnRzID0gbHRcbiIsImNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgbHRlID0gKGEsIGIsIGxvb3NlKSA9PiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8PSAwXG5tb2R1bGUuZXhwb3J0cyA9IGx0ZVxuIiwiY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgbWFqb3IgPSAoYSwgbG9vc2UpID0+IG5ldyBTZW1WZXIoYSwgbG9vc2UpLm1ham9yXG5tb2R1bGUuZXhwb3J0cyA9IG1ham9yXG4iLCJjb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBtaW5vciA9IChhLCBsb29zZSkgPT4gbmV3IFNlbVZlcihhLCBsb29zZSkubWlub3Jcbm1vZHVsZS5leHBvcnRzID0gbWlub3JcbiIsImNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgbmVxID0gKGEsIGIsIGxvb3NlKSA9PiBjb21wYXJlKGEsIGIsIGxvb3NlKSAhPT0gMFxubW9kdWxlLmV4cG9ydHMgPSBuZXFcbiIsImNvbnN0IHsgTUFYX0xFTkdUSCB9ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvY29uc3RhbnRzJylcbmNvbnN0IHsgcmUsIHQgfSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3JlJylcbmNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcblxuY29uc3QgcGFyc2VPcHRpb25zID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvcGFyc2Utb3B0aW9ucycpXG5jb25zdCBwYXJzZSA9ICh2ZXJzaW9uLCBvcHRpb25zKSA9PiB7XG4gIG9wdGlvbnMgPSBwYXJzZU9wdGlvbnMob3B0aW9ucylcblxuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcikge1xuICAgIHJldHVybiB2ZXJzaW9uXG4gIH1cblxuICBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgciA9IG9wdGlvbnMubG9vc2UgPyByZVt0LkxPT1NFXSA6IHJlW3QuRlVMTF1cbiAgaWYgKCFyLnRlc3QodmVyc2lvbikpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBvcHRpb25zKVxuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVxuIiwiY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgcGF0Y2ggPSAoYSwgbG9vc2UpID0+IG5ldyBTZW1WZXIoYSwgbG9vc2UpLnBhdGNoXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGNoXG4iLCJjb25zdCBwYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKVxuY29uc3QgcHJlcmVsZWFzZSA9ICh2ZXJzaW9uLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHBhcnNlZCA9IHBhcnNlKHZlcnNpb24sIG9wdGlvbnMpXG4gIHJldHVybiAocGFyc2VkICYmIHBhcnNlZC5wcmVyZWxlYXNlLmxlbmd0aCkgPyBwYXJzZWQucHJlcmVsZWFzZSA6IG51bGxcbn1cbm1vZHVsZS5leHBvcnRzID0gcHJlcmVsZWFzZVxuIiwiY29uc3QgY29tcGFyZSA9IHJlcXVpcmUoJy4vY29tcGFyZScpXG5jb25zdCByY29tcGFyZSA9IChhLCBiLCBsb29zZSkgPT4gY29tcGFyZShiLCBhLCBsb29zZSlcbm1vZHVsZS5leHBvcnRzID0gcmNvbXBhcmVcbiIsImNvbnN0IGNvbXBhcmVCdWlsZCA9IHJlcXVpcmUoJy4vY29tcGFyZS1idWlsZCcpXG5jb25zdCByc29ydCA9IChsaXN0LCBsb29zZSkgPT4gbGlzdC5zb3J0KChhLCBiKSA9PiBjb21wYXJlQnVpbGQoYiwgYSwgbG9vc2UpKVxubW9kdWxlLmV4cG9ydHMgPSByc29ydFxuIiwiY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3JhbmdlJylcbmNvbnN0IHNhdGlzZmllcyA9ICh2ZXJzaW9uLCByYW5nZSwgb3B0aW9ucykgPT4ge1xuICB0cnkge1xuICAgIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBvcHRpb25zKVxuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiByYW5nZS50ZXN0KHZlcnNpb24pXG59XG5tb2R1bGUuZXhwb3J0cyA9IHNhdGlzZmllc1xuIiwiY29uc3QgY29tcGFyZUJ1aWxkID0gcmVxdWlyZSgnLi9jb21wYXJlLWJ1aWxkJylcbmNvbnN0IHNvcnQgPSAobGlzdCwgbG9vc2UpID0+IGxpc3Quc29ydCgoYSwgYikgPT4gY29tcGFyZUJ1aWxkKGEsIGIsIGxvb3NlKSlcbm1vZHVsZS5leHBvcnRzID0gc29ydFxuIiwiY29uc3QgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJylcbmNvbnN0IHZhbGlkID0gKHZlcnNpb24sIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgdiA9IHBhcnNlKHZlcnNpb24sIG9wdGlvbnMpXG4gIHJldHVybiB2ID8gdi52ZXJzaW9uIDogbnVsbFxufVxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZFxuIiwiLy8ganVzdCBwcmUtbG9hZCBhbGwgdGhlIHN0dWZmIHRoYXQgaW5kZXguanMgbGF6aWx5IGV4cG9ydHNcbmNvbnN0IGludGVybmFsUmUgPSByZXF1aXJlKCcuL2ludGVybmFsL3JlJylcbm1vZHVsZS5leHBvcnRzID0ge1xuICByZTogaW50ZXJuYWxSZS5yZSxcbiAgc3JjOiBpbnRlcm5hbFJlLnNyYyxcbiAgdG9rZW5zOiBpbnRlcm5hbFJlLnQsXG4gIFNFTVZFUl9TUEVDX1ZFUlNJT046IHJlcXVpcmUoJy4vaW50ZXJuYWwvY29uc3RhbnRzJykuU0VNVkVSX1NQRUNfVkVSU0lPTixcbiAgU2VtVmVyOiByZXF1aXJlKCcuL2NsYXNzZXMvc2VtdmVyJyksXG4gIGNvbXBhcmVJZGVudGlmaWVyczogcmVxdWlyZSgnLi9pbnRlcm5hbC9pZGVudGlmaWVycycpLmNvbXBhcmVJZGVudGlmaWVycyxcbiAgcmNvbXBhcmVJZGVudGlmaWVyczogcmVxdWlyZSgnLi9pbnRlcm5hbC9pZGVudGlmaWVycycpLnJjb21wYXJlSWRlbnRpZmllcnMsXG4gIHBhcnNlOiByZXF1aXJlKCcuL2Z1bmN0aW9ucy9wYXJzZScpLFxuICB2YWxpZDogcmVxdWlyZSgnLi9mdW5jdGlvbnMvdmFsaWQnKSxcbiAgY2xlYW46IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2NsZWFuJyksXG4gIGluYzogcmVxdWlyZSgnLi9mdW5jdGlvbnMvaW5jJyksXG4gIGRpZmY6IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2RpZmYnKSxcbiAgbWFqb3I6IHJlcXVpcmUoJy4vZnVuY3Rpb25zL21ham9yJyksXG4gIG1pbm9yOiByZXF1aXJlKCcuL2Z1bmN0aW9ucy9taW5vcicpLFxuICBwYXRjaDogcmVxdWlyZSgnLi9mdW5jdGlvbnMvcGF0Y2gnKSxcbiAgcHJlcmVsZWFzZTogcmVxdWlyZSgnLi9mdW5jdGlvbnMvcHJlcmVsZWFzZScpLFxuICBjb21wYXJlOiByZXF1aXJlKCcuL2Z1bmN0aW9ucy9jb21wYXJlJyksXG4gIHJjb21wYXJlOiByZXF1aXJlKCcuL2Z1bmN0aW9ucy9yY29tcGFyZScpLFxuICBjb21wYXJlTG9vc2U6IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2NvbXBhcmUtbG9vc2UnKSxcbiAgY29tcGFyZUJ1aWxkOiByZXF1aXJlKCcuL2Z1bmN0aW9ucy9jb21wYXJlLWJ1aWxkJyksXG4gIHNvcnQ6IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3NvcnQnKSxcbiAgcnNvcnQ6IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3Jzb3J0JyksXG4gIGd0OiByZXF1aXJlKCcuL2Z1bmN0aW9ucy9ndCcpLFxuICBsdDogcmVxdWlyZSgnLi9mdW5jdGlvbnMvbHQnKSxcbiAgZXE6IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2VxJyksXG4gIG5lcTogcmVxdWlyZSgnLi9mdW5jdGlvbnMvbmVxJyksXG4gIGd0ZTogcmVxdWlyZSgnLi9mdW5jdGlvbnMvZ3RlJyksXG4gIGx0ZTogcmVxdWlyZSgnLi9mdW5jdGlvbnMvbHRlJyksXG4gIGNtcDogcmVxdWlyZSgnLi9mdW5jdGlvbnMvY21wJyksXG4gIGNvZXJjZTogcmVxdWlyZSgnLi9mdW5jdGlvbnMvY29lcmNlJyksXG4gIENvbXBhcmF0b3I6IHJlcXVpcmUoJy4vY2xhc3Nlcy9jb21wYXJhdG9yJyksXG4gIFJhbmdlOiByZXF1aXJlKCcuL2NsYXNzZXMvcmFuZ2UnKSxcbiAgc2F0aXNmaWVzOiByZXF1aXJlKCcuL2Z1bmN0aW9ucy9zYXRpc2ZpZXMnKSxcbiAgdG9Db21wYXJhdG9yczogcmVxdWlyZSgnLi9yYW5nZXMvdG8tY29tcGFyYXRvcnMnKSxcbiAgbWF4U2F0aXNmeWluZzogcmVxdWlyZSgnLi9yYW5nZXMvbWF4LXNhdGlzZnlpbmcnKSxcbiAgbWluU2F0aXNmeWluZzogcmVxdWlyZSgnLi9yYW5nZXMvbWluLXNhdGlzZnlpbmcnKSxcbiAgbWluVmVyc2lvbjogcmVxdWlyZSgnLi9yYW5nZXMvbWluLXZlcnNpb24nKSxcbiAgdmFsaWRSYW5nZTogcmVxdWlyZSgnLi9yYW5nZXMvdmFsaWQnKSxcbiAgb3V0c2lkZTogcmVxdWlyZSgnLi9yYW5nZXMvb3V0c2lkZScpLFxuICBndHI6IHJlcXVpcmUoJy4vcmFuZ2VzL2d0cicpLFxuICBsdHI6IHJlcXVpcmUoJy4vcmFuZ2VzL2x0cicpLFxuICBpbnRlcnNlY3RzOiByZXF1aXJlKCcuL3Jhbmdlcy9pbnRlcnNlY3RzJyksXG4gIHNpbXBsaWZ5UmFuZ2U6IHJlcXVpcmUoJy4vcmFuZ2VzL3NpbXBsaWZ5JyksXG4gIHN1YnNldDogcmVxdWlyZSgnLi9yYW5nZXMvc3Vic2V0JyksXG59XG4iLCIvLyBOb3RlOiB0aGlzIGlzIHRoZSBzZW12ZXIub3JnIHZlcnNpb24gb2YgdGhlIHNwZWMgdGhhdCBpdCBpbXBsZW1lbnRzXG4vLyBOb3QgbmVjZXNzYXJpbHkgdGhlIHBhY2thZ2UgdmVyc2lvbiBvZiB0aGlzIGNvZGUuXG5jb25zdCBTRU1WRVJfU1BFQ19WRVJTSU9OID0gJzIuMC4wJ1xuXG5jb25zdCBNQVhfTEVOR1RIID0gMjU2XG5jb25zdCBNQVhfU0FGRV9JTlRFR0VSID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHxcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIDkwMDcxOTkyNTQ3NDA5OTFcblxuLy8gTWF4IHNhZmUgc2VnbWVudCBsZW5ndGggZm9yIGNvZXJjaW9uLlxuY29uc3QgTUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSCA9IDE2XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBTRU1WRVJfU1BFQ19WRVJTSU9OLFxuICBNQVhfTEVOR1RILFxuICBNQVhfU0FGRV9JTlRFR0VSLFxuICBNQVhfU0FGRV9DT01QT05FTlRfTEVOR1RILFxufVxuIiwiY29uc3QgZGVidWcgPSAoXG4gIHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JyAmJlxuICBwcm9jZXNzLmVudiAmJlxuICBwcm9jZXNzLmVudi5OT0RFX0RFQlVHICYmXG4gIC9cXGJzZW12ZXJcXGIvaS50ZXN0KHByb2Nlc3MuZW52Lk5PREVfREVCVUcpXG4pID8gKC4uLmFyZ3MpID0+IGNvbnNvbGUuZXJyb3IoJ1NFTVZFUicsIC4uLmFyZ3MpXG4gIDogKCkgPT4ge31cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJ1Z1xuIiwiY29uc3QgbnVtZXJpYyA9IC9eWzAtOV0rJC9cbmNvbnN0IGNvbXBhcmVJZGVudGlmaWVycyA9IChhLCBiKSA9PiB7XG4gIGNvbnN0IGFudW0gPSBudW1lcmljLnRlc3QoYSlcbiAgY29uc3QgYm51bSA9IG51bWVyaWMudGVzdChiKVxuXG4gIGlmIChhbnVtICYmIGJudW0pIHtcbiAgICBhID0gK2FcbiAgICBiID0gK2JcbiAgfVxuXG4gIHJldHVybiBhID09PSBiID8gMFxuICAgIDogKGFudW0gJiYgIWJudW0pID8gLTFcbiAgICA6IChibnVtICYmICFhbnVtKSA/IDFcbiAgICA6IGEgPCBiID8gLTFcbiAgICA6IDFcbn1cblxuY29uc3QgcmNvbXBhcmVJZGVudGlmaWVycyA9IChhLCBiKSA9PiBjb21wYXJlSWRlbnRpZmllcnMoYiwgYSlcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbXBhcmVJZGVudGlmaWVycyxcbiAgcmNvbXBhcmVJZGVudGlmaWVycyxcbn1cbiIsIi8vIHBhcnNlIG91dCBqdXN0IHRoZSBvcHRpb25zIHdlIGNhcmUgYWJvdXQgc28gd2UgYWx3YXlzIGdldCBhIGNvbnNpc3RlbnRcbi8vIG9iaiB3aXRoIGtleXMgaW4gYSBjb25zaXN0ZW50IG9yZGVyLlxuY29uc3Qgb3B0cyA9IFsnaW5jbHVkZVByZXJlbGVhc2UnLCAnbG9vc2UnLCAncnRsJ11cbmNvbnN0IHBhcnNlT3B0aW9ucyA9IG9wdGlvbnMgPT5cbiAgIW9wdGlvbnMgPyB7fVxuICA6IHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JyA/IHsgbG9vc2U6IHRydWUgfVxuICA6IG9wdHMuZmlsdGVyKGsgPT4gb3B0aW9uc1trXSkucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgb1trXSA9IHRydWVcbiAgICByZXR1cm4gb1xuICB9LCB7fSlcbm1vZHVsZS5leHBvcnRzID0gcGFyc2VPcHRpb25zXG4iLCJjb25zdCB7IE1BWF9TQUZFX0NPTVBPTkVOVF9MRU5HVEggfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJylcbmNvbnN0IGRlYnVnID0gcmVxdWlyZSgnLi9kZWJ1ZycpXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7fVxuXG4vLyBUaGUgYWN0dWFsIHJlZ2V4cHMgZ28gb24gZXhwb3J0cy5yZVxuY29uc3QgcmUgPSBleHBvcnRzLnJlID0gW11cbmNvbnN0IHNyYyA9IGV4cG9ydHMuc3JjID0gW11cbmNvbnN0IHQgPSBleHBvcnRzLnQgPSB7fVxubGV0IFIgPSAwXG5cbmNvbnN0IGNyZWF0ZVRva2VuID0gKG5hbWUsIHZhbHVlLCBpc0dsb2JhbCkgPT4ge1xuICBjb25zdCBpbmRleCA9IFIrK1xuICBkZWJ1ZyhuYW1lLCBpbmRleCwgdmFsdWUpXG4gIHRbbmFtZV0gPSBpbmRleFxuICBzcmNbaW5kZXhdID0gdmFsdWVcbiAgcmVbaW5kZXhdID0gbmV3IFJlZ0V4cCh2YWx1ZSwgaXNHbG9iYWwgPyAnZycgOiB1bmRlZmluZWQpXG59XG5cbi8vIFRoZSBmb2xsb3dpbmcgUmVndWxhciBFeHByZXNzaW9ucyBjYW4gYmUgdXNlZCBmb3IgdG9rZW5pemluZyxcbi8vIHZhbGlkYXRpbmcsIGFuZCBwYXJzaW5nIFNlbVZlciB2ZXJzaW9uIHN0cmluZ3MuXG5cbi8vICMjIE51bWVyaWMgSWRlbnRpZmllclxuLy8gQSBzaW5nbGUgYDBgLCBvciBhIG5vbi16ZXJvIGRpZ2l0IGZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBkaWdpdHMuXG5cbmNyZWF0ZVRva2VuKCdOVU1FUklDSURFTlRJRklFUicsICcwfFsxLTldXFxcXGQqJylcbmNyZWF0ZVRva2VuKCdOVU1FUklDSURFTlRJRklFUkxPT1NFJywgJ1swLTldKycpXG5cbi8vICMjIE5vbi1udW1lcmljIElkZW50aWZpZXJcbi8vIFplcm8gb3IgbW9yZSBkaWdpdHMsIGZvbGxvd2VkIGJ5IGEgbGV0dGVyIG9yIGh5cGhlbiwgYW5kIHRoZW4gemVybyBvclxuLy8gbW9yZSBsZXR0ZXJzLCBkaWdpdHMsIG9yIGh5cGhlbnMuXG5cbmNyZWF0ZVRva2VuKCdOT05OVU1FUklDSURFTlRJRklFUicsICdcXFxcZCpbYS16QS1aLV1bYS16QS1aMC05LV0qJylcblxuLy8gIyMgTWFpbiBWZXJzaW9uXG4vLyBUaHJlZSBkb3Qtc2VwYXJhdGVkIG51bWVyaWMgaWRlbnRpZmllcnMuXG5cbmNyZWF0ZVRva2VuKCdNQUlOVkVSU0lPTicsIGAoJHtzcmNbdC5OVU1FUklDSURFTlRJRklFUl19KVxcXFwuYCArXG4gICAgICAgICAgICAgICAgICAgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSXX0pXFxcXC5gICtcbiAgICAgICAgICAgICAgICAgICBgKCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJdfSlgKVxuXG5jcmVhdGVUb2tlbignTUFJTlZFUlNJT05MT09TRScsIGAoJHtzcmNbdC5OVU1FUklDSURFTlRJRklFUkxPT1NFXX0pXFxcXC5gICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAoJHtzcmNbdC5OVU1FUklDSURFTlRJRklFUkxPT1NFXX0pXFxcXC5gICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAoJHtzcmNbdC5OVU1FUklDSURFTlRJRklFUkxPT1NFXX0pYClcblxuLy8gIyMgUHJlLXJlbGVhc2UgVmVyc2lvbiBJZGVudGlmaWVyXG4vLyBBIG51bWVyaWMgaWRlbnRpZmllciwgb3IgYSBub24tbnVtZXJpYyBpZGVudGlmaWVyLlxuXG5jcmVhdGVUb2tlbignUFJFUkVMRUFTRUlERU5USUZJRVInLCBgKD86JHtzcmNbdC5OVU1FUklDSURFTlRJRklFUl1cbn18JHtzcmNbdC5OT05OVU1FUklDSURFTlRJRklFUl19KWApXG5cbmNyZWF0ZVRva2VuKCdQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFJywgYCg/OiR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJMT09TRV1cbn18JHtzcmNbdC5OT05OVU1FUklDSURFTlRJRklFUl19KWApXG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb25cbi8vIEh5cGhlbiwgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgZG90LXNlcGFyYXRlZCBwcmUtcmVsZWFzZSB2ZXJzaW9uXG4vLyBpZGVudGlmaWVycy5cblxuY3JlYXRlVG9rZW4oJ1BSRVJFTEVBU0UnLCBgKD86LSgke3NyY1t0LlBSRVJFTEVBU0VJREVOVElGSUVSXVxufSg/OlxcXFwuJHtzcmNbdC5QUkVSRUxFQVNFSURFTlRJRklFUl19KSopKWApXG5cbmNyZWF0ZVRva2VuKCdQUkVSRUxFQVNFTE9PU0UnLCBgKD86LT8oJHtzcmNbdC5QUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXVxufSg/OlxcXFwuJHtzcmNbdC5QUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXX0pKikpYClcblxuLy8gIyMgQnVpbGQgTWV0YWRhdGEgSWRlbnRpZmllclxuLy8gQW55IGNvbWJpbmF0aW9uIG9mIGRpZ2l0cywgbGV0dGVycywgb3IgaHlwaGVucy5cblxuY3JlYXRlVG9rZW4oJ0JVSUxESURFTlRJRklFUicsICdbMC05QS1aYS16LV0rJylcblxuLy8gIyMgQnVpbGQgTWV0YWRhdGFcbi8vIFBsdXMgc2lnbiwgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgcGVyaW9kLXNlcGFyYXRlZCBidWlsZCBtZXRhZGF0YVxuLy8gaWRlbnRpZmllcnMuXG5cbmNyZWF0ZVRva2VuKCdCVUlMRCcsIGAoPzpcXFxcKygke3NyY1t0LkJVSUxESURFTlRJRklFUl1cbn0oPzpcXFxcLiR7c3JjW3QuQlVJTERJREVOVElGSUVSXX0pKikpYClcblxuLy8gIyMgRnVsbCBWZXJzaW9uIFN0cmluZ1xuLy8gQSBtYWluIHZlcnNpb24sIGZvbGxvd2VkIG9wdGlvbmFsbHkgYnkgYSBwcmUtcmVsZWFzZSB2ZXJzaW9uIGFuZFxuLy8gYnVpbGQgbWV0YWRhdGEuXG5cbi8vIE5vdGUgdGhhdCB0aGUgb25seSBtYWpvciwgbWlub3IsIHBhdGNoLCBhbmQgcHJlLXJlbGVhc2Ugc2VjdGlvbnMgb2Zcbi8vIHRoZSB2ZXJzaW9uIHN0cmluZyBhcmUgY2FwdHVyaW5nIGdyb3Vwcy4gIFRoZSBidWlsZCBtZXRhZGF0YSBpcyBub3QgYVxuLy8gY2FwdHVyaW5nIGdyb3VwLCBiZWNhdXNlIGl0IHNob3VsZCBub3QgZXZlciBiZSB1c2VkIGluIHZlcnNpb25cbi8vIGNvbXBhcmlzb24uXG5cbmNyZWF0ZVRva2VuKCdGVUxMUExBSU4nLCBgdj8ke3NyY1t0Lk1BSU5WRVJTSU9OXVxufSR7c3JjW3QuUFJFUkVMRUFTRV19PyR7XG4gIHNyY1t0LkJVSUxEXX0/YClcblxuY3JlYXRlVG9rZW4oJ0ZVTEwnLCBgXiR7c3JjW3QuRlVMTFBMQUlOXX0kYClcblxuLy8gbGlrZSBmdWxsLCBidXQgYWxsb3dzIHYxLjIuMyBhbmQgPTEuMi4zLCB3aGljaCBwZW9wbGUgZG8gc29tZXRpbWVzLlxuLy8gYWxzbywgMS4wLjBhbHBoYTEgKHByZXJlbGVhc2Ugd2l0aG91dCB0aGUgaHlwaGVuKSB3aGljaCBpcyBwcmV0dHlcbi8vIGNvbW1vbiBpbiB0aGUgbnBtIHJlZ2lzdHJ5LlxuY3JlYXRlVG9rZW4oJ0xPT1NFUExBSU4nLCBgW3Y9XFxcXHNdKiR7c3JjW3QuTUFJTlZFUlNJT05MT09TRV1cbn0ke3NyY1t0LlBSRVJFTEVBU0VMT09TRV19PyR7XG4gIHNyY1t0LkJVSUxEXX0/YClcblxuY3JlYXRlVG9rZW4oJ0xPT1NFJywgYF4ke3NyY1t0LkxPT1NFUExBSU5dfSRgKVxuXG5jcmVhdGVUb2tlbignR1RMVCcsICcoKD86PHw+KT89PyknKVxuXG4vLyBTb21ldGhpbmcgbGlrZSBcIjIuKlwiIG9yIFwiMS4yLnhcIi5cbi8vIE5vdGUgdGhhdCBcIngueFwiIGlzIGEgdmFsaWQgeFJhbmdlIGlkZW50aWZlciwgbWVhbmluZyBcImFueSB2ZXJzaW9uXCJcbi8vIE9ubHkgdGhlIGZpcnN0IGl0ZW0gaXMgc3RyaWN0bHkgcmVxdWlyZWQuXG5jcmVhdGVUb2tlbignWFJBTkdFSURFTlRJRklFUkxPT1NFJywgYCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJMT09TRV19fHh8WHxcXFxcKmApXG5jcmVhdGVUb2tlbignWFJBTkdFSURFTlRJRklFUicsIGAke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSXX18eHxYfFxcXFwqYClcblxuY3JlYXRlVG9rZW4oJ1hSQU5HRVBMQUlOJywgYFt2PVxcXFxzXSooJHtzcmNbdC5YUkFOR0VJREVOVElGSUVSXX0pYCArXG4gICAgICAgICAgICAgICAgICAgYCg/OlxcXFwuKCR7c3JjW3QuWFJBTkdFSURFTlRJRklFUl19KWAgK1xuICAgICAgICAgICAgICAgICAgIGAoPzpcXFxcLigke3NyY1t0LlhSQU5HRUlERU5USUZJRVJdfSlgICtcbiAgICAgICAgICAgICAgICAgICBgKD86JHtzcmNbdC5QUkVSRUxFQVNFXX0pPyR7XG4gICAgICAgICAgICAgICAgICAgICBzcmNbdC5CVUlMRF19P2AgK1xuICAgICAgICAgICAgICAgICAgIGApPyk/YClcblxuY3JlYXRlVG9rZW4oJ1hSQU5HRVBMQUlOTE9PU0UnLCBgW3Y9XFxcXHNdKigke3NyY1t0LlhSQU5HRUlERU5USUZJRVJMT09TRV19KWAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCg/OlxcXFwuKCR7c3JjW3QuWFJBTkdFSURFTlRJRklFUkxPT1NFXX0pYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgKD86XFxcXC4oJHtzcmNbdC5YUkFOR0VJREVOVElGSUVSTE9PU0VdfSlgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAoPzoke3NyY1t0LlBSRVJFTEVBU0VMT09TRV19KT8ke1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNbdC5CVUlMRF19P2AgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCk/KT9gKVxuXG5jcmVhdGVUb2tlbignWFJBTkdFJywgYF4ke3NyY1t0LkdUTFRdfVxcXFxzKiR7c3JjW3QuWFJBTkdFUExBSU5dfSRgKVxuY3JlYXRlVG9rZW4oJ1hSQU5HRUxPT1NFJywgYF4ke3NyY1t0LkdUTFRdfVxcXFxzKiR7c3JjW3QuWFJBTkdFUExBSU5MT09TRV19JGApXG5cbi8vIENvZXJjaW9uLlxuLy8gRXh0cmFjdCBhbnl0aGluZyB0aGF0IGNvdWxkIGNvbmNlaXZhYmx5IGJlIGEgcGFydCBvZiBhIHZhbGlkIHNlbXZlclxuY3JlYXRlVG9rZW4oJ0NPRVJDRScsIGAkeycoXnxbXlxcXFxkXSknICtcbiAgICAgICAgICAgICAgJyhcXFxcZHsxLCd9JHtNQVhfU0FGRV9DT01QT05FTlRfTEVOR1RIfX0pYCArXG4gICAgICAgICAgICAgIGAoPzpcXFxcLihcXFxcZHsxLCR7TUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSH19KSk/YCArXG4gICAgICAgICAgICAgIGAoPzpcXFxcLihcXFxcZHsxLCR7TUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSH19KSk/YCArXG4gICAgICAgICAgICAgIGAoPzokfFteXFxcXGRdKWApXG5jcmVhdGVUb2tlbignQ09FUkNFUlRMJywgc3JjW3QuQ09FUkNFXSwgdHJ1ZSlcblxuLy8gVGlsZGUgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcInJlYXNvbmFibHkgYXQgb3IgZ3JlYXRlciB0aGFuXCJcbmNyZWF0ZVRva2VuKCdMT05FVElMREUnLCAnKD86fj4/KScpXG5cbmNyZWF0ZVRva2VuKCdUSUxERVRSSU0nLCBgKFxcXFxzKikke3NyY1t0LkxPTkVUSUxERV19XFxcXHMrYCwgdHJ1ZSlcbmV4cG9ydHMudGlsZGVUcmltUmVwbGFjZSA9ICckMX4nXG5cbmNyZWF0ZVRva2VuKCdUSUxERScsIGBeJHtzcmNbdC5MT05FVElMREVdfSR7c3JjW3QuWFJBTkdFUExBSU5dfSRgKVxuY3JlYXRlVG9rZW4oJ1RJTERFTE9PU0UnLCBgXiR7c3JjW3QuTE9ORVRJTERFXX0ke3NyY1t0LlhSQU5HRVBMQUlOTE9PU0VdfSRgKVxuXG4vLyBDYXJldCByYW5nZXMuXG4vLyBNZWFuaW5nIGlzIFwiYXQgbGVhc3QgYW5kIGJhY2t3YXJkcyBjb21wYXRpYmxlIHdpdGhcIlxuY3JlYXRlVG9rZW4oJ0xPTkVDQVJFVCcsICcoPzpcXFxcXiknKVxuXG5jcmVhdGVUb2tlbignQ0FSRVRUUklNJywgYChcXFxccyopJHtzcmNbdC5MT05FQ0FSRVRdfVxcXFxzK2AsIHRydWUpXG5leHBvcnRzLmNhcmV0VHJpbVJlcGxhY2UgPSAnJDFeJ1xuXG5jcmVhdGVUb2tlbignQ0FSRVQnLCBgXiR7c3JjW3QuTE9ORUNBUkVUXX0ke3NyY1t0LlhSQU5HRVBMQUlOXX0kYClcbmNyZWF0ZVRva2VuKCdDQVJFVExPT1NFJywgYF4ke3NyY1t0LkxPTkVDQVJFVF19JHtzcmNbdC5YUkFOR0VQTEFJTkxPT1NFXX0kYClcblxuLy8gQSBzaW1wbGUgZ3QvbHQvZXEgdGhpbmcsIG9yIGp1c3QgXCJcIiB0byBpbmRpY2F0ZSBcImFueSB2ZXJzaW9uXCJcbmNyZWF0ZVRva2VuKCdDT01QQVJBVE9STE9PU0UnLCBgXiR7c3JjW3QuR1RMVF19XFxcXHMqKCR7c3JjW3QuTE9PU0VQTEFJTl19KSR8XiRgKVxuY3JlYXRlVG9rZW4oJ0NPTVBBUkFUT1InLCBgXiR7c3JjW3QuR1RMVF19XFxcXHMqKCR7c3JjW3QuRlVMTFBMQUlOXX0pJHxeJGApXG5cbi8vIEFuIGV4cHJlc3Npb24gdG8gc3RyaXAgYW55IHdoaXRlc3BhY2UgYmV0d2VlbiB0aGUgZ3RsdCBhbmQgdGhlIHRoaW5nXG4vLyBpdCBtb2RpZmllcywgc28gdGhhdCBgPiAxLjIuM2AgPT0+IGA+MS4yLjNgXG5jcmVhdGVUb2tlbignQ09NUEFSQVRPUlRSSU0nLCBgKFxcXFxzKikke3NyY1t0LkdUTFRdXG59XFxcXHMqKCR7c3JjW3QuTE9PU0VQTEFJTl19fCR7c3JjW3QuWFJBTkdFUExBSU5dfSlgLCB0cnVlKVxuZXhwb3J0cy5jb21wYXJhdG9yVHJpbVJlcGxhY2UgPSAnJDEkMiQzJ1xuXG4vLyBTb21ldGhpbmcgbGlrZSBgMS4yLjMgLSAxLjIuNGBcbi8vIE5vdGUgdGhhdCB0aGVzZSBhbGwgdXNlIHRoZSBsb29zZSBmb3JtLCBiZWNhdXNlIHRoZXknbGwgYmVcbi8vIGNoZWNrZWQgYWdhaW5zdCBlaXRoZXIgdGhlIHN0cmljdCBvciBsb29zZSBjb21wYXJhdG9yIGZvcm1cbi8vIGxhdGVyLlxuY3JlYXRlVG9rZW4oJ0hZUEhFTlJBTkdFJywgYF5cXFxccyooJHtzcmNbdC5YUkFOR0VQTEFJTl19KWAgK1xuICAgICAgICAgICAgICAgICAgIGBcXFxccystXFxcXHMrYCArXG4gICAgICAgICAgICAgICAgICAgYCgke3NyY1t0LlhSQU5HRVBMQUlOXX0pYCArXG4gICAgICAgICAgICAgICAgICAgYFxcXFxzKiRgKVxuXG5jcmVhdGVUb2tlbignSFlQSEVOUkFOR0VMT09TRScsIGBeXFxcXHMqKCR7c3JjW3QuWFJBTkdFUExBSU5MT09TRV19KWAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYFxcXFxzKy1cXFxccytgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAoJHtzcmNbdC5YUkFOR0VQTEFJTkxPT1NFXX0pYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgXFxcXHMqJGApXG5cbi8vIFN0YXIgcmFuZ2VzIGJhc2ljYWxseSBqdXN0IGFsbG93IGFueXRoaW5nIGF0IGFsbC5cbmNyZWF0ZVRva2VuKCdTVEFSJywgJyg8fD4pPz0/XFxcXHMqXFxcXConKVxuLy8gPj0wLjAuMCBpcyBsaWtlIGEgc3RhclxuY3JlYXRlVG9rZW4oJ0dURTAnLCAnXlxcXFxzKj49XFxcXHMqMFxcXFwuMFxcXFwuMFxcXFxzKiQnKVxuY3JlYXRlVG9rZW4oJ0dURTBQUkUnLCAnXlxcXFxzKj49XFxcXHMqMFxcXFwuMFxcXFwuMC0wXFxcXHMqJCcpXG4iLCIvLyBEZXRlcm1pbmUgaWYgdmVyc2lvbiBpcyBncmVhdGVyIHRoYW4gYWxsIHRoZSB2ZXJzaW9ucyBwb3NzaWJsZSBpbiB0aGUgcmFuZ2UuXG5jb25zdCBvdXRzaWRlID0gcmVxdWlyZSgnLi9vdXRzaWRlJylcbmNvbnN0IGd0ciA9ICh2ZXJzaW9uLCByYW5nZSwgb3B0aW9ucykgPT4gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgJz4nLCBvcHRpb25zKVxubW9kdWxlLmV4cG9ydHMgPSBndHJcbiIsImNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9yYW5nZScpXG5jb25zdCBpbnRlcnNlY3RzID0gKHIxLCByMiwgb3B0aW9ucykgPT4ge1xuICByMSA9IG5ldyBSYW5nZShyMSwgb3B0aW9ucylcbiAgcjIgPSBuZXcgUmFuZ2UocjIsIG9wdGlvbnMpXG4gIHJldHVybiByMS5pbnRlcnNlY3RzKHIyKVxufVxubW9kdWxlLmV4cG9ydHMgPSBpbnRlcnNlY3RzXG4iLCJjb25zdCBvdXRzaWRlID0gcmVxdWlyZSgnLi9vdXRzaWRlJylcbi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGxlc3MgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZVxuY29uc3QgbHRyID0gKHZlcnNpb24sIHJhbmdlLCBvcHRpb25zKSA9PiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPCcsIG9wdGlvbnMpXG5tb2R1bGUuZXhwb3J0cyA9IGx0clxuIiwiY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3JhbmdlJylcblxuY29uc3QgbWF4U2F0aXNmeWluZyA9ICh2ZXJzaW9ucywgcmFuZ2UsIG9wdGlvbnMpID0+IHtcbiAgbGV0IG1heCA9IG51bGxcbiAgbGV0IG1heFNWID0gbnVsbFxuICBsZXQgcmFuZ2VPYmogPSBudWxsXG4gIHRyeSB7XG4gICAgcmFuZ2VPYmogPSBuZXcgUmFuZ2UocmFuZ2UsIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICB2ZXJzaW9ucy5mb3JFYWNoKCh2KSA9PiB7XG4gICAgaWYgKHJhbmdlT2JqLnRlc3QodikpIHtcbiAgICAgIC8vIHNhdGlzZmllcyh2LCByYW5nZSwgb3B0aW9ucylcbiAgICAgIGlmICghbWF4IHx8IG1heFNWLmNvbXBhcmUodikgPT09IC0xKSB7XG4gICAgICAgIC8vIGNvbXBhcmUobWF4LCB2LCB0cnVlKVxuICAgICAgICBtYXggPSB2XG4gICAgICAgIG1heFNWID0gbmV3IFNlbVZlcihtYXgsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuICB9KVxuICByZXR1cm4gbWF4XG59XG5tb2R1bGUuZXhwb3J0cyA9IG1heFNhdGlzZnlpbmdcbiIsImNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9yYW5nZScpXG5jb25zdCBtaW5TYXRpc2Z5aW5nID0gKHZlcnNpb25zLCByYW5nZSwgb3B0aW9ucykgPT4ge1xuICBsZXQgbWluID0gbnVsbFxuICBsZXQgbWluU1YgPSBudWxsXG4gIGxldCByYW5nZU9iaiA9IG51bGxcbiAgdHJ5IHtcbiAgICByYW5nZU9iaiA9IG5ldyBSYW5nZShyYW5nZSwgb3B0aW9ucylcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHZlcnNpb25zLmZvckVhY2goKHYpID0+IHtcbiAgICBpZiAocmFuZ2VPYmoudGVzdCh2KSkge1xuICAgICAgLy8gc2F0aXNmaWVzKHYsIHJhbmdlLCBvcHRpb25zKVxuICAgICAgaWYgKCFtaW4gfHwgbWluU1YuY29tcGFyZSh2KSA9PT0gMSkge1xuICAgICAgICAvLyBjb21wYXJlKG1pbiwgdiwgdHJ1ZSlcbiAgICAgICAgbWluID0gdlxuICAgICAgICBtaW5TViA9IG5ldyBTZW1WZXIobWluLCBvcHRpb25zKVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIG1pblxufVxubW9kdWxlLmV4cG9ydHMgPSBtaW5TYXRpc2Z5aW5nXG4iLCJjb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvcmFuZ2UnKVxuY29uc3QgZ3QgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvZ3QnKVxuXG5jb25zdCBtaW5WZXJzaW9uID0gKHJhbmdlLCBsb29zZSkgPT4ge1xuICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpXG5cbiAgbGV0IG1pbnZlciA9IG5ldyBTZW1WZXIoJzAuMC4wJylcbiAgaWYgKHJhbmdlLnRlc3QobWludmVyKSkge1xuICAgIHJldHVybiBtaW52ZXJcbiAgfVxuXG4gIG1pbnZlciA9IG5ldyBTZW1WZXIoJzAuMC4wLTAnKVxuICBpZiAocmFuZ2UudGVzdChtaW52ZXIpKSB7XG4gICAgcmV0dXJuIG1pbnZlclxuICB9XG5cbiAgbWludmVyID0gbnVsbFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlLnNldC5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IGNvbXBhcmF0b3JzID0gcmFuZ2Uuc2V0W2ldXG5cbiAgICBsZXQgc2V0TWluID0gbnVsbFxuICAgIGNvbXBhcmF0b3JzLmZvckVhY2goKGNvbXBhcmF0b3IpID0+IHtcbiAgICAgIC8vIENsb25lIHRvIGF2b2lkIG1hbmlwdWxhdGluZyB0aGUgY29tcGFyYXRvcidzIHNlbXZlciBvYmplY3QuXG4gICAgICBjb25zdCBjb21wdmVyID0gbmV3IFNlbVZlcihjb21wYXJhdG9yLnNlbXZlci52ZXJzaW9uKVxuICAgICAgc3dpdGNoIChjb21wYXJhdG9yLm9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgIGlmIChjb21wdmVyLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb21wdmVyLnBhdGNoKytcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcHZlci5wcmVyZWxlYXNlLnB1c2goMClcbiAgICAgICAgICB9XG4gICAgICAgICAgY29tcHZlci5yYXcgPSBjb21wdmVyLmZvcm1hdCgpXG4gICAgICAgICAgLyogZmFsbHRocm91Z2ggKi9cbiAgICAgICAgY2FzZSAnJzpcbiAgICAgICAgY2FzZSAnPj0nOlxuICAgICAgICAgIGlmICghc2V0TWluIHx8IGd0KGNvbXB2ZXIsIHNldE1pbikpIHtcbiAgICAgICAgICAgIHNldE1pbiA9IGNvbXB2ZXJcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAvKiBJZ25vcmUgbWF4aW11bSB2ZXJzaW9ucyAqL1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIG9wZXJhdGlvbjogJHtjb21wYXJhdG9yLm9wZXJhdG9yfWApXG4gICAgICB9XG4gICAgfSlcbiAgICBpZiAoc2V0TWluICYmICghbWludmVyIHx8IGd0KG1pbnZlciwgc2V0TWluKSkpIHtcbiAgICAgIG1pbnZlciA9IHNldE1pblxuICAgIH1cbiAgfVxuXG4gIGlmIChtaW52ZXIgJiYgcmFuZ2UudGVzdChtaW52ZXIpKSB7XG4gICAgcmV0dXJuIG1pbnZlclxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cbm1vZHVsZS5leHBvcnRzID0gbWluVmVyc2lvblxuIiwiY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgQ29tcGFyYXRvciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvY29tcGFyYXRvcicpXG5jb25zdCB7IEFOWSB9ID0gQ29tcGFyYXRvclxuY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3JhbmdlJylcbmNvbnN0IHNhdGlzZmllcyA9IHJlcXVpcmUoJy4uL2Z1bmN0aW9ucy9zYXRpc2ZpZXMnKVxuY29uc3QgZ3QgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvZ3QnKVxuY29uc3QgbHQgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvbHQnKVxuY29uc3QgbHRlID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2x0ZScpXG5jb25zdCBndGUgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvZ3RlJylcblxuY29uc3Qgb3V0c2lkZSA9ICh2ZXJzaW9uLCByYW5nZSwgaGlsbywgb3B0aW9ucykgPT4ge1xuICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCBvcHRpb25zKVxuICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgb3B0aW9ucylcblxuICBsZXQgZ3RmbiwgbHRlZm4sIGx0Zm4sIGNvbXAsIGVjb21wXG4gIHN3aXRjaCAoaGlsbykge1xuICAgIGNhc2UgJz4nOlxuICAgICAgZ3RmbiA9IGd0XG4gICAgICBsdGVmbiA9IGx0ZVxuICAgICAgbHRmbiA9IGx0XG4gICAgICBjb21wID0gJz4nXG4gICAgICBlY29tcCA9ICc+PSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnPCc6XG4gICAgICBndGZuID0gbHRcbiAgICAgIGx0ZWZuID0gZ3RlXG4gICAgICBsdGZuID0gZ3RcbiAgICAgIGNvbXAgPSAnPCdcbiAgICAgIGVjb21wID0gJzw9J1xuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBwcm92aWRlIGEgaGlsbyB2YWwgb2YgXCI8XCIgb3IgXCI+XCInKVxuICB9XG5cbiAgLy8gSWYgaXQgc2F0aXNmaWVzIHRoZSByYW5nZSBpdCBpcyBub3Qgb3V0c2lkZVxuICBpZiAoc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBvcHRpb25zKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gRnJvbSBub3cgb24sIHZhcmlhYmxlIHRlcm1zIGFyZSBhcyBpZiB3ZSdyZSBpbiBcImd0clwiIG1vZGUuXG4gIC8vIGJ1dCBub3RlIHRoYXQgZXZlcnl0aGluZyBpcyBmbGlwcGVkIGZvciB0aGUgXCJsdHJcIiBmdW5jdGlvbi5cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlLnNldC5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IGNvbXBhcmF0b3JzID0gcmFuZ2Uuc2V0W2ldXG5cbiAgICBsZXQgaGlnaCA9IG51bGxcbiAgICBsZXQgbG93ID0gbnVsbFxuXG4gICAgY29tcGFyYXRvcnMuZm9yRWFjaCgoY29tcGFyYXRvcikgPT4ge1xuICAgICAgaWYgKGNvbXBhcmF0b3Iuc2VtdmVyID09PSBBTlkpIHtcbiAgICAgICAgY29tcGFyYXRvciA9IG5ldyBDb21wYXJhdG9yKCc+PTAuMC4wJylcbiAgICAgIH1cbiAgICAgIGhpZ2ggPSBoaWdoIHx8IGNvbXBhcmF0b3JcbiAgICAgIGxvdyA9IGxvdyB8fCBjb21wYXJhdG9yXG4gICAgICBpZiAoZ3Rmbihjb21wYXJhdG9yLnNlbXZlciwgaGlnaC5zZW12ZXIsIG9wdGlvbnMpKSB7XG4gICAgICAgIGhpZ2ggPSBjb21wYXJhdG9yXG4gICAgICB9IGVsc2UgaWYgKGx0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGxvdy5zZW12ZXIsIG9wdGlvbnMpKSB7XG4gICAgICAgIGxvdyA9IGNvbXBhcmF0b3JcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gSWYgdGhlIGVkZ2UgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhIG9wZXJhdG9yIHRoZW4gb3VyIHZlcnNpb25cbiAgICAvLyBpc24ndCBvdXRzaWRlIGl0XG4gICAgaWYgKGhpZ2gub3BlcmF0b3IgPT09IGNvbXAgfHwgaGlnaC5vcGVyYXRvciA9PT0gZWNvbXApIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBsb3dlc3QgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhbiBvcGVyYXRvciBhbmQgb3VyIHZlcnNpb25cbiAgICAvLyBpcyBsZXNzIHRoYW4gaXQgdGhlbiBpdCBpc24ndCBoaWdoZXIgdGhhbiB0aGUgcmFuZ2VcbiAgICBpZiAoKCFsb3cub3BlcmF0b3IgfHwgbG93Lm9wZXJhdG9yID09PSBjb21wKSAmJlxuICAgICAgICBsdGVmbih2ZXJzaW9uLCBsb3cuc2VtdmVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIGlmIChsb3cub3BlcmF0b3IgPT09IGVjb21wICYmIGx0Zm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG91dHNpZGVcbiIsIi8vIGdpdmVuIGEgc2V0IG9mIHZlcnNpb25zIGFuZCBhIHJhbmdlLCBjcmVhdGUgYSBcInNpbXBsaWZpZWRcIiByYW5nZVxuLy8gdGhhdCBpbmNsdWRlcyB0aGUgc2FtZSB2ZXJzaW9ucyB0aGF0IHRoZSBvcmlnaW5hbCByYW5nZSBkb2VzXG4vLyBJZiB0aGUgb3JpZ2luYWwgcmFuZ2UgaXMgc2hvcnRlciB0aGFuIHRoZSBzaW1wbGlmaWVkIG9uZSwgcmV0dXJuIHRoYXQuXG5jb25zdCBzYXRpc2ZpZXMgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvc2F0aXNmaWVzLmpzJylcbmNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvY29tcGFyZS5qcycpXG5tb2R1bGUuZXhwb3J0cyA9ICh2ZXJzaW9ucywgcmFuZ2UsIG9wdGlvbnMpID0+IHtcbiAgY29uc3Qgc2V0ID0gW11cbiAgbGV0IGZpcnN0ID0gbnVsbFxuICBsZXQgcHJldiA9IG51bGxcbiAgY29uc3QgdiA9IHZlcnNpb25zLnNvcnQoKGEsIGIpID0+IGNvbXBhcmUoYSwgYiwgb3B0aW9ucykpXG4gIGZvciAoY29uc3QgdmVyc2lvbiBvZiB2KSB7XG4gICAgY29uc3QgaW5jbHVkZWQgPSBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIG9wdGlvbnMpXG4gICAgaWYgKGluY2x1ZGVkKSB7XG4gICAgICBwcmV2ID0gdmVyc2lvblxuICAgICAgaWYgKCFmaXJzdCkge1xuICAgICAgICBmaXJzdCA9IHZlcnNpb25cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgc2V0LnB1c2goW2ZpcnN0LCBwcmV2XSlcbiAgICAgIH1cbiAgICAgIHByZXYgPSBudWxsXG4gICAgICBmaXJzdCA9IG51bGxcbiAgICB9XG4gIH1cbiAgaWYgKGZpcnN0KSB7XG4gICAgc2V0LnB1c2goW2ZpcnN0LCBudWxsXSlcbiAgfVxuXG4gIGNvbnN0IHJhbmdlcyA9IFtdXG4gIGZvciAoY29uc3QgW21pbiwgbWF4XSBvZiBzZXQpIHtcbiAgICBpZiAobWluID09PSBtYXgpIHtcbiAgICAgIHJhbmdlcy5wdXNoKG1pbilcbiAgICB9IGVsc2UgaWYgKCFtYXggJiYgbWluID09PSB2WzBdKSB7XG4gICAgICByYW5nZXMucHVzaCgnKicpXG4gICAgfSBlbHNlIGlmICghbWF4KSB7XG4gICAgICByYW5nZXMucHVzaChgPj0ke21pbn1gKVxuICAgIH0gZWxzZSBpZiAobWluID09PSB2WzBdKSB7XG4gICAgICByYW5nZXMucHVzaChgPD0ke21heH1gKVxuICAgIH0gZWxzZSB7XG4gICAgICByYW5nZXMucHVzaChgJHttaW59IC0gJHttYXh9YClcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2ltcGxpZmllZCA9IHJhbmdlcy5qb2luKCcgfHwgJylcbiAgY29uc3Qgb3JpZ2luYWwgPSB0eXBlb2YgcmFuZ2UucmF3ID09PSAnc3RyaW5nJyA/IHJhbmdlLnJhdyA6IFN0cmluZyhyYW5nZSlcbiAgcmV0dXJuIHNpbXBsaWZpZWQubGVuZ3RoIDwgb3JpZ2luYWwubGVuZ3RoID8gc2ltcGxpZmllZCA6IHJhbmdlXG59XG4iLCJjb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvcmFuZ2UuanMnKVxuY29uc3QgQ29tcGFyYXRvciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvY29tcGFyYXRvci5qcycpXG5jb25zdCB7IEFOWSB9ID0gQ29tcGFyYXRvclxuY29uc3Qgc2F0aXNmaWVzID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL3NhdGlzZmllcy5qcycpXG5jb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2NvbXBhcmUuanMnKVxuXG4vLyBDb21wbGV4IHJhbmdlIGByMSB8fCByMiB8fCAuLi5gIGlzIGEgc3Vic2V0IG9mIGBSMSB8fCBSMiB8fCAuLi5gIGlmZjpcbi8vIC0gRXZlcnkgc2ltcGxlIHJhbmdlIGByMSwgcjIsIC4uLmAgaXMgYSBudWxsIHNldCwgT1Jcbi8vIC0gRXZlcnkgc2ltcGxlIHJhbmdlIGByMSwgcjIsIC4uLmAgd2hpY2ggaXMgbm90IGEgbnVsbCBzZXQgaXMgYSBzdWJzZXQgb2Zcbi8vICAgc29tZSBgUjEsIFIyLCAuLi5gXG4vL1xuLy8gU2ltcGxlIHJhbmdlIGBjMSBjMiAuLi5gIGlzIGEgc3Vic2V0IG9mIHNpbXBsZSByYW5nZSBgQzEgQzIgLi4uYCBpZmY6XG4vLyAtIElmIGMgaXMgb25seSB0aGUgQU5ZIGNvbXBhcmF0b3Jcbi8vICAgLSBJZiBDIGlzIG9ubHkgdGhlIEFOWSBjb21wYXJhdG9yLCByZXR1cm4gdHJ1ZVxuLy8gICAtIEVsc2UgaWYgaW4gcHJlcmVsZWFzZSBtb2RlLCByZXR1cm4gZmFsc2Vcbi8vICAgLSBlbHNlIHJlcGxhY2UgYyB3aXRoIGBbPj0wLjAuMF1gXG4vLyAtIElmIEMgaXMgb25seSB0aGUgQU5ZIGNvbXBhcmF0b3Jcbi8vICAgLSBpZiBpbiBwcmVyZWxlYXNlIG1vZGUsIHJldHVybiB0cnVlXG4vLyAgIC0gZWxzZSByZXBsYWNlIEMgd2l0aCBgWz49MC4wLjBdYFxuLy8gLSBMZXQgRVEgYmUgdGhlIHNldCBvZiA9IGNvbXBhcmF0b3JzIGluIGNcbi8vIC0gSWYgRVEgaXMgbW9yZSB0aGFuIG9uZSwgcmV0dXJuIHRydWUgKG51bGwgc2V0KVxuLy8gLSBMZXQgR1QgYmUgdGhlIGhpZ2hlc3QgPiBvciA+PSBjb21wYXJhdG9yIGluIGNcbi8vIC0gTGV0IExUIGJlIHRoZSBsb3dlc3QgPCBvciA8PSBjb21wYXJhdG9yIGluIGNcbi8vIC0gSWYgR1QgYW5kIExULCBhbmQgR1Quc2VtdmVyID4gTFQuc2VtdmVyLCByZXR1cm4gdHJ1ZSAobnVsbCBzZXQpXG4vLyAtIElmIGFueSBDIGlzIGEgPSByYW5nZSwgYW5kIEdUIG9yIExUIGFyZSBzZXQsIHJldHVybiBmYWxzZVxuLy8gLSBJZiBFUVxuLy8gICAtIElmIEdULCBhbmQgRVEgZG9lcyBub3Qgc2F0aXNmeSBHVCwgcmV0dXJuIHRydWUgKG51bGwgc2V0KVxuLy8gICAtIElmIExULCBhbmQgRVEgZG9lcyBub3Qgc2F0aXNmeSBMVCwgcmV0dXJuIHRydWUgKG51bGwgc2V0KVxuLy8gICAtIElmIEVRIHNhdGlzZmllcyBldmVyeSBDLCByZXR1cm4gdHJ1ZVxuLy8gICAtIEVsc2UgcmV0dXJuIGZhbHNlXG4vLyAtIElmIEdUXG4vLyAgIC0gSWYgR1Quc2VtdmVyIGlzIGxvd2VyIHRoYW4gYW55ID4gb3IgPj0gY29tcCBpbiBDLCByZXR1cm4gZmFsc2Vcbi8vICAgLSBJZiBHVCBpcyA+PSwgYW5kIEdULnNlbXZlciBkb2VzIG5vdCBzYXRpc2Z5IGV2ZXJ5IEMsIHJldHVybiBmYWxzZVxuLy8gICAtIElmIEdULnNlbXZlciBoYXMgYSBwcmVyZWxlYXNlLCBhbmQgbm90IGluIHByZXJlbGVhc2UgbW9kZVxuLy8gICAgIC0gSWYgbm8gQyBoYXMgYSBwcmVyZWxlYXNlIGFuZCB0aGUgR1Quc2VtdmVyIHR1cGxlLCByZXR1cm4gZmFsc2Vcbi8vIC0gSWYgTFRcbi8vICAgLSBJZiBMVC5zZW12ZXIgaXMgZ3JlYXRlciB0aGFuIGFueSA8IG9yIDw9IGNvbXAgaW4gQywgcmV0dXJuIGZhbHNlXG4vLyAgIC0gSWYgTFQgaXMgPD0sIGFuZCBMVC5zZW12ZXIgZG9lcyBub3Qgc2F0aXNmeSBldmVyeSBDLCByZXR1cm4gZmFsc2Vcbi8vICAgLSBJZiBHVC5zZW12ZXIgaGFzIGEgcHJlcmVsZWFzZSwgYW5kIG5vdCBpbiBwcmVyZWxlYXNlIG1vZGVcbi8vICAgICAtIElmIG5vIEMgaGFzIGEgcHJlcmVsZWFzZSBhbmQgdGhlIExULnNlbXZlciB0dXBsZSwgcmV0dXJuIGZhbHNlXG4vLyAtIEVsc2UgcmV0dXJuIHRydWVcblxuY29uc3Qgc3Vic2V0ID0gKHN1YiwgZG9tLCBvcHRpb25zID0ge30pID0+IHtcbiAgaWYgKHN1YiA9PT0gZG9tKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHN1YiA9IG5ldyBSYW5nZShzdWIsIG9wdGlvbnMpXG4gIGRvbSA9IG5ldyBSYW5nZShkb20sIG9wdGlvbnMpXG4gIGxldCBzYXdOb25OdWxsID0gZmFsc2VcblxuICBPVVRFUjogZm9yIChjb25zdCBzaW1wbGVTdWIgb2Ygc3ViLnNldCkge1xuICAgIGZvciAoY29uc3Qgc2ltcGxlRG9tIG9mIGRvbS5zZXQpIHtcbiAgICAgIGNvbnN0IGlzU3ViID0gc2ltcGxlU3Vic2V0KHNpbXBsZVN1Yiwgc2ltcGxlRG9tLCBvcHRpb25zKVxuICAgICAgc2F3Tm9uTnVsbCA9IHNhd05vbk51bGwgfHwgaXNTdWIgIT09IG51bGxcbiAgICAgIGlmIChpc1N1Yikge1xuICAgICAgICBjb250aW51ZSBPVVRFUlxuICAgICAgfVxuICAgIH1cbiAgICAvLyB0aGUgbnVsbCBzZXQgaXMgYSBzdWJzZXQgb2YgZXZlcnl0aGluZywgYnV0IG51bGwgc2ltcGxlIHJhbmdlcyBpblxuICAgIC8vIGEgY29tcGxleCByYW5nZSBzaG91bGQgYmUgaWdub3JlZC4gIHNvIGlmIHdlIHNhdyBhIG5vbi1udWxsIHJhbmdlLFxuICAgIC8vIHRoZW4gd2Uga25vdyB0aGlzIGlzbid0IGEgc3Vic2V0LCBidXQgaWYgRVZFUlkgc2ltcGxlIHJhbmdlIHdhcyBudWxsLFxuICAgIC8vIHRoZW4gaXQgaXMgYSBzdWJzZXQuXG4gICAgaWYgKHNhd05vbk51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5jb25zdCBzaW1wbGVTdWJzZXQgPSAoc3ViLCBkb20sIG9wdGlvbnMpID0+IHtcbiAgaWYgKHN1YiA9PT0gZG9tKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmIChzdWIubGVuZ3RoID09PSAxICYmIHN1YlswXS5zZW12ZXIgPT09IEFOWSkge1xuICAgIGlmIChkb20ubGVuZ3RoID09PSAxICYmIGRvbVswXS5zZW12ZXIgPT09IEFOWSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UpIHtcbiAgICAgIHN1YiA9IFtuZXcgQ29tcGFyYXRvcignPj0wLjAuMC0wJyldXG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YiA9IFtuZXcgQ29tcGFyYXRvcignPj0wLjAuMCcpXVxuICAgIH1cbiAgfVxuXG4gIGlmIChkb20ubGVuZ3RoID09PSAxICYmIGRvbVswXS5zZW12ZXIgPT09IEFOWSkge1xuICAgIGlmIChvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICBkb20gPSBbbmV3IENvbXBhcmF0b3IoJz49MC4wLjAnKV1cbiAgICB9XG4gIH1cblxuICBjb25zdCBlcVNldCA9IG5ldyBTZXQoKVxuICBsZXQgZ3QsIGx0XG4gIGZvciAoY29uc3QgYyBvZiBzdWIpIHtcbiAgICBpZiAoYy5vcGVyYXRvciA9PT0gJz4nIHx8IGMub3BlcmF0b3IgPT09ICc+PScpIHtcbiAgICAgIGd0ID0gaGlnaGVyR1QoZ3QsIGMsIG9wdGlvbnMpXG4gICAgfSBlbHNlIGlmIChjLm9wZXJhdG9yID09PSAnPCcgfHwgYy5vcGVyYXRvciA9PT0gJzw9Jykge1xuICAgICAgbHQgPSBsb3dlckxUKGx0LCBjLCBvcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBlcVNldC5hZGQoYy5zZW12ZXIpXG4gICAgfVxuICB9XG5cbiAgaWYgKGVxU2V0LnNpemUgPiAxKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGxldCBndGx0Q29tcFxuICBpZiAoZ3QgJiYgbHQpIHtcbiAgICBndGx0Q29tcCA9IGNvbXBhcmUoZ3Quc2VtdmVyLCBsdC5zZW12ZXIsIG9wdGlvbnMpXG4gICAgaWYgKGd0bHRDb21wID4gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9IGVsc2UgaWYgKGd0bHRDb21wID09PSAwICYmIChndC5vcGVyYXRvciAhPT0gJz49JyB8fCBsdC5vcGVyYXRvciAhPT0gJzw9JykpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgLy8gd2lsbCBpdGVyYXRlIG9uZSBvciB6ZXJvIHRpbWVzXG4gIGZvciAoY29uc3QgZXEgb2YgZXFTZXQpIHtcbiAgICBpZiAoZ3QgJiYgIXNhdGlzZmllcyhlcSwgU3RyaW5nKGd0KSwgb3B0aW9ucykpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgaWYgKGx0ICYmICFzYXRpc2ZpZXMoZXEsIFN0cmluZyhsdCksIG9wdGlvbnMpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGZvciAoY29uc3QgYyBvZiBkb20pIHtcbiAgICAgIGlmICghc2F0aXNmaWVzKGVxLCBTdHJpbmcoYyksIG9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBsZXQgaGlnaGVyLCBsb3dlclxuICBsZXQgaGFzRG9tTFQsIGhhc0RvbUdUXG4gIC8vIGlmIHRoZSBzdWJzZXQgaGFzIGEgcHJlcmVsZWFzZSwgd2UgbmVlZCBhIGNvbXBhcmF0b3IgaW4gdGhlIHN1cGVyc2V0XG4gIC8vIHdpdGggdGhlIHNhbWUgdHVwbGUgYW5kIGEgcHJlcmVsZWFzZSwgb3IgaXQncyBub3QgYSBzdWJzZXRcbiAgbGV0IG5lZWREb21MVFByZSA9IGx0ICYmXG4gICAgIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UgJiZcbiAgICBsdC5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggPyBsdC5zZW12ZXIgOiBmYWxzZVxuICBsZXQgbmVlZERvbUdUUHJlID0gZ3QgJiZcbiAgICAhb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSAmJlxuICAgIGd0LnNlbXZlci5wcmVyZWxlYXNlLmxlbmd0aCA/IGd0LnNlbXZlciA6IGZhbHNlXG4gIC8vIGV4Y2VwdGlvbjogPDEuMi4zLTAgaXMgdGhlIHNhbWUgYXMgPDEuMi4zXG4gIGlmIChuZWVkRG9tTFRQcmUgJiYgbmVlZERvbUxUUHJlLnByZXJlbGVhc2UubGVuZ3RoID09PSAxICYmXG4gICAgICBsdC5vcGVyYXRvciA9PT0gJzwnICYmIG5lZWREb21MVFByZS5wcmVyZWxlYXNlWzBdID09PSAwKSB7XG4gICAgbmVlZERvbUxUUHJlID0gZmFsc2VcbiAgfVxuXG4gIGZvciAoY29uc3QgYyBvZiBkb20pIHtcbiAgICBoYXNEb21HVCA9IGhhc0RvbUdUIHx8IGMub3BlcmF0b3IgPT09ICc+JyB8fCBjLm9wZXJhdG9yID09PSAnPj0nXG4gICAgaGFzRG9tTFQgPSBoYXNEb21MVCB8fCBjLm9wZXJhdG9yID09PSAnPCcgfHwgYy5vcGVyYXRvciA9PT0gJzw9J1xuICAgIGlmIChndCkge1xuICAgICAgaWYgKG5lZWREb21HVFByZSkge1xuICAgICAgICBpZiAoYy5zZW12ZXIucHJlcmVsZWFzZSAmJiBjLnNlbXZlci5wcmVyZWxlYXNlLmxlbmd0aCAmJlxuICAgICAgICAgICAgYy5zZW12ZXIubWFqb3IgPT09IG5lZWREb21HVFByZS5tYWpvciAmJlxuICAgICAgICAgICAgYy5zZW12ZXIubWlub3IgPT09IG5lZWREb21HVFByZS5taW5vciAmJlxuICAgICAgICAgICAgYy5zZW12ZXIucGF0Y2ggPT09IG5lZWREb21HVFByZS5wYXRjaCkge1xuICAgICAgICAgIG5lZWREb21HVFByZSA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjLm9wZXJhdG9yID09PSAnPicgfHwgYy5vcGVyYXRvciA9PT0gJz49Jykge1xuICAgICAgICBoaWdoZXIgPSBoaWdoZXJHVChndCwgYywgb3B0aW9ucylcbiAgICAgICAgaWYgKGhpZ2hlciA9PT0gYyAmJiBoaWdoZXIgIT09IGd0KSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZ3Qub3BlcmF0b3IgPT09ICc+PScgJiYgIXNhdGlzZmllcyhndC5zZW12ZXIsIFN0cmluZyhjKSwgb3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsdCkge1xuICAgICAgaWYgKG5lZWREb21MVFByZSkge1xuICAgICAgICBpZiAoYy5zZW12ZXIucHJlcmVsZWFzZSAmJiBjLnNlbXZlci5wcmVyZWxlYXNlLmxlbmd0aCAmJlxuICAgICAgICAgICAgYy5zZW12ZXIubWFqb3IgPT09IG5lZWREb21MVFByZS5tYWpvciAmJlxuICAgICAgICAgICAgYy5zZW12ZXIubWlub3IgPT09IG5lZWREb21MVFByZS5taW5vciAmJlxuICAgICAgICAgICAgYy5zZW12ZXIucGF0Y2ggPT09IG5lZWREb21MVFByZS5wYXRjaCkge1xuICAgICAgICAgIG5lZWREb21MVFByZSA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjLm9wZXJhdG9yID09PSAnPCcgfHwgYy5vcGVyYXRvciA9PT0gJzw9Jykge1xuICAgICAgICBsb3dlciA9IGxvd2VyTFQobHQsIGMsIG9wdGlvbnMpXG4gICAgICAgIGlmIChsb3dlciA9PT0gYyAmJiBsb3dlciAhPT0gbHQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsdC5vcGVyYXRvciA9PT0gJzw9JyAmJiAhc2F0aXNmaWVzKGx0LnNlbXZlciwgU3RyaW5nKGMpLCBvcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFjLm9wZXJhdG9yICYmIChsdCB8fCBndCkgJiYgZ3RsdENvbXAgIT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZXJlIHdhcyBhIDwgb3IgPiwgYW5kIG5vdGhpbmcgaW4gdGhlIGRvbSwgdGhlbiBtdXN0IGJlIGZhbHNlXG4gIC8vIFVOTEVTUyBpdCB3YXMgbGltaXRlZCBieSBhbm90aGVyIHJhbmdlIGluIHRoZSBvdGhlciBkaXJlY3Rpb24uXG4gIC8vIEVnLCA+MS4wLjAgPDEuMC4xIGlzIHN0aWxsIGEgc3Vic2V0IG9mIDwyLjAuMFxuICBpZiAoZ3QgJiYgaGFzRG9tTFQgJiYgIWx0ICYmIGd0bHRDb21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAobHQgJiYgaGFzRG9tR1QgJiYgIWd0ICYmIGd0bHRDb21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyB3ZSBuZWVkZWQgYSBwcmVyZWxlYXNlIHJhbmdlIGluIGEgc3BlY2lmaWMgdHVwbGUsIGJ1dCBkaWRuJ3QgZ2V0IG9uZVxuICAvLyB0aGVuIHRoaXMgaXNuJ3QgYSBzdWJzZXQuICBlZyA+PTEuMi4zLXByZSBpcyBub3QgYSBzdWJzZXQgb2YgPj0xLjAuMCxcbiAgLy8gYmVjYXVzZSBpdCBpbmNsdWRlcyBwcmVyZWxlYXNlcyBpbiB0aGUgMS4yLjMgdHVwbGVcbiAgaWYgKG5lZWREb21HVFByZSB8fCBuZWVkRG9tTFRQcmUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbi8vID49MS4yLjMgaXMgbG93ZXIgdGhhbiA+MS4yLjNcbmNvbnN0IGhpZ2hlckdUID0gKGEsIGIsIG9wdGlvbnMpID0+IHtcbiAgaWYgKCFhKSB7XG4gICAgcmV0dXJuIGJcbiAgfVxuICBjb25zdCBjb21wID0gY29tcGFyZShhLnNlbXZlciwgYi5zZW12ZXIsIG9wdGlvbnMpXG4gIHJldHVybiBjb21wID4gMCA/IGFcbiAgICA6IGNvbXAgPCAwID8gYlxuICAgIDogYi5vcGVyYXRvciA9PT0gJz4nICYmIGEub3BlcmF0b3IgPT09ICc+PScgPyBiXG4gICAgOiBhXG59XG5cbi8vIDw9MS4yLjMgaXMgaGlnaGVyIHRoYW4gPDEuMi4zXG5jb25zdCBsb3dlckxUID0gKGEsIGIsIG9wdGlvbnMpID0+IHtcbiAgaWYgKCFhKSB7XG4gICAgcmV0dXJuIGJcbiAgfVxuICBjb25zdCBjb21wID0gY29tcGFyZShhLnNlbXZlciwgYi5zZW12ZXIsIG9wdGlvbnMpXG4gIHJldHVybiBjb21wIDwgMCA/IGFcbiAgICA6IGNvbXAgPiAwID8gYlxuICAgIDogYi5vcGVyYXRvciA9PT0gJzwnICYmIGEub3BlcmF0b3IgPT09ICc8PScgPyBiXG4gICAgOiBhXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3Vic2V0XG4iLCJjb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvcmFuZ2UnKVxuXG4vLyBNb3N0bHkganVzdCBmb3IgdGVzdGluZyBhbmQgbGVnYWN5IEFQSSByZWFzb25zXG5jb25zdCB0b0NvbXBhcmF0b3JzID0gKHJhbmdlLCBvcHRpb25zKSA9PlxuICBuZXcgUmFuZ2UocmFuZ2UsIG9wdGlvbnMpLnNldFxuICAgIC5tYXAoY29tcCA9PiBjb21wLm1hcChjID0+IGMudmFsdWUpLmpvaW4oJyAnKS50cmltKCkuc3BsaXQoJyAnKSlcblxubW9kdWxlLmV4cG9ydHMgPSB0b0NvbXBhcmF0b3JzXG4iLCJjb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvcmFuZ2UnKVxuY29uc3QgdmFsaWRSYW5nZSA9IChyYW5nZSwgb3B0aW9ucykgPT4ge1xuICB0cnkge1xuICAgIC8vIFJldHVybiAnKicgaW5zdGVhZCBvZiAnJyBzbyB0aGF0IHRydXRoaW5lc3Mgd29ya3MuXG4gICAgLy8gVGhpcyB3aWxsIHRocm93IGlmIGl0J3MgaW52YWxpZCBhbnl3YXlcbiAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBvcHRpb25zKS5yYW5nZSB8fCAnKidcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkUmFuZ2VcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIndXNlIHN0cmljdCdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFlhbGxpc3QpIHtcbiAgWWFsbGlzdC5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKiAoKSB7XG4gICAgZm9yIChsZXQgd2Fsa2VyID0gdGhpcy5oZWFkOyB3YWxrZXI7IHdhbGtlciA9IHdhbGtlci5uZXh0KSB7XG4gICAgICB5aWVsZCB3YWxrZXIudmFsdWVcbiAgICB9XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xubW9kdWxlLmV4cG9ydHMgPSBZYWxsaXN0XG5cbllhbGxpc3QuTm9kZSA9IE5vZGVcbllhbGxpc3QuY3JlYXRlID0gWWFsbGlzdFxuXG5mdW5jdGlvbiBZYWxsaXN0IChsaXN0KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICBpZiAoIShzZWxmIGluc3RhbmNlb2YgWWFsbGlzdCkpIHtcbiAgICBzZWxmID0gbmV3IFlhbGxpc3QoKVxuICB9XG5cbiAgc2VsZi50YWlsID0gbnVsbFxuICBzZWxmLmhlYWQgPSBudWxsXG4gIHNlbGYubGVuZ3RoID0gMFxuXG4gIGlmIChsaXN0ICYmIHR5cGVvZiBsaXN0LmZvckVhY2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHNlbGYucHVzaChpdGVtKVxuICAgIH0pXG4gIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHNlbGYucHVzaChhcmd1bWVudHNbaV0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNlbGZcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUucmVtb3ZlTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIGlmIChub2RlLmxpc3QgIT09IHRoaXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlbW92aW5nIG5vZGUgd2hpY2ggZG9lcyBub3QgYmVsb25nIHRvIHRoaXMgbGlzdCcpXG4gIH1cblxuICB2YXIgbmV4dCA9IG5vZGUubmV4dFxuICB2YXIgcHJldiA9IG5vZGUucHJldlxuXG4gIGlmIChuZXh0KSB7XG4gICAgbmV4dC5wcmV2ID0gcHJldlxuICB9XG5cbiAgaWYgKHByZXYpIHtcbiAgICBwcmV2Lm5leHQgPSBuZXh0XG4gIH1cblxuICBpZiAobm9kZSA9PT0gdGhpcy5oZWFkKSB7XG4gICAgdGhpcy5oZWFkID0gbmV4dFxuICB9XG4gIGlmIChub2RlID09PSB0aGlzLnRhaWwpIHtcbiAgICB0aGlzLnRhaWwgPSBwcmV2XG4gIH1cblxuICBub2RlLmxpc3QubGVuZ3RoLS1cbiAgbm9kZS5uZXh0ID0gbnVsbFxuICBub2RlLnByZXYgPSBudWxsXG4gIG5vZGUubGlzdCA9IG51bGxcblxuICByZXR1cm4gbmV4dFxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS51bnNoaWZ0Tm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIGlmIChub2RlID09PSB0aGlzLmhlYWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChub2RlLmxpc3QpIHtcbiAgICBub2RlLmxpc3QucmVtb3ZlTm9kZShub2RlKVxuICB9XG5cbiAgdmFyIGhlYWQgPSB0aGlzLmhlYWRcbiAgbm9kZS5saXN0ID0gdGhpc1xuICBub2RlLm5leHQgPSBoZWFkXG4gIGlmIChoZWFkKSB7XG4gICAgaGVhZC5wcmV2ID0gbm9kZVxuICB9XG5cbiAgdGhpcy5oZWFkID0gbm9kZVxuICBpZiAoIXRoaXMudGFpbCkge1xuICAgIHRoaXMudGFpbCA9IG5vZGVcbiAgfVxuICB0aGlzLmxlbmd0aCsrXG59XG5cbllhbGxpc3QucHJvdG90eXBlLnB1c2hOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IHRoaXMudGFpbCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKG5vZGUubGlzdCkge1xuICAgIG5vZGUubGlzdC5yZW1vdmVOb2RlKG5vZGUpXG4gIH1cblxuICB2YXIgdGFpbCA9IHRoaXMudGFpbFxuICBub2RlLmxpc3QgPSB0aGlzXG4gIG5vZGUucHJldiA9IHRhaWxcbiAgaWYgKHRhaWwpIHtcbiAgICB0YWlsLm5leHQgPSBub2RlXG4gIH1cblxuICB0aGlzLnRhaWwgPSBub2RlXG4gIGlmICghdGhpcy5oZWFkKSB7XG4gICAgdGhpcy5oZWFkID0gbm9kZVxuICB9XG4gIHRoaXMubGVuZ3RoKytcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgcHVzaCh0aGlzLCBhcmd1bWVudHNbaV0pXG4gIH1cbiAgcmV0dXJuIHRoaXMubGVuZ3RoXG59XG5cbllhbGxpc3QucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHVuc2hpZnQodGhpcywgYXJndW1lbnRzW2ldKVxuICB9XG4gIHJldHVybiB0aGlzLmxlbmd0aFxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy50YWlsKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgdmFyIHJlcyA9IHRoaXMudGFpbC52YWx1ZVxuICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwucHJldlxuICBpZiAodGhpcy50YWlsKSB7XG4gICAgdGhpcy50YWlsLm5leHQgPSBudWxsXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5oZWFkID0gbnVsbFxuICB9XG4gIHRoaXMubGVuZ3RoLS1cbiAgcmV0dXJuIHJlc1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5zaGlmdCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmhlYWQpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB2YXIgcmVzID0gdGhpcy5oZWFkLnZhbHVlXG4gIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0XG4gIGlmICh0aGlzLmhlYWQpIHtcbiAgICB0aGlzLmhlYWQucHJldiA9IG51bGxcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnRhaWwgPSBudWxsXG4gIH1cbiAgdGhpcy5sZW5ndGgtLVxuICByZXR1cm4gcmVzXG59XG5cbllhbGxpc3QucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoZm4sIHRoaXNwKSB7XG4gIHRoaXNwID0gdGhpc3AgfHwgdGhpc1xuICBmb3IgKHZhciB3YWxrZXIgPSB0aGlzLmhlYWQsIGkgPSAwOyB3YWxrZXIgIT09IG51bGw7IGkrKykge1xuICAgIGZuLmNhbGwodGhpc3AsIHdhbGtlci52YWx1ZSwgaSwgdGhpcylcbiAgICB3YWxrZXIgPSB3YWxrZXIubmV4dFxuICB9XG59XG5cbllhbGxpc3QucHJvdG90eXBlLmZvckVhY2hSZXZlcnNlID0gZnVuY3Rpb24gKGZuLCB0aGlzcCkge1xuICB0aGlzcCA9IHRoaXNwIHx8IHRoaXNcbiAgZm9yICh2YXIgd2Fsa2VyID0gdGhpcy50YWlsLCBpID0gdGhpcy5sZW5ndGggLSAxOyB3YWxrZXIgIT09IG51bGw7IGktLSkge1xuICAgIGZuLmNhbGwodGhpc3AsIHdhbGtlci52YWx1ZSwgaSwgdGhpcylcbiAgICB3YWxrZXIgPSB3YWxrZXIucHJldlxuICB9XG59XG5cbllhbGxpc3QucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChuKSB7XG4gIGZvciAodmFyIGkgPSAwLCB3YWxrZXIgPSB0aGlzLmhlYWQ7IHdhbGtlciAhPT0gbnVsbCAmJiBpIDwgbjsgaSsrKSB7XG4gICAgLy8gYWJvcnQgb3V0IG9mIHRoZSBsaXN0IGVhcmx5IGlmIHdlIGhpdCBhIGN5Y2xlXG4gICAgd2Fsa2VyID0gd2Fsa2VyLm5leHRcbiAgfVxuICBpZiAoaSA9PT0gbiAmJiB3YWxrZXIgIT09IG51bGwpIHtcbiAgICByZXR1cm4gd2Fsa2VyLnZhbHVlXG4gIH1cbn1cblxuWWFsbGlzdC5wcm90b3R5cGUuZ2V0UmV2ZXJzZSA9IGZ1bmN0aW9uIChuKSB7XG4gIGZvciAodmFyIGkgPSAwLCB3YWxrZXIgPSB0aGlzLnRhaWw7IHdhbGtlciAhPT0gbnVsbCAmJiBpIDwgbjsgaSsrKSB7XG4gICAgLy8gYWJvcnQgb3V0IG9mIHRoZSBsaXN0IGVhcmx5IGlmIHdlIGhpdCBhIGN5Y2xlXG4gICAgd2Fsa2VyID0gd2Fsa2VyLnByZXZcbiAgfVxuICBpZiAoaSA9PT0gbiAmJiB3YWxrZXIgIT09IG51bGwpIHtcbiAgICByZXR1cm4gd2Fsa2VyLnZhbHVlXG4gIH1cbn1cblxuWWFsbGlzdC5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gKGZuLCB0aGlzcCkge1xuICB0aGlzcCA9IHRoaXNwIHx8IHRoaXNcbiAgdmFyIHJlcyA9IG5ldyBZYWxsaXN0KClcbiAgZm9yICh2YXIgd2Fsa2VyID0gdGhpcy5oZWFkOyB3YWxrZXIgIT09IG51bGw7KSB7XG4gICAgcmVzLnB1c2goZm4uY2FsbCh0aGlzcCwgd2Fsa2VyLnZhbHVlLCB0aGlzKSlcbiAgICB3YWxrZXIgPSB3YWxrZXIubmV4dFxuICB9XG4gIHJldHVybiByZXNcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUubWFwUmV2ZXJzZSA9IGZ1bmN0aW9uIChmbiwgdGhpc3ApIHtcbiAgdGhpc3AgPSB0aGlzcCB8fCB0aGlzXG4gIHZhciByZXMgPSBuZXcgWWFsbGlzdCgpXG4gIGZvciAodmFyIHdhbGtlciA9IHRoaXMudGFpbDsgd2Fsa2VyICE9PSBudWxsOykge1xuICAgIHJlcy5wdXNoKGZuLmNhbGwodGhpc3AsIHdhbGtlci52YWx1ZSwgdGhpcykpXG4gICAgd2Fsa2VyID0gd2Fsa2VyLnByZXZcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbllhbGxpc3QucHJvdG90eXBlLnJlZHVjZSA9IGZ1bmN0aW9uIChmbiwgaW5pdGlhbCkge1xuICB2YXIgYWNjXG4gIHZhciB3YWxrZXIgPSB0aGlzLmhlYWRcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgYWNjID0gaW5pdGlhbFxuICB9IGVsc2UgaWYgKHRoaXMuaGVhZCkge1xuICAgIHdhbGtlciA9IHRoaXMuaGVhZC5uZXh0XG4gICAgYWNjID0gdGhpcy5oZWFkLnZhbHVlXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGxpc3Qgd2l0aCBubyBpbml0aWFsIHZhbHVlJylcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyB3YWxrZXIgIT09IG51bGw7IGkrKykge1xuICAgIGFjYyA9IGZuKGFjYywgd2Fsa2VyLnZhbHVlLCBpKVxuICAgIHdhbGtlciA9IHdhbGtlci5uZXh0XG4gIH1cblxuICByZXR1cm4gYWNjXG59XG5cbllhbGxpc3QucHJvdG90eXBlLnJlZHVjZVJldmVyc2UgPSBmdW5jdGlvbiAoZm4sIGluaXRpYWwpIHtcbiAgdmFyIGFjY1xuICB2YXIgd2Fsa2VyID0gdGhpcy50YWlsXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgIGFjYyA9IGluaXRpYWxcbiAgfSBlbHNlIGlmICh0aGlzLnRhaWwpIHtcbiAgICB3YWxrZXIgPSB0aGlzLnRhaWwucHJldlxuICAgIGFjYyA9IHRoaXMudGFpbC52YWx1ZVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlZHVjZSBvZiBlbXB0eSBsaXN0IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpXG4gIH1cblxuICBmb3IgKHZhciBpID0gdGhpcy5sZW5ndGggLSAxOyB3YWxrZXIgIT09IG51bGw7IGktLSkge1xuICAgIGFjYyA9IGZuKGFjYywgd2Fsa2VyLnZhbHVlLCBpKVxuICAgIHdhbGtlciA9IHdhbGtlci5wcmV2XG4gIH1cblxuICByZXR1cm4gYWNjXG59XG5cbllhbGxpc3QucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnIgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpXG4gIGZvciAodmFyIGkgPSAwLCB3YWxrZXIgPSB0aGlzLmhlYWQ7IHdhbGtlciAhPT0gbnVsbDsgaSsrKSB7XG4gICAgYXJyW2ldID0gd2Fsa2VyLnZhbHVlXG4gICAgd2Fsa2VyID0gd2Fsa2VyLm5leHRcbiAgfVxuICByZXR1cm4gYXJyXG59XG5cbllhbGxpc3QucHJvdG90eXBlLnRvQXJyYXlSZXZlcnNlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyID0gbmV3IEFycmF5KHRoaXMubGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMCwgd2Fsa2VyID0gdGhpcy50YWlsOyB3YWxrZXIgIT09IG51bGw7IGkrKykge1xuICAgIGFycltpXSA9IHdhbGtlci52YWx1ZVxuICAgIHdhbGtlciA9IHdhbGtlci5wcmV2XG4gIH1cbiAgcmV0dXJuIGFyclxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICB0byA9IHRvIHx8IHRoaXMubGVuZ3RoXG4gIGlmICh0byA8IDApIHtcbiAgICB0byArPSB0aGlzLmxlbmd0aFxuICB9XG4gIGZyb20gPSBmcm9tIHx8IDBcbiAgaWYgKGZyb20gPCAwKSB7XG4gICAgZnJvbSArPSB0aGlzLmxlbmd0aFxuICB9XG4gIHZhciByZXQgPSBuZXcgWWFsbGlzdCgpXG4gIGlmICh0byA8IGZyb20gfHwgdG8gPCAwKSB7XG4gICAgcmV0dXJuIHJldFxuICB9XG4gIGlmIChmcm9tIDwgMCkge1xuICAgIGZyb20gPSAwXG4gIH1cbiAgaWYgKHRvID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0byA9IHRoaXMubGVuZ3RoXG4gIH1cbiAgZm9yICh2YXIgaSA9IDAsIHdhbGtlciA9IHRoaXMuaGVhZDsgd2Fsa2VyICE9PSBudWxsICYmIGkgPCBmcm9tOyBpKyspIHtcbiAgICB3YWxrZXIgPSB3YWxrZXIubmV4dFxuICB9XG4gIGZvciAoOyB3YWxrZXIgIT09IG51bGwgJiYgaSA8IHRvOyBpKyssIHdhbGtlciA9IHdhbGtlci5uZXh0KSB7XG4gICAgcmV0LnB1c2god2Fsa2VyLnZhbHVlKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUuc2xpY2VSZXZlcnNlID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gIHRvID0gdG8gfHwgdGhpcy5sZW5ndGhcbiAgaWYgKHRvIDwgMCkge1xuICAgIHRvICs9IHRoaXMubGVuZ3RoXG4gIH1cbiAgZnJvbSA9IGZyb20gfHwgMFxuICBpZiAoZnJvbSA8IDApIHtcbiAgICBmcm9tICs9IHRoaXMubGVuZ3RoXG4gIH1cbiAgdmFyIHJldCA9IG5ldyBZYWxsaXN0KClcbiAgaWYgKHRvIDwgZnJvbSB8fCB0byA8IDApIHtcbiAgICByZXR1cm4gcmV0XG4gIH1cbiAgaWYgKGZyb20gPCAwKSB7XG4gICAgZnJvbSA9IDBcbiAgfVxuICBpZiAodG8gPiB0aGlzLmxlbmd0aCkge1xuICAgIHRvID0gdGhpcy5sZW5ndGhcbiAgfVxuICBmb3IgKHZhciBpID0gdGhpcy5sZW5ndGgsIHdhbGtlciA9IHRoaXMudGFpbDsgd2Fsa2VyICE9PSBudWxsICYmIGkgPiB0bzsgaS0tKSB7XG4gICAgd2Fsa2VyID0gd2Fsa2VyLnByZXZcbiAgfVxuICBmb3IgKDsgd2Fsa2VyICE9PSBudWxsICYmIGkgPiBmcm9tOyBpLS0sIHdhbGtlciA9IHdhbGtlci5wcmV2KSB7XG4gICAgcmV0LnB1c2god2Fsa2VyLnZhbHVlKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUuc3BsaWNlID0gZnVuY3Rpb24gKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ubm9kZXMpIHtcbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICBzdGFydCA9IHRoaXMubGVuZ3RoIC0gMVxuICB9XG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IHRoaXMubGVuZ3RoICsgc3RhcnQ7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgd2Fsa2VyID0gdGhpcy5oZWFkOyB3YWxrZXIgIT09IG51bGwgJiYgaSA8IHN0YXJ0OyBpKyspIHtcbiAgICB3YWxrZXIgPSB3YWxrZXIubmV4dFxuICB9XG5cbiAgdmFyIHJldCA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyB3YWxrZXIgJiYgaSA8IGRlbGV0ZUNvdW50OyBpKyspIHtcbiAgICByZXQucHVzaCh3YWxrZXIudmFsdWUpXG4gICAgd2Fsa2VyID0gdGhpcy5yZW1vdmVOb2RlKHdhbGtlcilcbiAgfVxuICBpZiAod2Fsa2VyID09PSBudWxsKSB7XG4gICAgd2Fsa2VyID0gdGhpcy50YWlsXG4gIH1cblxuICBpZiAod2Fsa2VyICE9PSB0aGlzLmhlYWQgJiYgd2Fsa2VyICE9PSB0aGlzLnRhaWwpIHtcbiAgICB3YWxrZXIgPSB3YWxrZXIucHJldlxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIHdhbGtlciA9IGluc2VydCh0aGlzLCB3YWxrZXIsIG5vZGVzW2ldKVxuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbllhbGxpc3QucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkID0gdGhpcy5oZWFkXG4gIHZhciB0YWlsID0gdGhpcy50YWlsXG4gIGZvciAodmFyIHdhbGtlciA9IGhlYWQ7IHdhbGtlciAhPT0gbnVsbDsgd2Fsa2VyID0gd2Fsa2VyLnByZXYpIHtcbiAgICB2YXIgcCA9IHdhbGtlci5wcmV2XG4gICAgd2Fsa2VyLnByZXYgPSB3YWxrZXIubmV4dFxuICAgIHdhbGtlci5uZXh0ID0gcFxuICB9XG4gIHRoaXMuaGVhZCA9IHRhaWxcbiAgdGhpcy50YWlsID0gaGVhZFxuICByZXR1cm4gdGhpc1xufVxuXG5mdW5jdGlvbiBpbnNlcnQgKHNlbGYsIG5vZGUsIHZhbHVlKSB7XG4gIHZhciBpbnNlcnRlZCA9IG5vZGUgPT09IHNlbGYuaGVhZCA/XG4gICAgbmV3IE5vZGUodmFsdWUsIG51bGwsIG5vZGUsIHNlbGYpIDpcbiAgICBuZXcgTm9kZSh2YWx1ZSwgbm9kZSwgbm9kZS5uZXh0LCBzZWxmKVxuXG4gIGlmIChpbnNlcnRlZC5uZXh0ID09PSBudWxsKSB7XG4gICAgc2VsZi50YWlsID0gaW5zZXJ0ZWRcbiAgfVxuICBpZiAoaW5zZXJ0ZWQucHJldiA9PT0gbnVsbCkge1xuICAgIHNlbGYuaGVhZCA9IGluc2VydGVkXG4gIH1cblxuICBzZWxmLmxlbmd0aCsrXG5cbiAgcmV0dXJuIGluc2VydGVkXG59XG5cbmZ1bmN0aW9uIHB1c2ggKHNlbGYsIGl0ZW0pIHtcbiAgc2VsZi50YWlsID0gbmV3IE5vZGUoaXRlbSwgc2VsZi50YWlsLCBudWxsLCBzZWxmKVxuICBpZiAoIXNlbGYuaGVhZCkge1xuICAgIHNlbGYuaGVhZCA9IHNlbGYudGFpbFxuICB9XG4gIHNlbGYubGVuZ3RoKytcbn1cblxuZnVuY3Rpb24gdW5zaGlmdCAoc2VsZiwgaXRlbSkge1xuICBzZWxmLmhlYWQgPSBuZXcgTm9kZShpdGVtLCBudWxsLCBzZWxmLmhlYWQsIHNlbGYpXG4gIGlmICghc2VsZi50YWlsKSB7XG4gICAgc2VsZi50YWlsID0gc2VsZi5oZWFkXG4gIH1cbiAgc2VsZi5sZW5ndGgrK1xufVxuXG5mdW5jdGlvbiBOb2RlICh2YWx1ZSwgcHJldiwgbmV4dCwgbGlzdCkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTm9kZSkpIHtcbiAgICByZXR1cm4gbmV3IE5vZGUodmFsdWUsIHByZXYsIG5leHQsIGxpc3QpXG4gIH1cblxuICB0aGlzLmxpc3QgPSBsaXN0XG4gIHRoaXMudmFsdWUgPSB2YWx1ZVxuXG4gIGlmIChwcmV2KSB7XG4gICAgcHJldi5uZXh0ID0gdGhpc1xuICAgIHRoaXMucHJldiA9IHByZXZcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnByZXYgPSBudWxsXG4gIH1cblxuICBpZiAobmV4dCkge1xuICAgIG5leHQucHJldiA9IHRoaXNcbiAgICB0aGlzLm5leHQgPSBuZXh0XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5uZXh0ID0gbnVsbFxuICB9XG59XG5cbnRyeSB7XG4gIC8vIGFkZCBpZiBzdXBwb3J0IGZvciBTeW1ib2wuaXRlcmF0b3IgaXMgcHJlc2VudFxuICByZXF1aXJlKCcuL2l0ZXJhdG9yLmpzJykoWWFsbGlzdClcbn0gY2F0Y2ggKGVyKSB7fVxuIiwiaW1wb3J0IHsgZWxlbWVudCB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBhZGQsIGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgY3ljbGVQcmlvcml0eSwgZGVsZXRlUHJvamVjdCwgZWRpdFByb2plY3RCb3ggYXMgZWRpdFByb2plY3QsIGZpbmlzaFByb2plY3QsIHJlbmRlclByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0VUkuanNcIjtcbmltcG9ydCB7IHJlbmRlclRhc2sgfSBmcm9tIFwiLi9wcm9qZWN0VUkuanNcIjtcblxuXG5pbXBvcnQgc2V0dGluZ3NJY29uIGZyb20gXCIuL2ltZy9jb2cuc3ZnXCI7XG5pbXBvcnQgZXhwYW5kSWNvbiBmcm9tIFwiLi9pbWcvZXhwYW5kLnN2Z1wiO1xuaW1wb3J0IGZpbmlzaEljb24gZnJvbSBcIi4vaW1nL2ZpbmlzaC10YXNrLnN2Z1wiO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCJzZW12ZXJcIjtcbmltcG9ydCB7IHByaW9yaXR5U3R5bGUgfSBmcm9tIFwiLi90YXNrVUlcIjtcbmltcG9ydCB7IGFkZE5ld1Byb2plY3QgfSBmcm9tIFwiLi9jb250ZW50XCI7XG4vLyBDcmVhdGUgY2FyZHMgdG8gZGlzcGxheSBwcm9qZWN0cyBpbiB3b3Jrc3BhY2VcblxuXG5cbi8vIENyZWF0ZSBhIGNhcmQgdG8gcmVwcmVzZW50IHRoZSBwcm9qZWN0IGluIHNtYWxsIGRldGFpbCwgYW5kIHJldHVybiByZWZlcmVuY2UgdG8gdGhlIERPTSBvYmplY3Qgb2YgdGhhdCBjYXJkLlxuLy8gVGhlIGNhcmQgaXMgZGl2aWRlZCB2ZXJ0aWNhbGx5IGludG8gZGlmZmVyZW50IHNlY3Rpb25zIHdoaWNoIGFyZSBjdXN0b21pemFibGUgaGVyZVxuY29uc3QgY3JlYXRlUHJvamVjdENhcmQgPSAocHJvamVjdCkgPT4ge1xuXG4gICAgLy8gV2lsbCBiZSByZXR1cm5lZFxuICAgIGNvbnN0IGNhcmQgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ2NhcmQgcHJvamVjdC1jYXJkJ30pXG4gICBcblxuICAgIGNvbnN0IHRpdGxlQmFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZUJhciA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnY2FyZC1idXR0b24tYmFyJ30pOyAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZWxlbWVudCgnaDMnLCB7J2NsYXNzJzogJ2NhcmQtdGl0bGUnfSk7XG4gICAgICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmNvbnRlbnQuZ2V0VGl0bGUoKTtcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogc2V0dGluZ3NJY29uLCAnYWx0JzogJ3NldHRpbmdzJywgJ2NsYXNzJzogJ2NhcmQtYnV0dG9uJ30pXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gb3BlblNldHRpbmdzKGUudGFyZ2V0LCBwcm9qZWN0KSlcbiAgICAgICAgICAgIHRpdGxlQmFyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICAgIHRpdGxlQmFyLmFwcGVuZENoaWxkKHNldHRpbmdzKTtcblxuICAgICAgICByZXR1cm4gdGl0bGVCYXI7XG4gICAgfVxuXG5cbiAgICBjb25zdCBjb250ZW50ID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGdvYWwgPSBlbGVtZW50KCdwJywgeydjbGFzcyc6ICdjYXJkLWNvbnRlbnQgY2FyZC1nb2FsJ30pO1xuICAgICAgICBnb2FsLnRleHRDb250ZW50ID0gcHJvamVjdC5jb250ZW50LmdldEdvYWwoKTtcblxuICAgICAgICByZXR1cm4gZ29hbDtcbiAgICB9XG5cbiAgICBjb25zdCBkZWFkbGluZUNvbnRhaW5lciA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ2NhcmQtZGVhZGxpbmUgZGVhZGxpbmUtY29udGFpbmVyJ30pXG4gICAgICAgICAgICBjb25zdCBkYXlzTGVmdCA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnY2FyZC1kZWFkbGluZS1kYXlzJ30pO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnY2FyZC1kdWUtZGF0ZSd9KVxuICAgICAgICAgICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBmb3JtYXQocHJvamVjdC5jb250ZW50LmdldERlYWRsaW5lKCksICdNTS9kZC95eScpO1xuICAgICAgICAgICAgZGF5c0xlZnQudGV4dENvbnRlbnQgPSBgJHtnZXREYXlzUmVtYWluaW5nKHByb2plY3QpfSBkYXlzIGxlZnRgO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5c0xlZnQpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuICAgXG4gICAgY29uc3QgYnV0dG9uQmFyID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkJhciA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnY2FyZC1idXR0b24tYmFyJ30pXG5cbiAgICAgICAgICAgIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2ltYWdlJywgJ3NyYyc6IGV4cGFuZEljb24sICdhbHQnOiAnRXhwYW5kIHByb2plY3QnLCAnY2xhc3MnOiAnY2FyZC1idXR0b24nfSlcbiAgICAgICAgICAgICAgICBleHBhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJQcm9qZWN0KHByb2plY3QpKTtcblxuICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZUNvbnRhaW5lciA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnY2FyZC1pbmZvIGNhcmQtcGVyY2VudC1jb250YWluZXInfSlcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2VMZWZ0ID0gZWxlbWVudCgncCcsIHsnY2xhc3MnOiAnY2FyZC1wZXJjZW50YWdlJ30pXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q291bnQgPSBwcm9qZWN0LnRhc2tzLmdldFRhc2tMaXN0KCk7XG5cblxuICAgICAgICAgICAgaWYgKHByb2plY3RDb3VudC5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV0ZWRDb3VudCA9IHByb2plY3QudGFza3MuZ2V0Q29tcGxldGVkVGFza3MoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV0aW9uUGVyY2VudGFnZSA9IE1hdGgucm91bmQoKGNvbXBsZXRlZENvdW50Lmxlbmd0aCAvcHJvamVjdENvdW50Lmxlbmd0aCkgKiAxMDApXG5cbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlTGVmdC50ZXh0Q29udGVudCA9IGBjb21wbGV0ZTogJHtjb21wbGV0ZWRDb3VudC5sZW5ndGh9LyR7cHJvamVjdENvdW50Lmxlbmd0aH0gKCR7Y29tcGxldGlvblBlcmNlbnRhZ2V9JSlgXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRpb25QZXJjZW50YWdlID09PSAxMDApe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29tcGxldGUnKVxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWNvbXBsZXRlZFwiKVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBlcmNlbnRhZ2VMZWZ0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBmaW5pc2hCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBmaW5pc2hJY29uLCAnYWx0JzogJ0NvbXBsZXRlIHByb2plY3QnLCAnY2xhc3MnOiAnY2FyZC1idXR0b24nfSk7XG4gICAgICAgICAgICAgICAgZmluaXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZmluaXNoUHJvamVjdChwcm9qZWN0KSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgYnV0dG9uQmFyLmFwcGVuZENoaWxkKGZpbmlzaEJ1dHRvbilcbiAgICAgICAgYnV0dG9uQmFyLmFwcGVuZENoaWxkKHBlcmNlbnRhZ2VDb250YWluZXIpXG4gICAgICAgIGJ1dHRvbkJhci5hcHBlbmRDaGlsZChleHBhbmRCdXR0b24pO1xuICAgICAgICByZXR1cm4gYnV0dG9uQmFyO1xuICAgIH1cblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGVCYXIoKSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjb250ZW50KCkpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVhZGxpbmVDb250YWluZXIoKSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChidXR0b25CYXIoKSk7XG5cbiAgICByZXR1cm4gY2FyZDtcbn1cblxuLy8gU2ltcGx5IHJldHVybnMgZGF5cyBiZXR3ZWVuIGR1ZSBkYXRlIGFuZCBjdXJyZW50IGRhdGVcbmNvbnN0IGdldERheXNSZW1haW5pbmcgPSAocHJvamVjdCkgPT4ge1xuXG4gICAgY29uc3QgZHVlRGF0ZSA9IHByb2plY3QuY29udGVudC5nZXREZWFkbGluZSgpO1xuICAgIGNvbnN0IHRvZGF5ID0gRGF0ZS5ub3coKTtcbiAgICBcbiAgICBcbiAgICByZXR1cm4gZm9ybWF0KChkdWVEYXRlIC0gdG9kYXkpLCAnZGQnKSBcblxuXG59XG5cbmNvbnN0IG9wZW5TZXR0aW5ncyA9IChwYXJlbnRCdXR0b24sIHByb2plY3QpID0+IHtcblxuICAgIGNvbnNvbGUubG9nKCdvcGVuIHNldHRpbmdzIG1lbnUnKVxuICAgIGNvbnN0IHBhcmVudENhcmQgPSBwYXJlbnRCdXR0b24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGNvbnNvbGUubG9nKHBhcmVudENhcmQpXG4gICAgLy8gcG9wdXAgbWVudVxuICAgIHBhcmVudEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtc2V0dGluZ3MtYnV0dG9uJylcblxuICAgIHNldHRpbmdzTWVudShwYXJlbnRDYXJkLCBwcm9qZWN0KVxuXG59XG5cbi8vIEdlYXIgbWVudSBmb3IgcXVpY2sgYWNjZXNzIHRvIHZhcmlvdXMgb3B0aW9uc1xuY29uc3Qgc2V0dGluZ3NNZW51ID0gKGNhcmQsIHByb2plY3QpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjYXJkKTtcbiAgICBjb25zb2xlLmxvZygnc2V0dGluZ3MgbWVudScpXG4gICAgY29uc3QgY29udGFpbmVyID0gZWxlbWVudCgnZGl2JywgeydpZCc6ICdjb250ZXh0LW1lbnUtY29udGFpbmVyJ30pO1xuICAgIGNvbnN0IG1lbnUgPSBlbGVtZW50KCdkaXYnLCB7J2lkJzogJ2NvbnRleHQtbWVudSd9KTtcbiAgICBjb25zdCBtZW51SXRlbXMgPSBlbGVtZW50KCd1bCcsIHsnaWQnOiAnbWVudS1pdGVtcyBtZW51LWxpc3QnfSk7XG5cbiAgICBjb25zdCBvcGVuID0gZWxlbWVudCgnbGknLCB7J2NsYXNzJzogJ21lbnUtb3BlbiBtZW51LWl0ZW0nLCB9KTtcbiAgICBvcGVuLnRleHRDb250ZW50ID0gJ29wZW4nO1xuICAgICAgICBvcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgY29uc3QgZWRpdCA9IGVsZW1lbnQoJ2xpJywgeydjbGFzcyc6ICdtZW51LWVkaXQgbWVudS1pdGVtJ30pO1xuICAgIGVkaXQudGV4dENvbnRlbnQgPSAnZWRpdCc7XG4gICAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgZWRpdFByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICB9KVxuICAgIGNvbnN0IHRvZ2dsZSA9IGVsZW1lbnQoJ2xpJywgeydjbGFzcyc6ICdtZW51LXRvZ2dsZSBtZW51LWl0ZW0nfSk7XG4gICAgdG9nZ2xlLnRleHRDb250ZW50ID0gYGNoYW5nZSBwcmlvcml0eSgke3ByaW9yaXR5U3R5bGUocHJvamVjdC5jb250ZW50KS5wcmlvcml0eVRleHQudG9Mb3dlckNhc2UoKX0pYFxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjeWNsZVByaW9yaXR5KHByb2plY3QpO1xuICAgICAgICB9KTtcbiAgICBjb25zdCBmaW5pc2ggPSBlbGVtZW50KCdsaScsIHsnY2xhc3MnOiAnbWVudS1maW5pc2ggbWVudS1pdGVtJ30pO1xuICAgICAgICAgICAgZmluaXNoLnRleHRDb250ZW50ID0gJ3RvZ2dsZSBjb21wbGV0aW9uJztcbiAgICAgICAgICAgIGZpbmlzaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtmaW5pc2hQcm9qZWN0KHByb2plY3QpfSkgICAgICAgIFxuICAgICAgICBcbiAgICBjb25zdCBkZWwgPSBlbGVtZW50KCdsaScsIHsnY2xhc3MnOiAnbWVudS1kZWxldGUgbWVudS1pdGVtJ30pO1xuICAgIGRlbC50ZXh0Q29udGVudCA9ICdkZWxldGUgcHJvamVjdCc7XG4gICAgICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGknKVxuICAgICAgICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgfSlcblxuICAgXG5cblxuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChvcGVuKTtcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKHRvZ2dsZSk7XG4gICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKGZpbmlzaCk7XG4gICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKGRlbCk7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtcyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgIH1cblxuXG59XG5cblxuXG5cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdENhcmR9XG5cblxuXG4iLCJpbXBvcnQgeyBlbGVtZW50IH0gZnJvbSBcIi4vdXRpbHNcIlxuaW1wb3J0IG5ld1Byb2pJY29uIGZyb20gXCIuL2ltZy9ub3RlLXBsdXMuc3ZnXCJcbmltcG9ydCB7IGFkZFByb2plY3RCdXR0b24sIHJlbmRlclByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0VUkuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RDYXJkIGFzIHJlbmRlclByb2plY3RDYXJkfSBmcm9tIFwiLi9jYXJkc1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5cbi8vICBDb250ZW50IHNwYWNlIHRoYXQgaG9sZHMgcHJvamVjdHNcblxuLy8gQ3JlYXRlIHdvcmtzcGFjZVxuXG5jb25zdCBjcmVhdGVXb3JrU3BhY2UgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBtYWluID0gZWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdtYWluLWNvbnRhaW5lcicsICdpZCc6ICd3b3Jrc3BhY2UtY29udGFpbmVyJ30pO1xuICAgIFxuICAgIGNvbnN0IHdvcmtzcGFjZSA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnd29ya3NwYWNlJywgJ2lkJzogJ3dvcmtzcGFjZSd9KTtcbiAgICBcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogbmV3UHJvakljb24sICdhbHQnOiBcIkNyZWF0ZSBuZXcgcHJvamVjdFwiLCAnY2xhc3MnOiAnY29udGVudC1idXR0b24nLCAnaWQnOiAnYWRkLW5ldy1wcm9qZWN0J30pO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB3b3Jrc3BhY2UuaW5zZXJ0QmVmb3JlKGFkZE5ld1Byb2plY3QoKSwgYWRkUHJvamVjdEJ1dHRvbik7ICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgd29ya3NwYWNlLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQod29ya3NwYWNlKTtcblxuICAgIHJldHVybiBtYWluO1xufVxuXG5jb25zdCBhZGROZXdQcm9qZWN0ID0gKHByb2opID0+IHtcbiAgICBsZXQgcHJvamVjdDtcbiAgICAocHJvaiAhPSBudWxsKSA/IHByb2plY3QgPSBwcm9qIDogcHJvamVjdCA9IFByb2plY3QoKTtcbiAgICBjb25zdCBjYXJkID0gcmVuZGVyUHJvamVjdENhcmQocHJvamVjdCk7XG4gICAgcHJvamVjdExpc3QuYWRkUHJvamVjdChwcm9qZWN0KVxuIFxuICAgIFxuICAgIHJldHVybiBjYXJkO1xuXG59XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gKChwcm9qZWN0KSA9PiB7XG5cbiAgICBsZXQgbGlzdCA9IFtdO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGxpc3QucHVzaChwcm9qZWN0KVxuICAgICAgICBjb25zb2xlLmxvZyhnZXRQcm9qZWN0cygpKVxuXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG5cbiAgICAgICAgbGlzdC5zcGxpY2UocHJvamVjdCwgMSk7XG4gICAgICAgIHJlbmRlclByb2plY3RMaXN0KCk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IGxpc3Q7XG5cbiAgICByZXR1cm4ge2FkZFByb2plY3QsIGdldFByb2plY3RzLCByZW1vdmVQcm9qZWN0fVxuXG59KSgpO1xuXG5jb25zdCByZW5kZXJQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCB3b3JrU3BhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd29ya3NwYWNlJylcbiAgICBjb25zdCB3b3JrU3BhY2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLW5ldy1wcm9qZWN0JylcblxuICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcbiAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuXG4gICAgICAgIGNhcmQucmVtb3ZlKClcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0LmdldFByb2plY3RzKCkpXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0cygpKXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNhcmQgPSByZW5kZXJQcm9qZWN0Q2FyZChwcm9qZWN0KVxuICAgICAgICB3b3JrU3BhY2UuaW5zZXJ0QmVmb3JlKGNhcmQsIHdvcmtTcGFjZUJ1dHRvbilcblxuICAgIH1cblxufVxuXG5jb25zdCBzd2l0Y2hEaXNwbGF5U3R5bGUgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWItY29udGFpbmVyJyk7XG4gICBcbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyk7XG4gICAgaWYgKHN0eWxlICE9IG51bGwpe1xuICAgICAgICBzdHlsZS5jbGFzc0xpc3QucmVtb3ZlKCd0YWItY29udGFpbmVyJyk7XG5cbiAgICBcbiAgICAgICAgY2FyZHMuZm9yRWFjaCh0YWIgPT4gdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYicpKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3Jrc3BhY2UnKTtcbiAgICAgICAgZGlzcGxheS5jbGFzc0xpc3QuYWRkKCd0YWItY29udGFpbmVyJyk7XG4gICAgICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiBjYXJkLmNsYXNzTGlzdC5hZGQoJ3RhYicpKTtcbiAgICB9XG5cbn1cblxuLy8gcmVmcmVzaCBzY3JlZW4gYW5kIGRpc3BsYXkgcHJvamVjdHMgY29udGFpbmVkIGluIGxpc3RcblxuXG5cbmV4cG9ydCB7Y3JlYXRlV29ya1NwYWNlIGFzIGNvbnRlbnQsIHByb2plY3RMaXN0LCByZW5kZXJQcm9qZWN0TGlzdCwgYWRkTmV3UHJvamVjdCwgc3dpdGNoRGlzcGxheVN0eWxlfVxuXG4vLyBCdXR0b24gZm9yIGFkZGluZyBuZXcgcHJvamVjdFxuXG5cbi8vIEFycmF5IG9mIHByb2plY3RzIGFuZCB0aGVpciBJRHMgKGtleS92YWx1ZSBwYWlyKSIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgZWxlbWVudCwgbWFrZUNvbnRhaW5lciwgc2V0QXR0cmlidXRlcyB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgZGVmYXVsdFByb2plY3QgZnJvbSBcIi4vZGVmYXVsdC1wcm9qZWN0Lmpzb25cIlxuaW1wb3J0IGRlZmF1bHRUYXNrIGZyb20gXCIuL2RlZmF1bHQtdGFzay5qc29uXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RMaXN0IH0gZnJvbSBcIi4vY29udGVudFwiO1xuXG4vLyBpbWFnZXNcbmltcG9ydCBjbG9zZVRhc2tJY29uIGZyb20gXCIuL2ltZy9jbG9zZS10YXNrLnN2Z1wiO1xuaW1wb3J0IGVkaXRUYXNrSWNvbiBmcm9tIFwiLi9pbWcvcGVuY2lsLnN2Z1wiO1xuaW1wb3J0IHNhdmVUYXNrSWNvbiBmcm9tIFwiLi9pbWcvc2F2ZS10YXNrLnN2Z1wiO1xuaW1wb3J0IGZpbmlzaFRhc2tJY29uIGZyb20gXCIuL2ltZy9maW5pc2gtdGFzay5zdmdcIlxuaW1wb3J0IGRlbGV0ZVRhc2tJY29uIGZyb20gXCIuL2ltZy9kZWxldGUtdGFzay5zdmdcIlxuXG5pbXBvcnQgY2xvc2VQcm9qZWN0SWNvbiBmcm9tIFwiLi9pbWcvY2xvc2UtcHJvamVjdC5zdmdcIjtcbmltcG9ydCBlZGl0UHJvamVjdEljb24gZnJvbSBcIi4vaW1nL2VkaXQuc3ZnXCI7XG5pbXBvcnQgc2F2ZVByb2plY3RJY29uIGZyb20gXCIuL2ltZy9zYXZlLWNvbnRlbnQuc3ZnXCI7XG5cbmltcG9ydCBtaW5pQ2hlY2tib3ggZnJvbSAnLi9pbWcvbWluaWNoZWNrYm94LnN2Zyc7XG5pbXBvcnQgbWluaUNoZWNrYm94Q29tcGxldGUgZnJvbSAnLi9pbWcvbWluaWNoZWNrbWFya2VkLnN2Zyc7XG5pbXBvcnQgbWluaURlbGV0ZUljb24gZnJvbSAnLi9pbWcvZGVsZXRlLWFsZXJ0LnN2Zyc7XG5cblxuXG5cblxuLy8gSW50ZXJmYWNlIGZvciBhZGRpbmcgdGFza3MgYW5kIHByb2plY3RzLlxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKVxuXG5cbi8vIFJlbmRlciBhIGZ1bGwgcHJvamVjdFxuY29uc3QgcmVuZGVyUHJvamVjdCA9IChwcm9qZWN0T2JqZWN0KSA9PiB7XG4gICBcbiAgICAvLyBDb250YWluZXIgdG8gYXR0YWNoIHByb2plY3QgdG9cbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICAvLyBSZW1vdmUgaW50ZXJhY3Rpb24gd2l0aCB3b3Jrc3BhY2VcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3b3Jrc3BhY2UtY29udGFpbmVyXCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnYmxvY2tzY3JlZW4nKTtcblxuICAgIGxldCBwcm9qID0gcHJvamVjdE9iamVjdC5jb250ZW50O1xuXG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIFxuICAgIC8vIENyZWF0ZSBkb20gc2tlbGV0b24gXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvai5nZXRUaXRsZSgpO1xuICAgIGNvbnN0IHByb2plY3QgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJwcm9qZWN0XCIsIFwiaWRcIjogYCR7cHJvamVjdFRpdGxlIH0taWRgfSlcbiAgICBjb25zdCBjb250ZW50ID0gZWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdwcm9qZWN0LWNvbnRlbnQnLCAnaWQnOiBgJHtwcm9qZWN0VGl0bGV9LWNvbnRlbnRgfSlcbiAgIFxuICAgIC8vIExvYWRpbmcgb2YgZGF0YSBpbnRvIHNwZWNpZmllZCBjb250YWluZXJzXG4gICAgY29uc3QgcmVuZGVyRGF0YSA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIC8vIGNyZWF0ZSB0aXRnbGUgYmFyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gKCkgPT4ge1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZWxlbWVudCgnaDInLCB7J2NsYXNzJzogXCJwcm9qZWN0LXRpdGxlIHByb2plY3QtaXRlbVwifSk7XG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcbiAgICAgICAgICAgXG5cbiAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSgpKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJwcm9qZWN0LWRlc2MgcHJvamVjdC1pdGVtXCIsICdpZCc6IGAke3Byb2plY3RUaXRsZSB9LWRlc2NgfSk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2ouZ2V0RGVzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKCkpXG5cbiAgICAgICAgLy8gRGVhZGxpbmUvUHJpb3JpdHkvVXJnZW5jeSBDb250YWluZXIgKFRoZXNlIHdpbGwgaW50ZXJhY3QgYSBsb3QpXG4gICAgICAgIGNvbnN0IGRlYWRsaW5lID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBkZWFkbGluZUNvbnRhaW5lciA9IG1ha2VDb250YWluZXIoXCJEZWFkbGluZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGRlYWRsaW5lQ29udGVudCA9IGRlYWRsaW5lQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5kZWFkbGluZS1jb250ZW50Jyk7ICAgICBcbiAgICAgICAgICAgIGNvbnN0IGRlYWRsaW5lID0gZWxlbWVudCgnZGl2JywgeydjbGFzcyc6IFwicHJvamVjdC1kZWFkbGluZSBwcm9qZWN0LWl0ZW1cIiwgXCJpZFwiOiBgJHtwcm9qLmRlYWRsaW5lfS1kZWFkbGluZWB9KTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5QnV0dG9uID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnYnV0dG9uJywgJ2NsYXNzJzogXCJwcmlvcml0eS1idXR0b24gcHJvamVjdC1pdGVtXCIsICd2YWx1ZSc6IHByb2ouZ2V0UHJpb3JpdHkoKX0pO1xuICAgICAgICAgICAgZGVhZGxpbmUudGV4dENvbnRlbnQgPSBmb3JtYXQocHJvai5nZXREZWFkbGluZSgpLCBcIk1NLmRkLnl5eXlcIik7XG4gICAgICAgICAgICBkZWFkbGluZUNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVhZGxpbmUpO1xuICAgICAgICAgICAgZGVhZGxpbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVhZGxpbmVDb250ZW50KTsgICAgXG4gICAgICAgICAgICBkZWFkbGluZUNvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlCdXR0b24pO1xuICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBkZWFkbGluZUNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRlYWRsaW5lKCkpXG5cbiAgICAgICAgLy8gQWxzbyBrbm93biBhcyBvYmplY3RpdmVcbiAgICAgICAgY29uc3QgZ29hbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdvYWwgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJwcm9qZWN0LWdvYWwgcHJvamVjdC1pdGVtXCIsIFwiaWRcIjogYCR7cHJvamVjdFRpdGxlIH0tZ29hbGB9KTtcbiAgICAgICAgICAgIGdvYWwudGV4dENvbnRlbnQgPSBwcm9qLmdldEdvYWwoKTtcbiAgICAgICAgICAgIHJldHVybiBnb2FsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ29hbCgpKTsgXG4gICAgfVxuICAgIHJlbmRlckRhdGEoKTtcblxuICAgIC8vIFRhc2sgQ29udGFpbmVyXG4gICAgY29uc3QgdGFza3MgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gbWFrZUNvbnRhaW5lcihcIlRhc2tzXCIpO1xuICAgICAgICBjb25zdCBhZGRUYXNrID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOididXR0b24nLCAnaWQnOiAnYWRkLXRhc2stYnV0dG9uJywgJ3ZhbHVlJzogJysrJ30pXG4gICAgICAgXG4gICBcbiAgICAgICAgdGFza3MuYXBwZW5kQ2hpbGQoYWRkVGFzaylcbiAgICAgICAgXG4gICAgICAgIC8vIEF0dGFjaGVzIGEgbmV3IHRhc2sgdG8gYm90aCB0aGUgRE9NIGVsZW1lbnQgYW5kIFByb2plY3QgT2JqZWN0c1xuICAgICAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUsICkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjcmVhdGVUYXNrKGUudGFyZ2V0LnBhcmVudE5vZGUsIHByb2plY3RPYmplY3QpO1xuICAgICAgICAgICAgXG4gIFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGFza3M7XG4gICAgfVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza3MoKSk7XG4gICBcblxuICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnYnV0dG9uLWJhcicsICdpZCc6ICdwcm9qZWN0LWJ1dHRvbi1iYXInfSk7XG5cbiAgICAgICAgY29uc3QgY2xvc2VQcm9qZWN0ID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogY2xvc2VQcm9qZWN0SWNvbiwnY2xhc3MnOiAncHJvamVjdC1idXR0b24nLCAnaWQnOiAnY2xvc2UtcHJvamVjdCcsICd2YWx1ZSc6ICdDbG9zZSd9KTtcbiAgICAgICAgY29uc3QgZWRpdFByb2plY3QgPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBlZGl0UHJvamVjdEljb24sICdjbGFzcyc6ICdwcm9qZWN0LWJ1dHRvbicsICdpZCc6ICdlZGl0LXByb2plY3QnLCAndmFsdWUnOiAnRWRpdCd9KVxuICAgICAgICBlZGl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIFxuXG4gICAgICAgIGVkaXRQcm9qZWN0Qm94KHByb2plY3RPYmplY3QpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlUHJvamVjdClcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0KVxuXG4gICAgICAgIHJldHVybiBidXR0b25Db250YWluZXI7XG4gICAgfVxuICAgIFxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbnMoKSk7XG5cbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGNvbnRlbnQpXG5cbiAgIFxuXG4gICAgXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIFxuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3QgPSByZW5kZXIoKTtcblxuICAgIFxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICBjcmVhdGVMaXN0ZW5lcnMocHJvamVjdE9iamVjdCk7XG4gICAgcmVuZGVyVGFza0xpc3QocHJvamVjdE9iamVjdCk7XG4gIFxuICAgIFxuXG59XG5cbi8vIFByb2ogaXMgb3JpZ2luYWwgcHJvamVjdCBiZWluZyBlZGl0ZWQ7XG5jb25zdCBlZGl0UHJvamVjdEJveCA9IChwcm9qKSA9PiB7XG5cbiAgICAvLyBDcmVhdGUgdGVtcG9yYXJ5IHByb2plY3QgdG8gc2F2ZSB0bywgYWxsb3cgZm9yIGZ1dHVyZSByZWZhY3RvcmluZ1xuICAgIGNvbnN0IHRlbXBQcm9qID0gUHJvamVjdCgpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wUHJvai5jb250ZW50O1xuXG4gICAgLy8gQ3JlYXRlIHNhdmUgYnV0dG9uIGFuZCBoaWRlIGVkaXQgYnV0dG9uXG4gICAgY29uc3QgYnV0dG9uQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1iYXInKTtcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdCcpO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2ltYWdlJywgJ3NyYyc6IHNhdmVQcm9qZWN0SWNvbiwgJ2NsYXNzJzogJ3Byb2plY3QtYnV0dG9uIGVkaXQtYnV0dG9uJywgJ2lkJzogJ3NhdmUtcHJvamVjdC1idXR0b24nLCAndmFsdWUnOiAnU2F2ZSd9KTtcbiAgICBcbiAgICAvLyBDb3B5IGNvbnRlbnQgdG8gdGVtcG9yYXJ5IHByb2plY3Qgb2JqZWN0XG4gICAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICBjb250ZW50LnNldFRpdGxlKG5ld1RpdGxlLnZhbHVlKTtcbiAgICAgICAgY29udGVudC5zZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbi52YWx1ZSk7XG4gICAgICAgIGNvbnRlbnQuc2V0R29hbChuZXdHb2FsLnZhbHVlKTtcbiAgICAgICAgc2F2ZUJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICAgICAgICBzYXZlVG9Qcm9qZWN0KCk7ICBcblxuICAgIH0pXG5cbiAgICAvLyBTYXZlIHRlbXBvcmFyeSBwcm9qZWN0IGNvbnRlbnQgdG8gb3JpZ2luYWwgcHJvamVjdCBhbmQgcmVmcmVzaFxuICAgIC8vIFRoZSBleHRyYSBzdGVwIG9mIGNyZWF0aW5nIGEgdGVtcG9yYXJ5IHByb2plY3QgaXMgZm9yIGZ1dHVyZSBlZGl0YWJpbGl0eS9yZWZhY3RvcmluZ1xuICAgIGNvbnN0IHNhdmVUb1Byb2plY3QgPSAoKSA9PiB7XG5cbiAgICAgICAgcHJvai5jb250ZW50LnNldFRpdGxlKGNvbnRlbnQuZ2V0VGl0bGUoKSk7XG4gICAgICAgIHByb2ouY29udGVudC5zZXREZXNjcmlwdGlvbihjb250ZW50LmdldERlc2NyaXB0aW9uKCkpO1xuICAgICAgICBwcm9qLmNvbnRlbnQuc2V0R29hbChjb250ZW50LmdldEdvYWwoKSk7XG4gICAgICAgIFxuICAgICAgICBjbG9zZVByb2plY3QocHJvaik7XG4gICAgICAgIHJlbmRlclByb2plY3QocHJvaik7XG4gICAgfVxuXG5cbiAgICBidXR0b25CYXIuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG5cblxuICAgIC8vIEZ1bmN0aW9ucyByZXR1cm4gRE9NIG9iamVjdCwgbm90IGl0cyBjb250ZW50IGV4cGxpY2l0ZWx5XG4gICAgY29uc3QgbmV3VGl0bGUgPSBlZGl0VGl0bGUoJ3Byb2plY3QnKTtcbiAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IGVkaXREZXNjcmlwdGlvbigncHJvamVjdCcpO1xuICAgIGNvbnN0ICBuZXdHb2FsID0gZWRpdEdvYWwoJ3Byb2plY3QnKTtcbiAgICAgICBcbn1cblxuLy8gRW5hYmxlIGVkaXRpbmcgb2YgdGl0bGUgb2YgcHJvamVjdC4gUmV0dXJucyBET00gT2JqZWN0LiBUYXJnZXQgaXMgc3RyaW5nIGVpdGhlciAncHJvamVjdCcgb3IgJ3Rhc2snXG5jb25zdCBlZGl0VGl0bGUgPSAodGFyZ2V0KSA9PiB7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldH0tdGl0bGVgKTtcbiAgIFxuICAgIGNvbnN0IGVkaXRUaXRsZUJveCA9IGVsZW1lbnQoJ3RleHRhcmVhJywgIHsnbmFtZSc6ICd0ZXh0YXJlYScsICdwbGFjZWhvbGRlcic6IHRpdGxlLmlubmVyVGV4dCwgXCJjbGFzc1wiOiBgZWRpdC0ke3RhcmdldH0tYm94ICR7dGFyZ2V0fS10aXRsZSAke3RhcmdldH0taXRlbWB9KTtcbiAgICBlZGl0VGl0bGVCb3gudGV4dENvbnRlbnQgPSB0aXRsZS5pbm5lclRleHQ7XG4gICAgdGl0bGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWRpdFRpdGxlQm94LCB0aXRsZSk7XG4gICAgY29uc29sZS5sb2coZWRpdFRpdGxlQm94LnRleHRDb250ZW50KVxuICAgIHRpdGxlLnJlbW92ZSgpO1xuICAgIHJldHVybiBlZGl0VGl0bGVCb3g7XG5cbn1cblxuLy8gRW5hYmxlIGVkaXRpbmcgb2YgZGVzY3JpcHRpb24vY29udGVudCBvZiBwcm9qZWN0LiBSZXR1cm5zIERPTSBvYmplY3QuXG5jb25zdCBlZGl0RGVzY3JpcHRpb24gPSAodGFyZ2V0KSA9PiB7XG4gICAgXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldH0tZGVzY2ApO1xuICAgIFxuICAgIFxuICAgIGNvbnN0IGVkaXREZXNjcmlwdGlvbkJveCA9IGVsZW1lbnQoJ3RleHRhcmVhJywgeyduYW1lJzondGV4dGFyZWEnLCAncGxhY2Vob2xkZXInOiBkZXNjLmlubmVyVGV4dCwgJ2NsYXNzJzogYGVkaXQtJHt0YXJnZXR9LWJveCAke3RhcmdldH0taXRlbSAke3RhcmdldH0tZGVzY2B9KTtcbiAgICBlZGl0RGVzY3JpcHRpb25Cb3gudGV4dENvbnRlbnQgPSBkZXNjLmlubmVyVGV4dDtcbiAgICBkZXNjLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVkaXREZXNjcmlwdGlvbkJveCwgZGVzYyk7XG4gICAgZGVzYy5yZW1vdmUoKTtcbiAgICByZXR1cm4gZWRpdERlc2NyaXB0aW9uQm94O1xuXG59XG5cbi8vIEVuYWJsZSBlZGl0aW5nIG9mIGdvYWwgY29udGVudC4gIFJldHVybnMgRE9NIG9iamVjdC5cbmNvbnN0IGVkaXRHb2FsID0gKHRhcmdldCkgPT4ge1xuXG4gICAgY29uc3QgZ29hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldH0tZ29hbGApO1xuICAgIGNvbnN0IGdvYWxUZXh0ID0gZ29hbC5pbm5lclRleHQ7XG4gICAgY29uc29sZS5sb2coZ29hbFRleHQpO1xuICAgIGNvbnN0IGVkaXRHb2FsQm94ID0gZWxlbWVudCgndGV4dGFyZWEnLCB7J3BsYWNlaG9sZGVyJzogZ29hbFRleHQsICdjbGFzcyc6IGBlZGl0LSR7dGFyZ2V0fS1ib3ggJHt0YXJnZXR9LWdvYWwgJHt0YXJnZXR9LWl0ZW1gfSlcbiAgICBlZGl0R29hbEJveC50ZXh0Q29udGVudCA9IGdvYWxUZXh0O1xuICAgIGdvYWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWRpdEdvYWxCb3gsIGdvYWwpO1xuICAgIGdvYWwucmVtb3ZlKCk7XG4gICAgcmV0dXJuIGVkaXRHb2FsQm94O1xuXG59XG5cbi8vIFNob3cgYSBmdWxsIHRhc2sgb24gc2NyZWVuXG5jb25zdCByZW5kZXJUYXNrID0gKHRhc2spID0+IHtcblxuICAgIFxuICAgIGNvbnN0IG9sZFRhc2tET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tcIik7XG4gICAgaWYgKG9sZFRhc2tET00gIT0gdW5kZWZpbmVkKSBvbGRUYXNrRE9NLnJlbW92ZSgpO1xuICAgIFxuICAgIC8vIERPTSBlbGVtZW50IHRvIGF0dGFjaCBzZWxmIHRvXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIGNvbnN0IHByb2plY3RET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpO1xuICAgIHByb2plY3RET00uY2xhc3NMaXN0LmFkZCgnYmxvY2twcm9qZWN0JylcblxuICAgIC8vIFRoZSBhY3R1YWwgcmVuZGVyIG9iamVjdCBcbiAgICBjb25zdCB0YXNrUG9wdXAgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBlbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwidGFza1wiLCBpZDogYCR7dGFzay50aXRsZX0tJHt0YXNrLmdldElEKCl9YCwgJ2RhdGEtaWQnOiB0YXNrLmdldElEKCl9KVxuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0aXRsZUJhciA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiBcInRhc2stdGl0bGUtYmFyXCJ9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2ltYWdlJywgJ3NyYyc6IGVkaXRUYXNrSWNvbiwgJ2NsYXNzJzogJ3Rhc2stYnV0dG9uJywgJ2lkJzogJ3Rhc2stZWRpdC1idXR0b24nLCAndmFsdWUnOiAnRWRpdCd9KTtcbiAgICAgICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlZGl0VGFzayh0YXNrKSk7XG4gICAgICAgICAgICB0aXRsZUJhci5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVsZW1lbnQoJ2gyJywgeydjbGFzcyc6IFwidGFzay10aXRsZVwifSk7XG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0VGl0bGUoKTs7XG4gICAgICAgICAgICB0aXRsZUJhci5hcHBlbmRDaGlsZCh0aXRsZSk7ICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgY29uc3QgY29tcGxldGVCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBmaW5pc2hUYXNrSWNvbiwgJ2NsYXNzJzogJ3Rhc2stYnV0dG9uJywgJ2lkJzogJ3Rhc2stY29tcGxldGUtYnV0dG9uJywgJ3ZhbHVlJzogJ0NISyd9KTtcbiAgICAgICAgICAgIGNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHNldCB0YXNrIGFzIGNvbXBsZXRlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGl0bGVCYXIuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pXG5cbiAgICAgICAgICAgIHJldHVybiB0aXRsZUJhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKCkgPT4ge1xuXG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJ0YXNrLWRlc2NcIiwgJ2lkJzogYCR7dGFzay50aXRsZX0tZGVzY2B9KTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmdldERlc2NyaXB0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgIC8vIENyZWF0aW5nIGEgRE9NIGNvbnRhaW5lciB0byBob2xkIHByaW9yaXR5IGFuZCBkZWFkbGluZSBkaXNwbGF5XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IG1ha2VDb250YWluZXIoJ3Rhc2stZGVhZGxpbmUnKTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5SGVhZGVyID0gcHJpb3JpdHkucXVlcnlTZWxlY3RvcignLnRhc2stZGVhZGxpbmUtaGVhZGVyJyk7XG4gICAgICAgICAgICBwcmlvcml0eUhlYWRlci50ZXh0Q29udGVudCA9IFwiRGVhZGxpbmVcIlxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdidXR0b24nLCAnY2xhc3MnOiBcInByaW9yaXR5LWJ1dHRvbiB0YXNrLWl0ZW1cIiwgJ3ZhbHVlJzogdGFzay5nZXRQcmlvcml0eSgpfSk7XG4gICAgICAgICAgICBwcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjaGFuZ2VQcmlvcml0eShlKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlYWRsaW5lQ29udGVudCA9IHByaW9yaXR5LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlYWRsaW5lLWNvbnRlbnQnKTsgICAgIFxuICAgICAgICAgICAgY29uc3QgZGVhZGxpbmUgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJ0YXNrLWRlYWRsaW5lIHRhc2staXRlbVwiLCBcImlkXCI6IGAke3Rhc2suZGVhZGxpbmV9LWRlYWRsaW5lYH0pO1xuICAgICAgICAgICAgZGVhZGxpbmUudGV4dENvbnRlbnQgPSBmb3JtYXQodGFzay5nZXREZWFkbGluZSgpLCBcIk1NLmRkLnl5eXlcIik7XG4gICAgICAgICAgICBkZWFkbGluZUNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVhZGxpbmUpO1xuXG5cbiAgICAgICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKGRlYWRsaW5lQ29udGVudCk7ICAgIFxuICAgICAgICAgICAgZGVhZGxpbmVDb250ZW50LmFwcGVuZENoaWxkKHByaW9yaXR5QnV0dG9uKTtcbiAgICAgICAgICAgIHByaW9yaXR5LnZhbHVlID0gdGFzay5wcmlvcml0eTtcbiAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGlvbiBvZiBnb2FsIGVsZW1lbnRcbiAgICAgICAgY29uc3QgZ29hbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdvYWwgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJ0YXNrLWdvYWwtaGVhZGVyXCIsIFwiaWRcIjogYCR7dGFzay50aXRsZX0tZ29hbGB9KTtcbiAgICAgICAgICAgIGNvbnN0IGdvYWxIZWFkZXIgPSBlbGVtZW50KCdoMycsIHsnY2xhc3MnOiAnZ29hbC10aXRsZSd9KVxuICAgICAgICAgICAgY29uc3QgZ29hbENvbnRlbnQgPSBlbGVtZW50KCdwJywgeydjbGFzcyc6ICd0YXNrLWdvYWwnfSk7XG4gICAgICAgICAgICBnb2FsQ29udGVudC50ZXh0Q29udGVudCA9IHRhc2suZ2V0R29hbCgpO1xuICAgICAgICAgICAgZ29hbEhlYWRlci50ZXh0Q29udGVudCA9IFwiR29hbFwiXG4gICAgICAgICAgICBnb2FsLmFwcGVuZENoaWxkKGdvYWxIZWFkZXIpXG4gICAgICAgICAgICBnb2FsLmFwcGVuZENoaWxkKGdvYWxDb250ZW50KVxuICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBnb2FsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQmFyID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBidXR0b25zID0gZWxlbWVudChcImRpdlwiLCB7J2NsYXNzJzogJ2J1dHRvbi1iYXInLCAnaWQnOiAndGFzay1idXR0b25zJ30pO1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogZGVsZXRlVGFza0ljb24sICdhbHQnOiAnRGVsZXRlIHRhc2snLCAnY2xhc3MnOiAndGFzay1idXR0b24gZGVsZXRlLXRhc2snLCAnaWQnOiAnZGVsZXRlLXRhc2snLCAndmFsdWUnOiAnRGVsZXRlJ30pXG4gICAgICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2sodGFzayk7XG4gICAgICAgICAgICAgICAgY2xvc2VUYXNrKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogY2xvc2VQcm9qZWN0SWNvbiwnYWx0JzogJ0Nsb3NlIFRhc2snLCAnY2xhc3MnOiAndGFzay1idXR0b24gY2xvc2UtdGFzayd9KTtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNsb3NlVGFzayhlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUpKTtcbiAgICAgICAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pOyAgICAgICAgICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xuXG4gICAgICAgIH1cblxuXG4gICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGl0bGUoKSk7XG4gICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24oKSk7XG4gICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQocHJpb3JpdHkoKSk7XG4gICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoZ29hbCgpKTtcbiAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZChidXR0b25CYXIoKSk7XG5cblxuICAgICAgICByZXR1cm4gbmV3VGFzaztcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza1BvcHVwKCkpO1xufVxuXG4vL0hhbmRsZXMgZGlzcGxheSBvZiAnVGFza3MgbGlzdCdcbmNvbnN0IHJlbmRlclRhc2tMaXN0ID0gKHByb2plY3QpID0+IHtcblxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtY29udGFpbmVyJylcbiAgIFxuICAgIGNvbnN0IG1pbmlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1pbmktdGFzaycpO1xuICAgIG1pbmlMaXN0LmZvckVhY2gobWluaSA9PiBtaW5pLnJlbW92ZSgpKVxuICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrcy5nZXRUYXNrTGlzdCgpKXtcbiAgICAgICAgY29uc29sZS5sb2codGFzayk7XG4gICAgICAgIGNvbnN0IG1pbml0YXNrID0gY3JlYXRlTWluaVRhc2socHJvamVjdCwgdGFzayk7XG5cblxuICAgICAgICBpZiAodGFzay5nZXRTdGF0dXMoKSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBtaW5pdGFzay5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTsgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgbWluaXRhc2suY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7XG5cbiAgICAgICAgbGlzdC5pbnNlcnRCZWZvcmUobWluaXRhc2ssIGxpc3QubGFzdEVsZW1lbnRDaGlsZCk7XG5cbiAgICB9XG4gICAgXG59XG5cblxuY29uc3QgY3JlYXRlVGFzayA9IChjb250YWluZXIsIHByb2plY3QpID0+IHtcblxuICAgIGNvbnN0IHRhc2sgPSBUYXNrKCk7XG4gICAgdGFzay5zZXRQYXJlbnQocHJvamVjdCk7XG4gICAgXG4gICBcbiAgICBjb25zdCB0YXNrTGlzdCA9IChjb250YWluZXIpXG4gICAgdGFza0xpc3QuaW5zZXJ0QmVmb3JlKGNyZWF0ZU1pbmlUYXNrKHByb2plY3QsIHRhc2spLCB0YXNrTGlzdC5sYXN0RWxlbWVudENoaWxkKTtcbiAgIFxuICAgIC8vIEFkZCB0byBvYmplY3RcbiAgICBwcm9qZWN0LnRhc2tzLmFkZFRhc2sodGFzayk7XG4gICAgdGFzay5nZXRJRCgpO1xuICAgIHJlbmRlclRhc2sodGFzayk7XG4gICAgZWRpdFRhc2sodGFzayk7XG5cbn1cblxuLy8gV291bGQgbGlrZSB0byByZWZhY3RvciB0aGlzIHRvIHNoYXJlIHdpdGggZWRpdCBwcm9qZWN0IGZ1bmN0aW9ucyBpZiBwb3NzaWJsZVxuY29uc3QgZWRpdFRhc2sgPSAodGFzaykgPT4ge1xuICAgIFxuICAgIC8vY29uc3QgcHJvamVjdCA9IHRhc2suZ2V0UGFyZW50KCk7XG4gICAgY29uc3QgdGVtcFRhc2sgPSBUYXNrKCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGVtcFRhc2s7XG5cbiAgICBjb25zdCBidXR0b25CYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZS1iYXInKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJyk7XG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWVkaXQtYnV0dG9uJyk7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogc2F2ZVRhc2tJY29uLCAnY2xhc3MnOiAndGFzay1lZGl0LWJ1dHRvbiB0YXNrLWJ1dHRvbicsICdpZCc6ICd0YXNrLWVkaXQtYnV0dG9uJywgJ3ZhbHVlJzogJ1NhdmUnfSlcblxuICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgY29udGVudC5zZXRUaXRsZShuZXdUaXRsZS52YWx1ZSk7XG4gICAgICAgIGNvbnRlbnQuc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24udmFsdWUpO1xuICAgICAgICBjb250ZW50LnNldEdvYWwobmV3R29hbC52YWx1ZSk7XG4gICAgICAgIHNhdmVCdXR0b24ucmVtb3ZlKCk7XG4gICAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgICAgICAgc2F2ZVRvVGFzaygpO1xuICAgIH0pXG5cbiAgICBjb25zdCBzYXZlVG9UYXNrID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrKVxuICAgICAgICB0YXNrLnNldFRpdGxlKGNvbnRlbnQuZ2V0VGl0bGUoKSk7XG4gICAgICAgIHRhc2suc2V0RGVzY3JpcHRpb24oY29udGVudC5nZXREZXNjcmlwdGlvbigpKTtcbiAgICAgICAgdGFzay5zZXRHb2FsKGNvbnRlbnQuZ2V0R29hbCgpKTtcbiAgIFxuICAgICAgICBjbG9zZVRhc2soYnV0dG9uQmFyLnBhcmVudE5vZGUpO1xuICAgICAgICBjbG9zZVByb2plY3QoKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdCh0YXNrLmdldFBhcmVudCgpKTtcbiAgICAgICAgcmVuZGVyVGFzayh0YXNrKTtcblxuICAgIH1cblxuXG4gICAgYnV0dG9uQmFyLmluc2VydEJlZm9yZShzYXZlQnV0dG9uLCB0aXRsZSk7XG5cbiAgICBjb25zdCBuZXdUaXRsZSA9IGVkaXRUaXRsZSgndGFzaycpO1xuICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gZWRpdERlc2NyaXB0aW9uKCd0YXNrJyk7XG4gICAgY29uc3QgbmV3R29hbCA9IGVkaXRHb2FsKCd0YXNrJyk7XG5cblxufVxuXG4vLyBEZWxldGVzIHRhc2sgZnJvbSBwYXJlbnQgcHJvamVjdFxuY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrKSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZyh0YXNrKTtcblxuICAgICBjb25zdCBwcm9qZWN0ID0gdGFzay5nZXRQYXJlbnQoKTtcbiAgICBwcm9qZWN0LnRhc2tzLnJlbW92ZVRhc2sodGFzayk7XG4gICAgcmVuZGVyVGFza0xpc3QocHJvamVjdCk7XG59XG5cbi8vIERlbGV0ZSB0aGUgRE9NIGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRhc2tcbmNvbnN0IGNsb3NlVGFzayA9IChET00pID0+IHtcblxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYmxvY2twcm9qZWN0Jyk7XG5cbiAgICBpZiAoRE9NICE9IG51bGwpIERPTS5yZW1vdmUoKTtcbn1cblxuY29uc3QgdG9nZ2xlVGFza1N0YXR1cyA9ICh0YXNrKSA9PiB7XG5cbiAgICBpZiAodGFzayA9PSBudWxsKSByZXR1cm47XG5cbiAgICBpZiAodGFzay5nZXRTdGF0dXMoKSA9PT0gZmFsc2Upe1xuICAgICAgICB0YXNrLnNldFN0YXR1cyh0cnVlKTtcbiAgICAgICAgdGFzay5nZXRQYXJlbnQoKS50YXNrcy5jb21wbGV0ZVRhc2sodGFzayk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHRhc2suc2V0U3RhdHVzKGZhbHNlKVxuICAgICAgICB0YXNrLmdldFBhcmVudCgpLnRhc2tzLnJlbW92ZUNvbXBsZXRlKHRhc2spO1xuICAgIH1cbiAgXG5cbiAgICByZW5kZXJUYXNrTGlzdCh0YXNrLmdldFBhcmVudCgpKTtcblxufVxuXG4vLyBDcmVhdGVzIGEgbWluaS10YXNrIERPTSBlbGVtZW50IG91dCBvZiB0YXNrIG9iamVjdFxuY29uc3QgY3JlYXRlTWluaVRhc2sgPSAocHJvamVjdCwgdGFzaykgPT4ge1xuICAgIFxuICAgIGNvbnN0IG1pbml0YXNrID0gZWxlbWVudCgnZGl2JywgeydjbGFzcyc6J21pbmktdGFzayd9KVxuICAgXG4gICAgaWYgKHRhc2suZ2V0U3RhdHVzKCkgPT09IHRydWUpe1xuICAgICAgICBtaW5pdGFzay5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy9jb25zb2xlLmxvZyh0YXNrKTtcbiAgICAvLyBEZWxldGUgbWluaVxuICAgIGNvbnN0IHJlbW92ZU1pbmkgPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBtaW5pRGVsZXRlSWNvbiwgJ2NsYXNzJzogJ21pbmktYnV0dG9uIG1pbmktZGVsZXRlJywgJ3ZhbHVlJzogJy0nfSlcbiAgICAvLyBQYXNzIG9uIERPTSBvZiBNaW5pbGlzdCBhbmQgVGFzayB0byBkZWxldGVcbiAgICByZW1vdmVNaW5pLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGRlbGV0ZU1pbmkodGFzaykpO1xuICAgIC8vIE1hcmsgbWluaSBhcyBjb21wbGV0ZVxuICAgIGNvbnN0IGZpbmlzaE1pbmkgPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBtaW5pQ2hlY2tib3gsICdjbGFzcyc6ICdtaW5pLWJ1dHRvbiBtaW5pLWZpbmlzaCcsICd2YWx1ZSc6ICdGJ30pO1xuICAgIGZpbmlzaE1pbmkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdG9nZ2xlVGFza1N0YXR1cyh0YXNrKSk7XG4gICAgLy9PcGVuIFRhc2sgaW4gZnVsbCB2aWV3XG4gICAgY29uc3QgbWluaUJ1dHRvbiA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2J1dHRvbicsICdjbGFzcyc6ICdtaW5pLWJ1dHRvbiBtaW5pLXRpdGxlJywgJ3ZhbHVlJzogYCR7dGFzay5nZXRUaXRsZSgpfWB9KTtcbiAgICAgICAgXG4gICAgXG4gICAgXG4gICAgbWluaUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlclRhc2sodGFzaykpXG4gICAgbWluaXRhc2suYXBwZW5kQ2hpbGQocmVtb3ZlTWluaSk7XG4gICAgbWluaXRhc2suYXBwZW5kQ2hpbGQobWluaUJ1dHRvbik7XG4gICAgbWluaXRhc2suYXBwZW5kQ2hpbGQoZmluaXNoTWluaSlcbiAgICBsZXQgYmdjb2xvciA9IG1pbml0YXNrLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICBjb25zdCB0aXRsZSA9IGVsZW1lbnQoJ2g0JywgeydjbGFzcyc6ICdtaW5pLXRhc2stdGl0bGUnfSlcbiAgICBcbiAgICBcbiAgICBzd2l0Y2ggKHRhc2suZ2V0UHJpb3JpdHkoKSl7XG5cbiAgICAgICAgY2FzZSAxOiBcbiAgICAgICAgICAgICBiZ2NvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBiZ2NvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBiZ2NvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuXG4gICAgfVxuXG4gICAgXG4gICAgbWluaXRhc2suYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG5cbiAgICByZXR1cm4gbWluaXRhc2s7XG59XG5cbmNvbnN0IGRlbGV0ZU1pbmkgPSAodGFzaykgPT4ge1xuXG4gICAgXG4gICAgY29uc3QgcHJvamVjdCA9IHRhc2suZ2V0UGFyZW50KCk7XG5cbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRhc2tzLmdldFRhc2tMaXN0KCkpO1xuICAgIHByb2plY3QudGFza3MucmVtb3ZlVGFzayh0YXNrKTtcbiAgICBcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrJyk7XG4gICAgaWYgKHRhc2tDYXJkICE9IG51bGwpe1xuICAgICAgICBpZiAodGFza0NhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgPT0gdGFzay5nZXRJRCgpKSBjbG9zZVRhc2sodGFza0NhcmQpO1xuICAgIH1cblxuICAgIC8vIFJlZnJlc2ggdGFzayBsaXN0XG4gICAgcmVuZGVyVGFza0xpc3QocHJvamVjdCk7XG5cbn1cblxuXG4vLyBCdXR0b25zIGFuZCBMaXN0ZW5lcnNcbmNvbnN0IGNyZWF0ZUxpc3RlbmVycyA9IChwcm9qZWN0KSA9PiB7XG5cbiAgICAvLyBDcmVhdGUgbGlzdGVuZXJzIGZvciBidXR0b25zXG4gICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3QnKTtcbiAgICAvL2NvbnNvbGUubG9nKHByb2plY3QuY29udGVudC5nZXRQcmlvcml0eSgpKVxuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXByb2plY3QnKTtcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlUHJvamVjdCgpKTtcbiAgICAvLyBDb250ZW50IGJ1dHRvbiAoZXhwYW5kIGNvbnRlbnQpXG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtYnV0dG9uJyk7XG4gICAgXG4gICAgY29uc3QgZGVhZGxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVhZGxpbmUtYnV0dG9uJyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYnV0dG9uLnByb2plY3QtaXRlbScpO1xuICAgIHByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgICAgICBjb25zdCBjdXJyZW50UHJpb3JpdHkgPSBwcm9qZWN0LmNvbnRlbnQuZ2V0UHJpb3JpdHkoKTtcbiAgICAgIC8vICBjb25zb2xlLmxvZyhjdXJyZW50UHJpb3JpdHkpO1xuXG4gICAgICAgXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRQcmlvcml0eSA9ICgoY3VycmVudFByaW9yaXR5KSAlIDMpICsgMTtcbiAgICAgICAgcHJvamVjdC5jb250ZW50LnNldFByaW9yaXR5KHVwZGF0ZWRQcmlvcml0eSk7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID0gdXBkYXRlZFByaW9yaXR5O1xuICAgICAgICBcblxuICAgIH0pICAgXG5cbn1cblxuXG5jb25zdCBjbG9zZVByb2plY3QgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKVxuICAgIFxuICAgIC8vUmVlbmFibGUgaW50ZXJhY3Rpb24gXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3b3Jrc3BhY2UtY29udGFpbmVyJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdibG9ja3NjcmVlbicpXG4gICAgXG4gICBjb25zb2xlLmxvZyhtYWluKVxuICAgIHByb2plY3QucmVtb3ZlKCk7XG5cbiAgICByZW5kZXJQcm9qZWN0TGlzdCgpO1xuXG5cblxufVxuXG5cbmNvbnN0IGFkZFByb2plY3RQb3BVcCA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBidXR0b24gPSBlbGVtZW50KFwiYnV0dG9uXCIsIHtcImlkXCI6IFwicHJvamVjdC1idXR0b25cIiwgXCJ2YWx1ZVwiOiBcIlByZXNzaXRcIixcInRleHRDb250ZW50XCI6IFwiUHJlc3NcIn0pXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIFxuICAgIH0pXG5cblxuICAgIHJldHVybiBidXR0b247XG5cbn1cblxuXG5leHBvcnQge3JlbmRlclByb2plY3QsIHJlbmRlclRhc2ssIGFkZFByb2plY3RQb3BVcCBhcyBhZGRQcm9qZWN0QnV0dG9uLCBjcmVhdGVMaXN0ZW5lcnN9IiwiLy8gTWVudSBmb3IgbWFuaXB1bGF0aW5nIGNvbnRlbnQgXG5cbmltcG9ydCB7IHN3aXRjaERpc3BsYXlTdHlsZSB9IGZyb20gXCIuL2NvbnRlbnRcIjtcbmltcG9ydCB7IGVsZW1lbnQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5cbmNvbnN0IG1lbnUgPSAoKSA9PiB7XG5jb25zdCBoZWFkZXIgPSBlbGVtZW50KCdkaXYnLCB7J2lkJzogJ2hlYWRlcid9KTtcbmNvbnN0IHN0YXRzID0gZWxlbWVudCgnZGl2JywgeydpZCc6ICdzdGF0cyd9KTtcbmNvbnN0IHN1YkhlYWRlciA9IGVsZW1lbnQoJ2RpdicsIHsnaWQnOiAnc3ViLWhlYWRlcid9KTtcblxuY29uc3QgdG9nZ2xlU3R5bGUgPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdidXR0b24nLCAnaWQnOiAnc3R5bGUtdG9nZ2xlJywgJ3ZhbHVlJzogJ3N3aXRjaCBtb2RlJ30pO1xuICAgIHRvZ2dsZVN0eWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge3N3aXRjaERpc3BsYXlTdHlsZSgpfSlcblxuaGVhZGVyLmFwcGVuZENoaWxkKHRvZ2dsZVN0eWxlKVxuaGVhZGVyLmFwcGVuZENoaWxkKHN0YXRzKTtcbmhlYWRlci5hcHBlbmRDaGlsZChzdWJIZWFkZXIpO1xuXG5cbnJldHVybiBoZWFkZXI7XG59XG5leHBvcnQgeyBtZW51fVxuIiwiaW1wb3J0IHsgVGFzaywgZ2V0VXJnZW5jeSB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCBkZWZhdWx0UHJvamVjdCBmcm9tIFwiLi9kZWZhdWx0LXByb2plY3QuanNvblwiXG5pbXBvcnQgeyBwYXJzZUlTTywgdG9EYXRlIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbi8vIENyZWF0ZSBhbiBvYmplY3QgY29udGFpbmluZyB0b2RvIG9iamVjdHNcblxuXG4vLyBQcm9qZWN0IG9iamVjdCBmYWN0b3J5XG4vLyBQcm9qZWN0KHRpdGxlLCBkYXRlLCBkZWFkbGluZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBnb2FsKVxuLy8gTG9hZCBkZWZhdWx0cyBmcm9tIGRlZmF1bHQtcHJvamVjdC5qc29uXG5jb25zdCBQcm9qZWN0ID0gKHRpdGxlID0gZGVmYXVsdFByb2plY3QudGl0bGUsIGRlYWRsaW5lID0gZGVmYXVsdFByb2plY3QuZGVhZGxpbmUsIHByaW9yaXR5ID0gZGVmYXVsdFByb2plY3QucHJpb3JpdHksIGRlc2NyaXB0aW9uID0gZGVmYXVsdFByb2plY3QuZGVzY3JpcHRpb24sIGdvYWwgPSBkZWZhdWx0UHJvamVjdC5nb2FsICkgPT4ge1xuXG4gICAgLy8gRGVmaW5lIG93biBpbmZvIHdpdGggVGFzayBvYmplY3RcbiAgICAvL2NvbnN0IGluZm8gPSBUYXNrKGRlZmF1bHRQcm9qZWN0LnRpdGxlLCBkZWZhdWx0UHJvamVjdC5kZWFkbGluZSwgZGVmYXVsdFByb2plY3QucHJpb3JpdHksIGRlZmF1bHRQcm9qZWN0LmRlc2NyaXB0aW9uKVxuICAgIFxuICAgIGRlYWRsaW5lID0gbmV3IERhdGUoZGVhZGxpbmUpO1xuICAgXG4gICAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoRGF0ZS5ub3coKSlcbiAgICBjb25zdCB0aW1lUmVtYWluaW5nID0gZGVhZGxpbmUgLSBEYXRlLm5vdygpO1xuICAgIFxuICAgIC8vIFdpbGwgYXNzaWduIHRhc2sgSUQgc2VxdWVudGlhbGx5XG4gICAgbGV0IHRhc2tJRCA9IDA7XG5cbiAgICBsZXQgX3Rhc2tMaXN0ID0gW107XG4gICAgbGV0IF9jb21wbGV0ZWRUYXNrcyA9IFtdO1xuICAgIGxldCBfaW5jb21wbGV0ZVRhc2tzID0gW107XG5cbiAgIFxuXG4gICAgLy8gQWxsIHRhc2sgcmVsYXRlZCBmdW5jdGlvbnNcbiAgICBjb25zdCB0YXNrcyA9ICgoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgc2V0VGFza0lEKHRhc2spO1xuICAgICAgICAgICAgX3Rhc2tMaXN0LnB1c2godGFzaylcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCByZW1vdmVUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBfdGFza0xpc3QuaW5kZXhPZih0YXNrKTtcbiAgICAgICAgICAgIF90YXNrTGlzdC5zcGxpY2UodGFza0VsZW1lbnQsIDEpOyBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBjb21wbGV0ZVRhc2sgPSAodGFzayA9PiB7XG5cbiAgICAgICAgICAgIC8vaWYgKF9jb21wbGV0ZWRUYXNrcy5pbmNsdWRlcyh0YXNrKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICBfY29tcGxldGVkVGFza3MucHVzaChfdGFza0xpc3Quc2xpY2UodGFzaykpO1xuICAgICAgICAgICAgIC8vcmVtb3ZlVGFzayh0YXNrKVxuICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZUNvbXBsZXRlID0gKHRhc2spID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBfY29tcGxldGVkVGFza3MuaW5kZXhPZih0YXNrKTtcbiAgICAgICAgICAgIF9jb21wbGV0ZWRUYXNrcy5zcGxpY2UodGFza0VsZW1lbnQsIDEpOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNldFRhc2tJRCA9ICh0YXNrKSA9PiB7XG4gICAgICAgICAgICB0YXNrLnNldElEKHRhc2tJRCk7XG4gICAgICAgICAgICB0YXNrSUQrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNsZWFyRmluaXNoZWRMaXN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgX2NvbXBsZXRlZFRhc2tzID0gW107XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgY29uc3QgZ2V0VGFza0xpc3QgPSAoKSA9PiBfdGFza0xpc3Q7XG4gICAgICAgIGNvbnN0IGdldENvbXBsZXRlZFRhc2tzID0gKCkgPT4gX2NvbXBsZXRlZFRhc2tzO1xuICAgICAgICBjb25zdCBnZXRJbkNvbXBsZXRlVGFza3MgPSAoKSA9PiBfaW5jb21wbGV0ZVRhc2tzO1xuICAgICAgICBjb25zdCB0YXNrQ291bnQgPSBfdGFza0xpc3QubGVuZ3RoO1xuXG4gICAgICAgIHJldHVybiB7Y2xlYXJGaW5pc2hlZExpc3QsIHJlbW92ZUNvbXBsZXRlLCB0YXNrQ291bnQsIGFkZFRhc2ssIHJlbW92ZVRhc2ssIGNvbXBsZXRlVGFzaywgZ2V0VGFza0xpc3QsIGdldENvbXBsZXRlZFRhc2tzLCBnZXRJbkNvbXBsZXRlVGFza3MsIF90YXNrTGlzdH1cblxuICAgIH0pKCk7XG4gIFxuICAgIC8vIENvbnRlbnQgcmVsYXRlZCBmdW5jdGlvbnNcbiAgICBjb25zdCBjb250ZW50ID0gKCgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgICAgICAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG5cbiAgICAgICAgY29uc3Qgc2V0RGVhZGxpbmUgPSAobmV3RGVhZGxpbmUpID0+IGRlYWRsaW5lID0gbmV3RGVhZGxpbmU7XG4gICAgICAgIGNvbnN0IGdldERlYWRsaW5lID0gKCkgPT4gZGVhZGxpbmU7XG5cbiAgICAgICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb25cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiB7XG5cbiAgICAgICAgICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcblxuICAgICAgICBjb25zdCBzZXRHb2FsID0gKG5ld0dvYWwpID0+IGdvYWwgPSBuZXdHb2FsO1xuICAgICAgICBjb25zdCBnZXRHb2FsID0gKCkgPT4gZ29hbDtcblxuICAgICAgICBjb25zdCBnZXRDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHt0aXRsZSwgZGVhZGxpbmUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbn07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge3NldFRpdGxlLCBnZXRUaXRsZSwgZ2V0RGVhZGxpbmUsIHNldERlYWRsaW5lLCBzZXREZXNjcmlwdGlvbiwgZ2V0RGVzY3JpcHRpb24sIGdldENvbnRlbnQsIHNldFByaW9yaXR5LCBnZXRQcmlvcml0eSwgc2V0R29hbCwgZ2V0R29hbCwgfVxufSkoKTtcblxuXG5cblxuXG5cbiAgcmV0dXJuIHsgdGFza3MsIF90YXNrTGlzdCwgY29udGVudH1cbn1cblxuXG5leHBvcnQgeyBQcm9qZWN0fSIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgZWxlbWVudCwgbWFrZUNvbnRhaW5lciwgc2V0QXR0cmlidXRlcyB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgZGVmYXVsdFByb2plY3QgZnJvbSBcIi4vZGVmYXVsdC1wcm9qZWN0Lmpzb25cIlxuaW1wb3J0IGRlZmF1bHRUYXNrIGZyb20gXCIuL2RlZmF1bHQtdGFzay5qc29uXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHByb2plY3RMaXN0LCByZW5kZXJQcm9qZWN0TGlzdCB9IGZyb20gXCIuL2NvbnRlbnRcIjtcbmltcG9ydCB7IHJlbmRlclRhc2ssIGNyZWF0ZVRhc2ssIHByaW9yaXR5U3R5bGV9IGZyb20gXCIuL3Rhc2tVSVwiO1xuXG4vLyBpbWFnZXNcblxuaW1wb3J0IGNsb3NlUHJvamVjdEljb24gZnJvbSBcIi4vaW1nL2Nsb3NlLXByb2plY3Quc3ZnXCI7XG5pbXBvcnQgZWRpdFByb2plY3RJY29uIGZyb20gXCIuL2ltZy9lZGl0LnN2Z1wiO1xuaW1wb3J0IHNhdmVQcm9qZWN0SWNvbiBmcm9tIFwiLi9pbWcvc2F2ZS1jb250ZW50LnN2Z1wiO1xuXG5pbXBvcnQgbWluaUNoZWNrYm94IGZyb20gJy4vaW1nL21pbmljaGVja2JveC5zdmcnO1xuaW1wb3J0IG1pbmlDaGVja2JveENvbXBsZXRlIGZyb20gJy4vaW1nL21pbmljaGVja21hcmtlZC5zdmcnO1xuaW1wb3J0IG1pbmlEZWxldGVJY29uIGZyb20gJy4vaW1nL2RlbGV0ZS1hbGVydC5zdmcnO1xuaW1wb3J0IGZpbmlzaFRhc2tzSWNvbiBmcm9tICcuL2ltZy9maW5pc2gtdGFzay5zdmcnO1xuaW1wb3J0IGNhbGVuZGFySWNvbiBmcm9tICcuL2ltZy9jYWxlbmRhci1lZGl0LnN2Zyc7XG5cblxuXG4vLyBJbnRlcmZhY2UgZm9yIGFkZGluZyB0YXNrcyBhbmQgcHJvamVjdHMuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG5jb25zdCBUQVNLTElTVE1BWCA9IDc7XG5cbi8vIFJlbmRlciBhIGZ1bGwgcHJvamVjdFxuY29uc3QgcmVuZGVyUHJvamVjdCA9IChwcm9qZWN0T2JqZWN0KSA9PiB7XG4gICBcbiAgICAvLyBDb250YWluZXIgdG8gYXR0YWNoIHByb2plY3QgdG9cbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dvcmtzcGFjZVwiKTtcblxuICAgIC8vIFJlbW92ZSBpbnRlcmFjdGlvbiB3aXRoIHdvcmtzcGFjZVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dvcmtzcGFjZS1jb250YWluZXJcIik7XG4gICAgXG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xuICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiBjYXJkLmNsYXNzTGlzdC5hZGQoJ2Jsb2Nrc2NyZWVuJykpXG5cblxuICAgIGxldCBwcm9qID0gcHJvamVjdE9iamVjdC5jb250ZW50O1xuXG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIFxuICAgIC8vIENyZWF0ZSBkb20gc2tlbGV0b24gXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvai5nZXRUaXRsZSgpO1xuICAgIGNvbnN0IHByb2plY3QgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJwcm9qZWN0XCIsIFwiaWRcIjogYCR7cHJvamVjdFRpdGxlIH0taWRgfSlcbiAgICBjb25zdCBjb250ZW50ID0gZWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdwcm9qZWN0LWNvbnRlbnQnLCAnaWQnOiBgJHtwcm9qZWN0VGl0bGV9LWNvbnRlbnRgfSlcbiAgIFxuICAgIC8vIExvYWRpbmcgb2YgZGF0YSBpbnRvIHNwZWNpZmllZCBjb250YWluZXJzXG4gICAgY29uc3QgcmVuZGVyRGF0YSA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIC8vIGNyZWF0ZSB0aXRnbGUgYmFyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gKCkgPT4ge1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZWxlbWVudCgnaDInLCB7J2NsYXNzJzogXCJwcm9qZWN0LXRpdGxlIHByb2plY3QtaXRlbVwifSk7XG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcbiAgICAgICAgICAgXG5cbiAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSgpKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJwcm9qZWN0LWRlc2MgcHJvamVjdC1pdGVtXCIsICdpZCc6IGAke3Byb2plY3RUaXRsZSB9LWRlc2NgfSk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2ouZ2V0RGVzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKCkpXG5cbiAgICAgICAgLy8gRGVhZGxpbmUvUHJpb3JpdHkvVXJnZW5jeSBDb250YWluZXIgKFRoZXNlIHdpbGwgaW50ZXJhY3QgYSBsb3QpXG4gICAgICAgIGNvbnN0IGRlYWRsaW5lID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBkZWFkbGluZUNvbnRhaW5lciA9IG1ha2VDb250YWluZXIoXCJEZWFkbGluZVwiLCBjYWxlbmRhckljb24pO1xuICAgICAgICAgICAgY29uc3QgZGVhZGxpbmVDb250ZW50ID0gZGVhZGxpbmVDb250YWluZXIucXVlcnlTZWxlY3RvcignLmRlYWRsaW5lLWNvbnRlbnQnKTsgICAgIFxuICAgICAgICAgICAgY29uc3QgZGVhZGxpbmUgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJwcm9qZWN0LWRlYWRsaW5lIHByb2plY3QtaXRlbVwiLCBcImlkXCI6IGAke3Byb2ouZGVhZGxpbmV9LWRlYWRsaW5lYH0pO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdidXR0b24nLCAnY2xhc3MnOiBgcHJpb3JpdHktYnV0dG9uIHByb2plY3QtaXRlbSAke3ByaW9yaXR5U3R5bGUocHJvaikucHJpb3JpdHlWYWx1ZX1gLCAndmFsdWUnOiBwcmlvcml0eVN0eWxlKHByb2opLnByaW9yaXR5VGV4dH0pO1xuICAgICAgICAgICAgZGVhZGxpbmUudGV4dENvbnRlbnQgPSBmb3JtYXQocHJvai5nZXREZWFkbGluZSgpLCBcIk1NLmRkLnl5eXlcIik7XG4gICAgICAgICAgICBkZWFkbGluZUNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVhZGxpbmUpO1xuICAgICAgICAgICAgZGVhZGxpbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVhZGxpbmVDb250ZW50KTsgICAgXG4gICAgICAgICAgICBkZWFkbGluZUNvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlCdXR0b24pO1xuICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBkZWFkbGluZUNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRlYWRsaW5lKCkpXG5cbiAgICAgICAgLy8gQWxzbyBrbm93biBhcyBvYmplY3RpdmVcbiAgICAgICAgY29uc3QgZ29hbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdvYWwgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJwcm9qZWN0LWdvYWwgcHJvamVjdC1pdGVtXCIsIFwiaWRcIjogYCR7cHJvamVjdFRpdGxlIH0tZ29hbGB9KTtcbiAgICAgICAgICAgIGdvYWwudGV4dENvbnRlbnQgPSBwcm9qLmdldEdvYWwoKTtcbiAgICAgICAgICAgIHJldHVybiBnb2FsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ29hbCgpKTsgXG4gICAgfVxuICAgIHJlbmRlckRhdGEoKTtcblxuICAgIC8vIFRhc2sgQ29udGFpbmVyXG4gICAgY29uc3QgdGFza3MgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gbWFrZUNvbnRhaW5lcihcIlRhc2tzXCIsIGZpbmlzaFRhc2tzSWNvbik7XG4gICAgICAgIGNvbnN0IGFkZFRhc2sgPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6J2J1dHRvbicsICdpZCc6ICdhZGQtdGFzay1idXR0b24nLCAndmFsdWUnOiAnKysnfSlcbiAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0T2JqZWN0LnRhc2tzLmdldFRhc2tMaXN0KCkubGVuZ3RoKVxuICAgXG4gICAgICAgIHRhc2tzLmFwcGVuZENoaWxkKGFkZFRhc2spXG4gICAgICAgIFxuICAgICAgICAvLyBBdHRhY2hlcyBhIG5ldyB0YXNrIHRvIGJvdGggdGhlIERPTSBlbGVtZW50IGFuZCBQcm9qZWN0IE9iamVjdHNcblxuICAgICAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUsICkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjcmVhdGVUYXNrKGUudGFyZ2V0LnBhcmVudE5vZGUsIHByb2plY3RPYmplY3QpO1xuICAgICAgICAgICAgXG4gIFxuICAgICAgICB9KVxuXG4gICAgICAgIFxuXG4gICAgICAgIHJldHVybiB0YXNrcztcbiAgICB9XG5cblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza3MoKSk7XG4gICBcblxuICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnYnV0dG9uLWJhcicsICdpZCc6ICdwcm9qZWN0LWJ1dHRvbi1iYXInfSk7XG5cbiAgICAgICAgY29uc3QgY2xvc2VQcm9qZWN0ID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogY2xvc2VQcm9qZWN0SWNvbiwnY2xhc3MnOiAncHJvamVjdC1idXR0b24nLCAnaWQnOiAnY2xvc2UtcHJvamVjdCcsICd2YWx1ZSc6ICdDbG9zZSd9KTtcbiAgICAgICAgY29uc3QgZWRpdFByb2plY3QgPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBlZGl0UHJvamVjdEljb24sICdjbGFzcyc6ICdwcm9qZWN0LWJ1dHRvbicsICdpZCc6ICdlZGl0LXByb2plY3QnLCAndmFsdWUnOiAnRWRpdCd9KVxuICAgICAgICBlZGl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIFxuXG4gICAgICAgIGVkaXRQcm9qZWN0Qm94KHByb2plY3RPYmplY3QpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlUHJvamVjdClcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0KVxuXG4gICAgICAgIHJldHVybiBidXR0b25Db250YWluZXI7XG4gICAgfVxuICAgIFxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbnMoKSk7XG5cbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGNvbnRlbnQpXG5cbiAgIFxuXG4gICAgXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIFxuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3QgPSByZW5kZXIoKTtcblxuICAgIFxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICBjcmVhdGVMaXN0ZW5lcnMocHJvamVjdE9iamVjdCk7XG4gICAgcmVuZGVyVGFza0xpc3QocHJvamVjdE9iamVjdCk7XG4gIFxuICAgIFxuXG59XG5cbi8vIFByb2ogaXMgb3JpZ2luYWwgcHJvamVjdCBiZWluZyBlZGl0ZWQ7XG5jb25zdCBlZGl0UHJvamVjdEJveCA9IChwcm9qKSA9PiB7XG5cbiAgICAvLyBDcmVhdGUgdGVtcG9yYXJ5IHByb2plY3QgdG8gc2F2ZSB0bywgYWxsb3cgZm9yIGZ1dHVyZSByZWZhY3RvcmluZ1xuICAgIGNvbnN0IHRlbXBQcm9qID0gUHJvamVjdCgpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wUHJvai5jb250ZW50O1xuXG4gICAgLy8gQ3JlYXRlIHNhdmUgYnV0dG9uIGFuZCBoaWRlIGVkaXQgYnV0dG9uXG4gICAgY29uc3QgYnV0dG9uQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1iYXInKTtcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdCcpO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2ltYWdlJywgJ3NyYyc6IHNhdmVQcm9qZWN0SWNvbiwgJ2NsYXNzJzogJ3Byb2plY3QtYnV0dG9uIGVkaXQtYnV0dG9uJywgJ2lkJzogJ3NhdmUtcHJvamVjdC1idXR0b24nLCAndmFsdWUnOiAnU2F2ZSd9KTtcbiAgICBcbiAgICAvLyBDb3B5IGNvbnRlbnQgdG8gdGVtcG9yYXJ5IHByb2plY3Qgb2JqZWN0XG4gICAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICBjb250ZW50LnNldFRpdGxlKG5ld1RpdGxlLnZhbHVlKTtcbiAgICAgICAgY29udGVudC5zZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbi52YWx1ZSk7XG4gICAgICAgIGNvbnRlbnQuc2V0R29hbChuZXdHb2FsLnZhbHVlKTtcbiAgICAgICAgc2F2ZUJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICAgICAgICBzYXZlVG9Qcm9qZWN0KCk7ICBcblxuICAgIH0pXG5cbiAgICAvLyBTYXZlIHRlbXBvcmFyeSBwcm9qZWN0IGNvbnRlbnQgdG8gb3JpZ2luYWwgcHJvamVjdCBhbmQgcmVmcmVzaFxuICAgIC8vIFRoZSBleHRyYSBzdGVwIG9mIGNyZWF0aW5nIGEgdGVtcG9yYXJ5IHByb2plY3QgaXMgZm9yIGZ1dHVyZSBlZGl0YWJpbGl0eS9yZWZhY3RvcmluZ1xuICAgIGNvbnN0IHNhdmVUb1Byb2plY3QgPSAoKSA9PiB7XG5cbiAgICAgICAgcHJvai5jb250ZW50LnNldFRpdGxlKGNvbnRlbnQuZ2V0VGl0bGUoKSk7XG4gICAgICAgIHByb2ouY29udGVudC5zZXREZXNjcmlwdGlvbihjb250ZW50LmdldERlc2NyaXB0aW9uKCkpO1xuICAgICAgICBwcm9qLmNvbnRlbnQuc2V0R29hbChjb250ZW50LmdldEdvYWwoKSk7XG4gICAgICAgIFxuICAgICAgICBjbG9zZVByb2plY3QocHJvaik7XG4gICAgICAgIHJlbmRlclByb2plY3QocHJvaik7XG4gICAgfVxuXG5cbiAgICBidXR0b25CYXIuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG5cblxuICAgIC8vIEZ1bmN0aW9ucyByZXR1cm4gRE9NIG9iamVjdCwgbm90IGl0cyBjb250ZW50IGV4cGxpY2l0ZWx5XG4gICAgY29uc3QgbmV3VGl0bGUgPSBlZGl0VGl0bGUoJ3Byb2plY3QnKTtcbiAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IGVkaXREZXNjcmlwdGlvbigncHJvamVjdCcpO1xuICAgIGNvbnN0ICBuZXdHb2FsID0gZWRpdEdvYWwoJ3Byb2plY3QnKTtcbiAgICAgICBcbn1cblxuLy8gRW5hYmxlIGVkaXRpbmcgb2YgdGl0bGUgb2YgcHJvamVjdC4gUmV0dXJucyBET00gT2JqZWN0LiBUYXJnZXQgaXMgc3RyaW5nIGVpdGhlciAncHJvamVjdCcgb3IgJ3Rhc2snXG5jb25zdCBlZGl0VGl0bGUgPSAodGFyZ2V0KSA9PiB7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldH0tdGl0bGVgKTtcbiAgIFxuICAgIGNvbnN0IGVkaXRUaXRsZUJveCA9IGVsZW1lbnQoJ3RleHRhcmVhJywgIHsnbmFtZSc6ICd0ZXh0YXJlYScsICdwbGFjZWhvbGRlcic6IHRpdGxlLmlubmVyVGV4dCwgXCJjbGFzc1wiOiBgZWRpdC0ke3RhcmdldH0tYm94ICR7dGFyZ2V0fS10aXRsZSAke3RhcmdldH0taXRlbWB9KTtcbiAgICBlZGl0VGl0bGVCb3gudGV4dENvbnRlbnQgPSB0aXRsZS5pbm5lclRleHQ7XG4gICAgdGl0bGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWRpdFRpdGxlQm94LCB0aXRsZSk7XG4gICAgY29uc29sZS5sb2coZWRpdFRpdGxlQm94LnRleHRDb250ZW50KVxuICAgIHRpdGxlLnJlbW92ZSgpO1xuICAgIHJldHVybiBlZGl0VGl0bGVCb3g7XG5cbn1cblxuLy8gRW5hYmxlIGVkaXRpbmcgb2YgZGVzY3JpcHRpb24vY29udGVudCBvZiBwcm9qZWN0LiBSZXR1cm5zIERPTSBvYmplY3QuXG5jb25zdCBlZGl0RGVzY3JpcHRpb24gPSAodGFyZ2V0KSA9PiB7XG4gICAgXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldH0tZGVzY2ApO1xuICAgIFxuICAgIFxuICAgIGNvbnN0IGVkaXREZXNjcmlwdGlvbkJveCA9IGVsZW1lbnQoJ3RleHRhcmVhJywgeyduYW1lJzondGV4dGFyZWEnLCAncGxhY2Vob2xkZXInOiBkZXNjLmlubmVyVGV4dCwgJ2NsYXNzJzogYGVkaXQtJHt0YXJnZXR9LWJveCAke3RhcmdldH0taXRlbSAke3RhcmdldH0tZGVzY2B9KTtcbiAgICBlZGl0RGVzY3JpcHRpb25Cb3gudGV4dENvbnRlbnQgPSBkZXNjLmlubmVyVGV4dDtcbiAgICBkZXNjLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVkaXREZXNjcmlwdGlvbkJveCwgZGVzYyk7XG4gICAgZGVzYy5yZW1vdmUoKTtcbiAgICByZXR1cm4gZWRpdERlc2NyaXB0aW9uQm94O1xuXG59XG5cbi8vIEVuYWJsZSBlZGl0aW5nIG9mIGdvYWwgY29udGVudC4gIFJldHVybnMgRE9NIG9iamVjdC5cbmNvbnN0IGVkaXRHb2FsID0gKHRhcmdldCkgPT4ge1xuXG4gICAgY29uc3QgZ29hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldH0tZ29hbGApO1xuICAgIGNvbnN0IGdvYWxUZXh0ID0gZ29hbC5pbm5lclRleHQ7XG4gICAgY29uc29sZS5sb2coZ29hbFRleHQpO1xuICAgIGNvbnN0IGVkaXRHb2FsQm94ID0gZWxlbWVudCgndGV4dGFyZWEnLCB7J3BsYWNlaG9sZGVyJzogZ29hbFRleHQsICdjbGFzcyc6IGBlZGl0LSR7dGFyZ2V0fS1ib3ggJHt0YXJnZXR9LWdvYWwgJHt0YXJnZXR9LWl0ZW1gfSlcbiAgICBlZGl0R29hbEJveC50ZXh0Q29udGVudCA9IGdvYWxUZXh0O1xuICAgIGdvYWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWRpdEdvYWxCb3gsIGdvYWwpO1xuICAgIGdvYWwucmVtb3ZlKCk7XG4gICAgcmV0dXJuIGVkaXRHb2FsQm94O1xuXG59XG5cbi8vSGFuZGxlcyBkaXNwbGF5IG9mICdUYXNrcyBsaXN0J1xuY29uc3QgcmVuZGVyVGFza0xpc3QgPSAocHJvamVjdCkgPT4ge1xuXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250YWluZXInKVxuICAgXG4gICAgY29uc3QgbWluaUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWluaS10YXNrJyk7XG4gICAgbWluaUxpc3QuZm9yRWFjaChtaW5pID0+IG1pbmkucmVtb3ZlKCkpXG4gICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LnRhc2tzLmdldFRhc2tMaXN0KCkpe1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICAgICAgY29uc3QgbWluaXRhc2sgPSBjcmVhdGVNaW5pVGFzayhwcm9qZWN0LCB0YXNrKTtcblxuXG4gICAgICAgIGlmICh0YXNrLmdldFN0YXR1cygpID09PSB0cnVlKXtcbiAgICAgICAgICAgIG1pbml0YXNrLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpOyAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBtaW5pdGFzay5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcblxuICAgICAgXG5cbiAgICAgICAgbGlzdC5pbnNlcnRCZWZvcmUobWluaXRhc2ssIGxpc3QubGFzdEVsZW1lbnRDaGlsZCk7XG5cbiAgICB9XG4gICAgXG59XG5cbi8vIERlbGV0ZXMgdGFzayBmcm9tIHBhcmVudCBwcm9qZWN0XG5jb25zdCBkZWxldGVUYXNrID0gKHRhc2spID0+IHtcblxuICAgIGNvbnNvbGUubG9nKHRhc2spO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IHRhc2suZ2V0UGFyZW50KCk7XG4gICAgcHJvamVjdC50YXNrcy5yZW1vdmVUYXNrKHRhc2spO1xuICAgIHJlbmRlclRhc2tMaXN0KHByb2plY3QpO1xufVxuXG4vLyBEZWxldGUgdGhlIERPTSBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0YXNrXG5cblxuY29uc3QgdG9nZ2xlVGFza1N0YXR1cyA9ICh0YXNrKSA9PiB7XG5cbiAgICBpZiAodGFzayA9PSBudWxsKSByZXR1cm47XG5cbiAgICBpZiAodGFzay5nZXRTdGF0dXMoKSA9PT0gZmFsc2Upe1xuICAgICAgICB0YXNrLnNldFN0YXR1cyh0cnVlKTtcbiAgICAgICAgdGFzay5nZXRQYXJlbnQoKS50YXNrcy5jb21wbGV0ZVRhc2sodGFzayk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHRhc2suc2V0U3RhdHVzKGZhbHNlKVxuICAgICAgICB0YXNrLmdldFBhcmVudCgpLnRhc2tzLnJlbW92ZUNvbXBsZXRlKHRhc2spO1xuICAgIH1cbiAgXG5cbiAgICByZW5kZXJUYXNrTGlzdCh0YXNrLmdldFBhcmVudCgpKTtcblxufVxuXG4vLyBDcmVhdGVzIGEgbWluaS10YXNrIERPTSBlbGVtZW50IG91dCBvZiB0YXNrIG9iamVjdFxuY29uc3QgY3JlYXRlTWluaVRhc2sgPSAocHJvamVjdCwgdGFzaykgPT4ge1xuICAgIFxuICAgIGNvbnN0IG1pbml0YXNrID0gZWxlbWVudCgnZGl2JywgeydjbGFzcyc6J21pbmktdGFzayd9KVxuICAgIG1pbml0YXNrLmNsYXNzTGlzdC5hZGQocHJpb3JpdHlTdHlsZSh0YXNrKS5wcmlvcml0eVZhbHVlKTtcbiAgICBpZiAodGFzay5nZXRTdGF0dXMoKSA9PT0gdHJ1ZSl7XG4gICAgICAgIG1pbml0YXNrLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICAgICAgIFxuICAgIH1cblxuICAgIC8vY29uc29sZS5sb2codGFzayk7XG4gICAgLy8gRGVsZXRlIG1pbmlcbiAgICBjb25zdCByZW1vdmVNaW5pID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogbWluaURlbGV0ZUljb24sICdjbGFzcyc6ICdtaW5pLWJ1dHRvbiBtaW5pLWRlbGV0ZScsICd2YWx1ZSc6ICctJ30pXG4gICAgLy8gUGFzcyBvbiBET00gb2YgTWluaWxpc3QgYW5kIFRhc2sgdG8gZGVsZXRlXG4gICAgcmVtb3ZlTWluaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBkZWxldGVNaW5pKHRhc2spKTtcbiAgICAvLyBNYXJrIG1pbmkgYXMgY29tcGxldGVcbiAgICBjb25zdCBmaW5pc2hNaW5pID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogbWluaUNoZWNrYm94LCAnY2xhc3MnOiAnbWluaS1idXR0b24gbWluaS1maW5pc2gnLCAndmFsdWUnOiAnRid9KTtcbiAgICBmaW5pc2hNaW5pLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRvZ2dsZVRhc2tTdGF0dXModGFzaykpO1xuICAgIC8vT3BlbiBUYXNrIGluIGZ1bGwgdmlld1xuICAgIGNvbnN0IG1pbmlCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdidXR0b24nLCAnY2xhc3MnOiAnbWluaS1idXR0b24gbWluaS10aXRsZScsICd2YWx1ZSc6IGAke3Rhc2suZ2V0VGl0bGUoKX1gfSk7XG4gICAgICAgIFxuICAgIFxuICAgIFxuXG4gICAgbWluaUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlclRhc2sodGFzaykpXG4gICAgbWluaXRhc2suYXBwZW5kQ2hpbGQocmVtb3ZlTWluaSk7XG4gICAgbWluaXRhc2suYXBwZW5kQ2hpbGQobWluaUJ1dHRvbik7XG4gICAgbWluaXRhc2suYXBwZW5kQ2hpbGQoZmluaXNoTWluaSlcbiAgICBsZXQgYmdjb2xvciA9IG1pbml0YXNrLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICBjb25zdCB0aXRsZSA9IGVsZW1lbnQoJ2g0JywgeydjbGFzcyc6ICdtaW5pLXRhc2stdGl0bGUnfSlcbiAgICBcbiAgICBcbiAgICBtaW5pdGFzay5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cblxuICAgIHJldHVybiBtaW5pdGFzaztcbn1cblxuY29uc3QgZGVsZXRlTWluaSA9ICh0YXNrKSA9PiB7XG5cbiAgICBcbiAgICBjb25zdCBwcm9qZWN0ID0gdGFzay5nZXRQYXJlbnQoKTtcblxuICAgIGNvbnNvbGUubG9nKHByb2plY3QudGFza3MuZ2V0VGFza0xpc3QoKSk7XG4gICAgcHJvamVjdC50YXNrcy5yZW1vdmVUYXNrKHRhc2spO1xuICAgIFxuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2snKTtcbiAgICBpZiAodGFza0NhcmQgIT0gbnVsbCl7XG4gICAgICAgIGlmICh0YXNrQ2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSA9PSB0YXNrLmdldElEKCkpIGNsb3NlVGFzayh0YXNrQ2FyZCk7XG4gICAgfVxuXG4gICAgLy8gUmVmcmVzaCB0YXNrIGxpc3RcbiAgICByZW5kZXJUYXNrTGlzdChwcm9qZWN0KTtcblxuXG59XG5cblxuXG5cbmNvbnN0IGdldFByb2plY3RGcm9tVXNlciA9ICgpID0+IHtcblxuXG59XG5cblxuLy8gQnV0dG9ucyBhbmQgTGlzdGVuZXJzXG5jb25zdCBjcmVhdGVMaXN0ZW5lcnMgPSAocHJvamVjdCkgPT4ge1xuXG4gICAgLy8gQ3JlYXRlIGxpc3RlbmVycyBmb3IgYnV0dG9uc1xuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0Jyk7XG4gICAgLy9jb25zb2xlLmxvZyhwcm9qZWN0LmNvbnRlbnQuZ2V0UHJpb3JpdHkoKSlcbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1wcm9qZWN0Jyk7XG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZVByb2plY3QoKSk7XG4gICAgLy8gQ29udGVudCBidXR0b24gKGV4cGFuZCBjb250ZW50KVxuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzLWJ1dHRvbicpO1xuICAgIHRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgIHNldEFsbFRhc2tzKHByb2plY3QpO1xuXG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBkZWFkbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWFkbGluZS1idXR0b24nKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1idXR0b24ucHJvamVjdC1pdGVtJyk7XG4gICAgcHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gICAgICAgIGN5Y2xlUHJpb3JpdHkocHJvamVjdCk7XG5cbiAgICB9KSAgIFxuXG59XG5cbmNvbnN0IGN5Y2xlUHJpb3JpdHkgPSAocHJvamVjdCkgPT4ge1xuXG4gICAgY29uc3QgY3VycmVudFByaW9yaXR5ID0gcHJvamVjdC5jb250ZW50LmdldFByaW9yaXR5KCk7XG4gICAgLy8gIGNvbnNvbGUubG9nKGN1cnJlbnRQcmlvcml0eSk7XG5cbiAgICAgXG4gICAgICBjb25zdCB1cGRhdGVkUHJpb3JpdHkgPSAoKChjdXJyZW50UHJpb3JpdHkpICsxICkgJSAzKSArIDE7XG4gICAgICBwcm9qZWN0LmNvbnRlbnQuc2V0UHJpb3JpdHkodXBkYXRlZFByaW9yaXR5KTtcbiAgICAgIGNsb3NlUHJvamVjdCgpO1xuXG4gICAgY29uc3QgcHJvamVjdERPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Jyk7XG4gICAgaWYgKHByb2plY3RET00gIT0gbnVsbCkgcmVuZGVyUHJvamVjdChwcm9qZWN0KTtcbiAgICAgIFxufVxuXG5cblxuLy8gVG9nZ2xlIGNvbXBsZXRlZCBzdGF0dXMgZm9yIGFsbCB0YXNrcyBpbiBhIHByb2plY3RcbmNvbnN0IHNldEFsbFRhc2tzID0gKHByb2plY3QpID0+IHtcblxuICAgIGxldCBzdGF0dXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRhc2tMaXN0ID0gcHJvamVjdC50YXNrcy5nZXRUYXNrTGlzdCgpO1xuICAgIGNvbnN0IGZpbmlzaGVkTGlzdCA9IHByb2plY3QudGFza3MuZ2V0Q29tcGxldGVkVGFza3MoKTtcblxuICAgIGlmIChwcm9qZWN0LnRhc2tzLmdldFRhc2tMaXN0KCkubGVuZ3RoICE9IHByb2plY3QudGFza3MuZ2V0Q29tcGxldGVkVGFza3MoKS5sZW5ndGgpe1xuICAgICAgICBzdGF0dXMgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmKGZpbmlzaGVkTGlzdC5sZW5ndGggPT09IDApe1xuICAgICAgICBzdGF0dXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHByb2plY3QudGFza3MuY2xlYXJGaW5pc2hlZExpc3QoKTtcbiAgICBcbiAgICBmb3IgKGxldCB0YXNrIG9mIHRhc2tMaXN0KXtcblxuICAgICAgICB0YXNrLnNldFN0YXR1cyhzdGF0dXMpO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdC5sZW5ndGgpO1xuICAgICAgICBjb25zb2xlLmxvZyhmaW5pc2hlZExpc3QubGVuZ3RoKTtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tzLmNvbXBsZXRlVGFzayh0YXNrKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdERvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Jyk7XG4gICAgaWYgKHByb2plY3REb20gIT0gbnVsbCl7ICAgIFxuICAgICAgICBjbG9zZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgIHJlbmRlclByb2plY3QocHJvamVjdCk7XG4gICAgfVxuXG5cbn1cblxuXG5jb25zdCBjbG9zZVByb2plY3QgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKVxuICAgIFxuICAgIC8vUmVlbmFibGUgaW50ZXJhY3Rpb24gXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3b3Jrc3BhY2UtY29udGFpbmVyJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdibG9ja3NjcmVlbicpXG4gICAgXG4gICAgaWYgKHByb2plY3QgIT0gbnVsbCkgcHJvamVjdC5yZW1vdmUoKTtcblxuICAgIHJlbmRlclByb2plY3RMaXN0KCk7XG5cblxuXG59XG5cbmNvbnN0IGZpbmlzaFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuXG4gICAgY29uc3QgcHJvamVjdFRhc2tzID0gcHJvamVjdC50YXNrcy5nZXRUYXNrTGlzdCgpO1xuXG4gICAgXG4gICAgc2V0QWxsVGFza3MocHJvamVjdCk7XG5cbiAgICByZW5kZXJQcm9qZWN0TGlzdCgpO1xuXG59XG5cbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuXG4gICAgcHJvamVjdExpc3QucmVtb3ZlUHJvamVjdCgpO1xuXG5cbn1cblxuXG5cblxuXG5cbmNvbnN0IGFkZFByb2plY3RQb3BVcCA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBidXR0b24gPSBlbGVtZW50KFwiYnV0dG9uXCIsIHtcImlkXCI6IFwicHJvamVjdC1idXR0b25cIiwgXCJ2YWx1ZVwiOiBcIlByZXNzaXRcIixcInRleHRDb250ZW50XCI6IFwiUHJlc3NcIn0pXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIFxuICAgIH0pXG5cblxuICAgIHJldHVybiBidXR0b247XG5cbn1cblxuXG5leHBvcnQge2RlbGV0ZVByb2plY3QsIGN5Y2xlUHJpb3JpdHksIGVkaXRQcm9qZWN0Qm94LCBkZWxldGVUYXNrLCBmaW5pc2hQcm9qZWN0LCBjbG9zZVByb2plY3QsIHJlbmRlclByb2plY3QsIHJlbmRlclRhc2ssIGFkZFByb2plY3RQb3BVcCBhcyBhZGRQcm9qZWN0QnV0dG9uLCBjcmVhdGVMaXN0ZW5lcnMsIGVkaXRUaXRsZSwgZWRpdERlc2NyaXB0aW9uLCBlZGl0R29hbCwgY3JlYXRlTWluaVRhc2t9IiwiaW1wb3J0IGNsb3NlVGFza0ljb24gZnJvbSBcIi4vaW1nL2Nsb3NlLXByb2plY3Quc3ZnXCI7XG5pbXBvcnQgZWRpdFRhc2tJY29uIGZyb20gXCIuL2ltZy9wZW5jaWwuc3ZnXCI7XG5pbXBvcnQgc2F2ZVRhc2tJY29uIGZyb20gXCIuL2ltZy9zYXZlLXRhc2suc3ZnXCI7XG5pbXBvcnQgZmluaXNoVGFza0ljb24gZnJvbSBcIi4vaW1nL2ZpbmlzaC10YXNrLnN2Z1wiO1xuaW1wb3J0IGRlbGV0ZVRhc2tJY29uIGZyb20gXCIuL2ltZy9kZWxldGUtdGFzay5zdmdcIjtcbmltcG9ydCB7IGVkaXREZXNjcmlwdGlvbiwgZWRpdEdvYWwsIGVkaXRUaXRsZSwgY3JlYXRlTWluaVRhc2ssIGNsb3NlUHJvamVjdCwgcmVuZGVyUHJvamVjdCwgZGVsZXRlVGFza30gZnJvbSBcIi4vcHJvamVjdFVJXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgZWxlbWVudCwgbWFrZUNvbnRhaW5lciB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuXG4vLyBTaG93IGEgZnVsbCB0YXNrIG9uIHNjcmVlblxuY29uc3QgcmVuZGVyVGFzayA9ICh0YXNrKSA9PiB7XG5cbiAgICBcbiAgICBjb25zdCBvbGRUYXNrRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrXCIpO1xuICAgIGlmIChvbGRUYXNrRE9NICE9IHVuZGVmaW5lZCkgb2xkVGFza0RPTS5yZW1vdmUoKTtcbiAgICBcbiAgICAvLyBET00gZWxlbWVudCB0byBhdHRhY2ggc2VsZiB0b1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dvcmtzcGFjZVwiKTtcblxuICAgIGNvbnN0IHByb2plY3RET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpO1xuICAgIHByb2plY3RET00uY2xhc3NMaXN0LmFkZCgnYmxvY2twcm9qZWN0JylcblxuICAgIC8vIFRoZSBhY3R1YWwgcmVuZGVyIG9iamVjdCBcbiAgICBjb25zdCB0YXNrUG9wdXAgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBlbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwidGFza1wiLCBpZDogYCR7dGFzay50aXRsZX0tJHt0YXNrLmdldElEKCl9YCwgJ2RhdGEtaWQnOiB0YXNrLmdldElEKCl9KVxuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0aXRsZUJhciA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiBcInRhc2stdGl0bGUtYmFyXCJ9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2ltYWdlJywgJ3NyYyc6IGVkaXRUYXNrSWNvbiwgJ2NsYXNzJzogJ3Rhc2stYnV0dG9uJywgJ2lkJzogJ3Rhc2stZWRpdC1idXR0b24nLCAndmFsdWUnOiAnRWRpdCd9KTtcbiAgICAgICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlZGl0VGFzayh0YXNrKSk7XG4gICAgICAgICAgICB0aXRsZUJhci5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVsZW1lbnQoJ2gyJywgeydjbGFzcyc6IFwidGFzay10aXRsZVwifSk7XG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0VGl0bGUoKTs7XG4gICAgICAgICAgICB0aXRsZUJhci5hcHBlbmRDaGlsZCh0aXRsZSk7ICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgY29uc3QgY29tcGxldGVCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBmaW5pc2hUYXNrSWNvbiwgJ2NsYXNzJzogJ3Rhc2stYnV0dG9uJywgJ2lkJzogJ3Rhc2stY29tcGxldGUtYnV0dG9uJywgJ3ZhbHVlJzogJ0NISyd9KTtcbiAgICAgICAgICAgIGNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHNldCB0YXNrIGFzIGNvbXBsZXRlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGl0bGVCYXIuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pXG5cbiAgICAgICAgICAgIHJldHVybiB0aXRsZUJhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKCkgPT4ge1xuXG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJ0YXNrLWRlc2NcIiwgJ2lkJzogYCR7dGFzay50aXRsZX0tZGVzY2B9KTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmdldERlc2NyaXB0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLy8gQ3JlYXRpbmcgYSBET00gY29udGFpbmVyIHRvIGhvbGQgcHJpb3JpdHkgYW5kIGRlYWRsaW5lIGRpc3BsYXlcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gbWFrZUNvbnRhaW5lcigndGFzay1kZWFkbGluZScpO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlIZWFkZXIgPSBwcmlvcml0eS5xdWVyeVNlbGVjdG9yKCcudGFzay1kZWFkbGluZS1oZWFkZXInKTtcbiAgICAgXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlIZWFkZXIudGV4dENvbnRlbnQgPSBcIkRlYWRsaW5lXCJcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5QnV0dG9uID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnYnV0dG9uJywgJ2NsYXNzJzogYHByaW9yaXR5LWJ1dHRvbiB0YXNrLWl0ZW0gJHtwcmlvcml0eVN0eWxlKHRhc2spLnByaW9yaXR5VmFsdWV9YCwgJ3ZhbHVlJzogcHJpb3JpdHlTdHlsZSh0YXNrKS5wcmlvcml0eVRleHR9KTtcbiAgICAgICAgICAgIHByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3ljbGVQcmlvcml0eSh0YXNrKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlYWRsaW5lQ29udGVudCA9IHByaW9yaXR5LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlYWRsaW5lLWNvbnRlbnQnKTsgICAgIFxuICAgICAgICAgICAgY29uc3QgZGVhZGxpbmUgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJ0YXNrLWRlYWRsaW5lIHRhc2staXRlbVwiLCBcImlkXCI6IGAke3Rhc2suZGVhZGxpbmV9LWRlYWRsaW5lYH0pO1xuICAgICAgICAgICAgZGVhZGxpbmUudGV4dENvbnRlbnQgPSBmb3JtYXQodGFzay5nZXREZWFkbGluZSgpLCBcIk1NLmRkLnl5eXlcIik7XG4gICAgICAgICAgICBkZWFkbGluZUNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVhZGxpbmUpO1xuXG5cbiAgICAgICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKGRlYWRsaW5lQ29udGVudCk7ICAgIFxuICAgICAgICAgICAgZGVhZGxpbmVDb250ZW50LmFwcGVuZENoaWxkKHByaW9yaXR5QnV0dG9uKTtcbiAgICAgICAgICAgIHByaW9yaXR5LnZhbHVlID0gdGFzay5wcmlvcml0eTtcbiAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGlvbiBvZiBnb2FsIGVsZW1lbnRcbiAgICAgICAgY29uc3QgZ29hbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdvYWwgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJ0YXNrLWdvYWwtaGVhZGVyXCIsIFwiaWRcIjogYCR7dGFzay50aXRsZX0tZ29hbGB9KTtcbiAgICAgICAgICAgIGNvbnN0IGdvYWxIZWFkZXIgPSBlbGVtZW50KCdoMycsIHsnY2xhc3MnOiAnZ29hbC10aXRsZSd9KVxuICAgICAgICAgICAgY29uc3QgZ29hbENvbnRlbnQgPSBlbGVtZW50KCdwJywgeydjbGFzcyc6ICd0YXNrLWdvYWwnfSk7XG4gICAgICAgICAgICBnb2FsQ29udGVudC50ZXh0Q29udGVudCA9IHRhc2suZ2V0R29hbCgpO1xuICAgICAgICAgICAgZ29hbEhlYWRlci50ZXh0Q29udGVudCA9IFwiR29hbFwiXG4gICAgICAgICAgICBnb2FsLmFwcGVuZENoaWxkKGdvYWxIZWFkZXIpXG4gICAgICAgICAgICBnb2FsLmFwcGVuZENoaWxkKGdvYWxDb250ZW50KVxuICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBnb2FsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRpb24gb2YgYnV0dG9uIGJhclxuICAgICAgICBjb25zdCBidXR0b25CYXIgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBlbGVtZW50KFwiZGl2XCIsIHsnY2xhc3MnOiAnYnV0dG9uLWJhcicsICdpZCc6ICd0YXNrLWJ1dHRvbnMnfSk7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBkZWxldGVUYXNrSWNvbiwgJ2FsdCc6ICdEZWxldGUgdGFzaycsICdjbGFzcyc6ICd0YXNrLWJ1dHRvbiBkZWxldGUtdGFzaycsICdpZCc6ICdkZWxldGUtdGFzaycsICd2YWx1ZSc6ICdEZWxldGUnfSlcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICBjbG9zZVRhc2soZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBjbG9zZVRhc2tJY29uLCdhbHQnOiAnQ2xvc2UgVGFzaycsICdjbGFzcyc6ICd0YXNrLWJ1dHRvbiBjbG9zZS10YXNrJ30pO1xuICAgICAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY2xvc2VUYXNrKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSkpO1xuICAgICAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7ICAgICAgICAgICAgICAgIFxuICAgICAgICBcblxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZCh0aXRsZSgpKTtcbiAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbigpKTtcbiAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZChwcmlvcml0eSgpKTtcbiAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZChnb2FsKCkpO1xuICAgICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKGJ1dHRvbkJhcigpKTtcblxuXG4gICAgICAgIHJldHVybiBuZXdUYXNrO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrUG9wdXAoKSk7XG59XG5cbmNvbnN0IGN5Y2xlUHJpb3JpdHkgPSAodGFzaykgPT4ge1xuXG4gICAgY29uc3QgY3VyUHJpb3JpdHkgPSB0YXNrLmdldFByaW9yaXR5KCk7XG5cbiAgICAvLyBQcmlvcml0eSBpcyAxLTMsIGN5Y2xlIHRvIG5leHQgcHJpb3JpdHkgbGV2ZWxcbiAgICBjb25zdCBuZXdQcmlvcml0eSA9IGNoYW5nZVByaW9yaXR5KHRhc2ssICgoKGN1clByaW9yaXR5KSAlIDMpICsgMSkpO1xuXG5cbn1cblxuLy8gVGFzayBPYmplY3QsIFByaW9yaXR5IEludGVnZXJcbmNvbnN0IGNoYW5nZVByaW9yaXR5ID0gKHRhc2ssIHByaW9yaXR5KSA9PiB7XG5cbiAgICB0YXNrLnNldFByaW9yaXR5KHByaW9yaXR5KTtcbiAgICBcbiAgICBjbG9zZVByb2plY3QoKTtcbiAgICByZW5kZXJQcm9qZWN0KHRhc2suZ2V0UGFyZW50KCkpO1xuICAgIHJlbmRlclRhc2sodGFzayk7XG5cbn1cblxuXG5cbmNvbnN0IGNsb3NlVGFzayA9IChET00pID0+IHtcblxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYmxvY2twcm9qZWN0Jyk7XG5cbiAgICBpZiAoRE9NICE9IG51bGwpIERPTS5yZW1vdmUoKTtcbn1cblxuXG5jb25zdCBjcmVhdGVUYXNrID0gKGNvbnRhaW5lciwgcHJvamVjdCkgPT4ge1xuXG4gICAgY29uc3QgdGFzayA9IFRhc2soKTtcbiAgICB0YXNrLnNldFBhcmVudChwcm9qZWN0KTtcbiAgICBcbiAgIFxuICAgIGNvbnN0IHRhc2tMaXN0ID0gKGNvbnRhaW5lcilcbiAgICB0YXNrTGlzdC5pbnNlcnRCZWZvcmUoY3JlYXRlTWluaVRhc2socHJvamVjdCwgdGFzayksIHRhc2tMaXN0Lmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgXG4gICAgLy8gQWRkIHRvIG9iamVjdFxuICAgIHByb2plY3QudGFza3MuYWRkVGFzayh0YXNrKTtcbiAgICB0YXNrLmdldElEKCk7XG5cbn1cblxuLy8gV291bGQgbGlrZSB0byByZWZhY3RvciB0aGlzIHRvIHNoYXJlIHdpdGggZWRpdCBwcm9qZWN0IGZ1bmN0aW9ucyBpZiBwb3NzaWJsZVxuY29uc3QgZWRpdFRhc2sgPSAodGFzaykgPT4ge1xuICAgIFxuICAgIC8vY29uc3QgcHJvamVjdCA9IHRhc2suZ2V0UGFyZW50KCk7XG4gICAgY29uc3QgdGVtcFRhc2sgPSBUYXNrKCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGVtcFRhc2s7XG5cbiAgICBjb25zdCBidXR0b25CYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZS1iYXInKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJyk7XG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWVkaXQtYnV0dG9uJyk7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogc2F2ZVRhc2tJY29uLCAnY2xhc3MnOiAndGFzay1lZGl0LWJ1dHRvbiB0YXNrLWJ1dHRvbicsICdpZCc6ICd0YXNrLWVkaXQtYnV0dG9uJywgJ3ZhbHVlJzogJ1NhdmUnfSlcblxuICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgY29udGVudC5zZXRUaXRsZShuZXdUaXRsZS52YWx1ZSk7XG4gICAgICAgIGNvbnRlbnQuc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24udmFsdWUpO1xuICAgICAgICBjb250ZW50LnNldEdvYWwobmV3R29hbC52YWx1ZSk7XG4gICAgICAgIHNhdmVCdXR0b24ucmVtb3ZlKCk7XG4gICAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgICAgICAgc2F2ZVRvVGFzaygpO1xuICAgIH0pXG5cbiAgICBjb25zdCBzYXZlVG9UYXNrID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrKVxuICAgICAgICB0YXNrLnNldFRpdGxlKGNvbnRlbnQuZ2V0VGl0bGUoKSk7XG4gICAgICAgIHRhc2suc2V0RGVzY3JpcHRpb24oY29udGVudC5nZXREZXNjcmlwdGlvbigpKTtcbiAgICAgICAgdGFzay5zZXRHb2FsKGNvbnRlbnQuZ2V0R29hbCgpKTtcbiAgIFxuICAgICAgICBjbG9zZVRhc2soYnV0dG9uQmFyLnBhcmVudE5vZGUpO1xuICAgICAgICBjbG9zZVByb2plY3QoKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdCh0YXNrLmdldFBhcmVudCgpKTtcbiAgICAgICAgcmVuZGVyVGFzayh0YXNrKTtcblxuICAgIH1cblxuXG4gICAgYnV0dG9uQmFyLmluc2VydEJlZm9yZShzYXZlQnV0dG9uLCB0aXRsZSk7XG5cbiAgICBjb25zdCBuZXdUaXRsZSA9IGVkaXRUaXRsZSgndGFzaycpO1xuICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gZWRpdERlc2NyaXB0aW9uKCd0YXNrJyk7XG4gICAgY29uc3QgbmV3R29hbCA9IGVkaXRHb2FsKCd0YXNrJyk7XG5cblxufVxuXG5jb25zdCBwcmlvcml0eVN0eWxlID0gKHRhc2spID0+IHtcblxuICAgIGxldCBwcmlvcml0eVZhbHVlO1xuICAgIGxldCBwcmlvcml0eVRleHQ7XG4gICAgICAgIFxuICAgIHN3aXRjaCAodGFzay5nZXRQcmlvcml0eSgpKXtcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBwcmlvcml0eVZhbHVlID0gJ2xvd3ByaW9yaXR5JztcbiAgICAgICAgICAgIHByaW9yaXR5VGV4dCA9ICdMb3cnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHByaW9yaXR5VmFsdWUgPSAnbWVkcHJpb3JpdHknO1xuICAgICAgICAgICAgcHJpb3JpdHlUZXh0ID0gJ01lZCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcHJpb3JpdHlWYWx1ZSA9ICdoaWdocHJpb3JpdHknO1xuICAgICAgICAgICAgcHJpb3JpdHlUZXh0ID0gJ0hpZ2gnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBUaGF0IHByaW9yaXR5IGxldmVsIGlzIG5vdCBpbXBsZW1lbnRlZDogJHt0YXNrLmdldFByaW9yaXR5KCl9YCk7XG4gICAgICAgICAgICBicmVhazsgICAgXG4gICAgfVxuXG4gICAgXG5cblxuICAgIHJldHVybiB7cHJpb3JpdHlWYWx1ZSwgcHJpb3JpdHlUZXh0fVxufTtcbmV4cG9ydCB7ZWRpdFRhc2ssIGNyZWF0ZVRhc2ssIGNsb3NlVGFzaywgcmVuZGVyVGFzaywgcHJpb3JpdHlTdHlsZX0iLCIvLyAgVG8gZG8gb2JqZWN0LCBjcmVhdGlvbiBhbmQgbW9kaWZpY2F0aW9uXG5cbi8vIEhlbHBlciBmdW5jdGlvbnMgbG9jYXRlZCBpbiB1dGlscyBmaWxlXG5pbXBvcnQgeyBpc1RoaXNTZWNvbmQsIGlzRXF1YWwsIGZvcm1hdERpc3RhbmNlLCBmb3JtYXRJU08sIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IHNldEF0dHJpYnV0ZXMsIGNyZWF0ZUVsZW1lbnQgYXMgZWxlbWVudCB9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHRhc2sgZnJvbSBcIi4vZGVmYXVsdC10YXNrLmpzb25cIjtcbi8vaW1wb3J0IHRhc2sgZnJvbSBcIi4vZXhhbXBsZS10YXNrLmpzb25cIjtcbi8vIENvbnN0YW50c1xuXG4vLyBGYWN0b3J5IHRvIGNyZWF0ZSBhIFRvRG8gb2JqZWN0XG5jb25zdCBjcmVhdGVUb0RvID0gKHRpdGxlID0gdGFzay50aXRsZSwgZGVhZGxpbmUgPSB0YXNrLmRlYWRsaW5lLCBwcmlvcml0eSA9IHRhc2sucHJpb3JpdHksIGRlc2NyaXB0aW9uID0gdGFzay5kZXNjcmlwdGlvbiwgZ29hbCA9IHRhc2suZ29hbCwgdGFza0lEID0gdGFzay50YXNrSUQsIGNvbXBsZXRlZCA9IHRhc2suY29tcGxldGVkKSA9PiB7XG5cbiAgICBkZWFkbGluZSA9IG5ldyBEYXRlKGRlYWRsaW5lKTtcbiAgICBcbiAgICAvLyBQcm9qZWN0IG9iamVjdCB0aGF0IG93bnMgdGhpcyB0YXNrXG4gICAgbGV0IHBhcmVudCA9IG51bGw7XG4gIFxuICAgIC8vIFRpbWUvRGF0ZSBiYXNlZCBhdHRyaWJ1dGVzXG4gICAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoRGF0ZS5ub3coKSlcbiAgICBjb25zdCB0aW1lUmVtYWluaW5nID0gZGVhZGxpbmUgLSBEYXRlLm5vdygpO1xuXG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuICAgICAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG5cbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uXG4gICAgfVxuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBzZXREZWFkbGluZSA9IChuZXdEZWFkbGluZSkgPT4gZGVhZGxpbmUgPSBuZXdEZWFkbGluZTtcbiAgICBjb25zdCBnZXREZWFkbGluZSA9ICgpID0+IGRlYWRsaW5lO1xuXG4gICAgXG5cbiAgICBjb25zdCBzZXRQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4ge1xuICAgICAgICBwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH1cbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuIFxuICAgIGNvbnN0IHNldEdvYWwgPSAobmV3R29hbCkgPT4gZ29hbCA9IG5ld0dvYWw7XG4gICAgY29uc3QgZ2V0R29hbCA9ICgpID0+IGdvYWw7XG4gXG4gICAgY29uc3Qgc2V0UGFyZW50ID0gKG5ld1BhcmVudCkgPT4gcGFyZW50ID0gbmV3UGFyZW50O1xuICAgIGNvbnN0IGdldFBhcmVudCA9ICgpID0+IHBhcmVudDtcblxuICAgIGNvbnN0IHNldElEID0gKG5ld0lEKSA9PiB0YXNrSUQgPSBuZXdJRDtcbiAgICBjb25zdCBnZXRJRCA9ICgpID0+IHRhc2tJRDtcblxuXG4gICAgY29uc3Qgc2V0U3RhdHVzID0gKG5ld1N0YXR1cykgPT4gY29tcGxldGVkID0gbmV3U3RhdHVzO1xuICAgIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IGNvbXBsZXRlZDtcblxuICAgIGNvbnN0IGdldENvbnRlbnQgPSAoKSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIHt0aXRsZSwgZGVhZGxpbmUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbn07XG4gICAgfVxuXG5cbiAgICByZXR1cm4gKHtzZXRTdGF0dXMsIGdldFN0YXR1cywgZ2V0SUQsIHNldElELCBzZXRQYXJlbnQsIGdldFBhcmVudCwgc2V0R29hbCwgZ2V0R29hbCwgc2V0RGVhZGxpbmUsIGdldERlYWRsaW5lLCBnZXRQcmlvcml0eSwgc2V0UHJpb3JpdHksIHRpdGxlLCBkZWFkbGluZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgIGNvbnRlbnQsIHN0YXJ0RGF0ZSwgdGltZVJlbWFpbmluZyxzZXREZXNjcmlwdGlvbiwgZ2V0RGVzY3JpcHRpb24sIHNldFRpdGxlLCBnZXRUaXRsZSwgZ2V0Q29udGVudCx9KTtcblxufVxuXG5cbi8vIExvd2VyIHVyZ2VuY3kgaXMgY29uc2lkZXJlZCBtb3JlIHVyZ2VudC4gQ2xvc2VzdCB0byB6ZXJvIGlzIG1vc3QgdXJnZW50LlxuY29uc3QgZ2V0VGFza1VyZ2VuY3kgPSAodG9Eb09iamVjdCkgPT4ge1xuICAgICAgICBcbiAgICAvLyBHZXQgZGF5cyBvbmxcbiAgICBjb25zdCB1cmdlbmN5ID0gZm9ybWF0KHRvRG9PYmplY3QudGltZVJlbWFpbmluZywgXCJkZFwiKTtcbiAgICBjb25zb2xlLmxvZyh1cmdlbmN5ICogdG9Eb09iamVjdC5wcmlvcml0eSk7XG5cbiAgICByZXR1cm4gdXJnZW5jeTtcbn1cblxuXG5cblxuXG5cblxuXG5leHBvcnQge2NyZWF0ZVRvRG8gYXMgVGFzaywgZ2V0VGFza1VyZ2VuY3kgYXMgZ2V0VXJnZW5jeX07XG5cblxuXG4iLCJpbXBvcnQgZGVmYXVsdEljb24gZnJvbSAnLi9pbWcvY2xvc2UtdGFzay5zdmcnO1xuXG4vLyBIZWxwZXIgZnVuY3Rpb25zXG5cbi8vIGNyZWF0ZSBlbGVtZW50IG9mIHNwZWNpZmljIHR5cGUsIHdpdGggYXR0cmlidXRlcyBhdHRhY2hlZFxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKTtcbiAgICBpZiAoYXR0cmlidXRlcyA9PSBudWxsKSByZXR1cm4gbmV3RWxlbWVudDtcbiAgICBzZXRBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuICAgIFxuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5jb25zdCBnZXREYXRlID0gKCkgPT4ge1xuXG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgZGQgPSB0b2RheS5nZXREYXRlKCk7XG4gICAgbGV0IG1tID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7IC8vIEluZGV4IGF0IHplcm9cbiAgICBjb25zdCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcblxuICAgIGlmIChkZCA8IDEwKXtcbiAgICAgICAgZGQgPSAnMCcgKyBkZDtcbiAgICB9XG4gICAgaWYgKG1tIDwgMTApe1xuICAgICAgICBtbSA9ICcwJyArIG1tO1xuICAgIH1cblxuICAgIHRvZGF5ID0gYCR7eXl5eX0tJHttbX0tJHtkZH1gO1xuXG4gICAgcmV0dXJuIHRvZGF5O1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpXG57XG4gICAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpXG4gICAgfSk7XG59XG5cbi8vIHR1cm4gaW50byBvYmplY3RcbmZ1bmN0aW9uIGNyZWF0ZUltYWdlTGluayh1cmwsIGltYWdlLCBhbHQpe1xuXG4gICAgXG4gICAgY29uc3QgYWhyZWYgPSBjcmVhdGVFbGVtZW50KFwiYVwiLCB7XCJjbGFzc1wiOiBcImxpbmtcIiwgXCJocmVmXCI6IHVybH0pO1xuICAgIGNvbnN0IGxpbmtJbWFnZSA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1wiY2xhc3NcIjogXCJpbWFnZS1saW5rXCIsIFwic3JjXCI6IGltYWdlLCBcImFsdFwiOiBhbHR9KTtcblxuICAgIGFocmVmLmFwcGVuZENoaWxkKGxpbmtJbWFnZSk7XG5cbiAgICByZXR1cm4gYWhyZWY7XG4gICAgXG5cbn1cblxuLy8gTWFrZSBhIGdlbmVyaWMgZGlzcGxheSBlbGVtZW50LCB3aXRoIGEgY29udGFpbmVyLCB0aXRsZSwgYW5kIGNvbnRlbnQgc2VjdGlvblxuLy8gSUQgYW5kIGNsYXNzIHdpbGwgYmUgZ2VuZXJhdGVkIGZyb20gbmFtZSAoc3RyaW5nKVxuLy8gW0NvbnRhaW5lcl0tLT4gIFtUaXRsZUNvbnRhaW5lci0tPlRpdGxlK0J1dHRvbl0gKyBDb250ZW50XG5jb25zdCBtYWtlQ29udGFpbmVyID0gKG5hbWUsIGlucHV0SW1hZ2UpID0+IHtcblxuIFxuXG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6IGAke25hbWUudG9Mb3dlckNhc2UoKX0tY29udGFpbmVyYH0pXG4gICAgLy8gVGl0bGUgYW5kIEJ1dHRvblxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6IFwidGl0bGUtY29udGFpbmVyXCIsICdpZCc6IGAke25hbWUudG9Mb3dlckNhc2UoKX0tdGl0bGUtY29udGFpbmVyYH0pO1xuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDQnLCB7J2NsYXNzJzogYCR7bmFtZS50b0xvd2VyQ2FzZSgpfS1oZWFkZXJgfSk7XG4gICAgY29uc3QgdGl0bGVCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBpbnB1dEltYWdlLCAgJ2lkJzogYCR7bmFtZS50b0xvd2VyQ2FzZSgpfS1idXR0b25gLCAnY2xhc3MnOiAnY29udGFpbmVyLWJ1dHRvbiBleHBhbmQtY29udGVudC1idG4nLCB9LCApO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUJ1dHRvbik7XG5cblxuICAgIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogIGAke25hbWUudG9Mb3dlckNhc2UoKX0tY29udGVudGB9KTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCB7Z2V0RGF0ZSwgc2V0QXR0cmlidXRlcywgY3JlYXRlRWxlbWVudCBhcyBlbGVtZW50LCBjcmVhdGVJbWFnZUxpbmssIG1ha2VDb250YWluZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGdldFVyZ2VuY3ksIFRhc2t9IGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7IGFkZFByb2plY3RCdXR0b24sIGNyZWF0ZUxpc3RlbmVycywgcmVuZGVyUHJvamVjdCwgcmVuZGVyVGFzayB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IGNvbnRlbnQgfSBmcm9tICcuL2NvbnRlbnQnO1xuaW1wb3J0IHsgbWVudSB9IGZyb20gJy4vbWVudSc7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmJvZHkuaW5zZXJ0QmVmb3JlKG1lbnUoKSwgbWFpbik7XG5cbm1haW4uYXBwZW5kQ2hpbGQoY29udGVudCgpKTtcblxuXG5jb25zb2xlLmxvZyhtYWluLnBhcmVudE5vZGUpXG5cblxuLy9jb25zdCB0ZXN0UHJvaiA9IHJlbmRlclByb2plY3QodGVzdFByb2plY3QpO1xuXG5cblxuXG5cblxuLy9jb25zdCBORVdQUk9KID0gUHJvamVjdCgpO1xuXG5cblxuXG4vL2VuZGVyUHJvamVjdChORVdQUk9KKTtcblxuXG5cbi8vY29udGVudC5hcHBlbmQodGVzdFByb2opXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=