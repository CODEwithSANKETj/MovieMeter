import React from 'react'
import styled from 'styled-components';
import movie_poster from '../assets/movie.jpg'
function Move_item_card({data,handleclick}) {
  let vote = data.vote_average.toFixed(1)
  return (

    <MovieCard onClick={()=>handleclick(data.id)}>
      <MoviePoster src="https://dummyimage.com/300x200/000/fff&text=Movie+Poster" alt="Movie Poster" />
      <MovieInfo>
        <MovieTitle>{data.original_title}</MovieTitle>
        <p style={{textAlign:'center',padding:'1px',color:'grey',border:'1px solid grey',width:'25%',borderRadius:'5px'}}>{data.media_type}</p>
        <hr />
        <MovieMetascore>
            <div style={{display:'flex',flexDirection:'column',gap:'15px'}}>
              <MetascoreLabel>Metascore</MetascoreLabel>
              <h4>{vote>7?'Generally Favolrable':vote>5?'Mixed or Average':vote=='0.0'?'TBD':'Flop'}</h4>
            </div>
            <MetascoreValue
                style={{backgroundColor:`${vote>7?'#00b050':vote>5?'yellow':vote=='0.0'?'white':'red'}`}}
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
`;

const MovieMetascore = styled.div`
  display: flex;
 justify-content: space-between;
  gap: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const MetascoreLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const MetascoreValue = styled.span`
  font-size: 1.5em;
  font-weight: bold;
  border-radius: 5px;
  padding: 5px 10px;
  align-content: center;
  background-color: #f0f0f0;
`;

const MovieDescription = styled.p`
  margin-bottom: 10px;
`;

const MovieRating = styled.div`
  display: flex;
  align-items: center;
`;

const RatingLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const RatingValue = styled.span`
  font-size: 1.2em;
  color: #ff9900;
`;

