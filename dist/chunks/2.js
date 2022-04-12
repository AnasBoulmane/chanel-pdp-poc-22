(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./patterns/scripts/ui/cto/Components/cameraIcon.jsx":
/*!***********************************************************!*\
  !*** ./patterns/scripts/ui/cto/Components/cameraIcon.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _vto_Components_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vto/Components/Icon */ "./patterns/scripts/ui/vto/Components/Icon.jsx");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class CameraIcon extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "getLuminescence", color => {
      // get the brightness value of hex
      // Variables for red, green, blue values
      let r, g, b, hsp; // Check the format of the color, HEX or RGB?

      if (color.match(/^rgb/)) {
        // If RGB --> store the red, green, blue values in separate variables
        color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
        r = color[1];
        g = color[2];
        b = color[3];
      } else {
        // If hex --> Convert it to RGB
        color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));
        r = color >> 16;
        g = color >> 8 & 255;
        b = color & 255;
      }

      hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
      return 50;
    });
  }

  render() {
    let iconName;

    if (this.props.name) {
      iconName = this.props.name;
    } else {
      iconName = this.props.hexValue ? this.getLuminescence(this.props.hexValue) > 40 ? "cto_camera_white" : "cto_camera_black" : "cto_camera_white";
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("button", {
      className: "camera-icon ".concat(this.props.class),
      type: "button",
      onClick: this.props.click
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_vto_Components_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: iconName
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("span", {
      className: "is-sr-only"
    }, this.props.cameraMessage));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CameraIcon);

/***/ }),

/***/ "./patterns/scripts/ui/cto/Components/countdownTimer.jsx":
/*!***************************************************************!*\
  !*** ./patterns/scripts/ui/cto/Components/countdownTimer.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _lib_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/events */ "./patterns/scripts/lib/events/index.js");
/* harmony import */ var lib_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/selectors */ "./patterns/scripts/lib/selectors.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class CountdownTimer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "countDown", () => {
      if (!this.isMountedComponent) {
        return false;
      }

      let seconds = this.state.currentTimer - 1;
      this.setState({
        currentTimer: seconds
      }); // Check if we're at zero.

      if (seconds < this.state.timerEnd) {
        clearInterval(this.timer);
        this.props.callback();
      }
    });

    _defineProperty(this, "startTimer", () => {
      if (this.state.currentTimer >= this.state.timerEnd) {
        this.timer = setInterval(this.countDown, 1000);
      }
    });

    this.state = {
      timerEnd: 2,
      currentTimer: 3
    };
    this.timer = 0;
    this.timerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createRef();
    this.isMountedComponent = false;
  }

  componentDidMount() {
    this.isMountedComponent = true;

    if (Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])('.virtual-makeup-component')) {
      _lib_events__WEBPACK_IMPORTED_MODULE_1__["Manager"].subscribe(_lib_events__WEBPACK_IMPORTED_MODULE_1__["BREAKPOINT_CHANGE"], () => {
        if (window.innerWidth < 961) {
          if (window.innerHeight < window.innerWidth) {
            clearInterval(this.timer);
          } else {
            this.startTimer();
          }
        }
      });
    }

    this.timerRef.current.focus();
    this.startTimer();
  }

  componentDidUpdate(prevprops) {
    if (this.props.pauseTimer !== undefined && prevprops.pauseTimer !== this.props.pauseTimer) {
      this.props.pauseTimer ? clearInterval(this.timer) : this.startTimer();
    }
  }

  componentWillUnmount() {
    this.isMountedComponent = false;
    clearInterval(this.timer);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", _extends({
      className: "count-down ".concat(this.props.customClass ? this.props.customClass : '')
    }, this.props.customProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "count-down-text"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      tabIndex: "-1",
      ref: this.timerRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "is-sr-only"
    }, window.config.cto.dedicated.timerText, ": "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      "aria-live": "assertive"
    }, this.state.currentTimer))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CountdownTimer);

/***/ }),

/***/ "./patterns/scripts/ui/cto/Components/ctoContext.jsx":
/*!***********************************************************!*\
  !*** ./patterns/scripts/ui/cto/Components/ctoContext.jsx ***!
  \***********************************************************/
/*! exports provided: CtoContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtoContext", function() { return CtoContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");

const CtoContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createContext({
  state: '',
  updateValue: () => {}
});

/***/ }),

/***/ "./patterns/scripts/ui/cto/Components/photoCapture.jsx":
/*!*************************************************************!*\
  !*** ./patterns/scripts/ui/cto/Components/photoCapture.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/helpers */ "./patterns/scripts/lib/helpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _lib_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/selectors */ "./patterns/scripts/lib/selectors.js");
