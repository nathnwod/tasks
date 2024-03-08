import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const colors = [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Orange",
        "Purple",
        "Pink",
        "Gray"
    ];
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <div
                    key={color}
                    style={{ display: "inline-block", marginRight: "10px" }}
                >
                    <input
                        type="radio"
                        id={color}
                        name="color"
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => setSelectedColor(color)}
                    />
                    <label htmlFor={color}>{color}</label>
                </div>
            ))}
            <div
                data-testid="colored-box"
                style={{
                    marginTop: "20px",
                    padding: "10px",
                    backgroundColor: selectedColor,
                    color: "white"
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
