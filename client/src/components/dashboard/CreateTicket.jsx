import { useState } from "react";
import Loading from "../utils/Loading";

const CreateTicket = (props) => {
  const [client, setClient] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const saveTicket = async () => {
    const data = await fetch("/admin/add/ticket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client,
        title,
        description,
        email: props.user.email,
      }),
    });

    const doc = await data.json();

    props.queryTickets();
    setLoading(false);
    props.onSetMessageFetch(doc);
    props.onCreateTicket();
  };

  return (
    <div
      className="position-fixed start-0 top-0 w-100 d-flex justify-content-center align-items-center z-2"
      style={{ backgroundColor: "rgb(0, 0, 0, .8)", height: "100vh" }}
    >
      <div className="w-75 bg-white rounded pt-3 p-4 position-relative">
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 p-3"
          aria-label="Close"
          onClick={() => props.onCreateTicket()}
        ></button>

        <h1 className="text-primary text-center mt-0 mb-4">Create Ticket</h1>

        <form action="" method="" onSubmit={(event) => event.preventDefault()}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="client"
              placeholder="Client"
              onChange={(event) => setClient(event.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Title"
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              id="description"
              rows="3"
              placeholder="Description"
              onChange={(event) => setDescription(event.target.value)}
              required
            ></textarea>
          </div>

          <div className="d-grid gap-2">
            <button
              className="btn btn-primary"
              onClick={() => {
                setLoading(!loading);
                saveTicket();
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default CreateTicket;
