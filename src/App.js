import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Box from './components/Box';
import { useState } from 'react'

function App() {


  const [header, setHeader] = useState("PRESS ANY KEY TO START");
 

  return (

    <div >
      <Header
      text={header} />
      <div>
        <Box />

      </div>
    </div>
   
  );
}

export default App;
