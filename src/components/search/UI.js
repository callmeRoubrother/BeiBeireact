import { SearchBar } from 'antd-mobile';
import React from 'react'
import './search.scss'
import store from "@/store";

class SearchBarExample extends React.Component {
  back () {
    this.props.history.go(-1)
  }
  search () {
    store.dispatch({
      type: 'CHANGE_VAL',
      data: this.refs.searchVal.state.value
    })
    // this.props.getList(this.refs.searchVal.state.value)
    this.props.history.push('/result')
  }
  searchHot (event) {
    let target = event.target || event.srcElement
    if(target.nodeName === 'LI') {
      this.refs.searchVal.state.value = target.textContent
      this.search()
    }
  }
  render() {
    return (
        <div>
          <header className="header">
            <span className="back iconfont icon---" onClick={ this.back.bind(this) }></span>
            <SearchBar placeholder="Search" maxLength={8} ref='searchVal'/>
            <p onClick={ this.search.bind(this) }>搜索</p>
          </header>
          <div className="content">
            <h3>搜索记录</h3>
            <ul>

            </ul>
            <h3>热门搜索</h3>
            <ul className='hotSearch' onClick={ this.searchHot.bind(this) }>
              <li>奶粉</li>
              <li>童装</li>
              <li>卫衣</li>
              <li>内衣</li>
              <li>奶嘴</li>
              <li>美赞臣</li>
              <li>纸尿裤</li>
              <li>婴儿床</li>
              <li>面膜</li>
            </ul>
          </div>
        </div>);
  }
}

export default SearchBarExample