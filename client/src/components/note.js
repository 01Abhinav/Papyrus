// import React from "react";
// import axios from "axios";

// const handleEdit = (id) => {
//   // console.log("hello", id);
//   const key = id.slice(6);

//   window.location = `/edit/${key}`;
// };
// const handleDelete = (id) => {
//   const key = id.slice(6);
//   axios
//     .delete(`http://localhost:8080/api/getNote/${key}`, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + localStorage.getItem("token"),
//       },
//     })
//     .then(() => {
//       console.log("delete success!");
//     })
//     .then(() => (window.location = "/"))
//     .catch((err) => console.log(err));
// };

// const Note = ({ id, title, body, date }) => {
//   return (
//     <div className="card note bg-light mb-3" style={{ cursor: "pointer" }}>
//       <div>
//         <div className="card-header d-flex justify-content-start">
//           <div className="col-14">
//             <h4>{title}</h4>
//           </div>

//           <div className="col d-flex justify-content-end">
//             <svg
//               onClick={() => handleDelete(id)}
//               type="submit"
//               xmlns="http://www.w3.org/2000/svg"
//               width="25"
//               height="25"
//               fill="currentColor"
//               className="bi bi-file-earmark-x text-danger"
//               viewBox="0 0 16 16"
//             >
//               <path d="M6.854 7.146a.5.5 0 1 0-.708.708L7.293 9l-1.147 1.146a.5.5 0 0 0 .708.708L8 9.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 9l1.147-1.146a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146z" />
//               <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
//             </svg>
//           </div>
//         </div>
//       </div>
//       <div className="card-body ">
//         <p className="card-text note-body" onClick={() => handleEdit(id)}>
//           {body}
//         </p>
//       </div>
//       <div className="b card-footer">
//         <small className="text-muted">Created on : {date.slice(0, 10)}</small>
//       </div>
//     </div>
//   );
// };

// export default Note;

import * as React from "react";
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  IconButton,
  // CardMedia,
} from "@mui/material";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import axios from "axios";

function Note(props) {
  const { id, title, body, date /*, image, imageLabel*/ } = props;

  const handleEdit = (id) => {
    console.log("hello", id);
    const key = id.slice(6);

    window.location = `/edit/${key}`;
  };
  const handleDelete = (id) => {
    console.log("delete", id);
    const key = id.slice(6);
    axios
      .delete(`http://localhost:8080/api/getNote/${key}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(() => {
        console.log("delete success!");
      })
      .then(() => (window.location = "/"))
      .catch((err) => console.log(err));
  };

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ maxWidth: 410 }}>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={() => handleDelete(id)}>
              <DeleteForeverIcon sx={{ color: "red" }} />
            </IconButton>
          }
          title={title}
          subheader={date}
        />
        <CardActionArea onClick={() => handleEdit(id)}>
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="subtitle1" paragraph>
              {body}
            </Typography>
            <Typography variant="subtitle1" color="secondary.main">
              Continue reading...
            </Typography>
          </CardContent>
          {/* <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={image}
            alt={imageLabel}
          /> */}
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default Note;
