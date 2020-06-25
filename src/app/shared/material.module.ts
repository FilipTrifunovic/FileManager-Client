import { NgModule } from "@angular/core";
// import {  
//          MatDatepickerModule,MatNativeDateModule, MatCheckboxModule,,MatMenuModule,
//          ,MatBadgeModule,MatSelectModule,MatSnackBarModule,MatTableModule,MatSortModule } from '@angular/material/';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatNativeDateModule } from '@angular/material/core';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        // MatCheckboxModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatCardModule,
        MatBadgeModule,
        MatProgressBarModule,
        MatDialogModule,
        MatSelectModule,
        // MatSnackBarModule,
        MatTableModule,
        MatSnackBarModule
        // MatSortModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        // MatCheckboxModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatCardModule,
        MatBadgeModule,
        MatProgressBarModule,
        MatDialogModule,
        MatTableModule,
        MatSnackBarModule,
        MatSelectModule,
        // MatSnackBarModule,
        // MatTableModule,
        // MatSortModule
    ]
})
export class MaterialModuel { }