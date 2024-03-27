import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabPointsListPage } from './tab-points-list.page';

import { TabPointsListModule } from './tab-points-list-routing.module';
import { PointListComponent } from '../../point-list/point-list.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, TabPointsListModule],
  declarations: [TabPointsListPage, PointListComponent],
})
export class Tab1PageModule {}
