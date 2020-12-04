import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem'
import {connect} from "react-redux" 
class TodoList extends React.Component {
   
      render() {
    
      return (
            <div className="TodoList">
              
                {this.props.alltodolist && this.props.alltodolist.length
        ? this.props.alltodolist.map((todo, index) => {
            return <TodoListItem key={`todo-${todo.id}`} displaydata={todo} />;
          }) :null }
            </div>
        )


    }
}
  
const mapStateToProps = state => {

    let  alltodolist  = state.todoreducer.alltodolist;
     const filtertype = state.filterreducer
      if(filtertype==='Completed'){
        alltodolist = alltodolist.filter(todo=>todo.checked!==false)
      }
      if(filtertype==='Uncompleted'){
        alltodolist = alltodolist.filter(todo=>todo.checked===false)
      }
        
        return { alltodolist };
  }
  
export default connect(mapStateToProps)(TodoList);
