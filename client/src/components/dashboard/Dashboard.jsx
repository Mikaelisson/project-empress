import { useEffect, useState } from "react";
import Header from "../Header";
import Alert from "../utils/Alert";
import Footer from "../Footer";
import Tickets from "./Tickets";
import CreateAndEditTicket from "./CreateAndEditTicket";
import CreateAndEditUser from "./CreateAndEditUser";
import ListUsers from "./ListUsers";

import { FaUserPlus, FaUsers } from "react-icons/fa";
import { BiAddToQueue, BiMessageSquareAdd } from "react-icons/bi";

import "../utils/styleProgress.css";

const Dashboard = () => {
  const SESSION_EMPRESS = "SESSION_EMPRESS";

  const [tickets, setTickets] = useState([]);
  const [createTicket, setCreateTicket] = useState(false);
  const [createUser, setCreateUser] = useState(false);
  const [listUsers, setListUsers] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [messageFetch, setMessageFetch] = useState("");
  const [messageWelcome, setMessageWelcome] = useState(true);

  const queryTickets = async () => {
    const doc = await fetch("/api/query/tickets");
    const data = await doc.json();
    setTickets(data);
    setUser(JSON.parse(localStorage.getItem(SESSION_EMPRESS)));
  };

  const queryUsers = async () => {
    const data = await fetch("/admin/users", { method: "POST" });
    const doc = await data.json();
    setUsers(doc);
  };

  const onCreateTicket = () => setCreateTicket(!createTicket);
  const onCreateUser = () => setCreateUser(!createUser);
  const onListUsers = () => setListUsers(!users);

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

          <div className="d-flex flex-column gap-2">
            <div className="d-flex">
              <strong className="m-0 text-primary">Users</strong>

              <div className="w-100 d-flex justify-content-end align-items-center gap-2">
                <button
                  className="btn btn-primary d-flex justify-content-center align-items-center"
                  onClick={() => onCreateUser()}
                  title="New user"
                >
                  <FaUserPlus
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </button>

                <button
                  className="btn btn-primary d-flex justify-content-center align-items-center"
                  onClick={() => {
                    queryUsers();
                    setListUsers(true);
                  }}
                  title="User list"
                >
                  <FaUsers
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </button>
              </div>
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

        <h1 className="text-primary text-center mt-5">Tickets</h1>

        <div className="d-flex justify-content-end">
          <button
            className="btn btn-primary d-flex justify-content-center align-items-center"
            onClick={() => setCreateTicket(true)}
            title="New ticket"
          >
            <BiAddToQueue
              style={{
                width: "20px",
                height: "20px",
              }}
            />
          </button>
        </div>

        <Tickets
          tickets={tickets}
          onSetMessageFetch={onSetMessageFetch}
          queryTickets={queryTickets}
          user={user}
        />

        {listUsers && (
          <ListUsers
            users={users}
            user={user}
            onListUsers={onListUsers}
            onSetMessageFetch={onSetMessageFetch}
            queryUsers={queryUsers}
          />
        )}

        {createTicket && (
          <CreateAndEditTicket
            onCreateTicket={onCreateTicket}
            queryTickets={queryTickets}
            user={user}
            onSetMessageFetch={onSetMessageFetch}
          />
        )}

        {createUser && (
          <CreateAndEditUser
            onCreateUser={onCreateUser}
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
