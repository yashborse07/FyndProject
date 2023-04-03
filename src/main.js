import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router';
import HomePage from './components/HomePage.vue';
import AboutUs from './components/AboutUs.vue';
import ProjectsnInitiatives from './components/ProjectsnInitiatives.vue';
import ImageGallery from './components/ImageGallery.vue';
import BeAMember from './components/BeAMember.vue';
import DonateUs from './components/DonateUs.vue';
import FeednSuggestion from './components/FeednSuggestion.vue';
import OurCollaborators from './components/OurCollaborators.vue';

Vue.config.productionTip = false;

// register the VueRouter plugin
Vue.use(VueRouter);

// define the routes
const routes = [
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/proninit',
    name: 'ProjectsnInitiatives',
    component: ProjectsnInitiatives
  },


  {
    path: '/BeAMember',
    name: 'BeAMember',
    component: BeAMember
  },
  {
    path: '/DonateUs',
    name: 'DonateUs',
    component: DonateUs
  },
  {
    path: '/FeednSuggestion',
    name: 'FeednSuggestion',
    component: FeednSuggestion
  },
  {
    path: '/image-gallery',
    name: 'ImageGallery',
    component: ImageGallery
  },
  {
    path: '/our-collaborators',
    name: 'OurCollaborators',
    component: OurCollaborators
  },

];

// create the router instance
const router = new VueRouter({
  mode: 'history',
  routes
});

// create the Vue instance with the router option
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
