import React, { useState, ReactElement, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

export default function SearchTtnInput(): ReactElement {
  let history = useHistory();
  let [input, setInput] = useState<string>('');

  const onKeyPress = useCallback((event: React.KeyboardEvent) => {
    if (event.key == 'Enter') {
      history.push(`/search-ttn/${input}`);
      setInput('');
    }
  }, [input]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value), []);

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
