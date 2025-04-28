import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './image.entity';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image)
    private imagesRepository: Repository<Image>,
  ) {}

  findAll(): Promise<Image[]> {
    return this.imagesRepository.find({ relations: ['artwork'] });
  }

  findOne(id: number): Promise<Image|null> {
    return this.imagesRepository.findOne({
      where: { imageId: id },
      relations: ['artwork'],
    });
  }

  create(image: Partial<Image>): Promise<Image> {
    const newImage = this.imagesRepository.create(image);
    return this.imagesRepository.save(newImage);
  }

  async update(id: number, image: Partial<Image>): Promise<Image|null> {
    await this.imagesRepository.update(id, image);
    return this.imagesRepository.findOneBy({ imageId: id });
  }

  delete(id: number): Promise<void> {
    return this.imagesRepository.delete(id).then(() => {});
  }
}
