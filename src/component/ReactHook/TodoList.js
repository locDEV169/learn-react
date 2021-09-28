// lab2: cho danh sách  TodoList
//1. render Todos với dữ liệu truyền từ component cha
//2. khi click remove thì xóa item
// phân tích:
//App component sẽ có:
// props: n/a
// state: todoList
// handler: handleTodoClick - remove todo ra khỏi todoList;
// Render: <TodoList todos={todoList} onTodoClick={handleTodoClick} />
//TodoClick sẽ có:
//props: +/ todos: danh sách todos
//       +/ onTodoList: function sẽ đc gọi khi 1 Todo đc click
//state: n/a
//render: ul > li > todo.title
//handle todo onClick: gọi function props.onTodoClick()
import React,{useState} from "react";

function TodoList(){
    const [todoList, setTodoList] = useState("love",'easy','FE');

    function removeTodo(index) {
        const newTodoList = [...todoList];
        newTodoList.splice(index,1)
        setTodoList(newTodoList);
    }

    return(
        <ul className="todo-list">
            {todoList.map((todo,index) =>(
                <li key={todo.id} onClick={() => removeTodo(index)} >
                    {todo.title}
                </li>
            ))}
        </ul>
    )
}
export default TodoList