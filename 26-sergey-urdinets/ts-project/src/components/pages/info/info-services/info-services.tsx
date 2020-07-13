import React, { useState, useEffect, ReactElement } from 'react';
import Paragraph from './services-paragraph';
import {ServicesResponse, Bank} from '../../../../interfaces/interfaces';
import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';

function getData(setState: React.Dispatch<React.SetStateAction<Bank[]>>) {  // надо экспортировать интерфейс ответа вместо any
  fetch('http://localhost:3000/openapi.justin.ua/services')
  .then(response => response.json())
  .then(result => {
    let data = plainToClass(ServicesResponse, result);
    validateLog(data);
    if (data.status) {
      setState(data.result);
    }
  })
  .catch(e => console.log(e));
}

function validateLog<T>(obj: T): void {
  validateOrReject(obj, {  skipMissingProperties : true  }).catch((errors) => {
    console.log('Promise rejected (validation failed). Errors: ', errors);
  });
}


function InfoServices() : ReactElement {
  const [state, setState] = useState([] as Bank[]);  // надо экспортировать интерфейс ответа

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
