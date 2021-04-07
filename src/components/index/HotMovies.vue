<template>
  <div class="hot-movies">
    <h3> {{msg}} </h3>
    <slider>
      <slider-item v-for="movie in movies">
        <div @click="goToMovie(movie.movieid)">
          <img width="75%" height="300" :src="movie.localimg"  >
          <div class="hot_movie_context">
            <label>{{ movie.name }}&nbsp;<span>{{ movie.year }}</span></label>
            <el-rate v-model="movie.score" disabled show-text text-color="#ff9900">
            </el-rate>
            <div class="hot_movie_introduce">
              <label>导演&nbsp;&nbsp;{{ movie.director }}</label><br>
              <label>演员&nbsp;&nbsp;{{ movie.actors.substring(0, 20) }}...</label>
            </div>
            <div class="hot_movie_comment">
              <label>推荐理由</label><br>
              <p>{{movie.storyline.substring(0, 65)}}...</p>
            </div>
          </div>
        </div>
      </slider-item>
    </slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'
import movieApi from '../../api/movieApi'
export default {
  name: 'hot-movies',
  created () {
    this.get_cur_movies()
  },
  data () {
    return {
      msg: '正在热映的电影',
      movies: ''
    }
  },
  components: {
    Slider,
    SliderItem
  },
  methods: {
    get_cur_movies () {
      var _this = this
      movieApi.getCurMovies()
        .then(function (res) {
          _this.movies = res.data['data']
          window.console.log(_this.movies)
        })
        .catch(function (res) {
          if (res instanceof Error) {
            window.console.log(res.message)
          } else {
            window.console.log(res.data)
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
.hot-movies
  height 350px
  margin 0px auto
@media screen and (min-width: 1201px) {
  .hot-movies {width: 1200px}
}
@media screen and (max-width: 1200px) {
  .hot-movies {width: 900px}
}
@media screen and (max-width: 900px) {
  .hot-movies {width: 200px;}
}
@media screen and (max-width: 500px) {
  .hot-movies {width: 100px;}
}
.hot-movies h3
  border-bottom 1px solid #d0d0d0
  padding-bottom 15px
.hot_movie_context
  background #F0F0F0
  height 300px
  width 320px
  padding-top 30px
  padding-left 25px
  padding-right 20px
  margin-top -305px
  margin-left 75%
.hot_movie_context label
  font-size 20px
  color #004B97
.hot_movie_context label span
  font-size 16px
  color #000000
.hot_movie_context .hot_movie_introduce
  margin-top 20px
.hot_movie_context .hot_movie_introduce label
  font-size 16px
  color #000000
.hot_movie_context .hot_movie_comment
  margin-top 30px
.hot_movie_context .hot_movie_comment label
  font-size 18px
  color #0066CC
.hot_movie_context .hot_movie_comment p
  font-size 12px
  color #ADADAD
</style>
