import { connect } from 'react-redux';
import store from '@/store';
import action from './action'
import UI from './UI';

const Com = connect(
    (state) => { // 給UI组件值
      return {
        prolist: state.homeData.prolist,
        bannerlist: state.homeData.bannerlist
      }
    },
    (dispatch) => { // 响应UI组件的行为
      return {
        getBannerList: () => {
          store.dispatch(action.getBannerList).then(() => {
          }).catch(() => {
            console.log('err')
          })
        }
      }
    }
)(UI);

export default Com;
