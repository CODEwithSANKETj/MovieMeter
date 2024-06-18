import React, { useState } from 'react';
import styled from 'styled-components';
import Move_item_card from './Move_item_card';
import '../CSS/Mostrated.css'
import Popup from './Popup';


function MostRated({ movielist }) {
  const [isopen,setisopen] = useState(false)
  const [movieid,setmovieid] = useState(null)
  function handleclick(id){
    if(id!==null){
      setisopen(true)
      setmovieid(id)
    }
    else{
      setisopen(false)
    }

  }
  return (
    <Main_Container className='most_rated_container'>
      {isopen&&movieid&&<Popup movieid={movieid} handlepopup={handleclick} />}
      <h2>Trendings</h2>
      <hr />
      <Maindiv className='most_rated_list'>
      

          {movielist.map((item, key) => (
            <Move_item_card key={key} data={item} handleclick={handleclick} />
          ))}
      
      
      </Maindiv>
    </Main_Container>
    
  );
}

export default MostRated;


const Maindiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 15px;

  margin-top: 25px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  /* Media query for small screens (e.g., phones) */
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 5px;
  }
`;
const Main_Container = styled.div`
margin: 15px;
&  hr{
  margin-top: 15px;
}
`

// const MovieCard = styled.div`
//   background-color: #fff;
//   margin: 20px auto;
//   width: 300px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   border-radius: 8px;
//   overflow: hidden;
// `;

// const MoviePoster = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
// `;

// const MovieInfo = styled.div`
//   padding: 15px;
// `;

// const MovieTitle = styled.h2`
//   font-size: 1.2em;
//   font-weight: bold;
//   margin-bottom: 5px;
// `;

// const MovieMetascore = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 10px;
// `;

// const MetascoreLabel = styled.span`
//   font-weight: bold;
//   margin-right: 10px;
// `;

// const MetascoreValue = styled.span`
//   font-size: 1.5em;
//   font-weight: bold;
//   color: #00b050;
//   border-radius: 5px;
//   padding: 5px 10px;
//   background-color: #f0f0f0;
// `;

// const MovieDescription = styled.p`
//   margin-bottom: 10px;
// `;

// const MovieRating = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const RatingLabel = styled.span`
//   font-weight: bold;
//   margin-right: 5px;
// `;

// const RatingValue = styled.span`
//   font-size: 1.2em;
//   color: #ff9900;
// `;
