import React from 'react';
import {Route, Switch} from "react-router-dom"
import Recovred from './components/Recovred';
import Covid from './components/Covid';
import Actice from  './components/Actice';
import Confirmed from './components/Confirmed';
import Deaths from './components/Deaths';

const App = () => {


  return (

    <Switch>


      <Route path="/" exact component={Covid}/>
      <Route path="/recovred" exact component={Recovred}/>
      <Route path="/confirmed" exact component={Confirmed}/>
      <Route path="/actice" exact component={Actice}/>
      <Route path="/deaths" exact component={Deaths}/>
   
    
    </Switch>
       
       

  );
}
export default App;
