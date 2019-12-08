import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './composants/Header'
import List from './composants/ContactList'
import Todo from './composants/Todo'
import { Provider } from './context'
import AddContact from './composants/AddContact'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Error from './composants/Error'
import Blog from './composants/Blog';
import NvPost from './composants/NvPost'

class App extends Component {

  state = {
    nom : 'Rachel',
    nom2: 'Test'
  }

  render() {

  return (

    <Provider>
      <Router>
        <div>
          <Header />
          <Switch>
          <Route exact path="/todo" component={Todo} />
          <Route exact path="/contact" component={List} />
          <Route exact path="/addcontact" component={AddContact} />
          <Route exact path="/blog" component={NvPost} />
          <Route exact path="/" component={Blog} />
          <Route component={Error} />
          </Switch>
        </div>
      </Router>
    </Provider>

  );
}

}

export default App;
