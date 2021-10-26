import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IListeProduit } from '../i-liste-produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitServService {
  url = "http://127.0.0.1:8000/webservice/php/biere/";

  constructor(private http:HttpClient) { }

  getListeProduit():Observable<IListeProduit>{
    console.log("super fetch!!!");
    return this.http.get<IListeProduit>(this.url);
  }

  getProduit(id:number){

  }

  deleteProduit(id:number){

  }

  modifProduit(data:any){

  }

  ajouterProduit(data:any){

  }

}
