import React, { ReactElement } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { toogleSearchClosest } from '../../../../../actions/actions';
import {GlobalState} from '../../../../../reducers/index';

const mapState = (state: GlobalState) => ({
  isChecked: state.common.isOnlyClosest
});
const connector = connect(mapState);
type Props = ConnectedProps<typeof connector>;

function SearchCheckbox(props: Props) : ReactElement{
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

export default connector(SearchCheckbox);
