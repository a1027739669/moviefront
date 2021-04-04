<template>
  <div class="chat-room-view">
    <div class="main-contant" ref="box" id="box1">
      <div v-for="message in messageList">
        <div v-if="message.uid === userid" class="ownMessage">
          <div class="ownblock">
            <template v-if="message.type===1">
              <p class="demo-chip">{{message.msg}}</p>
            </template>
            <template v-else>
            <mu-list-item :title="message.nickname" disabled>
              <mu-avatar slot="right" :src="message.img" :size="30"/>
            </mu-list-item>
            <mu-chip class="demo-chip" style="margin-right:10px;font-size:16px">{{message.msg}}</mu-chip>
            </template>
          </div>
        </div>
        <div v-else class="othersMessage">
          <div class="otherblock">
            <template v-if="message.type===1">
              <p class="demo-chip">{{message.msg}}</p>
            </template>
            <template v-else>
            <mu-list-item :title="message.nickname" disabled>
              <mu-avatar slot="left" :src="message.img" :size="30"/>
            </mu-list-item>
            <mu-chip class="demo-chip" style="margin-left:10px;font-size:16px">{{message.msg}}</mu-chip>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="post_block" v-on:keyup.enter="sendMessage(2)">
      <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 5}" v-on:keyup.enter="sendMessage" v-model="content"
                placeholder="请输入内容" class="send_input"></el-input>
      <el-button type="primary" icon="edit" v-on:keyup.enter="sendMessage" @click="sendMessage"
                 class="send_button"></el-button>
    </div>
  </div>
</template>

<script>
  import logo from '../../public/logo.png'
  import userApi from '../api/userApi'
  export default {
    name: 'chat-view',
    beforeCreate () {
      // 如果没有登录，跳转到登录页面
      if (!this.$store.state.user.login) {
        this.$router.replace('/login')
      }
    },
    mounted () {
      this.scrollToBottom()
    },
    updated: function () {
      this.scrollToBottom()
    },
    created  () {
      this.user = JSON.parse(JSON.stringify(this.$store.state.user.user))
      let vm = this
      vm.uid = this.user.userid
      vm.nickname = this.user.nickname
      vm.img = this.user.img
      vm.get_meaage()
      vm.conWebSocket()
    },
    data () {
      return {
        content: '',
        logo,
        uid: '',
        nickname: '',
        socket: '',
        img: '',
        messageList: []
      }
    },
    computed: {
      userid () {
        return this.$store.state.user.user.userid
      }
    },
    methods: {
      sendMessage (type) {
        if (type === 1) {
          this.socket.send(JSON.stringify({
            uid: this.uid,
            type: type,
            nickname: this.nickname,
            content: this.content,
            img: this.img
          }))
        } else {
          if (this.content !== '') {
            this.socket.send(JSON.stringify({
              uid: this.uid,
              type: type,
              nickname: this.nickname,
              content: this.content,
              img: this.img}
          ))
            var chatrecord = {
              'userid': this.uid,
              'nickname': this.nickname,
              'type': 2,
              'content': this.content,
              'img': this.img}
            this.save_meaage(chatrecord)
            this.content = ''
          }
        }
        var div = document.getElementById('box1')
        div.scrollTop = div.scrollHeight
      },
      conWebSocket () {
        let vm = this
        if (window.WebSocket) {
          // eslint-disable-next-line no-undef
          vm.socket = new WebSocket('ws://127.0.0.1:8001')
          let socket = vm.socket
          socket.onopen = function (e) {
            window.console.log('连接服务器成功')
            if (vm.nickname !== undefined) {
              vm.sendMessage(1)
            }
          }
          socket.onclose = function (e) {
            console.log('服务器关闭')
          }
          socket.onerror = function () {
            console.log('连接出错')
          }
          socket.onmessage = function (e) {
            let message = JSON.parse(e.data)
            vm.messageList.push(message)
          }
        }
      },
      scrollToBottom: function () {
        this.$nextTick(() => {
          var div = document.getElementById('box1')
          div.scrollTop = div.scrollHeight
        })
      },
      save_meaage (data) {
        userApi.saveMessage(data)
      },
      get_meaage () {
        let vm = this
        userApi.getMessage()
        .then(function (res) {
          // eslint-disable-next-line camelcase
          var obj_list = res.data['messageList']
          for (var i = 0; i < obj_list.length; i++) {
            vm.messageList.push(obj_list[i])
          }
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .chat-room-view
    width 1000px
    margin 50px auto
    text-align left
    overflow hidden

  .main-contant
    width 90%
    height 450px
    overflow-x hidden
    font-size 10px
    text-align left
    border 1px solid #000000
    border-radius 10px
    border-bottom-left-radius 0px
    border-bottom-right-radius 0px
    background #FCFCFC
    .ownMessage
      width 100%
      text-align right
      float right
      .ownblock
        float right
        margin 5px
        h2
        margin-left 10px
        margin-top 20px
        h2 i
          margin-left 10px
      .owntextarea
        width 300px
        margin-top 10px
        margin-left 10px
    .message
      width 100%
      display inline-block

  .othersMessage
    margin-top 20px

  .otherblock
    margin 5px
    .otherblock h2
      margin-right 10px
      margin-top 20px
      h2 i
        margin-left 10px
    .othertextarea
      width 300px
      margin-top 10px

  .post_block
    border 1px solid #000000
    border-top 0px
    padding-top 20px
    width 90%
    height 76px
    border-bottom-left-radius 10px
    border-bottom-right-radius 10px

  .send_input
    width 90%
    float left
    margin-top -20px
    border-right 0px

  .send_button
    margin-left 10px
    width 50px
    height 50px
    border-radius 50%
    background #0080FF
</style>
