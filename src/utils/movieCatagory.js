const types = {
  movieid: 'movieid',
  score: 'score',
  year: 'year',
  types: '10',
  region: '12',
  languages: '14'
}
const movieIndex = {
  button_index: [{
    button_option: '同性',
    keywords: '同性',
    type: types['types']
  }, {
    button_option: '家庭',
    keywords: '家庭',
    type: types['types']
  }, {
    button_option: '历史',
    keywords: '历史',
    type: types['types']
  }, {
    button_option: '爱情',
    keywords: '爱情',
    type: types['types']
  }, {
    button_option: '动作',
    keywords: '动作',
    type: types['types']
  }, {
    button_option: '戏曲',
    keywords: '戏曲',
    type: types['types']
  }, {
    button_option: '悬疑',
    keywords: '悬疑',
    type: types['types']
  }, {
    button_option: '情色',
    keywords: '情色',
    type: types['types']
  }, {
    button_option: '动画',
    keywords: '动画',
    type: types['types']
  }, {
    button_option: '恐怖',
    keywords: '恐怖',
    type: types['types']
  }, {
    button_option: '冒险',
    keywords: '冒险',
    type: types['types']
  }, {
    button_option: '喜剧',
    keywords: '喜剧',
    type: types['types']
  }, {
    button_option: '奇幻',
    keywords: '奇幻',
    type: types['types']
  }, {
    button_option: '惊悚',
    keywords: '惊悚',
    type: types['types']
  }, {
    button_option: '儿童',
    keywords: '儿童',
    type: types['types']
  }, {
    button_option: '音乐',
    keywords: '音乐',
    type: types['types']
  }, {
    button_option: '科幻',
    keywords: '科幻',
    type: types['types']
  }, {
    button_option: '犯罪',
    keywords: '犯罪',
    type: types['types']
  }, {
    button_option: '动画',
    keywords: '动画',
    type: types['types']
  }, {
    button_option: '短片',
    keywords: '短片',
    type: types['types']
  }, {
    button_option: '灾难',
    keywords: '灾难',
    type: types['types']
  }, {
    button_option: '真人秀',
    keywords: '真人秀',
    type: types['types']
  }, {
    button_option: '剧情',
    keywords: '剧情',
    type: types['types']
  }, {
    button_option: '武侠',
    keywords: '武侠',
    type: types['types']
  }, {
    button_option: '西部',
    keywords: '西部',
    type: types['types']
  }, {
    button_option: '歌舞',
    keywords: '歌舞',
    type: types['types']
  }, {
    button_option: '传记',
    keywords: '传记',
    type: types['types']
  }, {
    button_option: '脱口秀',
    keywords: '脱口秀',
    type: types['types']
  }, {
    button_option: '古装',
    keywords: '古装',
    type: types['types']
  }, {
    button_option: '黑色电影',
    keywords: '黑色电影',
    type: types['types']
  }, {
    button_option: '舞台艺术',
    keywords: '舞台艺术',
    type: types['types']
  }, {
    button_option: '战争',
    keywords: '战争',
    type: types['types']
  }, {
    button_option: '运动',
    keywords: '运动',
    type: types['types']
  }],
  year_options: [{
    year: '2019',
    keywords: '2019',
    type: types['year']
  }, {
    year: '2018',
    keywords: '2018',
    type: types['year']
  }, {
    year: '2017',
    keywords: '2017',
    type: types['year']
  }, {
    year: '2016',
    keywords: '2016',
    type: types['year']
  }, {
    year: '2015',
    keywords: '2015',
    type: types['year']
  }, {
    year: '2014',
    keywords: '2014',
    type: types['year']
  }, {
    year: '2013',
    keywords: '2013',
    type: types['year']
  }, {
    year: '2012',
    keywords: '2012',
    type: types['year']
  }, {
    year: '2011',
    keywords: '2011',
    type: types['year']
  }, {
    year: '2010',
    keywords: '2010',
    type: types['year']
  }, {
    year: '2009',
    keywords: '2009',
    type: types['year']
  }, {
    year: '2008',
    keywords: '2008',
    type: types['year']
  }, {
    year: '2007',
    keywords: '2007',
    type: types['year']
  }, {
    year: '2006',
    keywords: '2006',
    type: types['year']
  }, {
    year: '2005',
    keywords: '2005',
    type: types['year']
  }, {
    year: '2004',
    keywords: '2004',
    type: types['year']
  }, {
    year: '2003',
    keywords: '2003',
    type: types['year']
  }, {
    year: '2002',
    keywords: '2002',
    type: types['year']
  }, {
    year: '2001',
    keywords: '2001',
    type: types['year']
  }, {
    year: '2000',
    keywords: '2000',
    type: types['year']
  }],
  place_options: [{
    place: '中国',
    keywords: '中国',
    type: types['region']
  }, {
    place: '台湾',
    keywords: '台湾',
    type: types['region']
  }, {
    place: '香港',
    keywords: '香港',
    type: types['region']
  }, {
    place: '日本',
    keywords: '日本',
    type: types['region']
  }, {
    place: '英国',
    keywords: '英国',
    type: types['region']
  }, {
    place: '韩国',
    keywords: '韩国',
    type: types['region']
  }, {
    place: '法国',
    keywords: '法国',
    type: types['region']
  }, {
    place: '法国',
    keywords: '法国',
    type: types['region']
  }, {
    place: '美国',
    keywords: '美国',
    type: types['region']
  }, {
    place: '德国',
    keywords: '德国',
    type: types['region']
  }],
  type_options: [{
    keywords: '同性',
    type: types['types']
  }, {
    keywords: '家庭',
    type: types['types']
  }, {
    keywords: '历史',
    type: types['types']
  }, {
    keywords: '爱情',
    type: types['types']
  }, {
    keywords: '动作',
    type: types['types']
  }, {
    keywords: '戏曲',
    type: types['types']
  }, {
    keywords: '悬疑',
    type: types['types']
  }, {
    keywords: '情色',
    type: types['types']
  }, {
    keywords: '動畫 Animation',
    type: types['types']
  }, {
    keywords: '恐怖',
    type: types['types']
  }, {
    keywords: '冒险',
    type: types['types']
  }, {
    keywords: '喜剧',
    type: types['types']
  }, {
    keywords: '奇幻',
    type: types['types']
  }, {
    keywords: '惊悚',
    type: types['types']
  }, {
    keywords: '儿童',
    type: types['types']
  }, {
    keywords: '音乐',
    type: types['types']
  }, {
    keywords: '科幻',
    type: types['types']
  }, {
    keywords: '犯罪',
    type: types['types']
  }, {
    keywords: '动画',
    type: types['types']
  }, {
    keywords: '短片',
    type: types['types']
  }, {
    keywords: '灾难',
    type: types['types']
  }, {
    keywords: '真人秀',
    type: types['types']
  }, {
    keywords: '剧情',
    type: types['types']
  }, {
    keywords: '武侠',
    type: types['types']
  }, {
    keywords: '西部',
    type: types['types']
  }, {
    keywords: '歌舞',
    type: types['types']
  }, {
    keywords: '传记',
    type: types['types']
  }, {
    keywords: '脱口秀',
    type: types['types']
  }, {
    keywords: '古装',
    type: types['types']
  }, {
    keywords: '黑色电影',
    type: types['types']
  }, {
    keywords: '舞台艺术',
    type: types['types']
  }, {
    keywords: '喜劇 Comedy',
    type: types['types']
  }, {
    keywords: '战争',
    type: types['types']
  }, {
    keywords: '运动',
    type: types['types']
  }],
  sort_options: [{
    sorting: '默认排序',
    keywords: '默认排序',
    type: types['movieid']
  }, {
    sorting: '评分排序',
    keywords: '评分排序',
    type: types['score']
  }, {
    sorting: '影片年份排序',
    keywords: '影片年份排序',
    type: types['year']
  }]
}
// const movieIndex = {
//   button_index: [{
//     button_option: '热门',
//     keywords: '4.0',
//     type: types['score']
//   }, {
//     button_option: '最新',
//     keywords: '2019',
//     type: types['year']
//   }, {
//     button_option: '经典',
//     keywords: '4.5',
//     type: types['score']
//   }, {
//     button_option: '犯罪',
//     keywords: '犯罪',
//     type: types['types']
//   }, {
//     button_option: '古装',
//     keywords: '古装',
//     type: types['types']
//   }, {
//     button_option: '科幻',
//     keywords: '科幻',
//     type: types['types']
//   }, {
//     button_option: '奇幻',
//     keywords: '奇幻',
//     type: types['types']
//   }, {
//     button_option: '冒险',
//     keywords: '冒险',
//     type: types['types']
//   }, {
//     button_option: '音乐',
//     keywords: '音乐',
//     type: types['types']
//   }, {
//     button_option: '真人秀',
//     keywords: '真人秀',
//     type: types['types']
//   }, {
//     button_option: '惊悚',
//     keywords: '惊悚',
//     type: types['types']
//   }, {
//     button_option: '历史',
//     keywords: '历史',
//     type: types['types']
//   }, {
//     button_option: '战争',
//     keywords: '战争',
//     type: types['types']
//   }, {
//     button_option: '历史',
//     keywords: '历史',
//     type: types['types']
//   }, {
//     button_option: '恐怖',
//     keywords: '恐怖',
//     type: types['types']
//   }, {
//     button_option: '武侠',
//     keywords: '武侠',
//     type: types['types']
//   }, {
//     button_option: '脱口秀',
//     keywords: '脱口秀',
//     type: types['types']
//   }, {
//     button_option: '运动',
//     keywords: '运动',
//     type: types['types']
//   }, {
//     button_option: '儿童',
//     keywords: '儿童',
//     type: types['types']
//   }, {
//     button_option: '戏曲',
//     keywords: '戏曲',
//     type: types['types']
//   }, {
//     button_option: '喜剧',
//     keywords: '喜剧',
//     type: types['types']
//   }, {
//     button_option: '灾难',
//     keywords: '灾难',
//     type: types['types']
//   }, {
//     button_option: '歌舞',
//     keywords: '歌舞',
//     type: types['types']
//   }, {
//     button_option: '歌舞',
//     keywords: '歌舞',
//     type: types['types']
//   }, {
//     button_option: '歌舞',
//     keywords: '歌舞',
//     type: types['types']
//   }, {
//     button_option: '歌舞',
//     keywords: '歌舞',
//     type: types['types']
//   }, {
//     button_option: '歌舞',
//     keywords: '歌舞',
//     type: types['types']
//   }, {
//     button_option: '歌舞',
//     keywords: '歌舞',
//     type: types['types']
//   }, {
//     button_option: '歌舞',
//     keywords: '歌舞',
//     type: types['types']
//   }, {
//     button_option: '歌舞',
//     keywords: '歌舞',
//     type: types['types']
//   }, {
//     button_option: '歌舞',
//     keywords: '歌舞',
//     type: types['types']
//   }, {
//     button_option: '歌舞',
//     keywords: '歌舞',
//     type: types['types']
//   }, {
//     button_option: '歌舞',
//     keywords: '歌舞',
//     type: types['types']
//   }],
//   year_options: [{
//     year: '2019',
//     keywords: '2019',
//     type: types['year']
//   }, {
//     year: '2018',
//     keywords: '2018',
//     type: types['year']
//   }, {
//     year: '2017',
//     keywords: '2017',
//     type: types['year']
//   }, {
//     year: '2016',
//     keywords: '2016',
//     type: types['year']
//   }, {
//     year: '2015',
//     keywords: '2015',
//     type: types['year']
//   }, {
//     year: '2014',
//     keywords: '2014',
//     type: types['year']
//   }, {
//     year: '2013',
//     keywords: '2013',
//     type: types['year']
//   }, {
//     year: '2012',
//     keywords: '2012',
//     type: types['year']
//   }, {
//     year: '2011',
//     keywords: '2011',
//     type: types['year']
//   }, {
//     year: '2010',
//     keywords: '2010',
//     type: types['year']
//   }, {
//     year: '2009',
//     keywords: '2009',
//     type: types['year']
//   }, {
//     year: '2008',
//     keywords: '2008',
//     type: types['year']
//   }, {
//     year: '2007',
//     keywords: '2007',
//     type: types['year']
//   }, {
//     year: '2006',
//     keywords: '2006',
//     type: types['year']
//   }, {
//     year: '2005',
//     keywords: '2005',
//     type: types['year']
//   }, {
//     year: '2004',
//     keywords: '2004',
//     type: types['year']
//   }, {
//     year: '2003',
//     keywords: '2003',
//     type: types['year']
//   }, {
//     year: '2002',
//     keywords: '2002',
//     type: types['year']
//   }, {
//     year: '2001',
//     keywords: '2001',
//     type: types['year']
//   }, {
//     year: '2000',
//     keywords: '2000',
//     type: types['year']
//   }],
//   place_options: [{
//     place: '中国',
//     keywords: '中国',
//     type: types['region']
//   }, {
//     place: '台湾',
//     keywords: '台湾',
//     type: types['region']
//   }, {
//     place: '香港',
//     keywords: '香港',
//     type: types['region']
//   }, {
//     place: '日本',
//     keywords: '日本',
//     type: types['region']
//   }, {
//     place: '英国',
//     keywords: '英国',
//     type: types['region']
//   }, {
//     place: '韩国',
//     keywords: '韩国',
//     type: types['region']
//   }, {
//     place: '法国',
//     keywords: '法国',
//     type: types['region']
//   }, {
//     place: '法国',
//     keywords: '法国',
//     type: types['region']
//   }, {
//     place: '美国',
//     keywords: '美国',
//     type: types['region']
//   }, {
//     place: '德国',
//     keywords: '德国',
//     type: types['region']
//   }],
//   type_options: [{
//     keywords: '同性',
//     type: types['types']
//   }, {
//     keywords: '家庭',
//     type: types['types']
//   }, {
//     keywords: '历史',
//     type: types['types']
//   }, {
//     keywords: '爱情',
//     type: types['types']
//   }, {
//     keywords: '动作',
//     type: types['types']
//   }, {
//     keywords: '戏曲',
//     type: types['types']
//   }, {
//     keywords: '悬疑',
//     type: types['types']
//   }, {
//     keywords: '情色',
//     type: types['types']
//   }, {
//     keywords: '動畫 Animation',
//     type: types['types']
//   }, {
//     keywords: '恐怖',
//     type: types['types']
//   }, {
//     keywords: '冒险',
//     type: types['types']
//   }, {
//     keywords: '喜剧',
//     type: types['types']
//   }, {
//     keywords: '奇幻',
//     type: types['types']
//   }, {
//     keywords: '惊悚',
//     type: types['types']
//   }, {
//     keywords: '儿童',
//     type: types['types']
//   }, {
//     keywords: '音乐',
//     type: types['types']
//   }, {
//     keywords: '科幻',
//     type: types['types']
//   }, {
//     keywords: '犯罪',
//     type: types['types']
//   }, {
//     keywords: '动画',
//     type: types['types']
//   }, {
//     keywords: '短片',
//     type: types['types']
//   }, {
//     keywords: '灾难',
//     type: types['types']
//   }, {
//     keywords: '真人秀',
//     type: types['types']
//   }, {
//     keywords: '剧情',
//     type: types['types']
//   }, {
//     keywords: '武侠',
//     type: types['types']
//   }, {
//     keywords: '西部',
//     type: types['types']
//   }, {
//     keywords: '歌舞',
//     type: types['types']
//   }, {
//     keywords: '传记',
//     type: types['types']
//   }, {
//     keywords: '脱口秀',
//     type: types['types']
//   }, {
//     keywords: '古装',
//     type: types['types']
//   }, {
//     keywords: '黑色电影',
//     type: types['types']
//   }, {
//     keywords: '舞台艺术',
//     type: types['types']
//   }, {
//     keywords: '喜劇 Comedy',
//     type: types['types']
//   }, {
//     keywords: '战争',
//     type: types['types']
//   }, {
//     keywords: '运动',
//     type: types['types']
//   }],
//   sort_options: [{
//     sorting: '默认排序',
//     keywords: '默认排序',
//     type: types['id']
//   }, {
//     sorting: '评分排序',
//     keywords: '评分排序',
//     type: types['score']
//   }, {
//     sorting: '影片年份排序',
//     keywords: '影片年份排序',
//     type: types['year']
//   }]
// }

export default {
  movieIndex
}
