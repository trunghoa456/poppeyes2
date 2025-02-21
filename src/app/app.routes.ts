import { Routes } from '@angular/router';
import {PromotionComponent} from './component/pages/promotion/promotion.component';
import {ProductComponent} from './component/pages/product/product.component';
import {StoreComponent} from './component/pages/store/store.component';
import {TrackingComponent} from './component/pages/tracking/tracking.component';
import {BookPartyComponent} from './component/pages/book-party/book-party.component';

export const routes: Routes = [{
  path: 'promotion',
  component: PromotionComponent,
},{
  path: 'product',
  component: ProductComponent,
},{
  path: 'store',
  component: StoreComponent,
},{
  path: 'tracking',
  component: TrackingComponent,
},{
  path: 'book-party',
  component: BookPartyComponent,
}
];
