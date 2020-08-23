// store的出口文件，将store文件夹下所有文件中需要暴露给外部文件使用的变量都集中到该文件下统一管理
// 这样方便外部文件引用时，减少引用路径的长度（简化引用路径）；
import reducer from './reducer';
import * as actionCreators from './actionCreators';
import * as constants from './constants';

export { reducer, actionCreators, constants }