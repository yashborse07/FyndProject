<template>
  <div id="app">
    <header-c />
    <router-view></router-view>
    <FooterC />
    <SocialM />
  </div>
</template>

<script>
import HeaderC from "./components/HeaderC.vue";
import FooterC from "./components/FooterC.vue";
import SocialM from './components/SocialM.vue';

export default {
  name: "App",
  components: {
    HeaderC,
    FooterC,
    SocialM,
  },
};
</script>

<style>

</style>
