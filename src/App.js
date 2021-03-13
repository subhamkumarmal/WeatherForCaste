import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Nav from './Nav';
import Home from './components/Home';
import Weather from './components/Weather';


const App = () =>{
  return(
           <>
                <Nav />

                <Switch>                
                 <Route exact path="/" component={Home}/>
                 <Route exact path="/weather" component={Weather}/>
                </Switch>
           </>
        )
}

export default App;