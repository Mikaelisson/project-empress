import { useState } from "react";
import Loading from "../utils/Loading";

const CreateAndEditUser = (props) => {
  const [name, setName] = useState(props.edit ? props.dataForEditing.name : "");
  const [email, setEmail] = useState(
    props.edit ? props.dataForEditing.email : ""
  );
  const [password, setPassword] = useState(
    props.edit ? props.dataForEditing.password : ""
  );
  const [loading, setLoading] = useState(false);

  const createUser = async () => {
    const authentication = props.user.email;

    const data = await fetch("/admin/add/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, email, password, authentication }),
    });

    const doc = await data.json();

    setLoading(false);
    props.onCreateUser()
    props.onSetMessageFetch(doc);
  };

  const saveEdit = async () => {
    const authentication = props.user.email;

    const data = await fetch(`/admin/edit/user/${props.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        authentication,
      }),
    });

    const doc = await data.json();

    props.queryUsers();
    setLoading(false);
    props.onSetMessageFetch(doc);
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
          onClick={() => props.onCreateUser()}
        ></button>

        <h1 className="text-primary text-center mt-0 mb-4">
          {props.edit ? "Edit" : "Create"} User
        </h1>

        <form onSubmit={(event) => event.preventDefault()}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              autoComplete="new-name"
              onChange={(event) => setName(event.target.value)}
              value={name}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="E-mail"
              autoComplete="new-email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              required
            />
          </div>

          {!props.edit && (
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                autoComplete="new-password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                required
              />
            </div>
          )}

          <div className="d-grid gap-2">
            <button
              className="btn btn-primary"
              onClick={() => {
                if (props.edit) {
                  setLoading(true);
                  saveEdit();
                  props.onCreateUser();
                }
                if (!props.edit) {
                  if (name && email && password) {
                    setLoading(true);
                    createUser();
                  }
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

export default CreateAndEditUser;
