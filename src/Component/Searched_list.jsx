import React, { useState } from 'react'
import { styled } from 'styled-components'
import Movie_card from './Movie_card'
import Popup from './Popup'

function Searched_list({movielist,searchvalue}) {
  const [isopen,setisopen] = useState(false)
  const [movieid,setmovieid] = useState(null)
  function handlepopup(id){
    setmovieid(id?id:null)
    setisopen(!isopen)
  }
  console.log(movielist);
  return (
    <Maindiv>
      {isopen&&movieid&&<Popup movieid={movieid} handlepopup={handlepopup}/>}

      <Topdiv></Topdiv>
      <hr />
      <Filterdiv></Filterdiv>
      <Cardlist>
        {movielist.map((item,key)=>{
          return <div style={{display:'flex',flexDirection:'column'}} key={key}>
          <Movie_card  data={item} handlepopup={handlepopup}/>
          <hr  style={{borderTop:'1px solid lightgrey',fontSize:'1px',width:'60%',marginTop:'25px'}} />
          </div>
        })}
      </Cardlist>
    </Maindiv>
  )
}

export default Searched_list
const Filterdiv = styled.div`
`
const Topdiv = styled.div`
`
const Maindiv = styled.div`
  width: 95%;
  margin: 25px;
`
const Cardlist = styled.div`
margin-top: 15px;
display: flex;
flex-direction: column;
gap: 20px;
`