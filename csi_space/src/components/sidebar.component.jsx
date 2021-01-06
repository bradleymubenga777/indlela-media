import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import '../main.css'

const sidebar = (props) => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse">
                <div className="sidebar-sticky pt-3 leftColumn">
                    <div className="container text-center pt-3">
                        <img alt="" className="img-fluid circleImg" src="../img/bradley.jpg" width="60px" />
                    </div>

                    <div className="text-center pt-3">
                        <small className="lead">Bradley Mubenga</small><br />
                        <small className="dashEmail">The Mubenga Foundation</small>
                    </div>

                    <div className="pt-3">
                        <ul>
                            <div className="dashLink pb-3">
                                <NavLink to="/dashboard" className="active">
                                    <i className="fa fa-bar-chart-o mr-1"></i>Dasboard
                                </NavLink>
                            </div>

                            <div className="dashLink pb-3">
                                <a href="/">
                                    <i className="fa fa-diamond mr-1"></i>Funding Requests
                                </a>
                            </div>

                            <div className="dashLink pb-3">
                                <a href="/">
                                    <i className="fa fa-comments-o mr-1"></i>CSI Network
                                </a>
                            </div>

                            <div className="dashLink pb-3">
                                <a href="/">
                                    <i className="fa fa-address-book-o mr-1"></i>Contacts
                                </a>
                            </div>

                            <div className="dashLink pb-3">
                                <a href="/">
                                    <i className="fa fa-user-circle-o mr-1"></i>My Profile
                                </a>
                            </div>

                            <div className="dashLink pb-1">
                                <a href="/">
                                    <i className="fa fa-info-circle mr-1"></i>Tips
                                </a>
                            </div>
                        </ul>
                    </div>

                    <div className="pt-1">
                        <ul>
                            <div className="dashLink pb-1">
                                <a href="/">
                                    <i className="fa fa-cogs mr-1"></i>Settings
                                </a>
                            </div>
                        </ul>
                    </div>
                    
                    <div className="pt-1">
                        <ul>
                            <div className="dashLink pb-2">
                                <a href="/">
                                    <button className="btn btn-secondary">Log Out</button>
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>
        </nav>
    )
}

export default withRouter(sidebar);