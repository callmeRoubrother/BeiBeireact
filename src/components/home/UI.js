import React, { Component } from 'react'
import './home.scss'
import { Carousel } from 'antd-mobile'
import HomeTopImg from '@/components/homeTopImg'
import HomeNav from '@/components/homeNav'
import HomeMainContent from '@/components/homeMainContent'

class Com extends Component {
  componentDidMount () {
    this.props.getBannerList()
  }
  goBack () {
    document.getElementsByClassName('am-list-view-scrollview')[0].scrollTop = 0
  }
  gotoLogin () {
    this.props.history.push('/login')
  }
  goToKind () {
    this.props.history.push('/kind')
  }
  goToSearch () {
    this.props.history.push('/search')
  }
  render () {
    return (
      <div>
        <header className="header" id='header'>
          <span className='iconfont icon-xiaoxi' onClick={ this.gotoLogin.bind(this) }></span>
          <div className='sec'>
            <i className='iconfont icon-sousuo'></i>
            <input type="text" placeholder='贝贝好奇第二件半价' onFocus={ this.goToSearch.bind(this) } />
            <em className='iconfont icon-saoyisao'></em>
          </div>
          <span className='iconfont icon-daohang1' onClick={ this.goToKind.bind(this) }></span>
        </header>
        <section className='content' id='content'>
          <Carousel
              autoplay={ true }
              infinite
          >
            {this.props.bannerlist.map((item, index) => (
                <a
                    key={ index }
                    href="http://www.baidu.com"
                    style={{ display: 'inline-block', width: '100%', height: 'auto' }}
                >
                  <img
                      src={ item.pic }
                      alt=""
                      style={{ width: '100%', verticalAlign: 'top' }}
                      onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                      }}
                  />
                </a>
            ))}
          </Carousel>
          <HomeTopImg history={ this.props.history }/>
          <HomeNav history={ this.props.history }/>
          <h2>每天9点准时上新</h2>
          <HomeMainContent  history={ this.props.history }/>
          <p className='iconfont icon-huidingbu' id='backTop' onClick={ this.goBack.bind(this) }></p>
        </section>
      </div>
    )
  }
}

export default Com
