import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/main/MainView.vue'
import Triangle from '../views/triangle/Triangle.vue'
import Calendar from '../views/calendar/Calendar.vue'
import test from '../views/test.vue'
import test2 from '../views/test2.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: MainView,
            children: [
                {
                    path: '/triangle',
                    name: 'triangle',
                    component: Triangle,
                },
                {
                    path: '/calendar',
                    name: 'calendar',
                    component: Calendar,
                },
                {
                    path: '/test',
                    name: 'test',
                    component: test
                },
                {
                    path: '/test2',
                    name: 'test2',
                    component: test2
                }
            ]
        }
    ],
})

export default router
