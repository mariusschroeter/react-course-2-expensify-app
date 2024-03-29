import React from 'react'
import ExpenseForm from './ExpenseForm';
import {connect} from "react-redux"
import { addExpense } from '../actions/expenses';

const AddExpenses = (props) => {
  return (
    <div>
      <h2>Add Expense</h2>
      <ExpenseForm 
        onSubmit={(expense) => {
          props.dispatch(addExpense(expense))
          props.history.push("/")
        }}
      />
    </div>
  )
}

export default connect()(AddExpenses)


