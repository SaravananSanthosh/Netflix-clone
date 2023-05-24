import { memo } from "react";
import { deleteCartItem } from "../lib/axios/api-functions/cart";
const SingleCartComponent = ({ cart }) => {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <li
      className="flex border p-[20px] mt-[10px] w-[130vh] h-[30vh] "
      key={cart.id}
    >
      <img
        className="h-[150px]"
        src={`https://image.tmdb.org/t/p/original${cart.backdrop_path}`}
        alt=""
      />
      <div className="grid items-center pl-[10px]">
        <h1>movie name : {cart.title}</h1>
        <h1>overview :{truncate(cart.overview, 150)}</h1>
        <input
          type="submit"
          value={"remove cart"}
          className="bg-red-600"
          onClick={() => {
            deleteCartItem(cart.id);
          }}
        />
      </div>
    </li>
  );
};

export default memo(SingleCartComponent);
