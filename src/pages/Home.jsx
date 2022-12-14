import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Analytic from '../components/Analytic/Analytic';
import Header from '../components/header/Header';
import Loading from '../components/loading/Loading';
import StateStats from '../components/stateStats/StateStats';
import { fetchCovidStat } from '../Redux/slice/covidStatSlice';

const Home = () => {
  const { loading } = useSelector((state) => state.covidStat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovidStat());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Loading />
      <>
        {!loading && (
          <>
            <Analytic />
            <StateStats />
          </>
        )}
      </>
    </div>
  );
};

export default Home;
