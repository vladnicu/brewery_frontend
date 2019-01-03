import { Component, OnInit } from '@angular/core';
import { BreweryService } from './brewery.service';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.scss']
})
export class BreweryComponent implements OnInit {

  breweries = [];

  constructor(private _breweryService: BreweryService) { }

  ngOnInit() {
    this._breweryService.getBreweries()
      .subscribe(
          res => this.breweries = res.data,
          err => console.log(err)
      );
  }

}
