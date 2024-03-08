import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState(0);

    const handleUseAttempt = () => {
        setAttemptsLeft(attemptsLeft > 0 ? attemptsLeft - 1 : 0);
    };

    const handleGainAttempts = () => {
        setAttemptsLeft(attemptsLeft + requestedAttempts);
    };

    const handleRequestedChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = parseInt(event.target.value, 10);
        if (!isNaN(newValue)) {
            setRequestedAttempts(newValue);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attemptsLeft}</p>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleRequestedChange}
            />
            <button onClick={handleUseAttempt} disabled={attemptsLeft === 0}>
                Use
            </button>
            <button onClick={handleGainAttempts}>Gain</button>
        </div>
    );
}
