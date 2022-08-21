import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Paginate from 'react-responsive-pagination';
import ScrollToTop from '../../utils/scrollToTop/ScrollToTop';
import './pagination.css';

const Pagination = ({ setPaginatedItems, pageRef }) => {
  // redux hook
  const { covidStat } = useSelector((state) => state.covidStat);

  // local states
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const statePerPage = 12;
    const PageIndex = (currentPage - 1) * statePerPage;
    const sliced = covidStat.states.slice(PageIndex, PageIndex + statePerPage);
    setPaginatedItems(sliced);
  }, [covidStat, currentPage, setPaginatedItems]);

  const handleChange = (page) => {
    setCurrentPage(page);
    ScrollToTop(pageRef);
  };

  const totalPages = 4;
  return (
    <Paginate
      current={currentPage}
      total={totalPages}
      onPageChange={(page) => handleChange(page)}
    />
  );
};

export default Pagination;
