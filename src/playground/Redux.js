import React from 'react'

const Info = (props) => {
    return (
        <div>
            <h1>Info : {props.info}</h1>
        </div>
    )
}

export const authRequired = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? (<WrappedComponent {...props}></WrappedComponent>) : <p>User isnt Authenticated</p>}
        </div>
    )
}

export const AuthInfo = authRequired(Info)

// store.subscribe(() => {
//     const state = store.getState()
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//     console.log(visibleExpenses)
// })

// const expenseOne = store.dispatch(addExpense({ description: "rent", amount: 500, createdAt: -1000 }))
// const expenseTwo = store.dispatch(addExpense({ description: "coffee", amount: 200, createdAt: 1000 }))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter("rent"))

// store.dispatch(sortByAmount())

// store.dispatch(sortByDate(0))
// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(999))

