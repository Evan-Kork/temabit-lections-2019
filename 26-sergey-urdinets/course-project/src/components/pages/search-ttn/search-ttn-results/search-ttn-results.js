import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SwitchToHistoryBtn from '../switch-to-history-btn/switch-to-history-btn';
import ResultOutput from '../result-output/result-output';

function SearchTtnResults(props) {
  const [searchResult, setSearchResult] = useState({status: 0, msg: { ua: '' } });

  useEffect(() => {
    getTtnData(props.ttn);
  }, [props.ttn, props.isHistory]);

  function getTtnData(ttn) {
    fetch(`http://localhost:3000/openapi.justin.ua/${
        props.isHistory ? 'tracking_history' : 'tracking'
      }/${ttn}`)
      .then(response => response.json())
      .then(result => {
        if (result.status) {
          setSearchResult(result);
        }
      })
      .catch(e => console.log(e));
  }

console.log("render");
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
