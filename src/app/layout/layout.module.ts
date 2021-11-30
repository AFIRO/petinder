import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LayoutComponent} from './layout/layout.component';
import {RouterModule} from "@angular/router";
import {AddPetComponentComponent} from './profile-gallery/add-pet/add-pet-component.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    AddPetComponentComponent

  ],
  exports: [
    LayoutComponent,
    AddPetComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule {

}
