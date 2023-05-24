import { memo } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";
import { useUserContext } from "../utils/hooks/userContext";
const base_url = "https://image.tmdb.org/t/p/original";
const SearchSuggestionCard = ({ movie, setPlay }) => {
  const { isPlay } = useUserContext();
  return (
    <div>
      <img
        className="h-[60vh] w-full relative"
        src={`${base_url}${movie?.backdrop_path}`}
      />
      <h1 className="absolute top-56 left-10 text-white text-4xl font-extrabold">
        {movie?.title}
      </h1>
      <button className="flex bg-[#00FF00] text-black p-2 gap-1 rounded-sm absolute top-72 left-10 hover:scale-110">
        <AiOutlinePlayCircle
          className="mt-[4px]"
          onClick={() => {
            setPlay(!isPlay);
            isPlay(movie?.video_id);
          }}
        />
        PLAY
      </button>
      <button className="flex  bg-[#FF0000] text-white p-2 gap-1 rounded-sm absolute top-72 left-40 hover:scale-110">
        <MdOutlineAdd className="mt-[4px]" />
        ADD LIST
      </button>
    </div>
  );
};

export default memo(SearchSuggestionCard);
