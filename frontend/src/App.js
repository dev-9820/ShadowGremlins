import { Component} from "react";
import Webcam from "react-webcam";
import './App.css';
import { ImgHTMLAttributes } from "react";
import React from "react";
import styled from 'styled-components';

const theme={
  black:{
    default: "#000000",
    hover:"#808080"
  }
}

const Button=styled.button`
 background-color: black;
 border-radius: 40px;
 height:60px;
 width:60px;
 margin-left: 15px;
 box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
 cursor: pointer;
 transition: ease background-color 250ms;
 &:hover{
   background-color: #303030
 }
`

const handleMouseIn = () => {
  setHover(true);
};

const handleMouseOut = () => {
  setHover(false);
};

function setHover(){

}



function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <img width={40} src="logo.png" align={"center"}/> NUMBER PLATE RECOGNITION
      </header>
      <p flexGrow={1} display={{md: 'flex'}} align={"left"}>
      <Webcam className="Camera-ui"/>
      </p>
      
      <p align={"left"}>
      <Button><img width={"35px"} src="scan.png"/></Button>
      <Button><img width={"35px"} src="reg.png"/></Button>
      </p>
      

      <div className="Result">
        <div className="number-plate">
          NUMBER - BMW123456
        </div>
        <div className="description">
              DESCRIPTION
          <p>NAME - PUTIN</p>
        </div>
      </div>
    </div>
  );
}

export default App;
