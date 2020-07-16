import React, { ReactElement, useCallback } from 'react';
import Sidebar from '../../sidebar/sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { toogleSidebar } from '../../../actions/actions';
import { RootState } from '../../../reducers/index';

export default function SidebarBtn(): ReactElement {
  const isOpen = useSelector<RootState>((state) => state.isSidebarOpen);
  const dispatch = useDispatch();
  const onClick = useCallback(() => {
    dispatch(toogleSidebar());
  }, []);

  return (
    <>
      <a type='button' onClick={onClick} className='button'>
        &equiv;
      </a>
      {isOpen ? <Sidebar /> : null}
    </>
  );
}
