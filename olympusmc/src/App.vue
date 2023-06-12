<template>
    <Header class="header-component" :style="{top:headerTop }"></Header>
    <RouterView></RouterView>
</template>
<script>
    import Header from './components/header.vue';
    import apresentation from './components/apresentation.vue';
    import HomeView from './views/HomeView.vue';
    
    export default{
        data(){
            return{
                headerTop:"0",
                lastscroll: 0,
               
                
            }
        },
        components:{
            Header,
            HomeView
        },
        mounted(){
            window.addEventListener("scroll", this.headerScroll);
        },
        methods:{
            headerScroll(){
                let scrolltop = window.scrollY
                console.log(scrolltop)
                if(scrolltop > this.lastscroll){
                    this.headerTop = "-200px"
                }
                else{
                    this.headerTop = "0"
                }
                this.lastscroll = scrolltop
            }
        },
    }
</script>
<style>
    *{
        padding: 0rem;
        margin: 0rem;
        box-sizing: border-box;
    }
</style>
