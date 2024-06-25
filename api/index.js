import config from './config.js';
import server from './src/app.js';
import database from './src/Db/db.js';

const PORT = config.port || 3001;

database.on('error', (error) => {
  console.log(error);
});
database.once('connected', () => {
  console.log('Porfolio Database connected!');
});

server.listen(PORT, () => {
  console.log(`Server connected on port: ${PORT}`);
});
