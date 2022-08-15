// import Note from "./note";
// import NoNote from "./no-note";
// import { useEffect, useState } from "react";
// const axios = require("axios");

// const NoteList = () => {
//   const [notes, setNotes] = useState([]);
//   useEffect(() => {
//     axios
//       .get("/api/getNote/", {
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//       })
//       .then((res) => setNotes(res.data))
//       .catch((err) => console.log(err));
//     // eslint-disable-next-line
//   }, []);

//   return (
//     <div className="card-container m-3">
//       {notes.length === 0 && <NoNote />}
//       {notes.length !== 0 &&
//         notes?.map((note) => (
//           <Note
//             key={note._key}
//             id={note._id}
//             title={note.title <= 20 ? note.title : note.title.substring(0, 20)}
//             body={note.body}
//             date={note.date}
//           />
//         ))}
//     </div>
//   );
// };

// export default NoteList;

import React, { useState, useEffect } from "react";
import { Grid, CssBaseline, Container } from "@mui/material";

import Note from "./note";
import NoNote from "./no-note";

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
    // setNotes([
    //   {
    //     _key: 1,
    //     _id: 1,
    //     title: "Featured post",
    //     date: "Nov 12",
    //     body: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    //     image: "https://source.unsplash.com/random",
    //     imageLabel: "Image Text",
    //   },
    //   {
    //     _key: 2,
    //     _id: 2,
    //     title: "Post title",
    //     date: "Nov 11",
    //     body: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    //     image: "https://source.unsplash.com/random",
    //     imageLabel: "Image Text",
    //   },
    //   {
    //     _key: 3,
    //     _id: 3,
    //     title: "Featured post",
    //     date: "Nov 12",
    //     body: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    //     image: "https://source.unsplash.com/random",
    //     imageLabel: "Image Text",
    //   },
    //   {
    //     _key: 4,
    //     _id: 4,
    //     title: "Post title",
    //     date: "Nov 11",
    //     body: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    //     image: "https://source.unsplash.com/random",
    //     imageLabel: "Image Text",
    //   },
    //   {
    //     _key: 5,
    //     _id: 5,
    //     title: "Featured post",
    //     date: "Nov 12",
    //     body: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    //     image: "https://source.unsplash.com/random",
    //     imageLabel: "Image Text",
    //   },
    //   {
    //     _key: 6,
    //     _id: 6,
    //     title: "Post title",
    //     date: "Nov 11",
    //     body: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    //     image: "https://source.unsplash.com/random",
    //     imageLabel: "Image Text",
    //   },
    //   {
    //     _key: 7,
    //     _id: 7,
    //     title: "Featured post",
    //     date: "Nov 12",
    //     body: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    //     image: "https://source.unsplash.com/random",
    //     imageLabel: "Image Text",
    //   },
    //   {
    //     _key: 8,
    //     _id: 8,
    //     title: "Post title",
    //     date: "Nov 11",
    //     body: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    //     image: "https://source.unsplash.com/random",
    //     imageLabel: "Image Text",
    //   },
    // ]);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={4} sx={{ mt: 1 }}>
            {notes.length === 0 && <NoNote />}
            {notes.length !== 0 &&
              notes?.map(({ _key, _id, title, ...rest }) => (
                <Note
                  key={_key}
                  id={_id}
                  title={title <= 20 ? title : title.substring(0, 20)}
                  {...rest}
                />
              ))}
          </Grid>
        </main>
      </Container>
    </>
  );
}
