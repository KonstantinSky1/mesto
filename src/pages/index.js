import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import DeleteCard from '../components/DeleteCard.js';
import {api} from '../components/Api.js';

import {
  config,
  formElementProfileEdit,
  formElementNewCard,
  buttonOpenPopupProfileEdit,
  buttonOpenPopupNewCard,
  nameInputProfileEdit,
  professionInputProfileEdit,
  FormElementEditAvatar,
  buttonOpenPopupChangeAvatar
} from '../utils/constants.js';

let userId;

Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    userId = userData._id;

    cardsData.reverse();
    userInfo.setUserInfo(userData.name, userData.about);
    userInfo.setAvatar(userData.avatar);
    cardsData.forEach(data => renderElements.renderItems(
      {
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id,
        userId: userId,
        ownerId: data.owner._id
      }
    ))
  })
  .catch(err => console.log(err));

const editAvatarFormValidator = new FormValidator(config, FormElementEditAvatar);
const editFormValidator = new FormValidator(config, formElementProfileEdit);
const newCardFormValidator = new FormValidator(config, formElementNewCard);

const userInfo = new UserInfo('.profile__title', '.profile__subtitle', '.profile__image');
const popupWithImage = new PopupWithImage('.popup_type_image');
const popupChangeAvatar  = new PopupWithForm('.popup_type_change-avatar', {
  callBackFormSubmit: item => {
    popupChangeAvatar.changeSubmitText()
    api.editAvatar(item.avatarLink)
      .then(res => {
        userInfo.setAvatar(res.avatar);
        popupChangeAvatar.close();
      })
      .catch(err => console.log(err))
      .finally(() => popupChangeAvatar.returnSubmitText());
  }
});
const editProfile = new PopupWithForm('.popup_type_profile-edit', {
  callBackFormSubmit: item => {
    editProfile.changeSubmitText();
    api.editProfile(item.firstname, item.profession)
      .then(res => {
        userInfo.setUserInfo(res.name, res.about);
        editProfile.close();
      })
      .catch(err => console.log(err))
      .finally(() => editProfile.returnSubmitText());
    }
});
const createNewCard = new PopupWithForm('.popup_type_new-card', {
  callBackFormSubmit: item => {
    createNewCard.changeSubmitText();
    api.postNewCard(item.cardName, item.cardLink)
      .then(res => {
        renderElements.renderItems(
          {
            name: res.name,
            link: res.link,
            likes: res.likes,
            id: res._id,
            userId: userId,
            ownerId: res.owner._id
          }
        );
        createNewCard.close();
      })
      .catch(err => console.log(err))
      .finally(() => createNewCard.returnSubmitText());
  }
});
const deleteCardModal = new DeleteCard('.popup_type_delete-card');
const renderElements = new Section(
  {
    renderer: item => renderElements.setItem(createCard(item))
  },
  '.photo-grid__list');

function createCard(value) {
  const card = new Card(
    value,
    '#photo-card-template-id',
    { 
      handleCardClick: () => handleCardClick(value),
      handleDeleteClick: (id) => {
        deleteCardModal.open();
        deleteCardModal.submitHandler(() => {
          api.deleteCard(id)
            .then(() => {
              card.deleteCard();
              deleteCardModal.close();
            })
            .catch(err => console.log(err));
        });
      },
      handleLikeClick: (id) => {
        card.isLiked() ?
        api.deleteLike(id)
          .then(res => card.setLikes(res.likes))
          .catch(err => console.log(err)) :
        api.addLike(id)
          .then(res => card.setLikes(res.likes))
          .catch(err => console.log(err));
      }
    }
  );

  return card.generateCard();
}

function handleCardClick(item) {
  popupWithImage.open(item.name, item.link);
}

buttonOpenPopupProfileEdit.addEventListener('click', () => {
  const {name, profession} = userInfo.getUserInfo();
  nameInputProfileEdit.value = name;
  professionInputProfileEdit.value = profession;

  editFormValidator.clearInputsError();
  editFormValidator.toggleButton();

  editProfile.open();
});
buttonOpenPopupNewCard.addEventListener('click', () => {
  newCardFormValidator.clearInputsError();
  newCardFormValidator.toggleButton();

  createNewCard.open();
});
buttonOpenPopupChangeAvatar.addEventListener('click', () => {
  editAvatarFormValidator.clearInputsError();
  editAvatarFormValidator.toggleButton();

  popupChangeAvatar.open();
});

editProfile.setEventListeners();
createNewCard.setEventListeners();
popupWithImage.setEventListeners();
deleteCardModal.setEventListeners();
popupChangeAvatar.setEventListeners();

editFormValidator.enableValidation();
newCardFormValidator.enableValidation();
editAvatarFormValidator.enableValidation();