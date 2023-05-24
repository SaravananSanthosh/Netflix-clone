import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { useNavigate } from "react-router-dom";
import { BsPlayCircleFill } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { AiOutlineDownSquare } from "react-icons/ai";
import "react-multi-carousel/lib/styles.css";

const base_url = "https://image.tmdb.org/t/p/original";
const DataRow = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const postCart = async (movie) =>
    await axios.post(`http://localhost:3006/myList`, movie);

  const navigate = useNavigate();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 900 },
      items: 5,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 900, min: 624 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 624, min: 264 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 264, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    const fetchPositions = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3${fetchUrl}`
      );
      setMovies(response.data.results);
    };
    fetchPositions();
  }, []);
  return (
    <>
      <h1 className="title p-2 bg-black text-white ml-2 font-bold">{title}</h1>

      <div className="overflow-x-auto hi  ">
        <Carousel responsive={responsive}>
          {fetchUrl.map((movie, index) => (
            <div
              className="list-none relative  hover:scale-110 duration-1000 h-auto hov "
              key={index}
            >
              <img
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                key={movie.id}
              />
              <div className="bg-[#000000a8] text-white font-bold absolute bottom-0 left-0 h-fit w-full p-2 con">
                <h1>{movie.release_date}</h1>
                <div className="">
                  <div className="flex space-x-3 mt-2">
                    <BsPlayCircleFill className="text-[26px] border p-[5px] rounded-[50%]  hover:scale-150 hover:bg-black" />
                    <BsPlusLg
                      className="text-[26px] border p-[5px] rounded-[50%]  hover:scale-150  hover:bg-black"
                      onClick={() => postCart(movie)}
                    />

                    <BiLike className="text-[26px] border p-[5px] rounded-[50%]  hover:scale-150 hover:bg-black" />
                    <AiOutlineDownSquare
                      onClick={() => {
                        navigate(`/browse/${movie.id}`);
                      }}
                      className="text-[26px] border p-[5px] rounded-[50%]  hover:scale-150 hover:bg-black"
                    />
                  </div>
                  <div className="flex justify-end items-end mt-16 gap-2">
                    <h1 className="mb-9 mr-5">Rating-{movie.vote_average}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default DataRow;
