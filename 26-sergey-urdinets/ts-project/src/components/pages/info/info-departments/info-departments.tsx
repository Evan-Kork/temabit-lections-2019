import React, { useState, useEffect, ReactElement } from 'react';
import Paragraph from './departments-paragraph';
import {
  ResponseDepartmentsTypes,
  DepartmentTypes,
} from '../../../../interfaces/interfaces';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

function getData(
  setState: React.Dispatch<React.SetStateAction<DepartmentTypes[]>>
) {
  fetch('http://localhost:3000/openapi.justin.ua/branch_types')
    .then((response) => response.json())
    .then((result) => {
      const data = plainToClass(ResponseDepartmentsTypes, result);
      validate(data).then((errors) => {
        if (errors.length > 0) {
          console.log('validation failed. errors: ', errors);
        } else {
          setState(data.result);
        }
      });
    })
    .catch((e) => console.log(e));
}

export default function InfoDepartments(): ReactElement {
  const [state, setState] = useState([] as DepartmentTypes[]);

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
