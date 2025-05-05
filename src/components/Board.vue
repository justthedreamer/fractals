<script setup lang="ts">
import {CANVAS_ID} from "../utils/canvas.ts";

interface Props {
  width: number,
  height: number
}

defineProps<Props>()
</script>

<template>
  <canvas :id="CANVAS_ID" :width="width" :height="height"></canvas>
</template>

<style scoped>
canvas {
  border: 1px solid white;
}
</style>