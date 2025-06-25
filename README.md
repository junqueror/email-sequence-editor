# Welcome to React Email Sequence Editor

Simple sequence editor for generating email sequence steps

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:3000`.

## Building for Production

Create a production build:

```bash
npm run build
```

## App code structure

```
app/
│
├── app.css           # Global styles for the application (Tailwind CSS config)
├── root.tsx          # Main app entry/root component (often sets up providers, layout, etc.)
├── routes.ts         # Route definitions for the app
│
├── assets/           # Static assets (images, SVGs, fonts) imported in code
│
├── components/       # Reusable UI components
│   ├── elements/     # Basic UI elements
│   ├── layout/       # Layout-related components
│
├── config/           # App configuration
│
├── hooks/            # Custom React hooks (data fetching, reusable logic, isolated logic)
│   ├── api/          # Hooks for API calls
│
├── pages/            # Top-level pages/views (routed screens)
│   ├── home/         # Home page and components
│   ├── editor/       # Email sequence editor and components
│
├── services/         # Business logic and API service modules
│   ├── api/          # API service implementations
│
├── types/            # TypeScript type definitions (domain). Used across all the app
tests/
│   ├── fixtures/     # Fake data for testing
│   ├── mocks/        # Fake logic for testing
│   ├── app/          # Same strcuture as app folder for test files
│
```

## Deployment

[email-sequence-editor.vercel.app](https://email-sequence-editor.vercel.app/)
