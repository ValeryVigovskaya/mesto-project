import {api} from "./api.js"
import {
  username, avatar,
  description
} from './variables.js'
// export default class UserInfo {
//   constructor({name, description, avatar}, api){
//     this._name = name;
//     this._about = description;
//     this._avatar = avatar;
//     this._api = api;
//   }
//   getUserInfo(){
//     const data = {};
//     data.username = this._name.textContent;
//     data.description = this._about.textContent;
//     return data;
//   }

//   setUserInfo(data, {avatar}){
//     this._name.textContent = data.username;
//     this._about.textContent = data.description;
//     this.userId = userId;
//     setUserAvatar({avatar})
//   }

//   setUserAvatar({avatar}){
//     this._avatar.src = avatar;
//   }
// }

export default class UserInfo {
  constructor(username, description, avatar) {
    this._userName = document.querySelector(username);
    this._userAbout = document.querySelector(description);
    this._userAvatar = document.querySelector(avatar);
  }

  getUserInfo() {
    this._name = this._userName.textContent;
    this._about = this._userAbout.textContent;
    this._avatar = this._userAvatar.src;

    this.userInfo = {
      name: this._name,
      about: this._about,
      avatar:this._avatar,
    };
    return this.userInfo
  }

  setUserInfo(name, about, _id) {
    this._userName.textContent = name;
    this._userAbout.textContent = about;
    this.userId = _id;
  }

  setUserAvatar (avatar){
    this._userAvatar.src = avatar;

  }
    saveInfo(userInfo) {
      this._info = userInfo
    }

  }
