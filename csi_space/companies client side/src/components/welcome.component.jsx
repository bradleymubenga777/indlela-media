import React from 'react'
import successKid from '../img/successKid.png'

export default function welcome() {
    return (
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 p">
                <div class="pt-3 pb-2 mb-3">
                </div>

                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 m-2 rectangleOne">
                            <div class="statOne container">
                                <h3 class="pt-3 text-center">Welcome!</h3>
                                <p>Here is to changing the world! CSI Space creates an environment where Non-profit organisations find fast, easy and reliable access to funding and connect Corporate funders to relevant organisations at the same time. Upgrade to our premium package and get access to unlimited Funders and sponshorship requests. 
                                </p>

                                <div class="conntainer pb-3">
                                    <div class="row">
                                        <div class="col-12 text-center">
                                            <img width="250rem"  src={successKid} alt=""/>
                                        </div>

                                        <div class="col-6 text-center">
                                            <button class="btn btn-lg btn-primary">Upgrade</button>
                                        </div>

                                        <div class="col-6 text-center">
                                          <button class="btn btn-lg btn-primary">Go to Dashboard</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    )
}
