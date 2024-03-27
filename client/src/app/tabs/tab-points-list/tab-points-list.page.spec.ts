import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabPointsListPage } from './tab-points-list.page';

describe('Tab1Page', () => {
  let component: TabPointsListPage;
  let fixture: ComponentFixture<TabPointsListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabPointsListPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabPointsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
