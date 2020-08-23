import React, { PureComponent } from  'react';
import { connect } from 'react-redux';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackToTop
} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store/index';

class Home extends PureComponent {

  componentDidMount() {
    this.props.changeHomeData();
    window.addEventListener('scroll', this.props.changeScrollToTop);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollToTop);
  }
  handleScrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  render() {
    const { showScroll } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className='banner-img'
            src="https://upload.jianshu.io/admin_banners/web_images/4928/6e9aa1978a269f34cccf0a8971e168ad47b79262.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          showScroll ? 
           <BackToTop onClick={this.handleScrollTop}>&#8743;</BackToTop>
           : null
        }
        
      </HomeWrapper>
    )
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollToTop() {
    let scrollTop = document.documentElement.scrollTop;
    dispatch(actionCreators.toggleScroll(scrollTop));
  }
})
export default connect(
  mapState,
  mapDispatch
)(Home);