import React, { useState, ReactElement, useCallback, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from 'react-redux';
import Table from './table/table';
import { RootState } from '../../../../../reducers/index';
import {
  ClosestDepartments,
  Department,
} from '../../../../../interfaces/interfaces';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { useDebounce } from 'react-use';
import { getInitialStateArr } from '../../../../constants'

const debounceTime: number = 500;
const regex = /[^A-Za-z0-9А-Яа-яІіЇї,.\s]/g;

interface Props {
  data: Department[];
  paginationSize?: number;
}

function validateSearch(value: string) {
  const validValue = value.replace(regex, '');
  const validRegex = new RegExp(validValue, 'i');
  return validRegex;
}

function getDepartment(
  searchValue: string,
  searchInData: Department[],
  isClosest: boolean,
  setTableState: React.Dispatch<React.SetStateAction<Department[]>>,
  setSearchResults: React.Dispatch<React.SetStateAction<Department[]>>,
  paginationSize: number
): void {
  if (searchValue == '') {
    setTableState(searchInData.slice(0, paginationSize));
  } else if (isClosest) {
    //searchValue !==""
    fetch(
      `http://localhost:3000/openapi.justin.ua/branches_locator/${searchValue}`
    )
      .then((response) => response.json())
      .then((results) => {
        if (results.status) {
          const data = plainToClass(ClosestDepartments, results);
          validate(data).then((errors) => {
            if (errors.length > 0) {
              console.log(
                'validation failed, some data is lost. errors: ',
                errors
              );
              let invalidData = new Set();
              errors[0].children.map((item) => {
                invalidData.add(item.property);
              });
              const validData = data.result.filter(
                (index) => !invalidData.has(index)
              );
              setSearchResults(validData);
            } else {
              setSearchResults(data.result);
            }
          });
        }
      })
      .catch((e) => {
        setTableState(getInitialStateArr<Department>());
        console.log(e);
      });
  } else if (Number.isInteger(+searchValue)) {
    //searchValue !=="" && searchValue == number && searchValue != 0
    const arr = searchInData.filter((item) => ~item.number.search(searchValue));
    setSearchResults(arr);
  } else {
    //searchValue !=="" && searchValue == string || 0
    const arr = searchInData.filter(
      (item) => ~item.adress.search(validateSearch(searchValue))
    );
    setSearchResults(arr);
  }
}

function fetchMoreData(
  search: string,
  tableState: Department[],
  data: Department[],
  searchResults: Department[],
  setTableState: React.Dispatch<React.SetStateAction<Department[]>>,
  paginationSize: number
) {
  if (search == '') {
    setTableState(
      tableState.concat(
        data.slice(tableState.length, tableState.length + paginationSize)
      )
    );
  } else {
    setTableState(
      tableState.concat(
        searchResults.slice(
          tableState.length,
          tableState.length + paginationSize
        )
      )
    );
  }
}

export default function InfiniteTable({
  data,
  paginationSize = 20,
}: Props): ReactElement {
  const [tableState, setTableState] = useState(getInitialStateArr<Department>());
  const [searchResults, setSearchResults] = useState(getInitialStateArr<Department>());
  const value = useSelector((state: RootState) => state.searchDepartment);
  const isChecked = useSelector((state: RootState) => state.isOnlyClosest);

  useEffect(() => {
    setTableState(searchResults.slice(0, paginationSize));
  }, [searchResults]);

  useDebounce(
    () => {
      getDepartment(
        value,
        data,
        isChecked,
        setTableState,
        setSearchResults,
        paginationSize
      );
    },
    debounceTime,
    [value, data, isChecked]
  );

  const next = useCallback(() => {
    fetchMoreData(
      value,
      tableState,
      data,
      searchResults,
      setTableState,
      paginationSize
    );
  }, [value, tableState, data]);

  return (
    <>
      {tableState.length ? (
        <div id='scrollableDiv' className='scrollable-div col col-xl-6 mb-5'>
          <InfiniteScroll
            dataLength={tableState.length}
            next={next}
            hasMore={true}
            loader={null}
            scrollableTarget='scrollableDiv'
          >
            <Table data={tableState} />
          </InfiniteScroll>
        </div>
      ) : (
        <p className='h6'>Відділення не знайдено</p>
      )}
    </>
  );
}
