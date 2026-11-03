# BenchLab

Free static browser benchmark. Tests run on the visitor's device. Results are not uploaded.

## Publish with GitHub Pages

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Set branch to `main` and folder to `/(root)`, then Save.
4. After deployment, visit https://grewellash-netizen.github.io/benchlab/

## Local testing

Serve this folder over localhost (recommended for Web Workers, Web Crypto and IndexedDB):

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/`.

## Use

- Full benchmark: 28 browser workloads, warm-up and three timed repetitions.
- Quick check: reduced workloads and one timed run; do not compare Quick with Full.
- Export results to JSON on one computer and import the file on another.
- Set a report as a local comparison baseline in that browser.

A comparison ratio above 1× means the current device completed that category faster than the baseline.

## Limitations

These JavaScript browser workloads are not comparable with the separate Python Suite 3.0. Browser engine/version, power state, cooling and background activity affect results. Browser-reported hardware details may be approximate. Typed-array tests are not DRAM bandwidth tests, IndexedDB tests are not raw SSD benchmarks, and Web Worker timings include startup/message overhead. Some browser APIs may be unavailable; those tests are skipped.

## Files

- `index.html` — page structure
- `style.css` — responsive interface
- `benchmark.js` — test engine, reports, comparison/export
- `worker.js` — parallel worker workload
