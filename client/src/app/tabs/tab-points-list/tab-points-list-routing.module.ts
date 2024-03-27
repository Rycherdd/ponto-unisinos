import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabPointsListPage } from './tab-points-list.page';

const routes: Routes = [
  {
    path: '',
    component: TabPointsListPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabPointsListModule {}
