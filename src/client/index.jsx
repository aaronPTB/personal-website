import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './app/main.jsx';
import Home from './app/home.jsx';
import Projects from './app/projects.jsx';

class App extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Home}/>
          <Route path="projects" component={Projects}/>
        </Route>
      </Router>
    )
  }
}

render(<App/>, document.getElementById('app'));
