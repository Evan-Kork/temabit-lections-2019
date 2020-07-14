import React, { useState, useEffect, ReactElement } from 'react';
import Paragraph from './departments-paragraph';
import {
  ResponseDepartmentsTypes,
  DepartmentTypes,
} from '../../../../interfaces/interfaces';
import { plainToClass } from 'class-transformer';
import { validateLog } from '../../../funcs';

function getData(
  setState: React.Dispatch<React.SetStateAction<DepartmentTypes[]>>
) {
  fetch('http://localhost:3000/openapi.justin.ua/branch_types')
    .then((response) => response.json())
    .then((result) => {
      let data = plainToClass(ResponseDepartmentsTypes, result);
      validateLog(data);
      if (data.status) {
        setState(data.result);
      }
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
