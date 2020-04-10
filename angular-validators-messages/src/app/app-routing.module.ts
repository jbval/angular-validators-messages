import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RightComponent } from './validators/right/right.component';
import { BottomComponent } from './validators/bottom/bottom.component';

const routes: Routes = [
  {
    path: 'rightValidator',
    component: RightComponent,
  },
  {
    path: 'bottomValidator',
    component: BottomComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
