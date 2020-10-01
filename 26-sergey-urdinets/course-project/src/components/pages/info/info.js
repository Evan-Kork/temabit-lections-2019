import React, { useEffect } from 'react';
import InfoDepartments from './info-departments/info-departments';
import InfoServices from './info-services/info-services';

function Info() {
  useEffect(() => {
    document.title = 'Довідкова інформація | Justin';
  }, []);

  return (
    <div className='page container-fluid p-4'>
      <InfoDepartments />
      <div className='w-100'></div>
      <InfoServices />
    </div>
  );
}

export default Info;
