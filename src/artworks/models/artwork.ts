import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Department } from './department';
import { Image } from './image';
import { ArtworkTag } from './artwork_tag';

@Entity('artworks')
export class Artwork {
  @PrimaryColumn()
  objectId: number;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  culture: string;

  @Column({ nullable: true })
  period: string;

  @Column({ nullable: true })
  objectDate: string;

  @Column({ nullable: true })
  artistDisplayName: string;

  @ManyToOne(() => Department, (department) => department.artworks)
  @JoinColumn({ name: 'departmentId' })
  department: Department;

  @OneToMany(() => Image, (image) => image.artwork)
  images: Image[];

  @OneToMany(() => ArtworkTag, (tag) => tag.artwork)
  tags: ArtworkTag[];
}

