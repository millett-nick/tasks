/* eslint-disable indent */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [value, setValue] = useState<string>("🎃");
    function byYear(): void {
        setValue(
            value === "🎃"
                ? "🦃"
                : value === "🦃"
                ? "🎁"
                : value === "🎁"
                ? "🎄"
                : value === "🎄"
                ? "💖"
                : "🎃"
        );
    }
    function byAlphabet(): void {
        setValue(
            value === "🎁"
                ? "🎃"
                : value === "🎃"
                ? "🦃"
                : value === "🦃"
                ? "🎄"
                : value === "🎄"
                ? "💖"
                : "🎁"
        );
    }

    return (
        <div>
            <Button onClick={byAlphabet}>Alphabet</Button>
            <Button onClick={byYear}>Year</Button>
            Holiday : {value}
        </div>
    );
}
