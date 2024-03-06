import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidays = [
    { name: "Christmas", emoji: "🎄", month: 12 },
    { name: "Easter", emoji: "🐇", month: 4 },
    { name: "Halloween", emoji: "🎃", month: 10 },
    { name: "Valentines Day", emoji: "💖", month: 2 },
    { name: "My Birthday", emoji: "🎂", month: 9 }
];

export function CycleHoliday(): JSX.Element {
    const [holidayIndex, setHolidayIndex] = useState(0);

    const sortedAlphabetically = [...holidays].sort((a, b) =>
        a.name.localeCompare(b.name)
    );
    const sortedByYear = [...holidays].sort((a, b) => a.month - b.month);

    const byAlphabet = () => {
        const currentIndex = sortedAlphabetically.findIndex(
            (holiday) => holiday.name === holidays[holidayIndex].name
        );
        const nextIndex = (currentIndex + 1) % holidays.length;
        const nextHoliday = sortedAlphabetically[nextIndex];
        setHolidayIndex(
            holidays.findIndex((holiday) => holiday.name === nextHoliday.name)
        );
    };

    const byYear = () => {
        const currentIndex = sortedByYear.findIndex(
            (holiday) => holiday.name === holidays[holidayIndex].name
        );
        const nextIndex = (currentIndex + 1) % holidays.length;
        const nextHoliday = sortedByYear[nextIndex];
        setHolidayIndex(
            holidays.findIndex((holiday) => holiday.name === nextHoliday.name)
        );
    };

    return (
        <div>
            <div>
                Holiday: {holidays[holidayIndex].emoji}{" "}
                {holidays[holidayIndex].name}
            </div>
            <Button onClick={byAlphabet}>Advance by Alphabet</Button>
            <Button onClick={byYear}>Advance by Year</Button>
        </div>
    );
}
