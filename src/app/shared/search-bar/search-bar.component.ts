import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchTerm: string = '';

  constructor(private router: Router) { 

  }

  ngOnInit(): void {     

  }

  searchHandler(form: NgForm): void {   
    if (form.controls.search.value) {
      this.searchTerm = form.controls.search.value;
      this.router.navigate([`search/${this.searchTerm}`])  
    } else {
      console.log('here');
      
      this.router.navigate([`/`])  
    }
  }
}
