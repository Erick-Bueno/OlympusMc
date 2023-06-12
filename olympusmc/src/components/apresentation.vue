<template>
  <section class="Apresentation-container">
    <article class="Apresentation-description-container">
      <div class="Apresentation-block-1"></div>
      <div class="Apresentation-block-2"></div>
      <div class="Apresentation-block-3"></div>
      <div class="Apresentation-block-4"></div>
      <h1>OLYMPUS MC</h1>
      <p class="Apresentation-description-text">
        A melhor comunidade e o melhor servidor rpg que você pode jogar agora
        mesmo, sempre sendo atualizado, premiações perfeitas e bastante conteúdo
        viva sua vida em um mmropg de qualidade.
      </p>
      <button class="Apresentation-description-button">
        olympusmc.jogar.com.br
      </button>
      
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
  width: 500px;
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
  background-color: rgb(222, 157, 168);
  border: none;
  color: white;
  padding: 0.7rem;
  position: relative;
  z-index: 1000;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.52);
  margin-top: 3rem;
  border: 3px solid  rgb(220, 180, 187);
  border-radius: 5px;
  cursor: text;
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
  width: 80px;
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

</style>
