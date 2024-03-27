import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabPointsHistoryPage } from './tab-points-history.page';

describe('Tab2Page', () => {
  let component: TabPointsHistoryPage;
  let fixture: ComponentFixture<TabPointsHistoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabPointsHistoryPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabPointsHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
