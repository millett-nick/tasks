/**
 * Consumes password and returns boolean on if it passes criteria
 */
export function passwdlength(pass: string): boolean {
    let value = false;
    pass.length >= 16 ? (value = true) : (value = false);
    return value;
}
export function passwdcontainnum(pass: string): boolean {
    let value = false;
    /\d+/.test(pass) === true ? (value = true) : (value = false);
    return value;
}
export function passwdcontainlet(pass: string): boolean {
    let value = false;
    /[a-zA-Z]/.test(pass) === true ? (value = true) : (value = false);
    return value;
}
export function passwdcontainspec(pass: string): boolean {
    let value = false;
    /[!@#$%^&]/.test(pass) === true ? (value = true) : (value = false);
    return value;
}
export function passwdnotstartwithnum(pass: string): boolean {
    let value = false;
    /^\d/.test(pass) === true ? (value = false) : (value = true);
    return value;
}
export function passwdnotstartwithspec(pass: string): boolean {
    let value = false;
    /[!@#$%^&]/.test(pass[0]) === true ? (value = false) : (value = true);
    return value;
}
