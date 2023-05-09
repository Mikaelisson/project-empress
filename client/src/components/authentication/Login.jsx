import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Loading from "../utils/Loading";
import Alert from "../utils/Alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [messageFetch, setMessageFetch] = useState("");

  const onSetMessageFetch = (data) => {
    setMessageFetch(data);
    setTimeout(() => {
      setMessageFetch("");
    }, 3000);
  };

  const navigate = useNavigate();
  const SESSION_EMPRESS = "SESSION_EMPRESS";

  const authentication = async () => {
    const doc = await fetch("/admin/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await doc.json();
    onSetMessageFetch(data);

    const token = doc.headers.get("authorization-token");

    if (token) {
      localStorage.setItem(SESSION_EMPRESS, JSON.stringify({ email, token }));
      setLoading(false);
      return navigate(`/dashboard`);
    }

    if (!token) {
      setLoading(false);
    }
  };

  return (
    <div
      className="bg-primary bg-gradient position-relative"
      style={{ height: "100vh" }}
    >
      <h1 className="py-3 bg-white w-100 text-center">
        <a className="text-decoration-none text-primary" href="/">
          Empress
        </a>
      </h1>

      <div className="d-flex align-items-center flex-column p-2 position-relative">
        <div
          className="my-3 p-2 position-absolute top-100 bg-white rounded-pill d-flex justify-content-center align-items-center"
          style={{
            width: "250px",
            height: "150px",
          }}
        >
          <img src="./background-ti.gif" style={{ width: "100%" }} alt="" />
        </div>

        <p className="text-white text-center mb-3 fs-2">Sign in</p>

        <form
          id="authenticationLogin"
          className="bg-white py-4 px-4 rounded"
          style={{
            maxWidth: "350px",
            width: "100%",
          }}
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              value={email}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
              required
            />
          </div>

          <div className="d-grid gap-2">
            <button
              className="btn btn-primary"
              onClick={() => {
                authentication();
                setLoading(!loading);
              }}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
      <div className="position-absolute top-100 w-100">
        <Footer />
      </div>

      {loading && <Loading />}

      {messageFetch && (
        <div className="w-100 d-flex justify-content-center">
          <Alert>{messageFetch}</Alert>
        </div>
      )}
    </div>
  );
};

export default Login;
