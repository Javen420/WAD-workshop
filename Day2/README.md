# Day 2 - Node.js Workshop

## Setup Instructions

1. Navigate to the Day2 directory:
   ```bash
   cd c:\Programming\WAD-workshop\Day2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Exercises Overview

### File I/O and Data Exercises
- **Exercise 1** - File reading/writing with Node.js fs module
- **Exercise 2** - Data organization (JSON/table format)
- **Exercise 3** - Simulating database queries
- **Exercise 4** - MongoDB schema creation with Mongoose
- **Exercise 5** - Express sessions and middleware

## Running Exercises

### From Day2 root directory:

**Exercise 1 - File I/O:**
```bash
cd Exercises/exercise_1
node ex1.js
```

**Exercise 2 & 3 - Data Organization:**
- Open `Exercises/ex2.js` and `Exercises/ex3.js` in your editor
- These are conceptual exercises (comments only)

**Exercise 4 - Mongoose Schema:**
```bash
node Exercises/ex4.js
```

**Exercise 5 - Express Sessions:**
```bash
node Exercises/ex5.js
```
Then visit http://localhost:3000 in your browser.

**Solutions:**
Solutions are available in `Exercises/Solution/` directory.

## Running Practical

### Part 3 - MongoDB Todo App

Full-stack application with Express, MongoDB, and REST API:

```bash
node Practical/Part_3_MongoDB/server.js
```

Visit http://localhost:3000 in your browser.

**API Endpoints:**
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create new task
- `DELETE /api/tasks/:id` - Delete task by ID

## Dependencies

- **express** (^5.2.1) - Web framework for Node.js
- **express-session** (^1.18.1) - Session middleware for Express
- **mongoose** (^9.0.2) - MongoDB object modeling
- **nodemon** (^3.1.11) - Auto-restart server on file changes (dev only)

## Tips

- Exercise 1 must be run from its own directory (`Exercises/exercise_1/`) to access `friends.txt`
- Exercise 4 requires a MongoDB schema but doesn't need a running MongoDB instance
- Exercise 5 and the Practical require a local server running
- The Practical requires MongoDB to be installed and running locally
- Use Ctrl+C to stop any running server
