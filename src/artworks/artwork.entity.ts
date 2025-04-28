import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Department } from '../departments/department.entity';
import { Image } from '../images/image.entity';
import { Tag } from '../tags/tag.entity';

@Entity("artworks")
export class Artwork {
  @PrimaryColumn()
  objectId: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  culture: string;

  @Column({ nullable: true })
  period: string;

  @Column({ nullable: true })
  objectDate: string;

  @Column({ nullable: true })
  artistBeginDate: string;

  @Column({ nullable: true })
  artistEndDate: string;

  @Column({ nullable: true })
  medium: string;

  @Column({ nullable: true })
  dimensions: string;

  @Column({ nullable: true })
  creditLine: string;

  @Column({ nullable: true })
  classification: string;

  @Column({ nullable: true })
  repository: string;

  @Column({ nullable: true })
  objectURL: string;

  @Column({ nullable: true })
  artistWikidata_URL: string;

  @Column({ nullable: true })
  publicDomain: boolean;

  @Column({ nullable: true })
  accessionNumber: string;

  @Column({ nullable: true })
  accessionYear: string;

  @Column()
  departmentId: number;

  @Column({ nullable: true })
  artistRole: string;

  @Column({ nullable: true })
  artistPrefix: string;

  @Column({ nullable: true })
  artistDisplayName: string;

  @Column({ nullable: true })
  artistDisplayBio: string;

  @Column({ nullable: true })
  artistSuffix: string;

  @Column({ nullable: true })
  artistAlphaSort: string;

  @Column({ nullable: true })
  artistNationality: string;

  @Column({ nullable: true })
  artistGender: string;

  @Column({ nullable: true })
  artistULAN_URL: string;

  @ManyToOne(() => Department, (department) => department.artworks)
  @JoinColumn({ name: 'departmentId' })
  department: Department;

  @OneToMany(() => Image, (image) => image.artwork)
  images: Image[];

  @ManyToMany(() => Tag, (tag) => tag.artworks)
  @JoinTable({
    name: 'artwork_tags',
    joinColumn: { name: 'objectId', referencedColumnName: 'objectId' },
    inverseJoinColumn: { name: 'tagId', referencedColumnName: 'tagId' },
  })
  tags: Tag[];
}