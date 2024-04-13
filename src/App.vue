<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img src="./assets/images/student.jpeg" class="logo align-center"/>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 30em;
  will-change: filter;
  transition: filter 300ms;
  margin-left: 50px
}
.logo:hover {
  filter: drop-shadow(0 0 2em #ffffff);
}

</style>