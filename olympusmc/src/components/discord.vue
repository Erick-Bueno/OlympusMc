<template>
    <section class="Discord-container">
        <h1 class="Discord-title">ENTRE EM NOSSO DISCORD</h1>
        <section class="Discord-widget"><iframe src="https://discord.com/widget?id=668196688044752907&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe></section>
        <a href="https://discord.gg/2jabvHcBxM" target="_blank"><button class="Discord-servidor-btn">Acessar agora</button></a>
    </section>
</template>
<script>
    export default{
        name:"discord"
    }
</script>
<style>
@font-face {
  font-family: "mine";
  src: url("../../fonts/Minercraftory.ttf") format("truetype");

}
.Discord-title{
    font-family: mine;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
 
    font-family: mine;
   background-color: rgb(222, 157, 168);
   color: white;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.52);
  border: 3px solid rgb(220, 180, 187);
  border-radius: 5px;

    
}
.Discord-widget{
    text-align: center;
    margin-top: 2rem;
   
}
.Discord-servidor-btn{
    font-family: mine;
  color: rgba(0, 0, 0, 0.546);
  background-color: rgb(222, 157, 168);
  color: white;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.52);
  border: 3px solid rgb(220, 180, 187);
  border-radius: 5px;
  height: 100%;
  padding: 0.5rem;
  margin-top: 2rem;
  transition: 0.2s;
  cursor: pointer;
}
.Discord-servidor-btn:hover{
    background-color: rgb(147, 109, 116);
}
.Discord-servidor-btn a{
    text-decoration: none;
    color: white;
}
.Discord-container{
    text-align: center;
    background-image: url("/public/images/fundo2.jpg");
    color: white;
    padding-bottom: 4rem;
    padding-top: 1rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
@media screen and (max-width:768px) {
  .Discord-container{
    background-attachment: inherit;
  }
}
@media screen and (max-width: 348px){
  .Discord-widget{
    display: none;
  }
  .Discord-title{
    font-size: 0.7rem;
  }
}
</style>