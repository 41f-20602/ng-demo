import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IListeProduit } from '../i-liste-produit';
import { IProduit } from '../i-produit';
import { EditionService } from '../services/edition.service';
import { ProduitServService } from '../services/produit-serv.service';


@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.scss']
})
export class ListeProduitComponent implements OnInit {

	nom:string = "toto le magicien";
	note:number = 16;

	produit:IProduit[];

	prixLimite:number;

	estEditable:boolean = false;
	idProduitActif:number;
	
	constructor(private editionServ:EditionService, private produitServ:ProduitServService, private route: ActivatedRoute) {
		console.log("constructeur");
		console.log(route);
		console.log(route);
		route.params.subscribe((data)=>{
			this.idProduitActif = data.id;
		});
		console.log(route.snapshot.params.id);
		
	}

	ngOnInit(): void {		
		/*this.produit = [...Array(10)].map(
			(item, index)=>(<IProduit>{"id_biere": index, "nom" : ("item "+ index), "prix": index*index})
			);*/
		console.log(this.produit);
		//this.editionServ.getEditable().subscribe(data=>{ this.estEditable = data; console.log(data)});
		this.produitServ.getListeProduit().subscribe((data:IListeProduit)=>{this.produit = data.data});
	}
	
	verifValide():boolean{
		let bValide = false;
		if(this.prixLimite > 0 ){
			bValide = true;
		}
		return bValide;
	}
	
	valideConnecter(){
		//if(this.editionServ.getConnecte())

		if(this.editionServ.connecte == false && this.estEditable == true){
			this.estEditable = false;
		}
	}

}
