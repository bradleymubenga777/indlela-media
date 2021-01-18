import React from 'react'

export default function funding() {
    return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 pt-5" id="fundingRequest">
                <div className="pt-3 pb-2 mb-3">
                </div>

                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 m-2">
                            <div className="p-3 statOne ">
                                <h5 className="mb-0 blackText">Funding Requests</h5>
                                <div className="d-flex align-items-center ">
                                  <div className="d-flex mt-2 pb-3 ">
                                    <a href="/" className="badge badge-primary ml-2">Incomplete <span className="badge badge-pill badge-light">6</span></a>
                                    <a href="/" className="badge badge-success ml-2">Successful <span className="badge badge-pill badge-light">5</span></a>
                                    <a href="/" className="badge badge-danger ml-2">Unsuccessful <span className="badge badge-pill badge-light">3</span></a>
                                  </div>
                                </div>

                                <table className="table table-striped whiteText blackText">
                                  <thead>
                                    <tr>
                                      <th scope="col">#</th>
                                      <th scope="col">Company Name</th>
                                      <th scope="col">Representative</th>
                                      <th scope="col">Status</th>
                                      <th scope="col">Status Info</th>
                                    </tr>
                                  </thead>

                                  <tbody>
                                    <tr>
                                      <th scope="row">1</th>
                                      <td>Big Scal Invesments</td>
                                      <td>Bradley Mubenga</td>
                                      <td><span className="badge badge-primary">Incomplete</span></td>
                                      <td>Please fill submit your company registration</td>
                                    </tr>

                                    <tr>
                                      <th scope="row">2</th>
                                      <td>Munashe & Munashe Co.</td>
                                      <td>Munashe</td>
                                      <td><span className="badge badge-success">Successful</span></td>
                                      <td className="w-50">Your funding application has been approved! Our colleges will be in contact with you.</td>
                                    </tr>

                                    <tr>
                                      <th scope="row">3</th>
                                      <td>Larry & Harry Invesments</td>
                                      <td>Larry Parry</td>
                                      <td><span className="badge badge-danger">Unsuccessful</span></td>
                                      <td className="w-50">Unfortunately your application was unsuccessful. Please consider doing A, B and C to improve your chances of getting funding.</td>
                                    </tr>
                                  </tbody>
                              </table>

                              </div>
                        </div>
                    </div>
                </div>
            </main>
    )
}
