/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/fonts/fonts.css":
/*!********************************!*\
  !*** ./assets/fonts/fonts.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/reset/reset.min.css":
/*!************************************!*\
  !*** ./assets/reset/reset.min.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/app/app.css":
/*!************************************!*\
  !*** ./src/components/app/app.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/app/app.js":
/*!***********************************!*\
  !*** ./src/components/app/app.js ***!
  \***********************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _chat_chat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chat/chat.js */ "./src/components/chat/chat.js");
/* harmony import */ var _field_field_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../field/field.js */ "./src/components/field/field.js");
/* harmony import */ var _message_message_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message/message.js */ "./src/components/message/message.js");
/* harmony import */ var _messages_messages_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../messages/messages.js */ "./src/components/messages/messages.js");
/* harmony import */ var _assets_reset_reset_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/reset/reset.min.css */ "./assets/reset/reset.min.css");
/* harmony import */ var _assets_reset_reset_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_reset_reset_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_fonts_fonts_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/fonts/fonts.css */ "./assets/fonts/fonts.css");
/* harmony import */ var _assets_fonts_fonts_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_fonts_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.css */ "./src/components/app/app.css");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_6__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }










var App = function () {
    function App(_ref) {
        var _this = this;

        var el = _ref.el,
            data = _ref.data;

        _classCallCheck(this, App);

        this.el = el;
        this.chat = new _chat_chat_js__WEBPACK_IMPORTED_MODULE_0__["Chat"]({
            el: document.createElement('div')
        });
        this.field = new _field_field_js__WEBPACK_IMPORTED_MODULE_1__["Field"]({
            el: document.createElement('div')
        });
        this.message = new _message_message_js__WEBPACK_IMPORTED_MODULE_2__["Message"]({
            el: document.createElement('div'),
            msg: this.field
        });
        this.messages = new _messages_messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"]({
            el: document.createElement('div'),
            data: {
                stack: data.stack
            }
        });
        this.field.subscribe(_field_field_js__WEBPACK_IMPORTED_MODULE_1__["Field"].MSG_SEND_EVENT, function () {
            _this.message.render();
            _this.messages.el.append(_this.message.el);
            _this.message.scroll();
        });
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            this.chat.render();
            this.messages.render();
            this.field.render();
            this.el.append(this.chat.el);
            this.chat.el.append(this.messages.el, this.field.el);
        }
    }, {
        key: "init",
        value: function init() {
            this.field.initEmoji();
            this.field.initFiles();
        }
    }, {
        key: "run",
        value: function run() {
            this.render();
            this.init();
        }
    }]);

    return App;
}();

/***/ }),

/***/ "./src/components/chat/chat.css":
/*!**************************************!*\
  !*** ./src/components/chat/chat.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/chat/chat.js":
/*!*************************************!*\
  !*** ./src/components/chat/chat.js ***!
  \*************************************/
/*! exports provided: Chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat", function() { return Chat; });
/* harmony import */ var _chat_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.css */ "./src/components/chat/chat.css");
/* harmony import */ var _chat_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chat_css__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Chat = function () {
    function Chat(_ref) {
        var el = _ref.el;

        _classCallCheck(this, Chat);

        this.el = el;
    }

    _createClass(Chat, [{
        key: 'render',
        value: function render() {
            this.el.classList.add('chat');
            this.el.innerHTML = '\n            <div class="chat-header">\n                <h1 class="chat-header__name">Mangosteen Chat</h1>\n            </div>\n        ';
        }
    }]);

    return Chat;
}();

/***/ }),

/***/ "./src/components/field/field.css":
/*!****************************************!*\
  !*** ./src/components/field/field.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/field/field.js":
/*!***************************************!*\
  !*** ./src/components/field/field.js ***!
  \***************************************/
