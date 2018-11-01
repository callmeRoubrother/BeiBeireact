import { connect } from 'react-redux';
import UI from './UI';

const Com = connect(
    (state) => { // 給UI组件值
      return {
        searchVal: state.searchData.searchVal
      }
    },
    (dispatch) => {// 响应UI组件的行为
      return {
        // getList: (val) => {
        //   console.log(val)
        //   dispatch(action.getSearchList(val)).then(() => {
        //   }).catch(() => {
        //     console.log('err')
        //   })
        // }
      }
    }
)(UI);

export default Com;
