Act as a Next.js 15 developer working on a take-home project for a user dashboard. Help me scaffold a clean, modern project using App Router and server/client component conventions, includes comments as a developer . I want:

🎨 PROJECT STRUCTURE & UI GOALS:
A homepage that redirects to /users

A /users page that:

Fetches users from https://jsonplaceholder.typicode.com/users

Displays them in a responsive table or card grid

Handles loading and error states

Has search/filter functionality (bonus)

A /users/[id] page that:

Fetches user detail by ID

Displays fields like name, email, phone, address, company

Includes a Back to users link

A /users/create page (optional bonus):

Simple form to create a new user (just UI)

Includes form validation and submit button

🛠 TECH & TOOLS:
Next.js 15 App Router

TailwindCSS (basic styling, responsive layout)

Server Components for data fetching

Client Components for interactivity (forms, buttons)

async/await with proper error boundaries

TypeScript + reusable types/interfaces (optional but ideal)

Clean folder structure: components/, app/, lib/, types/, hooks/, etc.

Include loading skeletons, error boundaries, and UX polish

