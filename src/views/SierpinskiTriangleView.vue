<script setup lang="ts">
import SierpinskiTriangleChaosCanvas from "../components/SierpinskiTriangleChaosCanvas.vue";
import type {CanvasSettings} from "../types/canvas.ts";

const canvasSettings: CanvasSettings = {
  width: 400,
  height: 300,
  color: "transparent"
}

const iterations = 15_000;

</script>

<template>
  <main class="d-flex align-items-center">
    <h1>Sierpinski triangle (chaos)</h1>
    <sierpinski-triangle-chaos-canvas id="sierpinski-triangle-chaos-canvas"
                                      :width="canvasSettings.width"
                                      :height="canvasSettings.width"
                                      :iterations="iterations"/>
  </main>
</template>

<style scoped>

</style>