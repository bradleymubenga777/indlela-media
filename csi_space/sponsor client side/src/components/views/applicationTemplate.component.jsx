import React from 'react'

export default function grantTemplate() {
    return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 pt-5" id="fundingRequest">

                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 m-2 ">
                            <div className="p-3 statOne ">
                                <h4 className="mb-0 blackText">Application #112</h4>

                                <div className="pt-4 w-75 ">
                                  <h6>Company Name: The Mubenga Foundation</h6>

                                  <h6 className="mt-1">Email: bradleymubenga77@gmail.com</h6>

                                  <h5 className="mt-3">Info about the NPO:</h5>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem asperiores porro temporibus veritatis possimus consequatur, suscipit explicabo dignissimos. Eum, consequatur. Eum voluptate natus dolores, architecto voluptates minima nobis ea! Hic maiores deserunt fugit perferendis nemo! Possimus, mollitia nisi sed illum aliquam ut soluta eius odit ullam unde saepe consequuntur natus.</p>

                                  <a href="/">
                                      <i className="fa fa-file-pdf-o"></i> CIPC Document
                                  </a>

                                  <a href="/">
                                      <i className="ml-3 fa fa-file-pdf-o"></i> B-BBEEE Certificate
                                  </a>

                                  <a href="/">
                                      <i className="ml-3 fa fa-file-pdf-o"></i> Application Letter
                                  </a>

                                  <small class="d-block text-left mt-3 container">
                                    <a href="/">
                                      <button class="btn btn-success">Accept</button>
                                    </a>

                                    <a href="/">
                                      <button class="ml-3 btn btn-danger">Decline</button>
                                    </a>

                                    
                                    <a href="/">
                                      <button class="ml-3 btn btn-outline-primary">Incomplete</button>
                                    </a>
                                  </small>
                                </div>

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