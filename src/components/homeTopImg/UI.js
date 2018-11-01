import React, { Component } from 'react'
import './homeTopImg.scss'

class Com extends Component {
  componentDidMount () {
    this.props.getList()
  }
  clickHander () {
    this.props.getNum()
    this.props.history.push('/clickContent')
  }
  render () {
    const { prolist } = this.props
    return (
      <section className='homeTopImg'>
        {
          prolist.map((item, index) => {
            return (<div key={ index } ref='topImg' onClick={this.clickHander.bind(this)}><img src={item.img} alt="" key={index}/></div>)
          })
        }
      </section>
    )
  }
}

export default Com
