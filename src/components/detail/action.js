import { Toast } from 'antd-mobile';
import axios from 'axios'
import './mock.js'

const action = {
  getBenner: (dispatch) => {
    Toast.loading('Loading...', 1);
    const url = 'https://www.wangxinglong.com/banner'
    axios.get(url).then(res=>{
      // console.log(res.data.bannerlist)
      dispatch({
          type: 'CHANGE_DETAILBANNER',
          banner: res.data.bannerlist
      })
    }).catch(err => console.log(err))
  },
  getTilte: (dispatch) => {

    const url = 'https://www.wangxinglong.com/dtaillist'
    axios.get(url).then(res=>{
      // console.log(res.data)
      dispatch({
          type: 'CHANGE_DETAILTILTE',
          prolistdata: res.data
      })
    }).catch(err => console.log(err))
  },
  getMerchantdata: (dispatch) => {
    const url = 'https://www.wangxinglong.com/merchantlist'
    axios.get(url).then(res=>{
      console.log(res.data)
      dispatch({
          type: 'CHANGE_MERCHANTDATA',
          merchantdata: res.data
      })
    }).catch(err => console.log(err))
  },
  getGuessLink: (obj) => {
    const url = '/search//mroute.html?method=beibei.module.pintuan.recom.list.get&scene_id=app_item_detail_guess_you_like&event_id=' + obj.id2 + '&iid=' + obj.id1 + '&uid=' + obj.id3
    return (dispatch) => {
      fetch(url).then(res => res.json())
          .then(data => {
            dispatch({
              type: 'CHANGE_GUESSLINK',
              recom_items: data.recom_items
            })
          }).catch(err => console.log(err))
    }
  },
  getMerchitem: (obj) => {
    const url = '/search/mroute.html?method=beibei.module.pintuan.recom.list.get&scene_id=app_item_detail_buy_recom&iid=' + obj.id1 + '&event_id=' + obj.id2 + '&uid=' + obj.id3
    return (dispatch) => {
      fetch(url).then(res => res.json())
          .then(data => {
            // console.log(data.recom_items)
            dispatch({
              type: 'CHANGE_MERCHITEM',
              merchitem: data.recom_items
            })
          }).catch(err => console.log(err))
    }
  },
  changeCart: (obj) => {
    let arr = []
    arr.push(obj)
    console.log(arr)
    return (dispatch) => {
      dispatch({
        type: 'CHANGE_CARTLIST',
        data: arr
      })
    }
  }
}

export default action
