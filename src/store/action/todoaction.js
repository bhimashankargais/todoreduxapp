
const ADD_TODO = "ADD_TODO"
const TOGGLE_TODO = "TOGGLE_TODO";
const Remove_TODO = "Remove_TODO";
const SET_FILTER = 'SET_FILTER';

let nextid= 1;
export const addtodo=content=>({
    type: ADD_TODO,
    payload:{
        id: ++nextid,
        content

    }
})


export const onToggle=id=>({
    type: TOGGLE_TODO,
    payload:{
        id: id

    }
})


export const removeFromTodo=id=>({
    type: Remove_TODO,
    payload:{
        id: id

    }
})


export const filterTodo=filtertype=>({
    type: SET_FILTER,
    payload:{
        filtertype: filtertype

    }
})


