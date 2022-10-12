import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { reduceEachLeadingCommentRange } from "typescript";
import "./App.css";

function App(): JSX.Element {
    return (
        <>
            <div className="App">
                <h1>UM COS 420 Nickolas Milllett</h1>
                <header className="App-header">
                    UM COS420 Nickolas Milllett
                </header>
                <p>Hello World!</p>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "400px",
                                    height: "10px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                            First Column. My list:
                            <ul>
                                <li>fish</li>
                                <li>dog</li>
                                <li>cat</li>
                            </ul>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "400px",
                                    height: "10px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                            Second Column
                            <img src=".../Images/fishman.png" alt="is fish" />
                        </Col>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default App;
