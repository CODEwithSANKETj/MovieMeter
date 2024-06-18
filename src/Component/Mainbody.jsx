import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MostRated from './MostRated';
import Searched_list from './Searched_list';
import { styled } from 'styled-components';
const url = 'https://api.themoviedb.org/3/search/movie?query=avengers&include_adult=false&language=en-US&page=1';
const initial_url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjFiOTVhM2Q2YTJjMDQ2YmVmZGE5OTZiYjUxMzg4OCIsInN1YiI6IjY0MWQxYjdiZTFmYWVkMDBjNTBlY2Y1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1PuIc1utVEW6ABx5kk29fJLWhmz5f1h6_uWJO3xdllo'
  }
};
function Mainbody({initial,searchvalue}) {
 const [movielist,setmovielist] = useState([])
  
  useEffect(()=>{
    async function getmovies(){
      /////Decides if its 1st time  page load or any serch request is already made
      let response = await axios.get(initial?initial_url:
        `https://api.themoviedb.org/3/search/movie?query=${searchvalue}&include_adult=false&language=en-US&page=1`
        ,options)
      let result = response.data
      setmovielist(result.results)
      
    }
    getmovies()
  },[initial,searchvalue])
  return (
    <div>
      {initial?<MostRated movielist={movielist}/>:<Searched_list  movielist={movielist} searchvalue={searchvalue}/>}
    </div>
  )
}

export default Mainbody

