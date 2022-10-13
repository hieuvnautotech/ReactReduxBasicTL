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

export const toggleTodoStatus = (todoId) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: todoId,
  };
};

export const searchFilterChange = (text) => {
    return{
        type: 'filters/searchFilterChange',
        payload: text
    }
}

export const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};

export const priorityFilterChange = (priorities) => {
  return {
    type: "filters/prioritiesFilterChange",
    payload: priorities,
  };
};
//action creator

