import { Component, OnInit } from '@angular/core';
import { ReceipesService, IReceipe } from '../../../../shared/services/receipes.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  dataSource = new UserDataSource(this.receipesService);
  displayedColumns = ['title'];

  constructor(private receipesService: ReceipesService) { }

  ngOnInit() { }

}

export class UserDataSource extends DataSource<any> {
  constructor(private receipesService: ReceipesService) {
    super();
  }

  connect(): Observable<IReceipe[]> {
    return this.receipesService.getReceipes();
  }

  disconnect() {}
}
