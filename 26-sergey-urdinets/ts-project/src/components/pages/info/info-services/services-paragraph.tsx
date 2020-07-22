import React, { ReactElement } from 'react';
import { Bank } from '../../../../interfaces/interfaces';

interface Props {
  value: Bank;
}

let bankCounter = 0;

export default function Paragraph({ value }: Props): ReactElement<Props> {
  const index = Object.keys(value)[bankCounter++];
  return (
    <>
      <div className='col col-md-10 col-xl-8'>
        {}
        <b>{(value as any)[index]?.name_ua}</b>
        <p>{(value as any)[index]?.description_ua}</p>
      </div>
      <div className='w-100 d-md-none'></div>
    </>
  );
}
