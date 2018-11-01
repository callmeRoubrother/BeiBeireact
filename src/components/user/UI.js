import React, { Component } from 'react'
import './user.scss'

class Com extends Component {
  constructor (props) {
    super (props)
    this.state = {
      phoneNum: '',
      str: ''
    }
  }
  gotoLogin () {
    this.props.history.push('/login')
  }
  gotoRegister () {
    this.props.history.push('/register')
  }
  gotoSet () {
    this.props.history.push('/set')
  }
  loginOut () {
    this.props.loginOut()
  }
  render () {
    return (
        <div className='myUser'>
          <header className="header">
            <span className='iconfont icon-xiaoxi' onClick={ this.gotoLogin.bind(this) }></span>
            <span className='iconfont icon-shezhi' onClick={ this.gotoSet.bind(this) }></span>
          </header>
          <section className='content'>
            <div className="loginBox">
              {
                this.props.isLogin !== 'ok' ? (<div ref='noLogin'>
                  <span onClick={this.gotoLogin.bind(this)}>新人登录</span>
                  <span onClick={this.gotoRegister.bind(this)}>立即注册</span>
                </div>) : (<div className='logined' ref='user'>
                  <span>欢迎您{this.props.userName}</span>
                  <span onClick={this.loginOut.bind(this)}>退出登录</span>
                </div>)
              }
              <div className="checkIn">
                <span><i className='iconfont icon-qiandao'></i>签到</span>
                <span><i className='iconfont icon-favorite'></i>收藏</span>
                <span><i className='iconfont icon-zuji'></i>足迹</span>
              </div>
            </div>
            <div className="order">
              <div className="top">
                <h2>我的订单</h2>
                <p>查看所有订单 <i className='iconfont icon-icon1'></i></p>
              </div>
              <div className="afterOrder">
                <div><p className='iconfont icon-daifukuan'></p>待付款</div>
                <div><p className='iconfont icon-daishouhuo'></p>待收货</div>
                <div><p className='iconfont icon-evulate'></p>评论有奖</div>
                <div><p className='iconfont icon-shouhou'></p>我的售后</div>
              </div>
            </div>
            <div className="wallet">
              <div className="top">
                <h2>我的钱包</h2>
              </div>
              <div className="wallet_func">
                <div><p><span>0</span>元</p>余额</div>
                <div><p><span>0</span>张</p>现金券</div>
                <div><p><span>0</span>个</p>贝壳</div>
                <div><p><span>0</span>万</p>可借现金</div>
              </div>
            </div>
            <div className="adv">
              <ul>
                <li><p className='iconfont icon-pingtaikefu'></p>平台客服</li>
                <li><p className='iconfont icon-huafeichongzhi'></p>话费充值</li>
                <li><p className='iconfont icon-mianfeilingqu'></p>年费领</li>
                <li><p className='iconfont icon-fenxiangzhuanqian'></p>分享赚钱</li>
              </ul>
              <ul>
                <li><p className='iconfont icon-yaoqing'></p>5元福利</li>
                <li><p className='iconfont icon-qian'></p>领现金红包</li>
                <li><p className='iconfont icon-fenqiyewu'></p>免息分期购</li>
                <li><p className='iconfont icon-yuer'></p>育儿宝</li>
              </ul>
            </div>
          </section>
        </div>
    )
  }
}

export default Com