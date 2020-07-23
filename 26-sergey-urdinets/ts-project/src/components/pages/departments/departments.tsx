import React, { useState, useEffect, ReactElement } from 'react';
import Departmentslist from './departments-list/departments-list';
import DepartmentsMap from './departments-map/departments-map';
import { useHistory, RouteComponentProps } from 'react-router-dom';
import { DepartmentsAll, Department } from '../../../interfaces/interfaces';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

function getAllDepartments(
  setFullDepartments: React.Dispatch<React.SetStateAction<Department[]>>
): void {
  fetch('http://localhost:3000/openapi.justin.ua/branches/0')
    .then((response) => response.json())
    .then((result) => {
      if (result.status) {
        let data = plainToClass(DepartmentsAll, result);
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
            setFullDepartments(validData);
          } else {
            setFullDepartments(data.result);
          }
        });
      }
    })
    .catch((e) => {
      setFullDepartments([]);
      console.log(e);
    });
}

export default function Departments({
  match,
}: RouteComponentProps<{ type: string }>): ReactElement {
  const [fullDepartments, setFullDepartments] = useState([] as Department[]);
  let history = useHistory();

  useEffect(() => {
    getAllDepartments(setFullDepartments);
  }, []);

  if (match.params.type !== 'list' && match.params.type !== 'map') {
    history.push('/');
  }

  return (
    <>
      {match.params.type == 'list' ? (
        <Departmentslist data={fullDepartments} />
      ) : (
        <DepartmentsMap data={fullDepartments} />
      )}
    </>
  );
}
