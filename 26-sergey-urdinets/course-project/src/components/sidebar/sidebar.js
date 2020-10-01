import React from 'react';
import NavBar from './nav-bar/nav-bar';
import SocialNetworks from './social-networks/social-networks';
import { connect } from 'react-redux';
import { toogleSidebar } from '../../actions/actions';

function Sidebar(props) {
  function handleClick() {
    props.dispatch(toogleSidebar());
  }

  return (
    <div className='sidebar d-flex flex-column justify-content-between'>
      <a className='button' onClick={handleClick}>
        &#215;
      </a>
      <NavBar />
      <SocialNetworks />
    </div>
  );
}

export default connect()(Sidebar);
