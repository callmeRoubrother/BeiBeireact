import React, { Component } from 'react'
import { ActionSheet, Toast, Picker, List } from 'antd-mobile'
import { createForm } from 'rc-form';
import { district, provinceLite } from 'antd-mobile-demo-data';
import './login.scss'

class Test extends Component {
  constructor() {
    super();
    this.state = {
      clicked: 'none',
      clicked1: 'none',
      clicked2: 'none',
    };
  }
  state = {
    data: [],
    cols: 1,
    pickerValue: [],
    asyncValue: [],
    visible: false,
  };
  onClick = () => {
    setTimeout(() => {
      this.setState({
        data: provinceLite,
      });
    }, 120);
  };
  onPickerChange = (val) => {
    console.log(val);
    let colNum = 1;
    const d = [...this.state.data];
    const asyncValue = [...val];
    if (val[0] === 'zj') {
      d.forEach((i) => {
        if (i.value === 'zj') {
          colNum = 2;
          if (!i.children) {
            i.children = [{
              value: 'zj-nb',
              label: '宁波',
            }, {
              value: 'zj-hz',
              label: '杭州',
            }];
            asyncValue.push('zj-nb');
          } else if (val[1] === 'zj-hz') {
            i.children.forEach((j) => {
              if (j.value === 'zj-hz') {
                j.children = [{
                  value: 'zj-hz-xh',
                  label: '西湖区',
                }];
                asyncValue.push('zj-hz-xh');
              }
            });
            colNum = 3;
          }
        }
      });
    } else {
      colNum = 1;
    }
    this.setState({
      data: d,
      cols: colNum,
      asyncValue,
    });
  };
  dataList = [
    { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
    { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
    { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
    { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
    { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
  ].map(obj => ({
    icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
    title: obj.title,
  }));
  componentDidMount () {

  }
  areaNum () {
    this.props.history.push('/areaNum')
  }
  showPassWord () {
    const password = this.refs.password
    const password1 = this.refs.password1
    const showPassword = this.refs.showPassword
    let val = password.value
    password1.value = val
    if (showPassword.className === 'iconfont icon-eye') {
      password.style.display = 'none'
      password1.style.display = 'block'
      showPassword.className = 'iconfont icon-biyan'
    } else {
      password.style.display = 'block'
      password1.style.display = 'none'
      showPassword.className = 'iconfont icon-eye'
    }
  }
  login () {
    const username = this.refs.username.value
    const password = this.refs.password.value
    const reg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/
    if (username === '') {
      Toast.info('用户名不能为空')
    } else if (!reg.test(username)) {
      Toast.info('用户名格式错误')
    } else {
      if (password === '') {
        Toast.info('密码不能为空')
      } else {
        const obj = {
          username,
          password
        }
        this.props.toLogin(obj, this)
      }
    }
  }
  back () {
    console.log(this)
    this.props.history.go(-1)
  }
  gotoRegister () {
    this.props.history.push('/register')
  }
  showShareActionSheet (event) {
    console.log(event)
    ActionSheet.showShareActionSheetWithOptions({
          options: this.dataList,
          message: 'I am description, description, description',
        },
        (buttonIndex) => {
          this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });
          return new Promise((resolve) => {
            setTimeout(resolve, 200);
          });
        });
  }
  render () {
    const { getFieldProps } = this.props.form;
    return (
        <div>
          <header className="header">
            <span className="back iconfont icon---" style={{ color: 'white' }} onClick={ this.back.bind(this) }></span>
            <p>登录</p>
            <em onClick={ this.gotoRegister.bind(this) }>注册</em>
          </header>
          <section className='content'>
            <div className="login">
              <div className="logo">
                <img src="//h0.hucdn.com/open/201822/04e8b24b54ab98e9_250x60.png" alt="" />
              </div>
              <form action="">
                <div className="phoneNum">
                  <Picker data={district} cols={1} {...getFieldProps('district3')} className="forss">
                    <List.Item arrow="horizontal">城市</List.Item>
                  </Picker>
                  {/*<span onClick={ this.areaNum.bind(this) }>city <i className="iconfont icon-icon32210"></i></span>*/}
                  <input type="text" className="phone_num" placeholder="请输入手机号码" name="username" ref='username' />
                </div>
                <div className="psw">
                  <input id="showPwd" className="password_text" type="text" name="password" ref='password1' placeholder="请输入密码" style={{display: 'none'}}/>
                  <input type="password" className="password" name="password" placeholder="请输入密码" ref='password'/>
                  <i className="iconfont icon-eye" ref='showPassword' id="showPassword" onClick={ this.showPassWord.bind(this) }></i>
                </div>
                <input type="button" className="sub" value="登录" onClick={ this.login.bind(this) } />
              </form>
              <div className="forgetIt">
                <span>忘记密码</span>
                <em>|</em>
                <span>帮助</span>
              </div>
              <div className="otherLogin">
                <span></span>
                <p>其他方式登录</p>
                <span></span>
              </div>
              <div className="mint-swipe">
                <div className="mint-swipe-item">
                  <ul>
                    <li onClick={ this.showShareActionSheet.bind(this) }>
                      <span></span>
                      <p>短信</p>
                    </li>
                    <li onClick={ this.showShareActionSheet.bind(this) }>
                      <span></span>
                      <p>微信</p>
                    </li>
                    <li onClick={ this.showShareActionSheet.bind(this) }>
                      <span></span>
                      <p>QQ</p>
                    </li>
                    <li onClick={ this.showShareActionSheet.bind(this) }>
                      <span></span>
                      <p>百度</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
  }
}
const TestWrapper = createForm()(Test);
export default TestWrapper
