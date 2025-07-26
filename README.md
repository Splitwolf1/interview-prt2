# User Dashboard
##Interview Part 2 project 
A modern, professional user management dashboard built with Next.js 15, featuring a clean design with brown/tan color scheme and blue accents.

## Overview

This application provides a comprehensive user management interface that allows you to view, search, and manage user information. The dashboard fetches user data from the JSONPlaceholder API and presents it in both table and grid layouts with advanced search and filtering capabilities.

## Key Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Multiple View Modes**: Switch between table and grid layouts
- **Advanced Search**: Search users by name, email, username, or company
- **User Details**: Comprehensive user detail pages with contact, address, and company information
- **User Creation**: Form-based user creation with validation (demo functionality)
- **Professional UI**: Clean, business-appropriate design with warm brown tones and blue accents
- **Modern Architecture**: Built with Next.js 15 App Router and TypeScript

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Server and Client Components
- **Data Fetching**: Native fetch with Next.js caching
- **API**: JSONPlaceholder (https://jsonplaceholder.typicode.com)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── users/             # User-related pages
│   │   ├── [id]/          # Dynamic user detail pages
│   │   ├── create/        # User creation page
│   │   └── page.tsx       # Main users listing page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage (redirects to /users)
├── components/            # Reusable UI components
│   ├── UserCard.tsx       # Grid view user cards
│   ├── UserTable.tsx      # Table view user list
│   ├── UserDetail.tsx     # User detail component
│   ├── CreateUserForm.tsx # User creation form
│   ├── Loading.tsx        # Loading skeleton
│   └── Error.tsx          # Error handling component
├── lib/                   # Utility functions
│   ├── fetchUsers.ts      # API call to get all users
│   └── fetchUserById.ts   # API call to get user by ID
└── types/                 # TypeScript type definitions
    └── user.ts            # User-related interfaces
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd interview-prt2
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open the application**
   
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the dashboard.

### Build for Production

```bash
npm run build
npm start
```

## Usage

### Navigation

- **Homepage** (`/`): Automatically redirects to the users page
- **Users Dashboard** (`/users`): Main dashboard with user list and search
- **User Details** (`/users/[id]`): Detailed view of individual users
- **Create User** (`/users/create`): Form to create new users (demo)

### Features

- **Search**: Use the search bar to filter users by name, email, or company
- **View Toggle**: Switch between table and grid layouts using the view buttons
- **User Details**: Click "View Details" to see comprehensive user information
- **Responsive**: The interface adapts to different screen sizes automatically

## Color Scheme

The application uses a professional color palette:

- **Primary Background**: Warm brown/tan tones (Stone color family)
- **Action Buttons**: Blue (`#4b9fc3`) for primary actions
- **Accent Elements**: Teal (`#7fd4e1`) for secondary actions
- **Links**: Standard blue (`text-blue-600`) for navigation links

## Development

### Code Quality

- **TypeScript**: Full type safety throughout the application
- **ESLint**: Code linting and formatting
- **Next.js Best Practices**: Modern patterns and performance optimization

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is built as a part of my interview.
