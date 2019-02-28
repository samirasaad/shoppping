import { Component } from '@angular/core';
import { ConfigService } from './config.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shopping';
  public items:Array<object>=[];
  constructor(private config: ConfigService) { }

  ngOnInit() {
    // this.config.getItems().subscribe(res=>{
    //   this.items=res;
    //   console.log( this.items);
    // })
  }

}
