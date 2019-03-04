import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public path: string = "assets/items.json";
  public itemsList=[];
  public deletedItemsList=[];
  public activItemsList=[];
  public categorriesList=[];
  constructor(private http: HttpClient) { 
    // request for data & store the response in localstorage
    this.getItemsRequest();
  }
  getItemsRequest() {
     this.http.get(this.path).subscribe(res=>{
       if(res){
        // console.log(localStorage.length);
        //  set res 
        localStorage.setItem("allItems",JSON.stringify(res));
       }
     });
  }

  setItems(key , val){
    localStorage.setItem(key,JSON.stringify(val));
  }

 getAllItems (){
  this.itemsList =JSON.parse(localStorage.getItem("allItems"));
  // console.log(this.itemsList);
  }

  

}
