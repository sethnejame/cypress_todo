import axios from "axios";

// this function makes an API call when our form is submitted
export const saveTodo = todo =>
  axios.post("http://localhost:3030/api/todos", todo);
