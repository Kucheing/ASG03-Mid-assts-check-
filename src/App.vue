<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img style="border-radius: 5%;" src="./assets/images/student.jpeg" class="logo cream-border"/>
  <h1 class="text-3xl font-bold font-pacifico underline sapphire">Izzul Faris Zulkiffli</h1>
<br>
<br>

  <table>
    <tr>
      <td><h1 class="text-2xl font-beautiful lightgreentext">Full Name: </h1></td>
      <td><h1 class="text-2xl font-beautiful lightgreentext">Mohammad Izzul Faris Bin Haji Zulkiffli</h1></td>
    </tr>
    <tr>
      <td><h1 class="text-2xl font-kalam margin-right redtext">Student ID: </h1></td>
      <td><h1 class="text-2xl font-kalam margin-right redtext">22FTT1517</h1></td>
    </tr>
    <tr>
      <td><h1 class="text-2xl font-beautiful lightgreentext">Programme: </h1></td>
      <td><h1 class="text-2xl font-beautiful lightgreentext">Web Development</h1></td>
    </tr>
    <tr>
      <td><h1 class="text-2xl font-kalam redtext">Age: </h1></td>
      <td><h1 class="text-2xl font-kalam redtext">19 Years Old</h1></td>
    </tr>
    <tr>
      <td><h1 class="text-2xl font-beautiful lightgreentext">School: </h1></td>
      <td><h1 class="text-2xl font-beautiful lightgreentext">Politeknik Brunei School of Information, Communication and Technology</h1></td>
    </tr>
    <tr>
      <td><h1 class="text-2xl font-kalam redtext">Email: </h1></td>
      <td><h1 class="text-2xl font-kalam redtext">fariszlk.com@gmail.com</h1></td>
    </tr>
  </table>
</template>

<style scoped>
.logo {
  height: 30em;
  will-change: filter;
  transition: filter 300ms;
  margin-left: 175px
}
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

</style>