import { useEffect, useState } from "react";
import Header from "../Header";
import CreateTicket from "./CreateAndEditTicket";
import Alert from "../utils/Alert";
import Footer from "../Footer";
import Tickets from "./Tickets";

import "../utils/styleProgress.css";
import CreateAndEditTicket from "./CreateAndEditTicket";

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

          <div className="d-flex flex-wrap gap-2">
            <div className="w-100 d-flex justify-content-end">
              <button
                className="btn btn-primary"
                onClick={() => setCreateTicket(true)}
              >
                New ticket
              </button>
            </div>

            <div className="d-flex gap-2 overflow-auto">
              <div
                className="card border-primary"
                style={{ width: "auto", minWidth: "130px" }}
              >
                <div className="card-body">
                  <h5 className="card-title text-primary m-0 fs-6">
                    #Dashboard
                  </h5>
                </div>
              </div>

              <div
                className="card border-primary"
                style={{ width: "auto", minWidth: "140px" }}
              >
                <div className="card-body">
                  <h5 className="card-title text-primary m-0 fs-6">
                    Total tickets: {tickets.length}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-primary text-center my-4">Tickets</h1>

        <Tickets
          tickets={tickets}
          onSetMessageFetch={onSetMessageFetch}
          queryTickets={queryTickets}
          user={user}
        />

        {createTicket && (
          <CreateAndEditTicket
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

export default Dashboard;
