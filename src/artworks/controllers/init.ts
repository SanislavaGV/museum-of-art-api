import { AppDataSource } from '../db/data-source';

let dataSourceInitialized = false;
export async function initDataSource() {
  if (!dataSourceInitialized) {
    await AppDataSource.initialize();
    dataSourceInitialized = true;
  }
}
