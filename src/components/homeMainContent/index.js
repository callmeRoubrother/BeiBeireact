import { connect } from 'react-redux';
import store from '@/store'
import action from './action'
import UI from './UI';

const Com = connect(
    (state) => { // 給UI组件值
      return {
        homeContent: state.homeData.homeContent
      }
    },
    (dispatch) => {// 响应UI组件的行为
      return {
        getList: (urlNum) => {
          store.dispatch(action.getContentList(urlNum)).then(() => {
          }).catch(() => {
            console.log('err')
          })
        },
        changeId: (obj) => {
          store.dispatch(action.changeContentId(obj)).then(() => {
          }).catch(() => {
            console.log('err')
          })
        }
      }
    }
)(UI);

export default Com;
