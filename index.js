import * as pc from 'playcanvas';
import { HTMLCanvasElement } from '@playcanvas/canvas-mock';

global.gc(); // Trigger garbage collection to ensure that the test doesn't have any garbage left over

const startMemory = process.memoryUsage().heapUsed;

for (let i = 0; i < 100; ++i) {
    let app = new pc.Application(new HTMLCanvasElement(100, 100));
    app.destroy();
    app = null;

    global.gc(); // Trigger garbage collection to clean up after application destroy
    console.log(process.memoryUsage().heapUsed);
}

global.gc();

console.log(`Heap used before applications: ${startMemory}`);
console.log(`Heap used after applications: ${process.memoryUsage().heapUsed}`);
