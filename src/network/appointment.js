import {request} from "./request";

export function listAppointments() {
    request({
        url: '/appointment/listAppointments',
    })
}

export function saveAppointment() {
    request({
        url: '/appointment/saveAppointment',
    })
}