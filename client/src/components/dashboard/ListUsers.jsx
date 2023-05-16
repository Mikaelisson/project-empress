import { useState } from "react";
import CreateAndEditUser from "./CreateAndEditUser";

import { MdModeEditOutline } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import Loading from "../utils/Loading";

const ListUsers = (props) => {
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false);
  const [dataForEditing, setDataForEditing] = useState("");
  const [editUser, setEditUser] = useState(false);
  const [loading, setLoading] = useState(false);

  const onCreateUser = () => setEditUser(!editUser);

  const deleteUser = async (id) => {
    const data = await fetch(`/admin/delete/user/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: props.user.email }),
    });
    const doc = await data.json();

    props.queryUsers();
    setLoading(false);
    props.onSetMessageFetch(doc);
  };

  return (
    <div
      className="position-fixed start-0 top-0 w-100 d-flex justify-content-center align-items-center "
      style={{ backgroundColor: "rgb(0, 0, 0, .8)", height: "100vh" }}
    >
      <div className="w-75 bg-white rounded pt-3 p-4 position-relative">
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 p-3"
          aria-label="Close"
          onClick={() => props.onListUsers()}
        ></button>

        <h1 className="text-primary text-center mt-0 mb-4">Users</h1>

        <ul className="list-group">
          {props.users.map((user, index) => {
            return (
              <li className="list-group-item" key={index}>
                {user.name}

                <input
                  type="text"
                  id={user._id}
                  onChange={() => setId(user._id)}
                  value={user._id}
                  hidden
                />

                <div className="d-flex justify-content-end gap-2 mt-2">
                  <button
                    className="btn btn-secondary btn-sm d-flex justify-content-center align-items-center"
                    onClick={() => {
                      setId(user._id);
                      setEdit(true);
                      setDataForEditing(user);
                      onCreateUser();
                    }}
                    title="Edit user"
                  >
                    <MdModeEditOutline
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </button>
                  <button
                    className="btn btn-danger btn-sm d-flex justify-content-center align-items-center"
                    onClick={() => {
                      setLoading(true);
                      deleteUser(user._id);
                    }}
                    title="Delete user"
                  >
                    <TiDelete
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {editUser && (
        <CreateAndEditUser
          onCreateUser={onCreateUser}
          user={props.user}
          edit={edit}
          id={id}
          dataForEditing={dataForEditing}
          onSetMessageFetch={props.onSetMessageFetch}
          queryUsers={props.queryUsers}
        />
      )}
      {loading && <Loading />}
    </div>
  );
};

export default ListUsers;
