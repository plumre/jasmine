import {appName} from "./const";
import {isBlank} from "./utils";

export function mix1(val) {
    if (isBlank(val)) {
        throw new Error('illegal param for mix1')
    }
    return appName + val
}