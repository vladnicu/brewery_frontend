import { Component, OnInit } from '@angular/core';
import { ReceipesService } from '../../services/receipes.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  receipes = [];

  constructor(private _receipesService: ReceipesService) { }

  ngOnInit() {
    this._receipesService.getReceipes()
      .subscribe(
          res => this.receipes = res.data,
          err => console.log(err)
      );
  }

}
