import React, { useState } from 'react'

const Search = () => {

  const items = ['apple', 'ant', 'egg', 'ele', 'zebra', 'mango'];

  const [searchItem, setSearchItem] = useState('');

  let searchResult = items.filter((item) =>
    item.toLowerCase().startsWith(searchItem.toLowerCase()));

  return (
    <div>
      <input placeholder='type to search' type='text' onChange={(e) => setSearchItem(e.target.value)}></input>
      <ul>
        {
          searchResult.map((item) => (
            <li key={item}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Search

