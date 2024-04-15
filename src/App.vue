<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>


<template style="width:100%">
<div class="flex-wrap md:flex" style="width:100%">
    <div>
  <img src="./assets/images/student.jpeg" class="align-center1 containerpic rounded-full w-auto h-auto logo object-cover border4r"/>
  <h1 class="text-4xl font-semibold creamtext marg1 align-center1">Apa namamu eh? hehe kan minta number >.< </h1>
    </div>
    <div class="flex-grow">
  <h1 class="text-2xl align-center font-bold creamtext marg2 align-center1">Mohammad Izzul Faris Bin Haji Zulkiffli, 22FTT1517, DWDT08</h1>
  <br> <br> <br> <br> <br>  <br> 
  <h1 class="text-2xl align-center creamtext marg2 align-center1">Currently, I'm pursuing a Level 5 Diploma in Web Development at 
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

  
  <h1 class="text-2xl font-bold creamtext marg2 align-center align-center1">CONTACTS:</h1>
  <h1 class="text-2xl creamtext marg2 align-center align-center1">22ftt1517@student.pb.edu.bn</h1>
  <h1 class="text-2xl creamtext marg2 align-center align-center1">+673 xxx xxxx</h1>
  <h1 class="text-2xl creamtext marg2 align-center align-center1">www.faris.io</h1>
  </div>
</div>

<br>
<br>
</template>

<style scoped>
/* For mobile view */
@media (max-width: 768px) {

.containerpic {
    display: flex;
    justify-content: center;
    align-items: center;
  }

.border4r{
border: 4px solid #ff0000;
  }

.creamtext{
  color: #ff0000;
  }

.align-center1{
  text-align: center;
  }

.logo {
  height: 250px;
  width: 250px;
  will-change: filter;
  transition: filter 300ms;
  margin-left: 150px;
  margin-bottom: 30px;
  }

.container {
    display: flex;
    flex-wrap: wrap;
  }

.logo:hover {
  filter: drop-shadow(0 0 2em #ff0000);
  }
}


/* For desktop view */
@media (min-width: 1600px) {

h1 {
    white-space: nowrap;
    overflow: visible;
  }
  
.align-center {
    text-align: center;
  }

.marg1 {
margin-top: 10%;
margin-left: 42%;
  }

.marg2{
margin-left: 15%;
  }

.creamtext {
  color: #fffdd0;
  }

.logo {
  height: 500px;
  width: 500px;
  will-change: filter;
  transition: filter 300ms;
  margin-left: 175px;
  margin-bottom: 30px;
  }

.logo:hover {
  filter: drop-shadow(0 0 2em #fffdd0);
  }
} 
</style>