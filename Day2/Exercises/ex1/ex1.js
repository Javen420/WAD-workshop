const express = require('express');
const path = require("path");
const app = express();

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname));

// Mock API function that simulates fetching driver standings
function fetchDriverStandings() {
  console.log('🔄 Fetching driver standings from API...');
  const startTime = Date.now();
  
  return new Promise((resolve) => {
    setTimeout(() => {
      const endTime = Date.now();
      const duration = endTime - startTime;
      console.log(`✅ Data fetched successfully in ${duration}ms`);
      
      resolve([
        { position: 1, name: 'Lando Norris', team: 'McLaren', points: 423 },
        { position: 2, name: 'Max Verstappen', team: 'Red Bull Racing', points: 421 },
        { position: 3, name: 'Oscar Piastri', team: 'McLaren', points: 410 },
        { position: 4, name: 'George Russell', team: 'Mercedes', points: 319 },
        { position: 5, name: 'Charles Leclerc', team: 'Ferrari', points: 242 }
      ]);
    }, 2000); // Increased to 2 seconds for more visible delay
  });
}

// TODO: Task 1 - Create a route [/standings] that fetches and displays driver standings
// TODO: Task 2 - Improve the load time of the website by caching the result!


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});