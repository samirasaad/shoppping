import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() items: Array<any>;
  constructor(private config : ConfigService) {
   }

  toggleItemDetails(id) {
    console.log(id);
    console.log(this.items[id])
    if ( this.items[id].isDeleted !== true) {
      console.log(this.items[id].isDeleted);
      this.items[id].isOpened = !this.items[id].isOpened;
    }
  }
  deleteItem(id, e) {
    e.stopPropagation();
    this.items[id].isDeleted = true;
    this.items[id].isOpened = false;
    // update deleted &&  opened flag in original array
     this.config.setItems( "allItems",this.items);
     console.log(this.items);
     this.config.getAllItems();
     console.log(this.items);
     
     console.log(id);
  }
  ngOnInit() {
  
  }

}
