import React, { useState, useEffect, ReactElement, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const regex = /[0-9]/;

type Props = {
  ttn: string;
};

export default function SearchTtnInput({ ttn }: Props): ReactElement<Props> {
  const history = useHistory();
  const [input, setInput] = useState<string>(ttn);

  useEffect(() => {
    setInput(ttn);
  }, [ttn]);

  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key == 'Enter') {
        history.push(`/search-ttn/${input}`);
      }
      if (!regex.test(event.key)) {
        event.preventDefault();
      }
    },
    [input, ttn]
  );

  const onClick = useCallback(() => {
    history.push(`/search-ttn/${input}`);
  }, [input, ttn]);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value),
    []
  );

  return (
    <>
      <input
        type='text'
        value={input}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        placeholder='Введіть номер відправлення'
      />
      <button
        className='btn-primary'
        disabled={input == '' ? true : false}
        onClick={onClick}
      >
        ▷
      </button>
    </>
  );
}
