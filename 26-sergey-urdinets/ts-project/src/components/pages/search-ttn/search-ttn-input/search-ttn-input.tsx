import React, { useState, useEffect, ReactElement, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

type Props = {
  ttn: string;
};

export default function SearchTtnInput(props: Props): ReactElement<Props> {
  let history = useHistory();
  const [input, setInput] = useState<string>(props.ttn);

  useEffect(() => {
    setInput(props.ttn);
  }, [props.ttn]);

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key == 'Enter') {
      if (event.key == 'Enter') {
        history.push(`/search-ttn/${input}`);
      }
    }
  };

  return (
    <>
      <input
        type='text'
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        onKeyPress={handleKeyPress}
        placeholder='Введіть номер відправлення'
      />
      <button
        className='btn-primary'
        disabled={input == '' ? true : false}
        onClick={() => {
          history.push(`/search-ttn/${input}`);
        }}
      >
        ▷
      </button>
    </>
  );
}
