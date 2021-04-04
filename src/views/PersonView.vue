<template>
  <div class="movie-view">
    <h1>{{ msg }}</h1>
    <div id="content">
      <div id="header">
        <section id="header-left">
          <h1>
            <span id="name" v-text="person.name"></span>
<!--            <span id="year" v-text="movie.year"></span>-->
          </h1>
          <div class="article">
            <div id="cover">
              <a class="nbgnbg">
                <img :src="person.img" >
              </a>
            </div>
          </div>
        </section>
        <section id="header-right">
          <div id="info">
              <span v-show="person.name">
                <span class="pl">姓名：</span>
                <span class="attrs">{{ person.name }}</span>
                <br>
              </span>
            <span v-show="person.sex">
                <span class="pl">性别：</span>
                <span>{{ person.sex }}</span>
                <br>
              </span>
            <span class="actor" v-show="person.birthday">
                <span class="pl">生日：</span>
                <span class="attrs">
                <span>{{ person.birthday }}</span>
                </span>
                <br>
              </span>
            <span v-show="person.birthplace">
                <span class="pl">出生地：</span>
                <span class="attrs">{{ person.birthplace }}</span>
                <br>
              </span>
            <span v-show="person.constellation">
                <span class="pl">星座：</span>
                {{ person.constellation }}
                <br>
              </span>
            <span v-show="person.nameen">
                <span class="pl">英文名：</span>
                {{ person.nameen }}
                <br>
              </span>
            <span v-show="person.namezh">
                <span class="pl">中文名：</span>
                <span>{{ person.namezh }}</span>
                <br>
              </span>
            <span v-show="person.profession">
                <span class="pl">职业：</span>
                <span>{{ person.profession }}</span>
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
        </section>
      </div>
      <section id="synopsis" class="section-same">
        <!-- 剧情简介 -->
        <h2>{{ person.name }}的个人简介 · · · · · ·</h2>
        <div id="synopsis-content">
          　　{{ person.blog }}
        </div>
      </section>
      <section id="photo" class="section-same">
        <br><br>
      </section>
      <section id="also-like-movie" class="section-same">
        <h2>参演的电影 · · · · · ·</h2>
<!--        <div class="button">-->
<!--          &lt;!&ndash;      <mu-raised-button @click="register" label="注册" class="register-button"/>&ndash;&gt;-->
<!--          <mu-raised-button @click="changerec()" label="换一批" class="login-button" primary/>-->
<!--        </div>-->
        <div id="also-like-movie-content" v-for='alsoLikeMovie in person.parMovies'>
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
      },
      person: {
        parMovies: [],
        rating: '',
        name: ''
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
      movieApi.getPersonByPersonId(id)
        .then(function (res) {
          if (res.data['success'] === false) {
            _this.$message({
              message: res.data['error'],
              type: 'error'
            })
            _this.$router.push('/find')
          } else {
            let person = res.data['data']
            person['parMovies'] = _this.get_also_like_movie(person['parMovies'])
            _this.person = person
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
    goTo (id) {
      this.$router.replace('/movie/' + id)
      this.get_one_movie()
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
