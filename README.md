FineWare LLC - Official Website
This repository contains the official website for FineWare LLC, a modern landing page built with React, TypeScript, and Vite.

Live Site
The website is deployed and accessible at: https://fineware.tech

Project Overview
The FineWare LLC website serves as the primary online presence for the company, showcasing its services, values, and contact information. It's designed to be a responsive and engaging single-page application.

Tech Stack
React 19: A JavaScript library for building user interfaces.

TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.

Vite: A fast build tool and development server.

CSS Modules: For locally scoped CSS styles.

ESLint: For static code analysis and enforcing code style.

EmailJS: For handling contact form submissions without a backend.

Google Analytics (gtag.js): For website traffic analysis.

GitHub Pages: For deployment.

Project Structure
fineware-landing/
├── public/                   # Static assets (e.g., images, favicon)
│   ├── images/
│   │   ├── cube.gif
│   │   ├── icon-browser.svg
│   │   ├── icon-dropdown.svg
│   │   ├── icon-gear.svg
│   │   ├── icon-globe.svg
│   │   ├── icon-leaf.svg
│   │   ├── icon-palette.svg
│   │   ├── icon-robot.svg
│   │   ├── icon-shield.svg
│   │   ├── icon-star.svg
│   │   └── icon-users.svg
│   └── logo.png
│   └── fw.png                # Favicon
├── src/                      # Source files
│   ├── components/           # React components
│   │   ├── About.module.css
│   │   ├── About.tsx
│   │   ├── Contact.module.css
│   │   ├── Contact.tsx
│   │   ├── Footer.module.css
│   │   ├── Footer.tsx
│   │   ├── Header.module.css
│   │   ├── Header.tsx
│   │   ├── Hero.module.css
│   │   ├── Hero.tsx
│   │   ├── Services.module.css
│   │   └── Services.tsx
│   ├── utils/                # Utility functions
│   │   └── gtag.ts           # Google Analytics helper functions
│   ├── App.css               # Main app styles (minimal)
│   ├── App.tsx               # Root React component
│   ├── global.d.ts           # Global TypeScript type definitions (for gtag)
│   ├── index.css             # Global CSS resets and base styles
│   ├── main.tsx              # Main entry point of the application
│   └── vite-env.d.ts         # Vite environment type definitions
├── .gitignore                # Files and folders to be ignored by Git
├── deploy.js                 # Script for building and deploying to GitHub Pages
├── eslint.config.js          # ESLint configuration
├── index.html                # Main HTML file
├── package-lock.json         # Exact versions of dependencies
├── package.json              # Project metadata and dependencies
├── README.md                 # This file
├── tsconfig.app.json         # TypeScript configuration for the application
├── tsconfig.json             # Base TypeScript configuration
├── tsconfig.node.json        # TypeScript configuration for Node.js environment (e.g., Vite config)
└── vite.config.ts            # Vite configuration file

Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites

Node.js (v18.x or later recommended)

npm (usually comes with Node.js)

Installation

Clone the repository:

git clone [https://github.com/your-username/FineWareLLC.git](https://github.com/your-username/FineWareLLC.git)
cd FineWareLLC/fineware-landing

Install dependencies:

npm install

Running the Application Locally

To start the development server:

npm run dev

This will start the Vite development server, typically at http://localhost:5173. The application will automatically reload if you change any of the source files.

Available Scripts
In the project directory, you can run the following scripts:

npm run dev: Runs the app in development mode with Hot Module Replacement (HMR).

npm run build: Builds the app for production to the dist folder. It correctly bundles React in production mode and optimizes the build for the best performance.

npm run lint: Lints the project files using ESLint to check for code quality and style issues.

npm run preview: Serves the production build locally to preview it before deployment.

npm run deploy: Builds the project and deploys it to GitHub Pages using the deploy.js script.

Deployment
This project is configured for deployment to GitHub Pages. The deploy.js script handles the build process and uses the gh-pages package to publish the contents of the dist folder to the gh-pages branch.

It also creates a CNAME file in the dist directory with fineware.tech to ensure the custom domain works correctly with GitHub Pages.

To deploy:

npm run deploy

Vite Configuration for Deployment (vite.config.ts):
The base option in vite.config.ts is set to '/' because the site is deployed to the root of the custom domain (fineware.tech).

Linting
The project uses ESLint with TypeScript support for code linting. The configuration can be found in eslint.config.js.

To run the linter:

npm run lint

The fineware-landing/README.md (which seems to be the original Vite template README) contains instructions for expanding the ESLint configuration for more advanced type-aware and stylistic rules if needed.

Configuration Files
vite.config.ts: Configures Vite, including plugins (like @vitejs/plugin-react) and build options.

tsconfig.json: The base TypeScript configuration file.

tsconfig.app.json: TypeScript configuration specifically for the application's source code (src directory).

tsconfig.node.json: TypeScript configuration for files that run in a Node.js environment, such as vite.config.ts itself.

Components
The application is structured into several reusable React components located in src/components/:

Header.tsx: Displays the site logo.

Hero.tsx: The main landing section with a headline, subtitle, and a call-to-action button.

About.tsx: Showcases key differentiators and features of FineWare LLC.

Services.tsx: Displays the services offered by FineWare LLC in a card-based layout.

Contact.tsx: Provides a contact form that uses EmailJS to send messages.

Footer.tsx: Contains copyright information and potentially social media links.

Each component has its own CSS Module file (e.g., Header.module.css) for scoped styling.

Utilities
src/utils/gtag.ts: Contains helper functions for interacting with Google Analytics (page views, events). The Google Analytics ID (GA_ID) is configured here.

src/global.d.ts: Provides global type definitions, specifically for window.gtag and window.dataLayer used by Google Analytics.

Contact Form (EmailJS)
The contact form in Contact.tsx uses EmailJS to send email notifications without requiring a backend server. The following EmailJS credentials are used (these should ideally be environment variables, but are currently hardcoded):

Contributing
Currently, this project is maintained by FineWare LLC. For contributions, please contact the FineWare LLC team.

License
This project is proprietary to FineWare LLC.
Copyright © 2024-2025 FineWare™ LLC. All rights reserved.

