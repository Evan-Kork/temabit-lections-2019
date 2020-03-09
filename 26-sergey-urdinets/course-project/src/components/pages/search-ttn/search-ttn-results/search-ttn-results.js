import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SwitchToHistoryBtn from '../switch-to-history-btn/switch-to-history-btn';
import ResultOutput from '../result-output/result-output';

function getTtnData(number, boolean, setSearchResult) {
  fetch(`http://localhost:3000/openapi.justin.ua/${
    boolean ? 'tracking_history' : 'tracking'
    }/${number}`)
    .then(response => response.json())
    .then(result => {
      if (result.status) {
        setSearchResult(result);
      }
    })
    .catch(e => console.log(e));
}

function SearchTtnResults(props) {
  const [searchResult, setSearchResult] = useState({status: 0, msg: { ua: '' } });

  useEffect(() => {
    getTtnData(props.ttn, props.isHistory, setSearchResult);
  }, [props.ttn, props.isHistory]);

  return (
    <>
      {searchResult.status ? (
        <div className='row justify-content-center m-0 mt-5'>
          {searchResult.result.map((item, index) => {
            return <ResultOutput item={item} key={index} />;
          })}
          <SwitchToHistoryBtn isHistory={props.isHistory} />
        </div>
      ) : (
        <p className='mb-5 mt-3 text-center'>{searchResult.msg.ua}</p>
      )}
    </>
  );
}

function mapStateToProps(state) {
  return {
    isHistory: state.common.isShowHistory
  };
}

export default connect(mapStateToProps)(SearchTtnResults);
