import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  produitsData = {
    labels: [],
    datasets: []
  }

  constructor(private produitService: ProduitService) { }

  ngOnInit() {

    const datasetsQuantite = {
      label: "Quantité",
      data: [],
      backgroundColor: 'rgb(191,255,0)' ,
      borderColor:'rgb(155,99,132)'
    };
    const datasetsPrixUnitaire = {
      label: "Prix Unitaire",
      data: [],
      backgroundColor: 'rgb(191,255,0)' ,
      borderColor:'rgb(155,99,132)'
    };

    this.produitService.getProduits().subscribe(lists=>
      lists.forEach(produit => {
        this.produitsData.labels.push(produit.ref);
        datasetsQuantite.data.push(produit.quantite);
        datasetsPrixUnitaire.data.push(produit.prixUnitaire);
      }));


     //Add
     this.produitsData.datasets.push(datasetsQuantite);
    this.produitsData.datasets.push(datasetsPrixUnitaire);
  }

}
