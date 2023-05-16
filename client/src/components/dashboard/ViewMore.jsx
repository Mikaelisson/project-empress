const ViewMore = (props) => {
  return (
    <div
      className="position-fixed start-0 top-0 w-100 d-flex justify-content-center align-items-center z-2"
      style={{ backgroundColor: "rgb(0, 0, 0, .8)", height: "100vh" }}
    >
      <div
        className="w-75 bg-white rounded pt-3 p-4 position-relative overflow-auto"
        style={{ maxHeight: "80%" }}
      >
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 p-3"
          aria-label="Close"
          onClick={() => {
            props.onViewMore();
          }}
        ></button>

        <h1 className="text-primary text-center mt-0 mb-4">View More</h1>

        <strong>Client: {props.dataForEditing.client}</strong>
        <p>Title: {props.dataForEditing.title}</p>
        <p>Description: {props.dataForEditing.description}</p>
      </div>
    </div>
  );
};

export default ViewMore;
