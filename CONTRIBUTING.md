# Contributing

Contributions to this repository are welcome. This project is focused on JavaScript kata practice and clear, educational solutions.

## How to Contribute

### Reporting Issues

If you find a bug, typo, or unclear solution:
1. Search existing issues first.
2. Open a new issue with:
   - A clear title
   - The affected file(s)
   - Expected behavior vs actual behavior
   - Reproduction steps (if relevant)

### Submitting Pull Requests

1. Fork the repository.
2. Create a branch:
   ```bash
   git checkout -b feature/kata-improvement
   ```
3. Make focused changes.
4. Run the affected kata file(s) with Node.
5. Open a pull request with a clear description.

## Contribution Guidelines

### Code Style

- Use modern JavaScript syntax when it improves readability.
- Prefer clear variable names over short cryptic names.
- Keep each file easy to scan and educational.
- Preserve the existing style where practical.

### Kata File Format

When adding or updating a kata file in `src/katas/`:
1. Keep the kata statement at the top in comments.
2. Include your solution.
3. Optionally include a popular/community solution for comparison.
4. Add quick runnable examples (for example, with `console.log`).

### Keep Changes Scoped

- One pull request should solve one clear thing.
- Avoid unrelated refactors in the same PR.
- Do not include editor/temp files.

## Local Verification

Before submitting:

```bash
npm install
node src/katas/<changed-file>.js
```

If your change touches multiple kata files, run each changed file at least once.

## Questions

If you have ideas or questions, open an issue and describe what you want to improve.
