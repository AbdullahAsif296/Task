# Express Hello World API

A simple Express.js API that returns a "Hello, World!" message with automated testing using GitHub Actions.

## Features

- Simple REST API endpoint
- Automated testing with Jest and Supertest
- CI/CD pipeline using GitHub Actions
- Multi-version Node.js testing (16.x, 18.x)

## Installation

```bash
npm install
```

## Running the Application

```bash
npm start
```

The server will start on port 3000 by default. You can change this by setting the `PORT` environment variable.

## Running Tests

```bash
npm test
```

## CI/CD

This project uses GitHub Actions for continuous integration. The workflow:

- Triggers on push to main branch and pull requests
- Tests the application on Node.js 16.x and 18.x
- Runs the test suite using Jest
- Ensures code quality before merging
