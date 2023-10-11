<script setup>
    import {RouterLink} from "vue-router"
</script>
<template>
    <div>
        <RouterLink active-class="active" to="/">Home</RouterLink>
        <RouterLink  active-class="active" to="/findassignments">Find Assignments</RouterLink>
    </div>
</template>

<style scoped>
    .active {
        font-weight: 900;
        color: gold;
    }
</style>