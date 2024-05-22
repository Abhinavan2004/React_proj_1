import React, { Children } from 'react';
import Reactdom from 'react-dom';
import './index.css';
// const title = 'your name' ;

function Yipee() {
  return (
    <div className='website'> 
    <div>
      <Panel />
    </div>    
    
    <div className='listss'>
   <Book  title='Garden of words'  src='garden of words.jpg' />
   <Book  title='Weathering with you' src='weathering.jpeg' /> 
{/*      
   <p>he he e  he eheeh </p>
    </Book> */}
   <Book  title='I want to eat your pancreas' src='pancreas.jpeg'/>
   <Book  title='Your Name' src='a36be122b93a2fbe744d157eb50cbeb8.jpg'/>
   <Book  title='5cm per Second' src='5cm per sec.jpeg'/>
   <Book  title='Hotarabie na Morie' src='hotarubie.jpeg'/>
  </div>
  </div>
  )
}

const Book =(props) =>{
return (
    <div className='boxes'>
  <Imagine src={props.src} />
  {/* {props.children} */}
  <Title title={props.title} />
  <Author />

    </div>
  
)
}

const Panel =() =>{
  return (
    <div className='toppanel'>
    <header>
        <h1>Anime - Cart</h1>
        <h5></h5>
    </header>
    </div>
  )
}

const Imagine = (props) => {
  return <img src={props.src} alt ="error in loading image"></img>
}

const Title = (props) => {
  return <h3> {props.title} </h3>
}

const Author = () =>{
  return <h4>Makoto Shinkai</h4>
}
Reactdom.render(<Yipee /> , document.getElementById('root'));
