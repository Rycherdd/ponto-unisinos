import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabPointsHistoryPage } from './tab-points-history.page';

import { TabPointsHistoryModule } from './tab-points-history-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, TabPointsHistoryModule],
  declarations: [TabPointsHistoryPage],
})
export class Tab2PageModule {}
