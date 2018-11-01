import { connect } from 'react-redux';
import store from '@/store'
import action from './action'
import UI from './UI';

const Com = connect(
    (state) => { // 給UI组件值
      console.log(state)
      return {
        searchVal: state.searchData.searchVal,
        searchList: state.searchData.searchList
      }
    },
    (dispatch) => {// 响应UI组件的行为
      return {
        getList: (val, urlNum) => {
          store.dispatch(action.getResultList(val, urlNum)).then(() => {
          }).catch(() => {
            console.log('err')
          })
        },
        changVal: (val) => {
          store.dispatch(action.resetVal(val)).then(() => {
          }).catch(() => {
            console.log('err')
          })
        },
        changeId: (obj) => {
          store.dispatch(action.changeDetailId(obj))
        }
      }
    }
)(UI);

export default Com;
