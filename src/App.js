import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleImage from "./pages/SingleImage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/:id">
            <SingleImage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
