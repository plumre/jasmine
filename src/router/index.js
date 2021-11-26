import VueRouter from "vue-router";
import Vue from "vue";

// const Home = () => import('views/home/Home')
const Appointment = () => import('views/activity/Appointment')
const Treatment = () => import('views/activity/Treatment')
const Bill = () => import('views/activity/Bill')
const Cash = () => import('views/activity/Cash')

const Patient = () => import('views/profile/human/Patient')
const Staff = () => import('views/profile/human/Staff')
const Consumable = () => import('views/profile/matter/Consumable')
const Equipment = () => import('views/profile/matter/Equipment')
const Report = () => import('views/profile/money/Report')


Vue.use(VueRouter)
const routes = [
    // {
    //     path: '',
    //     redirect: '/home'
    // },
    // {
    //     path: '/home',
    //     component: Home
    // },
    {
        path: '/workPanel',
        name: '工作台',
        component: {render: (e) => e("router-view")},
        children: [
            {
                path: 'appointment',
                component: Appointment,
                name: '预约'
            },
            {
                path: 'treatment',
                component: Treatment,
                name: '治疗'
            },
            {
                path: 'bill',
                component: Bill,
                name: '账单'
            },
            {
                path: 'cash',
                component: Cash,
                name: '收银'
            },
        ]
    },

    {
        path: '/humanM',
        name: '人员管理',
        component: {render: (e) => e("router-view")},
        children: [
            {
                path: 'patient',
                component: Patient,
                name: '患者'
            },
            {
                path: 'staff',
                component: Staff,
                name: '员工'
            },
        ]
    },

    {
        path: '/matterM',
        name: '物品管理',
        component: {render: (e) => e("router-view")},
        children: [
            {
                path: 'consumable',
                component: Consumable,
                name: '耗材'
            },
            {
                path: 'equipment',
                component: Equipment,
                name: '设备'
            },
        ]
    },

    {
        path: '/moneyM',
        name: '资金管理',
        component: {render: (e) => e("router-view")},
        children: [
            {
                path: 'report',
                component: Report,
                name: '报表'
            }
        ]
    },
    // {
    //     path: '/appointmentA',
    //     component: {render: (e) => e("router-view")},
    //     // component: Appointment,
    //     name: '预约A',
    //     children: [
    //         {
    //             path: 'appointmentB',
    //             component: Report,
    //             name: '报表'
    //         }
    //     ]
    // },


]

const router = new VueRouter({
    mode: 'history',
    routes

})
export default router