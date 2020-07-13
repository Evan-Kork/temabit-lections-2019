import React, { ReactElement } from 'react';

type Props = {
  title: string;
  text: string;
};

export default function ParagraphDepartments(props: Props): ReactElement<Props> {
  return (
    <>
      <div className='col col-md-10 col-xl-8'>
        <b>{props.title}</b>
        <p>{props.text}</p>
      </div>
      <div className='w-100'></div>
    </>
  );
}