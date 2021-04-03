<template>
  <div id="form">
    <div class="face-area">
      <h3>我的帅脸</h3>

      <img class="face" height="200" width="200" :src="user.img">
      <el-upload
        ref="imgUpload"
        :on-success="imgSuccess"
        :action="upLoadUrl"
        accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
        multiple>
             <input type="button" class="upload-face input-button" value="上传图片">
      </el-upload>
    </div>
    <h3>我的信息</h3>
    <span>用户名</span><br><input class="input-line" v-model="user.username" disabled>
    <br><br>
    <!-- <input type="radio" name="radio" id="male" value="male" v-model="user.sex">
    <label for="male">帅哥</label>
    <input type="radio" name="radio" id="female" value="female" v-model="user.sex">
    <label for="female">美女</label>
    <br><br> -->
    <span>用户昵称</span><br><input class="input-line" v-model="user.nickname">
    <br><br>
    <span>所在地</span><br><input class="input-line" v-model="user.local">
    <br><br>
    <span>个性签名</span><br><textarea class="input-text" v-model="user.selfnote"></textarea>
    <br><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="button" class="input-button" @click="submit()" value="保 存">
  </div>
</template>

<script>
import userApi from 'src/api/userApi'

export default {
  name: 'user-info',
  created () {
    this.user = JSON.parse(JSON.stringify(this.$store.state.user.user))
  },
  data () {
    return {
      user: {},
      upLoadUrl: 'http://localhost:8000/user/upload'
    }
  },
  methods: {
    imgSuccess (res) {
       // 这里可以获得上传成功的相关信息
      var _this = this
      userApi.saveImgToDB(this.user.userid, res['url'])
      .then(function (res) {
        if (res.data['success'] === false) {
          _this.$message({
            message: res.data['error'],
            type: 'error'
          })
        } else {
          _this.user.img = res.data['userimg']
          _this.$store.dispatch('doLogin', _this.user)
        }
      })
    },
    submit () {
      var _this = this
      userApi.updateProfile(this.user)
      .then(function (res) {
        if (res.data['success'] === false) {
          _this.$message({
            message: res.data['error'],
            type: 'error'
          })
        } else {
          // 更新成功
          _this.$store.dispatch('doLogin', _this.user)
          _this.user = JSON.parse(JSON.stringify(_this.$store.state.user.user))
          _this.$message({
            message: '更新成功！',
            type: 'success'
          })
        }
      })
      .catch(function (res) {
        if (res instanceof Error) {
          window.console.log(res.message)
        } else {
          window.console.log(res.data)
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.accounts-view
  #form
    padding-left 20px
    .input-line, .input-text
      width 360px
      margin-top 6px
      padding 6px 8px
      border 1px solid #ddd
      border-radius 3px
      background-color #fafafa
      box-shadow inset 0 1px 2px rgba(0, 0, 0, 0.075)
    .input-text
      height 90px
    .face-area
      float right
      margin-right 40px
      img
        display block
        margin-bottom 20px
        border-radius 6px
      .upload-face
        width 100%
</style>
