import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Things from './demo/Things';
import NoMatch from './components/NoMatch';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Answer from './components/Answer';

function App() {
  return (
    <div>
      <>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cards" component={Cards} />
            <Route exact path="/answer" component={Answer} />
            <Route component={NoMatch} />
          </Switch>
      </>
    </div>
  );
}

export default App;
