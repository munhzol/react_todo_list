import React from 'react';

const ListRow = props => {

    const {index, todo, setTodoList,todoList} = props;

    const checkDone = (i) => {
        let arr = [...todoList];
        arr[i].done = arr[i].done===0?1:0;
        setTodoList(arr);
        localStorage.setItem("todolist", JSON.stringify(arr));
      }
    
      const deleteToDo = (i) => {
        let arr = [];
        for(let j = 0; j<todoList.length; j++){
          if(i!==j)
            arr = [...arr, todoList[j]];
        }
        setTodoList(arr)
        localStorage.setItem("todolist", JSON.stringify(arr));
      }

    return(
        <tr>
            <th scope="row">
                <div className="form-check">
                    <input type="checkbox" onChange={(e)=>checkDone(index) } className="form-check-input" checked={todo.done===1?'checked':''}  />
                </div>                  
            </th>
            <td className={todo.done===1?'todoDone':''} > {todo.todo} </td>
            <td><button type="button" onClick={(e) => deleteToDo(index) } className="btn btn-sm btn-outline-danger">Delete</button></td>
        </tr> 
        
    );
}

export default ListRow;