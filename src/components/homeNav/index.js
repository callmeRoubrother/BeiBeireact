import { connect } from 'react-redux'
import store from '@/store';
import action from './action'
import UI from './UI';

const Com = connect(
    (state) => {
      return {
        homeContent: state.homeTopImg.homeContent
      }
    },
    (dispatch) => {
      return {
        changeList: (val, num) => {
          store.dispatch(action.getList(val, num)).then(() => {
          }).catch(() => {
            console.log('err')
          })
        }
      }
    }
)(UI)

export default Com

