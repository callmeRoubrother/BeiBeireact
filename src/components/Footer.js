import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => (
    <footer className="footer">
      <ul>
        <NavLink replace to='/home'>
          <span className='icon-xinfengdakai iconfont'></span>
          今日特卖
        </NavLink>
        <NavLink replace to='/kind'>
          <span className='icon-pintuan iconfont'></span>
          分类
        </NavLink>
        <NavLink replace to='/cart'>
          <span className='icon-gouwuche iconfont'></span>
          购物车
        </NavLink>
        <NavLink replace to='/user'>
          <span className='icon-home iconfont'></span>
          我的
        </NavLink>
      </ul>
    </footer>
)

export default Footer
