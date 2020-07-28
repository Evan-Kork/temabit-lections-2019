import React, { ReactElement } from 'react';
import InfoDepartments from './info-departments/info-departments';
import InfoServices from './info-services/info-services';
import { useTitle } from 'react-use';

export default function Info(): ReactElement {
  useTitle('Довідкова інформація | Justin');

  return (
    <div className='page container-fluid p-4'>
      <InfoDepartments />
      <div className='w-100'></div>
      <InfoServices />
    </div>
  );
}
