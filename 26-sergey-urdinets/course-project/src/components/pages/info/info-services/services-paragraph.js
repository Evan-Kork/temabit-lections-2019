import React from 'react';

function Paragraph(props) {
  let x = Object.keys(props.value)[0];

  return (
    <>
      <div className='col col-md-10 col-xl-8'>
        <b>{props.value[x].name_ua}</b>
        <p>{props.value[x].description_ua}</p>
      </div>
      <div className='w-100 d-md-none'></div>
    </>
  );
}

export default Paragraph;
