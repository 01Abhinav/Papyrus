import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AddNote = () => {
  const { key } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/getNote/${key}`)
      .then((res) => {
        console.log(res);
        setTitle(res.data[0].title);
        setBody(res.data[0].body);
        setDate(res.data[0].date);
      })
      .then(() => console.log("note info fetched!"))
      .catch((err) => console.log(err));
  }, []);

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }
  function onChangeBody(e) {
    setBody(e.target.value);
  }

  function submit(e) {
    e.preventDefault();

    const data = {
      title: title,
      body: body,
    };
    title
      ? fetch("http://localhost:8080/api/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then(() => {
            console.log("new note request sent");
            window.location = "/";
          })
          .catch((err) => console.log(err))
      : window.alert("Empty Fields :(");
  }
  function edit(e) {
    e.preventDefault();

    const data = {
      title: title,
      body: body,
      date: date,
    };
    fetch(`http://localhost:8080/api/getNote/${key}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("update note request sent");
        window.location = "/";
      })
      .catch((err) => console.log(err));
  }

  return (
    <div style={{ margin: 100 }}>
      {key ? (
        <h1 className="m-2">Edit Note</h1>
      ) : (
        <h1 className="m-2">Create Note</h1>
      )}
      <form onSubmit={submit}>
        <div className="form-group col-lg-12 m-2">
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={onChangeTitle}
            placeholder="Title"
          />
        </div>
        <div className="form-group col-lg-12 m-2">
          <textarea
            type="text"
            rows="10"
            cols="50"
            className="form-control"
            value={body}
            onChange={onChangeBody}
            placeholder="Write Here..."
          />
        </div>

        <div className="d-flex justify-content-start">
          <svg
            type="submit"
            onClick={key ? edit : submit}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-file-arrow-up-fill m-2"
            viewBox="0 0 16 16"
          >
            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM7.5 6.707 6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707z" />
          </svg>
          <h4 className="d-flex align-items-end">save</h4>
        </div>
      </form>
    </div>
  );
};
export default AddNote;
