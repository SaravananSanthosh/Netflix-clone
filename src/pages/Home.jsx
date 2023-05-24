import DataRow from "../container/MoviesRow";
import Banner from "../components/Banner";
import { useUserContext } from "../utils/hooks/userContext";
const Browser = () => {
  const { trendingData, topratedData, popularData, upcomingData } =
    useUserContext();
  return (
    <div>
      <Banner />
      <DataRow title="TRENDING NOW" fetchUrl={trendingData} isLargeRow />
      <DataRow title="TOP RATED" fetchUrl={topratedData} isLargeRow />
      <DataRow title="POPULAR" fetchUrl={popularData} isLargeRow />
      <DataRow title="UPCOMING" fetchUrl={upcomingData} isLargeRow />
    </div>
  );
};

export default Browser;
