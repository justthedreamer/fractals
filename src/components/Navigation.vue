<script setup lang="ts">
import {heighwaysDragonCurveRoute, sierpinskiTriangleRoute} from "../router";
</script>

<template>
  <nav class="d-flex justify-content-around w-100">
    <router-link :to="sierpinskiTriangleRoute">Sierpinski triangle</router-link>
    <router-link :to="heighwaysDragonCurveRoute">Heighways dragon curve</router-link>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: var(--vt-c-black-mute);
}

nav a {
  width: 100%;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  color: var(--vt-c-white);
}

nav a:hover {
  background-color: var(--vt-c-black-soft);
  cursor: pointer;
}
</style>