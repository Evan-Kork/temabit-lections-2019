import React, { ReactElement, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editSearchDepartmentData } from '../../../../../actions/actions';
import { RootState } from '../../../../../reducers/index';

export default function SearchClosestInput(): ReactElement {
  const value = useSelector((state: RootState) => state.searchDepartment);
  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editSearchDepartmentData(e.target.value));
  }

  return (
    <>
      <label>
        Пошук:
        <input value={value} onChange={onChange} />
      </label>
    </>
  );
}
