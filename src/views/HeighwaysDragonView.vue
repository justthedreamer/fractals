<script setup lang="ts">
import HeighwaysDragonCurveCanvas from "../components/HeighwaysDragonCurveCanvas.vue";
import {defaultHeighwaysDragonColoringRules} from "../fractals/heighways-dragon-curve/coloring.ts";
import type {HeighwaysDragonSettings} from "../fractals/heighways-dragon-curve/types.ts";
import type {CanvasSettings} from "../types/canvas.ts";

const canvasSettings: CanvasSettings = {
  width: 600,
  height: 300,
  color: "transparent"
}

const curveSettings: HeighwaysDragonSettings = {
  iterations: 12,
  lineLength: 2,
  initialState: {
    x: canvasSettings.width / 1.1,
    y: canvasSettings.height / 2,
    angle: 0
  }
}

</script>

<template>
  <main class="d-flex align-items-center">
    <h1>Heighways dragon curve</h1>
    <heighways-dragon-curve-canvas id="heighways-dragon-curve-main"
                                   :width="canvasSettings.width"
                                   :height="canvasSettings.height"
                                   :coloring-rules="defaultHeighwaysDragonColoringRules"
                                   :settings="curveSettings"
                                   :steps-per-frame="50"/>
  </main>
</template>

<style scoped>

</style>
