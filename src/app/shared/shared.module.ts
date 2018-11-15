import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './modules/material.module';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlayerSearchComponent } from './components/player-search/player-search.component';

@NgModule({
    declarations: [
        AppHeaderComponent,
        PlayerSearchComponent,
        HomePageComponent,
    ],
    imports: [
        LayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule
    ],
    exports: [
        AppHeaderComponent,
        PlayerSearchComponent,
        HomePageComponent,

        LayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class SharedModule { }
