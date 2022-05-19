(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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

/***/ }),

/***/ "./patterns/scripts/ui/vto/Components/Error.jsx":
/*!******************************************************!*\
  !*** ./patterns/scripts/ui/vto/Components/Error.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");


const Error = _ref => {
  let {
    error
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "error permissionDenied"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    role: "heading",
    "aria-level": "2",
    className: "error__title"
  }, error.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: "error__message"
  }, error.message));
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./patterns/scripts/ui/vto/Components/Eyewear/index.js":
/*!*************************************************************!*\
  !*** ./patterns/scripts/ui/vto/Components/Eyewear/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon */ "./patterns/scripts/ui/vto/Components/Icon.jsx");
/* harmony import */ var _Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Close */ "./patterns/scripts/ui/vto/Components/Close.jsx");
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Error */ "./patterns/scripts/ui/vto/Components/Error.jsx");
/* harmony import */ var _widgets_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../widgets/loader */ "./patterns/scripts/ui/widgets/loader/index.js");
/* harmony import */ var lib_helpers_mobile_detect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/helpers/mobile-detect */ "./patterns/scripts/lib/helpers/mobile-detect.js");
/* harmony import */ var _Redux_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Redux/actions */ "./patterns/scripts/ui/vto/Redux/actions.js");
/* harmony import */ var lib_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/selectors */ "./patterns/scripts/lib/selectors.js");
/* harmony import */ var lib_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/helpers */ "./patterns/scripts/lib/helpers.js");
/* harmony import */ var lib_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lib/events */ "./patterns/scripts/lib/events/index.js");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const zoomButton = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('.js-product-details-zoom', Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('.js-main-content'));
let selectedMockup = null;
/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "getProductID", () => {
      if (this.props.facecakeProps.isFacecakeMockupEnabled) {
        return selectedMockup;
      } else {
        return this.props.product.code;
      }
    });
  }

  componentDidMount() {
    const {
      orientation
    } = this.props;
    this.retrySetup();
    window.addEventListener('orientationchange', this.onOrientationChange.bind(this));
    lib_events__WEBPACK_IMPORTED_MODULE_10__["Manager"].subscribe(lib_events__WEBPACK_IMPORTED_MODULE_10__["WINDOW_WAS_RESIZED"], () => this.onResize());
    zoomButton.style.display = 'none';

    if (Object(lib_helpers__WEBPACK_IMPORTED_MODULE_9__["getMq"])() !== 'desktop') {
      this.topBannerBehaviour(true);
      this.vtoVariantsBehaviour(true);
    }

    selectedMockup = this.props.facecakeProps.sampleProductIds[0];
    this.getProductID();
  }

  componentDidUpdate() {
    if (Object(lib_helpers__WEBPACK_IMPORTED_MODULE_9__["getMq"])() !== 'desktop') {
      this.vtoVariantsBehaviour(true);
    }
  }

  startCamera() {
    const errorMessage = (message, e) => {
      const {
        dispatch
      } = this.props;
      Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_7__["vtoCameraNotAvailableAction"])({
        dispatch
      });
    };

    if (location.protocol === 'https:') {
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

      if (navigator.getUserMedia) {
        navigator.getUserMedia({
          video: true
        }, function (stream) {
          window.localStream = stream;
          var mediaStreamTrack = stream.getVideoTracks()[0];

          if (typeof mediaStreamTrack != "undefined") {
            mediaStreamTrack.onended = function () {
              //for Chrome.
              errorMessage('Your webcam is busy!');
            };
          } else errorMessage('Permission denied!');
        }, function (e) {
          var message;

          switch (e.name) {
            case 'NotFoundError':
            case 'DevicesNotFoundError':
              message = 'Please setup your webcam first.';
              break;

            case 'SourceUnavailableError':
              message = 'Your webcam is busy';
              break;

            case 'PermissionDeniedError':
            case 'SecurityError':
              message = 'Permission denied!';
              break;

            default:
              errorMessage('Reeeejected!', e);
              return;
          }

          errorMessage(message);
        });
      } else errorMessage('Uncompatible browser!');
    } else errorMessage('Use https protocol for open this page.');
  }

  stopCamera() {
    if (window.localStream) {
      const stream = window.localStream;
      const tracks = stream.getTracks();
      tracks.forEach(function (track) {
        track.stop();
      });
    }
  }

  topBannerBehaviour(moveDown) {
    const topBannerComponent = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('.top-banner-component', document.body);
    const mainEl = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('.page-productDetails-Eyewear .js-main', document.body);
    const productDetailsContent = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('.product-details__content', document.body);

    if (topBannerComponent && mainEl) {
      const topBannerComponentHeight = topBannerComponent.getBoundingClientRect().height;
      mainEl.style.paddingTop = "".concat(moveDown ? topBannerComponentHeight : 0, "px");

      if (productDetailsContent) {
        productDetailsContent.style.transform = "translate3d(0, ".concat(moveDown ? -topBannerComponentHeight : 0, "px, 0)");
      }
    }
  }
  /*
  Accessibility request (ONE-15590) : Change DOM order to make it match the visual order
  */


  vtoVariantsBehaviour() {
    let order = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    const parentNode = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('.product-details__text');
    const title = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('.product-details__head');
    const bar = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('.product-details__bar');
    const par = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('.js-product-details-more-wrapper');
    const backorder = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('.product-details__backorder');
    const option = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('.product-details__option');
    const description = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["selectAll"])('.product-details__description', title);
    const moreDetails = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('p.product-details__more');

    if (order && parentNode) {
      parentNode.insertBefore(bar, option);
      const newNode = document.createElement('p');
      newNode.className = 'product-details__description-wrapper';

      if (description) {
        description.forEach(d => {
          newNode.insertBefore(d, null);
          parentNode.insertBefore(newNode, bar);
        });
      }
    } else {
      const tmpNode = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('.product-details__description-wrapper', parentNode);
      const tmpDescription = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["selectAll"])('.product-details__description', parentNode);

      if (tmpDescription) {
        tmpDescription.forEach(d => {
          title.insertBefore(d, null);
        });
      }

      if (tmpNode) tmpNode.remove();
      parentNode.insertBefore(title, backorder);
      parentNode.insertBefore(bar, backorder);

      if (moreDetails) {
        parentNode.insertBefore(moreDetails, bar);
      }

      if (par) {
        parentNode.insertBefore(par, bar);
      }
    }
  }

  onResize() {
    lib_events__WEBPACK_IMPORTED_MODULE_10__["Manager"].publish(lib_events__WEBPACK_IMPORTED_MODULE_10__["VTO_PDP_STYLE_UPDATE"]);
    const mainEl = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('.page-productDetails-Eyewear .js-main', document.body);

    if (mainEl) {
      if (Object(lib_helpers__WEBPACK_IMPORTED_MODULE_9__["getMq"])() === 'desktop') {
        this.vtoVariantsBehaviour(false);
        this.topBannerBehaviour(false);
      } else {
        this.topBannerBehaviour(true);
      }
    }
  }

  onOrientationChange() {
    const {
      showing
    } = this.props;

    if (showing && Object(lib_helpers_mobile_detect__WEBPACK_IMPORTED_MODULE_6__["default"])() && this.container) {
      const {
        top,
        left
      } = this.container.getBoundingClientRect();
      window.scrollTo({
        top,
        left,
        options: {
          behavior: 'smooth'
        }
      });
    }
  }

  componentWillUnmount() {
    if (this.video) {
      this.video.srcObject = null;
    }

    window.removeEventListener('orientationchange', this.onOrientationChange);
    zoomButton.style.display = null;
    this.topBannerBehaviour(false);
  }

  close() {
    this.vtoVariantsBehaviour(false);
    const {
      dispatch
    } = this.props;
    const vtoOpenCTA = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('button', Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('.vto-open__wrapper'));
    if (vtoOpenCTA) vtoOpenCTA.classList.remove("buttonDisabled");
    window.vtoClose();
    Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_7__["vtoCloseClickAction"])({
      dispatch
    });
    Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_7__["vtoVideoStopAction"])({
      dispatch
    });
    lib_events__WEBPACK_IMPORTED_MODULE_10__["Manager"].publish(lib_events__WEBPACK_IMPORTED_MODULE_10__["VTO_PDP_STYLE_UPDATE"]);
    let zoomButton = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('.js-product-details-zoom');
    if (zoomButton) zoomButton.style.display = null;
    const product_detail_scroll = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('.product-details .product-details-scroll');

    if (product_detail_scroll) {
      product_detail_scroll.style.visibility = 'visible';
    }

    this.stopCamera();
  }

  retrySetup() {
    const {
      product,
      dispatch
    } = this.props;

    if (this.props.product.vto.category === 'eyewear') {
      const loader = new _widgets_loader__WEBPACK_IMPORTED_MODULE_5__["default"](this.container, {
        delay: 0
      });
      lib_events__WEBPACK_IMPORTED_MODULE_10__["Manager"].publish('VTO_IS_SHOWING', product);
      Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_7__["vtoReadyAction"])({
        dispatch
      });
    }
  }

  componentWillReceiveProps(newProps) {
    const {
      product
    } = this.props;
    const {
      vto
    } = newProps.product;

    if (vto && vto !== product.vto) {
      this.setSelectedMockup();
    }
  }

  setSelectedMockup() {
    const sampleMockup = this.props.facecakeProps.sampleProductIds;
    const productIndex = sampleMockup.findIndex(items => items == selectedMockup);

    if (productIndex != sampleMockup.length - 1) {
      selectedMockup = sampleMockup[productIndex + 1];
    } else {
      selectedMockup = sampleMockup[0];
    }
  }

  getEyewearDimensions(type) {
    const container = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('.vto-eyewear-container');

    if (container != null) {
      return window.getComputedStyle(container)[type];
    } else return '';
  }

  render() {
    let {
      orientation,
      error
    } = this.props;
    let sizeProps = {};
    let params = '?lang=' + dataLayer[0].locale + '&title=' + encodeURIComponent("Try on ".concat(this.props.product.basic.name, " ").concat(this.props.product.color ? this.props.product.color.name : '')) + '&fallbackContent=' + encodeURIComponent(config.vto.labels.canvasLabel) + '&cameraErrorMsg=' + encodeURIComponent(config.locales.vto.permissionDenied) + '&generalErrorMsg=' + encodeURIComponent(config.vto.labels.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", {
      ref: node => this.container = node,
      className: "vto__wrapper ".concat(orientation.portrait ? 'portrait' : 'landscape')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_Close__WEBPACK_IMPORTED_MODULE_3__["default"], {
      ref: node => this.button = node,
      close: () => this.close(this.props)
    }), this.props.product.vto.category === 'eyewear' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", {
      className: "vto-eyewear-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("iframe", {
      className: "vto_iframe",
      referrerpolicy: "strict-origin",
      height: this.getEyewearDimensions('height'),
      "aria-hidden": "false",
      title: "".concat(config.locales.vto.tryOn, " ").concat(this.props.product.basic.name, " ").concat(this.props.product.color ? this.props.product.color.name : ''),
      tabIndex: "-1",
      src: this.props.facecakeProps.tryOnUrl + '/' + this.props.product.baseProduct + params,
      scrolling: "no",
      allow: "camera;"
    })) : null);
  }

});

/***/ })

}]);
//# sourceMappingURL=6.js.map?v=3.23.0