export default class Card {
  constructor(arrayData, cardSelector, handleCardClick) {
    this._cardSelector = cardSelector;
    this._cardTitle = arrayData.name;
    this._cardImage = arrayData.link;
    this._handleCardClick = handleCardClick;
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

  _setEventListeners() {
    this._element.querySelector('.photo-card__button-trash').addEventListener('click', this._deleteCard);
    this._element.querySelector('.photo-card__button').addEventListener('click', this._toggleLikes);
    this._element.querySelector('.photo-card__image').addEventListener('click', () => this._handleCardClick(this._cardTitle, this._cardImage));
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