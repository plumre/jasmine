import {request} from "./request";

export function listBills() {
    request({
        url: '/bill/listBills',
    })
}

export function saveBill() {
    request({
        url: '/bill/saveBill',
    })
}