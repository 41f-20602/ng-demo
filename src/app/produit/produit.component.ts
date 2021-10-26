import { Component, Input, OnInit } from '@angular/core';
import { IProduit } from '../i-produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  @Input() produit:IProduit;
  @Input() prixMax:number = 16;
  @Input() editable:boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

  verifAubaine(prix:number):boolean{
		return (prix < this.prixMax ? true : false );
	}	
}
