import './App.css';
import React, { useState,useEffect } from "react";
import PlayerTable from './components/PlayerTable/PlayerTable';
import ChampTable from './components/ChampTable/ChampTable';
import ChampLevel from './components/ChampLevel/ChampLevel';

function App() {
  const [schwelleKE1,setSchwelleKE1] = useState('8000');
  const [schwelleKE2,setSchwelleKE2] = useState('8000');



  return (
    <div className="App">      
      <ChampTable ke="1"/>       
      <PlayerTable ke="1" schwelle={schwelleKE1}/>
      <br/>
      <ChampTable ke="2"/>
      <PlayerTable ke="2" schwelle={schwelleKE2}/> 
      <ChampLevel/>
      <div id="log1"><div>KE1</div></div>
      <div id="log2"><div>KE2</div></div> 
    </div>
  );
}

export default App;
