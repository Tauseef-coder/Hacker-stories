//import React from "react";
import React, { useState } from 'react';
export default App;
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
function App() { 
  return(
    <div>
      <h1>My Hacker Stories</h1>
      
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
            </div>
      })}

      {/* render the list here*/}
    </div>
  )
 }
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
}
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
  const searchStories = stories.fliter (story => 
    story.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
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
  };
  React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
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

      <hr />

      <list list={stories}/>

    </div>
  )
};
//pg52
const search = props => {
  const ({ search, onSearch })=>(

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

const list =({list}) => 
  list.map(item => <Item key={item.objectId} item={item} />);

  const Item =({ item}) => (
      <div key={item.objectID}>
        <span>
          <a href={item.url}> {item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
    );
