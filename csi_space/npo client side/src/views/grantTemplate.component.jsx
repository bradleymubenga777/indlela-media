import React from 'react'

export default function grantTemplate() {
    return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 pt-5" id="fundingRequest">

                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 m-2 rectangleOne">
                            <div className="p-3 statOne ">
                                <h4 className="mb-0 whiteText">Big Shot Investments</h4>

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
                                    <a href="/">
                                      <button class="btn btn-primary">Close Listing</button>
                                    </a>
                                  </small>
                                </div>

                              </div>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 m-2 rectangleOne">
                            <div className="p-3 statOne ">
                                <h5 className="mb-0 whiteText">Applications <span className="badge badge-pill badge-info">3</span></h5>
                                <div className="d-flex align-items-center">
                                  <div className="d-flex pb-3">
                                  </div>
                                </div>

                                <table className="table table-striped whiteText">
                                  <thead>
                                    <tr>
                                      <th scope="col">#</th>
                                      <th scope="col">Company Name</th>
                                      <th scope="col">Representative</th>
                                      <th scope="col">CIPC Document</th>
                                      <th scope="col">Application Letter</th>
                                      <th scope="col">Accept Or Decline</th>
                                    </tr>
                                  </thead>

                                  <tbody>
                                    <tr>
                                      <th scope="row">1</th>
                                      <td>The Mubenga Foundation</td>
                                      <td>Bradley Mubenga</td>
                                      <td>Download <i className="fa fa-file-pdf-o"></i></td>
                                      <td>Download <i className="fa fa-file-pdf-o"></i></td>
                                      <td>
                                        <a href="/" className="badge badge-pill badge-success">Accept</a>
                                        <a href="/" className="ml-1 badge badge-pill badge-danger">Decline</a>
                                      </td>
                                    </tr>

                                    <tr>
                                      <th scope="row">2</th>
                                      <td>Munashe & Munashe Co.</td>
                                      <td>Munashe</td>
                                      <td>Download <i className="fa fa-file-pdf-o"></i></td>
                                      <td>Download <i className="fa fa-file-pdf-o"></i></td>
                                      <td>
                                        <a href="/" className="badge badge-pill badge-success">Accept</a>
                                        <a href="/" className="ml-1 badge badge-pill badge-danger">Decline</a>
                                      </td>
                                    </tr>

                                    <tr>
                                      <th scope="row">3</th>
                                      <td>Larry & Harry Invesments</td>
                                      <td>Larry Parry</td>
                                      <td>Download <i className="fa fa-file-pdf-o"></i></td>
                                      <td>Download <i className="fa fa-file-pdf-o"></i></td>
                                      <td>
                                        <a href="/" className="badge badge-pill badge-success">Accept</a>
                                        <a href="/" className="ml-1 badge badge-pill badge-danger">Decline</a>
                                      </td>
                                    </tr>
                                  </tbody>
                              </table>

                              </div>
                        </div>
                    </div>
                </div>


                <div className="pt-3 pb-2 mb-3">
                </div>

                <div className="container">

                </div>
            </main>
    )
}