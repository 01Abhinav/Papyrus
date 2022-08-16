// import axios from "axios";
// import { useState } from "react";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   function onUsernameChange(e) {
//     setUsername(e.target.value);
//   }
//   function onPasswordChange(e) {
//     setPassword(e.target.value);
//   }

//   function submit(e) {
//     e.preventDefault();
//     const user = {
//       username: username,
//       password: password,
//     };

//     axios
//       .post("/user/login/", user, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       // fetch("http://localhost:8080/user/login/", {
//       //   method: "POST",
//       //   headers: {
//       //     "Content-Type": "application/json",
//       //   },
//       //   body: JSON.stringify(user),
//       // })
//       .then((resData) => {
//         localStorage.setItem("token", resData.data.token);
//         localStorage.setItem("user", resData.data.user);
//         window.location = "/";
//       })

//       .catch((err) => console.log(err));
//   }

//   return (
//     <div className=" col-lg-4" style={{ margin: 100 }}>
//       <h1 className="my-2">Login</h1>

//       <form onSubmit={submit}>
//         <div className=" form-group input-group  my-4">
//           <div className="input-group-prepend">
//             <div className="input-group-text">@</div>
//           </div>
//           <input
//             type="text"
//             className="form-control"
//             value={username}
//             onChange={onUsernameChange}
//             placeholder="Username"
//           />
//         </div>
//         <div className="form-group  my-4">
//           <input
//             type="password"
//             className="form-control"
//             value={password}
//             onChange={onPasswordChange}
//             placeholder="Password"
//           />
//         </div>

//         <div className="d-flex justify-content-start">
//           <button type="submit" className="btn btn-dark">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import axios from "axios";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };

    axios
      .post("/user/login/", user, {
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
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />

            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  onClick={() => navigate("/signup")}
                  variant="body2"
                  sx={{ cursor: "pointer" }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
              <Grid item>
                <Link
                  onClick={() => navigate("/")}
                  variant="body2"
                  sx={{ cursor: "pointer" }}
                >
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
