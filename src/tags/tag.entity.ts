import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Artwork } from '../artworks/artwork.entity';

@Entity("tags")
export class Tag {
  @PrimaryGeneratedColumn()
  tagId: number;

  @Column({ nullable: true })
  aatURL: string;

  @Column({ nullable: true })
  wikidataURL: string;

  @Column()
  term: string;

  @ManyToMany(() => Artwork, (artwork) => artwork.tags)
  artworks: Artwork[];
}
