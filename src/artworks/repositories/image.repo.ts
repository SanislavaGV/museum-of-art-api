import { AppDataSource } from '../db/data-source';
import { Image } from '../models/image';

export const ImageRepository = AppDataSource.getRepository(Image);