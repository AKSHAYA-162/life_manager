import React from "react";
import { axiosInstance } from "../../axiosInstance";
import "./styles.css";

function LoginPage() {
  const submitHandler = (e) => {
    e.preventDefault();
    axiosInstance
      .post("/auth/login", {
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then((res) => {
        if (res.status == 200) {
          localStorage.setItem("userJWT", res.data.token);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login-page">
      <div className="container">
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Username" name="username" required />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
