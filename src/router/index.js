// Place to define routing rules//
import {createRouter, createWebHistory} from "vue-router"
import HomeView from "../views/HomeView.vue"
import AssignmentsView from "../views/AssignmentsView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/assignments",
            name: "assignments",
            component: AssignmentsView
        },
    ]
})

export default router