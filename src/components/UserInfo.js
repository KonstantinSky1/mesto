export default class UserInfo {
  constructor(selectorName, selectorProfession) {
    this._selectorName = selectorName;
    this._selectorProfession = selectorProfession;
  }

  getUserInfo() {
    return {
      name: this._selectorName.textContent,
      profession: this._selectorProfession.textContent
    };
  }

  setUserInfo(nameFromInput, professionFromInput) {
    this._selectorName.textContent = nameFromInput;
    this._selectorProfession.textContent = professionFromInput;
  }

  setDataToInputs(inputName, inputProfession) {
    inputName.value = this.getUserInfo().name;
    inputProfession.value = this.getUserInfo().profession;
  }
}