import React, { useState, useRef } from 'react';
import Pagination from '../pagination/Pagination';
import StatCard from '../StatCard/StatCard';
import style from './stateStats.module.css';

const StateStats = () => {
  const [paginatedItems, setPaginatedItems] = useState([]);
  const pageRef = useRef(null);

  return (
    <div className={style.container} ref={pageRef}>
      <div className={style.head_wrapper}>
        <h2>Covid Stat by state</h2>
      </div>

      <div className={style.stat_card_wrapper}>
        {paginatedItems.map((data) => (
          <StatCard
            key={data._id}
            state={data.state}
            discharged={data.discharged}
            death={data.death}
            confirmedCases={data.confirmedCases}
            casesOnAdmission={data.casesOnAdmission}
          />
        ))}
      </div>

      <Pagination
        setPaginatedItems={setPaginatedItems}
        pageRef={pageRef.current}
      />
    </div>
  );
};

export default StateStats;
