import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.css']
})
export class DropzoneComponent {
  files: File[] = [];

  @Output() setRecipeImage: EventEmitter<any> = new EventEmitter();

  constructor() { 

  }


  onSelect(event: any): void {
    const recipeImage = event.addedFiles[0];
    this.files = [] // To ensure only one file can be upploaded at a time
    this.files.push(recipeImage);

    this.setRecipeImage.emit(this.files)
    
  }

}
