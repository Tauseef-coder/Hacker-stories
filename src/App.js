import React from "react";
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

export default App;