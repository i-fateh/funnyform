import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [backJauge, setBackJauge] = useState('');

  let moveEnvoi = document.getElementById('envoi');
  let motDePasse = document.getElementById('mdp');

  useEffect(() => {
    document.getElementById('jaugeTop').style.width = `${count*10}vw`
    document.getElementById('jaugeRight').style.height = `${count*10}vh`
    document.getElementById('jaugeBottom').style.width = `${count*10}vw`
    document.getElementById('jaugeLeft').style.height = `${count*10}vh`

    document.getElementById('alien').style.transform = `translateX(${count*300}px)`
    document.getElementById('mars').style.transform =  `translateY(${-count*16}px) translateX(${-count*16}px)`
    document.getElementById('saturne').style.transform =  `translateY(${count*16}px) translateX(${count*16}px)`
    document.getElementById('lune').style.transform = `translateY(${-count*27}px)`
    document.getElementById('vaisseau').style.transform = `translateY(${-count*110}px) rotate(-36deg)`
   }, [count])

   const handleChange = event => {
    // rentre dans la condition que c'est une lettre
    if(event.key !== "Backspace"){
      setCount(count+1);
      setBackJauge(event.target.value);

      if(count <=4) {
        moveEnvoi.style.opacity = 0;
        moveEnvoi.textContent ='...'
      } else if(count >=4 && count <=10){
        moveEnvoi.textContent ='More more...'
        moveEnvoi.style.opacity = 1
        moveEnvoi.style.transform =  `translateY(30px)`
      }
      else {
        moveEnvoi.style.opacity = 1
        moveEnvoi.textContent ='Submit OK'
        moveEnvoi.style.backgroundColor = '#C4E538'
        moveEnvoi.style.color = 'black'
      }
    } 
    // rentre dans la condition que c'est une suppression
    else if(event.key === "Backspace") {
      if(count <=0){
        setCount(0)
      } else {
        setCount(count-1);
        if(count <= 4 ){
          moveEnvoi.style.opacity = 0;
        }
      }
    }
  }


  return (

      <div id="AppJauge">
        <div id='jaugeTop' />
        <div id='jaugeRight' />
        <div id='jaugeBottom' />
        <div id='jaugeLeft' />
        <div id="saturne"></div>
        <div id="mars"></div>
        <div id="lune"></div>
        <div id="vaisseau"></div>
        <div id="alien"></div>

        <h1 id='title'>FUNNY FORM
          <span style={{color:'white', fontSize:".4em"}}> by @creazerty</span>
        </h1>

        <div id='formContainer'>
            <input type="email" />
            <input 
            id='mdp'
            onKeyDown={handleChange}
            type="password" />
            <span id='envoi'></span>
        </div>
      </div>
);
}

export default App;