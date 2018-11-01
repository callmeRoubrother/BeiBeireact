import { connect } from 'react-redux'
import store from '@/store';
import action from './action'
import UI from './UI';

const Com = connect(
    (state) => {
      return {
        prolist: state.homeTopImg.prolist
      }
    },
    (dispatch) => {
      return {
        getList: () => {
          store.dispatch(action.getTopImg).then(() => {
          }).catch(() => {
            console.log('err')
          })
        },
        getNum: () => {
          store.dispatch(action.setNum).then(() => {
          }).catch(() => {
            console.log('err')
          })
        }
      }
    }
)(UI)

export default Com
