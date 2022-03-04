export default class Popup {
  constructor(popupSelector) {
    this._popup =  popupSelector;
    this._buttonClose = this._popup.querySelector('.popup-close-button');
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('mousedown', this._handleClickOnOverlayClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('mousedown', this._handleClickOnOverlayClose);
  }

  setEventListeners() {
    this._buttonClose.addEventListener('click', () => this.close());
  }

  _handleEscClose = (event) => {
    if (event.key == 'Escape') {
      this.close();
    }
  };

  _handleClickOnOverlayClose = (event) => {
    if (event.target.classList.contains('popup_opened')) {
      this.close();
    };
  }
}