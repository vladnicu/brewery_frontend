import { Component, OnInit } from '@angular/core';
import { IYeast, YeastService } from 'src/app/shared/services/yeast.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  dataSource = new UserDataSource(this.yeastService);
  displayedColumns = [
    'name',
    'laboratory',
    'code',
    'type',
    'alcohol_tol',
    'flocculation',
    'attenuation',
    'min_temp',
    'max_temp'
  ];

  constructor(private yeastService: YeastService) { }

  ngOnInit() {
  }

}

export class UserDataSource extends DataSource<any> {
  constructor(private yeastService: YeastService) {
    super();
  }

  connect(): Observable<IYeast[]> {
    return this.yeastService.getYeast();
  }

  disconnect() {}
}
