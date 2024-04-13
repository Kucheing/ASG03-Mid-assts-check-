<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img style="border-radius: 5%;" src="./assets/images/student.jpeg" class="logo"/>
  <h1 class="text-3xl font-bold underline">Izzul Faris Zulkiffli</h1>
<br>
<br>
    <h1 class="text-2xl font-sans-serif">Full Name: Mohammad Izzul Faris Bin Haji Zulkiffli</h1>
  <h1 class="text-2xl font-sans-serif margin-right">Student ID: 22FTT1517</h1>
  <h1 class="text-2xl font-sans-serif">Programme: Web Development</h1>
  <h1 class="text-2xl font-sans-serif">Age: 19 Years Old</h1>
  <h1 class="text-2xl font-sans-serif">School: Politeknik Brunei School of Information, Communication and Technology</h1>

</template>

<style scoped>
.logo {
  height: 30em;
  will-change: filter;
  transition: filter 300ms;
  margin-left: 170px
}

.margin-right{
  margin-right: 10px;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #ffffff);
}

</style>