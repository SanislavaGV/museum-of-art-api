import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Artwork } from '../artworks/artwork.entity';

@Entity("searchresults")
export class SearchResult {
  @PrimaryGeneratedColumn()
  searchId: number;

  @Column()
  total: number;

  @Column()
  objectId: number;

  @Column()
  parameterName: string;

  @ManyToOne(() => Artwork)
  @JoinColumn({ name: 'objectId' })
  artwork: Artwork;
}
