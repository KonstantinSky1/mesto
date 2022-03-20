export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._buttonClose = this._popup.querySelector('.popup-close-button');
    this._SubmitElement = this._popup.querySelector('.popup__button-save');
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._buttonClose.addEventListener('click', () => this.close());
    this._popup.addEventListener('mousedown', this._handleClickOnOverlayClose);
  }

  _handleEscClose = (event) => {
    if (event.key === 'Escape') {
      this.close();
    }
  };

  _handleClickOnOverlayClose = (event) => {
    if (event.target.classList.contains('popup_opened')) {
      this.close();
    };
  }

  changeSubmitText() {
    this._SubmitElementTextContent = this._SubmitElement.textContent;
    this._SubmitElement.textContent = 'Сохранение...';
  }

  returnSubmitText() {
    this._SubmitElement.textContent = this._SubmitElementTextContent;
  }
}