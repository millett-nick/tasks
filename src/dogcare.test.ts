import {
    passwdlength,
    passwdcontainlet,
    passwdcontainnum,
    passwdcontainspec,
    passwdnotstartwithnum,
    passwdnotstartwithspec
} from "./dogcare";

describe("Testing the dogcare tests", () => {
    test("testing length", () => {
        expect(passwdlength("")).toBe(false);
        expect(passwdlength("fsdfgasdfgasdf&1")).toBe(true);
    });
    test("contains number", () => {
        expect(passwdcontainnum("")).toBe(false);
        expect(passwdcontainnum("fsdfgasdfgasdf&1")).toBe(true);
    });
    test("contains letter", () => {
        expect(passwdcontainlet("")).toBe(false);
        expect(passwdcontainlet("fsdfgasdfgasdf&1")).toBe(true);
    });
    test("contains special character", () => {
        expect(passwdcontainspec("")).toBe(false);
        expect(passwdcontainspec("fsdfgasdfgasdf&1")).toBe(true);
    });
    test("does not start with number", () => {
        expect(passwdnotstartwithnum("1")).toBe(false);
        expect(passwdnotstartwithnum("fsdfgasdfgasdf&1")).toBe(true);
    });
    test("does not start with special characters", () => {
        expect(passwdnotstartwithspec("&sdfgasdfgasdf&1")).toBe(false);
        expect(passwdnotstartwithspec("fsdfgasdfgasdf&1")).toBe(true);
    });
});
