export default class Card {
  constructor(objData, cardSelector, handleCardClick) {
    this._cardSelector = cardSelector;
    this._cardTitle = objData.name;
    this._cardImage = objData.link;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.photo-card').cloneNode(true);
    return cardElement;
  }

  _toggleLikes() {
    this.classList.toggle('photo-card__button_like_black');
  }

  _setEventListeners() {
    this._element.querySelector('.photo-card__button-trash').addEventListener('click', this._deleteCard.bind(this));
    this._element.querySelector('.photo-card__button').addEventListener('click', this._toggleLikes);
    this._photoCardImage.addEventListener('click', () => this._handleCardClick(this._cardTitle, this._cardImage));
  }

  generateCard() {
    this._element = this._getTemplate();
    this._photoCardImage = this._element.querySelector('.photo-card__image');

    this._setEventListeners();

    this._photoCardImage.src = this._cardImage;
    this._element.querySelector('.photo-card__title').textContent = this._cardTitle;
    this._photoCardImage.alt = this._cardTitle;

    return this._element;
  }

  _deleteCard() {
    this._element.remove();
  }
}