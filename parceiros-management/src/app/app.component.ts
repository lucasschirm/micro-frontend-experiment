import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parceiros-management';
  partners: any[] = [];
  partner: any = null;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.getData()
  }

  public select(partner: any) {
    this.partner = partner;
  }

  public async getData() {
    const request = this.http.get<any[]>('https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners');
    request.subscribe(data => {
      this.partners = data;
    });
  }
}
