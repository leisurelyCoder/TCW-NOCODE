<script setup>
import bubbleleft from '../components/bubble-left.vue'
import bubbleright from '../components/bubble-right.vue'
import {useCounterStore} from '../stores/theme'
const storeCounter= useCounterStore();

</script>
<template>
    <div class=" z-40 py-4 border-x-2 border-gray-200 pl-2 h-full">
        <div v-for="(message, index) in storeCounter.messages" :key="index">
       <bubbleleft v-if="message.userType!='customer'">{{message.body}}</bubbleleft>
       <bubbleright v-else>{{message.body}}</bubbleright>
       </div></div>

</template>
 