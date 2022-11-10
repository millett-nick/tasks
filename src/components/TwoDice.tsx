import { removeAllListeners } from "process";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [d1, setd1] = useState<number>(d6);
    const [d2, setd2] = useState<number>(d6);

    return (
        <div>
            <span>
                <Button onClick={() => setd1(d6)} data-testid="left-die">
                    Roll Left
                </Button>
            </span>
            <span>{d1}</span>
            <span>
                <Button onClick={() => setd2(d6)} data-testid="right-die">
                    Roll Right
                </Button>
            </span>
            <span>{d2}</span>
        </div>
    );
}
