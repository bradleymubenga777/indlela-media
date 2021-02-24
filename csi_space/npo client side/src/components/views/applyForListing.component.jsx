import React from 'react'

export default function listingRequest() {
    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 pt-5" id="fundingRequest">

        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 m-2">
                    <form className="p-3 statOne ">
                        <h4 className="mb-0">Apply For Listing</h4>

                        <div className="pt-4 w-75 ">
                            <h6>Company Name:</h6>
                            <input type="text" class="form-control mb-2" id="companName" placeholder="Write something" rows="1" />

                            <h6 className="mt-4">Email:</h6>
                            <input type="email" class="form-control mb-2" id="email" placeholder="example@company.org" rows="1" />                           

                            <h6 className="mt-4">Tell us about your company:</h6>
                            <textarea class="form-control mb-2" id="message" placeholder="Write something" rows="5"></textarea>

                            <label for="exampleFormControlFile1" className="pt-3"><h6 className="mouseMe"><i className="fa fa-file-pdf-o"></i> Upload Application Letter</h6></label> <span class="badge badge-pill badge-info">No file</span>
                            <input type="file" class="form-control-file" id="exampleFormControlFile1" /><br/>

                            <label for="exampleFormControlFile1" className="pt-3"><h6 className="mouseMe"><i className="fa fa-file-pdf-o"></i> CIPC Document</h6></label> <span class="badge badge-pill badge-info">No file</span>
                            <input type="file" class="form-control-file" id="exampleFormControlFile1" /><br/>

                            <label for="exampleFormControlFile1" className="pt-3"><h6 className="mouseMe"><i className="fa fa-file-pdf-o"></i> B-BBEEE Certificate</h6></label> <span class="badge badge-pill badge-info">No file</span>
                            <input type="file" class="form-control-file" id="exampleFormControlFile1" /><br/>

                            <h6 class="mb-2 mt-4">Do You Agree with our terms and conditions?</h6>
                            <select id="inputState" class="form-control mt-1 mb-3" required="">
                                <option selected="">Choose...</option>
                                <option>Yes</option>
                            </select>


                            <small class="d-block text-left mt-3 container">
                              <button class="btn btn-primary">Submit</button>
                            </small>
                        </div>

                      </form>
                </div>
            </div>
        </div>

    </main>
    )
}
