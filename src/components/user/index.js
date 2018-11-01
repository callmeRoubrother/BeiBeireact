import { connect } from 'react-redux';
import UI from './UI'
import action from './action'
import store from '@/store'

const Com = connect(
    (state) => {
      return {
        userName: state.loginData.userName,
        isLogin: state.loginData.isLogin
      }
    },
    (dispatch) => {
      return {
        loginOut: () => {
          store.dispatch(action.loginout).then(() => {
          }).catch(() => {
            console.log('err')
          })
        }
      }
    }
)(UI)

export default Com
