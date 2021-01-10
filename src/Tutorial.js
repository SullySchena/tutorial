import React from "react";
import "antd/dist/antd.css";
import {Carousel} from 'antd';
import './App.css';
import one from './images/one.jpg'
import two from './images/two.jpg'
import three from './images/three.jpg'
import four from './images/four.jpg'
import five from './images/five.jpg'
import six from './images/six.jpg'
import seven from './images/seven.jpg'
import eight from './images/eight.jpg'
import nine from './images/nine.jpg'
import ten from './images/ten.jpg'
import eleven from './images/eleven.jpg'


const Tutorial = () => {
  
  const panelInfo =  [ 
    {image: one, description: "this is where the description would go"},
    {image: two, description: "this is where the description would go"},  
    {image: one, description: "this is where the description would go"}, 
    {image: one, description: "this is where the description would go"}, 
    {image: one, description: "this is where the description would go"}, 
    {image: one, description: "this is where the description would go"}, 
    {image: one, description: "this is where the description would go"}, 
    {image: one, description: "this is where the description would go"}, 
    {image: one, description: "this is where the description would go"}, 
    {image: one, description: "this is where the description would go"}
  ];

  return(
    <Carousel autoplay style={{backgroundColor: '#364d79', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '900px'}}>
      {panelInfo.map(item =>
        <>
          <img style={{width: 'auto', height: '800px'}} src={item.image}></img>
          <div>{item.description}</div>
        </>
      )}
    </Carousel>
  )
}


export default Tutorial;