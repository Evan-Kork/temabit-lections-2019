import React, { ReactElement, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import SearchClosestInput from './search-input/search-input';
import InfiniteTable from './infinite-table/infinite-table';
import SearchCheckbox from './search-checkbox/search-checkbox';
import { useTitle } from 'react-use';
import { Department } from '../../../../interfaces/interfaces';

interface Props {
  data: Department[];
}

export default function DepartmentsList({ data }: Props): ReactElement {
  const history = useHistory();
  useTitle('Список відділень Justin | Justin');
  const onClick = useCallback(() => history.push('/departments-map'), []);

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
            <button onClick={onClick} className='btn-primary ml-3 ml-sm-0'>
              Карта <span className='d-none d-sm-inline'>відділень</span>
            </button>
          </div>
        </div>
        <div className='w-100'></div>
        <InfiniteTable data={data} paginationSize={20} />
      </div>
    </div>
  );
}
