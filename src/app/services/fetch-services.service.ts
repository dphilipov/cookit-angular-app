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


  getAll() {
    return appwrite.database.listDocuments(COLLECTION_KEY, undefined, undefined, undefined, undefined, 'DESC');
  }

  getOne(id: string) {
    return appwrite.database.getDocument(COLLECTION_KEY, id);
  }

  createOne(data: IRecipe) {
    data ? JSON.stringify(data) : null;

    return appwrite.database.createDocument(COLLECTION_KEY, data, ['*'], ['*']);
  }

  uploadImage(data: any) {
    return appwrite.storage.createFile(data, ['*'], ['*'])
  }

  previewImage(fileId: string) {
    return appwrite.storage.getFilePreview(fileId);
  }

  deleteOne(id: string) {
    return appwrite.database.deleteDocument(COLLECTION_KEY, id);
  }
}
