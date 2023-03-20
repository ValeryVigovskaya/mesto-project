import {api} from "./api.js"
import {
  username, avatar,
  description
} from './variables.js'
export default class UserInfo {
  constructor({username, description, avatar}, api){
    this._name = username;
    this._about = description;
    this._avatar = avatar;
    this._api = api;
  }
  getUserInfo(){
    const data = {};
    data.username = this._name.textContent;
    data.description = this._about.textContent;
    return data;
  }

  setUserInfo(data, {avatar}){
    this._name.textContent = data.username;
    this._about.textContent = data.description;
    this.userId = userId;
    setUserAvatar({avatar})
  }

  setUserAvatar({avatar}){
    this._avatar.src = avatar;
  }
}
