import { Component, OnInit } from '@angular/core';
import { FetchServicesService } from 'src/app/services/fetch-services.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(fetchServices: FetchServicesService) { }

  ngOnInit(): void {
  }

}
