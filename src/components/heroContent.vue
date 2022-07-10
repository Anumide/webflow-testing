<template>
 <div class="h-full max-w-lg flex flex-col justify-center items-center mx-auto">
    <div class="illustration lg:w-80 w-72 mx-auto">
        <img src="../assets/hero-Illustration.png" alt="welcome-image" class="w-full">
    </div>
    <div class="welcome-text text-white my-4 text-center">
        <h1 class="font-bold lg:text-2xl text-xl">Welcome {{ text }}!</h1>
        <p class="lg:my-3 my-2">Just a couple of clicks and we start</p>
    </div>
 </div>
</template>
 
<script>
import { ref } from 'vue'
 export default{
    props: ['text'],
    setup(props) {
        const text = ref(props.text)
        return {
            text
        }
    }
 }
</script>
 
<style>
 
</style>