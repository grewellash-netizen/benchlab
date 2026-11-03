/* BenchLab Web Worker workload. */
"use strict";
self.onmessage = event => {
  const { iterations, seed } = event.data;
  let s = seed >>> 0, value = 0;
  for (let i = 0; i < iterations; i++) {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    value = (value + ((s ^ (s >>> 13)) & 65535)) >>> 0;
  }
  self.postMessage({ value });
};
