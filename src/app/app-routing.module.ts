import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GardienAuthGuard } from './auth/gardien-auth.guard';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { NonTrouveComponent } from './non-trouve/non-trouve.component';


const routes: Routes = [
  {path:"", component:AccueilComponent},
  {path:"produit", component:ListeProduitComponent, canActivate:[GardienAuthGuard]},
  {path:"produit/:id", component:DetailProduitComponent, canActivate:[GardienAuthGuard]},
  {path:"liste", redirectTo:"/produit"},
  {path:"**", component:NonTrouveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
