const initState = {
    filters: {
        search: '',
        status: 'All',
        prioriry: []
    },
    todoList: [
        {id:1, name: 'AAA', completed: 'false', prioriry: 'Medium'},
        {id:2, name: 'bbb', completed: 'false', prioriry: 'High'},
        {id:3, name: 'ccc', completed: 'false', prioriry: 'Low'},
    ]
}

const rootReducer = (state = initState, action) => {
    console.log({state,action});
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    // { id: 5, name: 'AAA', completed: 'false', prioriry: 'Medium' }
                    action.payload
                ]
            }

            case 'filters/searchFilterChange':
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        // { id: 5, name: 'AAA', completed: 'false', prioriry: 'Medium' }
                        search: action.payload
                    }
                }
        default: return state;
    }
}

export default rootReducer;