<script setup lang="ts">
import {nextTick, onMounted} from "vue";
import {sierpinskiTriangleChaos} from "../fractals/sierpinski-triangle/chaos.ts";
import {getCanvasContext, getCanvasProps} from "../utils/canvas.ts";

interface Props {
  id: string,
  width: number,
  height: number,
  iterations: number,
}

const props = defineProps<Props>()

onMounted(() => {
  nextTick(() => {
    const canvasProps = getCanvasProps(props.id)
    const ctx = getCanvasContext(props.id);
    sierpinskiTriangleChaos(ctx, canvasProps, props.iterations)
  })
})
</script>

<template>
  <canvas :id="id" :width="width" :height="height"/>
</template>

<style scoped>

</style>