import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SearchTtnInput() {
  let history = useHistory();
  let [input, setInput] = useState('');

  function handleKeyPress(event) {
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
