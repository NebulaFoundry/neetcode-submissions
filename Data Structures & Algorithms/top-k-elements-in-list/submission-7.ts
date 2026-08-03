class MinHeap {
    private heap: [number, number][] = []; // [num, freq] pairs

    size(): number {
        return this.heap.length;
    }

    peek(): [number, number] {
        return this.heap[0];
    }

    push(pair: [number, number]): void {
        this.heap.push(pair);
        this.siftUp(this.heap.length - 1);
    }

    pop(): [number, number] {
        const top = this.heap[0];
        const last = this.heap.pop()!;
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.siftDown(0);
        }
        return top;
    }

    private siftUp(i: number): void {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[parent][1] <= this.heap[i][1]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    private siftDown(i: number): void {
        const n = this.heap.length;
        while (true) {
            let smallest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;
            if (left < n && this.heap[left][1] < this.heap[smallest][1]) smallest = left;
            if (right < n && this.heap[right][1] < this.heap[smallest][1]) smallest = right;
            if (smallest === i) break;
            [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
            i = smallest;
        }
    }
}

class Solution {
    topKFrequent(nums: number[], k: number): number[] {
        const seen = new Map<number, number>();
        for (const num of nums) {
            seen.set(num, (seen.get(num) || 0) + 1);
        }

        const heap = new MinHeap();
        for (const entry of seen.entries()) {
            if (heap.size() < k) {
                heap.push(entry);
            } else if (entry[1] > heap.peek()[1]) {
                heap.pop();
                heap.push(entry);
            }
        }

        const result: number[] = [];
        while (heap.size() > 0) {
            result.push(heap.pop()[0]);
        }
        return result;
    }
}