/* harmony import */ var _vto_Components_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../vto/Components/Icon */ "./patterns/scripts/ui/vto/Components/Icon.jsx");
/* harmony import */ var _Components_ctoContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/ctoContext */ "./patterns/scripts/ui/cto/Components/ctoContext.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class PhotoCapture extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "browser", Object(lib_helpers__WEBPACK_IMPORTED_MODULE_1__["getBrowserInfo"])());

    _defineProperty(this, "getDataSource", fileObj => {
      const imageName = this.getImageName();
      return {
        files: [fileObj || this.state.file],
        ...(this.isItiOS ? {} : {
          text: imageName
        }),
        ...(this.isItiOS ? {} : {
          title: imageName
        })
      };
    });

    _defineProperty(this, "convertToFile", url => {
      const blob = fetch(url).then(res => res.blob()).then(blob => {
        const fileObj = new File([blob], "".concat(this.getImageName(), ".jpg"), {
          type: 'image/jpeg'
        });
        this.setState({
          file: fileObj,
          shareAvailable: (!this.availablePlatform.includes(this.browser.platform) || Object(lib_helpers__WEBPACK_IMPORTED_MODULE_1__["isIpadOS"])()) && navigator.canShare && navigator.canShare(this.getDataSource(fileObj))
        });
      }).catch();
    });

    _defineProperty(this, "getImageName", () => {
      let currentDate = new Date();
      currentDate = new Date(currentDate.getTime() - 60 * 1000 * currentDate.getTimezoneOffset());
      const imageName = currentDate.toISOString().replace(/^(.+)T([^.]+).*/, (_, date, time) => "CHANEL-TRY-ON_".concat(date, "_").concat(time.replace(/:/g, '')));
      return imageName;
    });

    this.state = {
      showPicture: true,
      shareAvailable: false,
      file: null
    };
    this.backButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createRef();
    this.moveBack = this.moveBack.bind(this);
    this.isItiOS = Object(lib_helpers__WEBPACK_IMPORTED_MODULE_1__["isiOS"])();
    this.availablePlatform = ['Mac', 'Windows'];
  }

  componentDidMount() {
    this.backButton.current.focus();
    window.scrollTo({
      top: 0,
      left: 0,
      options: {
        behavior: 'smooth'
      }
    });
    this.convertToFile(this.props.imgSrc);
  }

  moveBack() {
    this.context.updateValue('showPicture', false);
    this.context.updateValue('backClicked', true);
  }

  componentWillUnmount() {
    this.props.callback();
  }

  downloadImage() {
    dataLayer.push({
      eventCategory: "vto",
      eventAction: "take picture",
      eventLabel: "download",
      event: "uaevent"
    });
    const imageName = this.getImageName();
    const dataSource = this.getDataSource();

    const triggerDownload = () => {
      const a = document.createElement('a');
      a.href = this.props.imgSrc;
      a.download = imageName + '.jpg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };

    if (this.state.shareAvailable) {
      navigator.share(dataSource).catch(err => {
        if (err.name !== 'AbortError') {
          /*We're setting this state here to accomodate safari 15 and above (here navigator.share() is supported ) behaviour,
              UseCase1: When user launches native share overlay and close the share overlay we get AbortError, so we are trigering download
              ONLY when we do not get AbortError as we do not want unnecessary download of a file when user closes the share overlay.
              UseCase2: When user lauches native share overlay and click on option named Save this file, the file is downloaded and post this download action
             whenever user clicks on our CTA, navigator.share() returns false and we are landed in this catch block.
             So here we will not get 'AbortError' and we will be trigering our download function as a fallback.
          */
          triggerDownload();
          this.setState({
            shareAvailable: false
          });
        }
      });
    } else {
      triggerDownload();
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("div", _extends({
      className: "cto-captured-photo ".concat(this.props.customClass ? this.props.customClass : '')
    }, this.props.customProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("div", {
      className: "photo_container "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("button", _extends({
      type: "button",
      className: "backButton",
      onClick: this.moveBack,
      ref: this.backButton
    }, this.props.backIconName && this.props.backIconName.indexOf('white') != -1 ? {
      style: {
        color: '#fff'
      }
    } : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_vto_Components_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: this.props.backIconName ? this.props.backIconName : 'cto_back_black',
      className: "cto__back_icon"
    }), window.config.cto.dedicated.photoCaptureBackText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("img", _extends({
      src: this.props.imgSrc,
      className: "cto__image",
      alt: window.config.cto.dedicated.photoCaptureImageAltText
    }, window.innerWidth > 960 ? this.props.customProps : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("button", {
      type: "button",
      className: "cto__download_icon",
      onClick: this.downloadImage.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("span", {
      className: "is-sr-only"
    }, this.state.shareAvailable ? window.config.cto.dedicated.photoCaptureShareText : window.config.cto.dedicated.photoCaptureDownloadText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_vto_Components_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "cto_download"
    }))))));
  }

}

_defineProperty(PhotoCapture, "contextType", _Components_ctoContext__WEBPACK_IMPORTED_MODULE_5__["CtoContext"]);

/* harmony default export */ __webpack_exports__["default"] = (PhotoCapture);

/***/ }),

/***/ "./patterns/scripts/ui/vto/Components/Close.jsx":
/*!******************************************************!*\
  !*** ./patterns/scripts/ui/vto/Components/Close.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon */ "./patterns/scripts/ui/vto/Components/Icon.jsx");
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/config */ "./patterns/scripts/lib/config.js");
/* harmony import */ var lib_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/selectors */ "./patterns/scripts/lib/selectors.js");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class ButtonClose extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "handleClick", () => {
      const nextChevron = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_4__["select"])('.product-details .js-slide:first-child a');

      if (nextChevron) {
        nextChevron.style.top = '';
        nextChevron.style.zIndex = '';
      }
    });
  }

  componentDidMount() {
    this.button.focus();
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("button", {
      ref: node => this.button = node,
      className: "button is-icon vto-close",
      onClick: () => {
        this.props.close();
        this.handleClick();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "close"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("span", {
      className: "is-sr-only"
    }, _lib_config__WEBPACK_IMPORTED_MODULE_3__["default"].locales.vto.closeButtonLabel));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ButtonClose);

/***/ })

}]);
//# sourceMappingURL=2.js.map?v=3.23