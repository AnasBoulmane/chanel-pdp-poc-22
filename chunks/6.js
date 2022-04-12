(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./patterns/scripts/ui/vto/Components/ButtonWishList.jsx":
/*!***************************************************************!*\
  !*** ./patterns/scripts/ui/vto/Components/ButtonWishList.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon */ "./patterns/scripts/ui/vto/Components/Icon.jsx");
/* harmony import */ var lib_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/selectors */ "./patterns/scripts/lib/selectors.js");
/* harmony import */ var lib_wishlist_wishlist_yapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/wishlist/wishlist-yapi */ "./patterns/scripts/lib/wishlist/wishlist-yapi.js");
/* harmony import */ var lib_wishlist_wishlist_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/wishlist/wishlist-ui */ "./patterns/scripts/lib/wishlist/wishlist-ui.js");
/* harmony import */ var modules_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modules/notifier */ "./patterns/scripts/modules/notifier.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class ButtonWishList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    var _this;

    super(props);
    _this = this;

    _defineProperty(this, "onClick", async function (e) {
      let undo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      try {
        const result = await Object(lib_wishlist_wishlist_yapi__WEBPACK_IMPORTED_MODULE_3__["udpateProductInWishlist"])(_this.state.codeProduct, !_this.state.active, false);

        _this.setState({
          active: !_this.state.active
        });

        _this.setState({
          wishlistData: result
        });

        _this.showNotification(result, undo);

        _this.pushAnalytics(); // this line is important to update all wishlist icons state (second argument for header wishlist)


        Object(lib_wishlist_wishlist_ui__WEBPACK_IMPORTED_MODULE_4__["updateUI"])(result, !_this.state.active);
      } catch (err) {
        console.error(err);
      }
    });

    _defineProperty(this, "reconfigNotifier", undo => {
      const elNotifier = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])('.notifier__wrapper');
      elNotifier.classList.add('notifier__for-vto-wishlist');
      const elementsNotifier = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAll"])('a,button', elNotifier);

      if (elementsNotifier) {
        elementsNotifier.slice(1).forEach(el => el.removeAttribute('tabindex'));
        elementsNotifier[0].focus();
      }

      const undoButton = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])('.undo[data-wishlist]', elNotifier);

      if (undoButton) {
        undoButton.classList.add('undo-vto-wishlist');

        const clickUndo = e => {
          this.onClick(e, true);
        };

        undoButton.addEventListener('click', clickUndo.bind(this));
      }
    });

    _defineProperty(this, "showNotification", async (result, undo) => {
      await modules_notifier__WEBPACK_IMPORTED_MODULE_5__["default"].show({
        name: result.message.label,
        message: result.message.message,
        close: result.message.close,
        opener: this.button,
        noFocus: false
      });
      setTimeout(() => {
        this.reconfigNotifier(undo);
      }, 100);
    });

    _defineProperty(this, "isProductInWishList", () => {
      const wishlist = this.state.wishlistData;
      setTimeout(() => {
        this.setState({
          active: wishlist.productCodeIds.indexOf(this.state.codeProduct) > -1
        });
      }, 100);
    });

    _defineProperty(this, "pushAnalytics", () => {
      let datalayer = this.state.analytics;
      datalayer.eventAction = this.state.active ? this.state.textActive : this.state.textInactive;
      window.document.DLKit.push('on-wishlist-add', datalayer);
    });

    this.state = {
      codeProduct: props.codeProduct,
      wishlistData: props.wishlistData,
      active: false,
      analytics: {
        event: 'uaevent',
        eventCategory: 'vto',
        eventLabel: props.codeProduct,
        eventAction: ''
      },
      accessibility: {
        textActive: props.accessibility.textActive,
        textInactive: props.accessibility.textInactive
      },
      textActive: props.textActive,
      textInactive: props.textInactive
    };
    this.isProductInWishList();
  }

  componentWillReceiveProps(props) {
    if (props.codeProduct !== this.state.codeProduct) {
      this.setState({
        codeProduct: props.codeProduct,
        analytics: {
          event: 'uaevent',
          eventCategory: 'vto',
          eventLabel: props.codeProduct,
          eventAction: ''
        },
        accessibility: {
          textActive: props.accessibility.textActive,
          textInactive: props.accessibility.textInactive
        },
        textActive: props.textActive,
        textInactive: props.textInactive
      });
      this.isProductInWishList();
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
      ref: node => this.button = node,
      onClick: this.onClick,
      type: "button",
      className: "vto-wishlist"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: this.state.active ? "wishlist-on" : "wishlist-off"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "is-sr-only"
    }, !this.state.active ? this.state.accessibility.textActive : this.state.accessibility.textInactive));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ButtonWishList);

/***/ }),

/***/ "./patterns/scripts/ui/vto/Components/Cart.jsx":
/*!*****************************************************!*\
  !*** ./patterns/scripts/ui/vto/Components/Cart.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon */ "./patterns/scripts/ui/vto/Components/Icon.jsx");



class ButtonCart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    this.button.focus();
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      ref: node => this.button = node,
      className: "button icon is-large vto-cart nav-item ".concat(this.props.hasProduct)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "vto-cart"
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ButtonCart);

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

/***/ "./patterns/scripts/ui/vto/Components/IntensitySwitch.jsx":
/*!****************************************************************!*\
  !*** ./patterns/scripts/ui/vto/Components/IntensitySwitch.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _IntensitySwitchButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IntensitySwitchButton */ "./patterns/scripts/ui/vto/Components/IntensitySwitchButton.jsx");



class IntensitySwitch extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      active: 'light'
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(sku, type) {
    if (this.state.active !== type) {
      this.props.toggleIntensity(sku, type);
      this.setState({
        active: type
      });
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.product.code !== this.props.product.code) {
      this.setState({
        active: 'light'
      });
    }
  }

  render() {
    const mainSku = this.props.product.mainSku;
    const altSku = this.props.product.altSku;
    const mobileBp = 960;
    let display = false;
    if (this.props.width > mobileBp && this.props.displayType === 'desktop') display = true;else if (this.props.width <= mobileBp && this.props.displayType === 'mobile') display = true;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, this.props.product.hasTwoIntensities && this.props.ready && display && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "intensity-switch"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_IntensitySwitchButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: "light",
      active: this.state.active,
      sku: mainSku,
      toggle: this.toggle,
      toggleIntensity: this.props.toggleIntensity,
      selectedVariant: this.props.selectedVariant
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_IntensitySwitchButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: "intense",
      active: this.state.active,
      sku: altSku,
      toggle: this.toggle,
      toggleIntensity: this.props.toggleIntensity,
      selectedVariant: this.props.selectedVariant
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (IntensitySwitch);

/***/ }),

/***/ "./patterns/scripts/ui/vto/Components/IntensitySwitchButton.jsx":
/*!**********************************************************************!*\
  !*** ./patterns/scripts/ui/vto/Components/IntensitySwitchButton.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");



class IntensitySwitch extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
  }

  toggleButton(sku, type) {
    this.props.toggle(sku, type);
  }

  render() {
    const type = this.props.type;
    const active = this.props.active === type ? 'active' : '';
    const ariaPressed = this.props.active === type ? 'true' : 'false';
    let i18nIntensity = '';

    if (type === 'light') {
      i18nIntensity = window.config.vto.labels.light;
    } else if (type === 'intense') {
      i18nIntensity = window.config.vto.labels.intense;
    }

    let i18nDescription = window.config.vto.labels.shadeSwitch;
    i18nDescription = i18nDescription.replace('{0}', i18nIntensity);
    i18nDescription = i18nDescription.replace('{1}', this.props.selectedVariant);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_1__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("button", {
      type: "button",
      "aria-pressed": ariaPressed,
      "aria-describedby": "switch-".concat(type),
      className: "switch ".concat(active),
      "data-sku": this.props.sku,
      onClick: this.toggleButton.bind(this, this.props.sku, type)
    }, i18nIntensity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("p", {
      id: "switch-".concat(type),
      className: "is-hidden"
    }, i18nDescription));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (IntensitySwitch);

/***/ }),

