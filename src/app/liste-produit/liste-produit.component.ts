import { Component, OnInit } from '@angular/core';
import { EditionService } from '../edition.service';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.scss']
})
export class ListeProduitComponent implements OnInit {

	nom:string = "toto le magicien";
	note:number = 16;

	produit:Array<any>;

	prixLimite:number;

	estEditable:boolean = false;

	constructor(private editionServ:EditionService) {
		console.log("constructeur");
	}

	ngOnInit(): void {		
		this.produit = [...Array(10)].map(
			(item, index)=>({"id": index, "nom" : ("item "+ index), "prix": index*index})
			);
		console.log(this.produit);
		this.editionServ.getEditable().subscribe(data=>{ this.estEditable = data; console.log(data)});
	}
	
	verifValide():boolean{
		let bValide = false;
		if(this.prixLimite > 0 ){
			bValide = true;
		}
		return bValide;
	}
	
}
