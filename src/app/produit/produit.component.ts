import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  @Input() produit:any;
  @Input() prixMax:number = 16;
  
  constructor() { }

  ngOnInit(): void {
  }

  verifAubaine(prix:number):boolean{
		return (prix < this.prixMax ? true : false );
	}	
}
