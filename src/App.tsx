import React from "react";
import "./App.css";
import PinheadLarry from "./assets/PinheadLarry.webp";
import { Button, Container, Row, Col } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <p>Hello World</p>
            </header>
            n<h1>Hello World</h1>
            <img
                src={PinheadLarry}
                alt="A picture of Dirty Dan from SpongeBob!"
                style={{ width: "300px", height: "228px" }}
            />
            <ul>
                <li>SpongeBob</li>
                <li>Patrick</li>
                <li>Mr. Krabs</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        >
                            First column.
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        >
                            Second column.
                        </div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Nathan Wood</p>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
