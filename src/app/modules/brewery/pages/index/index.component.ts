import { Component, OnInit } from '@angular/core';
import { BreweryService } from '../../services/brewery.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

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
