<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>

import MainTabBar from "./components/content/mainTabbar/MainTabBar.vue";

export default {
  name: 'App',
  components: {
    MainTabBar,
  }
}

import {request} from "./network/request";
</script>

<style>
 /*@import "assets/css/base.css";*/
</style>
