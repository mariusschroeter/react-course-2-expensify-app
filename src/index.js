import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import {AuthInfo} from './playground/Redux';
// import configureStore from "./store/configureStore"
// import { addExpense } from "./actions/expenses"
// import { setTextFilter } from "./actions/filters"
// import getVisibleExpenses from "./selectors/expenses"

// const store = configureStore()

// store.subscribe(() => {
//     const state = store.getState()
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//     console.log(visibleExpenses)
// })

// store.dispatch(addExpense({ description: "Water bill", amount: 100, createdAt: 500 }))
// store.dispatch(addExpense({ description: "Gas bill", amount: 300, createdAt: 100 }))
// store.dispatch(setTextFilter("gas"))

ReactDOM.render(<App />, document.getElementById('root'));

