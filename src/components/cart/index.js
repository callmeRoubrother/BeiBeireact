import React, { Component } from 'react';
import CartData from './CartData'

class Com extends Component {
    constructor(props) {
        super(props);
        this.state = {
          num: 0
        };
    }

    componentDidMount() {
        if(localStorage.cartid!==undefined) {                        //渲染购物车商品数量
            this.setState({num:(JSON.parse(localStorage.cartid)).length})
        }
    }

  render () {
    return (
      <div className='box'>
        <header className='header' id='head'>购物车({this.state.num})</header>
          <CartData _this = {this}/>
      </div>
    )
  }
}

export default Com