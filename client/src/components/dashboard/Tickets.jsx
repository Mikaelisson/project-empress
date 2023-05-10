import { useEffect, useState } from "react";
import Loading from "../utils/Loading";
import CreateAndEditTicket from "./CreateAndEditTicket";

const Tickets = (props) => {
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [createTicket, setCreateTicket] = useState(false);
  const [dataForEditing, setDataForEditing] = useState("");

  const deleteTicket = async () => {
    const id = document.getElementById("id").value;
    const email = props.user.email;

    const data = await fetch(`/admin/delete/ticket/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const doc = await data.json();
    console.log(doc);

    props.onSetMessageFetch(doc);
    props.queryTickets();
    setLoading(false);
  };

  const onCreateTicket = () => setCreateTicket(!createTicket);

  return (
    <div>
      {props.tickets
        .map((ticket) => {
          return (
            <form
              key={ticket._id}
              className="w-25 card w-100 p-2 my-2"
              onSubmit={(event) => event.preventDefault()}
            >
              <div>
                <strong className="text-capitalize">{ticket.client}</strong>
                <p className="text-capitalize m-0">
                  <strong>Title:</strong> {ticket.title}
                </p>
              </div>

              <input
                type="text"
                id="id"
                onChange={() => setId(ticket._id)}
                value={ticket._id}
                hidden
              />

              <div className="d-flex justify-content-end gap-2">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    setEdit(true);
                    setDataForEditing(ticket);
                    onCreateTicket();
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    setLoading(true);
                    deleteTicket();
                  }}
                >
                  Delete
                </button>
              </div>
            </form>
          );
        })
        .reverse()}

      {createTicket && (
        <CreateAndEditTicket
          onCreateTicket={onCreateTicket}
          queryTickets={props.queryTickets}
          user={props.user}
          onSetMessageFetch={props.onSetMessageFetch}
          edit={edit}
          dataForEditing={dataForEditing}
        />
      )}

      {loading && <Loading />}
    </div>
  );
};

export default Tickets;
