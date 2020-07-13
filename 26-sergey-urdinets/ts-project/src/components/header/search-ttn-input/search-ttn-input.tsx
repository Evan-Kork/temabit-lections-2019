import React, { useState, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

function SearchTtnInput() : ReactElement {
  let history = useHistory();
  let [input, setInput] = useState<string>('');

  function handleKeyPress(event: React.KeyboardEvent) {
    if (event.key == 'Enter') {
      history.push(`/search-ttn/${input}`);
      setInput('');
    }
  }
  return (
    <input
      type='text'
      value={input}
      onChange={e => setInput(e.target.value)}
      onKeyPress={handleKeyPress}
      placeholder='Введіть номер відправлення'
    />
  );
}

export default SearchTtnInput;
