import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverPageComponent } from './components/cover-page/cover-page.component';

const routes: Routes = [
  {path: '', component: CoverPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
