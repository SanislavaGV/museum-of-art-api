import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './tag.entity';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private tagsRepository: Repository<Tag>,
  ) {}

  findAll(): Promise<Tag[]> {
    return this.tagsRepository.find({ relations: ['artworks'] });
  }

  findOne(id: number): Promise<Tag|null> {
    return this.tagsRepository.findOne({
      where: { tagId: id },
      relations: ['artworks'],
    });
  }

  create(tag: Partial<Tag>): Promise<Tag> {
    const newTag = this.tagsRepository.create(tag);
    return this.tagsRepository.save(newTag);
  }

  async update(id: number, tag: Partial<Tag>): Promise<Tag|null> {
    await this.tagsRepository.update(id, tag);
    return this.tagsRepository.findOneBy({ tagId: id });
  }

  delete(id: number): Promise<void> {
    return this.tagsRepository.delete(id).then(() => {});
  }
}
