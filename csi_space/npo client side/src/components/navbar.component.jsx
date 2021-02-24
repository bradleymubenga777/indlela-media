import React from 'react'
import csiLogo from '../img/csiSpace.png'

export default function navbar() {
    return (
        <nav className="navbar navbar-dark sticky-top navbar-fixed  flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3 text-center" href="/csi-space">
                <img alt="" src={csiLogo} width="115px" />
            </a>

            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <input className="form-control navbar" type="text" placeholder="Search" aria-label="Search" />
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap mr-4 ml-4">
                <a className="nav-link" href="/"><i className="fa fa-bell-o"></i></a>
              </li>
            </ul>
        </nav>
    )
}
