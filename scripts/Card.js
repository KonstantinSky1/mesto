import {imagePopupPicture, imagePopupDescription, imagePopup, openPopup} from './index.js';

export class Card {
  constructor(arrayData, cardSelector) {
    this._cardSelector = cardSelector;
    this._cardTitle = arrayData.name;
    this._cardImage = arrayData.link;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.photo-card').cloneNode(true);
    return cardElement;
  }

  _deleteCard(event) {
    event.target.closest('.photo-card').remove();
  }

  _toggleLikes() {
    this.classList.toggle('photo-card__button_like_black');
  }

  _openPhotoCardImage() {
    imagePopupPicture.src = this._cardImage;
    imagePopupDescription.textContent = this._cardTitle;
    imagePopupPicture.alt = this._cardTitle;
    openPopup(imagePopup);
  }

  _setEventListeners() {
    this._element.querySelector('.photo-card__button-trash').addEventListener('click', this._deleteCard);
    this._element.querySelector('.photo-card__button').addEventListener('click', this._toggleLikes);
    this._element.querySelector('.photo-card__image').addEventListener('click', () => this._openPhotoCardImage());
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.photo-card__image').src = this._cardImage;
    this._element.querySelector('.photo-card__title').textContent = this._cardTitle;
    this._element.querySelector('.photo-card__image').alt = this._cardTitle;

    return this._element;
  }
}