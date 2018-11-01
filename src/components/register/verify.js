import React, { Component } from 'react'
import { Toast } from 'antd-mobile'
import './verify.scss'

class Com extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Num: ''
    }
  }
  back () {
    this.props.history.go(-1)
  }
  checkCode () {
    // const arr = []
    // for (var key in this.refs.writeCode.children) {
    //   console.log(typeof  this.refs.writeCode.children[key].children)
    //   arr.push(...this.refs.writeCode.children[key].children)
    // }
    // console.log(arr)
    let txts = document.getElementsByTagName("input");
    for (var i = 0; i < txts.length; i++) {
      var t = txts[i]
      t.index = i
      t.setAttribute('readonly', true)
      t.onkeyup = function () {
        this.value = this.value.replace(/^(.).*$/, '$1')
        var next = this.index + 1
        if (next > txts.length - 1) return
        txts[next].removeAttribute('readonly')
        txts[next].focus()
      }
    }
    txts[0].removeAttribute('readonly')
  }
  finallyCheck () {
    let txts = document.getElementsByTagName("input");
    let checkStr = ''
    for (var i = 0; i < txts.length; i++) {
      checkStr += txts[i].value
    }
    if (checkStr === localStorage.phoneCode) {
      localStorage.isLogin = 'ok'
      this.props.history.push('/')
    } else {
      Toast.info('验证码输入错误')
    }
  }
  componentDidMount () {
    let phoneNum = localStorage.phoneNum
    this.setState({
      Num: phoneNum.slice(0, 3) + '****' + phoneNum.slice(7)
    })
    console.log(this.state.Num)
  }
  render () {
    return (
        <div>
          <header className="header">
            <span className="back iconfont icon---" onClick={ this.back.bind(this) }></span>
            <p>输入短信验证码</p>
            <em></em>
          </header>
          <section className='content'>
            <p className="codeTit">已发送短信验证码至+86 <span>{ this.state.Num }</span></p>
            <ul className="writeCode" ref='writeCode'>
              <li>
                <input type="text" onInput={ this.checkCode.bind(this) } />
              </li>
              <li>
                <input type="text" />
              </li>
              <li>
                <input type="text" />
              </li>
              <li>
                <input type="text" />
              </li>
              <li>
                <input type="text" onKeyUp={ this.finallyCheck.bind(this) } />
              </li>
            </ul>
            <p className="afreshCode">重新发送验证码</p>
          <p className="problem">遇到问题</p>
          </section>
        </div>
    )
  }
}

export default Com
