# Instructions

## Setup

1. Open the project in your IDE.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Go to the `src/katas/` directory and pick a kata file.
4. Run the file with Node:
   ```bash
   node src/katas/<kata-file>.js
   ```

## Quick Examples

```bash
node src/katas/duplicateEncoder.js
node src/katas/firstNonRepeatingCharacter.js
node src/katas/yourOrderPlease.js
```

## How Files Are Organized

Most kata files follow this shape:
- Problem statement in a top comment block
- A popular/community approach
- A personal approach
- A few `console.log` examples for quick output checks

## Adding a New Kata

1. Create a new file in `src/katas/`, for example:
   ```text
   src/katas/someKataName.js
   ```
2. Add:
   - The kata description
   - Your solution
   - Optional community solution for comparison
   - A few `console.log` sample calls
3. Run it locally:
   ```bash
   node src/katas/someKataName.js
   ```

## Troubleshooting

### `node` is not recognized
- Ensure Node.js is installed and added to `PATH`.
- Restart terminal/IDE after installing Node.js.

### `Cannot find module ...`
- Run `npm install` again from the project root.
- Check that you are running commands from the repository root.

### No output shown
- Verify the file has executable statements (for example, `console.log` calls).
- Confirm the function is actually invoked.

## Author

- **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
- Or Assayag <orassayag@gmail.com>
- GitHub: https://github.com/orassayag
- StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
- LinkedIn: https://linkedin.com/in/orassayag