const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_type_error',
  errorVisibleClass: 'error-message_visible',
  buttonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled'
};

function showInputError(form, input, { inputErrorClass, errorVisibleClass }) {
  const errorContainer = form.querySelector(`.${input.id}-error`);
  input.classList.add(inputErrorClass);
  errorContainer.classList.add(errorVisibleClass);
  errorContainer.textContent = input.validationMessage;
}

function hideInputError(form, input, { inputErrorClass, errorVisibleClass }) {
  const errorContainer = form.querySelector(`.${input.id}-error`);
  input.classList.remove(inputErrorClass);
  errorContainer.classList.remove(errorVisibleClass);
  errorContainer.textContent = '';
}

function toggleButton(form, { buttonSelector, inactiveButtonClass }) {
  const button = form.querySelector(buttonSelector);
  const isFormValid = form.checkValidity();

  if (isFormValid) {
    button.classList.remove(inactiveButtonClass);
    button.removeAttribute('disabled');
  } else {
      button.classList.add(inactiveButtonClass);
      button.setAttribute('disabled', 'true');
  }
}

function validateInput(form, input, classes) {
  if (input.validity.valid) {
    hideInputError(form, input, classes);
  } else {
      showInputError(form, input, classes);
  }

  toggleButton(form, classes);
}

function submitForm(evt) {
  evt.preventDefault();
}

function enableValidation({ formSelector, inputSelector, ...rest }) {
  const forms = document.querySelectorAll(formSelector);

  forms.forEach(form => {

    form.addEventListener('submit', submitForm);
    const inputs = form.querySelectorAll(inputSelector);

    inputs.forEach(input => {
      input.addEventListener('input', () => {
        validateInput(form, input, rest);
      });
    });

    toggleButton(form, rest)
  });
}

enableValidation(config);