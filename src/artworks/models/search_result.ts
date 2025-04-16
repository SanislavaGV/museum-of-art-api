import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('searchresults')
export class SearchResult {
  @PrimaryGeneratedColumn()
  searchId: number;

  @Column()
  total: number;

  @Column()
  objectId: number;

  @Column()
  parameterName: string;
}
