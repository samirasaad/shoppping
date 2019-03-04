import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-active-items',
  templateUrl: './active-items.component.html',
  styleUrls: ['./active-items.component.scss']
})
export class ActiveItemsComponent implements OnInit {
  public activItems
  public category;
   
  constructor(private config: ConfigService) {   
}
  
getActiveItems(){
   // active items
   this.activItems = this.config.itemsList.filter(obj=>{
    return obj.isDeleted === false;
  //  console.log(obj);
 });
 this.config.setItems("active items",JSON.stringify(this.activItems));
}
  ngOnInit() {
    this.config.getAllItems();
    //  console.log(this.config.itemsList);
    this.getActiveItems();
  //  console.log(this.activItems);
  }
}


