import React, { useState, useEffect, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import SwitchToHistoryBtn from '../switch-to-history-btn/switch-to-history-btn';
import ResultOutput from '../result-output/result-output';
import { plainToClass } from 'class-transformer';
import { Tracking } from '../../../../interfaces/interfaces';
import { RootState } from '../../../../reducers/index';
import { validate } from 'class-validator';

interface Props {
  ttn: string;
}

function getUrl(isHistory: boolean, tracking: string): string {
  const url = `http://localhost:3000/openapi.justin.ua/${
    isHistory ? 'tracking_history' : 'tracking'
  }/${tracking}`;
  return url;
}

function getTtnData(
  ttn: string,
  isHistory: boolean,
  setSearchResult: React.Dispatch<React.SetStateAction<Tracking>>
) {
  fetch(getUrl(isHistory, ttn))
    .then((response) => response.json())
    .then((result) => {
      let data = plainToClass(Tracking, result);
      validate(data).then((errors) => {
        if (errors.length > 0) {
          console.log('validation failed. errors: ', errors);
        } else {
          setSearchResult(data);
        }
      });
    })
    .catch((e) => console.log(e));
}

function getInitialState() {
  return {
    status: 0,
    msg: { ua: '' },
  };
}

export default function SearchTtnResults({ ttn }: Props): ReactElement<Props> {
  const isHistory = useSelector((state: RootState) => state.isShowHistory);
  const [searchResult, setSearchResult] = useState(getInitialState() as Tracking);

  useEffect(() => {
    getTtnData(ttn, isHistory, setSearchResult);
  }, [ttn, isHistory]);

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
