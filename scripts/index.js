const buttonOpenPopup = document.querySelector('.profile__edit-popup');
const buttonClosePopup = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_info_name');
let professionInput = formElement.querySelector('.popup__input_info_profession');

let newName = document.querySelector('.profile__title');
let newProfession = document.querySelector('.profile__subtitle');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = newName.textContent;
  professionInput.value = newProfession.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
  nameInput.value = '';
  professionInput.value = '';
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  newName.textContent = nameInput.value;
  newProfession.textContent = professionInput.value;
  closePopup();
}

buttonOpenPopup.addEventListener('click', openPopup);
buttonClosePopup.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);