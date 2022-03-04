export const buttonOpenPopupProfileEdit = document.querySelector('.profile__edit-popup');
export const popupProfileEdit = document.querySelector('.popup_profile_edit');
export const formElementProfileEdit = document.querySelector('.popup__form_profile_edit');
export const buttonOpenPopupNewCard = document.querySelector('.profile__button-plus');
export const popupNewCard = document.querySelector('.popup_new_card');
export const photoGridList = document.querySelector('.photo-grid__list');
export const formElementNewCard = document.querySelector('.popup__form_new_card');
export const imagePopup = document.querySelector('.image-popup');
export const imagePopupPicture = document.querySelector('.image-popup__picture');
export const imagePopupDescription = document.querySelector('.image-popup__description');
export const newName = document.querySelector('.profile__title');
export const newProfession = document.querySelector('.profile__subtitle');
export const popupButtonProfile = document.querySelector('.popup__button-save_info_profile');
export const popupButtonCard = document.querySelector('.popup__button-save_info_card');

export const initialCards = [
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

export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_type_error',
  errorVisibleClass: 'error-message_visible',
  buttonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled'
};