import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupCardTitle = this._popup.querySelector('.image-popup__description');
    this._popupCardImage = this._popup.querySelector('.image-popup__picture');
  }

  open(name, link) {
    this._popupCardTitle.textContent = name;
    this._popupCardImage.src = link;
    this._popupCardImage.alt = name;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
  }
}