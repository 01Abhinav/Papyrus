import React, { useState, useEffect } from "react";
import { Grid, CssBaseline, Container, Box } from "@mui/material";

import Note from "./note";
import NoNote from "./no-note";
import Sidebar from "./sidebar";

const axios = require("axios");

export default function NoteList() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/getNote/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => setNotes(res.data))
      .catch((err) => console.log(err));

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ display: "flex" }}>
          <Grid container spacing={4} sx={{ mt: 1, display: "flex" }} xs={9}>
            {notes.length === 0 ? (
              <NoNote />
            ) : (
              notes?.map(({ _key, _id, title, ...rest }) => (
                <Note
                  key={_key}
                  id={_id}
                  title={title <= 20 ? title : title.substring(0, 20)}
                  {...rest}
                />
              ))
            )}
          </Grid>
          <Grid xs={3} sx={{ margin: "auto", mt: 2 }}>
            <Sidebar />
          </Grid>
        </Box>
      </Container>
    </>
  );
}
