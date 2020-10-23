import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../../services/cocktail.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  value = 'Jack Daniels';
  drinks = {};

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
  }

  search = () => {
    this.cocktailService.searchCocktail(this.value).subscribe((data) => {
      this.drinks = data;
      console.log(data);
    })
  }

}
