import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../../services/cocktail.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  value = 'Mojito';
  drinks = [];

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
  }

  search = () => {
    this.cocktailService.searchCocktail(this.value).subscribe((data) => {
      this.drinks = [];
      data['drinks'].map((c) => {
        this.drinks.push({
          name: c['strDrink'],
          category: c['strCategory'],
          id: c['idDrink'],
          isAlcoholic: c['strAlcoholic'] === "Alcoholic",
          picture: `${c['strDrinkThumb']}/preview`,
          instructions: c['strInstructions']
        })
      })
    })
  }

}
