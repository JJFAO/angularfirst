import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SliderComponent } from './slider/slider.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoComponent } from './photo/photo.component';

const Routes = [
  { path: '', component: SliderComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'photo/:id', component: PhotosComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SliderComponent,
    PhotosComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
