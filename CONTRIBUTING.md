# Contributing to Asisten Sebaya

First off, thank you for considering contributing to Asisten Sebaya! It's people like you that make Asisten Sebaya such a great tool.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setting Up Your Development Environment](#setting-up-your-development-environment)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Your First Code Contribution](#your-first-code-contribution)
  - [Pull Requests](#pull-requests)
- [Styleguides](#styleguides)
  - [Git Commit Messages](#git-commit-messages)
  - [TypeScript Styleguide](#typescript-styleguide)
  - [React Component Styleguide](#react-component-styleguide)
  - [Documentation Styleguide](#documentation-styleguide)
- [Additional Notes](#additional-notes)
  - [Issue and Pull Request Labels](#issue-and-pull-request-labels)

## Code of Conduct

This project and everyone participating in it is governed by the [Asisten Sebaya Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** (v2.30.0 or higher)
- A code editor (we recommend [Visual Studio Code](https://code.visualstudio.com/))

### Setting Up Your Development Environment

1. **Fork the repository**

   Click the "Fork" button at the top right of the repository page.

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/asistensebaya.git
   cd asistensebaya
   ```

3. **Add upstream remote**

   ```bash
   git remote add upstream https://github.com/IRedDragonICY/asistensebaya.git
   ```

4. **Install dependencies**

   ```bash
   npm install
   ```

5. **Create environment file**

   ```bash
   cp .env.example .env.local
   ```

   Add your Gemini API key to `.env.local`:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

6. **Start the development server**

   ```bash
   npm run dev
   ```

7. **Verify the setup**

   Open `http://localhost:5173` in your browser. You should see the application running.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for Asisten Sebaya. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

**Before Submitting A Bug Report:**

- Check the [documentation](README.md) for a list of common questions and problems.
- Perform a [cursory search](https://github.com/IRedDragonICY/asistensebaya/issues) to see if the problem has already been reported.
- If it has and the issue is still open, add a comment to the existing issue instead of opening a new one.

**How Do I Submit A Good Bug Report?**

Bugs are tracked as [GitHub issues](https://github.com/IRedDragonICY/asistensebaya/issues). Create an issue using the bug report template and provide the following information:

- Use a clear and descriptive title for the issue
- Describe the exact steps to reproduce the problem
- Provide specific examples to demonstrate the steps
- Describe the behavior you observed after following the steps
- Explain which behavior you expected to see instead and why
- Include screenshots and animated GIFs if possible
- Include your environment details (OS, browser, Node version)
- If the problem is related to performance, include a CPU profile capture

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Asisten Sebaya, including completely new features and minor improvements to existing functionality.

**Before Submitting An Enhancement Suggestion:**

- Check if there's already a package that provides that enhancement
- Perform a [cursory search](https://github.com/IRedDragonICY/asistensebaya/issues) to see if the enhancement has already been suggested
- If it has, add a comment to the existing issue instead of opening a new one

**How Do I Submit A Good Enhancement Suggestion?**

Enhancement suggestions are tracked as [GitHub issues](https://github.com/IRedDragonICY/asistensebaya/issues). Create an issue using the feature request template and provide the following information:

- Use a clear and descriptive title for the issue
- Provide a step-by-step description of the suggested enhancement
- Provide specific examples to demonstrate the steps
- Describe the current behavior and explain which behavior you expected to see instead
- Explain why this enhancement would be useful to most users
- List some other applications where this enhancement exists, if applicable

### Your First Code Contribution

Unsure where to begin contributing to Asisten Sebaya? You can start by looking through these `beginner` and `help-wanted` issues:

- [Beginner issues](https://github.com/IRedDragonICY/asistensebaya/labels/beginner) - issues which should only require a few lines of code
- [Help wanted issues](https://github.com/IRedDragonICY/asistensebaya/labels/help%20wanted) - issues which should be a bit more involved than beginner issues

### Pull Requests

The process described here has several goals:

- Maintain Asisten Sebaya's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible Asisten Sebaya
- Enable a sustainable system for maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. **Create a new branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

   Use a descriptive branch name:
   - `feature/` for new features
   - `fix/` for bug fixes
   - `docs/` for documentation changes
   - `refactor/` for code refactoring
   - `test/` for adding tests
   - `chore/` for maintenance tasks

2. **Make your changes**

   - Write clear, concise code that follows our [styleguides](#styleguides)
   - Add tests for new functionality
   - Update documentation as needed
   - Ensure all tests pass: `npm test`
   - Check for TypeScript errors: `npm run type-check`
   - Lint your code: `npm run lint`

3. **Commit your changes**

   Follow our [commit message guidelines](#git-commit-messages):

   ```bash
   git add .
   git commit -m "feat: add amazing new feature"
   ```

4. **Keep your branch up to date**

   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

5. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**

   - Fill in the [pull request template](.github/PULL_REQUEST_TEMPLATE.md)
   - Do not include issue numbers in the PR title
   - Include screenshots and animated GIFs in your pull request whenever possible
   - Follow the [TypeScript](#typescript-styleguide) and [React](#react-component-styleguide) styleguides
   - Include thoughtfully-worded, well-structured tests
   - Document new code based on the [Documentation Styleguide](#documentation-styleguide)
   - End all files with a newline

7. **Address review feedback**

   - Make requested changes in new commits
   - Re-request review after making changes
   - Mark conversations as resolved when addressed

## Styleguides

### Git Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- Use the present tense ("add feature" not "added feature")
- Use the imperative mood ("move cursor to..." not "moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line
- Consider starting the commit message with an applicable emoji:
  - No emojis in commit messages (professional standard)

**Commit Message Format:**

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

**Examples:**

```
feat(chat): add message history persistence

Implement local storage for chat history to persist conversations
across browser sessions.

Closes #123
```

```
fix(auth): resolve login redirect issue

Fixed an issue where users were not redirected to the home page
after successful login.

Fixes #456
```

### TypeScript Styleguide

All TypeScript code must adhere to the following guidelines:

- Use TypeScript strict mode
- Prefer `const` over `let`, avoid `var`
- Use meaningful variable and function names
- Define types for all function parameters and return values
- Use interfaces for object shapes
- Prefer type inference where possible
- Use enums for fixed sets of values
- Document complex types with JSDoc comments

**Example:**

```typescript
/**
 * Represents a chat message
 */
interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

/**
 * Sends a message to the AI and returns the response
 * @param message - The user's message
 * @returns Promise resolving to the AI's response
 */
async function sendMessage(message: string): Promise<ChatMessage> {
  const response = await geminiService.sendMessage(message);
  return {
    id: generateId(),
    content: response,
    role: 'assistant',
    timestamp: new Date(),
  };
}
```

### React Component Styleguide

- Use functional components with hooks
- Use TypeScript for prop types
- One component per file
- Use meaningful component names (PascalCase)
- Extract complex logic into custom hooks
- Use proper prop destructuring
- Implement proper error boundaries
- Follow the single responsibility principle

**Example:**

```typescript
import React, { useState, useEffect } from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export default function Button({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
```

### Documentation Styleguide

- Use [Markdown](https://guides.github.com/features/mastering-markdown/) for documentation
- Reference functions, classes, and modules in backticks: \`functionName\`
- Use code blocks with language specification for code examples
- Include examples for complex features
- Keep line length to 80 characters where possible
- Use proper heading hierarchy
- Include a table of contents for long documents

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

#### Type of Issue and Issue State

| Label name | Description |
|------------|-------------|
| `bug` | Confirmed bugs or reports likely to be bugs |
| `enhancement` | Feature requests |
| `documentation` | Documentation improvements or additions |
| `good first issue` | Less complex issues for newcomers |
| `help wanted` | Extra attention is needed |
| `question` | Questions more than bug reports or feature requests |
| `wontfix` | The issue will not be worked on |
| `duplicate` | This issue or pull request already exists |
| `invalid` | This doesn't seem right |

#### Pull Request Labels

| Label name | Description |
|------------|-------------|
| `work in progress` | Pull requests that are still being worked on |
| `needs review` | Pull requests that need code review |
| `requires changes` | Pull requests that need to be updated based on review |
| `ready to merge` | Pull requests that are ready to be merged |

---

## Recognition

Contributors who make significant contributions will be added to our [CONTRIBUTORS.md](CONTRIBUTORS.md) file and mentioned in release notes.

## Questions?

Don't hesitate to ask questions! You can:

- Open an issue with the `question` label
- Start a discussion in [GitHub Discussions](https://github.com/IRedDragonICY/asistensebaya/discussions)
- Contact the maintainers directly

## Thank You!

Your contributions to open source, large or small, make projects like this possible. Thank you for taking the time to contribute.
