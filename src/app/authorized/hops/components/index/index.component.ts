import { Component, OnInit } from '@angular/core';
import { HopsService, IHop } from 'src/app/shared/services/hops.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  dataSource = new UserDataSource(this.hopsService);
  displayedColumns = [
    'name',
    'type',
    'average_aa',
    'use'
  ];

  constructor(private hopsService: HopsService) { }

  ngOnInit() {
  }

}

export class UserDataSource extends DataSource<any> {
  constructor(private hopsService: HopsService) {
    super();
  }

  connect(): Observable<IHop[]> {
    return this.hopsService.getHops();
  }

  disconnect() {}
}
