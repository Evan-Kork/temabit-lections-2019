import React, { useState, useEffect } from 'react';
import Paragraph from './departments-paragraph';

function getData(setState) {
  fetch('http://localhost:3000/openapi.justin.ua/branch_types')
  .then(response => response.json())
  .then(result => {
    if (result.status) {
      setState(result.result);
    }
  })
  .catch(e => console.log(e));
}

function InfoDepartments() {
  const [state, setState] = useState([]);

  useEffect(() => {
    getData(setState);
  }, []);

  return state.length ? (
    <>
      <p className='h3 text-center mb-4'>Інформація про відділення</p>
      <div className='row justify-content-center'>
        {state.map((item, index) => {
          return (
            <Paragraph
              key={index}
              title={item.short_name}
              text={item.description}
            />
          );
        })}
      </div>
    </>
  ) : null;
}

export default InfoDepartments;
