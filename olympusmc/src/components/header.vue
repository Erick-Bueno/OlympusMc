<template>
  <header>
    <div class="overlay" @click="fecharMenu()" :class="{'mostraroverlay':menuAtivado}"></div>
    <img class="Header-menu-mobile" @click="abrirMenu()" src="/images/hamburguer.png" alt="">
    <div class="Header-playersOn">
      <img
        class="Header-logo"
        src="https://cdn.shopify.com/s/files/1/0405/2058/1286/articles/how-to-add-a-server-icon-to-your-minecraft-server-435588.png?v=1662094872"
        alt=""
      />
      <div class="Header-players-online">
          <p class="header-circle-green"></p>
          <p class="Header-text-playerson">10 PLAYERS ONLINE</p>
      </div>
    </div>
    <div class="Header-container-nav" :class="{'menuAberto':menuAtivado}">
      <h1 class="olympus">OLYMPUS MC</h1>
      <nav>
        <ul class="Header-container-list">
        
          <li><a href="#shop">LOJA</a></li>
          <li><a href="#ranking">RANKING</a></li>
          <li><a href="#footer">CONTATOS</a></li>
          <li><a href="#discord">DISCORD</a></li>
          <li><a href="#about">SOBRE</a></li>
        </ul>
      </nav>
      <div class="Header-container-singup">
        <p class="login">LOGIN/SINGUP</p>
        <img class="Header-image-arrow" src="/images/setadireita.png" alt="" />
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "header",
  data(){
    return{
      menuAtivado: false
    }
   
  },
  methods:{
    abrirMenu(){
      this.menuAtivado = true
      document.body.style.overflow = "hidden"
    },
    fecharMenu(){
      this.menuAtivado = false
      document.body.style.overflowY = "scroll"
    }
  }
};
</script>
<style>
@font-face {
  font-family: "mine";
  src: url("../../fonts/Minercraftory.ttf") format("truetype");
  
}
header {
  display: flex;
  justify-content: space-between;
  font-family: "mine";
  background-color: rgb(255, 255, 255);
  width: 100%;
  align-items: center;
  padding: 1rem;
  padding-left: 3rem;
  padding-right: 4rem;
  position: fixed;
  transition: 0.2s ease-in-out;
  z-index: 2000;
  
 

}
.olympus{
  display: none;
}
.Header-menu-mobile{
  position: absolute;
  right: 0;
  display: none;
}
a{
  text-decoration: none;
  color: black;
}
.overlay{
  background-color: rgba(0, 0, 0, 0.655);
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: none;
  position: fixed;

}
.mostraroverlay{
  display: block;
}
.Header-logo {
  width: 120px;
}
.menuAberto{

}
.Header-playersOn {
  display: flex;
  align-items: center;}
.Header-container-list {
  list-style: none;
  display: flex;
}
.login{
  
  display: flex;
}
.Header-container-list li{
    margin-left: 2rem;
    cursor: pointer;
    transition: 0.2s;
}
a:hover{
  color: rgba(0, 0, 0, 0.53);
}
.Header-container-singup {
  display: flex;
  margin-left: 5rem;
  align-items: center;
  color: #4C1DB1;
  cursor: pointer;
  position: relative;
}
.Header-container-singup:hover > .Header-image-arrow{
   opacity: 1;
}
.Header-container-nav {
  display: flex;
  align-items: center;
}
.header-circle-green{
    height: 7px;
    width: 7px;
    background-color: green;
    border-radius: 50%;
  
    margin-left: 1rem;
  
}
.Header-players-online{
    
    color: rgba(0, 0, 0, 0.282);
    display: flex;
    justify-content: center;
    align-items: center;
   
  
}
.Header-text-playerson{
    margin-left: 0.7rem;
}
.Header-image-arrow{
    width: 18px;
    margin-left: 1rem;
    opacity: 0.4;
    transition: 0.2s;
    position: absolute;
    right: -25px;
    bottom: 3px;
}
@media screen and (max-width: 768px) {
  .Header-menu-mobile{
    display: block;
    margin-right: 1rem;
 
  }
  .Header-container-nav{
    position: fixed;
    flex-direction: column;
    background-color:white;
    right: 0;
    top: 0;
    width: 0%;
    overflow: hidden;
    height: 100vh;
    justify-content: right;
  
    color: black;
    z-index: 2000;
    margin-left:-12rem;
    transition: 0.2s ease-in-out;

  }
  .Header-container-nav.menuAberto{
    width: 60%;
  }
  .Header-container-list{
    flex-direction: column;
    float: left;
   
  }
  .Header-container-list li {
    margin: 1rem;
  
    width: 50px;
 

    
  }
  .olympus{
    display: block;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 2rem;
    text-align: center;
    width: 300px;
  }
  .login{
   
  }
  .Header-container-singup{
    margin-left: -5rem;
    margin-left: auto;
    margin-right: auto;
    font-size: 2rem;
    margin-top: 5rem;
  }
  .Header-image-arrow{
    width: 32px;
    top: 10px;
    right: -50px;
  }
  nav{
    margin-left: -12rem;
  }

}
@media screen and (max-width: 530px){
  .Header-container-singup{
    margin-left: -5rem;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.3rem;
    margin-top: 5rem;
  }
  .Header-image-arrow{
    width: 22px;
    top: 5px;
    right: -30px;
  }
  .olympus{
    font-size: 1.3rem;
  }
  .Header-text-playerson{
    font-size: 0.7rem;
  }
}
@media screen and (max-width: 428px){
  nav{
    margin-left: -9rem;
  }
  .Header-logo{
    width: 52px;
  }
  .Header-menu-mobile{
    width: 42px;
  }
  
}
@media screen and (max-width: 375px){
  .olympus{
    font-size: 1.2rem;
  }
  .login{
    font-size: 1rem;
  
  }
  .Header-image-arrow{
    top: 2px;
    
  }
}
@media screen and (max-width: 348px){
  nav{
    margin-left:-6rem ;
  }
  .olympus{
    font-size: 1.2rem;
  }
  .login{
    font-size: 1rem;
  }
  .Header-image-arrow{
    top: 2px;
    right: -25px;
  }
}


</style>
