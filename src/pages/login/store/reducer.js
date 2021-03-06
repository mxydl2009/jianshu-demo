import { fromJS } from 'immutable';
import * as constants from './constants'; 
// 使用fromJS()将JavaScript对象变为immutable对象;
// 之后使用immutable对象，要用get()方法来读取其中的属性值
// 要更新immutable对象，要用set()方法来更新其中的属性值，实际上set()方法会结合之前的
// immutable对象生成一个新的immutable对象；
const defaultState = fromJS({
  login: false
});

export default (prevState = defaultState, action) => {
  switch(action.type) {

    case constants.CHANGE_LOGIN:
      return prevState.set('login', true)

    case constants.LOGOUT:
      return prevState.set('login', false)

    default:
    return prevState;
  }
}