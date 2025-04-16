import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Artwork } from './artwork';

@Entity('departments')
export class Department {
  @PrimaryColumn()
  departmentId: number;

  @Column()
  displayName: string;

  @OneToMany(() => Artwork, (artwork) => artwork.department)
  artworks: Artwork[];
}
