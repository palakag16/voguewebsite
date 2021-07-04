import React from 'react';
import { Route,Switch,Redirect} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import './style.css';
import './newstyle.css';
import Home from './finalcomponents/Home';
import Footer from './components/Footer';
import Content from './finalcomponents/Content';
import Intermediate from './finalcomponents/Intermediate';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Subscribe from './components/Subscribe';
import Togglemenu from './components/Togglemenu';
import { TiSocialInstagram } from 'react-icons/ti';






const App = ()=>{


 
return(
  <>

 <switch>
  <Route exact path="/"><Home/></Route>
  <Route exact path="/menu"><Togglemenu/></Route>
   <Route exact path="/subscribe"><Subscribe/></Route>
  <Route  exact path="/categories"><Intermediate/></Route>
  <Route  exact path="/content"><Content/></Route>
</switch> 


  
  </>
)};


export default App;
