import type {Vertex} from "../types/shared.ts";

export function drawDot(ctx: CanvasRenderingContext2D,
                        point: Vertex,
                        size: number = 1,
                        color: string = ""): void {

    ctx.fillStyle = color;
    ctx.fillRect(point.x, point.y, size, size);
}