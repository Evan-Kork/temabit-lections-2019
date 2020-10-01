import React from 'react';
import Sidebar from '../../sidebar/sidebar';
import { connect } from 'react-redux';
import { toogleSidebar } from '../../../actions/actions';

function SidebarBtn(props) {
  function handleClick() {
    props.dispatch(toogleSidebar());
  }

  return (
    <>
      <a type='button' onClick={handleClick} className='button'>
        &equiv;
      </a>
      {props.isOpen ? <Sidebar /> : null}
    </>
  );
}

function mapStateToProps(state) {
  return {
    isOpen: state.common.isSidebarOpen
  };
}

export default connect(mapStateToProps)(SidebarBtn);
