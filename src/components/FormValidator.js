export default class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._errorVisibleClass = config.errorVisibleClass;
    this._buttonSelector = config.buttonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;

    this._formElement = formElement;
  }

  _showInputError(input) {
    const errorContainer = this._formElement.querySelector(`.${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    errorContainer.classList.add(this._errorVisibleClass);
    errorContainer.textContent = input.validationMessage;
  }

  _hideInputError(input) {
    const errorContainer = this._formElement.querySelector(`.${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    errorContainer.classList.remove(this._errorVisibleClass);
    errorContainer.textContent = '';
  }

  _submitForm(evt) {
    evt.preventDefault();
  }

  _validateInput(input) {
    if (input.validity.valid) {
      this._hideInputError(input);
    } else {
      this._showInputError(input);
    }
  }

  clearInputsError(inputs) {
    inputs.forEach(input => {
      this._hideInputError(input);
    });
  }

  toggleButton(button) {
    const isFormValid = this._formElement.checkValidity();

    if (isFormValid) {
      button.classList.remove(this._inactiveButtonClass);
      button.removeAttribute('disabled');
    } else {
      button.classList.add(this._inactiveButtonClass);
      button.disabled = true;
    }
  }

  enableValidation() {
    this._formElement.addEventListener('submit', this._submitForm);

    const inputs = this._formElement.querySelectorAll(this._inputSelector);
    const button = this._formElement.querySelector(this._buttonSelector);

    inputs.forEach(input => {
      input.addEventListener('input', () => {
        this._validateInput(input);
        this.toggleButton(button);
      });
    });
  }
}