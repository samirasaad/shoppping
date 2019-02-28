import { Injectable , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConfigService implements OnInit {
public path:string="assets/items.json";
public subscription;

  constructor(private http : HttpClient) { }

  getItems(): Observable<any>{
    return this.http.get(this.path);
  }


   toUnSubscribe() {
     this.subscription.unsubscribe();
   }


  ngOnInit() {
    this.subscription =  this.getItems().subscribe(res => {
      console.log(res)
    })
  }

}
