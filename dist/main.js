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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --greyBlue: rgb(156, 164, 199);\n    --happyBlue: rgb(192, 204, 241);\n    --postityellow: rgb(242, 243, 221);\n    --bg-color: var(--happyBlue, blue);\n\n    --sub-bg-color: rgba(211, 209, 209, 0.493);\n    --project-color: rgb(246, 247, 238);\n    \n    \n    --header-bg-color: rgb(238, 240, 233);\n    --header-border: var(--greyBlue);\n\n    --task-bg-color: rgb(206, 214, 238);\n    --task-complete-color:  rgba(231, 241, 231, 0.877);\n    --task-complete-border: rgba(20, 75, 20, 0.781);\n    --editing-task-color: var(--happyBlue);\n\n    --low-priority: rgba(162, 179, 233, 0.596);\n    --med-priority: rgba(248, 238, 142, 0.596);\n    --high-priority: rgba(233, 162, 162, 0.596);\n\n    --translate-amount: 50px;\n\n    padding: 0;\n    margin: 0;\n}\n\nbody{\n\n    background-color: var(--happyBlue);\n  \n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nh1,h2,h3,h4,h5,p, ul, li{\n    margin: 0;\n    padding: 0;\n    list-style: none;;\n}\n\n\n.test{\n    background-color: rgba(192, 144, 144, 0.918);\n    height: 200px;\n    width: 200px;\n    display: fixed;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    border-radius: 10px 10px 5px 5px;\n}\n\n.sub{\n    \n    height: 50%;\n    width: 50%;\n    background-color: rgba(8, 199, 24, 0.76);\n    border-radius: 50%;\n}\n\n\n\n\n\n.task{\n   \n    border-radius: 10px;\n    height: 300px;\n    width: min(300px, 100%);\n    box-shadow: 2px 2px 6px;\n    padding: 10px;\n\n    background-color: var(--task-bg-color, rgb(206, 214, 238));\n\n    display: grid;\n    position: fixed;\n    z-index: 10;\n    grid-template-rows: 1fr 2fr 1fr;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \n    \"title title\"\n    \"content content\"\n    \"buttons deadline\"\n  \n}\n\n.task-deadline-complete{\n    grid-area: deadline;\n}\n\n\n#task-corner{\n\n    border-bottom: 50px solid rgba(231, 41, 41, 0.37);\n    border-right: 50px solid transparent;\n\n    position: absolute;\n    right: 1%;\n    z-index: 20;\n\n\n}\n\n\n\n.task-title-bar{\n    display: grid;\n    justify-content: space-between;\n    grid-area: title;\n    justify-items: center;\n\n    grid-template-columns: 1fr 2fr 1fr;\n}\n\n.task-title{\n    font-size: clamp(1rem, 32px, 2rem);\n    text-align: center;\n    justify-self: center;\n}\n\n.task-desc{\n    grid-area: content;\n}\n\n#deadline-form-container{\n\n    position: fixed;\n    top: 20vh;\n    display: grid;\n    z-index: 10;\n    justify-content: flex-start;\n\n  \n}\n\n.task-deadline-container{\n    grid-area: deadline;\n    flex: 0;\n    display: grid;\n    flex-direction: column;\n    align-items: end;\n    justify-items: end;\n\n    grid-template-columns: 2fr 1fr;\n\n    grid-template-areas: \n    \"header priority\"\n    \"deadline editDeadline\"\n\n}\n\n\n\n.task-deadline-header{\n    grid-area: header;\n}\n\n#task-deadline-button{\n    border: none;\n    grid-area: editDeadline\n}\n\n.task-item .priority-button{\n    grid-area: priority;\n}\n\n.task-deadline{\n    grid-area: deadline;\n}\n\n#deadline-form{\n\n    align-self: center;\n    justify-self: center;\n    border-radius: 5px;\n    box-shadow: 3px 3px 5px grey;\n\n    background-color: rgb(255, 255, 255);\n    position: relative;\n    z-index: 10;\n    height: 300px;\n    width: min(400px, 100%);\n    display: grid;\n    padding: 10% 10% 0% 10%;\n    grid-template-areas: \n    \"label\"\n    \"date\"\n    \"time\"\n    \"repeat\"\n    \"buttons\";\n    \n\n}\n.form-input{\n    margin-left: 10px;\n}\n\n.form-header{\n\n    grid-area: label;\n\n   \n}\n\n#date-label{\n\n    grid-area: date;\n}\n\n#time-label{\n    grid-area: time;\n}\n\n#form-date{\n\n    grid-area: input;\n}\n\n#task-deadline-fieldset{\n    grid-area: repeat;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n}  \n\n.form-buttons{\n\n    grid-area: buttons;\n    display: flex;\n    flex-direction: row-reverse;\n}\n\n\n\n.task-header{\n    grid-row: 1 / 2;\n}\n\n\n.task-goal{\n    grid-area: objective;\n}\n\n\n#content{\n    background-color: var(--happyBlue, white);\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n \n}\n.blockscreen{\n    pointer-events: none;\n    background-color: rgb(238, 237, 237);\n    opacity: .5;\n}\n\n.project{\n    height: min(500px, 90%);\n    width: min(600px, 95%);\n    min-width: 300px;\n    top: 20%;\n    font-family: inter;\n    display: flex;\n    position: fixed;\n    \n    flex-direction: column-reverse;\n    justify-content: center;\n    margin: 0;\n    padding: 10px;\n    z-index: 10;\n\n    border-radius: 5px;\n    background-color: rgb(255, 255, 255);\n    box-shadow: 3px 3px 20px 5px var(--greyBlue)\n    \n    \n    \n\n}\n\n\n.project-content{\n    \n    height: 90%;\n    width: 98%;\n    gap: 5px;\n    display: grid;\n\n    grid-template-columns: 3fr 2fr;\n    grid-template-rows: repeat(5, 1fr);\n\n    grid-template-areas: \n    \n    \"title summary\"\n    \"tasks tasks\"\n    \"tasks tasks\"\n    \"tasks tasks\"\n    \"objective deadline\";\n\n\n}\n\n.expand-content-btn{\n    \n}\n\n.title-container{\n\n    \n    display: flex;\n    justify-content: space-between;\n    width: 90%;\n   \n\n}\n\n\n.project-item{\n\n\n    \n}\n.project-title-bar{\n\n    grid-area: title;\n}\n\n\n.project-title{\n    width: 98%;\n    height: 100%;\n \n\n   \n    font-family: inter;\n    font-size: 32px;\n\n}\n\n.project-desc{\n    height: 100%;\n    width: 98%;\n\n    font-family: inter;\n    grid-area: summary;\n\n    overflow: auto;\n   \n\n}\n\n.project-goal{\n    width: 98%;\n   \n\n    grid-area: objective;\n}\n\n.edit-project-box, .edit-task-box{\n    resize: none;\n    \n    max-width: 90%;\n\n}\n\n#project-container{\n    position: fixed;\n    display: none;\n    background-color: rgba(238, 238, 238, 0.466);\n    width: 100%;\n    height: 100%;\n   \n}\n\n.edit-task-box{\n\n    background-color: var(--editing-task-color, grey);\n\n\n}\n\n#task-buttons{\n    flex-direction: row-reverse;\n    align-items: flex-end;\n    justify-content: flex-end;\n}\n\n#add-task-button{\n\n    margin-top: 5px;\n    width: 2rem;\n    height: 2rem;\n   \n}\n\n#add-task-button:hover{\n   \n    transform: scale(1.1);\n\n}\n\n#add-task-button:focus{\n   \n}\n\n.deadline-container{\n    display: grid;\n    grid-area: deadline;\n    \n}\n\n.deadline-content{\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n}\n\n\n.deadline-header{\n    grid-row: 1 / 2;\n}\n\n.tasks-container{\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    align-items: center;\n    grid-area: tasks;\n}\n\n.mini-task{\n    background-color: var(--med-priority);\n    display: flex;\n    border: 1px solid black;\n    width: 90%;\n}\n\n.mini-button{\n    flex: 1;\n    background-color: inherit;\n\n}\n\n#mini-sort{\n\n    height: auto;\n    width: 1.5rem;\n}\n\n.mini-title{\n    border: none;\n    \n  \n}\n\n\n.mini-finish, .mini-delete{\n    flex: 0;\n    width: 2rem;\n    text-align: center;\n   \n}\n\n\n.task-list{\n\n    display: flex;\n    flex-direction: column;\n    width: 90%;\n    align-items: center;\n\n}\n\n.project-card{\n    \n}\n\n\n#modal-container{\n    margin-top: 20vh;\n    align-self: center;\n    display: none;\n    justify-content: center;\n   \n    position: fixed;\n    z-index: 1;\n    width: min(100vw, 380px);\n    height: min(100vh, 500px);\n     background-color: rgba(184, 135, 11, 0.082);\n     \n }\n \n #add-modal{\n     display: flex;\n     \n     align-self: center;\n     justify-content: center;\n     align-items: center;\n     \n     width: min(100vw, 340px);\n     height: min(100vh, 480px);\n \n  \n \n     overflow: auto;\n     border: 2px dashed var(--alt-card-border-color);\n     border-radius: 5px;\n     box-shadow: 2px 2px 5px;\n     background-color: var(--card-border-color, #647431);\n \n }\n \n .add-content{\n \n     width: min(100vh, 300px);\n     height:  min(100vh, 450px);\n \n     display: flex;\n     flex-direction: column;\n     background-color: var(--card-bg-color)\n }\n\n .project-button, .task-button{\n    padding: 5px;\n    font-size: clamp(1rem, 24px, 2rem);\n    border-radius: 5px;\n    height: 2rem;\n    width: 2rem;\n    fill: red;   \n    opacity: .85;\n}\n\n.container-button:hover, .project-button:hover, .task-button:hover, .container-button:active, .project-button:active, .task-button:active {\n\n    opacity: 1;\n    transform: scale(1.1)\n\n}\n\n.button-bar{\n    display: flex;\n    justify-content: space-between;\n\n    grid-area: buttons;\n}\n\n#project-button-bar{\n    flex-direction: row-reverse;\n}\n\n\n.edit-button{\n\n    \n}\n\n\n\n\n.delete-task{\n    \n\n \n\n}\n\n\n\n.hidden{\n    display: none;\n}\n\n.main-container{\n    margin-top: 10%;\n    width: 80%;\n    height: 90%;\n\n    display: flex;\n    justify-content: center;\n    padding: 20px;\n    border-radius: 10px;\n   box-shadow: inset 1px 1px 10px 3px var(--greyBlue, lightgrey);\n\n}\n\n.workspace{\n    justify-self: center;\n    width: 100%;\n  \n    background-color: rgb(195, 210, 245);\n    border-radius: 10px;\n    gap: 5px;\n    \n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n\n }\n\n .content-button{\n    height: auto;\n    width: 3rem;\n\n    justify-self: center;\n }\n\n\n \n .card-button{\n    height: auto;\n    width: 1.5rem;\n    opacity: .5;\n }\n\n .card-button:hover{\n    opacity: 1;\n    transform: scale(1.1);\n }\n\n \n .card{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 10px;\n    height: 200px;\n    width: 100%;\n\n    background-color: rgb(242, 243, 221);\n\n    border-radius: 5px;\n    box-shadow: 3px 3px 5px 5px var(--greyBlue);\n    outline: 1px solid var(--greyBlue);\n }\n\n .card-button-bar{\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n   \n }\n\n .card-percent-container{\n   \n }\n \n .card-percentage{\n    text-align: center;\n }\n\n .card-completed > *{\n    color: green;\n    font-style: italic;\n    font-weight: bold;\n }\n\n\n\n .card-button-bar > *{\n   \n }\n\n.card-deadline{\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 5px;\n    border-bottom: 1px dashed black;\n}\n\n.active-settings-button{\n\n\n\n}\n\n\n\n.blockproject, .blockproject > * > *{\n    pointer-events: none;\n    opacity: .5;\n    \n}\n\n\n\n.priority-button{\n    height: 1.5rem;\n    width: 3rem;\n    border: none;\n    border-radius: 5px;\n    font-weight: bold;\n}\n\n\n.container-button{\n    height: 1.5rem;\n    width: 1.5rem;\n}\n\n#tasks-button{\n    flex: 0;\n   \n\n}\n\n\n.lowpriority{\n    background-color: var(--low-priority, lightblue);\n}\n\n.medpriority{\n    background-color: var(--med-priority, lightyellow);\n\n}\n\n.highpriority{\n    background-color:var(--high-priority, lightsalmon);\n}\n\n\n\n.menu-container{\n    position: fixed;\n    z-index: 10;\n    visibility: hidden;\n    display: none;\n    background-color: rgba(240, 236, 236, 0.863);\n    border: 2px outset black;\n    border-radius: 3px;\n    padding: 2px;\n    cursor: pointer;\n    width: 150px;\n    box-shadow: 1px 1px;\n\n    display: flex;\n}\n\n.menu-header{\n    opacity: 75%;\n    font-style: italic;\n    margin-left: auto;\n}\n\n#context-menu{\n    display:flex;\n    flex-direction: column;\n\n}\n\n.menu-item{\n\nmargin-bottom: 10px;\n\n}\n\n.menu-item:hover, .menu-item:focus{\n    font-weight: bold;\n}\n\n#header{\n    width: 100%;\n    height: 100px;\n    background-color: var(--header-bg-color, rgb(196, 181, 181));\n    margin-bottom: 5px;\n    border-bottom: 5px solid var(--header-bg-color, none);\n    box-shadow: 2px 2px 5px var(--greyBlue)\n    \n\n\n}\n\n.tab-container{\n    display: flex;\n    flex-direction: column;\n\n\n\n}\n\n.tab{\n\n    width: 100%;\n    display: flex;\n\n\n}\n\n.tooltip {\n\n\n  \n    border-bottom: 1px dotted black;\n}\n\n.tooltip .tooltiptext {\n\n    visibility: hidden;\n    width: 120px;\n    background-color: rgba(107, 106, 106, 0.753);\n    color: rgb(221, 221, 221);\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n\n    position: absolute;\n    z-index: 1;\n}\n\n.tooltip:hover .tooltiptext {\n    visibility: visible;\n   \n}\n\n.settings-cog:focus, .settings-cog:active{\n\n    transform: rotate(90%);\n\n\n\n}\n\n\n.settings-cog:hover{\n    transform: rotate(90%)\n}\n\n.completed.mini-task{\n    \n    background-color: rgba(104, 245, 104, 0.795);\n    \n}\n\n\n.completed > *{\n  \n   \n    font-style: italic;\n   \n   \n}\n\n.completed > .mini-finish{\n    background-image:  url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  \n}\n\n/* disable editing task after completion */\n.completed > * > #task-edit-button {\n    opacity: 0;\n    pointer-events: none;\n}\n\n.task.completed {\n\n   background-color: var(--task-complete-color,  rgb(206, 214, 238));\n   outline: 5px solid var(--task-complete-border, green)\n  \n}\n\n.completed > .task-deadline-container{\n    display: none;\n}\n\n\n\n#delete-task-screen{\n    \n    position: fixed;\n    top: 20vh;\n    display: grid;\n    z-index: 10;\n\n    padding: 10px;\n    background-color: white;\n    border-radius: 10px;\n    box-shadow: 1px 1px 3px;\n    grid-template-rows: repeat(3, 1fr);\n\n    grid-template-areas: \n    \"title title\"\n    \". .\"\n    \"cancel confirm\";\n\n\n}\n\n#delete-task-title{\n    \n    grid-area: title;\n}\n\n#delete-task-confirm{\n    grid-area: confirm;\n    justify-self: end;\n}\n\n#delete-task-cancel{\n    grid-area: cancel;\n}\n\n\n\n\n\n.shift-right{\n    transform:translateX(var(--translate-amount, 25px));\n}\n\n.shift-left{\n    transform:translateX(-10rem);\n}\n\n/* disable content and lower opacity */\n\n.disabled{\n    opacity: .5;\n    pointer-events: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --greyBlue: rgb(156, 164, 199);\n    --happyBlue: rgb(192, 204, 241);\n    --postityellow: rgb(242, 243, 221);\n    --bg-color: var(--happyBlue, blue);\n\n    --sub-bg-color: rgba(211, 209, 209, 0.493);\n    --project-color: rgb(246, 247, 238);\n    \n    \n    --header-bg-color: rgb(238, 240, 233);\n    --header-border: var(--greyBlue);\n\n    --task-bg-color: rgb(206, 214, 238);\n    --task-complete-color:  rgba(231, 241, 231, 0.877);\n    --task-complete-border: rgba(20, 75, 20, 0.781);\n    --editing-task-color: var(--happyBlue);\n\n    --low-priority: rgba(162, 179, 233, 0.596);\n    --med-priority: rgba(248, 238, 142, 0.596);\n    --high-priority: rgba(233, 162, 162, 0.596);\n\n    --translate-amount: 50px;\n\n    padding: 0;\n    margin: 0;\n}\n\nbody{\n\n    background-color: var(--happyBlue);\n  \n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nh1,h2,h3,h4,h5,p, ul, li{\n    margin: 0;\n    padding: 0;\n    list-style: none;;\n}\n\n\n.test{\n    background-color: rgba(192, 144, 144, 0.918);\n    height: 200px;\n    width: 200px;\n    display: fixed;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    border-radius: 10px 10px 5px 5px;\n}\n\n.sub{\n    \n    height: 50%;\n    width: 50%;\n    background-color: rgba(8, 199, 24, 0.76);\n    border-radius: 50%;\n}\n\n\n\n\n\n.task{\n   \n    border-radius: 10px;\n    height: 300px;\n    width: min(300px, 100%);\n    box-shadow: 2px 2px 6px;\n    padding: 10px;\n\n    background-color: var(--task-bg-color, rgb(206, 214, 238));\n\n    display: grid;\n    position: fixed;\n    z-index: 10;\n    grid-template-rows: 1fr 2fr 1fr;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \n    \"title title\"\n    \"content content\"\n    \"buttons deadline\"\n  \n}\n\n.task-deadline-complete{\n    grid-area: deadline;\n}\n\n\n#task-corner{\n\n    border-bottom: 50px solid rgba(231, 41, 41, 0.37);\n    border-right: 50px solid transparent;\n\n    position: absolute;\n    right: 1%;\n    z-index: 20;\n\n\n}\n\n\n\n.task-title-bar{\n    display: grid;\n    justify-content: space-between;\n    grid-area: title;\n    justify-items: center;\n\n    grid-template-columns: 1fr 2fr 1fr;\n}\n\n.task-title{\n    font-size: clamp(1rem, 32px, 2rem);\n    text-align: center;\n    justify-self: center;\n}\n\n.task-desc{\n    grid-area: content;\n}\n\n#deadline-form-container{\n\n    position: fixed;\n    top: 20vh;\n    display: grid;\n    z-index: 10;\n    justify-content: flex-start;\n\n  \n}\n\n.task-deadline-container{\n    grid-area: deadline;\n    flex: 0;\n    display: grid;\n    flex-direction: column;\n    align-items: end;\n    justify-items: end;\n\n    grid-template-columns: 2fr 1fr;\n\n    grid-template-areas: \n    \"header priority\"\n    \"deadline editDeadline\"\n\n}\n\n\n\n.task-deadline-header{\n    grid-area: header;\n}\n\n#task-deadline-button{\n    border: none;\n    grid-area: editDeadline\n}\n\n.task-item .priority-button{\n    grid-area: priority;\n}\n\n.task-deadline{\n    grid-area: deadline;\n}\n\n#deadline-form{\n\n    align-self: center;\n    justify-self: center;\n    border-radius: 5px;\n    box-shadow: 3px 3px 5px grey;\n\n    background-color: rgb(255, 255, 255);\n    position: relative;\n    z-index: 10;\n    height: 300px;\n    width: min(400px, 100%);\n    display: grid;\n    padding: 10% 10% 0% 10%;\n    grid-template-areas: \n    \"label\"\n    \"date\"\n    \"time\"\n    \"repeat\"\n    \"buttons\";\n    \n\n}\n.form-input{\n    margin-left: 10px;\n}\n\n.form-header{\n\n    grid-area: label;\n\n   \n}\n\n#date-label{\n\n    grid-area: date;\n}\n\n#time-label{\n    grid-area: time;\n}\n\n#form-date{\n\n    grid-area: input;\n}\n\n#task-deadline-fieldset{\n    grid-area: repeat;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n}  \n\n.form-buttons{\n\n    grid-area: buttons;\n    display: flex;\n    flex-direction: row-reverse;\n}\n\n\n\n.task-header{\n    grid-row: 1 / 2;\n}\n\n\n.task-goal{\n    grid-area: objective;\n}\n\n\n#content{\n    background-color: var(--happyBlue, white);\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n \n}\n.blockscreen{\n    pointer-events: none;\n    background-color: rgb(238, 237, 237);\n    opacity: .5;\n}\n\n.project{\n    height: min(500px, 90%);\n    width: min(600px, 95%);\n    min-width: 300px;\n    top: 20%;\n    font-family: inter;\n    display: flex;\n    position: fixed;\n    \n    flex-direction: column-reverse;\n    justify-content: center;\n    margin: 0;\n    padding: 10px;\n    z-index: 10;\n\n    border-radius: 5px;\n    background-color: rgb(255, 255, 255);\n    box-shadow: 3px 3px 20px 5px var(--greyBlue)\n    \n    \n    \n\n}\n\n\n.project-content{\n    \n    height: 90%;\n    width: 98%;\n    gap: 5px;\n    display: grid;\n\n    grid-template-columns: 3fr 2fr;\n    grid-template-rows: repeat(5, 1fr);\n\n    grid-template-areas: \n    \n    \"title summary\"\n    \"tasks tasks\"\n    \"tasks tasks\"\n    \"tasks tasks\"\n    \"objective deadline\";\n\n\n}\n\n.expand-content-btn{\n    \n}\n\n.title-container{\n\n    \n    display: flex;\n    justify-content: space-between;\n    width: 90%;\n   \n\n}\n\n\n.project-item{\n\n\n    \n}\n.project-title-bar{\n\n    grid-area: title;\n}\n\n\n.project-title{\n    width: 98%;\n    height: 100%;\n \n\n   \n    font-family: inter;\n    font-size: 32px;\n\n}\n\n.project-desc{\n    height: 100%;\n    width: 98%;\n\n    font-family: inter;\n    grid-area: summary;\n\n    overflow: auto;\n   \n\n}\n\n.project-goal{\n    width: 98%;\n   \n\n    grid-area: objective;\n}\n\n.edit-project-box, .edit-task-box{\n    resize: none;\n    \n    max-width: 90%;\n\n}\n\n#project-container{\n    position: fixed;\n    display: none;\n    background-color: rgba(238, 238, 238, 0.466);\n    width: 100%;\n    height: 100%;\n   \n}\n\n.edit-task-box{\n\n    background-color: var(--editing-task-color, grey);\n\n\n}\n\n#task-buttons{\n    flex-direction: row-reverse;\n    align-items: flex-end;\n    justify-content: flex-end;\n}\n\n#add-task-button{\n\n    margin-top: 5px;\n    width: 2rem;\n    height: 2rem;\n   \n}\n\n#add-task-button:hover{\n   \n    transform: scale(1.1);\n\n}\n\n#add-task-button:focus{\n   \n}\n\n.deadline-container{\n    display: grid;\n    grid-area: deadline;\n    \n}\n\n.deadline-content{\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n}\n\n\n.deadline-header{\n    grid-row: 1 / 2;\n}\n\n.tasks-container{\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    align-items: center;\n    grid-area: tasks;\n}\n\n.mini-task{\n    background-color: var(--med-priority);\n    display: flex;\n    border: 1px solid black;\n    width: 90%;\n}\n\n.mini-button{\n    flex: 1;\n    background-color: inherit;\n\n}\n\n#mini-sort{\n\n    height: auto;\n    width: 1.5rem;\n}\n\n.mini-title{\n    border: none;\n    \n  \n}\n\n\n.mini-finish, .mini-delete{\n    flex: 0;\n    width: 2rem;\n    text-align: center;\n   \n}\n\n\n.task-list{\n\n    display: flex;\n    flex-direction: column;\n    width: 90%;\n    align-items: center;\n\n}\n\n.project-card{\n    \n}\n\n\n#modal-container{\n    margin-top: 20vh;\n    align-self: center;\n    display: none;\n    justify-content: center;\n   \n    position: fixed;\n    z-index: 1;\n    width: min(100vw, 380px);\n    height: min(100vh, 500px);\n     background-color: rgba(184, 135, 11, 0.082);\n     \n }\n \n #add-modal{\n     display: flex;\n     \n     align-self: center;\n     justify-content: center;\n     align-items: center;\n     \n     width: min(100vw, 340px);\n     height: min(100vh, 480px);\n \n  \n \n     overflow: auto;\n     border: 2px dashed var(--alt-card-border-color);\n     border-radius: 5px;\n     box-shadow: 2px 2px 5px;\n     background-color: var(--card-border-color, #647431);\n \n }\n \n .add-content{\n \n     width: min(100vh, 300px);\n     height:  min(100vh, 450px);\n \n     display: flex;\n     flex-direction: column;\n     background-color: var(--card-bg-color)\n }\n\n .project-button, .task-button{\n    padding: 5px;\n    font-size: clamp(1rem, 24px, 2rem);\n    border-radius: 5px;\n    height: 2rem;\n    width: 2rem;\n    fill: red;   \n    opacity: .85;\n}\n\n.container-button:hover, .project-button:hover, .task-button:hover, .container-button:active, .project-button:active, .task-button:active {\n\n    opacity: 1;\n    transform: scale(1.1)\n\n}\n\n.button-bar{\n    display: flex;\n    justify-content: space-between;\n\n    grid-area: buttons;\n}\n\n#project-button-bar{\n    flex-direction: row-reverse;\n}\n\n\n.edit-button{\n\n    \n}\n\n\n\n\n.delete-task{\n    \n\n \n\n}\n\n\n\n.hidden{\n    display: none;\n}\n\n.main-container{\n    margin-top: 10%;\n    width: 80%;\n    height: 90%;\n\n    display: flex;\n    justify-content: center;\n    padding: 20px;\n    border-radius: 10px;\n   box-shadow: inset 1px 1px 10px 3px var(--greyBlue, lightgrey);\n\n}\n\n.workspace{\n    justify-self: center;\n    width: 100%;\n  \n    background-color: rgb(195, 210, 245);\n    border-radius: 10px;\n    gap: 5px;\n    \n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n\n }\n\n .content-button{\n    height: auto;\n    width: 3rem;\n\n    justify-self: center;\n }\n\n\n \n .card-button{\n    height: auto;\n    width: 1.5rem;\n    opacity: .5;\n }\n\n .card-button:hover{\n    opacity: 1;\n    transform: scale(1.1);\n }\n\n \n .card{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 10px;\n    height: 200px;\n    width: 100%;\n\n    background-color: rgb(242, 243, 221);\n\n    border-radius: 5px;\n    box-shadow: 3px 3px 5px 5px var(--greyBlue);\n    outline: 1px solid var(--greyBlue);\n }\n\n .card-button-bar{\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n   \n }\n\n .card-percent-container{\n   \n }\n \n .card-percentage{\n    text-align: center;\n }\n\n .card-completed > *{\n    color: green;\n    font-style: italic;\n    font-weight: bold;\n }\n\n\n\n .card-button-bar > *{\n   \n }\n\n.card-deadline{\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 5px;\n    border-bottom: 1px dashed black;\n}\n\n.active-settings-button{\n\n\n\n}\n\n\n\n.blockproject, .blockproject > * > *{\n    pointer-events: none;\n    opacity: .5;\n    \n}\n\n\n\n.priority-button{\n    height: 1.5rem;\n    width: 3rem;\n    border: none;\n    border-radius: 5px;\n    font-weight: bold;\n}\n\n\n.container-button{\n    height: 1.5rem;\n    width: 1.5rem;\n}\n\n#tasks-button{\n    flex: 0;\n   \n\n}\n\n\n.lowpriority{\n    background-color: var(--low-priority, lightblue);\n}\n\n.medpriority{\n    background-color: var(--med-priority, lightyellow);\n\n}\n\n.highpriority{\n    background-color:var(--high-priority, lightsalmon);\n}\n\n\n\n.menu-container{\n    position: fixed;\n    z-index: 10;\n    visibility: hidden;\n    display: none;\n    background-color: rgba(240, 236, 236, 0.863);\n    border: 2px outset black;\n    border-radius: 3px;\n    padding: 2px;\n    cursor: pointer;\n    width: 150px;\n    box-shadow: 1px 1px;\n\n    display: flex;\n}\n\n.menu-header{\n    opacity: 75%;\n    font-style: italic;\n    margin-left: auto;\n}\n\n#context-menu{\n    display:flex;\n    flex-direction: column;\n\n}\n\n.menu-item{\n\nmargin-bottom: 10px;\n\n}\n\n.menu-item:hover, .menu-item:focus{\n    font-weight: bold;\n}\n\n#header{\n    width: 100%;\n    height: 100px;\n    background-color: var(--header-bg-color, rgb(196, 181, 181));\n    margin-bottom: 5px;\n    border-bottom: 5px solid var(--header-bg-color, none);\n    box-shadow: 2px 2px 5px var(--greyBlue)\n    \n\n\n}\n\n.tab-container{\n    display: flex;\n    flex-direction: column;\n\n\n\n}\n\n.tab{\n\n    width: 100%;\n    display: flex;\n\n\n}\n\n.tooltip {\n\n\n  \n    border-bottom: 1px dotted black;\n}\n\n.tooltip .tooltiptext {\n\n    visibility: hidden;\n    width: 120px;\n    background-color: rgba(107, 106, 106, 0.753);\n    color: rgb(221, 221, 221);\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n\n    position: absolute;\n    z-index: 1;\n}\n\n.tooltip:hover .tooltiptext {\n    visibility: visible;\n   \n}\n\n.settings-cog:focus, .settings-cog:active{\n\n    transform: rotate(90%);\n\n\n\n}\n\n\n.settings-cog:hover{\n    transform: rotate(90%)\n}\n\n.completed.mini-task{\n    \n    background-color: rgba(104, 245, 104, 0.795);\n    \n}\n\n\n.completed > *{\n  \n   \n    font-style: italic;\n   \n   \n}\n\n.completed > .mini-finish{\n    background-image:  url(./img/minicheckmarked.svg);\n  \n}\n\n/* disable editing task after completion */\n.completed > * > #task-edit-button {\n    opacity: 0;\n    pointer-events: none;\n}\n\n.task.completed {\n\n   background-color: var(--task-complete-color,  rgb(206, 214, 238));\n   outline: 5px solid var(--task-complete-border, green)\n  \n}\n\n.completed > .task-deadline-container{\n    display: none;\n}\n\n\n\n#delete-task-screen{\n    \n    position: fixed;\n    top: 20vh;\n    display: grid;\n    z-index: 10;\n\n    padding: 10px;\n    background-color: white;\n    border-radius: 10px;\n    box-shadow: 1px 1px 3px;\n    grid-template-rows: repeat(3, 1fr);\n\n    grid-template-areas: \n    \"title title\"\n    \". .\"\n    \"cancel confirm\";\n\n\n}\n\n#delete-task-title{\n    \n    grid-area: title;\n}\n\n#delete-task-confirm{\n    grid-area: confirm;\n    justify-self: end;\n}\n\n#delete-task-cancel{\n    grid-area: cancel;\n}\n\n\n\n\n\n.shift-right{\n    transform:translateX(var(--translate-amount, 25px));\n}\n\n.shift-left{\n    transform:translateX(-10rem);\n}\n\n/* disable content and lower opacity */\n\n.disabled{\n    opacity: .5;\n    pointer-events: none;\n}"],"sourceRoot":""}]);
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

    const parentCard = parentButton.parentNode;

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

   

    ;(0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(menuItems, open, edit, toggle, finish, del)


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
 
    ;(0,_projectUI_js__WEBPACK_IMPORTED_MODULE_2__.renderProject)(project);
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
/* harmony export */   "renderTaskList": () => (/* binding */ renderTaskList),
/* harmony export */   "settings": () => (/* binding */ settings),
/* harmony export */   "toggleTaskStatus": () => (/* reexport safe */ _taskUI__WEBPACK_IMPORTED_MODULE_6__.toggleTaskStatus)
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
                //UI.setSort('deadline');



                renderTaskList(projectObject);
            
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
    const newGoal = editGoal('project');
       
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
    finishMini.addEventListener('click', (e) => (0,_taskUI__WEBPACK_IMPORTED_MODULE_6__.toggleTaskStatus)(task));
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

const sortMenu = () => {

    


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

// The idea is to store this seperately from the project, to allow for loading UI settings detached from data

const UI = (() => {

   

        let sortType = 'priority'
        let ascending = true

        const getSort = () =>  sortType;
        const setSort = (newSort) => sortType = newSort
    
      //  getAscending: () => ascending
      //  setAscending: (newAscending) => ascending = newAscending


        return {getSort, setSort,}

})();



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
/* harmony export */   "renderTask": () => (/* binding */ renderTask),
/* harmony export */   "toggleTaskStatus": () => (/* binding */ toggleTaskStatus)
/* harmony export */ });
/* harmony import */ var _img_arrow_bottom_left_thick_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/arrow-bottom-left-thick.svg */ "./src/img/arrow-bottom-left-thick.svg");
/* harmony import */ var _img_pencil_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/pencil.svg */ "./src/img/pencil.svg");
/* harmony import */ var _img_save_task_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/save-task.svg */ "./src/img/save-task.svg");
/* harmony import */ var _img_finish_task_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/finish-task.svg */ "./src/img/finish-task.svg");
/* harmony import */ var _img_delete_task_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/delete-task.svg */ "./src/img/delete-task.svg");
/* harmony import */ var _img_calendar_edit_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/calendar-edit.svg */ "./src/img/calendar-edit.svg");
/* harmony import */ var _img_check_bold_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/check-bold.svg */ "./src/img/check-bold.svg");
/* harmony import */ var _projectUI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projectUI */ "./src/projectUI.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");













const today = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.getDate)();
let focusedTask;
// Show a full task on screen
const renderTask = (task) => {

    focusedTask = task;

    // Values
   
    const oldTaskDOM = document.querySelector(".task");
    if (oldTaskDOM != undefined) oldTaskDOM.remove();
    
    // DOM element to attach self to
    const content = document.querySelector("#workspace");

    const projectDOM = document.querySelector('.project');
    projectDOM.classList.add('blockproject')

    // The actual render object 
    const taskPopup = () => {
        const newTask = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('div', {class: "task", id: `${task.title}-${task.getID()}`, 'data-id': task.getID()})

        if (task.getStatus()) newTask.classList.add('completed');
        
        const title = () => {

            const titleBar = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('div', {'class': "task-title-bar"});
            
            const editButton = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('input', {'type': 'image', 'src': _img_pencil_svg__WEBPACK_IMPORTED_MODULE_1__, 'class': 'task-button', 'id': 'task-edit-button', 'value': 'Edit'});
            editButton.addEventListener('click', () => editTask(task));
            titleBar.appendChild(editButton);


            const title = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('h2', {'class': "task-title"});
            title.textContent = task.getTitle();;
            titleBar.appendChild(title);            


            const completeButton = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('input', {'type': 'image', 'src': _img_finish_task_svg__WEBPACK_IMPORTED_MODULE_3__, 'class': 'task-button', 'id': 'task-complete-button', 'value': 'CHK'});
            completeButton.addEventListener('click', (e) => {
                   
                
                toggleTaskStatus(task);
                
                // Refresh task or close task depending on whether task is being marked compelte
                task.getStatus() ?  closeTask(newTask) : renderTask(task);
   

            })
            titleBar.appendChild(completeButton)

  
            return titleBar;
        }

        const description = () => {


        const description = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('div', {'class': "task-desc", 'id': `${task.title}-desc`});
        description.textContent = task.getDescription();
                return description;
        }
      
        // Creating a DOM container to hold priority and deadline display
        const priority = () => {

           // const priority = makeContainer('task-deadline', editDeadlineIcon);
           const priority = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('div', {'class': `task-deadline-container`});
           
           const priorityHeader = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element) ('h3', {'class': `task-deadline-header`});  
           priorityHeader.textContent = "Priority: "   
           
           const editDeadlineButton = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('input', {'type': 'image', 'src': _img_calendar_edit_svg__WEBPACK_IMPORTED_MODULE_5__,  'id': `task-deadline-button`, 'class': 'container-button expand-content-btn', }, );
           editDeadlineButton.addEventListener('click', () => openDeadlineForm(task))
        
            const switchPriorityButton = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('input', {'type': 'button', 'class': `priority-button task-item ${priorityStyle(task).priorityValue}`, 'value': priorityStyle(task).priorityText});
            switchPriorityButton.addEventListener('click', () => cyclePriority(task));

            const deadline = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('h4', {'class': "task-deadline task-item", "id": `${task.deadline}-deadline`});
            deadline.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(task.getDeadline(), "MM.dd.yyyy");
            
            (0,_utils__WEBPACK_IMPORTED_MODULE_9__.appendChildren)(priority, priorityHeader, editDeadlineButton, switchPriorityButton, deadline);

            priority.value = task.priority;
        
            return priority;
        }

        // Creation of goal element
        const goal = () => {
            const goal = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('div', {'class': "task-goal-header", "id": `${task.title}-goal`});
            const goalHeader = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('h3', {'class': 'goal-title'})
            const goalContent = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('p', {'class': 'task-goal'});
            goalContent.textContent = task.getGoal();
            goalHeader.textContent = "Goal"
            goal.appendChild(goalHeader)
            goal.appendChild(goalContent)
        
            return goal;
        }
        // Show date of completed task when checked
        const complete = () => {

            const container = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('div', {'class': 'task-deadline-complete', 'id': 'task-deadline-complete'});
            const header = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('h4', {'class': 'task-complete-header'});
            console.log(task.getCompletionDate());
            header.textContent = `Task completed ${(0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(task.getCompletionDate(), 'MM.dd.yyyy')}`
            container.appendChild(header);

            return container; 
        }
     

        // Creation of button bar
        const buttonBar = () => {

            const buttons = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)("div", {'class': 'button-bar', 'id': 'task-buttons'});

            // Delete button currently hidden until task in edit mode
            const deleteButton = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('input', {'type': 'image', 'src': _img_delete_task_svg__WEBPACK_IMPORTED_MODULE_4__, 'alt': 'Delete task', 'class': 'task-button delete-task hidden', 'id': 'delete-task', 'value': 'Delete'})
            deleteButton.addEventListener('click', (e) => {
                deletePopup();
            });
            buttons.appendChild(deleteButton);
          
            const closeButton = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('input', {'type': 'image', 'src': _img_arrow_bottom_left_thick_svg__WEBPACK_IMPORTED_MODULE_0__,'alt': 'Close Task', 'class': 'task-button close-task'});
            closeButton.addEventListener('click', (e) => closeTask(e.target.parentNode.parentNode));
            buttons.appendChild(closeButton);                
        

            return buttons;

        }

        const deletePopup = () => {

            const parent = document.querySelector('body');
            const content = document.querySelector("#workspace");    
            content.classList.add('blockscreen');

            const popup = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('div', {'class': 'task-UI popup', 'id': 'delete-task-screen'});
            const title = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('h3', {'class': 'popup-item popup-title delete-popup', 'id': 'delete-task-title'});
            title.textContent = `Confirm remove '${task.getTitle()}' from project?`;
            const confirm = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('input', {'type': 'image', 'src': _img_check_bold_svg__WEBPACK_IMPORTED_MODULE_6__, 'alt': 'confirm delete', 'class': 'task-button popup-item popup-confirm', 'id': 'delete-task-confirm', 'display': 'none'})
                confirm.addEventListener('click', (e) => {
                    ;(0,_projectUI__WEBPACK_IMPORTED_MODULE_7__.deleteTask)(task);
                    closeTask(newTask);
                    closePopup();
                })
            const cancel = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('input', {'type': 'image','src': _img_arrow_bottom_left_thick_svg__WEBPACK_IMPORTED_MODULE_0__, 'alt': 'cancel delete', 'class': 'task-button popup-item popup-cancel', 'id': 'delete-task-cancel' });
                cancel.addEventListener('click', () => {
                    closePopup();
                });

            const closePopup = () => {
                popup.remove();
                content.classList.remove('blockscreen');
            }
           ;(0,_utils__WEBPACK_IMPORTED_MODULE_9__.appendChildren)(popup, title, confirm, cancel);
           parent.appendChild(popup);

        
        }


        newTask.appendChild(title());
        newTask.appendChild(description());
        newTask.appendChild(priority());
        //newTask.appendChild(goal());
        newTask.appendChild(buttonBar());
        if (task.getStatus()){
            console.log(task.getCompletionDate())
            newTask.appendChild(complete()); 
        } 

        return newTask;
        
    }
    
    content.appendChild(taskPopup());
}
const toggleTaskStatus = (task) => {

    if (task == null) return;

    if (task.getStatus() === false){
        task.setStatus(true);
        task.setCompletionDate(new Date());
        console.log(today)
        task.getParent().tasks.completeTask(task);
    }
    else{
        task.setStatus(false)
        task.setCompletionDate(null);
        task.getParent().tasks.removeComplete(task);
    }
  

    (0,_projectUI__WEBPACK_IMPORTED_MODULE_7__.renderTaskList)(task.getParent());

}

const cyclePriority = (task) => {

    const curPriority = task.getPriority();

    // Priority is 1-3, cycle to next priority level
    changePriority(task, (((curPriority) % 3) + 1));


}

// Task Object, Priority Integer
const changePriority = (task, priority) => {

    task.setPriority(priority);
    console.log(">" + task.getPriority());
    
    (0,_projectUI__WEBPACK_IMPORTED_MODULE_7__.closeProject)();
    (0,_projectUI__WEBPACK_IMPORTED_MODULE_7__.renderProject)(task.getParent());
    renderTask(task);

}



const closeTask = (DOM) => {

    const project = document.querySelector('.project');
    project.classList.remove('blockproject');

    if (DOM != null){
        DOM.remove();
        return
    }
    const task = document.querySelector('.task');
    task.remove();



}


const createTask = (container, project) => {

    const task = (0,_todo__WEBPACK_IMPORTED_MODULE_8__.Task)();
    task.setParent(project);
    
   
    //const taskList = (container)
    //taskList.insertBefore(createMiniTask(project, task), taskList.lastElementChild);
   
    // Add to object
    project.tasks.addTask(task);
    task.getID();

}


const editTask = (task) => {
    
    //const project = task.getParent();
    const tempTask = (0,_todo__WEBPACK_IMPORTED_MODULE_8__.Task)();

    const content = tempTask;

    // Alter UI elements
    const completionButton = document.querySelector('#task-complete-button');
    completionButton.classList.add("disabled");

    const deleteButton = document.querySelector('#delete-task');
    deleteButton.classList.remove('hidden');

    const editButton = document.querySelector('#task-edit-button');
    editButton.classList.add('hidden');

    // Prepare to replace with edit boxes and create save button
    const buttonBar = document.querySelector('.task-title-bar');
    const title = document.querySelector('.task-title');
   
    const saveButton = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('input', {'type': 'image', 'src': _img_save_task_svg__WEBPACK_IMPORTED_MODULE_2__, 'class': 'task-edit-button task-button', 'id': 'task-edit-button', 'value': 'Save'})

    saveButton.addEventListener('click', () => {

        content.setTitle(newTitle.value);
        content.setDescription(newDescription.value);
        //content.setGoal(newGoal.value);
        saveButton.remove();
        editButton.classList.remove('hidden');

        saveToTask();
    })

    // Finalize saving data to task from temporary container
    const saveToTask = () => {

        task.setTitle(content.getTitle());
        task.setDescription(content.getDescription());
        task.setGoal(content.getGoal());
   
        closeTask(buttonBar.parentNode);
        (0,_projectUI__WEBPACK_IMPORTED_MODULE_7__.closeProject)();
        (0,_projectUI__WEBPACK_IMPORTED_MODULE_7__.renderProject)(task.getParent());
        renderTask(task);

    }

    
    buttonBar.insertBefore(saveButton, title);

    // Refresh UI with new data
    const newTitle = (0,_projectUI__WEBPACK_IMPORTED_MODULE_7__.editTitle)('task');
    const newDescription = (0,_projectUI__WEBPACK_IMPORTED_MODULE_7__.editDescription)('task');


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

}
const openDeadlineForm = (task) => {

    
    const container = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('div', {'class': 'form-container', 'id': 'deadline-form-container'});
  


    container.appendChild(deadlineForm(task));
    const parent = document.querySelector('body');
    parent.appendChild(container);
  

}


const updateDeadline = (task, form) => {

    const DEFAULTTIME = "00:00:01"

    const deadlineData = new FormData(form);
    console.log (deadlineData)
    let newDay = deadlineData.get('date');
    let newTime = deadlineData.get('time');
   
   
    if (newTime == ""){
        console.log('no time set, setting to midnight')
        newTime = DEFAULTTIME;
    }

    console.log(newTime)
    const newRepeat = deadlineData.get('repeat');
   

    // format ISO and create new deadline
    const newDeadline = new Date(newDay + 'T' + newTime)
    console.log(newDeadline);
    task.setDeadline(newDeadline);
    console.log((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(task.getDeadline(), "yyyy-MM-dd"));
    renderTask(task);


}

const deadlineForm = (task) => {

    const FORM_HEADER = "Select Deadline"
    const DATE_TOOLTIP = "Select any future date"

    const formContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('div', {"id": "form-container"});
    const form = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('form', {"id": "deadline-form"});

    const dateLabel = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('label', {"for": "date", "class": "form-label", "id": "date-label"});
    dateLabel.textContent = "Date";

    
    const date = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)("input", {"type": "date", "class": "form-input", "name": "date", "id": "form_date", "min": today, 'value': (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(task.getDeadline(), "yyyy-MM-dd"), "required": ""});
    dateLabel.appendChild(date);

    const timeLabel = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('label', {"for": "time", "class": "form-label", "id": "time-label"});
    timeLabel.textContent = "Time";
    const time = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('input', {"type": "time", "class": "form-input", "name": "time", "id": "form_time", 'value': (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(task.getDeadline(), "HH:mm:SS") });
    timeLabel.appendChild(time);

    const buttonBar = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('div', {'class': 'button-bar form-buttons', 'id': 'form-buttons'})
        const submitDeadline = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('input', {'type': 'image', 'src': _img_save_task_svg__WEBPACK_IMPORTED_MODULE_2__, 'alt': 'confirm deadline', 'class': 'form-button task-button', 'id': 'submit-deadline-button'})
  
        const close = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('input', {'type': 'image', 'src': _img_arrow_bottom_left_thick_svg__WEBPACK_IMPORTED_MODULE_0__, 'alt': 'close without changes', 'class': 'form-button task-button', 'id': 'close-deadline-button'})
            close.addEventListener('click', (e) => {
                const form = document.querySelector("#deadline-form-container")
                e.preventDefault();
                formContainer.remove();
            })
    ;(0,_utils__WEBPACK_IMPORTED_MODULE_9__.appendChildren)(buttonBar, submitDeadline, close)
    
    const repeatOptions = () => {
       
        const chooseRepeat = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('fieldset', {'class': 'fieldset', 'id': 'task-deadline-fieldset'})
        const legend = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)('legend',{"value": 'repeat?'})
        legend.textContent = "Repeat every..."
          
        const none = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.makeRadio)('repeat', 'weekly', `Don't repeat`, true);
        const daily = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.makeRadio) ('repeat', 'weekly', 'Once per day');
        const weekly =  (0,_utils__WEBPACK_IMPORTED_MODULE_9__.makeRadio)('repeat', 'weekly', 'Every week');
        const monthly = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.makeRadio)('repeat', 'monthly', 'Once a month');

        (0,_utils__WEBPACK_IMPORTED_MODULE_9__.appendChildren)(chooseRepeat, legend, none, daily, weekly, monthly);


        return chooseRepeat
    }

    form.appendChild(repeatOptions());
    form.appendChild(buttonBar);
   
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        updateDeadline(task, form)
        formContainer.remove();
    });
    const formHeader = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.element)("h2", {'class':'form-header deadline-form'});
    formHeader.textContent = FORM_HEADER;

   
(0,_utils__WEBPACK_IMPORTED_MODULE_9__.appendChildren)(form, dateLabel, timeLabel, formHeader);
formContainer.appendChild(form);
return formContainer;

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
const createToDo = (title = _default_task_json__WEBPACK_IMPORTED_MODULE_1__.title, deadline = _default_task_json__WEBPACK_IMPORTED_MODULE_1__.deadline, priority = _default_task_json__WEBPACK_IMPORTED_MODULE_1__.priority, description = _default_task_json__WEBPACK_IMPORTED_MODULE_1__.description, goal = _default_task_json__WEBPACK_IMPORTED_MODULE_1__.goal, taskID = _default_task_json__WEBPACK_IMPORTED_MODULE_1__.taskID, completed = _default_task_json__WEBPACK_IMPORTED_MODULE_1__.completed, completionDate = _default_task_json__WEBPACK_IMPORTED_MODULE_1__.completionDate) => {

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

    const setCompletionDate = (newCompletionDate) => completionDate = newCompletionDate;
    const getCompletionDate = () => completionDate;
    
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


    return ({getCompletionDate, setCompletionDate, setStatus, getStatus, getID, setID, setParent, getParent, setGoal, getGoal, setDeadline, getDeadline, getPriority, setPriority, title, deadline, priority, description, priority,  content, startDate, timeRemaining,setDescription, getDescription, setTitle, getTitle, getContent,});

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

/***/ "./src/img/arrow-bottom-left-thick.svg":
/*!*********************************************!*\
  !*** ./src/img/arrow-bottom-left-thick.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "df43db0ef1ec7cdab249.svg";

/***/ }),

/***/ "./src/img/calendar-edit.svg":
/*!***********************************!*\
  !*** ./src/img/calendar-edit.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8f229469ca42ac5b2259.svg";

/***/ }),

/***/ "./src/img/check-bold.svg":
/*!********************************!*\
  !*** ./src/img/check-bold.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "83be715455623836d0e1.svg";

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
module.exports = JSON.parse('{"title":"My Task","description":"Useful information about your task goes here.  What specifically are you looking to accomplish?  ","priority":2,"goal":"Your goal, how you decide whether a task is complete.","deadline":"8/12/2022","taskID":"0","completed":false,"completionDate":null}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksYUFBYSxjQUFjLGNBQWMsU0FBUyxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksVUFBVSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sTUFBTSxjQUFjLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxTQUFTLEtBQUssVUFBVSxRQUFRLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsY0FBYyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxXQUFXLFlBQVksYUFBYSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksY0FBYyxXQUFXLFNBQVMsT0FBTyxNQUFNLE1BQU0sT0FBTyxVQUFVLFlBQVksYUFBYSxPQUFPLFFBQVEsS0FBSyxNQUFNLFlBQVksUUFBUSxLQUFLLFVBQVUsYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLE9BQU8sS0FBSyxXQUFXLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0sY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxhQUFhLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLGFBQWEsUUFBUSxNQUFNLFVBQVUsWUFBWSxXQUFXLGFBQWEsT0FBTyxNQUFNLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLGdCQUFnQixXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxNQUFNLFlBQVksY0FBYyxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxRQUFRLE9BQU8sU0FBUyxTQUFTLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksWUFBWSxZQUFZLGFBQWEsWUFBWSxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFdBQVcsWUFBWSxTQUFTLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFdBQVcsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGVBQWUsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxTQUFTLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxRQUFRLFFBQVEsS0FBSyxZQUFZLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLFNBQVMsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxPQUFPLE1BQU0sYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFNBQVMsTUFBTSxLQUFLLFVBQVUsZUFBZSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sUUFBUSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssYUFBYSxPQUFPLE1BQU0sZUFBZSxRQUFRLEtBQUssS0FBSyxNQUFNLE1BQU0sYUFBYSxRQUFRLE9BQU8sY0FBYyxPQUFPLEtBQUssYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLEtBQUssVUFBVSxTQUFTLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsUUFBUSxTQUFTLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGdDQUFnQyxxQ0FBcUMsc0NBQXNDLHlDQUF5Qyx5Q0FBeUMsbURBQW1ELDBDQUEwQyx3REFBd0QsdUNBQXVDLDRDQUE0Qyx5REFBeUQsc0RBQXNELDZDQUE2QyxtREFBbUQsaURBQWlELGtEQUFrRCxpQ0FBaUMsbUJBQW1CLGdCQUFnQixHQUFHLFNBQVMsMkNBQTJDLHdCQUF3QixtQkFBbUIsZ0JBQWdCLGlCQUFpQixvQkFBb0IsNkJBQTZCLDBCQUEwQixHQUFHLDZCQUE2QixnQkFBZ0IsaUJBQWlCLHdCQUF3QixHQUFHLFlBQVksbURBQW1ELG9CQUFvQixtQkFBbUIscUJBQXFCLDhCQUE4QiwwQkFBMEIsb0JBQW9CLHVDQUF1QyxHQUFHLFNBQVMsd0JBQXdCLGlCQUFpQiwrQ0FBK0MseUJBQXlCLEdBQUcsa0JBQWtCLCtCQUErQixvQkFBb0IsOEJBQThCLDhCQUE4QixvQkFBb0IsbUVBQW1FLHNCQUFzQixzQkFBc0Isa0JBQWtCLHNDQUFzQyxxQ0FBcUMsMEdBQTBHLDRCQUE0QiwwQkFBMEIsR0FBRyxtQkFBbUIsMERBQTBELDJDQUEyQywyQkFBMkIsZ0JBQWdCLGtCQUFrQixPQUFPLHdCQUF3QixvQkFBb0IscUNBQXFDLHVCQUF1Qiw0QkFBNEIsMkNBQTJDLEdBQUcsZ0JBQWdCLHlDQUF5Qyx5QkFBeUIsMkJBQTJCLEdBQUcsZUFBZSx5QkFBeUIsR0FBRyw2QkFBNkIsd0JBQXdCLGdCQUFnQixvQkFBb0Isa0JBQWtCLGtDQUFrQyxTQUFTLDZCQUE2QiwwQkFBMEIsY0FBYyxvQkFBb0IsNkJBQTZCLHVCQUF1Qix5QkFBeUIsdUNBQXVDLDBGQUEwRiw4QkFBOEIsd0JBQXdCLEdBQUcsMEJBQTBCLG1CQUFtQixnQ0FBZ0MsZ0NBQWdDLDBCQUEwQixHQUFHLG1CQUFtQiwwQkFBMEIsR0FBRyxtQkFBbUIsMkJBQTJCLDJCQUEyQix5QkFBeUIsbUNBQW1DLDZDQUE2Qyx5QkFBeUIsa0JBQWtCLG9CQUFvQiw4QkFBOEIsb0JBQW9CLDhCQUE4Qix3R0FBd0csV0FBVyxjQUFjLHdCQUF3QixHQUFHLGlCQUFpQix5QkFBeUIsVUFBVSxnQkFBZ0Isd0JBQXdCLEdBQUcsZ0JBQWdCLHNCQUFzQixHQUFHLGVBQWUseUJBQXlCLEdBQUcsNEJBQTRCLHdCQUF3QixvQkFBb0IsNkJBQTZCLDRCQUE0QixLQUFLLGtCQUFrQiwyQkFBMkIsb0JBQW9CLGtDQUFrQyxHQUFHLHFCQUFxQixzQkFBc0IsR0FBRyxpQkFBaUIsMkJBQTJCLEdBQUcsZUFBZSxnREFBZ0QsbUJBQW1CLGtCQUFrQixvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsTUFBTSxlQUFlLDJCQUEyQiwyQ0FBMkMsa0JBQWtCLEdBQUcsYUFBYSw4QkFBOEIsNkJBQTZCLHVCQUF1QixlQUFlLHlCQUF5QixvQkFBb0Isc0JBQXNCLDJDQUEyQyw4QkFBOEIsZ0JBQWdCLG9CQUFvQixrQkFBa0IsMkJBQTJCLDJDQUEyQyx5RUFBeUUsdUJBQXVCLHdCQUF3QixpQkFBaUIsZUFBZSxvQkFBb0IsdUNBQXVDLHlDQUF5QyxzSkFBc0osT0FBTyx3QkFBd0IsU0FBUyxxQkFBcUIsNEJBQTRCLHFDQUFxQyxpQkFBaUIsVUFBVSxvQkFBb0IsYUFBYSxxQkFBcUIseUJBQXlCLEdBQUcscUJBQXFCLGlCQUFpQixtQkFBbUIsbUNBQW1DLHNCQUFzQixLQUFLLGtCQUFrQixtQkFBbUIsaUJBQWlCLDJCQUEyQix5QkFBeUIsdUJBQXVCLFVBQVUsa0JBQWtCLGlCQUFpQixrQ0FBa0MsR0FBRyxzQ0FBc0MsbUJBQW1CLDJCQUEyQixLQUFLLHVCQUF1QixzQkFBc0Isb0JBQW9CLG1EQUFtRCxrQkFBa0IsbUJBQW1CLFFBQVEsbUJBQW1CLDBEQUEwRCxPQUFPLGtCQUFrQixrQ0FBa0MsNEJBQTRCLGdDQUFnQyxHQUFHLHFCQUFxQix3QkFBd0Isa0JBQWtCLG1CQUFtQixRQUFRLDJCQUEyQixpQ0FBaUMsS0FBSywyQkFBMkIsUUFBUSx3QkFBd0Isb0JBQW9CLDBCQUEwQixTQUFTLHNCQUFzQixvQkFBb0Isa0NBQWtDLHFDQUFxQyxHQUFHLHVCQUF1QixzQkFBc0IsR0FBRyxxQkFBcUIsb0JBQW9CLDZCQUE2QixxQkFBcUIsMEJBQTBCLHVCQUF1QixHQUFHLGVBQWUsNENBQTRDLG9CQUFvQiw4QkFBOEIsaUJBQWlCLEdBQUcsaUJBQWlCLGNBQWMsZ0NBQWdDLEtBQUssZUFBZSxxQkFBcUIsb0JBQW9CLEdBQUcsZ0JBQWdCLG1CQUFtQixhQUFhLGlDQUFpQyxjQUFjLGtCQUFrQix5QkFBeUIsUUFBUSxpQkFBaUIsc0JBQXNCLDZCQUE2QixpQkFBaUIsMEJBQTBCLEtBQUssa0JBQWtCLFNBQVMsdUJBQXVCLHVCQUF1Qix5QkFBeUIsb0JBQW9CLDhCQUE4QiwyQkFBMkIsaUJBQWlCLCtCQUErQixnQ0FBZ0MsbURBQW1ELFdBQVcsaUJBQWlCLHFCQUFxQixpQ0FBaUMsK0JBQStCLDJCQUEyQix1Q0FBdUMsaUNBQWlDLGdDQUFnQyx1REFBdUQsMEJBQTBCLCtCQUErQiwyREFBMkQsT0FBTyxtQkFBbUIsbUNBQW1DLGtDQUFrQyx3QkFBd0IsOEJBQThCLGlEQUFpRCxtQ0FBbUMsbUJBQW1CLHlDQUF5Qyx5QkFBeUIsbUJBQW1CLGtCQUFrQixtQkFBbUIsbUJBQW1CLEdBQUcsK0lBQStJLG1CQUFtQixnQ0FBZ0MsZ0JBQWdCLG9CQUFvQixxQ0FBcUMsMkJBQTJCLEdBQUcsd0JBQXdCLGtDQUFrQyxHQUFHLG1CQUFtQixXQUFXLHVCQUF1QixnQkFBZ0IsZ0JBQWdCLG9CQUFvQixHQUFHLG9CQUFvQixzQkFBc0IsaUJBQWlCLGtCQUFrQixzQkFBc0IsOEJBQThCLG9CQUFvQiwwQkFBMEIsbUVBQW1FLEtBQUssZUFBZSwyQkFBMkIsa0JBQWtCLCtDQUErQywwQkFBMEIsZUFBZSwwQkFBMEIsNkJBQTZCLGtDQUFrQywwQkFBMEIsTUFBTSxxQkFBcUIsbUJBQW1CLGtCQUFrQiw2QkFBNkIsSUFBSSx1QkFBdUIsbUJBQW1CLG9CQUFvQixrQkFBa0IsSUFBSSx3QkFBd0IsaUJBQWlCLDRCQUE0QixJQUFJLGNBQWMsb0JBQW9CLDZCQUE2QixxQ0FBcUMsb0JBQW9CLG9CQUFvQixrQkFBa0IsNkNBQTZDLDJCQUEyQixrREFBa0QseUNBQXlDLElBQUksc0JBQXNCLHNCQUFzQixxQ0FBcUMsMEJBQTBCLFdBQVcsNkJBQTZCLFNBQVMsdUJBQXVCLHlCQUF5QixJQUFJLHlCQUF5QixtQkFBbUIseUJBQXlCLHdCQUF3QixJQUFJLDhCQUE4QixTQUFTLG1CQUFtQixvQkFBb0IscUNBQXFDLDBCQUEwQixzQ0FBc0MsR0FBRyw0QkFBNEIsU0FBUyw2Q0FBNkMsMkJBQTJCLGtCQUFrQixTQUFTLHlCQUF5QixxQkFBcUIsa0JBQWtCLG1CQUFtQix5QkFBeUIsd0JBQXdCLEdBQUcsd0JBQXdCLHFCQUFxQixvQkFBb0IsR0FBRyxrQkFBa0IsY0FBYyxVQUFVLG1CQUFtQix1REFBdUQsR0FBRyxpQkFBaUIseURBQXlELEtBQUssa0JBQWtCLHlEQUF5RCxHQUFHLHdCQUF3QixzQkFBc0Isa0JBQWtCLHlCQUF5QixvQkFBb0IsbURBQW1ELCtCQUErQix5QkFBeUIsbUJBQW1CLHNCQUFzQixtQkFBbUIsMEJBQTBCLHNCQUFzQixHQUFHLGlCQUFpQixtQkFBbUIseUJBQXlCLHdCQUF3QixHQUFHLGtCQUFrQixtQkFBbUIsNkJBQTZCLEtBQUssZUFBZSx3QkFBd0IsS0FBSyx1Q0FBdUMsd0JBQXdCLEdBQUcsWUFBWSxrQkFBa0Isb0JBQW9CLG1FQUFtRSx5QkFBeUIsNERBQTRELDBEQUEwRCxtQkFBbUIsb0JBQW9CLDZCQUE2QixTQUFTLFNBQVMsb0JBQW9CLG9CQUFvQixPQUFPLGNBQWMsOENBQThDLEdBQUcsMkJBQTJCLDJCQUEyQixtQkFBbUIsbURBQW1ELGdDQUFnQyx5QkFBeUIscUJBQXFCLHlCQUF5QiwyQkFBMkIsaUJBQWlCLEdBQUcsaUNBQWlDLDBCQUEwQixRQUFRLDhDQUE4QywrQkFBK0IsU0FBUywwQkFBMEIsK0JBQStCLHlCQUF5Qix5REFBeUQsU0FBUyxxQkFBcUIsa0NBQWtDLGFBQWEsOEJBQThCLHdEQUF3RCxPQUFPLHFGQUFxRixpQkFBaUIsMkJBQTJCLEdBQUcscUJBQXFCLHlFQUF5RSxpRUFBaUUsMENBQTBDLG9CQUFvQixHQUFHLDRCQUE0Qiw0QkFBNEIsZ0JBQWdCLG9CQUFvQixrQkFBa0Isc0JBQXNCLDhCQUE4QiwwQkFBMEIsOEJBQThCLHlDQUF5Qyx3RkFBd0YsT0FBTyx1QkFBdUIsNkJBQTZCLEdBQUcseUJBQXlCLHlCQUF5Qix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcseUJBQXlCLDBEQUEwRCxHQUFHLGdCQUFnQixtQ0FBbUMsR0FBRyx5REFBeUQsa0JBQWtCLDJCQUEyQixHQUFHLG1CQUFtQjtBQUN2dGlDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ1YxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQmU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHFFO0FBQ0o7QUFDUTtBQUNkO0FBQ1E7QUFDTjtBQUNIO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EseUJBQXlCLHdFQUFjLGlCQUFpQjs7QUFFeEQsNkVBQTZFOztBQUU3RTtBQUNBO0FBQ0EsYUFBYSxxRUFBZTtBQUM1QixNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTs7O0FBR04sV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQiwyRUFBaUIsUUFBUTs7QUFFL0MsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1FQUFpQjtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGVBQWUsb0VBQVU7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLHVFQUFhOztBQUUvQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQix5RUFBZTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7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Q0FBMkMsZ0JBQWdCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUM3VUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQsS0FBSztBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQixtQkFBTyxDQUFDLGtGQUEyQjtBQUN4RCxRQUFRLFFBQVEsRUFBRSxtQkFBTyxDQUFDLDREQUFnQjtBQUMxQyxZQUFZLG1CQUFPLENBQUMsZ0VBQWtCO0FBQ3RDLGNBQWMsbUJBQU8sQ0FBQyxrRUFBbUI7QUFDekMsZUFBZSxtQkFBTyxDQUFDLHlEQUFVO0FBQ2pDLGNBQWMsbUJBQU8sQ0FBQyx1REFBUzs7Ozs7Ozs7Ozs7QUN2SS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbURBQW1ELE1BQU07QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFNBQVMsR0FBRyxNQUFNO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Es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QkFBMEIsMEJBQTBCO0FBQ3BEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBOztBQUVBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDdUI7QUFDUjtBQUN1RDtBQUNyQztBQUN4Qjs7QUFFOUI7QUFDQTs7O0FBR0Esa0JBQWtCLDJDQUFJO0FBQ3RCLGlCQUFpQiwwREFBZ0I7QUFDakMsaUJBQWlCLGlEQUFPOzs7QUFHeEI7OztBQUdBOzs7Ozs7O0FBT0E7Ozs7O0FBS0E7Ozs7QUFJQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9scnUtY2FjaGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvY2xhc3Nlcy9jb21wYXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2NsYXNzZXMvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvY2xhc3Nlcy9zZW12ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2NsZWFuLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9jbXAuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2NvZXJjZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvY29tcGFyZS1idWlsZC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvY29tcGFyZS1sb29zZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvY29tcGFyZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvZGlmZi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvZXEuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2d0LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9ndGUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2luYy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvbHQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2x0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvbWFqb3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL21pbm9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9uZXEuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL3BhcnNlLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9wYXRjaC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvcHJlcmVsZWFzZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvcmNvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL3Jzb3J0LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9zYXRpc2ZpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL3NvcnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL3ZhbGlkLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2ludGVybmFsL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9pbnRlcm5hbC9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9pbnRlcm5hbC9pZGVudGlmaWVycy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9pbnRlcm5hbC9wYXJzZS1vcHRpb25zLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL2ludGVybmFsL3JlLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy9ndHIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL2ludGVyc2VjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL2x0ci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9yYW5nZXMvbWF4LXNhdGlzZnlpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL21pbi1zYXRpc2Z5aW5nLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc2VtdmVyL3Jhbmdlcy9taW4tdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9yYW5nZXMvb3V0c2lkZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9yYW5nZXMvc2ltcGxpZnkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL3N1YnNldC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3NlbXZlci9yYW5nZXMvdG8tY29tcGFyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zZW12ZXIvcmFuZ2VzL3ZhbGlkLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3lhbGxpc3QvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy95YWxsaXN0L3lhbGxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jYXJkcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3RVSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3NldHRpbmdzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFza1VJLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvbWluaWNoZWNrbWFya2VkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICAtLWdyZXlCbHVlOiByZ2IoMTU2LCAxNjQsIDE5OSk7XFxuICAgIC0taGFwcHlCbHVlOiByZ2IoMTkyLCAyMDQsIDI0MSk7XFxuICAgIC0tcG9zdGl0eWVsbG93OiByZ2IoMjQyLCAyNDMsIDIyMSk7XFxuICAgIC0tYmctY29sb3I6IHZhcigtLWhhcHB5Qmx1ZSwgYmx1ZSk7XFxuXFxuICAgIC0tc3ViLWJnLWNvbG9yOiByZ2JhKDIxMSwgMjA5LCAyMDksIDAuNDkzKTtcXG4gICAgLS1wcm9qZWN0LWNvbG9yOiByZ2IoMjQ2LCAyNDcsIDIzOCk7XFxuICAgIFxcbiAgICBcXG4gICAgLS1oZWFkZXItYmctY29sb3I6IHJnYigyMzgsIDI0MCwgMjMzKTtcXG4gICAgLS1oZWFkZXItYm9yZGVyOiB2YXIoLS1ncmV5Qmx1ZSk7XFxuXFxuICAgIC0tdGFzay1iZy1jb2xvcjogcmdiKDIwNiwgMjE0LCAyMzgpO1xcbiAgICAtLXRhc2stY29tcGxldGUtY29sb3I6ICByZ2JhKDIzMSwgMjQxLCAyMzEsIDAuODc3KTtcXG4gICAgLS10YXNrLWNvbXBsZXRlLWJvcmRlcjogcmdiYSgyMCwgNzUsIDIwLCAwLjc4MSk7XFxuICAgIC0tZWRpdGluZy10YXNrLWNvbG9yOiB2YXIoLS1oYXBweUJsdWUpO1xcblxcbiAgICAtLWxvdy1wcmlvcml0eTogcmdiYSgxNjIsIDE3OSwgMjMzLCAwLjU5Nik7XFxuICAgIC0tbWVkLXByaW9yaXR5OiByZ2JhKDI0OCwgMjM4LCAxNDIsIDAuNTk2KTtcXG4gICAgLS1oaWdoLXByaW9yaXR5OiByZ2JhKDIzMywgMTYyLCAxNjIsIDAuNTk2KTtcXG5cXG4gICAgLS10cmFuc2xhdGUtYW1vdW50OiA1MHB4O1xcblxcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHl7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhhcHB5Qmx1ZSk7XFxuICBcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxLGgyLGgzLGg0LGg1LHAsIHVsLCBsaXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lOztcXG59XFxuXFxuXFxuLnRlc3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkyLCAxNDQsIDE0NCwgMC45MTgpO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGRpc3BsYXk6IGZpeGVkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDVweCA1cHg7XFxufVxcblxcbi5zdWJ7XFxuICAgIFxcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCAxOTksIDI0LCAwLjc2KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4udGFza3tcXG4gICBcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IG1pbigzMDBweCwgMTAwJSk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrLWJnLWNvbG9yLCByZ2IoMjA2LCAyMTQsIDIzOCkpO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwidGl0bGUgdGl0bGVcXFwiXFxuICAgIFxcXCJjb250ZW50IGNvbnRlbnRcXFwiXFxuICAgIFxcXCJidXR0b25zIGRlYWRsaW5lXFxcIlxcbiAgXFxufVxcblxcbi50YXNrLWRlYWRsaW5lLWNvbXBsZXRle1xcbiAgICBncmlkLWFyZWE6IGRlYWRsaW5lO1xcbn1cXG5cXG5cXG4jdGFzay1jb3JuZXJ7XFxuXFxuICAgIGJvcmRlci1ib3R0b206IDUwcHggc29saWQgcmdiYSgyMzEsIDQxLCA0MSwgMC4zNyk7XFxuICAgIGJvcmRlci1yaWdodDogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMSU7XFxuICAgIHotaW5kZXg6IDIwO1xcblxcblxcbn1cXG5cXG5cXG5cXG4udGFzay10aXRsZS1iYXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbn1cXG5cXG4udGFzay10aXRsZXtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAzMnB4LCAycmVtKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZGVzY3tcXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xcbn1cXG5cXG4jZGVhZGxpbmUtZm9ybS1jb250YWluZXJ7XFxuXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAyMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcbiAgXFxufVxcblxcbi50YXNrLWRlYWRsaW5lLWNvbnRhaW5lcntcXG4gICAgZ3JpZC1hcmVhOiBkZWFkbGluZTtcXG4gICAgZmxleDogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAganVzdGlmeS1pdGVtczogZW5kO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiaGVhZGVyIHByaW9yaXR5XFxcIlxcbiAgICBcXFwiZGVhZGxpbmUgZWRpdERlYWRsaW5lXFxcIlxcblxcbn1cXG5cXG5cXG5cXG4udGFzay1kZWFkbGluZS1oZWFkZXJ7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbn1cXG5cXG4jdGFzay1kZWFkbGluZS1idXR0b257XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZ3JpZC1hcmVhOiBlZGl0RGVhZGxpbmVcXG59XFxuXFxuLnRhc2staXRlbSAucHJpb3JpdHktYnV0dG9ue1xcbiAgICBncmlkLWFyZWE6IHByaW9yaXR5O1xcbn1cXG5cXG4udGFzay1kZWFkbGluZXtcXG4gICAgZ3JpZC1hcmVhOiBkZWFkbGluZTtcXG59XFxuXFxuI2RlYWRsaW5lLWZvcm17XFxuXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggZ3JleTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogbWluKDQwMHB4LCAxMDAlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogMTAlIDEwJSAwJSAxMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwibGFiZWxcXFwiXFxuICAgIFxcXCJkYXRlXFxcIlxcbiAgICBcXFwidGltZVxcXCJcXG4gICAgXFxcInJlcGVhdFxcXCJcXG4gICAgXFxcImJ1dHRvbnNcXFwiO1xcbiAgICBcXG5cXG59XFxuLmZvcm0taW5wdXR7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1oZWFkZXJ7XFxuXFxuICAgIGdyaWQtYXJlYTogbGFiZWw7XFxuXFxuICAgXFxufVxcblxcbiNkYXRlLWxhYmVse1xcblxcbiAgICBncmlkLWFyZWE6IGRhdGU7XFxufVxcblxcbiN0aW1lLWxhYmVse1xcbiAgICBncmlkLWFyZWE6IHRpbWU7XFxufVxcblxcbiNmb3JtLWRhdGV7XFxuXFxuICAgIGdyaWQtYXJlYTogaW5wdXQ7XFxufVxcblxcbiN0YXNrLWRlYWRsaW5lLWZpZWxkc2V0e1xcbiAgICBncmlkLWFyZWE6IHJlcGVhdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn0gIFxcblxcbi5mb3JtLWJ1dHRvbnN7XFxuXFxuICAgIGdyaWQtYXJlYTogYnV0dG9ucztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbn1cXG5cXG5cXG5cXG4udGFzay1oZWFkZXJ7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuXFxuLnRhc2stZ29hbHtcXG4gICAgZ3JpZC1hcmVhOiBvYmplY3RpdmU7XFxufVxcblxcblxcbiNjb250ZW50e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oYXBweUJsdWUsIHdoaXRlKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuIFxcbn1cXG4uYmxvY2tzY3JlZW57XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzcsIDIzNyk7XFxuICAgIG9wYWNpdHk6IC41O1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gICAgaGVpZ2h0OiBtaW4oNTAwcHgsIDkwJSk7XFxuICAgIHdpZHRoOiBtaW4oNjAwcHgsIDk1JSk7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIHRvcDogMjAlO1xcbiAgICBmb250LWZhbWlseTogaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgei1pbmRleDogMTA7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDIwcHggNXB4IHZhcigtLWdyZXlCbHVlKVxcbiAgICBcXG4gICAgXFxuICAgIFxcblxcbn1cXG5cXG5cXG4ucHJvamVjdC1jb250ZW50e1xcbiAgICBcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiA5OCU7XFxuICAgIGdhcDogNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXG4gICAgXFxcInRpdGxlIHN1bW1hcnlcXFwiXFxuICAgIFxcXCJ0YXNrcyB0YXNrc1xcXCJcXG4gICAgXFxcInRhc2tzIHRhc2tzXFxcIlxcbiAgICBcXFwidGFza3MgdGFza3NcXFwiXFxuICAgIFxcXCJvYmplY3RpdmUgZGVhZGxpbmVcXFwiO1xcblxcblxcbn1cXG5cXG4uZXhwYW5kLWNvbnRlbnQtYnRue1xcbiAgICBcXG59XFxuXFxuLnRpdGxlLWNvbnRhaW5lcntcXG5cXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICBcXG5cXG59XFxuXFxuXFxuLnByb2plY3QtaXRlbXtcXG5cXG5cXG4gICAgXFxufVxcbi5wcm9qZWN0LXRpdGxlLWJhcntcXG5cXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG59XFxuXFxuXFxuLnByb2plY3QtdGl0bGV7XFxuICAgIHdpZHRoOiA5OCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gXFxuXFxuICAgXFxuICAgIGZvbnQtZmFtaWx5OiBpbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcblxcbn1cXG5cXG4ucHJvamVjdC1kZXNje1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA5OCU7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiBpbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiBzdW1tYXJ5O1xcblxcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICBcXG5cXG59XFxuXFxuLnByb2plY3QtZ29hbHtcXG4gICAgd2lkdGg6IDk4JTtcXG4gICBcXG5cXG4gICAgZ3JpZC1hcmVhOiBvYmplY3RpdmU7XFxufVxcblxcbi5lZGl0LXByb2plY3QtYm94LCAuZWRpdC10YXNrLWJveHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBcXG4gICAgbWF4LXdpZHRoOiA5MCU7XFxuXFxufVxcblxcbiNwcm9qZWN0LWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOCwgMjM4LCAyMzgsIDAuNDY2KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICBcXG59XFxuXFxuLmVkaXQtdGFzay1ib3h7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVkaXRpbmctdGFzay1jb2xvciwgZ3JleSk7XFxuXFxuXFxufVxcblxcbiN0YXNrLWJ1dHRvbnN7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4jYWRkLXRhc2stYnV0dG9ue1xcblxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgXFxufVxcblxcbiNhZGQtdGFzay1idXR0b246aG92ZXJ7XFxuICAgXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG5cXG59XFxuXFxuI2FkZC10YXNrLWJ1dHRvbjpmb2N1c3tcXG4gICBcXG59XFxuXFxuLmRlYWRsaW5lLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiBkZWFkbGluZTtcXG4gICAgXFxufVxcblxcbi5kZWFkbGluZS1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuXFxuLmRlYWRsaW5lLWhlYWRlcntcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4udGFza3MtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiB0YXNrcztcXG59XFxuXFxuLm1pbmktdGFza3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkLXByaW9yaXR5KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5taW5pLWJ1dHRvbntcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG5cXG59XFxuXFxuI21pbmktc29ydHtcXG5cXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbn1cXG5cXG4ubWluaS10aXRsZXtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBcXG4gIFxcbn1cXG5cXG5cXG4ubWluaS1maW5pc2gsIC5taW5pLWRlbGV0ZXtcXG4gICAgZmxleDogMDtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBcXG59XFxuXFxuXFxuLnRhc2stbGlzdHtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLnByb2plY3QtY2FyZHtcXG4gICAgXFxufVxcblxcblxcbiNtb2RhbC1jb250YWluZXJ7XFxuICAgIG1hcmdpbi10b3A6IDIwdmg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgd2lkdGg6IG1pbigxMDB2dywgMzgwcHgpO1xcbiAgICBoZWlnaHQ6IG1pbigxMDB2aCwgNTAwcHgpO1xcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODQsIDEzNSwgMTEsIDAuMDgyKTtcXG4gICAgIFxcbiB9XFxuIFxcbiAjYWRkLW1vZGFse1xcbiAgICAgZGlzcGxheTogZmxleDtcXG4gICAgIFxcbiAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgXFxuICAgICB3aWR0aDogbWluKDEwMHZ3LCAzNDBweCk7XFxuICAgICBoZWlnaHQ6IG1pbigxMDB2aCwgNDgwcHgpO1xcbiBcXG4gIFxcbiBcXG4gICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgYm9yZGVyOiAycHggZGFzaGVkIHZhcigtLWFsdC1jYXJkLWJvcmRlci1jb2xvcik7XFxuICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICBib3gtc2hhZG93OiAycHggMnB4IDVweDtcXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYm9yZGVyLWNvbG9yLCAjNjQ3NDMxKTtcXG4gXFxuIH1cXG4gXFxuIC5hZGQtY29udGVudHtcXG4gXFxuICAgICB3aWR0aDogbWluKDEwMHZoLCAzMDBweCk7XFxuICAgICBoZWlnaHQ6ICBtaW4oMTAwdmgsIDQ1MHB4KTtcXG4gXFxuICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmctY29sb3IpXFxuIH1cXG5cXG4gLnByb2plY3QtYnV0dG9uLCAudGFzay1idXR0b257XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAyNHB4LCAycmVtKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBmaWxsOiByZWQ7ICAgXFxuICAgIG9wYWNpdHk6IC44NTtcXG59XFxuXFxuLmNvbnRhaW5lci1idXR0b246aG92ZXIsIC5wcm9qZWN0LWJ1dHRvbjpob3ZlciwgLnRhc2stYnV0dG9uOmhvdmVyLCAuY29udGFpbmVyLWJ1dHRvbjphY3RpdmUsIC5wcm9qZWN0LWJ1dHRvbjphY3RpdmUsIC50YXNrLWJ1dHRvbjphY3RpdmUge1xcblxcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSlcXG5cXG59XFxuXFxuLmJ1dHRvbi1iYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgZ3JpZC1hcmVhOiBidXR0b25zO1xcbn1cXG5cXG4jcHJvamVjdC1idXR0b24tYmFye1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxufVxcblxcblxcbi5lZGl0LWJ1dHRvbntcXG5cXG4gICAgXFxufVxcblxcblxcblxcblxcbi5kZWxldGUtdGFza3tcXG4gICAgXFxuXFxuIFxcblxcbn1cXG5cXG5cXG5cXG4uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXJ7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMTBweCAzcHggdmFyKC0tZ3JleUJsdWUsIGxpZ2h0Z3JleSk7XFxuXFxufVxcblxcbi53b3Jrc3BhY2V7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk1LCAyMTAsIDI0NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiB9XFxuXFxuIC5jb250ZW50LWJ1dHRvbntcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogM3JlbTtcXG5cXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuIH1cXG5cXG5cXG4gXFxuIC5jYXJkLWJ1dHRvbntcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gfVxcblxcbiAuY2FyZC1idXR0b246aG92ZXJ7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gfVxcblxcbiBcXG4gLmNhcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0MywgMjIxKTtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCA1cHggdmFyKC0tZ3JleUJsdWUpO1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tZ3JleUJsdWUpO1xcbiB9XFxuXFxuIC5jYXJkLWJ1dHRvbi1iYXJ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICBcXG4gfVxcblxcbiAuY2FyZC1wZXJjZW50LWNvbnRhaW5lcntcXG4gICBcXG4gfVxcbiBcXG4gLmNhcmQtcGVyY2VudGFnZXtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiB9XFxuXFxuIC5jYXJkLWNvbXBsZXRlZCA+ICp7XFxuICAgIGNvbG9yOiBncmVlbjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gfVxcblxcblxcblxcbiAuY2FyZC1idXR0b24tYmFyID4gKntcXG4gICBcXG4gfVxcblxcbi5jYXJkLWRlYWRsaW5le1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgYmxhY2s7XFxufVxcblxcbi5hY3RpdmUtc2V0dGluZ3MtYnV0dG9ue1xcblxcblxcblxcbn1cXG5cXG5cXG5cXG4uYmxvY2twcm9qZWN0LCAuYmxvY2twcm9qZWN0ID4gKiA+ICp7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gICAgXFxufVxcblxcblxcblxcbi5wcmlvcml0eS1idXR0b257XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5cXG4uY29udGFpbmVyLWJ1dHRvbntcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxLjVyZW07XFxufVxcblxcbiN0YXNrcy1idXR0b257XFxuICAgIGZsZXg6IDA7XFxuICAgXFxuXFxufVxcblxcblxcbi5sb3dwcmlvcml0eXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5LCBsaWdodGJsdWUpO1xcbn1cXG5cXG4ubWVkcHJpb3JpdHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1wcmlvcml0eSwgbGlnaHR5ZWxsb3cpO1xcblxcbn1cXG5cXG4uaGlnaHByaW9yaXR5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWhpZ2gtcHJpb3JpdHksIGxpZ2h0c2FsbW9uKTtcXG59XFxuXFxuXFxuXFxuLm1lbnUtY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyMzYsIDIzNiwgMC44NjMpO1xcbiAgICBib3JkZXI6IDJweCBvdXRzZXQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1lbnUtaGVhZGVye1xcbiAgICBvcGFjaXR5OiA3NSU7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbiNjb250ZXh0LW1lbnV7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxuLm1lbnUtaXRlbXtcXG5cXG5tYXJnaW4tYm90dG9tOiAxMHB4O1xcblxcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyLCAubWVudS1pdGVtOmZvY3Vze1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2hlYWRlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1jb2xvciwgcmdiKDE5NiwgMTgxLCAxODEpKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0taGVhZGVyLWJnLWNvbG9yLCBub25lKTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggdmFyKC0tZ3JleUJsdWUpXFxuICAgIFxcblxcblxcbn1cXG5cXG4udGFiLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG5cXG5cXG59XFxuXFxuLnRhYntcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuXFxufVxcblxcbi50b29sdGlwIHtcXG5cXG5cXG4gIFxcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xcbn1cXG5cXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xcblxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDcsIDEwNiwgMTA2LCAwLjc1Myk7XFxuICAgIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgIFxcbn1cXG5cXG4uc2V0dGluZ3MtY29nOmZvY3VzLCAuc2V0dGluZ3MtY29nOmFjdGl2ZXtcXG5cXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTAlKTtcXG5cXG5cXG5cXG59XFxuXFxuXFxuLnNldHRpbmdzLWNvZzpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTAlKVxcbn1cXG5cXG4uY29tcGxldGVkLm1pbmktdGFza3tcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAyNDUsIDEwNCwgMC43OTUpO1xcbiAgICBcXG59XFxuXFxuXFxuLmNvbXBsZXRlZCA+ICp7XFxuICBcXG4gICBcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgIFxcbiAgIFxcbn1cXG5cXG4uY29tcGxldGVkID4gLm1pbmktZmluaXNoe1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIFxcbn1cXG5cXG4vKiBkaXNhYmxlIGVkaXRpbmcgdGFzayBhZnRlciBjb21wbGV0aW9uICovXFxuLmNvbXBsZXRlZCA+ICogPiAjdGFzay1lZGl0LWJ1dHRvbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4udGFzay5jb21wbGV0ZWQge1xcblxcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhc2stY29tcGxldGUtY29sb3IsICByZ2IoMjA2LCAyMTQsIDIzOCkpO1xcbiAgIG91dGxpbmU6IDVweCBzb2xpZCB2YXIoLS10YXNrLWNvbXBsZXRlLWJvcmRlciwgZ3JlZW4pXFxuICBcXG59XFxuXFxuLmNvbXBsZXRlZCA+IC50YXNrLWRlYWRsaW5lLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuXFxuI2RlbGV0ZS10YXNrLXNjcmVlbntcXG4gICAgXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAyMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB6LWluZGV4OiAxMDtcXG5cXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcInRpdGxlIHRpdGxlXFxcIlxcbiAgICBcXFwiLiAuXFxcIlxcbiAgICBcXFwiY2FuY2VsIGNvbmZpcm1cXFwiO1xcblxcblxcbn1cXG5cXG4jZGVsZXRlLXRhc2stdGl0bGV7XFxuICAgIFxcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbn1cXG5cXG4jZGVsZXRlLXRhc2stY29uZmlybXtcXG4gICAgZ3JpZC1hcmVhOiBjb25maXJtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuI2RlbGV0ZS10YXNrLWNhbmNlbHtcXG4gICAgZ3JpZC1hcmVhOiBjYW5jZWw7XFxufVxcblxcblxcblxcblxcblxcbi5zaGlmdC1yaWdodHtcXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgodmFyKC0tdHJhbnNsYXRlLWFtb3VudCwgMjVweCkpO1xcbn1cXG5cXG4uc2hpZnQtbGVmdHtcXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwcmVtKTtcXG59XFxuXFxuLyogZGlzYWJsZSBjb250ZW50IGFuZCBsb3dlciBvcGFjaXR5ICovXFxuXFxuLmRpc2FibGVke1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLGtDQUFrQztJQUNsQyxrQ0FBa0M7O0lBRWxDLDBDQUEwQztJQUMxQyxtQ0FBbUM7OztJQUduQyxxQ0FBcUM7SUFDckMsZ0NBQWdDOztJQUVoQyxtQ0FBbUM7SUFDbkMsa0RBQWtEO0lBQ2xELCtDQUErQztJQUMvQyxzQ0FBc0M7O0lBRXRDLDBDQUEwQztJQUMxQywwQ0FBMEM7SUFDMUMsMkNBQTJDOztJQUUzQyx3QkFBd0I7O0lBRXhCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksa0NBQWtD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Q3ZEOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBLHNDQUFzQzs7QUFFdEM7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLWdyZXlCbHVlOiByZ2IoMTU2LCAxNjQsIDE5OSk7XFxuICAgIC0taGFwcHlCbHVlOiByZ2IoMTkyLCAyMDQsIDI0MSk7XFxuICAgIC0tcG9zdGl0eWVsbG93OiByZ2IoMjQyLCAyNDMsIDIyMSk7XFxuICAgIC0tYmctY29sb3I6IHZhcigtLWhhcHB5Qmx1ZSwgYmx1ZSk7XFxuXFxuICAgIC0tc3ViLWJnLWNvbG9yOiByZ2JhKDIxMSwgMjA5LCAyMDksIDAuNDkzKTtcXG4gICAgLS1wcm9qZWN0LWNvbG9yOiByZ2IoMjQ2LCAyNDcsIDIzOCk7XFxuICAgIFxcbiAgICBcXG4gICAgLS1oZWFkZXItYmctY29sb3I6IHJnYigyMzgsIDI0MCwgMjMzKTtcXG4gICAgLS1oZWFkZXItYm9yZGVyOiB2YXIoLS1ncmV5Qmx1ZSk7XFxuXFxuICAgIC0tdGFzay1iZy1jb2xvcjogcmdiKDIwNiwgMjE0LCAyMzgpO1xcbiAgICAtLXRhc2stY29tcGxldGUtY29sb3I6ICByZ2JhKDIzMSwgMjQxLCAyMzEsIDAuODc3KTtcXG4gICAgLS10YXNrLWNvbXBsZXRlLWJvcmRlcjogcmdiYSgyMCwgNzUsIDIwLCAwLjc4MSk7XFxuICAgIC0tZWRpdGluZy10YXNrLWNvbG9yOiB2YXIoLS1oYXBweUJsdWUpO1xcblxcbiAgICAtLWxvdy1wcmlvcml0eTogcmdiYSgxNjIsIDE3OSwgMjMzLCAwLjU5Nik7XFxuICAgIC0tbWVkLXByaW9yaXR5OiByZ2JhKDI0OCwgMjM4LCAxNDIsIDAuNTk2KTtcXG4gICAgLS1oaWdoLXByaW9yaXR5OiByZ2JhKDIzMywgMTYyLCAxNjIsIDAuNTk2KTtcXG5cXG4gICAgLS10cmFuc2xhdGUtYW1vdW50OiA1MHB4O1xcblxcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHl7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhhcHB5Qmx1ZSk7XFxuICBcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxLGgyLGgzLGg0LGg1LHAsIHVsLCBsaXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lOztcXG59XFxuXFxuXFxuLnRlc3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkyLCAxNDQsIDE0NCwgMC45MTgpO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGRpc3BsYXk6IGZpeGVkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDVweCA1cHg7XFxufVxcblxcbi5zdWJ7XFxuICAgIFxcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCAxOTksIDI0LCAwLjc2KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4udGFza3tcXG4gICBcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IG1pbigzMDBweCwgMTAwJSk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrLWJnLWNvbG9yLCByZ2IoMjA2LCAyMTQsIDIzOCkpO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwidGl0bGUgdGl0bGVcXFwiXFxuICAgIFxcXCJjb250ZW50IGNvbnRlbnRcXFwiXFxuICAgIFxcXCJidXR0b25zIGRlYWRsaW5lXFxcIlxcbiAgXFxufVxcblxcbi50YXNrLWRlYWRsaW5lLWNvbXBsZXRle1xcbiAgICBncmlkLWFyZWE6IGRlYWRsaW5lO1xcbn1cXG5cXG5cXG4jdGFzay1jb3JuZXJ7XFxuXFxuICAgIGJvcmRlci1ib3R0b206IDUwcHggc29saWQgcmdiYSgyMzEsIDQxLCA0MSwgMC4zNyk7XFxuICAgIGJvcmRlci1yaWdodDogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMSU7XFxuICAgIHotaW5kZXg6IDIwO1xcblxcblxcbn1cXG5cXG5cXG5cXG4udGFzay10aXRsZS1iYXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbn1cXG5cXG4udGFzay10aXRsZXtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAzMnB4LCAycmVtKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZGVzY3tcXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xcbn1cXG5cXG4jZGVhZGxpbmUtZm9ybS1jb250YWluZXJ7XFxuXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAyMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcbiAgXFxufVxcblxcbi50YXNrLWRlYWRsaW5lLWNvbnRhaW5lcntcXG4gICAgZ3JpZC1hcmVhOiBkZWFkbGluZTtcXG4gICAgZmxleDogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAganVzdGlmeS1pdGVtczogZW5kO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiaGVhZGVyIHByaW9yaXR5XFxcIlxcbiAgICBcXFwiZGVhZGxpbmUgZWRpdERlYWRsaW5lXFxcIlxcblxcbn1cXG5cXG5cXG5cXG4udGFzay1kZWFkbGluZS1oZWFkZXJ7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbn1cXG5cXG4jdGFzay1kZWFkbGluZS1idXR0b257XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZ3JpZC1hcmVhOiBlZGl0RGVhZGxpbmVcXG59XFxuXFxuLnRhc2staXRlbSAucHJpb3JpdHktYnV0dG9ue1xcbiAgICBncmlkLWFyZWE6IHByaW9yaXR5O1xcbn1cXG5cXG4udGFzay1kZWFkbGluZXtcXG4gICAgZ3JpZC1hcmVhOiBkZWFkbGluZTtcXG59XFxuXFxuI2RlYWRsaW5lLWZvcm17XFxuXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggZ3JleTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogbWluKDQwMHB4LCAxMDAlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogMTAlIDEwJSAwJSAxMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwibGFiZWxcXFwiXFxuICAgIFxcXCJkYXRlXFxcIlxcbiAgICBcXFwidGltZVxcXCJcXG4gICAgXFxcInJlcGVhdFxcXCJcXG4gICAgXFxcImJ1dHRvbnNcXFwiO1xcbiAgICBcXG5cXG59XFxuLmZvcm0taW5wdXR7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1oZWFkZXJ7XFxuXFxuICAgIGdyaWQtYXJlYTogbGFiZWw7XFxuXFxuICAgXFxufVxcblxcbiNkYXRlLWxhYmVse1xcblxcbiAgICBncmlkLWFyZWE6IGRhdGU7XFxufVxcblxcbiN0aW1lLWxhYmVse1xcbiAgICBncmlkLWFyZWE6IHRpbWU7XFxufVxcblxcbiNmb3JtLWRhdGV7XFxuXFxuICAgIGdyaWQtYXJlYTogaW5wdXQ7XFxufVxcblxcbiN0YXNrLWRlYWRsaW5lLWZpZWxkc2V0e1xcbiAgICBncmlkLWFyZWE6IHJlcGVhdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn0gIFxcblxcbi5mb3JtLWJ1dHRvbnN7XFxuXFxuICAgIGdyaWQtYXJlYTogYnV0dG9ucztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbn1cXG5cXG5cXG5cXG4udGFzay1oZWFkZXJ7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuXFxuLnRhc2stZ29hbHtcXG4gICAgZ3JpZC1hcmVhOiBvYmplY3RpdmU7XFxufVxcblxcblxcbiNjb250ZW50e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oYXBweUJsdWUsIHdoaXRlKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuIFxcbn1cXG4uYmxvY2tzY3JlZW57XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzcsIDIzNyk7XFxuICAgIG9wYWNpdHk6IC41O1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gICAgaGVpZ2h0OiBtaW4oNTAwcHgsIDkwJSk7XFxuICAgIHdpZHRoOiBtaW4oNjAwcHgsIDk1JSk7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIHRvcDogMjAlO1xcbiAgICBmb250LWZhbWlseTogaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgei1pbmRleDogMTA7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDIwcHggNXB4IHZhcigtLWdyZXlCbHVlKVxcbiAgICBcXG4gICAgXFxuICAgIFxcblxcbn1cXG5cXG5cXG4ucHJvamVjdC1jb250ZW50e1xcbiAgICBcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiA5OCU7XFxuICAgIGdhcDogNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXG4gICAgXFxcInRpdGxlIHN1bW1hcnlcXFwiXFxuICAgIFxcXCJ0YXNrcyB0YXNrc1xcXCJcXG4gICAgXFxcInRhc2tzIHRhc2tzXFxcIlxcbiAgICBcXFwidGFza3MgdGFza3NcXFwiXFxuICAgIFxcXCJvYmplY3RpdmUgZGVhZGxpbmVcXFwiO1xcblxcblxcbn1cXG5cXG4uZXhwYW5kLWNvbnRlbnQtYnRue1xcbiAgICBcXG59XFxuXFxuLnRpdGxlLWNvbnRhaW5lcntcXG5cXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICBcXG5cXG59XFxuXFxuXFxuLnByb2plY3QtaXRlbXtcXG5cXG5cXG4gICAgXFxufVxcbi5wcm9qZWN0LXRpdGxlLWJhcntcXG5cXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG59XFxuXFxuXFxuLnByb2plY3QtdGl0bGV7XFxuICAgIHdpZHRoOiA5OCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gXFxuXFxuICAgXFxuICAgIGZvbnQtZmFtaWx5OiBpbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcblxcbn1cXG5cXG4ucHJvamVjdC1kZXNje1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA5OCU7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiBpbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiBzdW1tYXJ5O1xcblxcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICBcXG5cXG59XFxuXFxuLnByb2plY3QtZ29hbHtcXG4gICAgd2lkdGg6IDk4JTtcXG4gICBcXG5cXG4gICAgZ3JpZC1hcmVhOiBvYmplY3RpdmU7XFxufVxcblxcbi5lZGl0LXByb2plY3QtYm94LCAuZWRpdC10YXNrLWJveHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBcXG4gICAgbWF4LXdpZHRoOiA5MCU7XFxuXFxufVxcblxcbiNwcm9qZWN0LWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOCwgMjM4LCAyMzgsIDAuNDY2KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICBcXG59XFxuXFxuLmVkaXQtdGFzay1ib3h7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVkaXRpbmctdGFzay1jb2xvciwgZ3JleSk7XFxuXFxuXFxufVxcblxcbiN0YXNrLWJ1dHRvbnN7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4jYWRkLXRhc2stYnV0dG9ue1xcblxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgXFxufVxcblxcbiNhZGQtdGFzay1idXR0b246aG92ZXJ7XFxuICAgXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG5cXG59XFxuXFxuI2FkZC10YXNrLWJ1dHRvbjpmb2N1c3tcXG4gICBcXG59XFxuXFxuLmRlYWRsaW5lLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiBkZWFkbGluZTtcXG4gICAgXFxufVxcblxcbi5kZWFkbGluZS1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuXFxuLmRlYWRsaW5lLWhlYWRlcntcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4udGFza3MtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiB0YXNrcztcXG59XFxuXFxuLm1pbmktdGFza3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkLXByaW9yaXR5KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5taW5pLWJ1dHRvbntcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG5cXG59XFxuXFxuI21pbmktc29ydHtcXG5cXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbn1cXG5cXG4ubWluaS10aXRsZXtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBcXG4gIFxcbn1cXG5cXG5cXG4ubWluaS1maW5pc2gsIC5taW5pLWRlbGV0ZXtcXG4gICAgZmxleDogMDtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBcXG59XFxuXFxuXFxuLnRhc2stbGlzdHtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLnByb2plY3QtY2FyZHtcXG4gICAgXFxufVxcblxcblxcbiNtb2RhbC1jb250YWluZXJ7XFxuICAgIG1hcmdpbi10b3A6IDIwdmg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgd2lkdGg6IG1pbigxMDB2dywgMzgwcHgpO1xcbiAgICBoZWlnaHQ6IG1pbigxMDB2aCwgNTAwcHgpO1xcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODQsIDEzNSwgMTEsIDAuMDgyKTtcXG4gICAgIFxcbiB9XFxuIFxcbiAjYWRkLW1vZGFse1xcbiAgICAgZGlzcGxheTogZmxleDtcXG4gICAgIFxcbiAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgXFxuICAgICB3aWR0aDogbWluKDEwMHZ3LCAzNDBweCk7XFxuICAgICBoZWlnaHQ6IG1pbigxMDB2aCwgNDgwcHgpO1xcbiBcXG4gIFxcbiBcXG4gICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgYm9yZGVyOiAycHggZGFzaGVkIHZhcigtLWFsdC1jYXJkLWJvcmRlci1jb2xvcik7XFxuICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICBib3gtc2hhZG93OiAycHggMnB4IDVweDtcXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYm9yZGVyLWNvbG9yLCAjNjQ3NDMxKTtcXG4gXFxuIH1cXG4gXFxuIC5hZGQtY29udGVudHtcXG4gXFxuICAgICB3aWR0aDogbWluKDEwMHZoLCAzMDBweCk7XFxuICAgICBoZWlnaHQ6ICBtaW4oMTAwdmgsIDQ1MHB4KTtcXG4gXFxuICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmctY29sb3IpXFxuIH1cXG5cXG4gLnByb2plY3QtYnV0dG9uLCAudGFzay1idXR0b257XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAyNHB4LCAycmVtKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBmaWxsOiByZWQ7ICAgXFxuICAgIG9wYWNpdHk6IC44NTtcXG59XFxuXFxuLmNvbnRhaW5lci1idXR0b246aG92ZXIsIC5wcm9qZWN0LWJ1dHRvbjpob3ZlciwgLnRhc2stYnV0dG9uOmhvdmVyLCAuY29udGFpbmVyLWJ1dHRvbjphY3RpdmUsIC5wcm9qZWN0LWJ1dHRvbjphY3RpdmUsIC50YXNrLWJ1dHRvbjphY3RpdmUge1xcblxcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSlcXG5cXG59XFxuXFxuLmJ1dHRvbi1iYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgZ3JpZC1hcmVhOiBidXR0b25zO1xcbn1cXG5cXG4jcHJvamVjdC1idXR0b24tYmFye1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxufVxcblxcblxcbi5lZGl0LWJ1dHRvbntcXG5cXG4gICAgXFxufVxcblxcblxcblxcblxcbi5kZWxldGUtdGFza3tcXG4gICAgXFxuXFxuIFxcblxcbn1cXG5cXG5cXG5cXG4uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXJ7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMTBweCAzcHggdmFyKC0tZ3JleUJsdWUsIGxpZ2h0Z3JleSk7XFxuXFxufVxcblxcbi53b3Jrc3BhY2V7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk1LCAyMTAsIDI0NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiB9XFxuXFxuIC5jb250ZW50LWJ1dHRvbntcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogM3JlbTtcXG5cXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuIH1cXG5cXG5cXG4gXFxuIC5jYXJkLWJ1dHRvbntcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gfVxcblxcbiAuY2FyZC1idXR0b246aG92ZXJ7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gfVxcblxcbiBcXG4gLmNhcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0MywgMjIxKTtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCA1cHggdmFyKC0tZ3JleUJsdWUpO1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tZ3JleUJsdWUpO1xcbiB9XFxuXFxuIC5jYXJkLWJ1dHRvbi1iYXJ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICBcXG4gfVxcblxcbiAuY2FyZC1wZXJjZW50LWNvbnRhaW5lcntcXG4gICBcXG4gfVxcbiBcXG4gLmNhcmQtcGVyY2VudGFnZXtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiB9XFxuXFxuIC5jYXJkLWNvbXBsZXRlZCA+ICp7XFxuICAgIGNvbG9yOiBncmVlbjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gfVxcblxcblxcblxcbiAuY2FyZC1idXR0b24tYmFyID4gKntcXG4gICBcXG4gfVxcblxcbi5jYXJkLWRlYWRsaW5le1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgYmxhY2s7XFxufVxcblxcbi5hY3RpdmUtc2V0dGluZ3MtYnV0dG9ue1xcblxcblxcblxcbn1cXG5cXG5cXG5cXG4uYmxvY2twcm9qZWN0LCAuYmxvY2twcm9qZWN0ID4gKiA+ICp7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gICAgXFxufVxcblxcblxcblxcbi5wcmlvcml0eS1idXR0b257XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5cXG4uY29udGFpbmVyLWJ1dHRvbntcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxLjVyZW07XFxufVxcblxcbiN0YXNrcy1idXR0b257XFxuICAgIGZsZXg6IDA7XFxuICAgXFxuXFxufVxcblxcblxcbi5sb3dwcmlvcml0eXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5LCBsaWdodGJsdWUpO1xcbn1cXG5cXG4ubWVkcHJpb3JpdHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1wcmlvcml0eSwgbGlnaHR5ZWxsb3cpO1xcblxcbn1cXG5cXG4uaGlnaHByaW9yaXR5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWhpZ2gtcHJpb3JpdHksIGxpZ2h0c2FsbW9uKTtcXG59XFxuXFxuXFxuXFxuLm1lbnUtY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyMzYsIDIzNiwgMC44NjMpO1xcbiAgICBib3JkZXI6IDJweCBvdXRzZXQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1lbnUtaGVhZGVye1xcbiAgICBvcGFjaXR5OiA3NSU7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbiNjb250ZXh0LW1lbnV7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxuLm1lbnUtaXRlbXtcXG5cXG5tYXJnaW4tYm90dG9tOiAxMHB4O1xcblxcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyLCAubWVudS1pdGVtOmZvY3Vze1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2hlYWRlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1jb2xvciwgcmdiKDE5NiwgMTgxLCAxODEpKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0taGVhZGVyLWJnLWNvbG9yLCBub25lKTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggdmFyKC0tZ3JleUJsdWUpXFxuICAgIFxcblxcblxcbn1cXG5cXG4udGFiLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG5cXG5cXG59XFxuXFxuLnRhYntcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuXFxufVxcblxcbi50b29sdGlwIHtcXG5cXG5cXG4gIFxcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xcbn1cXG5cXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xcblxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDcsIDEwNiwgMTA2LCAwLjc1Myk7XFxuICAgIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgIFxcbn1cXG5cXG4uc2V0dGluZ3MtY29nOmZvY3VzLCAuc2V0dGluZ3MtY29nOmFjdGl2ZXtcXG5cXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTAlKTtcXG5cXG5cXG5cXG59XFxuXFxuXFxuLnNldHRpbmdzLWNvZzpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTAlKVxcbn1cXG5cXG4uY29tcGxldGVkLm1pbmktdGFza3tcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAyNDUsIDEwNCwgMC43OTUpO1xcbiAgICBcXG59XFxuXFxuXFxuLmNvbXBsZXRlZCA+ICp7XFxuICBcXG4gICBcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgIFxcbiAgIFxcbn1cXG5cXG4uY29tcGxldGVkID4gLm1pbmktZmluaXNoe1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgdXJsKC4vaW1nL21pbmljaGVja21hcmtlZC5zdmcpO1xcbiAgXFxufVxcblxcbi8qIGRpc2FibGUgZWRpdGluZyB0YXNrIGFmdGVyIGNvbXBsZXRpb24gKi9cXG4uY29tcGxldGVkID4gKiA+ICN0YXNrLWVkaXQtYnV0dG9uIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi50YXNrLmNvbXBsZXRlZCB7XFxuXFxuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFzay1jb21wbGV0ZS1jb2xvciwgIHJnYigyMDYsIDIxNCwgMjM4KSk7XFxuICAgb3V0bGluZTogNXB4IHNvbGlkIHZhcigtLXRhc2stY29tcGxldGUtYm9yZGVyLCBncmVlbilcXG4gIFxcbn1cXG5cXG4uY29tcGxldGVkID4gLnRhc2stZGVhZGxpbmUtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG5cXG4jZGVsZXRlLXRhc2stc2NyZWVue1xcbiAgICBcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDIwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHotaW5kZXg6IDEwO1xcblxcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwidGl0bGUgdGl0bGVcXFwiXFxuICAgIFxcXCIuIC5cXFwiXFxuICAgIFxcXCJjYW5jZWwgY29uZmlybVxcXCI7XFxuXFxuXFxufVxcblxcbiNkZWxldGUtdGFzay10aXRsZXtcXG4gICAgXFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxufVxcblxcbiNkZWxldGUtdGFzay1jb25maXJte1xcbiAgICBncmlkLWFyZWE6IGNvbmZpcm07XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4jZGVsZXRlLXRhc2stY2FuY2Vse1xcbiAgICBncmlkLWFyZWE6IGNhbmNlbDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLnNoaWZ0LXJpZ2h0e1xcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCh2YXIoLS10cmFuc2xhdGUtYW1vdW50LCAyNXB4KSk7XFxufVxcblxcbi5zaGlmdC1sZWZ0e1xcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTByZW0pO1xcbn1cXG5cXG4vKiBkaXNhYmxlIGNvbnRlbnQgYW5kIGxvd2VyIG9wYWNpdHkgKi9cXG5cXG4uZGlzYWJsZWR7XFxuICAgIG9wYWNpdHk6IC41O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgZGlydHlPcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5cbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nOyAvLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5cbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgc2Vjb25kIGFyZ3VtZW50IGlzIG5vdyByZXF1aXJlZCBmb3IgdGhlIHNha2Ugb2YgZXhwbGljaXRuZXNzLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSlcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpLCBcInl5eXktTU0tZGQnVCdISDptbTpzcy5TU1N4eHhcIilcbiAqICAgYGBgXG4gKlxuICogLSBOZXcgZm9ybWF0IHN0cmluZyBBUEkgZm9yIGBmb3JtYXRgIGZ1bmN0aW9uXG4gKiAgIHdoaWNoIGlzIGJhc2VkIG9uIFtVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzVdKGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGUpLlxuICogICBTZWUgW3RoaXMgcG9zdF0oaHR0cHM6Ly9ibG9nLmRhdGUtZm5zLm9yZy9wb3N0L3VuaWNvZGUtdG9rZW5zLWluLWRhdGUtZm5zLXYyLXNyZWF0eWtpOTFqZykgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiAtIENoYXJhY3RlcnMgYXJlIG5vdyBlc2NhcGVkIHVzaW5nIHNpbmdsZSBxdW90ZSBzeW1ib2xzIChgJ2ApIGluc3RlYWQgb2Ygc3F1YXJlIGJyYWNrZXRzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZywgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBOb3cgYGlzVmFsaWRgIGRvZXNuJ3QgdGhyb3cgYW4gZXhjZXB0aW9uXG4gKiAgIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqICAgSW5zdGVhZCwgYXJndW1lbnQgaXMgY29udmVydGVkIGJlZm9yZWhhbmQgdXNpbmcgYHRvRGF0ZWAuXG4gKlxuICogICBFeGFtcGxlczpcbiAqXG4gKiAgIHwgYGlzVmFsaWRgIGFyZ3VtZW50ICAgICAgICB8IEJlZm9yZSB2Mi4wLjAgfCB2Mi4wLjAgb253YXJkIHxcbiAqICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfFxuICogICB8IGBuZXcgRGF0ZSgpYCAgICAgICAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcyMDE2LTAxLTAxJylgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJycpYCAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgxNDg4MzcwODM1MDgxKWAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKE5hTilgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJzIwMTYtMDEtMDEnYCAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnJ2AgICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYDE0ODgzNzA4MzUwODFgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgTmFOYCAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICpcbiAqICAgV2UgaW50cm9kdWNlIHRoaXMgY2hhbmdlIHRvIG1ha2UgKmRhdGUtZm5zKiBjb25zaXN0ZW50IHdpdGggRUNNQVNjcmlwdCBiZWhhdmlvclxuICogICB0aGF0IHRyeSB0byBjb2VyY2UgYXJndW1lbnRzIHRvIHRoZSBleHBlY3RlZCB0eXBlXG4gKiAgICh3aGljaCBpcyBhbHNvIHRoZSBjYXNlIHdpdGggb3RoZXIgKmRhdGUtZm5zKiBmdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4OyAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uICh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG5cbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59OyAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiJ3VzZSBzdHJpY3QnXG5cbi8vIEEgbGlua2VkIGxpc3QgdG8ga2VlcCB0cmFjayBvZiByZWNlbnRseS11c2VkLW5lc3NcbmNvbnN0IFlhbGxpc3QgPSByZXF1aXJlKCd5YWxsaXN0JylcblxuY29uc3QgTUFYID0gU3ltYm9sKCdtYXgnKVxuY29uc3QgTEVOR1RIID0gU3ltYm9sKCdsZW5ndGgnKVxuY29uc3QgTEVOR1RIX0NBTENVTEFUT1IgPSBTeW1ib2woJ2xlbmd0aENhbGN1bGF0b3InKVxuY29uc3QgQUxMT1dfU1RBTEUgPSBTeW1ib2woJ2FsbG93U3RhbGUnKVxuY29uc3QgTUFYX0FHRSA9IFN5bWJvbCgnbWF4QWdlJylcbmNvbnN0IERJU1BPU0UgPSBTeW1ib2woJ2Rpc3Bvc2UnKVxuY29uc3QgTk9fRElTUE9TRV9PTl9TRVQgPSBTeW1ib2woJ25vRGlzcG9zZU9uU2V0JylcbmNvbnN0IExSVV9MSVNUID0gU3ltYm9sKCdscnVMaXN0JylcbmNvbnN0IENBQ0hFID0gU3ltYm9sKCdjYWNoZScpXG5jb25zdCBVUERBVEVfQUdFX09OX0dFVCA9IFN5bWJvbCgndXBkYXRlQWdlT25HZXQnKVxuXG5jb25zdCBuYWl2ZUxlbmd0aCA9ICgpID0+IDFcblxuLy8gbHJ1TGlzdCBpcyBhIHlhbGxpc3Qgd2hlcmUgdGhlIGhlYWQgaXMgdGhlIHlvdW5nZXN0XG4vLyBpdGVtLCBhbmQgdGhlIHRhaWwgaXMgdGhlIG9sZGVzdC4gIHRoZSBsaXN0IGNvbnRhaW5zIHRoZSBIaXRcbi8vIG9iamVjdHMgYXMgdGhlIGVudHJpZXMuXG4vLyBFYWNoIEhpdCBvYmplY3QgaGFzIGEgcmVmZXJlbmNlIHRvIGl0cyBZYWxsaXN0Lk5vZGUuICBUaGlzXG4vLyBuZXZlciBjaGFuZ2VzLlxuLy9cbi8vIGNhY2hlIGlzIGEgTWFwIChvciBQc2V1ZG9NYXApIHRoYXQgbWF0Y2hlcyB0aGUga2V5cyB0b1xuLy8gdGhlIFlhbGxpc3QuTm9kZSBvYmplY3QuXG5jbGFzcyBMUlVDYWNoZSB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnbnVtYmVyJylcbiAgICAgIG9wdGlvbnMgPSB7IG1heDogb3B0aW9ucyB9XG5cbiAgICBpZiAoIW9wdGlvbnMpXG4gICAgICBvcHRpb25zID0ge31cblxuICAgIGlmIChvcHRpb25zLm1heCAmJiAodHlwZW9mIG9wdGlvbnMubWF4ICE9PSAnbnVtYmVyJyB8fCBvcHRpb25zLm1heCA8IDApKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbWF4IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyJylcbiAgICAvLyBLaW5kIG9mIHdlaXJkIHRvIGhhdmUgYSBkZWZhdWx0IG1heCBvZiBJbmZpbml0eSwgYnV0IG9oIHdlbGwuXG4gICAgY29uc3QgbWF4ID0gdGhpc1tNQVhdID0gb3B0aW9ucy5tYXggfHwgSW5maW5pdHlcblxuICAgIGNvbnN0IGxjID0gb3B0aW9ucy5sZW5ndGggfHwgbmFpdmVMZW5ndGhcbiAgICB0aGlzW0xFTkdUSF9DQUxDVUxBVE9SXSA9ICh0eXBlb2YgbGMgIT09ICdmdW5jdGlvbicpID8gbmFpdmVMZW5ndGggOiBsY1xuICAgIHRoaXNbQUxMT1dfU1RBTEVdID0gb3B0aW9ucy5zdGFsZSB8fCBmYWxzZVxuICAgIGlmIChvcHRpb25zLm1heEFnZSAmJiB0eXBlb2Ygb3B0aW9ucy5tYXhBZ2UgIT09ICdudW1iZXInKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbWF4QWdlIG11c3QgYmUgYSBudW1iZXInKVxuICAgIHRoaXNbTUFYX0FHRV0gPSBvcHRpb25zLm1heEFnZSB8fCAwXG4gICAgdGhpc1tESVNQT1NFXSA9IG9wdGlvbnMuZGlzcG9zZVxuICAgIHRoaXNbTk9fRElTUE9TRV9PTl9TRVRdID0gb3B0aW9ucy5ub0Rpc3Bvc2VPblNldCB8fCBmYWxzZVxuICAgIHRoaXNbVVBEQVRFX0FHRV9PTl9HRVRdID0gb3B0aW9ucy51cGRhdGVBZ2VPbkdldCB8fCBmYWxzZVxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgLy8gcmVzaXplIHRoZSBjYWNoZSB3aGVuIHRoZSBtYXggY2hhbmdlcy5cbiAgc2V0IG1heCAobUwpIHtcbiAgICBpZiAodHlwZW9mIG1MICE9PSAnbnVtYmVyJyB8fCBtTCA8IDApXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYXggbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXInKVxuXG4gICAgdGhpc1tNQVhdID0gbUwgfHwgSW5maW5pdHlcbiAgICB0cmltKHRoaXMpXG4gIH1cbiAgZ2V0IG1heCAoKSB7XG4gICAgcmV0dXJuIHRoaXNbTUFYXVxuICB9XG5cbiAgc2V0IGFsbG93U3RhbGUgKGFsbG93U3RhbGUpIHtcbiAgICB0aGlzW0FMTE9XX1NUQUxFXSA9ICEhYWxsb3dTdGFsZVxuICB9XG4gIGdldCBhbGxvd1N0YWxlICgpIHtcbiAgICByZXR1cm4gdGhpc1tBTExPV19TVEFMRV1cbiAgfVxuXG4gIHNldCBtYXhBZ2UgKG1BKSB7XG4gICAgaWYgKHR5cGVvZiBtQSAhPT0gJ251bWJlcicpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYXhBZ2UgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXInKVxuXG4gICAgdGhpc1tNQVhfQUdFXSA9IG1BXG4gICAgdHJpbSh0aGlzKVxuICB9XG4gIGdldCBtYXhBZ2UgKCkge1xuICAgIHJldHVybiB0aGlzW01BWF9BR0VdXG4gIH1cblxuICAvLyByZXNpemUgdGhlIGNhY2hlIHdoZW4gdGhlIGxlbmd0aENhbGN1bGF0b3IgY2hhbmdlcy5cbiAgc2V0IGxlbmd0aENhbGN1bGF0b3IgKGxDKSB7XG4gICAgaWYgKHR5cGVvZiBsQyAhPT0gJ2Z1bmN0aW9uJylcbiAgICAgIGxDID0gbmFpdmVMZW5ndGhcblxuICAgIGlmIChsQyAhPT0gdGhpc1tMRU5HVEhfQ0FMQ1VMQVRPUl0pIHtcbiAgICAgIHRoaXNbTEVOR1RIX0NBTENVTEFUT1JdID0gbENcbiAgICAgIHRoaXNbTEVOR1RIXSA9IDBcbiAgICAgIHRoaXNbTFJVX0xJU1RdLmZvckVhY2goaGl0ID0+IHtcbiAgICAgICAgaGl0Lmxlbmd0aCA9IHRoaXNbTEVOR1RIX0NBTENVTEFUT1JdKGhpdC52YWx1ZSwgaGl0LmtleSlcbiAgICAgICAgdGhpc1tMRU5HVEhdICs9IGhpdC5sZW5ndGhcbiAgICAgIH0pXG4gICAgfVxuICAgIHRyaW0odGhpcylcbiAgfVxuICBnZXQgbGVuZ3RoQ2FsY3VsYXRvciAoKSB7IHJldHVybiB0aGlzW0xFTkdUSF9DQUxDVUxBVE9SXSB9XG5cbiAgZ2V0IGxlbmd0aCAoKSB7IHJldHVybiB0aGlzW0xFTkdUSF0gfVxuICBnZXQgaXRlbUNvdW50ICgpIHsgcmV0dXJuIHRoaXNbTFJVX0xJU1RdLmxlbmd0aCB9XG5cbiAgcmZvckVhY2ggKGZuLCB0aGlzcCkge1xuICAgIHRoaXNwID0gdGhpc3AgfHwgdGhpc1xuICAgIGZvciAobGV0IHdhbGtlciA9IHRoaXNbTFJVX0xJU1RdLnRhaWw7IHdhbGtlciAhPT0gbnVsbDspIHtcbiAgICAgIGNvbnN0IHByZXYgPSB3YWxrZXIucHJldlxuICAgICAgZm9yRWFjaFN0ZXAodGhpcywgZm4sIHdhbGtlciwgdGhpc3ApXG4gICAgICB3YWxrZXIgPSBwcmV2XG4gICAgfVxuICB9XG5cbiAgZm9yRWFjaCAoZm4sIHRoaXNwKSB7XG4gICAgdGhpc3AgPSB0aGlzcCB8fCB0aGlzXG4gICAgZm9yIChsZXQgd2Fsa2VyID0gdGhpc1tMUlVfTElTVF0uaGVhZDsgd2Fsa2VyICE9PSBudWxsOykge1xuICAgICAgY29uc3QgbmV4dCA9IHdhbGtlci5uZXh0XG4gICAgICBmb3JFYWNoU3RlcCh0aGlzLCBmbiwgd2Fsa2VyLCB0aGlzcClcbiAgICAgIHdhbGtlciA9IG5leHRcbiAgICB9XG4gIH1cblxuICBrZXlzICgpIHtcbiAgICByZXR1cm4gdGhpc1tMUlVfTElTVF0udG9BcnJheSgpLm1hcChrID0+IGsua2V5KVxuICB9XG5cbiAgdmFsdWVzICgpIHtcbiAgICByZXR1cm4gdGhpc1tMUlVfTElTVF0udG9BcnJheSgpLm1hcChrID0+IGsudmFsdWUpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgaWYgKHRoaXNbRElTUE9TRV0gJiZcbiAgICAgICAgdGhpc1tMUlVfTElTVF0gJiZcbiAgICAgICAgdGhpc1tMUlVfTElTVF0ubGVuZ3RoKSB7XG4gICAgICB0aGlzW0xSVV9MSVNUXS5mb3JFYWNoKGhpdCA9PiB0aGlzW0RJU1BPU0VdKGhpdC5rZXksIGhpdC52YWx1ZSkpXG4gICAgfVxuXG4gICAgdGhpc1tDQUNIRV0gPSBuZXcgTWFwKCkgLy8gaGFzaCBvZiBpdGVtcyBieSBrZXlcbiAgICB0aGlzW0xSVV9MSVNUXSA9IG5ldyBZYWxsaXN0KCkgLy8gbGlzdCBvZiBpdGVtcyBpbiBvcmRlciBvZiB1c2UgcmVjZW5jeVxuICAgIHRoaXNbTEVOR1RIXSA9IDAgLy8gbGVuZ3RoIG9mIGl0ZW1zIGluIHRoZSBsaXN0XG4gIH1cblxuICBkdW1wICgpIHtcbiAgICByZXR1cm4gdGhpc1tMUlVfTElTVF0ubWFwKGhpdCA9PlxuICAgICAgaXNTdGFsZSh0aGlzLCBoaXQpID8gZmFsc2UgOiB7XG4gICAgICAgIGs6IGhpdC5rZXksXG4gICAgICAgIHY6IGhpdC52YWx1ZSxcbiAgICAgICAgZTogaGl0Lm5vdyArIChoaXQubWF4QWdlIHx8IDApXG4gICAgICB9KS50b0FycmF5KCkuZmlsdGVyKGggPT4gaClcbiAgfVxuXG4gIGR1bXBMcnUgKCkge1xuICAgIHJldHVybiB0aGlzW0xSVV9MSVNUXVxuICB9XG5cbiAgc2V0IChrZXksIHZhbHVlLCBtYXhBZ2UpIHtcbiAgICBtYXhBZ2UgPSBtYXhBZ2UgfHwgdGhpc1tNQVhfQUdFXVxuXG4gICAgaWYgKG1heEFnZSAmJiB0eXBlb2YgbWF4QWdlICE9PSAnbnVtYmVyJylcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ21heEFnZSBtdXN0IGJlIGEgbnVtYmVyJylcblxuICAgIGNvbnN0IG5vdyA9IG1heEFnZSA/IERhdGUubm93KCkgOiAwXG4gICAgY29uc3QgbGVuID0gdGhpc1tMRU5HVEhfQ0FMQ1VMQVRPUl0odmFsdWUsIGtleSlcblxuICAgIGlmICh0aGlzW0NBQ0hFXS5oYXMoa2V5KSkge1xuICAgICAgaWYgKGxlbiA+IHRoaXNbTUFYXSkge1xuICAgICAgICBkZWwodGhpcywgdGhpc1tDQUNIRV0uZ2V0KGtleSkpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBub2RlID0gdGhpc1tDQUNIRV0uZ2V0KGtleSlcbiAgICAgIGNvbnN0IGl0ZW0gPSBub2RlLnZhbHVlXG5cbiAgICAgIC8vIGRpc3Bvc2Ugb2YgdGhlIG9sZCBvbmUgYmVmb3JlIG92ZXJ3cml0aW5nXG4gICAgICAvLyBzcGxpdCBvdXQgaW50byAyIGlmcyBmb3IgYmV0dGVyIGNvdmVyYWdlIHRyYWNraW5nXG4gICAgICBpZiAodGhpc1tESVNQT1NFXSkge1xuICAgICAgICBpZiAoIXRoaXNbTk9fRElTUE9TRV9PTl9TRVRdKVxuICAgICAgICAgIHRoaXNbRElTUE9TRV0oa2V5LCBpdGVtLnZhbHVlKVxuICAgICAgfVxuXG4gICAgICBpdGVtLm5vdyA9IG5vd1xuICAgICAgaXRlbS5tYXhBZ2UgPSBtYXhBZ2VcbiAgICAgIGl0ZW0udmFsdWUgPSB2YWx1ZVxuICAgICAgdGhpc1tMRU5HVEhdICs9IGxlbiAtIGl0ZW0ubGVuZ3RoXG4gICAgICBpdGVtLmxlbmd0aCA9IGxlblxuICAgICAgdGhpcy5nZXQoa2V5KVxuICAgICAgdHJpbSh0aGlzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBoaXQgPSBuZXcgRW50cnkoa2V5LCB2YWx1ZSwgbGVuLCBub3csIG1heEFnZSlcblxuICAgIC8vIG92ZXJzaXplZCBvYmplY3RzIGZhbGwgb3V0IG9mIGNhY2hlIGF1dG9tYXRpY2FsbHkuXG4gICAgaWYgKGhpdC5sZW5ndGggPiB0aGlzW01BWF0pIHtcbiAgICAgIGlmICh0aGlzW0RJU1BPU0VdKVxuICAgICAgICB0aGlzW0RJU1BPU0VdKGtleSwgdmFsdWUpXG5cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXNbTEVOR1RIXSArPSBoaXQubGVuZ3RoXG4gICAgdGhpc1tMUlVfTElTVF0udW5zaGlmdChoaXQpXG4gICAgdGhpc1tDQUNIRV0uc2V0KGtleSwgdGhpc1tMUlVfTElTVF0uaGVhZClcbiAgICB0cmltKHRoaXMpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGhhcyAoa2V5KSB7XG4gICAgaWYgKCF0aGlzW0NBQ0hFXS5oYXMoa2V5KSkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgaGl0ID0gdGhpc1tDQUNIRV0uZ2V0KGtleSkudmFsdWVcbiAgICByZXR1cm4gIWlzU3RhbGUodGhpcywgaGl0KVxuICB9XG5cbiAgZ2V0IChrZXkpIHtcbiAgICByZXR1cm4gZ2V0KHRoaXMsIGtleSwgdHJ1ZSlcbiAgfVxuXG4gIHBlZWsgKGtleSkge1xuICAgIHJldHVybiBnZXQodGhpcywga2V5LCBmYWxzZSlcbiAgfVxuXG4gIHBvcCAoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXNbTFJVX0xJU1RdLnRhaWxcbiAgICBpZiAoIW5vZGUpXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgZGVsKHRoaXMsIG5vZGUpXG4gICAgcmV0dXJuIG5vZGUudmFsdWVcbiAgfVxuXG4gIGRlbCAoa2V5KSB7XG4gICAgZGVsKHRoaXMsIHRoaXNbQ0FDSEVdLmdldChrZXkpKVxuICB9XG5cbiAgbG9hZCAoYXJyKSB7XG4gICAgLy8gcmVzZXQgdGhlIGNhY2hlXG4gICAgdGhpcy5yZXNldCgpXG5cbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgLy8gQSBwcmV2aW91cyBzZXJpYWxpemVkIGNhY2hlIGhhcyB0aGUgbW9zdCByZWNlbnQgaXRlbXMgZmlyc3RcbiAgICBmb3IgKGxldCBsID0gYXJyLmxlbmd0aCAtIDE7IGwgPj0gMDsgbC0tKSB7XG4gICAgICBjb25zdCBoaXQgPSBhcnJbbF1cbiAgICAgIGNvbnN0IGV4cGlyZXNBdCA9IGhpdC5lIHx8IDBcbiAgICAgIGlmIChleHBpcmVzQXQgPT09IDApXG4gICAgICAgIC8vIHRoZSBpdGVtIHdhcyBjcmVhdGVkIHdpdGhvdXQgZXhwaXJhdGlvbiBpbiBhIG5vbiBhZ2VkIGNhY2hlXG4gICAgICAgIHRoaXMuc2V0KGhpdC5rLCBoaXQudilcbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBtYXhBZ2UgPSBleHBpcmVzQXQgLSBub3dcbiAgICAgICAgLy8gZG9udCBhZGQgYWxyZWFkeSBleHBpcmVkIGl0ZW1zXG4gICAgICAgIGlmIChtYXhBZ2UgPiAwKSB7XG4gICAgICAgICAgdGhpcy5zZXQoaGl0LmssIGhpdC52LCBtYXhBZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcnVuZSAoKSB7XG4gICAgdGhpc1tDQUNIRV0uZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gZ2V0KHRoaXMsIGtleSwgZmFsc2UpKVxuICB9XG59XG5cbmNvbnN0IGdldCA9IChzZWxmLCBrZXksIGRvVXNlKSA9PiB7XG4gIGNvbnN0IG5vZGUgPSBzZWxmW0NBQ0hFXS5nZXQoa2V5KVxuICBpZiAobm9kZSkge1xuICAgIGNvbnN0IGhpdCA9IG5vZGUudmFsdWVcbiAgICBpZiAoaXNTdGFsZShzZWxmLCBoaXQpKSB7XG4gICAgICBkZWwoc2VsZiwgbm9kZSlcbiAgICAgIGlmICghc2VsZltBTExPV19TVEFMRV0pXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRvVXNlKSB7XG4gICAgICAgIGlmIChzZWxmW1VQREFURV9BR0VfT05fR0VUXSlcbiAgICAgICAgICBub2RlLnZhbHVlLm5vdyA9IERhdGUubm93KClcbiAgICAgICAgc2VsZltMUlVfTElTVF0udW5zaGlmdE5vZGUobm9kZSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGhpdC52YWx1ZVxuICB9XG59XG5cbmNvbnN0IGlzU3RhbGUgPSAoc2VsZiwgaGl0KSA9PiB7XG4gIGlmICghaGl0IHx8ICghaGl0Lm1heEFnZSAmJiAhc2VsZltNQVhfQUdFXSkpXG4gICAgcmV0dXJuIGZhbHNlXG5cbiAgY29uc3QgZGlmZiA9IERhdGUubm93KCkgLSBoaXQubm93XG4gIHJldHVybiBoaXQubWF4QWdlID8gZGlmZiA+IGhpdC5tYXhBZ2VcbiAgICA6IHNlbGZbTUFYX0FHRV0gJiYgKGRpZmYgPiBzZWxmW01BWF9BR0VdKVxufVxuXG5jb25zdCB0cmltID0gc2VsZiA9PiB7XG4gIGlmIChzZWxmW0xFTkdUSF0gPiBzZWxmW01BWF0pIHtcbiAgICBmb3IgKGxldCB3YWxrZXIgPSBzZWxmW0xSVV9MSVNUXS50YWlsO1xuICAgICAgc2VsZltMRU5HVEhdID4gc2VsZltNQVhdICYmIHdhbGtlciAhPT0gbnVsbDspIHtcbiAgICAgIC8vIFdlIGtub3cgdGhhdCB3ZSdyZSBhYm91dCB0byBkZWxldGUgdGhpcyBvbmUsIGFuZCBhbHNvXG4gICAgICAvLyB3aGF0IHRoZSBuZXh0IGxlYXN0IHJlY2VudGx5IHVzZWQga2V5IHdpbGwgYmUsIHNvIGp1c3RcbiAgICAgIC8vIGdvIGFoZWFkIGFuZCBzZXQgaXQgbm93LlxuICAgICAgY29uc3QgcHJldiA9IHdhbGtlci5wcmV2XG4gICAgICBkZWwoc2VsZiwgd2Fsa2VyKVxuICAgICAgd2Fsa2VyID0gcHJldlxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWwgPSAoc2VsZiwgbm9kZSkgPT4ge1xuICBpZiAobm9kZSkge1xuICAgIGNvbnN0IGhpdCA9IG5vZGUudmFsdWVcbiAgICBpZiAoc2VsZltESVNQT1NFXSlcbiAgICAgIHNlbGZbRElTUE9TRV0oaGl0LmtleSwgaGl0LnZhbHVlKVxuXG4gICAgc2VsZltMRU5HVEhdIC09IGhpdC5sZW5ndGhcbiAgICBzZWxmW0NBQ0hFXS5kZWxldGUoaGl0LmtleSlcbiAgICBzZWxmW0xSVV9MSVNUXS5yZW1vdmVOb2RlKG5vZGUpXG4gIH1cbn1cblxuY2xhc3MgRW50cnkge1xuICBjb25zdHJ1Y3RvciAoa2V5LCB2YWx1ZSwgbGVuZ3RoLCBub3csIG1heEFnZSkge1xuICAgIHRoaXMua2V5ID0ga2V5XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGhcbiAgICB0aGlzLm5vdyA9IG5vd1xuICAgIHRoaXMubWF4QWdlID0gbWF4QWdlIHx8IDBcbiAgfVxufVxuXG5jb25zdCBmb3JFYWNoU3RlcCA9IChzZWxmLCBmbiwgbm9kZSwgdGhpc3ApID0+IHtcbiAgbGV0IGhpdCA9IG5vZGUudmFsdWVcbiAgaWYgKGlzU3RhbGUoc2VsZiwgaGl0KSkge1xuICAgIGRlbChzZWxmLCBub2RlKVxuICAgIGlmICghc2VsZltBTExPV19TVEFMRV0pXG4gICAgICBoaXQgPSB1bmRlZmluZWRcbiAgfVxuICBpZiAoaGl0KVxuICAgIGZuLmNhbGwodGhpc3AsIGhpdC52YWx1ZSwgaGl0LmtleSwgc2VsZilcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMUlVDYWNoZVxuIiwiY29uc3QgQU5ZID0gU3ltYm9sKCdTZW1WZXIgQU5ZJylcbi8vIGhvaXN0ZWQgY2xhc3MgZm9yIGN5Y2xpYyBkZXBlbmRlbmN5XG5jbGFzcyBDb21wYXJhdG9yIHtcbiAgc3RhdGljIGdldCBBTlkgKCkge1xuICAgIHJldHVybiBBTllcbiAgfVxuXG4gIGNvbnN0cnVjdG9yIChjb21wLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHBhcnNlT3B0aW9ucyhvcHRpb25zKVxuXG4gICAgaWYgKGNvbXAgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSB7XG4gICAgICBpZiAoY29tcC5sb29zZSA9PT0gISFvcHRpb25zLmxvb3NlKSB7XG4gICAgICAgIHJldHVybiBjb21wXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wID0gY29tcC52YWx1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGRlYnVnKCdjb21wYXJhdG9yJywgY29tcCwgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5sb29zZSA9ICEhb3B0aW9ucy5sb29zZVxuICAgIHRoaXMucGFyc2UoY29tcClcblxuICAgIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgICB0aGlzLnZhbHVlID0gJydcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMub3BlcmF0b3IgKyB0aGlzLnNlbXZlci52ZXJzaW9uXG4gICAgfVxuXG4gICAgZGVidWcoJ2NvbXAnLCB0aGlzKVxuICB9XG5cbiAgcGFyc2UgKGNvbXApIHtcbiAgICBjb25zdCByID0gdGhpcy5vcHRpb25zLmxvb3NlID8gcmVbdC5DT01QQVJBVE9STE9PU0VdIDogcmVbdC5DT01QQVJBVE9SXVxuICAgIGNvbnN0IG0gPSBjb21wLm1hdGNoKHIpXG5cbiAgICBpZiAoIW0pIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgY29tcGFyYXRvcjogJHtjb21wfWApXG4gICAgfVxuXG4gICAgdGhpcy5vcGVyYXRvciA9IG1bMV0gIT09IHVuZGVmaW5lZCA/IG1bMV0gOiAnJ1xuICAgIGlmICh0aGlzLm9wZXJhdG9yID09PSAnPScpIHtcbiAgICAgIHRoaXMub3BlcmF0b3IgPSAnJ1xuICAgIH1cblxuICAgIC8vIGlmIGl0IGxpdGVyYWxseSBpcyBqdXN0ICc+JyBvciAnJyB0aGVuIGFsbG93IGFueXRoaW5nLlxuICAgIGlmICghbVsyXSkge1xuICAgICAgdGhpcy5zZW12ZXIgPSBBTllcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZW12ZXIgPSBuZXcgU2VtVmVyKG1bMl0sIHRoaXMub3B0aW9ucy5sb29zZSlcbiAgICB9XG4gIH1cblxuICB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxuXG4gIHRlc3QgKHZlcnNpb24pIHtcbiAgICBkZWJ1ZygnQ29tcGFyYXRvci50ZXN0JywgdmVyc2lvbiwgdGhpcy5vcHRpb25zLmxvb3NlKVxuXG4gICAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkgfHwgdmVyc2lvbiA9PT0gQU5ZKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMub3B0aW9ucylcbiAgICAgIH0gY2F0Y2ggKGVyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjbXAodmVyc2lvbiwgdGhpcy5vcGVyYXRvciwgdGhpcy5zZW12ZXIsIHRoaXMub3B0aW9ucylcbiAgfVxuXG4gIGludGVyc2VjdHMgKGNvbXAsIG9wdGlvbnMpIHtcbiAgICBpZiAoIShjb21wIGluc3RhbmNlb2YgQ29tcGFyYXRvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2EgQ29tcGFyYXRvciBpcyByZXF1aXJlZCcpXG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zIHx8IHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgbG9vc2U6ICEhb3B0aW9ucyxcbiAgICAgICAgaW5jbHVkZVByZXJlbGVhc2U6IGZhbHNlLFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wZXJhdG9yID09PSAnJykge1xuICAgICAgaWYgKHRoaXMudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJhbmdlKGNvbXAudmFsdWUsIG9wdGlvbnMpLnRlc3QodGhpcy52YWx1ZSlcbiAgICB9IGVsc2UgaWYgKGNvbXAub3BlcmF0b3IgPT09ICcnKSB7XG4gICAgICBpZiAoY29tcC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUmFuZ2UodGhpcy52YWx1ZSwgb3B0aW9ucykudGVzdChjb21wLnNlbXZlcilcbiAgICB9XG5cbiAgICBjb25zdCBzYW1lRGlyZWN0aW9uSW5jcmVhc2luZyA9XG4gICAgICAodGhpcy5vcGVyYXRvciA9PT0gJz49JyB8fCB0aGlzLm9wZXJhdG9yID09PSAnPicpICYmXG4gICAgICAoY29tcC5vcGVyYXRvciA9PT0gJz49JyB8fCBjb21wLm9wZXJhdG9yID09PSAnPicpXG4gICAgY29uc3Qgc2FtZURpcmVjdGlvbkRlY3JlYXNpbmcgPVxuICAgICAgKHRoaXMub3BlcmF0b3IgPT09ICc8PScgfHwgdGhpcy5vcGVyYXRvciA9PT0gJzwnKSAmJlxuICAgICAgKGNvbXAub3BlcmF0b3IgPT09ICc8PScgfHwgY29tcC5vcGVyYXRvciA9PT0gJzwnKVxuICAgIGNvbnN0IHNhbWVTZW1WZXIgPSB0aGlzLnNlbXZlci52ZXJzaW9uID09PSBjb21wLnNlbXZlci52ZXJzaW9uXG4gICAgY29uc3QgZGlmZmVyZW50RGlyZWN0aW9uc0luY2x1c2l2ZSA9XG4gICAgICAodGhpcy5vcGVyYXRvciA9PT0gJz49JyB8fCB0aGlzLm9wZXJhdG9yID09PSAnPD0nKSAmJlxuICAgICAgKGNvbXAub3BlcmF0b3IgPT09ICc+PScgfHwgY29tcC5vcGVyYXRvciA9PT0gJzw9JylcbiAgICBjb25zdCBvcHBvc2l0ZURpcmVjdGlvbnNMZXNzVGhhbiA9XG4gICAgICBjbXAodGhpcy5zZW12ZXIsICc8JywgY29tcC5zZW12ZXIsIG9wdGlvbnMpICYmXG4gICAgICAodGhpcy5vcGVyYXRvciA9PT0gJz49JyB8fCB0aGlzLm9wZXJhdG9yID09PSAnPicpICYmXG4gICAgICAgIChjb21wLm9wZXJhdG9yID09PSAnPD0nIHx8IGNvbXAub3BlcmF0b3IgPT09ICc8JylcbiAgICBjb25zdCBvcHBvc2l0ZURpcmVjdGlvbnNHcmVhdGVyVGhhbiA9XG4gICAgICBjbXAodGhpcy5zZW12ZXIsICc+JywgY29tcC5zZW12ZXIsIG9wdGlvbnMpICYmXG4gICAgICAodGhpcy5vcGVyYXRvciA9PT0gJzw9JyB8fCB0aGlzLm9wZXJhdG9yID09PSAnPCcpICYmXG4gICAgICAgIChjb21wLm9wZXJhdG9yID09PSAnPj0nIHx8IGNvbXAub3BlcmF0b3IgPT09ICc+JylcblxuICAgIHJldHVybiAoXG4gICAgICBzYW1lRGlyZWN0aW9uSW5jcmVhc2luZyB8fFxuICAgICAgc2FtZURpcmVjdGlvbkRlY3JlYXNpbmcgfHxcbiAgICAgIChzYW1lU2VtVmVyICYmIGRpZmZlcmVudERpcmVjdGlvbnNJbmNsdXNpdmUpIHx8XG4gICAgICBvcHBvc2l0ZURpcmVjdGlvbnNMZXNzVGhhbiB8fFxuICAgICAgb3Bwb3NpdGVEaXJlY3Rpb25zR3JlYXRlclRoYW5cbiAgICApXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wYXJhdG9yXG5cbmNvbnN0IHBhcnNlT3B0aW9ucyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3BhcnNlLW9wdGlvbnMnKVxuY29uc3QgeyByZSwgdCB9ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvcmUnKVxuY29uc3QgY21wID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2NtcCcpXG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2RlYnVnJylcbmNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4vc2VtdmVyJylcbmNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi9yYW5nZScpXG4iLCIvLyBob2lzdGVkIGNsYXNzIGZvciBjeWNsaWMgZGVwZW5kZW5jeVxuY2xhc3MgUmFuZ2Uge1xuICBjb25zdHJ1Y3RvciAocmFuZ2UsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gcGFyc2VPcHRpb25zKG9wdGlvbnMpXG5cbiAgICBpZiAocmFuZ2UgaW5zdGFuY2VvZiBSYW5nZSkge1xuICAgICAgaWYgKFxuICAgICAgICByYW5nZS5sb29zZSA9PT0gISFvcHRpb25zLmxvb3NlICYmXG4gICAgICAgIHJhbmdlLmluY2x1ZGVQcmVyZWxlYXNlID09PSAhIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2VcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gcmFuZ2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UucmF3LCBvcHRpb25zKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyYW5nZSBpbnN0YW5jZW9mIENvbXBhcmF0b3IpIHtcbiAgICAgIC8vIGp1c3QgcHV0IGl0IGluIHRoZSBzZXQgYW5kIHJldHVyblxuICAgICAgdGhpcy5yYXcgPSByYW5nZS52YWx1ZVxuICAgICAgdGhpcy5zZXQgPSBbW3JhbmdlXV1cbiAgICAgIHRoaXMuZm9ybWF0KClcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMubG9vc2UgPSAhIW9wdGlvbnMubG9vc2VcbiAgICB0aGlzLmluY2x1ZGVQcmVyZWxlYXNlID0gISFvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlXG5cbiAgICAvLyBGaXJzdCwgc3BsaXQgYmFzZWQgb24gYm9vbGVhbiBvciB8fFxuICAgIHRoaXMucmF3ID0gcmFuZ2VcbiAgICB0aGlzLnNldCA9IHJhbmdlXG4gICAgICAuc3BsaXQoJ3x8JylcbiAgICAgIC8vIG1hcCB0aGUgcmFuZ2UgdG8gYSAyZCBhcnJheSBvZiBjb21wYXJhdG9yc1xuICAgICAgLm1hcChyID0+IHRoaXMucGFyc2VSYW5nZShyLnRyaW0oKSkpXG4gICAgICAvLyB0aHJvdyBvdXQgYW55IGNvbXBhcmF0b3IgbGlzdHMgdGhhdCBhcmUgZW1wdHlcbiAgICAgIC8vIHRoaXMgZ2VuZXJhbGx5IG1lYW5zIHRoYXQgaXQgd2FzIG5vdCBhIHZhbGlkIHJhbmdlLCB3aGljaCBpcyBhbGxvd2VkXG4gICAgICAvLyBpbiBsb29zZSBtb2RlLCBidXQgd2lsbCBzdGlsbCB0aHJvdyBpZiB0aGUgV0hPTEUgcmFuZ2UgaXMgaW52YWxpZC5cbiAgICAgIC5maWx0ZXIoYyA9PiBjLmxlbmd0aClcblxuICAgIGlmICghdGhpcy5zZXQubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIFNlbVZlciBSYW5nZTogJHtyYW5nZX1gKVxuICAgIH1cblxuICAgIC8vIGlmIHdlIGhhdmUgYW55IHRoYXQgYXJlIG5vdCB0aGUgbnVsbCBzZXQsIHRocm93IG91dCBudWxsIHNldHMuXG4gICAgaWYgKHRoaXMuc2V0Lmxlbmd0aCA+IDEpIHtcbiAgICAgIC8vIGtlZXAgdGhlIGZpcnN0IG9uZSwgaW4gY2FzZSB0aGV5J3JlIGFsbCBudWxsIHNldHNcbiAgICAgIGNvbnN0IGZpcnN0ID0gdGhpcy5zZXRbMF1cbiAgICAgIHRoaXMuc2V0ID0gdGhpcy5zZXQuZmlsdGVyKGMgPT4gIWlzTnVsbFNldChjWzBdKSlcbiAgICAgIGlmICh0aGlzLnNldC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5zZXQgPSBbZmlyc3RdXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2V0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBhbnkgdGhhdCBhcmUgKiwgdGhlbiB0aGUgcmFuZ2UgaXMganVzdCAqXG4gICAgICAgIGZvciAoY29uc3QgYyBvZiB0aGlzLnNldCkge1xuICAgICAgICAgIGlmIChjLmxlbmd0aCA9PT0gMSAmJiBpc0FueShjWzBdKSkge1xuICAgICAgICAgICAgdGhpcy5zZXQgPSBbY11cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtYXQoKVxuICB9XG5cbiAgZm9ybWF0ICgpIHtcbiAgICB0aGlzLnJhbmdlID0gdGhpcy5zZXRcbiAgICAgIC5tYXAoKGNvbXBzKSA9PiB7XG4gICAgICAgIHJldHVybiBjb21wcy5qb2luKCcgJykudHJpbSgpXG4gICAgICB9KVxuICAgICAgLmpvaW4oJ3x8JylcbiAgICAgIC50cmltKClcbiAgICByZXR1cm4gdGhpcy5yYW5nZVxuICB9XG5cbiAgdG9TdHJpbmcgKCkge1xuICAgIHJldHVybiB0aGlzLnJhbmdlXG4gIH1cblxuICBwYXJzZVJhbmdlIChyYW5nZSkge1xuICAgIHJhbmdlID0gcmFuZ2UudHJpbSgpXG5cbiAgICAvLyBtZW1vaXplIHJhbmdlIHBhcnNpbmcgZm9yIHBlcmZvcm1hbmNlLlxuICAgIC8vIHRoaXMgaXMgYSB2ZXJ5IGhvdCBwYXRoLCBhbmQgZnVsbHkgZGV0ZXJtaW5pc3RpYy5cbiAgICBjb25zdCBtZW1vT3B0cyA9IE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucykuam9pbignLCcpXG4gICAgY29uc3QgbWVtb0tleSA9IGBwYXJzZVJhbmdlOiR7bWVtb09wdHN9OiR7cmFuZ2V9YFxuICAgIGNvbnN0IGNhY2hlZCA9IGNhY2hlLmdldChtZW1vS2V5KVxuICAgIGlmIChjYWNoZWQpIHtcbiAgICAgIHJldHVybiBjYWNoZWRcbiAgICB9XG5cbiAgICBjb25zdCBsb29zZSA9IHRoaXMub3B0aW9ucy5sb29zZVxuICAgIC8vIGAxLjIuMyAtIDEuMi40YCA9PiBgPj0xLjIuMyA8PTEuMi40YFxuICAgIGNvbnN0IGhyID0gbG9vc2UgPyByZVt0LkhZUEhFTlJBTkdFTE9PU0VdIDogcmVbdC5IWVBIRU5SQU5HRV1cbiAgICByYW5nZSA9IHJhbmdlLnJlcGxhY2UoaHIsIGh5cGhlblJlcGxhY2UodGhpcy5vcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlKSlcbiAgICBkZWJ1ZygnaHlwaGVuIHJlcGxhY2UnLCByYW5nZSlcbiAgICAvLyBgPiAxLjIuMyA8IDEuMi41YCA9PiBgPjEuMi4zIDwxLjIuNWBcbiAgICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbdC5DT01QQVJBVE9SVFJJTV0sIGNvbXBhcmF0b3JUcmltUmVwbGFjZSlcbiAgICBkZWJ1ZygnY29tcGFyYXRvciB0cmltJywgcmFuZ2UpXG5cbiAgICAvLyBgfiAxLjIuM2AgPT4gYH4xLjIuM2BcbiAgICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbdC5USUxERVRSSU1dLCB0aWxkZVRyaW1SZXBsYWNlKVxuXG4gICAgLy8gYF4gMS4yLjNgID0+IGBeMS4yLjNgXG4gICAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW3QuQ0FSRVRUUklNXSwgY2FyZXRUcmltUmVwbGFjZSlcblxuICAgIC8vIG5vcm1hbGl6ZSBzcGFjZXNcbiAgICByYW5nZSA9IHJhbmdlLnNwbGl0KC9cXHMrLykuam9pbignICcpXG5cbiAgICAvLyBBdCB0aGlzIHBvaW50LCB0aGUgcmFuZ2UgaXMgY29tcGxldGVseSB0cmltbWVkIGFuZFxuICAgIC8vIHJlYWR5IHRvIGJlIHNwbGl0IGludG8gY29tcGFyYXRvcnMuXG5cbiAgICBsZXQgcmFuZ2VMaXN0ID0gcmFuZ2VcbiAgICAgIC5zcGxpdCgnICcpXG4gICAgICAubWFwKGNvbXAgPT4gcGFyc2VDb21wYXJhdG9yKGNvbXAsIHRoaXMub3B0aW9ucykpXG4gICAgICAuam9pbignICcpXG4gICAgICAuc3BsaXQoL1xccysvKVxuICAgICAgLy8gPj0wLjAuMCBpcyBlcXVpdmFsZW50IHRvICpcbiAgICAgIC5tYXAoY29tcCA9PiByZXBsYWNlR1RFMChjb21wLCB0aGlzLm9wdGlvbnMpKVxuXG4gICAgaWYgKGxvb3NlKSB7XG4gICAgICAvLyBpbiBsb29zZSBtb2RlLCB0aHJvdyBvdXQgYW55IHRoYXQgYXJlIG5vdCB2YWxpZCBjb21wYXJhdG9yc1xuICAgICAgcmFuZ2VMaXN0ID0gcmFuZ2VMaXN0LmZpbHRlcihjb21wID0+IHtcbiAgICAgICAgZGVidWcoJ2xvb3NlIGludmFsaWQgZmlsdGVyJywgY29tcCwgdGhpcy5vcHRpb25zKVxuICAgICAgICByZXR1cm4gISFjb21wLm1hdGNoKHJlW3QuQ09NUEFSQVRPUkxPT1NFXSlcbiAgICAgIH0pXG4gICAgfVxuICAgIGRlYnVnKCdyYW5nZSBsaXN0JywgcmFuZ2VMaXN0KVxuXG4gICAgLy8gaWYgYW55IGNvbXBhcmF0b3JzIGFyZSB0aGUgbnVsbCBzZXQsIHRoZW4gcmVwbGFjZSB3aXRoIEpVU1QgbnVsbCBzZXRcbiAgICAvLyBpZiBtb3JlIHRoYW4gb25lIGNvbXBhcmF0b3IsIHJlbW92ZSBhbnkgKiBjb21wYXJhdG9yc1xuICAgIC8vIGFsc28sIGRvbid0IGluY2x1ZGUgdGhlIHNhbWUgY29tcGFyYXRvciBtb3JlIHRoYW4gb25jZVxuICAgIGNvbnN0IHJhbmdlTWFwID0gbmV3IE1hcCgpXG4gICAgY29uc3QgY29tcGFyYXRvcnMgPSByYW5nZUxpc3QubWFwKGNvbXAgPT4gbmV3IENvbXBhcmF0b3IoY29tcCwgdGhpcy5vcHRpb25zKSlcbiAgICBmb3IgKGNvbnN0IGNvbXAgb2YgY29tcGFyYXRvcnMpIHtcbiAgICAgIGlmIChpc051bGxTZXQoY29tcCkpIHtcbiAgICAgICAgcmV0dXJuIFtjb21wXVxuICAgICAgfVxuICAgICAgcmFuZ2VNYXAuc2V0KGNvbXAudmFsdWUsIGNvbXApXG4gICAgfVxuICAgIGlmIChyYW5nZU1hcC5zaXplID4gMSAmJiByYW5nZU1hcC5oYXMoJycpKSB7XG4gICAgICByYW5nZU1hcC5kZWxldGUoJycpXG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gWy4uLnJhbmdlTWFwLnZhbHVlcygpXVxuICAgIGNhY2hlLnNldChtZW1vS2V5LCByZXN1bHQpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgaW50ZXJzZWN0cyAocmFuZ2UsIG9wdGlvbnMpIHtcbiAgICBpZiAoIShyYW5nZSBpbnN0YW5jZW9mIFJhbmdlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYSBSYW5nZSBpcyByZXF1aXJlZCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2V0LnNvbWUoKHRoaXNDb21wYXJhdG9ycykgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgaXNTYXRpc2ZpYWJsZSh0aGlzQ29tcGFyYXRvcnMsIG9wdGlvbnMpICYmXG4gICAgICAgIHJhbmdlLnNldC5zb21lKChyYW5nZUNvbXBhcmF0b3JzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGlzU2F0aXNmaWFibGUocmFuZ2VDb21wYXJhdG9ycywgb3B0aW9ucykgJiZcbiAgICAgICAgICAgIHRoaXNDb21wYXJhdG9ycy5ldmVyeSgodGhpc0NvbXBhcmF0b3IpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJhbmdlQ29tcGFyYXRvcnMuZXZlcnkoKHJhbmdlQ29tcGFyYXRvcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzQ29tcGFyYXRvci5pbnRlcnNlY3RzKHJhbmdlQ29tcGFyYXRvciwgb3B0aW9ucylcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICAvLyBpZiBBTlkgb2YgdGhlIHNldHMgbWF0Y2ggQUxMIG9mIGl0cyBjb21wYXJhdG9ycywgdGhlbiBwYXNzXG4gIHRlc3QgKHZlcnNpb24pIHtcbiAgICBpZiAoIXZlcnNpb24pIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMub3B0aW9ucylcbiAgICAgIH0gY2F0Y2ggKGVyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0ZXN0U2V0KHRoaXMuc2V0W2ldLCB2ZXJzaW9uLCB0aGlzLm9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFJhbmdlXG5cbmNvbnN0IExSVSA9IHJlcXVpcmUoJ2xydS1jYWNoZScpXG5jb25zdCBjYWNoZSA9IG5ldyBMUlUoeyBtYXg6IDEwMDAgfSlcblxuY29uc3QgcGFyc2VPcHRpb25zID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvcGFyc2Utb3B0aW9ucycpXG5jb25zdCBDb21wYXJhdG9yID0gcmVxdWlyZSgnLi9jb21wYXJhdG9yJylcbmNvbnN0IGRlYnVnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvZGVidWcnKVxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi9zZW12ZXInKVxuY29uc3Qge1xuICByZSxcbiAgdCxcbiAgY29tcGFyYXRvclRyaW1SZXBsYWNlLFxuICB0aWxkZVRyaW1SZXBsYWNlLFxuICBjYXJldFRyaW1SZXBsYWNlLFxufSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3JlJylcblxuY29uc3QgaXNOdWxsU2V0ID0gYyA9PiBjLnZhbHVlID09PSAnPDAuMC4wLTAnXG5jb25zdCBpc0FueSA9IGMgPT4gYy52YWx1ZSA9PT0gJydcblxuLy8gdGFrZSBhIHNldCBvZiBjb21wYXJhdG9ycyBhbmQgZGV0ZXJtaW5lIHdoZXRoZXIgdGhlcmVcbi8vIGV4aXN0cyBhIHZlcnNpb24gd2hpY2ggY2FuIHNhdGlzZnkgaXRcbmNvbnN0IGlzU2F0aXNmaWFibGUgPSAoY29tcGFyYXRvcnMsIG9wdGlvbnMpID0+IHtcbiAgbGV0IHJlc3VsdCA9IHRydWVcbiAgY29uc3QgcmVtYWluaW5nQ29tcGFyYXRvcnMgPSBjb21wYXJhdG9ycy5zbGljZSgpXG4gIGxldCB0ZXN0Q29tcGFyYXRvciA9IHJlbWFpbmluZ0NvbXBhcmF0b3JzLnBvcCgpXG5cbiAgd2hpbGUgKHJlc3VsdCAmJiByZW1haW5pbmdDb21wYXJhdG9ycy5sZW5ndGgpIHtcbiAgICByZXN1bHQgPSByZW1haW5pbmdDb21wYXJhdG9ycy5ldmVyeSgob3RoZXJDb21wYXJhdG9yKSA9PiB7XG4gICAgICByZXR1cm4gdGVzdENvbXBhcmF0b3IuaW50ZXJzZWN0cyhvdGhlckNvbXBhcmF0b3IsIG9wdGlvbnMpXG4gICAgfSlcblxuICAgIHRlc3RDb21wYXJhdG9yID0gcmVtYWluaW5nQ29tcGFyYXRvcnMucG9wKClcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLy8gY29tcHJpc2VkIG9mIHhyYW5nZXMsIHRpbGRlcywgc3RhcnMsIGFuZCBndGx0J3MgYXQgdGhpcyBwb2ludC5cbi8vIGFscmVhZHkgcmVwbGFjZWQgdGhlIGh5cGhlbiByYW5nZXNcbi8vIHR1cm4gaW50byBhIHNldCBvZiBKVVNUIGNvbXBhcmF0b3JzLlxuY29uc3QgcGFyc2VDb21wYXJhdG9yID0gKGNvbXAsIG9wdGlvbnMpID0+IHtcbiAgZGVidWcoJ2NvbXAnLCBjb21wLCBvcHRpb25zKVxuICBjb21wID0gcmVwbGFjZUNhcmV0cyhjb21wLCBvcHRpb25zKVxuICBkZWJ1ZygnY2FyZXQnLCBjb21wKVxuICBjb21wID0gcmVwbGFjZVRpbGRlcyhjb21wLCBvcHRpb25zKVxuICBkZWJ1ZygndGlsZGVzJywgY29tcClcbiAgY29tcCA9IHJlcGxhY2VYUmFuZ2VzKGNvbXAsIG9wdGlvbnMpXG4gIGRlYnVnKCd4cmFuZ2UnLCBjb21wKVxuICBjb21wID0gcmVwbGFjZVN0YXJzKGNvbXAsIG9wdGlvbnMpXG4gIGRlYnVnKCdzdGFycycsIGNvbXApXG4gIHJldHVybiBjb21wXG59XG5cbmNvbnN0IGlzWCA9IGlkID0+ICFpZCB8fCBpZC50b0xvd2VyQ2FzZSgpID09PSAneCcgfHwgaWQgPT09ICcqJ1xuXG4vLyB+LCB+PiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIH4yLCB+Mi54LCB+Mi54LngsIH4+Miwgfj4yLnggfj4yLngueCAtLT4gPj0yLjAuMCA8My4wLjAtMFxuLy8gfjIuMCwgfjIuMC54LCB+PjIuMCwgfj4yLjAueCAtLT4gPj0yLjAuMCA8Mi4xLjAtMFxuLy8gfjEuMiwgfjEuMi54LCB+PjEuMiwgfj4xLjIueCAtLT4gPj0xLjIuMCA8MS4zLjAtMFxuLy8gfjEuMi4zLCB+PjEuMi4zIC0tPiA+PTEuMi4zIDwxLjMuMC0wXG4vLyB+MS4yLjAsIH4+MS4yLjAgLS0+ID49MS4yLjAgPDEuMy4wLTBcbmNvbnN0IHJlcGxhY2VUaWxkZXMgPSAoY29tcCwgb3B0aW9ucykgPT5cbiAgY29tcC50cmltKCkuc3BsaXQoL1xccysvKS5tYXAoKGMpID0+IHtcbiAgICByZXR1cm4gcmVwbGFjZVRpbGRlKGMsIG9wdGlvbnMpXG4gIH0pLmpvaW4oJyAnKVxuXG5jb25zdCByZXBsYWNlVGlsZGUgPSAoY29tcCwgb3B0aW9ucykgPT4ge1xuICBjb25zdCByID0gb3B0aW9ucy5sb29zZSA/IHJlW3QuVElMREVMT09TRV0gOiByZVt0LlRJTERFXVxuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIChfLCBNLCBtLCBwLCBwcikgPT4ge1xuICAgIGRlYnVnKCd0aWxkZScsIGNvbXAsIF8sIE0sIG0sIHAsIHByKVxuICAgIGxldCByZXRcblxuICAgIGlmIChpc1goTSkpIHtcbiAgICAgIHJldCA9ICcnXG4gICAgfSBlbHNlIGlmIChpc1gobSkpIHtcbiAgICAgIHJldCA9IGA+PSR7TX0uMC4wIDwkeytNICsgMX0uMC4wLTBgXG4gICAgfSBlbHNlIGlmIChpc1gocCkpIHtcbiAgICAgIC8vIH4xLjIgPT0gPj0xLjIuMCA8MS4zLjAtMFxuICAgICAgcmV0ID0gYD49JHtNfS4ke219LjAgPCR7TX0uJHsrbSArIDF9LjAtMGBcbiAgICB9IGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZVRpbGRlIHByJywgcHIpXG4gICAgICByZXQgPSBgPj0ke019LiR7bX0uJHtwfS0ke3ByXG4gICAgICB9IDwke019LiR7K20gKyAxfS4wLTBgXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIH4xLjIuMyA9PSA+PTEuMi4zIDwxLjMuMC0wXG4gICAgICByZXQgPSBgPj0ke019LiR7bX0uJHtwXG4gICAgICB9IDwke019LiR7K20gKyAxfS4wLTBgXG4gICAgfVxuXG4gICAgZGVidWcoJ3RpbGRlIHJldHVybicsIHJldClcbiAgICByZXR1cm4gcmV0XG4gIH0pXG59XG5cbi8vIF4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyBeMiwgXjIueCwgXjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMC0wXG4vLyBeMi4wLCBeMi4wLnggLS0+ID49Mi4wLjAgPDMuMC4wLTBcbi8vIF4xLjIsIF4xLjIueCAtLT4gPj0xLjIuMCA8Mi4wLjAtMFxuLy8gXjEuMi4zIC0tPiA+PTEuMi4zIDwyLjAuMC0wXG4vLyBeMS4yLjAgLS0+ID49MS4yLjAgPDIuMC4wLTBcbmNvbnN0IHJlcGxhY2VDYXJldHMgPSAoY29tcCwgb3B0aW9ucykgPT5cbiAgY29tcC50cmltKCkuc3BsaXQoL1xccysvKS5tYXAoKGMpID0+IHtcbiAgICByZXR1cm4gcmVwbGFjZUNhcmV0KGMsIG9wdGlvbnMpXG4gIH0pLmpvaW4oJyAnKVxuXG5jb25zdCByZXBsYWNlQ2FyZXQgPSAoY29tcCwgb3B0aW9ucykgPT4ge1xuICBkZWJ1ZygnY2FyZXQnLCBjb21wLCBvcHRpb25zKVxuICBjb25zdCByID0gb3B0aW9ucy5sb29zZSA/IHJlW3QuQ0FSRVRMT09TRV0gOiByZVt0LkNBUkVUXVxuICBjb25zdCB6ID0gb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSA/ICctMCcgOiAnJ1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIChfLCBNLCBtLCBwLCBwcikgPT4ge1xuICAgIGRlYnVnKCdjYXJldCcsIGNvbXAsIF8sIE0sIG0sIHAsIHByKVxuICAgIGxldCByZXRcblxuICAgIGlmIChpc1goTSkpIHtcbiAgICAgIHJldCA9ICcnXG4gICAgfSBlbHNlIGlmIChpc1gobSkpIHtcbiAgICAgIHJldCA9IGA+PSR7TX0uMC4wJHt6fSA8JHsrTSArIDF9LjAuMC0wYFxuICAgIH0gZWxzZSBpZiAoaXNYKHApKSB7XG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4wJHt6fSA8JHtNfS4keyttICsgMX0uMC0wYFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gYD49JHtNfS4ke219LjAke3p9IDwkeytNICsgMX0uMC4wLTBgXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VDYXJldCBwcicsIHByKVxuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKSB7XG4gICAgICAgICAgcmV0ID0gYD49JHtNfS4ke219LiR7cH0tJHtwclxuICAgICAgICAgIH0gPCR7TX0uJHttfS4keytwICsgMX0tMGBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXQgPSBgPj0ke019LiR7bX0uJHtwfS0ke3ByXG4gICAgICAgICAgfSA8JHtNfS4keyttICsgMX0uMC0wYFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSBgPj0ke019LiR7bX0uJHtwfS0ke3ByXG4gICAgICAgIH0gPCR7K00gKyAxfS4wLjAtMGBcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWcoJ25vIHByJylcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJykge1xuICAgICAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4ke3BcbiAgICAgICAgICB9JHt6fSA8JHtNfS4ke219LiR7K3AgKyAxfS0wYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4ke3BcbiAgICAgICAgICB9JHt6fSA8JHtNfS4keyttICsgMX0uMC0wYFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSBgPj0ke019LiR7bX0uJHtwXG4gICAgICAgIH0gPCR7K00gKyAxfS4wLjAtMGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkZWJ1ZygnY2FyZXQgcmV0dXJuJywgcmV0KVxuICAgIHJldHVybiByZXRcbiAgfSlcbn1cblxuY29uc3QgcmVwbGFjZVhSYW5nZXMgPSAoY29tcCwgb3B0aW9ucykgPT4ge1xuICBkZWJ1ZygncmVwbGFjZVhSYW5nZXMnLCBjb21wLCBvcHRpb25zKVxuICByZXR1cm4gY29tcC5zcGxpdCgvXFxzKy8pLm1hcCgoYykgPT4ge1xuICAgIHJldHVybiByZXBsYWNlWFJhbmdlKGMsIG9wdGlvbnMpXG4gIH0pLmpvaW4oJyAnKVxufVxuXG5jb25zdCByZXBsYWNlWFJhbmdlID0gKGNvbXAsIG9wdGlvbnMpID0+IHtcbiAgY29tcCA9IGNvbXAudHJpbSgpXG4gIGNvbnN0IHIgPSBvcHRpb25zLmxvb3NlID8gcmVbdC5YUkFOR0VMT09TRV0gOiByZVt0LlhSQU5HRV1cbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCAocmV0LCBndGx0LCBNLCBtLCBwLCBwcikgPT4ge1xuICAgIGRlYnVnKCd4UmFuZ2UnLCBjb21wLCByZXQsIGd0bHQsIE0sIG0sIHAsIHByKVxuICAgIGNvbnN0IHhNID0gaXNYKE0pXG4gICAgY29uc3QgeG0gPSB4TSB8fCBpc1gobSlcbiAgICBjb25zdCB4cCA9IHhtIHx8IGlzWChwKVxuICAgIGNvbnN0IGFueVggPSB4cFxuXG4gICAgaWYgKGd0bHQgPT09ICc9JyAmJiBhbnlYKSB7XG4gICAgICBndGx0ID0gJydcbiAgICB9XG5cbiAgICAvLyBpZiB3ZSdyZSBpbmNsdWRpbmcgcHJlcmVsZWFzZXMgaW4gdGhlIG1hdGNoLCB0aGVuIHdlIG5lZWRcbiAgICAvLyB0byBmaXggdGhpcyB0byAtMCwgdGhlIGxvd2VzdCBwb3NzaWJsZSBwcmVyZWxlYXNlIHZhbHVlXG4gICAgcHIgPSBvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlID8gJy0wJyA6ICcnXG5cbiAgICBpZiAoeE0pIHtcbiAgICAgIGlmIChndGx0ID09PSAnPicgfHwgZ3RsdCA9PT0gJzwnKSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgYWxsb3dlZFxuICAgICAgICByZXQgPSAnPDAuMC4wLTAnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub3RoaW5nIGlzIGZvcmJpZGRlblxuICAgICAgICByZXQgPSAnKidcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGd0bHQgJiYgYW55WCkge1xuICAgICAgLy8gd2Uga25vdyBwYXRjaCBpcyBhbiB4LCBiZWNhdXNlIHdlIGhhdmUgYW55IHggYXQgYWxsLlxuICAgICAgLy8gcmVwbGFjZSBYIHdpdGggMFxuICAgICAgaWYgKHhtKSB7XG4gICAgICAgIG0gPSAwXG4gICAgICB9XG4gICAgICBwID0gMFxuXG4gICAgICBpZiAoZ3RsdCA9PT0gJz4nKSB7XG4gICAgICAgIC8vID4xID0+ID49Mi4wLjBcbiAgICAgICAgLy8gPjEuMiA9PiA+PTEuMy4wXG4gICAgICAgIGd0bHQgPSAnPj0nXG4gICAgICAgIGlmICh4bSkge1xuICAgICAgICAgIE0gPSArTSArIDFcbiAgICAgICAgICBtID0gMFxuICAgICAgICAgIHAgPSAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbSA9ICttICsgMVxuICAgICAgICAgIHAgPSAwXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZ3RsdCA9PT0gJzw9Jykge1xuICAgICAgICAvLyA8PTAuNy54IGlzIGFjdHVhbGx5IDwwLjguMCwgc2luY2UgYW55IDAuNy54IHNob3VsZFxuICAgICAgICAvLyBwYXNzLiAgU2ltaWxhcmx5LCA8PTcueCBpcyBhY3R1YWxseSA8OC4wLjAsIGV0Yy5cbiAgICAgICAgZ3RsdCA9ICc8J1xuICAgICAgICBpZiAoeG0pIHtcbiAgICAgICAgICBNID0gK00gKyAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbSA9ICttICsgMVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChndGx0ID09PSAnPCcpIHtcbiAgICAgICAgcHIgPSAnLTAnXG4gICAgICB9XG5cbiAgICAgIHJldCA9IGAke2d0bHQgKyBNfS4ke219LiR7cH0ke3ByfWBcbiAgICB9IGVsc2UgaWYgKHhtKSB7XG4gICAgICByZXQgPSBgPj0ke019LjAuMCR7cHJ9IDwkeytNICsgMX0uMC4wLTBgXG4gICAgfSBlbHNlIGlmICh4cCkge1xuICAgICAgcmV0ID0gYD49JHtNfS4ke219LjAke3ByXG4gICAgICB9IDwke019LiR7K20gKyAxfS4wLTBgXG4gICAgfVxuXG4gICAgZGVidWcoJ3hSYW5nZSByZXR1cm4nLCByZXQpXG5cbiAgICByZXR1cm4gcmV0XG4gIH0pXG59XG5cbi8vIEJlY2F1c2UgKiBpcyBBTkQtZWQgd2l0aCBldmVyeXRoaW5nIGVsc2UgaW4gdGhlIGNvbXBhcmF0b3IsXG4vLyBhbmQgJycgbWVhbnMgXCJhbnkgdmVyc2lvblwiLCBqdXN0IHJlbW92ZSB0aGUgKnMgZW50aXJlbHkuXG5jb25zdCByZXBsYWNlU3RhcnMgPSAoY29tcCwgb3B0aW9ucykgPT4ge1xuICBkZWJ1ZygncmVwbGFjZVN0YXJzJywgY29tcCwgb3B0aW9ucylcbiAgLy8gTG9vc2VuZXNzIGlzIGlnbm9yZWQgaGVyZS4gIHN0YXIgaXMgYWx3YXlzIGFzIGxvb3NlIGFzIGl0IGdldHMhXG4gIHJldHVybiBjb21wLnRyaW0oKS5yZXBsYWNlKHJlW3QuU1RBUl0sICcnKVxufVxuXG5jb25zdCByZXBsYWNlR1RFMCA9IChjb21wLCBvcHRpb25zKSA9PiB7XG4gIGRlYnVnKCdyZXBsYWNlR1RFMCcsIGNvbXAsIG9wdGlvbnMpXG4gIHJldHVybiBjb21wLnRyaW0oKVxuICAgIC5yZXBsYWNlKHJlW29wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UgPyB0LkdURTBQUkUgOiB0LkdURTBdLCAnJylcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgdG8gc3RyaW5nLnJlcGxhY2UocmVbdC5IWVBIRU5SQU5HRV0pXG4vLyBNLCBtLCBwYXRjaCwgcHJlcmVsZWFzZSwgYnVpbGRcbi8vIDEuMiAtIDMuNC41ID0+ID49MS4yLjAgPD0zLjQuNVxuLy8gMS4yLjMgLSAzLjQgPT4gPj0xLjIuMCA8My41LjAtMCBBbnkgMy40Lnggd2lsbCBkb1xuLy8gMS4yIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wLTBcbmNvbnN0IGh5cGhlblJlcGxhY2UgPSBpbmNQciA9PiAoJDAsXG4gIGZyb20sIGZNLCBmbSwgZnAsIGZwciwgZmIsXG4gIHRvLCB0TSwgdG0sIHRwLCB0cHIsIHRiKSA9PiB7XG4gIGlmIChpc1goZk0pKSB7XG4gICAgZnJvbSA9ICcnXG4gIH0gZWxzZSBpZiAoaXNYKGZtKSkge1xuICAgIGZyb20gPSBgPj0ke2ZNfS4wLjAke2luY1ByID8gJy0wJyA6ICcnfWBcbiAgfSBlbHNlIGlmIChpc1goZnApKSB7XG4gICAgZnJvbSA9IGA+PSR7Zk19LiR7Zm19LjAke2luY1ByID8gJy0wJyA6ICcnfWBcbiAgfSBlbHNlIGlmIChmcHIpIHtcbiAgICBmcm9tID0gYD49JHtmcm9tfWBcbiAgfSBlbHNlIHtcbiAgICBmcm9tID0gYD49JHtmcm9tfSR7aW5jUHIgPyAnLTAnIDogJyd9YFxuICB9XG5cbiAgaWYgKGlzWCh0TSkpIHtcbiAgICB0byA9ICcnXG4gIH0gZWxzZSBpZiAoaXNYKHRtKSkge1xuICAgIHRvID0gYDwkeyt0TSArIDF9LjAuMC0wYFxuICB9IGVsc2UgaWYgKGlzWCh0cCkpIHtcbiAgICB0byA9IGA8JHt0TX0uJHsrdG0gKyAxfS4wLTBgXG4gIH0gZWxzZSBpZiAodHByKSB7XG4gICAgdG8gPSBgPD0ke3RNfS4ke3RtfS4ke3RwfS0ke3Rwcn1gXG4gIH0gZWxzZSBpZiAoaW5jUHIpIHtcbiAgICB0byA9IGA8JHt0TX0uJHt0bX0uJHsrdHAgKyAxfS0wYFxuICB9IGVsc2Uge1xuICAgIHRvID0gYDw9JHt0b31gXG4gIH1cblxuICByZXR1cm4gKGAke2Zyb219ICR7dG99YCkudHJpbSgpXG59XG5cbmNvbnN0IHRlc3RTZXQgPSAoc2V0LCB2ZXJzaW9uLCBvcHRpb25zKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFzZXRbaV0udGVzdCh2ZXJzaW9uKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgaWYgKHZlcnNpb24ucHJlcmVsZWFzZS5sZW5ndGggJiYgIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UpIHtcbiAgICAvLyBGaW5kIHRoZSBzZXQgb2YgdmVyc2lvbnMgdGhhdCBhcmUgYWxsb3dlZCB0byBoYXZlIHByZXJlbGVhc2VzXG4gICAgLy8gRm9yIGV4YW1wbGUsIF4xLjIuMy1wci4xIGRlc3VnYXJzIHRvID49MS4yLjMtcHIuMSA8Mi4wLjBcbiAgICAvLyBUaGF0IHNob3VsZCBhbGxvdyBgMS4yLjMtcHIuMmAgdG8gcGFzcy5cbiAgICAvLyBIb3dldmVyLCBgMS4yLjQtYWxwaGEubm90cmVhZHlgIHNob3VsZCBOT1QgYmUgYWxsb3dlZCxcbiAgICAvLyBldmVuIHRob3VnaCBpdCdzIHdpdGhpbiB0aGUgcmFuZ2Ugc2V0IGJ5IHRoZSBjb21wYXJhdG9ycy5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgICAgZGVidWcoc2V0W2ldLnNlbXZlcilcbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyID09PSBDb21wYXJhdG9yLkFOWSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAoc2V0W2ldLnNlbXZlci5wcmVyZWxlYXNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgYWxsb3dlZCA9IHNldFtpXS5zZW12ZXJcbiAgICAgICAgaWYgKGFsbG93ZWQubWFqb3IgPT09IHZlcnNpb24ubWFqb3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQubWlub3IgPT09IHZlcnNpb24ubWlub3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQucGF0Y2ggPT09IHZlcnNpb24ucGF0Y2gpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVmVyc2lvbiBoYXMgYSAtcHJlLCBidXQgaXQncyBub3Qgb25lIG9mIHRoZSBvbmVzIHdlIGxpa2UuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuIiwiY29uc3QgZGVidWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9kZWJ1ZycpXG5jb25zdCB7IE1BWF9MRU5HVEgsIE1BWF9TQUZFX0lOVEVHRVIgfSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2NvbnN0YW50cycpXG5jb25zdCB7IHJlLCB0IH0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9yZScpXG5cbmNvbnN0IHBhcnNlT3B0aW9ucyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3BhcnNlLW9wdGlvbnMnKVxuY29uc3QgeyBjb21wYXJlSWRlbnRpZmllcnMgfSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lkZW50aWZpZXJzJylcbmNsYXNzIFNlbVZlciB7XG4gIGNvbnN0cnVjdG9yICh2ZXJzaW9uLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHBhcnNlT3B0aW9ucyhvcHRpb25zKVxuXG4gICAgaWYgKHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIpIHtcbiAgICAgIGlmICh2ZXJzaW9uLmxvb3NlID09PSAhIW9wdGlvbnMubG9vc2UgJiZcbiAgICAgICAgICB2ZXJzaW9uLmluY2x1ZGVQcmVyZWxlYXNlID09PSAhIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UpIHtcbiAgICAgICAgcmV0dXJuIHZlcnNpb25cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcnNpb24gPSB2ZXJzaW9uLnZlcnNpb25cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBWZXJzaW9uOiAke3ZlcnNpb259YClcbiAgICB9XG5cbiAgICBpZiAodmVyc2lvbi5sZW5ndGggPiBNQVhfTEVOR1RIKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBgdmVyc2lvbiBpcyBsb25nZXIgdGhhbiAke01BWF9MRU5HVEh9IGNoYXJhY3RlcnNgXG4gICAgICApXG4gICAgfVxuXG4gICAgZGVidWcoJ1NlbVZlcicsIHZlcnNpb24sIG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMubG9vc2UgPSAhIW9wdGlvbnMubG9vc2VcbiAgICAvLyB0aGlzIGlzbid0IGFjdHVhbGx5IHJlbGV2YW50IGZvciB2ZXJzaW9ucywgYnV0IGtlZXAgaXQgc28gdGhhdCB3ZVxuICAgIC8vIGRvbid0IHJ1biBpbnRvIHRyb3VibGUgcGFzc2luZyB0aGlzLm9wdGlvbnMgYXJvdW5kLlxuICAgIHRoaXMuaW5jbHVkZVByZXJlbGVhc2UgPSAhIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2VcblxuICAgIGNvbnN0IG0gPSB2ZXJzaW9uLnRyaW0oKS5tYXRjaChvcHRpb25zLmxvb3NlID8gcmVbdC5MT09TRV0gOiByZVt0LkZVTExdKVxuXG4gICAgaWYgKCFtKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIFZlcnNpb246ICR7dmVyc2lvbn1gKVxuICAgIH1cblxuICAgIHRoaXMucmF3ID0gdmVyc2lvblxuXG4gICAgLy8gdGhlc2UgYXJlIGFjdHVhbGx5IG51bWJlcnNcbiAgICB0aGlzLm1ham9yID0gK21bMV1cbiAgICB0aGlzLm1pbm9yID0gK21bMl1cbiAgICB0aGlzLnBhdGNoID0gK21bM11cblxuICAgIGlmICh0aGlzLm1ham9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1ham9yIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBtYWpvciB2ZXJzaW9uJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5taW5vciA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5taW5vciA8IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWlub3IgdmVyc2lvbicpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGF0Y2ggPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMucGF0Y2ggPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHBhdGNoIHZlcnNpb24nKVxuICAgIH1cblxuICAgIC8vIG51bWJlcmlmeSBhbnkgcHJlcmVsZWFzZSBudW1lcmljIGlkc1xuICAgIGlmICghbVs0XSkge1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW11cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gbVs0XS5zcGxpdCgnLicpLm1hcCgoaWQpID0+IHtcbiAgICAgICAgaWYgKC9eWzAtOV0rJC8udGVzdChpZCkpIHtcbiAgICAgICAgICBjb25zdCBudW0gPSAraWRcbiAgICAgICAgICBpZiAobnVtID49IDAgJiYgbnVtIDwgTUFYX1NBRkVfSU5URUdFUikge1xuICAgICAgICAgICAgcmV0dXJuIG51bVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWRcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5idWlsZCA9IG1bNV0gPyBtWzVdLnNwbGl0KCcuJykgOiBbXVxuICAgIHRoaXMuZm9ybWF0KClcbiAgfVxuXG4gIGZvcm1hdCAoKSB7XG4gICAgdGhpcy52ZXJzaW9uID0gYCR7dGhpcy5tYWpvcn0uJHt0aGlzLm1pbm9yfS4ke3RoaXMucGF0Y2h9YFxuICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgICB0aGlzLnZlcnNpb24gKz0gYC0ke3RoaXMucHJlcmVsZWFzZS5qb2luKCcuJyl9YFxuICAgIH1cbiAgICByZXR1cm4gdGhpcy52ZXJzaW9uXG4gIH1cblxuICB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyc2lvblxuICB9XG5cbiAgY29tcGFyZSAob3RoZXIpIHtcbiAgICBkZWJ1ZygnU2VtVmVyLmNvbXBhcmUnLCB0aGlzLnZlcnNpb24sIHRoaXMub3B0aW9ucywgb3RoZXIpXG4gICAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKSB7XG4gICAgICBpZiAodHlwZW9mIG90aGVyID09PSAnc3RyaW5nJyAmJiBvdGhlciA9PT0gdGhpcy52ZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9XG4gICAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMub3B0aW9ucylcbiAgICB9XG5cbiAgICBpZiAob3RoZXIudmVyc2lvbiA9PT0gdGhpcy52ZXJzaW9uKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNvbXBhcmVNYWluKG90aGVyKSB8fCB0aGlzLmNvbXBhcmVQcmUob3RoZXIpXG4gIH1cblxuICBjb21wYXJlTWFpbiAob3RoZXIpIHtcbiAgICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpIHtcbiAgICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5vcHRpb25zKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICBjb21wYXJlSWRlbnRpZmllcnModGhpcy5tYWpvciwgb3RoZXIubWFqb3IpIHx8XG4gICAgICBjb21wYXJlSWRlbnRpZmllcnModGhpcy5taW5vciwgb3RoZXIubWlub3IpIHx8XG4gICAgICBjb21wYXJlSWRlbnRpZmllcnModGhpcy5wYXRjaCwgb3RoZXIucGF0Y2gpXG4gICAgKVxuICB9XG5cbiAgY29tcGFyZVByZSAob3RoZXIpIHtcbiAgICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpIHtcbiAgICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5vcHRpb25zKVxuICAgIH1cblxuICAgIC8vIE5PVCBoYXZpbmcgYSBwcmVyZWxlYXNlIGlzID4gaGF2aW5nIG9uZVxuICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfSBlbHNlIGlmICghdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiBvdGhlci5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIDFcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICBsZXQgaSA9IDBcbiAgICBkbyB7XG4gICAgICBjb25zdCBhID0gdGhpcy5wcmVyZWxlYXNlW2ldXG4gICAgICBjb25zdCBiID0gb3RoZXIucHJlcmVsZWFzZVtpXVxuICAgICAgZGVidWcoJ3ByZXJlbGVhc2UgY29tcGFyZScsIGksIGEsIGIpXG4gICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkICYmIGIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfSBlbHNlIGlmIChiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICAgIH0gZWxzZSBpZiAoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfSBlbHNlIGlmIChhID09PSBiKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpXG4gICAgICB9XG4gICAgfSB3aGlsZSAoKytpKVxuICB9XG5cbiAgY29tcGFyZUJ1aWxkIChvdGhlcikge1xuICAgIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSkge1xuICAgICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLm9wdGlvbnMpXG4gICAgfVxuXG4gICAgbGV0IGkgPSAwXG4gICAgZG8ge1xuICAgICAgY29uc3QgYSA9IHRoaXMuYnVpbGRbaV1cbiAgICAgIGNvbnN0IGIgPSBvdGhlci5idWlsZFtpXVxuICAgICAgZGVidWcoJ3ByZXJlbGVhc2UgY29tcGFyZScsIGksIGEsIGIpXG4gICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkICYmIGIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfSBlbHNlIGlmIChiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICAgIH0gZWxzZSBpZiAoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfSBlbHNlIGlmIChhID09PSBiKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpXG4gICAgICB9XG4gICAgfSB3aGlsZSAoKytpKVxuICB9XG5cbiAgLy8gcHJlbWlub3Igd2lsbCBidW1wIHRoZSB2ZXJzaW9uIHVwIHRvIHRoZSBuZXh0IG1pbm9yIHJlbGVhc2UsIGFuZCBpbW1lZGlhdGVseVxuICAvLyBkb3duIHRvIHByZS1yZWxlYXNlLiBwcmVtYWpvciBhbmQgcHJlcGF0Y2ggd29yayB0aGUgc2FtZSB3YXkuXG4gIGluYyAocmVsZWFzZSwgaWRlbnRpZmllcikge1xuICAgIHN3aXRjaCAocmVsZWFzZSkge1xuICAgICAgY2FzZSAncHJlbWFqb3InOlxuICAgICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMFxuICAgICAgICB0aGlzLnBhdGNoID0gMFxuICAgICAgICB0aGlzLm1pbm9yID0gMFxuICAgICAgICB0aGlzLm1ham9yKytcbiAgICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwcmVtaW5vcic6XG4gICAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwXG4gICAgICAgIHRoaXMucGF0Y2ggPSAwXG4gICAgICAgIHRoaXMubWlub3IrK1xuICAgICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcilcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3ByZXBhdGNoJzpcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhbHJlYWR5IGEgcHJlcmVsZWFzZSwgaXQgd2lsbCBidW1wIHRvIHRoZSBuZXh0IHZlcnNpb25cbiAgICAgICAgLy8gZHJvcCBhbnkgcHJlcmVsZWFzZXMgdGhhdCBtaWdodCBhbHJlYWR5IGV4aXN0LCBzaW5jZSB0aGV5IGFyZSBub3RcbiAgICAgICAgLy8gcmVsZXZhbnQgYXQgdGhpcyBwb2ludC5cbiAgICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDBcbiAgICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcilcbiAgICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpXG4gICAgICAgIGJyZWFrXG4gICAgICAvLyBJZiB0aGUgaW5wdXQgaXMgYSBub24tcHJlcmVsZWFzZSB2ZXJzaW9uLCB0aGlzIGFjdHMgdGhlIHNhbWUgYXNcbiAgICAgIC8vIHByZXBhdGNoLlxuICAgICAgY2FzZSAncHJlcmVsZWFzZSc6XG4gICAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcilcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcilcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnbWFqb3InOlxuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgcHJlLW1ham9yIHZlcnNpb24sIGJ1bXAgdXAgdG8gdGhlIHNhbWUgbWFqb3IgdmVyc2lvbi5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtYWpvci5cbiAgICAgICAgLy8gMS4wLjAtNSBidW1wcyB0byAxLjAuMFxuICAgICAgICAvLyAxLjEuMCBidW1wcyB0byAyLjAuMFxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5taW5vciAhPT0gMCB8fFxuICAgICAgICAgIHRoaXMucGF0Y2ggIT09IDAgfHxcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMubWFqb3IrK1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWlub3IgPSAwXG4gICAgICAgIHRoaXMucGF0Y2ggPSAwXG4gICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtaW5vcic6XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWlub3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtaW5vciB2ZXJzaW9uLlxuICAgICAgICAvLyBPdGhlcndpc2UgaW5jcmVtZW50IG1pbm9yLlxuICAgICAgICAvLyAxLjIuMC01IGJ1bXBzIHRvIDEuMi4wXG4gICAgICAgIC8vIDEuMi4xIGJ1bXBzIHRvIDEuMy4wXG4gICAgICAgIGlmICh0aGlzLnBhdGNoICE9PSAwIHx8IHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLm1pbm9yKytcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhdGNoID0gMFxuICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncGF0Y2gnOlxuICAgICAgICAvLyBJZiB0aGlzIGlzIG5vdCBhIHByZS1yZWxlYXNlIHZlcnNpb24sIGl0IHdpbGwgaW5jcmVtZW50IHRoZSBwYXRjaC5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSBwcmUtcmVsZWFzZSBpdCB3aWxsIGJ1bXAgdXAgdG8gdGhlIHNhbWUgcGF0Y2ggdmVyc2lvbi5cbiAgICAgICAgLy8gMS4yLjAtNSBwYXRjaGVzIHRvIDEuMi4wXG4gICAgICAgIC8vIDEuMi4wIHBhdGNoZXMgdG8gMS4yLjFcbiAgICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnBhdGNoKytcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXVxuICAgICAgICBicmVha1xuICAgICAgLy8gVGhpcyBwcm9iYWJseSBzaG91bGRuJ3QgYmUgdXNlZCBwdWJsaWNseS5cbiAgICAgIC8vIDEuMC4wICdwcmUnIHdvdWxkIGJlY29tZSAxLjAuMC0wIHdoaWNoIGlzIHRoZSB3cm9uZyBkaXJlY3Rpb24uXG4gICAgICBjYXNlICdwcmUnOlxuICAgICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFswXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBpID0gdGhpcy5wcmVyZWxlYXNlLmxlbmd0aFxuICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByZXJlbGVhc2VbaV0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZVtpXSsrXG4gICAgICAgICAgICAgIGkgPSAtMlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vIGRpZG4ndCBpbmNyZW1lbnQgYW55dGhpbmdcbiAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZS5wdXNoKDApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpZGVudGlmaWVyKSB7XG4gICAgICAgICAgLy8gMS4yLjAtYmV0YS4xIGJ1bXBzIHRvIDEuMi4wLWJldGEuMixcbiAgICAgICAgICAvLyAxLjIuMC1iZXRhLmZvb2JseiBvciAxLjIuMC1iZXRhIGJ1bXBzIHRvIDEuMi4wLWJldGEuMFxuICAgICAgICAgIGlmIChjb21wYXJlSWRlbnRpZmllcnModGhpcy5wcmVyZWxlYXNlWzBdLCBpZGVudGlmaWVyKSA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKGlzTmFOKHRoaXMucHJlcmVsZWFzZVsxXSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtpZGVudGlmaWVyLCAwXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgaW5jcmVtZW50IGFyZ3VtZW50OiAke3JlbGVhc2V9YClcbiAgICB9XG4gICAgdGhpcy5mb3JtYXQoKVxuICAgIHRoaXMucmF3ID0gdGhpcy52ZXJzaW9uXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbVZlclxuIiwiY29uc3QgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJylcbmNvbnN0IGNsZWFuID0gKHZlcnNpb24sIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgcyA9IHBhcnNlKHZlcnNpb24udHJpbSgpLnJlcGxhY2UoL15bPXZdKy8sICcnKSwgb3B0aW9ucylcbiAgcmV0dXJuIHMgPyBzLnZlcnNpb24gOiBudWxsXG59XG5tb2R1bGUuZXhwb3J0cyA9IGNsZWFuXG4iLCJjb25zdCBlcSA9IHJlcXVpcmUoJy4vZXEnKVxuY29uc3QgbmVxID0gcmVxdWlyZSgnLi9uZXEnKVxuY29uc3QgZ3QgPSByZXF1aXJlKCcuL2d0JylcbmNvbnN0IGd0ZSA9IHJlcXVpcmUoJy4vZ3RlJylcbmNvbnN0IGx0ID0gcmVxdWlyZSgnLi9sdCcpXG5jb25zdCBsdGUgPSByZXF1aXJlKCcuL2x0ZScpXG5cbmNvbnN0IGNtcCA9IChhLCBvcCwgYiwgbG9vc2UpID0+IHtcbiAgc3dpdGNoIChvcCkge1xuICAgIGNhc2UgJz09PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGEgPSBhLnZlcnNpb25cbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYiA9IGIudmVyc2lvblxuICAgICAgfVxuICAgICAgcmV0dXJuIGEgPT09IGJcblxuICAgIGNhc2UgJyE9PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGEgPSBhLnZlcnNpb25cbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYiA9IGIudmVyc2lvblxuICAgICAgfVxuICAgICAgcmV0dXJuIGEgIT09IGJcblxuICAgIGNhc2UgJyc6XG4gICAgY2FzZSAnPSc6XG4gICAgY2FzZSAnPT0nOlxuICAgICAgcmV0dXJuIGVxKGEsIGIsIGxvb3NlKVxuXG4gICAgY2FzZSAnIT0nOlxuICAgICAgcmV0dXJuIG5lcShhLCBiLCBsb29zZSlcblxuICAgIGNhc2UgJz4nOlxuICAgICAgcmV0dXJuIGd0KGEsIGIsIGxvb3NlKVxuXG4gICAgY2FzZSAnPj0nOlxuICAgICAgcmV0dXJuIGd0ZShhLCBiLCBsb29zZSlcblxuICAgIGNhc2UgJzwnOlxuICAgICAgcmV0dXJuIGx0KGEsIGIsIGxvb3NlKVxuXG4gICAgY2FzZSAnPD0nOlxuICAgICAgcmV0dXJuIGx0ZShhLCBiLCBsb29zZSlcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIG9wZXJhdG9yOiAke29wfWApXG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gY21wXG4iLCJjb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBwYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKVxuY29uc3QgeyByZSwgdCB9ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvcmUnKVxuXG5jb25zdCBjb2VyY2UgPSAodmVyc2lvbiwgb3B0aW9ucykgPT4ge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcikge1xuICAgIHJldHVybiB2ZXJzaW9uXG4gIH1cblxuICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdudW1iZXInKSB7XG4gICAgdmVyc2lvbiA9IFN0cmluZyh2ZXJzaW9uKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIGxldCBtYXRjaCA9IG51bGxcbiAgaWYgKCFvcHRpb25zLnJ0bCkge1xuICAgIG1hdGNoID0gdmVyc2lvbi5tYXRjaChyZVt0LkNPRVJDRV0pXG4gIH0gZWxzZSB7XG4gICAgLy8gRmluZCB0aGUgcmlnaHQtbW9zdCBjb2VyY2libGUgc3RyaW5nIHRoYXQgZG9lcyBub3Qgc2hhcmVcbiAgICAvLyBhIHRlcm1pbnVzIHdpdGggYSBtb3JlIGxlZnQtd2FyZCBjb2VyY2libGUgc3RyaW5nLlxuICAgIC8vIEVnLCAnMS4yLjMuNCcgd2FudHMgdG8gY29lcmNlICcyLjMuNCcsIG5vdCAnMy40JyBvciAnNCdcbiAgICAvL1xuICAgIC8vIFdhbGsgdGhyb3VnaCB0aGUgc3RyaW5nIGNoZWNraW5nIHdpdGggYSAvZyByZWdleHBcbiAgICAvLyBNYW51YWxseSBzZXQgdGhlIGluZGV4IHNvIGFzIHRvIHBpY2sgdXAgb3ZlcmxhcHBpbmcgbWF0Y2hlcy5cbiAgICAvLyBTdG9wIHdoZW4gd2UgZ2V0IGEgbWF0Y2ggdGhhdCBlbmRzIGF0IHRoZSBzdHJpbmcgZW5kLCBzaW5jZSBub1xuICAgIC8vIGNvZXJjaWJsZSBzdHJpbmcgY2FuIGJlIG1vcmUgcmlnaHQtd2FyZCB3aXRob3V0IHRoZSBzYW1lIHRlcm1pbnVzLlxuICAgIGxldCBuZXh0XG4gICAgd2hpbGUgKChuZXh0ID0gcmVbdC5DT0VSQ0VSVExdLmV4ZWModmVyc2lvbikpICYmXG4gICAgICAgICghbWF0Y2ggfHwgbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggIT09IHZlcnNpb24ubGVuZ3RoKVxuICAgICkge1xuICAgICAgaWYgKCFtYXRjaCB8fFxuICAgICAgICAgICAgbmV4dC5pbmRleCArIG5leHRbMF0ubGVuZ3RoICE9PSBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCkge1xuICAgICAgICBtYXRjaCA9IG5leHRcbiAgICAgIH1cbiAgICAgIHJlW3QuQ09FUkNFUlRMXS5sYXN0SW5kZXggPSBuZXh0LmluZGV4ICsgbmV4dFsxXS5sZW5ndGggKyBuZXh0WzJdLmxlbmd0aFxuICAgIH1cbiAgICAvLyBsZWF2ZSBpdCBpbiBhIGNsZWFuIHN0YXRlXG4gICAgcmVbdC5DT0VSQ0VSVExdLmxhc3RJbmRleCA9IC0xXG4gIH1cblxuICBpZiAobWF0Y2ggPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIHBhcnNlKGAke21hdGNoWzJdfS4ke21hdGNoWzNdIHx8ICcwJ30uJHttYXRjaFs0XSB8fCAnMCd9YCwgb3B0aW9ucylcbn1cbm1vZHVsZS5leHBvcnRzID0gY29lcmNlXG4iLCJjb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBjb21wYXJlQnVpbGQgPSAoYSwgYiwgbG9vc2UpID0+IHtcbiAgY29uc3QgdmVyc2lvbkEgPSBuZXcgU2VtVmVyKGEsIGxvb3NlKVxuICBjb25zdCB2ZXJzaW9uQiA9IG5ldyBTZW1WZXIoYiwgbG9vc2UpXG4gIHJldHVybiB2ZXJzaW9uQS5jb21wYXJlKHZlcnNpb25CKSB8fCB2ZXJzaW9uQS5jb21wYXJlQnVpbGQodmVyc2lvbkIpXG59XG5tb2R1bGUuZXhwb3J0cyA9IGNvbXBhcmVCdWlsZFxuIiwiY29uc3QgY29tcGFyZSA9IHJlcXVpcmUoJy4vY29tcGFyZScpXG5jb25zdCBjb21wYXJlTG9vc2UgPSAoYSwgYikgPT4gY29tcGFyZShhLCBiLCB0cnVlKVxubW9kdWxlLmV4cG9ydHMgPSBjb21wYXJlTG9vc2VcbiIsImNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IGNvbXBhcmUgPSAoYSwgYiwgbG9vc2UpID0+XG4gIG5ldyBTZW1WZXIoYSwgbG9vc2UpLmNvbXBhcmUobmV3IFNlbVZlcihiLCBsb29zZSkpXG5cbm1vZHVsZS5leHBvcnRzID0gY29tcGFyZVxuIiwiY29uc3QgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJylcbmNvbnN0IGVxID0gcmVxdWlyZSgnLi9lcScpXG5cbmNvbnN0IGRpZmYgPSAodmVyc2lvbjEsIHZlcnNpb24yKSA9PiB7XG4gIGlmIChlcSh2ZXJzaW9uMSwgdmVyc2lvbjIpKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB2MSA9IHBhcnNlKHZlcnNpb24xKVxuICAgIGNvbnN0IHYyID0gcGFyc2UodmVyc2lvbjIpXG4gICAgY29uc3QgaGFzUHJlID0gdjEucHJlcmVsZWFzZS5sZW5ndGggfHwgdjIucHJlcmVsZWFzZS5sZW5ndGhcbiAgICBjb25zdCBwcmVmaXggPSBoYXNQcmUgPyAncHJlJyA6ICcnXG4gICAgY29uc3QgZGVmYXVsdFJlc3VsdCA9IGhhc1ByZSA/ICdwcmVyZWxlYXNlJyA6ICcnXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdjEpIHtcbiAgICAgIGlmIChrZXkgPT09ICdtYWpvcicgfHwga2V5ID09PSAnbWlub3InIHx8IGtleSA9PT0gJ3BhdGNoJykge1xuICAgICAgICBpZiAodjFba2V5XSAhPT0gdjJba2V5XSkge1xuICAgICAgICAgIHJldHVybiBwcmVmaXggKyBrZXlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFJlc3VsdCAvLyBtYXkgYmUgdW5kZWZpbmVkXG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZGlmZlxuIiwiY29uc3QgY29tcGFyZSA9IHJlcXVpcmUoJy4vY29tcGFyZScpXG5jb25zdCBlcSA9IChhLCBiLCBsb29zZSkgPT4gY29tcGFyZShhLCBiLCBsb29zZSkgPT09IDBcbm1vZHVsZS5leHBvcnRzID0gZXFcbiIsImNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgZ3QgPSAoYSwgYiwgbG9vc2UpID0+IGNvbXBhcmUoYSwgYiwgbG9vc2UpID4gMFxubW9kdWxlLmV4cG9ydHMgPSBndFxuIiwiY29uc3QgY29tcGFyZSA9IHJlcXVpcmUoJy4vY29tcGFyZScpXG5jb25zdCBndGUgPSAoYSwgYiwgbG9vc2UpID0+IGNvbXBhcmUoYSwgYiwgbG9vc2UpID49IDBcbm1vZHVsZS5leHBvcnRzID0gZ3RlXG4iLCJjb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5cbmNvbnN0IGluYyA9ICh2ZXJzaW9uLCByZWxlYXNlLCBvcHRpb25zLCBpZGVudGlmaWVyKSA9PiB7XG4gIGlmICh0eXBlb2YgKG9wdGlvbnMpID09PSAnc3RyaW5nJykge1xuICAgIGlkZW50aWZpZXIgPSBvcHRpb25zXG4gICAgb3B0aW9ucyA9IHVuZGVmaW5lZFxuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFNlbVZlcihcbiAgICAgIHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIgPyB2ZXJzaW9uLnZlcnNpb24gOiB2ZXJzaW9uLFxuICAgICAgb3B0aW9uc1xuICAgICkuaW5jKHJlbGVhc2UsIGlkZW50aWZpZXIpLnZlcnNpb25cbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluY1xuIiwiY29uc3QgY29tcGFyZSA9IHJlcXVpcmUoJy4vY29tcGFyZScpXG5jb25zdCBsdCA9IChhLCBiLCBsb29zZSkgPT4gY29tcGFyZShhLCBiLCBsb29zZSkgPCAwXG5tb2R1bGUuZXhwb3J0cyA9IGx0XG4iLCJjb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9jb21wYXJlJylcbmNvbnN0IGx0ZSA9IChhLCBiLCBsb29zZSkgPT4gY29tcGFyZShhLCBiLCBsb29zZSkgPD0gMFxubW9kdWxlLmV4cG9ydHMgPSBsdGVcbiIsImNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IG1ham9yID0gKGEsIGxvb3NlKSA9PiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5tYWpvclxubW9kdWxlLmV4cG9ydHMgPSBtYWpvclxuIiwiY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgbWlub3IgPSAoYSwgbG9vc2UpID0+IG5ldyBTZW1WZXIoYSwgbG9vc2UpLm1pbm9yXG5tb2R1bGUuZXhwb3J0cyA9IG1pbm9yXG4iLCJjb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9jb21wYXJlJylcbmNvbnN0IG5lcSA9IChhLCBiLCBsb29zZSkgPT4gY29tcGFyZShhLCBiLCBsb29zZSkgIT09IDBcbm1vZHVsZS5leHBvcnRzID0gbmVxXG4iLCJjb25zdCB7IE1BWF9MRU5HVEggfSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2NvbnN0YW50cycpXG5jb25zdCB7IHJlLCB0IH0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9yZScpXG5jb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5cbmNvbnN0IHBhcnNlT3B0aW9ucyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3BhcnNlLW9wdGlvbnMnKVxuY29uc3QgcGFyc2UgPSAodmVyc2lvbiwgb3B0aW9ucykgPT4ge1xuICBvcHRpb25zID0gcGFyc2VPcHRpb25zKG9wdGlvbnMpXG5cbiAgaWYgKHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIpIHtcbiAgICByZXR1cm4gdmVyc2lvblxuICB9XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBpZiAodmVyc2lvbi5sZW5ndGggPiBNQVhfTEVOR1RIKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IHIgPSBvcHRpb25zLmxvb3NlID8gcmVbdC5MT09TRV0gOiByZVt0LkZVTExdXG4gIGlmICghci50ZXN0KHZlcnNpb24pKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgb3B0aW9ucylcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VcbiIsImNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IHBhdGNoID0gKGEsIGxvb3NlKSA9PiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5wYXRjaFxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaFxuIiwiY29uc3QgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJylcbmNvbnN0IHByZXJlbGVhc2UgPSAodmVyc2lvbiwgb3B0aW9ucykgPT4ge1xuICBjb25zdCBwYXJzZWQgPSBwYXJzZSh2ZXJzaW9uLCBvcHRpb25zKVxuICByZXR1cm4gKHBhcnNlZCAmJiBwYXJzZWQucHJlcmVsZWFzZS5sZW5ndGgpID8gcGFyc2VkLnByZXJlbGVhc2UgOiBudWxsXG59XG5tb2R1bGUuZXhwb3J0cyA9IHByZXJlbGVhc2VcbiIsImNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgcmNvbXBhcmUgPSAoYSwgYiwgbG9vc2UpID0+IGNvbXBhcmUoYiwgYSwgbG9vc2UpXG5tb2R1bGUuZXhwb3J0cyA9IHJjb21wYXJlXG4iLCJjb25zdCBjb21wYXJlQnVpbGQgPSByZXF1aXJlKCcuL2NvbXBhcmUtYnVpbGQnKVxuY29uc3QgcnNvcnQgPSAobGlzdCwgbG9vc2UpID0+IGxpc3Quc29ydCgoYSwgYikgPT4gY29tcGFyZUJ1aWxkKGIsIGEsIGxvb3NlKSlcbm1vZHVsZS5leHBvcnRzID0gcnNvcnRcbiIsImNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9yYW5nZScpXG5jb25zdCBzYXRpc2ZpZXMgPSAodmVyc2lvbiwgcmFuZ2UsIG9wdGlvbnMpID0+IHtcbiAgdHJ5IHtcbiAgICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgb3B0aW9ucylcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gcmFuZ2UudGVzdCh2ZXJzaW9uKVxufVxubW9kdWxlLmV4cG9ydHMgPSBzYXRpc2ZpZXNcbiIsImNvbnN0IGNvbXBhcmVCdWlsZCA9IHJlcXVpcmUoJy4vY29tcGFyZS1idWlsZCcpXG5jb25zdCBzb3J0ID0gKGxpc3QsIGxvb3NlKSA9PiBsaXN0LnNvcnQoKGEsIGIpID0+IGNvbXBhcmVCdWlsZChhLCBiLCBsb29zZSkpXG5tb2R1bGUuZXhwb3J0cyA9IHNvcnRcbiIsImNvbnN0IHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5jb25zdCB2YWxpZCA9ICh2ZXJzaW9uLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHYgPSBwYXJzZSh2ZXJzaW9uLCBvcHRpb25zKVxuICByZXR1cm4gdiA/IHYudmVyc2lvbiA6IG51bGxcbn1cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRcbiIsIi8vIGp1c3QgcHJlLWxvYWQgYWxsIHRoZSBzdHVmZiB0aGF0IGluZGV4LmpzIGxhemlseSBleHBvcnRzXG5jb25zdCBpbnRlcm5hbFJlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9yZScpXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmU6IGludGVybmFsUmUucmUsXG4gIHNyYzogaW50ZXJuYWxSZS5zcmMsXG4gIHRva2VuczogaW50ZXJuYWxSZS50LFxuICBTRU1WRVJfU1BFQ19WRVJTSU9OOiByZXF1aXJlKCcuL2ludGVybmFsL2NvbnN0YW50cycpLlNFTVZFUl9TUEVDX1ZFUlNJT04sXG4gIFNlbVZlcjogcmVxdWlyZSgnLi9jbGFzc2VzL3NlbXZlcicpLFxuICBjb21wYXJlSWRlbnRpZmllcnM6IHJlcXVpcmUoJy4vaW50ZXJuYWwvaWRlbnRpZmllcnMnKS5jb21wYXJlSWRlbnRpZmllcnMsXG4gIHJjb21wYXJlSWRlbnRpZmllcnM6IHJlcXVpcmUoJy4vaW50ZXJuYWwvaWRlbnRpZmllcnMnKS5yY29tcGFyZUlkZW50aWZpZXJzLFxuICBwYXJzZTogcmVxdWlyZSgnLi9mdW5jdGlvbnMvcGFyc2UnKSxcbiAgdmFsaWQ6IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3ZhbGlkJyksXG4gIGNsZWFuOiByZXF1aXJlKCcuL2Z1bmN0aW9ucy9jbGVhbicpLFxuICBpbmM6IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2luYycpLFxuICBkaWZmOiByZXF1aXJlKCcuL2Z1bmN0aW9ucy9kaWZmJyksXG4gIG1ham9yOiByZXF1aXJlKCcuL2Z1bmN0aW9ucy9tYWpvcicpLFxuICBtaW5vcjogcmVxdWlyZSgnLi9mdW5jdGlvbnMvbWlub3InKSxcbiAgcGF0Y2g6IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3BhdGNoJyksXG4gIHByZXJlbGVhc2U6IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3ByZXJlbGVhc2UnKSxcbiAgY29tcGFyZTogcmVxdWlyZSgnLi9mdW5jdGlvbnMvY29tcGFyZScpLFxuICByY29tcGFyZTogcmVxdWlyZSgnLi9mdW5jdGlvbnMvcmNvbXBhcmUnKSxcbiAgY29tcGFyZUxvb3NlOiByZXF1aXJlKCcuL2Z1bmN0aW9ucy9jb21wYXJlLWxvb3NlJyksXG4gIGNvbXBhcmVCdWlsZDogcmVxdWlyZSgnLi9mdW5jdGlvbnMvY29tcGFyZS1idWlsZCcpLFxuICBzb3J0OiByZXF1aXJlKCcuL2Z1bmN0aW9ucy9zb3J0JyksXG4gIHJzb3J0OiByZXF1aXJlKCcuL2Z1bmN0aW9ucy9yc29ydCcpLFxuICBndDogcmVxdWlyZSgnLi9mdW5jdGlvbnMvZ3QnKSxcbiAgbHQ6IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2x0JyksXG4gIGVxOiByZXF1aXJlKCcuL2Z1bmN0aW9ucy9lcScpLFxuICBuZXE6IHJlcXVpcmUoJy4vZnVuY3Rpb25zL25lcScpLFxuICBndGU6IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2d0ZScpLFxuICBsdGU6IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2x0ZScpLFxuICBjbXA6IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2NtcCcpLFxuICBjb2VyY2U6IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2NvZXJjZScpLFxuICBDb21wYXJhdG9yOiByZXF1aXJlKCcuL2NsYXNzZXMvY29tcGFyYXRvcicpLFxuICBSYW5nZTogcmVxdWlyZSgnLi9jbGFzc2VzL3JhbmdlJyksXG4gIHNhdGlzZmllczogcmVxdWlyZSgnLi9mdW5jdGlvbnMvc2F0aXNmaWVzJyksXG4gIHRvQ29tcGFyYXRvcnM6IHJlcXVpcmUoJy4vcmFuZ2VzL3RvLWNvbXBhcmF0b3JzJyksXG4gIG1heFNhdGlzZnlpbmc6IHJlcXVpcmUoJy4vcmFuZ2VzL21heC1zYXRpc2Z5aW5nJyksXG4gIG1pblNhdGlzZnlpbmc6IHJlcXVpcmUoJy4vcmFuZ2VzL21pbi1zYXRpc2Z5aW5nJyksXG4gIG1pblZlcnNpb246IHJlcXVpcmUoJy4vcmFuZ2VzL21pbi12ZXJzaW9uJyksXG4gIHZhbGlkUmFuZ2U6IHJlcXVpcmUoJy4vcmFuZ2VzL3ZhbGlkJyksXG4gIG91dHNpZGU6IHJlcXVpcmUoJy4vcmFuZ2VzL291dHNpZGUnKSxcbiAgZ3RyOiByZXF1aXJlKCcuL3Jhbmdlcy9ndHInKSxcbiAgbHRyOiByZXF1aXJlKCcuL3Jhbmdlcy9sdHInKSxcbiAgaW50ZXJzZWN0czogcmVxdWlyZSgnLi9yYW5nZXMvaW50ZXJzZWN0cycpLFxuICBzaW1wbGlmeVJhbmdlOiByZXF1aXJlKCcuL3Jhbmdlcy9zaW1wbGlmeScpLFxuICBzdWJzZXQ6IHJlcXVpcmUoJy4vcmFuZ2VzL3N1YnNldCcpLFxufVxuIiwiLy8gTm90ZTogdGhpcyBpcyB0aGUgc2VtdmVyLm9yZyB2ZXJzaW9uIG9mIHRoZSBzcGVjIHRoYXQgaXQgaW1wbGVtZW50c1xuLy8gTm90IG5lY2Vzc2FyaWx5IHRoZSBwYWNrYWdlIHZlcnNpb24gb2YgdGhpcyBjb2RlLlxuY29uc3QgU0VNVkVSX1NQRUNfVkVSU0lPTiA9ICcyLjAuMCdcblxuY29uc3QgTUFYX0xFTkdUSCA9IDI1NlxuY29uc3QgTUFYX1NBRkVfSU5URUdFUiA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyA5MDA3MTk5MjU0NzQwOTkxXG5cbi8vIE1heCBzYWZlIHNlZ21lbnQgbGVuZ3RoIGZvciBjb2VyY2lvbi5cbmNvbnN0IE1BWF9TQUZFX0NPTVBPTkVOVF9MRU5HVEggPSAxNlxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgU0VNVkVSX1NQRUNfVkVSU0lPTixcbiAgTUFYX0xFTkdUSCxcbiAgTUFYX1NBRkVfSU5URUdFUixcbiAgTUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSCxcbn1cbiIsImNvbnN0IGRlYnVnID0gKFxuICB0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiZcbiAgcHJvY2Vzcy5lbnYgJiZcbiAgcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyAmJlxuICAvXFxic2VtdmVyXFxiL2kudGVzdChwcm9jZXNzLmVudi5OT0RFX0RFQlVHKVxuKSA/ICguLi5hcmdzKSA9PiBjb25zb2xlLmVycm9yKCdTRU1WRVInLCAuLi5hcmdzKVxuICA6ICgpID0+IHt9XG5cbm1vZHVsZS5leHBvcnRzID0gZGVidWdcbiIsImNvbnN0IG51bWVyaWMgPSAvXlswLTldKyQvXG5jb25zdCBjb21wYXJlSWRlbnRpZmllcnMgPSAoYSwgYikgPT4ge1xuICBjb25zdCBhbnVtID0gbnVtZXJpYy50ZXN0KGEpXG4gIGNvbnN0IGJudW0gPSBudW1lcmljLnRlc3QoYilcblxuICBpZiAoYW51bSAmJiBibnVtKSB7XG4gICAgYSA9ICthXG4gICAgYiA9ICtiXG4gIH1cblxuICByZXR1cm4gYSA9PT0gYiA/IDBcbiAgICA6IChhbnVtICYmICFibnVtKSA/IC0xXG4gICAgOiAoYm51bSAmJiAhYW51bSkgPyAxXG4gICAgOiBhIDwgYiA/IC0xXG4gICAgOiAxXG59XG5cbmNvbnN0IHJjb21wYXJlSWRlbnRpZmllcnMgPSAoYSwgYikgPT4gY29tcGFyZUlkZW50aWZpZXJzKGIsIGEpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb21wYXJlSWRlbnRpZmllcnMsXG4gIHJjb21wYXJlSWRlbnRpZmllcnMsXG59XG4iLCIvLyBwYXJzZSBvdXQganVzdCB0aGUgb3B0aW9ucyB3ZSBjYXJlIGFib3V0IHNvIHdlIGFsd2F5cyBnZXQgYSBjb25zaXN0ZW50XG4vLyBvYmogd2l0aCBrZXlzIGluIGEgY29uc2lzdGVudCBvcmRlci5cbmNvbnN0IG9wdHMgPSBbJ2luY2x1ZGVQcmVyZWxlYXNlJywgJ2xvb3NlJywgJ3J0bCddXG5jb25zdCBwYXJzZU9wdGlvbnMgPSBvcHRpb25zID0+XG4gICFvcHRpb25zID8ge31cbiAgOiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcgPyB7IGxvb3NlOiB0cnVlIH1cbiAgOiBvcHRzLmZpbHRlcihrID0+IG9wdGlvbnNba10pLnJlZHVjZSgobywgaykgPT4ge1xuICAgIG9ba10gPSB0cnVlXG4gICAgcmV0dXJuIG9cbiAgfSwge30pXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlT3B0aW9uc1xuIiwiY29uc3QgeyBNQVhfU0FGRV9DT01QT05FTlRfTEVOR1RIIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpXG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoJy4vZGVidWcnKVxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge31cblxuLy8gVGhlIGFjdHVhbCByZWdleHBzIGdvIG9uIGV4cG9ydHMucmVcbmNvbnN0IHJlID0gZXhwb3J0cy5yZSA9IFtdXG5jb25zdCBzcmMgPSBleHBvcnRzLnNyYyA9IFtdXG5jb25zdCB0ID0gZXhwb3J0cy50ID0ge31cbmxldCBSID0gMFxuXG5jb25zdCBjcmVhdGVUb2tlbiA9IChuYW1lLCB2YWx1ZSwgaXNHbG9iYWwpID0+IHtcbiAgY29uc3QgaW5kZXggPSBSKytcbiAgZGVidWcobmFtZSwgaW5kZXgsIHZhbHVlKVxuICB0W25hbWVdID0gaW5kZXhcbiAgc3JjW2luZGV4XSA9IHZhbHVlXG4gIHJlW2luZGV4XSA9IG5ldyBSZWdFeHAodmFsdWUsIGlzR2xvYmFsID8gJ2cnIDogdW5kZWZpbmVkKVxufVxuXG4vLyBUaGUgZm9sbG93aW5nIFJlZ3VsYXIgRXhwcmVzc2lvbnMgY2FuIGJlIHVzZWQgZm9yIHRva2VuaXppbmcsXG4vLyB2YWxpZGF0aW5nLCBhbmQgcGFyc2luZyBTZW1WZXIgdmVyc2lvbiBzdHJpbmdzLlxuXG4vLyAjIyBOdW1lcmljIElkZW50aWZpZXJcbi8vIEEgc2luZ2xlIGAwYCwgb3IgYSBub24temVybyBkaWdpdCBmb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgZGlnaXRzLlxuXG5jcmVhdGVUb2tlbignTlVNRVJJQ0lERU5USUZJRVInLCAnMHxbMS05XVxcXFxkKicpXG5jcmVhdGVUb2tlbignTlVNRVJJQ0lERU5USUZJRVJMT09TRScsICdbMC05XSsnKVxuXG4vLyAjIyBOb24tbnVtZXJpYyBJZGVudGlmaWVyXG4vLyBaZXJvIG9yIG1vcmUgZGlnaXRzLCBmb2xsb3dlZCBieSBhIGxldHRlciBvciBoeXBoZW4sIGFuZCB0aGVuIHplcm8gb3Jcbi8vIG1vcmUgbGV0dGVycywgZGlnaXRzLCBvciBoeXBoZW5zLlxuXG5jcmVhdGVUb2tlbignTk9OTlVNRVJJQ0lERU5USUZJRVInLCAnXFxcXGQqW2EtekEtWi1dW2EtekEtWjAtOS1dKicpXG5cbi8vICMjIE1haW4gVmVyc2lvblxuLy8gVGhyZWUgZG90LXNlcGFyYXRlZCBudW1lcmljIGlkZW50aWZpZXJzLlxuXG5jcmVhdGVUb2tlbignTUFJTlZFUlNJT04nLCBgKCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJdfSlcXFxcLmAgK1xuICAgICAgICAgICAgICAgICAgIGAoJHtzcmNbdC5OVU1FUklDSURFTlRJRklFUl19KVxcXFwuYCArXG4gICAgICAgICAgICAgICAgICAgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSXX0pYClcblxuY3JlYXRlVG9rZW4oJ01BSU5WRVJTSU9OTE9PU0UnLCBgKCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJMT09TRV19KVxcXFwuYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgKCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJMT09TRV19KVxcXFwuYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgKCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJMT09TRV19KWApXG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb24gSWRlbnRpZmllclxuLy8gQSBudW1lcmljIGlkZW50aWZpZXIsIG9yIGEgbm9uLW51bWVyaWMgaWRlbnRpZmllci5cblxuY3JlYXRlVG9rZW4oJ1BSRVJFTEVBU0VJREVOVElGSUVSJywgYCg/OiR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJdXG59fCR7c3JjW3QuTk9OTlVNRVJJQ0lERU5USUZJRVJdfSlgKVxuXG5jcmVhdGVUb2tlbignUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRScsIGAoPzoke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSTE9PU0VdXG59fCR7c3JjW3QuTk9OTlVNRVJJQ0lERU5USUZJRVJdfSlgKVxuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uXG4vLyBIeXBoZW4sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIGRvdC1zZXBhcmF0ZWQgcHJlLXJlbGVhc2UgdmVyc2lvblxuLy8gaWRlbnRpZmllcnMuXG5cbmNyZWF0ZVRva2VuKCdQUkVSRUxFQVNFJywgYCg/Oi0oJHtzcmNbdC5QUkVSRUxFQVNFSURFTlRJRklFUl1cbn0oPzpcXFxcLiR7c3JjW3QuUFJFUkVMRUFTRUlERU5USUZJRVJdfSkqKSlgKVxuXG5jcmVhdGVUb2tlbignUFJFUkVMRUFTRUxPT1NFJywgYCg/Oi0/KCR7c3JjW3QuUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV1cbn0oPzpcXFxcLiR7c3JjW3QuUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV19KSopKWApXG5cbi8vICMjIEJ1aWxkIE1ldGFkYXRhIElkZW50aWZpZXJcbi8vIEFueSBjb21iaW5hdGlvbiBvZiBkaWdpdHMsIGxldHRlcnMsIG9yIGh5cGhlbnMuXG5cbmNyZWF0ZVRva2VuKCdCVUlMRElERU5USUZJRVInLCAnWzAtOUEtWmEtei1dKycpXG5cbi8vICMjIEJ1aWxkIE1ldGFkYXRhXG4vLyBQbHVzIHNpZ24sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIHBlcmlvZC1zZXBhcmF0ZWQgYnVpbGQgbWV0YWRhdGFcbi8vIGlkZW50aWZpZXJzLlxuXG5jcmVhdGVUb2tlbignQlVJTEQnLCBgKD86XFxcXCsoJHtzcmNbdC5CVUlMRElERU5USUZJRVJdXG59KD86XFxcXC4ke3NyY1t0LkJVSUxESURFTlRJRklFUl19KSopKWApXG5cbi8vICMjIEZ1bGwgVmVyc2lvbiBTdHJpbmdcbi8vIEEgbWFpbiB2ZXJzaW9uLCBmb2xsb3dlZCBvcHRpb25hbGx5IGJ5IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiBhbmRcbi8vIGJ1aWxkIG1ldGFkYXRhLlxuXG4vLyBOb3RlIHRoYXQgdGhlIG9ubHkgbWFqb3IsIG1pbm9yLCBwYXRjaCwgYW5kIHByZS1yZWxlYXNlIHNlY3Rpb25zIG9mXG4vLyB0aGUgdmVyc2lvbiBzdHJpbmcgYXJlIGNhcHR1cmluZyBncm91cHMuICBUaGUgYnVpbGQgbWV0YWRhdGEgaXMgbm90IGFcbi8vIGNhcHR1cmluZyBncm91cCwgYmVjYXVzZSBpdCBzaG91bGQgbm90IGV2ZXIgYmUgdXNlZCBpbiB2ZXJzaW9uXG4vLyBjb21wYXJpc29uLlxuXG5jcmVhdGVUb2tlbignRlVMTFBMQUlOJywgYHY/JHtzcmNbdC5NQUlOVkVSU0lPTl1cbn0ke3NyY1t0LlBSRVJFTEVBU0VdfT8ke1xuICBzcmNbdC5CVUlMRF19P2ApXG5cbmNyZWF0ZVRva2VuKCdGVUxMJywgYF4ke3NyY1t0LkZVTExQTEFJTl19JGApXG5cbi8vIGxpa2UgZnVsbCwgYnV0IGFsbG93cyB2MS4yLjMgYW5kID0xLjIuMywgd2hpY2ggcGVvcGxlIGRvIHNvbWV0aW1lcy5cbi8vIGFsc28sIDEuMC4wYWxwaGExIChwcmVyZWxlYXNlIHdpdGhvdXQgdGhlIGh5cGhlbikgd2hpY2ggaXMgcHJldHR5XG4vLyBjb21tb24gaW4gdGhlIG5wbSByZWdpc3RyeS5cbmNyZWF0ZVRva2VuKCdMT09TRVBMQUlOJywgYFt2PVxcXFxzXSoke3NyY1t0Lk1BSU5WRVJTSU9OTE9PU0VdXG59JHtzcmNbdC5QUkVSRUxFQVNFTE9PU0VdfT8ke1xuICBzcmNbdC5CVUlMRF19P2ApXG5cbmNyZWF0ZVRva2VuKCdMT09TRScsIGBeJHtzcmNbdC5MT09TRVBMQUlOXX0kYClcblxuY3JlYXRlVG9rZW4oJ0dUTFQnLCAnKCg/Ojx8Pik/PT8pJylcblxuLy8gU29tZXRoaW5nIGxpa2UgXCIyLipcIiBvciBcIjEuMi54XCIuXG4vLyBOb3RlIHRoYXQgXCJ4LnhcIiBpcyBhIHZhbGlkIHhSYW5nZSBpZGVudGlmZXIsIG1lYW5pbmcgXCJhbnkgdmVyc2lvblwiXG4vLyBPbmx5IHRoZSBmaXJzdCBpdGVtIGlzIHN0cmljdGx5IHJlcXVpcmVkLlxuY3JlYXRlVG9rZW4oJ1hSQU5HRUlERU5USUZJRVJMT09TRScsIGAke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSTE9PU0VdfXx4fFh8XFxcXCpgKVxuY3JlYXRlVG9rZW4oJ1hSQU5HRUlERU5USUZJRVInLCBgJHtzcmNbdC5OVU1FUklDSURFTlRJRklFUl19fHh8WHxcXFxcKmApXG5cbmNyZWF0ZVRva2VuKCdYUkFOR0VQTEFJTicsIGBbdj1cXFxcc10qKCR7c3JjW3QuWFJBTkdFSURFTlRJRklFUl19KWAgK1xuICAgICAgICAgICAgICAgICAgIGAoPzpcXFxcLigke3NyY1t0LlhSQU5HRUlERU5USUZJRVJdfSlgICtcbiAgICAgICAgICAgICAgICAgICBgKD86XFxcXC4oJHtzcmNbdC5YUkFOR0VJREVOVElGSUVSXX0pYCArXG4gICAgICAgICAgICAgICAgICAgYCg/OiR7c3JjW3QuUFJFUkVMRUFTRV19KT8ke1xuICAgICAgICAgICAgICAgICAgICAgc3JjW3QuQlVJTERdfT9gICtcbiAgICAgICAgICAgICAgICAgICBgKT8pP2ApXG5cbmNyZWF0ZVRva2VuKCdYUkFOR0VQTEFJTkxPT1NFJywgYFt2PVxcXFxzXSooJHtzcmNbdC5YUkFOR0VJREVOVElGSUVSTE9PU0VdfSlgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAoPzpcXFxcLigke3NyY1t0LlhSQU5HRUlERU5USUZJRVJMT09TRV19KWAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCg/OlxcXFwuKCR7c3JjW3QuWFJBTkdFSURFTlRJRklFUkxPT1NFXX0pYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgKD86JHtzcmNbdC5QUkVSRUxFQVNFTE9PU0VdfSk/JHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjW3QuQlVJTERdfT9gICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGApPyk/YClcblxuY3JlYXRlVG9rZW4oJ1hSQU5HRScsIGBeJHtzcmNbdC5HVExUXX1cXFxccyoke3NyY1t0LlhSQU5HRVBMQUlOXX0kYClcbmNyZWF0ZVRva2VuKCdYUkFOR0VMT09TRScsIGBeJHtzcmNbdC5HVExUXX1cXFxccyoke3NyY1t0LlhSQU5HRVBMQUlOTE9PU0VdfSRgKVxuXG4vLyBDb2VyY2lvbi5cbi8vIEV4dHJhY3QgYW55dGhpbmcgdGhhdCBjb3VsZCBjb25jZWl2YWJseSBiZSBhIHBhcnQgb2YgYSB2YWxpZCBzZW12ZXJcbmNyZWF0ZVRva2VuKCdDT0VSQ0UnLCBgJHsnKF58W15cXFxcZF0pJyArXG4gICAgICAgICAgICAgICcoXFxcXGR7MSwnfSR7TUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSH19KWAgK1xuICAgICAgICAgICAgICBgKD86XFxcXC4oXFxcXGR7MSwke01BWF9TQUZFX0NPTVBPTkVOVF9MRU5HVEh9fSkpP2AgK1xuICAgICAgICAgICAgICBgKD86XFxcXC4oXFxcXGR7MSwke01BWF9TQUZFX0NPTVBPTkVOVF9MRU5HVEh9fSkpP2AgK1xuICAgICAgICAgICAgICBgKD86JHxbXlxcXFxkXSlgKVxuY3JlYXRlVG9rZW4oJ0NPRVJDRVJUTCcsIHNyY1t0LkNPRVJDRV0sIHRydWUpXG5cbi8vIFRpbGRlIHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJyZWFzb25hYmx5IGF0IG9yIGdyZWF0ZXIgdGhhblwiXG5jcmVhdGVUb2tlbignTE9ORVRJTERFJywgJyg/On4+PyknKVxuXG5jcmVhdGVUb2tlbignVElMREVUUklNJywgYChcXFxccyopJHtzcmNbdC5MT05FVElMREVdfVxcXFxzK2AsIHRydWUpXG5leHBvcnRzLnRpbGRlVHJpbVJlcGxhY2UgPSAnJDF+J1xuXG5jcmVhdGVUb2tlbignVElMREUnLCBgXiR7c3JjW3QuTE9ORVRJTERFXX0ke3NyY1t0LlhSQU5HRVBMQUlOXX0kYClcbmNyZWF0ZVRva2VuKCdUSUxERUxPT1NFJywgYF4ke3NyY1t0LkxPTkVUSUxERV19JHtzcmNbdC5YUkFOR0VQTEFJTkxPT1NFXX0kYClcblxuLy8gQ2FyZXQgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcImF0IGxlYXN0IGFuZCBiYWNrd2FyZHMgY29tcGF0aWJsZSB3aXRoXCJcbmNyZWF0ZVRva2VuKCdMT05FQ0FSRVQnLCAnKD86XFxcXF4pJylcblxuY3JlYXRlVG9rZW4oJ0NBUkVUVFJJTScsIGAoXFxcXHMqKSR7c3JjW3QuTE9ORUNBUkVUXX1cXFxccytgLCB0cnVlKVxuZXhwb3J0cy5jYXJldFRyaW1SZXBsYWNlID0gJyQxXidcblxuY3JlYXRlVG9rZW4oJ0NBUkVUJywgYF4ke3NyY1t0LkxPTkVDQVJFVF19JHtzcmNbdC5YUkFOR0VQTEFJTl19JGApXG5jcmVhdGVUb2tlbignQ0FSRVRMT09TRScsIGBeJHtzcmNbdC5MT05FQ0FSRVRdfSR7c3JjW3QuWFJBTkdFUExBSU5MT09TRV19JGApXG5cbi8vIEEgc2ltcGxlIGd0L2x0L2VxIHRoaW5nLCBvciBqdXN0IFwiXCIgdG8gaW5kaWNhdGUgXCJhbnkgdmVyc2lvblwiXG5jcmVhdGVUb2tlbignQ09NUEFSQVRPUkxPT1NFJywgYF4ke3NyY1t0LkdUTFRdfVxcXFxzKigke3NyY1t0LkxPT1NFUExBSU5dfSkkfF4kYClcbmNyZWF0ZVRva2VuKCdDT01QQVJBVE9SJywgYF4ke3NyY1t0LkdUTFRdfVxcXFxzKigke3NyY1t0LkZVTExQTEFJTl19KSR8XiRgKVxuXG4vLyBBbiBleHByZXNzaW9uIHRvIHN0cmlwIGFueSB3aGl0ZXNwYWNlIGJldHdlZW4gdGhlIGd0bHQgYW5kIHRoZSB0aGluZ1xuLy8gaXQgbW9kaWZpZXMsIHNvIHRoYXQgYD4gMS4yLjNgID09PiBgPjEuMi4zYFxuY3JlYXRlVG9rZW4oJ0NPTVBBUkFUT1JUUklNJywgYChcXFxccyopJHtzcmNbdC5HVExUXVxufVxcXFxzKigke3NyY1t0LkxPT1NFUExBSU5dfXwke3NyY1t0LlhSQU5HRVBMQUlOXX0pYCwgdHJ1ZSlcbmV4cG9ydHMuY29tcGFyYXRvclRyaW1SZXBsYWNlID0gJyQxJDIkMydcblxuLy8gU29tZXRoaW5nIGxpa2UgYDEuMi4zIC0gMS4yLjRgXG4vLyBOb3RlIHRoYXQgdGhlc2UgYWxsIHVzZSB0aGUgbG9vc2UgZm9ybSwgYmVjYXVzZSB0aGV5J2xsIGJlXG4vLyBjaGVja2VkIGFnYWluc3QgZWl0aGVyIHRoZSBzdHJpY3Qgb3IgbG9vc2UgY29tcGFyYXRvciBmb3JtXG4vLyBsYXRlci5cbmNyZWF0ZVRva2VuKCdIWVBIRU5SQU5HRScsIGBeXFxcXHMqKCR7c3JjW3QuWFJBTkdFUExBSU5dfSlgICtcbiAgICAgICAgICAgICAgICAgICBgXFxcXHMrLVxcXFxzK2AgK1xuICAgICAgICAgICAgICAgICAgIGAoJHtzcmNbdC5YUkFOR0VQTEFJTl19KWAgK1xuICAgICAgICAgICAgICAgICAgIGBcXFxccyokYClcblxuY3JlYXRlVG9rZW4oJ0hZUEhFTlJBTkdFTE9PU0UnLCBgXlxcXFxzKigke3NyY1t0LlhSQU5HRVBMQUlOTE9PU0VdfSlgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcXFxccystXFxcXHMrYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgKCR7c3JjW3QuWFJBTkdFUExBSU5MT09TRV19KWAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYFxcXFxzKiRgKVxuXG4vLyBTdGFyIHJhbmdlcyBiYXNpY2FsbHkganVzdCBhbGxvdyBhbnl0aGluZyBhdCBhbGwuXG5jcmVhdGVUb2tlbignU1RBUicsICcoPHw+KT89P1xcXFxzKlxcXFwqJylcbi8vID49MC4wLjAgaXMgbGlrZSBhIHN0YXJcbmNyZWF0ZVRva2VuKCdHVEUwJywgJ15cXFxccyo+PVxcXFxzKjBcXFxcLjBcXFxcLjBcXFxccyokJylcbmNyZWF0ZVRva2VuKCdHVEUwUFJFJywgJ15cXFxccyo+PVxcXFxzKjBcXFxcLjBcXFxcLjAtMFxcXFxzKiQnKVxuIiwiLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgZ3JlYXRlciB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlLlxuY29uc3Qgb3V0c2lkZSA9IHJlcXVpcmUoJy4vb3V0c2lkZScpXG5jb25zdCBndHIgPSAodmVyc2lvbiwgcmFuZ2UsIG9wdGlvbnMpID0+IG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc+Jywgb3B0aW9ucylcbm1vZHVsZS5leHBvcnRzID0gZ3RyXG4iLCJjb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvcmFuZ2UnKVxuY29uc3QgaW50ZXJzZWN0cyA9IChyMSwgcjIsIG9wdGlvbnMpID0+IHtcbiAgcjEgPSBuZXcgUmFuZ2UocjEsIG9wdGlvbnMpXG4gIHIyID0gbmV3IFJhbmdlKHIyLCBvcHRpb25zKVxuICByZXR1cm4gcjEuaW50ZXJzZWN0cyhyMilcbn1cbm1vZHVsZS5leHBvcnRzID0gaW50ZXJzZWN0c1xuIiwiY29uc3Qgb3V0c2lkZSA9IHJlcXVpcmUoJy4vb3V0c2lkZScpXG4vLyBEZXRlcm1pbmUgaWYgdmVyc2lvbiBpcyBsZXNzIHRoYW4gYWxsIHRoZSB2ZXJzaW9ucyBwb3NzaWJsZSBpbiB0aGUgcmFuZ2VcbmNvbnN0IGx0ciA9ICh2ZXJzaW9uLCByYW5nZSwgb3B0aW9ucykgPT4gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgJzwnLCBvcHRpb25zKVxubW9kdWxlLmV4cG9ydHMgPSBsdHJcbiIsImNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9yYW5nZScpXG5cbmNvbnN0IG1heFNhdGlzZnlpbmcgPSAodmVyc2lvbnMsIHJhbmdlLCBvcHRpb25zKSA9PiB7XG4gIGxldCBtYXggPSBudWxsXG4gIGxldCBtYXhTViA9IG51bGxcbiAgbGV0IHJhbmdlT2JqID0gbnVsbFxuICB0cnkge1xuICAgIHJhbmdlT2JqID0gbmV3IFJhbmdlKHJhbmdlLCBvcHRpb25zKVxuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgdmVyc2lvbnMuZm9yRWFjaCgodikgPT4ge1xuICAgIGlmIChyYW5nZU9iai50ZXN0KHYpKSB7XG4gICAgICAvLyBzYXRpc2ZpZXModiwgcmFuZ2UsIG9wdGlvbnMpXG4gICAgICBpZiAoIW1heCB8fCBtYXhTVi5jb21wYXJlKHYpID09PSAtMSkge1xuICAgICAgICAvLyBjb21wYXJlKG1heCwgdiwgdHJ1ZSlcbiAgICAgICAgbWF4ID0gdlxuICAgICAgICBtYXhTViA9IG5ldyBTZW1WZXIobWF4LCBvcHRpb25zKVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIG1heFxufVxubW9kdWxlLmV4cG9ydHMgPSBtYXhTYXRpc2Z5aW5nXG4iLCJjb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBSYW5nZSA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvcmFuZ2UnKVxuY29uc3QgbWluU2F0aXNmeWluZyA9ICh2ZXJzaW9ucywgcmFuZ2UsIG9wdGlvbnMpID0+IHtcbiAgbGV0IG1pbiA9IG51bGxcbiAgbGV0IG1pblNWID0gbnVsbFxuICBsZXQgcmFuZ2VPYmogPSBudWxsXG4gIHRyeSB7XG4gICAgcmFuZ2VPYmogPSBuZXcgUmFuZ2UocmFuZ2UsIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICB2ZXJzaW9ucy5mb3JFYWNoKCh2KSA9PiB7XG4gICAgaWYgKHJhbmdlT2JqLnRlc3QodikpIHtcbiAgICAgIC8vIHNhdGlzZmllcyh2LCByYW5nZSwgb3B0aW9ucylcbiAgICAgIGlmICghbWluIHx8IG1pblNWLmNvbXBhcmUodikgPT09IDEpIHtcbiAgICAgICAgLy8gY29tcGFyZShtaW4sIHYsIHRydWUpXG4gICAgICAgIG1pbiA9IHZcbiAgICAgICAgbWluU1YgPSBuZXcgU2VtVmVyKG1pbiwgb3B0aW9ucylcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBtaW5cbn1cbm1vZHVsZS5leHBvcnRzID0gbWluU2F0aXNmeWluZ1xuIiwiY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3JhbmdlJylcbmNvbnN0IGd0ID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2d0JylcblxuY29uc3QgbWluVmVyc2lvbiA9IChyYW5nZSwgbG9vc2UpID0+IHtcbiAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKVxuXG4gIGxldCBtaW52ZXIgPSBuZXcgU2VtVmVyKCcwLjAuMCcpXG4gIGlmIChyYW5nZS50ZXN0KG1pbnZlcikpIHtcbiAgICByZXR1cm4gbWludmVyXG4gIH1cblxuICBtaW52ZXIgPSBuZXcgU2VtVmVyKCcwLjAuMC0wJylcbiAgaWYgKHJhbmdlLnRlc3QobWludmVyKSkge1xuICAgIHJldHVybiBtaW52ZXJcbiAgfVxuXG4gIG1pbnZlciA9IG51bGxcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5nZS5zZXQubGVuZ3RoOyArK2kpIHtcbiAgICBjb25zdCBjb21wYXJhdG9ycyA9IHJhbmdlLnNldFtpXVxuXG4gICAgbGV0IHNldE1pbiA9IG51bGxcbiAgICBjb21wYXJhdG9ycy5mb3JFYWNoKChjb21wYXJhdG9yKSA9PiB7XG4gICAgICAvLyBDbG9uZSB0byBhdm9pZCBtYW5pcHVsYXRpbmcgdGhlIGNvbXBhcmF0b3IncyBzZW12ZXIgb2JqZWN0LlxuICAgICAgY29uc3QgY29tcHZlciA9IG5ldyBTZW1WZXIoY29tcGFyYXRvci5zZW12ZXIudmVyc2lvbilcbiAgICAgIHN3aXRjaCAoY29tcGFyYXRvci5vcGVyYXRvcikge1xuICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICBpZiAoY29tcHZlci5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29tcHZlci5wYXRjaCsrXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXB2ZXIucHJlcmVsZWFzZS5wdXNoKDApXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbXB2ZXIucmF3ID0gY29tcHZlci5mb3JtYXQoKVxuICAgICAgICAgIC8qIGZhbGx0aHJvdWdoICovXG4gICAgICAgIGNhc2UgJyc6XG4gICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICBpZiAoIXNldE1pbiB8fCBndChjb21wdmVyLCBzZXRNaW4pKSB7XG4gICAgICAgICAgICBzZXRNaW4gPSBjb21wdmVyXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICBjYXNlICc8PSc6XG4gICAgICAgICAgLyogSWdub3JlIG1heGltdW0gdmVyc2lvbnMgKi9cbiAgICAgICAgICBicmVha1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBvcGVyYXRpb246ICR7Y29tcGFyYXRvci5vcGVyYXRvcn1gKVxuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKHNldE1pbiAmJiAoIW1pbnZlciB8fCBndChtaW52ZXIsIHNldE1pbikpKSB7XG4gICAgICBtaW52ZXIgPSBzZXRNaW5cbiAgICB9XG4gIH1cblxuICBpZiAobWludmVyICYmIHJhbmdlLnRlc3QobWludmVyKSkge1xuICAgIHJldHVybiBtaW52ZXJcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5tb2R1bGUuZXhwb3J0cyA9IG1pblZlcnNpb25cbiIsImNvbnN0IFNlbVZlciA9IHJlcXVpcmUoJy4uL2NsYXNzZXMvc2VtdmVyJylcbmNvbnN0IENvbXBhcmF0b3IgPSByZXF1aXJlKCcuLi9jbGFzc2VzL2NvbXBhcmF0b3InKVxuY29uc3QgeyBBTlkgfSA9IENvbXBhcmF0b3JcbmNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9yYW5nZScpXG5jb25zdCBzYXRpc2ZpZXMgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvc2F0aXNmaWVzJylcbmNvbnN0IGd0ID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2d0JylcbmNvbnN0IGx0ID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2x0JylcbmNvbnN0IGx0ZSA9IHJlcXVpcmUoJy4uL2Z1bmN0aW9ucy9sdGUnKVxuY29uc3QgZ3RlID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2d0ZScpXG5cbmNvbnN0IG91dHNpZGUgPSAodmVyc2lvbiwgcmFuZ2UsIGhpbG8sIG9wdGlvbnMpID0+IHtcbiAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgb3B0aW9ucylcbiAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIG9wdGlvbnMpXG5cbiAgbGV0IGd0Zm4sIGx0ZWZuLCBsdGZuLCBjb21wLCBlY29tcFxuICBzd2l0Y2ggKGhpbG8pIHtcbiAgICBjYXNlICc+JzpcbiAgICAgIGd0Zm4gPSBndFxuICAgICAgbHRlZm4gPSBsdGVcbiAgICAgIGx0Zm4gPSBsdFxuICAgICAgY29tcCA9ICc+J1xuICAgICAgZWNvbXAgPSAnPj0nXG4gICAgICBicmVha1xuICAgIGNhc2UgJzwnOlxuICAgICAgZ3RmbiA9IGx0XG4gICAgICBsdGVmbiA9IGd0ZVxuICAgICAgbHRmbiA9IGd0XG4gICAgICBjb21wID0gJzwnXG4gICAgICBlY29tcCA9ICc8PSdcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3QgcHJvdmlkZSBhIGhpbG8gdmFsIG9mIFwiPFwiIG9yIFwiPlwiJylcbiAgfVxuXG4gIC8vIElmIGl0IHNhdGlzZmllcyB0aGUgcmFuZ2UgaXQgaXMgbm90IG91dHNpZGVcbiAgaWYgKHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgb3B0aW9ucykpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIEZyb20gbm93IG9uLCB2YXJpYWJsZSB0ZXJtcyBhcmUgYXMgaWYgd2UncmUgaW4gXCJndHJcIiBtb2RlLlxuICAvLyBidXQgbm90ZSB0aGF0IGV2ZXJ5dGhpbmcgaXMgZmxpcHBlZCBmb3IgdGhlIFwibHRyXCIgZnVuY3Rpb24uXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5nZS5zZXQubGVuZ3RoOyArK2kpIHtcbiAgICBjb25zdCBjb21wYXJhdG9ycyA9IHJhbmdlLnNldFtpXVxuXG4gICAgbGV0IGhpZ2ggPSBudWxsXG4gICAgbGV0IGxvdyA9IG51bGxcblxuICAgIGNvbXBhcmF0b3JzLmZvckVhY2goKGNvbXBhcmF0b3IpID0+IHtcbiAgICAgIGlmIChjb21wYXJhdG9yLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgICAgIGNvbXBhcmF0b3IgPSBuZXcgQ29tcGFyYXRvcignPj0wLjAuMCcpXG4gICAgICB9XG4gICAgICBoaWdoID0gaGlnaCB8fCBjb21wYXJhdG9yXG4gICAgICBsb3cgPSBsb3cgfHwgY29tcGFyYXRvclxuICAgICAgaWYgKGd0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGhpZ2guc2VtdmVyLCBvcHRpb25zKSkge1xuICAgICAgICBoaWdoID0gY29tcGFyYXRvclxuICAgICAgfSBlbHNlIGlmIChsdGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBsb3cuc2VtdmVyLCBvcHRpb25zKSkge1xuICAgICAgICBsb3cgPSBjb21wYXJhdG9yXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIElmIHRoZSBlZGdlIHZlcnNpb24gY29tcGFyYXRvciBoYXMgYSBvcGVyYXRvciB0aGVuIG91ciB2ZXJzaW9uXG4gICAgLy8gaXNuJ3Qgb3V0c2lkZSBpdFxuICAgIGlmIChoaWdoLm9wZXJhdG9yID09PSBjb21wIHx8IGhpZ2gub3BlcmF0b3IgPT09IGVjb21wKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgbG93ZXN0IHZlcnNpb24gY29tcGFyYXRvciBoYXMgYW4gb3BlcmF0b3IgYW5kIG91ciB2ZXJzaW9uXG4gICAgLy8gaXMgbGVzcyB0aGFuIGl0IHRoZW4gaXQgaXNuJ3QgaGlnaGVyIHRoYW4gdGhlIHJhbmdlXG4gICAgaWYgKCghbG93Lm9wZXJhdG9yIHx8IGxvdy5vcGVyYXRvciA9PT0gY29tcCkgJiZcbiAgICAgICAgbHRlZm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSBpZiAobG93Lm9wZXJhdG9yID09PSBlY29tcCAmJiBsdGZuKHZlcnNpb24sIGxvdy5zZW12ZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdXRzaWRlXG4iLCIvLyBnaXZlbiBhIHNldCBvZiB2ZXJzaW9ucyBhbmQgYSByYW5nZSwgY3JlYXRlIGEgXCJzaW1wbGlmaWVkXCIgcmFuZ2Vcbi8vIHRoYXQgaW5jbHVkZXMgdGhlIHNhbWUgdmVyc2lvbnMgdGhhdCB0aGUgb3JpZ2luYWwgcmFuZ2UgZG9lc1xuLy8gSWYgdGhlIG9yaWdpbmFsIHJhbmdlIGlzIHNob3J0ZXIgdGhhbiB0aGUgc2ltcGxpZmllZCBvbmUsIHJldHVybiB0aGF0LlxuY29uc3Qgc2F0aXNmaWVzID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL3NhdGlzZmllcy5qcycpXG5jb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi4vZnVuY3Rpb25zL2NvbXBhcmUuanMnKVxubW9kdWxlLmV4cG9ydHMgPSAodmVyc2lvbnMsIHJhbmdlLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHNldCA9IFtdXG4gIGxldCBmaXJzdCA9IG51bGxcbiAgbGV0IHByZXYgPSBudWxsXG4gIGNvbnN0IHYgPSB2ZXJzaW9ucy5zb3J0KChhLCBiKSA9PiBjb21wYXJlKGEsIGIsIG9wdGlvbnMpKVxuICBmb3IgKGNvbnN0IHZlcnNpb24gb2Ygdikge1xuICAgIGNvbnN0IGluY2x1ZGVkID0gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBvcHRpb25zKVxuICAgIGlmIChpbmNsdWRlZCkge1xuICAgICAgcHJldiA9IHZlcnNpb25cbiAgICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgZmlyc3QgPSB2ZXJzaW9uXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgIHNldC5wdXNoKFtmaXJzdCwgcHJldl0pXG4gICAgICB9XG4gICAgICBwcmV2ID0gbnVsbFxuICAgICAgZmlyc3QgPSBudWxsXG4gICAgfVxuICB9XG4gIGlmIChmaXJzdCkge1xuICAgIHNldC5wdXNoKFtmaXJzdCwgbnVsbF0pXG4gIH1cblxuICBjb25zdCByYW5nZXMgPSBbXVxuICBmb3IgKGNvbnN0IFttaW4sIG1heF0gb2Ygc2V0KSB7XG4gICAgaWYgKG1pbiA9PT0gbWF4KSB7XG4gICAgICByYW5nZXMucHVzaChtaW4pXG4gICAgfSBlbHNlIGlmICghbWF4ICYmIG1pbiA9PT0gdlswXSkge1xuICAgICAgcmFuZ2VzLnB1c2goJyonKVxuICAgIH0gZWxzZSBpZiAoIW1heCkge1xuICAgICAgcmFuZ2VzLnB1c2goYD49JHttaW59YClcbiAgICB9IGVsc2UgaWYgKG1pbiA9PT0gdlswXSkge1xuICAgICAgcmFuZ2VzLnB1c2goYDw9JHttYXh9YClcbiAgICB9IGVsc2Uge1xuICAgICAgcmFuZ2VzLnB1c2goYCR7bWlufSAtICR7bWF4fWApXG4gICAgfVxuICB9XG4gIGNvbnN0IHNpbXBsaWZpZWQgPSByYW5nZXMuam9pbignIHx8ICcpXG4gIGNvbnN0IG9yaWdpbmFsID0gdHlwZW9mIHJhbmdlLnJhdyA9PT0gJ3N0cmluZycgPyByYW5nZS5yYXcgOiBTdHJpbmcocmFuZ2UpXG4gIHJldHVybiBzaW1wbGlmaWVkLmxlbmd0aCA8IG9yaWdpbmFsLmxlbmd0aCA/IHNpbXBsaWZpZWQgOiByYW5nZVxufVxuIiwiY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3JhbmdlLmpzJylcbmNvbnN0IENvbXBhcmF0b3IgPSByZXF1aXJlKCcuLi9jbGFzc2VzL2NvbXBhcmF0b3IuanMnKVxuY29uc3QgeyBBTlkgfSA9IENvbXBhcmF0b3JcbmNvbnN0IHNhdGlzZmllcyA9IHJlcXVpcmUoJy4uL2Z1bmN0aW9ucy9zYXRpc2ZpZXMuanMnKVxuY29uc3QgY29tcGFyZSA9IHJlcXVpcmUoJy4uL2Z1bmN0aW9ucy9jb21wYXJlLmpzJylcblxuLy8gQ29tcGxleCByYW5nZSBgcjEgfHwgcjIgfHwgLi4uYCBpcyBhIHN1YnNldCBvZiBgUjEgfHwgUjIgfHwgLi4uYCBpZmY6XG4vLyAtIEV2ZXJ5IHNpbXBsZSByYW5nZSBgcjEsIHIyLCAuLi5gIGlzIGEgbnVsbCBzZXQsIE9SXG4vLyAtIEV2ZXJ5IHNpbXBsZSByYW5nZSBgcjEsIHIyLCAuLi5gIHdoaWNoIGlzIG5vdCBhIG51bGwgc2V0IGlzIGEgc3Vic2V0IG9mXG4vLyAgIHNvbWUgYFIxLCBSMiwgLi4uYFxuLy9cbi8vIFNpbXBsZSByYW5nZSBgYzEgYzIgLi4uYCBpcyBhIHN1YnNldCBvZiBzaW1wbGUgcmFuZ2UgYEMxIEMyIC4uLmAgaWZmOlxuLy8gLSBJZiBjIGlzIG9ubHkgdGhlIEFOWSBjb21wYXJhdG9yXG4vLyAgIC0gSWYgQyBpcyBvbmx5IHRoZSBBTlkgY29tcGFyYXRvciwgcmV0dXJuIHRydWVcbi8vICAgLSBFbHNlIGlmIGluIHByZXJlbGVhc2UgbW9kZSwgcmV0dXJuIGZhbHNlXG4vLyAgIC0gZWxzZSByZXBsYWNlIGMgd2l0aCBgWz49MC4wLjBdYFxuLy8gLSBJZiBDIGlzIG9ubHkgdGhlIEFOWSBjb21wYXJhdG9yXG4vLyAgIC0gaWYgaW4gcHJlcmVsZWFzZSBtb2RlLCByZXR1cm4gdHJ1ZVxuLy8gICAtIGVsc2UgcmVwbGFjZSBDIHdpdGggYFs+PTAuMC4wXWBcbi8vIC0gTGV0IEVRIGJlIHRoZSBzZXQgb2YgPSBjb21wYXJhdG9ycyBpbiBjXG4vLyAtIElmIEVRIGlzIG1vcmUgdGhhbiBvbmUsIHJldHVybiB0cnVlIChudWxsIHNldClcbi8vIC0gTGV0IEdUIGJlIHRoZSBoaWdoZXN0ID4gb3IgPj0gY29tcGFyYXRvciBpbiBjXG4vLyAtIExldCBMVCBiZSB0aGUgbG93ZXN0IDwgb3IgPD0gY29tcGFyYXRvciBpbiBjXG4vLyAtIElmIEdUIGFuZCBMVCwgYW5kIEdULnNlbXZlciA+IExULnNlbXZlciwgcmV0dXJuIHRydWUgKG51bGwgc2V0KVxuLy8gLSBJZiBhbnkgQyBpcyBhID0gcmFuZ2UsIGFuZCBHVCBvciBMVCBhcmUgc2V0LCByZXR1cm4gZmFsc2Vcbi8vIC0gSWYgRVFcbi8vICAgLSBJZiBHVCwgYW5kIEVRIGRvZXMgbm90IHNhdGlzZnkgR1QsIHJldHVybiB0cnVlIChudWxsIHNldClcbi8vICAgLSBJZiBMVCwgYW5kIEVRIGRvZXMgbm90IHNhdGlzZnkgTFQsIHJldHVybiB0cnVlIChudWxsIHNldClcbi8vICAgLSBJZiBFUSBzYXRpc2ZpZXMgZXZlcnkgQywgcmV0dXJuIHRydWVcbi8vICAgLSBFbHNlIHJldHVybiBmYWxzZVxuLy8gLSBJZiBHVFxuLy8gICAtIElmIEdULnNlbXZlciBpcyBsb3dlciB0aGFuIGFueSA+IG9yID49IGNvbXAgaW4gQywgcmV0dXJuIGZhbHNlXG4vLyAgIC0gSWYgR1QgaXMgPj0sIGFuZCBHVC5zZW12ZXIgZG9lcyBub3Qgc2F0aXNmeSBldmVyeSBDLCByZXR1cm4gZmFsc2Vcbi8vICAgLSBJZiBHVC5zZW12ZXIgaGFzIGEgcHJlcmVsZWFzZSwgYW5kIG5vdCBpbiBwcmVyZWxlYXNlIG1vZGVcbi8vICAgICAtIElmIG5vIEMgaGFzIGEgcHJlcmVsZWFzZSBhbmQgdGhlIEdULnNlbXZlciB0dXBsZSwgcmV0dXJuIGZhbHNlXG4vLyAtIElmIExUXG4vLyAgIC0gSWYgTFQuc2VtdmVyIGlzIGdyZWF0ZXIgdGhhbiBhbnkgPCBvciA8PSBjb21wIGluIEMsIHJldHVybiBmYWxzZVxuLy8gICAtIElmIExUIGlzIDw9LCBhbmQgTFQuc2VtdmVyIGRvZXMgbm90IHNhdGlzZnkgZXZlcnkgQywgcmV0dXJuIGZhbHNlXG4vLyAgIC0gSWYgR1Quc2VtdmVyIGhhcyBhIHByZXJlbGVhc2UsIGFuZCBub3QgaW4gcHJlcmVsZWFzZSBtb2RlXG4vLyAgICAgLSBJZiBubyBDIGhhcyBhIHByZXJlbGVhc2UgYW5kIHRoZSBMVC5zZW12ZXIgdHVwbGUsIHJldHVybiBmYWxzZVxuLy8gLSBFbHNlIHJldHVybiB0cnVlXG5cbmNvbnN0IHN1YnNldCA9IChzdWIsIGRvbSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGlmIChzdWIgPT09IGRvbSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzdWIgPSBuZXcgUmFuZ2Uoc3ViLCBvcHRpb25zKVxuICBkb20gPSBuZXcgUmFuZ2UoZG9tLCBvcHRpb25zKVxuICBsZXQgc2F3Tm9uTnVsbCA9IGZhbHNlXG5cbiAgT1VURVI6IGZvciAoY29uc3Qgc2ltcGxlU3ViIG9mIHN1Yi5zZXQpIHtcbiAgICBmb3IgKGNvbnN0IHNpbXBsZURvbSBvZiBkb20uc2V0KSB7XG4gICAgICBjb25zdCBpc1N1YiA9IHNpbXBsZVN1YnNldChzaW1wbGVTdWIsIHNpbXBsZURvbSwgb3B0aW9ucylcbiAgICAgIHNhd05vbk51bGwgPSBzYXdOb25OdWxsIHx8IGlzU3ViICE9PSBudWxsXG4gICAgICBpZiAoaXNTdWIpIHtcbiAgICAgICAgY29udGludWUgT1VURVJcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdGhlIG51bGwgc2V0IGlzIGEgc3Vic2V0IG9mIGV2ZXJ5dGhpbmcsIGJ1dCBudWxsIHNpbXBsZSByYW5nZXMgaW5cbiAgICAvLyBhIGNvbXBsZXggcmFuZ2Ugc2hvdWxkIGJlIGlnbm9yZWQuICBzbyBpZiB3ZSBzYXcgYSBub24tbnVsbCByYW5nZSxcbiAgICAvLyB0aGVuIHdlIGtub3cgdGhpcyBpc24ndCBhIHN1YnNldCwgYnV0IGlmIEVWRVJZIHNpbXBsZSByYW5nZSB3YXMgbnVsbCxcbiAgICAvLyB0aGVuIGl0IGlzIGEgc3Vic2V0LlxuICAgIGlmIChzYXdOb25OdWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuY29uc3Qgc2ltcGxlU3Vic2V0ID0gKHN1YiwgZG9tLCBvcHRpb25zKSA9PiB7XG4gIGlmIChzdWIgPT09IGRvbSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAoc3ViLmxlbmd0aCA9PT0gMSAmJiBzdWJbMF0uc2VtdmVyID09PSBBTlkpIHtcbiAgICBpZiAoZG9tLmxlbmd0aCA9PT0gMSAmJiBkb21bMF0uc2VtdmVyID09PSBBTlkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlKSB7XG4gICAgICBzdWIgPSBbbmV3IENvbXBhcmF0b3IoJz49MC4wLjAtMCcpXVxuICAgIH0gZWxzZSB7XG4gICAgICBzdWIgPSBbbmV3IENvbXBhcmF0b3IoJz49MC4wLjAnKV1cbiAgICB9XG4gIH1cblxuICBpZiAoZG9tLmxlbmd0aCA9PT0gMSAmJiBkb21bMF0uc2VtdmVyID09PSBBTlkpIHtcbiAgICBpZiAob3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tID0gW25ldyBDb21wYXJhdG9yKCc+PTAuMC4wJyldXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZXFTZXQgPSBuZXcgU2V0KClcbiAgbGV0IGd0LCBsdFxuICBmb3IgKGNvbnN0IGMgb2Ygc3ViKSB7XG4gICAgaWYgKGMub3BlcmF0b3IgPT09ICc+JyB8fCBjLm9wZXJhdG9yID09PSAnPj0nKSB7XG4gICAgICBndCA9IGhpZ2hlckdUKGd0LCBjLCBvcHRpb25zKVxuICAgIH0gZWxzZSBpZiAoYy5vcGVyYXRvciA9PT0gJzwnIHx8IGMub3BlcmF0b3IgPT09ICc8PScpIHtcbiAgICAgIGx0ID0gbG93ZXJMVChsdCwgYywgb3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgZXFTZXQuYWRkKGMuc2VtdmVyKVxuICAgIH1cbiAgfVxuXG4gIGlmIChlcVNldC5zaXplID4gMSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBsZXQgZ3RsdENvbXBcbiAgaWYgKGd0ICYmIGx0KSB7XG4gICAgZ3RsdENvbXAgPSBjb21wYXJlKGd0LnNlbXZlciwgbHQuc2VtdmVyLCBvcHRpb25zKVxuICAgIGlmIChndGx0Q29tcCA+IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfSBlbHNlIGlmIChndGx0Q29tcCA9PT0gMCAmJiAoZ3Qub3BlcmF0b3IgIT09ICc+PScgfHwgbHQub3BlcmF0b3IgIT09ICc8PScpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIC8vIHdpbGwgaXRlcmF0ZSBvbmUgb3IgemVybyB0aW1lc1xuICBmb3IgKGNvbnN0IGVxIG9mIGVxU2V0KSB7XG4gICAgaWYgKGd0ICYmICFzYXRpc2ZpZXMoZXEsIFN0cmluZyhndCksIG9wdGlvbnMpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGlmIChsdCAmJiAhc2F0aXNmaWVzKGVxLCBTdHJpbmcobHQpLCBvcHRpb25zKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGMgb2YgZG9tKSB7XG4gICAgICBpZiAoIXNhdGlzZmllcyhlcSwgU3RyaW5nKGMpLCBvcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbGV0IGhpZ2hlciwgbG93ZXJcbiAgbGV0IGhhc0RvbUxULCBoYXNEb21HVFxuICAvLyBpZiB0aGUgc3Vic2V0IGhhcyBhIHByZXJlbGVhc2UsIHdlIG5lZWQgYSBjb21wYXJhdG9yIGluIHRoZSBzdXBlcnNldFxuICAvLyB3aXRoIHRoZSBzYW1lIHR1cGxlIGFuZCBhIHByZXJlbGVhc2UsIG9yIGl0J3Mgbm90IGEgc3Vic2V0XG4gIGxldCBuZWVkRG9tTFRQcmUgPSBsdCAmJlxuICAgICFvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlICYmXG4gICAgbHQuc2VtdmVyLnByZXJlbGVhc2UubGVuZ3RoID8gbHQuc2VtdmVyIDogZmFsc2VcbiAgbGV0IG5lZWREb21HVFByZSA9IGd0ICYmXG4gICAgIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UgJiZcbiAgICBndC5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggPyBndC5zZW12ZXIgOiBmYWxzZVxuICAvLyBleGNlcHRpb246IDwxLjIuMy0wIGlzIHRoZSBzYW1lIGFzIDwxLjIuM1xuICBpZiAobmVlZERvbUxUUHJlICYmIG5lZWREb21MVFByZS5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgbHQub3BlcmF0b3IgPT09ICc8JyAmJiBuZWVkRG9tTFRQcmUucHJlcmVsZWFzZVswXSA9PT0gMCkge1xuICAgIG5lZWREb21MVFByZSA9IGZhbHNlXG4gIH1cblxuICBmb3IgKGNvbnN0IGMgb2YgZG9tKSB7XG4gICAgaGFzRG9tR1QgPSBoYXNEb21HVCB8fCBjLm9wZXJhdG9yID09PSAnPicgfHwgYy5vcGVyYXRvciA9PT0gJz49J1xuICAgIGhhc0RvbUxUID0gaGFzRG9tTFQgfHwgYy5vcGVyYXRvciA9PT0gJzwnIHx8IGMub3BlcmF0b3IgPT09ICc8PSdcbiAgICBpZiAoZ3QpIHtcbiAgICAgIGlmIChuZWVkRG9tR1RQcmUpIHtcbiAgICAgICAgaWYgKGMuc2VtdmVyLnByZXJlbGVhc2UgJiYgYy5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggJiZcbiAgICAgICAgICAgIGMuc2VtdmVyLm1ham9yID09PSBuZWVkRG9tR1RQcmUubWFqb3IgJiZcbiAgICAgICAgICAgIGMuc2VtdmVyLm1pbm9yID09PSBuZWVkRG9tR1RQcmUubWlub3IgJiZcbiAgICAgICAgICAgIGMuc2VtdmVyLnBhdGNoID09PSBuZWVkRG9tR1RQcmUucGF0Y2gpIHtcbiAgICAgICAgICBuZWVkRG9tR1RQcmUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYy5vcGVyYXRvciA9PT0gJz4nIHx8IGMub3BlcmF0b3IgPT09ICc+PScpIHtcbiAgICAgICAgaGlnaGVyID0gaGlnaGVyR1QoZ3QsIGMsIG9wdGlvbnMpXG4gICAgICAgIGlmIChoaWdoZXIgPT09IGMgJiYgaGlnaGVyICE9PSBndCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGd0Lm9wZXJhdG9yID09PSAnPj0nICYmICFzYXRpc2ZpZXMoZ3Quc2VtdmVyLCBTdHJpbmcoYyksIG9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAobHQpIHtcbiAgICAgIGlmIChuZWVkRG9tTFRQcmUpIHtcbiAgICAgICAgaWYgKGMuc2VtdmVyLnByZXJlbGVhc2UgJiYgYy5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggJiZcbiAgICAgICAgICAgIGMuc2VtdmVyLm1ham9yID09PSBuZWVkRG9tTFRQcmUubWFqb3IgJiZcbiAgICAgICAgICAgIGMuc2VtdmVyLm1pbm9yID09PSBuZWVkRG9tTFRQcmUubWlub3IgJiZcbiAgICAgICAgICAgIGMuc2VtdmVyLnBhdGNoID09PSBuZWVkRG9tTFRQcmUucGF0Y2gpIHtcbiAgICAgICAgICBuZWVkRG9tTFRQcmUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYy5vcGVyYXRvciA9PT0gJzwnIHx8IGMub3BlcmF0b3IgPT09ICc8PScpIHtcbiAgICAgICAgbG93ZXIgPSBsb3dlckxUKGx0LCBjLCBvcHRpb25zKVxuICAgICAgICBpZiAobG93ZXIgPT09IGMgJiYgbG93ZXIgIT09IGx0KSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobHQub3BlcmF0b3IgPT09ICc8PScgJiYgIXNhdGlzZmllcyhsdC5zZW12ZXIsIFN0cmluZyhjKSwgb3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIGlmICghYy5vcGVyYXRvciAmJiAobHQgfHwgZ3QpICYmIGd0bHRDb21wICE9PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGVyZSB3YXMgYSA8IG9yID4sIGFuZCBub3RoaW5nIGluIHRoZSBkb20sIHRoZW4gbXVzdCBiZSBmYWxzZVxuICAvLyBVTkxFU1MgaXQgd2FzIGxpbWl0ZWQgYnkgYW5vdGhlciByYW5nZSBpbiB0aGUgb3RoZXIgZGlyZWN0aW9uLlxuICAvLyBFZywgPjEuMC4wIDwxLjAuMSBpcyBzdGlsbCBhIHN1YnNldCBvZiA8Mi4wLjBcbiAgaWYgKGd0ICYmIGhhc0RvbUxUICYmICFsdCAmJiBndGx0Q29tcCAhPT0gMCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKGx0ICYmIGhhc0RvbUdUICYmICFndCAmJiBndGx0Q29tcCAhPT0gMCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gd2UgbmVlZGVkIGEgcHJlcmVsZWFzZSByYW5nZSBpbiBhIHNwZWNpZmljIHR1cGxlLCBidXQgZGlkbid0IGdldCBvbmVcbiAgLy8gdGhlbiB0aGlzIGlzbid0IGEgc3Vic2V0LiAgZWcgPj0xLjIuMy1wcmUgaXMgbm90IGEgc3Vic2V0IG9mID49MS4wLjAsXG4gIC8vIGJlY2F1c2UgaXQgaW5jbHVkZXMgcHJlcmVsZWFzZXMgaW4gdGhlIDEuMi4zIHR1cGxlXG4gIGlmIChuZWVkRG9tR1RQcmUgfHwgbmVlZERvbUxUUHJlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG4vLyA+PTEuMi4zIGlzIGxvd2VyIHRoYW4gPjEuMi4zXG5jb25zdCBoaWdoZXJHVCA9IChhLCBiLCBvcHRpb25zKSA9PiB7XG4gIGlmICghYSkge1xuICAgIHJldHVybiBiXG4gIH1cbiAgY29uc3QgY29tcCA9IGNvbXBhcmUoYS5zZW12ZXIsIGIuc2VtdmVyLCBvcHRpb25zKVxuICByZXR1cm4gY29tcCA+IDAgPyBhXG4gICAgOiBjb21wIDwgMCA/IGJcbiAgICA6IGIub3BlcmF0b3IgPT09ICc+JyAmJiBhLm9wZXJhdG9yID09PSAnPj0nID8gYlxuICAgIDogYVxufVxuXG4vLyA8PTEuMi4zIGlzIGhpZ2hlciB0aGFuIDwxLjIuM1xuY29uc3QgbG93ZXJMVCA9IChhLCBiLCBvcHRpb25zKSA9PiB7XG4gIGlmICghYSkge1xuICAgIHJldHVybiBiXG4gIH1cbiAgY29uc3QgY29tcCA9IGNvbXBhcmUoYS5zZW12ZXIsIGIuc2VtdmVyLCBvcHRpb25zKVxuICByZXR1cm4gY29tcCA8IDAgPyBhXG4gICAgOiBjb21wID4gMCA/IGJcbiAgICA6IGIub3BlcmF0b3IgPT09ICc8JyAmJiBhLm9wZXJhdG9yID09PSAnPD0nID8gYlxuICAgIDogYVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN1YnNldFxuIiwiY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3JhbmdlJylcblxuLy8gTW9zdGx5IGp1c3QgZm9yIHRlc3RpbmcgYW5kIGxlZ2FjeSBBUEkgcmVhc29uc1xuY29uc3QgdG9Db21wYXJhdG9ycyA9IChyYW5nZSwgb3B0aW9ucykgPT5cbiAgbmV3IFJhbmdlKHJhbmdlLCBvcHRpb25zKS5zZXRcbiAgICAubWFwKGNvbXAgPT4gY29tcC5tYXAoYyA9PiBjLnZhbHVlKS5qb2luKCcgJykudHJpbSgpLnNwbGl0KCcgJykpXG5cbm1vZHVsZS5leHBvcnRzID0gdG9Db21wYXJhdG9yc1xuIiwiY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3JhbmdlJylcbmNvbnN0IHZhbGlkUmFuZ2UgPSAocmFuZ2UsIG9wdGlvbnMpID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBSZXR1cm4gJyonIGluc3RlYWQgb2YgJycgc28gdGhhdCB0cnV0aGluZXNzIHdvcmtzLlxuICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBpZiBpdCdzIGludmFsaWQgYW55d2F5XG4gICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgb3B0aW9ucykucmFuZ2UgfHwgJyonXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZFJhbmdlXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiJ3VzZSBzdHJpY3QnXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChZYWxsaXN0KSB7XG4gIFlhbGxpc3QucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiogKCkge1xuICAgIGZvciAobGV0IHdhbGtlciA9IHRoaXMuaGVhZDsgd2Fsa2VyOyB3YWxrZXIgPSB3YWxrZXIubmV4dCkge1xuICAgICAgeWllbGQgd2Fsa2VyLnZhbHVlXG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcbm1vZHVsZS5leHBvcnRzID0gWWFsbGlzdFxuXG5ZYWxsaXN0Lk5vZGUgPSBOb2RlXG5ZYWxsaXN0LmNyZWF0ZSA9IFlhbGxpc3RcblxuZnVuY3Rpb24gWWFsbGlzdCAobGlzdCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgaWYgKCEoc2VsZiBpbnN0YW5jZW9mIFlhbGxpc3QpKSB7XG4gICAgc2VsZiA9IG5ldyBZYWxsaXN0KClcbiAgfVxuXG4gIHNlbGYudGFpbCA9IG51bGxcbiAgc2VsZi5oZWFkID0gbnVsbFxuICBzZWxmLmxlbmd0aCA9IDBcblxuICBpZiAobGlzdCAmJiB0eXBlb2YgbGlzdC5mb3JFYWNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBzZWxmLnB1c2goaXRlbSlcbiAgICB9KVxuICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBzZWxmLnB1c2goYXJndW1lbnRzW2ldKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZWxmXG59XG5cbllhbGxpc3QucHJvdG90eXBlLnJlbW92ZU5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICBpZiAobm9kZS5saXN0ICE9PSB0aGlzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdyZW1vdmluZyBub2RlIHdoaWNoIGRvZXMgbm90IGJlbG9uZyB0byB0aGlzIGxpc3QnKVxuICB9XG5cbiAgdmFyIG5leHQgPSBub2RlLm5leHRcbiAgdmFyIHByZXYgPSBub2RlLnByZXZcblxuICBpZiAobmV4dCkge1xuICAgIG5leHQucHJldiA9IHByZXZcbiAgfVxuXG4gIGlmIChwcmV2KSB7XG4gICAgcHJldi5uZXh0ID0gbmV4dFxuICB9XG5cbiAgaWYgKG5vZGUgPT09IHRoaXMuaGVhZCkge1xuICAgIHRoaXMuaGVhZCA9IG5leHRcbiAgfVxuICBpZiAobm9kZSA9PT0gdGhpcy50YWlsKSB7XG4gICAgdGhpcy50YWlsID0gcHJldlxuICB9XG5cbiAgbm9kZS5saXN0Lmxlbmd0aC0tXG4gIG5vZGUubmV4dCA9IG51bGxcbiAgbm9kZS5wcmV2ID0gbnVsbFxuICBub2RlLmxpc3QgPSBudWxsXG5cbiAgcmV0dXJuIG5leHRcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUudW5zaGlmdE5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICBpZiAobm9kZSA9PT0gdGhpcy5oZWFkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAobm9kZS5saXN0KSB7XG4gICAgbm9kZS5saXN0LnJlbW92ZU5vZGUobm9kZSlcbiAgfVxuXG4gIHZhciBoZWFkID0gdGhpcy5oZWFkXG4gIG5vZGUubGlzdCA9IHRoaXNcbiAgbm9kZS5uZXh0ID0gaGVhZFxuICBpZiAoaGVhZCkge1xuICAgIGhlYWQucHJldiA9IG5vZGVcbiAgfVxuXG4gIHRoaXMuaGVhZCA9IG5vZGVcbiAgaWYgKCF0aGlzLnRhaWwpIHtcbiAgICB0aGlzLnRhaWwgPSBub2RlXG4gIH1cbiAgdGhpcy5sZW5ndGgrK1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5wdXNoTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIGlmIChub2RlID09PSB0aGlzLnRhaWwpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChub2RlLmxpc3QpIHtcbiAgICBub2RlLmxpc3QucmVtb3ZlTm9kZShub2RlKVxuICB9XG5cbiAgdmFyIHRhaWwgPSB0aGlzLnRhaWxcbiAgbm9kZS5saXN0ID0gdGhpc1xuICBub2RlLnByZXYgPSB0YWlsXG4gIGlmICh0YWlsKSB7XG4gICAgdGFpbC5uZXh0ID0gbm9kZVxuICB9XG5cbiAgdGhpcy50YWlsID0gbm9kZVxuICBpZiAoIXRoaXMuaGVhZCkge1xuICAgIHRoaXMuaGVhZCA9IG5vZGVcbiAgfVxuICB0aGlzLmxlbmd0aCsrXG59XG5cbllhbGxpc3QucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHB1c2godGhpcywgYXJndW1lbnRzW2ldKVxuICB9XG4gIHJldHVybiB0aGlzLmxlbmd0aFxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB1bnNoaWZ0KHRoaXMsIGFyZ3VtZW50c1tpXSlcbiAgfVxuICByZXR1cm4gdGhpcy5sZW5ndGhcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMudGFpbCkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHZhciByZXMgPSB0aGlzLnRhaWwudmFsdWVcbiAgdGhpcy50YWlsID0gdGhpcy50YWlsLnByZXZcbiAgaWYgKHRoaXMudGFpbCkge1xuICAgIHRoaXMudGFpbC5uZXh0ID0gbnVsbFxuICB9IGVsc2Uge1xuICAgIHRoaXMuaGVhZCA9IG51bGxcbiAgfVxuICB0aGlzLmxlbmd0aC0tXG4gIHJldHVybiByZXNcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUuc2hpZnQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5oZWFkKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgdmFyIHJlcyA9IHRoaXMuaGVhZC52YWx1ZVxuICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dFxuICBpZiAodGhpcy5oZWFkKSB7XG4gICAgdGhpcy5oZWFkLnByZXYgPSBudWxsXG4gIH0gZWxzZSB7XG4gICAgdGhpcy50YWlsID0gbnVsbFxuICB9XG4gIHRoaXMubGVuZ3RoLS1cbiAgcmV0dXJuIHJlc1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGZuLCB0aGlzcCkge1xuICB0aGlzcCA9IHRoaXNwIHx8IHRoaXNcbiAgZm9yICh2YXIgd2Fsa2VyID0gdGhpcy5oZWFkLCBpID0gMDsgd2Fsa2VyICE9PSBudWxsOyBpKyspIHtcbiAgICBmbi5jYWxsKHRoaXNwLCB3YWxrZXIudmFsdWUsIGksIHRoaXMpXG4gICAgd2Fsa2VyID0gd2Fsa2VyLm5leHRcbiAgfVxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5mb3JFYWNoUmV2ZXJzZSA9IGZ1bmN0aW9uIChmbiwgdGhpc3ApIHtcbiAgdGhpc3AgPSB0aGlzcCB8fCB0aGlzXG4gIGZvciAodmFyIHdhbGtlciA9IHRoaXMudGFpbCwgaSA9IHRoaXMubGVuZ3RoIC0gMTsgd2Fsa2VyICE9PSBudWxsOyBpLS0pIHtcbiAgICBmbi5jYWxsKHRoaXNwLCB3YWxrZXIudmFsdWUsIGksIHRoaXMpXG4gICAgd2Fsa2VyID0gd2Fsa2VyLnByZXZcbiAgfVxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobikge1xuICBmb3IgKHZhciBpID0gMCwgd2Fsa2VyID0gdGhpcy5oZWFkOyB3YWxrZXIgIT09IG51bGwgJiYgaSA8IG47IGkrKykge1xuICAgIC8vIGFib3J0IG91dCBvZiB0aGUgbGlzdCBlYXJseSBpZiB3ZSBoaXQgYSBjeWNsZVxuICAgIHdhbGtlciA9IHdhbGtlci5uZXh0XG4gIH1cbiAgaWYgKGkgPT09IG4gJiYgd2Fsa2VyICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHdhbGtlci52YWx1ZVxuICB9XG59XG5cbllhbGxpc3QucHJvdG90eXBlLmdldFJldmVyc2UgPSBmdW5jdGlvbiAobikge1xuICBmb3IgKHZhciBpID0gMCwgd2Fsa2VyID0gdGhpcy50YWlsOyB3YWxrZXIgIT09IG51bGwgJiYgaSA8IG47IGkrKykge1xuICAgIC8vIGFib3J0IG91dCBvZiB0aGUgbGlzdCBlYXJseSBpZiB3ZSBoaXQgYSBjeWNsZVxuICAgIHdhbGtlciA9IHdhbGtlci5wcmV2XG4gIH1cbiAgaWYgKGkgPT09IG4gJiYgd2Fsa2VyICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHdhbGtlci52YWx1ZVxuICB9XG59XG5cbllhbGxpc3QucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmbiwgdGhpc3ApIHtcbiAgdGhpc3AgPSB0aGlzcCB8fCB0aGlzXG4gIHZhciByZXMgPSBuZXcgWWFsbGlzdCgpXG4gIGZvciAodmFyIHdhbGtlciA9IHRoaXMuaGVhZDsgd2Fsa2VyICE9PSBudWxsOykge1xuICAgIHJlcy5wdXNoKGZuLmNhbGwodGhpc3AsIHdhbGtlci52YWx1ZSwgdGhpcykpXG4gICAgd2Fsa2VyID0gd2Fsa2VyLm5leHRcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbllhbGxpc3QucHJvdG90eXBlLm1hcFJldmVyc2UgPSBmdW5jdGlvbiAoZm4sIHRoaXNwKSB7XG4gIHRoaXNwID0gdGhpc3AgfHwgdGhpc1xuICB2YXIgcmVzID0gbmV3IFlhbGxpc3QoKVxuICBmb3IgKHZhciB3YWxrZXIgPSB0aGlzLnRhaWw7IHdhbGtlciAhPT0gbnVsbDspIHtcbiAgICByZXMucHVzaChmbi5jYWxsKHRoaXNwLCB3YWxrZXIudmFsdWUsIHRoaXMpKVxuICAgIHdhbGtlciA9IHdhbGtlci5wcmV2XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5yZWR1Y2UgPSBmdW5jdGlvbiAoZm4sIGluaXRpYWwpIHtcbiAgdmFyIGFjY1xuICB2YXIgd2Fsa2VyID0gdGhpcy5oZWFkXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgIGFjYyA9IGluaXRpYWxcbiAgfSBlbHNlIGlmICh0aGlzLmhlYWQpIHtcbiAgICB3YWxrZXIgPSB0aGlzLmhlYWQubmV4dFxuICAgIGFjYyA9IHRoaXMuaGVhZC52YWx1ZVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlZHVjZSBvZiBlbXB0eSBsaXN0IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpXG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgd2Fsa2VyICE9PSBudWxsOyBpKyspIHtcbiAgICBhY2MgPSBmbihhY2MsIHdhbGtlci52YWx1ZSwgaSlcbiAgICB3YWxrZXIgPSB3YWxrZXIubmV4dFxuICB9XG5cbiAgcmV0dXJuIGFjY1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5yZWR1Y2VSZXZlcnNlID0gZnVuY3Rpb24gKGZuLCBpbml0aWFsKSB7XG4gIHZhciBhY2NcbiAgdmFyIHdhbGtlciA9IHRoaXMudGFpbFxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBhY2MgPSBpbml0aWFsXG4gIH0gZWxzZSBpZiAodGhpcy50YWlsKSB7XG4gICAgd2Fsa2VyID0gdGhpcy50YWlsLnByZXZcbiAgICBhY2MgPSB0aGlzLnRhaWwudmFsdWVcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWR1Y2Ugb2YgZW1wdHkgbGlzdCB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IHRoaXMubGVuZ3RoIC0gMTsgd2Fsa2VyICE9PSBudWxsOyBpLS0pIHtcbiAgICBhY2MgPSBmbihhY2MsIHdhbGtlci52YWx1ZSwgaSlcbiAgICB3YWxrZXIgPSB3YWxrZXIucHJldlxuICB9XG5cbiAgcmV0dXJuIGFjY1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyID0gbmV3IEFycmF5KHRoaXMubGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMCwgd2Fsa2VyID0gdGhpcy5oZWFkOyB3YWxrZXIgIT09IG51bGw7IGkrKykge1xuICAgIGFycltpXSA9IHdhbGtlci52YWx1ZVxuICAgIHdhbGtlciA9IHdhbGtlci5uZXh0XG4gIH1cbiAgcmV0dXJuIGFyclxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS50b0FycmF5UmV2ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFyciA9IG5ldyBBcnJheSh0aGlzLmxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDAsIHdhbGtlciA9IHRoaXMudGFpbDsgd2Fsa2VyICE9PSBudWxsOyBpKyspIHtcbiAgICBhcnJbaV0gPSB3YWxrZXIudmFsdWVcbiAgICB3YWxrZXIgPSB3YWxrZXIucHJldlxuICB9XG4gIHJldHVybiBhcnJcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgdG8gPSB0byB8fCB0aGlzLmxlbmd0aFxuICBpZiAodG8gPCAwKSB7XG4gICAgdG8gKz0gdGhpcy5sZW5ndGhcbiAgfVxuICBmcm9tID0gZnJvbSB8fCAwXG4gIGlmIChmcm9tIDwgMCkge1xuICAgIGZyb20gKz0gdGhpcy5sZW5ndGhcbiAgfVxuICB2YXIgcmV0ID0gbmV3IFlhbGxpc3QoKVxuICBpZiAodG8gPCBmcm9tIHx8IHRvIDwgMCkge1xuICAgIHJldHVybiByZXRcbiAgfVxuICBpZiAoZnJvbSA8IDApIHtcbiAgICBmcm9tID0gMFxuICB9XG4gIGlmICh0byA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdG8gPSB0aGlzLmxlbmd0aFxuICB9XG4gIGZvciAodmFyIGkgPSAwLCB3YWxrZXIgPSB0aGlzLmhlYWQ7IHdhbGtlciAhPT0gbnVsbCAmJiBpIDwgZnJvbTsgaSsrKSB7XG4gICAgd2Fsa2VyID0gd2Fsa2VyLm5leHRcbiAgfVxuICBmb3IgKDsgd2Fsa2VyICE9PSBudWxsICYmIGkgPCB0bzsgaSsrLCB3YWxrZXIgPSB3YWxrZXIubmV4dCkge1xuICAgIHJldC5wdXNoKHdhbGtlci52YWx1ZSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbllhbGxpc3QucHJvdG90eXBlLnNsaWNlUmV2ZXJzZSA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICB0byA9IHRvIHx8IHRoaXMubGVuZ3RoXG4gIGlmICh0byA8IDApIHtcbiAgICB0byArPSB0aGlzLmxlbmd0aFxuICB9XG4gIGZyb20gPSBmcm9tIHx8IDBcbiAgaWYgKGZyb20gPCAwKSB7XG4gICAgZnJvbSArPSB0aGlzLmxlbmd0aFxuICB9XG4gIHZhciByZXQgPSBuZXcgWWFsbGlzdCgpXG4gIGlmICh0byA8IGZyb20gfHwgdG8gPCAwKSB7XG4gICAgcmV0dXJuIHJldFxuICB9XG4gIGlmIChmcm9tIDwgMCkge1xuICAgIGZyb20gPSAwXG4gIH1cbiAgaWYgKHRvID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0byA9IHRoaXMubGVuZ3RoXG4gIH1cbiAgZm9yICh2YXIgaSA9IHRoaXMubGVuZ3RoLCB3YWxrZXIgPSB0aGlzLnRhaWw7IHdhbGtlciAhPT0gbnVsbCAmJiBpID4gdG87IGktLSkge1xuICAgIHdhbGtlciA9IHdhbGtlci5wcmV2XG4gIH1cbiAgZm9yICg7IHdhbGtlciAhPT0gbnVsbCAmJiBpID4gZnJvbTsgaS0tLCB3YWxrZXIgPSB3YWxrZXIucHJldikge1xuICAgIHJldC5wdXNoKHdhbGtlci52YWx1ZSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbllhbGxpc3QucHJvdG90eXBlLnNwbGljZSA9IGZ1bmN0aW9uIChzdGFydCwgZGVsZXRlQ291bnQsIC4uLm5vZGVzKSB7XG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgc3RhcnQgPSB0aGlzLmxlbmd0aCAtIDFcbiAgfVxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSB0aGlzLmxlbmd0aCArIHN0YXJ0O1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIHdhbGtlciA9IHRoaXMuaGVhZDsgd2Fsa2VyICE9PSBudWxsICYmIGkgPCBzdGFydDsgaSsrKSB7XG4gICAgd2Fsa2VyID0gd2Fsa2VyLm5leHRcbiAgfVxuXG4gIHZhciByZXQgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgd2Fsa2VyICYmIGkgPCBkZWxldGVDb3VudDsgaSsrKSB7XG4gICAgcmV0LnB1c2god2Fsa2VyLnZhbHVlKVxuICAgIHdhbGtlciA9IHRoaXMucmVtb3ZlTm9kZSh3YWxrZXIpXG4gIH1cbiAgaWYgKHdhbGtlciA9PT0gbnVsbCkge1xuICAgIHdhbGtlciA9IHRoaXMudGFpbFxuICB9XG5cbiAgaWYgKHdhbGtlciAhPT0gdGhpcy5oZWFkICYmIHdhbGtlciAhPT0gdGhpcy50YWlsKSB7XG4gICAgd2Fsa2VyID0gd2Fsa2VyLnByZXZcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICB3YWxrZXIgPSBpbnNlcnQodGhpcywgd2Fsa2VyLCBub2Rlc1tpXSlcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCA9IHRoaXMuaGVhZFxuICB2YXIgdGFpbCA9IHRoaXMudGFpbFxuICBmb3IgKHZhciB3YWxrZXIgPSBoZWFkOyB3YWxrZXIgIT09IG51bGw7IHdhbGtlciA9IHdhbGtlci5wcmV2KSB7XG4gICAgdmFyIHAgPSB3YWxrZXIucHJldlxuICAgIHdhbGtlci5wcmV2ID0gd2Fsa2VyLm5leHRcbiAgICB3YWxrZXIubmV4dCA9IHBcbiAgfVxuICB0aGlzLmhlYWQgPSB0YWlsXG4gIHRoaXMudGFpbCA9IGhlYWRcbiAgcmV0dXJuIHRoaXNcbn1cblxuZnVuY3Rpb24gaW5zZXJ0IChzZWxmLCBub2RlLCB2YWx1ZSkge1xuICB2YXIgaW5zZXJ0ZWQgPSBub2RlID09PSBzZWxmLmhlYWQgP1xuICAgIG5ldyBOb2RlKHZhbHVlLCBudWxsLCBub2RlLCBzZWxmKSA6XG4gICAgbmV3IE5vZGUodmFsdWUsIG5vZGUsIG5vZGUubmV4dCwgc2VsZilcblxuICBpZiAoaW5zZXJ0ZWQubmV4dCA9PT0gbnVsbCkge1xuICAgIHNlbGYudGFpbCA9IGluc2VydGVkXG4gIH1cbiAgaWYgKGluc2VydGVkLnByZXYgPT09IG51bGwpIHtcbiAgICBzZWxmLmhlYWQgPSBpbnNlcnRlZFxuICB9XG5cbiAgc2VsZi5sZW5ndGgrK1xuXG4gIHJldHVybiBpbnNlcnRlZFxufVxuXG5mdW5jdGlvbiBwdXNoIChzZWxmLCBpdGVtKSB7XG4gIHNlbGYudGFpbCA9IG5ldyBOb2RlKGl0ZW0sIHNlbGYudGFpbCwgbnVsbCwgc2VsZilcbiAgaWYgKCFzZWxmLmhlYWQpIHtcbiAgICBzZWxmLmhlYWQgPSBzZWxmLnRhaWxcbiAgfVxuICBzZWxmLmxlbmd0aCsrXG59XG5cbmZ1bmN0aW9uIHVuc2hpZnQgKHNlbGYsIGl0ZW0pIHtcbiAgc2VsZi5oZWFkID0gbmV3IE5vZGUoaXRlbSwgbnVsbCwgc2VsZi5oZWFkLCBzZWxmKVxuICBpZiAoIXNlbGYudGFpbCkge1xuICAgIHNlbGYudGFpbCA9IHNlbGYuaGVhZFxuICB9XG4gIHNlbGYubGVuZ3RoKytcbn1cblxuZnVuY3Rpb24gTm9kZSAodmFsdWUsIHByZXYsIG5leHQsIGxpc3QpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE5vZGUpKSB7XG4gICAgcmV0dXJuIG5ldyBOb2RlKHZhbHVlLCBwcmV2LCBuZXh0LCBsaXN0KVxuICB9XG5cbiAgdGhpcy5saXN0ID0gbGlzdFxuICB0aGlzLnZhbHVlID0gdmFsdWVcblxuICBpZiAocHJldikge1xuICAgIHByZXYubmV4dCA9IHRoaXNcbiAgICB0aGlzLnByZXYgPSBwcmV2XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5wcmV2ID0gbnVsbFxuICB9XG5cbiAgaWYgKG5leHQpIHtcbiAgICBuZXh0LnByZXYgPSB0aGlzXG4gICAgdGhpcy5uZXh0ID0gbmV4dFxuICB9IGVsc2Uge1xuICAgIHRoaXMubmV4dCA9IG51bGxcbiAgfVxufVxuXG50cnkge1xuICAvLyBhZGQgaWYgc3VwcG9ydCBmb3IgU3ltYm9sLml0ZXJhdG9yIGlzIHByZXNlbnRcbiAgcmVxdWlyZSgnLi9pdGVyYXRvci5qcycpKFlhbGxpc3QpXG59IGNhdGNoIChlcikge31cbiIsImltcG9ydCB7IGFwcGVuZENoaWxkcmVuLCBlbGVtZW50IH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IGFkZCwgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBjeWNsZVByaW9yaXR5LCBkZWxldGVQcm9qZWN0LCBlZGl0UHJvamVjdEJveCBhcyBlZGl0UHJvamVjdCwgZmluaXNoUHJvamVjdCwgcmVuZGVyUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RVSS5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyVGFzayB9IGZyb20gXCIuL3Byb2plY3RVSS5qc1wiO1xuXG5cbmltcG9ydCBzZXR0aW5nc0ljb24gZnJvbSBcIi4vaW1nL2NvZy5zdmdcIjtcbmltcG9ydCBleHBhbmRJY29uIGZyb20gXCIuL2ltZy9leHBhbmQuc3ZnXCI7XG5pbXBvcnQgZmluaXNoSWNvbiBmcm9tIFwiLi9pbWcvZmluaXNoLXRhc2suc3ZnXCI7XG5cblxuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCJzZW12ZXJcIjtcbmltcG9ydCB7IHByaW9yaXR5U3R5bGUgfSBmcm9tIFwiLi90YXNrVUlcIjtcbmltcG9ydCB7IGFkZE5ld1Byb2plY3QgfSBmcm9tIFwiLi9jb250ZW50XCI7XG4vLyBDcmVhdGUgY2FyZHMgdG8gZGlzcGxheSBwcm9qZWN0cyBpbiB3b3Jrc3BhY2VcblxuXG5cbi8vIENyZWF0ZSBhIGNhcmQgdG8gcmVwcmVzZW50IHRoZSBwcm9qZWN0IGluIHNtYWxsIGRldGFpbCwgYW5kIHJldHVybiByZWZlcmVuY2UgdG8gdGhlIERPTSBvYmplY3Qgb2YgdGhhdCBjYXJkLlxuLy8gVGhlIGNhcmQgaXMgZGl2aWRlZCB2ZXJ0aWNhbGx5IGludG8gZGlmZmVyZW50IHNlY3Rpb25zIHdoaWNoIGFyZSBjdXN0b21pemFibGUgaGVyZVxuY29uc3QgY3JlYXRlUHJvamVjdENhcmQgPSAocHJvamVjdCkgPT4ge1xuXG4gICAgLy8gV2lsbCBiZSByZXR1cm5lZFxuICAgIGNvbnN0IGNhcmQgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ2NhcmQgcHJvamVjdC1jYXJkJ30pXG4gICBcblxuICAgIGNvbnN0IHRpdGxlQmFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZUJhciA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnY2FyZC1idXR0b24tYmFyJ30pOyAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZWxlbWVudCgnaDMnLCB7J2NsYXNzJzogJ2NhcmQtdGl0bGUnfSk7XG4gICAgICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmNvbnRlbnQuZ2V0VGl0bGUoKTtcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gZWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdidXR0b24tY29udGFpbmVyJ30pICAgIFxuICAgICAgICAgICAgY29uc3Qgc2V0dGluZ3NCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBzZXR0aW5nc0ljb24sICdhbHQnOiAnc2V0dGluZ3MnLCAnY2xhc3MnOiAnY2FyZC1idXR0b24gc2V0dGluZ3MtY29nJ30pXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gb3BlblNldHRpbmdzKGUudGFyZ2V0LCBwcm9qZWN0KSlcbiAgICAgICAgICAgIHRpdGxlQmFyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICAgIHNldHRpbmdzLmFwcGVuZENoaWxkKHNldHRpbmdzQnV0dG9uKTtcbiAgICAgICAgICAgIHRpdGxlQmFyLmFwcGVuZENoaWxkKHNldHRpbmdzKTtcblxuICAgICAgICByZXR1cm4gdGl0bGVCYXI7XG4gICAgfVxuXG5cbiAgICBjb25zdCBjb250ZW50ID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGdvYWwgPSBlbGVtZW50KCdwJywgeydjbGFzcyc6ICdjYXJkLWNvbnRlbnQgY2FyZC1nb2FsJ30pO1xuICAgICAgICBnb2FsLnRleHRDb250ZW50ID0gcHJvamVjdC5jb250ZW50LmdldEdvYWwoKTtcblxuICAgICAgICByZXR1cm4gZ29hbDtcbiAgICB9XG5cbiAgICBjb25zdCBkZWFkbGluZUNvbnRhaW5lciA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ2NhcmQtZGVhZGxpbmUgZGVhZGxpbmUtY29udGFpbmVyJ30pXG4gICAgICAgICAgICBjb25zdCBkYXlzTGVmdCA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnY2FyZC1kZWFkbGluZS1kYXlzJ30pO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnY2FyZC1kdWUtZGF0ZSd9KVxuICAgICAgICAgICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBmb3JtYXQocHJvamVjdC5jb250ZW50LmdldERlYWRsaW5lKCksICdNTS9kZC95eScpO1xuICAgICAgICAgICAgZGF5c0xlZnQudGV4dENvbnRlbnQgPSBgJHtnZXREYXlzUmVtYWluaW5nKHByb2plY3QpfSBkYXlzIGxlZnRgO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5c0xlZnQpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuICAgXG4gICAgY29uc3QgYnV0dG9uQmFyID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkJhciA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnY2FyZC1idXR0b24tYmFyJ30pXG5cbiAgICAgICAgICAgIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2ltYWdlJywgJ3NyYyc6IGV4cGFuZEljb24sICdhbHQnOiAnRXhwYW5kIHByb2plY3QnLCAnY2xhc3MnOiAnY2FyZC1idXR0b24nfSlcbiAgICAgICAgICAgICAgICBleHBhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJQcm9qZWN0KHByb2plY3QpKTtcblxuICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZUNvbnRhaW5lciA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnY2FyZC1pbmZvIGNhcmQtcGVyY2VudC1jb250YWluZXInfSlcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2VMZWZ0ID0gZWxlbWVudCgncCcsIHsnY2xhc3MnOiAnY2FyZC1wZXJjZW50YWdlJ30pXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q291bnQgPSBwcm9qZWN0LnRhc2tzLmdldFRhc2tMaXN0KCk7XG5cblxuICAgICAgICAgICAgaWYgKHByb2plY3RDb3VudC5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV0ZWRDb3VudCA9IHByb2plY3QudGFza3MuZ2V0Q29tcGxldGVkVGFza3MoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV0aW9uUGVyY2VudGFnZSA9IE1hdGgucm91bmQoKGNvbXBsZXRlZENvdW50Lmxlbmd0aCAvcHJvamVjdENvdW50Lmxlbmd0aCkgKiAxMDApXG5cbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlTGVmdC50ZXh0Q29udGVudCA9IGBjb21wbGV0ZTogJHtjb21wbGV0ZWRDb3VudC5sZW5ndGh9LyR7cHJvamVjdENvdW50Lmxlbmd0aH0gKCR7Y29tcGxldGlvblBlcmNlbnRhZ2V9JSlgXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRpb25QZXJjZW50YWdlID09PSAxMDApe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29tcGxldGUnKVxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWNvbXBsZXRlZFwiKVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBlcmNlbnRhZ2VMZWZ0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBmaW5pc2hCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBmaW5pc2hJY29uLCAnYWx0JzogJ0NvbXBsZXRlIHByb2plY3QnLCAnY2xhc3MnOiAnY2FyZC1idXR0b24nfSk7XG4gICAgICAgICAgICAgICAgZmluaXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZmluaXNoUHJvamVjdChwcm9qZWN0KSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgYnV0dG9uQmFyLmFwcGVuZENoaWxkKGZpbmlzaEJ1dHRvbilcbiAgICAgICAgYnV0dG9uQmFyLmFwcGVuZENoaWxkKHBlcmNlbnRhZ2VDb250YWluZXIpXG4gICAgICAgIGJ1dHRvbkJhci5hcHBlbmRDaGlsZChleHBhbmRCdXR0b24pO1xuICAgICAgICByZXR1cm4gYnV0dG9uQmFyO1xuICAgIH1cblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGVCYXIoKSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjb250ZW50KCkpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVhZGxpbmVDb250YWluZXIoKSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChidXR0b25CYXIoKSk7XG5cbiAgICByZXR1cm4gY2FyZDtcbn1cblxuLy8gU2ltcGx5IHJldHVybnMgZGF5cyBiZXR3ZWVuIGR1ZSBkYXRlIGFuZCBjdXJyZW50IGRhdGVcbmNvbnN0IGdldERheXNSZW1haW5pbmcgPSAocHJvamVjdCkgPT4ge1xuXG4gICAgY29uc3QgZHVlRGF0ZSA9IHByb2plY3QuY29udGVudC5nZXREZWFkbGluZSgpO1xuICAgIGNvbnN0IHRvZGF5ID0gRGF0ZS5ub3coKTtcbiAgICBcbiAgICBcbiAgICByZXR1cm4gZm9ybWF0KChkdWVEYXRlIC0gdG9kYXkpLCAnZGQnKSBcblxuXG59XG5cbmNvbnN0IG9wZW5TZXR0aW5ncyA9IChwYXJlbnRCdXR0b24sIHByb2plY3QpID0+IHtcblxuICAgIGNvbnN0IHBhcmVudENhcmQgPSBwYXJlbnRCdXR0b24ucGFyZW50Tm9kZTtcblxuICAgIC8vIHBvcHVwIG1lbnVcbiAgICBwYXJlbnRDYXJkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1zZXR0aW5ncy1idXR0b24nKVxuXG4gICAgc2V0dGluZ3NNZW51KHBhcmVudENhcmQsIHByb2plY3QpXG5cbn1cblxuLy8gR2VhciBtZW51IGZvciBxdWljayBhY2Nlc3MgdG8gdmFyaW91cyBvcHRpb25zXG5jb25zdCBzZXR0aW5nc01lbnUgPSAoY2FyZCwgcHJvamVjdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNhcmQpO1xuICAgIGNvbnNvbGUubG9nKCdzZXR0aW5ncyBtZW51JylcbiAgICBjb25zdCBjb250YWluZXIgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ21lbnUtY29udGFpbmVyIHNoaWZ0LWxlZnQnfSk7XG4gICAgY29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgY29uc3QgbWVudSA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnY29udGV4dC1tZW51JywgJ2lkJzogJ2NvZy1tZW51J30pO1xuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGVsZW1lbnQoJ3VsJywgeydjbGFzcyc6ICdtZW51LWl0ZW1zIG1lbnUtbGlzdCd9KTtcblxuICAgIGNvbnN0IG9wZW4gPSBlbGVtZW50KCdsaScsIHsnY2xhc3MnOiAnbWVudS1vcGVuIG1lbnUtaXRlbScsIH0pO1xuICAgIG9wZW4udGV4dENvbnRlbnQgPSAnb3Blbic7XG4gICAgICAgIG9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICBjb25zdCBlZGl0ID0gZWxlbWVudCgnbGknLCB7J2NsYXNzJzogJ21lbnUtZWRpdCBtZW51LWl0ZW0nfSk7XG4gICAgZWRpdC50ZXh0Q29udGVudCA9ICdlZGl0JztcbiAgICAgICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbmRlclByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICBlZGl0UHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgIH0pXG4gICAgY29uc3QgdG9nZ2xlID0gZWxlbWVudCgnbGknLCB7J2NsYXNzJzogJ21lbnUtdG9nZ2xlIG1lbnUtaXRlbSd9KTtcbiAgICB0b2dnbGUudGV4dENvbnRlbnQgPSBgY2hhbmdlIHByaW9yaXR5KCR7cHJpb3JpdHlTdHlsZShwcm9qZWN0LmNvbnRlbnQpLnByaW9yaXR5VGV4dC50b0xvd2VyQ2FzZSgpfSlgXG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGN5Y2xlUHJpb3JpdHkocHJvamVjdCk7XG4gICAgICAgIH0pO1xuICAgIGNvbnN0IGZpbmlzaCA9IGVsZW1lbnQoJ2xpJywgeydjbGFzcyc6ICdtZW51LWZpbmlzaCBtZW51LWl0ZW0nfSk7XG4gICAgICAgICAgICBmaW5pc2gudGV4dENvbnRlbnQgPSAndG9nZ2xlIGNvbXBsZXRpb24nO1xuICAgICAgICAgICAgZmluaXNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2ZpbmlzaFByb2plY3QocHJvamVjdCl9KSAgICAgICAgXG4gICAgICAgIFxuICAgIGNvbnN0IGRlbCA9IGVsZW1lbnQoJ2xpJywgeydjbGFzcyc6ICdtZW51LWRlbGV0ZSBtZW51LWl0ZW0nfSk7XG4gICAgZGVsLnRleHRDb250ZW50ID0gJ2RlbGV0ZSBwcm9qZWN0JztcbiAgICAgICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaScpXG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICB9KVxuXG4gICBcblxuICAgIGFwcGVuZENoaWxkcmVuKG1lbnVJdGVtcywgb3BlbiwgZWRpdCwgdG9nZ2xlLCBmaW5pc2gsIGRlbClcblxuXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51SXRlbXMpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IHtcblxuICAgICAgICBjb250YWluZXIucmVtb3ZlKCk7XG5cbiAgICB9XG5cblxufVxuXG5cblxuXG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3RDYXJkfVxuXG5cblxuIiwiaW1wb3J0IHsgZWxlbWVudCB9IGZyb20gXCIuL3V0aWxzXCJcbmltcG9ydCBuZXdQcm9qSWNvbiBmcm9tIFwiLi9pbWcvbm90ZS1wbHVzLnN2Z1wiXG5pbXBvcnQgeyBhZGRQcm9qZWN0QnV0dG9uLCByZW5kZXJQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFVJLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0Q2FyZCBhcyByZW5kZXJQcm9qZWN0Q2FyZH0gZnJvbSBcIi4vY2FyZHNcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuXG4vLyAgQ29udGVudCBzcGFjZSB0aGF0IGhvbGRzIHByb2plY3RzXG5cbi8vIENyZWF0ZSB3b3Jrc3BhY2VcblxuY29uc3QgY3JlYXRlV29ya1NwYWNlID0gKCkgPT4ge1xuXG4gICAgY29uc3QgbWFpbiA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnbWFpbi1jb250YWluZXInLCAnaWQnOiAnd29ya3NwYWNlLWNvbnRhaW5lcid9KTtcbiAgICBcbiAgICBjb25zdCB3b3Jrc3BhY2UgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ3dvcmtzcGFjZScsICdpZCc6ICd3b3Jrc3BhY2UnfSk7XG4gICAgXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2ltYWdlJywgJ3NyYyc6IG5ld1Byb2pJY29uLCAnYWx0JzogXCJDcmVhdGUgbmV3IHByb2plY3RcIiwgJ2NsYXNzJzogJ2NvbnRlbnQtYnV0dG9uJywgJ2lkJzogJ2FkZC1uZXctcHJvamVjdCd9KTtcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd29ya3NwYWNlLmluc2VydEJlZm9yZShhZGROZXdQcm9qZWN0KCksIGFkZFByb2plY3RCdXR0b24pOyAgICAgICAgICAgIFxuICAgICAgICAgICAgXG5cblxuICAgICAgICB9KTtcbiAgICB3b3Jrc3BhY2UuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh3b3Jrc3BhY2UpO1xuXG4gICAgcmV0dXJuIG1haW47XG59XG5cbmNvbnN0IHByb2plY3RDb250YWluZXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBlbGVtZW50KCdkaXYnLCB7J2lkJzogJ3Byb2plY3QtY29udGFpbmVyJ30pO1xuXG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBhZGROZXdQcm9qZWN0ID0gKHByb2opID0+IHtcbiAgICBsZXQgcHJvamVjdDtcbiAgICAocHJvaiAhPSBudWxsKSA/IHByb2plY3QgPSBwcm9qIDogcHJvamVjdCA9IFByb2plY3QoKTtcbiAgICBjb25zdCBjYXJkID0gcmVuZGVyUHJvamVjdENhcmQocHJvamVjdCk7XG4gICAgcHJvamVjdExpc3QuYWRkUHJvamVjdChwcm9qZWN0KVxuIFxuICAgIHJlbmRlclByb2plY3QocHJvamVjdCk7XG4gICAgcmV0dXJuIGNhcmQ7XG5cbn1cblxuY29uc3QgcHJvamVjdExpc3QgPSAoKHByb2plY3QpID0+IHtcblxuICAgIGxldCBsaXN0ID0gW107XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgbGlzdC5wdXNoKHByb2plY3QpXG4gICAgICAgIGNvbnNvbGUubG9nKGdldFByb2plY3RzKCkpXG5cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcblxuICAgICAgICBsaXN0LnNwbGljZShwcm9qZWN0LCAxKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdExpc3QoKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gbGlzdDtcblxuICAgIHJldHVybiB7YWRkUHJvamVjdCwgZ2V0UHJvamVjdHMsIHJlbW92ZVByb2plY3R9XG5cbn0pKCk7XG5cbmNvbnN0IHJlbmRlclByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IHdvcmtTcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3b3Jrc3BhY2UnKVxuICAgIGNvbnN0IHdvcmtTcGFjZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtbmV3LXByb2plY3QnKVxuXG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xuICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG5cbiAgICAgICAgY2FyZC5yZW1vdmUoKVxuICAgIH0pXG4gICAgY29uc29sZS5sb2cocHJvamVjdExpc3QuZ2V0UHJvamVjdHMoKSlcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RMaXN0LmdldFByb2plY3RzKCkpe1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY2FyZCA9IHJlbmRlclByb2plY3RDYXJkKHByb2plY3QpXG4gICAgICAgIHdvcmtTcGFjZS5pbnNlcnRCZWZvcmUoY2FyZCwgd29ya1NwYWNlQnV0dG9uKVxuXG4gICAgfVxuXG59XG5cbmNvbnN0IHN3aXRjaERpc3BsYXlTdHlsZSA9ICgpID0+IHtcblxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYi1jb250YWluZXInKTtcbiAgIFxuICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcbiAgICBpZiAoc3R5bGUgIT0gbnVsbCl7XG4gICAgICAgIHN0eWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYi1jb250YWluZXInKTtcblxuICAgIFxuICAgICAgICBjYXJkcy5mb3JFYWNoKHRhYiA9PiB0YWIuY2xhc3NMaXN0LnJlbW92ZSgndGFiJykpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmtzcGFjZScpO1xuICAgICAgICBkaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3RhYi1jb250YWluZXInKTtcbiAgICAgICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IGNhcmQuY2xhc3NMaXN0LmFkZCgndGFiJykpO1xuICAgIH1cblxufVxuXG4vLyByZWZyZXNoIHNjcmVlbiBhbmQgZGlzcGxheSBwcm9qZWN0cyBjb250YWluZWQgaW4gbGlzdFxuXG5cblxuZXhwb3J0IHtjcmVhdGVXb3JrU3BhY2UgYXMgY29udGVudCwgcHJvamVjdExpc3QsIHJlbmRlclByb2plY3RMaXN0LCBhZGROZXdQcm9qZWN0LCBzd2l0Y2hEaXNwbGF5U3R5bGUsIHByb2plY3RDb250YWluZXJ9XG5cbi8vIEJ1dHRvbiBmb3IgYWRkaW5nIG5ldyBwcm9qZWN0XG5cblxuLy8gQXJyYXkgb2YgcHJvamVjdHMgYW5kIHRoZWlyIElEcyAoa2V5L3ZhbHVlIHBhaXIpIiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBlbGVtZW50LCBtYWtlQ29udGFpbmVyLCBzZXRBdHRyaWJ1dGVzIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCBkZWZhdWx0UHJvamVjdCBmcm9tIFwiLi9kZWZhdWx0LXByb2plY3QuanNvblwiXG5pbXBvcnQgZGVmYXVsdFRhc2sgZnJvbSBcIi4vZGVmYXVsdC10YXNrLmpzb25cIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdExpc3QgfSBmcm9tIFwiLi9jb250ZW50XCI7XG5cbi8vIGltYWdlc1xuaW1wb3J0IGNsb3NlVGFza0ljb24gZnJvbSBcIi4vaW1nL2Nsb3NlLXRhc2suc3ZnXCI7XG5pbXBvcnQgZWRpdFRhc2tJY29uIGZyb20gXCIuL2ltZy9wZW5jaWwuc3ZnXCI7XG5pbXBvcnQgc2F2ZVRhc2tJY29uIGZyb20gXCIuL2ltZy9zYXZlLXRhc2suc3ZnXCI7XG5pbXBvcnQgZmluaXNoVGFza0ljb24gZnJvbSBcIi4vaW1nL2ZpbmlzaC10YXNrLnN2Z1wiXG5pbXBvcnQgZGVsZXRlVGFza0ljb24gZnJvbSBcIi4vaW1nL2RlbGV0ZS10YXNrLnN2Z1wiXG5cbmltcG9ydCBjbG9zZVByb2plY3RJY29uIGZyb20gXCIuL2ltZy9jbG9zZS1wcm9qZWN0LnN2Z1wiO1xuaW1wb3J0IGVkaXRQcm9qZWN0SWNvbiBmcm9tIFwiLi9pbWcvZWRpdC5zdmdcIjtcbmltcG9ydCBzYXZlUHJvamVjdEljb24gZnJvbSBcIi4vaW1nL3NhdmUtY29udGVudC5zdmdcIjtcblxuaW1wb3J0IG1pbmlDaGVja2JveCBmcm9tICcuL2ltZy9taW5pY2hlY2tib3guc3ZnJztcbmltcG9ydCBtaW5pQ2hlY2tib3hDb21wbGV0ZSBmcm9tICcuL2ltZy9taW5pY2hlY2ttYXJrZWQuc3ZnJztcbmltcG9ydCBtaW5pRGVsZXRlSWNvbiBmcm9tICcuL2ltZy9kZWxldGUtYWxlcnQuc3ZnJztcblxuXG5cblxuXG4vLyBJbnRlcmZhY2UgZm9yIGFkZGluZyB0YXNrcyBhbmQgcHJvamVjdHMuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG5cblxuLy8gUmVuZGVyIGEgZnVsbCBwcm9qZWN0XG5jb25zdCByZW5kZXJQcm9qZWN0ID0gKHByb2plY3RPYmplY3QpID0+IHtcbiAgIFxuICAgIC8vIENvbnRhaW5lciB0byBhdHRhY2ggcHJvamVjdCB0b1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIC8vIFJlbW92ZSBpbnRlcmFjdGlvbiB3aXRoIHdvcmtzcGFjZVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dvcmtzcGFjZS1jb250YWluZXJcIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdibG9ja3NjcmVlbicpO1xuXG4gICAgbGV0IHByb2ogPSBwcm9qZWN0T2JqZWN0LmNvbnRlbnQ7XG5cbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgXG4gICAgLy8gQ3JlYXRlIGRvbSBza2VsZXRvbiBcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qLmdldFRpdGxlKCk7XG4gICAgY29uc3QgcHJvamVjdCA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiBcInByb2plY3RcIiwgXCJpZFwiOiBgJHtwcm9qZWN0VGl0bGUgfS1pZGB9KVxuICAgIGNvbnN0IGNvbnRlbnQgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ3Byb2plY3QtY29udGVudCcsICdpZCc6IGAke3Byb2plY3RUaXRsZX0tY29udGVudGB9KVxuICAgXG4gICAgLy8gTG9hZGluZyBvZiBkYXRhIGludG8gc3BlY2lmaWVkIGNvbnRhaW5lcnNcbiAgICBjb25zdCByZW5kZXJEYXRhID0gKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgLy8gY3JlYXRlIHRpdGdsZSBiYXJcbiAgICAgICAgY29uc3QgdGl0bGUgPSAoKSA9PiB7XG5cblxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbGVtZW50KCdoMicsIHsnY2xhc3MnOiBcInByb2plY3QtdGl0bGUgcHJvamVjdC1pdGVtXCJ9KTtcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdFRpdGxlO1xuICAgICAgICAgICBcblxuICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aXRsZTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKCkpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiBcInByb2plY3QtZGVzYyBwcm9qZWN0LWl0ZW1cIiwgJ2lkJzogYCR7cHJvamVjdFRpdGxlIH0tZGVzY2B9KTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvai5nZXREZXNjcmlwdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24oKSlcblxuICAgICAgICAvLyBEZWFkbGluZS9Qcmlvcml0eS9VcmdlbmN5IENvbnRhaW5lciAoVGhlc2Ugd2lsbCBpbnRlcmFjdCBhIGxvdClcbiAgICAgICAgY29uc3QgZGVhZGxpbmUgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlYWRsaW5lQ29udGFpbmVyID0gbWFrZUNvbnRhaW5lcihcIkRlYWRsaW5lXCIpO1xuICAgICAgICAgICAgY29uc3QgZGVhZGxpbmVDb250ZW50ID0gZGVhZGxpbmVDb250YWluZXIucXVlcnlTZWxlY3RvcignLmRlYWRsaW5lLWNvbnRlbnQnKTsgICAgIFxuICAgICAgICAgICAgY29uc3QgZGVhZGxpbmUgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJwcm9qZWN0LWRlYWRsaW5lIHByb2plY3QtaXRlbVwiLCBcImlkXCI6IGAke3Byb2ouZGVhZGxpbmV9LWRlYWRsaW5lYH0pO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdidXR0b24nLCAnY2xhc3MnOiBcInByaW9yaXR5LWJ1dHRvbiBwcm9qZWN0LWl0ZW1cIiwgJ3ZhbHVlJzogcHJvai5nZXRQcmlvcml0eSgpfSk7XG4gICAgICAgICAgICBkZWFkbGluZS50ZXh0Q29udGVudCA9IGZvcm1hdChwcm9qLmdldERlYWRsaW5lKCksIFwiTU0uZGQueXl5eVwiKTtcbiAgICAgICAgICAgIGRlYWRsaW5lQ29udGVudC5hcHBlbmRDaGlsZChkZWFkbGluZSk7XG4gICAgICAgICAgICBkZWFkbGluZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWFkbGluZUNvbnRlbnQpOyAgICBcbiAgICAgICAgICAgIGRlYWRsaW5lQ29udGVudC5hcHBlbmRDaGlsZChwcmlvcml0eUJ1dHRvbik7XG4gICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGRlYWRsaW5lQ29udGFpbmVyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVhZGxpbmUoKSlcblxuICAgICAgICAvLyBBbHNvIGtub3duIGFzIG9iamVjdGl2ZVxuICAgICAgICBjb25zdCBnb2FsID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ29hbCA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiBcInByb2plY3QtZ29hbCBwcm9qZWN0LWl0ZW1cIiwgXCJpZFwiOiBgJHtwcm9qZWN0VGl0bGUgfS1nb2FsYH0pO1xuICAgICAgICAgICAgZ29hbC50ZXh0Q29udGVudCA9IHByb2ouZ2V0R29hbCgpO1xuICAgICAgICAgICAgcmV0dXJuIGdvYWw7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChnb2FsKCkpOyBcbiAgICB9XG4gICAgcmVuZGVyRGF0YSgpO1xuXG4gICAgLy8gVGFzayBDb250YWluZXJcbiAgICBjb25zdCB0YXNrcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza3MgPSBtYWtlQ29udGFpbmVyKFwiVGFza3NcIik7XG4gICAgICAgIGNvbnN0IGFkZFRhc2sgPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6J2J1dHRvbicsICdpZCc6ICdhZGQtdGFzay1idXR0b24nLCAndmFsdWUnOiAnKysnfSlcbiAgICAgICBcbiAgIFxuICAgICAgICB0YXNrcy5hcHBlbmRDaGlsZChhZGRUYXNrKVxuICAgICAgICBcbiAgICAgICAgLy8gQXR0YWNoZXMgYSBuZXcgdGFzayB0byBib3RoIHRoZSBET00gZWxlbWVudCBhbmQgUHJvamVjdCBPYmplY3RzXG4gICAgICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSwgKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNyZWF0ZVRhc2soZS50YXJnZXQucGFyZW50Tm9kZSwgcHJvamVjdE9iamVjdCk7XG4gICAgICAgICAgICBcbiAgXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0YXNrcztcbiAgICB9XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrcygpKTtcbiAgIFxuXG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbnMgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdidXR0b24tYmFyJywgJ2lkJzogJ3Byb2plY3QtYnV0dG9uLWJhcid9KTtcblxuICAgICAgICBjb25zdCBjbG9zZVByb2plY3QgPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBjbG9zZVByb2plY3RJY29uLCdjbGFzcyc6ICdwcm9qZWN0LWJ1dHRvbicsICdpZCc6ICdjbG9zZS1wcm9qZWN0JywgJ3ZhbHVlJzogJ0Nsb3NlJ30pO1xuICAgICAgICBjb25zdCBlZGl0UHJvamVjdCA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2ltYWdlJywgJ3NyYyc6IGVkaXRQcm9qZWN0SWNvbiwgJ2NsYXNzJzogJ3Byb2plY3QtYnV0dG9uJywgJ2lkJzogJ2VkaXQtcHJvamVjdCcsICd2YWx1ZSc6ICdFZGl0J30pXG4gICAgICAgIGVkaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgXG5cbiAgICAgICAgZWRpdFByb2plY3RCb3gocHJvamVjdE9iamVjdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VQcm9qZWN0KVxuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdFByb2plY3QpXG5cbiAgICAgICAgcmV0dXJuIGJ1dHRvbkNvbnRhaW5lcjtcbiAgICB9XG4gICAgXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9ucygpKTtcblxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoY29udGVudClcblxuICAgXG5cbiAgICBcbiAgICByZXR1cm4gcHJvamVjdDtcbiAgXG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdCA9IHJlbmRlcigpO1xuXG4gICAgXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIGNyZWF0ZUxpc3RlbmVycyhwcm9qZWN0T2JqZWN0KTtcbiAgICByZW5kZXJUYXNrTGlzdChwcm9qZWN0T2JqZWN0KTtcbiAgXG4gICAgXG5cbn1cblxuLy8gUHJvaiBpcyBvcmlnaW5hbCBwcm9qZWN0IGJlaW5nIGVkaXRlZDtcbmNvbnN0IGVkaXRQcm9qZWN0Qm94ID0gKHByb2opID0+IHtcblxuICAgIC8vIENyZWF0ZSB0ZW1wb3JhcnkgcHJvamVjdCB0byBzYXZlIHRvLCBhbGxvdyBmb3IgZnV0dXJlIHJlZmFjdG9yaW5nXG4gICAgY29uc3QgdGVtcFByb2ogPSBQcm9qZWN0KCk7XG4gICAgXG4gICAgY29uc3QgY29udGVudCA9IHRlbXBQcm9qLmNvbnRlbnQ7XG5cbiAgICAvLyBDcmVhdGUgc2F2ZSBidXR0b24gYW5kIGhpZGUgZWRpdCBidXR0b25cbiAgICBjb25zdCBidXR0b25CYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWJhcicpO1xuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0Jyk7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogc2F2ZVByb2plY3RJY29uLCAnY2xhc3MnOiAncHJvamVjdC1idXR0b24gZWRpdC1idXR0b24nLCAnaWQnOiAnc2F2ZS1wcm9qZWN0LWJ1dHRvbicsICd2YWx1ZSc6ICdTYXZlJ30pO1xuICAgIFxuICAgIC8vIENvcHkgY29udGVudCB0byB0ZW1wb3JhcnkgcHJvamVjdCBvYmplY3RcbiAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgIGNvbnRlbnQuc2V0VGl0bGUobmV3VGl0bGUudmFsdWUpO1xuICAgICAgICBjb250ZW50LnNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uLnZhbHVlKTtcbiAgICAgICAgY29udGVudC5zZXRHb2FsKG5ld0dvYWwudmFsdWUpO1xuICAgICAgICBzYXZlQnV0dG9uLnJlbW92ZSgpO1xuICAgICAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gICAgICAgIHNhdmVUb1Byb2plY3QoKTsgIFxuXG4gICAgfSlcblxuICAgIC8vIFNhdmUgdGVtcG9yYXJ5IHByb2plY3QgY29udGVudCB0byBvcmlnaW5hbCBwcm9qZWN0IGFuZCByZWZyZXNoXG4gICAgLy8gVGhlIGV4dHJhIHN0ZXAgb2YgY3JlYXRpbmcgYSB0ZW1wb3JhcnkgcHJvamVjdCBpcyBmb3IgZnV0dXJlIGVkaXRhYmlsaXR5L3JlZmFjdG9yaW5nXG4gICAgY29uc3Qgc2F2ZVRvUHJvamVjdCA9ICgpID0+IHtcblxuICAgICAgICBwcm9qLmNvbnRlbnQuc2V0VGl0bGUoY29udGVudC5nZXRUaXRsZSgpKTtcbiAgICAgICAgcHJvai5jb250ZW50LnNldERlc2NyaXB0aW9uKGNvbnRlbnQuZ2V0RGVzY3JpcHRpb24oKSk7XG4gICAgICAgIHByb2ouY29udGVudC5zZXRHb2FsKGNvbnRlbnQuZ2V0R29hbCgpKTtcbiAgICAgICAgXG4gICAgICAgIGNsb3NlUHJvamVjdChwcm9qKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdChwcm9qKTtcbiAgICB9XG5cblxuICAgIGJ1dHRvbkJhci5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcblxuXG4gICAgLy8gRnVuY3Rpb25zIHJldHVybiBET00gb2JqZWN0LCBub3QgaXRzIGNvbnRlbnQgZXhwbGljaXRlbHlcbiAgICBjb25zdCBuZXdUaXRsZSA9IGVkaXRUaXRsZSgncHJvamVjdCcpO1xuICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gZWRpdERlc2NyaXB0aW9uKCdwcm9qZWN0Jyk7XG4gICAgY29uc3QgIG5ld0dvYWwgPSBlZGl0R29hbCgncHJvamVjdCcpO1xuICAgICAgIFxufVxuXG4vLyBFbmFibGUgZWRpdGluZyBvZiB0aXRsZSBvZiBwcm9qZWN0LiBSZXR1cm5zIERPTSBPYmplY3QuIFRhcmdldCBpcyBzdHJpbmcgZWl0aGVyICdwcm9qZWN0JyBvciAndGFzaydcbmNvbnN0IGVkaXRUaXRsZSA9ICh0YXJnZXQpID0+IHtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0fS10aXRsZWApO1xuICAgXG4gICAgY29uc3QgZWRpdFRpdGxlQm94ID0gZWxlbWVudCgndGV4dGFyZWEnLCAgeyduYW1lJzogJ3RleHRhcmVhJywgJ3BsYWNlaG9sZGVyJzogdGl0bGUuaW5uZXJUZXh0LCBcImNsYXNzXCI6IGBlZGl0LSR7dGFyZ2V0fS1ib3ggJHt0YXJnZXR9LXRpdGxlICR7dGFyZ2V0fS1pdGVtYH0pO1xuICAgIGVkaXRUaXRsZUJveC50ZXh0Q29udGVudCA9IHRpdGxlLmlubmVyVGV4dDtcbiAgICB0aXRsZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlZGl0VGl0bGVCb3gsIHRpdGxlKTtcbiAgICBjb25zb2xlLmxvZyhlZGl0VGl0bGVCb3gudGV4dENvbnRlbnQpXG4gICAgdGl0bGUucmVtb3ZlKCk7XG4gICAgcmV0dXJuIGVkaXRUaXRsZUJveDtcblxufVxuXG4vLyBFbmFibGUgZWRpdGluZyBvZiBkZXNjcmlwdGlvbi9jb250ZW50IG9mIHByb2plY3QuIFJldHVybnMgRE9NIG9iamVjdC5cbmNvbnN0IGVkaXREZXNjcmlwdGlvbiA9ICh0YXJnZXQpID0+IHtcbiAgICBcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0fS1kZXNjYCk7XG4gICAgXG4gICAgXG4gICAgY29uc3QgZWRpdERlc2NyaXB0aW9uQm94ID0gZWxlbWVudCgndGV4dGFyZWEnLCB7J25hbWUnOid0ZXh0YXJlYScsICdwbGFjZWhvbGRlcic6IGRlc2MuaW5uZXJUZXh0LCAnY2xhc3MnOiBgZWRpdC0ke3RhcmdldH0tYm94ICR7dGFyZ2V0fS1pdGVtICR7dGFyZ2V0fS1kZXNjYH0pO1xuICAgIGVkaXREZXNjcmlwdGlvbkJveC50ZXh0Q29udGVudCA9IGRlc2MuaW5uZXJUZXh0O1xuICAgIGRlc2MucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWRpdERlc2NyaXB0aW9uQm94LCBkZXNjKTtcbiAgICBkZXNjLnJlbW92ZSgpO1xuICAgIHJldHVybiBlZGl0RGVzY3JpcHRpb25Cb3g7XG5cbn1cblxuLy8gRW5hYmxlIGVkaXRpbmcgb2YgZ29hbCBjb250ZW50LiAgUmV0dXJucyBET00gb2JqZWN0LlxuY29uc3QgZWRpdEdvYWwgPSAodGFyZ2V0KSA9PiB7XG5cbiAgICBjb25zdCBnb2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0fS1nb2FsYCk7XG4gICAgY29uc3QgZ29hbFRleHQgPSBnb2FsLmlubmVyVGV4dDtcbiAgICBjb25zb2xlLmxvZyhnb2FsVGV4dCk7XG4gICAgY29uc3QgZWRpdEdvYWxCb3ggPSBlbGVtZW50KCd0ZXh0YXJlYScsIHsncGxhY2Vob2xkZXInOiBnb2FsVGV4dCwgJ2NsYXNzJzogYGVkaXQtJHt0YXJnZXR9LWJveCAke3RhcmdldH0tZ29hbCAke3RhcmdldH0taXRlbWB9KVxuICAgIGVkaXRHb2FsQm94LnRleHRDb250ZW50ID0gZ29hbFRleHQ7XG4gICAgZ29hbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlZGl0R29hbEJveCwgZ29hbCk7XG4gICAgZ29hbC5yZW1vdmUoKTtcbiAgICByZXR1cm4gZWRpdEdvYWxCb3g7XG5cbn1cblxuLy8gU2hvdyBhIGZ1bGwgdGFzayBvbiBzY3JlZW5cbmNvbnN0IHJlbmRlclRhc2sgPSAodGFzaykgPT4ge1xuXG4gICAgXG4gICAgY29uc3Qgb2xkVGFza0RPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza1wiKTtcbiAgICBpZiAob2xkVGFza0RPTSAhPSB1bmRlZmluZWQpIG9sZFRhc2tET00ucmVtb3ZlKCk7XG4gICAgXG4gICAgLy8gRE9NIGVsZW1lbnQgdG8gYXR0YWNoIHNlbGYgdG9cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgY29uc3QgcHJvamVjdERPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Jyk7XG4gICAgcHJvamVjdERPTS5jbGFzc0xpc3QuYWRkKCdibG9ja3Byb2plY3QnKVxuXG4gICAgLy8gVGhlIGFjdHVhbCByZW5kZXIgb2JqZWN0IFxuICAgIGNvbnN0IHRhc2tQb3B1cCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IGVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJ0YXNrXCIsIGlkOiBgJHt0YXNrLnRpdGxlfS0ke3Rhc2suZ2V0SUQoKX1gLCAnZGF0YS1pZCc6IHRhc2suZ2V0SUQoKX0pXG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRpdGxlQmFyID0gZWxlbWVudCgnZGl2JywgeydjbGFzcyc6IFwidGFzay10aXRsZS1iYXJcIn0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogZWRpdFRhc2tJY29uLCAnY2xhc3MnOiAndGFzay1idXR0b24nLCAnaWQnOiAndGFzay1lZGl0LWJ1dHRvbicsICd2YWx1ZSc6ICdFZGl0J30pO1xuICAgICAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGVkaXRUYXNrKHRhc2spKTtcbiAgICAgICAgICAgIHRpdGxlQmFyLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZWxlbWVudCgnaDInLCB7J2NsYXNzJzogXCJ0YXNrLXRpdGxlXCJ9KTtcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay5nZXRUaXRsZSgpOztcbiAgICAgICAgICAgIHRpdGxlQmFyLmFwcGVuZENoaWxkKHRpdGxlKTsgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICBjb25zdCBjb21wbGV0ZUJ1dHRvbiA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2ltYWdlJywgJ3NyYyc6IGZpbmlzaFRhc2tJY29uLCAnY2xhc3MnOiAndGFzay1idXR0b24nLCAnaWQnOiAndGFzay1jb21wbGV0ZS1idXR0b24nLCAndmFsdWUnOiAnQ0hLJ30pO1xuICAgICAgICAgICAgY29tcGxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gc2V0IHRhc2sgYXMgY29tcGxldGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aXRsZUJhci5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbilcblxuICAgICAgICAgICAgcmV0dXJuIHRpdGxlQmFyO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSAoKSA9PiB7XG5cblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiBcInRhc2stZGVzY1wiLCAnaWQnOiBgJHt0YXNrLnRpdGxlfS1kZXNjYH0pO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGVzY3JpcHRpb24oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgLy8gQ3JlYXRpbmcgYSBET00gY29udGFpbmVyIHRvIGhvbGQgcHJpb3JpdHkgYW5kIGRlYWRsaW5lIGRpc3BsYXlcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gbWFrZUNvbnRhaW5lcigndGFzay1kZWFkbGluZScpO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlIZWFkZXIgPSBwcmlvcml0eS5xdWVyeVNlbGVjdG9yKCcudGFzay1kZWFkbGluZS1oZWFkZXInKTtcbiAgICAgICAgICAgIHByaW9yaXR5SGVhZGVyLnRleHRDb250ZW50ID0gXCJEZWFkbGluZVwiXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eUJ1dHRvbiA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2J1dHRvbicsICdjbGFzcyc6IFwicHJpb3JpdHktYnV0dG9uIHRhc2staXRlbVwiLCAndmFsdWUnOiB0YXNrLmdldFByaW9yaXR5KCl9KTtcbiAgICAgICAgICAgIHByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNoYW5nZVByaW9yaXR5KGUpKTtcblxuICAgICAgICAgICAgY29uc3QgZGVhZGxpbmVDb250ZW50ID0gcHJpb3JpdHkucXVlcnlTZWxlY3RvcignLnRhc2stZGVhZGxpbmUtY29udGVudCcpOyAgICAgXG4gICAgICAgICAgICBjb25zdCBkZWFkbGluZSA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiBcInRhc2stZGVhZGxpbmUgdGFzay1pdGVtXCIsIFwiaWRcIjogYCR7dGFzay5kZWFkbGluZX0tZGVhZGxpbmVgfSk7XG4gICAgICAgICAgICBkZWFkbGluZS50ZXh0Q29udGVudCA9IGZvcm1hdCh0YXNrLmdldERlYWRsaW5lKCksIFwiTU0uZGQueXl5eVwiKTtcbiAgICAgICAgICAgIGRlYWRsaW5lQ29udGVudC5hcHBlbmRDaGlsZChkZWFkbGluZSk7XG5cblxuICAgICAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoZGVhZGxpbmVDb250ZW50KTsgICAgXG4gICAgICAgICAgICBkZWFkbGluZUNvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlCdXR0b24pO1xuICAgICAgICAgICAgcHJpb3JpdHkudmFsdWUgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBwcmlvcml0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0aW9uIG9mIGdvYWwgZWxlbWVudFxuICAgICAgICBjb25zdCBnb2FsID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ29hbCA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiBcInRhc2stZ29hbC1oZWFkZXJcIiwgXCJpZFwiOiBgJHt0YXNrLnRpdGxlfS1nb2FsYH0pO1xuICAgICAgICAgICAgY29uc3QgZ29hbEhlYWRlciA9IGVsZW1lbnQoJ2gzJywgeydjbGFzcyc6ICdnb2FsLXRpdGxlJ30pXG4gICAgICAgICAgICBjb25zdCBnb2FsQ29udGVudCA9IGVsZW1lbnQoJ3AnLCB7J2NsYXNzJzogJ3Rhc2stZ29hbCd9KTtcbiAgICAgICAgICAgIGdvYWxDb250ZW50LnRleHRDb250ZW50ID0gdGFzay5nZXRHb2FsKCk7XG4gICAgICAgICAgICBnb2FsSGVhZGVyLnRleHRDb250ZW50ID0gXCJHb2FsXCJcbiAgICAgICAgICAgIGdvYWwuYXBwZW5kQ2hpbGQoZ29hbEhlYWRlcilcbiAgICAgICAgICAgIGdvYWwuYXBwZW5kQ2hpbGQoZ29hbENvbnRlbnQpXG4gICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGdvYWw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBidXR0b25CYXIgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBlbGVtZW50KFwiZGl2XCIsIHsnY2xhc3MnOiAnYnV0dG9uLWJhcicsICdpZCc6ICd0YXNrLWJ1dHRvbnMnfSk7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBkZWxldGVUYXNrSWNvbiwgJ2FsdCc6ICdEZWxldGUgdGFzaycsICdjbGFzcyc6ICd0YXNrLWJ1dHRvbiBkZWxldGUtdGFzaycsICdpZCc6ICdkZWxldGUtdGFzaycsICd2YWx1ZSc6ICdEZWxldGUnfSlcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICBjbG9zZVRhc2soZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBjbG9zZVByb2plY3RJY29uLCdhbHQnOiAnQ2xvc2UgVGFzaycsICdjbGFzcyc6ICd0YXNrLWJ1dHRvbiBjbG9zZS10YXNrJ30pO1xuICAgICAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY2xvc2VUYXNrKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSkpO1xuICAgICAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7ICAgICAgICAgICAgICAgIFxuICAgICAgICBcblxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZCh0aXRsZSgpKTtcbiAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbigpKTtcbiAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZChwcmlvcml0eSgpKTtcbiAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZChnb2FsKCkpO1xuICAgICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKGJ1dHRvbkJhcigpKTtcblxuXG4gICAgICAgIHJldHVybiBuZXdUYXNrO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrUG9wdXAoKSk7XG59XG5cbi8vSGFuZGxlcyBkaXNwbGF5IG9mICdUYXNrcyBsaXN0J1xuY29uc3QgcmVuZGVyVGFza0xpc3QgPSAocHJvamVjdCkgPT4ge1xuXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250YWluZXInKVxuICAgXG4gICAgY29uc3QgbWluaUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWluaS10YXNrJyk7XG4gICAgbWluaUxpc3QuZm9yRWFjaChtaW5pID0+IG1pbmkucmVtb3ZlKCkpXG4gICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LnRhc2tzLmdldFRhc2tMaXN0KCkpe1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICAgICAgY29uc3QgbWluaXRhc2sgPSBjcmVhdGVNaW5pVGFzayhwcm9qZWN0LCB0YXNrKTtcblxuXG4gICAgICAgIGlmICh0YXNrLmdldFN0YXR1cygpID09PSB0cnVlKXtcbiAgICAgICAgICAgIG1pbml0YXNrLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpOyAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBtaW5pdGFzay5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcblxuICAgICAgICBsaXN0Lmluc2VydEJlZm9yZShtaW5pdGFzaywgbGlzdC5sYXN0RWxlbWVudENoaWxkKTtcblxuICAgIH1cbiAgICBcbn1cblxuXG5jb25zdCBjcmVhdGVUYXNrID0gKGNvbnRhaW5lciwgcHJvamVjdCkgPT4ge1xuXG4gICAgY29uc3QgdGFzayA9IFRhc2soKTtcbiAgICB0YXNrLnNldFBhcmVudChwcm9qZWN0KTtcbiAgICBcbiAgIFxuICAgIGNvbnN0IHRhc2tMaXN0ID0gKGNvbnRhaW5lcilcbiAgICB0YXNrTGlzdC5pbnNlcnRCZWZvcmUoY3JlYXRlTWluaVRhc2socHJvamVjdCwgdGFzayksIHRhc2tMaXN0Lmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgXG4gICAgLy8gQWRkIHRvIG9iamVjdFxuICAgIHByb2plY3QudGFza3MuYWRkVGFzayh0YXNrKTtcbiAgICB0YXNrLmdldElEKCk7XG4gICAgcmVuZGVyVGFzayh0YXNrKTtcbiAgICBlZGl0VGFzayh0YXNrKTtcblxufVxuXG4vLyBXb3VsZCBsaWtlIHRvIHJlZmFjdG9yIHRoaXMgdG8gc2hhcmUgd2l0aCBlZGl0IHByb2plY3QgZnVuY3Rpb25zIGlmIHBvc3NpYmxlXG5jb25zdCBlZGl0VGFzayA9ICh0YXNrKSA9PiB7XG4gICAgXG4gICAgLy9jb25zdCBwcm9qZWN0ID0gdGFzay5nZXRQYXJlbnQoKTtcbiAgICBjb25zdCB0ZW1wVGFzayA9IFRhc2soKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wVGFzaztcblxuICAgIGNvbnN0IGJ1dHRvbkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlLWJhcicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUnKTtcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZWRpdC1idXR0b24nKTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBzYXZlVGFza0ljb24sICdjbGFzcyc6ICd0YXNrLWVkaXQtYnV0dG9uIHRhc2stYnV0dG9uJywgJ2lkJzogJ3Rhc2stZWRpdC1idXR0b24nLCAndmFsdWUnOiAnU2F2ZSd9KVxuXG4gICAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICBjb250ZW50LnNldFRpdGxlKG5ld1RpdGxlLnZhbHVlKTtcbiAgICAgICAgY29udGVudC5zZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbi52YWx1ZSk7XG4gICAgICAgIGNvbnRlbnQuc2V0R29hbChuZXdHb2FsLnZhbHVlKTtcbiAgICAgICAgc2F2ZUJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICAgICAgICBzYXZlVG9UYXNrKCk7XG4gICAgfSlcblxuICAgIGNvbnN0IHNhdmVUb1Rhc2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2spXG4gICAgICAgIHRhc2suc2V0VGl0bGUoY29udGVudC5nZXRUaXRsZSgpKTtcbiAgICAgICAgdGFzay5zZXREZXNjcmlwdGlvbihjb250ZW50LmdldERlc2NyaXB0aW9uKCkpO1xuICAgICAgICB0YXNrLnNldEdvYWwoY29udGVudC5nZXRHb2FsKCkpO1xuICAgXG4gICAgICAgIGNsb3NlVGFzayhidXR0b25CYXIucGFyZW50Tm9kZSk7XG4gICAgICAgIGNsb3NlUHJvamVjdCgpO1xuICAgICAgICByZW5kZXJQcm9qZWN0KHRhc2suZ2V0UGFyZW50KCkpO1xuICAgICAgICByZW5kZXJUYXNrKHRhc2spO1xuXG4gICAgfVxuXG5cbiAgICBidXR0b25CYXIuaW5zZXJ0QmVmb3JlKHNhdmVCdXR0b24sIHRpdGxlKTtcblxuICAgIGNvbnN0IG5ld1RpdGxlID0gZWRpdFRpdGxlKCd0YXNrJyk7XG4gICAgY29uc3QgbmV3RGVzY3JpcHRpb24gPSBlZGl0RGVzY3JpcHRpb24oJ3Rhc2snKTtcbiAgICBjb25zdCBuZXdHb2FsID0gZWRpdEdvYWwoJ3Rhc2snKTtcblxuXG59XG5cbi8vIERlbGV0ZXMgdGFzayBmcm9tIHBhcmVudCBwcm9qZWN0XG5jb25zdCBkZWxldGVUYXNrID0gKHRhc2spID0+IHtcblxuICAgIGNvbnNvbGUubG9nKHRhc2spO1xuXG4gICAgIGNvbnN0IHByb2plY3QgPSB0YXNrLmdldFBhcmVudCgpO1xuICAgIHByb2plY3QudGFza3MucmVtb3ZlVGFzayh0YXNrKTtcbiAgICByZW5kZXJUYXNrTGlzdChwcm9qZWN0KTtcbn1cblxuLy8gRGVsZXRlIHRoZSBET00gZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggdGFza1xuY29uc3QgY2xvc2VUYXNrID0gKERPTSkgPT4ge1xuXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Jyk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdibG9ja3Byb2plY3QnKTtcblxuICAgIGlmIChET00gIT0gbnVsbCkgRE9NLnJlbW92ZSgpO1xufVxuXG5jb25zdCB0b2dnbGVUYXNrU3RhdHVzID0gKHRhc2spID0+IHtcblxuICAgIGlmICh0YXNrID09IG51bGwpIHJldHVybjtcblxuICAgIGlmICh0YXNrLmdldFN0YXR1cygpID09PSBmYWxzZSl7XG4gICAgICAgIHRhc2suc2V0U3RhdHVzKHRydWUpO1xuICAgICAgICB0YXNrLmdldFBhcmVudCgpLnRhc2tzLmNvbXBsZXRlVGFzayh0YXNrKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgdGFzay5zZXRTdGF0dXMoZmFsc2UpXG4gICAgICAgIHRhc2suZ2V0UGFyZW50KCkudGFza3MucmVtb3ZlQ29tcGxldGUodGFzayk7XG4gICAgfVxuICBcblxuICAgIHJlbmRlclRhc2tMaXN0KHRhc2suZ2V0UGFyZW50KCkpO1xuXG59XG5cbi8vIENyZWF0ZXMgYSBtaW5pLXRhc2sgRE9NIGVsZW1lbnQgb3V0IG9mIHRhc2sgb2JqZWN0XG5jb25zdCBjcmVhdGVNaW5pVGFzayA9IChwcm9qZWN0LCB0YXNrKSA9PiB7XG4gICAgXG4gICAgY29uc3QgbWluaXRhc2sgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzonbWluaS10YXNrJ30pXG4gICBcbiAgICBpZiAodGFzay5nZXRTdGF0dXMoKSA9PT0gdHJ1ZSl7XG4gICAgICAgIG1pbml0YXNrLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICAvL2NvbnNvbGUubG9nKHRhc2spO1xuICAgIC8vIERlbGV0ZSBtaW5pXG4gICAgY29uc3QgcmVtb3ZlTWluaSA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2ltYWdlJywgJ3NyYyc6IG1pbmlEZWxldGVJY29uLCAnY2xhc3MnOiAnbWluaS1idXR0b24gbWluaS1kZWxldGUnLCAndmFsdWUnOiAnLSd9KVxuICAgIC8vIFBhc3Mgb24gRE9NIG9mIE1pbmlsaXN0IGFuZCBUYXNrIHRvIGRlbGV0ZVxuICAgIHJlbW92ZU1pbmkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZGVsZXRlTWluaSh0YXNrKSk7XG4gICAgLy8gTWFyayBtaW5pIGFzIGNvbXBsZXRlXG4gICAgY29uc3QgZmluaXNoTWluaSA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2ltYWdlJywgJ3NyYyc6IG1pbmlDaGVja2JveCwgJ2NsYXNzJzogJ21pbmktYnV0dG9uIG1pbmktZmluaXNoJywgJ3ZhbHVlJzogJ0YnfSk7XG4gICAgZmluaXNoTWluaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0b2dnbGVUYXNrU3RhdHVzKHRhc2spKTtcbiAgICAvL09wZW4gVGFzayBpbiBmdWxsIHZpZXdcbiAgICBjb25zdCBtaW5pQnV0dG9uID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnYnV0dG9uJywgJ2NsYXNzJzogJ21pbmktYnV0dG9uIG1pbmktdGl0bGUnLCAndmFsdWUnOiBgJHt0YXNrLmdldFRpdGxlKCl9YH0pO1xuICAgICAgICBcbiAgICBcbiAgICBcbiAgICBtaW5pQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyVGFzayh0YXNrKSlcbiAgICBtaW5pdGFzay5hcHBlbmRDaGlsZChyZW1vdmVNaW5pKTtcbiAgICBtaW5pdGFzay5hcHBlbmRDaGlsZChtaW5pQnV0dG9uKTtcbiAgICBtaW5pdGFzay5hcHBlbmRDaGlsZChmaW5pc2hNaW5pKVxuICAgIGxldCBiZ2NvbG9yID0gbWluaXRhc2suc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICAgIGNvbnN0IHRpdGxlID0gZWxlbWVudCgnaDQnLCB7J2NsYXNzJzogJ21pbmktdGFzay10aXRsZSd9KVxuICAgIFxuICAgIFxuICAgIHN3aXRjaCAodGFzay5nZXRQcmlvcml0eSgpKXtcblxuICAgICAgICBjYXNlIDE6IFxuICAgICAgICAgICAgIGJnY29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGJnY29sb3IgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGJnY29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG5cbiAgICB9XG5cbiAgICBcbiAgICBtaW5pdGFzay5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cblxuICAgIHJldHVybiBtaW5pdGFzaztcbn1cblxuY29uc3QgZGVsZXRlTWluaSA9ICh0YXNrKSA9PiB7XG5cbiAgICBcbiAgICBjb25zdCBwcm9qZWN0ID0gdGFzay5nZXRQYXJlbnQoKTtcblxuICAgIGNvbnNvbGUubG9nKHByb2plY3QudGFza3MuZ2V0VGFza0xpc3QoKSk7XG4gICAgcHJvamVjdC50YXNrcy5yZW1vdmVUYXNrKHRhc2spO1xuICAgIFxuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2snKTtcbiAgICBpZiAodGFza0NhcmQgIT0gbnVsbCl7XG4gICAgICAgIGlmICh0YXNrQ2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSA9PSB0YXNrLmdldElEKCkpIGNsb3NlVGFzayh0YXNrQ2FyZCk7XG4gICAgfVxuXG4gICAgLy8gUmVmcmVzaCB0YXNrIGxpc3RcbiAgICByZW5kZXJUYXNrTGlzdChwcm9qZWN0KTtcblxufVxuXG5cbi8vIEJ1dHRvbnMgYW5kIExpc3RlbmVyc1xuY29uc3QgY3JlYXRlTGlzdGVuZXJzID0gKHByb2plY3QpID0+IHtcblxuICAgIC8vIENyZWF0ZSBsaXN0ZW5lcnMgZm9yIGJ1dHRvbnNcbiAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdCcpO1xuICAgIC8vY29uc29sZS5sb2cocHJvamVjdC5jb250ZW50LmdldFByaW9yaXR5KCkpXG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtcHJvamVjdCcpO1xuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VQcm9qZWN0KCkpO1xuICAgIC8vIENvbnRlbnQgYnV0dG9uIChleHBhbmQgY29udGVudClcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy1idXR0b24nKTtcbiAgICBcbiAgICBjb25zdCBkZWFkbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWFkbGluZS1idXR0b24nKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1idXR0b24ucHJvamVjdC1pdGVtJyk7XG4gICAgcHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcmlvcml0eSA9IHByb2plY3QuY29udGVudC5nZXRQcmlvcml0eSgpO1xuICAgICAgLy8gIGNvbnNvbGUubG9nKGN1cnJlbnRQcmlvcml0eSk7XG5cbiAgICAgICBcbiAgICAgICAgY29uc3QgdXBkYXRlZFByaW9yaXR5ID0gKChjdXJyZW50UHJpb3JpdHkpICUgMykgKyAxO1xuICAgICAgICBwcm9qZWN0LmNvbnRlbnQuc2V0UHJpb3JpdHkodXBkYXRlZFByaW9yaXR5KTtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPSB1cGRhdGVkUHJpb3JpdHk7XG4gICAgICAgIFxuXG4gICAgfSkgICBcblxufVxuXG5cbmNvbnN0IGNsb3NlUHJvamVjdCA9ICgpID0+IHtcblxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpXG4gICAgXG4gICAgLy9SZWVuYWJsZSBpbnRlcmFjdGlvbiBcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dvcmtzcGFjZS1jb250YWluZXInKTtcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2Nrc2NyZWVuJylcbiAgICBcbiAgIGNvbnNvbGUubG9nKG1haW4pXG4gICAgcHJvamVjdC5yZW1vdmUoKTtcblxuICAgIHJlbmRlclByb2plY3RMaXN0KCk7XG5cblxuXG59XG5cblxuY29uc3QgYWRkUHJvamVjdFBvcFVwID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGJ1dHRvbiA9IGVsZW1lbnQoXCJidXR0b25cIiwge1wiaWRcIjogXCJwcm9qZWN0LWJ1dHRvblwiLCBcInZhbHVlXCI6IFwiUHJlc3NpdFwiLFwidGV4dENvbnRlbnRcIjogXCJQcmVzc1wifSlcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgXG4gICAgfSlcblxuXG4gICAgcmV0dXJuIGJ1dHRvbjtcblxufVxuXG5cbmV4cG9ydCB7cmVuZGVyUHJvamVjdCwgcmVuZGVyVGFzaywgYWRkUHJvamVjdFBvcFVwIGFzIGFkZFByb2plY3RCdXR0b24sIGNyZWF0ZUxpc3RlbmVyc30iLCIvLyBNZW51IGZvciBtYW5pcHVsYXRpbmcgY29udGVudCBcblxuaW1wb3J0IHsgc3dpdGNoRGlzcGxheVN0eWxlIH0gZnJvbSBcIi4vY29udGVudFwiO1xuaW1wb3J0IHsgZWxlbWVudCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cblxuY29uc3QgbWVudSA9ICgpID0+IHtcbmNvbnN0IGhlYWRlciA9IGVsZW1lbnQoJ2RpdicsIHsnaWQnOiAnaGVhZGVyJ30pO1xuY29uc3Qgc3RhdHMgPSBlbGVtZW50KCdkaXYnLCB7J2lkJzogJ3N0YXRzJ30pO1xuY29uc3Qgc3ViSGVhZGVyID0gZWxlbWVudCgnZGl2JywgeydpZCc6ICdzdWItaGVhZGVyJ30pO1xuXG5jb25zdCB0b2dnbGVTdHlsZSA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2J1dHRvbicsICdpZCc6ICdzdHlsZS10b2dnbGUnLCAndmFsdWUnOiAnc3dpdGNoIG1vZGUnfSk7XG4gICAgdG9nZ2xlU3R5bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7c3dpdGNoRGlzcGxheVN0eWxlKCl9KVxuXG5oZWFkZXIuYXBwZW5kQ2hpbGQodG9nZ2xlU3R5bGUpXG5oZWFkZXIuYXBwZW5kQ2hpbGQoc3RhdHMpO1xuaGVhZGVyLmFwcGVuZENoaWxkKHN1YkhlYWRlcik7XG5cblxucmV0dXJuIGhlYWRlcjtcbn1cbmV4cG9ydCB7IG1lbnV9XG4iLCJpbXBvcnQgeyBUYXNrLCBnZXRVcmdlbmN5IH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IGRlZmF1bHRQcm9qZWN0IGZyb20gXCIuL2RlZmF1bHQtcHJvamVjdC5qc29uXCJcbmltcG9ydCB7IHBhcnNlSVNPLCB0b0RhdGUgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuLy8gQ3JlYXRlIGFuIG9iamVjdCBjb250YWluaW5nIHRvZG8gb2JqZWN0c1xuXG5cbi8vIFByb2plY3Qgb2JqZWN0IGZhY3Rvcnlcbi8vIFByb2plY3QodGl0bGUsIGRhdGUsIGRlYWRsaW5lLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGdvYWwpXG4vLyBMb2FkIGRlZmF1bHRzIGZyb20gZGVmYXVsdC1wcm9qZWN0Lmpzb25cbmNvbnN0IFByb2plY3QgPSAodGl0bGUgPSBkZWZhdWx0UHJvamVjdC50aXRsZSwgZGVhZGxpbmUgPSBkZWZhdWx0UHJvamVjdC5kZWFkbGluZSwgcHJpb3JpdHkgPSBkZWZhdWx0UHJvamVjdC5wcmlvcml0eSwgZGVzY3JpcHRpb24gPSBkZWZhdWx0UHJvamVjdC5kZXNjcmlwdGlvbiwgZ29hbCA9IGRlZmF1bHRQcm9qZWN0LmdvYWwgKSA9PiB7XG5cbiAgICAvLyBEZWZpbmUgb3duIGluZm8gd2l0aCBUYXNrIG9iamVjdFxuICAgIC8vY29uc3QgaW5mbyA9IFRhc2soZGVmYXVsdFByb2plY3QudGl0bGUsIGRlZmF1bHRQcm9qZWN0LmRlYWRsaW5lLCBkZWZhdWx0UHJvamVjdC5wcmlvcml0eSwgZGVmYXVsdFByb2plY3QuZGVzY3JpcHRpb24pXG4gICAgXG4gICAgZGVhZGxpbmUgPSBuZXcgRGF0ZShkZWFkbGluZSk7XG4gICBcbiAgICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZShEYXRlLm5vdygpKVxuICAgIGNvbnN0IHRpbWVSZW1haW5pbmcgPSBkZWFkbGluZSAtIERhdGUubm93KCk7XG4gICAgXG4gICAgLy8gV2lsbCBhc3NpZ24gdGFzayBJRCBzZXF1ZW50aWFsbHlcbiAgICBsZXQgdGFza0lEID0gMDtcblxuICAgIGxldCBfdGFza0xpc3QgPSBbXTtcbiAgICBsZXQgX2NvbXBsZXRlZFRhc2tzID0gW107XG4gICAgbGV0IF9pbmNvbXBsZXRlVGFza3MgPSBbXTtcblxuICAgXG5cbiAgICAvLyBBbGwgdGFzayByZWxhdGVkIGZ1bmN0aW9uc1xuICAgIGNvbnN0IHRhc2tzID0gKCgpID0+IHtcblxuICAgICAgICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgICAgICBzZXRUYXNrSUQodGFzayk7XG4gICAgICAgICAgICBfdGFza0xpc3QucHVzaCh0YXNrKVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXNrRWxlbWVudCA9IF90YXNrTGlzdC5pbmRleE9mKHRhc2spO1xuICAgICAgICAgICAgX3Rhc2tMaXN0LnNwbGljZSh0YXNrRWxlbWVudCwgMSk7IFxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlVGFzayA9ICh0YXNrID0+IHtcblxuICAgICAgICAgICAgLy9pZiAoX2NvbXBsZXRlZFRhc2tzLmluY2x1ZGVzKHRhc2spKSByZXR1cm47XG5cbiAgICAgICAgICAgIF9jb21wbGV0ZWRUYXNrcy5wdXNoKF90YXNrTGlzdC5zbGljZSh0YXNrKSk7XG4gICAgICAgICAgICAgLy9yZW1vdmVUYXNrKHRhc2spXG4gICAgXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgcmVtb3ZlQ29tcGxldGUgPSAodGFzaykgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrRWxlbWVudCA9IF9jb21wbGV0ZWRUYXNrcy5pbmRleE9mKHRhc2spO1xuICAgICAgICAgICAgX2NvbXBsZXRlZFRhc2tzLnNwbGljZSh0YXNrRWxlbWVudCwgMSk7IFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2V0VGFza0lEID0gKHRhc2spID0+IHtcbiAgICAgICAgICAgIHRhc2suc2V0SUQodGFza0lEKTtcbiAgICAgICAgICAgIHRhc2tJRCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2xlYXJGaW5pc2hlZExpc3QgPSAoKSA9PiB7XG4gICAgICAgICAgICBfY29tcGxldGVkVGFza3MgPSBbXTtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICBjb25zdCBnZXRUYXNrTGlzdCA9ICgpID0+IF90YXNrTGlzdDtcbiAgICAgICAgY29uc3QgZ2V0Q29tcGxldGVkVGFza3MgPSAoKSA9PiBfY29tcGxldGVkVGFza3M7XG4gICAgICAgIGNvbnN0IGdldEluQ29tcGxldGVUYXNrcyA9ICgpID0+IF9pbmNvbXBsZXRlVGFza3M7XG4gICAgICAgIGNvbnN0IHRhc2tDb3VudCA9IF90YXNrTGlzdC5sZW5ndGg7XG5cbiAgICAgICAgcmV0dXJuIHtjbGVhckZpbmlzaGVkTGlzdCwgcmVtb3ZlQ29tcGxldGUsIHRhc2tDb3VudCwgYWRkVGFzaywgcmVtb3ZlVGFzaywgY29tcGxldGVUYXNrLCBnZXRUYXNrTGlzdCwgZ2V0Q29tcGxldGVkVGFza3MsIGdldEluQ29tcGxldGVUYXNrcywgX3Rhc2tMaXN0fVxuXG4gICAgfSkoKTtcbiAgXG4gICAgLy8gQ29udGVudCByZWxhdGVkIGZ1bmN0aW9uc1xuICAgIGNvbnN0IGNvbnRlbnQgPSAoKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICAgICAgICAgIHRpdGxlID0gbmV3VGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcblxuICAgICAgICBjb25zdCBzZXREZWFkbGluZSA9IChuZXdEZWFkbGluZSkgPT4gZGVhZGxpbmUgPSBuZXdEZWFkbGluZTtcbiAgICAgICAgY29uc3QgZ2V0RGVhZGxpbmUgPSAoKSA9PiBkZWFkbGluZTtcblxuICAgICAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IHtcblxuICAgICAgICAgICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuXG4gICAgICAgIGNvbnN0IHNldEdvYWwgPSAobmV3R29hbCkgPT4gZ29hbCA9IG5ld0dvYWw7XG4gICAgICAgIGNvbnN0IGdldEdvYWwgPSAoKSA9PiBnb2FsO1xuXG4gICAgICAgIGNvbnN0IGdldENvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge3RpdGxlLCBkZWFkbGluZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9ufTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7c2V0VGl0bGUsIGdldFRpdGxlLCBnZXREZWFkbGluZSwgc2V0RGVhZGxpbmUsIHNldERlc2NyaXB0aW9uLCBnZXREZXNjcmlwdGlvbiwgZ2V0Q29udGVudCwgc2V0UHJpb3JpdHksIGdldFByaW9yaXR5LCBzZXRHb2FsLCBnZXRHb2FsLCB9XG59KSgpO1xuXG5cblxuXG5cblxuICByZXR1cm4geyB0YXNrcywgX3Rhc2tMaXN0LCBjb250ZW50fVxufVxuXG5cbmV4cG9ydCB7IFByb2plY3R9IiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBlbGVtZW50LCBtYWtlQ29udGFpbmVyLCBtYWtlTWVudSwgc2V0QXR0cmlidXRlcyB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgZGVmYXVsdFByb2plY3QgZnJvbSBcIi4vZGVmYXVsdC1wcm9qZWN0Lmpzb25cIlxuaW1wb3J0IGRlZmF1bHRUYXNrIGZyb20gXCIuL2RlZmF1bHQtdGFzay5qc29uXCI7XG5pbXBvcnQgeyBnZXRVcmdlbmN5LCBUYXNrIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHByb2plY3RMaXN0LCByZW5kZXJQcm9qZWN0TGlzdCB9IGZyb20gXCIuL2NvbnRlbnRcIjtcbmltcG9ydCB7IHJlbmRlclRhc2ssIHByaW9yaXR5U3R5bGUsIHRvZ2dsZVRhc2tTdGF0dXN9IGZyb20gXCIuL3Rhc2tVSVwiO1xuaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xuXG5cbi8vIGltYWdlc1xuXG5pbXBvcnQgY2xvc2VQcm9qZWN0SWNvbiBmcm9tIFwiLi9pbWcvY2xvc2UtcHJvamVjdC5zdmdcIjtcbmltcG9ydCBlZGl0UHJvamVjdEljb24gZnJvbSBcIi4vaW1nL2VkaXQuc3ZnXCI7XG5pbXBvcnQgc2F2ZVByb2plY3RJY29uIGZyb20gXCIuL2ltZy9zYXZlLWNvbnRlbnQuc3ZnXCI7XG5pbXBvcnQgbWluaVNvcnRJY29uIGZyb20gXCIuL2ltZy9zb3J0LnN2Z1wiO1xuaW1wb3J0IG1pbmlDaGVja2JveCBmcm9tICcuL2ltZy9taW5pY2hlY2tib3guc3ZnJztcbmltcG9ydCBtaW5pQ2hlY2tib3hDb21wbGV0ZSBmcm9tICcuL2ltZy9taW5pY2hlY2ttYXJrZWQuc3ZnJztcbmltcG9ydCBtaW5pRGVsZXRlSWNvbiBmcm9tICcuL2ltZy9kZWxldGUtYWxlcnQuc3ZnJztcbmltcG9ydCBmaW5pc2hUYXNrc0ljb24gZnJvbSAnLi9pbWcvZmluaXNoLXRhc2suc3ZnJztcbmltcG9ydCBjYWxlbmRhckljb24gZnJvbSAnLi9pbWcvY2FsZW5kYXItZWRpdC5zdmcnO1xuaW1wb3J0IGFkZE1pbmlUYXNrSWNvbiBmcm9tICcuL2ltZy9wbHVzLWJveC1tdWx0aXBsZS5zdmcnO1xuXG5cbi8vIEludGVyZmFjZSBmb3IgYWRkaW5nIHRhc2tzIGFuZCBwcm9qZWN0cy5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIilcbmNvbnN0IFRBU0tMSVNUTUFYID0gNztcblxuLy8gUmVuZGVyIGEgZnVsbCBwcm9qZWN0XG5jb25zdCByZW5kZXJQcm9qZWN0ID0gKHByb2plY3RPYmplY3QpID0+IHtcbiAgIFxuICAgIC8vIENvbnRhaW5lciB0byBhdHRhY2ggcHJvamVjdCB0b1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd29ya3NwYWNlXCIpO1xuXG4gICAgLy8gUmVtb3ZlIGludGVyYWN0aW9uIHdpdGggcmVzdCBvZiB3b3Jrc3BhY2U7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAvL2NvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcbiAgICAvL2NhcmRzLmZvckVhY2goY2FyZCA9PiBjYXJkLmNsYXNzTGlzdC5hZGQoJ2Jsb2Nrc2NyZWVuJykpXG5cblxuICAgIGxldCBwcm9qID0gcHJvamVjdE9iamVjdC5jb250ZW50O1xuXG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIFxuICAgIC8vIENyZWF0ZSBkb20gc2tlbGV0b24gXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvai5nZXRUaXRsZSgpO1xuICAgIGNvbnN0IHByb2plY3QgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJwcm9qZWN0XCIsIFwiaWRcIjogYCR7cHJvamVjdFRpdGxlIH0taWRgfSlcbiAgICBjb25zdCBjb250ZW50ID0gZWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdwcm9qZWN0LWNvbnRlbnQnLCAnaWQnOiBgJHtwcm9qZWN0VGl0bGV9LWNvbnRlbnRgfSlcbiAgIFxuICAgIC8vIExvYWRpbmcgb2YgZGF0YSBpbnRvIHNwZWNpZmllZCBjb250YWluZXJzXG4gICAgY29uc3QgcmVuZGVyRGF0YSA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIC8vIGNyZWF0ZSB0aXRnbGUgYmFyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gKCkgPT4ge1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZWxlbWVudCgnaDInLCB7J2NsYXNzJzogXCJwcm9qZWN0LXRpdGxlIHByb2plY3QtaXRlbVwifSk7XG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcbiAgICAgICAgICAgXG5cbiAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSgpKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJwcm9qZWN0LWRlc2MgcHJvamVjdC1pdGVtXCIsICdpZCc6IGAke3Byb2plY3RUaXRsZSB9LWRlc2NgfSk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2ouZ2V0RGVzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKCkpXG5cbiAgICAgICAgLy8gRGVhZGxpbmUvUHJpb3JpdHkvVXJnZW5jeSBDb250YWluZXIgKFRoZXNlIHdpbGwgaW50ZXJhY3QgYSBsb3QpXG4gICAgICAgIGNvbnN0IGRlYWRsaW5lID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBkZWFkbGluZUNvbnRhaW5lciA9IG1ha2VDb250YWluZXIoXCJEZWFkbGluZVwiLCBjYWxlbmRhckljb24pO1xuICAgICAgICAgICAgY29uc3QgZGVhZGxpbmVDb250ZW50ID0gZGVhZGxpbmVDb250YWluZXIucXVlcnlTZWxlY3RvcignLmRlYWRsaW5lLWNvbnRlbnQnKTsgICAgIFxuICAgICAgICAgICAgY29uc3QgZGVhZGxpbmUgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJwcm9qZWN0LWRlYWRsaW5lIHByb2plY3QtaXRlbVwiLCBcImlkXCI6IGAke3Byb2ouZGVhZGxpbmV9LWRlYWRsaW5lYH0pO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdidXR0b24nLCAnY2xhc3MnOiBgcHJpb3JpdHktYnV0dG9uIHByb2plY3QtaXRlbSAke3ByaW9yaXR5U3R5bGUocHJvaikucHJpb3JpdHlWYWx1ZX1gLCAndmFsdWUnOiBwcmlvcml0eVN0eWxlKHByb2opLnByaW9yaXR5VGV4dH0pO1xuICAgICAgICAgICAgZGVhZGxpbmUudGV4dENvbnRlbnQgPSBmb3JtYXQocHJvai5nZXREZWFkbGluZSgpLCBcIk1NLmRkLnl5eXlcIik7XG4gICAgICAgICAgICBkZWFkbGluZUNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVhZGxpbmUpO1xuICAgICAgICAgICAgZGVhZGxpbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVhZGxpbmVDb250ZW50KTsgICAgXG4gICAgICAgICAgICBkZWFkbGluZUNvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlCdXR0b24pO1xuICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBkZWFkbGluZUNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRlYWRsaW5lKCkpXG5cbiAgICAgICAgLy8gQWxzbyBrbm93biBhcyBvYmplY3RpdmVcbiAgICAgICAgY29uc3QgZ29hbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdvYWwgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJwcm9qZWN0LWdvYWwgcHJvamVjdC1pdGVtXCIsIFwiaWRcIjogYCR7cHJvamVjdFRpdGxlIH0tZ29hbGB9KTtcbiAgICAgICAgICAgIGdvYWwudGV4dENvbnRlbnQgPSBwcm9qLmdldEdvYWwoKTtcbiAgICAgICAgICAgIHJldHVybiBnb2FsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ29hbCgpKTsgXG4gICAgfVxuICAgIHJlbmRlckRhdGEoKTtcblxuICAgIC8vIFRhc2sgQ29udGFpbmVyXG4gICAgY29uc3QgdGFza3MgPSAoKSA9PiB7XG5cbiAgICAgICAgLy8gdG9vbHRpcHMgYW5kIG1lbnVcbiAgICAgICAgY29uc3Qgc29ydE1lbnUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZW51ID0gbWFrZU1lbnUoJ3NvcnQnLCAnc29ydCB0YXNrcycpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBlbGVtZW50KCdoNScsIHsnY2xhc3MnOiAnbWVudS1pdGVtIG1lbnUtaGVhZGVyJywgJ2lkJzogJ3NvcnQtdGVzdCd9KVxuICAgICAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ3NvcnQnO1xuICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHNvcnQgPSBlbGVtZW50KCdkaXYnLCB7J2lkJzogJ3NvcnQnfSlcblxuXG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgc29ydEJ1dHRvbiA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2ltYWdlJywgJ3NyYyc6IG1pbmlTb3J0SWNvbiwgJ2NsYXNzJzogJ2NvbnRhaW5lci1idXR0b24nLCAnaWQnOidtaW5pLXNvcnQnLCAnYWx0JzogJ1NvcnQgdGFza3MnLCAnZGF0YS1zb3J0JzogJyd9KTtcbiAgICAgICAgICBcbiAgICAgICAgICAgIHNvcnQuYXBwZW5kQ2hpbGQoc29ydEJ1dHRvbik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNvcnQuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgICAgICAgXG5cbiAgICAgICAgICAgIHNvcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIHRlc3RpbmdcbiAgICAgICAgICAgICAgICAvL1VJLnNldFNvcnQoJ2RlYWRsaW5lJyk7XG5cblxuXG4gICAgICAgICAgICAgICAgcmVuZGVyVGFza0xpc3QocHJvamVjdE9iamVjdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLi4nKVxuICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gc29ydDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgdGFza3MgPSBtYWtlQ29udGFpbmVyKFwiVGFza3NcIiwgZmluaXNoVGFza3NJY29uKTtcblxuICAgICAgICBcbiAgIFxuICAgICAgXG4gICAgICAgIGNvbnN0IGFkZFRhc2sgPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6J2ltYWdlJywgJ3NyYyc6IGFkZE1pbmlUYXNrSWNvbiwgJ2lkJzogJ2FkZC10YXNrLWJ1dHRvbicsICdhbHQnOiAnYWRkIG1pbmkgdGFzayd9KVxuICAgICAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IHRhc2tzLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICB0aXRsZUNvbnRhaW5lci5pbnNlcnRCZWZvcmUoc29ydE1lbnUoKSwgdGl0bGVDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpOyBcbiAgICAgICAgLy9jb25zdCBtaW5pVGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLXRpdGxlLWNvbnRhaW5lclwiKTtcbiAgICAgICAgLy8gbWluaVRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvcnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0T2JqZWN0LnRhc2tzLmdldFRhc2tMaXN0KCkubGVuZ3RoKVxuXG4gICAgICAgIHRhc2tzLmFwcGVuZENoaWxkKGFkZFRhc2spXG5cbiAgICAgICAgLy8gQXR0YWNoZXMgYSBuZXcgdGFzayB0byBib3RoIHRoZSBET00gZWxlbWVudCBhbmQgUHJvamVjdCBPYmplY3RzXG5cbiAgICAgICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlLCApID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9jcmVhdGVUYXNrKGUudGFyZ2V0LnBhcmVudE5vZGUsIHByb2plY3RPYmplY3QpO1xuICAgICAgICAgICAgY3JlYXRlVGFzayhwcm9qZWN0T2JqZWN0KTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tMaXN0KHByb2plY3RPYmplY3QpO1xuICBcbiAgICAgICAgfSlcblxuICAgICAgICBcblxuICAgICAgICByZXR1cm4gdGFza3M7XG4gICAgfVxuXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tzKCkpO1xuICAgXG5cbiAgICBjb25zdCBwcm9qZWN0QnV0dG9ucyA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ2J1dHRvbi1iYXInLCAnaWQnOiAncHJvamVjdC1idXR0b24tYmFyJ30pO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlUHJvamVjdCA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2ltYWdlJywgJ3NyYyc6IGNsb3NlUHJvamVjdEljb24sJ2NsYXNzJzogJ3Byb2plY3QtYnV0dG9uJywgJ2lkJzogJ2Nsb3NlLXByb2plY3QnLCAndmFsdWUnOiAnQ2xvc2UnfSk7XG4gICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0ID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogZWRpdFByb2plY3RJY29uLCAnY2xhc3MnOiAncHJvamVjdC1idXR0b24nLCAnaWQnOiAnZWRpdC1wcm9qZWN0JywgJ3ZhbHVlJzogJ0VkaXQnfSlcbiAgICAgICAgZWRpdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBcblxuICAgICAgICBlZGl0UHJvamVjdEJveChwcm9qZWN0T2JqZWN0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZVByb2plY3QpXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0UHJvamVjdClcblxuICAgICAgICByZXR1cm4gYnV0dG9uQ29udGFpbmVyO1xuICAgIH1cbiAgICBcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RCdXR0b25zKCkpO1xuXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChjb250ZW50KVxuXG4gICBcblxuICAgIFxuICAgIHJldHVybiBwcm9qZWN0O1xuICBcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gcmVuZGVyKCk7XG5cbiAgICBcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgY3JlYXRlTGlzdGVuZXJzKHByb2plY3RPYmplY3QpO1xuICAgIHJlbmRlclRhc2tMaXN0KHByb2plY3RPYmplY3QpO1xuICBcbiAgICBcblxufVxuXG5jb25zdCBjcmVhdGVUYXNrID0gKHByb2plY3QpID0+IHtcblxuICAgIGNvbnN0IHRhc2sgPSBUYXNrKCk7XG4gICAgdGFzay5zZXRQYXJlbnQocHJvamVjdCk7XG4gICAgcHJvamVjdC50YXNrcy5hZGRUYXNrKHRhc2spO1xufVxuXG4vLyBQcm9qIGlzIG9yaWdpbmFsIHByb2plY3QgYmVpbmcgZWRpdGVkO1xuY29uc3QgZWRpdFByb2plY3RCb3ggPSAocHJvaikgPT4ge1xuXG4gICAgLy8gQ3JlYXRlIHRlbXBvcmFyeSBwcm9qZWN0IHRvIHNhdmUgdG8sIGFsbG93IGZvciBmdXR1cmUgcmVmYWN0b3JpbmdcbiAgICBjb25zdCB0ZW1wUHJvaiA9IFByb2plY3QoKTtcbiAgICBcbiAgICBjb25zdCBjb250ZW50ID0gdGVtcFByb2ouY29udGVudDtcblxuICAgIC8vIENyZWF0ZSBzYXZlIGJ1dHRvbiBhbmQgaGlkZSBlZGl0IGJ1dHRvblxuICAgIGNvbnN0IGJ1dHRvbkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tYmFyJyk7XG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3QnKTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBzYXZlUHJvamVjdEljb24sICdjbGFzcyc6ICdwcm9qZWN0LWJ1dHRvbiBlZGl0LWJ1dHRvbicsICdpZCc6ICdzYXZlLXByb2plY3QtYnV0dG9uJywgJ3ZhbHVlJzogJ1NhdmUnfSk7XG4gICAgXG4gICAgLy8gQ29weSBjb250ZW50IHRvIHRlbXBvcmFyeSBwcm9qZWN0IG9iamVjdFxuICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgY29udGVudC5zZXRUaXRsZShuZXdUaXRsZS52YWx1ZSk7XG4gICAgICAgIGNvbnRlbnQuc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24udmFsdWUpO1xuICAgICAgICBjb250ZW50LnNldEdvYWwobmV3R29hbC52YWx1ZSk7XG4gICAgICAgIHNhdmVCdXR0b24ucmVtb3ZlKCk7XG4gICAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgICAgICAgc2F2ZVRvUHJvamVjdCgpOyAgXG5cbiAgICB9KVxuXG4gICAgLy8gU2F2ZSB0ZW1wb3JhcnkgcHJvamVjdCBjb250ZW50IHRvIG9yaWdpbmFsIHByb2plY3QgYW5kIHJlZnJlc2hcbiAgICAvLyBUaGUgZXh0cmEgc3RlcCBvZiBjcmVhdGluZyBhIHRlbXBvcmFyeSBwcm9qZWN0IGlzIGZvciBmdXR1cmUgZWRpdGFiaWxpdHkvcmVmYWN0b3JpbmdcbiAgICBjb25zdCBzYXZlVG9Qcm9qZWN0ID0gKCkgPT4ge1xuXG4gICAgICAgIHByb2ouY29udGVudC5zZXRUaXRsZShjb250ZW50LmdldFRpdGxlKCkpO1xuICAgICAgICBwcm9qLmNvbnRlbnQuc2V0RGVzY3JpcHRpb24oY29udGVudC5nZXREZXNjcmlwdGlvbigpKTtcbiAgICAgICAgcHJvai5jb250ZW50LnNldEdvYWwoY29udGVudC5nZXRHb2FsKCkpO1xuICAgICAgICBcbiAgICAgICAgY2xvc2VQcm9qZWN0KHByb2opO1xuICAgICAgICByZW5kZXJQcm9qZWN0KHByb2opO1xuICAgIH1cblxuXG4gICAgYnV0dG9uQmFyLmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xuXG5cbiAgICAvLyBGdW5jdGlvbnMgcmV0dXJuIERPTSBvYmplY3QsIG5vdCBpdHMgY29udGVudCBleHBsaWNpdGVseVxuICAgIGNvbnN0IG5ld1RpdGxlID0gZWRpdFRpdGxlKCdwcm9qZWN0Jyk7XG4gICAgY29uc3QgbmV3RGVzY3JpcHRpb24gPSBlZGl0RGVzY3JpcHRpb24oJ3Byb2plY3QnKTtcbiAgICBjb25zdCBuZXdHb2FsID0gZWRpdEdvYWwoJ3Byb2plY3QnKTtcbiAgICAgICBcbn1cblxuLy8gRW5hYmxlIGVkaXRpbmcgb2YgdGl0bGUgb2YgcHJvamVjdC4gUmV0dXJucyBET00gT2JqZWN0LiBUYXJnZXQgaXMgc3RyaW5nIGVpdGhlciAncHJvamVjdCcgb3IgJ3Rhc2snXG5jb25zdCBlZGl0VGl0bGUgPSAodGFyZ2V0KSA9PiB7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldH0tdGl0bGVgKTtcbiAgIFxuICAgIGNvbnN0IGVkaXRUaXRsZUJveCA9IGVsZW1lbnQoJ3RleHRhcmVhJywgIHsnbmFtZSc6ICd0ZXh0YXJlYScsICdwbGFjZWhvbGRlcic6IHRpdGxlLmlubmVyVGV4dCwgXCJjbGFzc1wiOiBgZWRpdC0ke3RhcmdldH0tYm94ICR7dGFyZ2V0fS10aXRsZSAke3RhcmdldH0taXRlbWB9KTtcbiAgICBlZGl0VGl0bGVCb3gudGV4dENvbnRlbnQgPSB0aXRsZS5pbm5lclRleHQ7XG4gICAgdGl0bGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWRpdFRpdGxlQm94LCB0aXRsZSk7XG4gICAgY29uc29sZS5sb2coZWRpdFRpdGxlQm94LnRleHRDb250ZW50KVxuICAgIHRpdGxlLnJlbW92ZSgpO1xuICAgIHJldHVybiBlZGl0VGl0bGVCb3g7XG5cbn1cblxuLy8gRW5hYmxlIGVkaXRpbmcgb2YgZGVzY3JpcHRpb24vY29udGVudCBvZiBwcm9qZWN0LiBSZXR1cm5zIERPTSBvYmplY3QuXG5jb25zdCBlZGl0RGVzY3JpcHRpb24gPSAodGFyZ2V0KSA9PiB7XG4gICAgXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldH0tZGVzY2ApO1xuICAgIFxuICAgIFxuICAgIGNvbnN0IGVkaXREZXNjcmlwdGlvbkJveCA9IGVsZW1lbnQoJ3RleHRhcmVhJywgeyduYW1lJzondGV4dGFyZWEnLCAncGxhY2Vob2xkZXInOiBkZXNjLmlubmVyVGV4dCwgJ2NsYXNzJzogYGVkaXQtJHt0YXJnZXR9LWJveCAke3RhcmdldH0taXRlbSAke3RhcmdldH0tZGVzY2B9KTtcbiAgICBlZGl0RGVzY3JpcHRpb25Cb3gudGV4dENvbnRlbnQgPSBkZXNjLmlubmVyVGV4dDtcbiAgICBkZXNjLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVkaXREZXNjcmlwdGlvbkJveCwgZGVzYyk7XG4gICAgZGVzYy5yZW1vdmUoKTtcbiAgICByZXR1cm4gZWRpdERlc2NyaXB0aW9uQm94O1xuXG59XG5cbi8vIEVuYWJsZSBlZGl0aW5nIG9mIGdvYWwgY29udGVudC4gIFJldHVybnMgRE9NIG9iamVjdC5cbmNvbnN0IGVkaXRHb2FsID0gKHRhcmdldCkgPT4ge1xuXG4gICAgY29uc3QgZ29hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldH0tZ29hbGApO1xuICAgIGNvbnN0IGdvYWxUZXh0ID0gZ29hbC5pbm5lclRleHQ7XG4gICAgY29uc29sZS5sb2coZ29hbFRleHQpO1xuICAgIGNvbnN0IGVkaXRHb2FsQm94ID0gZWxlbWVudCgndGV4dGFyZWEnLCB7J3BsYWNlaG9sZGVyJzogZ29hbFRleHQsICdjbGFzcyc6IGBlZGl0LSR7dGFyZ2V0fS1ib3ggJHt0YXJnZXR9LWdvYWwgJHt0YXJnZXR9LWl0ZW1gfSlcbiAgICBlZGl0R29hbEJveC50ZXh0Q29udGVudCA9IGdvYWxUZXh0O1xuICAgIGdvYWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWRpdEdvYWxCb3gsIGdvYWwpO1xuICAgIGdvYWwucmVtb3ZlKCk7XG4gICAgcmV0dXJuIGVkaXRHb2FsQm94O1xuXG59XG5cblxuLy8gRm9yIHNvcnRpbmcgdGhlIGxpc3Qgb2YgdGFza3MgaW4gYSBwcm9qZWN0LiAgbWV0aG9kIGlzIGFuIG9wdGlvbmFsIG92ZXJyaWRlXG5jb25zdCBzb3J0TGlzdCA9IChsaXN0LCBtZXRob2QpID0+IHtcblxuICAgIGNvbnNvbGUubG9nKFwibWV0aG9kIGlzIFwiICsgbWV0aG9kKVxuICAgIGlmIChtZXRob2QgPT0gbnVsbCl7XG4gICAgICAgIG1ldGhvZCA9IFVJLmdldFNvcnQoKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIm1ldGhvZCBpcyBcIiArIG1ldGhvZClcbiAgICBjb25zb2xlLmxvZyhsaXN0KTtcbiAgICBzd2l0Y2gobWV0aG9kKXtcblxuICAgICAgICBjYXNlICdwcmlvcml0eSc6XG4gICAgICAgICAgICByZXR1cm4gbGlzdC5zb3J0KChhLGIpID0+IHsgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuZ2V0UHJpb3JpdHkoKSAtIGIuZ2V0UHJpb3JpdHkoKSB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICBjYXNlICdkZWFkbGluZSc6XG4gICAgICAgICAgICByZXR1cm4gbGlzdC5zb3J0KChhLGIpID0+IHsgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuZ2V0RGVhZGxpbmUoKSAtIGIuZ2V0RGVhZGxpbmUoKSB9KTtcbiAgXG4gICAgICAgIGNhc2UgJ3VyZ2VuY3knOlxuICAgICAgICAgICAgcmV0dXJuIGxpc3Quc29ydCgoYSxiKSA9PiB7IFxuICAgICAgICAgICAgICAgIHJldHVybiBhLmdldFVyZ2VuY3koKSAtIGIuZ2V0VXJnZW5jeSgpIH0pO1xuICAgICAgICAgICBcbiAgICAgICAgY2FzZSAndGl0bGUnOlxuICAgICAgICAgICAgcmV0dXJuIGxpc3Quc29ydCgoYSwgYikgPT4gYS5nZXRUaXRsZSgpLmxvY2FsZUNvbXBhcmUoYi5nZXRUaXRsZSgpKSk7XG4gICAgfVxuXG5cbiAgICByZXR1cm47XG5cblxufVxuXG4vL0hhbmRsZXMgZGlzcGxheSBvZiAnVGFza3MgbGlzdCdcbmNvbnN0IHJlbmRlclRhc2tMaXN0ID0gKHByb2plY3QpID0+IHtcblxuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250YWluZXInKVxuICAgIGNvbnN0IGxpc3QgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ3Rhc2stbGlzdCd9KTtcbiAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGxpc3QsIHBhcmVudC5sYXN0RWxlbWVudENoaWxkKVxuICAgIGNvbnN0IG1pbmlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1pbmktdGFzaycpO1xuICAgIG1pbmlMaXN0LmZvckVhY2gobWluaSA9PiBtaW5pLnJlbW92ZSgpKVxuXG4gICAgLy8gU29ydCBsaXN0IGJhc2VkIG9uIHVzZXIgb3B0aW9uXG4gICAgbGV0IHRhc2tMaXN0ID0gcHJvamVjdC50YXNrcy5nZXRUYXNrTGlzdCgpO1xuICAgLyogY29uc29sZS5sb2codGFza0xpc3QpXG4gICAgdGFza0xpc3Quc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBzb3J0ID0gc29ydFRhc2tzKCk7XG4gICAgICAgIHJldHVybiBhLnNvcnQgLSBiLnNvcnRcbiAgICB9KTsqL1xuXG4gICAgc29ydExpc3QodGFza0xpc3QpO1xuXG4gICAgY29uc29sZS5sb2codGFza0xpc3QpXG4gICAgZm9yIChsZXQgdGFzayBvZiB0YXNrTGlzdCl7XG4gICAgICAgIC8vY29uc29sZS5sb2codGFzayk7XG4gICAgICAgIGNvbnN0IG1pbml0YXNrID0gY3JlYXRlTWluaVRhc2socHJvamVjdCwgdGFzayk7XG5cblxuICAgICAgICBpZiAodGFzay5nZXRTdGF0dXMoKSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBtaW5pdGFzay5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTsgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgbWluaXRhc2suY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7XG5cbiAgICAgIFxuICAgICAgXG4gICAgICAgbGlzdC5hcHBlbmRDaGlsZChtaW5pdGFzayk7XG4gICAgfVxuXG5cbiAgICBcbn1cblxuXG5cbi8vIERlbGV0ZXMgdGFzayBmcm9tIHBhcmVudCBwcm9qZWN0XG5jb25zdCBkZWxldGVUYXNrID0gKHRhc2spID0+IHtcblxuICAgIGNvbnNvbGUubG9nKHRhc2spO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IHRhc2suZ2V0UGFyZW50KCk7XG4gICAgcHJvamVjdC50YXNrcy5yZW1vdmVUYXNrKHRhc2spO1xuICAgIHJlbmRlclRhc2tMaXN0KHByb2plY3QpO1xufVxuXG4vLyBEZWxldGUgdGhlIERPTSBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0YXNrXG5cblxuXG4vLyBDcmVhdGVzIGEgbWluaS10YXNrIERPTSBlbGVtZW50IG91dCBvZiB0YXNrIG9iamVjdFxuY29uc3QgY3JlYXRlTWluaVRhc2sgPSAocHJvamVjdCwgdGFzaykgPT4ge1xuICAgIFxuICAgIGNvbnN0IG1pbml0YXNrID0gZWxlbWVudCgnZGl2JywgeydjbGFzcyc6J21pbmktdGFzayd9KVxuICAgIG1pbml0YXNrLmNsYXNzTGlzdC5hZGQocHJpb3JpdHlTdHlsZSh0YXNrKS5wcmlvcml0eVZhbHVlKTtcbiAgICBpZiAodGFzay5nZXRTdGF0dXMoKSA9PT0gdHJ1ZSl7XG4gICAgICAgIG1pbml0YXNrLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICAgICAgIFxuICAgIH1cblxuICAgIC8vY29uc29sZS5sb2codGFzayk7XG4gICAgLy8gRGVsZXRlIG1pbmlcbiAgICBjb25zdCByZW1vdmVNaW5pID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogbWluaURlbGV0ZUljb24sICdjbGFzcyc6ICdtaW5pLWJ1dHRvbiBtaW5pLWRlbGV0ZScsICd2YWx1ZSc6ICctJ30pXG4gICAgLy8gUGFzcyBvbiBET00gb2YgTWluaWxpc3QgYW5kIFRhc2sgdG8gZGVsZXRlXG4gICAgcmVtb3ZlTWluaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBkZWxldGVNaW5pKHRhc2spKTtcbiAgICAvLyBNYXJrIG1pbmkgYXMgY29tcGxldGVcbiAgICBjb25zdCBmaW5pc2hNaW5pID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogbWluaUNoZWNrYm94LCAnY2xhc3MnOiAnbWluaS1idXR0b24gbWluaS1maW5pc2gnLCAndmFsdWUnOiAnRid9KTtcbiAgICBmaW5pc2hNaW5pLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRvZ2dsZVRhc2tTdGF0dXModGFzaykpO1xuICAgIC8vT3BlbiBUYXNrIGluIGZ1bGwgdmlld1xuICAgIGNvbnN0IG1pbmlCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdidXR0b24nLCAnY2xhc3MnOiAnbWluaS1idXR0b24gbWluaS10aXRsZScsICd2YWx1ZSc6IGAke3Rhc2suZ2V0VGl0bGUoKX1gfSk7XG4gICAgICAgIFxuICAgIFxuXG5cbiAgICBtaW5pQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyVGFzayh0YXNrKSlcbiAgICBtaW5pdGFzay5hcHBlbmRDaGlsZChyZW1vdmVNaW5pKTtcbiAgICBtaW5pdGFzay5hcHBlbmRDaGlsZChtaW5pQnV0dG9uKTtcbiAgICBtaW5pdGFzay5hcHBlbmRDaGlsZChmaW5pc2hNaW5pKVxuICAgIGxldCBiZ2NvbG9yID0gbWluaXRhc2suc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICAgIGNvbnN0IHRpdGxlID0gZWxlbWVudCgnaDQnLCB7J2NsYXNzJzogJ21pbmktdGFzay10aXRsZSd9KVxuICAgIFxuICAgIFxuICAgIG1pbml0YXNrLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuXG4gICAgcmV0dXJuIG1pbml0YXNrO1xufVxuXG5jb25zdCBzb3J0TWVudSA9ICgpID0+IHtcblxuICAgIFxuXG5cbn1cblxuXG5jb25zdCBkZWxldGVNaW5pID0gKHRhc2spID0+IHtcblxuICAgIFxuICAgIGNvbnN0IHByb2plY3QgPSB0YXNrLmdldFBhcmVudCgpO1xuXG4gICAgY29uc29sZS5sb2cocHJvamVjdC50YXNrcy5nZXRUYXNrTGlzdCgpKTtcbiAgICBwcm9qZWN0LnRhc2tzLnJlbW92ZVRhc2sodGFzayk7XG4gICAgXG4gICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzaycpO1xuICAgIGlmICh0YXNrQ2FyZCAhPSBudWxsKXtcbiAgICAgICAgaWYgKHRhc2tDYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpID09IHRhc2suZ2V0SUQoKSkgY2xvc2VUYXNrKHRhc2tDYXJkKTtcbiAgICB9XG5cbiAgICAvLyBSZWZyZXNoIHRhc2sgbGlzdFxuICAgIHJlbmRlclRhc2tMaXN0KHByb2plY3QpO1xuXG5cbn1cblxuXG5cblxuY29uc3QgZ2V0UHJvamVjdEZyb21Vc2VyID0gKCkgPT4ge1xuXG5cbn1cblxuXG4vLyBCdXR0b25zIGFuZCBMaXN0ZW5lcnNcbmNvbnN0IGNyZWF0ZUxpc3RlbmVycyA9IChwcm9qZWN0KSA9PiB7XG5cbiAgICAvLyBDcmVhdGUgbGlzdGVuZXJzIGZvciBidXR0b25zXG4gICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3QnKTtcbiAgICAvL2NvbnNvbGUubG9nKHByb2plY3QuY29udGVudC5nZXRQcmlvcml0eSgpKVxuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXByb2plY3QnKTtcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlUHJvamVjdCgpKTtcbiAgICAvLyBDb250ZW50IGJ1dHRvbiAoZXhwYW5kIGNvbnRlbnQpXG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtYnV0dG9uJyk7XG4gICAgdGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgc2V0QWxsVGFza3MocHJvamVjdCk7XG5cbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IGRlYWRsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlYWRsaW5lLWJ1dHRvbicpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LWJ1dHRvbi5wcm9qZWN0LWl0ZW0nKTtcbiAgICBwcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICAgICAgY3ljbGVQcmlvcml0eShwcm9qZWN0KTtcblxuICAgIH0pICAgXG5cbn1cblxuY29uc3QgY3ljbGVQcmlvcml0eSA9IChwcm9qZWN0KSA9PiB7XG5cbiAgICBjb25zdCBjdXJyZW50UHJpb3JpdHkgPSBwcm9qZWN0LmNvbnRlbnQuZ2V0UHJpb3JpdHkoKTtcbiAgICAvLyAgY29uc29sZS5sb2coY3VycmVudFByaW9yaXR5KTtcblxuICAgICBcbiAgICAgIGNvbnN0IHVwZGF0ZWRQcmlvcml0eSA9ICgoKGN1cnJlbnRQcmlvcml0eSkgKzEgKSAlIDMpICsgMTtcbiAgICAgIHByb2plY3QuY29udGVudC5zZXRQcmlvcml0eSh1cGRhdGVkUHJpb3JpdHkpO1xuICAgICAgY2xvc2VQcm9qZWN0KCk7XG5cbiAgICBjb25zdCBwcm9qZWN0RE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKTtcbiAgICBpZiAocHJvamVjdERPTSAhPSBudWxsKSByZW5kZXJQcm9qZWN0KHByb2plY3QpO1xuICAgICAgXG59XG5cblxuXG4vLyBUb2dnbGUgY29tcGxldGVkIHN0YXR1cyBmb3IgYWxsIHRhc2tzIGluIGEgcHJvamVjdFxuY29uc3Qgc2V0QWxsVGFza3MgPSAocHJvamVjdCkgPT4ge1xuXG4gICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGFza0xpc3QgPSBwcm9qZWN0LnRhc2tzLmdldFRhc2tMaXN0KCk7XG4gICAgY29uc3QgZmluaXNoZWRMaXN0ID0gcHJvamVjdC50YXNrcy5nZXRDb21wbGV0ZWRUYXNrcygpO1xuXG4gICAgaWYgKHByb2plY3QudGFza3MuZ2V0VGFza0xpc3QoKS5sZW5ndGggIT0gcHJvamVjdC50YXNrcy5nZXRDb21wbGV0ZWRUYXNrcygpLmxlbmd0aCl7XG4gICAgICAgIHN0YXR1cyA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYoZmluaXNoZWRMaXN0Lmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIHN0YXR1cyA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvamVjdC50YXNrcy5jbGVhckZpbmlzaGVkTGlzdCgpO1xuICAgIFxuICAgIGZvciAobGV0IHRhc2sgb2YgdGFza0xpc3Qpe1xuXG4gICAgICAgIHRhc2suc2V0U3RhdHVzKHN0YXR1cyk7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IHRydWUpe1xuICAgICAgICAgICAgcHJvamVjdC50YXNrcy5jb21wbGV0ZVRhc2sodGFzayk7ICBcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3REb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpO1xuICAgIGlmIChwcm9qZWN0RG9tICE9IG51bGwpeyAgICBcbiAgICAgICAgY2xvc2VQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICByZW5kZXJQcm9qZWN0KHByb2plY3QpO1xuICAgIH1cblxuXG59XG5cblxuY29uc3QgY2xvc2VQcm9qZWN0ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JylcbiAgICBcbiAgICAvL1JlZW5hYmxlIGludGVyYWN0aW9uIFxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1jb250YWluZXInKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgXG4gICAgaWYgKHByb2plY3QgIT0gbnVsbCkgcHJvamVjdC5yZW1vdmUoKTtcblxuICAgIHJlbmRlclByb2plY3RMaXN0KCk7XG5cblxuXG59XG5cbmNvbnN0IGZpbmlzaFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuXG4gICAgY29uc3QgcHJvamVjdFRhc2tzID0gcHJvamVjdC50YXNrcy5nZXRUYXNrTGlzdCgpO1xuXG4gICAgXG4gICAgc2V0QWxsVGFza3MocHJvamVjdCk7XG5cbiAgICByZW5kZXJQcm9qZWN0TGlzdCgpO1xuXG59XG5cbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuXG4gICAgcHJvamVjdExpc3QucmVtb3ZlUHJvamVjdCgpO1xuXG5cbn1cblxuY29uc3Qgc2V0dGluZ3MgPSAoKSA9PiB7XG5cbiAgICBsZXQgc29ydCA9ICdwcmlvcml0eSc7XG5cblxuICAgIGNvbnN0IHNldFNvcnQgPSAobmV3U29ydCkgPT4gc29ydCA9IG5ld1NvcnQ7XG4gICAgY29uc3QgZ2V0U29ydCA9ICgpID0+IHNvcnQ7XG5cblxuICAgIHJldHVybiB7c29ydCwgZ2V0U29ydCwgc2V0U29ydH1cblxufVxuXG5cblxuXG5cbmNvbnN0IGFkZFByb2plY3RQb3BVcCA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBidXR0b24gPSBlbGVtZW50KFwiYnV0dG9uXCIsIHtcImlkXCI6IFwicHJvamVjdC1idXR0b25cIiwgXCJ2YWx1ZVwiOiBcIlByZXNzaXRcIixcInRleHRDb250ZW50XCI6IFwiUHJlc3NcIn0pXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIFxuICAgIH0pXG5cblxuICAgIHJldHVybiBidXR0b247XG5cbn1cblxuXG5leHBvcnQge3JlbmRlclRhc2tMaXN0LCB0b2dnbGVUYXNrU3RhdHVzLCBzZXR0aW5ncywgZGVsZXRlUHJvamVjdCwgY3ljbGVQcmlvcml0eSwgZWRpdFByb2plY3RCb3gsIGRlbGV0ZVRhc2ssIGZpbmlzaFByb2plY3QsIGNsb3NlUHJvamVjdCwgcmVuZGVyUHJvamVjdCwgcmVuZGVyVGFzaywgYWRkUHJvamVjdFBvcFVwIGFzIGFkZFByb2plY3RCdXR0b24sIGNyZWF0ZUxpc3RlbmVycywgZWRpdFRpdGxlLCBlZGl0RGVzY3JpcHRpb24sIGVkaXRHb2FsLCBjcmVhdGVNaW5pVGFza30iLCJcbi8vIFRoZSBpZGVhIGlzIHRvIHN0b3JlIHRoaXMgc2VwZXJhdGVseSBmcm9tIHRoZSBwcm9qZWN0LCB0byBhbGxvdyBmb3IgbG9hZGluZyBVSSBzZXR0aW5ncyBkZXRhY2hlZCBmcm9tIGRhdGFcblxuY29uc3QgVUkgPSAoKCkgPT4ge1xuXG4gICBcblxuICAgICAgICBsZXQgc29ydFR5cGUgPSAncHJpb3JpdHknXG4gICAgICAgIGxldCBhc2NlbmRpbmcgPSB0cnVlXG5cbiAgICAgICAgY29uc3QgZ2V0U29ydCA9ICgpID0+ICBzb3J0VHlwZTtcbiAgICAgICAgY29uc3Qgc2V0U29ydCA9IChuZXdTb3J0KSA9PiBzb3J0VHlwZSA9IG5ld1NvcnRcbiAgICBcbiAgICAgIC8vICBnZXRBc2NlbmRpbmc6ICgpID0+IGFzY2VuZGluZ1xuICAgICAgLy8gIHNldEFzY2VuZGluZzogKG5ld0FzY2VuZGluZykgPT4gYXNjZW5kaW5nID0gbmV3QXNjZW5kaW5nXG5cblxuICAgICAgICByZXR1cm4ge2dldFNvcnQsIHNldFNvcnQsfVxuXG59KSgpO1xuXG5leHBvcnQgeyBVSX0iLCJpbXBvcnQgY2xvc2VUYXNrSWNvbiBmcm9tIFwiLi9pbWcvYXJyb3ctYm90dG9tLWxlZnQtdGhpY2suc3ZnXCI7XG5pbXBvcnQgZWRpdFRhc2tJY29uIGZyb20gXCIuL2ltZy9wZW5jaWwuc3ZnXCI7XG5pbXBvcnQgc2F2ZVRhc2tJY29uIGZyb20gXCIuL2ltZy9zYXZlLXRhc2suc3ZnXCI7XG5pbXBvcnQgZmluaXNoVGFza0ljb24gZnJvbSBcIi4vaW1nL2ZpbmlzaC10YXNrLnN2Z1wiO1xuaW1wb3J0IGRlbGV0ZVRhc2tJY29uIGZyb20gXCIuL2ltZy9kZWxldGUtdGFzay5zdmdcIjtcbmltcG9ydCBlZGl0RGVhZGxpbmVJY29uIGZyb20gXCIuL2ltZy9jYWxlbmRhci1lZGl0LnN2Z1wiXG5pbXBvcnQgY29uZmlybUljb24gZnJvbSBcIi4vaW1nL2NoZWNrLWJvbGQuc3ZnXCI7XG5cbmltcG9ydCB7IGVkaXREZXNjcmlwdGlvbiwgZWRpdEdvYWwsIGVkaXRUaXRsZSwgY3JlYXRlTWluaVRhc2ssIGNsb3NlUHJvamVjdCwgcmVuZGVyUHJvamVjdCwgZGVsZXRlVGFzaywgcmVuZGVyVGFza0xpc3R9IGZyb20gXCIuL3Byb2plY3RVSVwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IGFwcGVuZENoaWxkcmVuLCBlbGVtZW50LCBtYWtlQ29udGFpbmVyLCBtYWtlUmFkaW8sIGdldERhdGV9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlSVNPLCB0b0RhdGUgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgdG9kYXkgPSBnZXREYXRlKCk7XG5sZXQgZm9jdXNlZFRhc2s7XG4vLyBTaG93IGEgZnVsbCB0YXNrIG9uIHNjcmVlblxuY29uc3QgcmVuZGVyVGFzayA9ICh0YXNrKSA9PiB7XG5cbiAgICBmb2N1c2VkVGFzayA9IHRhc2s7XG5cbiAgICAvLyBWYWx1ZXNcbiAgIFxuICAgIGNvbnN0IG9sZFRhc2tET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tcIik7XG4gICAgaWYgKG9sZFRhc2tET00gIT0gdW5kZWZpbmVkKSBvbGRUYXNrRE9NLnJlbW92ZSgpO1xuICAgIFxuICAgIC8vIERPTSBlbGVtZW50IHRvIGF0dGFjaCBzZWxmIHRvXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd29ya3NwYWNlXCIpO1xuXG4gICAgY29uc3QgcHJvamVjdERPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Jyk7XG4gICAgcHJvamVjdERPTS5jbGFzc0xpc3QuYWRkKCdibG9ja3Byb2plY3QnKVxuXG4gICAgLy8gVGhlIGFjdHVhbCByZW5kZXIgb2JqZWN0IFxuICAgIGNvbnN0IHRhc2tQb3B1cCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IGVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJ0YXNrXCIsIGlkOiBgJHt0YXNrLnRpdGxlfS0ke3Rhc2suZ2V0SUQoKX1gLCAnZGF0YS1pZCc6IHRhc2suZ2V0SUQoKX0pXG5cbiAgICAgICAgaWYgKHRhc2suZ2V0U3RhdHVzKCkpIG5ld1Rhc2suY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0aXRsZSA9ICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGl0bGVCYXIgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJ0YXNrLXRpdGxlLWJhclwifSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBlZGl0VGFza0ljb24sICdjbGFzcyc6ICd0YXNrLWJ1dHRvbicsICdpZCc6ICd0YXNrLWVkaXQtYnV0dG9uJywgJ3ZhbHVlJzogJ0VkaXQnfSk7XG4gICAgICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZWRpdFRhc2sodGFzaykpO1xuICAgICAgICAgICAgdGl0bGVCYXIuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cblxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbGVtZW50KCdoMicsIHsnY2xhc3MnOiBcInRhc2stdGl0bGVcIn0pO1xuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLmdldFRpdGxlKCk7O1xuICAgICAgICAgICAgdGl0bGVCYXIuYXBwZW5kQ2hpbGQodGl0bGUpOyAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlQnV0dG9uID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogZmluaXNoVGFza0ljb24sICdjbGFzcyc6ICd0YXNrLWJ1dHRvbicsICdpZCc6ICd0YXNrLWNvbXBsZXRlLWJ1dHRvbicsICd2YWx1ZSc6ICdDSEsnfSk7XG4gICAgICAgICAgICBjb21wbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdG9nZ2xlVGFza1N0YXR1cyh0YXNrKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBSZWZyZXNoIHRhc2sgb3IgY2xvc2UgdGFzayBkZXBlbmRpbmcgb24gd2hldGhlciB0YXNrIGlzIGJlaW5nIG1hcmtlZCBjb21wZWx0ZVxuICAgICAgICAgICAgICAgIHRhc2suZ2V0U3RhdHVzKCkgPyAgY2xvc2VUYXNrKG5ld1Rhc2spIDogcmVuZGVyVGFzayh0YXNrKTtcbiAgIFxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGl0bGVCYXIuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pXG5cbiAgXG4gICAgICAgICAgICByZXR1cm4gdGl0bGVCYXI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9ICgpID0+IHtcblxuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZWxlbWVudCgnZGl2JywgeydjbGFzcyc6IFwidGFzay1kZXNjXCIsICdpZCc6IGAke3Rhc2sudGl0bGV9LWRlc2NgfSk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5nZXREZXNjcmlwdGlvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC8vIENyZWF0aW5nIGEgRE9NIGNvbnRhaW5lciB0byBob2xkIHByaW9yaXR5IGFuZCBkZWFkbGluZSBkaXNwbGF5XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gKCkgPT4ge1xuXG4gICAgICAgICAgIC8vIGNvbnN0IHByaW9yaXR5ID0gbWFrZUNvbnRhaW5lcigndGFzay1kZWFkbGluZScsIGVkaXREZWFkbGluZUljb24pO1xuICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiBgdGFzay1kZWFkbGluZS1jb250YWluZXJgfSk7XG4gICAgICAgICAgIFxuICAgICAgICAgICBjb25zdCBwcmlvcml0eUhlYWRlciA9IGVsZW1lbnQgKCdoMycsIHsnY2xhc3MnOiBgdGFzay1kZWFkbGluZS1oZWFkZXJgfSk7ICBcbiAgICAgICAgICAgcHJpb3JpdHlIZWFkZXIudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIiAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgY29uc3QgZWRpdERlYWRsaW5lQnV0dG9uID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogZWRpdERlYWRsaW5lSWNvbiwgICdpZCc6IGB0YXNrLWRlYWRsaW5lLWJ1dHRvbmAsICdjbGFzcyc6ICdjb250YWluZXItYnV0dG9uIGV4cGFuZC1jb250ZW50LWJ0bicsIH0sICk7XG4gICAgICAgICAgIGVkaXREZWFkbGluZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5EZWFkbGluZUZvcm0odGFzaykpXG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgc3dpdGNoUHJpb3JpdHlCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdidXR0b24nLCAnY2xhc3MnOiBgcHJpb3JpdHktYnV0dG9uIHRhc2staXRlbSAke3ByaW9yaXR5U3R5bGUodGFzaykucHJpb3JpdHlWYWx1ZX1gLCAndmFsdWUnOiBwcmlvcml0eVN0eWxlKHRhc2spLnByaW9yaXR5VGV4dH0pO1xuICAgICAgICAgICAgc3dpdGNoUHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjeWNsZVByaW9yaXR5KHRhc2spKTtcblxuICAgICAgICAgICAgY29uc3QgZGVhZGxpbmUgPSBlbGVtZW50KCdoNCcsIHsnY2xhc3MnOiBcInRhc2stZGVhZGxpbmUgdGFzay1pdGVtXCIsIFwiaWRcIjogYCR7dGFzay5kZWFkbGluZX0tZGVhZGxpbmVgfSk7XG4gICAgICAgICAgICBkZWFkbGluZS50ZXh0Q29udGVudCA9IGZvcm1hdCh0YXNrLmdldERlYWRsaW5lKCksIFwiTU0uZGQueXl5eVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYXBwZW5kQ2hpbGRyZW4ocHJpb3JpdHksIHByaW9yaXR5SGVhZGVyLCBlZGl0RGVhZGxpbmVCdXR0b24sIHN3aXRjaFByaW9yaXR5QnV0dG9uLCBkZWFkbGluZSk7XG5cbiAgICAgICAgICAgIHByaW9yaXR5LnZhbHVlID0gdGFzay5wcmlvcml0eTtcbiAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGlvbiBvZiBnb2FsIGVsZW1lbnRcbiAgICAgICAgY29uc3QgZ29hbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdvYWwgPSBlbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogXCJ0YXNrLWdvYWwtaGVhZGVyXCIsIFwiaWRcIjogYCR7dGFzay50aXRsZX0tZ29hbGB9KTtcbiAgICAgICAgICAgIGNvbnN0IGdvYWxIZWFkZXIgPSBlbGVtZW50KCdoMycsIHsnY2xhc3MnOiAnZ29hbC10aXRsZSd9KVxuICAgICAgICAgICAgY29uc3QgZ29hbENvbnRlbnQgPSBlbGVtZW50KCdwJywgeydjbGFzcyc6ICd0YXNrLWdvYWwnfSk7XG4gICAgICAgICAgICBnb2FsQ29udGVudC50ZXh0Q29udGVudCA9IHRhc2suZ2V0R29hbCgpO1xuICAgICAgICAgICAgZ29hbEhlYWRlci50ZXh0Q29udGVudCA9IFwiR29hbFwiXG4gICAgICAgICAgICBnb2FsLmFwcGVuZENoaWxkKGdvYWxIZWFkZXIpXG4gICAgICAgICAgICBnb2FsLmFwcGVuZENoaWxkKGdvYWxDb250ZW50KVxuICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBnb2FsO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNob3cgZGF0ZSBvZiBjb21wbGV0ZWQgdGFzayB3aGVuIGNoZWNrZWRcbiAgICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAndGFzay1kZWFkbGluZS1jb21wbGV0ZScsICdpZCc6ICd0YXNrLWRlYWRsaW5lLWNvbXBsZXRlJ30pO1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gZWxlbWVudCgnaDQnLCB7J2NsYXNzJzogJ3Rhc2stY29tcGxldGUtaGVhZGVyJ30pO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFzay5nZXRDb21wbGV0aW9uRGF0ZSgpKTtcbiAgICAgICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGBUYXNrIGNvbXBsZXRlZCAke2Zvcm1hdCh0YXNrLmdldENvbXBsZXRpb25EYXRlKCksICdNTS5kZC55eXl5Jyl9YFxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7IFxuICAgICAgICB9XG4gICAgIFxuXG4gICAgICAgIC8vIENyZWF0aW9uIG9mIGJ1dHRvbiBiYXJcbiAgICAgICAgY29uc3QgYnV0dG9uQmFyID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBidXR0b25zID0gZWxlbWVudChcImRpdlwiLCB7J2NsYXNzJzogJ2J1dHRvbi1iYXInLCAnaWQnOiAndGFzay1idXR0b25zJ30pO1xuXG4gICAgICAgICAgICAvLyBEZWxldGUgYnV0dG9uIGN1cnJlbnRseSBoaWRkZW4gdW50aWwgdGFzayBpbiBlZGl0IG1vZGVcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2ltYWdlJywgJ3NyYyc6IGRlbGV0ZVRhc2tJY29uLCAnYWx0JzogJ0RlbGV0ZSB0YXNrJywgJ2NsYXNzJzogJ3Rhc2stYnV0dG9uIGRlbGV0ZS10YXNrIGhpZGRlbicsICdpZCc6ICdkZWxldGUtdGFzaycsICd2YWx1ZSc6ICdEZWxldGUnfSlcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlUG9wdXAoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBjbG9zZVRhc2tJY29uLCdhbHQnOiAnQ2xvc2UgVGFzaycsICdjbGFzcyc6ICd0YXNrLWJ1dHRvbiBjbG9zZS10YXNrJ30pO1xuICAgICAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY2xvc2VUYXNrKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSkpO1xuICAgICAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7ICAgICAgICAgICAgICAgIFxuICAgICAgICBcblxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVBvcHVwID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3b3Jrc3BhY2VcIik7ICAgIFxuICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdibG9ja3NjcmVlbicpO1xuXG4gICAgICAgICAgICBjb25zdCBwb3B1cCA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAndGFzay1VSSBwb3B1cCcsICdpZCc6ICdkZWxldGUtdGFzay1zY3JlZW4nfSk7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVsZW1lbnQoJ2gzJywgeydjbGFzcyc6ICdwb3B1cC1pdGVtIHBvcHVwLXRpdGxlIGRlbGV0ZS1wb3B1cCcsICdpZCc6ICdkZWxldGUtdGFzay10aXRsZSd9KTtcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYENvbmZpcm0gcmVtb3ZlICcke3Rhc2suZ2V0VGl0bGUoKX0nIGZyb20gcHJvamVjdD9gO1xuICAgICAgICAgICAgY29uc3QgY29uZmlybSA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2ltYWdlJywgJ3NyYyc6IGNvbmZpcm1JY29uLCAnYWx0JzogJ2NvbmZpcm0gZGVsZXRlJywgJ2NsYXNzJzogJ3Rhc2stYnV0dG9uIHBvcHVwLWl0ZW0gcG9wdXAtY29uZmlybScsICdpZCc6ICdkZWxldGUtdGFzay1jb25maXJtJywgJ2Rpc3BsYXknOiAnbm9uZSd9KVxuICAgICAgICAgICAgICAgIGNvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGVUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZVRhc2sobmV3VGFzayk7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlUG9wdXAoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3QgY2FuY2VsID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCdzcmMnOiBjbG9zZVRhc2tJY29uLCAnYWx0JzogJ2NhbmNlbCBkZWxldGUnLCAnY2xhc3MnOiAndGFzay1idXR0b24gcG9wdXAtaXRlbSBwb3B1cC1jYW5jZWwnLCAnaWQnOiAnZGVsZXRlLXRhc2stY2FuY2VsJyB9KTtcbiAgICAgICAgICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlUG9wdXAoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgY2xvc2VQb3B1cCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2Nrc2NyZWVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIGFwcGVuZENoaWxkcmVuKHBvcHVwLCB0aXRsZSwgY29uZmlybSwgY2FuY2VsKTtcbiAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHBvcHVwKTtcblxuICAgICAgICBcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZCh0aXRsZSgpKTtcbiAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbigpKTtcbiAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZChwcmlvcml0eSgpKTtcbiAgICAgICAgLy9uZXdUYXNrLmFwcGVuZENoaWxkKGdvYWwoKSk7XG4gICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoYnV0dG9uQmFyKCkpO1xuICAgICAgICBpZiAodGFzay5nZXRTdGF0dXMoKSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrLmdldENvbXBsZXRpb25EYXRlKCkpXG4gICAgICAgICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKGNvbXBsZXRlKCkpOyBcbiAgICAgICAgfSBcblxuICAgICAgICByZXR1cm4gbmV3VGFzaztcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza1BvcHVwKCkpO1xufVxuY29uc3QgdG9nZ2xlVGFza1N0YXR1cyA9ICh0YXNrKSA9PiB7XG5cbiAgICBpZiAodGFzayA9PSBudWxsKSByZXR1cm47XG5cbiAgICBpZiAodGFzay5nZXRTdGF0dXMoKSA9PT0gZmFsc2Upe1xuICAgICAgICB0YXNrLnNldFN0YXR1cyh0cnVlKTtcbiAgICAgICAgdGFzay5zZXRDb21wbGV0aW9uRGF0ZShuZXcgRGF0ZSgpKTtcbiAgICAgICAgY29uc29sZS5sb2codG9kYXkpXG4gICAgICAgIHRhc2suZ2V0UGFyZW50KCkudGFza3MuY29tcGxldGVUYXNrKHRhc2spO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICB0YXNrLnNldFN0YXR1cyhmYWxzZSlcbiAgICAgICAgdGFzay5zZXRDb21wbGV0aW9uRGF0ZShudWxsKTtcbiAgICAgICAgdGFzay5nZXRQYXJlbnQoKS50YXNrcy5yZW1vdmVDb21wbGV0ZSh0YXNrKTtcbiAgICB9XG4gIFxuXG4gICAgcmVuZGVyVGFza0xpc3QodGFzay5nZXRQYXJlbnQoKSk7XG5cbn1cblxuY29uc3QgY3ljbGVQcmlvcml0eSA9ICh0YXNrKSA9PiB7XG5cbiAgICBjb25zdCBjdXJQcmlvcml0eSA9IHRhc2suZ2V0UHJpb3JpdHkoKTtcblxuICAgIC8vIFByaW9yaXR5IGlzIDEtMywgY3ljbGUgdG8gbmV4dCBwcmlvcml0eSBsZXZlbFxuICAgIGNoYW5nZVByaW9yaXR5KHRhc2ssICgoKGN1clByaW9yaXR5KSAlIDMpICsgMSkpO1xuXG5cbn1cblxuLy8gVGFzayBPYmplY3QsIFByaW9yaXR5IEludGVnZXJcbmNvbnN0IGNoYW5nZVByaW9yaXR5ID0gKHRhc2ssIHByaW9yaXR5KSA9PiB7XG5cbiAgICB0YXNrLnNldFByaW9yaXR5KHByaW9yaXR5KTtcbiAgICBjb25zb2xlLmxvZyhcIj5cIiArIHRhc2suZ2V0UHJpb3JpdHkoKSk7XG4gICAgXG4gICAgY2xvc2VQcm9qZWN0KCk7XG4gICAgcmVuZGVyUHJvamVjdCh0YXNrLmdldFBhcmVudCgpKTtcbiAgICByZW5kZXJUYXNrKHRhc2spO1xuXG59XG5cblxuXG5jb25zdCBjbG9zZVRhc2sgPSAoRE9NKSA9PiB7XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2NrcHJvamVjdCcpO1xuXG4gICAgaWYgKERPTSAhPSBudWxsKXtcbiAgICAgICAgRE9NLnJlbW92ZSgpO1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrJyk7XG4gICAgdGFzay5yZW1vdmUoKTtcblxuXG5cbn1cblxuXG5jb25zdCBjcmVhdGVUYXNrID0gKGNvbnRhaW5lciwgcHJvamVjdCkgPT4ge1xuXG4gICAgY29uc3QgdGFzayA9IFRhc2soKTtcbiAgICB0YXNrLnNldFBhcmVudChwcm9qZWN0KTtcbiAgICBcbiAgIFxuICAgIC8vY29uc3QgdGFza0xpc3QgPSAoY29udGFpbmVyKVxuICAgIC8vdGFza0xpc3QuaW5zZXJ0QmVmb3JlKGNyZWF0ZU1pbmlUYXNrKHByb2plY3QsIHRhc2spLCB0YXNrTGlzdC5sYXN0RWxlbWVudENoaWxkKTtcbiAgIFxuICAgIC8vIEFkZCB0byBvYmplY3RcbiAgICBwcm9qZWN0LnRhc2tzLmFkZFRhc2sodGFzayk7XG4gICAgdGFzay5nZXRJRCgpO1xuXG59XG5cblxuY29uc3QgZWRpdFRhc2sgPSAodGFzaykgPT4ge1xuICAgIFxuICAgIC8vY29uc3QgcHJvamVjdCA9IHRhc2suZ2V0UGFyZW50KCk7XG4gICAgY29uc3QgdGVtcFRhc2sgPSBUYXNrKCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGVtcFRhc2s7XG5cbiAgICAvLyBBbHRlciBVSSBlbGVtZW50c1xuICAgIGNvbnN0IGNvbXBsZXRpb25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1jb21wbGV0ZS1idXR0b24nKTtcbiAgICBjb21wbGV0aW9uQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGUtdGFzaycpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1lZGl0LWJ1dHRvbicpO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cbiAgICAvLyBQcmVwYXJlIHRvIHJlcGxhY2Ugd2l0aCBlZGl0IGJveGVzIGFuZCBjcmVhdGUgc2F2ZSBidXR0b25cbiAgICBjb25zdCBidXR0b25CYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZS1iYXInKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJyk7XG4gICBcbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogc2F2ZVRhc2tJY29uLCAnY2xhc3MnOiAndGFzay1lZGl0LWJ1dHRvbiB0YXNrLWJ1dHRvbicsICdpZCc6ICd0YXNrLWVkaXQtYnV0dG9uJywgJ3ZhbHVlJzogJ1NhdmUnfSlcblxuICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgY29udGVudC5zZXRUaXRsZShuZXdUaXRsZS52YWx1ZSk7XG4gICAgICAgIGNvbnRlbnQuc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24udmFsdWUpO1xuICAgICAgICAvL2NvbnRlbnQuc2V0R29hbChuZXdHb2FsLnZhbHVlKTtcbiAgICAgICAgc2F2ZUJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICAgICAgICBzYXZlVG9UYXNrKCk7XG4gICAgfSlcblxuICAgIC8vIEZpbmFsaXplIHNhdmluZyBkYXRhIHRvIHRhc2sgZnJvbSB0ZW1wb3JhcnkgY29udGFpbmVyXG4gICAgY29uc3Qgc2F2ZVRvVGFzayA9ICgpID0+IHtcblxuICAgICAgICB0YXNrLnNldFRpdGxlKGNvbnRlbnQuZ2V0VGl0bGUoKSk7XG4gICAgICAgIHRhc2suc2V0RGVzY3JpcHRpb24oY29udGVudC5nZXREZXNjcmlwdGlvbigpKTtcbiAgICAgICAgdGFzay5zZXRHb2FsKGNvbnRlbnQuZ2V0R29hbCgpKTtcbiAgIFxuICAgICAgICBjbG9zZVRhc2soYnV0dG9uQmFyLnBhcmVudE5vZGUpO1xuICAgICAgICBjbG9zZVByb2plY3QoKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdCh0YXNrLmdldFBhcmVudCgpKTtcbiAgICAgICAgcmVuZGVyVGFzayh0YXNrKTtcblxuICAgIH1cblxuICAgIFxuICAgIGJ1dHRvbkJhci5pbnNlcnRCZWZvcmUoc2F2ZUJ1dHRvbiwgdGl0bGUpO1xuXG4gICAgLy8gUmVmcmVzaCBVSSB3aXRoIG5ldyBkYXRhXG4gICAgY29uc3QgbmV3VGl0bGUgPSBlZGl0VGl0bGUoJ3Rhc2snKTtcbiAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IGVkaXREZXNjcmlwdGlvbigndGFzaycpO1xuXG5cbn1cblxuXG5jb25zdCBwcmlvcml0eVN0eWxlID0gKHRhc2spID0+IHtcblxuICAgIGxldCBwcmlvcml0eVZhbHVlO1xuICAgIGxldCBwcmlvcml0eVRleHQ7XG4gICAgICAgIFxuICAgIHN3aXRjaCAodGFzay5nZXRQcmlvcml0eSgpKXtcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBwcmlvcml0eVZhbHVlID0gJ2xvd3ByaW9yaXR5JztcbiAgICAgICAgICAgIHByaW9yaXR5VGV4dCA9ICdMb3cnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHByaW9yaXR5VmFsdWUgPSAnbWVkcHJpb3JpdHknO1xuICAgICAgICAgICAgcHJpb3JpdHlUZXh0ID0gJ01lZCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcHJpb3JpdHlWYWx1ZSA9ICdoaWdocHJpb3JpdHknO1xuICAgICAgICAgICAgcHJpb3JpdHlUZXh0ID0gJ0hpZ2gnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBUaGF0IHByaW9yaXR5IGxldmVsIGlzIG5vdCBpbXBsZW1lbnRlZDogJHt0YXNrLmdldFByaW9yaXR5KCl9YCk7XG4gICAgICAgICAgICBicmVhazsgICAgXG4gICAgfVxuICAgIHJldHVybiB7cHJpb3JpdHlWYWx1ZSwgcHJpb3JpdHlUZXh0fVxuXG59XG5jb25zdCBvcGVuRGVhZGxpbmVGb3JtID0gKHRhc2spID0+IHtcblxuICAgIFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnZm9ybS1jb250YWluZXInLCAnaWQnOiAnZGVhZGxpbmUtZm9ybS1jb250YWluZXInfSk7XG4gIFxuXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVhZGxpbmVGb3JtKHRhc2spKTtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIFxuXG59XG5cblxuY29uc3QgdXBkYXRlRGVhZGxpbmUgPSAodGFzaywgZm9ybSkgPT4ge1xuXG4gICAgY29uc3QgREVGQVVMVFRJTUUgPSBcIjAwOjAwOjAxXCJcblxuICAgIGNvbnN0IGRlYWRsaW5lRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICBjb25zb2xlLmxvZyAoZGVhZGxpbmVEYXRhKVxuICAgIGxldCBuZXdEYXkgPSBkZWFkbGluZURhdGEuZ2V0KCdkYXRlJyk7XG4gICAgbGV0IG5ld1RpbWUgPSBkZWFkbGluZURhdGEuZ2V0KCd0aW1lJyk7XG4gICBcbiAgIFxuICAgIGlmIChuZXdUaW1lID09IFwiXCIpe1xuICAgICAgICBjb25zb2xlLmxvZygnbm8gdGltZSBzZXQsIHNldHRpbmcgdG8gbWlkbmlnaHQnKVxuICAgICAgICBuZXdUaW1lID0gREVGQVVMVFRJTUU7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2cobmV3VGltZSlcbiAgICBjb25zdCBuZXdSZXBlYXQgPSBkZWFkbGluZURhdGEuZ2V0KCdyZXBlYXQnKTtcbiAgIFxuXG4gICAgLy8gZm9ybWF0IElTTyBhbmQgY3JlYXRlIG5ldyBkZWFkbGluZVxuICAgIGNvbnN0IG5ld0RlYWRsaW5lID0gbmV3IERhdGUobmV3RGF5ICsgJ1QnICsgbmV3VGltZSlcbiAgICBjb25zb2xlLmxvZyhuZXdEZWFkbGluZSk7XG4gICAgdGFzay5zZXREZWFkbGluZShuZXdEZWFkbGluZSk7XG4gICAgY29uc29sZS5sb2coZm9ybWF0KHRhc2suZ2V0RGVhZGxpbmUoKSwgXCJ5eXl5LU1NLWRkXCIpKTtcbiAgICByZW5kZXJUYXNrKHRhc2spO1xuXG5cbn1cblxuY29uc3QgZGVhZGxpbmVGb3JtID0gKHRhc2spID0+IHtcblxuICAgIGNvbnN0IEZPUk1fSEVBREVSID0gXCJTZWxlY3QgRGVhZGxpbmVcIlxuICAgIGNvbnN0IERBVEVfVE9PTFRJUCA9IFwiU2VsZWN0IGFueSBmdXR1cmUgZGF0ZVwiXG5cbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZWxlbWVudCgnZGl2Jywge1wiaWRcIjogXCJmb3JtLWNvbnRhaW5lclwifSk7XG4gICAgY29uc3QgZm9ybSA9IGVsZW1lbnQoJ2Zvcm0nLCB7XCJpZFwiOiBcImRlYWRsaW5lLWZvcm1cIn0pO1xuXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZWxlbWVudCgnbGFiZWwnLCB7XCJmb3JcIjogXCJkYXRlXCIsIFwiY2xhc3NcIjogXCJmb3JtLWxhYmVsXCIsIFwiaWRcIjogXCJkYXRlLWxhYmVsXCJ9KTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGVcIjtcblxuICAgIFxuICAgIGNvbnN0IGRhdGUgPSBlbGVtZW50KFwiaW5wdXRcIiwge1widHlwZVwiOiBcImRhdGVcIiwgXCJjbGFzc1wiOiBcImZvcm0taW5wdXRcIiwgXCJuYW1lXCI6IFwiZGF0ZVwiLCBcImlkXCI6IFwiZm9ybV9kYXRlXCIsIFwibWluXCI6IHRvZGF5LCAndmFsdWUnOiBmb3JtYXQodGFzay5nZXREZWFkbGluZSgpLCBcInl5eXktTU0tZGRcIiksIFwicmVxdWlyZWRcIjogXCJcIn0pO1xuICAgIGRhdGVMYWJlbC5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgIGNvbnN0IHRpbWVMYWJlbCA9IGVsZW1lbnQoJ2xhYmVsJywge1wiZm9yXCI6IFwidGltZVwiLCBcImNsYXNzXCI6IFwiZm9ybS1sYWJlbFwiLCBcImlkXCI6IFwidGltZS1sYWJlbFwifSk7XG4gICAgdGltZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaW1lXCI7XG4gICAgY29uc3QgdGltZSA9IGVsZW1lbnQoJ2lucHV0Jywge1widHlwZVwiOiBcInRpbWVcIiwgXCJjbGFzc1wiOiBcImZvcm0taW5wdXRcIiwgXCJuYW1lXCI6IFwidGltZVwiLCBcImlkXCI6IFwiZm9ybV90aW1lXCIsICd2YWx1ZSc6IGZvcm1hdCh0YXNrLmdldERlYWRsaW5lKCksIFwiSEg6bW06U1NcIikgfSk7XG4gICAgdGltZUxhYmVsLmFwcGVuZENoaWxkKHRpbWUpO1xuXG4gICAgY29uc3QgYnV0dG9uQmFyID0gZWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdidXR0b24tYmFyIGZvcm0tYnV0dG9ucycsICdpZCc6ICdmb3JtLWJ1dHRvbnMnfSlcbiAgICAgICAgY29uc3Qgc3VibWl0RGVhZGxpbmUgPSBlbGVtZW50KCdpbnB1dCcsIHsndHlwZSc6ICdpbWFnZScsICdzcmMnOiBzYXZlVGFza0ljb24sICdhbHQnOiAnY29uZmlybSBkZWFkbGluZScsICdjbGFzcyc6ICdmb3JtLWJ1dHRvbiB0YXNrLWJ1dHRvbicsICdpZCc6ICdzdWJtaXQtZGVhZGxpbmUtYnV0dG9uJ30pXG4gIFxuICAgICAgICBjb25zdCBjbG9zZSA9IGVsZW1lbnQoJ2lucHV0Jywgeyd0eXBlJzogJ2ltYWdlJywgJ3NyYyc6IGNsb3NlVGFza0ljb24sICdhbHQnOiAnY2xvc2Ugd2l0aG91dCBjaGFuZ2VzJywgJ2NsYXNzJzogJ2Zvcm0tYnV0dG9uIHRhc2stYnV0dG9uJywgJ2lkJzogJ2Nsb3NlLWRlYWRsaW5lLWJ1dHRvbid9KVxuICAgICAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlYWRsaW5lLWZvcm0tY29udGFpbmVyXCIpXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGZvcm1Db250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KVxuICAgIGFwcGVuZENoaWxkcmVuKGJ1dHRvbkJhciwgc3VibWl0RGVhZGxpbmUsIGNsb3NlKVxuICAgIFxuICAgIGNvbnN0IHJlcGVhdE9wdGlvbnMgPSAoKSA9PiB7XG4gICAgICAgXG4gICAgICAgIGNvbnN0IGNob29zZVJlcGVhdCA9IGVsZW1lbnQoJ2ZpZWxkc2V0JywgeydjbGFzcyc6ICdmaWVsZHNldCcsICdpZCc6ICd0YXNrLWRlYWRsaW5lLWZpZWxkc2V0J30pXG4gICAgICAgIGNvbnN0IGxlZ2VuZCA9IGVsZW1lbnQoJ2xlZ2VuZCcse1widmFsdWVcIjogJ3JlcGVhdD8nfSlcbiAgICAgICAgbGVnZW5kLnRleHRDb250ZW50ID0gXCJSZXBlYXQgZXZlcnkuLi5cIlxuICAgICAgICAgIFxuICAgICAgICBjb25zdCBub25lID0gbWFrZVJhZGlvKCdyZXBlYXQnLCAnd2Vla2x5JywgYERvbid0IHJlcGVhdGAsIHRydWUpO1xuICAgICAgICBjb25zdCBkYWlseSA9IG1ha2VSYWRpbyAoJ3JlcGVhdCcsICd3ZWVrbHknLCAnT25jZSBwZXIgZGF5Jyk7XG4gICAgICAgIGNvbnN0IHdlZWtseSA9ICBtYWtlUmFkaW8oJ3JlcGVhdCcsICd3ZWVrbHknLCAnRXZlcnkgd2VlaycpO1xuICAgICAgICBjb25zdCBtb250aGx5ID0gbWFrZVJhZGlvKCdyZXBlYXQnLCAnbW9udGhseScsICdPbmNlIGEgbW9udGgnKTtcblxuICAgICAgICBhcHBlbmRDaGlsZHJlbihjaG9vc2VSZXBlYXQsIGxlZ2VuZCwgbm9uZSwgZGFpbHksIHdlZWtseSwgbW9udGhseSk7XG5cblxuICAgICAgICByZXR1cm4gY2hvb3NlUmVwZWF0XG4gICAgfVxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChyZXBlYXRPcHRpb25zKCkpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uQmFyKTtcbiAgIFxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB1cGRhdGVEZWFkbGluZSh0YXNrLCBmb3JtKVxuICAgICAgICBmb3JtQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIGNvbnN0IGZvcm1IZWFkZXIgPSBlbGVtZW50KFwiaDJcIiwgeydjbGFzcyc6J2Zvcm0taGVhZGVyIGRlYWRsaW5lLWZvcm0nfSk7XG4gICAgZm9ybUhlYWRlci50ZXh0Q29udGVudCA9IEZPUk1fSEVBREVSO1xuXG4gICBcbmFwcGVuZENoaWxkcmVuKGZvcm0sIGRhdGVMYWJlbCwgdGltZUxhYmVsLCBmb3JtSGVhZGVyKTtcbmZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5yZXR1cm4gZm9ybUNvbnRhaW5lcjtcblxufTtcblxuXG5cblxuZXhwb3J0IHtlZGl0VGFzaywgY3JlYXRlVGFzaywgY2xvc2VUYXNrLCByZW5kZXJUYXNrLCBwcmlvcml0eVN0eWxlLCB0b2dnbGVUYXNrU3RhdHVzfSIsIi8vICBUbyBkbyBvYmplY3QsIGNyZWF0aW9uIGFuZCBtb2RpZmljYXRpb25cblxuLy8gSGVscGVyIGZ1bmN0aW9ucyBsb2NhdGVkIGluIHV0aWxzIGZpbGVcbmltcG9ydCB7IGlzVGhpc1NlY29uZCwgaXNFcXVhbCwgZm9ybWF0RGlzdGFuY2UsIGZvcm1hdElTTywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgc2V0QXR0cmlidXRlcywgY3JlYXRlRWxlbWVudCBhcyBlbGVtZW50IH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgdGFzayBmcm9tIFwiLi9kZWZhdWx0LXRhc2suanNvblwiO1xuLy9pbXBvcnQgdGFzayBmcm9tIFwiLi9leGFtcGxlLXRhc2suanNvblwiO1xuLy8gQ29uc3RhbnRzXG5cbi8vIEZhY3RvcnkgdG8gY3JlYXRlIGEgVG9EbyBvYmplY3RcbmNvbnN0IGNyZWF0ZVRvRG8gPSAodGl0bGUgPSB0YXNrLnRpdGxlLCBkZWFkbGluZSA9IHRhc2suZGVhZGxpbmUsIHByaW9yaXR5ID0gdGFzay5wcmlvcml0eSwgZGVzY3JpcHRpb24gPSB0YXNrLmRlc2NyaXB0aW9uLCBnb2FsID0gdGFzay5nb2FsLCB0YXNrSUQgPSB0YXNrLnRhc2tJRCwgY29tcGxldGVkID0gdGFzay5jb21wbGV0ZWQsIGNvbXBsZXRpb25EYXRlID0gdGFzay5jb21wbGV0aW9uRGF0ZSkgPT4ge1xuXG4gICAgZGVhZGxpbmUgPSBuZXcgRGF0ZShkZWFkbGluZSk7XG4gICAgXG4gICAgLy8gUHJvamVjdCBvYmplY3QgdGhhdCBvd25zIHRoaXMgdGFza1xuICAgIGxldCBwYXJlbnQgPSBudWxsO1xuICBcbiAgICAvLyBUaW1lL0RhdGUgYmFzZWQgYXR0cmlidXRlc1xuICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKERhdGUubm93KCkpXG4gICAgY29uc3QgdGltZVJlbWFpbmluZyA9IGRlYWRsaW5lIC0gRGF0ZS5ub3coKTtcblxuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuXG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvblxuICAgIH1cbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3Qgc2V0RGVhZGxpbmUgPSAobmV3RGVhZGxpbmUpID0+IGRlYWRsaW5lID0gbmV3RGVhZGxpbmU7XG4gICAgY29uc3QgZ2V0RGVhZGxpbmUgPSAoKSA9PiBkZWFkbGluZTtcblxuICAgIGNvbnN0IHNldENvbXBsZXRpb25EYXRlID0gKG5ld0NvbXBsZXRpb25EYXRlKSA9PiBjb21wbGV0aW9uRGF0ZSA9IG5ld0NvbXBsZXRpb25EYXRlO1xuICAgIGNvbnN0IGdldENvbXBsZXRpb25EYXRlID0gKCkgPT4gY29tcGxldGlvbkRhdGU7XG4gICAgXG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IHtcbiAgICAgICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB9XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcbiBcbiAgICBjb25zdCBzZXRHb2FsID0gKG5ld0dvYWwpID0+IGdvYWwgPSBuZXdHb2FsO1xuICAgIGNvbnN0IGdldEdvYWwgPSAoKSA9PiBnb2FsO1xuIFxuICAgIGNvbnN0IHNldFBhcmVudCA9IChuZXdQYXJlbnQpID0+IHBhcmVudCA9IG5ld1BhcmVudDtcbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoKSA9PiBwYXJlbnQ7XG5cbiAgICBjb25zdCBzZXRJRCA9IChuZXdJRCkgPT4gdGFza0lEID0gbmV3SUQ7XG4gICAgY29uc3QgZ2V0SUQgPSAoKSA9PiB0YXNrSUQ7XG5cblxuICAgIGNvbnN0IHNldFN0YXR1cyA9IChuZXdTdGF0dXMpID0+IGNvbXBsZXRlZCA9IG5ld1N0YXR1cztcbiAgICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiBjb21wbGV0ZWQ7XG5cbiAgICBjb25zdCBnZXRDb250ZW50ID0gKCkgPT4ge1xuXG4gICAgICAgIHJldHVybiB7dGl0bGUsIGRlYWRsaW5lLCBwcmlvcml0eSwgZGVzY3JpcHRpb259O1xuICAgIH1cblxuXG4gICAgcmV0dXJuICh7Z2V0Q29tcGxldGlvbkRhdGUsIHNldENvbXBsZXRpb25EYXRlLCBzZXRTdGF0dXMsIGdldFN0YXR1cywgZ2V0SUQsIHNldElELCBzZXRQYXJlbnQsIGdldFBhcmVudCwgc2V0R29hbCwgZ2V0R29hbCwgc2V0RGVhZGxpbmUsIGdldERlYWRsaW5lLCBnZXRQcmlvcml0eSwgc2V0UHJpb3JpdHksIHRpdGxlLCBkZWFkbGluZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgIGNvbnRlbnQsIHN0YXJ0RGF0ZSwgdGltZVJlbWFpbmluZyxzZXREZXNjcmlwdGlvbiwgZ2V0RGVzY3JpcHRpb24sIHNldFRpdGxlLCBnZXRUaXRsZSwgZ2V0Q29udGVudCx9KTtcblxufVxuXG5cbi8vIExvd2VyIHVyZ2VuY3kgaXMgY29uc2lkZXJlZCBtb3JlIHVyZ2VudC4gQ2xvc2VzdCB0byB6ZXJvIGlzIG1vc3QgdXJnZW50LlxuY29uc3QgZ2V0VGFza1VyZ2VuY3kgPSAodG9Eb09iamVjdCkgPT4ge1xuICAgICAgICBcbiAgICAvLyBHZXQgZGF5cyBvbmxcbiAgICBjb25zdCB1cmdlbmN5ID0gZm9ybWF0KHRvRG9PYmplY3QudGltZVJlbWFpbmluZywgXCJkZFwiKTtcbiAgICBjb25zb2xlLmxvZyh1cmdlbmN5ICogdG9Eb09iamVjdC5wcmlvcml0eSk7XG5cbiAgICByZXR1cm4gdXJnZW5jeTtcbn1cblxuXG5cblxuXG5cblxuXG5leHBvcnQge2NyZWF0ZVRvRG8gYXMgVGFzaywgZ2V0VGFza1VyZ2VuY3kgYXMgZ2V0VXJnZW5jeX07XG5cblxuXG4iLCJcbmltcG9ydCBkZWZhdWx0SWNvbiBmcm9tICcuL2ltZy9jbG9zZS10YXNrLnN2Zyc7XG5cbi8vIEhlbHBlciBmdW5jdGlvbnNcblxuLy8gY3JlYXRlIGVsZW1lbnQgb2Ygc3BlY2lmaWMgdHlwZSwgd2l0aCBhdHRyaWJ1dGVzIGF0dGFjaGVkXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKHR5cGUsIGF0dHJpYnV0ZXMpID0+IHtcbiAgICBcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApO1xuICAgIGlmIChhdHRyaWJ1dGVzID09IG51bGwpIHJldHVybiBuZXdFbGVtZW50O1xuICAgIHNldEF0dHJpYnV0ZXMobmV3RWxlbWVudCwgYXR0cmlidXRlcyk7XG4gICAgXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbi8vIGZvciBhcHBlbmRpbmcgbXVsdGlwbGUgY2hpbGRyZW4gaW4gb25lIGNhbGxcbmNvbnN0IGFwcGVuZENoaWxkcmVuID0gKHBhcmVudCwgLi4uY2hpbGRyZW4pID0+IHtcblxuICAgIFxuICAgIGNvbnNvbGUubG9nKHBhcmVudCk7XG4gICAgY29uc29sZS5sb2coY2hpbGRyZW4pXG5cbiAgICBjb25zdCBjaGlsZENvdW50ID0gY2hpbGRyZW4ubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pe1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2cocGFyZW50KTtcbiAgIC8vIHJldHVybiBjaGlsZENvdW50O1xufVxuXG5cblxuY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHtcblxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGRkID0gdG9kYXkuZ2V0RGF0ZSgpO1xuICAgIGxldCBtbSA9IHRvZGF5LmdldE1vbnRoKCkgKyAxOyAvLyBJbmRleCBhdCB6ZXJvXG4gICAgY29uc3QgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgICBpZiAoZGQgPCAxMCl7XG4gICAgICAgIGRkID0gJzAnICsgZGQ7XG4gICAgfVxuICAgIGlmIChtbSA8IDEwKXtcbiAgICAgICAgbW0gPSAnMCcgKyBtbTtcbiAgICB9XG5cbiAgICB0b2RheSA9IGAke3l5eXl9LSR7bW19LSR7ZGR9YDtcblxuICAgIHJldHVybiB0b2RheTtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKVxue1xuICAgIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKVxuICAgIH0pO1xufVxuXG4vLyB0dXJuIGludG8gb2JqZWN0XG5mdW5jdGlvbiBjcmVhdGVJbWFnZUxpbmsodXJsLCBpbWFnZSwgYWx0KXtcblxuICAgIFxuICAgIGNvbnN0IGFocmVmID0gY3JlYXRlRWxlbWVudChcImFcIiwge1wiY2xhc3NcIjogXCJsaW5rXCIsIFwiaHJlZlwiOiB1cmx9KTtcbiAgICBjb25zdCBsaW5rSW1hZ2UgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcImNsYXNzXCI6IFwiaW1hZ2UtbGlua1wiLCBcInNyY1wiOiBpbWFnZSwgXCJhbHRcIjogYWx0fSk7XG5cbiAgICBhaHJlZi5hcHBlbmRDaGlsZChsaW5rSW1hZ2UpO1xuXG4gICAgcmV0dXJuIGFocmVmO1xuICAgIFxuXG59XG5cbi8vIE1ha2UgYSBnZW5lcmljIGRpc3BsYXkgZWxlbWVudCwgd2l0aCBhIGNvbnRhaW5lciwgdGl0bGUsIGFuZCBjb250ZW50IHNlY3Rpb25cbi8vIElEIGFuZCBjbGFzcyB3aWxsIGJlIGdlbmVyYXRlZCBmcm9tIG5hbWUgKHN0cmluZylcbi8vIFtDb250YWluZXJdLS0+ICBbVGl0bGVDb250YWluZXItLT5UaXRsZStCdXR0b25dICsgQ29udGVudFxuY29uc3QgbWFrZUNvbnRhaW5lciA9IChuYW1lLCBpbnB1dEltYWdlKSA9PiB7XG5cbiBcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiBgJHtuYW1lLnRvTG93ZXJDYXNlKCl9LWNvbnRhaW5lcmB9KVxuICAgIC8vIFRpdGxlIGFuZCBCdXR0b25cbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiBcInRpdGxlLWNvbnRhaW5lclwiLCAnaWQnOiBgJHtuYW1lLnRvTG93ZXJDYXNlKCl9LXRpdGxlLWNvbnRhaW5lcmB9KTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2g0JywgeydjbGFzcyc6IGAke25hbWUudG9Mb3dlckNhc2UoKX0taGVhZGVyYH0pO1xuICAgIGNvbnN0IHRpdGxlQnV0dG9uID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAnaW1hZ2UnLCAnc3JjJzogaW5wdXRJbWFnZSwgICdpZCc6IGAke25hbWUudG9Mb3dlckNhc2UoKX0tYnV0dG9uYCwgJ2NsYXNzJzogJ2NvbnRhaW5lci1idXR0b24gZXhwYW5kLWNvbnRlbnQtYnRuJywgfSwgKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVCdXR0b24pO1xuXG5cbiAgICBjb25zdCBjb250ZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICBgJHtuYW1lLnRvTG93ZXJDYXNlKCl9LWNvbnRlbnRgfSk7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBtYWtlTWVudSA9IChtZW51TmFtZSwgdG9vbHRpcFRleHQpID0+IHtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnbWVudS1jb250YWluZXInfSk7XG4gICBcbiAgICBjb25zdCB0b29sdGlwQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICd0b29sdGlwJ30pO1xuICAgIGNvbnN0IHRvb2x0aXAgPSBjcmVhdGVFbGVtZW50KCdwJywgeydjbGFzcyc6ICd0b29sdGlwdGV4dCcsICdpZCc6IGAke21lbnVOYW1lfS10ZXh0YH0pO1xuICAgIHRvb2x0aXAudGV4dENvbnRlbnQgPSB0b29sdGlwVGV4dDtcbiAgICBcbiAgICB0b29sdGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvb2x0aXApO1xuXG4gICAgY29uc3QgbWVudSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnY29udGV4dC1tZW51JywgJ2lkJzogYCR7bWVudU5hbWV9LW1lbnVgfSlcbiAgICBjb25zdCBtZW51SXRlbXMgPSBjcmVhdGVFbGVtZW50KCd1bCcsIHsnY2xhc3MnOiAnbWVudS1pdGVtcyBtZW51LWxpc3QnfSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51SXRlbXMpO1xuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b29sdGlwQ29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSk7XG5cblxuICAgIHJldHVybiBjb250YWluZXI7XG5cbn1cblxuLy8gcmV0dXJuIGEgcmFkaW8gb2JqZWN0IHRvIGJlIGF0dGFjaGVkIHRvIGEgZmllbGRzZXRcbmNvbnN0ICBtYWtlUmFkaW8gPSAobmFtZSwgc2VsZWN0aW9uLCBsYWJlbFRleHQsIGNoZWNrZWQpID0+IHtcblxuICAgXG5cbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ3JhZGlvLWNvbnRhaW5lciBmb3JtLWVsZW1lbnQnLCAnaWQnOiBgJHtuYW1lfS1sYWJlbC1jb250YWluZXJgfSk7ICAgICAgICAgXG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsnZm9yJzogYCR7bmFtZX1gLCBcImNsYXNzXCI6IFwiZm9ybS1sYWJlbCByYWRpby1sYWJlbFwiLCBcImlkXCI6IGAke25hbWV9LWxhYmVsICR7bmFtZX0tJHtzZWxlY3Rpb259YH0pICAgIFxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuICAgIGNvbnN0IHJhZGlvID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7J3R5cGUnOiAncmFkaW8nLCAnbmFtZSc6IGAke25hbWV9YCwgJ2NsYXNzJzogYGZvcm0taW5wdXQgcmFkaW8tJHtuYW1lfWAsICdpZCc6IGAke25hbWV9LSR7c2VsZWN0aW9ufS1yYWRpb2AgfSlcbiAgICBpZiAoY2hlY2tlZCkgcmFkaW8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgIFxuICAgIGxhYmVsLmFwcGVuZENoaWxkKHJhZGlvKTtcblxuXG4gICBcblxuICAgIHJldHVybiBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG59XG5cblxuXG5cbmV4cG9ydCB7bWFrZVJhZGlvLCBnZXREYXRlLCBzZXRBdHRyaWJ1dGVzLCBjcmVhdGVFbGVtZW50IGFzIGVsZW1lbnQsIGNyZWF0ZUltYWdlTGluaywgbWFrZUNvbnRhaW5lciwgbWFrZU1lbnUsIGFwcGVuZENoaWxkcmVufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBnZXRVcmdlbmN5LCBUYXNrfSBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyBhZGRQcm9qZWN0QnV0dG9uLCBjcmVhdGVMaXN0ZW5lcnMsIHJlbmRlclByb2plY3QsIHJlbmRlclRhc2sgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBjb250ZW50LCBwcm9qZWN0Q29udGFpbmVyIH0gZnJvbSAnLi9jb250ZW50JztcbmltcG9ydCB7IG1lbnUgfSBmcm9tICcuL21lbnUnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cblxuYm9keS5pbnNlcnRCZWZvcmUobWVudSgpLCBtYWluKTtcbm1haW4uYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcigpKVxubWFpbi5hcHBlbmRDaGlsZChjb250ZW50KCkpO1xuXG5cbmNvbnNvbGUubG9nKG1haW4ucGFyZW50Tm9kZSlcblxuXG4vL2NvbnN0IHRlc3RQcm9qID0gcmVuZGVyUHJvamVjdCh0ZXN0UHJvamVjdCk7XG5cblxuXG5cblxuXG4vL2NvbnN0IE5FV1BST0ogPSBQcm9qZWN0KCk7XG5cblxuXG5cbi8vZW5kZXJQcm9qZWN0KE5FV1BST0opO1xuXG5cblxuLy9jb250ZW50LmFwcGVuZCh0ZXN0UHJvailcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==