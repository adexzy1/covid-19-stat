const ScrollToTop = (PageRef) => {
  window.scrollTo({
    top: PageRef.offsetTop,
    behavior: 'smooth',
  });
};

export default ScrollToTop;
