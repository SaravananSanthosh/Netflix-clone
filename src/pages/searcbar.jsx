import { useEffect, useState } from "react";
import { useAuth } from "./context";
import { BsPlayCircleFill } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { AiOutlineStar, AiOutlineDownSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Searcbar = () => {
  const navigate = useNavigate();
  const { searchh } = useAuth();
  const [image, setImage] = useState([]);

  const postCart = async (movie) => {
    const { data } = await axios.post(`http://localhost:3006/myList`, movie);
  };
  useEffect(() => {
    const total = async () => {
      const { data } = await axios.get(`http://localhost:3006/movies`);
      setImage(data);
    };
    total();
  }, []);

  const base_url = "https://image.tmdb.org/t/p/original";

  return (
    <div className="grid grid-cols-5 list-none gap-1 ">
      {image?.map((data) =>
        data?.title?.toLowerCase()?.includes(searchh?.toLowerCase()) ? (
          <li className="hov relative">
            <img className="h-96" src={`${base_url}${data.poster_path}`} />

            <h1 className="bg-black text-white font-bold h-full ">
              {data.title}
            </h1>
            <div className=" bg-[#000000a8] text-white font-bold absolute bottom-0 left-0 h-fit w-[257px]  p-2 con">
              <h1>{data.release_date}</h1>
              <div className="">
                <div className="flex space-x-3 mt-2">
                  <BsPlayCircleFill className="text-[26px] border p-[5px] rounded-[50%]  hover:scale-150 hover:bg-black" />
                  <BsPlusLg
                    className="text-[26px] border p-[5px] rounded-[50%]  hover:scale-150  hover:bg-black"
                    onClick={() => postCart(data)}
                  />

                  <BiLike className="text-[26px] border p-[5px] rounded-[50%]  hover:scale-150 hover:bg-black" />
                  <AiOutlineDownSquare
                    onClick={() => {
                      navigate(`/browse/${data.id}`);
                    }}
                    className="text-[26px] border p-[5px] rounded-[50%]  hover:scale-150 hover:bg-black"
                  />
                </div>
                <div className="flex justify-end items-end mt-16 gap-2 pb-3">
                  <AiOutlineStar />
                  <h1 className="mb-9 mr-5">{data.vote_average}</h1>
                </div>
              </div>
            </div>
          </li>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Searcbar;
