import  React  from "react";
import "./homePage.css"
import menu from "./main-menu.jpeg"


function HomePage(){
  return(
    <>
    <h1>Основная теория по библиотеке React</h1>
    <img src={menu} alt="main-menu" style={{width:"100%"}} />
    </>
  )
}

export default HomePage;