import './App.css';
import React, { useState } from "react";
import PlayerTable from './components/PlayerTable/PlayerTable';
import ChampTable from './components/ChampTable/ChampTable';
import ChampLevel from './components/ChampLevel/ChampLevel';

function App() {
  const [schwelleKE1] = useState('13000');
  const [schwelleKE2] = useState('13000');
  const [schwelleKE3] = useState('13000');



  return (
    <div className="App">      
      <ChampTable ke="1"/>       
      <PlayerTable ke="1" schwelle={schwelleKE1}/>
      <br/>
      <ChampTable ke="2"/>
      <PlayerTable ke="2" schwelle={schwelleKE2}/>
      <br/>
      <ChampTable ke="3"/>
      <PlayerTable ke="3" schwelle={schwelleKE3}/> 
      <ChampLevel/>
      <div id="log1"><div>KE1</div></div>
      <div id="log2"><div>KE2</div></div>
      <div id="log3"><div>KE3</div></div> 
    </div>
  );
}

export default App;
