// @flow
import React from "react";

const ErrorNotFoundScreen = () => {
  return (
    <div className="content content-auth-alt">
      <div className="container ht-100p tx-center">
        <div className="ht-100p d-flex flex-column align-items-center justify-content-center">
          <h1 className="tx-color-01 tx-24 tx-sm-32 tx-lg-36 mg-xl-b-5">
            404 Page Not Found
          </h1>
          <h5 className="tx-16 tx-sm-18 tx-lg-20 tx-normal mg-b-20">
            Oopps. The page you were looking for doesn't exist.
          </h5>
          <p className="tx-color-03 mg-b-30">
            You may have mistyped the address or the page may have moved. Try
            searching below.
          </p>
          <div className="d-flex mg-b-40">
            <a href="/" className="btn btn-brand-02 bd-0 mg-l-5 pd-sm-x-25">
              Go to Home page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorNotFoundScreen;
