import React from 'react';
import { connect } from 'react-redux';
import { editSearchDepartmentData } from '../../../../actions/actions';

function SearchClosestInput(props) {
  return (
    <>
      <label>
        Пошук:
        <input
          value={props.value}
          onChange={e => {
            props.dispatch(editSearchDepartmentData(e.target.value));
          }}
        />
      </label>
    </>
  );
}

function mapStateToProps(state) {
  return {
    value: state.common.searchDepartment
  };
}

export default connect(mapStateToProps)(SearchClosestInput);
