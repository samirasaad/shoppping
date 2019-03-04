import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  public categoryList=[];
  public categTitle;
  constructor(private config: ConfigService) { }
 getCaegoriesList(){
  this.config.itemsList.filter(item => {
    this.categTitle = item.category;
    // console.log( this.categTitle);
    // console.log( this.categoryList);
    if(this.categoryList.indexOf(this.categTitle) === -1){
      this.categoryList.push(this.categTitle);
      this.config.setItems("categories list",this.categoryList);
    }
  });
 }

  ngOnInit() {
    this.config.getAllItems();
    console.log(this.config.itemsList);
    this.getCaegoriesList()
  }

}
