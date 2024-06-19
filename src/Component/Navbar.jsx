import React, { useState } from 'react';
import '../CSS/navbar.css';
import movie_logo from '../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';

function Navbar({setintial,setsearchvalue}) {
  const [searchinput,setsearchinput] = useState('')
  function handleclick(){
    
    if(searchinput!==''){
      setintial(false)
      setsearchvalue(searchinput)
    }

  }
  
  return (
    <div className='mainbody'>
      <Navlogo onClick={()=>{
        setintial(true)
        setsearchvalue(searchinput)
        }} ><img className='logo' src={movie_logo} alt="Logo" /></Navlogo>
      <div className='search-container'>
        <input type="text" onChange={(e)=>setsearchinput(e.target.value)} placeholder='Search movie' className='search-input' />
        <FontAwesomeIcon onClick={handleclick}  icon={faSearch} className='search-icon' />
      </div>
    </div>
  );
}

export default Navbar;
const Navlogo = styled.div`
  :hover{
    cursor: pointer;
  }
`