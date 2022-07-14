import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onUsernameChange(e) {
    setUsername(e.target.value);
  }
  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  function submit(e) {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };

    axios
      .post("http://localhost:8080/user/login/", user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      // fetch("http://localhost:8080/user/login/", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(user),
      // })
      .then((resData) => {
        localStorage.setItem("token", resData.data.token);
        localStorage.setItem("user", resData.data.user);

        window.location = "/";
      })

      .catch((err) => console.log(err));
  }

  return (
    <div className=" col-lg-4" style={{ margin: 100 }}>
      <h1 className="my-2">Login</h1>

      <form onSubmit={submit}>
        <div className=" form-group input-group  my-4">
          <div class="input-group-prepend">
            <div class="input-group-text">@</div>
          </div>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={onUsernameChange}
            placeholder="Username"
          />
        </div>
        <div className="form-group  my-4">
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={onPasswordChange}
            placeholder="Password"
          />
        </div>

        <div className="d-flex justify-content-start">
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
