import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    UM COS420 Nickolas Milllett
                </header>
                <p>Hello</p>
                <Container>
                    <Row>
                        <Col>
                            First Column. My list:
                            <ul>
                                <li>fish</li>
                                <li>dog</li>
                                <li>cat</li>
                            </ul>
                        </Col>
                        <Col>
                            Second Column
                            <img src=".../Images/fishman.png" alt="is fish" />
                        </Col>
                        <Button onClick={() => console.log("Hello World")}>
                            Log Hello World
                        </Button>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default App;
