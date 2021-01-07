import React from 'react'
import { NavLink } from 'react-router-dom';
import ColumnChart from "./charts/Column Chart";
import ColumnLineAreaChart from './charts/Column Line Area Chart'

export default function dashboard() {
    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 pt-5" id="csiNetwork">
      <div className="pb-2 mb-3">
      </div>

      <div className="container">
          <div className="row d-flex justify-content-center align-items-center">

              <div className="container-fluid col-sm-12 col-md-12 col-lg-3 m-2 col-xl-3">
                <div className="row ">
                    <ColumnChart />

                    <ColumnLineAreaChart />
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 m-2 rectangleOne">
                  <div className="p-3">
                    <h5 className="border-bottom border-gray pb-2 mb-4 mb-0">Recent listings <span className="badge badge-pill badge-info">2</span></h5>

                      <div className="media text-muted pt-3 d-flex flex-column p-3 statOne ">
                        <div className="d-flex flex-row justify-content-center">
                          <p className="media-body pb-3 mb-0 small lh-125  border-gray whiteText">
                            <strong className="d-block whiteText">Company Name</strong>
                            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                          </p>
                        </div>

                        <NavLink to="/csiNetwork" class="btn btn-sm btn-primary mb-2">
                          Read more
                        </NavLink>
                      </div>


                      <div className="media text-muted pt-3 mt-2 d-flex flex-column p-3 statOne ">
                        <div className="d-flex flex-row justify-content-center">
                          <p className="media-body pb-3 mb-0 small lh-125  border-gray whiteText">
                            <strong className="d-block whiteText">Company Name</strong>
                            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                          </p>
                        </div>

                        <a href="/">
                          <button className="btn btn-sm btn-primary">Read More</button>
                        </a>
                      </div>

                      <small className="d-block text-right mt-3">
                        <NavLink to="/csiNetwork" class="btn btn-primary mb-2">
                          Read more
                        </NavLink>
                      </small>
                  </div>
              </div>

          </div>
      </div>
    </main>
    )
}
