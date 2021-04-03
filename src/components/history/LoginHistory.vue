<template>
  <div class="login-history">
    <h3>评分记录</h3><span>您最近的评分记录</span>
    <div class="table-wrapper">
      <table class="table-normal" id="login_log_table">
        <thead>
          <tr>
            <td style="width: 36%">
              <div>
                时间
              </div>
            </td>
            <td style="width: 30%">
              <div>
                评分值
              </div>
            </td>
            <td style="width: 34%">
              <div>
                电影名
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="rating in ratingList">
            <td>
              <div>
                {{rating.ratingtime}}
              </div>
            </td>
            <td>
              <div>
                {{rating.rating}}
              </div>
            </td>
            <td>
              <div>
                   <a @click="goToMovie(rating.movieid)">{{rating.moviename}}</a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <div class="pagination">
      <span>共{{parseInt(loginLogList.length/size)+1}}页</span>
      <button class="prev" type="button" name="button" @click="prev">《</button>
      <ul v-for="n in total">
        <li class="number">{{n}}</li>
      </ul>
      <button class="next" type="button" name="button" @click="next">》</button>
    </div> -->
  </div>
</template>

<script>
import movieApi from '../../api/movieApi'

export default {
  name: 'login-history',
  created () {
    this.getRatinglist()
  },
  data () {
    return {
      ratingList: []
    }
  },
  methods: {
    getRatinglist () {
      var _this = this
      movieApi.getRatinglist(this.$store.state.user.user.userid)
      .then(function (res) {
        if (res.data['success'] === false) {
        } else {
          _this.ratingList = res.data['data']
        }
      })
    },
    goToMovie (id) {
      this.$router.push('/movie/' + id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-history
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
  .pagination
    button
      min-width 28px
      height 28px
      padding 0
      background #eee
      border 1px solid #ddd
    ul
      vertical-align top
      list-style none
      display inline-block
      padding 0
      margin 0
      .number
        display inline-block
        margin 0
        padding 0
        padding-top 2px
        min-width 28px
        height 28px
        text-align center
        border 1px solid #ddd
</style>
