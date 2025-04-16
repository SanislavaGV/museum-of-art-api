import { AppDataSource } from '../db/data-source';
import { Artwork } from '../models/artwork';
export const ArtworkRepository = AppDataSource.getRepository(Artwork);