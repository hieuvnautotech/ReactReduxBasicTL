const initState = {
    
    todoList: [
        {id:1, name: 'AAA', completed: 'false', prioriry: 'Medium'},
        {id:2, name: 'bbb', completed: 'false', prioriry: 'High'},
        {id:3, name: 'ccc', completed: 'false', prioriry: 'Low'},
    ]
}

const todoListReducer = (state = initState, action) => {
    // console.log({state,action});
    switch (action.type) {
        case 'todoList/addTodo':
            return [...state.todoList,
                    action.payload]
            

            
        default: return state;
    }
}

export default todoListReducer;