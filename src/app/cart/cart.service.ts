import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = environment.apiURL +"/cart";
  private checkoutUrl = environment.apiURL +"/checkut"
  constructor( private http :HttpClient) { }

addToCart(product:Product):Observable<Product>{

 return this.http.post<Product>(this.apiUrl,product);
}

getCartItems():Observable<Product[]>{
return this.http.get<Product[]>(this.apiUrl);
}

clearCart():Observable<void> {
  return this.http.delete<void>(this.apiUrl);
}

checkOut(product :Product[]):Observable<void>{
  return this.http.post<void>(this.checkoutUrl,product)


}

}


