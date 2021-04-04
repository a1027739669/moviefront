<template>
  <div class="search-view">
    <div class="search-bar" @keyup.enter="searchPerson">
      <el-input placeholder="请输入内容" v-model="keywords" style="width: 600px;" size="large">
        <el-button slot="append" icon="search" @click="searchPerson"></el-button>
      </el-input>
    </div>
    <div class="search-result">
      <mu-list>
        <template v-for="person in persons">
          <div class="movie-detail" @click="goToPerson(person.personid)">
            <div>
              <img :src="person.img" alt="" slot="left" width="200" height="250">
              <div class="movie-content" slot="right">
                <span>姓名：{{person.name}}</span><br>
                <span>生日：{{person.birthday}}</span><br>
                <span>出生地：{{person.birthplace}}</span><br>
                <span>星座：{{person.constellation}}</span><br>
                <span>职业：{{person.profession}}</span><br>
                <span>性别：{{person.sex}}</span><br>
                <div>简介：{{person.blog.substring(0,200)}}..</div>
              </div>
            </div>
          </div>
        </template>
      </mu-list>

    </div>
    <el-button v-show="persons.length > 0" class="load-more-button" @click="loadMore" :loading="loading" :disabled="disabled">{{buttonText}}</el-button>
  </div>

</template>

<script>
import movieApi from 'src/api/movieApi'
export default {
  name: 'search-view',
  created () {
    this.fetchData()
    this.get_today_persons()
  },
  data () {
    return {
      keywords: '',
      type: '',
      limit: 10,
      offset: 0,
      persons: [],
      loading: false,
      disabled: true,
      buttonText: '点击加载更多'
    }
  },
  methods: {
    fetchData () {
      this.keywords = this.$route.query.keywords
    },
    loadMore () {
      this.loading = true
      this.offset += this.limit
      this.searchPerson()
    },
    goToPerson (id) {
      this.$router.push('/person/' + id)
    },
    addPerson (results) {
      for (var i = 0; i < results.length; i++) {
        this.persons.push(results[i])
      }
      // 表示不能加载更多了
      if (results.length < this.limit) {
        this.buttonText = '不能加载更多了'
        this.disabled = true
      }
    },
    searchPerson () {
      var _this = this
      var keywords = this.keywords
      if (keywords === '' || keywords === undefined) {
        keywords = '1'
      }
      movieApi.searchPersonByKeyword(keywords, this.limit, this.offset)
        .then(function (res) {
          if (res.data['success'] === false) {
            _this.$message({
              message: res.data['error'],
              type: 'error'
            })
          } else {
            // 获取数据成功
            _this.addPerson(res.data['data'])
            _this.loading = false
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
    get_today_persons () {
      var _this = this
      movieApi.getTodayPersons()
        .then(function (res) {
          let persons = res.data['data']
          _this.persons = persons
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
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData',
    keywords () {
      this.persons = []
      this.offset = 0
      this.disabled = false
      this.buttonText = '点击加载更多'
    }
  }
}
</script>

<style lang="stylus" scoped>
.search-bar
  margin-top 30px
  margin-left 25%
  margin-bottom 30px
.el-select
  width 115px
.load-more-button
  width 100%
.movie-img
  float left
  width 200px
  height 200px
  img
    width 120px
.movie-content
  float left
  width 940px
</style>
