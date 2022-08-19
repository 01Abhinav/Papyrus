import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, CssBaseline, Container, Box, Fab } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import Note from "./note";
import NoNote from "./no-note";
import Sidebar from "./sidebar";

import moment from "moment";

const axios = require("axios");

export default function NoteList() {
  const [notes, setNotes] = useState([]);
  const [date, setDate] = useState(
    new Date(Date.now()).toLocaleString().split(",")[0]
  );
  const [vn, setVn] = useState(0);
  const [n, setN] = useState(0);
  const [neu, setNeu] = useState(0);
  const [p, setP] = useState(0);
  const [vp, setVp] = useState(0);

  const navigate = useNavigate();

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

  useEffect(() => {
    // const _notes = notes.filter(note => note)
    const filterDate = moment(date).format("D/M/YYYY");
    const _notes = notes.filter((note) => {
      console.log(note.date, filterDate);
      return note.date === filterDate;
    });

    setNotes(_notes);
  }, [date]);

  useEffect(() => {
    for (let x in notes) {
      if (notes[x].sentiment === "N-") setVn((vn) => vn + 1);
      else if (notes[x].sentiment === "N") setN((n) => n + 1);
      else if (notes[x].sentiment === "P") setP((p) => p + 1);
      else if (notes[x].sentiment === "P+") setVp((vp) => vp + 1);
      else setNeu((neu) => neu + 1);
    }
    // eslint-disable-next-line
  }, [notes]);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ display: "flex" }}>
          <Grid
            container
            spacing={4}
            sx={{ mt: 1, mx: "auto", display: "flex" }}
          >
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
          <Sidebar
            p={p}
            n={n}
            vn={vn}
            vp={vp}
            neu={neu}
            date={date}
            setDate={setDate}
          />
          <Fab
            sx={{
              position: "sticky",
              top: "90%",
              right: "2%",
            }}
            aria-label="Add"
            color="primary"
            onClick={() => navigate("/create")}
          >
            <AddIcon />
          </Fab>
        </Box>
      </Container>
    </>
  );
}
