<template>
  <section class="Ranking-container">
    <h1 class="Ranking-title">RANKING</h1>
    <article class="Ranking-table-container">
      <p class="Ranking-table-title">TOP MONEY</p>
      <table>
        <tr class="Ranking-table-row">
          <td class="Ranking-table-field-num">1</td>
          <td>
            <div class="Ranking-container-skin-player">
              <img
                class="Ranking-heade-skin"
                src="/images/headeskin.png"
                alt=""
              />
              <p class="Ranking-table-row-player-name">Erikaum</p>
            </div>
          </td>
          <td class="Ranking-table-row-money">1000000</td>
        </tr>
        <tr class="Ranking-table-row">
          <td class="Ranking-table-field-num">2</td>
          <td>
            <div class="Ranking-container-skin-player">
              <img
                class="Ranking-heade-skin"
                src="/images/sussa.png"
                alt=""
              />
              <p class="Ranking-table-row-player-name">SUSSA</p>
            </div>
          </td>
          <td class="Ranking-table-row-money">1.4000</td>
        </tr>
        <tr class="Ranking-table-row">
          <td class="Ranking-table-field-num">3</td>
          <td>
            <div class="Ranking-container-skin-player">
              <img
                class="Ranking-heade-skin"
                src="/images/distroier.png"
                alt=""
              />
              <p class="Ranking-table-row-player-name">Distroier</p>
            </div>
          </td>
          <td class="Ranking-table-row-money">1.2000</td>
        </tr>
        <tr class="Ranking-table-row">
          <td class="Ranking-table-field-num">4</td>
          <td>
            <div class="Ranking-container-skin-player">
              <img
                class="Ranking-heade-skin"
                src="/images/distroier.png"
                alt=""
              />
              <p class="Ranking-table-row-player-name">Distroier</p>
            </div>
          </td>
          <td class="Ranking-table-row-money">1.2000</td>
        </tr>
        <tr class="Ranking-table-row">
          <td class="Ranking-table-field-num">5</td>
          <td>
            <div class="Ranking-container-skin-player">
              <img
                class="Ranking-heade-skin"
                src="/images/distroier.png"
                alt=""
              />
              <p class="Ranking-table-row-player-name">Distroier</p>
            </div>
          </td>
          <td class="Ranking-table-row-money">1.2000</td>
        </tr>
      </table>
    </article>
  </section>
</template>
<script>
export default {
  name: "ranking",
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap");
@font-face {
  font-family: "mine";
  src: url("../../fonts/Minercraftory.ttf") format("truetype");
}
.Ranking-container{
  margin-bottom: 4rem;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
.Ranking-title {
  font-family: mine;
  font-size: 2rem;
  color: #4C1DB1;
  margin-left: 3rem;
}

.Ranking-table-title {
  background-color: rgb(16, 146, 186);
  font-family: mine;
  color: white;
  padding: 1.5rem;
}
.Ranking-table-container {
  width: 400px;
  background-color: rgba(16, 146, 186, 0.459);
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
}
table{
    width: 100%;
}
td{
    padding: 1rem;
    width: 120px;
    font-family: "Manrope", sans-serif;
    font-weight: bolder;
   
}
tr{
    text-align: center;
 
}
table{
    text-align: center;
}
.Ranking-table-row {
  display: flex;
  justify-content: space-around;


  font-family: mine;
  font-size: 0.7rem;
 
}
.Ranking-heade-skin {
  width: 22px;
}
.Ranking-container-skin-player {
  display: flex;
  align-items: center;
  color:rgb(16, 146, 186); ;
  width: 120px;
}
.Ranking-table-row-player-name {
  margin-left: 1rem;
}
.Ranking-table-row-money {
  color: rgb(16, 146, 186);
  display: flex;
  justify-content: center;
  align-items: center;
}
.Ranking-table-field-num{
    color: rgba(0, 0, 0, 0.381);
}
</style>
