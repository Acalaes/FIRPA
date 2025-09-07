# FIRPA - Framework Inteligente de RPA para Administração Pública

## Overview

FIRPA is a research-based web application that provides a digital maturity assessment framework for implementing Robotic Process Automation (RPA) in public sector organizations. Built on academic research presented at EnANPAD 2025, it offers an interactive calculator to evaluate organizational readiness across multiple dimensions and provides actionable recommendations for RPA implementation.

The application features a modern landing page with an interactive maturity calculator, case studies, methodology explanations, and contact forms. It's designed to help public sector organizations assess their digital transformation readiness and plan strategic automation initiatives.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **State Management**: TanStack Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

### Backend Architecture
- **Runtime**: Node.js with Express.js web framework
- **Language**: TypeScript throughout the full stack for consistency and type safety
- **Development**: TSX for TypeScript execution in development
- **Build Process**: ESBuild for fast production builds

### Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Development Storage**: In-memory storage implementation for local development
- **Connection**: Neon Database serverless PostgreSQL for production

### Component Architecture
- **Design System**: shadcn/ui components with Radix UI primitives
- **Layout**: Component-based architecture with reusable UI elements
- **Accessibility**: Built-in accessibility features through Radix UI components
- **Responsive Design**: Mobile-first responsive design with Tailwind CSS

### Development Workflow
- **Type Safety**: Full TypeScript implementation with strict configuration
- **Code Quality**: ESLint and TypeScript compiler checks
- **Hot Reload**: Vite HMR for fast development iteration
- **Path Aliases**: Configured import aliases for clean code organization

## External Dependencies

### Core Libraries
- **@neondatabase/serverless**: Serverless PostgreSQL database driver for Neon Database
- **drizzle-orm**: Type-safe SQL query builder and ORM
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation

### UI Framework
- **@radix-ui/***: Complete set of accessible, unstyled UI primitives
- **tailwindcss**: Utility-first CSS framework for rapid styling
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Utility for conditional CSS class names

### Frontend Tools
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Performant forms with easy validation
- **wouter**: Minimalist router for React applications
- **date-fns**: Modern JavaScript date utility library

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking for JavaScript
- **tsx**: TypeScript execution engine for Node.js
- **@replit/vite-plugin-runtime-error-modal**: Enhanced error reporting for Replit environment

### Database & Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **nanoid**: Secure, URL-safe unique string ID generator

### Build & Deployment
- **esbuild**: Fast JavaScript bundler for production builds
- **postcss**: CSS post-processor for Tailwind CSS
- **autoprefixer**: Automatic vendor prefix handling for CSS