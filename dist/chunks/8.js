(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./scripts/components/gigya/cn-captcha.js":
/*!************************************************!*\
  !*** ./scripts/components/gigya/cn-captcha.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/events */ "./patterns/scripts/lib/events/index.js");
/* harmony import */ var lib_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/selectors */ "./patterns/scripts/lib/selectors.js");
/* harmony import */ var ui_widgets_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui/widgets/loader */ "./patterns/scripts/ui/widgets/loader/index.js");
/* harmony import */ var _patterns_scripts_lib_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../patterns/scripts/lib/helpers */ "./patterns/scripts/lib/helpers.js");
/* harmony import */ var modules_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modules/fetch */ "./patterns/scripts/modules/fetch.js");
/* harmony import */ var lib_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/config */ "./patterns/scripts/lib/config.js");


/* eslint-disable prefer-rest-params */






let captchaIns = "",
    loader = null,
    isVerified,
    currentScreen = {},
    sendBtnTimeout;
const SEND_CODE_TIME_LIMIT = 60 * 1000;
lib_events__WEBPACK_IMPORTED_MODULE_1__["Manager"].subscribe(lib_events__WEBPACK_IMPORTED_MODULE_1__["GIGYA_SCREEN_HAS_CHANGED"], data => {
  const screen = document.getElementById(data.currentScreen);
  const captchaContainer = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])(".cn-captcha-container", screen);

  if (captchaContainer) {
    init(screen);
  }
});

function init(screen) {
  currentScreen = screen;
  const oldCaptchaBtn = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])("#captchaBtn", currentScreen);
  if (!oldCaptchaBtn) captchaTemplate(currentScreen);
  const url = 'https://cstaticdun.126.net/load.min.js' + '?t=' + getTimestamp(1 * 60 * 1000);
  loadScript(url).then(() => {
    const captchaBtn = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])("#captchaBtn", currentScreen);
    initNECaptcha({
      element: '#captcha',
      captchaId: 'd9e2ddd0074e47a4bf6fc1b8e056a42e',
      width: '400px',
      mode: 'bind',
      maxVerification: 2,
      onVerify: function (err, data) {
        if (err === null) {
          loader.destroy(() => {
            let captchaSuccess = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])(".captcha-success", captchaBtn);
            captchaSuccess.removeAttribute("hidden", "");
            let captchaStart = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])(".captcha-start", captchaBtn);
            captchaStart.setAttribute("hidden", "hidden");
            captchaBtn.classList.add("cn-captcha-success");
            enableDisableGetCode(true);
            const phoneNumber = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])('input[id="phoneNumber"]');

            if (phoneNumber) {
              phoneNumber.addEventListener("keydown", resetCaptcha);
            }

            Object(_patterns_scripts_lib_helpers__WEBPACK_IMPORTED_MODULE_4__["focusElement"])(captchaBtn);
            isVerified = true;
          });
        }
      },
      customStyles: {
        controlBar: {
          height: "80px",
          borderRadius: "5px"
        }
      },
      popupStyles: {
        capBarHeight: 50
      },
      onClose: function (status) {
        if (status.source != 2) loader.destroy();
        Object(_patterns_scripts_lib_helpers__WEBPACK_IMPORTED_MODULE_4__["focusElement"])(captchaBtn);
      }
    }, function onload(instance) {
      captchaIns = instance;
    }, function onerror(err) {
      console.warn(err);
    });
    captchaBtn.addEventListener('click', captchaVerify);
  }).catch(error => {
    console.log(error);
  });
}

async function loadScript(src) {
  return await new Promise(function (resolve, reject) {
    if (typeof initNECaptcha === "function") {
      resolve();
    } else {
      let head = document.head || document.getElementsByTagName('head')[0],
          script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      script.async = "true";
      head.appendChild(script);
      script.addEventListener("load", () => {
        resolve();
      });
      script.addEventListener("error", () => {
        reject();
      });
    }
  });
}

