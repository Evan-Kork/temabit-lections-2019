import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SearchClosestInput from './search-input/search-input';
import InfiniteTable from './infinite-table/infinite-table';
import SearchCheckbox from './search-checkbox/search-checkbox';

function DepartmentsList(props) {
  let history = useHistory();

  useEffect(() => {
    document.title = 'Список відділень Justin | Justin';
  }, []);

  return (
    <div className='page departments-list container-fluid'>
      <div className='row justify-content-center m-0'>
        <div className='col col-xl-7 text-center'>
          <p className='h3 m-5'>Наші відділення (поштомаркети)</p>
          <div className='form-group d-flex justify-content-between m-0'>
            <div className='d-flex flex-column'>
              <SearchClosestInput />
              <SearchCheckbox />
            </div>
            <button
              onClick={() => history.push('/departments-map')}
              className='btn-primary ml-3 ml-sm-0'
            >
              Карта <span className='d-none d-sm-inline'>відділень</span>
            </button>
          </div>
        </div>
        <div className='w-100'></div>
        <InfiniteTable data={props.data}/>
      </div>
    </div>
  );
}

export default DepartmentsList;