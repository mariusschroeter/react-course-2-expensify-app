import React, { Component } from 'react';
import AppRouter from "./routers/AppRouter"
import './styles/App.css';
import { Provider } from "react-redux"
import configureStore from "./store/configureStore"
const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>

    );
  }
}

export default App;
