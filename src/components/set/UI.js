import React from 'react'
import './set.scss'

class Com extends React.Component {
  back () {
    this.props.history.go(-1)
  }
  render () {
    return (
        <div className="setContent">
          <header className="header">
            <span className='iconfont icon---' onClick={ this.back.bind(this) }></span>
            <span>设置</span>
            <span> </span>
          </header>
          <div className="content">
            <ul>
              <li><p><i className='iconfont icon-gerenziliao'></i>个人资料</p><p className='iconfont icon-icon1'></p></li>
              <li><p><i className='iconfont icon-baobaoshuyunyu'></i>孕育状态</p><p className='iconfont icon-icon1'></p></li>
              <li><p><i className='iconfont icon-suo3'></i>账户安全</p><p className='iconfont icon-icon1'></p></li>
              <li><p><i className='iconfont icon-dizhi'></i>收货地址</p><p className='iconfont icon-icon1'></p></li>
              <li><p><i className='iconfont icon-shiming'></i>实名认证</p><p className='iconfont icon-icon1'></p></li>
              <li><p><i className='iconfont icon-zhengjian'></i>证件信息</p><p className='iconfont icon-icon1'></p></li>
            </ul>
            <ul>
              <li><p><i className='iconfont icon-kefu1'></i>贝贝平台客服</p><p className='iconfont icon-icon1'></p></li>
              <li><p><i className='iconfont icon-yijian'></i>意见反馈</p><p className='iconfont icon-icon1'></p></li>
            </ul>
            <ul>
              <li><p><i className='iconfont icon-guanyu'></i>关于贝贝</p><p>v7.21.01 <span className='iconfont icon-icon1'></span></p></li>
              <li><p><i className='iconfont icon-dianzan1'></i>赏个好评</p><p className='iconfont icon-icon1'></p></li>
              <li><p><i className='iconfont icon-qingli'></i>清理缓存</p><p className='iconfont icon-icon1'></p></li>
            </ul>
          </div>
        </div>
    )
  }
}

export default Com
