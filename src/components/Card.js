export default class Card {
  constructor(objData, cardSelector, { handleCardClick, handleDeleteClick, handleLikeClick }) {
    this._cardSelector = cardSelector;
    this._cardTitle = objData.name;
    this._cardImage = objData.link;
    this._likes = objData.likes;
    this._id = objData.id;
    this._userId = objData.userId;
    this._ownerId = objData.ownerId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.photo-card').cloneNode(true);
    return cardElement;
  }

  _fillLike() {
    this._element.querySelector('.photo-card__button').classList.add('photo-card__button_like_black');
  }

  _removeFillLike() {
    this._element.querySelector('.photo-card__button').classList.remove('photo-card__button_like_black');
  }

  _setEventListeners() {
    this._element.querySelector('.photo-card__button-trash').addEventListener('click', () => this._handleDeleteClick(this._id));
    this._element.querySelector('.photo-card__button').addEventListener('click', () => this._handleLikeClick(this._id));
    this._photoCardImage.addEventListener('click', () => this._handleCardClick(this._cardTitle, this._cardImage));
  }

  isLiked() {
    const userHasLikedCard = this._likes.find(user => user._id === this._userId);

    return userHasLikedCard;
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    const likeCountElement = this._element.querySelector('.photo-card__counter');
    likeCountElement.textContent = this._likes.length;
    
    if (this.isLiked()) {
      this._fillLike();
    } else {
      this._removeFillLike();
    }
  }

  generateCard() {
    this._element = this._getTemplate();
    this._photoCardImage = this._element.querySelector('.photo-card__image');

    this._setEventListeners();

    this._photoCardImage.src = this._cardImage;
    this._element.querySelector('.photo-card__title').textContent = this._cardTitle;
    this._photoCardImage.alt = this._cardTitle;

    this.setLikes(this._likes);

    if (this._userId !== this._ownerId) {
      this._element.querySelector('.photo-card__button-trash').style.display = 'none';
    }

    return this._element;
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }
}