const setBtnDisplayProp = ({
  currentPage,
  page,
  step,
}: {
  [key: string]: number;
}) => {
  if (currentPage && page) {
    return page - step > currentPage || page + step < currentPage
      ? 'none'
      : 'block';
  }
};

export default setBtnDisplayProp;
