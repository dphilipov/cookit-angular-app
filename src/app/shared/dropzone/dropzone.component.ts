import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone'

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.css']
})
export class DropzoneComponent {
  @Input() files: File[] = [];
  @Output() setRecipeImage: EventEmitter<any> = new EventEmitter();

  constructor() { 

  }


  onSelect(event: NgxDropzoneChangeEvent): void {
    const recipeImage = event.addedFiles[0];
    this.files = [] // To ensure only one file can be upploaded at a time
    this.files.push(recipeImage);    
    
    this.setRecipeImage.emit(this.files)    
  }

}
