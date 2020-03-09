import React from 'react';
import { connect } from 'react-redux';
import { toogleHistoryTtn } from '../../../../actions/actions';

function SwitchToHistoryBtn(props) {
  return (
    <>
      <div className='w-100'></div>
      <button
        onClick={() => props.dispatch(toogleHistoryTtn())}
        className='m-5 btn-primary'
      >
        {props.isHistory
          ? 'Переглянути поточний статус'
          : 'Переглянути історію'}
      </button>
    </>
  );
}

export default connect()(SwitchToHistoryBtn);
