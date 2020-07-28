import React, { useState, ReactElement, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const regex = /[0-9]/;

export default function SearchTtnInput(): ReactElement {
  const history = useHistory();
  const [input, setInput] = useState<string>('');

  const onKeyPress = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key == 'Enter') {
        history.push(`/search-ttn/${input}`);
        setInput('');
      }
      if (!regex.test(event.key)) {
        event.preventDefault();
      }
    },
    [input]
  );

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  return (
    <input
      type='text'
      value={input}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder='Введіть номер відправлення'
    />
  );
}
