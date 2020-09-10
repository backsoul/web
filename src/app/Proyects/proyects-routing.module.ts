import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectsComponent } from './components/proyects.component';
const routes: Routes = [
  {
    path: '',
    component: ProyectsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectsRoutingModule {}
