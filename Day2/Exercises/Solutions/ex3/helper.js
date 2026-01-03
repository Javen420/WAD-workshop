const Driver = require('./driver');
const { getDriversData } = require('./driverData')
// Validation function - checks if drivers exist in database
async function validateDriversData() {
  try {
    const count = await Driver.countDocuments();
    
    // If we don't have exactly 20 drivers, repopulate
    if (count !== 20) {
      console.log(`⚠️  Found ${count} drivers in database. Expected 20. Auto-populating...`);
      
      // Clear existing drivers
      await Driver.deleteMany({});
      
      // Add all drivers
      const driversData = getDriversData();
      await Driver.insertMany(driversData);
      
      console.log('✅ Database auto-populated with 20 drivers');
    } else {
      console.log('✅ Driver data validated - 20 drivers found');
    }
  } catch (error) {
    console.error('❌ Error validating driver data:', error);
  }
}

async function viewTeamsWithDrivers(Team) {
  try {
    const teamData = await Team.find().populate('drivers');
    
    console.log('\n📋 Teams with Driver Details:\n');
    teamData.forEach(team => {
      console.log(`🏎️  ${team.name}`);
      console.log(`   Base: ${team.base}`);
      console.log(`   Team Principal: ${team.teamPrincipal}`);
      console.log(`   Drivers:`);
      team.drivers.forEach(driver => {
        console.log(`     - ${driver.name} (#${driver.number})`);
      });
      console.log('');
    });
  } catch (error) {
    console.error('Error viewing teams:', error);
  }
}
module.exports = { validateDriversData, viewTeamsWithDrivers };