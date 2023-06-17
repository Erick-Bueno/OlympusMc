<template>
  <section class="Apresentation-container">
    <article class="Apresentation-description-container">
      <div class="Apresentation-block-1"></div>
      <div class="Apresentation-block-2"></div>
      <div class="Apresentation-block-3"></div>
      <div class="Apresentation-block-4"></div>
      <h1 class="Apresentation-container-title">OLYMPUS MC</h1>
      <p class="Apresentation-description-text">
        A melhor comunidade e o melhor servidor rpg que você pode jogar agora
        mesmo, sempre sendo atualizado, premiações perfeitas e bastante conteúdo
        viva sua vida em um mmropg de qualidade.
      </p>
      <router-link to="/nolitimere">
        <button class="Apresentation-description-button">
          olympusmc.enxada.host
        </button>
      </router-link>
      
    </article>
  </section>
</template>
<script>
export default {
  name: "apresentation",
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap");
@font-face {
  font-family: "mine";
  src: url("../../fonts/Minercraftory.ttf") format("truetype");
}
.Apresentation-container {
  background-image: url("/public/images/fundo.webp");
  width: 100%;
  height: 700px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 2rem;
  padding-left: 4rem;
  display: flex;
  justify-content: left;
  background-attachment: fixed;
  align-items: center;
  margin-top: 2rem;
}
.Apresentation-description-container {
  font-family: mine;
  background-color: #4c1db1;
  color: white;
  font-size: 2rem;
  max-width: 500px;
  padding: 3rem;
  position: relative;
  margin-left: 4rem;


}
.Apresentation-description-text {
  font-size: 1rem;
  text-align: justify;
  font-family: "Manrope", sans-serif;
  font-weight: bolder;
  padding-top: 1.5rem;
}
.Apresentation-description-button {
  font-family: mine;
  background-color: rgb(133, 99, 104);
  border: none;
  color: white;
  padding: 0.7rem;
  position: relative;
  z-index: 1000;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.52);
  margin-top: 3rem;
  border: 3px solid  rgb(176, 146, 151);
  border-radius: 5px;
  cursor:pointer;
}
.Apresentation-block-1{
  width: 50px;
  height: 50px;
  background-color:  #4c1db1;
  position: absolute;
  left: -15px;
  top: 150px;
}
.Apresentation-block-2{
  width: 30px;
  height: 80px;
  background-color:  #4c1db1;
  position: absolute;
  right: -15px;
  top: 60px;
}
.Apresentation-block-3{
  width: 80px;
  height: 40px;
  background-color:  #4c1db1;
  position: absolute;
  top: -17px;
  right: 250px;
}
.Apresentation-block-4{
  width: 80px;
  height: 40px;
  background-color:  #4c1db1;
  position: absolute;
  bottom: -17px;
  right: 150px;
}
@media screen and (max-width:768px) {
  .Apresentation-container{
    background-attachment: inherit;
  }
}
@media screen and (max-width: 650px) {
    .Apresentation-description-container{
      margin-left: -4rem;
      margin: auto;
    }
    .Apresentation-container{
      padding: 0;
    }
}
@media screen and (max-width:534px){
  .Apresentation-description-container{
    width: 400px;
   
  }
}
@media screen and (max-width: 428px){
  .Apresentation-description-container{
    width: 300px;
  }
  .Apresentation-container-title{
    font-size: 1.3rem;
  }
  .Apresentation-description-text{
    font-size: 0.9rem;
  }
  .Apresentation-block-2{
    right: -20px;
    width: 55px;
  }
  .Apresentation-description-button{
    font-size: 0.7rem;
  }
  .Apresentation-block-3{
    right: 200px;
  }
}
@media screen and (max-width: 339px){
  .Apresentation-block-2{
    right: -7px;
  }
  }

</style>
