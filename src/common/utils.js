export function fibonacci(n) {
    // 1 1 2 3 5 8 13 21
    if (n <= 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}


export function isBlank(val) {
    if (val === null || val === undefined || val.length < 1) {
        return true;
    }
}


export function isNotBlank(val) {
    return !isBlank(val)
}
