// Place to define routing rules//
import {createRouter, createWebHistory} from "vue-router"
import HomeView from "../views/HomeView.vue"
import AssignmentsView from "../views/AssignmentsView.vue"
import AssignmentContentView from "../views/AssignmentContentView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/findassignments",
            name: "find-assignments",
            component: AssignmentsView
        },
        {
            path: "/findassignments/assignments/:id", // Put colon for a dynamic path
            name: "assignments",
            component: AssignmentContentView
        }
    ]
})

export default router