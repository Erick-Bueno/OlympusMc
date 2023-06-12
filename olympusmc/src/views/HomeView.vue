<template>
    <apresentation></apresentation>
    <about></about>
    <ranking></ranking>
    <loja></loja>
    <discord></discord>
</template>

<script>
import apresentation from '@/components/apresentation.vue';
import about from '@/components/about.vue';
import ranking from '@/components/ranking.vue';
import loja from '@/components/loja.vue';
import discord from '@/components/discord.vue';
export default{
    name: "home",
    components:{apresentation, about, ranking, loja, discord}
}
</script>