function enableDisableGetCode(enable) {
  let isNoCodeAvailable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  const otpField = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])('.otp-field', currentScreen);
  const otpFieldInput = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])('.js-otp-field', otpField);

  if (isNoCodeAvailable && otpFieldInput) {
    if (enable) {
      otpFieldInput.removeAttribute("aria-disabled");
      otpFieldInput.removeAttribute("readonly");
      otpField.classList.remove("is-disabled");
    } else {
      otpField.classList.add("is-disabled");
      otpFieldInput.setAttribute("readonly", true);
      otpFieldInput.setAttribute("aria-disabled", true);
    }
  }

  const resendCodeBtn = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])(".js-resend-code", currentScreen);

  if (resendCodeBtn) {
    if (enable) {
      resendCodeBtn.removeAttribute("aria-disabled");
      resendCodeBtn.addEventListener("click", sendCode);
      resendCodeBtn.classList.remove('is-disabled');
    } else {
      resendCodeBtn.setAttribute("aria-disabled", true);
      resendCodeBtn.removeEventListener("click", sendCode);
      resendCodeBtn.classList.add('is-disabled');
    }
  }
}

function captchaTemplate(screen) {
  let captchaContainers = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAll"])(".cn-captcha-container"),
      captchaTemplate = document.createElement("div"),
      captchaContainer = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])("#captchaSection", screen);
  captchaContainers.forEach(captchaElm => {
    captchaElm.innerHTML = "";
  });
  isVerified = false;
  captchaTemplate.id = "captchaWrapper";
  captchaTemplate.innerHTML = "<div id=\"captcha\"></div>\n        <button id=\"captchaBtn\" type=\"button\" class=\"captcha-btn button is-secondary is-block\">\n            <span class=\"button__wrapper captcha-start\">\n                <svg class=\"icon is-xsmall\" focusable=\"false\" viewBox=\"0 0 1 1\" aria-hidden=\"true\">\n                    <use xlink:href=\"/_ui/responsive/theme-onechanel/assets/icons.svg?".concat(lib_config__WEBPACK_IMPORTED_MODULE_6__["default"].targetVersion, "#captcha\">\n                    </use>\n                </svg>Click here to verify\n            </span>\n            <span class=\"button__wrapper captcha-success\" hidden>\n                <svg class=\"icon is-xsmall\" focusable=\"false\" viewBox=\"0 0 1 1\" aria-hidden=\"true\">\n                    <use xlink:href=\"/_ui/responsive/theme-onechanel/assets/icons.svg?").concat(lib_config__WEBPACK_IMPORTED_MODULE_6__["default"].targetVersion, "#light-tick\">\n                    </use>\n                </svg>Verified successfully\n            </span>\n        </button>\n        <div class=\"pop-container\"></div>");
  captchaContainer.appendChild(captchaTemplate);
}

function resetCaptcha() {
  if (isVerified == false) return false;
  let captchaSuccess = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])(".captcha-success", captchaBtn);
  captchaSuccess.setAttribute("hidden", "hidden");
  let captchaStart = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])(".captcha-start", captchaBtn);
  captchaStart.removeAttribute("hidden");
  captchaBtn.classList.remove("cn-captcha-success");
  isVerified = false;
  init(currentScreen);
  enableDisableGetCode(false);
  toggleAccountButtonState(true);
  if (sendBtnTimeout) clearTimeout(sendBtnTimeout);
}

function toggleAccountButtonState(buttonState) {
  const registerBtn = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])('.js-register-btn', currentScreen);

  if (registerBtn) {
    if (buttonState) {
      registerBtn.setAttribute('aria-disabled', buttonState);
      registerBtn.classList.add('is-disabled');
    } else {
      registerBtn.removeAttribute('aria-disabled');
      registerBtn.classList.remove('is-disabled');
    }
  }
}

