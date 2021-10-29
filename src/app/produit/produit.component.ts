import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduit } from '../i-produit';
import { ProduitServService } from '../services/produit-serv.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  @Input() produit:IProduit;
  @Input() prixMax:number = 16;
  @Input() editable:boolean;
  @Input() actif:number;
  
  modifForm:FormGroup;

  constructor(private route:ActivatedRoute,  private produitServ:ProduitServService ) {
    
  }

  ngOnInit(): void {
    /*if(this.actif == this.produit.id_biere){
      this.editable = true;
    }*/
    this.route.params.subscribe(params=>{
      if(this.produit.id_biere == params.id){
        this.editable = true;
      }else{
        this.editable = false;
      }
      console.log("param");
    })
    console.log("produit init")

    this.modifForm = new FormGroup({
      nom: new FormControl(this.produit.nom, [
        Validators.required, 
        Validators.minLength(3)
      ]),
      brasserie : new FormControl(this.produit.brasserie, [
        Validators.required, 
        Validators.minLength(3)
      ]),
      description : new FormControl(this.produit.description, [
        Validators.required, 
        Validators.minLength(3)
      ]),
    })
    console.log(this.modifForm)
  }

  verifAubaine(prix:number):boolean{
		return (prix < this.prixMax ? true : false );
  }	

  annuler():void{
    
    this.modifForm.controls.nom.setValue (this.produit.nom);
    this.modifForm.controls.brasserie.setValue (this.produit.brasserie);
    this.modifForm.controls.description.setValue (this.produit.description);
  }

  changement(){
    console.log("change");
    console.log(this.modifForm.value.nom);
  }
  modifierProduit():void{
    console.log(this.produit);
    console.log(this.modifForm);
    let biere:IProduit = this.modifForm.value;
    biere.id_biere = this.produit.id_biere;
    //this.produitServ.modifProduit(this.produit).subscribe((data)=>console.log(data));
    this.produitServ.modifProduit(biere).subscribe((data)=>console.log(data));
  }
}
