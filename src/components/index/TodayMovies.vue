<template>

  <div class="today-movies">
    <h3> {{ msg }} </h3>
    <div class="button">
      <!--      <mu-raised-button @click="register" label="注册" class="register-button"/>-->
      <mu-raised-button @click="changerec()" label="换一批" class="login-button" primary/>
    </div>
    <div class="border-movie" v-for="movie in movies">
      <div class="single-movie" @click="goToMovie(movie.movieid)" @mouseenter="change_class(movie)" @mouseleave="re_class()">
        <img width="100%" height="85%" :src="movie.localimg">
        <div class="movie-title">
          <label>{{ movie.name.substring(0, 15) }}<span> {{ movie.score }}</span></label>
        </div>
      </div>
      <div v-if="current_movie === movie" class="movie_context_active">
        <div class="movie_context">
          <label>{{ movie.name }}<span> {{ movie.year }}</span></label>
          <div class="movie_rate">
            <el-rate :max=5 v-model="movie.score" disabled show-text text-color="#ff9900">
            </el-rate>
          </div>
          <div class="movie_type">
            <label>{{ movie.minus }}分钟&nbsp;&nbsp;&nbsp;&nbsp;<label>{{ movie.region }}</label></label>
          </div>
          <div class="movie_members">
            <label>导演&nbsp;&nbsp;&nbsp;&nbsp;{{ movie.director }}</label><br>
            <label>演员&nbsp;&nbsp;&nbsp;&nbsp;{{ movie.actors }}</label>
          </div>
        </div>
        <div class="movie_comment">
          {{ movie.storyline.substring(0, 20) }}..
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import movieApi from '../../api/movieApi'

export default {
  name: 'today-movies',
  created () {
    this.get_today_movies()
  },
  data () {
    return {
      isActive: false,
      msg: '为你推荐',
      current_movie: '',
      value: 18,
      movies: '',
      page: 0,
      user: {}
    }
  },
  methods: {
    change_class: function (arg) {
      this.current_movie = arg
    },
    re_class: function () {
      this.current_movie = ''
    },
    get_today_movies () {
      var _this = this
      if (!this.$store.state.user.login) {
        movieApi.getDailyMovieWithUnlogin(this.page)
          .then(function (res) {
            _this.movies = res.data['data']
          })
          .catch(function (res) {
            if (res instanceof Error) {
              window.console.log(res.message)
            } else {
              window.console.log(res.data)
            }
          })
      } else {
        this.user = JSON.parse(JSON.stringify(this.$store.state.user.user))
        var userid = this.user.userid
        movieApi.getDailyMovie(userid, this.page)
          .then(function (res) {
            _this.movies = res.data['data']
          })
          .catch(function (res) {
            if (res instanceof Error) {
              window.console.log(res.message)
            } else {
              window.console.log(res.data)
            }
          })
      }
    },
    goToMovie (id) {
      this.$router.push('/movie/' + id)
    },
    changerec () {
      this.page++
      this.get_today_movies()
    }
  },
  computed: {
    rating () {
      return parseFloat(this.current_movie.doubanRating)
    }
  }
}
</script>

<style>
.today-movies {
  height: 720px;
  margin: 0px auto;
}
</style>
<style lang="stylus" scoped>
.today-movies
  height 720px
  margin 0px auto

  h3
    border-bottom 1px solid #d0d0d0
    padding-bottom 15px

@media screen and (min-width: 1201px) {
  .today-movies {
    width: 1200px
  }
}

@media screen and (max-width: 1200px) {
  .today-movies {
    width: 900px
  }
}

@media screen and (max-width: 900px) {
  .today-movies {
    width: 200px;
  }
}

@media screen and (max-width: 500px) {
  .today-movies {
    width: 100px;
  }
}

.border-movie
  width 20%
  height 45%
  float left
  margin-left 10%

.single-movie
  height 100%
  width 75%
  margin-top 10%
  margin-left 2%

.single-movie:hover
  cursor pointer

.movie_context_active
  border 1px solid #C0C0C0
  background rgb(255, 255, 255)
  height 400px
  width 310px
  margin-top -325px
  margin-left 80%
  float left
  position relative
  z-index 1999
  display block

.movie_context
  width 100%
  height 80%
  text-align left
  font-size 16px
  color #4682B4
  padding 10px 10px 10px 20px
  border-bottom 1px solid #DCDCDC

.movie_context label span
  color #7B7B7B
  font-size 12px

.movie_context .movie_rate
  margin-top 5px

.movie_context .movie_type
  margin-top 10px
  color #4F4F4F
  font-size 14px

.movie_context .movie_members
  margin-top 15px
  color #4F4F4F
  font-size 14px

.movie_context .movie_members label
  padding-bottom 10px

.movie_comment
  width 100%
  height 20%
  background #F5F5F5
  padding 10px 10px 10px 10px

.movie-title
  text-align center
  padding 0px
  font-size 12px
  margin-bottom 10px

.movie-title span
  color #FFA042
</style>
