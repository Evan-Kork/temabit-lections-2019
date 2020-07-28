import React, { ReactElement } from 'react';
import SearchTtnInput from './search-ttn-input/search-ttn-input';
import SearchTtnResults from './search-ttn-results/search-ttn-results';
import { useTitle } from 'react-use';

type Props = {
  match: {
    params: {
      TTN: string;
    };
  };
};

export default function SearchTtn({ match }: Props): ReactElement<Props> {
  useTitle('Відстежити посилку | Justin');

  return (
    <div className='search-ttn page container-fluid'>
      <div className='row text-center'>
        <p className='h3 m-4 col text-center'>Трекер посилки</p>
        <div className='w-100'></div>
        <div className='col'>
          Стан відправлення <SearchTtnInput ttn={match.params.TTN} />
        </div>
      </div>
      <SearchTtnResults ttn={match.params.TTN} />
    </div>
  );
}
