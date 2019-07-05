import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Produit } from "../models/model.produit";
import { API_URLS } from "../app/config/api.url.config";

@Injectable()
export class ProduitService{
 
    URL: string = "http://127.0.0.1:8080/api/produits";

    constructor(private http: HttpClient){}


    getProduits(): Observable<any> {
        return this.http.get(API_URLS.PRODUITS_URL);
    }

    addProduit(produit: Produit): Observable<any> {

        return this.http.post(API_URLS.PRODUITS_URL,produit);
      }
    
    updateProduit(produit: Produit): Observable<any>{
        return this.http.put(API_URLS.PRODUITS_URL+"/"+produit.id, produit);
    }

    deleteProduit(id: number): Observable<any>{
        return this.http.delete(API_URLS.PRODUITS_URL+"/"+id);
    }
}