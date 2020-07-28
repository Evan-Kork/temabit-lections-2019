import React, { useState, useEffect, ReactElement } from 'react';
import Paragraph from './departments-paragraph';
import {
  ResponseDepartmentsTypes,
  DepartmentTypes,
} from '../../../../interfaces/interfaces';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import ErrorPage from '../../../error_page/error_page';

function getData(
  setState: React.Dispatch<React.SetStateAction<DepartmentTypes[]>>,
  setError: React.Dispatch<React.SetStateAction<Error>>
) {
  fetch('http://localhost:3000/openapi.justin.ua/branch_types')
    .then((response) => response.json())
    .then((result) => {
      if (result.status) {
        const data = plainToClass(ResponseDepartmentsTypes, result);
        validate(data).then((errors) => {
          if (errors.length > 0) {
            console.log(
              'validation failed, some data is lost. errors: ',
              errors
            );
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
        });
      }
    })
    .catch((e: Error) => setError(e));
}

export default function InfoDepartments(): ReactElement {
  const [state, setState] = useState([] as DepartmentTypes[]);
  const [error, setError] = useState({} as Error);

  useEffect(() => {
    getData(setState, setError);
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
  ) : error.name == undefined ? null : (
    <ErrorPage
      title={error.name}
      message={error.message}
      callback={() => getData(setState, setError)}
    />
  );
}
