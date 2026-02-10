import { useReducer, useRef, useState } from "react";
import "./ToDoList.css";

type Task = {
    id: number;
    name: string;
    completed: boolean;
    member?: string;
    dueDate?: string;
}

type Action =
    | { type: "Add"; id: number; name: string; member?: string; dueDate?: string }
    | { type: "Toggle"; id: number }
    | { type: "Remove"; id: number }

function reducer(state: Task[], action: Action): Task[] {
    switch (action.type) {
        case "Add":
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    completed: false,
                    member: 'member' in action ? action.member : undefined,
                    dueDate: 'dueDate' in action ? action.dueDate : undefined,
                },
            ];
        case "Toggle":
            return state.map((item) =>
                item.id === action.id ? { ...item, completed: !item.completed } : item,
            );
        case "Remove":
            return state.filter((item) => item.id !== action.id);
        default:
            return state;
    }
}

export default function ToDoList() {
    const initialTasks: Task[] = [
        { id: 1, name: 'Hit the gym', completed: false, member: 'Alice', dueDate: '2026-02-01' },
        { id: 2, name: 'Pay bills', completed: true, member: 'Bob', dueDate: '2026-01-30' },
        { id: 3, name: 'Meet George', completed: false, member: 'Carol', dueDate: '2026-02-05' },
        { id: 4, name: 'Buy eggs', completed: false, member: 'Dave', dueDate: '2026-02-02' },
        { id: 5, name: 'Read a book', completed: false, member: 'Eve', dueDate: '2026-02-10' },
        { id: 6, name: 'Organize office', completed: false, member: 'Frank', dueDate: '2026-02-03' },
    ];

    const [list, dispatch] = useReducer(reducer, initialTasks);
    const [task, setTask] = useState("");
    const [member, setMember] = useState("");
    const [dueDate, setDueDate] = useState("");


    const count = useRef(1);

    function handleTextBoxChangeEvent(e: React.ChangeEvent<HTMLInputElement>) {
        setTask(e.target.value);
    }

    function handleAddAction() {
        const name = task.trim();
        if (!name) return;
        dispatch({
            type: "Add",
            id: count.current++,
            name,
            member: member.trim() || undefined,
            dueDate: dueDate || undefined,
        });
        setTask("");
        setMember("");
        setDueDate("");
    }

    function handleToggleAction(id: number) {
        dispatch({
            type: "Toggle",
            id: id
        });
    }

    function handleRemoveAction(id: number) {
        dispatch({
            type: "Remove",
            id: id
        });
    }

    return (
        <>
            <div id="myDIV" className="header">
                <h2>My To Do List</h2>
                <div className="controls">
                    <input
                        type="text"
                        id="myInput"
                        placeholder="Title..."
                        onChange={handleTextBoxChangeEvent}
                        value={task}
                        className="titleInput"
                    />
                    <input
                        type="text"
                        id="memberInput"
                        placeholder="Member..."
                        onChange={(e) => setMember(e.target.value)}
                        value={member}
                        className="memberInput"
                    />
                    <input
                        type="date"
                        id="dueDateInput"
                        onChange={(e) => setDueDate(e.target.value)}
                        value={dueDate}
                        className="dateInput"
                    />
                    <span className="addBtn" onClick={handleAddAction}>
                        Add
                    </span>
                </div>
            </div>

            <ul id="myUL">
                {list.map((item) => (
                    <li
                        key={item.id}
                        className={item.completed === true ? 'checked' : ''}
                        onClick={() => handleToggleAction(item.id)}
                    >
                        <div className="itemName">{item.name}</div>
                        <div className="itemMeta">
                            {item.member ? item.member : ''}
                            {item.dueDate ? ` • ${item.dueDate}` : ''}
                        </div>
                        <span
                            className="close"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleRemoveAction(item.id);
                            }}
                        >
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </>

    );
}