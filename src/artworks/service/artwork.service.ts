import { ArtworkRepository } from '../repositories/artwork.repo';
import { Artwork } from '../models/artwork';

export const ArtworkService = {
  // Взимане на всички артикули с връзки към images, tags и department
  getAll: async () => {
    return ArtworkRepository.find({ relations: ['images', 'tags', 'department'] });
  },

  // Взимане по ID
  getById: async (id: number) => {
    return ArtworkRepository.findOne({
      where: { objectId: id },
      relations: ['images', 'tags', 'department'],
    });
  },

  // Създаване на нов запис
  create: async (data: Partial<Artwork>) => {
    return ArtworkRepository.save(data);
  },

  // Актуализиране на запис
  update: async (id: number, data: Partial<Artwork>) => {
    await ArtworkRepository.update(id, data);
    return ArtworkRepository.findOne({
      where: { objectId: id },
      relations: ['images', 'tags', 'department'],
    });
  },

  // Изтриване на запис
  delete: async (id: number) => {
    return ArtworkRepository.delete(id);
  }
};
