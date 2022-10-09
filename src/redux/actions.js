//viết kiểu này thì ko dùng chung được
// export const addTodoAction ={
//     type:'todoList/addTodo',
//     payload:{
//         id:5,
//         name:'awd',
//         completed:false,
//         priority:'Medium',
//     }   
// }

//viết kiểu này thì dùng chung được
export const addTodo=(data) => {    
    return {
        type:'todoList/addTodo',
        payload:data
    }
}

export const searchFilterChange = (text) => {
    return{
        type: 'filters/searchFilterChange',
        payload: text
    }
}
//action creator