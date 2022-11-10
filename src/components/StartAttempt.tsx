import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [progress, setProgress] = useState<boolean>(false);
    const [attemps, setAttemps] = useState<number>(4);
    function start(): void {
        setProgress(true);
        setAttemps(attemps - 1);
    }
    function stop(): void {
        setProgress(false);
    }
    function mulligan(): void {
        setAttemps(attemps + 1);
    }
    return (
        <div>
            <Button onClick={start} disabled={progress || attemps === 0}>
                Start Quiz
            </Button>
            {}
            <Button onClick={stop} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={progress}>
                Mulligan
            </Button>
            {attemps}
        </div>
    );
}
