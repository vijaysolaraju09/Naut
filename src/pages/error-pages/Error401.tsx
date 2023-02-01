import { Link } from "react-router-dom";
import "./error-page.css";
export default function Error401() {
  return (
    <div>
      <div className="error-container error-page bg-primary pt-5 pb-4">
        <div className="container-fluid ">
          <div className="col-lg-8 mx-auto text-white">
            <div className="row align-items-center d-flex flex-row">
              <div className="col-lg-6 text-lg-right pr-lg-4">
                <h1 className="display-1 mb-0">401</h1>
              </div>
              <div className="col-lg-6 error-page-divider text-lg-left pl-lg-4">
                <h2>An error occurred</h2>
                <h3 className="font-weight-light">error</h3>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 text-center mt-xl-2">
                <Link className="text-white font-weight-medium" to="/">
                  login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
