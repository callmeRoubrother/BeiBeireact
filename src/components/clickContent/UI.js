import React from 'react'
import ReactDOM from 'react-dom'
import { PullToRefresh, ListView } from 'antd-mobile';
import './clickContent.scss'

let urlNum = 1
let data1 = [
];
const NUM_ROWS = 20;
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
    this.props.getList(this.props.randomNum, urlNum)
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
    this.props.changeNum()
    urlNum = 1
    this.props.getList(this.props.randomNum, urlNum)
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
    this.props.getList(this.props.randomNum, urlNum)
  };
  gotoDetail (id1, id2, id3) {
    const obj = {id1, id2, id3}
    console.log(obj)
    this.props.changeId(obj)
    this.props.history.push("/detail")
  }
  render() {
    data1 = this.props.clickData
    let index
    urlNum === 1 ? index = 0: index = data1.length/2
    const row = (rowData, sectionID, rowID) => {
      if (index > data1.length - 1) {
        index = 0
      } else {
      }
      const obj = data1[index++];
      return (
        <li key={ index } className='list_item' onClick={ this.gotoDetail.bind(this, obj.iid, obj.event_id, obj.uid) }>
          <img src={ obj.banner_img } alt=""/>
          <p className='tit'>{ obj.title }</p>
          <p className='desc'>{ obj.promotion_desc }</p>
          <div className="price">
            <div className="left">
              <span>{ obj.tag }</span>
              <span>￥{ obj.price / 100 }</span>
              <span>￥{ obj.origin_price / 100 }</span>
            </div>
            <div className="right">
              <span>{ obj.begin_time_desc }</span>
            </div>
          </div>
        </li>
      );
    };
    return (
      <div className='clickContent'>
        <div className="topNew">
          <span>流行趋势就看新品</span>
          <img src="http://h0.hucdn.com/open/201823/17395bc4033b262f_750x312.png" alt=""/>
        </div>
        <ul className="list">
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
        </ul>
      </div>
    );
  }
}

export default App