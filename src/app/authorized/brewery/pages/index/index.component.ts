import { Component, OnInit } from '@angular/core';
import { BreweryService } from '../../../../shared/services/brewery.service';

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

  deleteBrewery() {
    this._breweryService.deleteBrewery()
    .subscribe(
      res => {
        // TODO navigate somewhere
        // this._router.navigate(['/dashboard']);
      },
      err => console.log(err)
    );
  }

}
