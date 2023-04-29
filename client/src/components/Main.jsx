import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import { BsArrowRight } from "react-icons/bs";

const Main = () => {
  return (
    <main>
      <div className="w-100">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide  position-relative"
          data-bs-ride="carousel"
          style={{ height: "100%" }}
        >
          <div className="carousel-inner" style={{ height: "500px" }}>
            <div className="carousel-item active" style={{ height: "100%" }}>
              <div
                className="w-100 position-absolute d-flex flex-column justify-content-center align-items-center"
                style={{ height: "100%" }}
              >
                <h1 className="text-white bg-primary p-2 mb-3 mx-2 rounded text-center bold fs-6">
                  CUSTOMIZED TECHNOLOGY FOR YOUR BUSINESS
                </h1>
                <div>
                  <a
                    href="#about"
                    className="btn btn-primary d-flex gap-2 align-items-center"
                  >
                    MEET EMPRESS
                    <BsArrowRight />
                  </a>
                </div>
              </div>

              <img
                src="./Technology-Watch.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                }}
              />
            </div>
            <div
              className="carousel-item position-relative"
              style={{ height: "100%" }}
            >
              <div className="d-flex flex-column position-absolute bottom-0 w-100">
                <a
                  href="#about"
                  className="btn btn-success rounded-0 d-flex gap-2 align-items-center"
                >
                  Be our partner!
                  <BsArrowRight />
                </a>
              </div>
              <img
                src="./Technology-Can-Boost-Your-Business-Productivity.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                }}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <Services />

      <About />

      <Contact />
    </main>
  );
};

export default Main;
