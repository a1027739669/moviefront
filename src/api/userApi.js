import { userApi } from './api'
import axios from 'axios'

export default {
  login (data) {
    return axios({
      method: 'post',
      url: userApi.loginUrl(),
      data: data,
      withCredentials: true
    }
    )
  },
  saveImgToDB (userid, url) {
    let geturl = userApi.saveImgUrl() + '?userid=' + userid + '&url=' + url
    return axios({
      method: 'get',
      url: geturl,
      withCredentials: true
    }
    )
  },
  register (data) {
    return axios({
      method: 'post',
      url: userApi.registerUrl(),
      data: data,
      withCredentials: true
    }
    )
  },
  getProfile () {
    return axios({
      method: 'get',
      url: userApi.getProfileUrl(),
      withCredentials: true
    }
    )
  },
  updateProfile (user) {
    return axios({
      method: 'post',
      url: userApi.updateProfileUrl(),
      data: user,
      withCredentials: true
    }
    )
  },
  updatePassword (oldPassword, newPassword, username) {
    let url = userApi.updatePasswordUrl() + '?oldPassword=' + oldPassword + '&newPassword=' + newPassword + '&username=' + username
    return axios({
      method: 'post',
      url: url,
      withCredentials: true
    }
    )
  },
  resetPassword (password, verification) {
    let url = userApi.resetPasswordUrl() + '?password=' + password + '&verification=' + verification
    return axios({
      method: 'post',
      url: url,
      withCredentials: true
    }
    )
  },
  sendMessage (message) {
    return axios({
      method: 'post',
      url: userApi.sendMessageUrl(),
      data: message,
      withCredentials: true
    }
    )
  }
}
