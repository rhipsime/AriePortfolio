import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'; // Import your Home component here
import Projects from './Projects'; // Import your Projects component here
import Contact from './Contact'; // Import your Contact component here

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          {/* Define other routes here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
