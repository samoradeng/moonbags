# Merge conflict notes (script.js)

If GitHub shows this branch has conflicts in `script.js`, resolve from command line with:

```bash
git fetch origin
git checkout codex/find-why-table-data-is-not-displaying-mrlnsi
git merge origin/main
```

If conflict is only in `script.js` and you want to keep the feature work from this branch (status banner, sparkline, caching/backoff, prefs, copy watchlist), use:

```bash
git checkout --ours script.js
git add script.js
git commit -m "Resolve merge conflict in script.js by keeping branch implementation"
git push
```

If you need to preserve specific new logic from `main`, use a 3-way view:

```bash
git mergetool
```

Recommended conflict resolution order:

1. Keep the fetch lifecycle (`fetchCryptoData`, `setStatus`, cache/backoff variables).
2. Keep preference helpers (`loadUserPreferences`, `persistUserPreferences`).
3. Keep rendering helpers (`createSparklineSvg`, `displayResult` with coin links).
4. Re-apply any upstream text/content edits from `main`.

After merge:

```bash
node --check script.js
git push
```
