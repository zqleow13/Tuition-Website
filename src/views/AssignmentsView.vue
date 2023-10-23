<script setup>
    import { RouterLink } from "vue-router"
    import assignmentsData from "../data/assignments.json"
    import { computed } from "vue"
    import { ref } from "vue"

    const search = ref('');
    const assignments = ref(assignmentsData);

    // To create the search function for the search bar
    const searchedAssignments = computed(() => {
        const searchQuery = search.value.toLowerCase();
        return assignments.value.filter((assignment) => {
            return assignment.subject.toLowerCase().includes(searchQuery) || assignment.location.toLowerCase().includes(searchQuery) || assignment.rates.includes(searchQuery);
        });
    });
</script>

<template>
    <div>
        <h1>Assignments View</h1>
        <div class="assignments">
        <input type="text" placeholder="Search for assignments" v-model="search">
            <RouterLink :to="`/findassignments/assignments/${assignment.id}`" v-for="assignment in searchedAssignments" :key="assignment.id" href="">
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
