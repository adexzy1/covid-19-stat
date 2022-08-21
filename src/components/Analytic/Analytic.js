import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import style from './analytic.module.css';
import { useSelector } from 'react-redux';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const Analytic = () => {
  const { covidStat } = useSelector((state) => state.covidStat);

  const data = {
    labels: ['Death', 'Discharged', 'Active Cases', 'Total Confirmed Cases'],

    datasets: [
      {
        label: 'Covid-19 Data',
        data: [
          covidStat.death,
          covidStat.discharged,
          covidStat.totalActiveCases,
          covidStat.totalConfirmedCases,
        ],
        backgroundColor: [
          'rgb(204, 0, 0)',
          'rgb(76,205,189)',
          'rgba(255, 159, 64, 1)',
          'rgb(54,159,255)',
        ],

        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    borderRadius: 5,
  };
  return (
    <div className={style.container}>
      <h1>Case Analytics</h1>
      <div className={style.chart_wrapper}>
        <Bar data={data} options={options} />;
      </div>
    </div>
  );
};

export default Analytic;
