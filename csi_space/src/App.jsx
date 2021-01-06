import React, { Component } from 'react';
import './main.css'
import Navbar from './components/navbar.component'
import SideBar from './components/sidebar.component'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from './components/welcome.component'
import Dashboard from './components/dashboard'
import './font-awesome/css/font-awesome.min.css'

class App extends Component{

  render() {
    return(
      <BrowserRouter>
        <section id="dashBoardBody">
            <Navbar />

            <div class="container-fluid">
                <div class="row">
                    <SideBar />
                    <Route exact path="/"  component={WelcomePage} />
                    <Route exact path="/dashboard" component={Dashboard} />
                </div>
            </div>

        </section>
      </BrowserRouter>
    )
  }
}

export default App;