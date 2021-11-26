import {request} from "./request";

export function listTreatments() {
    return request({
        url: '/treatment/listTreatments',
    })
}

export function saveTreatment() {
    return request({
        url: '/treatment/saveTreatment',
    })
}