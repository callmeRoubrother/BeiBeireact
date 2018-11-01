import { Toast } from 'antd-mobile';

const action = {
  getBannerList: (dispatch) => {
    return new Promise((reslove, reject) => {
      Toast.loading()
      const url = 'https://webservice.juanpi.com/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4&app_name=zhe&app_version=&platform=&catname=newest_zhe';
      fetch(url).then(res => res.json()).then(data => {
        console.log(data.adsInfo.slide_ads.config.slide)
        dispatch({
          type: 'CHANGE_BANNER',
          data: data.adsInfo.slide_ads.config.slide
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

export default action
