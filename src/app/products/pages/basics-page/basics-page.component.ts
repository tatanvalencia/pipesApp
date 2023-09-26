import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLowerCase: string = 'jhonatan';
  public nameUpperCase: string = 'JHONATAN';
  public fullName: string = 'jHoNaTaN vAlEnCiA aRaNgO';
  public customDate: Date = new Date();
}