/***/ "./patterns/scripts/ui/vto/Components/Makeup/AddedToBag.jsx":
/*!******************************************************************!*\
  !*** ./patterns/scripts/ui/vto/Components/Makeup/AddedToBag.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon */ "./patterns/scripts/ui/vto/Components/Icon.jsx");
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/config */ "./patterns/scripts/lib/config.js");
/* harmony import */ var _lib_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../lib/selectors */ "./patterns/scripts/lib/selectors.js");





class ButtonAddedToBag extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    const globalCartImage = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_3__["select"])('.js-cart');
    this.button.focus();

    if (globalCartImage) {
      globalCartImage.classList.add('already-has-product');
    }
  }

  render() {
    let {
      addedToBagLabel
    } = _lib_config__WEBPACK_IMPORTED_MODULE_2__["default"].locales.vto;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
      ref: node => this.button = node,
      className: "button nav-item"
    }, addedToBagLabel, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "next",
      className: "vto-next"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "is-sr-only"
    }, addedToBagLabel));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ButtonAddedToBag);

/***/ }),

/***/ "./patterns/scripts/ui/vto/Components/Makeup/QuickAddToBag.jsx":
/*!*********************************************************************!*\
  !*** ./patterns/scripts/ui/vto/Components/Makeup/QuickAddToBag.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon */ "./patterns/scripts/ui/vto/Components/Icon.jsx");
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/config */ "./patterns/scripts/lib/config.js");




class ButtonQuickAddToBag extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
      ref: node => this.button = node,
      className: "button nav-item",
      type: "button",
      onClick: () => this.props.quickAddToBag()
    }, _lib_config__WEBPACK_IMPORTED_MODULE_2__["default"].locales.vto.quickAddToBagLabel, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "next",
      className: "vto-next"
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ButtonQuickAddToBag);

/***/ }),

