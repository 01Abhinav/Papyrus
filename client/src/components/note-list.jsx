import Note from "./note";
import NoNote from "./no-note";
import { useEffect, useState } from "react";
const axios = require("axios");

const NoteList = () => {
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
    <div className="card-container m-3">
      {notes.length === 0 && <NoNote />}
      {notes.length !== 0 &&
        notes?.map((note) => (
          <Note
            key={note._key}
            id={note._id}
            title={note.title <= 20 ? note.title : note.title.substring(0, 20)}
            body={note.body}
            date={note.date}
          />
        ))}
    </div>
  );
};

export default NoteList;
