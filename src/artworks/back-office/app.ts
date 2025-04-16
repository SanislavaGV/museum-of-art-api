import express from 'express';
import { initDataSource } from '../controllers/init'; // или прехвърли в отделен файл
import backOfficeArtworkRoutes from '../back-office/routes/artwork.routes';

const app = express();
app.use(express.json());

initDataSource();

app.use('/api/back-office/artworks', backOfficeArtworkRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