/***/ "./patterns/scripts/ui/vto/Components/Makeup/impetus.js":
/*!**************************************************************!*\
  !*** ./patterns/scripts/ui/vto/Components/Makeup/impetus.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Impetus; });
const stopThresholdDefault = 0.3;
const bounceDeceleration = 0.04;
const bounceAcceleration = 0.11;
let requestId = null; // fixes weird safari 10 bug where preventDefault is prevented
// @see https://github.com/metafizzy/flickity/issues/457#issuecomment-254501356

window.addEventListener('touchmove', function () {});
class Impetus {
  constructor(_ref) {
    let {
      source: sourceEl = document,
      update: updateCallback,
      multiplier = 1,
      friction = 0.92,
      initialValues,
      boundX,
      boundY,
      bounce = true,
      onEnd
    } = _ref;
    const callbackEnd = onEnd;
    var boundXmin, boundXmax, boundYmin, boundYmax, pointerLastX, pointerLastY, pointerCurrentX, pointerCurrentY, pointerId, decVelX, decVelY;
    var targetX = 0;
    var targetY = 0;
    var stopThreshold = stopThresholdDefault * multiplier;
    var ticking = false;
    var pointerActive = false;
    var paused = false;
    var decelerating = false;
    var trackingPoints = [];
    /**
     * Initialize instance
     */

    (function init() {
      sourceEl = typeof sourceEl === 'string' ? document.querySelector(sourceEl) : sourceEl;

      if (!sourceEl) {
        throw new Error('IMPETUS: source not found.');
      }

      if (!updateCallback) {
        throw new Error('IMPETUS: update function not defined.');
      }

      if (initialValues) {
        if (initialValues[0]) {
          targetX = initialValues[0];
        }

        if (initialValues[1]) {
          targetY = initialValues[1];
        }

        callUpdateCallback();
      } // Initialize bound values


      if (boundX) {
        boundXmin = boundX[0];
        boundXmax = boundX[1];
      }

      if (boundY) {
        boundYmin = boundY[0];
        boundYmax = boundY[1];
      }

      sourceEl.addEventListener('touchstart', onDown);
      sourceEl.addEventListener('mousedown', onDown);
    })();
    /**
     * In edge cases where you may need to
     * reinstanciate Impetus on the same sourceEl
     * this will remove the previous event listeners
     */


    this.destroy = function () {
      sourceEl.removeEventListener('touchstart', onDown);
      sourceEl.removeEventListener('mousedown', onDown); // however it won't "destroy" a reference
      // to instance if you'd like to do that
      // it returns null as a convinience.
      // ex: `instance = instance.destroy();`

      return null;
    };
    /**
     * Disable movement processing
     * @public
     */


    this.pause = function () {
      pointerActive = false;
      paused = true;
    };
    /**
     * Enable movement processing
     * @public
     */


    this.resume = function () {
      paused = false;
    };
    /**
     * Update the current x and y values
     * @public
     * @param {Number} x
     * @param {Number} y
     */


    this.setValues = function (x, y) {
      if (typeof x === 'number') {
        targetX = x;
      }

      if (typeof y === 'number') {
        targetY = y;
      }
    };
    /**
     * Update the multiplier value
     * @public
     * @param {Number} val
     */


    this.setMultiplier = function (val) {
      multiplier = val;
      stopThreshold = stopThresholdDefault * multiplier;
    };
    /**
     * Update boundX value
     * @public
     * @param {Number[]} boundX
     */


    this.setBoundX = function (boundX) {
      boundXmin = boundX[0];
      boundXmax = boundX[1];
    };
    /**
     * Update boundY value
     * @public
     * @param {Number[]} boundY
     */


    this.setBoundY = function (boundY) {
      boundYmin = boundY[0];
      boundYmax = boundY[1];
    };
    /**
     * Executes the update function
     */


    function callUpdateCallback() {
      updateCallback.call(sourceEl, targetX, targetY);
    }
    /**
     * Creates a custom normalized event object from touch and mouse events
     * @param  {Event} ev
     * @returns {Object} with x, y, and id properties
     */


    function normalizeEvent(ev) {
      if (ev.type === 'touchmove' || ev.type === 'touchstart' || ev.type === 'touchend') {
        var touch = ev.targetTouches[0] || ev.changedTouches[0];
        return {
          x: touch.clientX,
          y: touch.clientY,
          id: touch.identifier
        };
      } else {
        // mouse events
        return {
          x: ev.clientX,
          y: ev.clientY,
          id: null
        };
      }
    }
    /**
     * Initializes movement tracking
     * @param  {Object} ev Normalized event
     */


    function onDown(ev) {
      var event = normalizeEvent(ev);

      if (!pointerActive && !paused) {
        pointerActive = true;
        decelerating = false;
        pointerId = event.id;
        pointerLastX = pointerCurrentX = event.x;
        pointerLastY = pointerCurrentY = event.y;
        trackingPoints = [];
        addTrackingPoint(pointerLastX, pointerLastY); // @see https://developers.google.com/web/updates/2017/01/scrolling-intervention

        document.addEventListener('touchmove', onMove, getPassiveSupported() ? {
          passive: false
        } : false);
        document.addEventListener('touchend', onUp);
        document.addEventListener('touchcancel', stopTracking);
        document.addEventListener('mousemove', onMove, getPassiveSupported() ? {
          passive: false
        } : false);
        document.addEventListener('mouseup', onUp);
      }
    }
    /**
     * Handles move events
     * @param  {Object} ev Normalized event
     */


    function onMove(ev) {
      ev.preventDefault();
      var event = normalizeEvent(ev);

      if (pointerActive && event.id === pointerId) {
        pointerCurrentX = event.x;
        pointerCurrentY = event.y;
        addTrackingPoint(pointerLastX, pointerLastY);
        requestTick();
      }
    }
    /**
     * Handles up/end events
     * @param {Object} ev Normalized event
     */


    function onUp(ev) {
      var event = normalizeEvent(ev);

      if (pointerActive && event.id === pointerId) {
        stopTracking();
      }
    }
    /**
     * Stops movement tracking, starts animation
     */


    function stopTracking() {
      pointerActive = false;
      addTrackingPoint(pointerLastX, pointerLastY);
      startDecelAnim();
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onUp);
      document.removeEventListener('touchcancel', stopTracking);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('mousemove', onMove);
    }
    /**
     * Records movement for the last 100ms
     * @param {number} x
     * @param {number} y [description]
     */


    function addTrackingPoint(x, y) {
      var time = Date.now();

      while (trackingPoints.length > 0) {
        if (time - trackingPoints[0].time <= 100) {
          break;
        }

        trackingPoints.shift();
      }

      trackingPoints.push({
        x,
        y,
        time
      });
    }
    /**
     * Calculate new values, call update function
     */


    function updateAndRender() {
      var pointerChangeX = pointerCurrentX - pointerLastX;
      var pointerChangeY = pointerCurrentY - pointerLastY;
      targetX += pointerChangeX * multiplier;
      targetY += pointerChangeY * multiplier;

      if (bounce) {
        let diff = checkBounds();

        if (diff.x !== 0) {
          targetX -= pointerChangeX * dragOutOfBoundsMultiplier(diff.x) * multiplier;
        }

        if (diff.y !== 0) {
          targetY -= pointerChangeY * dragOutOfBoundsMultiplier(diff.y) * multiplier;
        }
      } else {
        checkBounds(true);
      }

      callUpdateCallback();
      pointerLastX = pointerCurrentX;
      pointerLastY = pointerCurrentY;
      ticking = false;
    }
    /**
     * Returns a value from around 0.5 to 1, based on distance
     * @param {Number} val
     */


    function dragOutOfBoundsMultiplier(val) {
      return 0.000005 * Math.pow(val, 2) + 0.0001 * val + 0.55;
    }
    /**
     * prevents animating faster than current framerate
     */


    function requestTick() {
      if (!ticking) {
        requestAnimFrame(updateAndRender);
      }

      ticking = true;
    }
    /**
     * Determine position relative to bounds
     * @param {Boolean} restrict Whether to restrict target to bounds
     */


    function checkBounds(restrict) {
      var xDiff = 0;
      var yDiff = 0;

      if (boundXmin !== undefined && targetX < boundXmin) {
        xDiff = boundXmin - targetX;
      } else if (boundXmax !== undefined && targetX > boundXmax) {
        xDiff = boundXmax - targetX;
      }

      if (boundYmin !== undefined && targetY < boundYmin) {
        yDiff = boundYmin - targetY;
      } else if (boundYmax !== undefined && targetY > boundYmax) {
        yDiff = boundYmax - targetY;
      }

      if (restrict) {
        if (xDiff !== 0) {
          targetX = xDiff > 0 ? boundXmin : boundXmax;
        }

        if (yDiff !== 0) {
          targetY = yDiff > 0 ? boundYmin : boundYmax;
        }
      }

      return {
        x: xDiff,
        y: yDiff,
        inBounds: xDiff === 0 && yDiff === 0
      };
    }
    /**
     * Initialize animation of values coming to a stop
     */


    function startDecelAnim() {
      var firstPoint = trackingPoints[0];
      var lastPoint = trackingPoints[trackingPoints.length - 1];
      var xOffset = lastPoint.x - firstPoint.x;
      var yOffset = lastPoint.y - firstPoint.y;
      var timeOffset = lastPoint.time - firstPoint.time;
      var D = timeOffset / 15 / multiplier;
      decVelX = xOffset / D || 0; // prevent NaN

      decVelY = yOffset / D || 0;
      var diff = checkBounds();

      if (Math.abs(decVelX) > 1 || Math.abs(decVelY) > 1 || !diff.inBounds) {
        decelerating = true;
        requestId = requestAnimFrame(stepDecelAnim);
      }
    }
    /**
     * Animates values slowing down
     */


    function stepDecelAnim() {
      if (!decelerating) {
        return;
      }

      decVelX *= friction;
      decVelY *= friction;
      targetX += decVelX;
      targetY += decVelY;
      var diff = checkBounds();

      if (Math.max(Math.abs(decVelX), 0.002) === 0.002 || Math.max(Math.abs(decVelY), 0.002) === 0.002) {
        window.cancelAnimationFrame(requestId);
        callbackEnd.call(sourceEl, targetX, targetY);
        return;
      }

      if (Math.abs(decVelX) > stopThreshold || Math.abs(decVelY) > stopThreshold || !diff.inBounds) {
        if (bounce) {
          let reboundAdjust = 2.5;

          if (diff.x !== 0) {
            if (diff.x * decVelX <= 0) {
              decVelX += diff.x * bounceDeceleration;
            } else {
              let adjust = diff.x > 0 ? reboundAdjust : -reboundAdjust;
              decVelX = (diff.x + adjust) * bounceAcceleration;
            }
          }

          if (diff.y !== 0) {
            if (diff.y * decVelY <= 0) {
              decVelY += diff.y * bounceDeceleration;
            } else {
              let adjust = diff.y > 0 ? reboundAdjust : -reboundAdjust;
              decVelY = (diff.y + adjust) * bounceAcceleration;
            }
          }
        } else {
          if (diff.x !== 0) {
            if (diff.x > 0) {
              targetX = boundXmin;
            } else {
              targetX = boundXmax;
            }

            decVelX = 0;
          }

          if (diff.y !== 0) {
            if (diff.y > 0) {
              targetY = boundYmin;
            } else {
              targetY = boundYmax;
            }

            decVelY = 0;
          }
        }

        callUpdateCallback();
        requestId = requestAnimFrame(stepDecelAnim);
      } else {
        window.cancelAnimationFrame(requestId);
        callbackEnd.call(sourceEl, targetX, targetY);
        decelerating = false;
      }
    }
  }

}
/**
 * @see http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
 */

const requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}();

function getPassiveSupported() {
  let passiveSupported = false;

  try {
    var options = Object.defineProperty({}, "passive", {
      get: function () {
        passiveSupported = true;
      }
    });
    window.addEventListener("test", null, options);
  } catch (err) {}

  getPassiveSupported = () => passiveSupported;

  return passiveSupported;
}

/***/ }),

/***/ "./patterns/scripts/ui/vto/Components/Makeup/index.jsx":
/*!*************************************************************!*\
  !*** ./patterns/scripts/ui/vto/Components/Makeup/index.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../modules/fetch */ "./patterns/scripts/modules/fetch.js");
