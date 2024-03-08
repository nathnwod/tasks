import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const handleEditModeChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setIsEditMode(event.target.checked);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setName(event.target.value);

    const handleStudentStatusChange = () => setIsStudent(!isStudent);

    return (
        <div>
            <h3>Edit Mode</h3>
            <label className="form-switch">
                <input
                    type="checkbox"
                    checked={isEditMode}
                    onChange={handleEditModeChange}
                />{" "}
                Edit Mode
            </label>
            {isEditMode ? (
                <>
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Enter name"
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={handleStudentStatusChange}
                        />{" "}
                        Student
                    </label>
                </>
            ) : (
                <p>{`${name} is ${isStudent ? "" : "not "}a student.`}</p>
            )}
        </div>
    );
}
