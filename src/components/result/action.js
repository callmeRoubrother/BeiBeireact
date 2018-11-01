import { Toast } from 'antd-mobile';

const action = {
  getResultList: (val, urlNum) => {
    return (dispatch) => {
      return new Promise((reslove, reject) => {
        Toast.loading()
        let url = '/search/mroute.html?method=beibei.item.search&keyword=' + val + '&page=' + urlNum +  '&sort=hot&brand_ids=&%20cat_ids='
        fetch(url).then(res => res.json()).then(data => {
          console.log(data)
          dispatch({
            type: 'CHANGE_LIST',
            data: data.search_items
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
  resetVal: (val) => {
    return (dispatch) => {
      return new Promise((resolve, reject) => {
        dispatch({
          type: 'CHANGE_LIST',
          data: val
        })
      })
    }
  },
  changeDetailId: (obj) => {
    return (dispatch) => {
      dispatch({
        type: 'CHANGE_ID',
        data: obj
      })
    }
  }
}

export default action

