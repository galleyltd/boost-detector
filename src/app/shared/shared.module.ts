import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './modules/material.module';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';

@NgModule({
    declarations: [
        AppHeaderComponent,
        HomePageComponent,
        Error404PageComponent
    ],
    imports: [
        LayoutModule,
        MaterialModule,
        CommonModule
    ],
    exports: [
        AppHeaderComponent,
        HomePageComponent,
        Error404PageComponent,

        LayoutModule,
        MaterialModule,
        CommonModule
    ]
})

export class SharedModule { }
