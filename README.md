# CodeWars Solutions

A JavaScript kata collection with problem statements, community-style solutions, and personal implementations from [Codewars](https://www.codewars.com/).

Built in May 2021. The project is intentionally lightweight and focused on readable, runnable kata files.

## Features

- JavaScript kata implementations in `src/katas/`
- Side-by-side "community" and "my solution" approaches in many files
- Inline examples and quick console-based verification
- Minimal setup (`npm install` only)
- Good for algorithm practice, review, and experimentation

## Project Structure

```text
codewars-github/
├── src/
│   └── katas/                   # Individual kata solution files
│       ├── duplicateEncoder.js
│       ├── firstNonRepeatingCharacter.js
│       ├── yourOrderPlease.js
│       └── ...                  # More kata files
├── INSTRUCTIONS.md              # Quick setup and usage guide
├── CONTRIBUTING.md              # Contribution guidelines
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v12+ recommended)
- npm
- Any code editor (VS Code recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/orassayag/codewars-github.git
cd codewars-github
```

2. Install dependencies:
```bash
npm install
```

## Running Katas

Run any kata file directly with Node:

```bash
node src/katas/duplicateEncoder.js
```

More examples:

```bash
node src/katas/firstNonRepeatingCharacter.js
node src/katas/yourOrderPlease.js
```

## Repository Conventions

- File names are usually based on kata names.
- Each file can include:
  - Kata description (comment block)
  - A popular/community solution
  - A personal solution
  - Example calls using `console.log`
- Some files also include commented test snippets from Codewars.

## Contributing

Contributions are welcome, including:
- New kata solutions
- Improvements to existing implementations
- Better readability and edge-case handling
- Documentation updates

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## Author

- **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
- Or Assayag <orassayag@gmail.com>
- GitHub: https://github.com/orassayag
- StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
- LinkedIn: https://linkedin.com/in/orassayag

## License

This project is currently `UNLICENSED` (as defined in `package.json`).