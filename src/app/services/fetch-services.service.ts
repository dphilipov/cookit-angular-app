import { Injectable } from '@angular/core';
import appwrite from '../config/appwrite'

import {environment} from '../../environments/environment';
import { IRecipe } from '../shared/interfaces/recipe';
const COLLECTION_KEY = environment.COLLECTION_KEY;

@Injectable({
  providedIn: 'root'
})
export class FetchServicesService {

  constructor() {

  }


  getAll(filter?: any, searchTerm?: string) {
    return appwrite.database.listDocuments(COLLECTION_KEY, filter, undefined, undefined, undefined, 'DESC', undefined, searchTerm);
  }

  getOne(id: string) {
    return appwrite.database.getDocument(COLLECTION_KEY, id);
  }

  createOne(data: IRecipe) {
    data ? JSON.stringify(data) : null;

    return appwrite.database.createDocument(COLLECTION_KEY, data, ['*'], ['*']);
  }

  updateOne(id: string, data: IRecipe) {
    return appwrite.database.updateDocument(COLLECTION_KEY, id, data);
  }

  getImage(imageId: string) {
    return appwrite.storage.getFile(imageId);
  }

  uploadImage(data: any) {
    return appwrite.storage.createFile(data, ['*'], ['*'])
  }

  previewImage(fileId: string, quality: number) {
    return appwrite.storage.getFilePreview(fileId, undefined, undefined, undefined, quality);
  }

  deleteOne(id: string) {
    return appwrite.database.deleteDocument(COLLECTION_KEY, id);
  }
}
