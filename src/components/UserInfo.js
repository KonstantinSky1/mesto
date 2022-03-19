export default class UserInfo {
  constructor(selectorName, selectorProfession, profileAvatarSelector) {
    this._name = document.querySelector(selectorName);
    this._profession = document.querySelector(selectorProfession);
    this._avatar = document.querySelector(profileAvatarSelector);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      profession: this._profession.textContent
    };
  }

  setUserInfo(nameFromServer, professionFromServer) {
    this._name.textContent = nameFromServer;
    this._profession.textContent = professionFromServer;
  }

  setAvatar(avatarFromServer) {
    this._avatar.style.backgroundImage = `url('${avatarFromServer}')`;
  }
}