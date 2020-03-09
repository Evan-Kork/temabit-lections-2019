import React, { useState, useEffect } from 'react';
import Paragraph from './services-paragraph';
import { connect } from 'react-redux';

function InfoServices() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/openapi.justin.ua/services')
      .then(response => response.json())
      .then(result => {
        if (result.status) {
          setState(result.result);
        }
      })
      .catch(e => console.log(e));
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

function mapStateToProps(state) {
  return {
    path: state.common.activePath
  };
}

export default connect(mapStateToProps)(InfoServices);
