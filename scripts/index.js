const buttonOpenPopup = document.querySelector('.profile-content__button');
const buttonClosePopup = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');

let formElement = document.querySelector('.form-element');
let nameInput = formElement.querySelector('#nameInput');
let professionInput = formElement.querySelector('#professionInput');

let newName = document.querySelector('.profile-content__title');
let newProfession = document.querySelector('.profile-content__subtitle');

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

function closePopupOnClickOverlay(event) {
  if (event.target === event.currentTarget) {
    popup.classList.remove('popup_opened');
    nameInput.value = '';
    professionInput.value = '';
  }
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  newName.textContent = nameInput.value;
  newProfession.textContent = professionInput.value;
  closePopup();
}

buttonOpenPopup.addEventListener('click', openPopup);
buttonClosePopup.addEventListener('click', closePopup);
popup.addEventListener('click', closePopupOnClickOverlay);
formElement.addEventListener('submit', formSubmitHandler);