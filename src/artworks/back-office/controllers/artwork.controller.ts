import { Request, Response } from 'express';
import { ArtworkService } from '../../service/artwork.service';

export const ArtworkBackOfficeController = {
  getAll: async (req: Request, res: Response) => {
    const artworks = await ArtworkService.getAll();
    res.json(artworks);
  },

  getById: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const artwork = await ArtworkService.getById(id);
    if (!artwork) return res.status(404).json({ message: 'Not found' });
    res.json(artwork);
  },

  create: async (req: Request, res: Response) => {
    const newArtwork = await ArtworkService.create(req.body);
    res.status(201).json(newArtwork);
  },

  update: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const updated = await ArtworkService.update(id, req.body);
    res.json(updated);
  },

  delete: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await ArtworkService.delete(id);
    res.status(204).send();
  },
};
