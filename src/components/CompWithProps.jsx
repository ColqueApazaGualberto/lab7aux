import { useState } from "react";

const CompWithProps = () => {
    const [inputText, setInputText] = useState("");

    const handleChange = (event) => {
        setInputText(event.target.value);
    };

    return (
        <div>

            <input
                type="text"
                placeholder="Introdusca su usuario"
                value={inputText} 
                onChange={handleChange}
            />
            <p>{inputText}</p>
        </div>
    );
};

export default CompWithProps;
