import { Toast } from 'antd-mobile';

const action = {
  getTopImg: (dispatch) => {
    return new Promise((resolve, reject) => {
      const url = 'https://dsapi.beibei.com/ads/h5.html?ad_id=7_28_246_9_236&app=sbeibei&user_tag=2147483646&id=&client_info=%7B%22platform%22%3A%22ios%22%7D'
      Toast.loading()
      fetch(url).then(res => res.json()).then(data => {
        dispatch({
          type: 'CHANGE_TOP_IMG',
          data: data.promotion_pro_shortcuts
        })
        Toast.hide()
        resolve()
      }).catch(err => {
        console.log(err)
        reject()
      })
    })
  },
  setNum: (dispatch) => {
    return new Promise((resolve, reject) => {
      let num = Math.round(Math.random() * 1000000)
      dispatch({
        type: 'CHANGE_NUM',
        data: num
      })
      resolve()
    }).catch(err => console.log(err))
  }
}

export default action
