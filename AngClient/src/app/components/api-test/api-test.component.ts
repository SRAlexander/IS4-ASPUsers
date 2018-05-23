import { Component, OnInit } from '@angular/core';
import { ApiTestService } from '../../shared/services/api-test.service';

@Component({
  selector: 'ac-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {

  response: any = null;
  constructor(private _apiTestService: ApiTestService) { }

  ngOnInit() {
    this._apiTestService.GetValues().subscribe(response => {
      this.response = response;
    });
  }
}
