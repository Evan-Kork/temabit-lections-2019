import React, { useState, useEffect, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SwitchToHistoryBtn from '../switch-to-history-btn/switch-to-history-btn';
import ResultOutput from '../result-output/result-output';
import { plainToClass } from 'class-transformer';
import { Tracking } from '../../../../interfaces/interfaces';
import { validateOrReject } from 'class-validator';
import { RootState } from '../../../../reducers/index';

interface Props  {
  ttn: string;
}

function getUrl(boolean: boolean, tracking: string): string {
  const url = `http://localhost:3000/openapi.justin.ua/${
    boolean ? 'tracking_history' : 'tracking'
  }/${tracking}`;
  return url;
}

function getTtnData(
  ttn: string,
  boolean: boolean,
  setSearchResult: React.Dispatch<React.SetStateAction<Tracking>>
) {
  fetch(getUrl(boolean, ttn))
    .then((response) => response.json())
    .then((result) => {
      let data = plainToClass(Tracking, result);
      validateLog(data);
      if (data.status) {
        setSearchResult(data);
      }
    })
    .catch((e) => console.log(e));
}

export default function SearchTtnResults(props: Props): ReactElement<Props> {
  const isHistory  = useSelector((state: RootState) => state.isShowHistory);

  const [searchResult, setSearchResult] = useState({
    status: 0,
    msg: { ua: '' },
  } as Tracking);

  useEffect(() => {
    getTtnData(props.ttn, isHistory, setSearchResult);
  }, [props.ttn, isHistory]);

  return (
    <>
      {searchResult.status ? (
        <div className='row justify-content-center m-0 mt-5'>
          {searchResult.result.map((item, index: number) => {
            return <ResultOutput item={item} key={index} />;
          })}
          <SwitchToHistoryBtn />
        </div>
      ) : (
        <p className='mb-5 mt-3 text-center'>{searchResult.msg.ua}</p>
      )}
    </>
  );
}

function validateLog<T>(obj: T): void {
  validateOrReject(obj, { skipMissingProperties: true }).catch((errors) => {
    console.log('Promise rejected (validation failed). Errors: ', errors);
  });
}
