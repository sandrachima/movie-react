
import React from 'react';
import './App.css';
import SearchIcon from "./search.svg"
import MovieCard from './MovieCard';
import { useState, useEffect } from 'react';
//import { toHaveErrorMessage } from '@testing-library/jest-dom/matchers';

//import {  FaSearch} from 'react-icons/fa';
//a983aa7f


const API_URL = 'http://www.omdbapi.com?apikey=8b00dbd4'; 

const movies = {
  
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
   "Type": "movie",
 "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}

 const App = () => {
 const [ movies, setMovies ] = useState([ ]);
 const [searchTerm, setSearchTerm] = useState('');
 

 const searchMovies = async (title) => {
 const response = await fetch(`${API_URL}&s=${title}`);
 const data = await response.json();

 
 setMovies(data.Search);
};


useEffect(() => {
searchMovies( 'haunted');
}, []);



  return(
  
    <div className='app'> 
     <h1><span className='red'>W</span>atchflix</h1> 
     <div className='search'>
      <input 
      placeholder='search for movies' 
      value={searchTerm}
      onChange = {(e) =>setSearchTerm(e.target.value)}
      /> 

      <img src = {SearchIcon}
      alt='search'
     onClick= {() => searchMovies(searchTerm)}
        />
</div>



{movies?.length > 0 
  ? (
  
  <div className='container'>
   { movies.map((movie) => (
    <MovieCard movie ={movie} />
   ))}
  
  </div>
  ) : (
  <div className='empty'>
    <h2>No Movies Found</h2>
    </div>
  )
    
}



   
  </div>
  );
}


//: 8b00dbd4













//const Person = (props) => {
  //return(
    //<>
  // <h1>Name:{props.name}</h1>
   // <h2>Last Name:{props.lastName}</h2>
   // <h2>Age:{props.Age}</h2>
    
   // </>
  //)
  //}

 //const  App = () => { 
 // const[counter, setCounter] = useState(0);

  //useEffect (() => {
  //alert("you've changed the counter to " + counter) ;
  //},[counter]);



 //return (
    //<div className="App">
    //  <Person name = {'John'} lastName = {'Jude'} Age ={'45'} />
     // <Person  name ={'jane'} lastName = {'Doe'} Age ={'33'}/>
   //<button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
  
    // <h1>{counter}</h1>
    
    // <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>
  //  </div>
  //);

//const App =() =>{
  //return(
//<h1></h1>
 // );
//}





export default App;
