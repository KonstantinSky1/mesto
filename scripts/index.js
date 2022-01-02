const buttonOpenPopupProfileEdit = document.querySelector('.profile__edit-popup');
const buttonClosePopupProfileEdit = document.querySelector('.popup-close-button_profile_edit');
const popupProfileEdit = document.querySelector('.popup_profile_edit');
const formElementProfileEdit = document.querySelector('.popup__form_profile_edit');
const buttonOpenPopupNewCard = document.querySelector('.profile__button-plus');
const buttonClosePopupNewCard = document.querySelector('.popup-close-button_new_card');
const popupNewCard = document.querySelector('.popup_new_card');
const buttonClosePopupCardImage = document.querySelector('.popup-close-button_image_popup');
const photoCardTemplateId = document.querySelector('#photo-card-template-id').content;
const photoGridList = document.querySelector('.photo-grid__list');
const formElementNewCard = document.querySelector('.popup__form_new_card');
const imagePopup = document.querySelector('.image-popup');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

let imagePopupPicture = document.querySelector('.image-popup__picture');
let imagePopupDescription = document.querySelector('.image-popup__description');
let titleCardInput = formElementNewCard.querySelector('.popup__input_name_card');
let linkCardInput = formElementNewCard.querySelector('.popup__input_name_link');
let nameInputProfileEdit = formElementProfileEdit.querySelector('.popup__input_info_name');
let professionInputProfileEdit = formElementProfileEdit.querySelector('.popup__input_info_profession');
let newName = document.querySelector('.profile__title');
let newProfession = document.querySelector('.profile__subtitle');

function openPopupProfileEdit() {
  popupProfileEdit.classList.add('popup_opened');
  nameInputProfileEdit.value = newName.textContent;
  professionInputProfileEdit.value = newProfession.textContent;
}

function closePopupProfileEdit() {
  popupProfileEdit.classList.remove('popup_opened');
  nameInputProfileEdit.value = '';
  professionInputProfileEdit.value = '';
}

function openPopupNewCard() {
  popupNewCard.classList.add('popup_opened');
}

function closePopupNewCard() {
  popupNewCard.classList.remove('popup_opened');
}

function closePopupCardImage() {
  imagePopup.classList.remove('popup_opened');
}

function formSubmitHandlerProfileEdit(evt) {
  evt.preventDefault();
  newName.textContent = nameInputProfileEdit.value;
  newProfession.textContent = professionInputProfileEdit.value;
  closePopupProfileEdit();
}

function likeAddDelete(like) {
  like.classList.toggle('photo-card__button_like_black');
}

function trashDeleteCard(item) {
  item.parentNode.removeChild(item);
}

function openPhotoCardImage(picture, text) {
  imagePopupPicture.src = picture.src;
  imagePopupDescription.textContent = text.textContent;
  imagePopup.classList.add('popup_opened');
}

function createCard(elementName, elementLink) {
  const photoCardTemplate = photoCardTemplateId.querySelector('.photo-card').cloneNode(true);
  let photoCardTitle = photoCardTemplate.querySelector('.photo-card__title'); 
  let photoCardImage = photoCardTemplate.querySelector('.photo-card__image');
  let buttonTrash = photoCardTemplate.querySelector('.photo-card__button-trash');
  let buttonLike = photoCardTemplate.querySelector('.photo-card__button');

  photoCardTitle.textContent = elementName;
  photoCardImage.src = elementLink;
  photoCardImage.alt = elementName;

  buttonTrash.addEventListener('click', () => trashDeleteCard(photoCardTemplate));
  buttonLike.addEventListener('click', () => likeAddDelete(buttonLike));
  photoCardImage.addEventListener('click', () => openPhotoCardImage(photoCardImage, photoCardTitle));

  return photoCardTemplate;
}

function addCardToHtml(item) {
  photoGridList.prepend(item);
}

function formSubmitHandlerNewCard(evt) {
  evt.preventDefault();
  let newCardData = createCard(titleCardInput.value, linkCardInput.value);
  addCardToHtml(newCardData);
  titleCardInput.value = '';
  linkCardInput.value = '';
  closePopupNewCard();
}

initialCards.forEach(function(element) {
  addCardToHtml(createCard(element.name, element.link));
})

buttonOpenPopupProfileEdit.addEventListener('click', openPopupProfileEdit);
buttonClosePopupProfileEdit.addEventListener('click', closePopupProfileEdit);
formElementProfileEdit.addEventListener('submit', formSubmitHandlerProfileEdit);
buttonOpenPopupNewCard.addEventListener('click', openPopupNewCard);
buttonClosePopupNewCard.addEventListener('click', closePopupNewCard);
formElementNewCard.addEventListener('submit', formSubmitHandlerNewCard);
buttonClosePopupCardImage.addEventListener('click', closePopupCardImage);