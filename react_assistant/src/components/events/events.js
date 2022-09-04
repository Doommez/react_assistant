import React, { useRef } from 'react';

import { useState } from 'react';



function Event(props){
  let {onClick}=props
  console.log(onClick);
 let [er,setEr]=useState(false)
 let ref=useRef()
 if(er){
  throw new Error("it is the end!")
 
 }else{
  return(
    <>
    <h1>Event</h1>
    <button onClick={()=>{
      console.log(ref.current);
      setEr(true)}}
       ref={ref}
     
       >Don't Touch me!!</button>
    </>
  )
 }
 
}

export default Event