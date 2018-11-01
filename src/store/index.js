import homeData from '@/components/home/store'
import homeTopImg from '@/components/homeTopImg/store'
import searchData from '@/components/search/store'
import loginData from '@/components/login/store'
import Detaildata from '@/components/detail/store'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

const Reducer = combineReducers({
  homeData,
  homeTopImg,
  searchData,
  loginData,
  Detaildata
})

const store = createStore(Reducer, applyMiddleware(thunk))

export default store