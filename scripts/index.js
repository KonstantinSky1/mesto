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

const imagePopupPicture = document.querySelector('.image-popup__picture');
const imagePopupDescription = document.querySelector('.image-popup__description');
const titleCardInput = formElementNewCard.querySelector('.popup__input_name_card');
const linkCardInput = formElementNewCard.querySelector('.popup__input_name_link');
const nameInputProfileEdit = formElementProfileEdit.querySelector('.popup__input_info_name');
const professionInputProfileEdit = formElementProfileEdit.querySelector('.popup__input_info_profession');
const newName = document.querySelector('.profile__title');
const newProfession = document.querySelector('.profile__subtitle');
const popupsOverlay = document.querySelectorAll('.popup');
const bodyRoot = document.querySelector('.root');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function closePopupClickOnOverlay(event) {
  if (event.target === event.currentTarget) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function closePopupKeydown(event) {
  if (event.keyCode == 27 || event.key == 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function openPopupProfileEdit() {
  nameInputProfileEdit.value = newName.textContent;
  professionInputProfileEdit.value = newProfession.textContent;
  openPopup(popupProfileEdit);
  hideInputError(formElementProfileEdit, nameInputProfileEdit, config);
  hideInputError(formElementProfileEdit, professionInputProfileEdit, config);
  toggleButton(formElementProfileEdit, config);
}

function openPopupNewCard() {
  openPopup(popupNewCard);
  titleCardInput.value = '';
  linkCardInput.value = '';
  hideInputError(formElementNewCard, titleCardInput, config);
  hideInputError(formElementNewCard, linkCardInput, config);
  toggleButton(formElementNewCard, config);
}

function openPhotoCardImage(picture, text) {
  imagePopupPicture.src = picture.src;
  imagePopupDescription.textContent = text.textContent;
  imagePopupPicture.alt = picture.alt;
  openPopup(imagePopup);
}

function handleProfileFormSubmit() {
  newName.textContent = nameInputProfileEdit.value;
  newProfession.textContent = professionInputProfileEdit.value;
  closePopup(popupProfileEdit);
}

function toggleLikes(like) {
  like.classList.toggle('photo-card__button_like_black');
}

function deleteCard(item) {
  item.parentNode.removeChild(item);
}

function createCard(elementName, elementLink) {
  const photoCardTemplate = photoCardTemplateId.querySelector('.photo-card').cloneNode(true);
  const photoCardTitle = photoCardTemplate.querySelector('.photo-card__title'); 
  const photoCardImage = photoCardTemplate.querySelector('.photo-card__image');
  const buttonTrash = photoCardTemplate.querySelector('.photo-card__button-trash');
  const buttonLike = photoCardTemplate.querySelector('.photo-card__button');

  photoCardTitle.textContent = elementName;
  photoCardImage.src = elementLink;
  photoCardImage.alt = elementName;

  buttonTrash.addEventListener('click', () => deleteCard(photoCardTemplate));
  buttonLike.addEventListener('click', () => toggleLikes(buttonLike));
  photoCardImage.addEventListener('click', () => openPhotoCardImage(photoCardImage, photoCardTitle));

  return photoCardTemplate;
}

function addCardToHtml(item) {
  photoGridList.prepend(item);
}

function handleNewCardSubmit() {
  const newCardData = createCard(titleCardInput.value, linkCardInput.value);
  addCardToHtml(newCardData);
  closePopup(popupNewCard);
}

initialCards.forEach(function(element) {
  addCardToHtml(createCard(element.name, element.link));
});

popupsOverlay.forEach(popup => {
  popup.addEventListener('mousedown', closePopupClickOnOverlay);
});

buttonOpenPopupProfileEdit.addEventListener('click', () => openPopupProfileEdit());
buttonClosePopupProfileEdit.addEventListener('click', () => closePopup(popupProfileEdit));
formElementProfileEdit.addEventListener('submit', handleProfileFormSubmit);
buttonOpenPopupNewCard.addEventListener('click', () => openPopupNewCard());
buttonClosePopupNewCard.addEventListener('click', () => closePopup(popupNewCard));
formElementNewCard.addEventListener('submit', handleNewCardSubmit);
buttonClosePopupCardImage.addEventListener('click', () => closePopup(imagePopup));
bodyRoot.addEventListener('keydown', closePopupKeydown);