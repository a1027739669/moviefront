<template>
  <div class="movie-view">
    <h1>{{ msg }}</h1>
    <div id="content">
      <div id="header">
        <section id="header-left">
          <h1>
            <span id="name" v-text="movie.name"></span>
            <span id="year" v-text="movie.year"></span>
          </h1>
          <div class="article">
            <div id="cover">
              <a class="nbgnbg">
                <img :src="movie.localimg" >
              </a>
            </div>
            <div id="info">
              <span v-show="movie.director">
                <span class="pl">导演：</span>
                <span class="attrs">{{ movie.director }}</span>
                <br>
              </span>
              <span class="actor" v-show="movie.actors">
                <span class="pl">主演：</span>
                <span class="attrs">
                <span>{{ movie.actors }}</span>
                </span>
                <br>
              </span>
              <span v-show="movie.genre">
                <span class="pl">类型：</span>
                <span class="attrs">{{ movie.genre }}</span>
                <br>
              </span>
              <span v-show="movie.region">
                <span class="pl">制片国家/地区：</span>
                {{ movie.region }}
                <br>
              </span>
              <span v-show="movie.language">
                <span class="pl">语言：</span>
                {{ movie.language }}
                <br>
              </span>
              <span v-show="movie.relesetime">
                <span class="pl">上映日期：</span>
                <span>{{ movie.relesetime }}</span>
                <br>
              </span>
              <span v-show="movie.minus">
                <span class="pl">片长：</span>
                <span>{{ movie.minus }}</span>
                <br>
              </span>
              <span v-show="movie.alias">
                <span class="pl">别名：</span>
                <span>{{ movie.alias }}</span>
                <br>
              </span>
              <span v-show="movie.score">
                <div id="ratingPlace">
                  <span class="pl" id="ratingLeft">本站评分：</span>
                  <el-rate :max=5 v-model="movie.score" id="ratingRight" disabled text-color="#ff9900"
                           :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                  </el-rate>
                </div>
                <br>
              </span>
            </div>
          </div>
        </section>
        <section id="header-right">
          <div id="short-comment">
            <h2>
              {{ movie.name }}的短评· · · · · ·
            </h2>
            <div>
              <el-popover
                v-model="visibleComment"
                ref="popover4"
                placement="right"
                width="400"
                trigger="click">
                <mu-text-field v-model="commentText" hintText="不允许超过300个字符" :errorText="multiLineInputErrorText"
                               @textOverflow="handleMultiLineOverflow" multiLine :rows="2" :rowsMax="6" :maxLength="300"
                               fullWidth/>
                <br/>
                <el-button :plain="true" type="success" id="commentSubmit" @click="submitComment">提交</el-button>
                <el-button :plain="true" type="warning" id="commentCancle" @click="cancleComment">取消</el-button>
              </el-popover>
              <el-popover
                v-model="visibleRating"
                ref="popover6"
                placement="right"
                width="200"
              >
                <div class="block">
                  <el-rate
                    :max=5
                    v-model="valueRating"
                    show-text text-color="#ff9900"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                  </el-rate>
                </div>
                <br>
                <el-button :plain="true" type="warning" id="ratingCancle" @click="cancleRating">取消</el-button>
                <el-button :plain="true" type="success" id="ratingSubmit" @click="submitRating(movie.movieid)">提交</el-button>
              </el-popover>
              <el-button type="text" v-popover:popover4 id="comment-btn">我来写评论</el-button>
              <el-button type="text" v-popover:popover6 id="rating-btn">我来评星</el-button>
            </div>

            <div class="block">
              <div id="comment-items">
                <div class="comment-item" v-for='comment in currentComments'>
                    <span class="comment-info">
                      <div>
                        <span class="comment-author">{{ comment.nickname }}</span>
                        <span class="comment-date">{{ comment.commenttime }}</span>
                      </div>
                      <span class="comment-text">{{ comment.content }}</span>
                    </span>
                  <br>
                </div>
                <br>
              </div>
              <el-pagination
                @size-change="handleSizeChange"
               @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-size="sizePerOnePage"
                layout="total, prev, pager, next"
                :total="totalCommentSize">
              </el-pagination>
            </div>
          </div>
        </section>
      </div>
      <section id="synopsis" class="section-same">
        <!-- 剧情简介 -->
        <h2>{{ movie.name }}的剧情简介 · · · · · ·</h2>
        <div id="synopsis-content">
          　　{{ movie.storyline }}
        </div>
      </section>
      <section id="photo" class="section-same">
        <br><br>
      </section>
      <section id="also-like-movie" class="section-same">
        <h2>喜欢这部电影的人也喜欢 · · · · · ·</h2>
        <div class="button">
          <!--      <mu-raised-button @click="register" label="注册" class="register-button"/>-->
          <mu-raised-button @click="changerec()" label="换一批" class="login-button" primary/>
        </div>
        <div id="also-like-movie-content" v-for='alsoLikeMovie in movie.alsoLikeMovies'>
          <dl @click="goTo(alsoLikeMovie.id)" class="alsoLikeID">
            <dt>
              <a>
                <img :src="alsoLikeMovie.coverLink" width="180" height="250">
              </a>
            </dt>
            <dd>
              <a>{{ alsoLikeMovie.name }}</a>
            </dd>
          </dl>
        </div>
      </section>
      <div id="imgTest"></div>
    </div>
  </div>

