const axios = require("axios");
const AddNote = () => {
  function handleAdd() {
    axios
      .get("http://localhost:8080/create")
      .then(() => console.log("create page directed!"))
      .catch((err) => console.log(err));
  }
  return <button onClick={handleAdd}>+</button>;
};
export default AddNote;
