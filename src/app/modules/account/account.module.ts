import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { AccountRoutingModule } from "./account-routing.module";
import { AccountDetailPageComponent } from "./account-detail-page/account-detail-page.component";

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        AccountRoutingModule
    ],
    declarations: [
        AccountDetailPageComponent
    ]
})

export class AccountModule { }