import express from 'express';

// routes
import rootRoute from './router/root';

// instances
const app = express();

// routes configuration
app.use('/', rootRoute);

// server starting
app.listen(3000, () => console.log('servidor corriendo en el puerto 3000'));
