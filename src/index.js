import './pages/index.css';

import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';

import {
  config,
  initialCards,
  formElementProfileEdit,
  formElementNewCard,
  photoGridList,
  buttonOpenPopupProfileEdit,
  buttonOpenPopupNewCard,
  imagePopup,
  newName,
  newProfession,
  popupProfileEdit,
  popupButtonProfile,
  popupNewCard,
  popupButtonCard,
} from './utils/constants.js';

const editFormValidator = new FormValidator(config, formElementProfileEdit);
const newCardFormValidator = new FormValidator(config, formElementNewCard);
const userInfo = new UserInfo(newName, newProfession);
const popupWithImage = new PopupWithImage(imagePopup);
const editProfile = new PopupWithForm(popupProfileEdit, { callBackFormSubmit: item => userInfo.setUserInfo(item.firstname, item.profession) });
const createNewCard = new PopupWithForm(popupNewCard, { callBackFormSubmit: item => renderElements.setItem(createCard({ name: item.cardName, link: item.cardLink })) });
const renderElements = new Section(
  {
    items: initialCards,
    renderer: item => renderElements.setItem(createCard(item))
  },
  photoGridList);

function createCard(value) {
  return new Card(value, '#photo-card-template-id', () => handleCardClick(value)).generateCard();
}

function handleCardClick(item) {
  popupWithImage.open(item.name, item.link);
}

renderElements.renderItems();

buttonOpenPopupProfileEdit.addEventListener('click', () => {
  editProfile.open()
  userInfo.setDataToInputs(editProfile.getAllInputs()[0], editProfile.getAllInputs()[1]);
  editFormValidator.clearInputsError(editProfile.getAllInputs());
  editFormValidator.toggleButton(popupButtonProfile);
});
buttonOpenPopupNewCard.addEventListener('click', () => {
  createNewCard.open();
  newCardFormValidator.clearInputsError(createNewCard.getAllInputs());
  newCardFormValidator.toggleButton(popupButtonCard);
});

editProfile.setEventListeners();
createNewCard.setEventListeners();
popupWithImage.setEventListeners();

editFormValidator.enableValidation();
newCardFormValidator.enableValidation();