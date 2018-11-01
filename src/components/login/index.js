import { connect } from 'react-redux'
import action from './action'
import UI from './UI';

const Com = connect(
    (state) => {
      return {
      }
    },
    (dispatch) => {
      return {
        toLogin: (obj, _this) => {
          dispatch(action.loging(obj, _this)).then(() => {
          }).catch(() => {
            console.log('err')
          })
        }
      }
    }
)(UI)

export default Com
