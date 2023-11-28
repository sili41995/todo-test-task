interface IFuncProps {
  pageNumbers: number[];
  currentPage: number;
  pageQuantity: number;
  step: number;
}

const getPaginationBarSettings = ({
  pageNumbers,
  currentPage,
  pageQuantity,
  step,
}: IFuncProps) => {
  const firstPage = pageNumbers[0];
  const lastPage = pageNumbers[pageNumbers.length - 1];
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pageNumbers.length;
  const isBackNavBtnDisable = isFirstPage || currentPage > pageQuantity;
  const isNextNavBtnDisable = isLastPage || currentPage > pageQuantity;
  const isShowPrevTemplateBtn =
    currentPage - step - 1 > 1 && currentPage <= pageQuantity;
  const isShowNextTemplateBtn =
    currentPage + step + 1 < pageNumbers.length && currentPage <= pageQuantity;
  const isShowFirstPageBtn =
    currentPage - step > 1 && currentPage <= pageQuantity;
  const isShowLastPageBtn =
    currentPage + step < pageNumbers.length && currentPage <= pageQuantity;

  return {
    firstPage,
    lastPage,
    isBackNavBtnDisable,
    isNextNavBtnDisable,
    isShowNextTemplateBtn,
    isShowLastPageBtn,
    isShowFirstPageBtn,
    isShowPrevTemplateBtn,
  };
};

export default getPaginationBarSettings;
