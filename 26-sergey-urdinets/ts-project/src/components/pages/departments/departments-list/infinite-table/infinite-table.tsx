import React, { useState, useEffect, ReactElement } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect, ConnectedProps } from 'react-redux';
import Table from './table/table';
import { GlobalState } from '../../../../../reducers/index';
import {
  Department,
  ClosestDepartments,
} from '../../../../../interfaces/interfaces';
import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';

const mapState = (state: GlobalState) => ({
  value: state.common.searchDepartment,
  isChecked: state.common.isOnlyClosest,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  data: Department[];
}

function getDepartment(
  value: string,
  data: Department[],
  bool: boolean,
  setTableState: React.Dispatch<React.SetStateAction<Department[]>>,
  setSearchResults: React.Dispatch<React.SetStateAction<Department[]>>
): void {
  if (value == '') {
    setTableState(data.slice(0, 20));
  } else if (bool) {
    //value !==""
    fetch(`http://localhost:3000/openapi.justin.ua/branches_locator/${value}`)
      .then((response) => response.json())
      .then((results) => {
        if (results.status) {
          let data = plainToClass(ClosestDepartments, results);
          validateLog(data);
          setSearchResults(data.result);
          setTableState(data.result.slice(0, 20));
        } else {
          setTableState([]);
        }
      })
      .catch((e) => console.log(e));
  } else if (Number.isInteger(+value)) {
    //value !=="" && value == number && value != 0
    let arr = data.filter((item) => ~item.number.search(value));
    setSearchResults(arr);
    setTableState(arr.slice(0, 20));
  } else {
    //value !=="" && value == string || 0
    let arr = data.filter(
      (item) => ~item.adress.search(new RegExp(value, 'i'))
    );
    setSearchResults(arr);
    setTableState(arr.slice(0, 20));
  }
}

function validateLog<T>(obj: T): void {
  validateOrReject(obj, { skipMissingProperties: true }).catch((errors) => {
    console.log('Promise rejected (validation failed). Errors: ', errors);
  });
}

function fetchMoreData(
  search: string,
  tableState: Department[],
  data: Department[],
  searchResults: Department[],
  setTableState: React.Dispatch<React.SetStateAction<Department[]>>
) {
  if (search == '') {
    setTableState(
      tableState.concat(data.slice(tableState.length, tableState.length + 20))
    );
  } else {
    setTableState(
      tableState.concat(
        searchResults.slice(tableState.length, tableState.length + 20)
      )
    );
  }
}

function InfiniteTable(props: Props): ReactElement {
  const [tableState, setTableState] = useState([] as Department[]);
  const [searchResults, setSearchResults] = useState([] as Department[]);

  useEffect(() => {
    getDepartment(
      props.value,
      props.data,
      props.isChecked,
      setTableState,
      setSearchResults
    );
  }, [props]);

  return (
    <>
      {tableState.length ? (
        <div id='scrollableDiv' className='scrollable-div col col-xl-6 mb-5'>
          <InfiniteScroll
            dataLength={tableState.length}
            next={() =>
              fetchMoreData(
                props.value,
                tableState,
                props.data,
                searchResults,
                setTableState
              )
            }
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

export default connector(InfiniteTable);
