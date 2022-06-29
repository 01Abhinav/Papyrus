import React from "react";
const axios = require("axios");

const handleEdit = () => {
  axios.put();
};
const handleDelete = () => {};
const Note = ({ header, body }) => {
  return (
    <div className="card border-success mb-3">
      <div>
        <div className="card-header row">
          <div className="col-10">{header}</div>
          <div className="btn btn-danger col" onClick={handleDelete}>
            X
          </div>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text note-body">{body}</p>
      </div>

      <div onClick={handleEdit} class="btn btn-secondary">
        edit
      </div>
    </div>
  );
};

export default Note;
