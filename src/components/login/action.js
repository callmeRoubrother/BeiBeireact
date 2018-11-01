import axios from 'axios'
import { Toast } from 'antd-mobile'
const action = {
  loging: (params, _this) => {
    return (dispatch) => {
      return new Promise((resolve, reject) => {
        axios.post('/xunxun/users/login?', params).then(res => {
          if (res.data === 1) {
            dispatch({
              type: 'CHECK_LOGIN',
              data: 'ok'
            })
            dispatch({
              type: 'CHECK_USER',
              data: params.username
            })
            _this.props.history.push('/')
          } else if (res.data === -1) {
            Toast.info('密码错误')
          } else if (res.data === 2) {
            Toast.info('没有找到用户名，是否前往注册')
            this.props.history.push('/register')
          } else {
            Toast.info('登录失败')
          }
        }).catch(err => console.log(err))
      })
    }
  }
}

export default action
