//import React from "react";

import React, { useState } from 'react';
const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';
  const storiesReducer = (state, action) => {
    switch (action.type) {
      case 'STORIES_FETCH_INT':
        return {
          ...state,
          isLoading: true,
          isError : false,
        };
      case 'STORIES_FETCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          isError : false,
          data: action.playload,
        };
        case 'STORIES_FETCH_FAILURE':
          return {
            ...state,
            isLoading : false,
            isError: true,
          };
          case 'REMOVE_STORY':
            return {
              ...state,
              data: state.data.filter(
                story => action.playload.objectID !== story.objectID
              ),
            };
        default:
          throw new Error();
    }
  };
  
    
function App() { 
  return(
    <div>
      <h1>My Hacker Stories</h1>
      <inputWithLabel
        id='search'
        label='search'
        value={searchTerm}
        isFocused
        onInputChange={handleSearch} 
        >
          <strong>Search: </strong>
          </inputWithLabel>
      
      <label htmlFor="search">Search : </label>
      <input id="search" type="text"/>

      <hr />

      {list.map(function(item) {
        return 
          <div key={item.objectId}>
            <span>
      <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            {item.tilte};
            <List list={searchStories} onRemoveItem={handleRemoveStory} />
            </div>
      })}

      {/* render the list here*/}
    </div>
  )
 }
 const inputWithLabel =({ id, label, value, onInputChange }) => (
   <>
   <label htmlFor={id}>{label}</label>
   &nbsp;
   <input
   id={id}
   type={type}
   value={value}
   autofocus
   onChange={onInputChange} />
   </>
 );
function List() {
  return list.map(function(item) {
    return (
      <div key={item.objectID}>
        <span>
          <a href={item.url}> {item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
    );
  });
//pg84
const useSemiPersistentState = key, initialState => {
  const [value ,setvalue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem('value',value);
  },[value,key]);
};
return [value,setvalue];
};
//A
const app = () => {
  const handleFetchStories = React.useCaallback(() => {//B
  }
    }
    //const searchTermState = React.useState('');
    //const searchTerm = searchTermState[0];
    //const setSearchTerm = searchTermState[1];

    const [searchTerm, setSearchTerm] = React.useState('');
    localStorage.gitItem ('search') || "React"
    const [stoires, setStoires] = React.useState([]);
    React.useEffect(() => {
      if (!searchTerm) return;
      dispactchStories({ type: 'STORIES_FETCH_INT'})
      fetch(`${API_ENDPOINT}${searchTerm}`)//B
      
        .then(result =>{
          dispactchStories({
            type: 'STORIES_FETCH_SUCCESS',
            playload: result.hits,//D,
          });
      });
      .catch(()=> 
        dispactchStories({ type: 'STORIES_FETCH_FAILURE'})
        );
    },[searchTerm]);//E
   
  React.useEffect(() => {
    handleFetchStories();//C
  },[handleFetchStories];//D
    setIsLoading(true);
  }, [searchTerm]);
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }

  const handleChange = event => {
    setSearchTerm(event.target.value);
    localStorage.setItem("search", event.target.value);
  
  }
  // do something in between
  // return (
    <div>
      <h1> My Hacker Stories</h1>

      <Search onSearch={searchTerm} onSearch={handleSearch} />
      <label htmlFor="search">Search : </label>
      <input id="search" type="text" onChange={handleChange} />

      <p>
  searching for <strong>{searchTerm}</strong>.
      </p>
return (
  <div>
      <hr />
      {stories.isError && <p> Soemting went wrong ...</p>}
      {stories.isLoading ? (
        <p> Loading ...</p>
      ):(
      <List list={Stories.Data} onRemoveItem={handleRemoveStory}/>
      )}
    </div>
  );
};
//pg52
const search = ({ search, onSearch })=>(
  <div>
    <label htmlFor="search">Search :</label>
    <input
    id="search"
    type="text"
    value={search}
    onChange={onScreen} />
  </div>
  //b
  // props.onSearch(event);
);
const Search = () => {
  const ({search, onsearch }) => (
  <div>
    <label htmlFor="search">Search:</label>
    <input id="search" type="text" onChange={props.onSearch} />

    <p>
Searching for <strong>{searchTerm}</strong>.
    </p>
  </div>
)

const list =({list onRemoveItem }) => 
  list.map(item => (
    <Item 
      key={item.objectID}
      item={item}
      onRemoveItem={onRemoveItem} />
  ));
  const Item=({item, onRemoveItem}) => (
    <div>
      <span>
          <a href={item.url}> {item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        <span>
          <button type="button" onClick={() => onRemoveItem(item)}> Dismiss
          </button>
      </span> 
    </div>
   );
    export default App;