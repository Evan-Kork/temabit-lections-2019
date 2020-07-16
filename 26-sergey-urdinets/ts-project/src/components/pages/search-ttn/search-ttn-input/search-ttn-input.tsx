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

  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key == 'Enter') {
        if (event.key == 'Enter') {
          history.push(`/search-ttn/${input}`);
        }
      }
    },
    [input, props.ttn]
  );

  const onClick = useCallback(() => {
    history.push(`/search-ttn/${input}`);
  }, [input, props.ttn]);

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
