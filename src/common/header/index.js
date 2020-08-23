import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style';

class Header extends Component {

  getListArea() {
    const { 
      focused, list, page, mouseIn, totalPage
      , handleMouseEnter, handleMouseLeave, handleChangePage 
    } = this.props;
    const jsList = list.toJS();
    const pageList = [];
    if(jsList.length) {
      for(let i = (page - 1) * 10; i < page * 10; i ++) {
        if(jsList[i] !== undefined) {
          pageList.push(<SearchInfoItem key={jsList[i]}>{ jsList[i] }</SearchInfoItem>)
        }
      }      
    }
    if(focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => { handleChangePage(page, totalPage, this.spin) }}
            >
              <span className='iconfont spin' ref={(icon) => {this.spin = icon;}}>&#xe851;</span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              pageList
            }
            
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }
  
  render() {
    const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        
        <Nav>
          <NavItem className='left'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          {
            login ? 
              <NavItem className='right'
                onClick={() => {logout()}}
              >退出</NavItem>
              : <Link to='/login'>
                  <NavItem className='right'>登录</NavItem>
                </Link>
          }
          
          <NavItem className='right'>
            <span className='iconfont'>&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={500}
              classNames='slide'
            >
              <NavSearch
                className={focused ? 'focused': ''}
                onFocus={() => {handleInputFocus(list)}}
                onBlur={handleInputBlur}
              />     
            </CSSTransition>
            <span className='iconfont zoom'>&#xe610;</span>
            {this.getListArea(focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className='writing'><span className='iconfont'>&#xe6e5;</span> 写文章</Button>
          </Link>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      console.log('transform: ', spin.style.transform);
      let OriginAngle = spin.style.transform ? parseInt(spin.style.transform.slice(7, 13)): 0;
      spin.style.transform = `rotate(${OriginAngle + 360}deg)`;
      if(page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);