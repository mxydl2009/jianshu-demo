import React, { PureComponent } from  'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  ListItem,
  ListInfo,
  LoadMore,
} from '../style';
import { actionCreators } from '../store'

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <>
        {
          list.map((item) => (
            <Link to={`/detail/${item.get('id')}`} key={item.get('id')}>
              <ListItem>
                <img 
                  className='list-item-pic'
                  src={item.get('imgUrl')} 
                  alt=""/>
                <ListInfo>
                  <h3 className='list-info-title'>{ item.get('title') }</h3>
                  <p className='list-info-desc'>{ item.get('desc') }</p>
                </ListInfo>
              </ListItem>  
            </Link>          
          ))
        }
        <LoadMore
          onClick={() => { getMoreList(page) }}
        >更多内容</LoadMore>
      </>
    )
  }
}

const mapState = (state) => {
   return {
     list: state.getIn(['home', 'articleList']),
     page: state.getIn(['home', 'articlePage'])
   }
}
const mapDispatch = (dispatch) => {
  return {
    getMoreList(page) {
      dispatch(actionCreators.getMoreList(page));
    }
  }
}
export default connect(
  mapState,
  mapDispatch
)(List);