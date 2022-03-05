import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import {
  config,
  initialCards,
  formElementProfileEdit,
  formElementNewCard,
  buttonOpenPopupProfileEdit,
  buttonOpenPopupNewCard,
  nameInputProfileEdit,
  professionInputProfileEdit,
} from '../utils/constants.js';

const editFormValidator = new FormValidator(config, formElementProfileEdit);
const newCardFormValidator = new FormValidator(config, formElementNewCard);
const userInfo = new UserInfo('.profile__title', '.profile__subtitle');
const popupWithImage = new PopupWithImage('.popup_type_image');
const editProfile = new PopupWithForm('.popup_type_profile-edit', {
  callBackFormSubmit: item => userInfo.setUserInfo(item.firstname, item.profession)
});
const createNewCard = new PopupWithForm('.popup_type_new-card', {
  callBackFormSubmit: item => renderElements.setItem(createCard({ name: item.cardName, link: item.cardLink }))
});
const renderElements = new Section(
  {
    items: initialCards,
    renderer: item => renderElements.setItem(createCard(item))
  },
  '.photo-grid__list');

function createCard(value) {
  return new Card(value, '#photo-card-template-id', () => handleCardClick(value)).generateCard();
}

function handleCardClick(item) {
  popupWithImage.open(item.name, item.link);
}

renderElements.renderItems();

buttonOpenPopupProfileEdit.addEventListener('click', () => {
  editProfile.open();

  const {name, profession} = userInfo.getUserInfo();
  nameInputProfileEdit.value = name;
  professionInputProfileEdit.value = profession;

  editFormValidator.clearInputsError();
  editFormValidator.toggleButton();
});
buttonOpenPopupNewCard.addEventListener('click', () => {
  createNewCard.open();
  newCardFormValidator.clearInputsError();
  newCardFormValidator.toggleButton();
});

editProfile.setEventListeners();
createNewCard.setEventListeners();
popupWithImage.setEventListeners();

editFormValidator.enableValidation();
newCardFormValidator.enableValidation();