function sendCode(e) {
  const phoneNumber = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])('input[id="phoneNumber"]', currentScreen) ? Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])('input[id="phoneNumber"]', currentScreen).value : null;
  const phoneCountryCodeField = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])('input[id="countryCode"]', currentScreen) ? Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])('input[id="countryCode"]', currentScreen).value : null;
  modules_fetch__WEBPACK_IMPORTED_MODULE_5__["post"](lib_config__WEBPACK_IMPORTED_MODULE_6__["default"].webservices.account.resendOtp, {
    data: {
      phoneCountryCodeField,
      phoneNumber,
      CSRFToken: ACC.config.CSRFToken
    }
  }).then(() => {
    e.target.innerText = lib_config__WEBPACK_IMPORTED_MODULE_6__["default"].locales.account.optSendText;
    const resendCodeBtn = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])(".js-resend-code", currentScreen);
    resendCodeBtn.setAttribute("aria-live", "off");
    enableDisableGetCode(false, false);
    toggleAccountButtonState(false);
    sendBtnTimeout = setTimeout(resentCodeBtnEnable.bind(null, e, resendCodeBtn), SEND_CODE_TIME_LIMIT);
  }).catch(data => {
    const phoneNumberField = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])('.js-phone-valid', currentScreen);

    if (phoneNumberField && data.formErrorData) {
      if (data.formErrorData.fields[0].name === 'phoneNumber') {
        phoneNumberField.setCustomValidity('phone.exist');
        phoneNumberField.checkValidity();
        phoneNumberField.focus();
      }
    }
  });
}

function resentCodeBtnEnable(e, resendCodeBtn) {
  e.target.innerText = lib_config__WEBPACK_IMPORTED_MODULE_6__["default"].locales.account.newcodeBtnText;
  resendCodeBtn.setAttribute("aria-live", "polite");
  enableDisableGetCode(true, false);
}

function captchaVerify(e) {
  e.preventDefault();
  let captchaBtn = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])("#captchaBtn", currentScreen),
      isLoader = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])(".loader__inner", captchaBtn);
  if (isLoader) return false;
  const phoneFieldWrapper = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])(".js-phone-field-wrapper", currentScreen);
  if (phoneFieldWrapper) isValidPhoneNumber();
}

function captchaVerification() {
  let captchaBtn = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])("#captchaBtn", currentScreen),
      isLoader = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])(".loader__inner", captchaBtn);

  if (captchaBtn) {
    loader = new ui_widgets_loader__WEBPACK_IMPORTED_MODULE_3__["default"](captchaBtn, {
      button: true
    });
    loader.init();
    loader.create();
  }

  captchaIns && captchaIns.verify();
}

function isValidPhoneNumber() {
  const phoneFieldWrapper = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])(".js-phone-field-wrapper", currentScreen);
  const phoneField = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])(".js-phone-field", phoneFieldWrapper);

  if (phoneField.validity.customError) {
    phoneField.setCustomValidity('');
  }

  const isValid = phoneField.checkValidity();

  if (isValid) {
    checkPhonePattern(phoneField).then(isValid => {
      if (isValid) captchaVerification();
    });
  } else {
    phoneField.focus();
  }
}

async function checkPhonePattern(phoneField) {
  const countryCode = Object(lib_selectors__WEBPACK_IMPORTED_MODULE_2__["select"])("#countryCode", currentScreen).value.replace(/[^0-9]/g, '');
  const phoneNumber = phoneField.value.replace(/[^0-9]/g, '');
  return await Object(_patterns_scripts_lib_helpers__WEBPACK_IMPORTED_MODULE_4__["isValidMobilePhone"])(countryCode, phoneNumber).then(function (isValid) {
    if (!isValid) {
      phoneField.setCustomValidity('notAcceptedMobilePhone');
      phoneField.checkValidity();
      return Promise.resolve(false);
    } else {
      return Promise.resolve(true);
    }
  }).catch(err => {
    console.error("an error occurred during the verification of phone number");
  });
}

function getTimestamp(msec) {
  msec = !msec && msec !== 0 ? msec : 1;
  return parseInt(new Date().valueOf() / msec, 10);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init
});

/***/ })

}]);
//# sourceMappingURL=8.js.map?v=3.23.0