import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { FermentablesService, IFermentable } from 'src/app/shared/services/fermentables.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  dataSource = new UserDataSource(this.fermentablesService);
  displayedColumns = [
    'name',
    'country',
    'category',
    'type',
    'color',
    'ppg'
  ];

  constructor(private fermentablesService: FermentablesService) { }

  ngOnInit() {
  }

}


export class UserDataSource extends DataSource<any> {
  constructor(private fermentablesService: FermentablesService) {
    super();
  }

  connect(): Observable<IFermentable[]> {
    return this.fermentablesService.getFermentables();
  }

  disconnect() {}
}

