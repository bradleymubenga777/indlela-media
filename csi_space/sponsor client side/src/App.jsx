import React, { Component } from 'react';
import './main.css'
import './font-awesome/css/font-awesome.min.css'
import Navbar from './components/navbar.component'
import SideBar from './components/sidebar.component'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from './components/welcome.component'
import Dashboard from './components/dashboard.component'
import FundingRequests from './components/fundingRequest.compoent'
import CsiNetwork from './components/csiNetwork.component'
import MyProfile from './components/myProfile.component'
import GrantTemplate from './components/views/grantTemplate.component'

class App extends Component{

  render() {
    return(
      <BrowserRouter>
        <section id="dashBoardBody">
            <Navbar />

            <div class="container-fluid">
                <div class="row">
                    <SideBar />
                    <Route exact path="/sponsor"  component={WelcomePage} />
                    <Route exact path="/sdashboard" component={Dashboard} />
                    <Route exact path="/fundingRequests" component={FundingRequests} />
                    <Route exact path="/sgrantListing" component={CsiNetwork} />
                    <Route exact path="/smyProfile" component={MyProfile} />
                    <Route exact path="/grantListTemplate" component={GrantTemplate} />
                </div>
            </div>

        </section>
      </BrowserRouter>
    )
  }
}

export default App;