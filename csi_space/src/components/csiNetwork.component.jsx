import React from 'react'

export default function csiNetwork() {
    return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 pt-5" id="csiNetwork">
                <div className="container d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 className="h2">CSI Network</h1>
                </div>

                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">

                        <div className="container-fluid col-sm-12 col-md-12 col-lg-4 m-2 col-xl-4">
                          <div className="row">
                              <div className="col-12 m-2 rectangleTwo d-flex flex-column justify-content-center align-items-center">

                                <div className="statOne p-2 container">
                                  <div>
                                    <h6>Requests Made <span className="badge badge-pill badge-primary">100</span></h6>
                                  </div>
                                </div>

                                <div className="statOne mt-2 p-2 container">
                                  <div>
                                    <h6>Pending Requests <span className="badge badge-pill badge-warning">75</span></h6>
                                  </div>
                                </div>

                                <div className="statOne mt-2 p-2 container">
                                  <div>
                                    <h6>Pending Requests <span className="badge badge-pill badge-success">15</span></h6>
                                  </div>
                                </div>
                                
                              </div>

                              <div className="col-12 m-2 rectangleTwo">
                                <p>Upgrade To View</p>
                              </div>
                          </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7 m-2 rectangleOne">
                            <div className="p-3 statOne ">
                                <h6 className="border-bottom border-gray pb-2 mb-0">Recent updates</h6>

                                <div className="media text-muted pt-3 ">
                                  <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="/007bff"></rect><text x="50%" y="50%" fill="/007bff" dy=".3em">32x32</text></svg>
                                  <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray whiteText">
                                    <strong className="d-block whiteText">@username</strong>
                                    Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                                  </p>
                                </div>

                                <div className="media text-muted pt-3">
                                  <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="/e83e8c"></rect><text x="50%" y="50%" fill="/e83e8c" dy=".3em">32x32</text></svg>
                                  <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray whiteText">
                                    <strong className="d-block text-gray-dark">@username</strong>
                                    Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                                  </p>
                                </div>

                                <div className="media text-muted pt-3">
                                  <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="/6f42c1"></rect><text x="50%" y="50%" fill="/6f42c1" dy=".3em">32x32</text></svg>
                                  <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray whiteText">
                                    <strong className="d-block text-gray-dark">@username</strong>
                                    Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                                  </p>
                                </div>

                                <small className="d-block text-right mt-3">
                                  <a href="/">All updates</a>
                                </small>
                              </div>
                        </div>

                    </div>
                </div>
            </main>
    )
}
