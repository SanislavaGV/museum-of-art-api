import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artwork } from './artworks/artwork.entity';
import { Image } from './images/image.entity';
import { Tag } from './tags/tag.entity';
import { Department } from './departments/department.entity';
import { SearchResult } from './searchresults/searchresult.entity';
import { ArtworksModule } from './artworks/artworks.module';
import { ImagesModule } from './images/images.module';
import { TagsModule } from './tags/tags.module';
import { DepartmentsModule } from './departments/departments.module';
import { SearchresultsModule } from './searchresults/searchresults.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'stanislava',
      password: 'stanislava905*2002',
      database: 'museumofart',
      synchronize: true,
      entities: [Artwork, Image, Tag, Department, SearchResult],
    }),
    ArtworksModule,
    ImagesModule,
    TagsModule,
    DepartmentsModule,
    SearchresultsModule,
  ],
})
export class AppModule {}
