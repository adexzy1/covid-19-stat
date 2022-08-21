import style from './statCard.module.css';

const StatCard = ({
  death,
  casesOnAdmission,
  state,
  discharged,
  confirmedCases,
}) => {
  return (
    <div className={style.container}>
      <h5>{state}</h5>
      <div>
        <p>
          Confimed Cases : <span>{confirmedCases}</span>
        </p>
        <p>
          Discharged : <span>{discharged}</span>
        </p>
      </div>

      <div>
        <p>
          Cases On Admisison : <span>{casesOnAdmission}</span>
        </p>
        <p>
          Death : <span>{death}</span>
        </p>
      </div>
    </div>
  );
};

export default StatCard;
