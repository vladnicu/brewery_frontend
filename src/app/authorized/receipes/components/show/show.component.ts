import { Component, OnInit } from '@angular/core';
import { IReceipe, ReceipesService } from 'src/app/shared/services/receipes.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  receipe: IReceipe;

  constructor(private receipesService: ReceipesService) { }

  ngOnInit() {
    console.log(this.receipe);
    this.receipesService.getReceipeById(1)
      .subscribe(
        (res: IReceipe) => this.receipe = res
      );
  }

}
