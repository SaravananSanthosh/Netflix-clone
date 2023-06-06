import server from "../server";
export const getAllMovies = async () => await server.get("/movies");
export const updatedlike = async (data, url) =>
  await server.put(`/${url}/${data.id}`, data);
