import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  
  state:()=>(
    {
      Username:"Chatbot",
      messages:[],
      message:'',
      currentTheme:{
        bgColor:'#fff',
        color:'#0c0d0d',
        box: '#cdd1d1',
        border: 'solid',
        width:'2px'
        }
  }
  ),
  actions: {
   
    sendMessage(msg,userType='customer'){
      this.messages.push({body: msg,userType})
    //  console.log(msg,'sendMessage')
    //  console.log(this.messages)
    }

  },
  getters: {
    theme: (state) => `background-color:${state.currentTheme.bgColor}; border-color:${state.currentTheme.box};border-style:${state.currentTheme.border};border-width:${state.currentTheme.width}`,
    text:(state)=>`color:${state.currentTheme.color}`,
    // messages:(state)=>{
    //   return
    //     state.messages;
      
    // }
  },

})
