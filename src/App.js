import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DemoCarousel from './Pages/carousel';



function App() {
  return (

    <div className="App">
  
      <Switch>
      <Route exact path='/' render={()=>(<DemoCarousel />)}  />
       
    
     </Switch>
    
    </div>
  );
}

export default App;
