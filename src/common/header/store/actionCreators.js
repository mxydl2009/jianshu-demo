import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

// 内部用到的action creator
const changeList = (data) => {
  return {
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
  }
}

export const searchFocus = () => {
  return {
    type: constants.SEARCH_FOCUS
  }
}

export const searchBlur = () => {
  return {
    type: constants.SEARCH_BLUR
  }
}



export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
      .then((res) => {
        if(res.data && res.data.success) {
          const data = res.data.data;
          dispatch(changeList(data));
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

export const mouseEnter = () => {
  return {
    type: constants.MOUSE_ENTER
  }
}

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page
})