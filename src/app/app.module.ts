import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { EnteteComponent } from './entete/entete.component';
import { NonTrouveComponent } from './non-trouve/non-trouve.component';
import { ProduitComponent } from './produit/produit.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListeProduitComponent,
    DetailProduitComponent,
    EnteteComponent,
    NonTrouveComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
