import React from 'react';

const AddForm = props => {

    const {addTodoText, setAddTodoText, setTodoList,todoList} = props;

    const addToDo = () => {
        let arr = [{done:0, todo: addTodoText}, ...todoList];
        setTodoList(arr);
        setAddTodoText('');
        localStorage.setItem("todolist", JSON.stringify(arr));
      }

    return(
        <form>
            <div className="p-3 mb-2 bg-secondary text-white">Add new one</div>
            <div className="form-group">
              <textarea onChange={(e)=>setAddTodoText(e.target.value)} className="form-control" name="" id="addNew" rows="5" value={addTodoText} ></textarea>
            </div>
            <button type="button" onClick={addToDo} className="btn btn-primary btn-block">Add</button>
        </form>
    );
}

export default AddForm;