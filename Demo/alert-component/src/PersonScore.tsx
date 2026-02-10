import { useCallback, useEffect, useReducer, useRef } from "react";
import { getPerson } from "./getPerson";

type State = {
    name: string | undefined;
    score: number | undefined;
    loading: boolean;
};

type Action =
    | { type: "init"; name: string }
    | { type: "add" }
    | { type: "subtract" }
    | { type: "reset" };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "init":
            return { name: action.name, score: 0, loading: false };
        case "add":
            return { ...state, score: (state.score ?? 0) + 1 };
        case "subtract":
            return { ...state, score: (state.score ?? 0) - 1 };
        case "reset":
            return { ...state, score: 0 };
        default:
            return state;
    }
}

function calculation() {
    console.log("Calculating...");
    setTimeout(() => {
        console.log("Calculation done.");
    }, 2000);
}

export function PersonScore() {
    const [{ name, score, loading }, dispatch] = useReducer(reducer, {
        name: undefined,
        score: undefined,
        loading: true,
    });

    // 1. Initialize the ref with null and the correct element type
    const buttonRef = useRef<HTMLButtonElement>(null);

    const resetHandeler = useCallback(() => {
        dispatch({ type: "reset" });
    }, []);

    useEffect(() => {
        getPerson().then((person) => {
            dispatch({ type: "init", name: person.name });
        });
    }, []);

    useEffect(() => {
        if (!loading) {
            // 2. Focus the button when loading finishes
            buttonRef.current?.focus();
        }
    }, [loading]);

    const expensiveCalculation = useRef(calculation());

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h3>
                {name}, {score}
            </h3>
            <p>Expensive Calculation Result: {expensiveCalculation.current}</p>
            {/* 3. Attach the ref to the button */}
            <button
                ref={buttonRef}
                type="button"
                onClick={() => dispatch({ type: "add" })}
            >
                Add
            </button>
            <button type="button" onClick={() => dispatch({ type: "subtract" })}>
                Subtract
            </button>
            <Reset onClick={resetHandeler} />
        </div>
    );
}