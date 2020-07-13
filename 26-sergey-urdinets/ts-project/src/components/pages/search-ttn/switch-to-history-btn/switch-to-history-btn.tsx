import React, { ReactElement, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toogleHistoryTtn } from '../../../../actions/actions';
import { RootState } from '../../../../reducers/index';

export default function SwitchToHistoryBtn(): ReactElement {
  const isHistory = useSelector((state: RootState) => state.isShowHistory) ;
  const dispatch = useDispatch();
  const handleClick = useCallback(() => dispatch(toogleHistoryTtn()), []);

  return (
    <>
      <div className='w-100'></div>
      <button onClick={handleClick} className='m-5 btn-primary'>
        {isHistory ? 'Переглянути поточний статус' : 'Переглянути історію'}
      </button>
    </>
  );
}
