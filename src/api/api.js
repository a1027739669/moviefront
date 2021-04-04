const host = process.env.NODE_ENV === 'production'
? 'http://localhost:8000'
: 'http://localhost:8000'

export const commonApi = {
  // GET
  oAuthUrl: type => host + '/oauth/' + type,
  // GET
  captchaUrl: () => host + '/captcha',
  // POST
  checkCaptchaUrl: captcha => host + '/captcha?captcha=' + captcha,
  // POST
  checkUsernameUrl: username => host + '/inspection/username?name=' + username,
  // POST
  checkUserEmailUrl: userEmail => host + '/inspection/userEmail?email=' + userEmail,
  // POST
  checkVerificationUrl: verification => host + '/inspection/verification?verification=' + verification,
  // POST
  sendEmailUrl: email => host + '/email?email=' + email
}

export const userApi = {
  // POST
  loginUrl: () => host + '/user/login/',
  // POST
  registerUrl: () => host + '/authentication/account',
  // GET
  getProfileUrl: () => host + '/accounts/profile',
  // POST
  updateProfileUrl: () => host + '/user/update/',
  // POST
  updatePasswordUrl: () => host + '/accounts/password',
  // POST
  resetPasswordUrl: () => host + '/accounts/reset-password',
  // POST
  sendMessageUrl: () => host + '/send/',
  saveImgUrl: () => host + '/user/save',
  saveMessageUrl: () => host + '/message/save/',
  getMessageUrl: () => host + '/message/get'
}

export const movieApi = {
  // GET
  dailyMovieUrl: () => host + '/movies/today',
  todayPersonUrl: () => host + '/persons/today',
  dailyMovieUrlWithUnlogin: () => host + '/movies/unlogintoday',
  highScoreMovieUrl: () => host + '/movies/highscoremovie',
  // GET
  searchMovieUrl: () => host + '/searches/movies',
  searchMovieByKeywordsUrl: () => host + '/movies/search',
  searchPersonByKeywordsUrl: () => host + '/persons/search',
  // GET
  suggestionMovieUrl: () => host + '/searches/suggestions',
  // GET
  movieUrl: id => host + '/movie?id=' + id,
  personUrl: id => host + '/person?id=' + id,
  // GET
  doubanMovieUrl: id => host + '/movie/douban/?id=' + id,
  ratingMovieUrl: () => host + '/movies/rating',
  commentMovieUrl: () => host + '/movies/comment',
  ratingListUrl: () => host + '/movies/ratinglist',
  commentListUrl: () => host + '/movies/commentlist',
  deleteCommentUrl: () => host + '/movies/deletecomment',
  getAlsoLikeMovieUrl: () => host + '/movies/alsolike',
  getPersonUrl: () => host + '/movies/alsolike'
}
