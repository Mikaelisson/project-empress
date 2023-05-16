import { useState } from "react";
import Loading from "../utils/Loading";

const CreateAndEditTicket = (props) => {
  const [client, setClient] = useState(
    props.edit ? props.dataForEditing.client : ""
  );
  const [title, setTitle] = useState(
    props.edit ? props.dataForEditing.title : ""
  );
  const [description, setDescription] = useState(
    props.edit ? props.dataForEditing.description : ""
  );
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
    props.onCreateTicket();
    props.onSetMessageFetch(doc);
  };

  const editTicket = async (data) => {
    const dataApi = await fetch(`/admin/edit/ticket/${data._id}`, {
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

    const doc = await dataApi.json();
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

        <h1 className="text-primary text-center mt-0 mb-4">
          {props.edit ? "Edit" : "Create"} Ticket
        </h1>

        <form action="" method="" onSubmit={(event) => event.preventDefault()}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="client"
              placeholder="Client"
              onChange={(event) => setClient(event.target.value)}
              value={client}
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
              value={title}
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
              value={description}
              required
            ></textarea>
          </div>

          <div className="d-grid gap-2">
            <button
              className="btn btn-primary"
              onClick={() => {
                if (!props.edit) {
                  setLoading(!loading);
                  saveTicket();
                }
                if (props.edit) {
                  setLoading(true);
                  editTicket(props.dataForEditing);
                }
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

export default CreateAndEditTicket;
