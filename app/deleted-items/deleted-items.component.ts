import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-deleted-items',
  templateUrl: './deleted-items.component.html',
  styleUrls: ['./deleted-items.component.scss']
})
export class DeletedItemsComponent implements OnInit {
public deletedItems:Array<any>;
  constructor(private config : ConfigService) {}

  getDeletedItems(){
    // deleted items
    this.deletedItems = this.config.itemsList.filter(obj=>{
     return obj.isDeleted === true;
  });
    // console.log( this.deletedItems);  
  this.config.setItems("deleted items",JSON.stringify(this.deletedItems));
 }
  ngOnInit() {
    this.config.getAllItems();
    console.log(this.config.itemsList);
    this.getDeletedItems();
    // console.log(this.deletedItems);
  }

}
