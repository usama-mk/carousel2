import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DemoCarousel from './Pages/carousel';
import Login from './Pages/Login';


function App() {
  return (

    <div className="App">
       <DemoCarousel/>
      <Switch>
      {/* <Route exact path='/carousel2/' render={()=>(<DemoCarousel adminCheckP={false} />)}  /> */}
     <Route exact path='/carousel2/admin' component={Login}  />
     <Route exact path='/carousel2/admin/carousel2' component={DemoCarousel}/>
     
     </Switch>
    
    </div>
  );
}

export default App;
