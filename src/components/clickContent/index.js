import { connect } from 'react-redux';
import store from '@/store'
import action from './action'
import UI from './UI';

const Com = connect(
    (state) => { // 給UI组件值
      console.log(state)
      return {
        randomNum: state.homeTopImg.randomNum,
        clickData: state.homeTopImg.clickData
      }
    },
    (dispatch) => { // 响应UI组件的行为
      return {
        getList: (val, num) => {
          store.dispatch(action.getData(val, num)).then(() => {
          }).catch(err => {
            console.log(err)
          })
        },
        changeNum: () => {
          store.dispatch(action.changeNum).then(() => {
          }).catch(err => {
            console.log(err)
          })
        },
        changeId: (obj) => {
          store.dispatch(action.changeContentId(obj))
        }
      }
    }
)(UI);

export default Com;
