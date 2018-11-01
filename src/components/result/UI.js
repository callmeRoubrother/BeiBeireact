import React from 'react'
import ReactDOM from 'react-dom'
import { SearchBar } from 'antd-mobile';
import { PullToRefresh, ListView } from 'antd-mobile';
import './result.scss'

let urlNum = 1
let data1 = [
];
const NUM_ROWS = 40;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataArr = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`);
  }
  return dataArr;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      refreshing: true,
      isLoading: true,
      height: document.documentElement.clientHeight,
      useBodyScroll: false,
    };
  }
  componentDidUpdate() {
    if (this.state.useBodyScroll) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }
  componentDidMount() {
    console.log(this.props.searchVal, urlNum)
    this.props.getList(this.props.searchVal, urlNum)
    const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(genData()),
        height: hei,
        refreshing: false,
        isLoading: false,
      });
    }, 1500);
  }
  onRefresh = () => {
    this.setState({ refreshing: true, isLoading: true });
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        refreshing: false,
        isLoading: false,
      });
    }, 600);
  };
  onEndReached = (event) => {
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = [...this.rData, ...genData(++pageIndex)];
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
    urlNum++
    this.props.getList(this.refs.searchVal.state.value, urlNum)
  };
  search() {
    urlNum = 1
    this.props.getList(this.refs.searchVal.state.value, urlNum)
  }
  home (){
    this.props.history.push('/')
  }
  cart () {
    if (localStorage.getItem('isLogin') === 'ok') {
      this.props.history.push('/cart')
    } else {
      this.props.history.push('/login')
    }
  }
  user () {
    this.props.history.push('/user')
  }
  backTop () {
    document.getElementsByClassName('am-list-view-scrollview')[0].scrollTop = 0
  }
  closeFnc () {
    this.refs.more.style.display = 'block'
    this.refs.more_func.style.display = 'none'
  }
  showMore () {
    this.refs.more.style.display = 'none'
    this.refs.more_func.style.display = 'flex'
  }
  filterPeople () {
    const obj = this.refs.price.parentNode.children
    for(var i = 0; i < obj.length; i++){
      obj[i].className = ''
    }
    this.refs.popularity.className = 'active'
    if (this.refs.popularity.children[0].className === 'iconfont icon-jiantou') {
      this.refs.popularity.children[0].className = 'iconfont icon-jiantou1'
      data1.sort((a, b) => {
        return a.click_num - b.click_num
      })
      this.props.changVal(data1)
    } else {
      this.refs.popularity.children[0].className = 'iconfont icon-jiantou'
      data1.sort((a, b) => {
        return b.click_num - a.click_num
      })
      this.props.changVal(data1)
    }
  }
  filterPrice () {
    const obj = this.refs.price.parentNode.children
    for(var i = 0; i < obj.length; i++){
      obj[i].className = ''
    }
    this.refs.price.className = 'active'
    if (this.refs.price.children[0].className === 'iconfont icon-jiantou1') {
      this.refs.price.children[0].className = 'iconfont icon-jiantou'
      data1.sort(function (a, b) {
        return b.price - a.price
      })
      console.log(data1)
      this.props.changVal(data1)
    } else {
      this.refs.price.children[0].className = 'iconfont icon-jiantou1'
      data1.sort(function (a, b) {
        return a.price - b.price
      })
      console.log(data1)
      this.props.changVal(data1)
    }
  }
  gotoDetail (obj) {
    const detailObj = {id1: obj.iid, id2: obj.event_id, id3: obj.uid}
    console.log(detailObj)
    this.props.changeId(detailObj)
    this.props.history.push('/detail')
  }
  render() {
    data1 = this.props.searchList
    console.log(data1)
    let index
    urlNum === 1 ? index = 0: index = data1.length/2
    const row = (rowData, sectionID, rowID) => {
      if (index > data1.length - 1) {
        index = 0
      } else {
      }
      const obj = data1[index++];
      return (
          <li key={ index } onClick={ this.gotoDetail.bind(this, obj) }>
            <img src={ obj.img } alt=""/>
            <p>{ obj.title }</p>
            <div className="price">
              <div className="left">
                <span><i>￥</i>{ obj.price / 100 }</span>
                <span>￥{ obj.price_ori / 100 }</span>
              </div>
              <div className="right">
                <span>{ obj.sale_tip }</span>
              </div>
            </div>
          </li>
      );
    };
    return (<div>
      <header className="result_header">
        <SearchBar placeholder="Search" maxLength={8} ref='searchVal'/>
        <p onClick={ this.search.bind(this) }>搜索</p>
      </header>
      <section className="content">
        <div className="but">
          <p className='active' ref='popularity' onClick={ this.filterPeople.bind(this) }><span className='iconfont icon-jiantou'></span>人气</p>
          <p ref='price' ><span className='iconfont icon-jiantou1' onClick={ this.filterPrice.bind(this) }></span>价格</p>
          <p><span className='iconfont icon-shaixuanxuanzhong'></span>筛选</p>
        </div>
        <p className='iconfont icon-gengduo more' ref='more' onClick={ this.showMore.bind(this) }></p>
        <ul className="more_func" ref='more_func' style={{ display: 'none'}}>
          <li onClick={ this.home.bind(this) }>
            <p className='iconfont icon-index'></p>
            首页
          </li>
          <li onClick={ this.cart.bind(this) }>
            <p className='iconfont icon-gouwuche'></p>
            购物车
          </li>
          <li onClick={ this.user.bind(this) }>
            <p className='iconfont icon-home'></p>
            我的
          </li>
          <li onClick={ this.backTop.bind(this) }>
            <p className='iconfont icon-huidingbu'></p>
          </li>
          <li onClick={ this.closeFnc.bind(this) }>
            <p className='iconfont icon-guanbi'></p>
          </li>
        </ul>
        <ListView
            key={this.state.useBodyScroll ? '0' : '1'}
            ref={el => this.lv = el}
            dataSource={this.state.dataSource}
            renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
              {this.state.isLoading ? 'Loading...' : 'Loaded'}
            </div>)}
            renderRow={row}
            useBodyScroll={this.state.useBodyScroll}
            style={this.state.useBodyScroll ? {} : {
              height: this.state.height,
              border: '1px solid #ddd',
              margin: '5px 0',
            }}
            pullToRefresh={<PullToRefresh
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
            />}
            onEndReached={this.onEndReached}
            pageSize={40}
        />
      </section>
    </div>);
  }
}

export default App