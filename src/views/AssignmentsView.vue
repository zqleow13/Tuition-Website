<script>
    import { RouterLink } from "vue-router"
    import assignments from "../data/assignments.json"
</script>

<template>
    <div>
        <h1>Assignments View</h1>
        <div class="assignments">
            <RouterLink :to="`/findassignments/assignments/${assignment.id}`" v-for="assignment in assignments" :key="assignment.id" href="">
                {{ assignment.ref }}
                {{ assignment.subject }}
                {{ assignment.location }}
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .assignments {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 20px;
    }

    .assignments a {
        color: black;
        width: 100%;
        box-shadow: 1px 1px 1px black;
        border-radius: 5px;
        background-color: aliceblue;
        padding: 1rem;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        
    }

</style>