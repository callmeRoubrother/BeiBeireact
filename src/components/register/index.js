import React from 'react'
import { createForm } from 'rc-form';
import { ActionSheet, Toast, Picker, List } from 'antd-mobile'
import { district, provinceLite } from 'antd-mobile-demo-data';
import axios from 'axios'
import './register.scss'

class Test extends React.Component {
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
    sValue: ['2013', '春'],
    visible: false,
    colorValue: ['#00FF00'],
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
  back () {
    this.props.history.go(-1)
  }
  gotoLogin () {
    this.props.history.push('/login')
  }
  gotoVerify () {
    const phoneNum = this.refs.phoneNum
    const confirm = this.refs.confirm
    console.log(confirm)
    const reg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/
    if (phoneNum.value === '') {
      Toast.info('手机号码不能为空')
    } else {
      if (reg.test(phoneNum.value)) {
        if (confirm.checked) {
          axios.get('/xunxun/users/sendCode?tel=' + phoneNum.value).then(res => {
            console.log(res)
            if (res.data === 0) {
              Toast.info('手机号验证码获取失败')
            } else if (res.data === 1) {
              Toast.info('该手机号已注册')
            } else {
              localStorage.phoneNum = phoneNum.value
              localStorage.phoneCode = res.data.code
              this.props.history.push('/verify')
            }
          })
        } else {
          Toast.info('是否同意协议')
        }
      } else {
        Toast.info('手机号码格式错误')
      }
    }
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
  render() {
    const { getFieldProps } = this.props.form;
    return (
        <div>
          <header className="header">
            <span className="back iconfont icon---" style={{ color: 'white' }} onClick={ this.back.bind(this) }></span>
            <p>注册</p>
            <em onClick={ this.gotoLogin.bind(this) }>登录</em>
          </header>
          <section className='content'>
            <div className="rigister">
              <div className="logo">
                <img src="http://www.iqiyipic.com/common/fix/h5-aura/foot.png" alt="" />
              </div>
              <div className="phoneNum">
                {/*<List style={{ backgroundColor: 'white' }} className="picker-list">*/}
                  <Picker data={district} cols={1} {...getFieldProps('district3')} className="forss">
                    <List.Item arrow="horizontal">城市</List.Item>
                  </Picker>
                {/*</List>*/}
                <input type="text" className="phone_num" ref='phoneNum' placeholder="请输入手机号码" name="username" />
              </div>
              <input type="submit" className="sub" value="获取短信验证码" onClick={ this.gotoVerify.bind(this) } />
              <div className="agree">
                <input type="radio" className="confirm" ref='confirm' />
                <span>同意</span>
                <em>《用户协议》、 《隐私政策》</em>
              </div>
              <p className="help">帮助</p>
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
    );
  }
}

const TestWrapper = createForm()(Test);

// ReactDOM.render(<TestWrapper />, mountNode);


export default TestWrapper
