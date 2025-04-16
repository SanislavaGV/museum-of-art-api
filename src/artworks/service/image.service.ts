import { ImageRepository } from '../repositories/image.repo';

export const ImageService = {
  getAll: async () => {
    return ImageRepository.find();
  },
};