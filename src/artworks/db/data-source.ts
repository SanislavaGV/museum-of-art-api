import { DataSource } from 'typeorm';
import { Artwork } from '../models/artwork';
import { Department } from '../models/department';
import { ArtworkTag } from '../models/artwork_tag';
import { Image } from '../models/image';
import { SearchResult } from '../models/search_result';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'stanislava',
  password: 'stanislava905*2002',
  database:'museumofart' ,
  synchronize: true,
  entities: [Artwork, Department, ArtworkTag, Image, SearchResult],
});