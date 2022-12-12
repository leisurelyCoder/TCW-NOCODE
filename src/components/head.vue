<template>
<div class="flex flex-col z-50" >
    
     <div class="flex justify-between  py-1 rounded-t-lg  bg-gray-200  " :style="storeCounter.theme">
         
          <div class="flex"><img class="  mx-2 h-8 rounded-2xl" src="https://dummyimage.com/200x200/000/fff" alt="">
          <h1 :style="storeCounter.text" class="text-xl font-semibold text-gray-700 flex justify-start pt-1"><slot></slot></h1></div>
          </div>
          <div  class="flex border-x-2 border-gray-200 justify-end"  >
          <!-- <div class=" w-1/4 flex flex-wrap bg-gray-300 ">
           <div  class="bg-red-700 m-3 px-2 py-2"  v-bind:class="{'active':storeCounter.currentTheme === 'theme-red'}" v-on:click="storeCounter.switchTheme('theme-red')"></div>
     <div  class="bg-black px-2 m-3 py-2" v-bind:class="{'active':storeCounter.currentTheme === 'theme-black'}" v-on:click="storeCounter.switchTheme('theme-black')"></div>
      <div class="bg-blue-700 px-2 m-3 py-2"  v-bind:class="{'active':storeCounter.currentTheme === 'theme-blue'}" v-on:click="storeCounter.switchTheme('theme-blue')"></div>
       <div class="bg-yellow-700 px-2 m-3 py-2"  v-bind:class="{'active':storeCounter.currentTheme === 'theme-orange'}" v-on:click="storeCounter.switchTheme('theme-orange')"></div>
        <div class="bg-green-700 px-2 m-3 py-2"  v-bind:class="{'active':storeCounter.currentTheme === 'theme-green'}" v-on:click="storeCounter.switchTheme('theme-green')"></div>
</div>--></div>
</div>
          
</template>
<!-- <script >
storeCounter= useCounterStore()
export default{
     name:'App',
     data() {
          return{
          currentTheme: localStorage.getItem('theme-color')
     };
     },
     methods:{
          switchTheme(theme){
               localStorage.setItem('theme-color',theme);
               this.currentTheme=localStorage.getItem('theme-color')
          }
     }
}
</script> -->
<script setup>
import {useCounterStore} from '../stores/theme'
const storeCounter= useCounterStore();
</script>
<style>
.theme-red{
     background-color: red;
}
.theme-black{
     background-color: black;
     color:aliceblue;
}
.theme-blue{
     background-color: blue;
     color:aliceblue;
}

.theme-orange{
     background-color: orange;
     
}

.theme-green{
     background-color: green;
     color:aliceblue;
}


</style>
