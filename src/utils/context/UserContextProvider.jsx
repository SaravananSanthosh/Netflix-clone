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
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
