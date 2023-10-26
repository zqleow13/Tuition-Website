<script setup>
    import {RouterLink} from "vue-router"
</script>

<template>
    <h1>Request for a Tutor today!</h1>
    <br>
    <form>
        <label for="yourname">Your Name</label><br>
        <input id="yourname" type="text"><br>

        <p>You are a...</p>
        <input id="parent" name="parentorstudent" type="radio">
        <label for="parent">Parent</label>
        <input id="student" name="parentorstudent" type="radio">
        <label for="student">Student</label><br>
        <label for="tuteename">Tutee's Name</label><br>
        <input id="tuteename" type="text">

        <p>Relationship of Tutee</p>
        <input id="son" name="relationshipoftutee" type="radio">
        <label for="son">Son</label>
        <input id="daughter" name="relationshipoftutee" type="radio">
        <label for="daughter">Daughter</label>
        <input id="other" name="relationshipoftutee" type="radio">
        <label for="other">Other</label><br>

        <label for="postalcode">Postal Code*</label>
        <input id="postalcode" type="number" pattern="[0-9] {6}" required><br>

        <label for="phonenumber">Phone Number*</label>
        <input id="phonenumber" type="tel" pattern="[0-9] {8}" required><br>

        <label for="email">Email Address*</label>
        <input id="email" type="email" required><br>

        <label for="email">Email Address*</label>
        <input id="email" type="email" required><br>

        
    </form>
</template>