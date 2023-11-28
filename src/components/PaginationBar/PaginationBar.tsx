import { IProps } from './PaginationBar.types';
import { getPageNumbers } from 'utils';
import { useSearchParams } from 'react-router-dom';
import { SearchParamsKeys } from 'constants/searchParamsKeys';
import { Button, Item, List, TemplateItem } from './PaginationBar.styled';

const { PAGE_SP_KEY } = SearchParamsKeys;

const PaginationBar = ({ todosQuantity, quantity, step = 1 }: IProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageQuantity = Math.round(todosQuantity / quantity);
  const pageNumbers = getPageNumbers(pageQuantity);
  const currentPage = Number(searchParams.get(PAGE_SP_KEY) ?? 1);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pageNumbers.length;
  const isBackNavBtnDisable = isFirstPage || currentPage > pageQuantity;
  const isNextNavBtnDisable = isLastPage || currentPage > pageQuantity;
  const isShowPrevTemplateBtn =
    currentPage - step > 1 && currentPage <= pageQuantity;
  const isShowNextTemplateBtn =
    currentPage + step < pageNumbers.length && currentPage <= pageQuantity;

  const onPageBtnClick = (number: number): void => {
    searchParams.set(PAGE_SP_KEY, String(number));
    setSearchParams(searchParams);
  };

  return (
    <List>
      <Item>
        <Button
          disabled={isBackNavBtnDisable}
          onClick={() => {
            onPageBtnClick(currentPage - 1);
          }}
        >
          {'<<GoBack'}
        </Button>
      </Item>
      {isShowPrevTemplateBtn && (
        <TemplateItem>
          <Button disabled>...</Button>
        </TemplateItem>
      )}
      {pageNumbers.map((number) => (
        <Item key={number} page={number} currentPage={currentPage} step={step}>
          <Button
            className={number === currentPage ? 'active' : ''}
            onClick={() => {
              onPageBtnClick(number);
            }}
          >
            {number}
          </Button>
        </Item>
      ))}
      {isShowNextTemplateBtn && (
        <TemplateItem>
          <Button disabled>...</Button>
        </TemplateItem>
      )}
      <Item>
        <Button
          disabled={isNextNavBtnDisable}
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
