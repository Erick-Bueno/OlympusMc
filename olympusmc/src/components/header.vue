<template>
  <header>
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
    <div class="Header-container-nav">
      <nav>
        <ul class="Header-container-list">
          <li>LOJA</li>
          <li>RANKING</li>
          <li>CONTATOS</li>
          <li>SOBRE</li>
        </ul>
      </nav>
      <div class="Header-container-singup">
        <p>LOGIN/SINGUP</p>
        <img class="Header-image-arrow" src="/images/setadireita.png" alt="" />
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "header",
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
.Header-logo {
  width: 120px;
}
.Header-playersOn {
  display: flex;
  align-items: center;}
.Header-container-list {
  list-style: none;
  display: flex;
}
.Header-container-list li{
    margin-left: 2rem;
    cursor: pointer;
    transition: 0.2s;
}
.Header-container-list li:hover{
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

</style>
