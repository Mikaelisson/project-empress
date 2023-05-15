import { useRouteError } from "react-router-dom";
import App from "../App";

import "./utils/backgrounds.css"

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <div
        className="d-flex flex-column justify-content-between"
        style={{ height: "100vh" }}
        id="background-1"
      >
        <App>
          <div
            id="error-page"
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <div>
              <h1 className="bg-danger text-white rounded text-center px-2">
                Oops!
              </h1>
              <div className="bg-dark text-white rounded text-center px-2">
                <p className="m-0">Sorry, an unexpected error has occurred.</p>
                <i>{error.statusText || error.message}</i>
              </div>
            </div>
          </div>
        </App>
      </div>
    </div>
  );
};

export default ErrorPage;
