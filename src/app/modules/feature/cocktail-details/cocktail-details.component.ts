import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CocktailService } from '../../../services/cocktail.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface CocktailElement {
  id: string;
  name: string;
  isAlcoholic: boolean;
  picture: string;
  category: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-cocktail-details',
  styleUrls: ['cocktail-details.component.scss'],
  templateUrl: 'cocktail-details.component.html',
})
export class CocktailDetailsComponent implements AfterViewInit {
  isLoading = false;
  cocktails : CocktailElement[] = [];
  displayedColumns: string[] = ['id', 'name', 'isAlcoholic', 'category', 'picture'];
  dataSource = new MatTableDataSource(this.cocktails);
  value = "";
  sort;

  constructor(private cocktailService: CocktailService) {
    this.getCocktails();
  }


  @ViewChild(MatSort) set content(content: ElementRef) {
    this.sort = content;
    if (this.sort){
       this.dataSource.sort = this.sort;

    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  filter = () => {
    this.dataSource.filter = this.value;
  }


  getCocktails = () => {
    this.isLoading = true;
    this.cocktailService.getAllCocktails().subscribe((data) => {
      this.isLoading = false;
      data['drinks'].map((c) => {
        this.cocktails.push({
          name: c['strDrink'],
          category: c['strCategory'],
          id: c['idDrink'],
          isAlcoholic: c['strAlcoholic'] === "Alcoholic",
          picture: `${c['strDrinkThumb']}/preview`
        })
      })

      console.log(this.cocktails);
    });
  };
}


