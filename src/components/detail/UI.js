import React, { Component } from 'react';
import './detail.scss';
import { Carousel,Button, ActionSheet } from 'antd-mobile';

class Com extends Component{
  constructor (props) {
    super(props)
    this.state = {
      num: ''
    }
  }
  showActionSheet = () => {
    const BUTTONS = ['快递：圆通快递','服务：七天无理由退货', 'Delete','Cancel'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      destructiveButtonIndex: BUTTONS.length - 2,
      message: '商家保障服务',
      maskClosable: true,
      'data-seed': 'logId'
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  }

  componentDidMount() {
    console.log(this.props.cartList)
    this.props.getBnnerData();  //主页的所有数据传递过来了
    this.props.getTitleData();
    this.props.getMechData();
    this.props.getGuessData(this.props.homeContentId);
    this.props.getMechItemData(this.props.homeContentId)
  }

  goBack () {
    this.props.history.go(-1)
  }
  goHome () {
    this.props.history.push('/')
  }
  goCart () {
    this.props.history.push('/cart')
  }
  addShopCart () {//购物车
    let car=[]
    let card=[]
    let data=this.props.prolistdata
    data.num=1
    data.show=true
    if(localStorage.cart!==undefined){
      card=JSON.parse(localStorage.cartid)
      car=JSON.parse(localStorage.cart)
      if(card.indexOf(data.id)===-1){
        card.push(data.id)
        car.push(data)
        this.setState({num:card.length})
        localStorage.cartid=JSON.stringify(card)
        localStorage.cart=JSON.stringify(car)
      } else {
        let num=car[card.indexOf(data.id)].num+1
        car[card.indexOf(data.id)].num=num
        localStorage.cart=JSON.stringify(car)
      }
    } else {
      this.setState({num:1})
      localStorage.cartid=JSON.stringify([data.id])
      localStorage.setItem("cart", JSON.stringify([data]));
    }
  }
  render () {
    console.log(this.props.cartList)

    let arr = []
    this.props.merchitem.map((item,index)=> {

      arr.push(
        <li key={index} className='container-item'>
            <img src={item.img} alt=""/>
          <h3 className='container-title'>{item.title}</h3>
          <p className='container-price'>{item.price/100}</p>
        </li>
      )

      return arr
    })
    // 猜你喜欢的数组
    const guessLike = []
    this.props.recom_items.map((item,index)=>{
      guessLike.push(
        <li key={index} className='searchresult-item'>
        <img src={item.img} alt="" className='cover-image'/>
        <h1 className="title">
          { item.title }
        </h1>
        <div className="count">
          <span className='pro-info'>￥<i>{item.price/100}</i></span> 
          <span className="alreadyBuy">{item.sale_num }人已购</span>
        </div>
      </li>)
       return guessLike
    })
    return (
    <div className='detail'>
      <div className="banner">
        <p className='iconfont icon--- back' onClick={this.goBack.bind(this)}></p>
        <Carousel autoplay={true} infinite key='aaqaaa' >
          {
            this.props.banner.map((item,index) => (
                <a key={index} href="#3" style={{ display: 'inline-block', width: '100%', height: '375px'}} >
                  <img src={ item.img} alt="" style={{ width: '100%', height: '100%'}} onLoad={() => {
                    window.dispatchEvent(new Event('resize')); }} />
                </a>
            ))
          }
        </Carousel>
      </div>
      <div className="promition">
        <img src="http://h0.hucdn.com/open/201843/ce0ea09796957e64_750x117.png" className="promition-img" alt=''/>
      </div>
      <div className='detailPro'>
        <h3 className='detail-title'>
          <img src="http://h0.hucdn.com/open/201824/a405e5cd77058023_168x45.png" alt=""/>
          <span className='title'>
          {
            this.props.prolistdata.title
          }
          </span>
          <p className='smalltitle'>
          {
            this.props.prolistdata.prottitle
          }
          </p>
        </h3>
        <div className='price'>
          <span className="yPrice">￥{this.props.prolistdata.price}<i>.00</i></span>
          <span  className="oPrice">￥{this.props.prolistdata.oldprice}</span>
          <span  className="monthSales">{this.props.prolistdata.number}人已购</span>
        </div>
      </div>
      <div className='qianggou'>
        <span className='iconfont icon-qg'></span>
        <span className='timemmm'>限时限量 疯狂抢购</span>
      </div>
      <div className='eeerer'>
        <Button onClick={this.showActionSheet}>默认选择</Button>
      </div>
      <div className='lives'>
        <div className='j_event_sss'>
          <span className='logo-icon'><img src={this.props.merchantdata.img} alt=""/></span>
          <span className="logo-text">{this.props.merchantdata.title}</span>
          <a className='event' href='###'><span className="go-shop">进入店铺</span></a>
        </div>
        <div className='dsr'>
          <span>宝贝描述<b>{ this.props.merchantdata.rating }</b><i className="up iconfont icon-jiantou1"></i></span>
          <span>卖家服务<b>{ this.props.merchantdata.rating }</b><i className="up iconfont icon-jiantou1"></i></span>
          <span>物流服务<b>{ this.props.merchantdata.rating }</b><i className="up iconfont icon-jiantou1"></i></span>
        </div>
      </div>
      <div className='soround_cover'>
        <ul className='soround'>
          {
            arr
          }
        </ul>
      </div>
      {/* 猜你喜欢*/}
      <div className='J_nav_menu'>
        <img src="//h0.hucdn.com/open/201832/deef8a71b12375ae_750x88.png" alt=""/>
      </div>
      {/* 猜你喜欢列表 */}
      <ul className='detailContent'>
        {
          guessLike
        }
      </ul>
      {/* 添加购物车 */}
      <div className='J_btns'>
        <ul className='bottom-btn'>
          <li onClick={ this.goHome.bind(this) }>
            <span className="iconfont icon-index"></span>
            <p>首页</p>
          </li>
          <li>
            <span className="iconfont icon-dianpu"></span>
            <p>店铺</p>
          </li>
          <li onClick={ this.goCart.bind(this) }>
            <span className="iconfont icon-gouwuche"></span>
            <p>购物车</p>
          </li>
        </ul>
        <div className='userPlay'>
          <button className='addCart' onClick={ this.addShopCart.bind(this) }>加入购物车</button>
          <button className='nowPlay'>立即购买</button>
        </div>
      </div>
    </div>
  )
  }
}

export default Com;