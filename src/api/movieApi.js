import {movieApi} from './api'
import axios from 'axios'

export default {
  getDailyMovie (userid, page) {
    let url = movieApi.dailyMovieUrl() + '?userid=' + userid + '&page=' + page
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    }
    )
  },
  get_also_like_change (movieid, page) {
    let url = movieApi.getAlsoLikeMovieUrl() + '?movieid=' + movieid + '&page=' + page
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    }
    )
  },
  getRatinglist (userid) {
    let url = movieApi.ratingListUrl() + '?userid=' + userid
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    }
    )
  },
  getCommentList (userid) {
    let url = movieApi.commentListUrl() + '?userid=' + userid
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    }
    )
  },
  submitComment (movieid, commentDate, commentText, userid) {
    let url = movieApi.commentMovieUrl() + '?movieid=' + movieid + '&commenttime=' + commentDate + '&content=' + commentText + '&userid=' + userid
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    }
    )
  },
  getDailyMovieWithUnlogin (page) {
    let url = movieApi.dailyMovieUrlWithUnlogin() + '?page=' + page
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    }
    )
  },
  getHighScoreMovie () {
    return axios({
      method: 'get',
      url: movieApi.highScoreMovieUrl(),
      withCredentials: true
    }
    )
  },
  getSuggestionMovie (keyword, limit = 6) {
    // TODO 使用方法构造querystring,暂时手工书写
    let url = movieApi.suggestionMovieUrl() + '?keyword=' + keyword + '&limit=' + limit
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    }
    )
  },
  searchMovie (keywords, sort, year, region, limit = 10, offset = 0) {
    let url = movieApi.searchMovieUrl() + '?keywords=' + keywords + '&sort=' + sort + '&limit=' + limit + '&offset=' + offset + '&year=' + year + '&region=' + region
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    }
    )
  },
  searchMoviyByKeyword (keywords, limit, offset) {
    let url = movieApi.searchMovieByKeywordsUrl() + '?keywords=' + keywords + '&limit=' + limit + '&offset=' + offset
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    }
    )
  },
  searchPersonByKeyword (keywords, limit, offset) {
    let url = movieApi.searchPersonByKeywordsUrl() + '?keywords=' + keywords + '&limit=' + limit + '&offset=' + offset
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    }
    )
  },
  getMovieByMovieId (id) {
    let url = movieApi.movieUrl(id)
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    }
    )
  },
  getPersonByPersonId (id) {
    let url = movieApi.personUrl(id)
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    }
    )
  },
  getMovieByDoubanId (id) {
    let url = movieApi.doubanMovieUrl(id)
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    }
    )
  },
  submitRating (ratingvalue, userid, movieid) {
    let url = movieApi.ratingMovieUrl() + '?ratingvalue=' + ratingvalue + '&userid=' + userid + '&movieid=' + movieid
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    }
    )
  },
  deleteComment (commentid) {
    let url = movieApi.deleteCommentUrl() + '?commentid=' + commentid
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    }
    )
  },
  getTodayPersons () {
    let url = movieApi.todayPersonUrl()
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    }
    )
  }
}
