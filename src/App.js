import './App.css';
import TodoTemplate from './component/TodoTemplate'
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';
import TodoFilter from './component/TodoFilter';
function App() {
  
  return (
    <div >
    <TodoTemplate>
        <TodoInsert />
        <TodoList   />
        <TodoFilter />       
      </TodoTemplate>
    </div>
  );
}

export default App;
