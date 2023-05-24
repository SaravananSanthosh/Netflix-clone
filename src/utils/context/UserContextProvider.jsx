import { useState, useEffect, createContext } from "react";
import axios from "axios";
import apiUrls from "../../api/apiUrls";

export const userContext = createContext(null);
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [image, setImage] = useState([]);
  const [searchh, setSearchh] = useState("");
  const [link, setLink] = useState("");
  const [des, setDes] = useState(null);

  const [popularData, setPopularData] = useState([]);
  const [trendingData, setTrendingData] = useState([]);
  const [upcomingData, setUpcomingData] = useState([]);
  const [topratedData, setTopratedData] = useState([]);

  const onlineData = async () => {
    const { data } = await axios.get("http://localhost:3006/popular");
    setPopularData(data);
    const res = await axios.get("http://localhost:3006/trending");
    setTrendingData(res.data);
    const re = await axios.get("http://localhost:3006/upcoming");
    setUpcomingData(re.data);
    const rese = await axios.get("http://localhost:3006/toprated");
    setTopratedData(rese.data);
  };
  useEffect(() => {
    onlineData();
  }, []);

  useEffect(() => {
    const backEnd = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${apiUrls.fetchTrending}`
      );
      setImage(data.results);
    };
    backEnd();
  }, []);
  const logout = () => {
    setUser(null);
  };
  return (
    <userContext.Provider
      value={{
        login: setUser,
        user,
        logout,
        image,
        searching: setSearchh,
        searchh,
        isPlay: setLink,
        link,
        popularData,
        trendingData,
        topratedData,
        upcomingData,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