</template>

<script>
import movieApi from '../api/movieApi'

export default {
  name: 'movie-view',
  created () {
    this.get_one_movie()
    this.page = 0
  },
  data () {
    return {
      // msg: 'This is movie view!一个电影的页面',
      commentText: '',
      currentPage: 1,
      visibleComment: false,
      visibleRating: false,
      valueRating: null,
      // 评论输入超过规定长度
      multiLineInputErrorText: '',
      currentComments: [],
      sizePerOnePage: 10,
      page: 0,
      movie: {
        alsoLikeMovies: [],
        rating: '',
        name: '',
        shortPopComments: []
      }
    }
  },
  methods: {
    getTime () {
      var date = new Date()
      var year = date.getFullYear()
      var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
    },
    get_one_movie () {
      var id = this.$route.params.id
      var _this = this
      movieApi.getMovieByMovieId(id)
        .then(function (res) {
          if (res.data['success'] === false) {
            _this.$message({
              message: res.data['error'],
              type: 'error'
            })
            _this.$router.push('/find')
          } else {
            let movie = res.data['data']
            movie['alsoLikeMovies'] = _this.get_also_like_movie(movie['alsoLikeMovies'])
            _this.movie = movie
            _this.getCurrentComment(1)
          }
        })
        .catch(function (res) {
          if (res instanceof Error) {
            window.console.log(res.message)
          } else {
            window.console.log(res.data)
          }
        })
    },
    get_also_like_movie (alsoLikeMovies) {
      // 遍历相似电影id，获得标题和cover
      // var _this = this
      var alsoLikeMoviesTemp = []
      if (alsoLikeMovies !== []) {
        for (var j = 0; j < alsoLikeMovies.length; j++) {
          var alsoLikeMovieId = alsoLikeMovies[j]
          movieApi.getMovieByDoubanId(alsoLikeMovieId)
            .then(function (res) {
              if (res.data['success'] === false) {
              } else {
                let movie = res.data['data']
                var name = movie['name']
                if (movie['name'].length > 10) {
                  name = movie['name'].substring(0, 7) + '...'
                }

                var coverLink = movie['localimg']
                var id = movie['movieid']
                var oneMovie = {'id': id, 'name': name, 'coverLink': coverLink}
                alsoLikeMoviesTemp.push(oneMovie)
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
      return alsoLikeMoviesTemp
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.getCurrentComment(val)
    },
    getCurrentComment (page) {
      var size = this.movie.shortPopComments.length
      // var sizePerOnePage = 2
      var startComment = this.sizePerOnePage * (page - 1)
      var endComment = startComment + this.sizePerOnePage
      endComment = endComment < size ? endComment : size
      this.currentComments = []
      for (var i = startComment; i < endComment; i++) {
        this.currentComments.push(this.movie.shortPopComments[i])
      }
    },
    handleMultiLineOverflow (isOverflow) {
      this.multiLineInputErrorText = isOverflow ? '超过啦！！！！' : ''
    },
    submitComment () {
      if (this.multiLineInputErrorText !== '') {
        this.$message({
          message: '超过了，请重新评论！',
          type: 'warning'
        })
      } else {
        if (!this.$store.state.user.login) {
          this.$router.replace('/login')
        } else {
          var commentDate = this.getTime()
          var commentAuthor = '匿名'
          if (this.$store.state.user.login) {
            commentAuthor = this.$store.state.user.user.nickname
          }
          var comment = {
            'commenttime': commentDate,
            'content': this.commentText,
            'nickname': commentAuthor
          }
          this.movie.shortPopComments.unshift(comment)
          // 加到comment
          // 传上去
          // 提交评论让评论框消失
          this.visibleComment = false
          // 成功弹出成功，置空
          this.$message({
            message: '评论成功！',
            type: 'success'
          })
          movieApi.submitComment(this.movie.movieid, commentDate, this.commentText, this.$store.state.user.user.userid)
          this.commentText = ''
        }
      }
    },
    goTo (id) {
      this.$router.replace('/movie/' + id)
      this.get_one_movie()
    },
    cancleComment () {
      this.visibleComment = false
      this.commentText = ''
    },
    submitRating (movieid) {
      if (!this.$store.state.user.login) {
        this.$router.replace('/login')
      } else {
        // 置空
        this.$message({
          message: '评星成功！',
          type: 'success'
        })
        this.user = JSON.parse(JSON.stringify(this.$store.state.user.user))
        movieApi.submitRating(this.valueRating, this.user.userid, movieid)
        .then(function (res) {
          if (res.data['success'] === false) {
            this.$message({
              message: res.data['error'],
              type: 'error'
            })
          }
        })
        this.valueRating = null
        // 弹出成功
        // 隐藏窗口
        this.visibleRating = false
      }
    },
    cancleRating () {
      this.visibleRating = false
    },
    changerec () {
      var _this = this
      this.page++
      movieApi.get_also_like_change(this.movie.movieid, this.page)
      .then(function (res) {
        _this.movie['alsoLikeMovies'] = _this.get_also_like_movie(res.data['alsoLikeMovies'])
      })
    }
  },
  computed: {
    totalCommentSize () {
      return this.movie.shortPopComments.length
    },
    doubanRating () {
      return parseFloat(this.movie.doubanRating)
    },
    imdbRating () {
      return parseFloat(this.movie.imdbRating)
    }
  },
  watch: {
    movie: {
      handler: function (val, oldVal) {
        this.handleCurrentChange(this.currentPage)
      },
      deep: true
    }
  }
}

</script>

<style lang="stylus" scoped>
h2
  color: #22AA3E;

h1
  font-size: 25px;
  font-weight: bold;
  color: #494949;
  line-height: 1.1;

a
  color: #0085DD;

.section-same
  width: 1000px;
  float: left;
  margin-left: 10%;
  margin-right: 10%;

#header
  width: 1000px;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 20px;

#cover
  .nbgnbg
    img
      width: 70%;

#header-left
  float: left;
  width: 400px;

#header-right
  padding-top: 50px;
  margin-left: 600px;
  width: 500px;

#comment-btn
  width: 80px;
  color: #ca6445;
  background: #fae9da;

#rating-btn
  margin-left: 50%;
  width: 80px;
  color: #ca6445;
  background: #fae9da;

.comment-author
  color: #0085DD;

#synopsis-content
  width: 1000px;

#photo
  ul
    float: left;

    li
      float: left;

      img
        height: 100px;

#also-like-movie-content
  float: left;

  dl
    float: left;

    img
      height: 250px;

#ratingPlace
  float: left;

#ratingLeft
  float: left;

#ratingRight
  float: left;

#commentSubmit
  float: right;

#commentCancle
  float: left;

.alsoLikeID
  margin: 10px 10px 10px 10px
</style>
