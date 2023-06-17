<template>
  <section class="container-geral">
    <section class="container-top">
      <Header  v-show="showComponent" class="header-component" :style="{ top: headerTop }"></Header>
      <RouterView></RouterView>
    </section>
    <rodape v-show="showComponent"></rodape>
  </section>
</template>
<script>
import rodape from "./components/footer.vue";
import Header from "./components/header.vue";
import apresentation from "./components/apresentation.vue";
import HomeView from "./views/HomeView.vue";

export default {
  data() {
    return {
      headerTop: "0",
      lastscroll: 0,
    };
  },
  computed:{
    showComponent(){
      return this.$route.name !== "nolitimere"
    }
  },
  components: {
    Header,
    HomeView,
    rodape,
  },
  mounted() {
    window.addEventListener("scroll", this.headerScroll);
  },
  methods: {
    headerScroll() {
      let scrolltop = window.scrollY;
      console.log(scrolltop);
      if (scrolltop > this.lastscroll) {
        this.headerTop = "-200px";
      } else {
        this.headerTop = "0";
      }
      this.lastscroll = scrolltop;
    },
  },
};
</script>
<style>
* {
  padding: 0rem;
  margin: 0rem;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.container-top {
  flex: 1;
}

.container-geral {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