/*! exports provided: Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony import */ var _modules_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/emitter.js */ "./src/modules/emitter.js");
/* harmony import */ var _field_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field.css */ "./src/components/field/field.css");
/* harmony import */ var _field_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_field_css__WEBPACK_IMPORTED_MODULE_1__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Field = function (_EventEmitter) {
    _inherits(Field, _EventEmitter);

    function Field(_ref) {
        var el = _ref.el;

        _classCallCheck(this, Field);

        var _this = _possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).call(this));

        _this.el = el;
        _this.init();
        return _this;
    }

    _createClass(Field, [{
        key: 'init',
        value: function init() {
            this.el.addEventListener('submit', this.onSubmit.bind(this));
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit(evt) {
            evt.preventDefault();
            var form = evt.target;
            var getMsg = form.querySelector('.chat-controls__textarea');
            this.msg = getMsg.innerHTML;
            if (this.msg !== '') {
                var event = new Event(Field.MSG_SEND_EVENT, {
                    bubbles: true
                });
                this.emit(event);
            }
            this.msg = getMsg.innerHTML = '';
        }
    }, {
        key: 'render',
        value: function render() {
            this.el.classList.add('chat-controls');
            this.el.innerHTML = '\n            <form>\n                    <div contenteditable="true" class="chat-controls__textarea" placeholder="Type a message"></div>\n                    <div class="chat-controls-buttons">\n                        <input type="submit" value="Send" class="chat-controls-buttons__send">\n                        <div class="chat-controls-buttons-wrapper">\n                            <div class="chat-controls-buttons__smiles">\n                                <img src="assets/img/smile.png">\n                                <div class="chat-controls-buttons__smiles-menu">\n                                    <div class="chat-controls-buttons__smile" data-emoji>\uD83D\uDE11</div>\n                                    <div class="chat-controls-buttons__smile" data-emoji>\uD83D\uDE15</div>\n                                    <div class="chat-controls-buttons__smile" data-emoji>\uD83D\uDE0A</div>\n                                    <div class="chat-controls-buttons__smile" data-emoji>\uD83D\uDE0E</div>\n                                    <div class="chat-controls-buttons__smile" data-emoji>\uD83D\uDCAA</div>\n                                </div>\n                            </div>\n                            <input type="file" id="chat-controls-buttons__upload" multiple accept="file_extension">\n                            <label class="chat-controls-buttons__attach" for="chat-controls-buttons__upload"><i class="fa fa-paperclip"></i></label>\n                        </div>\n                    </div>\n            </form>\n        ';
        }
    }, {
        key: 'initEmoji',
        value: function initEmoji() {
            var textArea = this.el.querySelector('.chat-controls__textarea');
            var emoji = this.el.querySelectorAll('[data-emoji]');
            for (var i = 0; i < emoji.length; i++) {
                emoji[i].addEventListener('click', function () {
                    var emojiCopy = this.innerHTML;
                    textArea.innerHTML += emojiCopy;
                });
            }
        }
    }, {
        key: 'initFiles',
        value: function initFiles() {
            var textArea = this.el.querySelector('.chat-controls__textarea');
            var fileElem = this.el.querySelector('#chat-controls-buttons__upload');
            fileElem.addEventListener('change', handleFiles.bind(fileElem.files));

            function handleFiles(files) {
                files = [].concat(_toConsumableArray(files.target.files));
                files.forEach(previewFile);
            }

            function previewFile(file) {
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = function () {
                    if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif') {
                        var img = document.createElement('img');
                        img.src = reader.result;
                        img.classList.add('message__newImg');
                        textArea.appendChild(img);
                    } else {
                        var doc = document.createElement('img');
                        doc.src = './assets/img/doc.png';
                        doc.classList.add('message__newImg');
                        textArea.appendChild(doc);
                    }
                };
            }
        }
    }]);

    return Field;
}(_modules_emitter_js__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]);

Field.MSG_SEND_EVENT = 'message:send';

/***/ }),

/***/ "./src/components/message/message.js":
/*!*******************************************!*\
  !*** ./src/components/message/message.js ***!
  \*******************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Message = function () {
    function Message(_ref) {
        var el = _ref.el,
            msg = _ref.msg;

        _classCallCheck(this, Message);

        this.el = el;
        this.msg = msg;
        this.optionsDate = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: false
        };
        this.obj = {
            type: 'me',
            author: 'Mark Bennington',
            time: '' + new Date().toLocaleString('en-US', this.optionsDate),
            avatar: 'assets/img/mark.png'
        };
    }

    _createClass(Message, [{
        key: 'template',
        value: function template() {
            return '<div class="chat-item chat-item-me">\n                    <img class="chat-item__img" src="' + this.obj.avatar + '" alt="avatar">\n                        <div class="message">\n                            <span class="message__user-name">' + this.obj.author + '</span>\n                            <i class="fa fa-clock-o"></i>\n                            <time class="message__time">' + this.obj.time + '</time>\n                            <p class="message__text">' + this.msg.msg + '</p>\n                        </div>\n               </div>';
        }
    }, {
        key: 'render',
        value: function render() {
            this.el.innerHTML += this.template();
        }
    }, {
        key: 'scroll',
        value: function scroll() {
            this.el.scrollIntoView();
        }
    }]);

    return Message;
}();

/***/ }),

