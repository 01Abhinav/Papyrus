import Note from "./note";
import { useEffect, useState } from "react";
const axios = require("axios");

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((res) => {
        setNotes(res.data);
        return "success";
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card-container">
      {notes.map((note) => (
        <Note key={""} header={note.title} body={note.body} />
      ))}
    </div>
  );
};

export default NoteList;
