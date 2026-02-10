import { useMemo } from "react";

type Prop = {
    onclick: () => void;
}

const React = useMemo(({ onclick }: Prop) => {
    return (<button type='button' onClick={onclick}>
        Reset
    </button>);
});

// export function Reset() {

// }