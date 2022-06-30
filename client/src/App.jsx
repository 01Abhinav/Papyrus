import NoteList from "./components/note-list";

import AddNote from "./components/add-note";
import Navbar from "./components/navbar";
import Error404 from "./components/error404";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/create" element={<AddNote />} />
          <Route path="/edit/:key" element={<AddNote />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
