import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {puppyList} from './data.js'

function App() {
  
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId);
  console.log("Featured puppy:", featuredPup);


  function handleClick(id) {
    setFeatPupId(id); // ✅ Set the clicked puppy's ID
    console.log("Clicked puppy ID:", id);
  }

  return (
      <div className="App">

      <h1>My Puppies</h1>

      <p>Click on a puppy to see more details</p>

      {puppies.map((puppy) => {
      
      console.log("puppy id:", puppy.id); //Log first

      return (
              <p onClick= {()=>handleClick(puppy.id)} key={puppy.id}> 
              {puppy.name} </p> );  
            })}

    {featuredPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}

    </div>
  );

  // const [count, setCount] = useState(0)
  // // return (
  // //   <h1>Hello World</h1>
  // // )
  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )

}

export default App
