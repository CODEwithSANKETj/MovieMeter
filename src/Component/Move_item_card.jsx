import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import movie_poster from '../assets/movie.jpg'
import axios from 'axios';
let posterpathurl = 'https://api.themoviedb.org/3/movie/1022789/images'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjFiOTVhM2Q2YTJjMDQ2YmVmZGE5OTZiYjUxMzg4OCIsInN1YiI6IjY0MWQxYjdiZTFmYWVkMDBjNTBlY2Y1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1PuIc1utVEW6ABx5kk29fJLWhmz5f1h6_uWJO3xdllo'
  }
};
const base_img_url = 'https://image.tmdb.org/t/p/w500'
function Move_item_card({data,handleclick}) {
  let vote = data.vote_average.toFixed(1)
  const [path,setpath] = useState(null)
  const [loading ,setloading] = useState(false)
  useEffect(()=>{
  
    setloading(true)
    async function getposterpath (){
      
      let response = await axios.get(`https://api.themoviedb.org/3/movie/${data.id}/images`,options)
      let temp_data = response.data?.posters?.[0]?.file_path
   
      setpath(base_img_url+temp_data)
      
      
    }
    getposterpath()
    setloading(false)
    return ()=>{
  
    }
   },[data])
  return (

    <MovieCard onClick={()=>handleclick(data.id)}>
      <MoviePoster src={path} alt="Movie Poster" />
      <MovieInfo>
        <MovieTitle>{data.original_title}</MovieTitle>
        <p style={{textAlign:'center',padding:'1px',color:'grey',border:'1px solid grey',width:'25%',borderRadius:'5px'}}>{data.media_type}</p>
        <hr />
        <MovieMetascore>
            <div style={{display:'flex',flexDirection:'column',gap:'15px'}}>
              <MetascoreLabel>METASCORE</MetascoreLabel>
              <h4>{vote>7?'Generally Favolrable':vote>5?'Mixed or Average':vote=='0.0'?'TBD':'Flop'}</h4>
            </div>
            <MetascoreValue
                style={{backgroundColor:`${vote>7?'#00ce7a':vote>5?'#ffbd3f':vote=='0.0'?'white':'#ff6874'}`}}
              >{data.vote_average.toFixed(1)=='0.0'?'TBD':data.vote_average.toFixed(1)}
            </MetascoreValue>
        </MovieMetascore>
      </MovieInfo>
    </MovieCard>
    
  )
}

export default Move_item_card

const MovieCard = styled.div`
  background-color: #fff;
  margin: 20px auto;
  width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  :hover{
    cursor: pointer;
  }
  font-family: 'Roboto', sans-serif;
`;

const MoviePoster = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const MovieInfo = styled.div`
  padding: 15px;
`;

const MovieTitle = styled.h2`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 5px;
  font-family: 'Roboto', sans-serif;
`;

const MovieMetascore = styled.div`
  display: flex;
 justify-content: space-between;
  gap: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
`;

const MetascoreLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 7px;
  font-size: small;
  font-weight: 100;
  color: grey;
`;

const MetascoreValue = styled.span`
  font-size: 1.5em;
  font-weight: bold;
  border-radius: 5px;
  padding: 5px 10px;
  align-content: center;
  background-color: #f0f0f0;
  font-family: 'Roboto', sans-serif;
`;

const MovieDescription = styled.p`
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
`;

const MovieRating = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`;

const RatingLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
  font-family: 'Roboto', sans-serif;
`;

const RatingValue = styled.span`
  font-size: 1.2em;
  color: #ff9900;
  font-family: 'Roboto', sans-serif;
`;