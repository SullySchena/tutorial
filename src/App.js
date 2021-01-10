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


const App = () => {
  
  
  const images =  [ 
    {image: one, description: }, 
    two, 
    three, 
    four, 
    five, 
    six,
    seven, 
    eight, 
    nine, 
    ten, 
    eleven];

  return(
  <Carousel autoplay style={{backgroundColor: '#364d79', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '900px'}}>
    {images.map(image =>
      <img style={{width: 'auto', height: '800px', }} src={image}></img>
    )}
  </Carousel>
  )
}


export default App;
