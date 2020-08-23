import axios from 'axios';
import * as constants from './constants';

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  payload: {
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
  }
})

const addArticleList = (result, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  payload: {
    result,
    nextPage
  }
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json')
      .then((res) => {
        const result = res.data.data;
        const action = changeHomeData(result);
        dispatch(action);
      })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page)
      .then((res) => {
        const result = res.data.data;
        const action = addArticleList(result, page + 1);
        dispatch(action);
      })
  }
}

export const toggleScroll = (scrollTop) => {
  if(scrollTop > 200) {
    return {
      type: constants.TOGGLE_SCROLL_TOP,
      scrollTop: true
    }
  } else {
    return {
      type: constants.TOGGLE_SCROLL_TOP,
      scrollTop: false
    }
  }
}