(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1060:function(e,t,c){"use strict";c.r(t);c(7);var n=c(1),s=c(0),a=c(13),i=c(2),o=c(5),r=c(3);let l,d,u="",p=null,b={};function h(e){b=e;Object(s.select)("#captchaBtn",b)||function(e){let t=Object(s.selectAll)(".cn-captcha-container"),c=document.createElement("div"),n=Object(s.select)("#captchaSection",e);t.forEach(e=>{e.innerHTML=""}),l=!1,c.id="captchaWrapper",c.innerHTML='<div id="captcha"></div>\n        <button id="captchaBtn" type="button" class="captcha-btn button is-secondary is-block">\n            <span class="button__wrapper captcha-start">\n                <svg class="icon is-xsmall" focusable="false" viewBox="0 0 1 1" aria-hidden="true">\n                    <use xlink:href="/_ui/responsive/theme-onechanel/assets/icons.svg?'.concat(r.a.targetVersion,'#captcha">\n                    </use>\n                </svg>Click here to verify\n            </span>\n            <span class="button__wrapper captcha-success" hidden>\n                <svg class="icon is-xsmall" focusable="false" viewBox="0 0 1 1" aria-hidden="true">\n                    <use xlink:href="/_ui/responsive/theme-onechanel/assets/icons.svg?').concat(r.a.targetVersion,'#light-tick">\n                    </use>\n                </svg>Verified successfully\n            </span>\n        </button>\n        <div class="pop-container"></div>'),n.appendChild(c)}(b);var t;(async function(e){return await new Promise((function(t,c){if("function"==typeof initNECaptcha)t();else{let n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.src=e,s.async="true",n.appendChild(s),s.addEventListener("load",()=>{t()}),s.addEventListener("error",()=>{c()})}}))})("https://cstaticdun.126.net/load.min.js?t="+(t=(t=6e4)||0===t?1:t,parseInt((new Date).valueOf()/t,10))).then(()=>{const e=Object(s.select)("#captchaBtn",b);initNECaptcha({element:"#captcha",captchaId:"d9e2ddd0074e47a4bf6fc1b8e056a42e",width:"400px",mode:"bind",maxVerification:2,onVerify:function(t,c){null===t&&p.destroy(()=>{Object(s.select)(".captcha-success",e).removeAttribute("hidden",""),Object(s.select)(".captcha-start",e).setAttribute("hidden","hidden"),e.classList.add("cn-captcha-success"),f(!0);const t=Object(s.select)('input[id="phoneNumber"]');t&&t.addEventListener("keydown",v),Object(i.m)(e),l=!0})},customStyles:{controlBar:{height:"80px",borderRadius:"5px"}},popupStyles:{capBarHeight:50},onClose:function(t){2!=t.source&&p.destroy(),Object(i.m)(e)}},(function(e){u=e}),(function(e){console.warn(e)})),e.addEventListener("click",y)}).catch(e=>{console.log(e)})}function f(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const c=Object(s.select)(".otp-field",b),n=Object(s.select)(".js-otp-field",c);t&&n&&(e?(n.removeAttribute("aria-disabled"),n.removeAttribute("readonly"),c.classList.remove("is-disabled")):(c.classList.add("is-disabled"),n.setAttribute("readonly",!0),n.setAttribute("aria-disabled",!0)));const a=Object(s.select)(".js-resend-code",b);a&&(e?(a.removeAttribute("aria-disabled"),a.addEventListener("click",j),a.classList.remove("is-disabled")):(a.setAttribute("aria-disabled",!0),a.removeEventListener("click",j),a.classList.add("is-disabled")))}function v(){if(0==l)return!1;Object(s.select)(".captcha-success",captchaBtn).setAttribute("hidden","hidden"),Object(s.select)(".captcha-start",captchaBtn).removeAttribute("hidden"),captchaBtn.classList.remove("cn-captcha-success"),l=!1,h(b),f(!1),m(!0),d&&clearTimeout(d)}function m(e){const t=Object(s.select)(".js-register-btn",b);t&&(e?(t.setAttribute("aria-disabled",e),t.classList.add("is-disabled")):(t.removeAttribute("aria-disabled"),t.classList.remove("is-disabled")))}function j(e){const t=Object(s.select)('input[id="phoneNumber"]',b)?Object(s.select)('input[id="phoneNumber"]',b).value:null,c=Object(s.select)('input[id="countryCode"]',b)?Object(s.select)('input[id="countryCode"]',b).value:null;o.post(r.a.webservices.account.resendOtp,{data:{phoneCountryCodeField:c,phoneNumber:t,CSRFToken:ACC.config.CSRFToken}}).then(()=>{e.target.innerText=r.a.locales.account.optSendText;const t=Object(s.select)(".js-resend-code",b);t.setAttribute("aria-live","off"),f(!1,!1),m(!1),d=setTimeout(O.bind(null,e,t),6e4)}).catch(e=>{const t=Object(s.select)(".js-phone-valid",b);t&&e.formErrorData&&"phoneNumber"===e.formErrorData.fields[0].name&&(t.setCustomValidity("phone.exist"),t.checkValidity(),t.focus())})}function O(e,t){e.target.innerText=r.a.locales.account.newcodeBtnText,t.setAttribute("aria-live","polite"),f(!0,!1)}function y(e){e.preventDefault();let t=Object(s.select)("#captchaBtn",b);if(Object(s.select)(".loader__inner",t))return!1;Object(s.select)(".js-phone-field-wrapper",b)&&function(){const e=Object(s.select)(".js-phone-field-wrapper",b),t=Object(s.select)(".js-phone-field",e);t.validity.customError&&t.setCustomValidity("");t.checkValidity()?async function(e){const t=Object(s.select)("#countryCode",b).value.replace(/[^0-9]/g,""),c=e.value.replace(/[^0-9]/g,"");return await Object(i.V)(t,c).then((function(t){return t?Promise.resolve(!0):(e.setCustomValidity("notAcceptedMobilePhone"),e.checkValidity(),Promise.resolve(!1))})).catch(e=>{console.error("an error occurred during the verification of phone number")})}(t).then(e=>{e&&function(){let e=Object(s.select)("#captchaBtn",b);Object(s.select)(".loader__inner",e);e&&(p=new a.a(e,{button:!0}),p.init(),p.create());u&&u.verify()}()}):t.focus()}()}n.C.subscribe(n.s,e=>{const t=document.getElementById(e.currentScreen);Object(s.select)(".cn-captcha-container",t)&&h(t)}),t.default={init:h}}}]);