import React from 'react'
import ReactDOM from 'react-dom'
import './homeMainContent.scss'
import { PullToRefresh, ListView } from 'antd-mobile';

let urlNum = 1
let data1 = [
];
const NUM_ROWS = 10;
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
    this.props.getList(urlNum)
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
    urlNum = 1
    this.props.getList(urlNum)
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
    this.props.getList(urlNum)
  };
  getId (id1, id2, id3) {
    const obj = {id1, id2, id3}
    this.props.changeId(obj)
    this.props.history.push("/detail")
  }
  render() {
    data1 = this.props.homeContent
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
        <div key={rowID} style={{ padding: '0 15px' }}>
          <div style={{ padding: '15px 0' }} onClick={ this.getId.bind(this, obj.iid, obj.event_id, obj.uid) }>
            <img style={{ height: '1.65rem', width: '100%' }} src={obj.img} alt="" />
            <div style={{ lineHeight: 1 }}>
              <div style={{height:'.3rem', lineHeight:'.3rem', fontSize: '.16rem',overflow:'hidden' }}>{obj.title}</div>
              <p style={{ fontSize: '.14rem', color: '#ccc' }}>{ obj.promotion_desc }</p>
              <div style={{ marginTop:'.1rem' }}>¥<span style={{ fontSize: '.2rem', fontWeight: "700", color: '#ff1a1a' }}>{obj.price / 100}</span><span style={{ marginLeft: ".1rem" }}>{obj.buying_info}</span><span className='robNow'>立即抢</span></div>
            </div>
          </div>
        </div>
      );
    };
    return (<div id='mainContent_cover'>
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
    </div>);
  }
}

export default App