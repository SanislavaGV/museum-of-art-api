import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Artwork } from '../artworks/artwork.entity';

@Entity("departments")
export class Department {
  @PrimaryGeneratedColumn()
  departmentId: number;

  @Column()
  displayName: string;

  @OneToMany(() => Artwork, (artwork) => artwork.department)
  artworks: Artwork[];
}
