const setBtnDisplayProp = (currentPage: number, page: number) => {
  if (currentPage && page) {
    return page - 2 > currentPage || page + 2 < currentPage ? 'none' : 'block';
  }
};

export default setBtnDisplayProp;
