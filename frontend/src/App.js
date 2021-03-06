import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import NoMatch from './components/NoMatch'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: 'backend-data'
    }
  }

  // componentDidMount() {
  //   const url = `${process.env.REACT_APP_BACKEND}/categories`;
  //   console.log('fetching from url', url);
  //   fetch(url, { headers: { 'Authorization': 'whatever-you-want' },
  //                credentials: 'include' } )
  //     .then( (res) => { return(res.text()) })
  //     .then((data) => {
  //       this.setState({backend:data});
  //     });
  // }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
          </p>
            <p>
              Talking to the backend yields these categories: <br />
              {this.state.backend}
            </p>
          </div>
        )} />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default App;
