import React, { useState, useEffect } from 'react';
import Departmentslist from './departments-list/departments-list';
import DepartmentsMap from './departments-map/departments-map';
import { useHistory } from 'react-router-dom';

function getAllDepartments(setFullDepartments) {
  fetch('http://localhost:3000/openapi.justin.ua/branches/0')
    .then(response => response.json())
    .then(results => {
      if (results.status) {
        setFullDepartments(results.result);
      } else setFullDepartments([]);
    })
    .catch(e => console.log(e));
}

function Departments(props) {
  const [fullDepartments, setFullDepartments] = useState([]);
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

export default Departments;
