import React, { useState, useEffect } from 'react';
import Paragraph from './services-paragraph';

function getData(setState) {
  fetch('http://localhost:3000/openapi.justin.ua/services')
  .then(response => response.json())
  .then(result => {
    if (result.status) {
      setState(result.result);
    }
  })
  .catch(e => console.log(e));
}

function InfoServices() {
  const [state, setState] = useState([]);

  useEffect(() => {
    getData(setState);
  }, []);

  return state.length ? (
    <>
      <p className='h3 text-center m-4'>Інформація про сервіси</p>
      <div className='row justify-content-center'>
        {state.map((item, index) => {
          return <Paragraph key={index} value={item} />;
        })}
      </div>
    </>
  ) : null;
}


export default InfoServices;
