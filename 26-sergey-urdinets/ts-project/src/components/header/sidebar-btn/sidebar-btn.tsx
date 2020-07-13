import React, { ReactElement } from 'react';
import Sidebar from '../../sidebar/sidebar';
import { connect, ConnectedProps } from 'react-redux';
import { toogleSidebar } from '../../../actions/actions';
import { GlobalState } from '../../../reducers/index';

const mapState = (state: GlobalState) => ({
  isOpen: state.common.isSidebarOpen,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

function SidebarBtn(props: PropsFromRedux) : ReactElement {
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

export default connector(SidebarBtn);
