import { useEffect, useState } from "react";
import Header from "../Header";
import CreateTicket from "./CreateTicket";
import Alert from "../utils/Alert";
import Footer from "../Footer";

import "../utils/styleProgress.css";

const Dashboard = () => {
  const SESSION_EMPRESS = "SESSION_EMPRESS";

  const [tickets, setTickets] = useState([]);
  const [createTicket, setCreateTicket] = useState(false);
  const [user, setUser] = useState("");
  const [messageFetch, setMessageFetch] = useState("");
  const [messageWelcome, setMessageWelcome] = useState(true);

  const queryTickets = async () => {
    const doc = await fetch("/api/query/tickets");
    const data = await doc.json();
    setTickets(data);
    setUser(JSON.parse(localStorage.getItem(SESSION_EMPRESS)));
  };

  const onCreateTicket = () => setCreateTicket(!createTicket);

  const onSetMessageFetch = (data) => {
    setMessageFetch(data);
    setTimeout(() => {
      setMessageFetch("");
    }, 3000);
  };

  useEffect(() => {
    queryTickets();
    setTimeout(() => {
      setMessageWelcome(false);
    }, 5000);
  }, []);

  return (
    <div>
      <Header />

      <div className="w-75 m-auto">
        <div>
          {messageWelcome && (
            <div className="alert alert-primary" role="alert">
              <span
                id="progress"
                className="bg-primary"
                style={{ animationDuration: "5s" }}
              ></span>

              <strong className="text-primary fs-6 m-0">
                Seja bem vindo ao seu Dashboard, {user.name}!
              </strong>
            </div>
          )}

          <div className="d-flex justify-content-between align-items-center">
            <strong className="text-primary">Dashboard</strong>
            <button
              className="btn btn-outline-primary"
              onClick={() => setCreateTicket(true)}
            >
              New ticket
            </button>
          </div>
        </div>

        <h1 className="text-primary text-center my-2">Tickets</h1>

        <Tickets tickets={tickets} />

        {createTicket && (
          <CreateTicket
            onCreateTicket={onCreateTicket}
            queryTickets={queryTickets}
            user={user}
            onSetMessageFetch={onSetMessageFetch}
          />
        )}

        {messageFetch && <Alert>{messageFetch}</Alert>}
      </div>

      <Footer />
    </div>
  );
};

const Tickets = (props) => {
  return (
    <div>
      {props.tickets
        .map((ticket) => {
          return (
            <div
              key={ticket._id}
              id={ticket._id}
              className="w-25 card w-100 p-2 my-2"
            >
              <div>
                <strong className="text-capitalize">
                  {ticket.client}
                </strong>
                <p className="text-capitalize m-0">
                  <strong>Title:</strong> {ticket.title}
                </p>
              </div>

              <div className="d-flex justify-content-end gap-2">
                <button className="btn btn-secondary btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </div>
            </div>
          );
        })
        .reverse()}

      <div className="my-4 d-flex justify-content-center">
        <button className="btn btn-primary rounded-pill">View More</button>
      </div>
    </div>
  );
};

export default Dashboard;
