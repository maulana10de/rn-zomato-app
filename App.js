import React from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import {BackButton, NativeRouter, Route} from 'react-router-native';
import Header from './src/components/Header';
import PageDetail from './src/pages/PageDetail';
import Profile from './src/pages/Profile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NativeRouter>
        <Header />
        <BackButton>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/detail" component={PageDetail} />
          <Route path="/profile" component={Profile} />
        </BackButton>
      </NativeRouter>
    );
  }
}

export default App;
