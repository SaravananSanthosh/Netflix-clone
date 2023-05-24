import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import SearchBar from "../components/SearchBar";
import { useUserContext } from "../utils/hooks/userContext";
import SearchSuggestionCard from "./SearchSuggestionCard";
import { getAllMovies } from "../lib/axios/api-functions/movies";
const Singleimage = () => {
  const { searchh, isPlay, link } = useUserContext();
  const [movies, setMovies] = useState([]);
  const [play, setPlay] = useState([]);
  useEffect(() => {
    const response = async () => {
      const { data } = await getAllMovies();
      setMovies([data[Math.floor(Math.random() * data.length - 1)]]);
    };
    // response();
    setInterval(response, 7000);
  }, []);

  return (
    <div>
      {searchh.length > 0 ? (
        <SearchBar />
      ) : isPlay ? (
        movies?.map((movie, index) => (
          <SearchSuggestionCard
            movie={movie}
            key={index}
            play={play}
            setPlay={setPlay}
          />
        ))
      ) : (
        <YouTube
          videoId={`${link}`}
          opts={{
            width: 1400,
            height: 500,
            playerVars: { autoplay: 1, controls: 0 },
          }}
        />
      )}
    </div>
  );
};
export default Singleimage;
