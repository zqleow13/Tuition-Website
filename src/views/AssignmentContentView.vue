<script setup>
    import {useRoute} from "vue-router"
    import assignments from "../data/assignments.json"
    const route = useRoute()

    const assignment = assignments.find(a => a.id === parseInt(route.params.id))
    
</script>

<template>
    <div>
        <h1>Assignment Content View</h1>
        <p>{{assignment.ref}}</p>
        <p>{{assignment.subject}}</p>
        <p>{{assignment.location}}</p>
        <p>{{assignment.rates}}</p>
    </div>
</template>