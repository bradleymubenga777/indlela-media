import React from 'react'

export default function dashboard() {
    return (
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 pt-5" id="csiNetwork">
      <div class="pb-2 mb-3">
      </div>

      <div class="container">
          <div class="row d-flex justify-content-center align-items-center">

              <div class="col-sm-12 col-md-12 col-lg-3 col-xl-3 m-2 rectangleOne">
                  <div class="">
                      <div class="media text-muted d-flex flex-column p-3 statOne ">
                      <div class="d-flex flex-column justify-content-center align-items-center p-4">
                          <form action="upload" method="post" enctype="multipart/form-data">
                            <label for="fileToUpload">
                                <div class="profile-pic d-flex align-items-center justify-content-center">
                                    <i class="fa fa-camera"></i> <small className="ml-1"> Change Image</small>
                                </div>
                            </label>
                            <input type="File" name="profilePicture" id="fileToUpload" />
                          </form>

                          <div className="text-center whiteText">
                            <small className="lead">Clone Bradley</small><br />
                            <small className="dashEmail">The Millionares Club</small>
                          </div>
                        </div>

                      </div>
                  </div>
              </div>

              <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8 m-2 rectangleOne">
                  <div class="p-3 ">
                    <h5 class="border-bottom border-gray pb-2 mb-4 mb-0">My Profile <span class="badge badge-pill badge-info">2</span></h5>

                    <div className="d-flex align-items-center justify-content-center">
                      <div class="w-75 text-muted pt-3 mt-2 d-flex flex-column p-3 statOne ">
                          <form class="form-signin whiteText animate__animated animate__fadeInRight">

                            <label for="inputEmail" class="sr-only">Email address</label>
                            <h6 className="pt-2">Name</h6> 
                            <input type="text" id="inputEmail" class="form-control" value="Clone Bradley" required autofocus="" />
        
                            <label for="inputEmail" class="sr-only">Email address</label>
                            <h6 className="pt-2">Company Name</h6> 
                            <input type="text" id="inputEmail" class="form-control" value="Millionares Club" required autofocus="" />
        
                          </form>
                      </div>
                    </div>
                  </div>

                      <small class="d-block text-left mt-3 container">
                        <a href="/">
                          <button class="btn btn-primary">Save changes</button>
                        </a>
                      </small>
                  </div>
              </div>

          </div>
    </main>
    )
}