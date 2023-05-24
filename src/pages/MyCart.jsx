import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SingleCartComponent from "../components/SingleCartComponent";
import { getcartItems } from "../lib/axios/api-functions/cart";
const Mycart = () => {
  const [carts, setCarts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getcartItems().then(({ data }) => setCarts(data));
  }, []);

  return (
    <div>
      <form
        className={`grid h-screen justify-center bg-black text-white p-[70px] ${
          carts.length > 3 ? "h-auto" : "h-[100vh]"
        }`}
      >
        {carts.length > 0 ? (
          carts.map((cart) => <SingleCartComponent cart={cart} />)
        ) : (
          <h1 className="grid justify-center items-center">
            Cart is Empty Please Add a Cart
            <button
              onClick={() => navigate("/browse")}
              className="bg-[#FF0000] text-white p-2 gap-1 rounded-sm  hover:scale-110"
            >
              go back
            </button>
          </h1>
        )}
      </form>
    </div>
  );
};

export default Mycart;
