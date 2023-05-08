import { useEffect, useState } from "react";
import Header from "../Header";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  const queryTickets = async () => {
    const doc = await fetch("/api/query/tickets");
    const data = await doc.json();
    setTickets(data);
  };

  useEffect(() => {
    queryTickets();
  }, []);

  return (
    <div>
      <Header />
      <div className="w-75 m-auto">
        <div>
          <h1 className="text-primary fs-3">
            Seja bem vindo ao seu Dashboard, Mikael!
          </h1>

          <div className="d-flex justify-content-end">
            <button
              className="btn btn-outline-primary"
              onClick={() => alert("New ticket")}
            >
              New ticket
            </button>
          </div>
        </div>

        <div>
          {tickets.map((ticket, index) => {
            return <p key={index}>{ticket._id}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
