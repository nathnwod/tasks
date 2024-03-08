import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);
    };

    return (
        <div>
            <h3>Check Answer</h3>
            <input type="text" value={answer} onChange={handleChange} />
            <div>{answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
