import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/Inicio',
    pathMatch: 'full'
  },
  {
    path: 'pages/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'via-cep',
    loadChildren: () => import('./pages/via-cep/via-cep.module').then( m => m.ViaCepPageModule)
  },  {
    path: 'consulta-nome-ibge',
    loadChildren: () => import('./pages/consulta-nome-ibge/consulta-nome-ibge.module').then( m => m.ConsultaNomeIBGEPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
