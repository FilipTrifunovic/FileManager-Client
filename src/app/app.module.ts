import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModuel } from './shared/material.module';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';
import { UIService } from './shared/ui.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxFileDropModule } from 'ngx-file-drop';
import { UploadComponent } from './upload/upload.component';
import { WordsComponent } from './words/words.component';
import { WordsTableComponent } from './words-table/words-table.component';
import { WordsModalComponent } from './words-table/words-modal/words-modal.component';
import { UploadService } from './upload/upload.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    SidenavListComponent,
    HeaderComponent,
    UploadComponent,
    WordsComponent,
    WordsTableComponent,
    WordsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModuel,
    HttpClientModule,
    NgxFileDropModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    WordsModalComponent
  ],
  providers: [UIService,UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
