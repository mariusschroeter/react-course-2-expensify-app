const expensesReducerDefaultState = []

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense]
        case "REMOVE_EXPENSE":
            return state.filter((el) => el.id !== action.id)
        case "EDIT_EXPENSE":
            return state.map((el) => {
                if (el.id === action.id) {
                    return { ...el, ...action.updates }
                } else {
                    return el;
                }
            })
        default:
            return state;
    }
}

