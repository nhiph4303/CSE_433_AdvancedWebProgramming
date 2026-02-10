import type { Action, Todo } from './types';

export const initialState: Todo[] = [
    { id: 1, text: 'Hit the gym', checked: false },
    { id: 2, text: 'Pay bills', checked: true },
    { id: 3, text: 'Meet George', checked: false },
    { id: 4, text: 'Buy eggs', checked: false },
    { id: 5, text: 'Read a book', checked: false },
    { id: 6, text: 'Organize office', checked: false },
];

export function todoReducer(state: Todo[], action: Action): Todo[] {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                { id: Date.now(), text: action.payload, checked: false }
            ];
        case 'TOGGLE_TODO':
            return state.map((todo) =>
                todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo
            );
        case 'DELETE_TODO':
            return state.filter((todo) => todo.id !== action.payload);
        default:
            return state;
    }
}
