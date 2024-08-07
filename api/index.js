// Internal packages:
import config from './src/config/config.js';
import server from './src/app.js';
import database from './src/db/db.js';

const PORT = config.port || 3001;

// Connect to the database:
database.on('error', (error) => {
  console.log(error);
  process.exit(1);
});
database.once('connected', () => {
  console.log('Porfolio Database connected!');
});

// Start the server:
server.listen(PORT, () => {
  console.log(`Server connected on port: ${PORT}.`);
});
