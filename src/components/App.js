import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import router from '@/router'
import NoMatch from '@/components/NoMatch'
import Footer from '@/components/Footer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="box">
          <Switch>
            {
              router.map((item, index) => {
                return (<Route path={ item.path } component={ item.component } key={ index }></Route>)
              })
            }
            <Redirect exact from='/' to='/home'></Redirect>
            <Route component={ NoMatch }></Route>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
