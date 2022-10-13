import { createSelector } from 'reselect';

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPrioritiesSelector,
  (todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
      if (status === 'All') {
        //.length nghĩa là check rỗng
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }

      return (
        todo.name.includes(searchText) &&
        (status === 'Completed' ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);





// import {createSelector} from 'reselect';

// export const searchTextSelector = (state) => state.filters.search;
// export const todoListSelector = (state) => state.todoList;
// export const todosRemainingSelector = createSelector(
//     todoListSelector, 
//     searchTextSelector, 
//     (todoList, searchText) => {
//     return todoList.filter((todo) => {
//         return todo.name.includes(searchText);
//     });
// });

// viết kiểu này thì ko hay bằng reselect giúp dùng chung
// export const todoListSelector = (state) => {
//     const searchText = searchTextSelector(state);

//     const todosRemaining = state.todoList.filter((todo)=> {
//         return todo.name.includes(state.filters.search)
//     })
//     return todosRemaining
// }
// //chưa có filter search thì trả hết: state.todoList;
// export const searchTextSelector = (state) => state.filters.search;