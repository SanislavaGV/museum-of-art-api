import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Artwork } from './artwork';

@Entity('artwork_tags')
export class ArtworkTag {
  @PrimaryColumn()
  objectId: number;

  @PrimaryColumn()
  tagId: number;

  @ManyToOne(() => Artwork, (artwork) => artwork.tags)
  @JoinColumn({ name: 'objectId' })
  artwork: Artwork;
}
