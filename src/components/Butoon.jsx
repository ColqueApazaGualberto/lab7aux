import { useState } from "react";

export const Button = props => {

    const { text } = props;
    const[count, setCount] = useState(0);

    function handlerButton() {
        const randomValue = Math.floor(Math.random() * 100) + 1;
        alert(randomValue);
        setCount (count + 5);
    }

    return (
        <button onClick = { handlerButton }>
            { text }{ count }
        </button>
    );
}