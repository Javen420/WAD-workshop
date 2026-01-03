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

// Task 1:
// app.get('/standings', async(req, res) => {
//   const startTime = Date.now()
//   const standings = await fetchDriverStandings();
//   const fetchTime = Date.now() - startTime
//   // Render with: standings, fetchTime, cached: false
//   res.render('standings', {
//     standings: standings,
//     fetchTime: fetchTime,
//     cached: false
//   })

// });

// Task 2:
let cachedStandings = null;
let lastFetchTime = null;
app.get('/standings', async(req, res) => {
  const startTime = Date.now();
  const thirtySeconds = 30000;
  let fetchTime = 0;
  let fromCache = false;

  if(!cachedStandings || !lastFetchTime || (startTime - lastFetchTime) > thirtySeconds){
    //Standings have not been cached
    //There has been no last fetch time
    //Or the last fetch time has been expired.
    cachedStandings = await fetchDriverStandings();
    lastFetchTime = Date.now();
    fetchTime = Date.now() - startTime;
  } else{
    fetchTime = 0;
    fromCache = true;
  }
  // Render with: standings, fetchTime, cached: false
  res.render('standings', {
    standings: cachedStandings, 
    fetchTime: fetchTime, 
    fromCached: fromCache
  })
});


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});