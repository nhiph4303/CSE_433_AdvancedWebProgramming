import { useReducer, useState } from 'react';
import './Todo.css';
import { todoReducer, initialState } from './reducer';

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        if (inputValue.trim() === '') {
            alert("You must write something!");
            return;
        }
        dispatch({ type: 'ADD_TODO', payload: inputValue });
        setInputValue('');
    };

    return (
        <div className="todo-container">
            <div id="myDIV" className="header">
                <h2>My To Do List</h2>
                <input
                    type="text"
                    id="myInput"
                    placeholder="Title..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleAdd();
                    }}
                />
                <span onClick={handleAdd} className="addBtn">
                    Add
                </span>
            </div>

            <ul id="myUL">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className={todo.checked ? 'checked' : ''}
                        onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                    >
                        {todo.text}
                        <span
                            className="close"
                            onClick={(e) => {
                                e.stopPropagation();
                                dispatch({ type: 'DELETE_TODO', payload: todo.id });
                            }}
                        >
                            {'\u00D7'}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
