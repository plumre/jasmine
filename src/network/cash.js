import {request} from "./request";

export function listCash() {
    request({
        url: '/cash/listCash',
    })
}

export function saveCash() {
    request({
        url: '/cash/saveCash',
    })
}