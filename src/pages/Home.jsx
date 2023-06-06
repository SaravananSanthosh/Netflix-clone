import { useEffect, useState } from "react";
import axios from "axios";
import DataRow from "../container/MoviesRow";
import Banner from "../components/Banner";

const Browser = () => {
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

  return (
    <div>
      <Banner />
      <DataRow
        title="trending"
        fetchUrl={trendingData}
        setData={setTrendingData}
        isLargeRow
      />
      <DataRow
        title="topRated"
        fetchUrl={topratedData}
        setData={setTopratedData}
        isLargeRow
      />
      <DataRow
        title="popular"
        fetchUrl={popularData}
        setData={setPopularData}
        isLargeRow
      />
      <DataRow
        title="upComing"
        fetchUrl={upcomingData}
        setData={setUpcomingData}
        isLargeRow
      />
    </div>
  );
};

export default Browser;
