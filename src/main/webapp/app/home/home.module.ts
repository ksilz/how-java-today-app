import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HowJavaTodayAppSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [HowJavaTodayAppSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class HowJavaTodayAppHomeModule {}
