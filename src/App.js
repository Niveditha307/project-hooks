
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Header from "./components/Header"
import ProjectList  from './components/ProjectList';
import ProjectItemDetails from "./components/ProjectItemDetails"

import './App.css';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
       <Switch>
       <Route exact path = "/" component = {ProjectList}/>
       <Route exact path = "/blogs/:id" component = {ProjectItemDetails}/>
    
       </Switch>
    </div>
    </BrowserRouter>
  );

}

export default App;
