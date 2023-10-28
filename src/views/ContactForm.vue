<script setup>
    import {RouterLink} from "vue-router"
</script>

<template>
    <h1 class="text-center font-bold">Request for a Tutor today!</h1><br>

    <form>
        <div class="flex flex-col items-center">
            <!-- Your Name -->
            <div>
                <label for="your_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                <input type="text" id="your_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Lee" required>  
            </div><br>

            <!-- Parent or Student -->
            <!-- Parent Option -->
            <p>You are a...</p>
            <div class="flex items-start mb-4">
                <input id="parent" type="radio" name="parent-or-student" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="parent" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Parent or Guardian</label>
            </div>

            <!-- Student Option -->
            <div class="flex items-center">
                <input id="student" type="radio" name="parent-or-student" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="student" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Student</label>
            </div><br>

            <!-- Tutee's Name -->
            <div>
                <label for="tutees_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tutee's Name</label>
                <input type="text" id="tutees_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sam Lee" required>
            </div><br>

            <!-- Relationship of Tutee -->
            <p>Relationship of Tutee</p>
            <!-- Son Option -->
            <div class="flex items-center mb-4">
                <input id="son" type="radio" name="relationship-of-tutee" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="son" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Son</label>
            </div>
            <!-- Daughter Option -->
            <div class="flex items-center">
                <input id="daughter" type="radio" name="relationship-of-tutee" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="daughter" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Daughter</label>
            </div>

            <!-- Other Option -->
            <div class="flex items-center">
                <input id="other" type="radio" name="relationship-of-tutee" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="other" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Other</label>
            </div><br>

            <!-- Postal Code -->
            <div>
                <label for="postal-code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postal Code</label>
                <input type="number" id="postal-code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="321456" pattern="[0-9]{6}" required>
            </div>

            <!-- Phone Number -->
            <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
            </div>

            <!-- Email Address -->
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.lee@imail.com" required>
            </div> 


            <!-- <div>
                <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website URL</label>
                <input type="url" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required>
            </div>
            <div>
                <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unique visitors (per month)</label>
                <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
            </div>
        </div>
        
        <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required>
        </div> 
        <div class="mb-6">
            <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
            <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required>
        </div>  -->
        <!-- <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>
            </div>
            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
    <form>

        
        <label for="email">Email Address*</label>
        <input id="email" type="email" required><br>

       
        <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required>
        </div>

      
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