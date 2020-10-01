import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function SearchTtnInput(props) {
  let history = useHistory();
  const [input, setInput] = useState(props.ttn);

  useEffect(() => {
    setInput(props.ttn);
  }, [props.ttn]);

  function handleKeyPress(event) {
    if (event.key == 'Enter') {
      history.push(`/search-ttn/${input}`);
    }
  }

  return (
    <>
      <input
        type='text'
        value={input}
        onChange={e => setInput(e.target.value)}
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

export default SearchTtnInput;
