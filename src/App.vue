<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img style="border-radius: 5%;" src="./assets/images/student.jpeg" class="logo cream-border"/>
  <h1 class="text-3xl font-bold underline sapphire">Izzul Faris Zulkiffli</h1>
<br>
<br>
    <h1 class="text-2xl font-sans-serif lightgreentext">Full Name: Mohammad Izzul Faris Bin Haji Zulkiffli</h1>
  <h1 class="text-2xl font-sans-serif margin-right redtext">Student ID: 22FTT1517</h1>
  <h1 class="text-2xl font-sans-serif lightgreentext">Programme: Web Development</h1>
  <h1 class="text-2xl font-sans-serif redtext">Age: 19 Years Old</h1>
  <h1 class="text-2xl font-sans-serif lightgreentext">School: Politeknik Brunei School of Information, Communication and Technology</h1>
  <h1 class="text-2xl font-sans-serif redtext">Email: fariszlk.com@gmail.com</h1>
</template>

<style scoped>
.logo {
  height: 30em;
  will-change: filter;
  transition: filter 300ms;
  margin-left: 175px
}

.cream-border{
  border: 3px solid #fffdd0;
}

.sapphire{
  color: #0f52ba;
}

.redtext{
  color: #ff0000;
}

.lightgreentext{
  color: #8abb86;
  }

.margin-right{
  margin-right: 10px;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #fffdd0);
}

</style>