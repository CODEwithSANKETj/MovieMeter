import React from 'react';
import { styled } from 'styled-components';
import movie_poster from '../assets/movie.jpg';

function Movie_card({ data,handlepopup }) {
    let rating = data.vote_average.toFixed(1);
    console.log(data);
    return (
        <Maindiv onClick={()=>handlepopup(data.id)}>
            <MovieDetails>
                <Imagediv>
                    <img src={movie_poster} alt="" />
                </Imagediv>
                <Titlediv>
                    <h3>{data.title}</h3>
                    <p style={{ marginTop: '5px', borderRadius: '10px', color: 'grey', border: '1px solid grey', width: '50px', padding: '3px', textAlign: 'center' }}>{data.release_date.split('-')[0]}</p>
                </Titlediv>
            </MovieDetails>
            <Rating_div>
                <h1 style={{ borderRadius: '15px', padding: '10px', backgroundColor: `${rating > 7 ? '#00ce7a' : rating > 5 ? '#ffbd3f' : rating=='0.0'?'white':'#ff6874'}` }}>{rating=='0.0'?'tbd':rating}</h1>
            </Rating_div>
        </Maindiv>
    );
}

export default Movie_card;

const Titlediv = styled.div`
  margin-top: 15px;
`;

const Imagediv = styled.div`
  img {
      width: 100px;
      height: 120px;
  }
`;

const Maindiv = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;

  height: 120px;
  
  position: relative;
  background-color: #f3f2f2; /* Set your desired background color */
  :hover {
      cursor: pointer;
      
  }
  ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 80%;
      height: 80%;
     
  }
`;

const MovieDetails = styled.div`
  display: flex;
  gap: 15px;

`;

const Rating_div = styled.div`
  margin-top: 1%;
`;
