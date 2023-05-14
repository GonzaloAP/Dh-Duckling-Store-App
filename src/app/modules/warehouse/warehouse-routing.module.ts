import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DucklingContainerComponent} from './components/duckling-container/duckling-container.component';

const routes: Routes = [
  {
    path: 'patitos',
    component: DucklingContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule {
}
