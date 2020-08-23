import styled from 'styled-components';
import logoPic from '../../statics/jianshu_logo.png';

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  z-index: 1;
`

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  box-sizing: border-box;
  padding-right: 70px;
  height: 100%;
  margin: 0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .iconfont.zoom {
    color: #aaa;
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &::placeholder {
    color: #aaa;
  }
  &.focused {
    width: 240px;
  }
  &.focused + .iconfont {
    background: grey;
    color: white;
  }
  &.slide-enter {
    transition: all 0.5s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .5s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background: white;
`
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
   float: right;
   font-size: 14px;
   &:hover {
     cursor: pointer;
   }
   .spin {
     display: block;
     float: left;
     font-size: 12px;
     margin-right: 2px;
     transition: all 0.2s ease-out;
     transform-origin: center center;
   }
`
export const SearchInfoList = styled.div`
  &::after {
    content: "";
    display: block;
    height: 0;
    clear:both;
    visibility: hidden;
  }
`

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  padding: 0 5px;
  font-size: 12px;
  line-height: 20px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 2px;
  margin-right: 10px;
  margin-bottom: 15px;
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  margin-right: 20px;
  border: 1px solid #ec6149;
  padding: 0 24px;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149;
  }
`