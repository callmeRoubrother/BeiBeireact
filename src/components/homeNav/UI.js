import React, { Component } from 'react'
import './homeNav.scss'

class Com extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clickActive: true,
      initIndex: 1,
      arr: ['今日特卖', '童装', '母婴', '居家', '美食', '女装', '鞋包', '美妆', '进口']
    }
  }
  componentDidMount () {
    this.refs.ulList.childNodes[0].className = 'active'
  }
  toggleClass (num) {
    const li_list = this.refs.ulList.childNodes
    for (var i = 0; i < li_list.length; i++) {
      li_list[i].className = ''
    }
    li_list[num].className = 'active'
    this.props.changeList(li_list[num].textContent, this.state.initIndex)
  }
  gotoSearch () {
    this.props.history.push('/search')
  }
  render () {
    return (
        <nav className='nav'>
          <div>
            <ul ref='ulList'>
              {
                this.state.arr.map((item, index) => {
                  return (<li key={ index } to='/' index = {index}  onClick={ this.toggleClass.bind(this, index) }>{ item }</li>)
                })
              }
            </ul>
          </div>
          <span className='iconfont icon-searchlist' onClick={ this.gotoSearch.bind(this) }></span>
        </nav>
    )
  }
}

export default Com
