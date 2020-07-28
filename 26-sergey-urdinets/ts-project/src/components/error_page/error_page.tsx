import React, { ReactElement } from 'react';

interface Props {
  title: string;
  message: string;
  callback: () => void;
}

export default function ErrorPage({
  title = 'Error',
  message = 'Unknown error, pls try again',
  callback,
}: Props): ReactElement {
  return (
    <div className='d-flex align-items-center flex-column bg-white'>
      <p className='h2 mt-5'>{title}</p>
      <p className='h5 m-2'>{message}</p>
      <button className='m-5 btn-primary' onClick={callback}>
        Спробувати ще раз
      </button>
    </div>
  );
}
