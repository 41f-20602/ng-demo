import { Component, OnInit } from '@angular/core';
import { EditionService } from '../edition.service';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.scss']
})
export class EnteteComponent implements OnInit {
  estEditable:boolean;

  constructor(private editionServ:EditionService) { }

  ngOnInit(): void {
    this.editionServ.getEditable().subscribe(data=>console.log(data));
  }

  changeEditable(){
      this.editionServ.setEditable(this.estEditable);
  }
}
