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


export function dateFormat(date, format) {
    if (!date) {
        return
    }
    if (!format) {
        format = 'yyyy-MM-dd'
    }
    switch (typeof date) {

        case "number":
            date = new Date(date)
            break;
        case "string":
            date = new Date(date.replace(/-/, "/"))
            break;
    }

    if (!(date instanceof Date)) {
        return;
    }
    const dict = {
        "yyyy": date.getFullYear(),
        "M": date.getMonth() + 1,
        "d": date.getDate(),
        "H": date.getHours(),
        "m": date.getMinutes(),
        "s": date.getSeconds(),
        "MM": ("" + (date.getMonth() + 101)).substr(1),
        "dd": ("" + (date.getDate() + 100)).substr(1),
        "HH": ("" + (date.getHours() + 100)).substr(1),
        "mm": ("" + (date.getMinutes() + 100)).substr(1),
        "ss": ("" + (date.getSeconds() + 100)).substr(1),
    };
    return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function () {
        return dict[arguments[0]]
    })

}
