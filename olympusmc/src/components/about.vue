<template>
  <section id="about" class="about">
      <h1 class="about-title">SOBRE OLYMPUS MC</h1>
      <P class="about-description"
        >Servidor feito a partir de um sonho de montar bloquinhos misturado com
        os sentimentos de um amante do rpg raiz, o nosso intuito é te
        proporcionar a experiencia de uma segunda vida em um mundo fantasioso
        repleto de desafios envolvendo: dungeons, bosses e muito mais, venha
        fazer parte da nossa familia.
      </P>
      <p class="about-serverip">SERVER IP: olympusmc.jogar.com.br</p>
  </section>
</template>
<script>
export default {
  name: "about",
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap");
@font-face {
  font-family: "mine";
  src: url("../../fonts/Minercraftory.ttf") format("truetype");
}
.about {
 margin: 5rem;
 padding: 5rem;
 max-width: 1200px;
  background-color: #500be5cb;;
  color: white;
  text-align: center;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;


}
.about-title {
  font-family: mine;
  font-size: 2rem;
}
.about-description {
  width: 100%;
  font-weight: bolder;
  font-family: "Manrope", sans-serif;
  margin-top: 1rem;
  color: white;
}
.about-serverip {

  font-family: mine;
  color: rgba(0, 0, 0, 0.546);
  background-color:  rgb(133, 99, 104);
  color: white;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.52);
  border: 3px solid rgb(176, 146, 151);
  border-radius: 5px;
  cursor: text;
  height: 100%;
  padding: 0.5rem;
  margin-top: 2rem;
}
@media screen and (max-width: 428px){
  .about-serverip{
    font-size: 0.7rem;
  }
  .about-description{
    text-align: justify;
  }
}
@media screen and (max-width: 367px){
  .about-serverip{
    font-size: 0.6rem;
  }
  .about-title{
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 320px){
  .about-title{
    font-size: 1rem;
  }
  .about-serverip{
    font-size: 0.5rem;
  }
}
</style>
