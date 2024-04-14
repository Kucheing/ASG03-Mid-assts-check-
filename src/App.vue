<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template class="background">
<div class="center-container">
    <img style="border-radius: 5%;" src="./assets/images/student.jpeg" class="logo cream-border"/>
    <h1 class="text-3xl font-bold font-pacifico underline sapphire">Izzul Faris Zulkiffli</h1>
  </div>
<br>
<br>

  <table class="bordered-table">
    <tr>
      <td><h1 class="text-2xl font-kalam lightgreentext">Full Name: </h1></td>
      <td><h1 class="text-2xl font-kalam redtext">Mohammad Izzul Faris Bin Haji Zulkiffli</h1></td>
    </tr>
    <tr>
      <td><h1 class="text-2xl font-kalam margin-right lightgreentext">Student ID: </h1></td>
      <td><h1 class="text-2xl font-kalam margin-right redtext">22FTT1517</h1></td>
    </tr>
    <tr>
      <td><h1 class="text-2xl font-kalam lightgreentext">Programme: </h1></td>
      <td><h1 class="text-2xl font-kalam redtext">Web Development</h1></td>
    </tr>
    <tr>
      <td><h1 class="text-2xl font-kalam lightgreentext">Age: </h1></td>
      <td><h1 class="text-2xl font-kalam redtext">19 Years Old</h1></td>
    </tr>
    <tr>
      <td><h1 class="text-2xl font-kalam lightgreentext">School: </h1></td>
      <td><h1 class="text-2xl font-kalam redtext">Politeknik Brunei School of Information, Communication and Technology</h1></td>
    </tr>
    <tr>
      <td><h1 class="text-2xl font-kalam lightgreentext">Email: </h1></td>
      <td><h1 class="text-2xl font-kalam redtext">fariszlk.com@gmail.com</h1></td>
    </tr>
  </table>
  
</template>

<style scoped>
/* For desktop view */
@media (min-width: 1024px) {

.background {
  --background: url('./assets/images/background-flower.jpg') no-repeat center center / cover;
}
.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.bordered-table {
  border-collapse: collapse;
}

.bordered-table td, .bordered-table th {
  border: 1px solid white;
  padding: 8px;
}
.logo {
  height: 30em;
  will-change: filter;
  transition: filter 300ms;}

.font-kalam{
  font-family: 'Kalam', monospace;
}

.font-pacifico{
  font-family: 'Pacifico', fantasy;
}

.font-beautiful{
  font-family: 'Beautiful People', serif;
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

  
} 

/* For mobile view */
@media (max-width: 768px) {
  
  .background {
  --background: url('./assets/images/background-flower.jpg') no-repeat center center / cover;
}
.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bordered-table {
  border-collapse: collapse;
}

.bordered-table td, .bordered-table th {
  border: 1px solid white;
  padding: 8px;
}
.logo {
  height: 30em;
  will-change: filter;
  transition: filter 300ms;}

.font-kalam{
  font-family: 'Kalam', monospace;
}

.font-pacifico{
  font-family: 'Pacifico', fantasy;
}

.font-beautiful{
  font-family: 'Beautiful People', serif;
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
}

</style>