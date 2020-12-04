const ADD_TODO = "ADD_TODO"
const TOGGLE_TODO = "TOGGLE_TODO";
const Remove_TODO = "Remove_TODO";

 const initialstate= {
     alltodolist:[{content: "demo1", checked: false, id: 1}],
   
     }

 export default function todoreducer(state=initialstate,action){
     switch(action.type){
         case ADD_TODO: {
             const {id, content } = action.payload;
           return {
               ...state , alltodolist:[...state.alltodolist, {content, checked:false, id}] 
           }

         }
         case TOGGLE_TODO: {
            const {id, } = action.payload;
          return {
              ...state , alltodolist:[...state.alltodolist.map(todo=>todo.id===id?{...todo,checked:!todo.checked}:todo)] 
          }

        }
        case Remove_TODO: {
            const {id, } = action.payload;
          return {
              ...state , alltodolist:[...state.alltodolist.filter(todo=>todo.id!==id)] 
          }

        }
        default: {
            return state;
          }
     }
 }