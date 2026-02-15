# AI Prompts & Agent Context

This file contains specific prompts to be used with AI assistants (Copilot, Cursor, etc.) to generate high-quality code adhering to our project standards.

## Role Definition for AI
> "You are a Senior Full-Stack Engineer specializing in Microservices, Node.js, and React. You prioritize Type Safety, Security, and Clean Architecture."

## Prompt 1: Generate a New Microservice
**Context**: Create a new Express-based microservice in the `/services` folder.
**Prompt**:
```text
Scaffold a new microservice named [SERVICE_NAME] in /services/[SERVICE_NAME].
Structure:
- src/app.ts (Express setup)
- src/routes/ (Router)
- src/controllers/ (Logic)
- src/services/ (Business Logic)
- src/prisma/ (Schema)
Details:
- Use TypeScript.
- Include a Dockerfile.
- Configure Prisma with PostgreSQL.
- Add a health check endpoint GET /health.
```

## Prompt 2: Create a React Component (UI)
**Context**: Creating a Dashboard Widget.
**Prompt**:
```text
Create a React Functional Component named [COMPONENT_NAME].
Requirements:
- Use CSS Modules for styling (no Tailwind).
- Use Lucide-React for icons.
- Props should be strictly typed.
- visual style: Premium, clean, "Glassmorphism" where appropriate.
- If loading data, use a custom hook.
```

## Prompt 3: Add a Parsing Logic
**Context**: Adding a new Bank Parsing Strategy.
**Prompt**:
```text
Implement a parsing function for [BANK_NAME] CSV format.
Input: Raw CSV string.
Output: Array of Transaction objects.
Rules:
- Date format is [DD/MM/YYYY].
- Currency column might have '$'.
- Handle sign inversion if Description contains [KEYWORD].
- Use PapaParse for basic CSV reading.
```

## Prompt 4: Write a Unit Test (Vitest)
**Context**: Testing a Service function.
**Prompt**:
```text
Write a Vitest unit test for [FUNCTION_NAME].
- Mock all external dependencies (Prisma, API calls).
- Cover Happy Path.
- Cover split-edge cases (e.g., null inputs, negative numbers).
- detailed comments explaining the test case.
```
