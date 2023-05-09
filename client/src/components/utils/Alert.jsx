import "./styleProgress.css"

const Alert = (props) => {
  return (
    <div className="position-fixed top-0 mt-4 d-flex justify-content-center w-75">
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <span id="progress" className="bg-warning"></span>
        <p className="m-0">{props.children}</p>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};

export default Alert;
