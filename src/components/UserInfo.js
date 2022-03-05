export default class UserInfo {
  constructor(selectorName, selectorProfession) {
    this._name = document.querySelector(selectorName);
    this._profession = document.querySelector(selectorProfession);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      profession: this._profession.textContent
    };
  }

  setUserInfo(nameFromInput, professionFromInput) {
    this._name.textContent = nameFromInput;
    this._profession.textContent = professionFromInput;
  }
}