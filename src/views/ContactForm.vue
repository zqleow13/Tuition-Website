<script setup>
    import {RouterLink} from "vue-router"
</script>

<template>
    <h1>Request for a Tutor today!</h1>
    <br>
    <form>
        <!-- Your Name -->
        <label for="yourname">Your Name</label><br>
        <input id="yourname" type="text"><br>

        <!-- Parent or Student -->
        <p>You are a...</p>
        <input id="parent" name="parentorstudent" type="radio">
        <label for="parent">Parent</label>
        <input id="student" name="parentorstudent" type="radio">
        <label for="student">Student</label><br>
        <label for="tuteename">Tutee's Name</label><br>
        <input id="tuteename" type="text">

        <!-- Relationship of Tutee -->
        <p>Relationship of Tutee</p>
        <input id="son" name="relationshipoftutee" type="radio">
        <label for="son">Son</label>
        <input id="daughter" name="relationshipoftutee" type="radio">
        <label for="daughter">Daughter</label>
        <input id="other" name="relationshipoftutee" type="radio">
        <label for="other">Other</label><br>

        <!-- Postal code -->
        <label for="postalcode">Postal Code*</label>
        <input id="postalcode" type="number" pattern="[0-9] {6}" required><br>

        <!-- Phone number -->
        <label for="phonenumber">Phone Number*</label>
        <input id="phonenumber" type="tel" pattern="[0-9] {8}" required><br>

        <!-- Email address: pls add validation for email -->
        <label for="email">Email Address*</label> 
        <input id="email" type="email" required><br>

        <!-- Subjects to be tutored: pls add dropdown or checkbox for multiple options -->
        <label for="email">Email Address*</label>
        <input id="email" type="email" required><br>

        <!-- Tutee's Current Level/Grade: Text Box or dropdown -->
        <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required>
        </div>

        <!-- Frequency of lessons: Can use checkbox/dropdown -->
        <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
        </div>

        <!-- Duration of lessons: Checkbox -->

        <!-- Preferred Type of Tutors (Part time/full time etc): Checkbox/dropdown -->

        <!-- Preferred Tuition Rate as per hour: checkbox/dropdown or textbox cos there's range -->

        <!-- Tuition Start Date: add a calendar -->

        <!-- Length of Commitment (how many months): textbox?-->

        <!-- Available timings: textbox -->

        <!-- Preferred Tutor's Gender: checkbox/dropdown -->

        <!-- Other Additional Requests: textarea -->

        <!-- submit button -->
        
    </form>
</template>