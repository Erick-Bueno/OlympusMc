<template>
    <footer id="footer" class="footer-container">
        <p>&copy;{{ date }} Olympus MC Todos os Direitos Reservados</p>
        <p>Contato: olympusmcstaf@gmail.com</p>
    </footer>
</template>

<script>
    export default{
        name:"rodape",
        data(){
            return{
                date: new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap");
@font-face {
  font-family: "mine";
  src: url("../../fonts/Minercraftory.ttf") format("truetype");
}
.footer-container{
    background-color:#4C1DB1;
    text-align: center;
    padding: 1rem;
    color: white;
    font-family: "Manrope", sans-serif;
    font-weight: bolder;
    line-height: 2.5;
}
</style>