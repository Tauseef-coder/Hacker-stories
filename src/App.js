//import React from "react";
import React, { useState } from 'react';

const initialStories = [
{
  title: "React",
  url: "https://reactjs.org/",
  author: "jordan walke",
  num_comments: 3,
  points : 4,
  objectID : 0,
},
{
  title: "Redux",
  Url: "https://redux.js.org/",
  author: "Dan Abramov, Andrew Clark",
  num_comments :2,
  points : 5,
  objectID : 1,
},
];
const getAsyncstories = () =>
  new Promise(resolve =>
    setTimeout(
      () => resolve({ data: { stories: initialStories} }),
      2000
      )
  );
  const storiesReducer = (state, action) => {
    switch (action.type) {
      case 'SET_STORIES':
        return action.plauload;
      case 'REMOVE_STORY':
        return state.filter(
          story => action.playload.objectID !== story.objectID
        );
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
const app = () => {
  const [stories ,setStories] = React.useState([]);
  const [isLoading , setIsLoading] = React.useState(false);
  const [isError , setIsError] = React.useState(false);
  const [stories, dispactchStories] = React.useReducer(
    storiesReducer,
    []
  );
  const list = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "jordan walke",
      num_comments: 3,
      points : 4,
      objectID : 0,
    },
    {
      title: "Redux",
      Url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments :2,
      points : 5,
      objectID : 1,
    },
    ];
    const [searchTerm, setSearchTerm] = useSemiPersistentState();
    const handleSearch = event =>{
      setSearchTerm(event.target.value);
    }
    //const searchTermState = React.useState('');
    //const searchTerm = searchTermState[0];
    //const setSearchTerm = searchTermState[1];

    const [searchTerm, setSearchTerm] = React.useState('');
    localStorage.gitItem ('search') || "React"
    const [stoires, setStoires] = React.useState([]);
    React.useEffect(() => {
      getAsyncstories()
        .then(result =>{
          dispactchStories({
            type: 'SET_STOIRES',
            playload: result.data.stories,
          });
          setIsLoading(false);
      });
      .catch(()=> setIsError(true));
    },[]);
    const handleRemoveStory = item => {
      dispactchStories({
        type: 'REMOVE_STORY',
        playload : item,
      });
    
      dispatchStories({
        type: 'SET_STORIES',
        playload: newStories,
      });
    };
  
  React.useEffect(() => {
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
      {isError && <p> Soemting went wrong ...</p>}
      {isLoading ? (
        <p> Loading ...</p>
      ):(
      
      <list 
        list={searchedStories} 
        onRemoveItem={handleRemoveStory}
        />
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