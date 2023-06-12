<template>
  <section class="Shop-containe-geral">
    <h1 class="Shop-title">LOJA</h1>
    <section class="Shop-container">
      <div class="Shop-card-container">
        <div class="Shop-card-container-image">
          <img class="Shop-card-image" src="/images/zeus.png" alt="" />
        </div>
        <div class="Shop-card-data">
          <p class="Shop-card-name">KIT Zeus</p>
          <p class="Shop-card-value">R$ 39,99</p>
        </div>
      </div>
      <div class="Shop-card-container">
        <div class="Shop-card-container-image">
          <img class="Shop-card-image" src="/images/zeus.png" alt="" />
        </div>
        <div class="Shop-card-data">
          <p class="Shop-card-name">KIT Zeus</p>
          <p class="Shop-card-value">R$ 39,99</p>
        </div>
      </div>
      <div class="Shop-card-container">
        <div class="Shop-card-container-image">
          <img class="Shop-card-image" src="/images/zeus.png" alt="" />
        </div>
        <div class="Shop-card-data">
          <p class="Shop-card-name">KIT Zeus</p>
          <p class="Shop-card-value">R$ 39,99</p>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  name: "loja",
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap");
@font-face {
  font-family: "mine";
  src: url("../../fonts/Minercraftory.ttf") format("truetype");
}
.Shop-title {
  font-family: mine;
  font-size: 2rem;
  color: #4c1db1;
  margin-left: 3rem;

}
.Shop-card-container-image {
  background-color: rgba(18, 18, 18, 0.12);
}
.Shop-containe-geral{
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
.Shop-card-image {
  width: 200px;
  transition: 0.2s ease-in-out;
}
.Shop-card-data {
  font-family: "Manrope", sans-serif;
  margin-top: 1rem;
  margin-left: 1rem;
  color: rgb(16, 146, 186);
}
.Shop-card-container {
  box-shadow: rgba(40, 41, 61, 0.04) 0px 4px 8px,
    rgba(96, 97, 112, 0.16) 0px 8px 16px;
  width: 200px;
  transition: box-shadow 200ms ease 0s;
  padding-bottom: 1rem;
  border-radius: 10px;
  margin: 1rem;
  cursor: pointer;
}
.Shop-card-container:hover > .Shop-card-container-image > .Shop-card-image{
    transform: scale(105%);
}
.Shop-card-container:hover > .Shop-card-data > .Shop-card-name{
    text-decoration: underline;
}

.Shop-card-value {
  color: rgba(16, 146, 186, 0.719);
  margin-top: 1rem;
}
.Shop-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 3rem;
}

</style>
