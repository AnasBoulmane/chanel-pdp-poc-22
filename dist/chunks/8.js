(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./patterns/scripts/ui/twilio/Components/carousel.jsx":
/*!************************************************************!*\
  !*** ./patterns/scripts/ui/twilio/Components/carousel.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ "./patterns/scripts/ui/twilio/Components/button.jsx");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var lib_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/helpers */ "./patterns/scripts/lib/helpers.js");
/* harmony import */ var _Utils_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Utils/helper */ "./patterns/scripts/ui/twilio/Utils/helper.js");
/* harmony import */ var _wishListIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wishListIcon */ "./patterns/scripts/ui/twilio/Components/wishListIcon.jsx");
/* harmony import */ var lib_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/selectors */ "./patterns/scripts/lib/selectors.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Icon */ "./patterns/scripts/ui/twilio/Components/Icon.jsx");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.esm.js");





swiper__WEBPACK_IMPORTED_MODULE_4__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_4__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_4__["Navigation"]]);







function Carousel(props) {
  const {
    sharedProductList
  } = props;
  const {
    isBA,
    sharedMsg,
    sharedMsgBA,
    sharedProdCountText,
    addToCartCTA,
    productAddedText,
    productRef,
    carouselPrev,
    carouselNext,
    carouselPager
  } = jsConfigSecond.twilio;
  const [isDesktop, setIsDesktop] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object(lib_helpers__WEBPACK_IMPORTED_MODULE_5__["isDesktopScreen"])());
  const [isMobile, setIsMobile] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object(lib_helpers__WEBPACK_IMPORTED_MODULE_5__["isMobileScreen"])());
  const defaultImg = "".concat(config.theme, "/assets/media/product_default.png");
  const verticalbar_img = "".concat(config.theme, "/assets/media/vertical-bar.png");
  const isBoutiqueApp = window.jsConfigSecond.isBoutiqueApp;
  const prevRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const nextRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const swiperRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  const resizeHandler = () => {
    setIsDesktop(Object(lib_helpers__WEBPACK_IMPORTED_MODULE_5__["isDesktopScreen"])());
    setIsMobile(Object(lib_helpers__WEBPACK_IMPORTED_MODULE_5__["isMobileScreen"])());
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    window.addEventListener('resize', resizeHandler);
    Object(lib_helpers__WEBPACK_IMPORTED_MODULE_5__["focusElement"])(Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('.thankyou__container_heading'));
    afterRenderSwiper(null, 4000);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  const BuildHTML = props => {
    var item = props.carouselItem;
    var index = props.index;

    if (item) {
      const productImages = item.images || item.basic && item.basic.images;
      const priceValue = "".concat(item.price && item.price.formattedValue ? item.price.formattedValue : item.price ? item.price : '');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("div", {
        className: "slider__card",
        tabIndex: "-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("div", {
        className: "slider__card__imageColumn"
      }, productImages && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("img", {
        width: "160",
        height: "160",
        src: "".concat(Object(_Utils_helper__WEBPACK_IMPORTED_MODULE_6__["getImage"])(productImages)),
        alt: ""
      }) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("img", {
        width: "160",
        height: "160",
        src: defaultImg,
        alt: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("div", {
        className: "slider__card__contentColumn",
        tabIndex: "-1"
      }, !isBA && !isBoutiqueApp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_wishListIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        pCode: item.code,
        pName: item.name,
        isWishlist: item.isInWishList,
        index: index
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("div", {
        role: "heading",
        "aria-level": "3",
        id: "product-list-".concat(index, "-").concat(item.code),
        className: "slider__card__contentColumn_prod-info"
      }, item.name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("span", {
        role: "presentation",
        className: " ".concat(isBA ? 'slider__card__contentColumn__productName_ba' : 'slider__card__contentColumn__productName')
      }, item.name.toLowerCase()), item.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("span", {
        role: "presentation",
        className: "slider__card__contentColumn__productContent"
      }, item.description.toLowerCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("span", {
        className: "is-sr-only"
      }, productRef + " " + item.code)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("p", {
        className: "slider__card__contentColumn__priceTag"
      }, priceValue), !isBA && !item.addToCartDisabled && !isBoutiqueApp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        buttonClass: "slider__card__contentColumn__prodMsg",
        dataPopupTarget: "quickview",
        ariaDescribedby: "product-list-".concat(index, "-").concat(item.code),
        dataPopupQuery: "sku=".concat(item.code, "&quickView=true"),
        ariaHasPopup: "dialog",
        dataModalTitle: item.name,
        buttonText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("span", null, addToCartCTA)
      }), !isBA && item.addToCartDisabled && !isBoutiqueApp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("p", {
        tabIndex: "-1",
        className: "slider__card__contentColumn__cartMsgText"
      }, productAddedText)));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null);
    }
  };

  const BuildContainer = props => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(BuildHTML, {
      carouselItem: props.prod,
      index: props.index
    }));
  };

  const afterRenderSwiper = function () {
    let swiper = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let timeGap = arguments.length > 1 ? arguments[1] : undefined;

    if (swiper) {
      setA11y();
    } else {
      setTimeout(() => {
        setA11y();
      }, timeGap);
    }
  };

  const setA11y = () => {
    const pagerCurrent = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('.js-carousel-pager-current');
    const prevBtn = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('.js-carousel-prev');
    const nextBtn = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('.js-carousel-next');
    if (pagerCurrent) isDesktop ? pagerCurrent.innerText = swiperRef && swiperRef.current.swiper.activeIndex + 1 : '';

    if (swiperRef.current.swiper.activeIndex === 0) {
      prevBtn && prevBtn.setAttribute('disabled', '');
      nextBtn && nextBtn.removeAttribute('disabled');
      nextBtn && nextBtn.removeAttribute('hidden');
      prevBtn && prevBtn.setAttribute('hidden', '');
    } else if (isDesktop && swiperRef.current.swiper.activeIndex === Math.ceil(sharedProductList.length / 3 - 1)) {
      prevBtn && prevBtn.removeAttribute('disabled');
      nextBtn && nextBtn.setAttribute('disabled', '');
      prevBtn && prevBtn.removeAttribute('hidden');
      nextBtn && nextBtn.setAttribute('hidden', '');
    } else if (isMobile && swiperRef.current.swiper.activeIndex + 1 === sharedProductList.length) {
      nextBtn && nextBtn.setAttribute('disabled', '');
      nextBtn && nextBtn.setAttribute('hidden', '');
    } else {
      prevBtn && prevBtn.removeAttribute('disabled');
      nextBtn && nextBtn.removeAttribute('disabled');
      prevBtn && prevBtn.removeAttribute('hidden');
      nextBtn && nextBtn.removeAttribute('hidden');
    }

    let disableIcons = [...Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["getCollection"])(".wishlist-icon"), ...Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["getCollection"])(".slider__card__contentColumn__prodMsg")];
    let activeSlidesContainer = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["select"])('.swiper-slide-active');
    let carouselSlides = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["getCollection"])('.slider__card');
    carouselSlides && carouselSlides.forEach(slide => {
      if (activeSlidesContainer.contains(slide)) {
        slide.removeAttribute('aria-hidden');
        slide.removeAttribute('tabindex');
      } else {
        slide.setAttribute('aria-hidden', 'true');
        slide.setAttribute('tabindex', '-1');
      }
    });
    disableIcons && disableIcons.forEach(icons => {
      if (activeSlidesContainer.contains(icons)) {
        icons.removeAttribute('tabindex');
      } else {
        icons.setAttribute('tabindex', '-1');
      }
    });
  };

  const focusActiveSlide = isNextBtnClicked => {
    let activeSlideBtns = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_8__["getCollection"])('.swiper-slide-active .slider__card');

    if (isNextBtnClicked) {
      Object(lib_helpers__WEBPACK_IMPORTED_MODULE_5__["focusElement"])(activeSlideBtns[0]);
    } else {
      isDesktop ? Object(lib_helpers__WEBPACK_IMPORTED_MODULE_5__["focusElement"])(activeSlideBtns[2]) : Object(lib_helpers__WEBPACK_IMPORTED_MODULE_5__["focusElement"])(activeSlideBtns[0]);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("div", {
    className: "vertical-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("img", {
    src: verticalbar_img,
    width: "1",
    height: "36",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("div", {
    className: "carousal__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("div", {
    role: "heading",
    "aria-level": "2",
    id: "product-list",
    className: "carousal__container__shared_products"
  }, !isBA ? sharedMsg : sharedMsgBA), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("p", {
    className: "carousal__container__products"
  }, sharedProductList.length, " ", sharedProdCountText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("div", {
    className: "js-carousel carousal__container_inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(swiper_react__WEBPACK_IMPORTED_MODULE_10__["Swiper"], {
    ref: swiperRef,
    pagination: {
      type: "fraction",
      el: 'swiper-pagination'
    },
    slidesPerView: Object(lib_helpers__WEBPACK_IMPORTED_MODULE_5__["isDesktopScreen"])() ? "1" : 'auto',
    navigation: {
      // Both prevEl & nextEl are null at render so this does not work
      prevEl: prevRef.current,
      nextEl: nextRef.current
    },
    a11y: true,
    speed: 0,
    className: "carousal__container_swiper carousel__outer",
    onSlideChangeTransitionEnd: swiper => afterRenderSwiper(swiper, null),
    onInit: swiper => {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }
  }, sharedProductList && sharedProductList.map((carouselItem, index) => {
    if (isDesktop && !sharedProductList[3 * index + 0]) {
      return;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(swiper_react__WEBPACK_IMPORTED_MODULE_10__["SwiperSlide"], {
      key: "prod ".concat(index + 1)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("div", {
      className: "carousal__container_swiper__slide"
    }, !isDesktop && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(BuildContainer, {
      prod: carouselItem
    }), isDesktop && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(BuildContainer, {
      prod: sharedProductList[3 * index + 0],
      index: 3 * index + 1
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(BuildContainer, {
      prod: sharedProductList[3 * index + 1],
      index: 3 * index + 2
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(BuildContainer, {
      prod: sharedProductList[3 * index + 2],
      index: 3 * index + 3
    }))));
  })), isDesktop && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("p", {
    className: "swiper-pagination js-carousel-pager swiper-pagination-fraction"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("span", {
    className: "swiper-pagination-current js-carousel-pager-current"
  }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("span", {
    "aria-hidden": "true"
  }, "/"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("span", {
    className: "is-sr-only"
  }, carouselPager), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("span", {
    className: "swiper-pagination-total js-carousel-pager-total"
  }, Math.ceil(sharedProductList.length / 3))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("div", {
    className: "swiper-navigation js-carousel-navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("button", {
    type: "button",
    onClick: () => !isDesktop && swiperRef.current.swiper.slidePrev(),
    className: isDesktop ? 'swiper-button swiper-button-prev js-carousel-prev' : 'swiper-button swiper-button-prev js-carousel-prev is-sr-only-focusable',
    ref: prevRef,
    onClick: () => focusActiveSlide(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    alt: carouselPrev,
    name: 'next-white',
    size: 'large'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("button", {
    type: "button",
    className: isDesktop ? 'swiper-button swiper-button-next js-carousel-next' : 'swiper-button swiper-button-next js-carousel-next is-sr-only-focusable',
    ref: nextRef,
    onClick: () => focusActiveSlide(true)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    alt: carouselNext,
    name: 'next-white',
    size: 'large'
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./patterns/scripts/ui/twilio/Components/thankYouPage.jsx":
/*!****************************************************************!*\
  !*** ./patterns/scripts/ui/twilio/Components/thankYouPage.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./patterns/scripts/ui/twilio/Components/button.jsx");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel */ "./patterns/scripts/ui/twilio/Components/carousel.jsx");
/* harmony import */ var lib_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/helpers */ "./patterns/scripts/lib/helpers.js");
/* harmony import */ var lib_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/selectors */ "./patterns/scripts/lib/selectors.js");







function ThankYouPage(props) {
  const {
    thankYouHeaderMessage,
    isBA,
    userOrderBtn,
    thankYouHeaderMessageUser,
    sharedProductInfo,
    sharedProductInfoUser,
    addedProducts,
    cartUrl,
    thankYouMsgOne,
    thankYouMsgTwo,
    thankYouMsgThree
  } = jsConfigSecond.twilio;
  const [isDesktop, setIsDesktop] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(lib_helpers__WEBPACK_IMPORTED_MODULE_4__["isDesktopScreen"])());
  const {
    sharedProduct
  } = props;
  var addedTobagCount = 0;

  const resizeHandler = () => {
    setIsDesktop(Object(lib_helpers__WEBPACK_IMPORTED_MODULE_4__["isDesktopScreen"])());
  };

  sharedProduct.map(item => {
    if (item.addToCartDisabled) {
      addedTobagCount += 1;
    }
  });
  const baText = "".concat(thankYouMsgOne, "\n                    ").concat(thankYouMsgTwo, " ").concat(addedTobagCount ? addedTobagCount : "", " ").concat(thankYouMsgThree);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.addEventListener('resize', resizeHandler);
    Object(lib_selectors__WEBPACK_IMPORTED_MODULE_5__["select"])('.thankyou__container_heading').focus();
    !isBA && Object(lib_selectors__WEBPACK_IMPORTED_MODULE_5__["select"])(".thankyou__container").classList.add("thankyou__container__client");
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_1__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", {
    className: "thankyou__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("h1", {
    className: "thankyou__container_heading heading",
    tabIndex: "-1",
    focusable: "true"
  }, !isBA && addedTobagCount > 0 && isDesktop ? baText : isBA ? thankYouHeaderMessage : thankYouHeaderMessageUser), isBA ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("p", {
    className: "thankyou__container_description_ba"
  }, " ", "".concat(sharedProduct.length, " ").concat(sharedProductInfo), " ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("p", {
    className: "thankyou__container_description"
  }, " ", sharedProductInfoUser, " "), !isBA && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", {
    className: "context"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("a", {
    href: cartUrl,
    className: "button is-primary is-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("span", null, userOrderBtn))), !isBA && addedTobagCount > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", {
    "aria-live": "polite",
    "aria-atomic": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("p", {
    className: "thankyou__container_addedProducts"
  }, addedTobagCount, " ", addedProducts)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", {
    "aria-live": "polite",
    "aria-atomic": "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_carousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sharedProductList: sharedProduct,
    addedTobagCount: addedTobagCount
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ThankYouPage);

/***/ })

}]);
//# sourceMappingURL=8.js.map?v=3.23