import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.scss']
})
export class ListeProduitComponent implements OnInit {

	nom:string = "toto le magicien";
	note:number = 16;

	produit:Array<any>;

	constructor() {
		console.log("constructeur");
	}

	ngOnInit(): void {		
		this.produit = [...Array(10)].map(
			(item, index)=>({"id": index, "nom" : ("item "+ index), "prix": index*index})
			);
		console.log(this.produit);
	}

	
}
