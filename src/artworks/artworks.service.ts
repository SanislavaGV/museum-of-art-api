import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artwork } from './artwork.entity';

@Injectable()
export class ArtworksService {
  constructor(
    @InjectRepository(Artwork)
    private artworksRepository: Repository<Artwork>,
  ) {}

  findAll(): Promise<Artwork[]> {
    return this.artworksRepository.find({
      relations: ['department', 'images', 'tags'],
    });
  }

  findOne(id: number): Promise<Artwork|null> {
    return this.artworksRepository.findOne({
      where: { objectId: id },
      relations: ['department', 'images', 'tags'],
    });
  }

  create(artwork: Partial<Artwork>): Promise<Artwork> {
    const newArtwork = this.artworksRepository.create(artwork);
    return this.artworksRepository.save(newArtwork);
  }

  async update(id: number, artwork: Partial<Artwork>): Promise<Artwork|null> {
    await this.artworksRepository.update(id, artwork);
    return this.artworksRepository.findOneBy({ objectId: id });
  }

  delete(id: number): Promise<void> {
    return this.artworksRepository.delete(id).then(() => {});
  }
}
