# React Candidate Test Setup Guide

## Step 1: Set Up the Repository

### Create a Repository on GitHub
1. Go to GitHub
2. Click **New Repository**
3. Name it `react-candidate-test` (or your preferred name)
4. Set the repository to **Public** (or Private if you want limited access)
5. Initialize the repository with a README.md

### Clone the Repository
```bash
git clone https://github.com/shivvyas2/react-candidate-test.git
cd react-candidate-test
```

## Step 2: Add the Project

### Copy Project Files
1. Copy your React project files into the repository directory
   - Exclude large files or sensitive data
   - Ensure `node_modules` is excluded

### Set Up Git Configuration
1. Create or update `.gitignore` with common React exclusions:
   ```
   node_modules/
   .env
   build/
   .DS_Store
   coverage/
   ```

2. Initialize Git and push your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for React candidate test"
   git branch -M main
   git remote add origin https://github.com/your-username/react-candidate-test.git
   git push -u origin main
   ```

## Step 3: Create Instructions for Candidates

# React Candidate Test

Welcome! This project is designed to test your React knowledge and skills. Please follow the instructions below to complete the task.

## Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/react-candidate-test.git
   cd react-candidate-test
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

## Task

### 1. Objective
Improve and add features to the application.

### 2. Instructions
- Refactor the Header component to include a dropdown menu
- Implement a Theme Toggle (Dark/Light Mode) using context
- Add a feature to fetch and display data from a public API (e.g., GitHub users or JSONPlaceholder)
- Optimize the project for responsiveness and accessibility

### 3. Bonus Points
- Use TypeScript
- Add unit tests with Jest
- Improve project structure or add comments for clarity

## Submission

1. Commit your changes with meaningful commit messages
2. Push the changes to a **new branch** (e.g., `feature-yourname`)
3. Create a pull request to the main branch of this repository
