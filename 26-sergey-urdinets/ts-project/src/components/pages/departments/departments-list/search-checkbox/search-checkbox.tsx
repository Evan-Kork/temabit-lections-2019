import React, { ReactElement, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toogleSearchClosest } from '../../../../../actions/actions';
import { RootState } from '../../../../../reducers/index';

export default function SearchCheckbox(): ReactElement {
  const isChecked = useSelector((state: RootState) => state.isOnlyClosest);
  const dispatch = useDispatch();
  const onChange = useCallback(() => dispatch(toogleSearchClosest()), []);

  return (
    <>
      <label className='m-0 search-closest'>
        <input type='checkbox' checked={isChecked} onChange={onChange} />
        найближчі відділення <br /> <sup>(місто, вулиця, будинок)</sup>
      </label>
    </>
  );
}
