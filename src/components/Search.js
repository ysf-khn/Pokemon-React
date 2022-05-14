import { useState } from 'react';

const Search = (props) => {
  const [text, setText] = useState('');

  const inputHandler = (e) => {
    const query = e.target.value.toLowerCase();
    setText(query);
    props.onQuery(query);
  };

  return (
    <section>
      <form>
        <input
          type='text'
          value={text}
          onChange={inputHandler}
          placeholder='Search pokemon...'
          autoFocus
          className='bg-slate-500 px-4 py-3 rounded-lg mb-4 text-gray-200'
        />
      </form>
    </section>
  );
};

export default Search;
