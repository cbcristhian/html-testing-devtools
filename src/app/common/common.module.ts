import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [RouterModule],
  exports: [NavbarComponent, FooterComponent],
})
export class CommonModule {}
