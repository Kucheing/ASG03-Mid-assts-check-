<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>


<template style="width:100%">
<div class="flex-wrap md:flex" style="width:100%">
    <div>
  <img src="./assets/images/student.jpeg" class="border-4 border-solid border-red-700 h-64 w-64 ml-40 mb-8 flex justify-center items-center rounded-full lg:h-128 lg:w-128 lg:border-4 lg:border-solid lg:border-yellow-100 logo object-cover "/>
  <h1 class="text-4xl text-red-700 font-bold text-center  lg:mt-20 lg:text-4xl lg:ml-40 lg:text-yellow-100">Izzul Faris Zulkiffli</h1>
    </div>
    <div class="flex-grow">
  <h1 class="text-4xl text-red-700 text-center font-bold lg:mt-20 lg:text-4xl lg:ml-40 lg:text-yellow-100">Mohammad Izzul Faris Bin Haji Zulkiffli, 22FTT1517, DWDT08</h1>
  <br> <br> <br> <br>
  <h1 class="text-4xl text-red-700 font-semibold text-center lg:text-3xl lg:ml-40 lg:text-yellow-100">Currently, I'm pursuing a Level 5 Diploma in Web Development at 
  <br> Politeknik Brunei. When I'm not immersed in coding, 
  <br> you can find me cycling through scenic routes, 
  <br> diving into the captivating world of anime, or enjoying a 
  <br> good game. I also cherish spending quality time with friends. 
  <br> Balancing my passion for technology with a vibrant array 
  <br> of hobbies keeps me inspired and energized.</h1>

  <br>
  <br>
  <br>
  <br> 
  <br>

  <h1 class="text-4xl text-red-700 font-bold text-center lg:text-4xl lg:ml-40 lg:text-yellow-100">CONTACTS:</h1>
  <h1 class="text-4xl text-red-700 text-center lg:text-3xl lg:ml-40 lg:text-yellow-100">22ftt1517@student.pb.edu.bn</h1>
  <h1 class="text-4xl text-red-700 text-center lg:text-3xl lg:ml-40 lg:text-yellow-100">+673 xxx xxxx</h1>
  <h1 class="text-4xl text-red-700 text-center lg:text-3xl lg:ml-40 lg:text-yellow-100">www.faris.io</h1>
  </div>
</div>

<br>
<br>
</template>

<style scoped>
/* For mobile view */
@media (max-width: 768px) {

.border4r {
border-width: 4px;
border-style: solid;
border-color: red;
}

.logo {
  will-change: filter;
  transition: filter 300ms;}

.logo:hover {
  filter: drop-shadow(0 0 2em #ff0000);
  }
}

/* For desktop view */
@media (min-width: 1024px) {

.logo {
  height: 500px;
  width: 500px;
  will-change: filter;
  transition: filter 300ms;
  }

.logo:hover {
  filter: drop-shadow(0 0 2em #fffdd0);
  }
} 
</style>