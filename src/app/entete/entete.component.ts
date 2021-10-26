import { Component, OnInit } from '@angular/core';
import { EditionService } from '../services/edition.service';


@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.scss']
})
export class EnteteComponent implements OnInit {
  estEditable:boolean;
  estConnecte:boolean;

  constructor(private editionServ:EditionService) { }

  ngOnInit(): void {
    //this.editionServ.getEditable().subscribe(data=>console.log(data));
    this.estConnecte = this.editionServ.connecte;
  }

  changeEditable():void{
      //this.editionServ.setEditable(this.estEditable);
  }

  changeConnecte():void{
    this.editionServ.setConnecte(this.estConnecte); // La méthode
    //this.editionServ.connecte = this.estEditable;   // Le setter
  }
}
