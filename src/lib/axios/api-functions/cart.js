import server from "../server";
// to delete a cart item
export const deleteCartItem = async (id) => {
  await server.delete(`myList/${id}`);
};
// to get all cartItems
export const getcartItems = async () => await server.get("/myList");
