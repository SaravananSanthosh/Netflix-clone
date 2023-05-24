import axios from "axios";
const server = axios.create({ baseURL: "http://localhost:3006/" });
export default server;
