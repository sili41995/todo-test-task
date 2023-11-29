import { FC, ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { BsSortAlphaDown } from 'react-icons/bs';
import { BsSortAlphaDownAlt } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';
import { FilterContainer } from './Filter.styled';
import { makeBlur, updateSortSearchParams } from 'utils';
import IconButton from 'components/IconButton';
import Input from 'components/Input';
import { FormType } from 'constants/formType';
import { SearchParamsKeys } from 'constants/searchParamsKeys';
import { SortTypes } from 'constants/sortTypes';
import { IconBtnType } from 'constants/iconBtnType';

const { FILTER_SP_KEY, SORT_SP_KEY, PAGE_SP_KEY } = SearchParamsKeys;
const { DESC_SORT_TYPE } = SortTypes;

const Filter: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get(FILTER_SP_KEY) ?? '';
  const [showFilter, setShowFilter] = useState<boolean>(() => Boolean(filter));
  const deskSortType = searchParams.get(SORT_SP_KEY) === DESC_SORT_TYPE;
  const sortBtnIcon = deskSortType ? (
    <BsSortAlphaDown />
  ) : (
    <BsSortAlphaDownAlt />
  );

  useEffect(() => {
    if (!showFilter) {
      searchParams.delete(FILTER_SP_KEY);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, showFilter]);

  const onSortBtnClick = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
    makeBlur(currentTarget);
    updateSortSearchParams(searchParams, setSearchParams, SORT_SP_KEY);
  };

  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    value
      ? searchParams.set(FILTER_SP_KEY, value)
      : searchParams.delete(FILTER_SP_KEY);
    searchParams.delete(PAGE_SP_KEY);
    setSearchParams(searchParams);
  };

  const onFilterBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    makeBlur(e.currentTarget);
    setShowFilter((showFilter) => !showFilter);
  };

  const onClearFilterBtnClick = () => {
    searchParams.delete(FILTER_SP_KEY);
    searchParams.delete(PAGE_SP_KEY);
    setSearchParams(searchParams);
  };

  return (
    <FilterContainer>
      {showFilter && (
        <Input
          type='text'
          value={filter}
          onChange={onFilterChange}
          inputType={FormType.filter}
          autoFocus
          inputWrap
          btnType={IconBtnType.clearFilter}
          action={onClearFilterBtnClick}
        >
          {filter && <IoMdClose />}
        </Input>
      )}
      <IconButton
        btnType={IconBtnType.filter}
        iconSize={28}
        width={44}
        onBtnClick={onFilterBtnClick}
      >
        {<FiFilter />}
      </IconButton>
      <IconButton
        btnType={IconBtnType.filter}
        iconSize={28}
        width={44}
        onBtnClick={onSortBtnClick}
      >
        {sortBtnIcon}
      </IconButton>
    </FilterContainer>
  );
};

export default Filter;
