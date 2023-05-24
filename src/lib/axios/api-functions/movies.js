import server from "../server";
export const getAllMovies = async () => await server.get("/movies");
