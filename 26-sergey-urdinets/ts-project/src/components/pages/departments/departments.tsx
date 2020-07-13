import React, { useState, useEffect, ReactElement } from 'react';
import Departmentslist from './departments-list/departments-list';
import DepartmentsMap from './departments-map/departments-map';
import { useHistory, RouteComponentProps } from 'react-router-dom';
import { DepartmentsAll, Department } from '../../../interfaces/interfaces';
import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';

function getAllDepartments(
  setFullDepartments: React.Dispatch<React.SetStateAction<Department[]>>
): void {
  fetch('http://localhost:3000/openapi.justin.ua/branches/0')
    .then((response) => response.json())
    .then((result) => {
      if (result.status) {
        let data = plainToClass(DepartmentsAll, result);
        validateLog(data);
        setFullDepartments(data.result);
      } else setFullDepartments([]);
    })
    .catch((e) => console.log(e));
}

function validateLog<T>(obj: T): void {
  validateOrReject(obj, { skipMissingProperties: true }).catch((errors) => {
    console.log('Promise rejected (validation failed). Errors: ', errors);
  });
}

export default function Departments(
  props: RouteComponentProps<{ type: string }>
): ReactElement {
  const [fullDepartments, setFullDepartments] = useState([] as Department[]);
  let history = useHistory();

  useEffect(() => {
    getAllDepartments(setFullDepartments);
  }, []);

  if (props.match.params.type !== 'list' && props.match.params.type !== 'map') {
    history.push('/');
  }

  return (
    <>
      {props.match.params.type == 'list' ? (
        <Departmentslist data={fullDepartments} />
      ) : (
        <DepartmentsMap data={fullDepartments} />
      )}
    </>
  );
}
