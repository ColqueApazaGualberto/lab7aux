import { useState } from "react";

export const Random = (props) => {
    const { text } = props;
    const [count, setCount] = useState(0);

    function handlerButton() {
        setCount(count + 5);
    }

    function resetCounter() {
        setCount(0);
    }

    return (
        <div>
            <button onClick={handlerButton}>{text} {count}</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    );
};
