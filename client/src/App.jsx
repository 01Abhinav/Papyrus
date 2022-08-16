import NoteList from "./components/note-list";

import AddNote from "./components/add-note";
import Navbar from "./components/navbar";
import Error404 from "./components/error404";
import Login from "./components/login";
import Signup from "./components/signup";

import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <NoteList />
              </>
            }
          />
          <Route
            path="/create"
            element={
              <>
                <Navbar />
                <AddNote />
              </>
            }
          />
          <Route
            path="/edit/:key"
            element={
              <>
                <Navbar />
                <AddNote />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <Error404 />
              </>
            }
          />
        </Routes>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
