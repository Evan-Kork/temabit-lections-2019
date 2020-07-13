import React, { ReactElement } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { editSearchDepartmentData } from '../../../../../actions/actions';
import {GlobalState} from '../../../../../reducers/index';

const mapState = (state: GlobalState) => ({
  value: state.common.searchDepartment
});
const connector = connect(mapState);
type Props = ConnectedProps<typeof connector>;

function SearchClosestInput(props: Props) : ReactElement{
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

export default connector(SearchClosestInput);
