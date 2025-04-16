import { Router } from 'express';
import { ArtworkBackOfficeController } from '../controllers/artwork.controller';

const router = Router();

router.get('/', ArtworkBackOfficeController.getAll);
router.get('/:id', ArtworkBackOfficeController.getById);
router.post('/', ArtworkBackOfficeController.create);
router.put('/:id', ArtworkBackOfficeController.update);
router.delete('/:id', ArtworkBackOfficeController.delete);

export default router;
