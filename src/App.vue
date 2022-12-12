<script setup>
import header1 from './components/head.vue'
import body1 from './components/body.vue'
import footer1 from './components/footer.vue'
import { useCounterStore } from './stores/theme';
const storeCounter= useCounterStore();
</script>

<template>
<section class="container mx-auto w-1/2 " >
<header1 class="sticky top-0 ">{{storeCounter.Username}}</header1>
<body1 class=""></body1>
<footer1 class="sticky bottom-0"></footer1>

</section>
   
      


</template>


