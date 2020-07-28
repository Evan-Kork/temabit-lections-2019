import React, { useState, useEffect, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import SwitchToHistoryBtn from '../switch-to-history-btn/switch-to-history-btn';
import ResultOutput from '../result-output/result-output';
import { plainToClass } from 'class-transformer';
import {
  Tracking,
  ResultTTN,
  TrackingError,
  Msg,
} from '../../../../interfaces/interfaces';
import { RootState } from '../../../../reducers/index';
import { validate } from 'class-validator';
import ErrorPage from '../../../error_page/error_page';

interface Props {
  ttn: string;
}

function getUrl(isHistory: boolean, tracking: string): string {
  const url = `http://localhost:3000/openapi.justin.ua/${
    isHistory ? 'tracking_history' : 'tracking'
  }/${tracking}`;
  return url;
}

function getSearchErrorState(): TrackingError {
  return {
    msg: { ua: 'Помилка валідації отриманих данних' } as Msg,
  } as TrackingError;
}
function getState<T>() : T {
    return {} as T
  }

function getTtnData(
  ttn: string,
  isHistory: boolean,
  setSearchResult: React.Dispatch<React.SetStateAction<ResultTTN[]>>,
  setSearchError: React.Dispatch<React.SetStateAction<TrackingError>>,
  setError: React.Dispatch<React.SetStateAction<Error>>
) {
  fetch(getUrl(isHistory, ttn))
    .then((response) => response.json())
    .then((result) => {
      if (result.status) {
        let data = plainToClass(Tracking, result);
        validate(data).then((errors) => {
          if (errors.length > 0) {
            console.log('validation failed. errors: ', errors);
            setSearchError(getSearchErrorState());
            setSearchResult([]);
          } else {
            setSearchResult(data.result);
          }
        });
      } else {
        let data = plainToClass(TrackingError, result);
        validate(data).then((errors) => {
          if (errors.length > 0) {
            console.log('validation failed. errors: ', errors);
            setSearchError(getSearchErrorState());
          } else {
            setSearchError(result);
          }
        });
      }
    })
    .catch((e: Error) => setError(e));
}

export default function SearchTtnResults({ ttn }: Props): ReactElement<Props> {
  const isHistory = useSelector((state: RootState) => state.isShowHistory);
  const [searchResult, setSearchResult] = useState([] as ResultTTN[]);
  const [searchError, setSearchError] = useState(getState<TrackingError>());
  const [error, setError] = useState(getState<Error>());

  useEffect(() => {
    getTtnData(ttn, isHistory, setSearchResult, setSearchError, setError);
  }, [ttn, isHistory]);

  return searchResult.length ? (
    <div className='row justify-content-center m-0 mt-5'>
      {searchResult.map((item, index: number) => {
        return <ResultOutput item={item} key={index} />;
      })}
      <SwitchToHistoryBtn />
    </div>
  ) : error.name == undefined ? (
    <p className='mb-5 mt-3 text-center'>
      {searchError.msg?.ua ?? 'Введіть номер відправлення'}
    </p>
  ) : (
    <ErrorPage
      title={error.name}
      message={error.message}
      callback={() =>
        getTtnData(ttn, isHistory, setSearchResult, setSearchError, setError)
      }
    />
  );
}
