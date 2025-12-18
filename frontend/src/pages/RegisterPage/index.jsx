import React from "react";
import { useNavigate } from "react-router";
import { axiosInstance } from "../../axiosInstance";
import "./styles.css";

function RegisterPage() {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    axiosInstance
      .post("/auth/register", {
        username: e.target.username.value,
        displayName: e.target.fullName.value,
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((res) => {
        if (res.status == 201) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="register-page">
      <div className="container">
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Username" name="username" required />
          <input type="text" placeholder="Full Name" name="fullName" required />
          <input type="email" placeholder="E-mail" name="email" required />
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

export default RegisterPage;
