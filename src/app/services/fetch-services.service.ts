import { Injectable } from '@angular/core';
import appwrite from '../config/appwrite'

import {environment} from '../../environments/environment';
import { IRecipe } from '../shared/interfaces/recipe';
const collectionTOKEN = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class FetchServicesService {

  constructor() {

  }


  getAll() {
    return appwrite.database.listDocuments(collectionTOKEN);
  }

  getOne(id: string) {
    return appwrite.database.getDocument(collectionTOKEN, id);
  }

  createOne(data: IRecipe) {
    data ? JSON.stringify(data) : null;

    return appwrite.database.createDocument(collectionTOKEN, data, ['*'], ['*']);
  }

  uploadImage(data: any) {
    return appwrite.storage.createFile(data, ['*'], ['*'])
  }

  previewImage(fileId: string) {
    return appwrite.storage.getFilePreview(fileId);
  }
}
