import { Component, OnInit } from '@angular/core';
import { OtherService, IOtherIngredient } from 'src/app/shared/services/other.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  dataSource = new UserDataSource(this.otherService);
  displayedColumns = [
    'name',
    'type',
    'use'
  ];

  constructor(private otherService: OtherService) { }

  ngOnInit() {
  }

}

export class UserDataSource extends DataSource<any> {
  constructor(private otherService: OtherService) {
    super();
  }

  connect(): Observable<IOtherIngredient[]> {
    return this.otherService.getOtherIngredients();
  }

  disconnect() {}
}