/***/ "./src/components/messages/messages.css":
/*!**********************************************!*\
  !*** ./src/components/messages/messages.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/messages/messages.js":
/*!*********************************************!*\
  !*** ./src/components/messages/messages.js ***!
  \*********************************************/
/*! exports provided: Messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return Messages; });
/* harmony import */ var _messages_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.css */ "./src/components/messages/messages.css");
/* harmony import */ var _messages_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_messages_css__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Messages = function () {
    function Messages(_ref) {
        var el = _ref.el,
            data = _ref.data;

        _classCallCheck(this, Messages);

        this.el = el;
        this.data = data;
        this.arr = [];
    }

    _createClass(Messages, [{
        key: 'template',
        value: function template(data) {
            for (var a = 0; a < data.stack.length; a++) {
                if (data.stack[a].type === 'me') {
                    this.arr.push('<div class="chat-item chat-item-me">\n                    <img class="chat-item__img" src="' + this.data.stack[a].avatar + '" alt="avatar">\n                        <div class="message">\n                            <span class="message__user-name">' + this.data.stack[a].author + '</span>\n                            <i class="fa fa-clock-o"></i>\n                            <time class="message__time">' + this.data.stack[a].time + '</time>\n                            <p class="message__text">' + this.data.stack[a].msg + '</p>\n                        </div>\n                     </div>');
                }

                if (data.stack[a].type === 'other') {
                    this.arr.push('<div class="chat-item chat-item-other">\n                        <div class="message">\n                            <span class="message__user-name">' + this.data.stack[a].author + '</span>\n                            <i class="fa fa-clock-o"></i>\n                            <time class="message__time">' + this.data.stack[a].time + '</time>\n                            <p class="message__text">' + this.data.stack[a].msg + '</p>\n                        </div>\n                        <img class="chat-item__img" src="' + this.data.stack[a].avatar + '" alt="avatar">\n                     </div>');
                }
            }
            return this.arr.join('');
        }
    }, {
        key: 'render',
        value: function render() {
            this.el.classList.add('chat-history');
            this.el.innerHTML = this.template(this.data);
        }
    }]);

    return Messages;
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_app_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app/app.js */ "./src/components/app/app.js");
/* harmony import */ var _modules_network_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/network.js */ "./src/modules/network.js");



var element = document.querySelector('#chat');
var network = new _modules_network_js__WEBPACK_IMPORTED_MODULE_1__["Network"]();

var store = {
    el: element,
    data: {
        stack: []
    }
};

network.getMessages().then(function (body) {
    store.data.stack = body;
    return store;
}).then(function (store) {
    var application = new _components_app_app_js__WEBPACK_IMPORTED_MODULE_0__["App"](store);
    application.run();
});

/***/ }),

/***/ "./src/modules/emitter.js":
/*!********************************!*\
  !*** ./src/modules/emitter.js ***!
  \********************************/
/*! exports provided: EventEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventEmitter", function() { return EventEmitter; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var EventEmitter = function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.events = {};
    }

    _createClass(EventEmitter, [{
        key: "emit",
        value: function emit(event, data) {
            var _this = this;

            var listeners = this.events[event.type] || [];
            listeners.forEach(function (listener) {
                listener.call(_this, data);
            });
        }
    }, {
        key: "subscribe",
        value: function subscribe(event, fn) {
            if (!this.events[event]) {
                this.events[event] = [];
            }
            this.events[event].push(fn);
        }
    }]);

    return EventEmitter;
}();

/***/ }),

/***/ "./src/modules/network.js":
/*!********************************!*\
  !*** ./src/modules/network.js ***!
  \********************************/
/*! exports provided: Network */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Network", function() { return Network; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Network = function () {
    function Network() {
        _classCallCheck(this, Network);

        this.url = 'https://mangosteenchat1.firebaseio.com/chat.json';
    }

    _createClass(Network, [{
        key: 'getMessages',
        value: function getMessages() {
            return fetch(this.url).then(function (response) {
                return response.json();
            }).then(function (body) {
                return body;
            });
        }
    }]);

    return Network;
}();

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map