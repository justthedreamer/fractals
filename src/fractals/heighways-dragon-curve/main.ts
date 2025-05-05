import {getCanvasContext} from "../../utils/canvas.ts";
import type {
    HeighwaysDragonColoringRule,
    HeighwaysDragonDrawAction,
    HeighwaysDragonDrawCallback,
    HeighwaysDragonEvaluationRules,
    HeighwaysDragonSettings, HeighwaysDragonState
} from "./types.ts";
import {defaultHeighwaysDragonColoringRules, getBreakpointColor} from "./coloring.ts";
import {defaultHeighwaysDragonSettings} from "./settings.ts";


export class HeighwaysDragonCurve {
    private axiom: string = "FXFYFX-FX";
    private evaluationRules: HeighwaysDragonEvaluationRules = {
        X: "X+YF+",
        Y: "-FX-Y"
    }
    private readonly iterations: number;

    constructor(iterations: number) {
        this.iterations = iterations;
    }

    run(drawCb: HeighwaysDragonDrawCallback, stepsPerFrame: number = 10): void {
        this.generateAxiom();
        let index = 0;
        let drawIndex = 0;

        const drawNext = () => {
            let steps = stepsPerFrame;
            while (steps-- > 0 && index < this.axiom.length) {
                const char = this.axiom[index];
                switch (char) {
                    case 'F':
                        drawCb('DRAW', drawIndex++);
                        break;
                    case '+':
                        drawCb('ROTATE_RIGHT', drawIndex);
                        break;
                    case '-':
                        drawCb('ROTATE_LEFT', drawIndex);
                        break;
                }
                index++;
            }
            if (index < this.axiom.length) {
                requestAnimationFrame(drawNext);
            }
        };

        requestAnimationFrame(drawNext);
    }

    private generateAxiom(): void {
        for (let i = 0; i < this.iterations; i++) {
            let next = '';
            for (const char of this.axiom) {
                next += this.evaluationRules[char as keyof HeighwaysDragonEvaluationRules] ?? char;
            }
            this.axiom = next;
        }
    }
}


function applyDrawAction(
    ctx: CanvasRenderingContext2D,
    action: HeighwaysDragonDrawAction,
    index: number,
    coloringRules: HeighwaysDragonColoringRule,
    lineLength: number,
    state: HeighwaysDragonState) {
    ctx.strokeStyle = getBreakpointColor(index, coloringRules);

    switch (action) {
        case 'DRAW': {
            const newX = state.x + lineLength * Math.cos(state.angle);
            const newY = state.y + lineLength * Math.sin(state.angle);
            ctx.beginPath();
            ctx.moveTo(state.x, state.y);
            ctx.lineTo(newX, newY);
            state.x = newX;
            state.y = newY;
            ctx.stroke();
            break;
        }
        case 'ROTATE_RIGHT': {
            state.angle += Math.PI / 2;
            break;
        }
        case 'ROTATE_LEFT': {
            state.angle -= Math.PI / 2;
            break;
        }
    }
}

export function heighwaysDragonCurve(
    settings: HeighwaysDragonSettings,
    coloringRules: HeighwaysDragonColoringRule = defaultHeighwaysDragonColoringRules,
    stepsPerFrame: number = 10,
    ctx: CanvasRenderingContext2D
): void {
    const {iterations, initialState, lineLength} = settings;
    const curve = new HeighwaysDragonCurve(iterations);

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const state = {...initialState};
    ctx.beginPath();
    ctx.moveTo(state.x, state.y);

    curve.run((action: HeighwaysDragonDrawAction, index: number) => {
        applyDrawAction(ctx, action, index, coloringRules, lineLength, state);
    }, stepsPerFrame);
}

