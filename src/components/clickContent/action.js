import { Toast } from 'antd-mobile';
const action = {
  getData: (val, num) => {
    return (dispatch) => {
      return new Promise((resolve, reject) => {
        Toast.info()
        fetch('/beibei/martgoods/discover/v3/' + num + '-20-27819646.html?h5_uid=' + val).then(res => res.json()).then(data => {
          console.log(data)
          dispatch({
            type: 'CHANGE_CLICK',
            data: data.lists
          })
          Toast.hide()
          resolve()
        }).catch(err => {
          console.log(err)
          reject()
        })
      })
    }
  },
  changeNum: (dispatch) => {
    return new Promise((resolve, reject) => {
      let num = Math.round(Math.random() * 1000000)
      dispatch({
        type: 'CHANGE_NUM',
        data: num
      })
    })
  },
  changeContentId: (obj) => {
    return (dispatch) => {
      dispatch({
        type: 'CHANGE_ID',
        data: obj
      })
    }
  }
}

export default action
