export default class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._errorVisibleClass = config.errorVisibleClass;
    this._buttonSelector = config.buttonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;

    this._formElement = formElement;
    this._allInputs = this._formElement.querySelectorAll(this._inputSelector);
    this.buttonSave = this._formElement.querySelector(this._buttonSelector);
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

  clearInputsError() {
    this._allInputs.forEach(input => {
      this._hideInputError(input);
    });
  }

  toggleButton() {
    const isFormValid = this._formElement.checkValidity();

    if (isFormValid) {
      this.buttonSave.classList.remove(this._inactiveButtonClass);
      this.buttonSave.removeAttribute('disabled');
    } else {
      this.buttonSave.classList.add(this._inactiveButtonClass);
      this.buttonSave.disabled = true;
    }
  }

  enableValidation() {
    this._formElement.addEventListener('submit', this._submitForm);

    this._allInputs.forEach(input => {
      input.addEventListener('input', () => {
        this._validateInput(input);
        this.toggleButton();
      });
    });
  }
}