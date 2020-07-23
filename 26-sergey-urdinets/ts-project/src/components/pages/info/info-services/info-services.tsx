import React, { useState, useEffect, ReactElement } from 'react';
import Paragraph from './services-paragraph';
import { ServicesResponse, Bank } from '../../../../interfaces/interfaces';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

function getData(setState: React.Dispatch<React.SetStateAction<Bank[]>>) {
  fetch('http://localhost:3000/openapi.justin.ua/services')
    .then((response) => response.json())
    .then(async (result) => {
      if (result.status) {
      const data = plainToClass(ServicesResponse, result);
      const errors = await validate(data);
      if (errors.length > 0) {
        console.log('validation failed, some data is lost. errors: ', errors);
        let invalidData = new Set();
        errors[0].children.map((item) => {
          invalidData.add(item.property);
        });
        const validData = data.result.filter(
          (index) => !invalidData.has(index)
        );
        setState(validData);
      } else {
        setState(data.result);
      }
    }})
    .catch((e) => console.log(e));
}

export default function InfoServices(): ReactElement {
  const [state, setState] = useState([] as Bank[]);

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
