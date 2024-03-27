import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabPointsHistoryPage } from './tab-points-history.page';

const routes: Routes = [
  {
    path: '',
    component: TabPointsHistoryPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabPointsHistoryModule {}
