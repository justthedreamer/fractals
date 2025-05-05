import type {Vertex} from "../../types/shared.ts";
import {drawDot} from "../../utils/drawing.ts";
import type {CanvasProps} from "../../types/canvas.ts";

type DrawCb = (point: Vertex) => void;

export class SierpinskiTriangleChaos {
    public readonly vertices: Vertex[];
    public readonly iterations: number;
    public step: number = 0;
    private point: Vertex;

    constructor(vertices: Vertex[], iterations: number, startPoint: Vertex) {
        this.vertices = vertices;
        this.iterations = iterations;
        this.point = startPoint;
    }

    // calculate all points for defined settings.
    // use this function on to create fluent animation on canvas.
    run(drawCb: DrawCb) {
        if (!this.vertices) {
            throw new Error("Triangle vertices isn't defined.")
        }
        if (this.vertices.length != 3) {
            throw new Error("Triangle must have exactly 3 vertices.")
        }

        // recursive animation
        const animate = () => {
            if (this.step >= this.iterations) return;

            const target = this.getRandomVertex()

            this.point = this.nextPoint(this.point, target)

            drawCb(this.point)

            this.step++;

            requestAnimationFrame(animate);
        }

        // start animation
        requestAnimationFrame(animate);
    }

    // gets new vertex based on 'current' and 'target' entries.
    // returned vertex has it's points at half distance between entry points.
    private nextPoint(current: Vertex, target: Vertex): Vertex {
        return {
            x: (current.x + target.x) / 2,
            y: (current.y + target.y) / 2
        }
    }

    private getRandomVertex(): Vertex {
        const index = Math.floor(Math.random() * this.vertices.length);
        return this.vertices[index];
    }
}

function getTriangleVertices(props: CanvasProps, padding: number = 0): Vertex[] {
    const a: Vertex = {
        x: padding,
        y: props.clientHeight - padding,
    };

    const b: Vertex = {
        x: props.clientWidth - padding,
        y: props.clientHeight - padding,
    }

    const c: Vertex = {
        x: props.clientWidth / 2,
        y: padding,
    }

    return [a, b, c]
}

function getRandomStartPoint(props: CanvasProps): Vertex {
    return {
        x: Math.random() * props.width,
        y: Math.random() * props.height
    }
}

export function sierpinskiTriangleChaos(ctx: CanvasRenderingContext2D, props: CanvasProps, iterations: number = 10_000): void {
    const vertices = getTriangleVertices(props);
    const startPoint = getRandomStartPoint(props);

    const triangle = new SierpinskiTriangleChaos(vertices, iterations, startPoint);

    triangle.run((point: Vertex) => {
        drawDot(ctx, point, 1, "#fff")
    })
}