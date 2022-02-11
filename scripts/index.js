import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

const buttonOpenPopupProfileEdit = document.querySelector('.profile__edit-popup');
const buttonClosePopupProfileEdit = document.querySelector('.popup-close-button_profile_edit');
const popupProfileEdit = document.querySelector('.popup_profile_edit');
const formElementProfileEdit = document.querySelector('.popup__form_profile_edit');
const buttonOpenPopupNewCard = document.querySelector('.profile__button-plus');
const buttonClosePopupNewCard = document.querySelector('.popup-close-button_new_card');
const popupNewCard = document.querySelector('.popup_new_card');
const buttonClosePopupCardImage = document.querySelector('.popup-close-button_image_popup');
const photoGridList = document.querySelector('.photo-grid__list');
const formElementNewCard = document.querySelector('.popup__form_new_card');
export const imagePopup = document.querySelector('.image-popup');
export const imagePopupPicture = document.querySelector('.image-popup__picture');
export const imagePopupDescription = document.querySelector('.image-popup__description');
const titleCardInput = formElementNewCard.querySelector('.popup__input_name_card');
const linkCardInput = formElementNewCard.querySelector('.popup__input_name_link');
const nameInputProfileEdit = formElementProfileEdit.querySelector('.popup__input_info_name');
const professionInputProfileEdit = formElementProfileEdit.querySelector('.popup__input_info_profession');
const newName = document.querySelector('.profile__title');
const newProfession = document.querySelector('.profile__subtitle');
const popupButtonProfile = document.querySelector('.popup__button-save_info_profile');
const popupButtonCard = document.querySelector('.popup__button-save_info_card');

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
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_type_error',
  errorVisibleClass: 'error-message_visible',
  buttonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled'
};

const editFormValidator = new FormValidator(config, formElementProfileEdit);
const newCardFormValidator = new FormValidator(config, formElementNewCard);

const renderElements = () => {
  initialCards.forEach(item => {
    createCard(item);
  });
};

function createCard(value) {
  const card = new Card(value, '#photo-card-template-id');
  const cardElement = card.generateCard();
  photoGridList.prepend(cardElement);
}

function handleNewCardSubmit() {
  const dataFromInputs = {
    name: titleCardInput.value,
    link: linkCardInput.value
  };
  
  createCard(dataFromInputs);
  closePopup(popupNewCard);
}

export function openPopup(popup) {
  popup.classList.add('popup_opened');

  document.addEventListener('keydown', closePopupKeydown);
  popup.addEventListener('mousedown', closePopupClickOnOverlay);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');

  document.removeEventListener('keydown', closePopupKeydown);
  popup.addEventListener('mousedown', closePopupClickOnOverlay);
}

function closePopupClickOnOverlay(event) {
  if (event.target.classList.contains('popup_opened')) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function closePopupKeydown(event) {
  if (event.key == 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function openPopupProfileEdit() {
  nameInputProfileEdit.value = newName.textContent;
  professionInputProfileEdit.value = newProfession.textContent;
  openPopup(popupProfileEdit);

  const inputsProfile = formElementProfileEdit.querySelectorAll('.popup__input');
  editFormValidator.clearInputsError(inputsProfile);

  editFormValidator.toggleButton(popupButtonProfile);
}

function openPopupNewCard() {
  openPopup(popupNewCard);

  formElementNewCard.reset();

  const inputsProfile = formElementNewCard.querySelectorAll('.popup__input');
  newCardFormValidator.clearInputsError(inputsProfile);

  newCardFormValidator.toggleButton(popupButtonCard);
}

function handleProfileFormSubmit() {
  newName.textContent = nameInputProfileEdit.value;
  newProfession.textContent = professionInputProfileEdit.value;

  closePopup(popupProfileEdit);
}

renderElements();

editFormValidator.enableValidation();
newCardFormValidator.enableValidation();

buttonOpenPopupProfileEdit.addEventListener('click', () => openPopupProfileEdit());
buttonClosePopupProfileEdit.addEventListener('click', () => closePopup(popupProfileEdit));
formElementProfileEdit.addEventListener('submit', handleProfileFormSubmit);
buttonOpenPopupNewCard.addEventListener('click', () => openPopupNewCard());
buttonClosePopupNewCard.addEventListener('click', () => closePopup(popupNewCard));
formElementNewCard.addEventListener('submit', handleNewCardSubmit);
buttonClosePopupCardImage.addEventListener('click', () => closePopup(imagePopup));