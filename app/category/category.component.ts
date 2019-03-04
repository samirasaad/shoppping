import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public categoryItems = [];
  public urlParam;
  constructor(
    private config: ConfigService,
    private route: ActivatedRoute
  ) {
    this.urlParam = this.route.snapshot.params;
    this.route.params.subscribe( params =>{
      this.urlParam =params;
      this.getCategoryItems();
    });
  }

  getCategoryItems() {
    // category items
    this.categoryItems = this.config.itemsList.filter(obj => {
      this.config.setItems("category items", JSON.stringify(this.categoryItems));
      this.categoryItems=JSON.parse(localStorage.getItem("category items"))
      return obj.category === this.urlParam.name;
    });
  }

  ngOnInit() {
    this.config.getAllItems();
    // console.log(this.config.itemsList);
    this.getCategoryItems();
  }
}