/* harmony import */ var _Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Close */ "./patterns/scripts/ui/vto/Components/Close.jsx");
/* harmony import */ var _IntensitySwitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../IntensitySwitch */ "./patterns/scripts/ui/vto/Components/IntensitySwitch.jsx");
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Cart */ "./patterns/scripts/ui/vto/Components/Cart.jsx");
/* harmony import */ var _modules_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../modules/notifier */ "./patterns/scripts/modules/notifier.js");
/* harmony import */ var _impetus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./impetus */ "./patterns/scripts/ui/vto/Components/Makeup/impetus.js");
/* harmony import */ var _QuickAddToBag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./QuickAddToBag */ "./patterns/scripts/ui/vto/Components/Makeup/QuickAddToBag.jsx");
/* harmony import */ var _AddedToBag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AddedToBag */ "./patterns/scripts/ui/vto/Components/Makeup/AddedToBag.jsx");
/* harmony import */ var _Redux_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Redux/actions */ "./patterns/scripts/ui/vto/Redux/actions.js");
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Error */ "./patterns/scripts/ui/vto/Components/Error.jsx");
/* harmony import */ var _lib_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../lib/selectors */ "./patterns/scripts/lib/selectors.js");
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../lib/config */ "./patterns/scripts/lib/config.js");
/* harmony import */ var _ButtonWishList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ButtonWishList */ "./patterns/scripts/ui/vto/Components/ButtonWishList.jsx");
/* harmony import */ var _lib_events__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../lib/events */ "./patterns/scripts/lib/events/index.js");
/* harmony import */ var _cto_Components_photoCapture__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../cto/Components/photoCapture */ "./patterns/scripts/ui/cto/Components/photoCapture.jsx");
/* harmony import */ var ui_cto_Components_cameraIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ui/cto/Components/cameraIcon */ "./patterns/scripts/ui/cto/Components/cameraIcon.jsx");
/* harmony import */ var ui_cto_Components_ctoContext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ui/cto/Components/ctoContext */ "./patterns/scripts/ui/cto/Components/ctoContext.jsx");
/* harmony import */ var _cto_Components_countdownTimer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../cto/Components/countdownTimer */ "./patterns/scripts/ui/cto/Components/countdownTimer.jsx");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../lib/helpers */ "./patterns/scripts/lib/helpers.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => state)(class Makeup extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "width", 640);

    _defineProperty(this, "height", 480);

    _defineProperty(this, "lastProduct", null);

    _defineProperty(this, "previousIntensity", null);

    _defineProperty(this, "variantNodes", []);

    _defineProperty(this, "variantList", null);

    _defineProperty(this, "observers", []);

    _defineProperty(this, "interceptor", null);

    _defineProperty(this, "requestId", null);

    _defineProperty(this, "timeout", null);

    _defineProperty(this, "windowResized", false);

    _defineProperty(this, "productFirstImage", Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.product-details__media .carousel__slide #pdp-image-0-0>img'));

    _defineProperty(this, "_componentIsMounted", false);

    _defineProperty(this, "_firstSlideElId", null);

    _defineProperty(this, "disableScroll", null);

    _defineProperty(this, "screenHeightDifference", false);

    _defineProperty(this, "windowHeight", 0);

    _defineProperty(this, "isItChrome", Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_21__["identifyBrowser"])().includes('Chrome'));

    _defineProperty(this, "isPortraitView", Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_21__["isPortrait"])());

    _defineProperty(this, "setVariantListRef", node => {
      this.variantList = node;
    });

    _defineProperty(this, "setInterceptorRef", node => {
      this.interceptor = node;
    });

    _defineProperty(this, "onResize", () => {
      const iFrame = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('#YMK-module-iframe', this.container);

      if (iFrame && iFrame.contentWindow.document) {
        if (Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_21__["isiOS"])() && Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_21__["isMobile"])()) {
          if (this.state.windowWidth !== window.innerWidth) {
            this.setCanvasDimensionsOnResize();
          }
        } else if (!(this.isItChrome && Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_21__["isWideScreen"])() && this.windowHeight - window.innerHeight < 80 && window.innerWidth == this.state.windowWidth)) {
          // 80 in case download notification is visible on Chrome
          this.setCanvasDimensionsOnResize();
        }

        this.windowResized = true;
      }

      const viewSwitched = Math.max(window.innerWidth, this.state.windowWidth) > 960 && Math.min(window.innerWidth, this.state.windowWidth) <= 960;
      this.windowHeight = window.innerHeight;
      const rotationValue = this.state.enableLandscapeError && (window.matchMedia("(orientation:portrait)").matches != this.isPortraitView || viewSwitched);
      this.setState({
        windowWidth: window.innerWidth,
        showRotationError: rotationValue
      });

      if (rotationValue && window.innerWidth != this.state.windowWidth) {
        const {
          dispatch
        } = this.props;
        this.close(dispatch, true);
      }
    });

    _defineProperty(this, "setWishListState", () => {
      // dom is changing after changing the product
      const buttonWishListDesktop = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.product-details__flags button');

      if (buttonWishListDesktop) {
        const dataWishList = buttonWishListDesktop.dataset;
        const analytics = JSON.parse(dataWishList.trackWishlist);
        this.state.vtoWishlist = {
          accessibility: {
            textActive: dataWishList.textActive,
            textInactive: dataWishList.textInactive
          },
          analytics: {},
          textActive: dataWishList.textWishlistActive,
          textInactive: dataWishList.textWishlistInactive
        };
      }
    });

    _defineProperty(this, "getFrameHeight", () => {
      const vtoContainer = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.vto__container');
      const vto_wrapper = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.vto__wrapper');

      if (vtoContainer && vto_wrapper) {
        return Math.min(vtoContainer.getBoundingClientRect().height, vto_wrapper.getBoundingClientRect().height);
      }
    });

    _defineProperty(this, "setCameraPosition", () => {
      const cameraIcon = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.pdp-camera .camera-icon');
      const vto_wrapper = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.vto__wrapper');
      const vto_container = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.vto__container');

      if (cameraIcon && vto_wrapper && vto_container) {
        const frameHeight = this.getFrameHeight();
        let addedTop = 0;

        if (frameHeight != 0) {
          cameraIcon.style.top = 'auto';
          addedTop = frameHeight - (vto_wrapper.offsetHeight > vto_container.offsetHeight ? 0 : 76);
          cameraIcon.style.marginTop = "".concat(addedTop, "px");
        }

        const cameraIconRect = cameraIcon.getBoundingClientRect();
        const vto_wrapperRect = vto_wrapper.getBoundingClientRect();
        const vto_containerRect = vto_container.getBoundingClientRect();
        const minHeightContainer = vto_wrapper.offsetHeight > vto_container.offsetHeight ? vto_containerRect : vto_wrapperRect;

        if (cameraIconRect.bottom > minHeightContainer.bottom) {
          cameraIcon.style.marginTop = "".concat(addedTop - 20 - (cameraIconRect.bottom - minHeightContainer.bottom), "px");
        }
      }
    });

    _defineProperty(this, "toggleTopContainerClass", selector => {
      const selectedElem = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])(selector);
      const vto_wrapper = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.vto__wrapper');
      selectedElem && selectedElem.classList.toggle('topContainer', vto_wrapper && vto_wrapper.offsetTop < 0);
    });

    _defineProperty(this, "setCanvasDimensionsOnResize", () => {
      const iFrame = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('#YMK-module-iframe', this.container).contentWindow.document;
      const canvas = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('#canvas', iFrame);
      const {
        width,
        height
      } = window.getComputedStyle(Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('#YMK-module'));
      const iframeContent = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.frame-content>div', iFrame);
      iframeContent.style.height = height;
      iframeContent.style.width = width;
      const iFrameCanvas = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('#YMK-module');
      const vtoContainer = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.vto__container--inner');

      if (iFrameCanvas && vtoContainer) {
        const iframeCanvasRect = iFrameCanvas.getBoundingClientRect();
        const iframeComputedStyles = getComputedStyle(iFrameCanvas);
        const frameMargin = parseFloat(iframeComputedStyles.marginLeft);
        this.setState({
          canvasWidth: iframeCanvasRect.width + frameMargin + 'px',
          canvasHeight: this.getFrameHeight() + 'px',
          imageWidth: iframeCanvasRect.width + frameMargin + 'px',
          ...(iframeCanvasRect.height != 0 && {
            imageHeight: iframeCanvasRect.height + 'px'
          })
        });
      }

      if (canvas) {
        const scale = Math.max(parseInt(width, 10) / parseInt(canvas.style.width.replace('px', ''), 10), parseInt(height, 10) / parseInt(canvas.style.height.replace('px', ''), 10));
        canvas.style.position = 'absolute';
        canvas.style.left = '50%';
        canvas.style.top = '50%';
        canvas.style.transform = "translate3d(-50%, -50%, 0) scale(".concat(scale, ")");
      }

      const isMobile = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_21__["isMobileScreen"])();
      const pictureContainer = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.photo_container');

      if (pictureContainer) {
        this.toggleTopContainerClass('.vto__picture');

        if (!Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_21__["isPortrait"])()) {
          if (pictureContainer) {
            pictureContainer.classList.add('mobile_Landscape');
            pictureContainer.classList.remove('mobile_potrait');
          }
        } else if (isMobile) {
          if (pictureContainer.classList.contains('mobile_Landscape')) {
            pictureContainer.classList.remove('mobile_Landscape');
          }

          pictureContainer.classList.add('mobile_potrait');
        } else {
          pictureContainer.classList.remove('mobile_Landscape');
        }
      }

      if (!(this.state.showTimer || this.state.showPicture)) {
        this.adjust();
      }

      this.setCameraPosition();
      _lib_events__WEBPACK_IMPORTED_MODULE_16__["Manager"].publish(_lib_events__WEBPACK_IMPORTED_MODULE_16__["VTO_PDP_STYLE_UPDATE"]);
    });

    _defineProperty(this, "a11yOnVideoElem", () => {
      const ymkContainer = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('#YMK-module');
      const videoElem = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('#YMK-video-input', ymkContainer);

      if (this.state.showPicture || this.state.showTimer) {
        videoElem.setAttribute('tabindex', '-1');
      } else {
        videoElem.removeAttribute('tabindex');
      }
    });

    _defineProperty(this, "adjust", () => {
      let {
        left = 0,
        selectedFirstTime,
        shadeChanged
      } = this.state,
          interceptorPos = this.interceptor.getBoundingClientRect(),
          selectedPos = this.variantNodes.length > 0 ? this.variantNodes[this.getSelectedIndex()].getBoundingClientRect() : 0,
          interceptorCenter = interceptorPos.left + interceptorPos.width / 2;

      if (shadeChanged) {
        left += interceptorCenter - (selectedPos.left + selectedPos.width / 2);
        left = Math.floor(left);
        this.setState({
          left,
          animate: true,
          shadeChanged: false
        }, () => {
          if (this.impetus) {
            this.impetus.setValues(left, left);
          }
        });
      }

      const shadeImg = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.vto-shade-list .selected>span>img');

      if (shadeImg && selectedFirstTime) {
        shadeImg.setAttribute('tabindex', '-1');
        shadeImg.focus();
      }
    });

    _defineProperty(this, "cameraClicked", e => {
      const iFrame = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('#YMK-module');
      const iFrameHeight = iFrame.getBoundingClientRect().height;
      const isLandscapeView = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_21__["isLandscape"])();
      const isMobileView = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_21__["isMobileScreen"])();

      if (iFrame) {
        const frameMargin = parseFloat(getComputedStyle(iFrame).marginLeft);
        this.setState({
          canvasWidth: iFrame.getBoundingClientRect().width + frameMargin + 'px',
          canvasHeight: this.getFrameHeight() + 'px',
          imageWidth: iFrame.getBoundingClientRect().width + frameMargin + 'px',
          imageHeight: this.getFrameHeight() + 'px'
        });

        if (iFrameHeight > window.innerHeight && (!isLandscapeView || !isMobileView)) {
          const vtoContainer = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.vto__container');

          if (vtoContainer) {
            this.setState({
              imageHeight: vtoContainer.getBoundingClientRect().height + 'px'
            });
          }
        }
      }

      dataLayer.push({
        'eventCategory': 'vto',
        'eventAction': 'take picture on PDP',
        'eventLabel': this.state.code,
        // shade sku value 
        'event': 'uaevent' // associated event 

      });
      this.setState({
        showTimer: true
      }, () => {
        this.toggleTopContainerClass('.count-down');
        this.a11yOnVideoElem();

        if (Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_21__["ctoLandscapeCheck"])()) {
          const scrollContainer = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.vto__container--inner');
          const scroller = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.count-down');

          if (scroller) {
            window.scrollTo(0, scroller.offsetHeight);
          }

          this.disableScroll = new _lib_helpers__WEBPACK_IMPORTED_MODULE_21__["disabledRubberBand"](scrollContainer, scroller);
          this.disableScroll.attach();
        }
      });
    });

    _defineProperty(this, "timerComplete", () => {
      const sdk = window.YMK;
      sdk.snapshot('base64', imgURL => {
        this.setState({
          imgSrc: imgURL,
          showTimer: false,
          showPicture: true
        }, () => {
          this.disableScroll && this.disableScroll.detach();
          this.toggleTopContainerClass('.vto__picture');
        });
      });
    });

    _defineProperty(this, "updateValue", (key, val) => {
      this.setState({
        [key]: val
      });
    });

    _defineProperty(this, "photoCaptureClose", () => {
      const cameraIcon = window.innerWidth > 960 ? Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.camera-icon') : Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.interceptor .camera-icon');
      setTimeout(() => {
        cameraIcon && cameraIcon.focus();
      }, 0);
      this.setState({
        showPicture: false
      }, () => {
        this.setCanvasDimensionsOnResize();
        this.a11yOnVideoElem();
      });
    });

    this.state = {
      code: this.props.variants.findIndex(v => v.selected).code || this.props.product.code,
      sellableOnline: this.props.product.sellableOnline,
      showCTA: true,
      quickAdd: true,
      showCart: true,
      unavailableMsgFlag: false,
      showUnavailableMsg: /(SOLD_OUT|OUT_STOCK)/g.test(this.props.product.stock.stockLevel),
      errorNotificationClosed: false,
      shadeChanged: true,
      productTitle: Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.product-details__title', document.body).innerText,
      is4Ombres: false,
      windowWidth: window.innerWidth,
      wishlistData: this.props.product.wishlistData,
      showCTOpicture: false,
      showTimer: false,
      showPicture: false,
      canvasWidth: 0,
      canvasHeight: 0,
      imageWidth: 0,
      imageHeight: 0,
      imgSrc: '',
      cameraAvailable: true,
      showRotationError: window.matchMedia("(orientation:portrait)").matches != Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_21__["isPortrait"])(),
      enableLandscapeError: true
    };
    this.setWishListState();
    this.mobileCameraIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createRef();
    this.desktopCameraIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createRef();
  }

  componentDidMount() {
    const {
      dispatch,
      sdk
    } = this.props;
    this._componentIsMounted = true;
    sdk.addEventListener('loaded', () => {
      this.retrySetup();
      const vtoContainer = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.vto__container');
      if (vtoContainer && !vtoContainer.className.includes('vto-window-resized')) vtoContainer.className += " vto-window-resized";
      this.initialCanvas();
      this.setState({
        showCTOpicture: true
      }, () => {
        this.setCameraPosition();
      });

      if (Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_21__["isMobile"])()) {
        setTimeout(() => {
          window.scrollTo(0, 1);
        }, 0);
      }
    });
    sdk.addEventListener('liveCam', () => {
      Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_11__["cameraErrorResolvedAction"])({
        dispatch
      });
      const vtoIframe = this.container.querySelector('#YMK-module-iframe');
      vtoIframe.setAttribute('aria-hidden', 'true');
      vtoIframe.setAttribute('title', "".concat(_lib_config__WEBPACK_IMPORTED_MODULE_14__["default"].locales.vto.iframe));
    });
    sdk.addEventListener('noCamera', () => {
      Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_11__["vtoCameraNotAvailableAction"])({
        dispatch
      });
      this.setState({
        cameraAvailable: false
      });
    });
    sdk.addEventListener('invalidProduct', () => {
      if (!this.state.notify && this._componentIsMounted) {
        this.setState({
          notify: true
        });
        _modules_notifier__WEBPACK_IMPORTED_MODULE_7__["default"].show({
          message: window.config.vto.labels.invalid || window.config.vto.labels.unavailableShade,
          name: window.config.vto.labels.invalid || '',
          close: _lib_config__WEBPACK_IMPORTED_MODULE_14__["default"].vto.makeup.closeButtonLabel || '',
          onShow: () => {
            const notificationCloseBtn = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.js-notifier-close', Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.notifier__wrapper'));
            setTimeout(() => notificationCloseBtn.focus(), 30);
          },
          onHide: () => {
            this.setState({
              notify: false
            });
            const li = this.variantNodes[this.getSelectedIndex()];
            const vtoVariantShades = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["selectAll"])('.vto-variant-shade', Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.interceptor'));

            if (li) {
              li.setAttribute('tabindex', '-1');
              li.focus();
            }

            if (vtoVariantShades) {
              vtoVariantShades.forEach(el => {
                if (!el.getAttribute('aria-hidden')) {
                  const imgEl = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('img', el);
                  imgEl.setAttribute('tabindex', '0');
                }
              });
            }
          }
        });
      }

      sdk.reset();
      this.setState({
        showCTOpicture: false
      });
    });
    const {
      width,
      height
    } = this.container.getBoundingClientRect();
    this.adjust();
    sdk.init({
      hideUI: true,
      width,
      height,
      autoOpen: true
    });
    this.windowHeight = window.innerHeight;
    _lib_events__WEBPACK_IMPORTED_MODULE_16__["Manager"].subscribe(_lib_events__WEBPACK_IMPORTED_MODULE_16__["WINDOW_WAS_RESIZED"], this.onResize);

    if (this.productFirstImage) {
      this.productFirstImage.style.visibility = 'hidden';
    }

    if (this.state.productTitle && this.state.productTitle.toLowerCase().includes("les 4 ombres")) {
      this.setState({
        is4Ombres: true
      });
    }

    const initalDimensionInterval = setInterval(() => {
      this.initialFrameDimensions(initalDimensionInterval);
    }, 100);
  }

  initialFrameDimensions(initalDimensionInterval) {
    const iFrame = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('#YMK-module-iframe', this.container);

    if (iFrame && iFrame.contentWindow.document) {
      const iFrame = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('#YMK-module-iframe', this.container).contentWindow.document;
      const {
        width,
        height
      } = window.getComputedStyle(Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('#YMK-module'));
      Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.frame-content>div', iFrame).style.height = height;
      Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.frame-content>div', iFrame).style.width = width;
      clearInterval(initalDimensionInterval);
    }
  }

  initialCanvas() {
    const iFrame = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('#YMK-module-iframe', this.container).contentWindow.document;
    const canvas = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('#canvas', iFrame);

    if (canvas) {
      canvas.style.opacity = 0;
      setTimeout(() => {
        const iFrame = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('#YMK-module-iframe', this.container).contentWindow.document;
        const canvas = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('#canvas', iFrame);
        const {
          width,
          height
        } = window.getComputedStyle(Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('#YMK-module'));

        if (canvas) {
          const scale = Math.max(parseInt(width, 10) / parseInt(canvas.style.width.replace('px', ''), 10), parseInt(height, 10) / parseInt(canvas.style.height.replace('px', ''), 10));
          canvas.style.position = 'absolute';
          canvas.style.left = '50%';
          canvas.style.top = '50%';
          canvas.style.transform = "translate3d(-50%, -50%, 0) scale(".concat(scale, ")");
          canvas.style.opacity = 1;
        }
      }, 500);
    }
  }

  async close(dispatch) {
    let forcedClosed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const {
      sdk
    } = this.props;

    try {
      let test = true;
      if (this.requestId) window.cancelAnimationFrame(this.requestId);
      !forcedClosed && Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_11__["vtoSDKCloseAction"])({
        dispatch
      });
      Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_11__["vtoCloseClickAction"])({
        dispatch
      });
      Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.vto__container--inner').style.display = 'none';
      const firstSlideEl = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('button', Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["getCollection"])('.js-slide', Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.product-details__container'))[0]);

      if (firstSlideEl && this._firstSlideElId) {
        firstSlideEl.id = this._firstSlideElId;
      }

      while (test) {
        const iFrame = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('#YMK-module-iframe', this.container);
        const canvas = iFrame && (Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('#canvas', iFrame.contentWindow.document) || Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.frame-content', iFrame.contentWindow.document)) || null;
        await new Promise(resolve => {
          setTimeout(() => {
            if (canvas || !!Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])(".permissionDenied", Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.vto__container--inner'))) {
              if (!Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])(".permissionDenied", Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.vto__container--inner'))) {
                !forcedClosed && sdk.close();
              }

              window.vtoClose(forcedClosed);
              test = false;
            }

            resolve();
          }, 200);
        });
      }
    } catch (e) {
      console.error(e);
    }

    const product_detail_scroll = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.product-details .product-details-scroll');

    if (product_detail_scroll) {
      product_detail_scroll.style.visibility = 'visible';
    }
  }

  retrySetup() {
    const {
      dispatch,
      sdk,
      showing
    } = this.props;

    if (sdk && showing && this._componentIsMounted) {
      this.show();
      Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_11__["vtoReadyAction"])({
        dispatch
      });

      if (this.container) {
        const vtoIframe = this.container.querySelector('#YMK-module-iframe');
        vtoIframe.setAttribute('aria-hidden', 'true');
        vtoIframe.setAttribute('tabindex', '-1');
        vtoIframe.setAttribute('title', "".concat(_lib_config__WEBPACK_IMPORTED_MODULE_14__["default"].locales.vto.iframe));
      }
    }
  }

  renderAddToBag() {
    const {
      product
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("span", null, this.state.quickAdd ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_QuickAddToBag__WEBPACK_IMPORTED_MODULE_9__["default"], {
      quickAddToBag: () => this.quickAddToBag(product)
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_AddedToBag__WEBPACK_IMPORTED_MODULE_10__["default"], null));
  }

  renderCartIcon() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", null, this.state.quickAdd ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_Cart__WEBPACK_IMPORTED_MODULE_6__["default"], {
      hasProduct: ""
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_Cart__WEBPACK_IMPORTED_MODULE_6__["default"], {
      hasProduct: "already-has-product"
    }));
  }

  getRightNav() {
    const {
      showCTA,
      showCart
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", {
      className: "nav-right"
    }, showCTA ? this.renderAddToBag() : '', showCart ? this.renderCartIcon() : '');
  }

  renderWishListIcon() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_ButtonWishList__WEBPACK_IMPORTED_MODULE_15__["default"], {
      codeProduct: this.state.code,
      accessibility: this.state.vtoWishlist.accessibility,
      analytics: this.state.vtoWishlist.analytics,
      textActive: this.state.vtoWishlist.textActive,
      textInactive: this.state.vtoWishlist.textInactive,
      wishlistData: this.state.wishlistData
    }));
  }

  getLeftNav() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("ul", {
      className: "nav-left"
    }, this.renderWishListIcon());
  }

  getUnavailableMessage() {
    return this.state.showUnavailableMsg && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("ul", {
      className: "nav-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("button", {
      className: "button nav-item",
      "aria-disabled": "true"
    }, _lib_config__WEBPACK_IMPORTED_MODULE_14__["default"].locales.vto.unavailable)));
  }

  notifyError(error) {
    _modules_notifier__WEBPACK_IMPORTED_MODULE_7__["default"].show({
      message: error || window.config.vto.labels.limitationError,
      name: window.config.vto.labels.quickAddToBagError || '',
      close: window.config.vto.labels.close + ' ' + window.config.vto.labels.quickAddToBagError || '',
      onHide: () => {
        let productHeading = this.detailsHeader.querySelector('h1.product-details__head');
        let vtoVariantShadeAriaHidden = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["selectAll"])('.vto-variant-shade', Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.interceptor'));

        if (productHeading) {
          productHeading.setAttribute('tabindex', '-1');
          productHeading.focus();
        }

        if (vtoVariantShadeAriaHidden) {
          vtoVariantShadeAriaHidden.forEach(el => {
            if (!el.getAttribute('aria-hidden')) {
              const imgEl = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('img', el);
              imgEl.setAttribute('tabindex', '0');
            }

            if (el.classList.contains('selected')) {
              const imgEl = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('img', el);
              this.setState({
                errorNotificationClosed: true
              }, () => {
                imgEl.setAttribute('tabindex', '0');
                imgEl.focus();
              });
            }
          });
        }
      }
    });
  }

  show() {
    const {
      product
    } = this.props;
    let code = '';

    if (product.basic.is4ShadowProduct && product.is4ShadowFeatureFlipping) {
      code = product.mainSku;
      YMK.applyMakeupBySku(code);
    } else {
      code = product.code;
      YMK.applyMakeupBySku(code);
    }

    this.lastProduct = code;
  }

  toggleIntensity(sku, type) {
    YMK.applyMakeupBySku(sku);
    dataLayer.push({
      'eventCategory': 'vto',
      'eventAction': 'change intensity',
      'eventLabel': type,
      'event': 'uaevent'
    });
  }

  componentDidUpdate() {
    const {
      showing,
      product,
      variants
    } = this.props;

    if (this.lastProduct !== product.code && showing && this.lastProduct !== this.previousIntensity) {
      this.previousIntensity = this.lastProduct;
      this.show();
    }

    if (!this.impetus || this.windowResized && !(this.state.showTimer || this.state.showPicture)) {
      if (this.windowResized) {
        this.impetus = this.impetus.destroy();
        this.windowResized = false;
      }

      const pos = this.variantList.getBoundingClientRect(),
            centerInterceptorPos = this.interceptor.getBoundingClientRect(); // Listen for scroll events

      this.impetus = new _impetus__WEBPACK_IMPORTED_MODULE_8__["default"]({
        source: this.variantList,
        initialValues: [this.state.left, pos.top],
        boundY: [pos.bottom, pos.bottom],
        boundX: [-pos.width + pos.width / variants.length, 100],
        update: left => {
          if (Math.round(left) === this.state.left) return;
          this.setState({
            left: Math.round(left),
            animate: false
          });
        },
        onEnd: () => {
          let center = centerInterceptorPos.width / 2 + centerInterceptorPos.left,
              closestDistance = null,
              shouldSelectIndex = this.getSelectedIndex();
          this.variantNodes.forEach((ch, index) => {
            let pos = ch.getBoundingClientRect(),
                minDistance = Math.min(Math.abs(pos.left - center), Math.abs(pos.right - center));

            if (minDistance < closestDistance || !closestDistance) {
              closestDistance = minDistance;
              shouldSelectIndex = index;
            }
          });
          this.setWishListState();
          this.setState({
            code: variants[shouldSelectIndex].code
          }, () => {
            setTimeout(() => {
              this.select(this.state.code);
            }, 100);
          });
        }
      });
    }
  }

  getSelectedIndex() {
    return this.props.variants.findIndex(v => v.code === this.state.code);
  }

  componentWillReceiveProps(newProps) {
    const {
      vto,
      code
    } = newProps.product;

    if (vto && vto !== this.props.product.vto) {
      const product = newProps.product;

      if (product.basic.is4ShadowProduct && product.is4ShadowFeatureFlipping) {
        YMK.applyMakeupBySku(product.mainSku);
      } else {
        YMK.applyMakeupBySku(code);
      }

      this.setState({
        showCTOpicture: true
      });
    }

    this.setState({
      code
    }, () => this.adjust());

    if (newProps.ready && this._firstSlideElId === null) {
      const firstSlideEl = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('button', Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["getCollection"])('.js-slide', Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.product-details__container'))[0]);

      if (firstSlideEl) {
        const vtoContainerInnerEl = Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.vto__container--inner.makeup', Object(_lib_selectors__WEBPACK_IMPORTED_MODULE_13__["select"])('.vto__container'));

        if (vtoContainerInnerEl) {
          this._firstSlideElId = firstSlideEl.id;
          vtoContainerInnerEl.id = firstSlideEl.id;
          firstSlideEl.id = '';
        }
      }
    }
  }

  componentWillUnmount() {
    if (this.observers && this.observers.length) {
      this.observers.forEach((observer, index) => observer.unobserve(this.variantNodes[index]));
    }

    if (this.impetus) {
      this.impetus = this.impetus.destroy();
    }

    document.body.classList.remove('vto-makeup');
    document.body.removeAttribute('style');

    if (this.productFirstImage) {
      this.productFirstImage.style.visibility = '';
    }

    const {
      sdk
    } = this.props;
    const events = ['loaded', 'liveCam', 'noCamera', 'invalidProduct'];
    events.forEach(e => {
      sdk.removeEventListener(e);
    });
    this._componentIsMounted = false;
    _lib_events__WEBPACK_IMPORTED_MODULE_16__["Manager"].unsubscribe(_lib_events__WEBPACK_IMPORTED_MODULE_16__["WINDOW_WAS_RESIZED"], this.onResize);
  }

  select(code) {
    if (this.props.product.code !== code) {
      this.setState({
        quickAdd: true,
        showCTA: true,
        showCart: true,
        unavailableMsgFlag: false,
        selectedFirstTime: true,
        shadeChanged: true,
        sellableOnline: this.props.product.sellableOnline
      }, () => onVariantChange(code));
    }
  }

  quickAddToBag(product) {
    const atbTemplate = "<button type=\"submit\"></button>\n        <input type=\"hidden\" name=\"qty\" value=\"1\" />\n        <input type=\"hidden\" name=\"productCodePost\" value=\"".concat(product.code, "\" />\n        <input type=\"hidden\" name=\"ctaStatus\" value=\"").concat(product.stock.stockLevel, "\" />\n        <input type=\"hidden\" name=\"CSRFToken\" value=\"").concat(ACC.config.CSRFToken, "\" />");
    const form = document.createElement('form');
    form.innerHTML = atbTemplate;
    form.classList.add = 'js-addToBag';
    form.setAttribute('action', _lib_config__WEBPACK_IMPORTED_MODULE_14__["default"].webservices.cart.add);
    form.setAttribute('method', 'post');
    _modules_fetch__WEBPACK_IMPORTED_MODULE_3__["submit"](form).then(response => {
      const analyticsJson = {
        "eventLabel": dataLayer[0].ecommerce.detail.products[0].name,
        "ecommerce": {
          "add": {
            "products": [dataLayer[0].ecommerce.detail.products[0]]
          },
          "currencyCode": dataLayer[0].currencyCode
        },
        "event": "uaevent",
        "eventCategory": "add to cart",
        "eventAction": "VTO quickAdd",
        "cartid": response.cart_id,
        "cartValue": response.cartValue
      };
      dataLayer.push(analyticsJson);
      this.setState({
        quickAdd: !this.state.quickAdd,
        showCart: true,
        unavailableMsgFlag: false
      });
    }).catch(err => {
      if (err.statusCode === 403) {
        if (err.stock.stockLevel === 'OUT_STOCK') {
          this.setState({
            sellableOnline: false,
            showCart: false
          });
          this.setState({
            unavailableMsgFlag: true,
            showUnavailableMsg: true
          });
        } else {
          this.setState(prevState => ({
            showCTA: !prevState.showCTA
          }));
          this.notifyError(err.formError);
          this.setState({
            unavailableMsgFlag: false,
            showUnavailableMsg: false
          });
        }
      }
    });
  }

  renderVariants() {
    let selectedVariant = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let {
      variants = []
    } = this.props,
        {
      code,
      left,
      animate = false
    } = this.state;
    let style = {
      transform: "translateX(".concat(left, "px) translateZ(0px)")
    };

    let selectedIndex = this.getSelectedIndex(),
        visible = i => i < selectedIndex + 3 && i > selectedIndex - 3,
        isPrevious = i => visible(i) && i >= 0 && i < selectedIndex,
        isNext = i => visible(i) && i <= variants.length - 1 && i > selectedIndex;

    let els = variants.map((li, index) => {
      let selected = code === li.code,
          spanClassName = '',
          ariaProperties = {},
          imgProperties = {
        src: li.shade.src,
        srcSet: li.shade.srcSet,
        onKeyDown: e => {
          if (e.keyCode === 13 || e.keyCode === 32) {
            if (this.props.product.code === li.code) {
              this.mobileCameraIcon.current && this.mobileCameraIcon.current.props.click();
            }

            this.select(li.code);
          }
        },
        onClick: e => {
          e.preventDefault();
          this.select(li.code);
        },
        role: 'button'
      },
          liClsName = 'vto-variant-shade';

      if (selected) {
        imgProperties = { ...imgProperties,
          alt: "".concat(window.config.vto.makeup.variantSelector.selected, ": ").concat(li.text.toLowerCase()),
          tabIndex: "-1"
        };
        liClsName += ' selected';
        ariaProperties['aria-current'] = true;
      } else if (isPrevious(index)) {
        imgProperties = { ...imgProperties,
          alt: "".concat(window.config.vto.makeup.variantSelector.previous, ": ").concat(li.text.toLowerCase()),
          tabIndex: "0"
        };
      } else if (isNext(index)) {
        imgProperties = { ...imgProperties,
          alt: "".concat(window.config.vto.makeup.variantSelector.next, ": ").concat(li.text.toLowerCase()),
          tabIndex: "0"
        };
      } else {
        imgProperties = { ...imgProperties,
          alt: ''
        };
        if (!visible(index)) ariaProperties = {
          'aria-hidden': true
        };
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("li", _extends({
        ref: node => this.variantNodes[index] = node,
        className: liClsName,
        key: index
      }, ariaProperties), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("span", _extends({
        className: spanClassName
      }, ariaProperties), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("img", imgProperties)));
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", {
      ref: this.setInterceptorRef,
      className: "interceptor"
    }, _lib_config__WEBPACK_IMPORTED_MODULE_14__["default"].vto.makeup.enableCTOPicturePDP && this.state.showCTOpicture && !this.state.showTimer && this.state.cameraAvailable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(ui_cto_Components_cameraIcon__WEBPACK_IMPORTED_MODULE_18__["default"], {
      ref: this.mobileCameraIcon,
      click: this.cameraClicked,
      cameraMessage: "".concat(window.config.cto.dedicated.cameraText, " ").concat(selectedVariant ? selectedVariant.text : '')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("ul", {
      ref: this.setVariantListRef,
      className: "vto-shade-list ".concat(animate ? 'animate' : ''),
      "data-left": left,
      style: style
    }, els));
  }

  render() {
    const {
      variants = [],
      error,
      product,
      dispatch
    } = this.props;
    let {
      sellableOnline
    } = this.props.product.sellableOnline;
    let {
      unavailableMsgFlag,
      productTitle,
      is4Ombres
    } = this.state;
    let selectedIndex = this.getSelectedIndex(),
        selectedVariant = variants[selectedIndex] || {
      shade: {}
    };
    let polluxCondition = sessionStorage.getItem('nobrand') === 'true';
    const isBoutiqueApp = window.jsConfigSecond.isBoutiqueApp;
    const timerProps = { ...(window.innerWidth > 960 ? {
        'style': {
          width: this.state.canvasWidth,
          height: this.state.canvasHeight
        }
      } : {
        'style': {
          width: window.innerWidth,
          height: Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_21__["isiOS"])() && (Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_21__["isLandscape"])() || window.innerWidth > window.innerHeight) ? '100%' : window.innerHeight + 'px'
        }
      })
    }; // screen.availheight to account for navigation bars in IOS

    const imageProps = { ...(window.innerWidth > 960 ? {
        'style': {
          width: this.state.imageWidth,
          height: this.state.imageHeight
        }
      } : {
        'style': {
          width: this.state.imageWidth,
          height: '100%'
        }
      })
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(ui_cto_Components_ctoContext__WEBPACK_IMPORTED_MODULE_19__["CtoContext"].Provider, {
      value: {
        state: this.state,
        updateValue: this.updateValue
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", {
      className: "vto__wrapper" + (error && error.name ? ' error-no-camera-makeup' : '') + (this.isItChrome ? ' chrome' : ''),
      ref: node => this.outer = node
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", this.state.showTimer || this.state.showPicture ? {
      "hidden": true,
      'aria-hidden': true
    } : {}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_Close__WEBPACK_IMPORTED_MODULE_4__["default"], {
      close: () => this.close(dispatch)
    })), _lib_config__WEBPACK_IMPORTED_MODULE_14__["default"].vto.makeup.enableCTOPicturePDP && this.state.showCTOpicture && !(this.state.showTimer || this.state.showPicture) && this.state.cameraAvailable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", {
      className: "pdp-camera"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(ui_cto_Components_cameraIcon__WEBPACK_IMPORTED_MODULE_18__["default"], {
      click: this.cameraClicked,
      ref: this.desktopCameraIcon,
      cameraMessage: "".concat(window.config.cto.dedicated.cameraText, " ").concat(selectedVariant.text),
      name: "cto_camera_black"
    })), this.state.showTimer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_cto_Components_countdownTimer__WEBPACK_IMPORTED_MODULE_20__["default"], {
      callback: this.timerComplete,
      customProps: timerProps
    }), this.state.showPicture && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_cto_Components_photoCapture__WEBPACK_IMPORTED_MODULE_17__["default"], {
      imgSrc: this.state.imgSrc,
      customProps: imageProps,
      callback: this.photoCaptureClose,
      customClass: "vto__picture",
      backIconName: Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_21__["isDesktopScreen"])() || window.innerWidth > 960 ? 'cto_back_white' : 'cto_back_black'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", this.state.showTimer || this.state.showPicture ? {
      "hidden": true,
      'aria-hidden': true
    } : {}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_IntensitySwitch__WEBPACK_IMPORTED_MODULE_5__["default"], {
      toggleIntensity: this.toggleIntensity,
      product: product,
      ready: this.props.ready,
      width: this.state.windowWidth,
      displayType: "desktop",
      selectedVariant: selectedVariant.text
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", _extends({
      ref: node => this.container = node,
      id: "YMK-module",
      className: "".concat(error && error.type ? 'has-error' : '')
    }, this.state.showTimer || this.state.showPicture ? {
      'aria-hidden': true
    } : {})), error && error.name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_Error__WEBPACK_IMPORTED_MODULE_12__["default"], {
      error: error
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", _extends({
      className: "vto-shade-selector__container"
    }, this.state.showTimer || this.state.showPicture ? {
      "hidden": true,
      'aria-hidden': true
    } : {}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", {
      className: "vto-product-info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("h1", {
      ref: node => this.detailsHeader = node,
      className: "product-details__head"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("span", {
      className: "heading vto-product-info--title "
    }, productTitle)), !isBoutiqueApp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", _extends({
      className: "container"
    }, polluxCondition ? {
      hidden: 'true'
    } : {}), this.getLeftNav(), this.props.product.sellableOnline && !unavailableMsgFlag ? this.getRightNav() : this.getUnavailableMessage()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("p", {
      className: "shade-title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("img", {
      alt: "",
      src: selectedVariant.shade.src,
      srcSet: selectedVariant.shade.srcSet
    }), selectedVariant.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_IntensitySwitch__WEBPACK_IMPORTED_MODULE_5__["default"], {
      toggleIntensity: this.toggleIntensity,
      product: product,
      ready: this.props.ready,
      width: this.state.windowWidth,
      displayType: "mobile",
      selectedVariant: selectedVariant.text
    }), product.sellableOnline ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("p", _extends({
      className: "price"
    }, polluxCondition ? {
      hidden: 'true'
    } : {}), (product.price || '').toString().split('.')[0]) : ''), this.renderVariants(selectedVariant))));
  }

}));

/***/ })

}]);
//# sourceMappingURL=6.js.map?v=3.23