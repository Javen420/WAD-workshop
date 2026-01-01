# Day 1 - JavaScript & Node.js Workshop

## Quick Start

**Easy Access:** Open [0_directory.html](0_directory.html) in your browser for a clickable interface to all demos and exercises with built-in instructions!

## Setup Instructions

1. Navigate to the Day1 directory:
   ```bash
   cd to WAD-workshop\Day1
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Exercises Overview

### Client-Side Exercises (HTML/DOM)
- **Exercise 1 & 1.5** - DOM Manipulation basics
  - Open [ex1.html](Exercises/ex1.html) or [ex1.5.html](Exercises/ex1.5.html) directly in your browser

- **Exercise 2 & 2.5** - Advanced DOM interactions
  - Open [ex2.html](Exercises/ex2.html) or [ex2.5.html](Exercises/ex2.5.html) directly in your browser

### Server-Side Exercises (Node.js/Express)
- **Exercise 3 & 3.5** - RESTful API with Express
- **Exercise 4 & 4.5** - Form handling with middleware
- **Exercise 5 & 5.5** - EJS templating

## Running Exercises

### From Day1 root directory:

**Exercise 3 - RESTful API:**
```bash
node Exercises/ex3.js              # Basic version
node Exercises/ex3.5.js            # Extended version
node Exercises/Solutions/ex3_solution.js     # View solution
```

**Exercise 4 - Form Handling with Middleware:**
```bash
node Exercises/ex4.js              # Basic version
node Exercises/ex4.5.js            # Extended version with more validations
node Exercises/Solutions/ex4_solution.js     # View solution
```

**Exercise 5 - EJS Templating:**
```bash
node Exercises/ex5.js              # Basic version
node Exercises/ex5.5.js            # Extended version with filters
node Exercises/Solutions/ex5_solution.js     # View solution
```

All server exercises run on http://localhost:3000

## Running Demos

Learn Node.js concepts through guided demos:

```bash
node Demo/7_server.js     # Basic HTTP server
node Demo/8_express.js     # Express basics
node Demo/9_routing.js     # Routing patterns
node Demo/10_restful.js    # RESTful API structure
node Demo/11_middleware.js # Middleware implementation
node Demo/12_templating.js # EJS templating
```

## Running Practicals

### Part 1 - Frontend Todo App (JS/DOM)
Client-side only implementation:
- Open `Practical/Part_1_JS_DOM/index.html` directly in your browser
- Features: Add tasks, delete tasks, DOM manipulation

### Part 2 - Backend API Server
Express.js backend with RESTful API:

```bash
cd Practical/Part_2_Backend
npm install              # If needed
npm start                # Production mode
npm run devstart         # Development mode (auto-reload)
```

Visit http://localhost:3000 in your browser.

**API Endpoints:**
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create new task
- `DELETE /api/tasks/:id` - Delete task by ID

## Dependencies

- **express** (^5.2.1) - Web framework for Node.js
- **ejs** (^3.1.10) - Embedded JavaScript templating
- **nodemon** (^3.1.11) - Auto-restart server on file changes (dev only)

## Tips

- **Recommended:** Use [0_directory.html](0_directory.html) for easy access to all files
- HTML exercises (ex1-2.5) can be opened directly in the browser
- Node.js demos (7-12) and exercises (3-5.5) can be run with `node` command
- Solutions are available in the `Exercises/Solutions/` directory
- Each exercise includes TODO comments to guide you
- Use Ctrl+C to stop any running server
