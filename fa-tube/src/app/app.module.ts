import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, OrderDialog, SettingsDialog, VideoDialog } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SafePipe } from './pipes/safe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { YoutubeService } from './youtube.service';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    OrderDialog,
    SettingsDialog,
    VideoDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule ,
    MatDialogModule,
    MatPaginatorModule,
    MatIconModule,
    MatDatepickerModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
