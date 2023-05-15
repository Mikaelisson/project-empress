import App from "../App";

import { RiAdminLine } from "react-icons/ri";
import { MdAddBusiness } from "react-icons/md";

import "./utils/backgrounds.css";

const Support = () => {
  return (
    <div
      className="d-flex flex-column justify-content-between"
      style={{ height: "100vh" }}
      id="background-2"
    >
      <App>
        <div className="w-75 mx-auto" style={{ height: "100%" }}>
          <h1 className="text-center text-primary mb-4">Support</h1>

          <div
            className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-2"
            style={{ height: "50%" }}
          >
            <div className="d-flex justify-content-center card">
              <a
                href="https://api.whatsapp.com/send?phone=5511971504799"
                target="_blank"
                className="d-flex flex-column align-items-center gap-2 text-decoration-none text-primary text-center p-4"
              >
                <button className="btn btn-primary rounded-circle">
                  <MdAddBusiness style={{ width: "40px", height: "50px" }} />
                </button>
                <strong>I need support for my business</strong>
              </a>
            </div>

            <div className="d-flex justify-content-center card">
              <a
                href="/dashboard"
                className="d-flex flex-column align-items-center gap-2 text-decoration-none text-secondary text-center p-4"
              >
                <button className="btn btn-secondary rounded-circle">
                  <RiAdminLine style={{ width: "40px", height: "50px" }} />
                </button>
                <strong>Administrator</strong>
              </a>
            </div>
          </div>
        </div>
      </App>
    </div>
  );
};

export default Support;
