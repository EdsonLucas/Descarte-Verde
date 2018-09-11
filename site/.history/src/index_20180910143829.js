import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

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
          <Route exact path="/" component={Home}/>
          <Route path="/sanremocard" component={SanremoCard}/>
          <Route path="/valeTransporte" component={valeTransporte}/>
          <Route path="/estudante" component={estudante}/>
          <Route path="/gratuidade" component={gratuidade}/>
          <Route path="/popular" component={popular}/>
          <Route path="/horarios" component={Horarios}/>
          <Route path="/contato" component={Contato}/>
          <Route path="/duvidasFrequentes" component={duvidasFrequentes}/>
          <Route path="/trabalheConosco" component={trabalheConosco}/>
          <Route path="/admin/login" component={Login} />
          <PrivateRoute path="/admin/messages" component={Private} />
          <Route component={NoMatch} />
        </Switch>
    </div>
  </Router>
), document.getElementById('root'));

