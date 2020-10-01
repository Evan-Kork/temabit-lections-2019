import React from 'react';
import { connect } from 'react-redux';
import { toogleSearchClosest } from '../../../../../actions/actions';

function SearchCheckbox(props) {
  return (
    <>
      <label className='m-0 search-closest'>
        <input
          type='checkbox'
          checked={props.isChecked}
          onChange={() => props.dispatch(toogleSearchClosest())}
        />
        найближчі відділення <br /> <sup>(місто, вулиця, будинок)</sup>
      </label>
    </>
  );
}

function mapStateToProps(state) {
  return {
    isChecked: state.common.isOnlyClosest
  };
}

export default connect(mapStateToProps)(SearchCheckbox);
