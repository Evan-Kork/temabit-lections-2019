import React, { ReactElement } from 'react';
import {Bank} from '../../../../interfaces/interfaces';

interface Props{
  value: Bank
}

function Paragraph(props: Props) : ReactElement<Props> {
  let x = Object.keys(props.value)[0];

  return (
    <>
      <div className='col col-md-10 col-xl-8'>
        <b>{(props.value as any)[x].name_ua}</b>
        <p>{(props.value as any)[x].description_ua}</p>
      </div>
      <div className='w-100 d-md-none'></div>
    </>
  );
}

export default Paragraph;
