import React from 'react'
import { NavLink } from 'react-router-dom';

export default function csiNetwork() {
    return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 pt-5" id="csiNetwork">
                <div className="pt-3">
                </div>

                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">

                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 m-2 ">
                            <div className="p-3 ">
                                <h5 className="border-bottom border-gray pb-2 mb-0">Grant Listings <span class="badge badge-pill badge-info">3</span></h5>

                                <div className="media text-muted pt-3 mt-2 statOne ">
                                  <img src="" alt="" />
                                  <div className="p-3">
                                    <p className="media-body pb-3 mb-0 small lh-125 blackText w-80">
                                      <strong className="d-block blackText">Big Shot Investments</strong>
                                      We are looking for a small business with a passion of A, B & C and who are well rounded with D, E & F. Requirements are A, B , AC ,DD, VE...
                                    </p>
                                    <NavLink to="/grantUniqueId" class="btn btn-sm btn-primary mb-2">
                                      Read more
                                    </NavLink>
                                  </div>
                                </div>

                                <div className="media text-muted pt-3 mt-2 statOne">
                                  <img src="" alt="" />
                                  <div className="p-3">
                                    <p className="media-body pb-3 mb-0 small lh-125 blackText w-80">
                                      <strong className="d-block blackText">The Grand Funders</strong>
                                      We are looking for a small business with a passion of A, B & C and who are well rounded with D, E & F. Requirements are A, B , AC ,DD, VE...
                                    </p>
                                    <NavLink to="/grantUniqueId" class="btn btn-sm btn-primary mb-2">
                                      Read more
                                    </NavLink>
                                  </div>
                                </div>

                                <div className="media text-muted pt-3 mt-2 statOne">
                                  <img src="" alt="" />
                                  <div className="p-3">
                                    <p className="media-body pb-3 mb-0 small lh-125 blackText w-80">
                                      <strong className="d-block blackText">Generosity League</strong>
                                      We are looking for a small business with a passion of A, B & C and who are well rounded with D, E & F. Requirements are A, B , AC ,DD, VE...
                                    </p>

                                    <NavLink to="/grantUniqueId" class="btn btn-sm btn-primary mb-2">
                                      Read more
                                    </NavLink>
                                  </div>
                                </div>

                                <small className="d-block text-right mt-3">
                                  <a href="/">More listings</a>
                                </small>
                              </div>
                        </div>

                    </div>
                </div>
            </main>
    )
}
