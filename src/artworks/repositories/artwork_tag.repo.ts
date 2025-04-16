import { AppDataSource } from '../db/data-source';
import { ArtworkTag } from '../models/artwork_tag';

export const ArtworkTagRepository = AppDataSource.getRepository(ArtworkTag);