import React from 'react'
import { NavLink } from 'react-router-dom';

export default function grantTemplate() {
    return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 pt-5" id="fundingRequest">

                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 m-2">
                            <div className="p-3 statOne ">
                                <h4 className="mb-0 blackText">Big Shot Investments</h4>

                                <div className="pt-4 w-75 ">
                                  <h5>Grant Listing For Companies [NPO's]</h5>

                                  <h6 className="mt-4">Description:</h6>
                                  <p>We are looking for a small business with a passion of A, B & C and who are well rounded with D, E & F. Requirements are A, B , AC ,DD, VE...</p>

                                  <h6>Requirements:</h6>
                                  <ul>
                                    <li>We are looking for a small business with a passion of A, B & C and who are well rounded with D, E & F. Requirements are A, B , AC ,DD, VE...</li>
                                    <li>We are looking for a small business with a passion of A, B & C and who are well rounded with D, E & F. Requirements are A, B , AC ,DD, VE...</li>
                                    <li>We are looking for a small business with a passion of A, B & C and who are well rounded with D, E & F. Requirements are A, B , AC ,DD, VE...</li>
                                  </ul>

                                  <small class="d-block text-left mt-3 container">
                                    <NavLink to="/applyUniqueId">
                                      <button class="btn btn-primary">Request Funding</button>
                                    </NavLink>
                                  </small>
                                </div>

                              </div>
                        </div>
                    </div>
                </div>
            </main>
    )
}