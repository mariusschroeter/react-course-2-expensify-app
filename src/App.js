import React, { Component } from 'react';
import AppRouter from "./routers/AppRouter"
import './styles/App.css';
import { Provider } from "react-redux"
import configureStore from "./store/configureStore"
import { addExpense } from "./actions/expenses"
// import { setTextFilter } from "./actions/filters"


const store = configureStore()

store.dispatch(addExpense({ description: "Water bill", amount: 30, createdAt: 100 }))
store.dispatch(addExpense({ description: "Stone bill", amount: 10, createdAt: 300 }))
store.dispatch(addExpense({ description: "Heating bill", amount: 20, createdAt: 200 }))

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
