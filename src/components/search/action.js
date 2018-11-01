import { Toast } from 'antd-mobile';

const action = {
  getSearchList: (val) => {
   return (dispatch) => {
     console.log(val)
     return new Promise((reslove, reject) => {
       Toast.loading()
       const url = '/search/mroute.html?method=beibei.item.search&keyword=' + val + '&page=1&sort=hot&brand_ids=&%20cat_ids=';
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
  }
}

export default action
