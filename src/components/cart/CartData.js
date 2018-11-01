import { connect } from 'react-redux';
import UI from './UI';

const Com = connect (
  (state) => {
    return {
      isLogin: state.loginData.isLogin
    }
  },
  (dispatch) => {
    return {
    }
  }
)(UI)


export default Com
