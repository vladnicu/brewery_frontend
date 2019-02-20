import { Component, OnInit } from '@angular/core';
import { BreweryService } from '../../../../shared/services/brewery.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  breweryData = {};

  constructor(private _breweryService: BreweryService) { }

  ngOnInit() {
  }

  updateBrewery() {
    this._breweryService.updateBrewery(this.breweryData)
    .subscribe(
      res => {
        // TODO navigate somewhere
        // this._router.navigate(['/dashboard']);
      },
      err => console.log(err)
    );
  }

}
