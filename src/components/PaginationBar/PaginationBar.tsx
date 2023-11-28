import { IProps } from './PaginationBar.types';
import { useAppSelector } from 'hooks/redux';
import { selectTodos } from 'redux/todos/selectors';
import { getPageNumbers } from 'utils';
import { useSearchParams } from 'react-router-dom';
import { SearchParamsKeys } from 'constants/searchParamsKeys';

const { PAGE_SP_KEY } = SearchParamsKeys;

const PaginationBar = ({ quantity }: IProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const todosQuantity = useAppSelector(selectTodos).length;
  const pageQuantity = Math.round(todosQuantity / quantity);
  const pageNumbers = getPageNumbers(pageQuantity);
  const currentPage = searchParams.get(PAGE_SP_KEY) ?? 1;
  const isFirstPage = Number(currentPage) === 1;
  const isLastPage = Number(currentPage) === pageNumbers.length;

  const onPageBtnClick = (number: number): void => {
    searchParams.set(PAGE_SP_KEY, String(number));
    setSearchParams(searchParams);
  };

  return (
    <ul>
      <button
        disabled={isFirstPage}
        onClick={() => {
          onPageBtnClick(Number(currentPage) - 1);
        }}
      >
        {'<<GoBack'}
      </button>
      {pageNumbers.map((number) => (
        <button
          onClick={() => {
            onPageBtnClick(number);
          }}
          key={number}
        >
          {number}
        </button>
      ))}
      <button
        disabled={isLastPage}
        onClick={() => {
          onPageBtnClick(Number(currentPage) + 1);
        }}
      >
        {'Next>>'}
      </button>
    </ul>
  );
};

export default PaginationBar;
