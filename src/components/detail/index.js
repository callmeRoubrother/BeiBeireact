import { connect } from 'react-redux';
import store from '@/store'
import UI from './UI';
import action from './action'

const Com = connect (
  (state) => {
    console.log(state)
    return {
      banner: state.Detaildata.banner,
      recom_items: state.Detaildata.recom_items,
      prolistdata: state.Detaildata.prolistdata,
      merchantdata: state.Detaildata.merchantdata,
      merchitem: state.Detaildata.merchitem,
      cartList: state.Detaildata.cartList,
      homeContentId: state.homeData.homeContentId
    }
  },
  (dispatch) => {
    return {
      // 这是自定义的对象属性名字
      getBnnerData: () => {
        store.dispatch(action.getBenner)
      },
      getGuessData: (obj) => {
        store.dispatch(action.getGuessLink(obj))
      },
      getTitleData: () => {
        store.dispatch(action.getTilte)
      },
      getMechData: () => {
        store.dispatch(action.getMerchantdata)
      },
      getMechItemData: (obj) => {
        store.dispatch(action.getMerchitem(obj))
      },
      changeCartList: (obj) => {
        store.dispatch(action.changeCart(obj))
      }
    }
  }
)(UI)


export default Com
