import React from 'react'

export default function funding() {
    return (
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 pt-5" id="fundingRequest">
                <div class="container d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h2 class="h2">Funding Requests</h2>
                </div>

                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 m-2 rectangleOne">
                            <div class="p-3 statOne ">
                                <h6 class="border-bottom border-gray pb-2 mb-0 whiteText">Funding Requests</h6>

                                <div class="media text-muted pt-3 ">
                                  <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="/007bff"></rect><text x="50%" y="50%" fill="/007bff" dy=".3em">32x32</text></svg>
                                  <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray whiteText">
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                      <strong class="">Company Name</strong>
                                      <a href="/">See more</a>
                                    </div>
                                    <span class="d-block">Short description of the type of funding.</span>
                                  </div>
                                </div>


                                <small class="d-block text-right mt-3">
                                  <a href="/">All suggestions</a>
                                </small>
                              </div>
                        </div>
                    </div>
                </div>
            </main>
    )
}
