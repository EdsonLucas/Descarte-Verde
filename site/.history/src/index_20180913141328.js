import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import politicaDePrivacidade from './politicaDePrivacidade';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

const NoMatch = ({ location }) => (
  <Redirect to={{
    pathname: '/',
    state: { from: location }
  }} />
);

ReactDOM.render(
  (<Router>
     <div>
       <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/politica-de-privacidade" component={politicaDePrivacidade}/>
          <Route component={NoMatch} />
        </Switch>
    </div>
  </Router>
), document.getElementById('root'));

registerServiceWorker();