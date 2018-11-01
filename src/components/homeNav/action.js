const action = {
  getList: (val, urlNum) => {
    return (dispatch) => {
      return new Promise((reslove, reject) => {
        let url = '/search/mroute.html?method=beibei.item.search&keyword=' + val + '&page=' + urlNum +  '&sort=hot&brand_ids=&%20cat_ids='
        fetch(url).then(res => res.json()).then(data => {
          console.log(data)
          dispatch({
            type: 'CHANGE_HOMECONTENT',
            data: data.search_items
          })
          reslove()
        }).catch(err => {
          console.log(err)
          reject()
        })
      })
    }
  },
}

export default action
