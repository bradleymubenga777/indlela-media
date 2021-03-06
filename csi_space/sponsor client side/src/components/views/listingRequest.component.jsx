import React from 'react'

export default function listingRequest() {
    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 pt-5" id="fundingRequest">

        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 m-2">
                    <form className="p-3 statOne blackText">
                        <h4 className="mb-0 blackText">Create a new listing</h4>

                        <div className="pt-4 w-75 ">
                          <h6>Name Of Listing:</h6>
                          <textarea class="form-control mb-2" id="message" placeholder="Write something" rows="1"></textarea>                          

                          <h6 className="mt-4">Description:</h6>
                          <textarea class="form-control mb-2" id="message" placeholder="Write something" rows="5"></textarea>


                          <h6>Requirements:</h6>
                          <textarea class="form-control mb-2" id="message" placeholder="Write something" rows="5"></textarea>

                            <h6 class="mb-2">CIPC Document?</h6>
                            <select id="inputState" class="form-control mt-1 mb-3" required="">
                                <option selected="">Choose...</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>

                            <h6 class="mb-2">SARS Document?</h6>
                            <select id="inputState" class="form-control mt-1 mb-3" required="">
                                <option selected="">Choose...</option>
                                <option>Yes</option>
                                <option>No</option>
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
