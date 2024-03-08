/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

const ColorContext = React.createContext({
    colorIndex: DEFAULT_COLOR_INDEX,
    setColorIndex: (index: number) => {
        return;
    }
});

function ChangeColor(): JSX.Element {
    const { colorIndex, setColorIndex } = useContext(ColorContext);
    return (
        <Button onClick={() => setColorIndex((1 + colorIndex) % COLORS.length)}>
            Next Color
        </Button>
    );
}

function ColorPreview(): JSX.Element {
    const { colorIndex } = useContext(ColorContext);
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    return (
        <ColorContext.Provider value={{ colorIndex, setColorIndex }}>
            <div>
                <h3>Colored Box</h3>
                <span>The current color is: {COLORS[colorIndex]}</span>
                <div>
                    <ChangeColor></ChangeColor>
                    <ColorPreview></ColorPreview>
                </div>
            </div>
        </ColorContext.Provider>
    );
}
