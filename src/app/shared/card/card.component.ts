import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FetchServicesService } from 'src/app/services/fetch-services.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardClass!: string;
  @Input() fetchedMeal!: any;

  @Output() addToShoppingListHandler: EventEmitter<any> = new EventEmitter();

  
  imagePreview: URL | undefined;

  constructor(private fetchServices: FetchServicesService) { 

  }

  ngOnInit(): void {
    this.imagePreview = this.fetchServices.previewImage(this.fetchedMeal.imageId);    
  }

  emitIngredients(ingredients: any) {
    this.addToShoppingListHandler.emit(ingredients);
  }

}
