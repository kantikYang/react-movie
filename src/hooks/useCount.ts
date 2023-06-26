import { useCallback, useState } from "react";

export function useCount (initValue: number = 0) {
    let [count, setCount] = useState(initValue);

    const decrement = useCallback(() => {
        setCount((curCount) => curCount - 1)
    },[]);
    const increment = useCallback(() => {
        setCount((curCount) => curCount + 1)
    },[]);

    return {count, decrement, increment };
}