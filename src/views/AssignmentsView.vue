<script setup>
    import assignments from "../data/assignments.json"
</script>

<template>
    <div>
        <h1>Assignments View</h1>
        <div class="assignments">
            <a v-for="assignment in assignments" :key="assignment.id" href="">
                {{ assignment.subject }}
            </a>
        </div>
    </div>
</template>