<template>
     <div class="bg-gray-100 z-30 text-sm w-4/6 sm:w-1/2 flex flex-col break-words p-2 rounded-lg bubble-left">
            <p><slot></slot></p>
        </div>
</template>
<style>
.bubble-left{
    background-color: #F2F2F2;
    border-radius: 5px;
    box-shadow: 0 0 6px #B2B2B2;
    display: inline-block;
    padding: 10px 18px;
    position: relative;
    vertical-align: top;
      
    margin: 5px 45px 5px 20px;    
}

.bubble-left::before {
    background-color: #F2F2F2;
    content: "\00a0";
    display: block;
    height: 16px;
    position: absolute;
    border-radius: 0px 0px 0px 6px;
    transform:rotate( 43deg ) skew( -47deg );    
    width:  20px;
    box-shadow: -2px 2px 2px 0 rgba( 178, 178, 178, .4 );
    left: -5px; 
    top:-1px;
}
</style>