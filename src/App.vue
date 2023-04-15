<template>
  <div id="app">
    <header-c />
    <router-view></router-view>
    <footer-extended/>
    <FooterC />
   

    <SocialM />
  </div>
</template>

<script>
import HeaderC from "./components/HeaderC.vue";
import FooterC from "./components/FooterC.vue";
import SocialM from './components/SocialM.vue';
import FooterExtended from './components/FooterExtended.vue';

export default {
  name: "App",
  components: {
    HeaderC,
    FooterC,
    SocialM,
    FooterExtended,
  },
};
</script>

<style>
  
</style>
