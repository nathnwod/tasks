import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("Your Name"); // Set initial name explicitly
    const [isStudent, setIsStudent] = useState(true);

    // Handle change to edit mode using a checkbox styled or behaving as a switch
    const handleEditModeChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setIsEditMode(event.target.checked);

    // Handle name change
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setName(event.target.value);

    // Toggle student status
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
