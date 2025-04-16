import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Artwork } from './artwork';

@Entity('images')
export class Image {
  @PrimaryGeneratedColumn()
  imageId: number;

  @Column()
  objectId: number;

  @Column()
  isPrimary: boolean;

  @ManyToOne(() => Artwork, (artwork) => artwork.images)
  @JoinColumn({ name: 'objectId' })
  artwork: Artwork;
}