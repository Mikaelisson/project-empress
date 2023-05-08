import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  const SESSION_EMPRESS = "SESSION_EMPRESS";
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem(SESSION_EMPRESS))
  );
  const navigate = useNavigate();

  const authentication = async () => {
    if (auth && auth.token != null && auth.email != null) {
      const data = await fetch("/admin/auth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: auth.email }),
      });
      if (data.status != 200) return navigate("/login");

      const doc = await data.json();

      localStorage.setItem(SESSION_EMPRESS, JSON.stringify(doc));
      setAuth(doc);
    } else {
      return navigate("/login");
    }
  };

  useEffect(() => {
    authentication();
  }, []);

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
