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
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    { id: 5, name: 'AAA', completed: 'false', prioriry: 'Medium' }
                ]
            }
        default: return state;
    }
}

export default rootReducer;