import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Projects from './Components/Projects';
import Home from './Components/Home.jsx';

function App() {
  return (
    <div className="App">
        <Navigation/>
      <Switch>
        <Route exact path='/' render={() => <Home/>}/>
        <Route exact path='/projects' render={() => <Projects/>}/>
      </Switch>
    </div>
  );
}

export default App;