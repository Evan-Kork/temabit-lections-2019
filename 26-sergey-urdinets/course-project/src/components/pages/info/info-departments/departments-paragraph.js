import React from 'react';

function ParagraphDepartments(props) {
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

export default ParagraphDepartments;
