<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>


<template style="width:100%" class="background">
<div class="flex" style="width:100%">
    <div>
  <img src="./assets/images/student.jpeg" class="rounded-full w-auto h-auto logo object-cover border-4 border-cream"/>
  <h1 class="text-4xl font-semibold creamtext marg1">Izzul Faris Zulkiffli</h1>

    </div>
    <div class="flex-grow" >
  <h1 class="text-2xl align-center font-bold creamtext marg2">Mohammad Izzul Faris Bin Haji Zulkiffli, 22FTT1517, DWDT08</h1>
  <br> <br> <br> <br> <br>  <br> 
  <h1 class="text-2xl align-center creamtext marg2">Currently, I'm pursuing a Level 5 Diploma in Web Development at Politeknik Brunei.<br> When I'm not immersed in coding, <br> you can find me cycling through scenic routes, <br> diving into the captivating world of anime, or enjoying a good game. <br> I also cherish spending quality time with friends. <br> Balancing my passion for technology with a vibrant array of hobbies keeps me inspired and energized.</h1><br> 
  <br>
  <br>
  <br>
  <br> 
  <br>
  <h1 class="text-2xl font-bold creamtext marg2 align-center">CONTACTS:</h1>
  <h1 class="text-2xl creamtext marg2 align-center">22ftt1517@student.pb.edu.bn</h1>
  <h1 class="text-2xl creamtext marg2 align-center">+673 xxx xxxx</h1>
  <h1 class="text-2xl creamtext marg2 align-center">www.faris.io</h1>


  </div>
</div>

<br>
<br>

      
  
</template>

<style scoped>
/* For desktop view */
@media (min-width: 1024px) {
h1 {
    white-space: nowrap;
    overflow: visible;
    }
  
  .align-center{
    text-align: center;
  }

.container {
    display: flex;
    overflow: visible;
}

.first-column {
    width: 200px; /* Or whatever fixed width you want */
}

.second-column {
    flex-grow: 1;
}

.marg1{
margin-top: 10%;
margin-left: 42%;
}

.marg2{
margin-left: 15%;
}

.marg3{
margin-left: 10%;

}

.background {
  --background: url('./assets/images/background-flower.jpg') no-repeat center center / cover;
}
.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.creamtext{
  color: #fffdd0;
}

.bordered-table {
  border-collapse: collapse;
}

.bordered-table td, .bordered-table th {
  border: 1px solid white;
  padding: 8px;
}

.logo {
  height: 500px;
  width: 500px;
  will-change: filter;
  transition: filter 300ms;
  margin-left: 175px;
  margin-bottom: 30px;
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

  
} 

/* For mobile view */
@media (max-width: 768px) {
  
  .background {
  --background: url('./assets/images/background-flower.jpg') no-repeat center center / cover;
}

.bordered-table {
  border-collapse: collapse;
}

.bordered-table td, .bordered-table th {
  border: 1px solid white;
  padding: 8px;
}
.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 350px;
  width: 350px;
  will-change: filter;
  transition: filter 300ms;
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
  color: #ffffff;
}

.redtext{
  color: #8abb86;
}

.lightgreentext{
  color: #8abb86;
  }

.margin-right{
  margin-right: 10px;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #8abb86);
}
}

</style>