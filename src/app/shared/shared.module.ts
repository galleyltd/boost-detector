import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './modules/material.module';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
    declarations: [
        AppHeaderComponent,
        HomePageComponent,
    ],
    imports: [
        LayoutModule,
        MaterialModule,
        CommonModule
    ],
    exports: [
        AppHeaderComponent,
        HomePageComponent,

        LayoutModule,
        MaterialModule,
        CommonModule
    ]
})

export class SharedModule { }
