import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IListeProduit } from '../i-liste-produit';
import { IProduit } from '../i-produit';

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

  modifProduit(data:IProduit){
    delete data.date_ajout; // Retire une propriété qui ne doit pas être envoyée;
    delete data.date_modif; // Retire une propriété qui ne doit pas être envoyée;
    delete data['note_moyenne']; // Retire une propriété qui ne doit pas être envoyée;
    delete data.note_nombre; // Retire une propriété qui ne doit pas être envoyée;

    let httpOption ={
      headers : new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization' : 'Basic '+ btoa("biero:biero")
      })
    }
    console.log("fetch de ", data);
    return this.http.post<IProduit>(this.url + data.id_biere, data, httpOption);
    // URL du webservice + ressource + id pour faire le post...

  }

  ajouterProduit(data:any){

  }

}
