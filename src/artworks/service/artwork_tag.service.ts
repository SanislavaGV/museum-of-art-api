import { ArtworkTagRepository } from '../repositories/artwork_tag.repo';

export const ArtworkTagService = {
  getAll: async () => {
    return ArtworkTagRepository.find();
  },
};
