import axios from "axios";

export default axios.create({
  baseURL: "https://stormy-mesa-92667.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});