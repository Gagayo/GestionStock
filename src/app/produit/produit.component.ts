import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ProduitService } from '../../services/produit.service';
import { Produit } from '../../models/model.produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  //Table Produit
  produits: Produit[] = [];
  //Form
  produitForm: FormGroup;
  //Operation
 operation: string = "add";

 //Proudit
 selectedProduit: Produit;

  constructor(private fb: FormBuilder,private produitService: ProduitService) {

    this.createForm();
  }

  ngOnInit() {
    //Clean form
    this.initProduit();
    //Data
    this.getData();
  }

  createForm(){
    //Construction du form
    this.produitForm = this.fb.group({
      ref: ['', Validators.required],
      quantite: '',
      prixUnitaire: ''
     }); 
  }

  getData(){
    this.produitService.getProduits().subscribe(
      data  => { this.produits = data;},
      error => { console.log("Erreur Sur ===>",error)} 
      );
  }

  addProduit(){
    const produit = this.produitForm.value;

    this.produitService.addProduit(produit).subscribe(
      response  => { 
        this.initProduit();
        this.getData() },
      error => { console.log("Erreur d'Ajout Sur ===>",error)}
    );
  }

  editProduit(){
    this.produitService.updateProduit(this.selectedProduit)
      .subscribe( response =>{
        this.initProduit();
        this.getData();
      }, error => {console.log("Erreur Update ",error)});
  }

  deleteProduit(){
    this.produitService.deleteProduit(this.selectedProduit.id)
        .subscribe( response =>{
          this.selectedProduit = new Produit();
          this.getData();
        }, error =>{console.log("Erreur de Sup")});
  }
  initProduit(){
    this.selectedProduit = new Produit();
    //voir
    this.createForm();
  }
}
