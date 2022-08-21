import { useSelector } from 'react-redux';
import style from './loading.module.css';

const Loading = () => {
  const { loading } = useSelector((state) => state.covidStat);
  return (
    <div className={`${!loading && style.hide_loading} ${style.container}`}>
      loading...
    </div>
  );
};

export default Loading;
