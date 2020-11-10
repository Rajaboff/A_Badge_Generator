import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BadgeTileComponent } from './badge-tile/badge-tile.component';
import { BadgeTypeSelectComponent } from './badge-tile/badge-type-select/badge-type-select.component';
import { BadgeExportComponent } from './badge-tile/badge-export/badge-export.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BadgeTileComponent,
    BadgeTypeSelectComponent,
    BadgeExportComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
