import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddForm from './components/AddForm';
import ListRow from './components/ListRow';

function App() {

  const [addTodoText, setAddTodoText] = useState('');
  const [todoList, setTodoList] = useState(localStorage.getItem("todolist")?JSON.parse(localStorage.getItem("todolist")):[]);

 

  return (
    <div className="App">
      
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-3">ToDo List</h1>
        </div>

        <div className="row">

          <div className="col-md-4 bg-light">
            <AddForm addTodoText={addTodoText} setAddTodoText={setAddTodoText} todoList={todoList} setTodoList={setTodoList} />
          </div>

          <div className="col-md-8">

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col-md-1"></th>
                <th scope="col-md-auto">What todo</th>
                <th scope="col-md-1"></th>
              </tr>
            </thead>
            <tbody>
              
              {
                todoList.map((todo,i) => 
                  <ListRow key={i} index={i} todo={todo} setTodoList={setTodoList} todoList={todoList}  />
                )
              }

            </tbody>
          </table>

          </div>

        </div>


      </div>
    </div>
  );
}

export default App;
