import axios from "axios";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import { BsPlay } from "react-icons/bs";

const Descripton = () => {
  const [back, setBack] = useState({});
  const [play, setPlay] = useState(false);
  const params = useParams();
  const base_url = "https://image.tmdb.org/t/p/original";
  const recentadd = async (data) => {
    const value = await axios.post(`http://localhost:3006/recent`, data);
  };
  useEffect(() => {
    const backdata = async () => {
      const { data } = await axios.get(
        `http://localhost:3006/movies/${params.id}`
      );
      setBack(data);
    };
    backdata();
  }, [params?.id]);

  return (
    <>
      {play ? (
        <div>
          <YouTube
            containerClassName={""}
            videoId={`${back.video_id}`}
            opts={{
              width: 1400,
              height: 500,
              playerVars: { autoplay: 1, controls: 0 },
            }}
          />
        </div>
      ) : (
        <div>
          <img
            src={`${base_url}${back?.backdrop_path}`}
            alt=" please wait.....comming soon...."
            className="h-[80vh] w-full"
          />
          <div className="absolute left-5 top-52 text-white font-mono text-lg">
            <h1 className="pl-1">{back.title}</h1>
            <button
              className="  flex bg-[#00FF00] text-black pt-2 pr-5 pb-2 gap-1 rounded-sm hover:scale-110"
              onClick={() => {
                setPlay(!play);
                recentadd(back);
              }}
            >
              <BsPlay className=" w-10 h-8" /> play
            </button>
            <h1>{back.overview}</h1>
          </div>
          <div className="pl-5 absolute bg-black w-full h-fit text-white ">
            <h1>About-{back.title ?? back.name}</h1>
            <h1>Popularity:{back.popularity}</h1>
            <h1>Release Date:{back.release_date}</h1>
            <h1>Rating of the movie:{back.vote_average}</h1>
            <h1>Vote count{back.vote_count}</h1>
          </div>
        </div>
      )}
    </>
  );
};
export default Descripton;
