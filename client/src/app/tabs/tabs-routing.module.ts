import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'points',
        loadChildren: () =>
          import('./tab-points-list/tab-points-list.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'points-history',
        loadChildren: () =>
          import('./tab-points-history/tab-points-history.module').then((m) => m.Tab2PageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/points',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/points',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {
}
