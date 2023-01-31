import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';
import {orginals,action,comedy,documentry} from './urls'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPost title='Netflix Orginals' url={orginals}/>
     <RowPost title='Action' isSmall url={action}/>
     <RowPost title='Comedy' isSmall url={comedy}/>
     <RowPost title='Documentry' isSmall url={documentry}/>
     
    </div>
  );
}

export default App;
