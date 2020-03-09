import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';
import Table from './table/table';

function InfiniteTable(props) {
  const [tableState, setTableState] = useState([]);
  const [fullDepartments, setFullDepartments] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getDepartment(props.value);
  }, [props]);

  function getDepartment(value) {
    if (value == '' && fullDepartments.length) {
      setTableState(fullDepartments.slice(0, 20));
    } else if (value == '') {
      fetch('http://localhost:3000/openapi.justin.ua/branches/0')
        .then(response => response.json())
        .then(results => {
          if (results.status) {
            setFullDepartments(results.result);
            setTableState(results.result.slice(0, 20));
          } else setTableState([]);
        })
        .catch(e => console.log(e));
    } else if (props.isChecked) { //value !==""
      fetch(`http://localhost:3000/openapi.justin.ua/branches_locator/${value}`)
        .then(response => response.json())
        .then(results => {
          if (results.status) {
            setSearchResults(results.result);
            setTableState(results.result.slice(0, 20));
          } else {
            setTableState([]);
          }
        })
        .catch(e => console.log(e));
    } else if (Number.isInteger(+value)) {  //value !=="" && value == number && value != 0
      let arr = fullDepartments.filter(item => ~item.number.search(value));
      setSearchResults(arr);
      setTableState(arr.slice(0, 20));
    } else {  //value !=="" && value == string || 0
      let arr = fullDepartments.filter(
        item => ~item.adress.search(new RegExp(value, 'i'))
      );
      setSearchResults(arr);
      setTableState(arr.slice(0, 20));
    }
  }

  function fetchMoreData(string) {
    if (string == '') {
      setTableState(
        tableState.concat(
          fullDepartments.slice(tableState.length, tableState.length + 20)
        )
      );
    } else {
      setTableState(
        tableState.concat(
          searchResults.slice(tableState.length, tableState.length + 20)
        )
      );
    }
  }

  return (
    <>
      {tableState.length ? (
        <div id='scrollableDiv' className='scrollable-div col col-xl-6 mb-5'>
          <InfiniteScroll
            dataLength={tableState.length}
            next={() => fetchMoreData(props.value)}
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

function mapStateToProps(state) {
  return {
    value: state.common.searchDepartment,
    isChecked: state.common.isOnlyClosest
  };
}

export default connect(mapStateToProps)(InfiniteTable);
