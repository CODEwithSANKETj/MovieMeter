import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IsLoading from './IsLoading';

const url = 'https://api.themoviedb.org/3/movie/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjFiOTVhM2Q2YTJjMDQ2YmVmZGE5OTZiYjUxMzg4OCIsInN1YiI6IjY0MWQxYjdiZTFmYWVkMDBjNTBlY2Y1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1PuIc1utVEW6ABx5kk29fJLWhmz5f1h6_uWJO3xdllo'
  }
};

const Popup = ({ movieid, handlepopup }) => {

  const [moviedata, setmoviedata] = useState(null);

  useEffect(() => {
    async function getmoviedetail() {
      let data = await axios.get(url + movieid, options);
      let result = data.data;
      setmoviedata(result);
    }
    getmoviedetail();
    return () => {
      setmoviedata(null);
    };
  }, [movieid]);

  return (
    <PopupContainer>
      {moviedata ? (
        <PopupContent>
          <CloseButton onClick={() => handlepopup(null)}>&times;</CloseButton>
          <Left>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/TcMBFSGVi1c?autoplay=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Movie Trailer"
              style={{ borderRadius: "15px 0 0 15px" }}
            ></iframe>
          </Left>
          <Right>
            <Title>{moviedata.title}</Title>
            <Info>
              <strong>Available Languages:</strong>
              <div>
                {moviedata?.spoken_languages?.reduce((acc, item) => {
                  let newLanguage = item.english_name ? item.english_name : '';
                  if (newLanguage) {
                    acc.push(newLanguage);
                  }
                  return acc;
                }, []).map((language, index) => (
                  <LanguageTag key={index}>{language}</LanguageTag>
                ))}
              </div>
            </Info>
            <Info><strong>Overview:</strong> {moviedata.overview}</Info>
            <Info><strong>Release Date:</strong> {moviedata.release_date}</Info>
          </Right>
        </PopupContent>
      ) : (
        <IsLoading />
      )}
    </PopupContainer>
  );
};

export default Popup;

const PopupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const PopupContent = styled.div`
  width: 80%;
  
  max-height: 80vh; /* Set maximum height to 80% of viewport height */
  background-color: #2c3e50;
  border-radius: 15px;
  overflow-y: auto; /* Add vertical scroll if content exceeds max height */
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: row;
  position: relative;
  color: #ecf0f1;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #e74c3c;
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 20px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s;

  &:hover {
    background: #c0392b;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 0 0 20px 0;
  color: #e74c3c;
  font-size: 2em;
`;

const Info = styled.p`
  margin: 10px 0;
  color: #bdc3c7;
  font-size: 1em;

  strong {
    color: #ecf0f1;
  }
`;

const LanguageTag = styled.span`
  display: inline-block;
  margin: 5px 5px 5px 0;
  padding: 5px 10px;
  border: 1px solid #bdc3c7;
  border-radius: 12px;
  font-size: 0.9em;
  color: #bdc3c7;
`;
