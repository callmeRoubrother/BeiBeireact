import { Toast } from 'antd-mobile';

const action = {
  getContentList: (urlNum) => {
    return (dispatch) => {
      return new Promise((reslove, reject) => {
        Toast.loading()
        let url = '/beibei/martshow/v1/7702-' + urlNum + '-all-0-1-0-9.html?client_info=undefined&h5_uid=undefined'
        fetch(url).then(res => res.json()).then(data => {
          const newData = []
          data.martshows.map((item, index) => {
            newData.push(item.type_home_item_single)
          })
          dispatch({
            type: 'CHANGE_HOMECONTENT',
            data: newData
          })
          Toast.hide()
          reslove()
        }).catch(err => {
          console.log(err)
          reject()
        })
      })
    }
  },
  changeContentId: (obj) => {
    return (dispatch) => {
      return new Promise((resolve, reject) => {
        dispatch({
          type: 'CHANGE_ID',
          data: obj
        })
      })
    }
  }
}

export default action

