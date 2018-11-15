import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountDetailPageComponent } from "./account-detail-page/account-detail-page.component";

const accountRoutes: Routes = [
    { path: ':id', component: AccountDetailPageComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(accountRoutes)
    ]
})


export class AccountRoutingModule { }