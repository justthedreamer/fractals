import {createMemoryHistory, createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HeighwaysDragonView.vue'
import {HeighwaysDragonCurve} from "../fractals/heighways-dragon-curve/main.ts";
import HeighwaysDragonView from "../views/HeighwaysDragonView.vue";
import SierpinskiTriangleView from "../views/SierpinskiTriangleView.vue";

export const sierpinskiTriangleRoute: RouteRecordRaw = {
    path: "/sierpinski-triangle",
    name: 'sierpinski-triangle',
    component: SierpinskiTriangleView,
}

export const heighwaysDragonCurveRoute: RouteRecordRaw = {
    path: '/',
    name: 'heighways-dragon-curve',
    component: HeighwaysDragonView,
}

const router = createRouter({
    history: createMemoryHistory(),
    routes: [sierpinskiTriangleRoute, heighwaysDragonCurveRoute],
})

export default router
