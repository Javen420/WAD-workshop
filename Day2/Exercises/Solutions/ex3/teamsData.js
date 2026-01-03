const Driver = require('./driver');

// Helper function to get driver IDs by their names
async function getDriverIdsByNames(driverNames) {
  const driverIds = [];
  
  for (const name of driverNames) {
    const driver = await Driver.findOne({ name: name });
    if (driver) {
      driverIds.push(driver._id);
    }
  }
  
  return driverIds;
}

function getTeamsData() {
  return [
    {
      name: 'Red Bull Racing',
      base: 'Milton Keynes, United Kingdom',
      teamPrincipal: 'Laurent Mekies',
      drivers: ['Max Verstappen', 'Yuki Tsunoda']
    },
    {
      name: 'McLaren',
      base: 'Woking, United Kingdom',
      teamPrincipal: 'Andrea Stella',
      drivers: ['Lando Norris', 'Oscar Piastri']
    },
    {
      name: 'Ferrari',
      base: 'Maranello, Italy',
      teamPrincipal: 'Fred Vasseur',
      drivers: ['Charles Leclerc', 'Lewis Hamilton']
    },
    {
      name: 'Mercedes',
      base: 'Brackley, United Kingdom',
      teamPrincipal: 'Toto Wolff',
      drivers: ['George Russell', 'Kimi Antonelli']
    },
    {
      name: 'Aston Martin',
      base: 'Silverstone, United Kingdom',
      teamPrincipal: 'Andy Cowell',
      drivers: ['Fernando Alonso', 'Lance Stroll']
    },
    {
      name: 'Racing Bulls',
      base: 'Faenza, Italy',
      teamPrincipal: 'Alan Permane',
      drivers: ['Isack Hadjar', 'Liam Lawson']
    },
    {
      name: 'Haas F1 Team',
      base: 'Kannapolis, United States',
      teamPrincipal: 'Ayao Komatsu',
      drivers: ['Oliver Bearman', 'Esteban Ocon']
    },
    {
      name: 'Williams',
      base: 'Grove, United Kingdom',
      teamPrincipal: 'James Vowles',
      drivers: ['Alexander Albon', 'Carlos Sainz']
    },
    {
      name: 'Alpine',
      base: 'Enstone, United Kingdom',
      teamPrincipal: 'Oliver Oakes',
      drivers: ['Pierre Gasly', 'Franco Colapinto']
    },
    {
      name: 'Kick Sauber',
      base: 'Hinwil, Switzerland',
      teamPrincipal: 'Alessandro Alunni Bravi',
      drivers: ['Nico Hulkenberg', 'Gabriel Bortoleto']
    }
  ];
}

module.exports = { getTeamsData, getDriverIdsByNames };