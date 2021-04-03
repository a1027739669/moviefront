<template>
  <div class="browsing-history">
    <h3>浏览记录</h3>
    <div class="table-wrapper">
      <table class="table-normal">
        <thead>
        <tr>
          <td style="width: 20%">
            <div>
              时间
            </div>
          </td>
          <td style="width: 40%">
            <div>
              评论内容
            </div>
          </td>
          <td style="width: 30%">
            <div>
              电影名
            </div>
          </td>
          <td style="width: 10%">
            <div>
              操作
            </div>
          </td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="comment in commentList">
          <td>
            <div>
              {{ comment.commenttime }}
            </div>
          </td>
          <td>
            <div>
              {{ comment.content }}
            </div>
          </td>
          <td>
            <div>
              <a @click="goToMovie(comment.movieid)">{{ comment.moviename }}</a>
            </div>
          </td>
          <td>
            <el-button type="text" v-popover:popover6 id="rating-btn" @click="deleteComment(comment.commentid)">删除</el-button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import movieApi from '../../api/movieApi'

export default {
  name: 'browsing-history',
  created () {
    this.getCommentlist()
  },
  data () {
    return {
      commentList: []
    }
  },
  methods: {
    getCommentlist () {
      var _this = this
      movieApi.getCommentList(this.$store.state.user.user.userid)
        .then(function (res) {
          if (res.data['success'] === false) {
          } else {
            _this.commentList = res.data['data']
          }
        })
    },
    goToMovie (id) {
      this.$router.push('/movie/' + id)
    },
    deleteComment (commentid) {
      var _this = this
      movieApi.deleteComment(commentid)
      .then(function (res) {
        if (res.data['success'] === false) {
        } else {
          _this.commentList = res.data['data']
        }
      })
      // this.getCommentlist()
    }
  }
}
</script>
<style lang="stylus" scoped>
.browsing-history
  .table-wrapper
    margin-top 10px
    margin-bottom 20px
    border 1px solid #ddd
    border-radius 2px

    .table-normal
      width 100%
      height 100%
      border-collapse collapse
      border-spacing 2px
      border-color grey
      vertical-align middle

      thead
        display table-header-group
        vertical-align middle
        border-color inherit

        tr
          td
            text-align center
            background #f5f5f5
            height 42px
            border-bottom 1px solid #ddd
            border-left 1px solid #ddd
            font-weight bold

      tbody
        tr
          td
            text-align center
            height 40px
            border-left 1px solid #ddd
            border-bottom 1px solid #ddd
</style>
