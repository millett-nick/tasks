import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">UM COS420 Nickolas Milllett</header>
            <p>Hello</p>
            My list:
            <ul>
                <li>fish</li>
                <li>dog</li>
                <li>cat</li>
            </ul>
            <img src=".../Images/fishman.png" alt="is fish" />
            <Button onClick={() => console.log("Hello World")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
