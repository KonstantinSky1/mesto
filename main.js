(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardSelector=n,this._cardTitle=e.name,this._cardImage=e.link,this._likes=e.likes,this._id=e.id,this._userId=e.UserId,this._ownerId=e.ownerId,this._handleCardClick=r,this._handleDeleteClick=o,this._handleLikeClick=i}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".photo-card").cloneNode(!0)}},{key:"_fillLike",value:function(){this._element.querySelector(".photo-card__button").classList.add("photo-card__button_like_black")}},{key:"_removeFillLike",value:function(){this._element.querySelector(".photo-card__button").classList.remove("photo-card__button_like_black")}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".photo-card__button-trash").addEventListener("click",(function(){return e._handleDeleteClick(e._id)})),this._element.querySelector(".photo-card__button").addEventListener("click",(function(){return e._handleLikeClick(e._id)})),this._photoCardImage.addEventListener("click",(function(){return e._handleCardClick(e._cardTitle,e._cardImage)}))}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._element.querySelector(".photo-card__counter").textContent=this._likes.length,this.isLiked()?this._fillLike():this._removeFillLike()}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._photoCardImage=this._element.querySelector(".photo-card__image"),this._setEventListeners(),this._photoCardImage.src=this._cardImage,this._element.querySelector(".photo-card__title").textContent=this._cardTitle,this._photoCardImage.alt=this._cardTitle,this.setLikes(this._likes),this._userId!==this._ownerId&&(this._element.querySelector(".photo-card__button-trash").style.display="none"),this._element}},{key:"deleteCard",value:function(){this._element.remove()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._inputErrorClass=t.inputErrorClass,this._errorVisibleClass=t.errorVisibleClass,this._buttonSelector=t.buttonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._formElement=n,this._allInputs=this._formElement.querySelectorAll(this._inputSelector),this.buttonSave=this._formElement.querySelector(this._buttonSelector)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.classList.add(this._errorVisibleClass),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorVisibleClass),t.textContent=""}},{key:"_submitForm",value:function(e){e.preventDefault()}},{key:"_validateInput",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"clearInputsError",value:function(){var e=this;this._allInputs.forEach((function(t){e._hideInputError(t)}))}},{key:"toggleButton",value:function(){this._formElement.checkValidity()?(this.buttonSave.classList.remove(this._inactiveButtonClass),this.buttonSave.removeAttribute("disabled")):(this.buttonSave.classList.add(this._inactiveButtonClass),this.buttonSave.disabled=!0)}},{key:"enableValidation",value:function(){var e=this;this._formElement.addEventListener("submit",this._submitForm),this._allInputs.forEach((function(t){t.addEventListener("input",(function(){e._validateInput(t),e.toggleButton()}))}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"setItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),u(this,"_handleClickOnOverlayClose",(function(e){e.target.classList.contains("popup_opened")&&n.close()})),this._popup=document.querySelector(t),this._buttonClose=this._popup.querySelector(".popup-close-button")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._buttonClose.addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("mousedown",this._handleClickOnOverlayClose)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function d(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupCardTitle=t._popup.querySelector(".image-popup__description"),t._popupCardImage=t._popup.querySelector(".image-popup__picture"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupCardTitle.textContent=e,this._popupCardImage.src=t,this._popupCardImage.alt=e,f(_(a.prototype),"open",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function S(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e,t){var n,r=t.callBackFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._callBackFormSubmit=r,n._form=n._popup.querySelector(".popup__form"),n._allInputs=n._form.querySelectorAll(".popup__input"),n._formSubmitElement=n._form.querySelector(".popup__button-save"),n._formSubmitTextContent=n._formSubmitElement.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputsObj={},this._allInputs.forEach((function(t){return e._inputsObj[t.name]=t.value})),this._inputsObj}},{key:"setEventListeners",value:function(){var e=this;b(w(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._callBackFormSubmit(e._getInputValues())}))}},{key:"changeSubmitText",value:function(){this._formSubmitElement.textContent="Сохранение..."}},{key:"open",value:function(){b(w(a.prototype),"open",this).call(this),this._formSubmitElement.textContent=this._formSubmitTextContent}},{key:"close",value:function(){this._form.reset(),b(w(a.prototype),"close",this).call(this)}},{key:"changeSubmitHandler",value:function(e){this._callBackFormSubmit=e}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t),this._profession=document.querySelector(n),this._avatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,profession:this._profession.textContent}}},{key:"setUserInfo",value:function(e,t){this._name.textContent=e,this._profession.textContent=t}},{key:"setAvatar",value:function(e){this._avatar.style.backgroundImage="url('".concat(e,"')")}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I,L=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=r,this._baseUrl=n}var t,n;return t=e,(n=[{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch((function(e){return console.log(e)}))}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch((function(e){return console.log(e)}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch((function(e){return console.log(e)}))}},{key:"postNewCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch((function(e){return console.log(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch((function(e){return console.log(e)}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch((function(e){return console.log(e)}))}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch((function(e){return console.log(e)}))}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch((function(e){return console.log(e)}))}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-37",headers:{authorization:"566767d2-4e5e-4476-be06-16ace5f6369e","Content-Type":"application/json"}}),P=document.querySelector(".profile__edit-popup"),T=document.querySelector(".popup__form_profile_edit"),q=document.querySelector(".profile__button-plus"),x=document.querySelector(".popup__form_new_card"),B=document.querySelector(".popup__input_info_name"),U=document.querySelector(".popup__input_info_profession"),R=document.querySelector(".popup__form_edit_avatar"),A=document.querySelector(".profile__image"),V={formSelector:".popup__form",inputSelector:".popup__input",inputErrorClass:"popup__input_type_error",errorVisibleClass:"error-message_visible",buttonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_disabled"};function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Promise.all([L.getProfile(),L.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];I=o._id,J.setUserInfo(o.name,o.about),J.setAvatar(o.avatar),i.forEach((function(e){return Q.setItem(W({name:e.name,link:e.link,likes:e.likes,id:e._id,UserId:I,ownerId:e.owner._id}))}))}));var D=new r(V,R),N=new r(V,T),H=new r(V,x),J=new j(".profile__title",".profile__subtitle",".profile__image"),G=new y(".popup_type_image"),M=new E(".popup_type_change-avatar",{callBackFormSubmit:function(e){M.changeSubmitText(),L.editAvatar(e.avatarLink).then((function(e){J.setAvatar(e.avatar),M.close()}))}}),z=new E(".popup_type_profile-edit",{callBackFormSubmit:function(e){z.changeSubmitText(),L.editProfile(e.firstname,e.profession).then((function(e){J.setUserInfo(e.name,e.about),z.close()}))}}),$=new E(".popup_type_new-card",{callBackFormSubmit:function(e){$.changeSubmitText(),L.postNewCard(e.cardName,e.cardLink).then((function(e){Q.setItem(W({name:e.name,link:e.link,likes:e.likes,id:e._id,UserId:I,ownerId:e.owner._id})),$.close()}))}}),K=new E(".popup_type_delete-card",{}),Q=new i({items:[],renderer:function(e){return Q.setItem(W(e))}},".photo-grid__list");function W(e){var n=new t(e,"#photo-card-template-id",(function(){return t=e,void G.open(t.name,t.link);var t}),(function(e){K.open(),K.changeSubmitHandler((function(){L.deleteCard(e).then((function(){return n.deleteCard()})),K.close()}))}),(function(e){n.isLiked()?L.deleteLike(e).then((function(e){return n.setLikes(e.likes)})):L.addLike(e).then((function(e){return n.setLikes(e.likes)}))}));return n.generateCard()}P.addEventListener("click",(function(){z.open();var e=J.getUserInfo(),t=e.name,n=e.profession;B.value=t,U.value=n,N.clearInputsError(),N.toggleButton()})),q.addEventListener("click",(function(){$.open(),H.clearInputsError(),H.toggleButton()})),A.addEventListener("click",(function(){M.open(),D.clearInputsError(),D.toggleButton()})),z.setEventListeners(),$.setEventListeners(),G.setEventListeners(),K.setEventListeners(),M.setEventListeners(),N.enableValidation(),H.enableValidation(),D.enableValidation()})();