<script setup lang="ts">
import {nextTick, onMounted, type Prop} from "vue";
import {heighwaysDragonCurve} from "../fractals/heighways-dragon-curve/main.ts";
import {getCanvasContext} from "../utils/canvas.ts";
import type {HeighwaysDragonColoringRule, HeighwaysDragonSettings} from "../fractals/heighways-dragon-curve/types.ts";

interface Props {
  id: string,
  width: number,
  height: number,
  settings: HeighwaysDragonSettings
  coloringRules: HeighwaysDragonColoringRule,
  stepsPerFrame: number,
}

const props = defineProps<Props>()

onMounted(() => {
  nextTick(() => {
    const ctx = getCanvasContext(props.id)
    heighwaysDragonCurve(props.settings, props.coloringRules, props.stepsPerFrame, ctx)
  })
})
</script>

<template>
  <canvas :id="id" :width="width" :height="height"/>
</template>

<style scoped>

</style>