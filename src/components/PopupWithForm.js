import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, {callBackFormSubmit}) {
    super(popupSelector);
    this._callBackFormSubmit = callBackFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._allInputs = this._form.querySelectorAll('.popup__input');
    this._formSubmitElement = this._form.querySelector('.popup__button-save');
    this._formSubmitTextContent = this._formSubmitElement.textContent;
  }

  _getInputValues() {
    this._inputsObj = {};
    this._allInputs.forEach(item => this._inputsObj[item.name] = item.value);

    return this._inputsObj;
  }

  setEventListeners() {
    super.setEventListeners();
    
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._callBackFormSubmit(this._getInputValues());
    });
  }

  changeSubmitText() {
    this._formSubmitElement.textContent = 'Сохранение...';
  }

  open() {
    super.open();
    this._formSubmitElement.textContent = this._formSubmitTextContent;
  }

  close() {
    this._form.reset();
    super.close();
  }

  changeSubmitHandler(newSubmitHandler) {
    this._callBackFormSubmit = newSubmitHandler;
  }
}