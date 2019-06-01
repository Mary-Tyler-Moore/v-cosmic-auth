const Cosmic = require('cosmicjs')();
const database = Cosmic.bucket({
  slug: '854007e0-8410-11e9-82a4-11047fb34b62',
  // write_key: process.env.WRITE_KEY,
  // read_key: process.env.READ_KEY
  write_key: '8aPqs3WIN81n22VIjY1GxVi2a35iaji7zdlx1QIpW9w1qWFdw5',
  read_key: '6khkax9fW4qZlHXjovTXl6krh6nDdETJaGvhwbeaBKp0xCxeq0'
})

module.exports = database
