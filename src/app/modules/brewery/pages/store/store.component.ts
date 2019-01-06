import { Component, OnInit } from '@angular/core';
import { BreweryService } from '../../services/brewery.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  breweryData = {};

  constructor(private _breweryService: BreweryService) { }

  ngOnInit() {
  }

  storeBrewery() {
    this._breweryService.storeBrewery(this.breweryData)
    .subscribe(
      res => {
        // this._router.navigate(['/dashboard']);
      },
      err => console.log(err)
    );
  }

}
