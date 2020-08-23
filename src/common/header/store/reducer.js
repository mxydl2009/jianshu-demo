import * as constants from './constants';
import { fromJS } from 'immutable';
// 使用fromJS()将JavaScript对象变为immutable对象;
// 之后使用immutable对象，要用get()方法来读取其中的属性值
// 要更新immutable对象，要用set()方法来更新其中的属性值，实际上set()方法会结合之前的
// immutable对象生成一个新的immutable对象；
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (prevState = defaultState, action) => {
  switch(action.type) {
    case constants.SEARCH_FOCUS:
      return prevState.set('focused', true);
    case constants.SEARCH_BLUR:
      return prevState.set('focused', false);
    case constants.CHANGE_LIST:
      return prevState.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case constants.MOUSE_ENTER:
      return prevState.set('mouseIn', true);
    case constants.MOUSE_LEAVE:
      return prevState.set('mouseIn', false);
    case constants.CHANGE_PAGE:
      return prevState.set('page', action.page);
    default:
    return defaultState;
  }
}