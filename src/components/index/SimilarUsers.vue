<template>
  <div class="similar-users">
    <h3>{{msg}}</h3>
    <div class="usercontainer">
        <div class="user" v-for="user in user">
          <img class="face" width="120" height="120" :src="user.avatar" @click="goToUser(user.id)">
          <h4>{{user.username}}</h4>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'similar-users',
  data () {
    return {
      msg: '好友推荐',
      user: [{
        id: '21',
        username: '那个帅脸萌萌哒',
        avatar: 'http://127.0.0.1:8000/media/profile/user.png'
      }, {
        id: '21',
        username: '世界只因有你',
        avatar: 'http://127.0.0.1:8000/media/profile/user.png'
      }, {
        id: '21',
        username: '某花花',
        avatar: 'http://127.0.0.1:8000/media/profile/user.png'
      }, {
        id: '22',
        username: '左手倒影',
        avatar: 'http://127.0.0.1:8000/media/profile/user.png'
      }, {
        id: '21',
        username: '滿天的星座',
        avatar: 'http://127.0.0.1:8000/media/profile/user.png'
      }, {
        id: '21',
        username: '普通小姐',
        avatar: 'http://127.0.0.1:8000/media/profile/user.png'
      }]
    }
  },
  methods: {
    goToUser (id) {
      this.$router.push('/user/' + id)
    }
  }
}
</script>


<style lang="stylus" scoped>
.similar-users
  height 300px
  margin 0px auto
@media screen and (min-width: 1201px){
  .similar-users{width:1200px}
}
@media screen and (max-width: 1200px){
  .similar-users{width:900px}
}
@media screen and (max-width: 900px){
  .similar-users{width:200px}
}
@media screen and (max-width: 500px){
  .similar-users{width:100px}
}
.usercontainer
  height 260px
  border-top 1px solid #d0d0d0
.user
  height 200px
  width 160px
  margin 20px 0px 0px 30px
  float left
  cursor pointer
.user .face
  border-radius 50%
  margin 20px 20px 0px 50px
.user h4
  text-align center
  padding-left 60px
</style>
