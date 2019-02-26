import React from 'react'
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

export default function ExpenseDashboard() {
  return (
    <div>
      <ExpenseListFilters></ExpenseListFilters>
      <ExpenseList></ExpenseList>
    </div>
  )
}
