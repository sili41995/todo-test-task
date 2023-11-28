import { IProps } from './PaginationBar.types';
import { useAppSelector } from 'hooks/redux';
import { selectTodos } from 'redux/todos/selectors';
import { getPageNumbers } from 'utils';
import { useSearchParams } from 'react-router-dom';
import { SearchParamsKeys } from 'constants/searchParamsKeys';
import { Button, TemplateButton, Item, List } from './PaginationBar.styled';

const { PAGE_SP_KEY } = SearchParamsKeys;

const PaginationBar = ({ quantity }: IProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const todosQuantity = useAppSelector(selectTodos).length;
  const pageQuantity = Math.round(todosQuantity / quantity);
  const pageNumbers = getPageNumbers(pageQuantity);
  const currentPage = Number(searchParams.get(PAGE_SP_KEY) ?? 1);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pageNumbers.length;

  const onPageBtnClick = (number: number): void => {
    searchParams.set(PAGE_SP_KEY, String(number));
    setSearchParams(searchParams);
  };

  return (
    <List>
      <Item>
        <Button
          disabled={isFirstPage}
          onClick={() => {
            onPageBtnClick(currentPage - 1);
          }}
        >
          {'<<GoBack'}
        </Button>
      </Item>
      {currentPage - 2 > 1 && (
        <Item>
          <TemplateButton>...</TemplateButton>
        </Item>
      )}
      {pageNumbers.map((number) => (
        <Item key={number}>
          <Button
            onClick={() => {
              onPageBtnClick(number);
            }}
            page={number}
            currentPage={currentPage}
          >
            {number}
          </Button>
        </Item>
      ))}
      {currentPage + 2 < pageNumbers.length && (
        <Item>
          <TemplateButton>...</TemplateButton>
        </Item>
      )}
      <Item>
        <Button
          disabled={isLastPage}
          onClick={() => {
            onPageBtnClick(currentPage + 1);
          }}
        >
          {'Next>>'}
        </Button>
      </Item>
    </List>
  );
};

export default PaginationBar;
