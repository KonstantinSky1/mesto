import Popup from './Popup.js';

export default class DeleteCard extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.buttonSubmit = this._popup.querySelector('.popup__button-save');
  }

  setEventListeners() {
    super.setEventListeners();
    
    this.buttonSubmit.addEventListener('click', () => this._submitHandler());
  }
  
  submitHandler(data) {
    this._submitHandler = data;
  }
}