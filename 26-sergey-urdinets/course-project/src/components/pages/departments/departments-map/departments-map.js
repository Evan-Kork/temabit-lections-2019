import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SimpleMap from './simple-map/simple-map';

function DepartmentsMap(props) {
  let history = useHistory();

  useEffect(() => {
    document.title = 'Карта поштомаркетів Justin | Justin';
  }, []);

  return (
    <div className='page container-fluid m-0'>
      <div className='row justify-content-center m-0'>
        <div className='col col-xl-7 text-center'>
          <p className='h3 mt-5'>Карта поштомаркетів (відділень)</p>
          <p className=''>Ми там, де Вам зручно!</p>
          <div className='form-group d-flex justify-content-end'>
            <button
              onClick={() => history.push('/departments-list')}
              className='btn-primary ml-3 ml-sm-0'
            >
              Список <span className='d-none d-sm-inline'>відділень</span>
            </button>
          </div>
        </div>
        <div className='w-100'></div>
        <SimpleMap data={props.data} />
        <div className='w-100 mb-5'></div>
      </div>
    </div>
  );
}

export default DepartmentsMap;
