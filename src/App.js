import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <h2>Hi! My name's Liem!</h2>;
}

function About() {
  return <p>I was born and raised in Fairfield, CA, and I'm currently a junior studying computer 
    science at UC Berkeley. Be sure to check out some of my hobbies through the link above, and 
    feel free to <a href='mailto: liem.nguyen@berkeley.edu'>send me</a> music recommendations!</p>
}

function Interests() {
  return (
    <ul>
      <li>ML/AI</li>
      <li>cognition</li>
      <li>music of all kinds</li>
      <li>film</li>
      <li>Liverpool F.C.</li>
      <li>tennis</li>
      <li>puppers</li>
    </ul>
  );
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/interests/">Interests</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/interests/" component={Interests} />
      </div>
    </Router>
  );
}

export default AppRouter;
