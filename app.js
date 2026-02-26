import express from 'express';
import routes from './src/routes/index.routes.js';

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/subed/v1',routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});