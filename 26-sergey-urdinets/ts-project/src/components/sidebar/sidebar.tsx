import React, { ReactElement, useCallback } from 'react';
import NavBar from './nav-bar/nav-bar';
import SocialNetworks from './social-networks/social-networks';
import { useDispatch } from 'react-redux';
import { toogleSidebar } from '../../actions/actions';

export default function Sidebar(): ReactElement {
  const dispatch = useDispatch();
  const onClick = useCallback(() => {
    dispatch(toogleSidebar());
  }, []);

  return (
    <div className='sidebar d-flex flex-column justify-content-between'>
      <a className='button' onClick={onClick}>
        &#215;
      </a>
      <NavBar />
      <SocialNetworks />
    </div>
  );
}
