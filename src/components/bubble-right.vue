<template>
   <div class="flex  justify-end z-30 ">
      <div class="flex flex-col-reverse my-2 w-2/3 sm:w-1/3 break-words bubble-right z-30 bg-gray-100   text-sm   rounded-lg p-2  "> 
         <p class=""><slot></slot></p>
        </div></div>
</template>
<style>
.bubble-right{
    background-color: #F2F2F2;
    border-radius: 5px;
    box-shadow: 0 0 6px #B2B2B2;
    display: inline-block;
    padding: 10px 18px;
    position: relative;
    vertical-align: top;
      
    margin: 7px 30px 5px 20px;    
}

.bubble-right::before {
    background-color: #F2F2F2;
    content: "\00a0";
    display: block;
    height: 10px;
    position: absolute;
    
    transform:rotate( 29deg ) skew( -35deg );
    width:  20px;
    box-shadow: 2px -2px 2px 0 rgba( 178, 178, 178, .4 );
    right: -9px; 
}
</style>
<script setup>
import {useCounterStore} from '../stores/theme'
const storeCounter= useCounterStore();
</script>